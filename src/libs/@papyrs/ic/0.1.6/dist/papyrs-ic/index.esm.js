import{g as t,a,t as n,f as r,b as o,c,d as l,E as u,i as m}from"./p-46541408.js";import{g as p,t as h,K as w,a as y,c as f,i as k}from"./p-9b9caf08.js";export{e as deleteAuth,g as getIdentity,b as initAuth,i as isAuthenticated,d as signIn,s as signOut}from"./p-9b9caf08.js";import{u as _,g as v,s as $,c as D,a as O,i as j,D as I}from"./p-f7cd2931.js";import"./p-30f115e3.js";import"./p-82ae0ef6.js";var U=["id","hydrated","contenteditable","editable","spellcheck","highlighted","custom-loader","class","placeholder","data-gramm","data-gramm_id","data-gramm_editor","data-gr-id","data-selectable-paragraph"],C=["paragraph_id","data-src",...U],E=({node:t,deep:a=!0,attributes:e=U})=>{if(A(t))return t;if(P(t)){let i=t.cloneNode(a);x({element:i,attributes:e});let n=i.querySelectorAll(e.map((t=>`[${t}]`)).join(","));for(let t of Array.from(n))x({element:t,attributes:e});return i}return null},x=({element:t,attributes:a})=>{for(let e of a)t.removeAttribute(e)},A=t=>t?.nodeType===Node.TEXT_NODE||t?.nodeType===Node.COMMENT_NODE,P=t=>t?.nodeType===Node.ELEMENT_NODE,T="app-deck-editor > ion-content div.deck > main > deckgo-deck",F="deckgo-studio-doc",K=[{id:"google-fonts-lora",name:"Lora",family:"'Lora', serif"},{id:"google-fonts-roboto",name:"Roboto",family:"'Roboto', sans-serif"},{id:"google-fonts-open-sans",name:"Open Sans",family:"'Open Sans', sans-serif"},{id:"google-fonts-montserrat",name:"Montserrat",family:"'Montserrat', sans-serif"},{id:"google-fonts-cabin",name:"Cabin",family:"'Cabin', sans-serif"},{id:"google-fonts-lato",name:"Lato",family:"'Lato', sans-serif"},{id:"google-fonts-muli",name:"Muli",family:"'Muli', sans-serif"},{id:"google-fonts-source-sans-pro",name:"Source Sans Pro",family:"'Source Sans Pro', sans-serif"},{id:"google-fonts-libre-baskerville",name:"Libre Baskerville",family:"'Libre Baskerville', serif"},{id:"google-fonts-oswald",name:"Oswald",family:"'Oswald', sans-serif"},{id:"google-fonts-jura",name:"Jura",family:"'Jura', sans-serif"},{id:"google-fonts-fjord-one",name:"Fjord One",family:"'Fjord One', serif"},{id:"google-fonts-josefin-slab",name:"Josefin Slab",family:"'Josefin Slab', serif"}],N=async({meta:t,fallbackName:a,fallbackAuthor:e,selector:i,socialImgPath:n})=>{let r=[S(),L({meta:t})].filter((t=>void 0!==t)),o=G({selector:i}),s=await M(),c=(t?.title||a)?.trim();return{title:c,description:(t?.description||a)?.trim(),author:t?.author?.name??e,bio:t?.author?.bio,photo_url:t?.author?.photo_url,head_extra:r.length>0?r.join(""):void 0,attributes:o,social_image_name:encodeURI(c).toLowerCase(),social_image_value:s,social_links:B({meta:t,socialImgPath:n}),social_image_link:void 0,lang:t?.lang??"en"}},S=()=>{let t=document.querySelector(T)?.style.fontFamily;if(!t)return;let a=K.find((a=>t===a.family.replace(/\'/g,"")));return a?`<link rel="stylesheet" href="${(({font:t})=>`https://fonts.googleapis.com/css?display=swap&amp;family=${t.name.replace(" ","+")}`)({font:a})}">`:void 0},L=({meta:t})=>{if(t&&t.canonical)return`<link rel="canonical" href="${t.canonical}">`},G=({selector:t})=>{let a=document.querySelector(t)?.attributes;if(a)return Array.from(a).filter((({name:t})=>!["id","hydrated","class","contenteditable"].includes(t))).reduce(((t,{name:a,value:e})=>(t[a]=e,t)),{})},z=()=>{let t=document.querySelectorAll(`${T} > *[slide_id]`),a=({slide:t,custom:a})=>{if(t.hasAttribute(`custom-${a}`))return;let e=t.querySelector(`div[slot="${a}"]`);!e||t.removeChild(e)};return Array.from(t).map((t=>{let e=E({node:t,deep:!1,attributes:C});return Array.from(t.childNodes).forEach((t=>{P(t)&&t.hasAttribute("slot")&&(e.appendChild(E({node:t,attributes:C})),a({slide:e,custom:"background"}),a({slide:e,custom:"header"}),a({slide:e,custom:"footer"}))})),e})).map((t=>t.outerHTML))},R=()=>{let t=document.querySelectorAll(`${F} > article *[paragraph_id]`);return Array.from(t).map((t=>E({node:t,attributes:C}))).map((t=>t.outerHTML))},M=async()=>document.querySelector("deckgo-social-img")?.toBlob("image/png"),B=({meta:t,socialImgPath:a})=>{if(!t||!t.author)return;let{author:{social:e,name:i}}=t,n=({username:t,href:e,authorName:i,platformName:n,iconName:r})=>t&&""!==t?`<a href="https://${e}/${t}" aria-label="${i} on ${n}" rel="noopener norefferer"><deckgo-lazy-img svg-src="${a}/${r}.svg" role="presentation" alt="${n} logo" /></a>`:void 0,r=n({username:e?.twitter,href:"twitter.com",authorName:i,platformName:"Twitter",iconName:"twitter"}),o=n({username:e?.linkedin,href:"www.linkedin.com/in",authorName:i,platformName:"LinkedIn",iconName:"linkedin"}),s=n({username:e?.github,href:"github.com",authorName:i,platformName:"GitHub",iconName:"github"}),c=(({custom:t,authorName:e})=>t&&""!==t?`<a href="${t}" aria-label="${e}" rel="noopener norefferer"><deckgo-lazy-img svg-src="${a}/globe.svg" role="presentation" alt="" /></a>`:void 0)({custom:e?.custom,authorName:i});return void 0!==r||void 0!==o||void 0!==s||void 0!==c?`${[c,r,s,o].filter((t=>void 0!==t)).join("")}`:void 0},H=({selector:t})=>{let a=document.querySelector(`${t} > article *:nth-child(1)`),e=document.querySelector(`${t} > article *:nth-child(2)`),i=t=>{let a=t?.getAttribute("img-src");return 0===a?.indexOf("http")?a:void 0};if("deckgo-lazy-img"===a?.nodeName.toLowerCase())return i(a);if("deckgo-lazy-img"===e?.nodeName.toLowerCase())return i(e);let n=a?.querySelector("deckgo-lazy-img");return i(null!=n?n:e?.querySelector("deckgo-lazy-img"))},W=t=>{if(t&&void 0!==t)return t instanceof String||"string"==typeof t?new Date(`${t}`):"number"!=typeof t||isNaN(t)?t&&t.seconds>=0&&t.nanoseconds>=0?new Date(t.toDate()):t:new Date(t)};const q=async()=>{const e=p();if(!e)throw new Error("No internet identity to get the canisters status");const[i,n]=await Promise.all([t({identity:e}),a({identity:e})]),{actor:r,bucketId:o}=i,{actor:s,bucketId:c}=n,[d,l]=await Promise.all([r.cyclesBalance(),s.cyclesBalance()]);return{data:{bucketId:o,balance:d},storage:{bucketId:c,balance:l}}},J=async({startsWith:a,notContains:e})=>{const i=p();if(!i)return[];const{actor:r}=await t({identity:i});if(!r)return[];const o=(await r.list(n({startsWith:n(a),notContains:n(e)}))).map((([,t])=>Q({data:t,identity:i})));return Promise.all(o)},Q=async({data:t,identity:a})=>{const e=await r(t.data);return{id:t.id,data:Object.assign(Object.assign({},e),{owner_id:a.getPrincipal().toText()}),created_at:t.created_at,updated_at:t.updated_at}},V=async({key:t,actor:a})=>{const e=a||await Y(),i=o(await e.get(t));if(!i)return;const n=await r(i.data);return{id:i.id,data:n,created_at:i.created_at,updated_at:i.updated_at}},X=async()=>{const a=p();if(!a)throw new Error("No internet identity.");const e=await t({identity:a}),{actor:i,bucketId:n}=e;if(!i)throw new Error("No actor initialized.");if(!n)throw new Error("No bucket principal defined");return e},Y=async()=>{const{actor:t}=await X();return t},Z=async({key:t,record:a,updateTimestamps:e=!1,actor:i,log:r})=>{null==r||r({msg:`[set][start] ${t}`,level:"info"});const o=performance.now(),s=await(async({key:t,record:a,actor:e})=>{const i=e||await Y(),{id:r,data:o,created_at:s,updated_at:d}=a,l=await i.put(t,{id:r,data:await c(o),created_at:n(s),updated_at:n(d)});return{id:r,data:o,created_at:l.created_at,updated_at:l.updated_at}})({key:t,actor:i,record:a});e&&await _(t,(({id:t,data:a})=>({id:t,data:a,created_at:s.created_at,updated_at:s.updated_at})));const d=performance.now();return null==r||r({msg:`[set][done] ${t}`,duration:d-o,level:"info"}),s},tt=async({key:t,actor:a,log:e,data:i})=>{if(!t||!i)return;null==e||e({msg:`[delete][start] ${t}`,level:"info"});const n=performance.now();await(async({key:t,actor:a,data:e})=>{const i=a||await Y();await i.delete(t,e)})({key:t,actor:a,data:i});const r=performance.now();null==e||e({msg:`[delete][done] ${t}`,duration:r-n,level:"info"})},at=async()=>J({startsWith:"/decks/",notContains:"/slides/"}),et=async(t,a)=>tt(Object.assign({key:`/decks/${t}`},void 0!==a&&{data:{id:t,updated_at:a}})),it=async({onNext:t})=>{const a=["deckPublished","deckFeedSubmitted"];return a.forEach((a=>document.addEventListener(a,(async({detail:a})=>await t(a)),{passive:!0}))),()=>a.forEach((a=>document.removeEventListener(a,(({detail:a})=>t(a)),!1)))},nt=async()=>J({startsWith:"/docs/",notContains:"/paragraphs/"}),rt=async(t,a)=>tt(Object.assign({key:`/docs/${t}`},void 0!==a&&{data:{id:t,updated_at:a}})),ot=async({onNext:t})=>{const a=["docPublished","docFeedSubmitted"];return a.forEach((a=>document.addEventListener(a,(async({detail:a})=>await t(a)),{passive:!0}))),()=>a.forEach((a=>document.removeEventListener(a,(async({detail:a})=>await t(a)),!1)))},st=(t,a)=>V({key:`/docs/${t}/paragraphs/${a}`}),ct=(t,a)=>V({key:`/decks/${t}/slides/${a}`});let dt=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,a)=>t+((a&=63)<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a>62?"-":"_")),"");const lt=()=>J({startsWith:"/templates/"}),ut=t=>{const a=dt(),e=new Date,i={id:a,data:Object.assign(Object.assign({},t),{updated_at:e,created_at:e})};return Z({key:`/templates/${a}`,record:i})},mt=t=>{const{id:a}=t;return Z({key:`/templates/${a}`,record:t})},pt=async t=>{h({msg:"[update][start] user",level:"info"});const a=performance.now(),e=await Z({key:"/user",record:t}),i=performance.now();return h({msg:"[update][done] user",duration:i-a,level:"info"}),e},ht=({IDL:t})=>{const a=t.Principal,e=t.Record({storageId:t.Opt(a)}),i=t.Int,n=t.Record({linkedin:t.Opt(t.Text),twitter:t.Opt(t.Text),custom:t.Opt(t.Text),github:t.Opt(t.Text)}),r=t.Record({bio:t.Opt(t.Text),photo_url:t.Opt(t.Text),social:t.Opt(n),name:t.Text}),o=t.Record({title:t.Text,tags:t.Opt(t.Vec(t.Text)),description:t.Opt(t.Text),author:t.Opt(r)}),s=t.Record({id:t.Text,updated_at:i,meta:o,pathname:t.Text,storageId:a,created_at:i}),c=t.Variant({open:t.Null,accepted:t.Null,declined:t.Null}),d=t.Record({status:t.Opt(c)}),l=t.Variant({open:t.Null,accepted:t.Null,declined:t.Null}),u=t.Record({id:t.Text,meta:o,pathname:t.Text,storageId:a}),m=t.Record({status:l,updated_at:i,created_at:i,proposal:u}),p=t.Record({id:t.Text,meta:o,pathname:t.Text,storageId:a});return t.Service({accept:t.Func([t.Principal,t.Text],[],[]),decline:t.Func([t.Principal,t.Text],[],[]),del:t.Func([t.Principal,t.Text],[],[]),list:t.Func([t.Opt(e)],[t.Vec(t.Tuple(t.Text,s))],["query"]),listProposals:t.Func([t.Opt(d)],[t.Vec(t.Tuple(t.Text,m))],["query"]),submit:t.Func([t.Text,p],[],[])})},gt=async({doc:t})=>{const{data:{meta:a},id:e}=t;if(!a)throw new Error("No meta data to submit to feed");await yt({meta:a,id:e});const i=await ft({key:"docs",entry:t});return bt({data:i,type:"docFeedSubmitted"}),i},wt=async({deck:t})=>{const{data:{meta:a},id:e}=t;if(!a)throw new Error("No meta data to submit to feed");await yt({meta:a,id:e});const i=await ft({key:"decks",entry:t});return bt({data:i,type:"deckFeedSubmitted"}),i},yt=async({meta:t,id:e})=>{const i=p();if(!i)throw new Error("No internet identity to submit entry to feed");const{bucketId:r}=await a({identity:i});if(!r)throw new Error("No storage found. Is the document published?");h({msg:"[submit][start] feed",level:"info"});const o=performance.now(),s=await(({identity:t})=>l({canisterId:u.getInstance().get().feedCanisterId,idlFactory:ht,identity:t}))({identity:i}),c=u.getInstance().get().feedSecret,{pathname:d,title:m,description:g,tags:w,author:y}=t;if(!d)throw new Error("No pathname found. Is the document published?");await s.submit(c,{id:e,storageId:r,pathname:t.pathname,meta:{title:m,description:n(g),tags:n(w),author:n(y?{name:y.name,bio:n(y.bio),photo_url:n(y.photo_url),social:n(y.social?{twitter:n(y.social.twitter),linkedin:n(y.social.linkedin),github:n(y.social.github),custom:n(y.social.custom)}:void 0)}:void 0)}});const f=performance.now();h({msg:"[submit][done] feed",duration:f-o,level:"info"})},ft=async({key:t,entry:a})=>{var e;h({msg:`[update][start] ${t}`,level:"info"});const i=performance.now(),{id:n,data:r}=a,o=await v(`/${t}/${n}`),s=null!==(e=null==o?void 0:o.data)&&void 0!==e?e:r,c={id:n,data:Object.assign(Object.assign({},s),{meta:Object.assign(Object.assign({},s.meta),{feed:!0}),updated_at:new Date}),created_at:o.created_at,updated_at:o.updated_at},d=await Z({key:`/${t}/${n}`,record:c,updateTimestamps:!0}),l=performance.now();return h({msg:`[update][done] ${t}`,duration:l-i,level:"info"}),d},bt=({data:t,type:a})=>{const e=new CustomEvent(a,{detail:t});document.dispatchEvent(e)},kt=async({key:a,ids:e})=>{const i=p();if(!i)throw new Error("No internet identity to get the count of interactions");const{actor:{listInteractions:n}}=await t({identity:i}),r=`/${a}/`,s=await n(e.map((t=>`${r}${t}`)));return(await Promise.all(s.map((t=>(async t=>{const{countLikes:a,like:e,countComments:i}=t[1],n=o(e),s={countLikes:a,like:void 0!==n?await _t(n):void 0,countComments:i};return{[t[0].replace(r,"")]:s}})(t))))).reduce(((t,a)=>Object.assign(Object.assign({},t),a)),{})},_t=async t=>{const a=await r(t.data);return{id:t.id,data:a,created_at:t.created_at,updated_at:t.updated_at,author_id:t.author.toText()}},vt=async({like:t,identity:a,key:e,id:i})=>{const r=new Date,o=void 0===t?{id:dt(),data:{like:!0,created_at:r,updated_at:r},author_id:a.getPrincipal().toText()}:Object.assign(Object.assign({},t),{data:Object.assign(Object.assign({},t.data),{like:!t.data.like})}),{id:s,data:d,created_at:l,updated_at:u}=o;return{putKey:$t({key:e,id:i,identity:a}),putInteraction:{id:s,data:await c(d),author:a.getPrincipal(),created_at:n(l),updated_at:n(u)}}},$t=({key:t,id:a,identity:e})=>`/${t}/${a}/likes/${e.getPrincipal().toText()}`,Dt=async({key:a,id:e,interaction:i})=>{const n=p();if(!n)throw new Error("No internet identity to save the interaction");const{actor:{putInteraction:r}}=await t({identity:n}),{putKey:o,putInteraction:s}=await vt({key:a,id:e,like:i,identity:n}),c=await r(o,s);return _t(c)},Ot=({identity:t,canisterId:a})=>l({canisterId:a,idlFactory:m,identity:t}),jt=async({key:t,id:a,canisterId:e})=>{const i=p(),{countLikes:n}=await Ot({identity:i,canisterId:e});return n(`/${t}/${a}`)},It=async({key:t,id:a,canisterId:e})=>{const i=p();if(!i)return;const{getLike:n}=await Ot({identity:i,canisterId:e}),r=o(await n($t({key:t,id:a,identity:i})));return r?_t(r):void 0},Ut=async({key:t,id:a,like:e,canisterId:i})=>{const n=p();if(!n)throw new Error("No internet identity to record the like");const{putInteraction:r}=await Ot({identity:n,canisterId:i}),{putKey:o,putInteraction:s}=await vt({key:t,id:a,like:e,identity:n}),c=await r(o,s);return _t(c)},Ct=async({data:t,filename:a,folder:e,storageActor:i,headers:r,token:o,fullPath:s,log:c,sha256:d})=>{c({msg:`[upload][start] ${a}`,level:"info"});const l=performance.now(),u=s||`/${e}/${a}`,{batch_id:m}=await i.initUpload({name:a,full_path:u,token:n(o),folder:e,sha256:n(d)}),p=performance.now();c({msg:`[upload][create batch] ${a}`,duration:p-l,level:"info"});const h=7e5,g=[],w=new Blob([await t.arrayBuffer()]);for(let t=0;t<w.size;t+=h){const a=w.slice(t,t+h);g.push(await Et({batchId:m,chunk:a,storageActor:i}))}const y=performance.now();c({msg:`[upload][chunks] ${a}`,duration:y-p,level:"info"}),await i.commitUpload({batch_id:m,chunk_ids:g.map((({chunk_id:t})=>t)),headers:[["Content-Type",t.type],["accept-ranges","bytes"],...r]});const f=performance.now();return c({msg:`[upload][commit batch] ${a}`,duration:f-y,level:"info"}),c({msg:`[upload][done] ${a}`,duration:f-l,level:"info"}),{fullPath:u,filename:a,token:o}},Et=async({batchId:t,chunk:a,storageActor:e})=>e.uploadChunk({batch_id:t,content:[...new Uint8Array(await a.arrayBuffer())]}),xt=t=>encodeURI(t.toLowerCase().replace(/\s/g,"-")),At=async()=>{const t=p();if(!t)throw new Error("No internet identity.");const e=await a({identity:t}),{actor:i,bucketId:n}=e;if(!i)throw new Error("No actor initialized.");if(!n)throw new Error("No bucket principal defined");return e},Pt=t=>{const a=(new TextEncoder).encode(t);return crypto.subtle.digest("SHA-256",a)},Tt=t=>btoa([...t].map((t=>String.fromCharCode(t))).join("")),Ft=({social_image_link:t})=>void 0!==t&&t.includes("unsplash.com"),Kt=async({storageUpload:t,publishData:a})=>{const{social_image_name:e,social_image_value:i}=a;if(Ft(a))return;if(!i)return;const{actor:n}=t;await Ct({data:i,filename:`${e}.png`,folder:"meta",storageActor:n,headers:[["Cache-Control","max-age=3600"]],log:h})},Nt=async({template:t,data:a,ids:e})=>{const i=[...Object.entries(a),...Object.entries(e)].reduce(((t,[a,e])=>t.replaceAll(`{{DECKDECKGO_${a.toUpperCase()}}}`,e||"").replaceAll(`%%DECKDECKGO_${a.toUpperCase()}%%`,e||"").replaceAll(`\x3c!-- DECKDECKGO_${a.toUpperCase()} --\x3e`,e||"")),t),{data_canister_id:n,storage_canister_id:r}=e,{data_id:o}=e,s=`window.data_canister_id = "${n}";window.storage_canister_id = "${r}";window.data_id = "${null!=o?o:""}";`,c=i.replaceAll("\x3c!-- DECKDECKGO_IDS_SCRIPT --\x3e",`<script>${s}<\/script>`),d=Tt(new Uint8Array(await Pt(s)));return c.replaceAll("{{DECKDECKGO_IDS_SHAS}}",`'sha256-${d}'`)},St=async({indexHTML:t,folder:a,meta:e})=>{const{html:i,publishData:n}=t,{bucketId:r,actor:o}=await At(),{filename:s,pathname:c}=Lt({publishData:n,meta:e,folder:a}),d=`https://${r.toText()}.raw.icp0.io`,l=`${d}${c}`;let u=i.replace("{{DECKDECKGO_URL}}",l);return u=(({html:t,data:a,bucketUrl:e})=>{const{social_image_name:i}=a;if(Ft(a)){const{social_image_link:e}=a;return t.replaceAll("{{DECKDECKGO_SOCIAL_IMAGE}}",e)}return t.replaceAll("{{DECKDECKGO_SOCIAL_IMAGE}}",`${e}/meta/${i}.png`)})({html:u,data:n,bucketUrl:d}),{storageUpload:{html:u,actor:o,filename:s,pathname:c,fullUrl:l,bucketUrl:d,folder:a},publishData:n}},Lt=({publishData:t,meta:a,folder:e})=>{if(null==a?void 0:a.pathname){const{pathname:t}=a;return{filename:t.replace(`/${e}/`,""),pathname:t}}const i=xt(t.title);return{filename:i,pathname:`/${e}/${i}`}},Gt=async({publishData:t,ids:a,updateTemplateContent:e,sourceFolder:i})=>{const n=await zt(i),r=await Nt({template:n,data:t,ids:a}),{attributes:o}=t;return{html:e({attr:o?Object.entries(o).reduce(((t,[a,e])=>`${a}="${e}"; ${t}`),"").trim():void 0,template:r})}},zt=async t=>(await fetch(`${u.getInstance().get().kitPath}/${t}/index.html`)).text(),Rt=({data:t,storageUpload:a,meta:e,name:i})=>{var n;const{pathname:r}=a,o=new Date;return Object.assign(Object.assign({},t),{meta:Object.assign(Object.assign({},e||{title:i}),{pathname:r,published:!0,published_at:null!==(n=e.published_at)&&void 0!==n?n:o,updated_at:o})})},Mt=async({filename:t,html:a,actor:e,folder:i})=>{await Ct({data:new Blob([a],{type:"text/html"}),filename:t,folder:i,storageActor:e,headers:[["Cache-Control","max-age=3600"]],log:h})},Bt=()=>u.getInstance().get().author;const Ht=({content:t,bucketUrl:a,metas:e,selector:i})=>{const n=e.map((({dataId:t,meta:e})=>Wt({dataId:t,meta:e,bucketUrl:a})));return t.replace(i,n.join(""))},Wt=({dataId:t,bucketUrl:a,meta:e})=>{var i,n;const{title:r,pathname:o}=e,s=`${a}${o}`,c=null!=(null==e?void 0:e.description)&&""!==(null==e?void 0:e.description)?`<p class="description">${e.description}</p>`:"",{format:d}=new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric"});return`<a data-id="${t}" href="${s}" rel="noopener noreferrer"><article><div><h3>${r}</h3>${c}</div><div><p>Published: ${d(null!==(i=W(null==e?void 0:e.published_at))&&void 0!==i?i:new Date)}</p><p>Edited: ${d(null!==(n=W(null==e?void 0:e.updated_at))&&void 0!==n?n:new Date)}</p></div></article></a>`},qt=t=>`<url>\n  <loc>${t}</loc>\n  <changefreq>daily</changefreq>\n  <priority>0.7</priority>\n</url>`,Jt=t=>t.filter((({data:t})=>{var a;return!0===(null===(a=t.meta)||void 0===a?void 0:a.published)})).sort((({data:{meta:{published_at:t}}},{data:{meta:{published_at:a}}})=>{var e,i;return((null===(e=W(a))||void 0===e?void 0:e.getTime())||0)-((null===(i=W(t))||void 0===i?void 0:i.getTime())||0)})).map((({id:t,data:{meta:a}})=>({dataId:t,meta:a}))),Qt=async({storageUpload:t,publishData:a,entries:e,canisterIds:i})=>{const n=Jt(e),r=[Yt({storageUpload:t,publishData:a,metas:n,canisterIds:i}),Xt({storageUpload:t,metas:n}),Vt({storageUpload:t,metas:n,publishData:a})];await Promise.all(r)},Vt=async({storageUpload:t,metas:a,publishData:e})=>{const{bucketUrl:i,actor:n}=t,{author:r}=e,o=(({bucketUrl:t,metas:a,author:e})=>(({items:t,author:a,bucketUrl:e})=>`<?xml version="1.0" encoding="UTF-8"?><rss xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">\n    <channel>\n        <title><![CDATA[${a} blog]]></title>\n        <description><![CDATA[The latest blog posts of ${a}]]></description>\n        <link>${e}</link>\n        <lastBuildDate>${(new Date).toUTCString()}</lastBuildDate>\n        \n        ${t}\n    </channel>\n</rss>`)({bucketUrl:t,items:(({metas:t,bucketUrl:a})=>t.map((({meta:{title:t,description:e,pathname:i,published_at:n}})=>{var r;return`\n  <item>\n    <title><![CDATA[${t}]]></title>\n    <description><![CDATA[${null!=e?e:t}]]></description>\n    <link>${a}${i}</link>\n    <pubDate>${(null!==(r=W(n))&&void 0!==r?r:new Date).toUTCString()}</pubDate>\n  </item>\n`})))({metas:a,bucketUrl:t}).join(""),author:e}))({bucketUrl:i,metas:a,author:r||Bt()});await aa({rss:o,actor:n})},Xt=async({storageUpload:t,metas:a})=>{const{bucketUrl:e,actor:i}=t,n=(({bucketUrl:t,metas:a})=>`<?xml version="1.0" encoding="UTF-8" ?>\n  <urlset\n    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"\n    xmlns:xhtml="http://www.w3.org/1999/xhtml"\n    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"\n  >\n    ${[qt(t),...a.map((({meta:{pathname:a}})=>qt(`${t}${a}`)))].join("")}\n</urlset>`)({bucketUrl:e,metas:a});await ta({sitemap:n,actor:i})},Yt=async({storageUpload:t,publishData:a,metas:e,canisterIds:i})=>{const{bucketUrl:n,actor:r}=t,o=await(async({bucketUrl:t,publishData:a,metas:e,canisterIds:i})=>{const n=await(async()=>(await fetch(`${u.getInstance().get().kitPath}/index.html`)).text())(),{photo_url:r}=a,o=function(t,a){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&a.indexOf(i)<0&&(e[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)a.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(e[i[n]]=t[i[n]])}return e}(a,["photo_url"]);let s=await Nt({template:n,data:o,ids:i});return s=(({photo_url:t,html:a})=>t?a.replace("\x3c!-- DECKDECKGO_PHOTO_URL --\x3e",`<img role="presentation" alt="" loading="lazy" src="${t}" />`):a)({html:s,photo_url:r}),s=Ht({content:s,bucketUrl:t,metas:e,selector:/<!-- DECKDECKGO_DATA -->/}),s})({bucketUrl:n,publishData:a,metas:e,canisterIds:i});await Zt({html:o,actor:r})},Zt=async({html:t,actor:a})=>ea({actor:a,content:t,mimeType:"text/html",fullPath:"/",filename:"index.html"}),ta=async({sitemap:t,actor:a})=>ea({actor:a,content:t,mimeType:"application/xml",fullPath:"/sitemap.xml",filename:"sitemap.xml",maxAge:3600}),aa=async({rss:t,actor:a})=>ea({actor:a,content:t,mimeType:"application/xml",fullPath:"/rss.xml",filename:"rss.xml",maxAge:3600}),ea=async({content:t,actor:a,mimeType:e,filename:i,fullPath:n,maxAge:r=0})=>{await Ct({data:new Blob([t],{type:e}),filename:i,folder:"resources",storageActor:a,headers:[["Cache-Control",`max-age=${r}`]],fullPath:n,log:h})},ia=async({bucketUrl:t,identity:a})=>{const e=await nt(a.getPrincipal().toText()),i=Jt(e),n=await(async({metas:t,bucketUrl:a})=>{const e=await(async t=>{const a=await fetch(t);if(a.ok)return a.text()})(a);if(!e)return;const i=[...e.matchAll(/<section id="posts"[\s\S]*?>([\s\S]*?)<\/section>/gm)];return i.length<1&&i[0].length<2?void 0:Ht({content:e,metas:t,bucketUrl:a,selector:i[0][1]})})({bucketUrl:t,metas:i});if(!n)return;const{actor:r}=await At();await Zt({html:n,actor:r})},na=()=>u.getInstance().get().kitPath,ra=async({meta:t,ids:a})=>{const{actor:e}=await At(),i=await e.list(n("resources")),r=(await la()).map((n=>sa({kit:n,actor:e,meta:t,ids:a,assetKeys:i})));await Promise.all(r)},oa=({src:t,sha256:a,assetKeys:e})=>{var i;const n=t.replace(na(),""),r=e.find((({full_path:t})=>n===t)),s=Tt(new Uint8Array(null!==(i=o(null==r?void 0:r.sha256))&&void 0!==i?i:[]));return void 0===r||void 0===a||a!==s},sa=async({kit:t,actor:a,meta:e,ids:i,assetKeys:n})=>{const{updateContent:r}=t;if(void 0!==r)return void await(async({kit:t,actor:a,meta:e,ids:i,assetKeys:n})=>{const{src:r,filename:o,mimeType:s,updateContent:c,headers:d}=t,l=c({content:await da(r),meta:e,ids:i}),u=Tt(new Uint8Array(await Pt(l)));oa({src:r,sha256:u,assetKeys:n})&&await ca({filename:o,content:l,actor:a,mimeType:s,headers:d,fullPath:r.replace(na(),"")})})({kit:t,actor:a,meta:e,ids:i,assetKeys:n});const{src:o,filename:s,mimeType:c,headers:d,sha256:l}=t;if(!oa({src:o,sha256:l,assetKeys:n}))return;const u=await da(o),m=r?r({content:u,meta:e,ids:i}):u;await ca({filename:s,content:m,actor:a,mimeType:c,headers:d,fullPath:o.replace(na(),"")})},ca=async({filename:t,fullPath:a,content:e,actor:i,mimeType:n,headers:r})=>{const o=[...new Uint8Array(await Pt(e))];await Ct({data:new Blob([e],{type:n}),filename:t,folder:"resources",storageActor:i,fullPath:a,headers:r,log:h,sha256:o})},da=async t=>(await fetch(t)).text(),la=async()=>{const t=na();return(await(await fetch(`${t}/build.json`)).json()).map((a=>(a=>{const e="string"==typeof a?`${t}/${a}`:`${t}/${a.fullPath}`,i="string"==typeof a?void 0:a.sha256;return e.includes("hoisted.js")?{src:e,mimeType:"text/javascript",sha256:i,updateContent:({content:t,ids:{data_canister_id:a,data_id:e,storage_canister_id:i}})=>t.replace("{{DECKDECKGO_DATA_CANISTER_ID}}",a).replace("{{DECKDECKGO_STORAGE_CANISTER_ID}}",i).replace("{{DECKDECKGO_DATA_ID}}",e)}:e.includes(".js")?{src:e,mimeType:"text/javascript",sha256:i}:e.includes(".css")?{src:e,mimeType:"text/css",sha256:i}:e.includes(".webmanifest")?{src:e,mimeType:"application/manifest+json",sha256:i,updateContent:({content:t,meta:a})=>{var e;return t.replace("{{DECKDECKGO_AUTHOR}}",(null===(e=null==a?void 0:a.author)||void 0===e?void 0:e.name)||Bt())}}:{src:e,mimeType:"text/plain",sha256:i}})(a))).map((t=>{const{pathname:a}=new URL(t.src);return Object.assign(Object.assign({},t),{filename:a.split("/").pop(),headers:[["Cache-Control","max-age=31536000"]]})}))},ua=async({deck:t})=>{const a=await pa();await ra({meta:t.data.meta,ids:Object.assign(Object.assign({},a),{data_id:t.id})});const{storageUpload:e,publishData:i,deck:n}=await(async({deck:t,canisterIds:a})=>{const{id:e,data:i}=t,{meta:n}=i,r=await(async({deck:t,canisterIds:a})=>{const e=await(async({deck:t,fallbackAuthor:a})=>{let{data:e}=t,{meta:i,background:n,footer:r,header:o}=e??{};return{...await N({meta:i,selector:T,fallbackName:e?.name??"",fallbackAuthor:a}),slides:z(),background:n?`<div slot="background">${n}</div>`:void 0,header:n?`<div slot="header">${o}</div>`:void 0,footer:n?`<div slot="footer">${r}</div>`:void 0}})({deck:t,fallbackAuthor:u.getInstance().get().author}),{slides:i}=e,{html:n}=await Gt({publishData:e,ids:Object.assign(Object.assign({},a),{data_id:t.id}),updateTemplateContent:({attr:t,template:a})=>a.replace("\x3c!-- DECKDECKGO_DECK --\x3e",`<deckgo-deck id="slider" embedded="true" ${t||""}>${i.join("")}</deckgo-deck>`),sourceFolder:"p"});return{html:n,publishData:e}})({deck:t,canisterIds:a}),{storageUpload:o,publishData:s}=await St({indexHTML:r,folder:"p",meta:n}),c=Rt({data:i,meta:i.meta,name:i.name,storageUpload:o});await _(`/decks/${e}`,(t=>Object.assign(Object.assign({},t),{data:c})));const d=await v(`/decks/${e}`),l=await Z({key:`/decks/${e}`,record:d,updateTimestamps:!0});return await Mt(o),await Kt({storageUpload:o,publishData:s}),{storageUpload:o,publishData:s,deck:l}})({deck:t,canisterIds:a});return await(async({storageUpload:t,publishData:a,canisterIds:e})=>{h({msg:"[list][start] decks",level:"info"});const i=await at();h({msg:"[list][start] end",level:"info"}),await Qt({storageUpload:t,publishData:a,entries:i,canisterIds:e})})({storageUpload:e,publishData:i,owner_id:t.data.owner_id,canisterIds:a}),(t=>{const{id:a,data:e}=t,i={id:a,data:Object.assign(Object.assign({},e),{deploy:{api:{status:"successful",updated_at:new Date}}})},n=new CustomEvent("deckPublished",{detail:i});document.dispatchEvent(n)})(n),n},ma=async({doc:t,config:a})=>{const e=await pa();await ra({meta:t.data.meta,ids:Object.assign(Object.assign({},e),{data_id:t.id})});const{storageUpload:i,publishData:n,doc:r}=await(async({doc:t,config:a,canisterIds:e})=>{const{id:i,data:n}=t,{meta:r}=n,o=await(async({doc:t,config:a,canisterIds:e})=>{const{theme:i,socialImgPath:n}=a,r=await(async({doc:t,fallbackAuthor:a,theme:e,socialImgPath:i})=>{let{data:n}=t,{meta:r}=n??{};return{...await N({meta:r,selector:F,fallbackName:n?.name??"",fallbackAuthor:a,socialImgPath:i}),paragraphs:R(),theme:e,social_image_link:H({selector:F})}})({doc:t,fallbackAuthor:u.getInstance().get().author,theme:i,socialImgPath:n}),{paragraphs:o}=r,{html:s}=await Gt({publishData:r,ids:Object.assign(Object.assign({},e),{data_id:t.id}),updateTemplateContent:({attr:t,template:a})=>a.replace("\x3c!-- DECKDECKGO_DOC --\x3e",`<article ${t||""} class="deckgo-doc">${o.join("")}</article>`),sourceFolder:"d"});return{html:s,publishData:r}})({doc:t,config:a,canisterIds:e}),{storageUpload:s,publishData:c}=await St({indexHTML:o,folder:"d",meta:r}),d=Rt({data:n,meta:n.meta,name:n.name,storageUpload:s});await _(`/docs/${i}`,(t=>Object.assign(Object.assign({},t),{data:d})));const l=await v(`/docs/${i}`),m=await Z({key:`/docs/${i}`,record:l,updateTimestamps:!0});return await Mt(s),await Kt({storageUpload:s,publishData:c}),{storageUpload:s,publishData:c,doc:m}})({doc:t,config:a,canisterIds:e});return await(async({storageUpload:t,publishData:a,canisterIds:e})=>{h({msg:"[list][start] docs",level:"info"});const i=await nt();h({msg:"[list][end] docs",level:"info"}),await Qt({storageUpload:t,publishData:a,entries:i,canisterIds:e})})({storageUpload:i,publishData:n,owner_id:t.data.owner_id,canisterIds:e}),(t=>{const{id:a,data:e}=t,i={id:a,data:Object.assign(Object.assign({},e),{deploy:{api:{status:"successful",updated_at:new Date}}})},n=new CustomEvent("docPublished",{detail:i});document.dispatchEvent(n)})(r),r},pa=async()=>{const[{bucketId:t},{bucketId:a}]=await Promise.all([X(),At()]);return{data_canister_id:t.toText(),storage_canister_id:a.toText()}},ha=async()=>{const{bucketId:t}=await At();return u.getInstance().localIdentity()?`http://${t.toText()}.localhost:8000`:`https://${t.toText()}.raw.icp0.io`},ga=async()=>{const t=p();if(!t)throw new Error("No internet identity provided to list the entries that should be listed on the landing page");const a=await ha();await ia({bucketUrl:a,identity:t})},wa=async({data:t,folder:a,maxSize:e})=>{const i=p();return ya({data:t,folder:a,maxSize:e,identity:i,log:h})},ya=async({data:t,maxSize:e,folder:i,identity:n,storageBucket:r,log:o})=>{if(!t||!t.name)throw new Error("File not valid.");if(t.size>e)throw new Error(`File is too big (max. ${e/1048576} Mb)`);const{actor:s,bucketId:c}=r||await a({identity:n});if(!s||!c)throw new Error("Storage bucket is not initialized.");const{fullPath:d,filename:l,token:u}=await Ct({data:t,filename:xt(t.name),folder:i,storageActor:s,token:dt(),headers:[["cache-control","private, max-age=0"]],log:o});return{downloadUrl:`https://${c.toText()}.raw.icp0.io${d}?token=${u}`,fullPath:d,name:l}},fa=async({folder:t})=>{const{actor:a,bucketId:e}=await At(),i=await a.list(n(t)),r=`https://${e.toText()}.raw.icp0.io`;return{items:i.map((({name:t,full_path:a,token:e})=>({downloadUrl:`${r}${a}?token=${e}`,fullPath:a,name:t}))),nextPageToken:null}},ba=async({downloadUrl:t,fullPath:a})=>{const{actor:e}=await At();let i=null;if(t){const{searchParams:a}=new URL(t);i=a.get("token")}return e.del({full_path:a,token:n(i||void 0)})},ka=({data:t,storageFile:a,src:e})=>{const{downloadUrl:i,name:n}=a;let r=t.replaceAll(`img-src="${e}"`,`img-src="${i}"`);return r=r.replaceAll(`img-alt="${e}"`,`img-alt="${n}"`),r=r.replaceAll(`data-src="${e}"`,`data-src="${i}"`),r},_a=async({selector:t,storageFile:a,folder:e,src:i})=>{const n=document.querySelector(t);if("deckgo-lazy-img"===(null==n?void 0:n.nodeName.toLowerCase()))return void await va({images:[n],storageFile:a,folder:e,src:i});const r=null==n?void 0:n.querySelectorAll("deckgo-lazy-img");await va({images:Array.from(r),storageFile:a,folder:e,src:i})},va=async({storageFile:t,folder:a="images",images:e,src:i})=>{const n=e.filter((t=>"data"===a?t.getAttribute("data-src")===i:t.imgSrc===i));if(!n||n.length<=0)return;const r=Array.from(n).map((e=>"data"===a?(async a=>{const{downloadUrl:e}=t;a.setAttribute("data-src",e)})(e):(async a=>{const{downloadUrl:e,name:i}=t;a.imgSrc=e,a.imgAlt=i})(e)));await Promise.all(r)},$a=async({storageFile:t,src:a,key:e})=>{const i=(({paragraph:t,files:a})=>{if(!a)return Object.assign({},t);const e=a.filter((({src:t,storageFile:a})=>void 0!==t&&void 0!==a));let{children:i,nodeName:n,attributes:r}=t.data;return"deckgo-lazy-img"===n&&r&&e.forEach((({src:t,storageFile:a})=>{r=(({attributes:t,storageFile:a,src:e})=>{const{downloadUrl:i}=a;return Object.keys(t).reduce(((a,n)=>(a[n]=t[n]===e?i:t[n],a)),{})})({attributes:r,storageFile:a,src:t})})),i=null==i?void 0:i.map((t=>(e.forEach((({src:a,storageFile:e})=>{t=ka({data:t,storageFile:e,src:a})})),t))),Object.assign(Object.assign({},t),{data:Object.assign(Object.assign({},t.data),{updated_at:new Date,children:i,attributes:r})})})({paragraph:await Da({key:e}),files:[{src:a,storageFile:t}]});await Oa({key:e,data:i})},Da=async({key:t})=>{const a=await v(t);if(!a)throw new Error("Data not found and that is really weird here.");return a},Oa=async({key:t,data:a})=>$(t,a),ja=f(import("./p-24a12a01.js").then((t=>t.worker)),"stencil.sync.ic.worker","uploadWorker"),Ia=async({msg:t,data:a})=>{"deckdeckgo_sync_deck_background"===t&&await(async t=>{(({storageFile:t})=>{const a=document.querySelector(`${T} > *[slot="background"]`),e=null==a?void 0:a.querySelector("deckgo-lazy-img");if(!e)return;const{downloadUrl:i,name:n}=t;e.imgSrc=i,e.imgAlt=n})(t),await(async({storageFile:t,src:a})=>{const e=document.querySelectorAll(`${T} .deckgo-slide-container:not([custom-background]) *[slot="background"] deckgo-lazy-img`);await va({images:Array.from(e),storageFile:t,src:a})})(t),await(async({storageFile:t,src:a,key:e})=>{const i=(({deck:t,storageFile:a,imgSrc:e})=>a&&e?Object.assign(Object.assign({},t),{data:Object.assign(Object.assign({},t.data),{updated_at:new Date,background:ka({data:t.data.background,src:e,storageFile:a})})}):Object.assign({},t))({deck:await Da({key:e}),imgSrc:a,storageFile:t});await Oa({key:e,data:i})})(t)})(a),"deckdeckgo_sync_slide_image"===t&&await(async t=>{const{selector:a}=t;a&&(await _a(t),await(async({storageFile:t,src:a,key:e})=>{const i=(({slide:t,images:a})=>{if(!a)return Object.assign({},t);const e=a.filter((({src:t,storageFile:a})=>void 0!==t&&void 0!==a));let{content:i}=t.data;return e.forEach((({src:t,storageFile:a})=>{i=ka({data:i,storageFile:a,src:t})})),Object.assign(Object.assign({},t),{data:Object.assign(Object.assign({},t.data),{updated_at:new Date,content:i})})})({slide:await Da({key:e}),images:[{src:a,storageFile:t}]});await Oa({key:e,data:i})})(t))})(a),"deckdeckgo_sync_slide_chart"===t&&await(async t=>{const{selector:a}=t;a&&((({selector:t,storageFile:a})=>{const e=document.querySelector(t);if(!e||!e.nodeName||"deckgo-slide-chart"!==e.nodeName.toLowerCase())return;const{downloadUrl:i}=a;e.src=i})(t),await(async({storageFile:t,src:a,key:e})=>{const i=(({slide:t,chart:a})=>{if(!a)return Object.assign({},t);const{src:e,storageFile:i}=a;if(!e||!i)return Object.assign({},t);const{attributes:n}=t.data;if(!n)return Object.assign({},t);const{downloadUrl:r}=i;return Object.assign(Object.assign({},t),{data:Object.assign(Object.assign({},t.data),{updated_at:new Date,attributes:Object.assign(Object.assign({},n),{src:r})})})})({slide:await Da({key:e}),chart:{src:a,storageFile:t}});await Oa({key:e,data:i})})(t))})(a),"deckdeckgo_sync_paragraph_image"===t&&await(async t=>{const{selector:a}=t;a&&(await _a(t),await $a(t))})(a)},Ua=async({syncData:t,clean:a})=>{const e=p(),[i,n]=await(async()=>{const t=D("auth-client-db","ic-keyval"),[a,e]=await O([w,y],t);return[e,a]})();if(!e||!n)throw h({msg:"[identity] no internet identity to sync data. Please login again.",level:"error"}),new Error("No internet identity to sync data. Please login again.");if(!0!==await k())throw h({msg:"[identity] internet identity has expired. Please login again.",level:"error"}),new Error("Internet identity has expired. Please login again.");if(!j(I.fromJSON(i)))throw h({msg:"[identity] delegation has expired. Please login again.",level:"error"}),new Error("Delegation has expired. Please login again.");await ja({syncData:t,env:u.getInstance().get()},Ia,h),await a(t)};export{q as canistersBalance,jt as countLikes,ut as createTemplate,at as deckEntries,ua as deckPublish,wt as deckSubmitFeed,et as deleteDeck,rt as deleteDoc,ba as deleteFile,nt as docEntries,ma as docPublish,gt as docSubmitFeed,fa as getFiles,It as getLike,st as getParagraph,ct as getSlide,lt as getUserTemplates,vt as initLikePut,Ut as likeDislike,$t as likeKey,kt as listInteractions,ha as publishUrl,Dt as putInteraction,it as snapshotDeck,ot as snapshotDoc,Ua as sync,_t as toInteraction,ga as updateLanding,mt as updateTemplate,pt as updateUser,wa as uploadFile,ya as uploadFileIC}