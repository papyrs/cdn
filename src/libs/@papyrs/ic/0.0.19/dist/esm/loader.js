import { p as promiseResolve, b as bootstrapLazy } from './index-a398e020.js';

/*
 Stencil Client Patch Esm v2.17.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["ic-signin",[[4,"ic-signin",{"i18n":[16],"config":[16],"signInSuccess":[16],"signInError":[16],"signInInProgress":[32]}]]]], options);
  });
};

export { defineCustomElements };
