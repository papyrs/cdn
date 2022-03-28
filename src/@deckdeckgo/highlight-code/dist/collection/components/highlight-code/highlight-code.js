import { Component, Prop, Watch, Element, Method, Event, Listen, State, h, Host } from '@stencil/core';
import { loadTheme } from '../../utils/themes-loader.utils';
import { parseCode } from '../../utils/parse.utils';
import { loadGoogleFonts } from '../../utils/fonts.utils';
import { injectRequiredJS, loadMainScript } from '../../utils/inject.utils';
import { CarbonThemeStyle } from '../styles/carbon-theme.style';
import { HighlightStyle } from '../styles/highlight.style';
import { DeckdeckgoHighlightCodeCarbonTheme } from '../../declarations/carbon-theme';
import { DeckdeckgoHighlightCodeTerminal } from '../../declarations/terminal';
import { deckdeckgoHighlightCodeLanguages } from '../../declarations/languages';
/**
 * @slot code - A `<code/>` element to highlight
 * @slot user - A user name for the Ubuntu terminal
 */
export class HighlightCode {
  constructor() {
    /**
     * Define the language to be used for the syntax highlighting. The list of supported languages is defined by Prism.js
     */
    this.language = 'javascript';
    /**
     * Display the number of the lines of code
     */
    this.lineNumbers = false;
    /**
     * Present the code in a stylish "windowed" card
     */
    this.terminal = DeckdeckgoHighlightCodeTerminal.CARBON;
    /**
     * Display a button user can click to edit the code. Edition has to find place on the comsumer side, the button emits an event
     */
    this.editable = false;
    /**
     * The theme of the selected terminal (applied only in case of carbon)
     */
    this.theme = DeckdeckgoHighlightCodeCarbonTheme.DRACULA;
    this.parseAfterUpdate = false;
    this.loaded = false;
    this.highlightGroup = undefined;
    /**
     * @internal Used when integrated in DeckDeckGo to display next and previous highlight in the presentations
     */
    this.revealProgress = 'start';
    this.highlightRows = undefined;
  }
  componentWillLoad() {
    Promise.all([loadGoogleFonts(this.terminal), this.loadTheme()]).then(() => { });
  }
  async componentDidLoad() {
    const languageWasLoaded = this.languageDidLoad();
    await this.loadLanguages();
    if (languageWasLoaded) {
      this.parse();
    }
  }
  componentDidUpdate() {
    if (this.parseAfterUpdate) {
      this.parse();
      this.parseAfterUpdate = false;
    }
  }
  async loadTheme() {
    if (this.terminal !== DeckdeckgoHighlightCodeTerminal.CARBON || !this.theme) {
      this.themeStyle = undefined;
      return;
    }
    const { theme } = await loadTheme(this.theme);
    this.themeStyle = theme;
  }
  onLanguageLoaded({ detail }) {
    if (this.language !== detail || this.loaded) {
      return;
    }
    this.parse();
    this.loaded = true;
  }
  async onLanguageError({ detail }) {
    if (this.language !== detail) {
      return;
    }
    this.language = 'javascript';
    this.prismLanguageLoaded.emit(this.language);
  }
  parse() {
    if (!this.language || !deckdeckgoHighlightCodeLanguages[this.language]) {
      return;
    }
    this.parseSlottedCode();
  }
  languageDidLoad() {
    if (!document || !this.language || this.language === '') {
      return false;
    }
    const scripts = document.querySelector("[deckdeckgo-prism-loaded='" + this.language + "']");
    if (scripts) {
      return true;
    }
    return false;
  }
  async onLanguage() {
    await this.loadLanguages(true);
  }
  async loadLanguages(reload = false) {
    this.loaded = false;
    if (!this.language || !deckdeckgoHighlightCodeLanguages[this.language]) {
      console.error(`Language ${this.language} is not supported`);
      return;
    }
    const loadingScript = await this.loadRequiredLanguages();
    // We need all required scripts to be loaded. If multiple components are use within the same page, it is possible that the required scripts are attached to the DOM and are still loading.
    // loadScript will trigger an event on the document, therefore those who do not loadScript will receive the event anyway when everything is ready.
    if (loadingScript === 'attached') {
      return;
    }
    if (loadingScript === 'error') {
      this.fallbackJavascript();
      return;
    }
    const state = await loadMainScript({ lang: this.language, reload, prismLanguageLoaded: this.prismLanguageLoaded });
    if (state === 'loaded') {
      return;
    }
    this.fallbackJavascript();
  }
  fallbackJavascript() {
    console.error('A required script for the language could not be fetched therefore, falling back to JavaScript to display code anyway.');
    this.prismLanguageError.emit(this.language);
  }
  async loadRequiredLanguages() {
    if (!this.language) {
      return 'error';
    }
    const definition = deckdeckgoHighlightCodeLanguages[this.language];
    if (!definition.require || definition.require.length <= 0) {
      return 'loaded';
    }
    // Load now the required languages scripts because Prism needs these to be loaded before the actual main language script
    const promises = definition.require.map((lang) => injectRequiredJS({ lang }));
    const states = await Promise.all(promises);
    const stateError = states.find((state) => ['error', 'abort'].includes(state));
    if (stateError !== undefined) {
      return 'error';
    }
    const stateNotLoaded = states.find((state) => state !== 'loaded');
    return stateNotLoaded !== undefined ? 'attached' : 'loaded';
  }
  onLineNumbersChange() {
    this.parse();
  }
  async onCarbonChange() {
    this.parseAfterUpdate = true;
    await loadGoogleFonts(this.terminal);
  }
  /**
   * Load or reload the component
   */
  async load() {
    if (!this.language || this.language === '') {
      return;
    }
    if (this.language === 'javascript') {
      this.parse();
      return;
    }
    if (document.querySelector("[deckdeckgo-prism-loaded='" + this.language + "']")) {
      this.parse();
    }
    else {
      await this.loadLanguages();
    }
  }
  parseSlottedCode() {
    var _a;
    const code = this.el.querySelector("[slot='code']");
    if (!code) {
      return;
    }
    parseCode(Object.assign(Object.assign({}, this.parseCodeOptions()), { code: (_a = code === null || code === void 0 ? void 0 : code.innerHTML) === null || _a === void 0 ? void 0 : _a.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&') }));
  }
  parseCodeOptions() {
    return {
      refContainer: this.refContainer,
      refCode: this.refCode,
      lineNumbers: this.lineNumbers,
      highlightLines: this.highlightLines,
      language: this.language
    };
  }
  /**
   * @internal Used when integrated in DeckDeckGo presentations. Call `nextHighlight()`.
   */
  async reveal() {
    await this.nextHighlight();
  }
  /**
   * @internal Used when integrated in DeckDeckGo presentations. Call `prevHighlight()`.
   */
  async hide() {
    await this.prevHighlight();
  }
  /**
   * @internal Reset the highlight state to default.
   */
  async revealAll() {
    this.highlightGroup = undefined;
    this.highlightRows = undefined;
    this.revealProgress = 'start';
  }
  /**
   * @internal Reset the highlight state to default.
   */
  async hideAll() {
    await this.revealAll();
  }
  /**
   * Animate highlighted lines and, apply "focus" on next group
   */
  async nextHighlight() {
    if (this.revealProgress === 'end') {
      return;
    }
    await this.selectNextGroupHighlight(this.highlightGroup + 1 || 0);
    // We want to limit the counter to max count of groups
    if (this.highlightRows !== undefined) {
      this.highlightGroup = this.highlightGroup + 1 || 0;
      this.revealProgress = 'partial';
      return;
    }
    this.revealProgress = 'end';
  }
  /**
   * Animate highlighted lines and, apply "focus" on previous group
   */
  async prevHighlight() {
    if (this.highlightGroup === 0) {
      this.highlightGroup = undefined;
      this.highlightRows = undefined;
      this.revealProgress = 'start';
      return;
    }
    this.highlightGroup = this.revealProgress === 'end' ? this.highlightGroup : this.highlightGroup - 1;
    await this.selectNextGroupHighlight(this.highlightGroup);
    if (this.highlightRows !== undefined) {
      this.revealProgress = 'partial';
    }
  }
  async selectNextGroupHighlight(highlightGroup) {
    var _a;
    const rows = (_a = this.refCode) === null || _a === void 0 ? void 0 : _a.querySelectorAll(`.group-${highlightGroup}`);
    if (!rows || rows.length <= 0) {
      this.highlightRows = undefined;
      return;
    }
    const allRows = Array.from(this.refCode.children);
    this.highlightRows = {
      start: allRows.indexOf(rows[0]),
      end: allRows.indexOf(rows[rows.length - 1])
    };
  }
  render() {
    var _a;
    const hostClass = {
      'deckgo-highlight-code-carbon': this.terminal === DeckdeckgoHighlightCodeTerminal.CARBON,
      'deckgo-highlight-code-ubuntu': this.terminal === DeckdeckgoHighlightCodeTerminal.UBUNTU,
      'deckgo-highlight-code-papyrs': this.terminal === DeckdeckgoHighlightCodeTerminal.PAPYRS
    };
    if (this.terminal === DeckdeckgoHighlightCodeTerminal.CARBON) {
      hostClass[`deckgo-highlight-code-theme-${this.theme}`] = true;
    }
    return (h(Host, { class: hostClass },
      this.renderCarbon(),
      this.renderUbuntu(),
      this.renderHighlightStyle(),
      h("div", { class: "container", ref: (el) => (this.refContainer = el) },
        h("code", { class: ((_a = this.highlightLines) === null || _a === void 0 ? void 0 : _a.length) > 0 ? 'highlight' : undefined, ref: (el) => (this.refCode = el) }),
        h("slot", { name: "code" }),
        this.editable && h("deckgo-highlight-code-edit", { label: this.editableLabel }))));
  }
  renderHighlightStyle() {
    if (!this.highlightLines || this.highlightLines.length <= 0) {
      return undefined;
    }
    return h(HighlightStyle, Object.assign({}, this.highlightRows));
  }
  renderCarbon() {
    if (this.terminal !== DeckdeckgoHighlightCodeTerminal.CARBON) {
      return undefined;
    }
    return [
      h(CarbonThemeStyle, { style: this.themeStyle }),
      h("div", { class: "carbon" },
        this.renderCarbonCircle('red'),
        this.renderCarbonCircle('yellow'),
        this.renderCarbonCircle('green'))
    ];
  }
  renderCarbonCircle(color) {
    return h("div", { class: color });
  }
  renderUbuntu() {
    if (this.terminal !== DeckdeckgoHighlightCodeTerminal.UBUNTU) {
      return undefined;
    }
    return (h("div", { class: "ubuntu" },
      this.renderUbuntuCircle('close'),
      this.renderUbuntuCircle('minimize'),
      this.renderUbuntuCircle('maximize'),
      h("p", null,
        h("slot", { name: "user" }))));
  }
  renderUbuntuCircle(mode) {
    const symbol = mode === 'close' ? '&#10005;' : mode === 'minimize' ? '&#9472;' : '&#9723;';
    return (h("div", { class: mode },
      h("span", { innerHTML: symbol })));
  }
  static get is() { return "deckgo-highlight-code"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["highlight-code.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["highlight-code.css"]
  }; }
  static get properties() { return {
    "language": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define the language to be used for the syntax highlighting. The list of supported languages is defined by Prism.js"
      },
      "attribute": "language",
      "reflect": true,
      "defaultValue": "'javascript'"
    },
    "highlightLines": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If you wish to highlight some lines of your code. The lines number should be provided as a number (one line) or numbers separated with coma or dash (many lines), group separated with space.\nFor example: 1 3,5 8 14-17 which highlight lines  1, 3 to 5, 8 and 14 to 17"
      },
      "attribute": "highlight-lines",
      "reflect": true
    },
    "lineNumbers": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Display the number of the lines of code"
      },
      "attribute": "line-numbers",
      "reflect": true,
      "defaultValue": "false"
    },
    "terminal": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "DeckdeckgoHighlightCodeTerminal",
        "resolved": "DeckdeckgoHighlightCodeTerminal.CARBON | DeckdeckgoHighlightCodeTerminal.NONE | DeckdeckgoHighlightCodeTerminal.PAPYRS | DeckdeckgoHighlightCodeTerminal.UBUNTU",
        "references": {
          "DeckdeckgoHighlightCodeTerminal": {
            "location": "import",
            "path": "../../declarations/terminal"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Present the code in a stylish \"windowed\" card"
      },
      "attribute": "terminal",
      "reflect": true,
      "defaultValue": "DeckdeckgoHighlightCodeTerminal.CARBON"
    },
    "editable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Display a button user can click to edit the code. Edition has to find place on the comsumer side, the button emits an event"
      },
      "attribute": "editable",
      "reflect": false,
      "defaultValue": "false"
    },
    "editableLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "An optional label for the `aria-label` attribute of the editable button"
      },
      "attribute": "editable-label",
      "reflect": false
    },
    "theme": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "DeckdeckgoHighlightCodeCarbonTheme",
        "resolved": "DeckdeckgoHighlightCodeCarbonTheme",
        "references": {
          "DeckdeckgoHighlightCodeCarbonTheme": {
            "location": "import",
            "path": "../../declarations/carbon-theme"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The theme of the selected terminal (applied only in case of carbon)"
      },
      "attribute": "theme",
      "reflect": true,
      "defaultValue": "DeckdeckgoHighlightCodeCarbonTheme.DRACULA"
    },
    "revealProgress": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "'start' | 'partial' | 'end'",
        "resolved": "\"end\" | \"partial\" | \"start\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": "Used when integrated in DeckDeckGo to display next and previous highlight in the presentations"
          }],
        "text": ""
      },
      "attribute": "reveal-progress",
      "reflect": false,
      "defaultValue": "'start'"
    }
  }; }
  static get states() { return {
    "themeStyle": {},
    "loaded": {},
    "highlightRows": {}
  }; }
  static get events() { return [{
      "method": "prismLanguageLoaded",
      "name": "prismLanguageLoaded",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when a language is fetched and loaded"
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }, {
      "method": "prismLanguageError",
      "name": "prismLanguageError",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when a language could not be loaded. The component fallback to javascript language to display the code anyway."
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "load": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Load or reload the component",
        "tags": []
      }
    },
    "reveal": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "internal",
            "text": "Used when integrated in DeckDeckGo presentations. Call `nextHighlight()`."
          }]
      }
    },
    "hide": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "internal",
            "text": "Used when integrated in DeckDeckGo presentations. Call `prevHighlight()`."
          }]
      }
    },
    "revealAll": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "internal",
            "text": "Reset the highlight state to default."
          }]
      }
    },
    "hideAll": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "internal",
            "text": "Reset the highlight state to default."
          }]
      }
    },
    "nextHighlight": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Animate highlighted lines and, apply \"focus\" on next group",
        "tags": []
      }
    },
    "prevHighlight": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Animate highlighted lines and, apply \"focus\" on previous group",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "theme",
      "methodName": "loadTheme"
    }, {
      "propName": "language",
      "methodName": "onLanguage"
    }, {
      "propName": "lineNumbers",
      "methodName": "onLineNumbersChange"
    }, {
      "propName": "terminal",
      "methodName": "onCarbonChange"
    }]; }
  static get listeners() { return [{
      "name": "prismLanguageLoaded",
      "method": "onLanguageLoaded",
      "target": "document",
      "capture": false,
      "passive": true
    }, {
      "name": "prismLanguageError",
      "method": "onLanguageError",
      "target": "document",
      "capture": false,
      "passive": true
    }]; }
}
