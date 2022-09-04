import { p as promiseResolve, b as bootstrapLazy } from './index-0117e929.js';

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
  return bootstrapLazy([["deckgo-lazy-img",[[1,"deckgo-lazy-img",{"imgSrc":[513,"img-src"],"imgSrcSet":[513,"img-src-set"],"imgAlt":[513,"img-alt"],"imgSizes":[513,"img-sizes"],"observerRootMargin":[1,"observer-root-margin"],"observerThreshold":[2,"observer-threshold"],"imgErrorSrc":[1,"img-error-src"],"svgSrc":[513,"svg-src"],"ariaLabel":[513,"aria-label"],"intrinsicsize":[1],"imgWidth":[2,"img-width"],"imgHeight":[2,"img-height"],"customLoader":[4,"custom-loader"],"loading":[1],"svgContent":[32],"imgLoaded":[32],"lazyLoad":[64]}]]]], options);
});
