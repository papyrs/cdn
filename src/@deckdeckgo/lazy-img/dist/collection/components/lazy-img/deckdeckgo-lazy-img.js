import { Component, Element, Event, Method, Prop, Watch, h, State, Host } from '@stencil/core';
import { getSvgContent } from '../utils/request';
export class DeckdeckgoLazyImg {
  constructor() {
    /**
     * A string which specifies a set of offsets to add to the root's bounding_box when calculating intersections, effectively shrinking or growing the root for calculation purposes.
     */
    this.observerRootMargin = '300px';
    /**
     * Either a single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for the observed target.
     */
    this.observerThreshold = 0.25;
    /**
     * In case you would like to take care by yourself to apply the load of the image. If turn to true then the component will emit an event customLoad when the image intersect the viewport instead of displaying it (doesn't apply for svg but only for img-src and img-src-set)
     */
    this.customLoader = false;
    /**
     * If set to lazy, the web native lazy capability of the browser, if available, will be used to lazy load the image
     */
    this.loading = 'eager';
    this.imgLoaded = false;
    this.onIntersection = async (entries) => {
      if (!entries || entries.length <= 0) {
        return;
      }
      await this.handleIntersection(entries[0]);
    };
  }
  async componentDidLoad() {
    await this.init();
    this.lazyImgDidLoad.emit();
  }
  async handleAttrImgSrc() {
    await this.init();
  }
  async init() {
    if ('loading' in HTMLImageElement.prototype && !this.svgSrc && this.loading === 'lazy') {
      // In this case, loadImmediately apply the attributes but the platform will takes care of lazy loading the images
      await this.loadImmediately();
    }
    else if (window && 'IntersectionObserver' in window) {
      await this.deferIntersectionObserverLoad();
    }
    else {
      await this.loadImmediately();
    }
  }
  loadImmediately() {
    return this.load();
  }
  deferIntersectionObserverLoad() {
    return new Promise((resolve) => {
      this.observer = new IntersectionObserver(this.onIntersection, {
        rootMargin: this.observerRootMargin,
        threshold: this.observerThreshold
      });
      this.observer.observe(this.el.shadowRoot.host);
      resolve();
    });
  }
  /**
   * This component also export an async method lazyLoad() in case you would like to trigger "manually" the loading of the image
   */
  lazyLoad() {
    return new Promise(async (resolve) => {
      await this.load();
      resolve();
    });
  }
  handleIntersection(entry) {
    return new Promise(async (resolve) => {
      if (entry.isIntersecting) {
        if (this.observer) {
          this.observer.disconnect();
        }
        await this.load();
      }
      resolve();
    });
  }
  load() {
    return new Promise(async (resolve) => {
      if (this.svgSrc) {
        await this.loadSvg();
      }
      else {
        await this.loadImg();
      }
      resolve();
    });
  }
  loadImg() {
    return new Promise((resolve) => {
      const img = this.el.shadowRoot.querySelector('img');
      if (!img) {
        resolve();
        return;
      }
      if (this.customLoader) {
        this.customLoad.emit({
          imgElement: img,
          imgSrc: this.imgSrc,
          imgSrcSet: this.imgSrcSet
        });
        resolve();
        return;
      }
      if (this.imgSrc) {
        img.setAttribute('src', this.imgSrc);
      }
      if (this.imgSrcSet) {
        img.setAttribute('srcset', this.imgSrcSet);
      }
      resolve();
    });
  }
  loadSvg() {
    return new Promise(async (resolve) => {
      try {
        this.svgContent = await getSvgContent(this.svgSrc);
      }
      catch (err) {
        console.error(err);
      }
      resolve();
    });
  }
  loadError() {
    return new Promise((resolve) => {
      const img = this.el.shadowRoot.querySelector('img');
      if (!img) {
        resolve();
        return;
      }
      if (!this.imgErrorSrc || img.src === this.imgErrorSrc) {
        resolve();
        return;
      }
      if (img.src === this.imgSrc || img.srcset === this.imgSrcSet) {
        img.src = this.imgErrorSrc;
      }
      resolve();
    });
  }
  onImgDidLoad() {
    this.imgLoaded = true;
    this.innerImgDidLoad.emit();
  }
  render() {
    const hostClass = this.imgLoaded || this.svgContent ? 'loaded' : '';
    if (this.svgContent) {
      return (h(Host, { class: hostClass },
        h("div", { innerHTML: this.svgContent, class: "svg-container" })));
    }
    else {
      return h(Host, { class: hostClass }, this.renderImage());
    }
  }
  renderImage() {
    // prettier-ignore
    // @ts-ignore
    return h("img", { alt: this.imgLoaded ? (this.imgAlt ? this.imgAlt : this.imgSrc) : '', loading: this.loading, sizes: this.imgSizes ? this.imgSizes : undefined, intrinsicsize: this.intrinsicsize, width: this.imgWidth, height: this.imgHeight, onLoad: () => this.onImgDidLoad(), onError: () => this.loadError() });
  }
  static get is() { return "deckgo-lazy-img"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["deckdeckgo-lazy-img.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["deckdeckgo-lazy-img.css"]
  }; }
  static get properties() { return {
    "imgSrc": {
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
        "text": "The image source (= src) to lazy load"
      },
      "attribute": "img-src",
      "reflect": true
    },
    "imgSrcSet": {
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
        "text": "The attribute \"srcset\" (= multiple URI) to lazy load in case you would like to provide multiple images for responsiveness"
      },
      "attribute": "img-src-set",
      "reflect": true
    },
    "imgAlt": {
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
        "text": "The image alternate text"
      },
      "attribute": "img-alt",
      "reflect": true
    },
    "imgSizes": {
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
        "text": "The set of media conditions to indicates what image size would be best to choose"
      },
      "attribute": "img-sizes",
      "reflect": true
    },
    "observerRootMargin": {
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
        "text": "A string which specifies a set of offsets to add to the root's bounding_box when calculating intersections, effectively shrinking or growing the root for calculation purposes."
      },
      "attribute": "observer-root-margin",
      "reflect": false,
      "defaultValue": "'300px'"
    },
    "observerThreshold": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number | number[]",
        "resolved": "number | number[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Either a single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for the observed target."
      },
      "attribute": "observer-threshold",
      "reflect": false,
      "defaultValue": "0.25"
    },
    "imgErrorSrc": {
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
        "text": "An optional image which could be displayed in case the main image would not be resolved"
      },
      "attribute": "img-error-src",
      "reflect": false
    },
    "svgSrc": {
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
        "text": "The SVG image source (= URI) to lazy load and to parse (no <img/> tag will be use to render the svg) aria-label\tstring"
      },
      "attribute": "svg-src",
      "reflect": true
    },
    "ariaLabel": {
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
        "text": "If you are using the above SVG option, provide the accessibility information using this attribute"
      },
      "attribute": "aria-label",
      "reflect": true
    },
    "intrinsicsize": {
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
        "text": "An intrinsicsize for the native lazy-loading"
      },
      "attribute": "intrinsicsize",
      "reflect": false
    },
    "imgWidth": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The image width"
      },
      "attribute": "img-width",
      "reflect": false
    },
    "imgHeight": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The image height"
      },
      "attribute": "img-height",
      "reflect": false
    },
    "customLoader": {
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
        "text": "In case you would like to take care by yourself to apply the load of the image. If turn to true then the component will emit an event customLoad when the image intersect the viewport instead of displaying it (doesn't apply for svg but only for img-src and img-src-set)"
      },
      "attribute": "custom-loader",
      "reflect": false,
      "defaultValue": "false"
    },
    "loading": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'lazy' | 'eager'",
        "resolved": "\"eager\" | \"lazy\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If set to lazy, the web native lazy capability of the browser, if available, will be used to lazy load the image"
      },
      "attribute": "loading",
      "reflect": false,
      "defaultValue": "'eager'"
    }
  }; }
  static get states() { return {
    "svgContent": {},
    "imgLoaded": {}
  }; }
  static get events() { return [{
      "method": "lazyImgDidLoad",
      "name": "lazyImgDidLoad",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "An event emitted after initialization when the component did load"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "innerImgDidLoad",
      "name": "innerImgDidLoad",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "An event emitted when the shadowed image has loaded"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "customLoad",
      "name": "customLoad",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted if component property custom-loader is set to true and if an image (img-src or img-src-set) has to be loaded."
      },
      "complexType": {
        "original": "DeckDeckGoCustomLoad",
        "resolved": "DeckDeckGoCustomLoad",
        "references": {
          "DeckDeckGoCustomLoad": {
            "location": "import",
            "path": "../interfaces/custom-load"
          }
        }
      }
    }]; }
  static get methods() { return {
    "lazyLoad": {
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
        "text": "This component also export an async method lazyLoad() in case you would like to trigger \"manually\" the loading of the image",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "imgSrc",
      "methodName": "handleAttrImgSrc"
    }]; }
}
