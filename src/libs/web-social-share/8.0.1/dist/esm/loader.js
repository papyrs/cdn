import { p as promiseResolve, b as bootstrapLazy } from './index-61bbd0a6.js';

/*
 Stencil Client Patch Esm v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["web-social-share",[[1,"web-social-share",{"show":[1028],"share":[16]}]]]], options);
  });
};

export { defineCustomElements };
