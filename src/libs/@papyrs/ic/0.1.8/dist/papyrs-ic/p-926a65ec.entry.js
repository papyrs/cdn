import{r as i,a as s,h as t}from"./p-82ae0ef6.js";import{E as n,d as e,D as a,b as r,c as o,f as c}from"./p-46a3a60f.js";import"./p-5c5f3838.js";const h=class{constructor(t){i(this,t),this.signInSuccess=s(this,"signInSuccess",7),this.signInError=s(this,"signInError",7),this.ed25519Key=void 0,this.signInProxyUrl=void 0}async onMessage({data:i,origin:s}){const{kind:t}=null!=i?i:{};if(t&&this.signInOrigin(s))switch(t){case"papyrs-signin-ready":return void this.onSignInReady(s);case"papyrs-signin-success":return void await this.onSignInSuccess(i);case"papyrs-signin-error":this.onSignInError(i)}}signInOrigin(i){const{origin:s}=new URL(this.signInProxyUrl);return s===i}onSignInReady(i){this.ed25519Key=n.generate(),this.ref.contentWindow.postMessage({kind:"papyrs-signin-init",key:this.ed25519Key.getPublicKey().toDer()},i)}onSignInError({text:i}){this.error(i)}async onSignInSuccess(i){if(!this.ed25519Key)return void this.error("No Ed25519Key key to decode the identity of the delegation.");const{delegation:s}=this.decode(i);await this.saveToIdb(s),this.signInSuccess.emit()}decode({delegations:i,userPublicKey:s}){const t=i.map((i=>({delegation:new e(i.delegation.pubkey,i.delegation.expiration,i.delegation.targets),signature:i.signature.buffer}))),n=a.fromDelegations(t,s.buffer);return{delegation:n,identity:r.fromDelegation(this.ed25519Key,n)}}async saveToIdb(i){const s=o("auth-client-db","ic-keyval"),t=(i,s)=>"bigint"==typeof s?`BIGINT::${s}`:s;await c([["identity",JSON.stringify(this.ed25519Key,t)],["delegation",JSON.stringify(i.toJSON(),t)]],s)}error(i){this.signInError.emit(i)}render(){return t("object",{type:"text/html",data:this.signInProxyUrl,part:"object",ref:i=>this.ref=i})}};export{h as ic_signin_sso}