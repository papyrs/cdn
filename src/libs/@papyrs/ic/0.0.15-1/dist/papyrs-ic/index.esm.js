import{g as t,a,b as e,f as o,c as r,d as i,t as c,e as d,h as u,o as p,E as h,r as f,i as w,j as y,k as b,D as k}from"./p-cf1315f1.js";export{n as deleteAuth,g as getIdentity,l as initAuth,m as signIn,s as signOut}from"./p-cf1315f1.js";import"./p-a8ab4139.js";var $="app-deck-editor > ion-content div.deck > main > deckgo-deck",v="deckgo-studio-doc",D=[{id:"google-fonts-lora",name:"Lora",family:"'Lora', serif"},{id:"google-fonts-roboto",name:"Roboto",family:"'Roboto', sans-serif"},{id:"google-fonts-open-sans",name:"Open Sans",family:"'Open Sans', sans-serif"},{id:"google-fonts-montserrat",name:"Montserrat",family:"'Montserrat', sans-serif"},{id:"google-fonts-cabin",name:"Cabin",family:"'Cabin', sans-serif"},{id:"google-fonts-lato",name:"Lato",family:"'Lato', sans-serif"},{id:"google-fonts-muli",name:"Muli",family:"'Muli', sans-serif"},{id:"google-fonts-source-sans-pro",name:"Source Sans Pro",family:"'Source Sans Pro', sans-serif"},{id:"google-fonts-libre-baskerville",name:"Libre Baskerville",family:"'Libre Baskerville', serif"},{id:"google-fonts-oswald",name:"Oswald",family:"'Oswald', sans-serif"},{id:"google-fonts-jura",name:"Jura",family:"'Jura', sans-serif"},{id:"google-fonts-fjord-one",name:"Fjord One",family:"'Fjord One', serif"},{id:"google-fonts-josefin-slab",name:"Josefin Slab",family:"'Josefin Slab', serif"}],_=["id","hydrated","contenteditable","editable","spellcheck","highlighted","custom-loader","class","placeholder","data-gramm","data-gramm_id","data-gramm_editor","data-gr-id"],U=["paragraph_id","data-src",..._],O=({node:t,deep:a=!0,attributes:e=_})=>{if(j(t))return t;if(C(t)){let o=t.cloneNode(a);x({element:o,attributes:e});let r=o.querySelectorAll(e.map((t=>`[${t}]`)).join(","));for(let t of Array.from(r))x({element:t,attributes:e});return o}return null},x=({element:t,attributes:a})=>{for(let e of a)t.removeAttribute(e)},j=t=>t?.nodeType===Node.TEXT_NODE||t?.nodeType===Node.COMMENT_NODE,C=t=>t?.nodeType===Node.ELEMENT_NODE,P=async({meta:t,fallbackName:a,fallbackAuthor:e,selector:o,socialImgPath:r})=>{let n=[A(),E({meta:t})].filter((t=>void 0!==t)),i=F({selector:o}),s=await T(),c=(t?.title||a)?.trim();return{title:c,description:(t?.description||a)?.trim(),author:t?.author?.name||e,bio:t?.author?.bio,photo_url:t?.author?.photo_url,head_extra:n.length>0?n.join(""):void 0,attributes:i,social_image_name:encodeURI(c).toLowerCase(),social_image_value:s,social_links:K({meta:t,socialImgPath:r}),social_image_link:void 0}},A=()=>{let t=document.querySelector($)?.style.fontFamily;if(!t)return;let a=D.find((a=>t===a.family.replace(/\'/g,"")));return a?`<link rel="stylesheet" href="${(({font:t})=>`https://fonts.googleapis.com/css?display=swap&amp;family=${t.name.replace(" ","+")}`)({font:a})}">`:void 0},E=({meta:t})=>{if(t&&t.canonical)return`<link rel="canonical" href="${t.canonical}">`},F=({selector:t})=>{let a=document.querySelector(t)?.attributes;if(a)return Array.from(a).filter((({name:t})=>!["id","hydrated","class","contenteditable"].includes(t))).reduce(((t,{name:a,value:e})=>(t[a]=e,t)),{})},I=()=>{let t=document.querySelectorAll(`${$} > *[slide_id]`),a=({slide:t,custom:a})=>{if(t.hasAttribute(`custom-${a}`))return;let e=t.querySelector(`div[slot="${a}"]`);!e||t.removeChild(e)};return Array.from(t).map((t=>{let e=O({node:t,deep:!1,attributes:U});return Array.from(t.childNodes).forEach((t=>{C(t)&&t.hasAttribute("slot")&&(e.appendChild(O({node:t,attributes:U})),a({slide:e,custom:"background"}),a({slide:e,custom:"header"}),a({slide:e,custom:"footer"}))})),e})).map((t=>t.outerHTML))},N=()=>{let t=document.querySelectorAll(`${v} > article *[paragraph_id]`);return Array.from(t).map((t=>O({node:t,attributes:U}))).map((t=>t.outerHTML))},T=async()=>document.querySelector("deckgo-social-img")?.toBlob("image/png"),K=({meta:t,socialImgPath:a})=>{if(!t||!t.author)return;let{author:{social:e,name:o}}=t,r=({username:t,href:e,authorName:o,platformName:r,iconName:n})=>t&&""!==t?`<a href="https://${e}/${t}" aria-label="${o} on ${r}" rel="noopener norefferer"><deckgo-lazy-img svg-src="${a}/${n}.svg" role="presentation" alt="${r} logo" /></a>`:void 0,n=r({username:e?.twitter,href:"twitter.com",authorName:o,platformName:"Twitter",iconName:"twitter"}),i=r({username:e?.linkedin,href:"www.linkedin.com/in",authorName:o,platformName:"LinkedIn",iconName:"linkedin"}),s=r({username:e?.github,href:"github.com",authorName:o,platformName:"GitHub",iconName:"github"}),c=(({custom:t,authorName:e})=>t&&""!==t?`<a href="${t}" aria-label="${e}" rel="noopener norefferer"><deckgo-lazy-img svg-src="${a}/globe.svg" role="presentation" alt="" /></a>`:void 0)({custom:e?.custom,authorName:o});return void 0!==n||void 0!==i||void 0!==s||void 0!==c?`${[c,n,s,i].filter((t=>void 0!==t)).join("")}`:void 0},z=({selector:t})=>{let a=document.querySelector(`${t} > article *:nth-child(1)`),e=document.querySelector(`${t} > article *:nth-child(2)`),o=t=>{let a=t?.getAttribute("img-src");return 0===a?.indexOf("http")?a:void 0};if("deckgo-lazy-img"===a?.nodeName.toLowerCase())return o(a);if("deckgo-lazy-img"===e?.nodeName.toLowerCase())return o(e);let r=a?.querySelector("deckgo-lazy-img");return o(null!=r?r:e?.querySelector("deckgo-lazy-img"))};const S=async()=>{const o=t();if(!o)throw new Error("No internet identity to get the canisters status");const[r,n]=await Promise.all([a({identity:o}),e({identity:o})]),{actor:i,bucketId:s}=r,{actor:c,bucketId:l}=n,[d,m]=await Promise.all([i.cyclesBalance(),c.cyclesBalance()]);return{data:{bucketId:s,balance:d},storage:{bucketId:l,balance:m}}},L=async({startsWith:e,notContains:o})=>{const r=t();if(!r)return[];const{actor:n}=await a({identity:r});if(!n)return[];const i=(await n.list(u({startsWith:u(e),notContains:u(o)}))).map((([,t])=>G({data:t,identity:r})));return await Promise.all(i)},G=async({data:t,identity:a})=>{const e=await r(t.data);return{id:t.id,data:Object.assign(Object.assign({},e),{owner_id:a.getPrincipal().toText(),created_at:i(t.created_at),updated_at:i(t.updated_at)})}},B=async({key:t,actor:a,log:e})=>{if(!t)return;null==e||e({msg:`[delete][start] ${t}`});const o=performance.now(),r=a||await H();await r.del(t);const n=performance.now();null==e||e({msg:`[delete][done] ${t}`,duration:n-o})},M=({key:t,actor:a})=>new Promise((async(e,n)=>{try{const n=a||await H(),s=o(await n.get(t));if(!s)return void e(void 0);const c=await r(s.data);e({id:s.id,data:Object.assign(Object.assign({},c),{created_at:i(s.created_at),updated_at:i(s.updated_at)})})}catch(t){n(t)}})),R=({key:t,data:a,id:e,actor:o,log:r})=>new Promise((async(n,i)=>{try{null==r||r({msg:`[set][start] ${t}`});const i=performance.now(),s=o||await H(),l=new Date;await s.set(t,{id:e,data:await c(a),created_at:d(a.created_at||new Date),updated_at:d(l)});const m=performance.now();null==r||r({msg:`[set][done] ${t}`,duration:m-i}),n({id:e,data:Object.assign(Object.assign({},a),{updated_at:l})})}catch(t){i(t)}})),H=async()=>{const e=t();if(!e)throw new Error("No internet identity.");const{actor:o}=await a({identity:e});if(!o)throw new Error("No actor initialized.");return o},W=async()=>L({startsWith:"/decks/",notContains:"/slides/"}),J=async t=>B({key:`/decks/${t}`}),q=async({onNext:t})=>(document.addEventListener("deckPublished",(async({detail:a})=>await t(a)),{passive:!0}),()=>document.removeEventListener("deckPublished",(({detail:a})=>t(a)),!1)),Q=async()=>L({startsWith:"/docs/",notContains:"/paragraphs/"}),V=async t=>B({key:`/docs/${t}`}),X=async({onNext:t})=>(document.addEventListener("docPublished",(async({detail:a})=>await t(a)),{passive:!0}),()=>document.removeEventListener("docPublished",(({detail:a})=>t(a)),!1)),Y=(t,a)=>M({key:`/docs/${t}/paragraphs/${a}`}),Z=(t,a)=>M({key:`/decks/${t}/slides/${a}`});let tt=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,a)=>t+((a&=63)<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a>62?"-":"_")),"");const at=()=>L({startsWith:"/templates/"}),et=t=>{const a=tt();return R({key:`/templates/${a}`,id:a,data:t})},ot=t=>{const{data:a,id:e}=t;return R({key:`/templates/${e}`,id:e,data:a})},rt=async t=>{p({msg:"[update][start] user"});const a=performance.now(),{data:e,id:o}=t,r=await R({key:"/user",id:o,data:e}),n=performance.now();return p({msg:"[update][done] user",duration:n-a}),r},nt=async({data:t,filename:a,folder:e,storageActor:o,headers:r,token:n,fullPath:i,log:s})=>{s({msg:`[upload][start] ${a}`});const c=performance.now(),l=i||`/${e}/${a}`,{batchId:d}=await o.initUpload({name:a,fullPath:l,token:u(n),folder:e}),m=performance.now();s({msg:`[upload][create batch] ${a}`,duration:m-c});const g=[],p=7e5,h=new Blob([await t.arrayBuffer()]);for(let t=0;t<h.size;t+=p){const a=h.slice(t,t+p);g.push(it({batchId:d,chunk:a,storageActor:o}))}const f=await Promise.all(g),w=performance.now();s({msg:`[upload][chunks] ${a}`,duration:w-m}),await o.commitUpload({batchId:d,chunkIds:f.map((({chunkId:t})=>t)),headers:[["Content-Type",t.type],["accept-ranges","bytes"],...r]});const y=performance.now();return s({msg:`[upload][commit batch] ${a}`,duration:y-w}),s({msg:`[upload][done] ${a}`,duration:y-c}),{fullPath:l,filename:a,token:n}},it=async({batchId:t,chunk:a,storageActor:e})=>e.uploadChunk({batchId:t,content:[...new Uint8Array(await a.arrayBuffer())]}),st=t=>encodeURI(t.toLowerCase().replace(/\s/g,"-")),ct=async()=>{const a=t();if(!a)throw new Error("No internet identity.");const o=await e({identity:a}),{actor:r,bucketId:n}=o;if(!r)throw new Error("No actor initialized.");if(!n)throw new Error("No bucket principal defined");return o},lt=({social_image_link:t})=>void 0!==t,dt=async({storageUpload:t,publishData:a})=>{const{social_image_name:e,social_image_value:o}=a;if(lt(a))return;if(!o)return;const{actor:r}=t;await nt({data:o,filename:`${e}.png`,folder:"meta",storageActor:r,headers:[["Cache-Control","max-age=3600"]],log:p})},mt=({template:t,data:a})=>Object.entries(a).reduce(((t,[a,e])=>t.replaceAll(`{{DECKDECKGO_${a.toUpperCase()}}}`,e||"").replaceAll(`\x3c!-- DECKDECKGO_${a.toUpperCase()} --\x3e`,e||"")),t),ut=async({indexHTML:t,folder:a,meta:e})=>{const{html:o,publishData:r}=t,{bucketId:n,actor:i}=await ct(),{filename:s,pathname:c}=gt({publishData:r,meta:e,folder:a}),l=`https://${n.toText()}.raw.ic0.app`,d=`${l}${c}`;let m=o.replace("{{DECKDECKGO_URL}}",d);return m=(({html:t,data:a,bucketUrl:e})=>{const{social_image_name:o}=a;if(lt(a)){const{social_image_link:e}=a;return t.replaceAll("{{DECKDECKGO_SOCIAL_IMAGE}}",e)}return t.replaceAll("{{DECKDECKGO_SOCIAL_IMAGE}}",`${e}/meta/${o}.png`)})({html:m,data:r,bucketUrl:l}),{storageUpload:{html:m,actor:i,filename:s,pathname:c,fullUrl:d,bucketUrl:l,folder:a},publishData:r}},gt=({publishData:t,meta:a,folder:e})=>{if(null==a?void 0:a.pathname){const{pathname:t}=a;return{filename:t.replace(`/${e}/`,""),pathname:t}}const o=st(t.title);return{filename:o,pathname:`/${e}/${o}`}},pt=async({publishData:t,updateTemplateContent:a,sourceFolder:e})=>{const o=await ht(e),r=mt({template:o,data:t}),{attributes:n}=t;return{html:a({attr:n?Object.entries(n).reduce(((t,[a,e])=>`${a}="${e}"; ${t}`),"").trim():void 0,template:r})}},ht=async t=>(await fetch(`${h.getInstance().get().kitPath}/${t}/index.html`)).text(),ft=({data:t,storageUpload:a,meta:e,name:o})=>{var r;const{pathname:n}=a,i=new Date;return Object.assign(Object.assign({},t),{meta:Object.assign(Object.assign({},e||{title:o}),{pathname:n,published:!0,published_at:null!==(r=e.published_at)&&void 0!==r?r:i,updated_at:i})})},wt=async({filename:t,html:a,actor:e,folder:o})=>{await nt({data:new Blob([a],{type:"text/html"}),filename:t,folder:o,storageActor:e,headers:[["Cache-Control","max-age=3600"]],log:p})},yt=()=>h.getInstance().get().author;const bt=({content:t,bucketUrl:a,metas:e,selector:o})=>{const r=e.map((({dataId:t,meta:e})=>kt({dataId:t,meta:e,bucketUrl:a})));return t.replace(o,r.join(""))},kt=({dataId:t,bucketUrl:a,meta:e})=>{var o,r;const{title:n,pathname:i}=e,s=`${a}${i}`,c=null!=(null==e?void 0:e.description)&&""!==(null==e?void 0:e.description)?`<p class="description">${e.description}</p>`:"",{format:l}=new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric"});return`<a data-id="${t}" href="${s}" rel="noopener noreferrer"><article><div><h3>${n}</h3>${c}</div><div><p>Published: ${l(null!==(o=f(null==e?void 0:e.published_at))&&void 0!==o?o:new Date)}</p><p>Edited: ${l(null!==(r=f(null==e?void 0:e.updated_at))&&void 0!==r?r:new Date)}</p></div></article></a>`},$t=t=>`<url>\n  <loc>${t}</loc>\n  <changefreq>daily</changefreq>\n  <priority>0.7</priority>\n</url>`,vt=t=>t.filter((({data:t})=>{var a;return!0===(null===(a=t.meta)||void 0===a?void 0:a.published)})).sort((({data:{meta:{published_at:t}}},{data:{meta:{published_at:a}}})=>{var e,o;return((null===(e=f(a))||void 0===e?void 0:e.getTime())||0)-((null===(o=f(t))||void 0===o?void 0:o.getTime())||0)})).map((({id:t,data:{meta:a}})=>({dataId:t,meta:a}))),Dt=async({storageUpload:t,publishData:a,entries:e})=>{const o=vt(e),r=[Ot({storageUpload:t,publishData:a,metas:o}),Ut({storageUpload:t,metas:o}),_t({storageUpload:t,metas:o,publishData:a})];await Promise.all(r)},_t=async({storageUpload:t,metas:a,publishData:e})=>{const{bucketUrl:o,actor:r}=t,{author:n}=e,i=(({bucketUrl:t,metas:a,author:e})=>(({items:t,author:a,bucketUrl:e})=>`<?xml version="1.0" encoding="UTF-8"?><rss xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">\n    <channel>\n        <title><![CDATA[${a} blog]]></title>\n        <description><![CDATA[The latest blog posts of ${a}]]></description>\n        <link>${e}</link>\n        <lastBuildDate>${(new Date).toUTCString()}</lastBuildDate>\n        \n        ${t}\n    </channel>\n</rss>`)({bucketUrl:t,items:(({metas:t,bucketUrl:a})=>t.map((({meta:{title:t,description:e,pathname:o,published_at:r}})=>{var n;return`\n  <item>\n    <title><![CDATA[${t}]]></title>\n    <description><![CDATA[${null!=e?e:t}]]></description>\n    <link>${a}${o}</link>\n    <pubDate>${(null!==(n=f(r))&&void 0!==n?n:new Date).toUTCString()}</pubDate>\n  </item>\n`})))({metas:a,bucketUrl:t}).join(""),author:e}))({bucketUrl:o,metas:a,author:n||yt()});await Ct({rss:i,actor:r})},Ut=async({storageUpload:t,metas:a})=>{const{bucketUrl:e,actor:o}=t,r=(({bucketUrl:t,metas:a})=>`<?xml version="1.0" encoding="UTF-8" ?>\n  <urlset\n    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"\n    xmlns:xhtml="http://www.w3.org/1999/xhtml"\n    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"\n  >\n    ${[$t(t),...a.map((({meta:{pathname:a}})=>$t(`${t}${a}`)))].join("")}\n</urlset>`)({bucketUrl:e,metas:a});await jt({sitemap:r,actor:o})},Ot=async({storageUpload:t,publishData:a,metas:e})=>{const{bucketUrl:o,actor:r}=t,n=await(async({bucketUrl:t,publishData:a,metas:e})=>{const o=await(async()=>(await fetch(`${h.getInstance().get().kitPath}/index.html`)).text())(),{photo_url:r}=a,n=function(t,a){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&a.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)a.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]])}return e}(a,["photo_url"]);let i=mt({template:o,data:n});return i=(({photo_url:t,html:a})=>t?a.replace("\x3c!-- DECKDECKGO_PHOTO_URL --\x3e",`<img role="presentation" alt="" loading="lazy" src="${t}" />`):a)({html:i,photo_url:r}),i=bt({content:i,bucketUrl:t,metas:e,selector:/<!-- DECKDECKGO_DATA -->/}),i})({bucketUrl:o,publishData:a,metas:e});await xt({html:n,actor:r})},xt=async({html:t,actor:a})=>Pt({actor:a,content:t,mimeType:"text/html",fullPath:"/",filename:"index.html"}),jt=async({sitemap:t,actor:a})=>Pt({actor:a,content:t,mimeType:"application/xml",fullPath:"/sitemap.xml",filename:"sitemap.xml",maxAge:3600}),Ct=async({rss:t,actor:a})=>Pt({actor:a,content:t,mimeType:"application/xml",fullPath:"/rss.xml",filename:"rss.xml",maxAge:3600}),Pt=async({content:t,actor:a,mimeType:e,filename:o,fullPath:r,maxAge:n=0})=>{await nt({data:new Blob([t],{type:e}),filename:o,folder:"resources",storageActor:a,headers:[["Cache-Control",`max-age=${n}`]],fullPath:r,log:p})},At=async({bucketUrl:t,identity:a})=>{const e=await Q(a.getPrincipal().toText()),o=vt(e),r=await(async({metas:t,bucketUrl:a})=>{const e=await(async t=>{const a=await fetch(t);if(a.ok)return a.text()})(a);if(!e)return;const o=[...e.matchAll(/<section id="posts"[\s\S]*?>([\s\S]*?)<\/section>/gm)];return o.length<1&&o[0].length<2?void 0:bt({content:e,metas:t,bucketUrl:a,selector:o[0][1]})})({bucketUrl:t,metas:o});if(!r)return;const{actor:n}=await ct();await xt({html:r,actor:n})},Et=()=>h.getInstance().get().kitPath,Ft=async({meta:t})=>{const{actor:a}=await ct(),e=(await a.list(u("resources"))).map((({name:t})=>t)),o=await zt(),r=o.filter((({filename:t,mimeType:a})=>!e.includes(t)||"text/css"===a));if(!r||r.length<=0)return;const n=r.map((e=>It({kit:e,actor:a,meta:t})));await Promise.all(n),await Nt({kitNewFiles:r,kit:o,actor:a,meta:t})},It=async({kit:t,actor:a,meta:e})=>{const{src:o,filename:r,mimeType:n,updateContent:i,headers:s}=t,c=await Kt(o),l=i?i({content:c,meta:e}):c;await Tt({filename:r,content:l,actor:a,mimeType:n,headers:s,fullPath:o.replace(Et(),"")})},Nt=async({kitNewFiles:t,kit:a,actor:e,meta:o})=>{if(void 0!==t.find((({filename:t})=>"service-worker.js"===t)))return;const r=a.find((({filename:t})=>"service-worker.js"===t));void 0===!r&&await It({kit:r,actor:e,meta:o})},Tt=async({filename:t,fullPath:a,content:e,actor:o,mimeType:r,headers:n})=>{await nt({data:new Blob([e],{type:r}),filename:t,folder:"resources",storageActor:o,fullPath:a,headers:n,log:p})},Kt=async t=>(await fetch(t)).text(),zt=async()=>{const t=Et();return(await(await fetch(`${t}/build.json`)).json()).map((a=>(a=>{const e=`${t}/${a}`;return e.includes(".js")?{src:e,mimeType:"text/javascript"}:e.includes(".css")?{src:e,mimeType:"text/css"}:e.includes(".webmanifest")?{src:e,mimeType:"application/manifest+json",updateContent:({content:t,meta:a})=>{var e;return t.replace("{{DECKDECKGO_AUTHOR}}",(null===(e=null==a?void 0:a.author)||void 0===e?void 0:e.name)||yt())}}:{src:e,mimeType:"text/plain"}})(a))).map((t=>{const{pathname:a}=new URL(t.src);return Object.assign(Object.assign({},t),{filename:a.split("/").pop(),headers:[["Cache-Control","max-age=31536000"]]})}))},St=async({deck:t})=>{await Ft({meta:t.data.meta});const{storageUpload:a,publishData:e,deck:o}=await(async({deck:t})=>{const{id:a,data:e}=t,{meta:o}=e,r=await(async({deck:t})=>{const a=await(async({deck:t,fallbackAuthor:a})=>{let{data:e}=t,{meta:o,background:r,footer:n,header:i}=e;return{...await P({meta:o,selector:$,fallbackName:e.name,fallbackAuthor:a}),slides:I(),background:r?`<div slot="background">${r}</div>`:void 0,header:r?`<div slot="header">${i}</div>`:void 0,footer:r?`<div slot="footer">${n}</div>`:void 0}})({deck:t,fallbackAuthor:h.getInstance().get().author}),{slides:e}=a,{html:o}=await pt({publishData:a,updateTemplateContent:({attr:t,template:a})=>a.replace("\x3c!-- DECKDECKGO_DECK --\x3e",`<deckgo-deck id="slider" embedded="true" ${t||""}>${e.join("")}</deckgo-deck>`),sourceFolder:"p"});return{html:o,publishData:a}})({deck:t}),{storageUpload:n,publishData:i}=await ut({indexHTML:r,folder:"p",meta:o}),s=ft({data:e,meta:e.meta,name:e.name,storageUpload:n}),c=await R({key:`/decks/${a}`,id:a,data:s});return await wt(n),await dt({storageUpload:n,publishData:i}),{storageUpload:n,publishData:i,deck:c}})({deck:t});return await(async({storageUpload:t,publishData:a})=>{p({msg:"[list][start] decks"});const e=await W();p({msg:"[list][start] end"}),await Dt({storageUpload:t,publishData:a,entries:e})})({storageUpload:a,publishData:e,owner_id:t.data.owner_id}),(t=>{const{id:a,data:e}=t,o={id:a,data:Object.assign(Object.assign({},e),{deploy:{api:{status:"successful",updated_at:new Date}}})},r=new CustomEvent("deckPublished",{detail:o});document.dispatchEvent(r)})(o),o},Lt=async({doc:t,config:a})=>{await Ft({meta:t.data.meta});const{storageUpload:e,publishData:o,doc:r}=await(async({doc:t,config:a})=>{const{id:e,data:o}=t,{meta:r}=o,n=await(async({doc:t,config:a})=>{const{theme:e,socialImgPath:o}=a,r=await(async({doc:t,fallbackAuthor:a,theme:e,socialImgPath:o})=>{let{data:r}=t,{meta:n}=r;return{...await P({meta:n,selector:v,fallbackName:r.name,fallbackAuthor:a,socialImgPath:o}),paragraphs:N(),theme:e,social_image_link:z({selector:v})}})({doc:t,fallbackAuthor:h.getInstance().get().author,theme:e,socialImgPath:o}),{paragraphs:n}=r,{html:i}=await pt({publishData:r,updateTemplateContent:({attr:t,template:a})=>a.replace("\x3c!-- DECKDECKGO_DOC --\x3e",`<article ${t||""} class="deckgo-doc">${n.join("")}</article>`),sourceFolder:"d"});return{html:i,publishData:r}})({doc:t,config:a}),{storageUpload:i,publishData:s}=await ut({indexHTML:n,folder:"d",meta:r}),c=ft({data:o,meta:o.meta,name:o.name,storageUpload:i}),l=await R({key:`/docs/${e}`,id:e,data:c});return await wt(i),await dt({storageUpload:i,publishData:s}),{storageUpload:i,publishData:s,doc:l}})({doc:t,config:a});return await(async({storageUpload:t,publishData:a})=>{p({msg:"[list][start] docs"});const e=await Q();p({msg:"[list][end] docs"}),await Dt({storageUpload:t,publishData:a,entries:e})})({storageUpload:e,publishData:o,owner_id:t.data.owner_id}),(t=>{const{id:a,data:e}=t,o={id:a,data:Object.assign(Object.assign({},e),{deploy:{api:{status:"successful",updated_at:new Date}}})},r=new CustomEvent("docPublished",{detail:o});document.dispatchEvent(r)})(r),r},Gt=async()=>{const{bucketId:t}=await ct();return h.getInstance().localIdentity()?`http://${t.toText()}.localhost:8000`:`https://${t.toText()}.raw.ic0.app`},Bt=async()=>{const a=t();if(!a)throw new Error("No internet identity provided to list the entries that should be listed on the landing page");const e=await Gt();await At({bucketUrl:e,identity:a})},Mt=async({data:a,folder:e,maxSize:o})=>{const r=t();return Rt({data:a,folder:e,maxSize:o,identity:r,log:p})},Rt=async({data:t,maxSize:a,folder:o,identity:r,storageBucket:n,log:i})=>{if(!t||!t.name)throw new Error("File not valid.");if(t.size>a)throw new Error(`File is too big (max. ${a/1048576} Mb)`);const{actor:s,bucketId:c}=n||await e({identity:r});if(!s||!c)throw new Error("Storage bucket is not initialized.");const{fullPath:l,filename:d,token:m}=await nt({data:t,filename:st(t.name),folder:o,storageActor:s,token:tt(),headers:[["cache-control","private, max-age=0"]],log:i});return{downloadUrl:`https://${c.toText()}.raw.ic0.app${l}?token=${m}`,fullPath:l,name:d}},Ht=async({folder:t})=>{const{actor:a,bucketId:e}=await ct(),o=await a.list(u(t)),r=`https://${e.toText()}.raw.ic0.app`;return{items:o.map((({name:t,fullPath:a,token:e})=>({downloadUrl:`${r}${a}?token=${e}`,fullPath:a,name:t}))),nextPageToken:null}},Wt=async({downloadUrl:t,fullPath:a})=>{const{actor:e}=await ct();let o=null;if(t){const{searchParams:a}=new URL(t);o=a.get("token")}return e.del({fullPath:a,token:u(o||void 0)})};function Jt(t){return new Promise((function(a,e){t.oncomplete=t.onsuccess=function(){return a(t.result)},t.onabort=t.onerror=function(){return e(t.error)}}))}var qt;function Qt(){return qt||(qt=function(t,a){var e=indexedDB.open("keyval-store");e.onupgradeneeded=function(){return e.result.createObjectStore(a)};var o=Jt(e);return function(t,e){return o.then((function(o){return e(o.transaction(a,t).objectStore(a))}))}}(0,"keyval")),qt}const Vt=({data:t,storageFile:a,src:e})=>{const{downloadUrl:o,name:r}=a;let n=t.replaceAll(`img-src="${e}"`,`img-src="${o}"`);return n=n.replaceAll(`img-alt="${e}"`,`img-alt="${r}"`),n=n.replaceAll(`data-src="${e}"`,`data-src="${o}"`),n},Xt=async({selector:t,storageFile:a,folder:e,src:o})=>{const r=document.querySelector(t);if("deckgo-lazy-img"===(null==r?void 0:r.nodeName.toLowerCase()))return void await Yt({images:[r],storageFile:a,folder:e,src:o});const n=null==r?void 0:r.querySelectorAll("deckgo-lazy-img");await Yt({images:Array.from(n),storageFile:a,folder:e,src:o})},Yt=async({storageFile:t,folder:a="images",images:e,src:o})=>{const r=e.filter((t=>"data"===a?t.getAttribute("data-src")===o:t.imgSrc===o));if(!r||r.length<=0)return;const n=Array.from(r).map((e=>"data"===a?(async a=>{const{downloadUrl:e}=t;a.setAttribute("data-src",e)})(e):(async a=>{const{downloadUrl:e,name:o}=t;a.imgSrc=e,a.imgAlt=o})(e)));await Promise.all(n)},Zt=async({storageFile:t,src:a,key:e})=>{const o=(({paragraph:t,files:a})=>{if(!a)return Object.assign({},t);const e=a.filter((({src:t,storageFile:a})=>void 0!==t&&void 0!==a));let{children:o,nodeName:r,attributes:n}=t.data;return"deckgo-lazy-img"===r&&n&&e.forEach((({src:t,storageFile:a})=>{n=(({attributes:t,storageFile:a,src:e})=>{const{downloadUrl:o}=a;return Object.keys(t).reduce(((a,r)=>(a[r]=t[r]===e?o:t[r],a)),{})})({attributes:n,storageFile:a,src:t})})),o=null==o?void 0:o.map((t=>(e.forEach((({src:a,storageFile:e})=>{t=Vt({data:t,storageFile:e,src:a})})),t))),{id:t.id,data:Object.assign(Object.assign({},t.data),{updated_at:new Date,children:o,attributes:n})}})({paragraph:await ta({key:e}),files:[{src:a,storageFile:t}]});await aa({key:e,data:o})},ta=async({key:t})=>{const a=await function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:Qt())("readonly",(function(a){return Jt(a.get(t))}))}(t);if(!a)throw new Error("Data not found and that is really weird here.");return a},aa=async({key:t,data:a})=>function(t,a){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:Qt())("readwrite",(function(e){return e.put(a,t),Jt(e.transaction)}))}(t,a),ea=w(import("./p-b2b1795a.js").then((t=>t.worker)),"stencil.sync.ic.worker","uploadWorker"),oa=async({msg:t,data:a})=>{"deckdeckgo_sync_deck_background"===t&&await(async t=>{(({storageFile:t})=>{const a=document.querySelector(`${$} > *[slot="background"]`),e=null==a?void 0:a.querySelector("deckgo-lazy-img");if(!e)return;const{downloadUrl:o,name:r}=t;e.imgSrc=o,e.imgAlt=r})(t),await(async({storageFile:t,src:a})=>{const e=document.querySelectorAll(`${$} .deckgo-slide-container:not([custom-background]) *[slot="background"] deckgo-lazy-img`);await Yt({images:Array.from(e),storageFile:t,src:a})})(t),await(async({storageFile:t,src:a,key:e})=>{const o=(({deck:t,storageFile:a,imgSrc:e})=>a&&e?{id:t.id,data:Object.assign(Object.assign({},t.data),{updated_at:new Date,background:Vt({data:t.data.background,src:e,storageFile:a})})}:Object.assign({},t))({deck:await ta({key:e}),imgSrc:a,storageFile:t});await aa({key:e,data:o})})(t)})(a),"deckdeckgo_sync_slide_image"===t&&await(async t=>{const{selector:a}=t;a&&(await Xt(t),await(async({storageFile:t,src:a,key:e})=>{const o=(({slide:t,images:a})=>{if(!a)return Object.assign({},t);const e=a.filter((({src:t,storageFile:a})=>void 0!==t&&void 0!==a));let{content:o}=t.data;return e.forEach((({src:t,storageFile:a})=>{o=Vt({data:o,storageFile:a,src:t})})),{id:t.id,data:Object.assign(Object.assign({},t.data),{updated_at:new Date,content:o})}})({slide:await ta({key:e}),images:[{src:a,storageFile:t}]});await aa({key:e,data:o})})(t))})(a),"deckdeckgo_sync_slide_chart"===t&&await(async t=>{const{selector:a}=t;a&&((({selector:t,storageFile:a})=>{const e=document.querySelector(t);if(!e||!e.nodeName||"deckgo-slide-chart"!==e.nodeName.toLowerCase())return;const{downloadUrl:o}=a;e.src=o})(t),await(async({storageFile:t,src:a,key:e})=>{const o=(({slide:t,chart:a})=>{if(!a)return Object.assign({},t);const{src:e,storageFile:o}=a;if(!e||!o)return Object.assign({},t);const{attributes:r}=t.data;if(!r)return Object.assign({},t);const{downloadUrl:n}=o;return{id:t.id,data:Object.assign(Object.assign({},t.data),{updated_at:new Date,attributes:Object.assign(Object.assign({},r),{src:n})})}})({slide:await ta({key:e}),chart:{src:a,storageFile:t}});await aa({key:e,data:o})})(t))})(a),"deckdeckgo_sync_paragraph_image"===t&&await(async t=>{const{selector:a}=t;a&&(await Xt(t),await Zt(t))})(a)},ra=async({syncData:a,clean:e})=>{if(!t())throw new Error("No internet identity to sync data");const o=await y();if(!b(k.fromJSON(o.delegationChain)))throw new Error("Internet identity has expired. Please login again.");await ea({internetIdentity:o,syncData:a,env:h.getInstance().get()},oa,p),await e(a)};export{S as canistersBalance,et as createTemplate,W as deckEntries,St as deckPublish,J as deleteDeck,V as deleteDoc,Wt as deleteFile,Q as docEntries,Lt as docPublish,Ht as getFiles,Y as getParagraph,Z as getSlide,at as getUserTemplates,Gt as publishUrl,q as snapshotDeck,X as snapshotDoc,ra as sync,Bt as updateLanding,ot as updateTemplate,rt as updateUser,Mt as uploadFile,Rt as uploadFileIC}