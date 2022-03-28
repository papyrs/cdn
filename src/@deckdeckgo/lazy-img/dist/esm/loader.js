import { p as promiseResolve, b as bootstrapLazy } from './index-7b14a236.js';

/*
 Stencil Client Patch Esm v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["deckgo-lazy-img",[[1,"deckgo-lazy-img",{"imgSrc":[513,"img-src"],"imgSrcSet":[513,"img-src-set"],"imgAlt":[513,"img-alt"],"imgSizes":[513,"img-sizes"],"observerRootMargin":[1,"observer-root-margin"],"observerThreshold":[2,"observer-threshold"],"imgErrorSrc":[1,"img-error-src"],"svgSrc":[513,"svg-src"],"ariaLabel":[513,"aria-label"],"intrinsicsize":[1],"imgWidth":[2,"img-width"],"imgHeight":[2,"img-height"],"customLoader":[4,"custom-loader"],"loading":[1],"svgContent":[32],"imgLoaded":[32],"lazyLoad":[64]}]]]], options);
  });
};

export { defineCustomElements };
