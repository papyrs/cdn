import { p as promiseResolve, b as bootstrapLazy } from './index-61bbd0a6.js';

/*
 Stencil Client Patch Browser v2.11.0 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["web-social-share",[[1,"web-social-share",{"show":[1028],"share":[16]}]]]], options);
});
