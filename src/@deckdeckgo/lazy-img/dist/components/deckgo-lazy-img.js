import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

// From Ionicons
// https://github.com/ionic-team/ionicons/blob/master/src/components/icon/validate.ts
const validateContent = (svgContent) => {
  if (svgContent) {
    const div = document.createElement('div');
    div.innerHTML = svgContent;
    // setup this way to ensure it works on our buddy IE
    for (let i = div.childNodes.length - 1; i >= 0; i--) {
      if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
        div.removeChild(div.childNodes[i]);
      }
    }
    // must only have 1 root element
    const svgElm = div.firstElementChild;
    if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
      svgElm.setAttribute('class', 's-ion-icon');
      // root element must be an svg
      // lets double check we've got valid elements
      // do not allow scripts
      if (isValid(svgElm)) {
        return div.innerHTML;
      }
    }
  }
  return '';
};
const isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === 'script') {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const val = elm.attributes[i].value;
      if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};
const isStr = (val) => typeof val === 'string';

// From Ionicons
const requests = new Map();
const getSvgContent = (url) => {
  // see if we already have a request for this url
  let req = requests.get(url);
  if (!req) {
    // we don't already have a request
    req = fetch(url)
      .then((rsp) => {
      if (rsp.status <= 299) {
        return rsp.text();
      }
      return Promise.resolve(null);
    })
      .then((svgContent) => validateContent(svgContent));
    // cache for the same requests
    requests.set(url, req);
  }
  return req;
};

const deckdeckgoLazyImgCss = ":host{fill:currentColor}:host(.loaded) img,:host(.loaded) svg{opacity:var(--deckgo-lazy-img-opacity-loaded, 1)}div.svg-container{height:var(--deckgo-lazy-img-height);width:var(--deckgo-lazy-img-width)}img,svg{pointer-events:var(--deckgo-lazy-img-pointer-events, none);height:var(--deckgo-lazy-img-height);width:var(--deckgo-lazy-img-width);max-height:var(--deckgo-lazy-img-max-height);max-width:var(--deckgo-lazy-img-max-width, 100%);min-height:var(--deckgo-lazy-img-min-height);min-width:var(--deckgo-lazy-img-min-width);float:var(--deckgo-lazy-img-float);padding:var(--deckgo-lazy-img-padding);vertical-align:var(--deckgo-lazy-img-vertical-align);display:var(--deckgo-lazy-img-display);border-radius:var(--deckgo-lazy-img-border-radius);-o-object-fit:var(--deckgo-lazy-img-object-fit);object-fit:var(--deckgo-lazy-img-object-fit);opacity:var(--deckgo-lazy-img-opacity-not-loaded, 0);transition:var(--deckgo-lazy-img-transition, opacity 0.15s linear);box-shadow:var(--deckgo-lazy-img-box-shadow)}";

let DeckdeckgoLazyImg = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.lazyImgDidLoad = createEvent(this, "lazyImgDidLoad", 7);
    this.innerImgDidLoad = createEvent(this, "innerImgDidLoad", 7);
    this.customLoad = createEvent(this, "customLoad", 7);
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
      return (h(Host, { class: hostClass }, h("div", { innerHTML: this.svgContent, class: "svg-container" })));
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
  get el() { return this; }
  static get watchers() { return {
    "imgSrc": ["handleAttrImgSrc"]
  }; }
  static get style() { return deckdeckgoLazyImgCss; }
};
DeckdeckgoLazyImg = /*@__PURE__*/ proxyCustomElement(DeckdeckgoLazyImg, [1, "deckgo-lazy-img", {
    "imgSrc": [513, "img-src"],
    "imgSrcSet": [513, "img-src-set"],
    "imgAlt": [513, "img-alt"],
    "imgSizes": [513, "img-sizes"],
    "observerRootMargin": [1, "observer-root-margin"],
    "observerThreshold": [2, "observer-threshold"],
    "imgErrorSrc": [1, "img-error-src"],
    "svgSrc": [513, "svg-src"],
    "ariaLabel": [513, "aria-label"],
    "intrinsicsize": [1],
    "imgWidth": [2, "img-width"],
    "imgHeight": [2, "img-height"],
    "customLoader": [4, "custom-loader"],
    "loading": [1],
    "svgContent": [32],
    "imgLoaded": [32],
    "lazyLoad": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["deckgo-lazy-img"];
  components.forEach(tagName => { switch (tagName) {
    case "deckgo-lazy-img":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DeckdeckgoLazyImg);
      }
      break;
  } });
}

const DeckgoLazyImg = DeckdeckgoLazyImg;
const defineCustomElement = defineCustomElement$1;

export { DeckgoLazyImg, defineCustomElement };
