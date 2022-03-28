import type { Components, JSX } from "../types/interface";

interface DeckgoHighlightCode extends Components.DeckgoHighlightCode, HTMLElement {}
export const DeckgoHighlightCode: {
  prototype: DeckgoHighlightCode;
  new (): DeckgoHighlightCode;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
