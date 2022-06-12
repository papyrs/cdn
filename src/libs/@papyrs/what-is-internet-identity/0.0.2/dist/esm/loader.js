import { p as promiseResolve, b as bootstrapLazy } from './index-790aa177.js';

/*
 Stencil Client Patch Esm v2.15.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["what-is-ii_4",[[0,"what-is-ii",{"language":[1],"assetsDir":[1,"assets-dir"]}],[2,"what-is-ii-anchor",{"imageSrc":[32]}],[2,"what-is-ii-hero"],[2,"what-is-ii-requirements"]]]], options);
  });
};

export { defineCustomElements };
