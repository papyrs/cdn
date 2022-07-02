import { p as promiseResolve, b as bootstrapLazy } from './index-a6a2fd13.js';

/*
 Stencil Client Patch Esm v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["deckgo-excalidraw",[[0,"deckgo-excalidraw",{"scene":[16],"toBlob":[64],"exportScene":[64]}]]]], options);
  });
};

export { defineCustomElements };
