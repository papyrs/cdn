import { g as getRenderingRef, f as forceUpdate, r as registerInstance, h, H as Host, a as getAssetPath } from './index-aff63d32.js';

const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof getRenderingRef !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(forceUpdate));
            cleanupElements(elmsToUpdate);
        },
    };
};

const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    let states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(defaultState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        const unReset = on('reset', () => cb(defaultState[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const DEFAULT_ASSETS_DIR = 'images';
const { state: state$1 } = createStore({
  assetsDir: DEFAULT_ASSETS_DIR
});
const configStore = { state: state$1 };

const en = {
  lang: 'en',
  hero: {
    title: "What's the Internet Identity?",
    authentication: 'Internet Identity is an auth provider that facilitates <strong>anonymous authentication</strong> on the Internet Computer.',
    password_less: "Say <strong>goodbye to passwords</strong>. Internet Identity can use your device's biometrics or a hardware authentication device to secure your account."
  },
  requirements: {
    title: 'Devices and Requirements',
    biometrics: 'If your device does not support biometric identification (Face ID, Windows Hello, etc) you can use a security key (YubiKey) or a Ledger to authenticate.',
    android: '<strong>Android</strong> - Works on Chrome with biometrics or other authentication hardware.',
    ios: '<strong>Apple</strong> - Works on any up-to-date device with Face/Touch ID.',
    windows: '<strong>Windows</strong> - Works on any up-to-date device supporting Windows Hello.'
  },
  anchor: {
    title: "Creating an Identity Anchor",
    go_to: "Go to <a aria-label='Link to Internet Identity dapp' rel='noopener noreferrer' href='https://identity.ic0.app/' target='_blank'>https://identity.ic0.app/</a>",
    create: 'Click "Create an Internet Identity Anchor".',
    follow: 'Follow the instruction.',
    reach_out: "Reach out if you're having any issues.",
    internet_identity: 'Internet Identity screenshot'
  }
};

const { state, onChange } = createStore(en);
const enI18n = () => en;
onChange('lang', async (lang) => {
  let bundle;
  switch (lang) {
    default:
      bundle = enI18n();
  }
  Object.assign(state, Object.assign({ custom: state.custom }, bundle));
});
const i18n = { state };

const whatIsIiCss = "what-is-ii{display:block;--padding:0.5rem}@media (min-width: 768px){what-is-ii{display:grid;grid-template-columns:repeat(2, calc(var(--width) / 2));grid-template-rows:auto 1fr;grid-gap:calc(4 * var(--padding));--width:calc(100% - 4 * var(--padding))}what-is-ii what-is-ii-anchor{grid-row:1/3;grid-column:2/3}}what-is-ii svg{color:var(--whats-ii-icon-color);--icon-size:3rem;width:var(--icon-size);height:var(--icon-size);min-width:var(--icon-size);min-height:var(--icon-size)}what-is-ii a{word-break:break-all}what-is-ii h2{margin:2.75rem 0 1.75rem}what-is-ii :first-child h2{margin-top:0}@media (min-width: 768px){what-is-ii h2{margin:0 0 1.75rem}what-is-ii :last-child h2{margin-top:0}}";

const WhatIsII = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * In which language should the summary be displayed.
     */
    this.language = 'en';
  }
  componentWillLoad() {
    this.updateConfig();
  }
  onLangChange() {
    this.updateConfig();
  }
  onAssetsDirChange() {
    this.updateConfig();
  }
  updateConfig() {
    var _a, _b;
    i18n.state.lang = (_a = this.language) !== null && _a !== void 0 ? _a : 'en';
    configStore.state.assetsDir = (_b = this.assetsDir) !== null && _b !== void 0 ? _b : DEFAULT_ASSETS_DIR;
  }
  render() {
    return (h(Host, null, h("what-is-ii-hero", null), h("what-is-ii-requirements", null), h("what-is-ii-anchor", null)));
  }
  static get watchers() { return {
    "language": ["onLangChange"],
    "assetsDir": ["onAssetsDirChange"]
  }; }
};
WhatIsII.style = whatIsIiCss;

const anchorCss = ".sc-what-is-ii-anchor-h{display:block}@media (min-width: 768px){.sc-what-is-ii-anchor-h{display:grid;--width:calc(100% - var(--padding));grid-template-columns:repeat(2, calc(var(--width) / 2));grid-template-rows:auto auto 1fr;grid-gap:var(--padding)}}h2.sc-what-is-ii-anchor,p.sc-what-is-ii-anchor:last-of-type{grid-column:1/3}img.sc-what-is-ii-anchor{display:block;max-width:50%;margin:0 auto var(--padding)}@media (min-width: 768px){img.sc-what-is-ii-anchor{max-width:calc(100% - 2 * var(--padding))}}ol.sc-what-is-ii-anchor{margin:calc(4 * var(--padding)) 0}@media (min-width: 768px){ol.sc-what-is-ii-anchor{margin:0}}li.sc-what-is-ii-anchor{margin:0 0 var(--padding)}@media (min-width: 768px){p.sc-what-is-ii-anchor:last-of-type{margin:var(--padding) 0}}";

const Anchor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  connectedCallback() {
    try {
      this.imageSrc = getAssetPath(`./${configStore.state.assetsDir}/internet-identity.webp`);
    }
    catch (_err) {
      this.imageSrc = `./${configStore.state.assetsDir}/internet-identity.webp`;
    }
  }
  render() {
    return (h(Host, null, h("h2", null, i18n.state.anchor.title), this.imageSrc && h("img", { src: this.imageSrc, loading: "lazy", alt: i18n.state.anchor.internet_identity }), h("ol", null, h("li", { innerHTML: i18n.state.anchor.go_to }), h("li", null, i18n.state.anchor.create), h("li", null, i18n.state.anchor.follow)), h("p", null, i18n.state.anchor.reach_out)));
  }
  static get assetsDirs() { return ["images"]; }
};
Anchor.style = anchorCss;

// Source: https://fonts.google.com/icons?selected=Material%20Icons%3Alock%3A
const IconLock = () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "currentColor" },
  h("path", { d: "M0 0h24v24H0z", fill: "none" }),
  h("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" })));

// Source: https://fonts.google.com/icons?selected=Material%20Icons%3Aperson%3A
const IconPerson = () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" },
  h("path", { d: "M0 0h24v24H0z", fill: "none" }),
  h("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" })));

const heroCss = ".sc-what-is-ii-hero-h{display:block}@media (min-width: 768px){.sc-what-is-ii-hero-h{display:grid;--width:calc(100% - var(--padding));grid-template-columns:repeat(2, calc(var(--width) / 2));grid-template-rows:auto 1fr;grid-gap:var(--padding)}}h2.sc-what-is-ii-hero{grid-column:1/3}svg.sc-what-is-ii-hero{margin:0 1rem 0 0}";

const Hero = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("h2", null, i18n.state.hero.title), h("div", null, h(IconPerson, null), h("p", { innerHTML: i18n.state.hero.authentication })), h("div", null, h(IconLock, null), h("p", { innerHTML: i18n.state.hero.password_less }))));
  }
};
Hero.style = heroCss;

// Source: https://fonts.google.com/icons?selected=Material%20Icons%3Adevices%3A
const IconDevices = () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "currentColor" },
  h("path", { d: "M0 0h24v24H0z", fill: "none" }),
  h("path", { d: "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" })));

// Source: https://fonts.google.com/icons?selected=Material%20Icons%3Afingerprint%3A
const IconFingerPrint = () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "currentColor" },
  h("path", { d: "M0 0h24v24H0z", fill: "none" }),
  h("path", { d: "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z" })));

const requirementsCss = ".sc-what-is-ii-requirements-h{display:block}@media (min-width: 768px){.sc-what-is-ii-requirements-h{display:grid;--width:calc(100% - var(--padding));grid-template-columns:repeat(2, calc(var(--width) / 2));grid-template-rows:auto 1fr;grid-gap:var(--padding)}}h2.sc-what-is-ii-requirements{grid-column:1/3}";

const Requirements = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("h2", null, i18n.state.requirements.title), h("div", null, h(IconFingerPrint, null), h("p", null, i18n.state.requirements.biometrics)), h("div", null, h(IconDevices, null), h("p", { innerHTML: i18n.state.requirements.android }), h("p", { innerHTML: i18n.state.requirements.ios }), h("p", { innerHTML: i18n.state.requirements.windows }))));
  }
};
Requirements.style = requirementsCss;

export { WhatIsII as what_is_ii, Anchor as what_is_ii_anchor, Hero as what_is_ii_hero, Requirements as what_is_ii_requirements };
