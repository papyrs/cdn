import type { Components, JSX } from "../types/interface";

interface DeckgoLazyImg extends Components.DeckgoLazyImg, HTMLElement {}
export const DeckgoLazyImg: {
  prototype: DeckgoLazyImg;
  new (): DeckgoLazyImg;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
