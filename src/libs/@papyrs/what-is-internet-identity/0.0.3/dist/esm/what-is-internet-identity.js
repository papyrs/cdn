import { p as promiseResolve, b as bootstrapLazy } from './index-aff63d32.js';

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
  return bootstrapLazy([["what-is-ii_4",[[0,"what-is-ii",{"language":[1],"assetsDir":[1,"assets-dir"]}],[2,"what-is-ii-anchor",{"imageSrc":[32]}],[2,"what-is-ii-hero"],[2,"what-is-ii-requirements"]]]], options);
});
