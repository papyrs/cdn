import { r as registerInstance, h } from './index-ec2f5921.js';
import { A as AnonymousIdentity } from './actor-da64ce67.js';
import { E as EnvStore, j as internetIdentityMainnet, c as createManagerActor, h as delegationIdentityExpiration } from './auth.constants-795d1603.js';

const IcSigninProxy = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.trustedOrigin = undefined;
    this.closeTabInterval = undefined;
    this.onSignIn = () => {
      this.tab = window.open(this.identityProviderUrl.toString(), 'idpWindow');
      this.observeCloseTab();
    };
    this.i18n = undefined;
    this.config = undefined;
    this.publicKey = undefined;
    this.identityProviderUrl = undefined;
    this.derivationOrigin = undefined;
    this.signInInProgress = false;
    this.parentOrigin = undefined;
  }
  componentWillLoad() {
    const { derivationOrigin, managerCanisterId, localIdentityCanisterId } = this.config;
    this.derivationOrigin = derivationOrigin;
    // We set only what we need in this use case
    EnvStore.getInstance().set({ managerCanisterId, localIdentityCanisterId });
    this.identityProviderUrl = new URL(EnvStore.getInstance().get().localIdentityCanisterId !== undefined
      ? `http://${EnvStore.getInstance().get().localIdentityCanisterId}.localhost:8000`
      : internetIdentityMainnet);
    this.identityProviderUrl.hash = '#authorize';
  }
  componentDidLoad() {
    // We broadcast the message because there is no caller yet. This is safe since it does not include any data exchange.
    parent.postMessage({ kind: 'papyrs-signin-ready' }, '*');
  }
  disconnectedCallback() {
    this.clearCloseTabInterval();
  }
  async onMessage({ data, origin }) {
    const { kind } = data !== null && data !== void 0 ? data : {};
    if (!kind) {
      return;
    }
    // The initialization of the validity of the origin must come first (we do not want to perform an update cal to the manager on each message)
    if (kind === 'papyrs-signin-init') {
      await this.assertOriginSSO(origin);
    }
    else {
      this.assertOriginTrusted();
      this.assertOriginII(origin);
    }
    switch (kind) {
      case 'papyrs-signin-init':
        this.onPapyrsInit({ origin, data: data });
        return;
      case 'authorize-ready':
        this.onInternetIdentityReady();
        return;
      case 'authorize-client-failure':
        this.onInternetIdentityFailure(data);
        return;
      case 'authorize-client-success':
        this.onInternetIdentitySuccess(data);
        return;
    }
  }
  assertOriginTrusted() {
    if (this.trustedOrigin === false) {
      throw new Error('Previous calls were emitted from a not trusted origin and therefore this service shall not be used.');
    }
    if (this.trustedOrigin === undefined) {
      throw new Error('The origin has not been initialized and therefore we cannot tell if this message can be trusted or not.');
    }
  }
  assertOriginII(origin) {
    const { origin: expectedOriginII } = new URL(this.identityProviderUrl);
    if (expectedOriginII !== origin) {
      throw new Error('An authentication message was not provided by Internet Identity!');
    }
  }
  /**
   * ⚠️ Validate origin of caller that initialized the SSO ⚠️
   * @param origin
   * @private
   */
  async assertOriginSSO(origin) {
    // We test host and not hostname because doing so, we also test the origin with port
    const { host: originHost } = new URL(origin);
    // We trust papy.rs - our own domain
    if (originHost.endsWith('papy.rs')) {
      this.trustedOrigin = true;
      return;
    }
    const canisterId = originHost.split('.')[0];
    const regExp = /([a-zA-Z0-9]{5}-){4}[a-zA-Z0-9]{3}/;
    if (!regExp.test(canisterId)) {
      this.trustedOrigin = false;
      throw new Error(`Origin (${origin}) of the message is not a canister and therefore, shall not use this signin.`);
    }
    const identity = new AnonymousIdentity();
    const managerActor = await createManagerActor({ identity });
    this.trustedOrigin = await managerActor.knownBucket(canisterId, 'storage');
    if (this.trustedOrigin !== true) {
      throw new Error(`Caller origin (${origin}) is not a valid Papyrs origin and has no right to use this signin.`);
    }
  }
  onPapyrsInit({ origin, data: { key } }) {
    this.parentOrigin = origin;
    this.publicKey = key;
  }
  /**
   * Once Internet Identity has started, set the origin and the delegation duration (session length).
   * @private
   */
  onInternetIdentityReady() {
    if (!this.tab || this.signInState() !== 'ready') {
      this.throwError('Authentication not ready.');
      return;
    }
    this.signInInProgress = true;
    const request = Object.assign({ kind: 'authorize-client', sessionPublicKey: new Uint8Array(this.publicKey), maxTimeToLive: delegationIdentityExpiration }, (this.derivationOrigin !== undefined && { derivationOrigin: this.derivationOrigin }));
    const { origin } = this.identityProviderUrl;
    this.tab.postMessage(request, origin);
  }
  /**
   * The sign-in failed in internet identity
   * @private
   */
  onInternetIdentityFailure({ text }) {
    var _a;
    (_a = this.tab) === null || _a === void 0 ? void 0 : _a.close();
    this.throwError(text);
    this.cleanUp();
  }
  throwError(text) {
    this.parentPostMessage({
      kind: 'papyrs-signin-error',
      text
    });
    this.signInInProgress = false;
  }
  parentPostMessage(msg) {
    if (!this.parentOrigin) {
      console.error('No parent origin');
      this.signInInProgress = false;
      return;
    }
    parent.postMessage(msg, this.parentOrigin);
  }
  onInternetIdentitySuccess({ delegations, userPublicKey }) {
    var _a;
    this.clearCloseTabInterval();
    this.parentPostMessage({
      kind: 'papyrs-signin-success',
      delegations,
      userPublicKey
    });
    (_a = this.tab) === null || _a === void 0 ? void 0 : _a.close();
    this.signInInProgress = false;
    this.cleanUp();
  }
  cleanUp() {
    this.trustedOrigin = undefined;
    this.publicKey = undefined;
  }
  observeCloseTab() {
    this.closeTabInterval = setInterval(() => {
      var _a;
      if (!((_a = this.tab) === null || _a === void 0 ? void 0 : _a.closed)) {
        return;
      }
      this.clearCloseTabInterval();
      this.throwError('User interrupted sign in.');
    }, 500);
  }
  clearCloseTabInterval() {
    clearInterval(this.closeTabInterval);
  }
  signInState() {
    if (this.publicKey === undefined ||
      this.parentOrigin === undefined ||
      this.identityProviderUrl === undefined) {
      return 'initializing';
    }
    return this.signInInProgress ? 'in-progress' : 'ready';
  }
  render() {
    return (h("ic-signin", { i18n: this.i18n, config: this.config, externalSignInState: this.signInState(), signIn: this.onSignIn }, h("div", { slot: "spinner" }, h("slot", { name: "spinner" }))));
  }
};

export { IcSigninProxy as ic_signin_proxy };
