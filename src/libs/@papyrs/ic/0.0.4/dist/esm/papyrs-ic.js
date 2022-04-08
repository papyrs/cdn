import { p as promiseResolve, b as bootstrapLazy } from './index-9daac24f.js';

/*
 Stencil Client Patch Browser v2.14.2 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["deckgo-ic-signin",[[4,"deckgo-ic-signin",{"i18n":[16],"config":[16],"signInSuccess":[16],"signInError":[16],"signInInProgress":[32]}]]]], options);
});
