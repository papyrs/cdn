import{m as t}from"./p-6ba3caeb.js";import"./p-cc2422b9.js";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,e=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,o={};((t,o,u,s)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let u of e(o))i.call(t,u)||"default"===u||r(t,u,{get:()=>o[u],enumerable:!(s=n(o,u))||s.enumerable})})(o,t);var u,s,c,a,f,h,v,d,l,g,b,m,w,k,p,j,x,S,I,y,T,E,O,C,_,D,R,N,L,W,A,z,M,P,q,F,U,H,V,$,B,G,J,K,Q,X,Y,Z,tt,rt=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(t){this._defaults=t,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=o.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...t){let r;return this._getClient().then((t=>{r=t})).then((()=>{if(this._worker)return this._worker.withSyncedResources(t)})).then((()=>r))}};(s=u||(u={})).MIN_VALUE=-2147483648,s.MAX_VALUE=2147483647,(a=c||(c={})).MIN_VALUE=0,a.MAX_VALUE=2147483647,(h=f||(f={})).create=function(t,r){return t===Number.MAX_VALUE&&(t=c.MAX_VALUE),r===Number.MAX_VALUE&&(r=c.MAX_VALUE),{line:t,character:r}},h.is=function(t){var r=t;return rr.objectLiteral(r)&&rr.uinteger(r.line)&&rr.uinteger(r.character)},(d=v||(v={})).create=function(t,r,n,e){if(rr.uinteger(t)&&rr.uinteger(r)&&rr.uinteger(n)&&rr.uinteger(e))return{start:f.create(t,r),end:f.create(n,e)};if(f.is(t)&&f.is(r))return{start:t,end:r};throw new Error("Range#create called with invalid arguments["+t+", "+r+", "+n+", "+e+"]")},d.is=function(t){var r=t;return rr.objectLiteral(r)&&f.is(r.start)&&f.is(r.end)},(g=l||(l={})).create=function(t,r){return{uri:t,range:r}},g.is=function(t){var r=t;return rr.defined(r)&&v.is(r.range)&&(rr.string(r.uri)||rr.undefined(r.uri))},(m=b||(b={})).create=function(t,r,n,e){return{targetUri:t,targetRange:r,targetSelectionRange:n,originSelectionRange:e}},m.is=function(t){var r=t;return rr.defined(r)&&v.is(r.targetRange)&&rr.string(r.targetUri)&&(v.is(r.targetSelectionRange)||rr.undefined(r.targetSelectionRange))&&(v.is(r.originSelectionRange)||rr.undefined(r.originSelectionRange))},(k=w||(w={})).create=function(t,r,n,e){return{red:t,green:r,blue:n,alpha:e}},k.is=function(t){var r=t;return rr.numberRange(r.red,0,1)&&rr.numberRange(r.green,0,1)&&rr.numberRange(r.blue,0,1)&&rr.numberRange(r.alpha,0,1)},(j=p||(p={})).create=function(t,r){return{range:t,color:r}},j.is=function(t){var r=t;return v.is(r.range)&&w.is(r.color)},(S=x||(x={})).create=function(t,r,n){return{label:t,textEdit:r,additionalTextEdits:n}},S.is=function(t){var r=t;return rr.string(r.label)&&(rr.undefined(r.textEdit)||P.is(r))&&(rr.undefined(r.additionalTextEdits)||rr.typedArray(r.additionalTextEdits,P.is))},(y=I||(I={})).Comment="comment",y.Imports="imports",y.Region="region",(E=T||(T={})).create=function(t,r,n,e,i){var o={startLine:t,endLine:r};return rr.defined(n)&&(o.startCharacter=n),rr.defined(e)&&(o.endCharacter=e),rr.defined(i)&&(o.kind=i),o},E.is=function(t){var r=t;return rr.uinteger(r.startLine)&&rr.uinteger(r.startLine)&&(rr.undefined(r.startCharacter)||rr.uinteger(r.startCharacter))&&(rr.undefined(r.endCharacter)||rr.uinteger(r.endCharacter))&&(rr.undefined(r.kind)||rr.string(r.kind))},(C=O||(O={})).create=function(t,r){return{location:t,message:r}},C.is=function(t){var r=t;return rr.defined(r)&&l.is(r.location)&&rr.string(r.message)},(D=_||(_={})).Error=1,D.Warning=2,D.Information=3,D.Hint=4,(N=R||(R={})).Unnecessary=1,N.Deprecated=2,(L||(L={})).is=function(t){return null!=t&&rr.string(t.href)},(A=W||(W={})).create=function(t,r,n,e,i,o){var u={range:t,message:r};return rr.defined(n)&&(u.severity=n),rr.defined(e)&&(u.code=e),rr.defined(i)&&(u.source=i),rr.defined(o)&&(u.relatedInformation=o),u},A.is=function(t){var r,n=t;return rr.defined(n)&&v.is(n.range)&&rr.string(n.message)&&(rr.number(n.severity)||rr.undefined(n.severity))&&(rr.integer(n.code)||rr.string(n.code)||rr.undefined(n.code))&&(rr.undefined(n.codeDescription)||rr.string(null===(r=n.codeDescription)||void 0===r?void 0:r.href))&&(rr.string(n.source)||rr.undefined(n.source))&&(rr.undefined(n.relatedInformation)||rr.typedArray(n.relatedInformation,O.is))},(M=z||(z={})).create=function(t,r){for(var n=[],e=2;e<arguments.length;e++)n[e-2]=arguments[e];var i={title:t,command:r};return rr.defined(n)&&n.length>0&&(i.arguments=n),i},M.is=function(t){var r=t;return rr.defined(r)&&rr.string(r.title)&&rr.string(r.command)},(q=P||(P={})).replace=function(t,r){return{range:t,newText:r}},q.insert=function(t,r){return{range:{start:t,end:t},newText:r}},q.del=function(t){return{range:t,newText:""}},q.is=function(t){var r=t;return rr.objectLiteral(r)&&rr.string(r.newText)&&v.is(r.range)},(U=F||(F={})).create=function(t,r,n){var e={label:t};return void 0!==r&&(e.needsConfirmation=r),void 0!==n&&(e.description=n),e},U.is=function(t){var r=t;return void 0!==r&&rr.objectLiteral(r)&&rr.string(r.label)&&(rr.boolean(r.needsConfirmation)||void 0===r.needsConfirmation)&&(rr.string(r.description)||void 0===r.description)},(H||(H={})).is=function(t){return"string"==typeof t},($=V||(V={})).replace=function(t,r,n){return{range:t,newText:r,annotationId:n}},$.insert=function(t,r,n){return{range:{start:t,end:t},newText:r,annotationId:n}},$.del=function(t,r){return{range:t,newText:"",annotationId:r}},$.is=function(t){var r=t;return P.is(r)&&(F.is(r.annotationId)||H.is(r.annotationId))},(G=B||(B={})).create=function(t,r){return{textDocument:t,edits:r}},G.is=function(t){var r=t;return rr.defined(r)&&ut.is(r.textDocument)&&Array.isArray(r.edits)},(K=J||(J={})).create=function(t,r,n){var e={kind:"create",uri:t};return void 0===r||void 0===r.overwrite&&void 0===r.ignoreIfExists||(e.options=r),void 0!==n&&(e.annotationId=n),e},K.is=function(t){var r=t;return r&&"create"===r.kind&&rr.string(r.uri)&&(void 0===r.options||(void 0===r.options.overwrite||rr.boolean(r.options.overwrite))&&(void 0===r.options.ignoreIfExists||rr.boolean(r.options.ignoreIfExists)))&&(void 0===r.annotationId||H.is(r.annotationId))},(X=Q||(Q={})).create=function(t,r,n,e){var i={kind:"rename",oldUri:t,newUri:r};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==e&&(i.annotationId=e),i},X.is=function(t){var r=t;return r&&"rename"===r.kind&&rr.string(r.oldUri)&&rr.string(r.newUri)&&(void 0===r.options||(void 0===r.options.overwrite||rr.boolean(r.options.overwrite))&&(void 0===r.options.ignoreIfExists||rr.boolean(r.options.ignoreIfExists)))&&(void 0===r.annotationId||H.is(r.annotationId))},(Z=Y||(Y={})).create=function(t,r,n){var e={kind:"delete",uri:t};return void 0===r||void 0===r.recursive&&void 0===r.ignoreIfNotExists||(e.options=r),void 0!==n&&(e.annotationId=n),e},Z.is=function(t){var r=t;return r&&"delete"===r.kind&&rr.string(r.uri)&&(void 0===r.options||(void 0===r.options.recursive||rr.boolean(r.options.recursive))&&(void 0===r.options.ignoreIfNotExists||rr.boolean(r.options.ignoreIfNotExists)))&&(void 0===r.annotationId||H.is(r.annotationId))},(tt||(tt={})).is=function(t){return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(t){return rr.string(t.kind)?J.is(t)||Q.is(t)||Y.is(t):B.is(t)})))};var nt,et,it,ot,ut,st,ct,at,ft,ht,vt,dt,lt,gt,bt,mt,wt,kt,pt,jt,xt,St,It,yt,Tt,Et,Ot,Ct,_t,Dt,Rt,Nt,Lt,Wt,At,zt,Mt,Pt,qt,Ft,Ut,Ht,Vt,$t,Bt,Gt,Jt,Kt,Qt,Xt,Yt,Zt=function(){function t(t,r){this.edits=t,this.changeAnnotations=r}return t.prototype.insert=function(t,r,n){var e,i;if(void 0===n?e=P.insert(t,r):H.is(n)?(i=n,e=V.insert(t,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),e=V.insert(t,r,i)),this.edits.push(e),void 0!==i)return i},t.prototype.replace=function(t,r,n){var e,i;if(void 0===n?e=P.replace(t,r):H.is(n)?(i=n,e=V.replace(t,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),e=V.replace(t,r,i)),this.edits.push(e),void 0!==i)return i},t.prototype.delete=function(t,r){var n,e;if(void 0===r?n=P.del(t):H.is(r)?(e=r,n=V.del(t,r)):(this.assertChangeAnnotations(this.changeAnnotations),e=this.changeAnnotations.manage(r),n=V.del(t,e)),this.edits.push(n),void 0!==e)return e},t.prototype.add=function(t){this.edits.push(t)},t.prototype.all=function(){return this.edits},t.prototype.clear=function(){this.edits.splice(0,this.edits.length)},t.prototype.assertChangeAnnotations=function(t){if(void 0===t)throw new Error("Text edit change is not configured to manage change annotations.")},t}(),tr=function(){function t(t){this._annotations=void 0===t?Object.create(null):t,this._counter=0,this._size=0}return t.prototype.all=function(){return this._annotations},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),t.prototype.manage=function(t,r){var n;if(H.is(t)?n=t:(n=this.nextId(),r=t),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===r)throw new Error("No annotation provided for id "+n);return this._annotations[n]=r,this._size++,n},t.prototype.nextId=function(){return this._counter++,this._counter.toString()},t}();!function(){function t(t){var r=this;this._textEditChanges=Object.create(null),void 0!==t?(this._workspaceEdit=t,t.documentChanges?(this._changeAnnotations=new tr(t.changeAnnotations),t.changeAnnotations=this._changeAnnotations.all(),t.documentChanges.forEach((function(t){if(B.is(t)){var n=new Zt(t.edits,r._changeAnnotations);r._textEditChanges[t.textDocument.uri]=n}}))):t.changes&&Object.keys(t.changes).forEach((function(n){var e=new Zt(t.changes[n]);r._textEditChanges[n]=e}))):this._workspaceEdit={}}Object.defineProperty(t.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(this._workspaceEdit.changeAnnotations=0===this._changeAnnotations.size?void 0:this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),t.prototype.getTextEditChange=function(t){if(ut.is(t)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r={uri:t.uri,version:t.version};return(n=this._textEditChanges[r.uri])||(this._workspaceEdit.documentChanges.push({textDocument:r,edits:e=[]}),n=new Zt(e,this._changeAnnotations),this._textEditChanges[r.uri]=n),n}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var n,e;return(n=this._textEditChanges[t])||(this._workspaceEdit.changes[t]=e=[],n=new Zt(e),this._textEditChanges[t]=n),n},t.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new tr,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},t.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},t.prototype.createFile=function(t,r,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var e,i,o;if(F.is(r)||H.is(r)?e=r:n=r,void 0===e?i=J.create(t,n):(o=H.is(e)?e:this._changeAnnotations.manage(e),i=J.create(t,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},t.prototype.renameFile=function(t,r,n,e){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,u;if(F.is(n)||H.is(n)?i=n:e=n,void 0===i?o=Q.create(t,r,e):(u=H.is(i)?i:this._changeAnnotations.manage(i),o=Q.create(t,r,e,u)),this._workspaceEdit.documentChanges.push(o),void 0!==u)return u},t.prototype.deleteFile=function(t,r,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var e,i,o;if(F.is(r)||H.is(r)?e=r:n=r,void 0===e?i=Y.create(t,n):(o=H.is(e)?e:this._changeAnnotations.manage(e),i=Y.create(t,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(et=nt||(nt={})).create=function(t){return{uri:t}},et.is=function(t){var r=t;return rr.defined(r)&&rr.string(r.uri)},(ot=it||(it={})).create=function(t,r){return{uri:t,version:r}},ot.is=function(t){var r=t;return rr.defined(r)&&rr.string(r.uri)&&rr.integer(r.version)},(st=ut||(ut={})).create=function(t,r){return{uri:t,version:r}},st.is=function(t){var r=t;return rr.defined(r)&&rr.string(r.uri)&&(null===r.version||rr.integer(r.version))},(at=ct||(ct={})).create=function(t,r,n,e){return{uri:t,languageId:r,version:n,text:e}},at.is=function(t){var r=t;return rr.defined(r)&&rr.string(r.uri)&&rr.string(r.languageId)&&rr.integer(r.version)&&rr.string(r.text)},(ht=ft||(ft={})).PlainText="plaintext",ht.Markdown="markdown",function(t){t.is=function(r){return r===t.PlainText||r===t.Markdown}}(ft||(ft={})),(vt||(vt={})).is=function(t){var r=t;return rr.objectLiteral(t)&&ft.is(r.kind)&&rr.string(r.value)},(lt=dt||(dt={})).Text=1,lt.Method=2,lt.Function=3,lt.Constructor=4,lt.Field=5,lt.Variable=6,lt.Class=7,lt.Interface=8,lt.Module=9,lt.Property=10,lt.Unit=11,lt.Value=12,lt.Enum=13,lt.Keyword=14,lt.Snippet=15,lt.Color=16,lt.File=17,lt.Reference=18,lt.Folder=19,lt.EnumMember=20,lt.Constant=21,lt.Struct=22,lt.Event=23,lt.Operator=24,lt.TypeParameter=25,(bt=gt||(gt={})).PlainText=1,bt.Snippet=2,(mt||(mt={})).Deprecated=1,(kt=wt||(wt={})).create=function(t,r,n){return{newText:t,insert:r,replace:n}},kt.is=function(t){var r=t;return r&&rr.string(r.newText)&&v.is(r.insert)&&v.is(r.replace)},(jt=pt||(pt={})).asIs=1,jt.adjustIndentation=2,(xt||(xt={})).create=function(t){return{label:t}},(St||(St={})).create=function(t,r){return{items:t||[],isIncomplete:!!r}},(yt=It||(It={})).fromPlainText=function(t){return t.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},yt.is=function(t){var r=t;return rr.string(r)||rr.objectLiteral(r)&&rr.string(r.language)&&rr.string(r.value)},(Tt||(Tt={})).is=function(t){var r=t;return!!r&&rr.objectLiteral(r)&&(vt.is(r.contents)||It.is(r.contents)||rr.typedArray(r.contents,It.is))&&(void 0===t.range||v.is(t.range))},(Et||(Et={})).create=function(t,r){return r?{label:t,documentation:r}:{label:t}},(Ot||(Ot={})).create=function(t,r){for(var n=[],e=2;e<arguments.length;e++)n[e-2]=arguments[e];var i={label:t};return rr.defined(r)&&(i.documentation=r),i.parameters=rr.defined(n)?n:[],i},(_t=Ct||(Ct={})).Text=1,_t.Read=2,_t.Write=3,(Dt||(Dt={})).create=function(t,r){var n={range:t};return rr.number(r)&&(n.kind=r),n},(Nt=Rt||(Rt={})).File=1,Nt.Module=2,Nt.Namespace=3,Nt.Package=4,Nt.Class=5,Nt.Method=6,Nt.Property=7,Nt.Field=8,Nt.Constructor=9,Nt.Enum=10,Nt.Interface=11,Nt.Function=12,Nt.Variable=13,Nt.Constant=14,Nt.String=15,Nt.Number=16,Nt.Boolean=17,Nt.Array=18,Nt.Object=19,Nt.Key=20,Nt.Null=21,Nt.EnumMember=22,Nt.Struct=23,Nt.Event=24,Nt.Operator=25,Nt.TypeParameter=26,(Lt||(Lt={})).Deprecated=1,(Wt||(Wt={})).create=function(t,r,n,e,i){var o={name:t,kind:r,location:{uri:e,range:n}};return i&&(o.containerName=i),o},(zt=At||(At={})).create=function(t,r,n,e,i,o){var u={name:t,detail:r,kind:n,range:e,selectionRange:i};return void 0!==o&&(u.children=o),u},zt.is=function(t){var r=t;return r&&rr.string(r.name)&&rr.number(r.kind)&&v.is(r.range)&&v.is(r.selectionRange)&&(void 0===r.detail||rr.string(r.detail))&&(void 0===r.deprecated||rr.boolean(r.deprecated))&&(void 0===r.children||Array.isArray(r.children))&&(void 0===r.tags||Array.isArray(r.tags))},(Pt=Mt||(Mt={})).Empty="",Pt.QuickFix="quickfix",Pt.Refactor="refactor",Pt.RefactorExtract="refactor.extract",Pt.RefactorInline="refactor.inline",Pt.RefactorRewrite="refactor.rewrite",Pt.Source="source",Pt.SourceOrganizeImports="source.organizeImports",Pt.SourceFixAll="source.fixAll",(Ft=qt||(qt={})).create=function(t,r){var n={diagnostics:t};return null!=r&&(n.only=r),n},Ft.is=function(t){var r=t;return rr.defined(r)&&rr.typedArray(r.diagnostics,W.is)&&(void 0===r.only||rr.typedArray(r.only,rr.string))},(Ht=Ut||(Ut={})).create=function(t,r,n){var e={title:t},i=!0;return"string"==typeof r?(i=!1,e.kind=r):z.is(r)?e.command=r:e.edit=r,i&&void 0!==n&&(e.kind=n),e},Ht.is=function(t){var r=t;return r&&rr.string(r.title)&&(void 0===r.diagnostics||rr.typedArray(r.diagnostics,W.is))&&(void 0===r.kind||rr.string(r.kind))&&(void 0!==r.edit||void 0!==r.command)&&(void 0===r.command||z.is(r.command))&&(void 0===r.isPreferred||rr.boolean(r.isPreferred))&&(void 0===r.edit||tt.is(r.edit))},($t=Vt||(Vt={})).create=function(t,r){var n={range:t};return rr.defined(r)&&(n.data=r),n},$t.is=function(t){var r=t;return rr.defined(r)&&v.is(r.range)&&(rr.undefined(r.command)||z.is(r.command))},(Gt=Bt||(Bt={})).create=function(t,r){return{tabSize:t,insertSpaces:r}},Gt.is=function(t){var r=t;return rr.defined(r)&&rr.uinteger(r.tabSize)&&rr.boolean(r.insertSpaces)},(Kt=Jt||(Jt={})).create=function(t,r,n){return{range:t,target:r,data:n}},Kt.is=function(t){var r=t;return rr.defined(r)&&v.is(r.range)&&(rr.undefined(r.target)||rr.string(r.target))},(Xt=Qt||(Qt={})).create=function(t,r){return{range:t,parent:r}},Xt.is=function(t){var r=t;return void 0!==r&&v.is(r.range)&&(void 0===r.parent||Xt.is(r.parent))},function(t){function r(t,n){if(t.length<=1)return t;var e=t.length/2|0,i=t.slice(0,e),o=t.slice(e);r(i,n),r(o,n);for(var u=0,s=0,c=0;u<i.length&&s<o.length;){var a=n(i[u],o[s]);t[c++]=a<=0?i[u++]:o[s++]}for(;u<i.length;)t[c++]=i[u++];for(;s<o.length;)t[c++]=o[s++];return t}t.create=function(t,r,n,e){return new ir(t,r,n,e)},t.is=function(t){var r=t;return!!(rr.defined(r)&&rr.string(r.uri)&&(rr.undefined(r.languageId)||rr.string(r.languageId))&&rr.uinteger(r.lineCount)&&rr.func(r.getText)&&rr.func(r.positionAt)&&rr.func(r.offsetAt))},t.applyEdits=function(t,n){for(var e=t.getText(),i=r(n,(function(t,r){var n=t.range.start.line-r.range.start.line;return 0===n?t.range.start.character-r.range.start.character:n})),o=e.length,u=i.length-1;u>=0;u--){var s=i[u],c=t.offsetAt(s.range.start),a=t.offsetAt(s.range.end);if(!(a<=o))throw new Error("Overlapping edit");e=e.substring(0,c)+s.newText+e.substring(a,e.length),o=c}return e}}(Yt||(Yt={}));var rr,nr,er,ir=function(){function t(t,r,n,e){this._uri=t,this._languageId=r,this._version=n,this._content=e,this._lineOffsets=void 0}return Object.defineProperty(t.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),t.prototype.getText=function(t){if(t){var r=this.offsetAt(t.start),n=this.offsetAt(t.end);return this._content.substring(r,n)}return this._content},t.prototype.update=function(t,r){this._content=t.text,this._version=r,this._lineOffsets=void 0},t.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var t=[],r=this._content,n=!0,e=0;e<r.length;e++){n&&(t.push(e),n=!1);var i=r.charAt(e);n="\r"===i||"\n"===i,"\r"===i&&e+1<r.length&&"\n"===r.charAt(e+1)&&e++}n&&r.length>0&&t.push(r.length),this._lineOffsets=t}return this._lineOffsets},t.prototype.positionAt=function(t){t=Math.max(Math.min(t,this._content.length),0);var r=this.getLineOffsets(),n=0,e=r.length;if(0===e)return f.create(0,t);for(;n<e;){var i=Math.floor((n+e)/2);r[i]>t?e=i:n=i+1}var o=n-1;return f.create(o,t-r[o])},t.prototype.offsetAt=function(t){var r=this.getLineOffsets();if(t.line>=r.length)return this._content.length;if(t.line<0)return 0;var n=r[t.line];return Math.max(Math.min(n+t.character,t.line+1<r.length?r[t.line+1]:this._content.length),n)},Object.defineProperty(t.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),t}();nr=rr||(rr={}),er=Object.prototype.toString,nr.defined=function(t){return void 0!==t},nr.undefined=function(t){return void 0===t},nr.boolean=function(t){return!0===t||!1===t},nr.string=function(t){return"[object String]"===er.call(t)},nr.number=function(t){return"[object Number]"===er.call(t)},nr.numberRange=function(t,r,n){return"[object Number]"===er.call(t)&&r<=t&&t<=n},nr.integer=function(t){return"[object Number]"===er.call(t)&&-2147483648<=t&&t<=2147483647},nr.uinteger=function(t){return"[object Number]"===er.call(t)&&0<=t&&t<=2147483647},nr.func=function(t){return"[object Function]"===er.call(t)},nr.objectLiteral=function(t){return null!==t&&"object"==typeof t},nr.typedArray=function(t,r){return Array.isArray(t)&&t.every(r)};var or=class{constructor(t,r,n){this._languageId=t,this._worker=r;const e=t=>{let r,n=t.getLanguageId();n===this._languageId&&(this._listener[t.uri.toString()]=t.onDidChangeContent((()=>{window.clearTimeout(r),r=window.setTimeout((()=>this._doValidate(t.uri,n)),500)})),this._doValidate(t.uri,n))},i=t=>{o.editor.setModelMarkers(t,this._languageId,[]);let r=t.uri.toString(),n=this._listener[r];n&&(n.dispose(),delete this._listener[r])};this._disposables.push(o.editor.onDidCreateModel(e)),this._disposables.push(o.editor.onWillDisposeModel(i)),this._disposables.push(o.editor.onDidChangeModelLanguage((t=>{i(t.model),e(t.model)}))),this._disposables.push(n((()=>{o.editor.getModels().forEach((t=>{t.getLanguageId()===this._languageId&&(i(t),e(t))}))}))),this._disposables.push({dispose:()=>{o.editor.getModels().forEach(i);for(let t in this._listener)this._listener[t].dispose()}}),o.editor.getModels().forEach(e)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((t=>t&&t.dispose())),this._disposables.length=0}_doValidate(t,r){this._worker(t).then((r=>r.doValidation(t.toString()))).then((n=>{const e=n.map((t=>function(t,r){let n="number"==typeof r.code?String(r.code):r.code;return{severity:ur(r.severity),startLineNumber:r.range.start.line+1,startColumn:r.range.start.character+1,endLineNumber:r.range.end.line+1,endColumn:r.range.end.character+1,message:r.message,code:n,source:r.source}}(0,t)));let i=o.editor.getModel(t);i&&i.getLanguageId()===r&&o.editor.setModelMarkers(i,r,e)})).then(void 0,(t=>{console.error(t)}))}};function ur(t){switch(t){case _.Error:return o.MarkerSeverity.Error;case _.Warning:return o.MarkerSeverity.Warning;case _.Information:return o.MarkerSeverity.Info;case _.Hint:return o.MarkerSeverity.Hint;default:return o.MarkerSeverity.Info}}var sr=class{constructor(t,r){this._worker=t,this._triggerCharacters=r}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(t,r,n,e){const i=t.uri;return this._worker(i).then((t=>t.doComplete(i.toString(),cr(r)))).then((n=>{if(!n)return;const e=t.getWordUntilPosition(r),i=new o.Range(r.lineNumber,e.startColumn,r.lineNumber,e.endColumn),u=n.items.map((t=>{const r={label:t.label,insertText:t.insertText||t.label,sortText:t.sortText,filterText:t.filterText,documentation:t.documentation,detail:t.detail,command:(n=t.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:hr(t.kind)};var n,e;return t.textEdit&&(r.range=void 0!==(e=t.textEdit).insert&&void 0!==e.replace?{insert:fr(t.textEdit.insert),replace:fr(t.textEdit.replace)}:fr(t.textEdit.range),r.insertText=t.textEdit.newText),t.additionalTextEdits&&(r.additionalTextEdits=t.additionalTextEdits.map(vr)),t.insertTextFormat===gt.Snippet&&(r.insertTextRules=o.languages.CompletionItemInsertTextRule.InsertAsSnippet),r}));return{isIncomplete:n.isIncomplete,suggestions:u}}))}};function cr(t){if(t)return{character:t.column-1,line:t.lineNumber-1}}function ar(t){if(t)return{start:{line:t.startLineNumber-1,character:t.startColumn-1},end:{line:t.endLineNumber-1,character:t.endColumn-1}}}function fr(t){if(t)return new o.Range(t.start.line+1,t.start.character+1,t.end.line+1,t.end.character+1)}function hr(t){const r=o.languages.CompletionItemKind;switch(t){case dt.Text:return r.Text;case dt.Method:return r.Method;case dt.Function:return r.Function;case dt.Constructor:return r.Constructor;case dt.Field:return r.Field;case dt.Variable:return r.Variable;case dt.Class:return r.Class;case dt.Interface:return r.Interface;case dt.Module:return r.Module;case dt.Property:return r.Property;case dt.Unit:return r.Unit;case dt.Value:return r.Value;case dt.Enum:return r.Enum;case dt.Keyword:return r.Keyword;case dt.Snippet:return r.Snippet;case dt.Color:return r.Color;case dt.File:return r.File;case dt.Reference:return r.Reference}return r.Property}function vr(t){if(t)return{range:fr(t.range),text:t.newText}}var dr=class{constructor(t){this._worker=t}provideHover(t,r,n){let e=t.uri;return this._worker(e).then((t=>t.doHover(e.toString(),cr(r)))).then((t=>{if(t)return{range:fr(t.range),contents:gr(t.contents)}}))}};function lr(t){return"string"==typeof t?{value:t}:(r=t)&&"object"==typeof r&&"string"==typeof r.kind?"plaintext"===t.kind?{value:t.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:t.value}:{value:"```"+t.language+"\n"+t.value+"\n```\n"};var r}function gr(t){if(t)return Array.isArray(t)?t.map(lr):[lr(t)]}var br=class{constructor(t){this._worker=t}provideDocumentHighlights(t,r,n){const e=t.uri;return this._worker(e).then((t=>t.findDocumentHighlights(e.toString(),cr(r)))).then((t=>{if(t)return t.map((t=>({range:fr(t.range),kind:mr(t.kind)})))}))}};function mr(t){switch(t){case Ct.Read:return o.languages.DocumentHighlightKind.Read;case Ct.Write:return o.languages.DocumentHighlightKind.Write;case Ct.Text:return o.languages.DocumentHighlightKind.Text}return o.languages.DocumentHighlightKind.Text}var wr=class{constructor(t){this._worker=t}provideDefinition(t,r,n){const e=t.uri;return this._worker(e).then((t=>t.findDefinition(e.toString(),cr(r)))).then((t=>{if(t)return[kr(t)]}))}};function kr(t){return{uri:o.Uri.parse(t.uri),range:fr(t.range)}}var pr=class{constructor(t){this._worker=t}provideReferences(t,r,n,e){const i=t.uri;return this._worker(i).then((t=>t.findReferences(i.toString(),cr(r)))).then((t=>{if(t)return t.map(kr)}))}},jr=class{constructor(t){this._worker=t}provideRenameEdits(t,r,n,e){const i=t.uri;return this._worker(i).then((t=>t.doRename(i.toString(),cr(r),n))).then((t=>function(t){if(!t||!t.changes)return;let r=[];for(let n in t.changes){const e=o.Uri.parse(n);for(let i of t.changes[n])r.push({resource:e,edit:{range:fr(i.range),text:i.newText}})}return{edits:r}}(t)))}},xr=class{constructor(t){this._worker=t}provideDocumentSymbols(t,r){const n=t.uri;return this._worker(n).then((t=>t.findDocumentSymbols(n.toString()))).then((t=>{if(t)return t.map((t=>({name:t.name,detail:"",containerName:t.containerName,kind:Sr(t.kind),range:fr(t.location.range),selectionRange:fr(t.location.range),tags:[]})))}))}};function Sr(t){let r=o.languages.SymbolKind;switch(t){case Rt.File:return r.Array;case Rt.Module:return r.Module;case Rt.Namespace:return r.Namespace;case Rt.Package:return r.Package;case Rt.Class:return r.Class;case Rt.Method:return r.Method;case Rt.Property:return r.Property;case Rt.Field:return r.Field;case Rt.Constructor:return r.Constructor;case Rt.Enum:return r.Enum;case Rt.Interface:return r.Interface;case Rt.Function:return r.Function;case Rt.Variable:return r.Variable;case Rt.Constant:return r.Constant;case Rt.String:return r.String;case Rt.Number:return r.Number;case Rt.Boolean:return r.Boolean;case Rt.Array:return r.Array}return r.Function}var Ir=class{constructor(t){this._worker=t}provideLinks(t,r){const n=t.uri;return this._worker(n).then((t=>t.findDocumentLinks(n.toString()))).then((t=>{if(t)return{links:t.map((t=>({range:fr(t.range),url:t.target})))}}))}},yr=class{constructor(t){this._worker=t}provideDocumentFormattingEdits(t,r,n){const e=t.uri;return this._worker(e).then((t=>t.format(e.toString(),null,Er(r)).then((t=>{if(t&&0!==t.length)return t.map(vr)}))))}},Tr=class{constructor(t){this._worker=t}provideDocumentRangeFormattingEdits(t,r,n,e){const i=t.uri;return this._worker(i).then((t=>t.format(i.toString(),ar(r),Er(n)).then((t=>{if(t&&0!==t.length)return t.map(vr)}))))}};function Er(t){return{tabSize:t.tabSize,insertSpaces:t.insertSpaces}}var Or,Cr=class{constructor(t){this._worker=t}provideDocumentColors(t,r){const n=t.uri;return this._worker(n).then((t=>t.findDocumentColors(n.toString()))).then((t=>{if(t)return t.map((t=>({color:t.color,range:fr(t.range)})))}))}provideColorPresentations(t,r,n){const e=t.uri;return this._worker(e).then((t=>t.getColorPresentations(e.toString(),r.color,ar(r.range)))).then((t=>{if(t)return t.map((t=>{let r={label:t.label};return t.textEdit&&(r.textEdit=vr(t.textEdit)),t.additionalTextEdits&&(r.additionalTextEdits=t.additionalTextEdits.map(vr)),r}))}))}},_r=class{constructor(t){this._worker=t}provideFoldingRanges(t,r,n){const e=t.uri;return this._worker(e).then((t=>t.getFoldingRanges(e.toString(),r))).then((t=>{if(t)return t.map((t=>{const r={start:t.startLine+1,end:t.endLine+1};return void 0!==t.kind&&(r.kind=function(t){switch(t){case I.Comment:return o.languages.FoldingRangeKind.Comment;case I.Imports:return o.languages.FoldingRangeKind.Imports;case I.Region:return o.languages.FoldingRangeKind.Region}}(t.kind)),r}))}))}},Dr=class{constructor(t){this._worker=t}provideSelectionRanges(t,r,n){const e=t.uri;return this._worker(e).then((t=>t.getSelectionRanges(e.toString(),r.map(cr)))).then((t=>{if(t)return t.map((t=>{const r=[];for(;t;)r.push({range:fr(t.range)}),t=t.parent;return r}))}))}};function Rr(t){return 32===t||9===t||11===t||12===t||160===t||5760===t||t>=8192&&t<=8203||8239===t||8287===t||12288===t||65279===t}function Nr(t){return 10===t||13===t||8232===t||8233===t}function Lr(t){return t>=48&&t<=57}(Or||(Or={})).DEFAULT={allowTrailingComma:!1};function Wr(t){return{getInitialState:()=>new zr(null,null,!1,null),tokenize:(r,n)=>function(t,r,n,e=0){let i=0,o=!1;switch(n.scanError){case 2:r='"'+r,i=1;break;case 1:r="/*"+r,i=2}const u=function(t,r){void 0===r&&(r=!1);var n=t.length,e=0,i="",o=0,u=16,s=0,c=0,a=0,f=0,h=0;function v(r,n){for(var i=0,o=0;i<r||!n;){var u=t.charCodeAt(e);if(u>=48&&u<=57)o=16*o+u-48;else if(u>=65&&u<=70)o=16*o+u-65+10;else{if(!(u>=97&&u<=102))break;o=16*o+u-97+10}e++,i++}return i<r&&(o=-1),o}function d(){if(i="",h=0,o=e,c=s,f=a,e>=n)return o=n,u=17;var r=t.charCodeAt(e);if(Rr(r)){do{e++,i+=String.fromCharCode(r),r=t.charCodeAt(e)}while(Rr(r));return u=15}if(Nr(r))return e++,i+=String.fromCharCode(r),13===r&&10===t.charCodeAt(e)&&(e++,i+="\n"),s++,a=e,u=14;switch(r){case 123:return e++,u=1;case 125:return e++,u=2;case 91:return e++,u=3;case 93:return e++,u=4;case 58:return e++,u=6;case 44:return e++,u=5;case 34:return e++,i=function(){for(var r="",i=e;;){if(e>=n){r+=t.substring(i,e),h=2;break}var o=t.charCodeAt(e);if(34===o){r+=t.substring(i,e),e++;break}if(92!==o){if(o>=0&&o<=31){if(Nr(o)){r+=t.substring(i,e),h=2;break}h=6}e++}else{if(r+=t.substring(i,e),++e>=n){h=2;break}switch(t.charCodeAt(e++)){case 34:r+='"';break;case 92:r+="\\";break;case 47:r+="/";break;case 98:r+="\b";break;case 102:r+="\f";break;case 110:r+="\n";break;case 114:r+="\r";break;case 116:r+="\t";break;case 117:var u=v(4,!0);u>=0?r+=String.fromCharCode(u):h=4;break;default:h=5}i=e}}return r}(),u=10;case 47:var d=e-1;if(47===t.charCodeAt(e+1)){for(e+=2;e<n&&!Nr(t.charCodeAt(e));)e++;return i=t.substring(d,e),u=12}if(42===t.charCodeAt(e+1)){e+=2;for(var g=n-1,b=!1;e<g;){var m=t.charCodeAt(e);if(42===m&&47===t.charCodeAt(e+1)){e+=2,b=!0;break}e++,Nr(m)&&(13===m&&10===t.charCodeAt(e)&&e++,s++,a=e)}return b||(e++,h=1),i=t.substring(d,e),u=13}return i+=String.fromCharCode(r),e++,u=16;case 45:if(i+=String.fromCharCode(r),++e===n||!Lr(t.charCodeAt(e)))return u=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var r=e;if(48===t.charCodeAt(e))e++;else for(e++;e<t.length&&Lr(t.charCodeAt(e));)e++;if(e<t.length&&46===t.charCodeAt(e)){if(!(++e<t.length&&Lr(t.charCodeAt(e))))return h=3,t.substring(r,e);for(e++;e<t.length&&Lr(t.charCodeAt(e));)e++}var n=e;if(e<t.length&&(69===t.charCodeAt(e)||101===t.charCodeAt(e)))if((++e<t.length&&43===t.charCodeAt(e)||45===t.charCodeAt(e))&&e++,e<t.length&&Lr(t.charCodeAt(e))){for(e++;e<t.length&&Lr(t.charCodeAt(e));)e++;n=e}else h=3;return t.substring(r,n)}(),u=11;default:for(;e<n&&l(r);)e++,r=t.charCodeAt(e);if(o!==e){switch(i=t.substring(o,e)){case"true":return u=8;case"false":return u=9;case"null":return u=7}return u=16}return i+=String.fromCharCode(r),e++,u=16}}function l(t){if(Rr(t)||Nr(t))return!1;switch(t){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(t){e=t,i="",o=0,u=16,h=0},getPosition:function(){return e},scan:r?function(){var t;do{t=d()}while(t>=12&&t<=15);return t}:d,getToken:function(){return u},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return e-o},getTokenStartLine:function(){return c},getTokenStartCharacter:function(){return o-f},getTokenError:function(){return h}}}(r);let s=n.lastWasColon,c=n.parents;const a={tokens:[],endState:n.clone()};for(;;){let f=e+u.getPosition(),h="";const v=u.scan();if(17===v)break;if(f===e+u.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+r.substr(u.getPosition(),3));switch(o&&(f-=i),o=i>0,v){case 1:c=Ar.push(c,0),h="delimiter.bracket.json",s=!1;break;case 2:c=Ar.pop(c),h="delimiter.bracket.json",s=!1;break;case 3:c=Ar.push(c,1),h="delimiter.array.json",s=!1;break;case 4:c=Ar.pop(c),h="delimiter.array.json",s=!1;break;case 6:h="delimiter.colon.json",s=!0;break;case 5:h="delimiter.comma.json",s=!1;break;case 8:case 9:case 7:h="keyword.json",s=!1;break;case 10:const t=1===(c?c.type:0);h=s||t?"string.value.json":"string.key.json",s=!1;break;case 11:h="number.json",s=!1}if(t)switch(v){case 12:h="comment.line.json";break;case 13:h="comment.block.json"}a.endState=new zr(n.getStateData(),u.getTokenError(),s,c),a.tokens.push({startIndex:f,scopes:h})}return a}(t,r,n)}}var Ar=class{constructor(t,r){this.parent=t,this.type=r}static pop(t){return t?t.parent:null}static push(t,r){return new Ar(t,r)}static equals(t,r){if(!t&&!r)return!0;if(!t||!r)return!1;for(;t&&r;){if(t===r)return!0;if(t.type!==r.type)return!1;t=t.parent,r=r.parent}return!0}},zr=class{_state;scanError;lastWasColon;parents;constructor(t,r,n,e){this._state=t,this.scanError=r,this.lastWasColon=n,this.parents=e}clone(){return new zr(this._state,this.scanError,this.lastWasColon,this.parents)}equals(t){return t===this||!!(t&&t instanceof zr)&&this.scanError===t.scanError&&this.lastWasColon===t.lastWasColon&&Ar.equals(this.parents,t.parents)}getStateData(){return this._state}setStateData(t){this._state=t}},Mr=class extends or{constructor(t,r,n){super(t,r,n.onDidChange),this._disposables.push(o.editor.onWillDisposeModel((t=>{this._resetSchema(t.uri)}))),this._disposables.push(o.editor.onDidChangeModelLanguage((t=>{this._resetSchema(t.model.uri)})))}_resetSchema(t){this._worker().then((r=>{r.resetSchema(t.toString())}))}};function Pr(t){const r=[],n=[],e=new rt(t);r.push(e);const i=(...t)=>e.getLanguageServiceWorker(...t);function u(){const{languageId:r,modeConfiguration:e}=t;Fr(n),e.documentFormattingEdits&&n.push(o.languages.registerDocumentFormattingEditProvider(r,new yr(i))),e.documentRangeFormattingEdits&&n.push(o.languages.registerDocumentRangeFormattingEditProvider(r,new Tr(i))),e.completionItems&&n.push(o.languages.registerCompletionItemProvider(r,new sr(i,[" ",":",'"']))),e.hovers&&n.push(o.languages.registerHoverProvider(r,new dr(i))),e.documentSymbols&&n.push(o.languages.registerDocumentSymbolProvider(r,new xr(i))),e.tokens&&n.push(o.languages.setTokensProvider(r,Wr(!0))),e.colors&&n.push(o.languages.registerColorProvider(r,new Cr(i))),e.foldingRanges&&n.push(o.languages.registerFoldingRangeProvider(r,new _r(i))),e.diagnostics&&n.push(new Mr(r,i,t)),e.selectionRanges&&n.push(o.languages.registerSelectionRangeProvider(r,new Dr(i)))}u(),r.push(o.languages.setLanguageConfiguration(t.languageId,Ur));let s=t.modeConfiguration;return t.onDidChange((t=>{t.modeConfiguration!==s&&(s=t.modeConfiguration,u())})),r.push(qr(n)),qr(r)}function qr(t){return{dispose:()=>Fr(t)}}function Fr(t){for(;t.length;)t.pop().dispose()}var Ur={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]};export{sr as CompletionAdapter,wr as DefinitionAdapter,or as DiagnosticsAdapter,Cr as DocumentColorAdapter,yr as DocumentFormattingEditProvider,br as DocumentHighlightAdapter,Ir as DocumentLinkAdapter,Tr as DocumentRangeFormattingEditProvider,xr as DocumentSymbolAdapter,_r as FoldingRangeAdapter,dr as HoverAdapter,pr as ReferenceAdapter,jr as RenameAdapter,Dr as SelectionRangeAdapter,rt as WorkerManager,cr as fromPosition,ar as fromRange,Pr as setupMode,fr as toRange,vr as toTextEdit}