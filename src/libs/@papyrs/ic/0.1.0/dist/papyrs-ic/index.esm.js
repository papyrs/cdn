import{g as t,a as e,t as o,f as r,b as n,c,d as l,E as m}from"./p-e9d6f70b.js";import{g as u,t as p,c as h,i as f}from"./p-4afcec39.js";export{d as deleteAuth,g as getIdentity,a as initAuth,i as isAuthenticated,b as signIn,s as signOut}from"./p-4afcec39.js";import{u as w,d as y,g as k,s as v,I as $,i as _,D}from"./p-0df7b987.js";import"./p-73cd87c9.js";import"./p-ee0b2015.js";var O=["id","hydrated","contenteditable","editable","spellcheck","highlighted","custom-loader","class","placeholder","data-gramm","data-gramm_id","data-gramm_editor","data-gr-id"],U=["paragraph_id","data-src",...O],j=({node:t,deep:e=!0,attributes:a=O})=>{if(C(t))return t;if(P(t)){let o=t.cloneNode(e);x({element:o,attributes:a});let r=o.querySelectorAll(a.map((t=>`[${t}]`)).join(","));for(let t of Array.from(r))x({element:t,attributes:a});return o}return null},x=({element:t,attributes:e})=>{for(let a of e)t.removeAttribute(a)},C=t=>t?.nodeType===Node.TEXT_NODE||t?.nodeType===Node.COMMENT_NODE,P=t=>t?.nodeType===Node.ELEMENT_NODE,A="app-deck-editor > ion-content div.deck > main > deckgo-deck",E="deckgo-studio-doc",I=[{id:"google-fonts-lora",name:"Lora",family:"'Lora', serif"},{id:"google-fonts-roboto",name:"Roboto",family:"'Roboto', sans-serif"},{id:"google-fonts-open-sans",name:"Open Sans",family:"'Open Sans', sans-serif"},{id:"google-fonts-montserrat",name:"Montserrat",family:"'Montserrat', sans-serif"},{id:"google-fonts-cabin",name:"Cabin",family:"'Cabin', sans-serif"},{id:"google-fonts-lato",name:"Lato",family:"'Lato', sans-serif"},{id:"google-fonts-muli",name:"Muli",family:"'Muli', sans-serif"},{id:"google-fonts-source-sans-pro",name:"Source Sans Pro",family:"'Source Sans Pro', sans-serif"},{id:"google-fonts-libre-baskerville",name:"Libre Baskerville",family:"'Libre Baskerville', serif"},{id:"google-fonts-oswald",name:"Oswald",family:"'Oswald', sans-serif"},{id:"google-fonts-jura",name:"Jura",family:"'Jura', sans-serif"},{id:"google-fonts-fjord-one",name:"Fjord One",family:"'Fjord One', serif"},{id:"google-fonts-josefin-slab",name:"Josefin Slab",family:"'Josefin Slab', serif"}],F=async({meta:t,fallbackName:e,fallbackAuthor:a,selector:o,socialImgPath:r})=>{let n=[N(),T({meta:t})].filter((t=>void 0!==t)),i=K({selector:o}),s=await L(),c=(t?.title||e)?.trim();return{title:c,description:(t?.description||e)?.trim(),author:t?.author?.name??a,bio:t?.author?.bio,photo_url:t?.author?.photo_url,head_extra:n.length>0?n.join(""):void 0,attributes:i,social_image_name:encodeURI(c).toLowerCase(),social_image_value:s,social_links:G({meta:t,socialImgPath:r}),social_image_link:void 0,lang:t?.lang??"en"}},N=()=>{let t=document.querySelector(A)?.style.fontFamily;if(!t)return;let e=I.find((e=>t===e.family.replace(/\'/g,"")));return e?`<link rel="stylesheet" href="${(({font:t})=>`https://fonts.googleapis.com/css?display=swap&amp;family=${t.name.replace(" ","+")}`)({font:e})}">`:void 0},T=({meta:t})=>{if(t&&t.canonical)return`<link rel="canonical" href="${t.canonical}">`},K=({selector:t})=>{let e=document.querySelector(t)?.attributes;if(e)return Array.from(e).filter((({name:t})=>!["id","hydrated","class","contenteditable"].includes(t))).reduce(((t,{name:e,value:a})=>(t[e]=a,t)),{})},S=()=>{let t=document.querySelectorAll(`${A} > *[slide_id]`),e=({slide:t,custom:e})=>{if(t.hasAttribute(`custom-${e}`))return;let a=t.querySelector(`div[slot="${e}"]`);!a||t.removeChild(a)};return Array.from(t).map((t=>{let a=j({node:t,deep:!1,attributes:U});return Array.from(t.childNodes).forEach((t=>{P(t)&&t.hasAttribute("slot")&&(a.appendChild(j({node:t,attributes:U})),e({slide:a,custom:"background"}),e({slide:a,custom:"header"}),e({slide:a,custom:"footer"}))})),a})).map((t=>t.outerHTML))},z=()=>{let t=document.querySelectorAll(`${E} > article *[paragraph_id]`);return Array.from(t).map((t=>j({node:t,attributes:U}))).map((t=>t.outerHTML))},L=async()=>document.querySelector("deckgo-social-img")?.toBlob("image/png"),G=({meta:t,socialImgPath:e})=>{if(!t||!t.author)return;let{author:{social:a,name:o}}=t,r=({username:t,href:a,authorName:o,platformName:r,iconName:n})=>t&&""!==t?`<a href="https://${a}/${t}" aria-label="${o} on ${r}" rel="noopener norefferer"><deckgo-lazy-img svg-src="${e}/${n}.svg" role="presentation" alt="${r} logo" /></a>`:void 0,n=r({username:a?.twitter,href:"twitter.com",authorName:o,platformName:"Twitter",iconName:"twitter"}),i=r({username:a?.linkedin,href:"www.linkedin.com/in",authorName:o,platformName:"LinkedIn",iconName:"linkedin"}),s=r({username:a?.github,href:"github.com",authorName:o,platformName:"GitHub",iconName:"github"}),c=(({custom:t,authorName:a})=>t&&""!==t?`<a href="${t}" aria-label="${a}" rel="noopener norefferer"><deckgo-lazy-img svg-src="${e}/globe.svg" role="presentation" alt="" /></a>`:void 0)({custom:a?.custom,authorName:o});return void 0!==n||void 0!==i||void 0!==s||void 0!==c?`${[c,n,s,i].filter((t=>void 0!==t)).join("")}`:void 0},M=({selector:t})=>{let e=document.querySelector(`${t} > article *:nth-child(1)`),a=document.querySelector(`${t} > article *:nth-child(2)`),o=t=>{let e=t?.getAttribute("img-src");return 0===e?.indexOf("http")?e:void 0};if("deckgo-lazy-img"===e?.nodeName.toLowerCase())return o(e);if("deckgo-lazy-img"===a?.nodeName.toLowerCase())return o(a);let r=e?.querySelector("deckgo-lazy-img");return o(null!=r?r:a?.querySelector("deckgo-lazy-img"))},B=t=>{if(t&&void 0!==t)return t instanceof String||"string"==typeof t?new Date(`${t}`):"number"!=typeof t||isNaN(t)?t&&t.seconds>=0&&t.nanoseconds>=0?new Date(t.toDate()):t:new Date(t)};const R=async()=>{const a=u();if(!a)throw new Error("No internet identity to get the canisters status");const[o,r]=await Promise.all([t({identity:a}),e({identity:a})]),{actor:n,bucketId:i}=o,{actor:s,bucketId:c}=r,[l,d]=await Promise.all([n.cyclesBalance(),s.cyclesBalance()]);return{data:{bucketId:i,balance:l},storage:{bucketId:c,balance:d}}},H=async({startsWith:e,notContains:a})=>{const r=u();if(!r)return[];const{actor:n}=await t({identity:r});if(!n)return[];const i=(await n.list(o({startsWith:o(e),notContains:o(a)}))).map((([,t])=>W({data:t,identity:r})));return Promise.all(i)},W=async({data:t,identity:e})=>{const a=await r(t.data);return{id:t.id,data:Object.assign(Object.assign({},a),{owner_id:e.getPrincipal().toText()}),created_at:t.created_at,updated_at:t.updated_at}},q=async({key:t,actor:e})=>{const a=e||await J(),o=n(await a.get(t));if(!o)return;const i=await r(o.data);return{id:o.id,data:i,created_at:o.created_at,updated_at:o.updated_at}},J=async()=>{const e=u();if(!e)throw new Error("No internet identity.");const{actor:a}=await t({identity:e});if(!a)throw new Error("No actor initialized.");return a},Q=async({key:t,record:e,updateTimestamps:a=!1,actor:r,log:n})=>{null==n||n({msg:`[set][start] ${t}`,level:"info"});const i=performance.now(),s=await(async({key:t,record:e,actor:a})=>{const r=a||await J(),{id:n,data:i,created_at:s,updated_at:l}=e,d=await r.put(t,{id:n,data:await c(i),created_at:o(s),updated_at:o(l)});return{id:n,data:i,created_at:d.created_at,updated_at:d.updated_at}})({key:t,actor:r,record:e});a&&await w(t,(({id:t,data:e})=>({id:t,data:e,created_at:s.created_at,updated_at:s.updated_at})));const l=performance.now();return null==n||n({msg:`[set][done] ${t}`,duration:l-i,level:"info"}),s},V=async({key:t,actor:e,log:a,data:o})=>{if(!t)return;null==a||a({msg:`[delete][start] ${t}`,level:"info"});const r=performance.now();await(async({key:t,actor:e,data:a})=>{const o=e||await J();a?await o.delete(t,a):await o.del(t)})({key:t,actor:e,data:o}),void 0!==o&&await y(t);const n=performance.now();null==a||a({msg:`[delete][done] ${t}`,duration:n-r,level:"info"})},X=async()=>H({startsWith:"/decks/",notContains:"/slides/"}),Y=async(t,e)=>V(Object.assign({key:`/decks/${t}`},void 0!==e&&{id:t,updated_at:e})),Z=async({onNext:t})=>{const e=["deckPublished","deckFeedSubmitted"];return e.forEach((e=>document.addEventListener(e,(async({detail:e})=>await t(e)),{passive:!0}))),()=>e.forEach((e=>document.removeEventListener(e,(({detail:e})=>t(e)),!1)))},tt=async()=>H({startsWith:"/docs/",notContains:"/paragraphs/"}),et=async(t,e)=>V(Object.assign({key:`/docs/${t}`},void 0!==e&&{id:t,updated_at:e})),at=async({onNext:t})=>{const e=["docPublished","docFeedSubmitted"];return e.forEach((e=>document.addEventListener(e,(async({detail:e})=>await t(e)),{passive:!0}))),()=>e.forEach((e=>document.removeEventListener(e,(async({detail:e})=>await t(e)),!1)))},ot=(t,e)=>q({key:`/docs/${t}/paragraphs/${e}`}),rt=(t,e)=>q({key:`/decks/${t}/slides/${e}`});let nt=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")),"");const it=()=>H({startsWith:"/templates/"}),st=t=>{const e=nt(),a=new Date,o={id:e,data:Object.assign(Object.assign({},t),{updated_at:a,created_at:a})};return Q({key:`/templates/${e}`,record:o})},ct=t=>{const{id:e}=t;return Q({key:`/templates/${e}`,record:t})},lt=async t=>{p({msg:"[update][start] user",level:"info"});const e=performance.now(),a=await Q({key:"/user",record:t}),o=performance.now();return p({msg:"[update][done] user",duration:o-e,level:"info"}),a},dt=({IDL:t})=>{const e=t.Principal,a=t.Record({storageId:t.Opt(e)}),o=t.Int,r=t.Record({linkedin:t.Opt(t.Text),twitter:t.Opt(t.Text),custom:t.Opt(t.Text),github:t.Opt(t.Text)}),n=t.Record({bio:t.Opt(t.Text),photo_url:t.Opt(t.Text),social:t.Opt(r),name:t.Text}),i=t.Record({title:t.Text,tags:t.Opt(t.Vec(t.Text)),description:t.Opt(t.Text),author:t.Opt(n)}),s=t.Record({id:t.Text,updated_at:o,meta:i,pathname:t.Text,storageId:e,created_at:o}),c=t.Variant({open:t.Null,accepted:t.Null,declined:t.Null}),l=t.Record({status:t.Opt(c)}),d=t.Variant({open:t.Null,accepted:t.Null,declined:t.Null}),m=t.Record({id:t.Text,meta:i,pathname:t.Text,storageId:e}),u=t.Record({status:d,updated_at:o,created_at:o,proposal:m}),p=t.Record({id:t.Text,meta:i,pathname:t.Text,storageId:e});return t.Service({accept:t.Func([t.Principal,t.Text],[],[]),decline:t.Func([t.Principal,t.Text],[],[]),del:t.Func([t.Principal,t.Text],[],[]),list:t.Func([t.Opt(a)],[t.Vec(t.Tuple(t.Text,s))],["query"]),listProposals:t.Func([t.Opt(l)],[t.Vec(t.Tuple(t.Text,u))],["query"]),submit:t.Func([t.Text,p],[],[])})},mt=async({doc:t})=>{const{data:{meta:e},id:a}=t;if(!e)throw new Error("No meta data to submit to feed");await pt({meta:e,id:a});const o=await gt({key:"docs",entry:t});return ht({data:o,type:"docFeedSubmitted"}),o},ut=async({deck:t})=>{const{data:{meta:e},id:a}=t;if(!e)throw new Error("No meta data to submit to feed");await pt({meta:e,id:a});const o=await gt({key:"decks",entry:t});return ht({data:o,type:"deckFeedSubmitted"}),o},pt=async({meta:t,id:a})=>{const r=u();if(!r)throw new Error("No internet identity to submit entry to feed");const{bucketId:n}=await e({identity:r});if(!n)throw new Error("No storage found. Is the document published?");p({msg:"[submit][start] feed",level:"info"});const i=performance.now(),s=await(({identity:t})=>l({canisterId:m.getInstance().get().feedCanisterId,idlFactory:dt,identity:t}))({identity:r}),c=m.getInstance().get().feedSecret,{pathname:d,title:g,description:h,tags:f,author:w}=t;if(!d)throw new Error("No pathname found. Is the document published?");await s.submit(c,{id:a,storageId:n,pathname:t.pathname,meta:{title:g,description:o(h),tags:o(f),author:o(w?{name:w.name,bio:o(w.bio),photo_url:o(w.photo_url),social:o(w.social?{twitter:o(w.social.twitter),linkedin:o(w.social.linkedin),github:o(w.social.github),custom:o(w.social.custom)}:void 0)}:void 0)}});const y=performance.now();p({msg:"[submit][done] feed",duration:y-i,level:"info"})},gt=async({key:t,entry:e})=>{var a;p({msg:`[update][start] ${t}`,level:"info"});const o=performance.now(),{id:r,data:n}=e,i=await k(`/${t}/${r}`),s=null!==(a=null==i?void 0:i.data)&&void 0!==a?a:n,c={id:r,data:Object.assign(Object.assign({},s),{meta:Object.assign(Object.assign({},s.meta),{feed:!0}),updated_at:new Date}),created_at:i.created_at,updated_at:i.updated_at},l=await Q({key:`/docs/${r}`,record:c,updateTimestamps:!0}),d=performance.now();return p({msg:`[update][done] ${t}`,duration:d-o,level:"info"}),l},ht=({data:t,type:e})=>{const a=new CustomEvent(e,{detail:t});document.dispatchEvent(a)},ft=async({data:t,filename:e,folder:a,storageActor:r,headers:n,token:i,fullPath:s,log:c,sha256:l})=>{c({msg:`[upload][start] ${e}`,level:"info"});const d=performance.now(),m=s||`/${a}/${e}`,{batchId:u}=await r.initUpload({name:e,fullPath:m,token:o(i),folder:a,sha256:o(l)}),p=performance.now();c({msg:`[upload][create batch] ${e}`,duration:p-d,level:"info"});const g=[],h=7e5,f=new Blob([await t.arrayBuffer()]);for(let t=0;t<f.size;t+=h){const e=f.slice(t,t+h);g.push(wt({batchId:u,chunk:e,storageActor:r}))}const w=await Promise.all(g),y=performance.now();c({msg:`[upload][chunks] ${e}`,duration:y-p,level:"info"}),await r.commitUpload({batchId:u,chunkIds:w.map((({chunkId:t})=>t)),headers:[["Content-Type",t.type],["accept-ranges","bytes"],...n]});const b=performance.now();return c({msg:`[upload][commit batch] ${e}`,duration:b-y,level:"info"}),c({msg:`[upload][done] ${e}`,duration:b-d,level:"info"}),{fullPath:m,filename:e,token:i}},wt=async({batchId:t,chunk:e,storageActor:a})=>a.uploadChunk({batchId:t,content:[...new Uint8Array(await e.arrayBuffer())]}),yt=t=>encodeURI(t.toLowerCase().replace(/\s/g,"-")),bt=async()=>{const t=u();if(!t)throw new Error("No internet identity.");const a=await e({identity:t}),{actor:o,bucketId:r}=a;if(!o)throw new Error("No actor initialized.");if(!r)throw new Error("No bucket principal defined");return a},kt=({social_image_link:t})=>void 0!==t&&t.includes("unsplash.com"),vt=async({storageUpload:t,publishData:e})=>{const{social_image_name:a,social_image_value:o}=e;if(kt(e))return;if(!o)return;const{actor:r}=t;await ft({data:o,filename:`${a}.png`,folder:"meta",storageActor:r,headers:[["Cache-Control","max-age=3600"]],log:p})},$t=({template:t,data:e})=>Object.entries(e).reduce(((t,[e,a])=>t.replaceAll(`{{DECKDECKGO_${e.toUpperCase()}}}`,a||"").replaceAll(`%%DECKDECKGO_${e.toUpperCase()}%%`,a||"").replaceAll(`\x3c!-- DECKDECKGO_${e.toUpperCase()} --\x3e`,a||"")),t),_t=async({indexHTML:t,folder:e,meta:a})=>{const{html:o,publishData:r}=t,{bucketId:n,actor:i}=await bt(),{filename:s,pathname:c}=Dt({publishData:r,meta:a,folder:e}),l=`https://${n.toText()}.raw.ic0.app`,d=`${l}${c}`;let m=o.replace("{{DECKDECKGO_URL}}",d);return m=(({html:t,data:e,bucketUrl:a})=>{const{social_image_name:o}=e;if(kt(e)){const{social_image_link:a}=e;return t.replaceAll("{{DECKDECKGO_SOCIAL_IMAGE}}",a)}return t.replaceAll("{{DECKDECKGO_SOCIAL_IMAGE}}",`${a}/meta/${o}.png`)})({html:m,data:r,bucketUrl:l}),{storageUpload:{html:m,actor:i,filename:s,pathname:c,fullUrl:d,bucketUrl:l,folder:e},publishData:r}},Dt=({publishData:t,meta:e,folder:a})=>{if(null==e?void 0:e.pathname){const{pathname:t}=e;return{filename:t.replace(`/${a}/`,""),pathname:t}}const o=yt(t.title);return{filename:o,pathname:`/${a}/${o}`}},Ot=async({publishData:t,updateTemplateContent:e,sourceFolder:a})=>{const o=await Ut(a),r=$t({template:o,data:t}),{attributes:n}=t;return{html:e({attr:n?Object.entries(n).reduce(((t,[e,a])=>`${e}="${a}"; ${t}`),"").trim():void 0,template:r})}},Ut=async t=>(await fetch(`${m.getInstance().get().kitPath}/${t}/index.html`)).text(),jt=({data:t,storageUpload:e,meta:a,name:o})=>{var r;const{pathname:n}=e,i=new Date;return Object.assign(Object.assign({},t),{meta:Object.assign(Object.assign({},a||{title:o}),{pathname:n,published:!0,published_at:null!==(r=a.published_at)&&void 0!==r?r:i,updated_at:i})})},xt=async({filename:t,html:e,actor:a,folder:o})=>{await ft({data:new Blob([e],{type:"text/html"}),filename:t,folder:o,storageActor:a,headers:[["Cache-Control","max-age=3600"]],log:p})},Ct=()=>m.getInstance().get().author;const Pt=({content:t,bucketUrl:e,metas:a,selector:o})=>{const r=a.map((({dataId:t,meta:a})=>At({dataId:t,meta:a,bucketUrl:e})));return t.replace(o,r.join(""))},At=({dataId:t,bucketUrl:e,meta:a})=>{var o,r;const{title:n,pathname:i}=a,s=`${e}${i}`,c=null!=(null==a?void 0:a.description)&&""!==(null==a?void 0:a.description)?`<p class="description">${a.description}</p>`:"",{format:l}=new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric"});return`<a data-id="${t}" href="${s}" rel="noopener noreferrer"><article><div><h3>${n}</h3>${c}</div><div><p>Published: ${l(null!==(o=B(null==a?void 0:a.published_at))&&void 0!==o?o:new Date)}</p><p>Edited: ${l(null!==(r=B(null==a?void 0:a.updated_at))&&void 0!==r?r:new Date)}</p></div></article></a>`},Et=t=>`<url>\n  <loc>${t}</loc>\n  <changefreq>daily</changefreq>\n  <priority>0.7</priority>\n</url>`,It=t=>t.filter((({data:t})=>{var e;return!0===(null===(e=t.meta)||void 0===e?void 0:e.published)})).sort((({data:{meta:{published_at:t}}},{data:{meta:{published_at:e}}})=>{var a,o;return((null===(a=B(e))||void 0===a?void 0:a.getTime())||0)-((null===(o=B(t))||void 0===o?void 0:o.getTime())||0)})).map((({id:t,data:{meta:e}})=>({dataId:t,meta:e}))),Ft=async({storageUpload:t,publishData:e,entries:a})=>{const o=It(a),r=[Kt({storageUpload:t,publishData:e,metas:o}),Tt({storageUpload:t,metas:o}),Nt({storageUpload:t,metas:o,publishData:e})];await Promise.all(r)},Nt=async({storageUpload:t,metas:e,publishData:a})=>{const{bucketUrl:o,actor:r}=t,{author:n}=a,i=(({bucketUrl:t,metas:e,author:a})=>(({items:t,author:e,bucketUrl:a})=>`<?xml version="1.0" encoding="UTF-8"?><rss xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">\n    <channel>\n        <title><![CDATA[${e} blog]]></title>\n        <description><![CDATA[The latest blog posts of ${e}]]></description>\n        <link>${a}</link>\n        <lastBuildDate>${(new Date).toUTCString()}</lastBuildDate>\n        \n        ${t}\n    </channel>\n</rss>`)({bucketUrl:t,items:(({metas:t,bucketUrl:e})=>t.map((({meta:{title:t,description:a,pathname:o,published_at:r}})=>{var n;return`\n  <item>\n    <title><![CDATA[${t}]]></title>\n    <description><![CDATA[${null!=a?a:t}]]></description>\n    <link>${e}${o}</link>\n    <pubDate>${(null!==(n=B(r))&&void 0!==n?n:new Date).toUTCString()}</pubDate>\n  </item>\n`})))({metas:e,bucketUrl:t}).join(""),author:a}))({bucketUrl:o,metas:e,author:n||Ct()});await Lt({rss:i,actor:r})},Tt=async({storageUpload:t,metas:e})=>{const{bucketUrl:a,actor:o}=t,r=(({bucketUrl:t,metas:e})=>`<?xml version="1.0" encoding="UTF-8" ?>\n  <urlset\n    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"\n    xmlns:xhtml="http://www.w3.org/1999/xhtml"\n    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"\n  >\n    ${[Et(t),...e.map((({meta:{pathname:e}})=>Et(`${t}${e}`)))].join("")}\n</urlset>`)({bucketUrl:a,metas:e});await zt({sitemap:r,actor:o})},Kt=async({storageUpload:t,publishData:e,metas:a})=>{const{bucketUrl:o,actor:r}=t,n=await(async({bucketUrl:t,publishData:e,metas:a})=>{const o=await(async()=>(await fetch(`${m.getInstance().get().kitPath}/index.html`)).text())(),{photo_url:r}=e,n=function(t,e){var a={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(a[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(a[o[r]]=t[o[r]])}return a}(e,["photo_url"]);let i=$t({template:o,data:n});return i=(({photo_url:t,html:e})=>t?e.replace("\x3c!-- DECKDECKGO_PHOTO_URL --\x3e",`<img role="presentation" alt="" loading="lazy" src="${t}" />`):e)({html:i,photo_url:r}),i=Pt({content:i,bucketUrl:t,metas:a,selector:/<!-- DECKDECKGO_DATA -->/}),i})({bucketUrl:o,publishData:e,metas:a});await St({html:n,actor:r})},St=async({html:t,actor:e})=>Gt({actor:e,content:t,mimeType:"text/html",fullPath:"/",filename:"index.html"}),zt=async({sitemap:t,actor:e})=>Gt({actor:e,content:t,mimeType:"application/xml",fullPath:"/sitemap.xml",filename:"sitemap.xml",maxAge:3600}),Lt=async({rss:t,actor:e})=>Gt({actor:e,content:t,mimeType:"application/xml",fullPath:"/rss.xml",filename:"rss.xml",maxAge:3600}),Gt=async({content:t,actor:e,mimeType:a,filename:o,fullPath:r,maxAge:n=0})=>{await ft({data:new Blob([t],{type:a}),filename:o,folder:"resources",storageActor:e,headers:[["Cache-Control",`max-age=${n}`]],fullPath:r,log:p})},Mt=async({bucketUrl:t,identity:e})=>{const a=await tt(e.getPrincipal().toText()),o=It(a),r=await(async({metas:t,bucketUrl:e})=>{const a=await(async t=>{const e=await fetch(t);if(e.ok)return e.text()})(e);if(!a)return;const o=[...a.matchAll(/<section id="posts"[\s\S]*?>([\s\S]*?)<\/section>/gm)];return o.length<1&&o[0].length<2?void 0:Pt({content:a,metas:t,bucketUrl:e,selector:o[0][1]})})({bucketUrl:t,metas:o});if(!r)return;const{actor:n}=await bt();await St({html:r,actor:n})},Bt=t=>{const e=(new TextEncoder).encode(t);return crypto.subtle.digest("SHA-256",e)},Rt=()=>m.getInstance().get().kitPath,Ht=t=>btoa([...t].map((t=>String.fromCharCode(t))).join("")),Wt=async({meta:t})=>{const{actor:e}=await bt(),a=await e.list(o("resources")),r=(await Xt()).map((o=>Jt({kit:o,actor:e,meta:t,assetKeys:a})));await Promise.all(r)},qt=({src:t,sha256:e,assetKeys:a})=>{var o;const r=t.replace(Rt(),""),i=a.find((({fullPath:t})=>r===t)),s=Ht(new Uint8Array(null!==(o=n(i.sha256))&&void 0!==o?o:[]));return void 0===i||void 0===e||e!==s},Jt=async({kit:t,actor:e,meta:a,assetKeys:o})=>{const{updateContent:r}=t;if(void 0!==r)return void await(async({kit:t,actor:e,meta:a,assetKeys:o})=>{const{src:r,filename:n,mimeType:i,updateContent:s,headers:c}=t,l=s({content:await Vt(r),meta:a}),d=Ht(new Uint8Array(await Bt(l)));qt({src:r,sha256:d,assetKeys:o})&&await Qt({filename:n,content:l,actor:e,mimeType:i,headers:c,fullPath:r.replace(Rt(),"")})})({kit:t,actor:e,meta:a,assetKeys:o});const{src:n,filename:i,mimeType:s,headers:c,sha256:l}=t;if(!qt({src:n,sha256:l,assetKeys:o}))return;const d=await Vt(n),m=r?r({content:d,meta:a}):d;await Qt({filename:i,content:m,actor:e,mimeType:s,headers:c,fullPath:n.replace(Rt(),"")})},Qt=async({filename:t,fullPath:e,content:a,actor:o,mimeType:r,headers:n})=>{const i=[...new Uint8Array(await Bt(a))];await ft({data:new Blob([a],{type:r}),filename:t,folder:"resources",storageActor:o,fullPath:e,headers:n,log:p,sha256:i})},Vt=async t=>(await fetch(t)).text(),Xt=async()=>{const t=Rt();return(await(await fetch(`${t}/build.json`)).json()).map((e=>(e=>{const a="string"==typeof e?`${t}/${e}`:`${t}/${e.fullPath}`,o="string"==typeof e?void 0:e.sha256;return a.includes(".js")?{src:a,mimeType:"text/javascript",sha256:o}:a.includes(".css")?{src:a,mimeType:"text/css",sha256:o}:a.includes(".webmanifest")?{src:a,mimeType:"application/manifest+json",sha256:o,updateContent:({content:t,meta:e})=>{var a;return t.replace("{{DECKDECKGO_AUTHOR}}",(null===(a=null==e?void 0:e.author)||void 0===a?void 0:a.name)||Ct())}}:{src:a,mimeType:"text/plain",sha256:o}})(e))).map((t=>{const{pathname:e}=new URL(t.src);return Object.assign(Object.assign({},t),{filename:e.split("/").pop(),headers:[["Cache-Control","max-age=31536000"]]})}))},Yt=async({deck:t})=>{await Wt({meta:t.data.meta});const{storageUpload:e,publishData:a,deck:o}=await(async({deck:t})=>{const{id:e,data:a}=t,{meta:o}=a,r=await(async({deck:t})=>{const e=await(async({deck:t,fallbackAuthor:e})=>{let{data:a}=t,{meta:o,background:r,footer:n,header:i}=a??{};return{...await F({meta:o,selector:A,fallbackName:a?.name??"",fallbackAuthor:e}),slides:S(),background:r?`<div slot="background">${r}</div>`:void 0,header:r?`<div slot="header">${i}</div>`:void 0,footer:r?`<div slot="footer">${n}</div>`:void 0}})({deck:t,fallbackAuthor:m.getInstance().get().author}),{slides:a}=e,{html:o}=await Ot({publishData:e,updateTemplateContent:({attr:t,template:e})=>e.replace("\x3c!-- DECKDECKGO_DECK --\x3e",`<deckgo-deck id="slider" embedded="true" ${t||""}>${a.join("")}</deckgo-deck>`),sourceFolder:"p"});return{html:o,publishData:e}})({deck:t}),{storageUpload:n,publishData:i}=await _t({indexHTML:r,folder:"p",meta:o}),s=jt({data:a,meta:a.meta,name:a.name,storageUpload:n});await w(`/decks/${e}`,(t=>Object.assign(Object.assign({},t),{data:s})));const c=await k(`/decks/${e}`),l=await Q({key:`/decks/${e}`,record:c,updateTimestamps:!0});return await xt(n),await vt({storageUpload:n,publishData:i}),{storageUpload:n,publishData:i,deck:l}})({deck:t});return await(async({storageUpload:t,publishData:e})=>{p({msg:"[list][start] decks",level:"info"});const a=await X();p({msg:"[list][start] end",level:"info"}),await Ft({storageUpload:t,publishData:e,entries:a})})({storageUpload:e,publishData:a,owner_id:t.data.owner_id}),(t=>{const{id:e,data:a}=t,o={id:e,data:Object.assign(Object.assign({},a),{deploy:{api:{status:"successful",updated_at:new Date}}})},r=new CustomEvent("deckPublished",{detail:o});document.dispatchEvent(r)})(o),o},Zt=async({doc:t,config:e})=>{await Wt({meta:t.data.meta});const{storageUpload:a,publishData:o,doc:r}=await(async({doc:t,config:e})=>{const{id:a,data:o}=t,{meta:r}=o,n=await(async({doc:t,config:e})=>{const{theme:a,socialImgPath:o}=e,r=await(async({doc:t,fallbackAuthor:e,theme:a,socialImgPath:o})=>{let{data:r}=t,{meta:n}=r??{};return{...await F({meta:n,selector:E,fallbackName:r?.name??"",fallbackAuthor:e,socialImgPath:o}),paragraphs:z(),theme:a,social_image_link:M({selector:E})}})({doc:t,fallbackAuthor:m.getInstance().get().author,theme:a,socialImgPath:o}),{paragraphs:n}=r,{html:i}=await Ot({publishData:r,updateTemplateContent:({attr:t,template:e})=>e.replace("\x3c!-- DECKDECKGO_DOC --\x3e",`<article ${t||""} class="deckgo-doc">${n.join("")}</article>`),sourceFolder:"d"});return{html:i,publishData:r}})({doc:t,config:e}),{storageUpload:i,publishData:s}=await _t({indexHTML:n,folder:"d",meta:r}),c=jt({data:o,meta:o.meta,name:o.name,storageUpload:i});await w(`/docs/${a}`,(t=>Object.assign(Object.assign({},t),{data:c})));const l=await k(`/docs/${a}`),d=await Q({key:`/docs/${a}`,record:l,updateTimestamps:!0});return await xt(i),await vt({storageUpload:i,publishData:s}),{storageUpload:i,publishData:s,doc:d}})({doc:t,config:e});return await(async({storageUpload:t,publishData:e})=>{p({msg:"[list][start] docs",level:"info"});const a=await tt();p({msg:"[list][end] docs",level:"info"}),await Ft({storageUpload:t,publishData:e,entries:a})})({storageUpload:a,publishData:o,owner_id:t.data.owner_id}),(t=>{const{id:e,data:a}=t,o={id:e,data:Object.assign(Object.assign({},a),{deploy:{api:{status:"successful",updated_at:new Date}}})},r=new CustomEvent("docPublished",{detail:o});document.dispatchEvent(r)})(r),r},te=async()=>{const{bucketId:t}=await bt();return m.getInstance().localIdentity()?`http://${t.toText()}.localhost:8000`:`https://${t.toText()}.raw.ic0.app`},ee=async()=>{const t=u();if(!t)throw new Error("No internet identity provided to list the entries that should be listed on the landing page");const e=await te();await Mt({bucketUrl:e,identity:t})},ae=async({data:t,folder:e,maxSize:a})=>{const o=u();return oe({data:t,folder:e,maxSize:a,identity:o,log:p})},oe=async({data:t,maxSize:a,folder:o,identity:r,storageBucket:n,log:i})=>{if(!t||!t.name)throw new Error("File not valid.");if(t.size>a)throw new Error(`File is too big (max. ${a/1048576} Mb)`);const{actor:s,bucketId:c}=n||await e({identity:r});if(!s||!c)throw new Error("Storage bucket is not initialized.");const{fullPath:l,filename:d,token:m}=await ft({data:t,filename:yt(t.name),folder:o,storageActor:s,token:nt(),headers:[["cache-control","private, max-age=0"]],log:i});return{downloadUrl:`https://${c.toText()}.raw.ic0.app${l}?token=${m}`,fullPath:l,name:d}},re=async({folder:t})=>{const{actor:e,bucketId:a}=await bt(),r=await e.list(o(t)),n=`https://${a.toText()}.raw.ic0.app`;return{items:r.map((({name:t,fullPath:e,token:a})=>({downloadUrl:`${n}${e}?token=${a}`,fullPath:e,name:t}))),nextPageToken:null}},ne=async({downloadUrl:t,fullPath:e})=>{const{actor:a}=await bt();let r=null;if(t){const{searchParams:e}=new URL(t);r=e.get("token")}return a.del({fullPath:e,token:o(r||void 0)})},ie=({data:t,storageFile:e,src:a})=>{const{downloadUrl:o,name:r}=e;let n=t.replaceAll(`img-src="${a}"`,`img-src="${o}"`);return n=n.replaceAll(`img-alt="${a}"`,`img-alt="${r}"`),n=n.replaceAll(`data-src="${a}"`,`data-src="${o}"`),n},se=async({selector:t,storageFile:e,folder:a,src:o})=>{const r=document.querySelector(t);if("deckgo-lazy-img"===(null==r?void 0:r.nodeName.toLowerCase()))return void await ce({images:[r],storageFile:e,folder:a,src:o});const n=null==r?void 0:r.querySelectorAll("deckgo-lazy-img");await ce({images:Array.from(n),storageFile:e,folder:a,src:o})},ce=async({storageFile:t,folder:e="images",images:a,src:o})=>{const r=a.filter((t=>"data"===e?t.getAttribute("data-src")===o:t.imgSrc===o));if(!r||r.length<=0)return;const n=Array.from(r).map((a=>"data"===e?(async e=>{const{downloadUrl:a}=t;e.setAttribute("data-src",a)})(a):(async e=>{const{downloadUrl:a,name:o}=t;e.imgSrc=a,e.imgAlt=o})(a)));await Promise.all(n)},le=async({storageFile:t,src:e,key:a})=>{const o=(({paragraph:t,files:e})=>{if(!e)return Object.assign({},t);const a=e.filter((({src:t,storageFile:e})=>void 0!==t&&void 0!==e));let{children:o,nodeName:r,attributes:n}=t.data;return"deckgo-lazy-img"===r&&n&&a.forEach((({src:t,storageFile:e})=>{n=(({attributes:t,storageFile:e,src:a})=>{const{downloadUrl:o}=e;return Object.keys(t).reduce(((e,r)=>(e[r]=t[r]===a?o:t[r],e)),{})})({attributes:n,storageFile:e,src:t})})),o=null==o?void 0:o.map((t=>(a.forEach((({src:e,storageFile:a})=>{t=ie({data:t,storageFile:a,src:e})})),t))),Object.assign(Object.assign({},t),{data:Object.assign(Object.assign({},t.data),{updated_at:new Date,children:o,attributes:n})})})({paragraph:await de({key:a}),files:[{src:e,storageFile:t}]});await me({key:a,data:o})},de=async({key:t})=>{const e=await k(t);if(!e)throw new Error("Data not found and that is really weird here.");return e},me=async({key:t,data:e})=>v(t,e),ue=h(import("./p-e322749a.js").then((t=>t.worker)),"stencil.sync.ic.worker","uploadWorker"),pe=async({msg:t,data:e})=>{"deckdeckgo_sync_deck_background"===t&&await(async t=>{(({storageFile:t})=>{const e=document.querySelector(`${A} > *[slot="background"]`),a=null==e?void 0:e.querySelector("deckgo-lazy-img");if(!a)return;const{downloadUrl:o,name:r}=t;a.imgSrc=o,a.imgAlt=r})(t),await(async({storageFile:t,src:e})=>{const a=document.querySelectorAll(`${A} .deckgo-slide-container:not([custom-background]) *[slot="background"] deckgo-lazy-img`);await ce({images:Array.from(a),storageFile:t,src:e})})(t),await(async({storageFile:t,src:e,key:a})=>{const o=(({deck:t,storageFile:e,imgSrc:a})=>e&&a?Object.assign(Object.assign({},t),{data:Object.assign(Object.assign({},t.data),{updated_at:new Date,background:ie({data:t.data.background,src:a,storageFile:e})})}):Object.assign({},t))({deck:await de({key:a}),imgSrc:e,storageFile:t});await me({key:a,data:o})})(t)})(e),"deckdeckgo_sync_slide_image"===t&&await(async t=>{const{selector:e}=t;e&&(await se(t),await(async({storageFile:t,src:e,key:a})=>{const o=(({slide:t,images:e})=>{if(!e)return Object.assign({},t);const a=e.filter((({src:t,storageFile:e})=>void 0!==t&&void 0!==e));let{content:o}=t.data;return a.forEach((({src:t,storageFile:e})=>{o=ie({data:o,storageFile:e,src:t})})),Object.assign(Object.assign({},t),{data:Object.assign(Object.assign({},t.data),{updated_at:new Date,content:o})})})({slide:await de({key:a}),images:[{src:e,storageFile:t}]});await me({key:a,data:o})})(t))})(e),"deckdeckgo_sync_slide_chart"===t&&await(async t=>{const{selector:e}=t;e&&((({selector:t,storageFile:e})=>{const a=document.querySelector(t);if(!a||!a.nodeName||"deckgo-slide-chart"!==a.nodeName.toLowerCase())return;const{downloadUrl:o}=e;a.src=o})(t),await(async({storageFile:t,src:e,key:a})=>{const o=(({slide:t,chart:e})=>{if(!e)return Object.assign({},t);const{src:a,storageFile:o}=e;if(!a||!o)return Object.assign({},t);const{attributes:r}=t.data;if(!r)return Object.assign({},t);const{downloadUrl:n}=o;return Object.assign(Object.assign({},t),{data:Object.assign(Object.assign({},t.data),{updated_at:new Date,attributes:Object.assign(Object.assign({},r),{src:n})})})})({slide:await de({key:a}),chart:{src:e,storageFile:t}});await me({key:a,data:o})})(t))})(e),"deckdeckgo_sync_paragraph_image"===t&&await(async t=>{const{selector:e}=t;e&&(await se(t),await le(t))})(e)},ge=async({syncData:t,clean:e})=>{const a=u(),[o,r]=await(async()=>{const t=new $;return Promise.all([t.get("delegation"),t.get("identity")])})();if(!a||!r)throw p({msg:"[identity] no internet identity to sync data. Please login again.",level:"error"}),new Error("No internet identity to sync data. Please login again.");if(!0!==await f())throw p({msg:"[identity] internet identity has expired. Please login again.",level:"error"}),new Error("Internet identity has expired. Please login again.");if(!_(D.fromJSON(o)))throw p({msg:"[identity] delegation has expired. Please login again.",level:"error"}),new Error("Delegation has expired. Please login again.");await ue({syncData:t,env:m.getInstance().get()},pe,p),await e(t)};export{R as canistersBalance,st as createTemplate,X as deckEntries,Yt as deckPublish,ut as deckSubmitFeed,Y as deleteDeck,et as deleteDoc,ne as deleteFile,tt as docEntries,Zt as docPublish,mt as docSubmitFeed,re as getFiles,ot as getParagraph,rt as getSlide,it as getUserTemplates,te as publishUrl,Z as snapshotDeck,at as snapshotDoc,ge as sync,ee as updateLanding,ct as updateTemplate,lt as updateUser,ae as uploadFile,oe as uploadFileIC}