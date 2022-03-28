import { deckdeckgoHighlightCodeLanguages } from '../declarations/languages';
export const injectRequiredJS = ({ lang }) => {
  return new Promise((resolve) => {
    let script = document.querySelector(`deckdeckgo-prism-${lang}`);
    if (script) {
      resolve(script.hasAttribute('deckdeckgo-prism-loaded') ? 'loaded' : 'attached');
      return;
    }
    script = document.createElement('script');
    script.setAttribute('deckdeckgo-prism', lang);
    script.defer = true;
    script.src = scriptSrc(lang);
    script.addEventListener('load', () => {
      script.setAttribute('deckdeckgo-prism-loaded', lang);
      resolve('loaded');
    });
    script.addEventListener('error', () => resolve('error'));
    script.addEventListener('abort', () => resolve('abort'));
    document.head.appendChild(script);
  });
};
export const loadMainScript = ({ lang, reload = false, prismLanguageLoaded }) => {
  return new Promise(async (resolve) => {
    if (!document || !lang || lang === '') {
      resolve('error');
      return;
    }
    // No need to load javascript, it is there
    if (lang === 'javascript') {
      prismLanguageLoaded.emit('javascript');
      resolve('loaded');
      return;
    }
    const scripts = document.querySelector("[deckdeckgo-prism='" + lang + "']");
    if (scripts) {
      if (reload) {
        prismLanguageLoaded.emit(lang);
      }
      resolve('loaded');
      return;
    }
    const script = document.createElement('script');
    script.onload = () => {
      script.setAttribute('deckdeckgo-prism-loaded', lang);
      prismLanguageLoaded.emit(lang);
    };
    script.onerror = () => {
      if (script.parentElement) {
        script.parentElement.removeChild(script);
      }
      resolve('error');
    };
    const definition = deckdeckgoHighlightCodeLanguages[lang];
    const language = definition.main ? definition.main : lang;
    script.src = scriptSrc(language);
    script.setAttribute('deckdeckgo-prism', language);
    script.defer = true;
    document.head.appendChild(script);
    script.addEventListener('load', () => resolve('loaded'), { once: true });
  });
};
const scriptSrc = (language) => {
  return 'https://unpkg.com/prismjs@latest/components/prism-' + language + '.js';
};
