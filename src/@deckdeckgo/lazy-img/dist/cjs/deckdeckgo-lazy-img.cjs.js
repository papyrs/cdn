'use strict';

const index = require('./index-6d64492f.js');

/*
 Stencil Client Patch Browser v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('deckdeckgo-lazy-img.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["deckgo-lazy-img.cjs",[[1,"deckgo-lazy-img",{"imgSrc":[513,"img-src"],"imgSrcSet":[513,"img-src-set"],"imgAlt":[513,"img-alt"],"imgSizes":[513,"img-sizes"],"observerRootMargin":[1,"observer-root-margin"],"observerThreshold":[2,"observer-threshold"],"imgErrorSrc":[1,"img-error-src"],"svgSrc":[513,"svg-src"],"ariaLabel":[513,"aria-label"],"intrinsicsize":[1],"imgWidth":[2,"img-width"],"imgHeight":[2,"img-height"],"customLoader":[4,"custom-loader"],"loading":[1],"svgContent":[32],"imgLoaded":[32],"lazyLoad":[64]}]]]], options);
});
