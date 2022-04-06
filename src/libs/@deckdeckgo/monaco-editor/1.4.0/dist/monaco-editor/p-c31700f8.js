import{m as t}from"./p-6ba3caeb.js";import"./p-cc2422b9.js";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,e=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,o={};((t,o,u,s)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let u of e(o))i.call(t,u)||"default"===u||n(t,u,{get:()=>o[u],enumerable:!(s=r(o,u))||s.enumerable})})(o,t);var u,s,c,a,f,h,v,d,l,g,w,m,b,p,j,x,k,y,I,O,E,_,S,T,C,D,R,N,W,L,A,M,z,F,U,H,$,q,P,V,B,G,J,K,Q,X,Y,Z,tt,nt=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(t){this._defaults=t,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=o.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...t){let n;return this._getClient().then((t=>{n=t})).then((()=>{if(this._worker)return this._worker.withSyncedResources(t)})).then((()=>n))}};(s=u||(u={})).MIN_VALUE=-2147483648,s.MAX_VALUE=2147483647,(a=c||(c={})).MIN_VALUE=0,a.MAX_VALUE=2147483647,(h=f||(f={})).create=function(t,n){return t===Number.MAX_VALUE&&(t=c.MAX_VALUE),n===Number.MAX_VALUE&&(n=c.MAX_VALUE),{line:t,character:n}},h.is=function(t){var n=t;return nn.objectLiteral(n)&&nn.uinteger(n.line)&&nn.uinteger(n.character)},(d=v||(v={})).create=function(t,n,r,e){if(nn.uinteger(t)&&nn.uinteger(n)&&nn.uinteger(r)&&nn.uinteger(e))return{start:f.create(t,n),end:f.create(r,e)};if(f.is(t)&&f.is(n))return{start:t,end:n};throw new Error("Range#create called with invalid arguments["+t+", "+n+", "+r+", "+e+"]")},d.is=function(t){var n=t;return nn.objectLiteral(n)&&f.is(n.start)&&f.is(n.end)},(g=l||(l={})).create=function(t,n){return{uri:t,range:n}},g.is=function(t){var n=t;return nn.defined(n)&&v.is(n.range)&&(nn.string(n.uri)||nn.undefined(n.uri))},(m=w||(w={})).create=function(t,n,r,e){return{targetUri:t,targetRange:n,targetSelectionRange:r,originSelectionRange:e}},m.is=function(t){var n=t;return nn.defined(n)&&v.is(n.targetRange)&&nn.string(n.targetUri)&&(v.is(n.targetSelectionRange)||nn.undefined(n.targetSelectionRange))&&(v.is(n.originSelectionRange)||nn.undefined(n.originSelectionRange))},(p=b||(b={})).create=function(t,n,r,e){return{red:t,green:n,blue:r,alpha:e}},p.is=function(t){var n=t;return nn.numberRange(n.red,0,1)&&nn.numberRange(n.green,0,1)&&nn.numberRange(n.blue,0,1)&&nn.numberRange(n.alpha,0,1)},(x=j||(j={})).create=function(t,n){return{range:t,color:n}},x.is=function(t){var n=t;return v.is(n.range)&&b.is(n.color)},(y=k||(k={})).create=function(t,n,r){return{label:t,textEdit:n,additionalTextEdits:r}},y.is=function(t){var n=t;return nn.string(n.label)&&(nn.undefined(n.textEdit)||F.is(n))&&(nn.undefined(n.additionalTextEdits)||nn.typedArray(n.additionalTextEdits,F.is))},(O=I||(I={})).Comment="comment",O.Imports="imports",O.Region="region",(_=E||(E={})).create=function(t,n,r,e,i){var o={startLine:t,endLine:n};return nn.defined(r)&&(o.startCharacter=r),nn.defined(e)&&(o.endCharacter=e),nn.defined(i)&&(o.kind=i),o},_.is=function(t){var n=t;return nn.uinteger(n.startLine)&&nn.uinteger(n.startLine)&&(nn.undefined(n.startCharacter)||nn.uinteger(n.startCharacter))&&(nn.undefined(n.endCharacter)||nn.uinteger(n.endCharacter))&&(nn.undefined(n.kind)||nn.string(n.kind))},(T=S||(S={})).create=function(t,n){return{location:t,message:n}},T.is=function(t){var n=t;return nn.defined(n)&&l.is(n.location)&&nn.string(n.message)},(D=C||(C={})).Error=1,D.Warning=2,D.Information=3,D.Hint=4,(N=R||(R={})).Unnecessary=1,N.Deprecated=2,(W||(W={})).is=function(t){return null!=t&&nn.string(t.href)},(A=L||(L={})).create=function(t,n,r,e,i,o){var u={range:t,message:n};return nn.defined(r)&&(u.severity=r),nn.defined(e)&&(u.code=e),nn.defined(i)&&(u.source=i),nn.defined(o)&&(u.relatedInformation=o),u},A.is=function(t){var n,r=t;return nn.defined(r)&&v.is(r.range)&&nn.string(r.message)&&(nn.number(r.severity)||nn.undefined(r.severity))&&(nn.integer(r.code)||nn.string(r.code)||nn.undefined(r.code))&&(nn.undefined(r.codeDescription)||nn.string(null===(n=r.codeDescription)||void 0===n?void 0:n.href))&&(nn.string(r.source)||nn.undefined(r.source))&&(nn.undefined(r.relatedInformation)||nn.typedArray(r.relatedInformation,S.is))},(z=M||(M={})).create=function(t,n){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var i={title:t,command:n};return nn.defined(r)&&r.length>0&&(i.arguments=r),i},z.is=function(t){var n=t;return nn.defined(n)&&nn.string(n.title)&&nn.string(n.command)},(U=F||(F={})).replace=function(t,n){return{range:t,newText:n}},U.insert=function(t,n){return{range:{start:t,end:t},newText:n}},U.del=function(t){return{range:t,newText:""}},U.is=function(t){var n=t;return nn.objectLiteral(n)&&nn.string(n.newText)&&v.is(n.range)},($=H||(H={})).create=function(t,n,r){var e={label:t};return void 0!==n&&(e.needsConfirmation=n),void 0!==r&&(e.description=r),e},$.is=function(t){var n=t;return void 0!==n&&nn.objectLiteral(n)&&nn.string(n.label)&&(nn.boolean(n.needsConfirmation)||void 0===n.needsConfirmation)&&(nn.string(n.description)||void 0===n.description)},(q||(q={})).is=function(t){return"string"==typeof t},(V=P||(P={})).replace=function(t,n,r){return{range:t,newText:n,annotationId:r}},V.insert=function(t,n,r){return{range:{start:t,end:t},newText:n,annotationId:r}},V.del=function(t,n){return{range:t,newText:"",annotationId:n}},V.is=function(t){var n=t;return F.is(n)&&(H.is(n.annotationId)||q.is(n.annotationId))},(G=B||(B={})).create=function(t,n){return{textDocument:t,edits:n}},G.is=function(t){var n=t;return nn.defined(n)&&ut.is(n.textDocument)&&Array.isArray(n.edits)},(K=J||(J={})).create=function(t,n,r){var e={kind:"create",uri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(e.options=n),void 0!==r&&(e.annotationId=r),e},K.is=function(t){var n=t;return n&&"create"===n.kind&&nn.string(n.uri)&&(void 0===n.options||(void 0===n.options.overwrite||nn.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||nn.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||q.is(n.annotationId))},(X=Q||(Q={})).create=function(t,n,r,e){var i={kind:"rename",oldUri:t,newUri:n};return void 0===r||void 0===r.overwrite&&void 0===r.ignoreIfExists||(i.options=r),void 0!==e&&(i.annotationId=e),i},X.is=function(t){var n=t;return n&&"rename"===n.kind&&nn.string(n.oldUri)&&nn.string(n.newUri)&&(void 0===n.options||(void 0===n.options.overwrite||nn.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||nn.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||q.is(n.annotationId))},(Z=Y||(Y={})).create=function(t,n,r){var e={kind:"delete",uri:t};return void 0===n||void 0===n.recursive&&void 0===n.ignoreIfNotExists||(e.options=n),void 0!==r&&(e.annotationId=r),e},Z.is=function(t){var n=t;return n&&"delete"===n.kind&&nn.string(n.uri)&&(void 0===n.options||(void 0===n.options.recursive||nn.boolean(n.options.recursive))&&(void 0===n.options.ignoreIfNotExists||nn.boolean(n.options.ignoreIfNotExists)))&&(void 0===n.annotationId||q.is(n.annotationId))},(tt||(tt={})).is=function(t){return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(t){return nn.string(t.kind)?J.is(t)||Q.is(t)||Y.is(t):B.is(t)})))};var rt,et,it,ot,ut,st,ct,at,ft,ht,vt,dt,lt,gt,wt,mt,bt,pt,jt,xt,kt,yt,It,Ot,Et,_t,St,Tt,Ct,Dt,Rt,Nt,Wt,Lt,At,Mt,zt,Ft,Ut,Ht,$t,qt,Pt,Vt,Bt,Gt,Jt,Kt,Qt,Xt,Yt,Zt=function(){function t(t,n){this.edits=t,this.changeAnnotations=n}return t.prototype.insert=function(t,n,r){var e,i;if(void 0===r?e=F.insert(t,n):q.is(r)?(i=r,e=P.insert(t,n,r)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(r),e=P.insert(t,n,i)),this.edits.push(e),void 0!==i)return i},t.prototype.replace=function(t,n,r){var e,i;if(void 0===r?e=F.replace(t,n):q.is(r)?(i=r,e=P.replace(t,n,r)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(r),e=P.replace(t,n,i)),this.edits.push(e),void 0!==i)return i},t.prototype.delete=function(t,n){var r,e;if(void 0===n?r=F.del(t):q.is(n)?(e=n,r=P.del(t,n)):(this.assertChangeAnnotations(this.changeAnnotations),e=this.changeAnnotations.manage(n),r=P.del(t,e)),this.edits.push(r),void 0!==e)return e},t.prototype.add=function(t){this.edits.push(t)},t.prototype.all=function(){return this.edits},t.prototype.clear=function(){this.edits.splice(0,this.edits.length)},t.prototype.assertChangeAnnotations=function(t){if(void 0===t)throw new Error("Text edit change is not configured to manage change annotations.")},t}(),tn=function(){function t(t){this._annotations=void 0===t?Object.create(null):t,this._counter=0,this._size=0}return t.prototype.all=function(){return this._annotations},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),t.prototype.manage=function(t,n){var r;if(q.is(t)?r=t:(r=this.nextId(),n=t),void 0!==this._annotations[r])throw new Error("Id "+r+" is already in use.");if(void 0===n)throw new Error("No annotation provided for id "+r);return this._annotations[r]=n,this._size++,r},t.prototype.nextId=function(){return this._counter++,this._counter.toString()},t}();!function(){function t(t){var n=this;this._textEditChanges=Object.create(null),void 0!==t?(this._workspaceEdit=t,t.documentChanges?(this._changeAnnotations=new tn(t.changeAnnotations),t.changeAnnotations=this._changeAnnotations.all(),t.documentChanges.forEach((function(t){if(B.is(t)){var r=new Zt(t.edits,n._changeAnnotations);n._textEditChanges[t.textDocument.uri]=r}}))):t.changes&&Object.keys(t.changes).forEach((function(r){var e=new Zt(t.changes[r]);n._textEditChanges[r]=e}))):this._workspaceEdit={}}Object.defineProperty(t.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(this._workspaceEdit.changeAnnotations=0===this._changeAnnotations.size?void 0:this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),t.prototype.getTextEditChange=function(t){if(ut.is(t)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var n={uri:t.uri,version:t.version};return(r=this._textEditChanges[n.uri])||(this._workspaceEdit.documentChanges.push({textDocument:n,edits:e=[]}),r=new Zt(e,this._changeAnnotations),this._textEditChanges[n.uri]=r),r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r,e;return(r=this._textEditChanges[t])||(this._workspaceEdit.changes[t]=e=[],r=new Zt(e),this._textEditChanges[t]=r),r},t.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new tn,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},t.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},t.prototype.createFile=function(t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var e,i,o;if(H.is(n)||q.is(n)?e=n:r=n,void 0===e?i=J.create(t,r):(o=q.is(e)?e:this._changeAnnotations.manage(e),i=J.create(t,r,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},t.prototype.renameFile=function(t,n,r,e){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,u;if(H.is(r)||q.is(r)?i=r:e=r,void 0===i?o=Q.create(t,n,e):(u=q.is(i)?i:this._changeAnnotations.manage(i),o=Q.create(t,n,e,u)),this._workspaceEdit.documentChanges.push(o),void 0!==u)return u},t.prototype.deleteFile=function(t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var e,i,o;if(H.is(n)||q.is(n)?e=n:r=n,void 0===e?i=Y.create(t,r):(o=q.is(e)?e:this._changeAnnotations.manage(e),i=Y.create(t,r,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(et=rt||(rt={})).create=function(t){return{uri:t}},et.is=function(t){var n=t;return nn.defined(n)&&nn.string(n.uri)},(ot=it||(it={})).create=function(t,n){return{uri:t,version:n}},ot.is=function(t){var n=t;return nn.defined(n)&&nn.string(n.uri)&&nn.integer(n.version)},(st=ut||(ut={})).create=function(t,n){return{uri:t,version:n}},st.is=function(t){var n=t;return nn.defined(n)&&nn.string(n.uri)&&(null===n.version||nn.integer(n.version))},(at=ct||(ct={})).create=function(t,n,r,e){return{uri:t,languageId:n,version:r,text:e}},at.is=function(t){var n=t;return nn.defined(n)&&nn.string(n.uri)&&nn.string(n.languageId)&&nn.integer(n.version)&&nn.string(n.text)},(ht=ft||(ft={})).PlainText="plaintext",ht.Markdown="markdown",function(t){t.is=function(n){return n===t.PlainText||n===t.Markdown}}(ft||(ft={})),(vt||(vt={})).is=function(t){var n=t;return nn.objectLiteral(t)&&ft.is(n.kind)&&nn.string(n.value)},(lt=dt||(dt={})).Text=1,lt.Method=2,lt.Function=3,lt.Constructor=4,lt.Field=5,lt.Variable=6,lt.Class=7,lt.Interface=8,lt.Module=9,lt.Property=10,lt.Unit=11,lt.Value=12,lt.Enum=13,lt.Keyword=14,lt.Snippet=15,lt.Color=16,lt.File=17,lt.Reference=18,lt.Folder=19,lt.EnumMember=20,lt.Constant=21,lt.Struct=22,lt.Event=23,lt.Operator=24,lt.TypeParameter=25,(wt=gt||(gt={})).PlainText=1,wt.Snippet=2,(mt||(mt={})).Deprecated=1,(pt=bt||(bt={})).create=function(t,n,r){return{newText:t,insert:n,replace:r}},pt.is=function(t){var n=t;return n&&nn.string(n.newText)&&v.is(n.insert)&&v.is(n.replace)},(xt=jt||(jt={})).asIs=1,xt.adjustIndentation=2,(kt||(kt={})).create=function(t){return{label:t}},(yt||(yt={})).create=function(t,n){return{items:t||[],isIncomplete:!!n}},(Ot=It||(It={})).fromPlainText=function(t){return t.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Ot.is=function(t){var n=t;return nn.string(n)||nn.objectLiteral(n)&&nn.string(n.language)&&nn.string(n.value)},(Et||(Et={})).is=function(t){var n=t;return!!n&&nn.objectLiteral(n)&&(vt.is(n.contents)||It.is(n.contents)||nn.typedArray(n.contents,It.is))&&(void 0===t.range||v.is(t.range))},(_t||(_t={})).create=function(t,n){return n?{label:t,documentation:n}:{label:t}},(St||(St={})).create=function(t,n){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var i={label:t};return nn.defined(n)&&(i.documentation=n),i.parameters=nn.defined(r)?r:[],i},(Ct=Tt||(Tt={})).Text=1,Ct.Read=2,Ct.Write=3,(Dt||(Dt={})).create=function(t,n){var r={range:t};return nn.number(n)&&(r.kind=n),r},(Nt=Rt||(Rt={})).File=1,Nt.Module=2,Nt.Namespace=3,Nt.Package=4,Nt.Class=5,Nt.Method=6,Nt.Property=7,Nt.Field=8,Nt.Constructor=9,Nt.Enum=10,Nt.Interface=11,Nt.Function=12,Nt.Variable=13,Nt.Constant=14,Nt.String=15,Nt.Number=16,Nt.Boolean=17,Nt.Array=18,Nt.Object=19,Nt.Key=20,Nt.Null=21,Nt.EnumMember=22,Nt.Struct=23,Nt.Event=24,Nt.Operator=25,Nt.TypeParameter=26,(Wt||(Wt={})).Deprecated=1,(Lt||(Lt={})).create=function(t,n,r,e,i){var o={name:t,kind:n,location:{uri:e,range:r}};return i&&(o.containerName=i),o},(Mt=At||(At={})).create=function(t,n,r,e,i,o){var u={name:t,detail:n,kind:r,range:e,selectionRange:i};return void 0!==o&&(u.children=o),u},Mt.is=function(t){var n=t;return n&&nn.string(n.name)&&nn.number(n.kind)&&v.is(n.range)&&v.is(n.selectionRange)&&(void 0===n.detail||nn.string(n.detail))&&(void 0===n.deprecated||nn.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))&&(void 0===n.tags||Array.isArray(n.tags))},(Ft=zt||(zt={})).Empty="",Ft.QuickFix="quickfix",Ft.Refactor="refactor",Ft.RefactorExtract="refactor.extract",Ft.RefactorInline="refactor.inline",Ft.RefactorRewrite="refactor.rewrite",Ft.Source="source",Ft.SourceOrganizeImports="source.organizeImports",Ft.SourceFixAll="source.fixAll",(Ht=Ut||(Ut={})).create=function(t,n){var r={diagnostics:t};return null!=n&&(r.only=n),r},Ht.is=function(t){var n=t;return nn.defined(n)&&nn.typedArray(n.diagnostics,L.is)&&(void 0===n.only||nn.typedArray(n.only,nn.string))},(qt=$t||($t={})).create=function(t,n,r){var e={title:t},i=!0;return"string"==typeof n?(i=!1,e.kind=n):M.is(n)?e.command=n:e.edit=n,i&&void 0!==r&&(e.kind=r),e},qt.is=function(t){var n=t;return n&&nn.string(n.title)&&(void 0===n.diagnostics||nn.typedArray(n.diagnostics,L.is))&&(void 0===n.kind||nn.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||M.is(n.command))&&(void 0===n.isPreferred||nn.boolean(n.isPreferred))&&(void 0===n.edit||tt.is(n.edit))},(Vt=Pt||(Pt={})).create=function(t,n){var r={range:t};return nn.defined(n)&&(r.data=n),r},Vt.is=function(t){var n=t;return nn.defined(n)&&v.is(n.range)&&(nn.undefined(n.command)||M.is(n.command))},(Gt=Bt||(Bt={})).create=function(t,n){return{tabSize:t,insertSpaces:n}},Gt.is=function(t){var n=t;return nn.defined(n)&&nn.uinteger(n.tabSize)&&nn.boolean(n.insertSpaces)},(Kt=Jt||(Jt={})).create=function(t,n,r){return{range:t,target:n,data:r}},Kt.is=function(t){var n=t;return nn.defined(n)&&v.is(n.range)&&(nn.undefined(n.target)||nn.string(n.target))},(Xt=Qt||(Qt={})).create=function(t,n){return{range:t,parent:n}},Xt.is=function(t){var n=t;return void 0!==n&&v.is(n.range)&&(void 0===n.parent||Xt.is(n.parent))},function(t){function n(t,r){if(t.length<=1)return t;var e=t.length/2|0,i=t.slice(0,e),o=t.slice(e);n(i,r),n(o,r);for(var u=0,s=0,c=0;u<i.length&&s<o.length;){var a=r(i[u],o[s]);t[c++]=a<=0?i[u++]:o[s++]}for(;u<i.length;)t[c++]=i[u++];for(;s<o.length;)t[c++]=o[s++];return t}t.create=function(t,n,r,e){return new on(t,n,r,e)},t.is=function(t){var n=t;return!!(nn.defined(n)&&nn.string(n.uri)&&(nn.undefined(n.languageId)||nn.string(n.languageId))&&nn.uinteger(n.lineCount)&&nn.func(n.getText)&&nn.func(n.positionAt)&&nn.func(n.offsetAt))},t.applyEdits=function(t,r){for(var e=t.getText(),i=n(r,(function(t,n){var r=t.range.start.line-n.range.start.line;return 0===r?t.range.start.character-n.range.start.character:r})),o=e.length,u=i.length-1;u>=0;u--){var s=i[u],c=t.offsetAt(s.range.start),a=t.offsetAt(s.range.end);if(!(a<=o))throw new Error("Overlapping edit");e=e.substring(0,c)+s.newText+e.substring(a,e.length),o=c}return e}}(Yt||(Yt={}));var nn,rn,en,on=function(){function t(t,n,r,e){this._uri=t,this._languageId=n,this._version=r,this._content=e,this._lineOffsets=void 0}return Object.defineProperty(t.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),t.prototype.getText=function(t){if(t){var n=this.offsetAt(t.start),r=this.offsetAt(t.end);return this._content.substring(n,r)}return this._content},t.prototype.update=function(t,n){this._content=t.text,this._version=n,this._lineOffsets=void 0},t.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var t=[],n=this._content,r=!0,e=0;e<n.length;e++){r&&(t.push(e),r=!1);var i=n.charAt(e);r="\r"===i||"\n"===i,"\r"===i&&e+1<n.length&&"\n"===n.charAt(e+1)&&e++}r&&n.length>0&&t.push(n.length),this._lineOffsets=t}return this._lineOffsets},t.prototype.positionAt=function(t){t=Math.max(Math.min(t,this._content.length),0);var n=this.getLineOffsets(),r=0,e=n.length;if(0===e)return f.create(0,t);for(;r<e;){var i=Math.floor((r+e)/2);n[i]>t?e=i:r=i+1}var o=r-1;return f.create(o,t-n[o])},t.prototype.offsetAt=function(t){var n=this.getLineOffsets();if(t.line>=n.length)return this._content.length;if(t.line<0)return 0;var r=n[t.line];return Math.max(Math.min(r+t.character,t.line+1<n.length?n[t.line+1]:this._content.length),r)},Object.defineProperty(t.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),t}();rn=nn||(nn={}),en=Object.prototype.toString,rn.defined=function(t){return void 0!==t},rn.undefined=function(t){return void 0===t},rn.boolean=function(t){return!0===t||!1===t},rn.string=function(t){return"[object String]"===en.call(t)},rn.number=function(t){return"[object Number]"===en.call(t)},rn.numberRange=function(t,n,r){return"[object Number]"===en.call(t)&&n<=t&&t<=r},rn.integer=function(t){return"[object Number]"===en.call(t)&&-2147483648<=t&&t<=2147483647},rn.uinteger=function(t){return"[object Number]"===en.call(t)&&0<=t&&t<=2147483647},rn.func=function(t){return"[object Function]"===en.call(t)},rn.objectLiteral=function(t){return null!==t&&"object"==typeof t},rn.typedArray=function(t,n){return Array.isArray(t)&&t.every(n)};var un=class{constructor(t,n,r){this._languageId=t,this._worker=n;const e=t=>{let n,r=t.getLanguageId();r===this._languageId&&(this._listener[t.uri.toString()]=t.onDidChangeContent((()=>{window.clearTimeout(n),n=window.setTimeout((()=>this._doValidate(t.uri,r)),500)})),this._doValidate(t.uri,r))},i=t=>{o.editor.setModelMarkers(t,this._languageId,[]);let n=t.uri.toString(),r=this._listener[n];r&&(r.dispose(),delete this._listener[n])};this._disposables.push(o.editor.onDidCreateModel(e)),this._disposables.push(o.editor.onWillDisposeModel(i)),this._disposables.push(o.editor.onDidChangeModelLanguage((t=>{i(t.model),e(t.model)}))),this._disposables.push(r((()=>{o.editor.getModels().forEach((t=>{t.getLanguageId()===this._languageId&&(i(t),e(t))}))}))),this._disposables.push({dispose:()=>{o.editor.getModels().forEach(i);for(let t in this._listener)this._listener[t].dispose()}}),o.editor.getModels().forEach(e)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((t=>t&&t.dispose())),this._disposables.length=0}_doValidate(t,n){this._worker(t).then((n=>n.doValidation(t.toString()))).then((r=>{const e=r.map((t=>function(t,n){let r="number"==typeof n.code?String(n.code):n.code;return{severity:sn(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:r,source:n.source}}(0,t)));let i=o.editor.getModel(t);i&&i.getLanguageId()===n&&o.editor.setModelMarkers(i,n,e)})).then(void 0,(t=>{console.error(t)}))}};function sn(t){switch(t){case C.Error:return o.MarkerSeverity.Error;case C.Warning:return o.MarkerSeverity.Warning;case C.Information:return o.MarkerSeverity.Info;case C.Hint:return o.MarkerSeverity.Hint;default:return o.MarkerSeverity.Info}}var cn=class{constructor(t,n){this._worker=t,this._triggerCharacters=n}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(t,n,r,e){const i=t.uri;return this._worker(i).then((t=>t.doComplete(i.toString(),an(n)))).then((r=>{if(!r)return;const e=t.getWordUntilPosition(n),i=new o.Range(n.lineNumber,e.startColumn,n.lineNumber,e.endColumn),u=r.items.map((t=>{const n={label:t.label,insertText:t.insertText||t.label,sortText:t.sortText,filterText:t.filterText,documentation:t.documentation,detail:t.detail,command:(r=t.command,r&&"editor.action.triggerSuggest"===r.command?{id:r.command,title:r.title,arguments:r.arguments}:void 0),range:i,kind:vn(t.kind)};var r,e;return t.textEdit&&(n.range=void 0!==(e=t.textEdit).insert&&void 0!==e.replace?{insert:hn(t.textEdit.insert),replace:hn(t.textEdit.replace)}:hn(t.textEdit.range),n.insertText=t.textEdit.newText),t.additionalTextEdits&&(n.additionalTextEdits=t.additionalTextEdits.map(dn)),t.insertTextFormat===gt.Snippet&&(n.insertTextRules=o.languages.CompletionItemInsertTextRule.InsertAsSnippet),n}));return{isIncomplete:r.isIncomplete,suggestions:u}}))}};function an(t){if(t)return{character:t.column-1,line:t.lineNumber-1}}function fn(t){if(t)return{start:{line:t.startLineNumber-1,character:t.startColumn-1},end:{line:t.endLineNumber-1,character:t.endColumn-1}}}function hn(t){if(t)return new o.Range(t.start.line+1,t.start.character+1,t.end.line+1,t.end.character+1)}function vn(t){const n=o.languages.CompletionItemKind;switch(t){case dt.Text:return n.Text;case dt.Method:return n.Method;case dt.Function:return n.Function;case dt.Constructor:return n.Constructor;case dt.Field:return n.Field;case dt.Variable:return n.Variable;case dt.Class:return n.Class;case dt.Interface:return n.Interface;case dt.Module:return n.Module;case dt.Property:return n.Property;case dt.Unit:return n.Unit;case dt.Value:return n.Value;case dt.Enum:return n.Enum;case dt.Keyword:return n.Keyword;case dt.Snippet:return n.Snippet;case dt.Color:return n.Color;case dt.File:return n.File;case dt.Reference:return n.Reference}return n.Property}function dn(t){if(t)return{range:hn(t.range),text:t.newText}}var ln=class{constructor(t){this._worker=t}provideHover(t,n,r){let e=t.uri;return this._worker(e).then((t=>t.doHover(e.toString(),an(n)))).then((t=>{if(t)return{range:hn(t.range),contents:wn(t.contents)}}))}};function gn(t){return"string"==typeof t?{value:t}:(n=t)&&"object"==typeof n&&"string"==typeof n.kind?"plaintext"===t.kind?{value:t.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:t.value}:{value:"```"+t.language+"\n"+t.value+"\n```\n"};var n}function wn(t){if(t)return Array.isArray(t)?t.map(gn):[gn(t)]}var mn=class{constructor(t){this._worker=t}provideDocumentHighlights(t,n,r){const e=t.uri;return this._worker(e).then((t=>t.findDocumentHighlights(e.toString(),an(n)))).then((t=>{if(t)return t.map((t=>({range:hn(t.range),kind:bn(t.kind)})))}))}};function bn(t){switch(t){case Tt.Read:return o.languages.DocumentHighlightKind.Read;case Tt.Write:return o.languages.DocumentHighlightKind.Write;case Tt.Text:return o.languages.DocumentHighlightKind.Text}return o.languages.DocumentHighlightKind.Text}var pn=class{constructor(t){this._worker=t}provideDefinition(t,n,r){const e=t.uri;return this._worker(e).then((t=>t.findDefinition(e.toString(),an(n)))).then((t=>{if(t)return[jn(t)]}))}};function jn(t){return{uri:o.Uri.parse(t.uri),range:hn(t.range)}}var xn=class{constructor(t){this._worker=t}provideReferences(t,n,r,e){const i=t.uri;return this._worker(i).then((t=>t.findReferences(i.toString(),an(n)))).then((t=>{if(t)return t.map(jn)}))}},kn=class{constructor(t){this._worker=t}provideRenameEdits(t,n,r,e){const i=t.uri;return this._worker(i).then((t=>t.doRename(i.toString(),an(n),r))).then((t=>function(t){if(!t||!t.changes)return;let n=[];for(let r in t.changes){const e=o.Uri.parse(r);for(let i of t.changes[r])n.push({resource:e,edit:{range:hn(i.range),text:i.newText}})}return{edits:n}}(t)))}},yn=class{constructor(t){this._worker=t}provideDocumentSymbols(t,n){const r=t.uri;return this._worker(r).then((t=>t.findDocumentSymbols(r.toString()))).then((t=>{if(t)return t.map((t=>({name:t.name,detail:"",containerName:t.containerName,kind:In(t.kind),range:hn(t.location.range),selectionRange:hn(t.location.range),tags:[]})))}))}};function In(t){let n=o.languages.SymbolKind;switch(t){case Rt.File:return n.Array;case Rt.Module:return n.Module;case Rt.Namespace:return n.Namespace;case Rt.Package:return n.Package;case Rt.Class:return n.Class;case Rt.Method:return n.Method;case Rt.Property:return n.Property;case Rt.Field:return n.Field;case Rt.Constructor:return n.Constructor;case Rt.Enum:return n.Enum;case Rt.Interface:return n.Interface;case Rt.Function:return n.Function;case Rt.Variable:return n.Variable;case Rt.Constant:return n.Constant;case Rt.String:return n.String;case Rt.Number:return n.Number;case Rt.Boolean:return n.Boolean;case Rt.Array:return n.Array}return n.Function}var On=class{constructor(t){this._worker=t}provideLinks(t,n){const r=t.uri;return this._worker(r).then((t=>t.findDocumentLinks(r.toString()))).then((t=>{if(t)return{links:t.map((t=>({range:hn(t.range),url:t.target})))}}))}},En=class{constructor(t){this._worker=t}provideDocumentFormattingEdits(t,n,r){const e=t.uri;return this._worker(e).then((t=>t.format(e.toString(),null,Sn(n)).then((t=>{if(t&&0!==t.length)return t.map(dn)}))))}},_n=class{constructor(t){this._worker=t}provideDocumentRangeFormattingEdits(t,n,r,e){const i=t.uri;return this._worker(i).then((t=>t.format(i.toString(),fn(n),Sn(r)).then((t=>{if(t&&0!==t.length)return t.map(dn)}))))}};function Sn(t){return{tabSize:t.tabSize,insertSpaces:t.insertSpaces}}var Tn=class{constructor(t){this._worker=t}provideDocumentColors(t,n){const r=t.uri;return this._worker(r).then((t=>t.findDocumentColors(r.toString()))).then((t=>{if(t)return t.map((t=>({color:t.color,range:hn(t.range)})))}))}provideColorPresentations(t,n,r){const e=t.uri;return this._worker(e).then((t=>t.getColorPresentations(e.toString(),n.color,fn(n.range)))).then((t=>{if(t)return t.map((t=>{let n={label:t.label};return t.textEdit&&(n.textEdit=dn(t.textEdit)),t.additionalTextEdits&&(n.additionalTextEdits=t.additionalTextEdits.map(dn)),n}))}))}},Cn=class{constructor(t){this._worker=t}provideFoldingRanges(t,n,r){const e=t.uri;return this._worker(e).then((t=>t.getFoldingRanges(e.toString(),n))).then((t=>{if(t)return t.map((t=>{const n={start:t.startLine+1,end:t.endLine+1};return void 0!==t.kind&&(n.kind=function(t){switch(t){case I.Comment:return o.languages.FoldingRangeKind.Comment;case I.Imports:return o.languages.FoldingRangeKind.Imports;case I.Region:return o.languages.FoldingRangeKind.Region}}(t.kind)),n}))}))}},Dn=class{constructor(t){this._worker=t}provideSelectionRanges(t,n,r){const e=t.uri;return this._worker(e).then((t=>t.getSelectionRanges(e.toString(),n.map(an)))).then((t=>{if(t)return t.map((t=>{const n=[];for(;t;)n.push({range:hn(t.range)}),t=t.parent;return n}))}))}},Rn=class extends cn{constructor(t){super(t,[".",":","<",'"',"=","/"])}};function Nn(t){const n=new nt(t),r=(...t)=>n.getLanguageServiceWorker(...t);let e=t.languageId;o.languages.registerCompletionItemProvider(e,new Rn(r)),o.languages.registerHoverProvider(e,new ln(r)),o.languages.registerDocumentHighlightProvider(e,new mn(r)),o.languages.registerLinkProvider(e,new On(r)),o.languages.registerFoldingRangeProvider(e,new Cn(r)),o.languages.registerDocumentSymbolProvider(e,new yn(r)),o.languages.registerSelectionRangeProvider(e,new Dn(r)),o.languages.registerRenameProvider(e,new kn(r)),"html"===e&&(o.languages.registerDocumentFormattingEditProvider(e,new En(r)),o.languages.registerDocumentRangeFormattingEditProvider(e,new _n(r)))}function Wn(t){const n=[],r=[],e=new nt(t);n.push(e);const i=(...t)=>e.getLanguageServiceWorker(...t);return function(){const{languageId:n,modeConfiguration:e}=t;An(r),e.completionItems&&r.push(o.languages.registerCompletionItemProvider(n,new Rn(i))),e.hovers&&r.push(o.languages.registerHoverProvider(n,new ln(i))),e.documentHighlights&&r.push(o.languages.registerDocumentHighlightProvider(n,new mn(i))),e.links&&r.push(o.languages.registerLinkProvider(n,new On(i))),e.documentSymbols&&r.push(o.languages.registerDocumentSymbolProvider(n,new yn(i))),e.rename&&r.push(o.languages.registerRenameProvider(n,new kn(i))),e.foldingRanges&&r.push(o.languages.registerFoldingRangeProvider(n,new Cn(i))),e.selectionRanges&&r.push(o.languages.registerSelectionRangeProvider(n,new Dn(i))),e.documentFormattingEdits&&r.push(o.languages.registerDocumentFormattingEditProvider(n,new En(i))),e.documentRangeFormattingEdits&&r.push(o.languages.registerDocumentRangeFormattingEditProvider(n,new _n(i)))}(),n.push(Ln(r)),Ln(n)}function Ln(t){return{dispose:()=>An(t)}}function An(t){for(;t.length;)t.pop().dispose()}export{cn as CompletionAdapter,pn as DefinitionAdapter,un as DiagnosticsAdapter,Tn as DocumentColorAdapter,En as DocumentFormattingEditProvider,mn as DocumentHighlightAdapter,On as DocumentLinkAdapter,_n as DocumentRangeFormattingEditProvider,yn as DocumentSymbolAdapter,Cn as FoldingRangeAdapter,ln as HoverAdapter,xn as ReferenceAdapter,kn as RenameAdapter,Dn as SelectionRangeAdapter,nt as WorkerManager,an as fromPosition,fn as fromRange,Wn as setupMode,Nn as setupMode1,hn as toRange,dn as toTextEdit}