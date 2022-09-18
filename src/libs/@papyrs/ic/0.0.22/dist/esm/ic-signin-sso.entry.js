import { r as registerInstance, a as createEvent, h } from './index-89ae1430.js';
import { E as Ed25519KeyIdentity, A as AuthClient, a as Delegation, D as DelegationChain, b as DelegationIdentity, c as createStore, e as setMany } from './compat-2f0363f0.js';
import './actor-bbf3ae7b.js';

const IcSigninProxy = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.signInError = createEvent(this, "signInError", 7);
    this.ed25519Key = undefined;
  }
  async onMessage({ data, origin }) {
    const { kind } = data !== null && data !== void 0 ? data : {};
    if (!kind) {
      return;
    }
    // We consider only the messages that are sent from the sign-in proxy url
    if (!this.signInOrigin(origin)) {
      return;
    }
    switch (kind) {
      case 'papyrs-signin-ready':
        this.onSignInReady(origin);
        return;
      case 'papyrs-signin-success':
        await this.onSignInSuccess(data);
        return;
      case 'papyrs-signin-error':
        this.onSignInError(data);
    }
  }
  signInOrigin(origin) {
    const { origin: expectedOrigin } = new URL(this.signInProxyUrl);
    return expectedOrigin === origin;
  }
  onSignInReady(origin) {
    this.ed25519Key = Ed25519KeyIdentity.generate();
    this.ref.contentWindow.postMessage({
      kind: 'papyrs-signin-init',
      key: this.ed25519Key.getPublicKey().toDer()
    }, origin);
  }
  onSignInError({ text }) {
    this.error(text);
  }
  async onSignInSuccess(message) {
    if (!this.ed25519Key) {
      this.error('No Ed25519Key key to decode the identity of the delegation.');
      return;
    }
    const { delegation } = this.decode(message);
    await this.saveToIdb(delegation);
    // TODO: remove - just for test
    const authClient = await AuthClient.create();
    console.log('Is signed in?', await authClient.isAuthenticated());
  }
  decode({ delegations: messageDelegations, userPublicKey }) {
    const delegations = messageDelegations.map((signedDelegation) => ({
      delegation: new Delegation(signedDelegation.delegation.pubkey, signedDelegation.delegation.expiration, signedDelegation.delegation.targets),
      signature: signedDelegation.signature.buffer
    }));
    const delegation = DelegationChain.fromDelegations(delegations, userPublicKey.buffer);
    const identity = DelegationIdentity.fromDelegation(this.ed25519Key, delegation);
    return { delegation, identity };
  }
  async saveToIdb(delegation) {
    const customStore = createStore('auth-client-db', 'ic-keyval');
    const bigintStringify = (_key, value) => typeof value === 'bigint' ? `BIGINT::${value}` : value;
    await setMany([
      ['identity', JSON.stringify(this.ed25519Key, bigintStringify)],
      ['delegation', JSON.stringify(delegation.toJSON(), bigintStringify)]
    ], customStore);
  }
  error(text) {
    this.signInError.emit(text);
  }
  render() {
    return (h("object", { type: 'text/html', data: this.signInProxyUrl, part: "object", ref: (el) => (this.ref = el) }));
  }
};

export { IcSigninProxy as ic_signin_sso };
