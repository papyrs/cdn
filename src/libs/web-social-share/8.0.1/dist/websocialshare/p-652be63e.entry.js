import{r as e,c as o,h as t,g as i}from"./p-12f96bea.js";const a=()=>null===window||void 0===window?void 0:window.matchMedia("(any-pointer:coarse)").matches,s=e=>{window.self!==window.top?window.open(e,"_blank"):window.open(e,"_self")},n=e=>encodeURIComponent(e||window.location.href),r=async e=>{let o;e.socialShareType&&"feed"===e.socialShareType?(o="https://www.facebook.com/dialog/feed?",e.socialShareVia&&(o+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(o+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(o+="&link="+n(e.socialShareUrl)),e.socialShareTo&&(o+="&to="+encodeURIComponent(e.socialShareTo)),e.socialShareDisplay&&(o+="&display="+encodeURIComponent(e.socialShareDisplay)),e.socialShareRef&&(o+="&ref="+encodeURIComponent(e.socialShareRef)),e.socialShareFrom&&(o+="&from="+encodeURIComponent(e.socialShareFrom)),e.socialShareSource&&(o+="&source="+encodeURIComponent(e.socialShareSource)),window.open(o,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):e.socialShareType&&"share"===e.socialShareType?(o="https://www.facebook.com/dialog/share?",e.socialShareVia&&(o+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(o+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(o+="&href="+n(e.socialShareUrl)),e.socialShareQuote&&(o+="&quote="+encodeURIComponent(e.socialShareQuote)),e.socialShareDisplay&&(o+="&display="+encodeURIComponent(e.socialShareDisplay)),e.socialShareMobileiframe&&(o+="&mobile_iframe="+encodeURIComponent(e.socialShareMobileiframe)),e.socialShareHashtags&&(o+="&hashtag="+encodeURIComponent(e.socialShareHashtags)),window.open(o,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):e.socialShareType&&"send"===e.socialShareType?(o="https://www.facebook.com/dialog/send?",e.socialShareVia&&(o+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(o+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(o+="&link="+n(e.socialShareUrl)),e.socialShareTo&&(o+="&to="+encodeURIComponent(e.socialShareTo)),e.socialShareDisplay&&(o+="&display="+encodeURIComponent(e.socialShareDisplay)),window.open(o,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):window.open("https://www.facebook.com/sharer/sharer.php?u="+n(e.socialShareUrl),"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},c=async e=>{let o="https://www.twitter.com/intent/tweet?";e.socialShareText&&(o+="text="+encodeURIComponent(e.socialShareText)),e.socialShareVia&&(o+="&via="+encodeURIComponent(e.socialShareVia)),e.socialShareHashtags&&(o+="&hashtags="+encodeURIComponent(e.socialShareHashtags)),o+="&url="+n(e.socialShareUrl),a()?s(o):window.open(o,"Twitter","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},d=async e=>{let o="mailto:";e.socialShareTo&&(o+=encodeURIComponent(e.socialShareTo)),o+="?",e.socialShareBody&&(o+="body="+encodeURIComponent(e.socialShareBody)),e.socialShareSubject&&(o+="&subject="+encodeURIComponent(e.socialShareSubject)),e.socialShareCc&&(o+="&cc="+encodeURIComponent(e.socialShareCc)),e.socialShareBcc&&(o+="&bcc="+encodeURIComponent(e.socialShareBcc)),s(o)},h=async e=>{let o="https://www.linkedin.com/shareArticle?mini=true";o+="&url="+n(e.socialShareUrl),e.socialShareText&&(o+="&title="+encodeURIComponent(e.socialShareText)),e.socialShareDescription&&(o+="&summary="+encodeURIComponent(e.socialShareDescription)),e.socialShareSource&&(o+="&source="+encodeURIComponent(e.socialShareSource)),window.open(o,"Linkedin","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},l=async e=>{window.open("https://www.pinterest.com/pin/create/button/?url="+n(e.socialShareUrl)+"&media="+encodeURIComponent(e.socialShareMedia)+"&description="+encodeURIComponent(e.socialShareText),"Pinterest","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},w=async e=>{let o="https://www.reddit.com/";o+=e.socialShareSubreddit?"r/"+e.socialShareSubreddit+"/submit?url=":"submit?url=",e.socialSharePopupWidth<900&&(e.socialSharePopupWidth=900),e.socialSharePopupHeight<650&&(e.socialSharePopupHeight=650);let t=o+n(e.socialShareUrl);e.socialShareText&&(t+=`&title=${encodeURIComponent(e.socialShareText)}`),window.open(t,"Reddit","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},b=async e=>{const o=a();let t=o?"https://api.whatsapp.com/send?text=":"https://web.whatsapp.com/send?text=";e.socialShareText&&(t+=encodeURIComponent(e.socialShareText)+"%0A"),t+=n(e.socialShareUrl),o?s(t):window.open(t,"WhatsApp","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},p=async e=>{try{await navigator.clipboard.writeText(e.socialShareUrl||window.location.href)}catch(e){console.error("Well it seems that copy is not supported by this browser")}},u=async e=>{let o="https://news.ycombinator.com/submitlink?u=";o+=n(e.socialShareUrl),e.socialShareText&&(o+="&t="+encodeURIComponent(e.socialShareText)),s(o)},m=async e=>{let o=`https://t.me/share/url?url=${n(e.socialShareUrl)}`;e.socialShareText&&(o+=`&text=${encodeURIComponent(e.socialShareText)}`),s(o)};let v=class{constructor(t){e(this,t),this.closed=o(this,"closed",7)}hide(){this.refContainer?(this.refContainer.classList.add("web-social-share-transition-close"),setTimeout((()=>{this.show=!1,this.refContainer.classList.remove("web-social-share-transition-close"),this.closed.emit()}),200)):(this.show=!1,this.closed.emit())}async handleShare(e,o,t){e.stopPropagation(),await t(o),setTimeout((()=>this.hide()),250)}render(){return t("div",{class:this.show?"web-social-share web-social-share-open":"web-social-share web-social-share-close",ref:e=>this.refContainer=e},t("div",{class:"web-social-share-backdrop",onClick:()=>this.hide()}),t("div",{class:"web-social-share-action-sheet",onClick:()=>this.hide()},t("div",{class:"web-social-share-action-sheet-container"},t("div",{class:"web-social-share-action-sheet-group"},this.renderTargets()))))}renderTargets(){var e;if(null===(e=this.share)||void 0===e?void 0:e.config)return this.share.config.map((e=>t("div",{class:"web-social-share-target"},this.renderButtons(e))))}renderButtons(e){return e.facebook?this.renderButton(e.facebook,"facebook",r,"Facebook"):e.twitter?this.renderButton(e.twitter,"twitter",c,"Twitter"):e.email?this.renderButton(e.email,"email",d,"Email"):e.linkedin?this.renderButton(e.linkedin,"linkedin",h,"Linkedin"):e.pinterest?this.renderButton(e.pinterest,"pinterest",l,"Pinterest"):e.reddit?this.renderButton(e.reddit,"reddit",w,"Reddit"):e.whatsapp?this.renderButton(e.whatsapp,"whatsapp",b,"WhatsApp"):e.copy?this.renderButton(e.copy,"copy",p,"Copy"):e.hackernews?this.renderButton(e.hackernews,"hackernews",u,"Hacker News"):e.telegram?this.renderButton(e.telegram,"telegram",m,"Telegram"):void 0}renderButton(e,o,i,a){return t("button",{onClick:o=>this.handleShare(o,e,i),class:"web-social-share-button"},t("div",{class:"web-social-share-button-icon"},t("slot",{name:o})),this.renderName(e,a))}renderName(e,o){if(this.share.displayNames)return t("p",null,e&&e.brandName&&""!==e.brandName?e.brandName:o)}get el(){return i(this)}};v.style="div.web-social-share{visibility:hidden;opacity:0;cursor:pointer;touch-action:manipulation}div.web-social-share.web-social-share-open{visibility:visible;opacity:1}div.web-social-share.web-social-share-open div.web-social-share-backdrop{opacity:var(--web-social-share-backdrop-opacity, 0.25)}div.web-social-share.web-social-share-open div.web-social-share-action-sheet{opacity:1}div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height, 80px)}@media (max-width: 540px){div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height-small-device, 140px)}}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-backdrop{opacity:0}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:0}div.web-social-share div.web-social-share-backdrop{opacity:0;transition:opacity 0.1s linear;background-color:var(--web-social-share-backdrop-background, black);z-index:var(--web-social-share-zindex, 1000);transform:translate3d(0, 0, 2px);left:0;top:0;position:fixed;height:100%;width:100%}div.web-social-share div.web-social-share-action-sheet{left:0;right:0;top:0;bottom:0;margin:auto;position:fixed;z-index:calc(var(--web-social-share-zindex, 1000) + 1);transform:translate3d(0, 0, 3px);width:100%;max-width:540px}@media (min-width: 540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{border-radius:var(--web-social-share-action-sheet-group-border-radius, 8px 8px 0 0)}}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container{display:flex;flex-flow:column;justify-content:flex-end;height:100%;max-height:100%}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{box-shadow:var(--web-social-share-action-sheet-group-box-shadow, 0 0 8px 4px rgba(0, 0, 0, 0.1));z-index:calc(var(--web-social-share-zindex, 1000) + 10);transform:translate3d(0, 0, 10px);--background:var(--web-social-share-action-sheet-group-background, #fafafa);background:var(--background);display:flex;justify-content:center;flex-wrap:wrap;height:0;transition-timing-function:cubic-bezier(0.36, 0.66, 0.04, 1);transition:height 0.2s ease-in}@media (max-width: 540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{justify-content:flex-start}}div.web-social-share div.web-social-share-target{margin:auto;width:var(--web-social-share-target-width, 4rem);height:var(--web-social-share-target-height, 3rem);display:flex;flex-direction:column;align-items:center;justify-content:center}div.web-social-share div.web-social-share-target button{position:relative;overflow:hidden;background-position:center;background-color:var(--background);transition:background 0.8s;border-radius:var(--web-social-share-button-border-radius, 8px);cursor:pointer;border:0;width:var(--web-social-share-button-width, 100%);height:var(--web-social-share-button-height, 100%);font-size:var(--web-social-share-button-font-size)}div.web-social-share div.web-social-share-target button:hover{background:var(--background) radial-gradient(circle, transparent 1%, var(--background) 1%) center/15000%}div.web-social-share div.web-social-share-target button:active{background-color:var(--web-social-share-button-ripple-effect-color, #cecece);background-size:100%;transition:background 0s}div.web-social-share div.web-social-share-target p{margin:var(--web-social-share-brand-margin, 2px 0);color:var(--web-social-share-brand-color, inherit);font-size:var(--web-social-share-brand-font-size, 0.6rem)}div.web-social-share div.web-social-share-target div.web-social-share-button-icon{margin:0;display:flex;flex-direction:column;justify-content:center;align-items:center}::slotted([slot=facebook]),::slotted([slot=twitter]),::slotted([slot=email]),::slotted([slot=linkedin]),::slotted([slot=pinterest]),::slotted([slot=reddit]),::slotted([slot=whatsapp]),::slotted([slot=copy]),::slotted([slot=hackernews]){display:none}";export{v as web_social_share}