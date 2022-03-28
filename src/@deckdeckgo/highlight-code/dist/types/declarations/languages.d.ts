export interface DeckdeckgoHighlightCodeLanguageAlias {
  [index: string]: string;
}
export interface DeckdeckgoHighlightCodeLanguage {
  title: string;
  require?: string[];
  main?: string;
}
export interface DeckdeckgoHighlightCodeLanguages {
  [index: string]: DeckdeckgoHighlightCodeLanguage;
}
export declare const deckdeckgoHighlightCodeLanguages: DeckdeckgoHighlightCodeLanguages;
