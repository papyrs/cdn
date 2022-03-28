import { EventEmitter } from '../stencil-public-runtime';
export declare type StateRequiredJS = 'loaded' | 'attached' | 'error' | 'abort';
export declare const injectRequiredJS: ({ lang }: {
  lang: string;
}) => Promise<StateRequiredJS>;
export declare const loadMainScript: ({ lang, reload, prismLanguageLoaded }: {
  lang: string;
  reload?: boolean;
  prismLanguageLoaded: EventEmitter<string>;
}) => Promise<'loaded' | 'error'>;
