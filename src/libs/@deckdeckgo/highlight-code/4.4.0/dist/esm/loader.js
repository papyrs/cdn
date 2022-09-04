import { p as promiseResolve, b as bootstrapLazy } from './index-1cc0b8cf.js';

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["deckgo-highlight-code_2",[[1,"deckgo-highlight-code",{"language":[513],"highlightLines":[513,"highlight-lines"],"lineNumbers":[516,"line-numbers"],"terminal":[513],"editable":[4],"editableLabel":[1,"editable-label"],"theme":[513],"revealProgress":[1025,"reveal-progress"],"themeStyle":[32],"loaded":[32],"highlightRows":[32],"load":[64],"reveal":[64],"hide":[64],"revealAll":[64],"hideAll":[64],"nextHighlight":[64],"prevHighlight":[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"]]],[1,"deckgo-highlight-code-edit",{"label":[1]}]]]], options);
  });
};

export { defineCustomElements };
