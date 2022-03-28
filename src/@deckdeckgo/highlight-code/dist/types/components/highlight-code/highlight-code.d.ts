import { EventEmitter } from '../../stencil-public-runtime';
import { DeckDeckGoRevealComponent } from '@deckdeckgo/slide-utils';
import { DeckdeckgoHighlightCodeCarbonTheme } from '../../declarations/carbon-theme';
import { DeckdeckgoHighlightCodeTerminal } from '../../declarations/terminal';
/**
 * @slot code - A `<code/>` element to highlight
 * @slot user - A user name for the Ubuntu terminal
 */
export declare class HighlightCode implements DeckDeckGoRevealComponent {
  el: HTMLElement;
  /**
   * Emitted when a language is fetched and loaded
   */
  prismLanguageLoaded: EventEmitter<string>;
  /**
   * Emitted when a language could not be loaded. The component fallback to javascript language to display the code anyway.
   */
  prismLanguageError: EventEmitter<string>;
  /**
   * Define the language to be used for the syntax highlighting. The list of supported languages is defined by Prism.js
   */
  language: string;
  /**
   * If you wish to highlight some lines of your code. The lines number should be provided as a number (one line) or numbers separated with coma or dash (many lines), group separated with space.
   * For example: 1 3,5 8 14-17 which highlight lines  1, 3 to 5, 8 and 14 to 17
   */
  highlightLines: string;
  /**
   * Display the number of the lines of code
   */
  lineNumbers: boolean;
  /**
   * Present the code in a stylish "windowed" card
   */
  terminal: DeckdeckgoHighlightCodeTerminal;
  /**
   * Display a button user can click to edit the code. Edition has to find place on the comsumer side, the button emits an event
   */
  editable: boolean;
  /**
   * An optional label for the `aria-label` attribute of the editable button
   */
  editableLabel: string;
  /**
   * The theme of the selected terminal (applied only in case of carbon)
   */
  theme: DeckdeckgoHighlightCodeCarbonTheme;
  private parseAfterUpdate;
  private refCode;
  private themeStyle;
  private loaded;
  private refContainer;
  private highlightGroup;
  /**
   * @internal Used when integrated in DeckDeckGo to display next and previous highlight in the presentations
   */
  revealProgress: 'start' | 'partial' | 'end';
  private highlightRows;
  componentWillLoad(): void;
  componentDidLoad(): Promise<void>;
  componentDidUpdate(): void;
  loadTheme(): Promise<void>;
  onLanguageLoaded({ detail }: CustomEvent<string>): void;
  onLanguageError({ detail }: CustomEvent<string>): Promise<void>;
  private parse;
  private languageDidLoad;
  onLanguage(): Promise<void>;
  private loadLanguages;
  private fallbackJavascript;
  private loadRequiredLanguages;
  onLineNumbersChange(): void;
  onCarbonChange(): Promise<void>;
  /**
   * Load or reload the component
   */
  load(): Promise<void>;
  private parseSlottedCode;
  private parseCodeOptions;
  /**
   * @internal Used when integrated in DeckDeckGo presentations. Call `nextHighlight()`.
   */
  reveal(): Promise<void>;
  /**
   * @internal Used when integrated in DeckDeckGo presentations. Call `prevHighlight()`.
   */
  hide(): Promise<void>;
  /**
   * @internal Reset the highlight state to default.
   */
  revealAll(): Promise<void>;
  /**
   * @internal Reset the highlight state to default.
   */
  hideAll(): Promise<void>;
  /**
   * Animate highlighted lines and, apply "focus" on next group
   */
  nextHighlight(): Promise<void>;
  /**
   * Animate highlighted lines and, apply "focus" on previous group
   */
  prevHighlight(): Promise<void>;
  private selectNextGroupHighlight;
  render(): any;
  private renderHighlightStyle;
  private renderCarbon;
  private renderCarbonCircle;
  private renderUbuntu;
  private renderUbuntuCircle;
}
