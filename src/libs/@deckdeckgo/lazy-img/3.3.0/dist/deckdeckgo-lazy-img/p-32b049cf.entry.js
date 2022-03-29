import{r as i,c as t,h as s,H as e,g as a}from "./p-f25cecc3.js";const r= i=>{if(1===i.nodeType){if("script"===i.nodeName.toLowerCase())return!1;for(let t=0; t<i.attributes.length; t++){const s=i.attributes[t].value;if(o(s)&&0===s.toLowerCase().indexOf("on"))return!1}for(let t=0; t<i.childNodes.length; t++)if(!r(i.childNodes[t]))return!1}return!0},o= i=>"string"==typeof i,h=new Map;let n=class{constructor(s){i(this,s),this.lazyImgDidLoad=t(this,"lazyImgDidLoad",7),this.innerImgDidLoad=t(this,"innerImgDidLoad",7),this.customLoad=t(this,"customLoad",7),this.observerRootMargin="300px",this.observerThreshold=.25,this.customLoader=!1,this.loading="eager",this.imgLoaded=!1,this.onIntersection=async i=>{!i||i.length<=0||await this.handleIntersection(i[0])}}async componentDidLoad(){await this.init(),this.lazyImgDidLoad.emit()}async handleAttrImgSrc(){await this.init()}async init(){"loading"in HTMLImageElement.prototype&&!this.svgSrc&&"lazy"===this.loading?await this.loadImmediately():window&&"IntersectionObserver"in window?await this.deferIntersectionObserverLoad():await this.loadImmediately()}loadImmediately(){return this.load()}deferIntersectionObserverLoad(){return new Promise((i=>{this.observer=new IntersectionObserver(this.onIntersection,{rootMargin:this.observerRootMargin,threshold:this.observerThreshold}),this.observer.observe(this.el.shadowRoot.host),i()}))}lazyLoad(){return new Promise((async i=>{await this.load(),i()}))}handleIntersection(i){return new Promise((async t=>{i.isIntersecting&&(this.observer&&this.observer.disconnect(),await this.load()),t()}))}load(){return new Promise((async i=>{this.svgSrc?await this.loadSvg():await this.loadImg(),i()}))}loadImg(){return new Promise((i=>{const t=this.el.shadowRoot.querySelector("img");if(t){if(this.customLoader)return this.customLoad.emit({imgElement:t,imgSrc:this.imgSrc,imgSrcSet:this.imgSrcSet}),void i();this.imgSrc&&t.setAttribute("src",this.imgSrc),this.imgSrcSet&&t.setAttribute("srcset",this.imgSrcSet),i()}else i()}))}loadSvg(){return new Promise((async i=>{try{this.svgContent=await(i=>{let t=h.get(i);return t||(t=fetch(i).then((i=>i.status<=299?i.text():Promise.resolve(null))).then((i=>(i=>{if(i){const t=document.createElement("div");t.innerHTML=i;for(let i=t.childNodes.length-1; i>=0; i--)"svg"!==t.childNodes[i].nodeName.toLowerCase()&&t.removeChild(t.childNodes[i]);const s=t.firstElementChild;if(s&&"svg"===s.nodeName.toLowerCase()&&(s.setAttribute("class","s-ion-icon"),r(s)))return t.innerHTML}return""})(i))),h.set(i,t)),t})(this.svgSrc)}catch(i){console.error(i)}i()}))}loadError(){return new Promise((i=>{const t=this.el.shadowRoot.querySelector("img");t&&this.imgErrorSrc&&t.src!==this.imgErrorSrc?(t.src!==this.imgSrc&&t.srcset!==this.imgSrcSet||(t.src=this.imgErrorSrc),i()):i()}))}onImgDidLoad(){this.imgLoaded=!0,this.innerImgDidLoad.emit()}render(){return s(e,{class:this.imgLoaded||this.svgContent?"loaded":""},this.svgContent?s("div",{innerHTML:this.svgContent,class:"svg-container"}):this.renderImage())}renderImage(){return s("img",{alt:this.imgLoaded?this.imgAlt?this.imgAlt:this.imgSrc:"",loading:this.loading,sizes:this.imgSizes?this.imgSizes:void 0,intrinsicsize:this.intrinsicsize,width:this.imgWidth,height:this.imgHeight,onLoad:()=>this.onImgDidLoad(),onError:()=>this.loadError()})}get el(){return a(this)}static get watchers(){return{imgSrc:["handleAttrImgSrc"]}}};n.style=":host{fill:currentColor}:host(.loaded) img,:host(.loaded) svg{opacity:var(--deckgo-lazy-img-opacity-loaded, 1)}div.svg-container{height:var(--deckgo-lazy-img-height);width:var(--deckgo-lazy-img-width)}img,svg{pointer-events:var(--deckgo-lazy-img-pointer-events, none);height:var(--deckgo-lazy-img-height);width:var(--deckgo-lazy-img-width);max-height:var(--deckgo-lazy-img-max-height);max-width:var(--deckgo-lazy-img-max-width, 100%);min-height:var(--deckgo-lazy-img-min-height);min-width:var(--deckgo-lazy-img-min-width);float:var(--deckgo-lazy-img-float);padding:var(--deckgo-lazy-img-padding);vertical-align:var(--deckgo-lazy-img-vertical-align);display:var(--deckgo-lazy-img-display);border-radius:var(--deckgo-lazy-img-border-radius);-o-object-fit:var(--deckgo-lazy-img-object-fit);object-fit:var(--deckgo-lazy-img-object-fit);opacity:var(--deckgo-lazy-img-opacity-not-loaded, 0);transition:var(--deckgo-lazy-img-transition, opacity 0.15s linear);box-shadow:var(--deckgo-lazy-img-box-shadow)}";export{n as deckgo_lazy_img}
