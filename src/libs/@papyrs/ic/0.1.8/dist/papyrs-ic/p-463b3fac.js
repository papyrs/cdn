import{a as t,H as e}from"./p-5c5f3838.js";var a,n,i,r,o,s,c;(n=a||(a={})).TITLE="title",n.CONTENT="content",n.SPLIT="split",n.GIF="gif",n.AUTHOR="author",n.YOUTUBE="youtube",n.QRCODE="qrcode",n.CHART="chart",n.POLL="poll",n["ASPECT-RATIO"]="aspect-ratio",n.PLAYGROUND="playground",(r=i||(i={})).DEFAULT="default",r.COMMUNITY="community",r.USER="user",function(t){t.LINE="line",t.PIE="pie",t.BAR="bar"}(o||(o={})),(c=s||(s={})).DEFAULT="default",c.DEMO="demo";const d=t=>t?[t]:[],l=t=>null==t?void 0:t[0],u=async t=>{const e=new Blob([JSON.stringify(t)],{type:"application/json; charset=utf-8"});return[...new Uint8Array(await e.arrayBuffer())]},y=async t=>{const e=new Blob([new Uint8Array(t)],{type:"application/json; charset=utf-8"});return JSON.parse(await e.text())},h=({IDL:t})=>{const e=t.Principal,a=t.Int,n=t.Record({id:t.Text,updated_at:a}),i=t.Record({id:t.Text,updated_at:a}),r=t.Record({id:t.Text,updated_at:a,data:t.Vec(t.Nat8),created_at:a}),o=t.Record({id:t.Text,updated_at:a,data:t.Vec(t.Nat8),created_at:a,author:e}),s=t.Record({notContains:t.Opt(t.Text),startsWith:t.Opt(t.Text)}),c=t.Record({id:t.Text,updated_at:t.Opt(a),data:t.Vec(t.Nat8),created_at:t.Opt(a)}),d=t.Record({id:t.Text,updated_at:t.Opt(a),data:t.Vec(t.Nat8),created_at:t.Opt(a),author:e});return t.Service({countLikes:t.Func([t.Text],[t.Nat],["query"]),cyclesBalance:t.Func([],[t.Nat],["query"]),del:t.Func([t.Text],[],[]),delete:t.Func([t.Text,n],[],[]),deleteInteraction:t.Func([t.Text,i],[],[]),get:t.Func([t.Text],[t.Opt(r)],["query"]),getComment:t.Func([t.Text,t.Text],[t.Opt(o)],["query"]),getLike:t.Func([t.Text],[t.Opt(o)],["query"]),list:t.Func([t.Opt(s)],[t.Vec(t.Tuple(t.Text,r))],["query"]),listComments:t.Func([t.Text],[t.Vec(t.Tuple(t.Text,o))],["query"]),listInteractions:t.Func([t.Vec(t.Text)],[t.Vec(t.Tuple(t.Text,t.Record({countComments:t.Nat,countLikes:t.Nat,like:t.Opt(o)})))],["query"]),put:t.Func([t.Text,c],[r],[]),putInteraction:t.Func([t.Text,d],[o],[]),set:t.Func([t.Text,r],[],[]),transferFreezingThresholdCycles:t.Func([],[],[])})},p=({IDL:t})=>{const e=t.Record({owner:t.Principal,bucketId:t.Opt(t.Principal)}),a=t.Principal;return t.Service({cyclesBalance:t.Func([],[t.Nat],["query"]),delData:t.Func([],[t.Bool],[]),delStorage:t.Func([],[t.Bool],[]),getData:t.Func([],[t.Opt(e)],["query"]),getDataControllers:t.Func([],[t.Opt(t.Vec(t.Principal))],[]),getStorage:t.Func([],[t.Opt(e)],["query"]),getStorageControllers:t.Func([],[t.Opt(t.Vec(t.Principal))],[]),initData:t.Func([],[e],[]),initStorage:t.Func([],[e],[]),installCode:t.Func([t.Principal,t.Vec(t.Nat8),t.Vec(t.Nat8)],[],[]),knownBucket:t.Func([t.Text,t.Text],[t.Bool],[]),knownUser:t.Func([a,t.Text],[t.Bool],[]),list:t.Func([t.Text],[t.Vec(e)],["query"]),setDataController:t.Func([t.Principal],[],["oneway"]),setStorageController:t.Func([t.Principal],[],["oneway"]),storageLoadWasm:t.Func([t.Vec(t.Nat8)],[t.Record({total:t.Nat,chunks:t.Nat})],[]),storageResetWasm:t.Func([],[],[]),transferCycles:t.Func([t.Principal,t.Nat],[],[])})},g=({IDL:t})=>{const e=t.Record({batch_id:t.Nat,headers:t.Vec(t.Tuple(t.Text,t.Text)),chunk_ids:t.Vec(t.Nat)}),a=t.Record({token:t.Opt(t.Text),full_path:t.Text}),n=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(t.Tuple(t.Text,t.Text))}),i=t.Record({token:t.Opt(t.Text),sha256:t.Opt(t.Vec(t.Nat8)),headers:t.Vec(t.Tuple(t.Text,t.Text)),index:t.Nat64,full_path:t.Text}),r=t.Variant({Callback:t.Record({token:i,callback:t.Func([],[],[])})}),o=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(t.Tuple(t.Text,t.Text)),streaming_strategy:t.Opt(r),status_code:t.Nat16}),s=t.Record({token:t.Opt(i),body:t.Vec(t.Nat8)}),c=t.Record({token:t.Opt(t.Text),sha256:t.Opt(t.Vec(t.Nat8)),name:t.Text,full_path:t.Text,folder:t.Text}),d=t.Record({batch_id:t.Nat}),l=t.Record({content:t.Vec(t.Nat8),batch_id:t.Nat}),u=t.Record({chunk_id:t.Nat});return t.Service({commitUpload:t.Func([e],[],[]),cyclesBalance:t.Func([],[t.Nat],["query"]),del:t.Func([a],[],[]),http_request:t.Func([n],[o],["query"]),http_request_streaming_callback:t.Func([i],[s],["query"]),initUpload:t.Func([c],[d],[]),list:t.Func([t.Opt(t.Text)],[t.Vec(c)],["query"]),transferFreezingThresholdCycles:t.Func([],[],[]),uploadChunk:t.Func([l],[u],[])})};class k{constructor(){}static getInstance(){return k.instance||(k.instance=new k),k.instance}set(t){this.env=t}get(){if(void 0===this.env)throw new Error("No IC environment configuration set.");return this.env}localIdentity(){return void 0!==this.get().localIdentityCanisterId}}const w=async({canisterId:a,idlFactory:n,identity:i})=>{const r=k.getInstance().localIdentity()?"http://localhost:8000/":"https://icp0.io",o=new e(Object.assign({identity:i},r&&{host:r}));return k.getInstance().localIdentity()&&await o.fetchRootKey(),t.createActor(n,{agent:o,canisterId:a})},_=({identity:t})=>w({canisterId:k.getInstance().get().managerCanisterId,idlFactory:p,identity:t}),m=async({identity:t})=>f({identity:t,idlFactory:h,initBucket:I}),b=async({identity:t})=>f({identity:t,idlFactory:g,initBucket:C}),f=async({identity:t,idlFactory:e,initBucket:a})=>{if(!t)throw new Error("Invalid identity.");const n=await _({identity:t}),i=await a({managerActor:n}),r=l(i.bucketId);return{bucketId:r,actor:r?await q({identity:t,bucketId:r,idlFactory:e}):void 0}},q=({identity:t,bucketId:e,idlFactory:a})=>w({canisterId:e,idlFactory:a,identity:t}),I=async({managerActor:t})=>l(await t.getData())||await t.initData(),C=async({managerActor:t})=>l(await t.getStorage())||await t.initStorage(),B=BigInt(144e11),F="https://identity.ic0.app";export{k as E,b as a,y as b,_ as c,u as d,w as e,l as f,m as g,B as h,h as i,F as j,d as t}