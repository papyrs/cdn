let t,e,n,l=!1,o=!1,s=!1,r=!1,c=!1;const i="undefined"!=typeof window?window:{},f=i.document||{head:{}},u={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},a=t=>Promise.resolve(t),$=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(t){}return!1})(),d=(t,e,n)=>{n&&n.map((([n,l,o])=>{const s=p(t,n),r=h(e,o),c=y(n);u.ael(s,l,r,c),(e.o=e.o||[]).push((()=>u.rel(s,l,r,c)))}))},h=(t,e)=>n=>{try{256&t.t?t.i[e](n):(t.u=t.u||[]).push([e,n])}catch(t){ft(t)}},p=(t,e)=>8&e?i:t,y=t=>0!=(2&t),m=new WeakMap,b=t=>"sc-"+t.$,w={},g=t=>"object"==(t=typeof t)||"function"===t,v=(t,e,...n)=>{let l=null,o=null,s=!1,r=!1;const c=[],i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!g(l))&&(l+=""),s&&r?c[c.length-1].h+=l:c.push(s?j(null,l):l),r=s)};if(i(n),e){e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}}if("function"==typeof t)return t(null===e?{}:e,c,k);const f=j(t,null);return f.p=e,c.length>0&&(f.m=c),f.g=o,f},j=(t,e)=>({t:0,v:t,h:e,j:null,m:null,p:null,g:null}),S={},k={forEach:(t,e)=>t.map(O).forEach(e),map:(t,e)=>t.map(O).map(e).map(M)},O=t=>({vattrs:t.p,vchildren:t.m,vkey:t.S,vname:t.g,vtag:t.v,vtext:t.h}),M=t=>{if("function"==typeof t.vtag){const e=Object.assign({},t.vattrs);return t.vkey&&(e.key=t.vkey),t.vname&&(e.name=t.vname),v(t.vtag,e,...t.vchildren||[])}const e=j(t.vtag,t.vtext);return e.p=t.vattrs,e.m=t.vchildren,e.S=t.vkey,e.g=t.vname,e},C=(t,e,n,l,o,s)=>{if(n!==l){let r=it(t,e),c=e.toLowerCase();if("class"===e){const e=t.classList,o=R(n),s=R(l);e.remove(...o.filter((t=>t&&!s.includes(t)))),e.add(...s.filter((t=>t&&!o.includes(t))))}else if("style"===e){for(const e in n)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)n&&l[e]===n[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("ref"===e)l&&l(t);else if(r||"o"!==e[0]||"n"!==e[1]){const c=g(l);if((r||c&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{const o=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(t){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!r||4&s||o)&&!c&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):it(i,c)?c.slice(2):c[2]+e.slice(3),n&&u.rel(t,e,n,!1),l&&u.ael(t,e,l,!1)}},x=/\s/,R=t=>t?t.split(x):[],T=(t,e,n,l)=>{const o=11===e.j.nodeType&&e.j.host?e.j.host:e.j,s=t&&t.p||w,r=e.p||w;for(l in s)l in r||C(o,l,s[l],void 0,n,e.t);for(l in r)C(o,l,s[l],r[l],n,e.t)},E=(o,c,i,u)=>{const a=c.m[i];let $,d,h,p=0;if(l||(s=!0,"slot"===a.v&&(t&&u.classList.add(t+"-s"),a.t|=a.m?2:1)),null!==a.h)$=a.j=f.createTextNode(a.h);else if(1&a.t)$=a.j=f.createTextNode("");else{if(r||(r="svg"===a.v),$=a.j=f.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&a.t?"slot-fb":a.v),r&&"foreignObject"===a.v&&(r=!1),T(null,a,r),null!=t&&$["s-si"]!==t&&$.classList.add($["s-si"]=t),a.m)for(p=0;p<a.m.length;++p)d=E(o,a,p,$),d&&$.appendChild(d);"svg"===a.v?r=!1:"foreignObject"===$.tagName&&(r=!0)}return $["s-hn"]=n,3&a.t&&($["s-sr"]=!0,$["s-cr"]=e,$["s-sn"]=a.g||"",h=o&&o.m&&o.m[i],h&&h.v===a.v&&o.j&&L(o.j,!1)),$},L=(t,e)=>{u.t|=1;const l=t.childNodes;for(let t=l.length-1;t>=0;t--){const o=l[t];o["s-hn"]!==n&&o["s-ol"]&&(H(o).insertBefore(o,A(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),e&&L(o,e)}u.t&=-2},N=(t,e,l,o,s,r)=>{let c,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=E(null,l,s,t),c&&(o[s].j=c,i.insertBefore(c,A(e))))},P=(t,e,n,l,s)=>{for(;e<=n;++e)(l=t[e])&&(s=l.j,_(l),o=!0,s["s-ol"]?s["s-ol"].remove():L(s,!0),s.remove())},W=(t,e)=>t.v===e.v&&("slot"!==t.v||t.g===e.g),A=t=>t&&t["s-ol"]||t,H=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,U=(t,e)=>{const n=e.j=t.j,l=t.m,o=e.m,s=e.v,c=e.h;let i;null===c?(r="svg"===s||"foreignObject"!==s&&r,"slot"===s||T(t,e,r),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,c=e.length-1,i=e[0],f=e[c],u=l.length-1,a=l[0],$=l[u];for(;s<=c&&r<=u;)null==i?i=e[++s]:null==f?f=e[--c]:null==a?a=l[++r]:null==$?$=l[--u]:W(i,a)?(U(i,a),i=e[++s],a=l[++r]):W(f,$)?(U(f,$),f=e[--c],$=l[--u]):W(i,$)?("slot"!==i.v&&"slot"!==$.v||L(i.j.parentNode,!1),U(i,$),t.insertBefore(i.j,f.j.nextSibling),i=e[++s],$=l[--u]):W(f,a)?("slot"!==i.v&&"slot"!==$.v||L(f.j.parentNode,!1),U(f,a),t.insertBefore(f.j,i.j),f=e[--c],a=l[++r]):(o=E(e&&e[r],n,r,t),a=l[++r],o&&H(i.j).insertBefore(o,A(i.j)));s>c?N(t,null==l[u+1]?null:l[u+1].j,n,l,r,u):r>u&&P(e,s,c)})(n,l,e,o):null!==o?(null!==t.h&&(n.textContent=""),N(n,null,e,o,0,o.length-1)):null!==l&&P(l,0,l.length-1),r&&"svg"===s&&(r=!1)):(i=n["s-cr"])?i.parentNode.textContent=c:t.h!==c&&(n.data=c)},q=t=>{const e=t.childNodes;let n,l,o,s,r,c;for(l=0,o=e.length;l<o;l++)if(n=e[l],1===n.nodeType){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<o;s++)if(c=e[s].nodeType,e[s]["s-hn"]!==n["s-hn"]||""!==r){if(1===c&&r===e[s].getAttribute("slot")){n.hidden=!0;break}}else if(1===c||3===c&&""!==e[s].textContent.trim()){n.hidden=!0;break}q(n)}},D=[],F=t=>{let e,n,l,s,r,c,i=0;const f=t.childNodes,u=f.length;for(;i<u;i++){if(e=f[i],e["s-sr"]&&(n=e["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=e["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(V(n,s)?(r=D.find((t=>t.k===n)),o=!0,n["s-sn"]=n["s-sn"]||s,r?r.O=e:D.push({O:e,k:n}),n["s-sr"]&&D.map((t=>{V(t.k,n["s-sn"])&&(r=D.find((t=>t.k===n)),r&&!t.O&&(t.O=r.O))}))):D.some((t=>t.k===n))||D.push({k:n}));1===e.nodeType&&F(e)}},V=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,_=t=>{t.p&&t.p.ref&&t.p.ref(null),t.m&&t.m.map(_)},z=(t,e,n)=>{const l=(t=>st(t).M)(t);return{emit:t=>B(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},B=(t,e,n)=>{const l=u.ce(e,n);return t.dispatchEvent(l),l},G=(t,e)=>{e&&!t.C&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.C=e)))},I=(t,e)=>{if(t.t|=16,!(4&t.t))return G(t,t.R),wt((()=>J(t,e)));t.t|=512},J=(t,e)=>{const n=t.i;let l;return e&&(t.t|=256,t.u&&(t.u.map((([t,e])=>Z(n,t,e))),t.u=null),l=Z(n,"componentWillLoad")),tt(l,(()=>K(t,n,e)))},K=async(t,e,n)=>{const l=t.M,o=l["s-rc"];n&&(t=>{const e=t.T,n=t.M,l=e.t,o=((t,e)=>{let n=b(e);const l=$t.get(n);if(t=11===t.nodeType?t:f,l)if("string"==typeof l){let e,o=m.get(t=t.head||t);o||m.set(t,o=new Set),o.has(n)||(e=f.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(t);Q(t,e),o&&(o.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>X(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},Q=(r,c)=>{try{c=c.render(),r.t&=-17,r.t|=2,((r,c)=>{const i=r.M,a=r.T,$=r.L||j(null,null),d=(t=>t&&t.v===S)(c)?c:v(null,null,c);if(n=i.tagName,d.v=null,d.t|=4,r.L=d,d.j=$.j=i.shadowRoot||i,t=i["s-sc"],e=i["s-cr"],l=0!=(1&a.t),o=!1,U($,d),u.t|=1,s){let t,e,n,l,o,s;F(d.j);let r=0;for(;r<D.length;r++)t=D[r],e=t.k,e["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=e,e.parentNode.insertBefore(e["s-ol"]=n,e));for(r=0;r<D.length;r++)if(t=D[r],e=t.k,t.O){for(l=t.O.parentNode,o=t.O.nextSibling,n=e["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===e["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==e.parentNode||e.nextSibling!==o)&&e!==o&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),l.insertBefore(e,o))}else 1===e.nodeType&&(e.hidden=!0)}o&&q(d.j),u.t&=-2,D.length=0})(r,c)}catch(t){ft(t,r.M)}return null},X=t=>{const e=t.M,n=t.i,l=t.R;64&t.t||(t.t|=64,et(e),Z(n,"componentDidLoad"),t.N(e),l||Y()),t.C&&(t.C(),t.C=void 0),512&t.t&&bt((()=>I(t,!1))),t.t&=-517},Y=()=>{et(f.documentElement),bt((()=>B(i,"appload",{detail:{namespace:"papyrs-ic"}})))},Z=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){ft(t)}},tt=(t,e)=>t&&t.then?t.then(e):e(),et=t=>t.classList.add("hydrated"),nt=(t,e,n)=>{if(e.P){const l=Object.entries(e.P),o=t.prototype;if(l.map((([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>st(this).W.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=st(t),s=o.W.get(e),r=o.t,c=o.i;n=((t,e)=>null==t||g(t)?t:1&e?t+"":t)(n,l.P[e][0]),8&r&&void 0!==s||n===s||Number.isNaN(s)&&Number.isNaN(n)||(o.W.set(e,n),c&&2==(18&r)&&I(o,!1))})(this,t,n,e)},configurable:!0,enumerable:!0})})),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){u.jmp((()=>{const n=e.get(t);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(o.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,n])=>{const l=n[1]||t;return e.set(l,t),l}))}}return t},lt=(t,e={})=>{const n=[],l=e.exclude||[],o=i.customElements,s=f.head,r=s.querySelector("meta[charset]"),c=f.createElement("style"),a=[];let h,p=!0;Object.assign(u,e),u.l=new URL(e.resourcesUrl||"./",f.baseURI).href,t.map((t=>{t[1].map((e=>{const s={t:e[0],$:e[1],P:e[2],A:e[3]};s.P=e[2],s.A=e[3];const r=s.$,c=class extends HTMLElement{constructor(t){super(t),ct(t=this,s),1&s.t&&t.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),p?a.push(this):u.jmp((()=>(t=>{if(0==(1&u.t)){const e=st(t),n=e.T,l=()=>{};if(1&e.t)d(t,e,n.A);else{e.t|=1,12&n.t&&(t=>{const e=t["s-cr"]=f.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){G(e,e.R=n);break}}n.P&&Object.entries(n.P).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,o)=>{if(0==(32&e.t)){{if(e.t|=32,(o=at(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(nt(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(t){ft(t)}e.t&=-9,t()}if(o.style){let t=o.style;const e=b(n);if(!$t.has(e)){const l=()=>{};((t,e,n)=>{let l=$t.get(t);$&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=e:l.replaceSync(e)):l=e,$t.set(t,l)})(e,t,!!(1&n.t)),l()}}}const s=e.R,r=()=>I(e,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,e,n)}l()}})(this)))}disconnectedCallback(){u.jmp((()=>(()=>{if(0==(1&u.t)){const t=st(this);t.o&&(t.o.map((t=>t())),t.o=void 0)}})()))}componentOnReady(){return st(this).H}};s.U=t[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,nt(c,s,1)))}))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,r?r.nextSibling:s.firstChild),p=!1,a.length?a.map((t=>t.connectedCallback())):u.jmp((()=>h=setTimeout(Y,30)))},ot=new WeakMap,st=t=>ot.get(t),rt=(t,e)=>ot.set(e.i=t,e),ct=(t,e)=>{const n={t:0,M:t,T:e,W:new Map};return n.H=new Promise((t=>n.N=t)),t["s-p"]=[],t["s-rc"]=[],d(t,n,e.A),ot.set(t,n)},it=(t,e)=>e in t,ft=(t,e)=>(0,console.error)(t,e),ut=new Map,at=t=>{const e=t.$.replace(/-/g,"_"),n=t.U,l=ut.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(ut.set(n,t),t[e])),ft)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},$t=new Map,dt=[],ht=[],pt=(t,e)=>n=>{t.push(n),c||(c=!0,e&&4&u.t?bt(mt):u.raf(mt))},yt=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){ft(t)}t.length=0},mt=()=>{yt(dt),yt(ht),(c=dt.length>0)&&u.raf(mt)},bt=t=>a().then(t),wt=pt(ht,!0);export{S as H,z as a,lt as b,ft as c,v as h,a as p,rt as r}