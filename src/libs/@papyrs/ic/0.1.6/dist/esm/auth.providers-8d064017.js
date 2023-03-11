import { E as EnvStore, e as delegationIdentityExpiration, h as createManagerActor } from './auth.constants-1b8a7422.js';
import { S as SignIdentity, g as global, A as AnonymousIdentity } from './actor-56e8d250.js';
import { E as Ed25519KeyIdentity, D as DelegationChain, i as isDelegationValid, b as DelegationIdentity, d as Delegation, e as del } from './compat-029eb582.js';
import { c as consoleError } from './index-ec2f5921.js';

var t=e=>{let o=new CustomEvent("ddgLog",{detail:e,bubbles:!0});document.dispatchEvent(o);};

class CryptoError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        Object.setPrototypeOf(this, CryptoError.prototype);
    }
}
/**
 * Utility method to ensure that a subtleCrypto implementation is provided or is available in the global context
 * @param subtleCrypto SubtleCrypto implementation
 * @returns subleCrypto
 */
function _getEffectiveCrypto(subtleCrypto) {
    if (subtleCrypto) {
        return subtleCrypto;
    }
    else if (typeof crypto !== 'undefined' && crypto['subtle']) {
        return crypto.subtle;
    }
    else {
        throw new CryptoError('Global crypto was not available and none was provided. Please inlcude a SubtleCrypto implementation. See https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto');
    }
}
/**
 * An identity interface that wraps an ECDSA keypair using the P-256 named curve. Supports DER-encoding and decoding for agent calls
 */
class ECDSAKeyIdentity extends SignIdentity {
    // `fromKeyPair` and `generate` should be used for instantiation, not this constructor.
    constructor(keyPair, derKey, subtleCrypto) {
        super();
        this._keyPair = keyPair;
        this._derKey = derKey;
        this._subtleCrypto = subtleCrypto;
    }
    /**
     * Generates a randomly generated identity for use in calls to the Internet Computer.
     * @param {CryptoKeyOptions} options optional settings
     * @param {CryptoKeyOptions['extractable']} options.extractable - whether the key should allow itself to be used. Set to false for maximum security.
     * @param {CryptoKeyOptions['keyUsages']} options.keyUsages - a list of key usages that the key can be used for
     * @param {CryptoKeyOptions['subtleCrypto']} options.subtleCrypto interface
     * @constructs ECDSAKeyIdentity
     * @returns a {@link ECDSAKeyIdentity}
     */
    static async generate(options) {
        const { extractable = false, keyUsages = ['sign', 'verify'], subtleCrypto } = options !== null && options !== void 0 ? options : {};
        const effectiveCrypto = _getEffectiveCrypto(subtleCrypto);
        const keyPair = await effectiveCrypto.generateKey({
            name: 'ECDSA',
            namedCurve: 'P-256',
        }, extractable, keyUsages);
        const derKey = (await effectiveCrypto.exportKey('spki', keyPair.publicKey));
        return new this(keyPair, derKey, effectiveCrypto);
    }
    /**
     * generates an identity from a public and private key. Please ensure that you are generating these keys securely and protect the user's private key
     * @param keyPair a {@link CryptoKeyPair}
     * @param subtleCrypto a {@link SubtleCrypto} interface in case one is not available globally
     * @returns an {@link ECDSAKeyIdentity}
     */
    static async fromKeyPair(keyPair, subtleCrypto) {
        const effectiveCrypto = _getEffectiveCrypto(subtleCrypto);
        const derKey = (await effectiveCrypto.exportKey('spki', keyPair.publicKey));
        return new ECDSAKeyIdentity(keyPair, derKey, effectiveCrypto);
    }
    /**
     * Return the internally-used key pair.
     * @returns a {@link CryptoKeyPair}
     */
    getKeyPair() {
        return this._keyPair;
    }
    /**
     * Return the public key.
     * @returns an {@link DerCryptoKey}
     */
    getPublicKey() {
        const derKey = this._derKey;
        const key = Object.create(this._keyPair.publicKey);
        key.toDer = function () {
            return derKey;
        };
        return key;
    }
    /**
     * Signs a blob of data, with this identity's private key.
     * @param {ArrayBuffer} challenge - challenge to sign with this identity's secretKey, producing a signature
     * @returns {Promise<Signature>} signature
     */
    async sign(challenge) {
        const params = {
            name: 'ECDSA',
            hash: { name: 'SHA-256' },
        };
        const signature = await this._subtleCrypto.sign(params, this._keyPair.privateKey, challenge);
        return signature;
    }
}

const events = ['mousedown', 'mousemove', 'keydown', 'touchstart', 'wheel'];
/**
 * Detects if the user has been idle for a duration of `idleTimeout` ms, and calls `onIdle` and registered callbacks.
 * By default, the IdleManager will log a user out after 10 minutes of inactivity.
 * To override these defaults, you can pass an `onIdle` callback, or configure a custom `idleTimeout` in milliseconds
 */
class IdleManager {
    /**
     * @protected
     * @param options {@link IdleManagerOptions}
     */
    constructor(options = {}) {
        var _a;
        this.callbacks = [];
        this.idleTimeout = 10 * 60 * 1000;
        this.timeoutID = undefined;
        const { onIdle, idleTimeout = 10 * 60 * 1000 } = options || {};
        this.callbacks = onIdle ? [onIdle] : [];
        this.idleTimeout = idleTimeout;
        const _resetTimer = this._resetTimer.bind(this);
        window.addEventListener('load', _resetTimer, true);
        events.forEach(function (name) {
            document.addEventListener(name, _resetTimer, true);
        });
        // eslint-disable-next-line @typescript-eslint/ban-types
        const debounce = (func, wait) => {
            let timeout;
            return (...args) => {
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                const context = this;
                const later = function () {
                    timeout = undefined;
                    func.apply(context, args);
                };
                clearTimeout(timeout);
                timeout = window.setTimeout(later, wait);
            };
        };
        if (options === null || options === void 0 ? void 0 : options.captureScroll) {
            // debounce scroll events
            const scroll = debounce(_resetTimer, (_a = options === null || options === void 0 ? void 0 : options.scrollDebounce) !== null && _a !== void 0 ? _a : 100);
            window.addEventListener('scroll', scroll, true);
        }
        _resetTimer();
    }
    /**
     * Creates an {@link IdleManager}
     * @param {IdleManagerOptions} options Optional configuration
     * @see {@link IdleManagerOptions}
     * @param options.onIdle Callback once user has been idle. Use to prompt for fresh login, and use `Actor.agentOf(your_actor).invalidateIdentity()` to protect the user
     * @param options.idleTimeout timeout in ms
     * @param options.captureScroll capture scroll events
     * @param options.scrollDebounce scroll debounce time in ms
     */
    static create(options = {}) {
        return new this(options);
    }
    /**
     * @param {IdleCB} callback function to be called when user goes idle
     */
    registerCallback(callback) {
        this.callbacks.push(callback);
    }
    /**
     * Cleans up the idle manager and its listeners
     */
    exit() {
        clearTimeout(this.timeoutID);
        window.removeEventListener('load', this._resetTimer, true);
        const _resetTimer = this._resetTimer.bind(this);
        events.forEach(function (name) {
            document.removeEventListener(name, _resetTimer, true);
        });
        this.callbacks.forEach(cb => cb());
    }
    /**
     * Resets the timeouts during cleanup
     */
    _resetTimer() {
        const exit = this.exit.bind(this);
        window.clearTimeout(this.timeoutID);
        this.timeoutID = window.setTimeout(exit, this.idleTimeout);
    }
}

const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);

/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event.newVersion, event));
    }
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));
        }
    })
        .catch(() => { });
    return openPromise;
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));

const AUTH_DB_NAME = 'auth-client-db';
const OBJECT_STORE_NAME = 'ic-keyval';
const _openDbStore = async (dbName = AUTH_DB_NAME, storeName = OBJECT_STORE_NAME, version) => {
    // Clear legacy stored delegations
    if (isBrowser && (localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(KEY_STORAGE_DELEGATION))) {
        localStorage.removeItem(KEY_STORAGE_DELEGATION);
        localStorage.removeItem(KEY_STORAGE_KEY);
    }
    return await openDB(dbName, version, {
        upgrade: database => {
            if (database.objectStoreNames.contains(storeName)) {
                database.clear(storeName);
            }
            database.createObjectStore(storeName);
        },
    });
};
async function _getValue(db, storeName, key) {
    return await db.get(storeName, key);
}
async function _setValue(db, storeName, key, value) {
    return await db.put(storeName, value, key);
}
async function _removeValue(db, storeName, key) {
    return await db.delete(storeName, key);
}
/**
 * Simple Key Value store
 * Defaults to `'auth-client-db'` with an object store of `'ic-keyval'`
 */
class IdbKeyVal {
    // Do not use - instead prefer create
    constructor(_db, _storeName) {
        this._db = _db;
        this._storeName = _storeName;
    }
    /**
     *
     * @param {DBCreateOptions} options {@link DbCreateOptions}
     * @param {DBCreateOptions['dbName']} options.dbName name for the indexeddb database
     * @default 'auth-client-db'
     * @param {DBCreateOptions['storeName']} options.storeName name for the indexeddb Data Store
     * @default 'ic-keyval'
     * @param {DBCreateOptions['version']} options.version version of the database. Increment to safely upgrade
     * @constructs an {@link IdbKeyVal}
     */
    static async create(options) {
        const { dbName = AUTH_DB_NAME, storeName = OBJECT_STORE_NAME, version = 1 } = options !== null && options !== void 0 ? options : {};
        const db = await _openDbStore(dbName, storeName, version);
        return new IdbKeyVal(db, storeName);
    }
    /**
     * Basic setter
     * @param {IDBValidKey} key string | number | Date | BufferSource | IDBValidKey[]
     * @param value value to set
     * @returns void
     */
    async set(key, value) {
        return await _setValue(this._db, this._storeName, key, value);
    }
    /**
     * Basic getter
     * Pass in a type T for type safety if you know the type the value will have if it is found
     * @param {IDBValidKey} key string | number | Date | BufferSource | IDBValidKey[]
     * @returns `Promise<T | null>`
     * @example
     * await get<string>('exampleKey') -> 'exampleValue'
     */
    async get(key) {
        var _a;
        return (_a = (await _getValue(this._db, this._storeName, key))) !== null && _a !== void 0 ? _a : null;
    }
    /**
     * Remove a key
     * @param key {@link IDBValidKey}
     * @returns void
     */
    async remove(key) {
        return await _removeValue(this._db, this._storeName, key);
    }
}

const KEY_STORAGE_KEY = 'identity';
const KEY_STORAGE_DELEGATION = 'delegation';
const KEY_VECTOR = 'iv';
// Increment if any fields are modified
const DB_VERSION = 1;
const isBrowser = typeof window !== 'undefined';
/**
 * Legacy implementation of AuthClientStorage, for use where IndexedDb is not available
 */
class LocalStorage {
    constructor(prefix = 'ic-', _localStorage) {
        this.prefix = prefix;
        this._localStorage = _localStorage;
    }
    get(key) {
        return Promise.resolve(this._getLocalStorage().getItem(this.prefix + key));
    }
    set(key, value) {
        this._getLocalStorage().setItem(this.prefix + key, value);
        return Promise.resolve();
    }
    remove(key) {
        this._getLocalStorage().removeItem(this.prefix + key);
        return Promise.resolve();
    }
    _getLocalStorage() {
        if (this._localStorage) {
            return this._localStorage;
        }
        const ls = typeof window === 'undefined'
            ? typeof global === 'undefined'
                ? typeof self === 'undefined'
                    ? undefined
                    : self.localStorage
                : global.localStorage
            : window.localStorage;
        if (!ls) {
            throw new Error('Could not find local storage.');
        }
        return ls;
    }
}
/**
 * IdbStorage is an interface for simple storage of string key-value pairs built on {@link IdbKeyVal}
 *
 * It replaces {@link LocalStorage}
 * @see implements {@link AuthClientStorage}
 */
class IdbStorage {
    get _db() {
        return new Promise(resolve => {
            if (this.initializedDb) {
                resolve(this.initializedDb);
                return;
            }
            IdbKeyVal.create({ version: DB_VERSION }).then(db => {
                this.initializedDb = db;
                resolve(db);
            });
        });
    }
    async get(key) {
        const db = await this._db;
        return await db.get(key);
        // return (await db.get<string>(key)) ?? null;
    }
    async set(key, value) {
        const db = await this._db;
        await db.set(key, value);
    }
    async remove(key) {
        const db = await this._db;
        await db.remove(key);
    }
}

/** @module AuthClient */
const IDENTITY_PROVIDER_DEFAULT = 'https://identity.ic0.app';
const IDENTITY_PROVIDER_ENDPOINT = '#authorize';
const ECDSA_KEY_LABEL = 'ECDSA';
const ED25519_KEY_LABEL = 'Ed25519';
const INTERRUPT_CHECK_INTERVAL = 500;
const ERROR_USER_INTERRUPT = 'UserInterrupt';
/**
 * Tool to manage authentication and identity
 * @see {@link AuthClient}
 */
class AuthClient {
    constructor(_identity, _key, _chain, _storage, idleManager, _createOptions, 
    // A handle on the IdP window.
    _idpWindow, 
    // The event handler for processing events from the IdP.
    _eventHandler) {
        var _a;
        this._identity = _identity;
        this._key = _key;
        this._chain = _chain;
        this._storage = _storage;
        this.idleManager = idleManager;
        this._createOptions = _createOptions;
        this._idpWindow = _idpWindow;
        this._eventHandler = _eventHandler;
        const logout = this.logout.bind(this);
        const idleOptions = _createOptions === null || _createOptions === void 0 ? void 0 : _createOptions.idleOptions;
        /**
         * Default behavior is to clear stored identity and reload the page.
         * By either setting the disableDefaultIdleCallback flag or passing in a custom idle callback, we will ignore this config
         */
        if (!(idleOptions === null || idleOptions === void 0 ? void 0 : idleOptions.onIdle) && !(idleOptions === null || idleOptions === void 0 ? void 0 : idleOptions.disableDefaultIdleCallback)) {
            (_a = this.idleManager) === null || _a === void 0 ? void 0 : _a.registerCallback(() => {
                logout();
                location.reload();
            });
        }
    }
    /**
     * Create an AuthClient to manage authentication and identity
     * @constructs {@link AuthClient}
     * @param {AuthClientCreateOptions} options
     * @see {@link AuthClientCreateOptions}
     * @param options.identity Optional Identity to use as the base
     * @see {@link SignIdentity}
     * @param options.storage Storage mechanism for delegration credentials
     * @see {@link AuthClientStorage}
     * @param options.keyType Type of key to use for the base key
     * @param {IdleOptions} options.idleOptions Configures an {@link IdleManager}
     * @see {@link IdleOptions}
     * Default behavior is to clear stored identity and reload the page when a user goes idle, unless you set the disableDefaultIdleCallback flag or pass in a custom idle callback.
     * @example
     * const authClient = await AuthClient.create({
     *   idleOptions: {
     *     disableIdle: true
     *   }
     * })
     */
    static async create(options = {}) {
        var _a, _b, _c;
        const storage = (_a = options.storage) !== null && _a !== void 0 ? _a : new IdbStorage();
        const keyType = (_b = options.keyType) !== null && _b !== void 0 ? _b : ECDSA_KEY_LABEL;
        let key = null;
        if (options.identity) {
            key = options.identity;
        }
        else {
            let maybeIdentityStorage = await storage.get(KEY_STORAGE_KEY);
            if (!maybeIdentityStorage && isBrowser) {
                // Attempt to migrate from localstorage
                try {
                    const fallbackLocalStorage = new LocalStorage();
                    const localChain = await fallbackLocalStorage.get(KEY_STORAGE_DELEGATION);
                    const localKey = await fallbackLocalStorage.get(KEY_STORAGE_KEY);
                    // not relevant for Ed25519
                    if (localChain && localKey && keyType === ECDSA_KEY_LABEL) {
                        console.log('Discovered an identity stored in localstorage. Migrating to IndexedDB');
                        await storage.set(KEY_STORAGE_DELEGATION, localChain);
                        await storage.set(KEY_STORAGE_KEY, localKey);
                        maybeIdentityStorage = localChain;
                        // clean up
                        await fallbackLocalStorage.remove(KEY_STORAGE_DELEGATION);
                        await fallbackLocalStorage.remove(KEY_STORAGE_KEY);
                    }
                }
                catch (error) {
                    console.error('error while attempting to recover localstorage: ' + error);
                }
            }
            if (maybeIdentityStorage) {
                try {
                    if (typeof maybeIdentityStorage === 'object') {
                        if (keyType === ED25519_KEY_LABEL && typeof maybeIdentityStorage === 'string') {
                            key = await Ed25519KeyIdentity.fromJSON(maybeIdentityStorage);
                        }
                        else {
                            key = await ECDSAKeyIdentity.fromKeyPair(maybeIdentityStorage);
                        }
                    }
                    else if (typeof maybeIdentityStorage === 'string') {
                        // This is a legacy identity, which is a serialized Ed25519KeyIdentity.
                        key = Ed25519KeyIdentity.fromJSON(maybeIdentityStorage);
                    }
                }
                catch (e) {
                    // Ignore this, this means that the localStorage value isn't a valid Ed25519KeyIdentity or ECDSAKeyIdentity
                    // serialization.
                }
            }
        }
        let identity = new AnonymousIdentity();
        let chain = null;
        if (key) {
            try {
                const chainStorage = await storage.get(KEY_STORAGE_DELEGATION);
                if (typeof chainStorage === 'object' && chainStorage !== null) {
                    throw new Error('Delegation chain is incorrectly stored. A delegation chain should be stored as a string.');
                }
                if (options.identity) {
                    identity = options.identity;
                }
                else if (chainStorage) {
                    chain = DelegationChain.fromJSON(chainStorage);
                    // Verify that the delegation isn't expired.
                    if (!isDelegationValid(chain)) {
                        await _deleteStorage(storage);
                        key = null;
                    }
                    else {
                        identity = DelegationIdentity.fromDelegation(key, chain);
                    }
                }
            }
            catch (e) {
                console.error(e);
                // If there was a problem loading the chain, delete the key.
                await _deleteStorage(storage);
                key = null;
            }
        }
        let idleManager = undefined;
        if ((_c = options.idleOptions) === null || _c === void 0 ? void 0 : _c.disableIdle) {
            idleManager = undefined;
        }
        // if there is a delegation chain or provided identity, setup idleManager
        else if (chain || options.identity) {
            idleManager = IdleManager.create(options.idleOptions);
        }
        if (!key) {
            // Create a new key (whether or not one was in storage).
            if (keyType === ED25519_KEY_LABEL) {
                key = await Ed25519KeyIdentity.generate();
                await storage.set(KEY_STORAGE_KEY, JSON.stringify(key.toJSON()));
            }
            else {
                if (options.storage && keyType === ECDSA_KEY_LABEL) {
                    console.warn(`You are using a custom storage provider that may not support CryptoKey storage. If you are using a custom storage provider that does not support CryptoKey storage, you should use '${ED25519_KEY_LABEL}' as the key type, as it can serialize to a string`);
                }
                key = await ECDSAKeyIdentity.generate();
                await storage.set(KEY_STORAGE_KEY, key.getKeyPair());
            }
        }
        return new this(identity, key, chain, storage, idleManager, options);
    }
    _handleSuccess(message, onSuccess) {
        var _a, _b, _c;
        const delegations = message.delegations.map(signedDelegation => {
            return {
                delegation: new Delegation(signedDelegation.delegation.pubkey, signedDelegation.delegation.expiration, signedDelegation.delegation.targets),
                signature: signedDelegation.signature.buffer,
            };
        });
        const delegationChain = DelegationChain.fromDelegations(delegations, message.userPublicKey.buffer);
        const key = this._key;
        if (!key) {
            return;
        }
        this._chain = delegationChain;
        this._identity = DelegationIdentity.fromDelegation(key, this._chain);
        (_a = this._idpWindow) === null || _a === void 0 ? void 0 : _a.close();
        if (!this.idleManager) {
            const idleOptions = (_b = this._createOptions) === null || _b === void 0 ? void 0 : _b.idleOptions;
            this.idleManager = IdleManager.create(idleOptions);
            if (!(idleOptions === null || idleOptions === void 0 ? void 0 : idleOptions.onIdle) && !(idleOptions === null || idleOptions === void 0 ? void 0 : idleOptions.disableDefaultIdleCallback)) {
                (_c = this.idleManager) === null || _c === void 0 ? void 0 : _c.registerCallback(() => {
                    this.logout();
                    location.reload();
                });
            }
        }
        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
        this._removeEventListener();
        delete this._idpWindow;
    }
    getIdentity() {
        return this._identity;
    }
    async isAuthenticated() {
        return !this.getIdentity().getPrincipal().isAnonymous() && this._chain !== null;
    }
    /**
     * AuthClient Login -
     * Opens up a new window to authenticate with Internet Identity
     * @param {AuthClientLoginOptions} options
     * @param options.identityProvider Identity provider
     * @param options.maxTimeToLive Expiration of the authentication in nanoseconds
     * @param options.derivationOrigin Origin for Identity Provider to use while generating the delegated identity
     * @param options.windowOpenerFeatures Configures the opened authentication window
     * @param options.onSuccess Callback once login has completed
     * @param options.onError Callback in case authentication fails
     * @example
     * const authClient = await AuthClient.create();
     * authClient.login({
     *  identityProvider: 'http://<canisterID>.localhost:8000',
     *  maxTimeToLive: BigInt (7) * BigInt(24) * BigInt(3_600_000_000_000), // 1 week
     *  windowOpenerFeatures: "toolbar=0,location=0,menubar=0,width=500,height=500,left=100,top=100",
     *  onSuccess: () => {
     *    console.log('Login Successful!');
     *  },
     *  onError: (error) => {
     *    console.error('Login Failed: ', error);
     *  }
     * });
     */
    async login(options) {
        var _a, _b, _c, _d;
        // Set default maxTimeToLive to 8 hours
        const defaultTimeToLive = /* hours */ BigInt(8) * /* nanoseconds */ BigInt(3600000000000);
        // Create the URL of the IDP. (e.g. https://XXXX/#authorize)
        const identityProviderUrl = new URL(((_a = options === null || options === void 0 ? void 0 : options.identityProvider) === null || _a === void 0 ? void 0 : _a.toString()) || IDENTITY_PROVIDER_DEFAULT);
        // Set the correct hash if it isn't already set.
        identityProviderUrl.hash = IDENTITY_PROVIDER_ENDPOINT;
        // If `login` has been called previously, then close/remove any previous windows
        // and event listeners.
        (_b = this._idpWindow) === null || _b === void 0 ? void 0 : _b.close();
        this._removeEventListener();
        // Add an event listener to handle responses.
        this._eventHandler = this._getEventHandler(identityProviderUrl, Object.assign({ maxTimeToLive: (_c = options === null || options === void 0 ? void 0 : options.maxTimeToLive) !== null && _c !== void 0 ? _c : defaultTimeToLive }, options));
        window.addEventListener('message', this._eventHandler);
        // Open a new window with the IDP provider.
        this._idpWindow =
            (_d = window.open(identityProviderUrl.toString(), 'idpWindow', options === null || options === void 0 ? void 0 : options.windowOpenerFeatures)) !== null && _d !== void 0 ? _d : undefined;
        // Check if the _idpWindow is closed by user.
        const checkInterruption = () => {
            // The _idpWindow is opened and not yet closed by the client
            if (this._idpWindow) {
                if (this._idpWindow.closed) {
                    this._handleFailure(ERROR_USER_INTERRUPT, options === null || options === void 0 ? void 0 : options.onError);
                }
                else {
                    setTimeout(checkInterruption, INTERRUPT_CHECK_INTERVAL);
                }
            }
        };
        checkInterruption();
    }
    _getEventHandler(identityProviderUrl, options) {
        return async (event) => {
            var _a, _b, _c;
            if (event.origin !== identityProviderUrl.origin) {
                console.warn(`WARNING: expected origin '${identityProviderUrl.origin}', got '${event.origin}' (ignoring)`);
                return;
            }
            const message = event.data;
            switch (message.kind) {
                case 'authorize-ready': {
                    // IDP is ready. Send a message to request authorization.
                    const request = {
                        kind: 'authorize-client',
                        sessionPublicKey: new Uint8Array((_a = this._key) === null || _a === void 0 ? void 0 : _a.getPublicKey().toDer()),
                        maxTimeToLive: options === null || options === void 0 ? void 0 : options.maxTimeToLive,
                        derivationOrigin: (_b = options === null || options === void 0 ? void 0 : options.derivationOrigin) === null || _b === void 0 ? void 0 : _b.toString(),
                    };
                    (_c = this._idpWindow) === null || _c === void 0 ? void 0 : _c.postMessage(request, identityProviderUrl.origin);
                    break;
                }
                case 'authorize-client-success':
                    // Create the delegation chain and store it.
                    try {
                        this._handleSuccess(message, options === null || options === void 0 ? void 0 : options.onSuccess);
                        // Setting the storage is moved out of _handleSuccess to make
                        // it a sync function. Having _handleSuccess as an async function
                        // messes up the jest tests for some reason.
                        if (this._chain) {
                            await this._storage.set(KEY_STORAGE_DELEGATION, JSON.stringify(this._chain.toJSON()));
                        }
                    }
                    catch (err) {
                        this._handleFailure(err.message, options === null || options === void 0 ? void 0 : options.onError);
                    }
                    break;
                case 'authorize-client-failure':
                    this._handleFailure(message.text, options === null || options === void 0 ? void 0 : options.onError);
                    break;
            }
        };
    }
    _handleFailure(errorMessage, onError) {
        var _a;
        (_a = this._idpWindow) === null || _a === void 0 ? void 0 : _a.close();
        onError === null || onError === void 0 ? void 0 : onError(errorMessage);
        this._removeEventListener();
        delete this._idpWindow;
    }
    _removeEventListener() {
        if (this._eventHandler) {
            window.removeEventListener('message', this._eventHandler);
        }
        this._eventHandler = undefined;
    }
    async logout(options = {}) {
        await _deleteStorage(this._storage);
        // Reset this auth client to a non-authenticated state.
        this._identity = new AnonymousIdentity();
        this._chain = null;
        if (options.returnTo) {
            try {
                window.history.pushState({}, '', options.returnTo);
            }
            catch (e) {
                window.location.href = options.returnTo;
            }
        }
    }
}
async function _deleteStorage(storage) {
    await storage.remove(KEY_STORAGE_KEY);
    await storage.remove(KEY_STORAGE_DELEGATION);
    await storage.remove(KEY_VECTOR);
}

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

const workerPromise$1 = import('./idle.ic.worker-aa34d0b8.js').then(m => m.worker);
const startIdleTime = /*@__PURE__*/createWorkerProxy(workerPromise$1, 'stencil.idle.ic.worker', 'startIdleTime');
const stopIdleTimer = /*@__PURE__*/createWorkerProxy(workerPromise$1, 'stencil.idle.ic.worker', 'stopIdleTimer');

const workerPromise = import('./user.ic.worker-2288bfdc.js').then(m => m.worker);
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
  startIdleTime(onSignOut).then(() => {
    // async await blocked with Astro
  });
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

export { KEY_STORAGE_KEY as K, KEY_STORAGE_DELEGATION as a, initAuth as b, createWorkerProxy as c, signIn as d, deleteAuth as e, createWorker as f, getIdentity as g, isAuthenticated as i, signOut as s, t };
