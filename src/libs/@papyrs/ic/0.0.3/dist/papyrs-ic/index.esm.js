import{g as a,c as t,f as e,a as r,b as o,t as i,d as c,e as d,h as l,o as u,i as f,E as h,j as w,k as y,l as b,D as k}from"./p-ad9a6054.js";export{p as deleteAuth,g as getIdentity,m as initAuth,n as signIn,s as signOut}from"./p-ad9a6054.js";import"./p-0adadf10.js";var $="app-deck-editor > ion-content div.deck > main > deckgo-deck",v="deckgo-studio-doc",D=[{id:"google-fonts-lora",name:"Lora",family:"'Lora', serif"},{id:"google-fonts-roboto",name:"Roboto",family:"'Roboto', sans-serif"},{id:"google-fonts-open-sans",name:"Open Sans",family:"'Open Sans', sans-serif"},{id:"google-fonts-montserrat",name:"Montserrat",family:"'Montserrat', sans-serif"},{id:"google-fonts-cabin",name:"Cabin",family:"'Cabin', sans-serif"},{id:"google-fonts-lato",name:"Lato",family:"'Lato', sans-serif"},{id:"google-fonts-muli",name:"Muli",family:"'Muli', sans-serif"},{id:"google-fonts-source-sans-pro",name:"Source Sans Pro",family:"'Source Sans Pro', sans-serif"},{id:"google-fonts-libre-baskerville",name:"Libre Baskerville",family:"'Libre Baskerville', serif"},{id:"google-fonts-oswald",name:"Oswald",family:"'Oswald', sans-serif"},{id:"google-fonts-jura",name:"Jura",family:"'Jura', sans-serif"},{id:"google-fonts-fjord-one",name:"Fjord One",family:"'Fjord One', serif"},{id:"google-fonts-josefin-slab",name:"Josefin Slab",family:"'Josefin Slab', serif"}],O=["id","hydrated","contenteditable","editable","spellcheck","highlighted","custom-loader","class","placeholder","data-gramm"],_=({node:a,deep:t=!0})=>{if(C(a))return a;if(U(a)){let e=a.cloneNode(t);j(e);let r=e.querySelectorAll(O.map((a=>`[${a}]`)).join(","));for(let a of Array.from(r))j(a);return e}return null},j=a=>{for(let t of O)a.removeAttribute(t)},C=a=>a?.nodeType===Node.TEXT_NODE||a?.nodeType===Node.COMMENT_NODE,U=a=>a?.nodeType===Node.ELEMENT_NODE,x=async({meta:a,fallbackName:t,fallbackAuthor:e,selector:r})=>{let o=[E(),F({meta:a})].filter((a=>void 0!==a)),n=A({selector:r}),i=await K(),s=(a?.title||t)?.trim();return{title:s,description:(a?.description||t)?.trim(),author:a?.author?.name||e,bio:a?.author?.bio,photo_url:a?.author?.photo_url,head_extra:o.length>0?o.join(""):void 0,attributes:n,social_image_name:encodeURI(s).toLowerCase(),social_image_value:i}},E=()=>{let a=document.querySelector($)?.style.fontFamily;if(!a)return;let t=D.find((t=>a===t.family.replace(/\'/g,"")));return t?`<link rel="stylesheet" href="${(({font:a})=>`https://fonts.googleapis.com/css?display=swap&amp;family=${a.name.replace(" ","+")}`)({font:t})}">`:void 0},F=({meta:a})=>{if(a&&a.canonical)return`<link rel="canonical" href="${a.canonical}">`},A=({selector:a})=>{let t=document.querySelector(a)?.attributes;if(t)return Array.from(t).filter((({name:a})=>!["id","hydrated","class","contenteditable"].includes(a))).reduce(((a,{name:t,value:e})=>(a[t]=e,a)),{})},P=()=>{let a=document.querySelectorAll(`${$} > *[slide_id]`),t=({slide:a,custom:t})=>{if(a.hasAttribute(`custom-${t}`))return;let e=a.querySelector(`div[slot="${t}"]`);!e||a.removeChild(e)};return Array.from(a).map((a=>{let e=_({node:a,deep:!1});return Array.from(a.childNodes).forEach((a=>{U(a)&&a.hasAttribute("slot")&&(e.appendChild(_({node:a})),t({slide:e,custom:"background"}),t({slide:e,custom:"header"}),t({slide:e,custom:"footer"}))})),e})).map((a=>a.outerHTML))},I=()=>{let a=document.querySelectorAll(`${v} > article *[paragraph_id]`);return Array.from(a).map((a=>_({node:a,deep:!0}))).map((a=>a.outerHTML))},K=async()=>document.querySelector("deckgo-social-img")?.toBlob("image/png");const S=async()=>{const e=a();if(!e)throw new Error("No internet identity to get the canisters status");return(await t({identity:e})).getCanistersStatus()},T=async({startsWith:t,notContains:e})=>{const r=a();if(!r)return[];const{actor:o}=await d({identity:r});if(!o)return[];const n=(await o.list(l({startsWith:l(t),notContains:l(e)}))).map((([,a])=>N({data:a,identity:r})));return await Promise.all(n)},N=async({data:a,identity:t})=>{const e=await r(a.data);return{id:a.id,data:Object.assign(Object.assign({},e),{owner_id:t.getPrincipal().toText(),created_at:o(a.created_at),updated_at:o(a.updated_at)})}},L=async({key:a,actor:t,log:e})=>{if(!a)return;null==e||e({msg:`[delete][start] ${a}`});const r=performance.now(),o=t||await B();await o.del(a);const n=performance.now();null==e||e({msg:`[delete][done] ${a}`,duration:n-r})},z=({key:a,actor:t})=>new Promise((async(n,i)=>{try{const i=t||await B(),s=e(await i.get(a));if(!s)return void n(void 0);const c=await r(s.data);n({id:s.id,data:Object.assign(Object.assign({},c),{created_at:o(s.created_at),updated_at:o(s.updated_at)})})}catch(a){i(a)}})),G=({key:a,data:t,id:e,actor:r,log:o})=>new Promise((async(n,s)=>{try{null==o||o({msg:`[set][start] ${a}`});const s=performance.now(),d=r||await B(),l=new Date;await d.set(a,{id:e,data:await i(t),created_at:c(t.created_at||new Date),updated_at:c(l)});const u=performance.now();null==o||o({msg:`[set][done] ${a}`,duration:u-s}),n({id:e,data:Object.assign(Object.assign({},t),{updated_at:l})})}catch(a){s(a)}})),B=async()=>{const t=a();if(!t)throw new Error("No internet identity.");const{actor:e}=await d({identity:t});if(!e)throw new Error("No actor initialized.");return e},M=async()=>T({startsWith:"/decks/",notContains:"/slides/"}),R=async a=>L({key:`/decks/${a}`}),W=async({onNext:a})=>(document.addEventListener("deckPublished",(async({detail:t})=>await a(t)),{passive:!0}),()=>document.removeEventListener("deckPublished",(({detail:t})=>a(t)),!1)),H=async()=>T({startsWith:"/docs/",notContains:"/paragraphs/"}),J=async a=>L({key:`/docs/${a}`}),q=async({onNext:a})=>(document.addEventListener("docPublished",(async({detail:t})=>await a(t)),{passive:!0}),()=>document.removeEventListener("docPublished",(({detail:t})=>a(t)),!1)),Q=(a,t)=>z({key:`/docs/${a}/paragraphs/${t}`}),V=(a,t)=>z({key:`/decks/${a}/slides/${t}`});let X=(a=21)=>{let t="",e=crypto.getRandomValues(new Uint8Array(a));for(;a--;){let r=63&e[a];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t};const Y=()=>T({startsWith:"/templates/"}),Z=a=>{const t=X();return G({key:`/templates/${t}`,id:t,data:a})},aa=a=>{const{data:t,id:e}=a;return G({key:`/templates/${e}`,id:e,data:t})},ta=async a=>{u({msg:"[update][start] user"});const t=performance.now(),{data:e,id:r}=a,o=await G({key:"/user",id:r,data:e}),n=performance.now();return u({msg:"[update][done] user",duration:n-t}),o},ea=async({data:a,filename:t,folder:e,storageActor:r,headers:o,token:n,fullPath:i,log:s})=>{s({msg:`[upload][start] ${t}`});const c=performance.now(),d=i||`/${e}/${t}`,{batchId:u}=await r.initUpload({name:t,fullPath:d,token:l(n),folder:e}),m=performance.now();s({msg:`[upload][create batch] ${t}`,duration:m-c});const f=[],g=7e5,p=new Blob([await a.arrayBuffer()]);for(let a=0;a<p.size;a+=g){const t=p.slice(a,a+g);f.push(ra({batchId:u,chunk:t,storageActor:r}))}const h=await Promise.all(f),w=performance.now();s({msg:`[upload][chunks] ${t}`,duration:w-m}),await r.commitUpload({batchId:u,chunkIds:h.map((({chunkId:a})=>a)),headers:[["Content-Type",a.type],["accept-ranges","bytes"],...o]});const y=performance.now();return s({msg:`[upload][commit batch] ${t}`,duration:y-w}),s({msg:`[upload][done] ${t}`,duration:y-c}),{fullPath:d,filename:t,token:n}},ra=async({batchId:a,chunk:t,storageActor:e})=>e.uploadChunk({batchId:a,content:[...new Uint8Array(await t.arrayBuffer())]}),oa=a=>encodeURI(a.toLowerCase().replace(/\s/g,"-")),na=async()=>{const t=a();if(!t)throw new Error("No internet identity.");const e=await f({identity:t}),{actor:r,bucketId:o}=e;if(!r)throw new Error("No actor initialized.");if(!o)throw new Error("No bucket principal defined");return e},ia=async({storageUpload:a,publishData:t})=>{const{social_image_name:e,social_image_value:r}=t;if(!r)return;const{actor:o}=a;await ea({data:r,filename:`${e}.png`,folder:"meta",storageActor:o,headers:[["Cache-Control","max-age=3600"]],log:u})},sa=({template:a,data:t})=>Object.entries(t).reduce(((a,[t,e])=>a.replaceAll(`{{DECKDECKGO_${t.toUpperCase()}}}`,e||"").replaceAll(`\x3c!-- DECKDECKGO_${t.toUpperCase()} --\x3e`,e||"")),a),ca=async({indexHTML:a,folder:t,meta:e})=>{const{html:r,publishData:o}=a,{bucketId:n,actor:i}=await na(),{filename:s,pathname:c}=da({publishData:o,meta:e,folder:t}),d=`https://${n.toText()}.raw.ic0.app`,l=`${d}${c}`;let u=r.replace("{{DECKDECKGO_URL}}",l);return u=(({html:a,data:t,bucketUrl:e})=>{const{social_image_name:r}=t;return a.replaceAll("{{DECKDECKGO_SOCIAL_IMAGE}}",`${e}/meta/${r}.png`)})({html:u,data:o,bucketUrl:d}),{storageUpload:{html:u,actor:i,filename:s,pathname:c,fullUrl:l,bucketUrl:d,folder:t},publishData:o}},da=({publishData:a,meta:t,folder:e})=>{if(null==t?void 0:t.pathname){const{pathname:a}=t;return{filename:a.replace(`/${e}/`,""),pathname:a}}const r=oa(a.title);return{filename:r,pathname:`/${e}/${r}`}},la=async({publishData:a,updateTemplateContent:t,sourceFolder:e})=>{const r=await ua(e),o=sa({template:r,data:a}),{attributes:n}=a;return{html:t({attr:n?Object.entries(n).reduce(((a,[t,e])=>`${t}="${e}"; ${a}`),"").trim():void 0,template:o})}},ua=async a=>(await fetch(`${h.getInstance().get().kitPath}/${a}/index.html`)).text(),ma=({data:a,storageUpload:t,meta:e,name:r})=>{const{pathname:o}=t,n=new Date;return Object.assign(Object.assign({},a),{meta:Object.assign(Object.assign({},e||{title:r}),{pathname:o,published:!0,published_at:n,updated_at:n})})},fa=async({filename:a,html:t,actor:e,folder:r})=>{await ea({data:new Blob([t],{type:"text/html"}),filename:a,folder:r,storageActor:e,headers:[["Cache-Control","max-age=3600"]],log:u})};const ga=async({dataId:a,storageUpload:t,publishData:e})=>{const r=await pa(),{photo_url:o}=e,n=function(a,t){var e={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&t.indexOf(r)<0&&(e[r]=a[r]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(a);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(a,r[o])&&(e[r[o]]=a[r[o]])}return e}(e,["photo_url"]);let i=sa({template:r,data:n});i=ha({html:i,photo_url:o}),i=await wa({dataId:a,template:i,publishData:e,storageUpload:t});const{actor:s}=t;await ba({html:i,actor:s})},pa=async()=>(await fetch(`${h.getInstance().get().kitPath}/index.html`)).text(),ha=({photo_url:a,html:t})=>a?t.replace("\x3c!-- DECKDECKGO_PHOTO_URL --\x3e",`<img role="presentation" alt="" loading="lazy" src="${a}" />`):t,wa=async({dataId:a,template:t,storageUpload:e,publishData:r})=>{const{title:o}=r,{fullUrl:n}=e,i=`<li data-id="${a}"><a href="${n}">${o}</a></li>`,s=await ya(e);if(!s)return t.replace(/<!-- DECKDECKGO_DATA -->/,`${i}`);const c=[...s.matchAll(/<li\x20.*?data-id=".*?".*?li>/gm)];if(!c||c.length<=0)return t.replace(/<!-- DECKDECKGO_DATA -->/,`${i}`);const d=c.map((a=>a[0])),l=d.indexOf(i);return t.replace(/<!-- DECKDECKGO_DATA -->/,l>-1?d.map(((a,t)=>t===l?i:a)).join(""):[i,...d].join(""))},ya=async({bucketUrl:a})=>{const t=await fetch(a);if(t.ok)return t.text()},ba=async({html:a,actor:t})=>{await ea({data:new Blob([a],{type:"text/html"}),filename:"index.html",folder:"resources",storageActor:t,headers:[["Cache-Control","max-age=0"]],fullPath:"/",log:u})},ka=()=>h.getInstance().get().kitPath,$a=async({meta:a})=>{const{actor:t}=await na(),e=(await t.list(l("resources"))).map((({name:a})=>a)),r=await ja(),o=r.filter((({filename:a})=>!e.includes(a)));if(!o||o.length<=0)return;const n=o.map((e=>va({kit:e,actor:t,meta:a})));await Promise.all(n),await Da({kitNewFiles:o,kit:r,actor:t,meta:a})},va=async({kit:a,actor:t,meta:e})=>{const{src:r,filename:o,mimeType:n,updateContent:i,headers:s}=a,c=await _a(r),d=i?i({content:c,meta:e}):c;await Oa({filename:o,content:d,actor:t,mimeType:n,headers:s,fullPath:r.replace(ka(),"")})},Da=async({kitNewFiles:a,kit:t,actor:e,meta:r})=>{if(void 0!==a.find((({filename:a})=>"service-worker.js"===a)))return;const o=t.find((({filename:a})=>"service-worker.js"===a));void 0===!o&&await va({kit:o,actor:e,meta:r})},Oa=async({filename:a,fullPath:t,content:e,actor:r,mimeType:o,headers:n})=>{await ea({data:new Blob([e],{type:o}),filename:a,folder:"resources",storageActor:r,fullPath:t,headers:n,log:u})},_a=async a=>(await fetch(a)).text(),ja=async()=>{const a=ka(),t=await(await fetch(`${a}/build.json`)).json();return t.map((t=>(t=>{const e=`${a}/${t}`;return e.includes(".js")?{src:e,mimeType:"text/javascript"}:e.includes(".css")?{src:e,mimeType:"text/css"}:e.includes(".webmanifest")?{src:e,mimeType:"application/manifest+json",updateContent:({content:a,meta:t})=>{var e;return a.replace("{{DECKDECKGO_AUTHOR}}",(null===(e=null==t?void 0:t.author)||void 0===e?void 0:e.name)||h.getInstance().get().author)}}:{src:e,mimeType:"text/plain"}})(t))).map((a=>{const{pathname:t}=new URL(a.src);return Object.assign(Object.assign({},a),{filename:t.split("/").pop(),headers:[["Cache-Control","max-age=31536000"]]})}))},Ca=async({deck:a})=>{await $a({meta:a.data.meta});const{storageUpload:t,publishData:e,deck:r}=await(async({deck:a})=>{const{id:t,data:e}=a,{meta:r}=e,o=await(async({deck:a})=>{const t=await(async({deck:a,fallbackAuthor:t})=>{let{data:e}=a,{meta:r,background:o,footer:n,header:i}=e;return{...await x({meta:r,selector:$,fallbackName:e.name,fallbackAuthor:t}),slides:P(),background:o?`<div slot="background">${o}</div>`:void 0,header:o?`<div slot="header">${i}</div>`:void 0,footer:o?`<div slot="footer">${n}</div>`:void 0}})({deck:a,fallbackAuthor:h.getInstance().get().author}),{slides:e}=t,{html:r}=await la({publishData:t,updateTemplateContent:({attr:a,template:t})=>t.replace("\x3c!-- DECKDECKGO_DECK --\x3e",`<deckgo-deck id="slider" embedded="true" ${a||""}>${e.join("")}</deckgo-deck>`),sourceFolder:"p"});return{html:r,publishData:t}})({deck:a}),{storageUpload:n,publishData:i}=await ca({indexHTML:o,folder:"p",meta:r}),s=ma({data:e,meta:e.meta,name:e.name,storageUpload:n}),c=await G({key:`/decks/${t}`,id:t,data:s});return await fa(n),await ia({storageUpload:n,publishData:i}),{storageUpload:n,publishData:i,deck:c}})({deck:a});return await ga({storageUpload:t,publishData:e,dataId:r.id}),(a=>{const{id:t,data:e}=a,r={id:t,data:Object.assign(Object.assign({},e),{deploy:{api:{status:"successful",updated_at:new Date}}})},o=new CustomEvent("deckPublished",{detail:r});document.dispatchEvent(o)})(r),r},Ua=async({doc:a,config:t})=>{await $a({meta:a.data.meta});const{storageUpload:e,publishData:r,doc:o}=await(async({doc:a,config:t})=>{const{id:e,data:r}=a,{meta:o}=r,n=await(async({doc:a,config:t})=>{const e=await(async({doc:a,fallbackAuthor:t,theme:e})=>{let{data:r}=a,{meta:o}=r;return{...await x({meta:o,selector:v,fallbackName:r.name,fallbackAuthor:t}),paragraphs:I(),theme:e}})({doc:a,fallbackAuthor:h.getInstance().get().author,theme:t.theme}),{paragraphs:r}=e,{html:o}=await la({publishData:e,updateTemplateContent:({attr:a,template:t})=>t.replace("\x3c!-- DECKDECKGO_DOC --\x3e",`<article ${a||""} class="deckgo-doc">${r.join("")}</article>`),sourceFolder:"d"});return{html:o,publishData:e}})({doc:a,config:t}),{storageUpload:i,publishData:s}=await ca({indexHTML:n,folder:"d",meta:o}),c=ma({data:r,meta:r.meta,name:r.name,storageUpload:i}),d=await G({key:`/docs/${e}`,id:e,data:c});return await fa(i),await ia({storageUpload:i,publishData:s}),{storageUpload:i,publishData:s,doc:d}})({doc:a,config:t});return await ga({storageUpload:e,publishData:r,dataId:o.id}),(a=>{const{id:t,data:e}=a,r={id:t,data:Object.assign(Object.assign({},e),{deploy:{api:{status:"successful",updated_at:new Date}}})},o=new CustomEvent("docPublished",{detail:r});document.dispatchEvent(o)})(o),o},xa=async()=>{const{bucketId:a}=await na();return`https://${a.toText()}.raw.ic0.app`},Ea=async({data:t,folder:e,maxSize:r})=>{const o=a();return Fa({data:t,folder:e,maxSize:r,identity:o,log:u})},Fa=async({data:a,maxSize:t,folder:e,identity:r,storageBucket:o,log:n})=>{if(!a||!a.name)throw new Error("File not valid.");if(a.size>t)throw new Error(`File is too big (max. ${t/1048576} Mb)`);const{actor:i,bucketId:s}=o||await f({identity:r});if(!i||!s)throw new Error("Storage bucket is not initialized.");const{fullPath:c,filename:d,token:l}=await ea({data:a,filename:oa(a.name),folder:e,storageActor:i,token:X(),headers:[["cache-control","private, max-age=0"]],log:n});return{downloadUrl:`https://${s.toText()}.raw.ic0.app${c}?token=${l}`,fullPath:c,name:d}},Aa=async({folder:a})=>{const{actor:t,bucketId:e}=await na(),r=await t.list(l(a)),o=`https://${e.toText()}.raw.ic0.app`;return{items:r.map((({name:a,fullPath:t,token:e})=>({downloadUrl:`${o}${t}?token=${e}`,fullPath:t,name:a}))),nextPageToken:null}},Pa=async({downloadUrl:a,fullPath:t})=>{const{actor:e}=await na();let r=null;if(a){const{searchParams:t}=new URL(a);r=t.get("token")}return e.del({fullPath:t,token:l(r||void 0)})};function Ia(a){return new Promise((function(t,e){a.oncomplete=a.onsuccess=function(){return t(a.result)},a.onabort=a.onerror=function(){return e(a.error)}}))}var Ka;function Sa(){return Ka||(a="keyval-store",t="keyval",r=(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise((function(a){var t=function(){return indexedDB.databases().finally(a)};e=setInterval(t,100),t()})).finally((function(){return clearInterval(e)})):Promise.resolve()).then((function(){var e=indexedDB.open(a);return e.onupgradeneeded=function(){return e.result.createObjectStore(t)},Ia(e)})),Ka=function(a,e){return r.then((function(r){return e(r.transaction(t,a).objectStore(t))}))}),Ka;var a,t,e,r}const Ta=({data:a,storageFile:t,imgSrc:e})=>{const{downloadUrl:r,name:o}=t;let n=a.replaceAll(`img-src="${e}"`,`img-src="${r}"`);return n=n.replaceAll(`img-alt="${e}"`,`img-alt="${o}"`),n},Na=async({selector:a,storageFile:t,src:e})=>{const r=document.querySelector(a);if("deckgo-lazy-img"===(null==r?void 0:r.nodeName.toLowerCase()))return void await La({images:[r],storageFile:t,src:e});const o=null==r?void 0:r.querySelectorAll("deckgo-lazy-img");await La({images:Array.from(o),storageFile:t,src:e})},La=async({storageFile:a,images:t,src:e})=>{const r=t.filter((a=>a.imgSrc===e));if(!r||r.length<=0)return;const o=Array.from(r).map((t=>(async t=>{const{downloadUrl:e,name:r}=a;t.imgSrc=e,t.imgAlt=r})(t)));await Promise.all(o)},za=async({storageFile:a,src:t,key:e})=>{const r=(({paragraph:a,images:t})=>{if(!t)return Object.assign({},a);const e=t.filter((({src:a,storageFile:t})=>void 0!==a&&void 0!==t));let{children:r,nodeName:o,attributes:n}=a.data;return"deckgo-lazy-img"===o&&n&&e.forEach((({src:a,storageFile:t})=>{n=(({attributes:a,storageFile:t,imgSrc:e})=>{const{downloadUrl:r}=t;return Object.keys(a).reduce(((t,o)=>(t[o]=a[o]===e?r:a[o],t)),{})})({attributes:n,storageFile:t,imgSrc:a})})),r=null==r?void 0:r.map((a=>(e.forEach((({src:t,storageFile:e})=>{a=Ta({data:a,storageFile:e,imgSrc:t})})),a))),{id:a.id,data:Object.assign(Object.assign({},a.data),{updated_at:new Date,children:r,attributes:n})}})({paragraph:await Ga({key:e}),images:[{src:t,storageFile:a}]});await Ba({key:e,data:r})},Ga=async({key:a})=>{const t=await function(a){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:Sa())("readonly",(function(t){return Ia(t.get(a))}))}(a);if(!t)throw new Error("Data not found and that is really weird here.");return t},Ba=async({key:a,data:t})=>function(a,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:Sa())("readwrite",(function(e){return e.put(t,a),Ia(e.transaction)}))}(a,t),Ma=w(import("./p-d2586646.js").then((a=>a.worker)),"stencil.sync.ic.worker","uploadWorker"),Ra=async({msg:a,data:t})=>{"deckdeckgo_sync_deck_background"===a&&await(async a=>{(({storageFile:a})=>{const t=document.querySelector(`${$} > *[slot="background"]`),e=null==t?void 0:t.querySelector("deckgo-lazy-img");if(!e)return;const{downloadUrl:r,name:o}=a;e.imgSrc=r,e.imgAlt=o})(a),await(async({storageFile:a,src:t})=>{const e=document.querySelectorAll(`${$} .deckgo-slide-container:not([custom-background]) *[slot="background"] deckgo-lazy-img`);await La({images:Array.from(e),storageFile:a,src:t})})(a),await(async({storageFile:a,src:t,key:e})=>{const r=(({deck:a,storageFile:t,imgSrc:e})=>t&&e?{id:a.id,data:Object.assign(Object.assign({},a.data),{updated_at:new Date,background:Ta({data:a.data.background,imgSrc:e,storageFile:t})})}:Object.assign({},a))({deck:await Ga({key:e}),imgSrc:t,storageFile:a});await Ba({key:e,data:r})})(a)})(t),"deckdeckgo_sync_slide_image"===a&&await(async a=>{const{selector:t}=a;t&&(await Na(a),await(async({storageFile:a,src:t,key:e})=>{const r=(({slide:a,images:t})=>{if(!t)return Object.assign({},a);const e=t.filter((({src:a,storageFile:t})=>void 0!==a&&void 0!==t));let{content:r}=a.data;return e.forEach((({src:a,storageFile:t})=>{r=Ta({data:r,storageFile:t,imgSrc:a})})),{id:a.id,data:Object.assign(Object.assign({},a.data),{updated_at:new Date,content:r})}})({slide:await Ga({key:e}),images:[{src:t,storageFile:a}]});await Ba({key:e,data:r})})(a))})(t),"deckdeckgo_sync_slide_chart"===a&&await(async a=>{const{selector:t}=a;t&&((({selector:a,storageFile:t})=>{const e=document.querySelector(a);if(!e||!e.nodeName||"deckgo-slide-chart"!==e.nodeName.toLowerCase())return;const{downloadUrl:r}=t;e.src=r})(a),await(async({storageFile:a,src:t,key:e})=>{const r=(({slide:a,chart:t})=>{if(!t)return Object.assign({},a);const{src:e,storageFile:r}=t;if(!e||!r)return Object.assign({},a);const{attributes:o}=a.data;if(!o)return Object.assign({},a);const{downloadUrl:n}=r;return{id:a.id,data:Object.assign(Object.assign({},a.data),{updated_at:new Date,attributes:Object.assign(Object.assign({},o),{src:n})})}})({slide:await Ga({key:e}),chart:{src:t,storageFile:a}});await Ba({key:e,data:r})})(a))})(t),"deckdeckgo_sync_paragraph_image"===a&&await(async a=>{const{selector:t}=a;t&&(await Na(a),await za(a))})(t)},Wa=async({syncData:t,clean:e})=>{if(!a())throw new Error("No internet identity to sync data");const r=await y();if(!b(k.fromJSON(r.delegationChain)))throw new Error("Internet identity has expired. Please login again.");await Ma({internetIdentity:r,syncData:t,env:h.getInstance().get()},Ra,u),await e(t)};export{S as canistersStatus,Z as createTemplate,M as deckEntries,Ca as deckPublish,R as deleteDeck,J as deleteDoc,Pa as deleteFile,H as docEntries,Ua as docPublish,Aa as getFiles,Q as getParagraph,V as getSlide,Y as getUserTemplates,xa as publishUrl,W as snapshotDeck,q as snapshotDoc,Wa as sync,aa as updateTemplate,ta as updateUser,Ea as uploadFile,Fa as uploadFileIC}