import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f937ef18.js';

const copy = async (attrs) => {
  var _a;
  try {
    await navigator.clipboard.writeText((_a = attrs.socialShareUrl) !== null && _a !== void 0 ? _a : window.location.href);
  }
  catch (err) {
    console.error('Well it seems that copy is not supported by this browser');
  }
};

// Same implementation as in class @deckdeckgo/utils
const isMobile = () => {
  const isTouchScreen = window.matchMedia('(any-pointer:coarse)').matches;
  const isMouseScreen = window.matchMedia('(any-pointer:fine)').matches;
  return isTouchScreen && !isMouseScreen;
};
const openNewWindow = ({ urlString, target = '_blank' }) => window.open(urlString, target);
const shareEncodedUrl = (socialShareUrl) => encodeURIComponent(socialShareUrl !== null && socialShareUrl !== void 0 ? socialShareUrl : window.location.href);

const dscvr = async ({ socialShareUrl, socialShareText, socialShareTitle, socialSharePortal, openWindowTarget: target }) => {
  let urlString = `https://dscvr.one/?url=${shareEncodedUrl(socialShareUrl)}`;
  if (socialShareText) {
    urlString += `&text=${encodeURIComponent(socialShareText)}`;
  }
  if (socialShareTitle) {
    urlString += '&title=' + encodeURIComponent(socialShareTitle);
  }
  if (socialSharePortal) {
    urlString += '&portal=' + encodeURIComponent(socialSharePortal);
  }
  openNewWindow({ urlString, target });
};

const email = async ({ socialShareTo, socialShareBody, socialShareSubject, socialShareCc, socialShareBcc }) => {
  let urlString = 'mailto:';
  if (socialShareTo) {
    urlString += encodeURIComponent(socialShareTo);
  }
  urlString += '?';
  if (socialShareBody) {
    urlString += 'body=' + encodeURIComponent(socialShareBody);
  }
  if (socialShareSubject) {
    urlString += '&subject=' + encodeURIComponent(socialShareSubject);
  }
  if (socialShareCc) {
    urlString += '&cc=' + encodeURIComponent(socialShareCc);
  }
  if (socialShareBcc) {
    urlString += '&bcc=' + encodeURIComponent(socialShareBcc);
  }
  if (window.self !== window.top) {
    window.open(urlString, '_blank');
  }
  else {
    window.open(urlString, '_self');
  }
};

/**
 * Source: https://github.com/720kb/angular-socialshare/blob/master/dist/angular-socialshare.js
 */
const shareFacebook = async ({ socialShareType, socialShareVia, socialShareRedirectUri, socialShareUrl, socialShareTo, socialShareDisplay, socialShareRef, socialShareFrom, socialShareSource, socialShareQuote, socialShareMobileiframe, socialShareHashtags, openWindowTarget: target }) => {
  let urlString;
  if (socialShareType === 'feed') {
    // if user specifies that they want to use the Facebook feed dialog
    //(https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.4)
    urlString = 'https://www.facebook.com/dialog/feed?';
    if (socialShareVia) {
      urlString += '&app_id=' + encodeURIComponent(socialShareVia);
    }
    if (socialShareRedirectUri) {
      urlString += '&redirect_uri=' + encodeURIComponent(socialShareRedirectUri);
    }
    if (socialShareUrl) {
      urlString += '&link=' + shareEncodedUrl(socialShareUrl);
    }
    if (socialShareTo) {
      urlString += '&to=' + encodeURIComponent(socialShareTo);
    }
    if (socialShareDisplay) {
      urlString += '&display=' + encodeURIComponent(socialShareDisplay);
    }
    if (socialShareRef) {
      urlString += '&ref=' + encodeURIComponent(socialShareRef);
    }
    if (socialShareFrom) {
      urlString += '&from=' + encodeURIComponent(socialShareFrom);
    }
    if (socialShareSource) {
      urlString += '&source=' + encodeURIComponent(socialShareSource);
    }
    openNewWindow({ urlString, target });
    return;
  }
  if (socialShareType === 'share') {
    // if user specifies that they want to use the Facebook share dialog
    //(https://developers.facebook.com/docs/sharing/reference/share-dialog)
    urlString = 'https://www.facebook.com/dialog/share?';
    if (socialShareVia) {
      urlString += '&app_id=' + encodeURIComponent(socialShareVia);
    }
    if (socialShareRedirectUri) {
      urlString += '&redirect_uri=' + encodeURIComponent(socialShareRedirectUri);
    }
    if (socialShareUrl) {
      urlString += '&href=' + shareEncodedUrl(socialShareUrl);
    }
    if (socialShareQuote) {
      urlString += '&quote=' + encodeURIComponent(socialShareQuote);
    }
    if (socialShareDisplay) {
      urlString += '&display=' + encodeURIComponent(socialShareDisplay);
    }
    if (socialShareMobileiframe) {
      urlString += '&mobile_iframe=' + encodeURIComponent(socialShareMobileiframe);
    }
    if (socialShareHashtags) {
      urlString += '&hashtag=' + encodeURIComponent(socialShareHashtags);
    }
    openNewWindow({ urlString, target });
    return;
  }
  if (socialShareType === 'send') {
    // if user specifies that they want to use the Facebook send dialog
    //(https://developers.facebook.com/docs/sharing/reference/send-dialog)
    urlString = 'https://www.facebook.com/dialog/send?';
    if (socialShareVia) {
      urlString += '&app_id=' + encodeURIComponent(socialShareVia);
    }
    if (socialShareRedirectUri) {
      urlString += '&redirect_uri=' + encodeURIComponent(socialShareRedirectUri);
    }
    if (socialShareUrl) {
      urlString += '&link=' + shareEncodedUrl(socialShareUrl);
    }
    if (socialShareTo) {
      urlString += '&to=' + encodeURIComponent(socialShareTo);
    }
    if (socialShareDisplay) {
      urlString += '&display=' + encodeURIComponent(socialShareDisplay);
    }
    openNewWindow({ urlString, target });
    return;
  }
  openNewWindow({
    urlString: `https://www.facebook.com/sharer/sharer.php?u=${shareEncodedUrl(socialShareUrl)}`,
    target
  });
};

const hackernews = async ({ socialShareUrl, socialShareText, openWindowTarget: target }) => {
  let urlString = 'https://news.ycombinator.com/submitlink?u=';
  //default to the current page if a URL isn't specified
  urlString += shareEncodedUrl(socialShareUrl);
  if (socialShareText) {
    urlString += '&t=' + encodeURIComponent(socialShareText);
  }
  openNewWindow({ urlString, target });
};

const linkedin = async ({ socialShareUrl, socialShareText, socialShareDescription, socialShareSource, openWindowTarget: target }) => {
  let urlString = 'https://www.linkedin.com/shareArticle?mini=true';
  urlString += '&url=' + shareEncodedUrl(socialShareUrl);
  if (socialShareText) {
    urlString += '&title=' + encodeURIComponent(socialShareText);
  }
  if (socialShareDescription) {
    urlString += '&summary=' + encodeURIComponent(socialShareDescription);
  }
  if (socialShareSource) {
    urlString += '&source=' + encodeURIComponent(socialShareSource);
  }
  openNewWindow({ urlString, target });
};

const openchat = async ({ socialShareUrl, socialShareText, openWindowTarget: target }) => {
  let urlString = `https://oc.app/?url=${shareEncodedUrl(socialShareUrl)}`;
  if (socialShareText) {
    urlString += `&text=${encodeURIComponent(socialShareText)}`;
  }
  // openchat requires a suffix `#/share` to understand it is a share action
  urlString += `#/share`;
  openNewWindow({ urlString, target });
};

const pinterest = async ({ socialShareUrl, socialShareMedia, socialShareText, openWindowTarget: target }) => {
  let urlString = `https://www.pinterest.com/pin/create/button/?url=${shareEncodedUrl(socialShareUrl)}`;
  if (socialShareMedia) {
    urlString += `&media=${encodeURIComponent(socialShareMedia)}`;
  }
  if (socialShareText) {
    urlString += `&description=${encodeURIComponent(socialShareText)}`;
  }
  openNewWindow({ urlString, target });
};

const reddit = async ({ socialShareSubreddit, socialShareUrl, socialShareText, openWindowTarget: target }) => {
  let urlString = 'https://www.reddit.com/';
  if (socialShareSubreddit) {
    urlString += 'r/' + socialShareSubreddit + '/submit?url=';
  }
  else {
    urlString += 'submit?url=';
  }
  urlString += shareEncodedUrl(socialShareUrl);
  if (socialShareText) {
    urlString += `&title=${encodeURIComponent(socialShareText)}`;
  }
  openNewWindow({ urlString, target });
};

const telegram = async ({ socialShareUrl, socialShareText, openWindowTarget: target }) => {
  let urlString = `https://t.me/share/url?url=${shareEncodedUrl(socialShareUrl)}`;
  if (socialShareText) {
    urlString += `&text=${encodeURIComponent(socialShareText)}`;
  }
  openNewWindow({ urlString, target });
};

const shareTwitter = async ({ socialShareText, socialShareVia, socialShareHashtags, socialShareUrl, openWindowTarget: target }) => {
  let urlString = 'https://www.twitter.com/intent/tweet?';
  if (socialShareText) {
    urlString += 'text=' + encodeURIComponent(socialShareText);
  }
  if (socialShareVia) {
    urlString += '&via=' + encodeURIComponent(socialShareVia);
  }
  if (socialShareHashtags) {
    urlString += '&hashtags=' + encodeURIComponent(socialShareHashtags);
  }
  //default to the current page if a URL isn't specified
  urlString += '&url=' + shareEncodedUrl(socialShareUrl);
  openNewWindow({ urlString, target });
};

const whatsapp = async ({ socialShareText, socialShareUrl, openWindowTarget: target }) => {
  const mobile = isMobile();
  let urlString = mobile
    ? 'https://api.whatsapp.com/send?text='
    : 'https://web.whatsapp.com/send?text=';
  if (socialShareText) {
    urlString += encodeURIComponent(socialShareText) + '%0A';
  }
  //default to the current page if a URL isn't specified
  urlString += shareEncodedUrl(socialShareUrl);
  openNewWindow({ urlString, target });
};

const webSocialShareCss = "div.web-social-share{visibility:hidden;opacity:0;cursor:pointer;touch-action:manipulation}div.web-social-share.web-social-share-open{visibility:visible;opacity:1}div.web-social-share.web-social-share-open div.web-social-share-backdrop{opacity:var(--web-social-share-backdrop-opacity, 0.25)}div.web-social-share.web-social-share-open div.web-social-share-action-sheet{opacity:1}div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height, 80px)}@media (max-width: 540px){div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height-small-device, 140px)}}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-backdrop{opacity:0}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:0}div.web-social-share div.web-social-share-backdrop{opacity:0;transition:opacity 0.1s linear;background-color:var(--web-social-share-backdrop-background, black);z-index:var(--web-social-share-zindex, 1000);transform:translate3d(0, 0, 2px);left:0;top:0;position:fixed;height:100%;width:100%}div.web-social-share div.web-social-share-action-sheet{left:0;right:0;top:0;bottom:0;margin:auto;position:fixed;z-index:calc(var(--web-social-share-zindex, 1000) + 1);transform:translate3d(0, 0, 3px);width:100%;max-width:540px}@media (min-width: 540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{border-radius:var(--web-social-share-action-sheet-group-border-radius, 8px 8px 0 0)}}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container{display:flex;flex-flow:column;justify-content:flex-end;height:100%;max-height:100%}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{box-shadow:var(--web-social-share-action-sheet-group-box-shadow, 0 0 8px 4px rgba(0, 0, 0, 0.1));z-index:calc(var(--web-social-share-zindex, 1000) + 10);transform:translate3d(0, 0, 10px);--background:var(--web-social-share-action-sheet-group-background, #fafafa);background:var(--background);display:flex;justify-content:center;flex-wrap:wrap;height:0;transition-timing-function:cubic-bezier(0.36, 0.66, 0.04, 1);transition:height 0.2s ease-in}@media (max-width: 540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{justify-content:flex-start}}div.web-social-share div.web-social-share-target{margin:auto;width:var(--web-social-share-target-width, 4rem);height:var(--web-social-share-target-height, 3rem);display:flex;flex-direction:column;align-items:center;justify-content:center}div.web-social-share div.web-social-share-target button{position:relative;overflow:hidden;background-position:center;background-color:var(--background);transition:background 0.8s;border-radius:var(--web-social-share-button-border-radius, 8px);cursor:pointer;border:0;width:var(--web-social-share-button-width, 100%);height:var(--web-social-share-button-height, 100%);font-size:var(--web-social-share-button-font-size)}div.web-social-share div.web-social-share-target button:hover{background:var(--background) radial-gradient(circle, transparent 1%, var(--background) 1%) center/15000%}div.web-social-share div.web-social-share-target button:active{background-color:var(--web-social-share-button-ripple-effect-color, #cecece);background-size:100%;transition:background 0s}div.web-social-share div.web-social-share-target p{margin:var(--web-social-share-brand-margin, 2px 0);color:var(--web-social-share-brand-color, inherit);font-size:var(--web-social-share-brand-font-size, 0.6rem)}div.web-social-share div.web-social-share-target div.web-social-share-button-icon{margin:0;display:flex;flex-direction:column;justify-content:center;align-items:center}::slotted([slot=facebook]),::slotted([slot=twitter]),::slotted([slot=email]),::slotted([slot=linkedin]),::slotted([slot=pinterest]),::slotted([slot=reddit]),::slotted([slot=whatsapp]),::slotted([slot=copy]),::slotted([slot=hackernews]){display:none}";

const WebSocialShare = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closed = createEvent(this, "closed", 7);
  }
  hide() {
    if (this.refContainer) {
      this.refContainer.classList.add('web-social-share-transition-close');
      setTimeout(() => {
        // Reflect css animation speed 400ms, see css
        this.show = false;
        this.refContainer.classList.remove('web-social-share-transition-close');
        this.closed.emit();
      }, 200);
    }
    else {
      // Well we don't find the action sheet, we could mark it as not displayed
      this.show = false;
      this.closed.emit();
    }
  }
  async handleShare($event, attributes, action) {
    $event.stopPropagation();
    await action(attributes);
    setTimeout(() => this.hide(), 250);
  }
  render() {
    return (h("div", { class: this.show
        ? 'web-social-share web-social-share-open'
        : 'web-social-share web-social-share-close', ref: (el) => (this.refContainer = el) }, h("div", { class: "web-social-share-backdrop", onClick: () => this.hide() }), h("div", { class: "web-social-share-action-sheet", onClick: () => this.hide() }, h("div", { class: "web-social-share-action-sheet-container" }, h("div", { class: "web-social-share-action-sheet-group" }, this.renderTargets())))));
  }
  renderTargets() {
    var _a;
    if (!((_a = this.share) === null || _a === void 0 ? void 0 : _a.config)) {
      return undefined;
    }
    return this.share.config.map((config) => (h("div", { class: "web-social-share-target" }, this.renderButtons(config))));
  }
  renderButtons(share) {
    if (share.facebook) {
      return this.renderButton(share.facebook, 'facebook', shareFacebook, 'Facebook');
    }
    else if (share.twitter) {
      return this.renderButton(share.twitter, 'twitter', shareTwitter, 'Twitter');
    }
    else if (share.email) {
      return this.renderButton(share.email, 'email', email, 'Email');
    }
    else if (share.linkedin) {
      return this.renderButton(share.linkedin, 'linkedin', linkedin, 'Linkedin');
    }
    else if (share.pinterest) {
      return this.renderButton(share.pinterest, 'pinterest', pinterest, 'Pinterest');
    }
    else if (share.reddit) {
      return this.renderButton(share.reddit, 'reddit', reddit, 'Reddit');
    }
    else if (share.whatsapp) {
      return this.renderButton(share.whatsapp, 'whatsapp', whatsapp, 'WhatsApp');
    }
    else if (share.copy) {
      return this.renderButton(share.copy, 'copy', copy, 'Copy');
    }
    else if (share.hackernews) {
      return this.renderButton(share.hackernews, 'hackernews', hackernews, 'Hacker News');
    }
    else if (share.telegram) {
      return this.renderButton(share.telegram, 'telegram', telegram, 'Telegram');
    }
    else if (share.openchat) {
      return this.renderButton(share.openchat, 'openchat', openchat, 'OpenChat');
    }
    else if (share.dscvr) {
      return this.renderButton(share.dscvr, 'dscvr', dscvr, 'DSCVR');
    }
    return undefined;
  }
  renderButton(attributes, slotName, action, defaultBrandName) {
    return (h("button", { onClick: ($event) => this.handleShare($event, attributes, action), class: "web-social-share-button" }, h("div", { class: "web-social-share-button-icon" }, h("slot", { name: slotName })), this.renderName(attributes, defaultBrandName)));
  }
  renderName(displayAttributes, defaultBrandName) {
    if (this.share.displayNames) {
      return (h("p", null, displayAttributes && displayAttributes.brandName && displayAttributes.brandName !== ''
        ? displayAttributes.brandName
        : defaultBrandName));
    }
    return undefined;
  }
  get el() { return getElement(this); }
};
WebSocialShare.style = webSocialShareCss;

export { WebSocialShare as web_social_share };
