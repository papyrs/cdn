import { p as promiseResolve, b as bootstrapLazy } from './index-e861c04c.js';

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
  return bootstrapLazy([["deckgo-monaco-editor",[[1,"deckgo-monaco-editor",{"options":[16],"setFocus":[64],"updateLanguage":[64],"save":[64]}]]]], options);
});
