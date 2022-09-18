import { E as EnvStore, e as delegationIdentityExpiration, h as createManagerActor } from './auth.constants-98dfefd9.js';
import { A as AuthClient, d as del } from './compat-2f0363f0.js';
import { c as consoleError } from './index-89ae1430.js';

var t=e=>{let o=new CustomEvent("ddgLog",{detail:e,bubbles:!0});document.dispatchEvent(o);};

const isInstanceOf = (value, className) => {
  const C = globalThis[className];
  return C != null && value instanceof C;
};
const getTransferables = (value) => {
  if (value != null) {
  if (
    isInstanceOf(value, "ArrayBuffer") ||
    isInstanceOf(value, "MessagePort") ||
    isInstanceOf(value, "ImageBitmap") ||
    isInstanceOf(value, "OffscreenCanvas")
  ) {
    return [value];
  }
  if (typeof value === "object") {
    if (value.constructor === Object) {
    value = Object.values(value);
    }
    if (Array.isArray(value)) {
    return value.flatMap(getTransferables);
    }
    return getTransferables(value.buffer);
  }
  }
  return [];
};

let pendingIds = 0;
let callbackIds = 0;
const pending = new Map();
const callbacks = new Map();

const createWorker = (workerPath, workerName, workerMsgId) => {
  const worker = new Worker(workerPath, {name:workerName});

  worker.addEventListener('message', ({data}) => {
  if (data) {
    const workerMsg = data[0];
    const id = data[1];
    const value = data[2];

    if (workerMsg === workerMsgId) {
    const err = data[3];
    const [resolve, reject, callbackIds] = pending.get(id);
    pending.delete(id);

    if (err) {
      const errObj = (err.isError)
      ? Object.assign(new Error(err.value.message), err.value)
      : err.value;

      consoleError(errObj);
      reject(errObj);
    } else {
      if (callbackIds) {
      callbackIds.forEach(id => callbacks.delete(id));
      }
      resolve(value);
    }
    } else if (workerMsg === workerMsgId + '.cb') {
    try {
      callbacks.get(id)(...value);
    } catch (e) {
      consoleError(e);
    }
    }
  }
  });

  return worker;
};

const createWorkerProxy = (worker, workerMsgId, exportedMethod) => (
  (...args) => new Promise((resolve, reject) => {
  let pendingId = pendingIds++;
  let i = 0;
  let argLen = args.length;
  let mainData = [resolve, reject];
  pending.set(pendingId, mainData);

  for (; i < argLen; i++) {
    if (typeof args[i] === 'function') {
    const callbackId = callbackIds++;
    callbacks.set(callbackId, args[i]);
    args[i] = [workerMsgId + '.cb', callbackId];
    (mainData[2] = mainData[2] || []).push(callbackId);
    }
  }
  const postMessage = (w) => (
    w.postMessage(
    [workerMsgId, pendingId, exportedMethod, args],
    getTransferables(args)
    )
  );
  if (worker.then) {
    worker.then(postMessage);
  } else {
    postMessage(worker);
  }
  })
);

const workerPromise$1 = import('./idle.ic.worker-50d9edc4.js').then(m => m.worker);
const startIdleTime = /*@__PURE__*/createWorkerProxy(workerPromise$1, 'stencil.idle.ic.worker', 'startIdleTime');
const stopIdleTimer = /*@__PURE__*/createWorkerProxy(workerPromise$1, 'stencil.idle.ic.worker', 'stopIdleTimer');

const workerPromise = import('./user.ic.worker-01a0c124.js').then(m => m.worker);
const initUserWorker = /*@__PURE__*/createWorkerProxy(workerPromise, 'stencil.user.ic.worker', 'initUserWorker');

let authClient;
const createAuthClient = () => AuthClient.create({
  idleOptions: {
    disableIdle: true,
    disableDefaultIdleCallback: true
  }
});
const initAuth = async ({ config, success }) => {
  EnvStore.getInstance().set(config);
  authClient = await createAuthClient();
  const isAuthenticated = (await (authClient === null || authClient === void 0 ? void 0 : authClient.isAuthenticated())) || false;
  if (!isAuthenticated) {
    return;
  }
  await initUser({ success });
  const onInitUserSuccess = async (user) => await authenticatedUser({ user, success });
  await initUserWorker({ env: EnvStore.getInstance().get() }, onInitUserSuccess, t);
  const onSignOut = () => {
    const $event = new CustomEvent('ddgSignOut', {
      bubbles: true
    });
    document.dispatchEvent($event);
  };
  await startIdleTime(onSignOut);
};
// If first sign-in, initializing the canister can take a while therefore we already emit a not fully authenticated user
const initUser = async ({ success }) => {
  const authUser = {
    state: 'initialization'
  };
  await success({ authUser, user: undefined });
};
const authenticatedUser = async ({ user, success }) => {
  const { id, data } = user;
  const { name, email, photo_url } = data;
  const authUser = {
    uid: id,
    state: 'authenticated',
    name,
    email,
    photo_url
  };
  await success({ authUser, user });
};
const signOut = async () => {
  await stopIdleTimer();
  await (authClient === null || authClient === void 0 ? void 0 : authClient.logout());
  // Reset local object otherwise next sign in (sign in - sign out - sign in) might not work out - i.e. agent-js might not recreate the delegation or identity if not resetted
  authClient = undefined;
  // Just in case the user has been wrongly saved locally - this can be deleted in a bit
  await del('/user');
};
const signIn = async ({ onSuccess, onError }) => {
  authClient = authClient || (await createAuthClient());
  await authClient.login(Object.assign({ onSuccess,
    onError, maxTimeToLive: delegationIdentityExpiration }, (EnvStore.getInstance().localIdentity() && {
    identityProvider: `http://${EnvStore.getInstance().get().localIdentityCanisterId}.localhost:8000?#authorize`
  })));
};
const deleteAuth = async (_auth) => {
  const identity = getIdentity();
  if (!identity) {
    throw new Error('Invalid identity.');
  }
  const managerActor = await createManagerActor({ identity });
  await Promise.all([managerActor.delData(), managerActor.delStorage()]);
};
const getIdentity = () => {
  return authClient === null || authClient === void 0 ? void 0 : authClient.getIdentity();
};
const isAuthenticated = () => {
  return authClient === null || authClient === void 0 ? void 0 : authClient.isAuthenticated();
};

export { initAuth as a, signIn as b, createWorkerProxy as c, deleteAuth as d, createWorker as e, getIdentity as g, isAuthenticated as i, signOut as s, t };
