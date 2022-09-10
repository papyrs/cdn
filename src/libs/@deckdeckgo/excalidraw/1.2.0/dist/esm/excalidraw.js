import { p as promiseResolve, b as bootstrapLazy } from './index-8052a495.js';

/*
 Stencil Client Patch Browser v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["deckgo-excalidraw",[[0,"deckgo-excalidraw",{"scene":[16],"toBlob":[64],"exportScene":[64]}]]]], options);
});
