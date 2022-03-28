import { EventEmitter } from '../../stencil-public-runtime';
import { DeckDeckGoCustomLoad } from '../interfaces/custom-load';
export declare class DeckdeckgoLazyImg {
  el: HTMLElement;
  /**
   * An event emitted after initialization when the component did load
   */
  lazyImgDidLoad: EventEmitter;
  /**
   * An event emitted when the shadowed image has loaded
   */
  innerImgDidLoad: EventEmitter;
  /**
   * The image source (= src) to lazy load
   */
  imgSrc: string;
  /**
   * The attribute "srcset" (= multiple URI) to lazy load in case you would like to provide multiple images for responsiveness
   */
  imgSrcSet: string;
  /**
   * The image alternate text
   */
  imgAlt: string;
  /**
   * 	The set of media conditions to indicates what image size would be best to choose
   */
  imgSizes: string;
  /**
   * A string which specifies a set of offsets to add to the root's bounding_box when calculating intersections, effectively shrinking or growing the root for calculation purposes.
   */
  observerRootMargin: string;
  /**
   * Either a single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for the observed target.
   */
  observerThreshold: number | number[];
  /**
   * An optional image which could be displayed in case the main image would not be resolved
   */
  imgErrorSrc: string;
  /**
   * The SVG image source (= URI) to lazy load and to parse (no <img/> tag will be use to render the svg) aria-label	string
   */
  svgSrc: string;
  /**
   * If you are using the above SVG option, provide the accessibility information using this attribute
   */
  ariaLabel: string;
  /**
   * An intrinsicsize for the native lazy-loading
   */
  intrinsicsize: string;
  /**
   * The image width
   */
  imgWidth: number;
  /**
   * The image height
   */
  imgHeight: number;
  /**
   * In case you would like to take care by yourself to apply the load of the image. If turn to true then the component will emit an event customLoad when the image intersect the viewport instead of displaying it (doesn't apply for svg but only for img-src and img-src-set)
   */
  customLoader: boolean;
  /**
   * If set to lazy, the web native lazy capability of the browser, if available, will be used to lazy load the image
   */
  loading: 'lazy' | 'eager';
  private svgContent;
  private observer;
  private imgLoaded;
  /**
   * Emitted if component property custom-loader is set to true and if an image (img-src or img-src-set) has to be loaded.
   */
  customLoad: EventEmitter<DeckDeckGoCustomLoad>;
  componentDidLoad(): Promise<void>;
  handleAttrImgSrc(): Promise<void>;
  private init;
  private loadImmediately;
  private deferIntersectionObserverLoad;
  /**
   * This component also export an async method lazyLoad() in case you would like to trigger "manually" the loading of the image
   */
  lazyLoad(): Promise<void>;
  private onIntersection;
  private handleIntersection;
  private load;
  private loadImg;
  private loadSvg;
  private loadError;
  private onImgDidLoad;
  render(): any;
  private renderImage;
}
