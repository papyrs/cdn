import { p as promiseResolve, b as bootstrapLazy } from './index-e861c04c.js';

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["deckgo-monaco-editor",[[1,"deckgo-monaco-editor",{"options":[16],"setFocus":[64],"updateLanguage":[64],"save":[64]}]]]], options);
  });
};

export { defineCustomElements };
