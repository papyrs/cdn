let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.o,u={},f=e=>"object"==(e=typeof e)||"function"===e,d=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?c[c.length-1].i+=l:c.push(s?h(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=h(e,null);return i.u=t,c.length>0&&(i.h=c),i},h=(e,t)=>({t:0,$:e,i:t,m:null,h:null,u:null}),$={},y=(e,t,n,s,c,r)=>{if(n!==s){let i=V(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,l=p(n),o=p(s);t.remove(...l.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!l.includes(e))))}else if(i||"o"!==t[0]||"n"!==t[1]){const l=f(s);if((i||l&&null!==s)&&!c)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?i=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&r||c)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):V(l,a)?a.slice(2):a[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},m=/\s/,p=e=>e?e.split(m):[],b=(e,t,n,l)=>{const s=11===t.m.nodeType&&t.m.host?t.m.host:t.m,o=e&&e.u||u,c=t.u||u;for(l in o)l in c||y(s,l,o[l],void 0,n,t.t);for(l in c)y(s,l,o[l],c[l],n,t.t)},w=(t,n,l)=>{let o,c,r=n.h[l],i=0;if(null!==r.i)o=r.m=s.createTextNode(r.i);else if(o=r.m=s.createElement(r.$),b(null,r,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),r.h)for(i=0;i<r.h.length;++i)c=w(t,r,i),c&&o.appendChild(c);return o},g=(e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=w(null,l,o),r&&(s[o].m=r,i.insertBefore(r,n)))},S=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.m.remove()},j=(e,t)=>e.$===t.$,v=(e,t)=>{const n=t.m=e.m,l=e.h,s=t.h,o=t.i;null===o?(b(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,r=t.length-1,i=t[0],a=t[r],u=l.length-1,f=l[0],d=l[u];for(;o<=r&&c<=u;)null==i?i=t[++o]:null==a?a=t[--r]:null==f?f=l[++c]:null==d?d=l[--u]:j(i,f)?(v(i,f),i=t[++o],f=l[++c]):j(a,d)?(v(a,d),a=t[--r],d=l[--u]):j(i,d)?(v(i,d),e.insertBefore(i.m,a.m.nextSibling),i=t[++o],d=l[--u]):j(a,f)?(v(a,f),e.insertBefore(a.m,i.m),a=t[--r],f=l[++c]):(s=w(t&&t[c],n,c),f=l[++c],s&&i.m.parentNode.insertBefore(s,i.m));o>r?g(e,null==l[u+1]?null:l[u+1].m,n,l,c,u):c>u&&S(t,o,r)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),g(n,null,t,s,0,s.length-1)):null!==l&&S(l,0,l.length-1)):e.i!==o&&(n.data=o)},k=e=>z(e).p,M=(e,t,n)=>{const l=k(e);return{emit:e=>O(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},O=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},C=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},P=(e,t)=>{if(e.t|=16,!(4&e.t))return C(e,e.S),ee((()=>x(e,t)));e.t|=512},x=(e,t)=>{const n=e.j;return H(void 0,(()=>E(e,n,t)))},E=async(e,t,n)=>{const l=e.p,o=l["s-rc"];n&&(e=>{const t=e.v,n=e.p,l=t.t,o=((e,t)=>{let n=a(t),l=I.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);L(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>T(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},L=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.p,o=n.v,c=n.k||h(null,null),r=(e=>e&&e.$===$)(l)?l:d(null,null,l);t=s.tagName,o.M&&(r.u=r.u||{},o.M.map((([e,t])=>r.u[t]=s[e]))),r.$=null,r.t|=4,n.k=r,r.m=c.m=s.shadowRoot||s,e=s["s-sc"],v(c,r)})(n,l)}catch(e){_(e,n.p)}return null},T=e=>{const t=e.p,n=e.j,l=e.S;64&e.t||(e.t|=64,R(t),F(n,"componentDidLoad"),e.O(t),l||A()),e.C(t),e.g&&(e.g(),e.g=void 0),512&e.t&&Z((()=>P(e,!1))),e.t&=-517},A=()=>{R(s.documentElement),Z((()=>O(l,"appload",{detail:{namespace:"deckdeckgo-lazy-img"}})))},F=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){_(e)}},H=(e,t)=>e&&e.then?e.then(t):t(),R=e=>e.classList.add("hydrated"),U=(e,t,n)=>{if(t.P){e.watchers&&(t.L=e.watchers);const l=Object.entries(t.P),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>z(this).T.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=z(e),o=s.p,c=s.T.get(t),r=s.t,i=s.j;if(n=((e,t)=>null==e||f(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.P[t][0]),!(8&r&&void 0!==c||n===c)&&(s.T.set(t,n),i)){if(l.L&&128&r){const e=l.L[t];e&&e.map((e=>{try{i[e](n,c,t)}catch(e){_(e,o)}}))}2==(18&r)&&P(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=z(this);return n.A.then((()=>n.j[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){o.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.M.push([e,s]),s}))}}return e},W=(e,t={})=>{const n=[],c=t.exclude||[],i=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),d=s.createElement("style"),h=[];let $,y=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>{e[1].map((t=>{const l={t:t[0],o:t[1],P:t[2],F:t[3]};l.P=t[2],l.M=[],l.L={};const s=l.o,u=class extends HTMLElement{constructor(e){super(e),N(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){$&&(clearTimeout($),$=null),y?h.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=z(e),n=t.v,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){C(t,t.S=n);break}}n.P&&Object.entries(n.P).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=G(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.L=s.watchers,U(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){_(e)}t.t&=-9,t.t|=128,e()}if(s.style){let e=s.style;const t=a(n);if(!I.has(t)){const l=()=>{};((e,t,n)=>{let l=I.get(e);r&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,I.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.S,c=()=>P(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return z(this).H}};l.R=e[0],c.includes(s)||i.get(s)||(n.push(s),i.define(s,U(u,l,1)))}))})),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),u.insertBefore(d,f?f.nextSibling:u.firstChild),y=!1,h.length?h.map((e=>e.connectedCallback())):o.jmp((()=>$=setTimeout(A,30)))},q=new WeakMap,z=e=>q.get(e),D=(e,t)=>q.set(t.j=e,t),N=(e,t)=>{const n={t:0,p:e,v:t,T:new Map};return n.A=new Promise((e=>n.C=e)),n.H=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],q.set(e,n)},V=(e,t)=>t in e,_=(e,t)=>(0,console.error)(e,t),B=new Map,G=e=>{const t=e.o.replace(/-/g,"_"),n=e.R,l=B.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(B.set(n,e),e[t])),_)},I=new Map,J=[],K=[],Q=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?Z(Y):o.raf(Y))},X=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){_(e)}e.length=0},Y=()=>{X(J),X(K),(n=J.length>0)&&o.raf(Y)},Z=e=>c().then(e),ee=Q(K,!0);export{$ as H,W as b,M as c,k as g,d as h,c as p,D as r}