(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8104)}])},8104:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ge},pages:function(){return me}});var r=n(5893),a=n(8320),i=n(7294),c=n(4051),l=n.n(c);function s(e,t,n,r,a,i,c){try{var l=e[i](c),s=l.value}catch(u){return void n(u)}l.done?t(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function c(e){s(i,r,a,c,l,"next",e)}function l(e){s(i,r,a,c,l,"throw",e)}c(void 0)}))}}var o={"Content-type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"},h=function(){var e=u(l().mark((function e(t){var n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:o,method:"GET"},e.next=4,fetch(t,n).catch((function(e){return null}));case 4:if(null!==(r=e.sent)&&200===r.status){e.next=9;break}return e.abrupt("return",null);case 9:return e.next=11,r.json();case 11:return e.abrupt("return",e.sent);case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",{responseBody:null,responseStatus:418});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=u(l().mark((function e(t,n){var r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={headers:o,method:"POST",body:JSON.stringify(n)},e.next=4,fetch(t,r).catch((function(e){return null}));case 4:if(null===(a=e.sent)||200!==a.status&&201!==a.status){e.next=11;break}return e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 11:return e.abrupt("return",null);case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",{responseBody:null,responseStatus:418});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=u(l().mark((function e(t,n){var r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={headers:o,method:"PUT",body:JSON.stringify(n)},e.next=4,fetch(t,r).catch((function(e){return null}));case 4:if(null===(a=e.sent)||200!==a.status&&201!==a.status){e.next=11;break}return e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 11:return e.abrupt("return",null);case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",{responseBody:null,responseStatus:418});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=u(l().mark((function e(t,n){var r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={headers:o,method:"DELETE",body:JSON.stringify(n)},e.next=4,fetch(t,r).catch((function(e){return null}));case 4:if(null===(a=e.sent)||200!==a.status&&201!==a.status){e.next=11;break}return e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 11:return e.abrupt("return",null);case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",{responseBody:null,responseStatus:418});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}(),x={get:h,post:f,put:p,delete:d};function m(e,t,n,r,a,i,c){try{var l=e[i](c),s=l.value}catch(u){return void n(u)}l.done?t(s):Promise.resolve(s).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function c(e){m(i,r,a,c,l,"next",e)}function l(e){m(i,r,a,c,l,"throw",e)}c(void 0)}))}}var j=function(){var e=g(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("".concat("http://localhost:8800","/image/filter"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=g(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post("".concat("http://localhost:8800","/image/filter"),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=g(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.put("".concat("http://localhost:8800","/image"),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=g(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("".concat("http://localhost:8800","/tag"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=g(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.put("".concat("http://localhost:8800","/tag"),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=g(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.delete("".concat("http://localhost:8800","/tag"),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=g(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("".concat("http://localhost:8800","/folder"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=g(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.put("".concat("http://localhost:8800","/folder"),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=g(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.delete("".concat("http://localhost:8800","/folder"),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=g(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("".concat("http://localhost:8800","/setting"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=g(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.put("".concat("http://localhost:8800","/setting"),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=g(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.delete("".concat("http://localhost:8800","/setting"),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=g(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.delete("".concat("http://localhost:8800","/image"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E={getImageFilter:j,postImageFilter:v,putImage:Z,getTag:y,putTag:b,deleteTag:w,getFolder:k,putFolder:P,deleteFolder:S,getSettings:C,putSetting:D,deleteSetting:I,triggerReIndex:M},W=n(7720),O=n(8462),R=function(e){var t=e.children,n=e.open;return(0,r.jsxs)(a.Jn,{variant:"persistent",anchor:"left",open:n,children:[(0,r.jsx)(W.Z,{}),(0,r.jsxs)(O.Z,{children:[t,(0,r.jsx)(W.Z,{})]})]})},A=n(5450),T=n(9007),N=n(9225),L=n(6886),_=n(5071),H=n(9334),F=n(5861),B=n(7212),J=n(3454),z=n(6420),G=n(6945),Q=n(431),U=n(8619),V=n(9411),X=n(7109),$=n(8262),q=n(3946),K=n(7918),Y=n(5675),ee=n.n(Y),te=function(e,t){e.preventDefault(),t(e.target.value)},ne=n(1687),re=n(9829),ae=n(4229),ie=n(6172),ce=n(1216),le=n(5512),se=n(8533),ue=n(1733);function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){he(e,t,n[t])}))}return e}function pe(e){return function(e){if(Array.isArray(e))return oe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oe(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var de=[{value:"SOURCE",label:"Source"},{value:"INDEX",label:"Index"}],xe=function(e){e.setCurrentPage;var t,n,c,l,s,u,o,h,f,p,d,x,m,g,j,v,Z,y,b,w,k,P,S,C,D=(0,i.useState)({location:[],tags:[],steps:[0,0],sampler:[],denoise:[0,0],cfg:[0,0],modelHash:[],faceRestoration:[],hypernet:[],clipSkip:[0,0],width:[0,0],height:[0,0],afterDate:"",beforeDate:""}),I=D[0],M=D[1],O=(0,i.useState)({location:[],tags:[],steps:[],sampler:[],denoise:[],cfg:[],modelHash:[],faceRestoration:[],hypernet:[],clipSkip:[],width:[],height:[],afterDate:"",beforeDate:""}),Y=O[0],oe=O[1],he=(0,i.useState)([]),xe=he[0],me=he[1],ge=(0,i.useState)([]),je=ge[0],ve=ge[1],Ze=(0,i.useState)(""),ye=Ze[0],be=Ze[1],we=(0,i.useState)([]),ke=we[0],Pe=we[1],Se=(0,i.useState)(50),Ce=Se[0],De=Se[1],Ie=(0,i.useState)(6),Me=Ie[0],Ee=Ie[1],We=(0,i.useState)(null),Oe=We[0],Re=We[1],Ae=(0,i.useState)(!1),Te=Ae[0],Ne=Ae[1],Le=(0,i.useState)(!1),_e=Le[0],He=Le[1],Fe=(0,i.useState)(!1),Be=Fe[0],Je=Fe[1],ze=(0,i.useState)("add"),Ge=ze[0],Qe=ze[1],Ue=(0,i.useState)("add"),Ve=Ue[0],Xe=Ue[1],$e=(0,i.useState)(""),qe=$e[0],Ke=$e[1],Ye=(0,i.useState)(""),et=Ye[0],tt=Ye[1],nt=function(){E.getImageFilter().then((function(e){e.location.length>0&&(M(e),0===Y.steps.length&&oe({location:[],tags:[],steps:e.steps,sampler:[],denoise:e.denoise,cfg:e.cfg,modelHash:[],faceRestoration:[],hypernet:[],clipSkip:e.clipSkip,width:e.width,height:e.height,afterDate:(new Date).getDate(),beforeDate:(new Date).getDate()}))}))},rt=function(){var e={count:Ce};Y.location.length>0&&(e.location=Y.location.map((function(e){return e.path}))),Y.tags.length>0&&(e.tags=Y.tags),Y.steps.length>0&&(e.steps=Y.steps),Y.sampler.length>0&&(e.sampler=Y.sampler),Y.denoise.length>0&&(e.denoise=Y.denoise),Y.cfg.length>0&&(e.cfg=Y.cfg),Y.modelHash.length>0&&(e.modelHash=Y.modelHash),Y.faceRestoration.length>0&&(e.faceRestoration=Y.faceRestoration),Y.hypernet.length>0&&(e.hypernet=Y.hypernet),Y.clipSkip.length>0&&(e.clipSkip=Y.clipSkip),Y.width.length>0&&(e.width=Y.width),Y.height.length>0&&(e.height=Y.height),Y.afterDate.length>0&&(e.beforeDate=new Date(Y.afterDate).toISOString()),Y.beforeDate.length>0&&(e.beforeDate=new Date(Y.beforeDate).toISOString()),E.postImageFilter(e).then((function(e){me(e)}))},at=function(){E.getFolder().then((function(e){return Pe(e)}))},it=function(e){var t=e.split(".");return e.length>20?t[0].substring(0,17)+"...":t[0]};return(0,i.useEffect)((function(){nt(),at(),rt()}),[Ce]),(0,r.jsxs)(a.D,{children:[(0,r.jsx)(se.Z,{next:function(){De(Ce+50),rt()},hasMore:Ce<=xe.length,loader:(0,r.jsx)(a.kc,{children:"Loading..."}),dataLength:xe.length,children:(0,r.jsx)(A.Z,{cols:6,gap:0,id:"imageList",children:xe.map((function(e,t){return function(e){return e.height&&e.width&&e.fileName&&e.location}(e)&&(0,r.jsxs)(T.Z,{item:"true",children:[(0,r.jsx)(ee(),{id:e.fileName,src:"".concat("http://localhost:8800","/image?url=").concat(e.location.replaceAll("\\","/"),"/").concat(e.fileName),alt:"",layout:"intrinsic",width:e.width,height:e.height,loading:"lazy",onClick:function(t){Re(e),Ne(!0)}}),(0,r.jsx)(N.Z,{position:"below",title:(0,r.jsxs)(L.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[(0,r.jsx)(L.ZP,{item:!0,xs:10,children:(0,r.jsx)(a.kc,{children:it(e.fileName)})}),(0,r.jsx)(L.ZP,{item:!0,xs:2,children:(0,r.jsx)(_.Z,{checked:je.indexOf(e)>-1,onClick:function(t){je.includes(e)?ve(je.filter((function(t){return t!==e}))):ve(pe(je).concat([e]))}})})]})})]},t)}))})}),(0,r.jsxs)(R,{open:_e,children:[(0,r.jsx)(a.J3,{children:(0,r.jsx)(H.Z,{children:(0,r.jsxs)(F.Z,{children:["Images currently displayed: ",xe.length]})})}),(0,r.jsx)(W.Z,{}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(H.Z,{children:(0,r.jsx)(F.Z,{children:"Location"})})}),(0,r.jsx)(B.ZP,{children:(0,r.jsxs)(J.Z,{color:"primary",value:Ve,exclusive:!0,onChange:function(e){return te(e,Xe)},fullWidth:!0,children:[(0,r.jsx)(z.Z,{value:"add",children:"Add"}),(0,r.jsx)(z.Z,{value:"delete",children:"Delete"})]})}),"add"===Ve&&(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(B.ZP,{children:(0,r.jsx)(G.Z,{select:!0,label:"Type",value:qe,onChange:function(e){Ke(e.target.value)},fullWidth:!0,children:de.map((function(e,t){return(0,r.jsx)(Q.Z,{value:e.value,children:e.label},t)}))})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(G.Z,{label:"Path",value:et,onChange:function(e){te(e,tt)},helperText:"Absolute path of folder in the style C:\\folder",fullWidth:!0})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(U.Z,{onClick:function(){return function(){var e=et.split("\\"),t=[{name:e[e.length-1],path:et,folderType:qe}];E.putFolder(t).then((function(e){tt(""),Ke(""),at()}))}()},children:(0,r.jsx)(a.kc,{children:"Add"})})})]}),"delete"===Ve&&(0,r.jsx)(B.ZP,{children:(0,r.jsx)(G.Z,{select:!0,label:"Location",value:"",onChange:function(e){!function(e){E.deleteFolder([e.target.value]).then((function(e){at()}))}(e)},helperText:"Select folder to delete",fullWidth:!0,children:ke.map((function(e,t){return(0,r.jsx)(Q.Z,{value:e,children:e.name},t)}))})}),(0,r.jsx)(W.Z,{}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(H.Z,{children:(0,r.jsx)(F.Z,{children:"Tags"})})}),(0,r.jsx)(B.ZP,{children:(0,r.jsxs)(J.Z,{color:"primary",value:Ge,exclusive:!0,onChange:function(e){return te(e,Qe)},fullWidth:!0,children:[(0,r.jsx)(z.Z,{value:"add",children:"Add"}),(0,r.jsx)(z.Z,{value:"delete",children:"Delete"})]})}),"add"===Ge&&(0,r.jsxs)(B.ZP,{children:[(0,r.jsx)(G.Z,{fullWidth:!0,label:"Add tag",value:ye,onChange:function(e){te(e,be)}}),(0,r.jsx)(U.Z,{onClick:function(){E.putTag([ye]).then((function(e){return nt()})),be("")},alignItems:"center",children:(0,r.jsx)(a.kc,{children:"Add"})})]}),"delete"===Ge&&(0,r.jsx)(B.ZP,{children:(0,r.jsx)(G.Z,{select:!0,value:"",label:"Tags",fullWidth:!0,children:I.tags.map((function(e,t){return(0,r.jsxs)(U.Z,{value:e,onClick:function(){return function(e){E.deleteTag([e]).then((function(e){return nt()}))}(e)},children:[(0,r.jsx)(H.Z,{primary:e}),(0,r.jsx)(ue.Z,{})]},t)}))})}),(0,r.jsx)(W.Z,{}),(0,r.jsx)(U.Z,{onClick:function(e){E.triggerReIndex().then((function(e){return rt()}))},children:(0,r.jsx)(a.kc,{children:"Re-Index"})}),(0,r.jsx)(W.Z,{}),(0,r.jsx)(U.Z,{onClick:function(e){return He(!_e)},children:(0,r.jsx)(a.kc,{children:(0,r.jsx)(ie.Z,{})})})]}),(0,r.jsxs)(R,{open:Be,children:[(0,r.jsx)(W.Z,{}),(0,r.jsx)(a.J3,{children:(0,r.jsx)(H.Z,{children:(0,r.jsx)(F.Z,{children:"Location"})})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(G.Z,{select:!0,label:"Location",value:"",onChange:function(e){Y.location.find((function(t){return t.name===e.target.value}))?oe(fe({},Y,{location:Y.location.filter((function(t){return t.name!==e.target.value}))})):oe(fe({},Y,{location:pe(Y.location).concat([ke.find((function(t){return t.name===e.target.value}))])}))},helperText:"Which folder to take images from",fullWidth:!0,children:ke.map((function(e,t){return(0,r.jsxs)(Q.Z,{value:e.name,children:[(0,r.jsx)(_.Z,{checked:Y.location.map((function(e){return e.name})).includes(e.name)}),(0,r.jsx)(F.Z,{children:e.name})]},t)}))})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(G.Z,{select:!0,label:"Tags",value:"",onChange:function(e){Y.tags.find((function(t){return t===e.target.value}))?oe(fe({},Y,{tags:Y.tags.filter((function(t){return t!==e.target.value}))})):oe(fe({},Y,{tags:pe(Y.tags).concat([I.tags.find((function(t){return t===e.target.value}))])}))},fullWidth:!0,children:I.tags.map((function(e,t){return(0,r.jsxs)(Q.Z,{value:e,children:[(0,r.jsx)(_.Z,{checked:Y.tags.includes(e)}),(0,r.jsx)(F.Z,{children:e})]},t)}))})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(H.Z,{children:(0,r.jsxs)(F.Z,{children:["Sample steps: ",(t=Math).min.apply(t,pe(Y.steps)),"-",(n=Math).max.apply(n,pe(Y.steps))]})})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(V.ZP,{value:Y.steps,valueLabelDisplay:"off",onChange:function(e){return oe(fe({},Y,{steps:e.target.value}))},min:(c=Math).min.apply(c,pe(I.steps)),max:(l=Math).max.apply(l,pe(I.steps)),step:5,marks:!0})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(G.Z,{select:!0,label:"Sampler",value:"",onChange:function(e){Y.sampler.find((function(t){return t===e.target.value}))?oe(fe({},Y,{sampler:Y.sampler.filter((function(t){return t!==e.target.value}))})):oe(fe({},Y,{sampler:pe(Y.sampler).concat([I.sampler.find((function(t){return t===e.target.value}))])}))},fullWidth:!0,children:I.sampler.map((function(e,t){return(0,r.jsxs)(Q.Z,{value:e,children:[(0,r.jsx)(_.Z,{checked:Y.sampler.includes(e)}),(0,r.jsx)(F.Z,{children:e})]},t)}))})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(H.Z,{children:(0,r.jsxs)(F.Z,{children:["Denoise: ",(s=Math).min.apply(s,pe(Y.denoise)),"-",(u=Math).max.apply(u,pe(Y.denoise))]})})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(V.ZP,{value:Y.denoise,valueLabelDisplay:"off",onChange:function(e){return oe(fe({},Y,{denoise:e.target.value}))},min:(o=Math).min.apply(o,pe(I.denoise)),max:(h=Math).max.apply(h,pe(I.denoise)),step:.01,marks:!0})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(H.Z,{children:(0,r.jsxs)(F.Z,{children:["CFG: ",(f=Math).min.apply(f,pe(Y.cfg)),"-",(p=Math).max.apply(p,pe(Y.cfg))]})})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(V.ZP,{value:Y.cfg,valueLabelDisplay:"off",onChange:function(e){return oe(fe({},Y,{cfg:e.target.value}))},min:(d=Math).min.apply(d,pe(I.cfg)),max:(x=Math).max.apply(x,pe(I.cfg)),step:.5,marks:!0})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(G.Z,{select:!0,label:"Model hash",value:"",onChange:function(e){Y.modelHash.find((function(t){return t===e.target.value}))?oe(fe({},Y,{modelHash:Y.modelHash.filter((function(t){return t!==e.target.value}))})):oe(fe({},Y,{modelHash:pe(Y.modelHash).concat([I.modelHash.find((function(t){return t===e.target.value}))])}))},fullWidth:!0,children:I.modelHash.map((function(e,t){return(0,r.jsxs)(Q.Z,{value:e,children:[(0,r.jsx)(_.Z,{checked:Y.modelHash.includes(e)}),(0,r.jsx)(F.Z,{children:e})]},t)}))})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(G.Z,{select:!0,label:"Face restoration",value:"",onChange:function(e){Y.faceRestoration.find((function(t){return t===e.target.value}))?oe(fe({},Y,{faceRestoration:Y.faceRestoration.filter((function(t){return t!==e.target.value}))})):oe(fe({},Y,{faceRestoration:pe(Y.faceRestoration).concat([I.faceRestoration.find((function(t){return t===e.target.value}))])}))},fullWidth:!0,children:I.faceRestoration.map((function(e,t){return(0,r.jsxs)(Q.Z,{value:e,children:[(0,r.jsx)(_.Z,{checked:Y.faceRestoration.includes(e)}),(0,r.jsx)(F.Z,{children:e})]},t)}))})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(G.Z,{select:!0,label:"Hypernet",value:"",onChange:function(e){Y.hypernet.find((function(t){return t===e.target.value}))?oe(fe({},Y,{hypernet:Y.hypernet.filter((function(t){return t!==e.target.value}))})):oe(fe({},Y,{hypernet:pe(Y.hypernet).concat([I.hypernet.find((function(t){return t===e.target.value}))])}))},fullWidth:!0,children:I.hypernet.map((function(e,t){return(0,r.jsxs)(Q.Z,{value:e,children:[(0,r.jsx)(_.Z,{checked:Y.hypernet.includes(e)}),(0,r.jsx)(F.Z,{children:e})]},t)}))})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(H.Z,{children:(0,r.jsxs)(F.Z,{children:["Clip skip: ",(m=Math).min.apply(m,pe(Y.clipSkip)),"-",(g=Math).max.apply(g,pe(Y.clipSkip))]})})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(V.ZP,{value:Y.clipSkip,valueLabelDisplay:"off",onChange:function(e){return oe(fe({},Y,{clipSkip:e.target.value}))},min:(j=Math).min.apply(j,pe(I.clipSkip)),max:(v=Math).max.apply(v,pe(I.clipSkip)),step:1,marks:!0})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(H.Z,{children:(0,r.jsxs)(F.Z,{children:["Width: ",(Z=Math).min.apply(Z,pe(Y.width)),"-",(y=Math).max.apply(y,pe(Y.width))]})})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(V.ZP,{value:Y.width,valueLabelDisplay:"off",onChange:function(e){return oe(fe({},Y,{width:e.target.value}))},min:(b=Math).min.apply(b,pe(I.width)),max:(w=Math).max.apply(w,pe(I.width)),step:64,marks:!0})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(H.Z,{children:(0,r.jsxs)(F.Z,{children:["Height: ",(k=Math).min.apply(k,pe(Y.height)),"-",(P=Math).max.apply(P,pe(Y.height))]})})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(V.ZP,{value:Y.height,valueLabelDisplay:"off",onChange:function(e){return oe(fe({},Y,{height:e.target.value}))},min:(S=Math).min.apply(S,pe(I.height)),max:(C=Math).max.apply(C,pe(I.height)),step:64,marks:!0})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(G.Z,{fullWidth:!0,id:"datetime-local",label:"Images after",type:"datetime-local",value:Y.afterDate,onChange:function(e){return oe(fe({},Y,{afterDate:e.target.value}))}})}),(0,r.jsx)(B.ZP,{children:(0,r.jsx)(G.Z,{fullWidth:!0,id:"datetime-local",label:"Images before",type:"datetime-local",value:Y.beforeDate,onChange:function(e){return oe(fe({},Y,{beforeDate:e.target.value}))}})}),(0,r.jsx)(W.Z,{}),(0,r.jsx)(U.Z,{onClick:function(e){return rt()},children:(0,r.jsx)(a.kc,{children:"Filter"})}),(0,r.jsx)(W.Z,{}),(0,r.jsx)(U.Z,{onClick:function(e){return Je(!Be)},children:(0,r.jsx)(a.kc,{children:(0,r.jsx)(ie.Z,{})})})]}),(0,r.jsx)(a.Qy,{fromBot:0,fromLeft:0,onClick:function(e){return He(!_e)},size:"medium",children:(0,r.jsx)(ae.Z,{})}),(0,r.jsx)(a.Qy,{fromBot:1,fromLeft:0,onClick:function(e){return Je(!Be)},size:"medium",children:(0,r.jsx)(ce.Z,{})}),xe.length>0&&(0,r.jsx)(a.Qy,{fromBot:0,fromLeft:1,onClick:function(e){return je.length===xe.length?ve([]):ve(xe)},size:"medium",children:(0,r.jsx)(_.Z,{checked:je.length===xe.length})}),je.length>0&&(0,r.jsx)(a.Qy,{fromBot:0,fromLeft:2,variant:"extended",children:(0,r.jsx)(G.Z,{select:!0,size:"small",value:"",InputProps:{startAdornment:(0,r.jsx)(X.Z,{position:"start",children:(0,r.jsx)(le.Z,{color:"primary"})})},onChange:function(e){return function(e){var t=e.target.value,n=je.map((function(e){return fe({},e,{location:t})}));E.putImage(n).then((function(e){return rt()}))}(e)},children:ke.map((function(e,t){return(0,r.jsx)(Q.Z,{value:e.path,children:(0,r.jsx)(F.Z,{children:e.name})},t)}))})}),Te&&(0,r.jsx)($.Z,{fullWidth:!0,maxWidth:!1,open:Te,onClose:function(){return Ne(!Te)},children:(0,r.jsx)(a.Lq,{children:(0,r.jsxs)(L.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(a.zJ,{item:!0,xs:6,children:(0,r.jsx)(a.$l,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:(0,r.jsx)(a.Df,{item:!0,xs:Me,children:(0,r.jsx)(ee(),{id:Oe.fileName,src:"".concat("http://localhost:8800","/image?url=").concat(Oe.location.replaceAll("\\","/"),"/").concat(Oe.fileName),alt:"",layout:"responsive",width:Oe.width,height:Oe.height,loading:"lazy"})})})}),(0,r.jsxs)(a.Df,{item:!0,xs:6,children:[(0,r.jsx)(L.ZP,{item:!0,children:(0,r.jsx)(F.Z,{children:"Zoom"})}),(0,r.jsxs)(a.U8,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[(0,r.jsx)(L.ZP,{item:!0,children:(0,r.jsx)(q.Z,{onClick:function(e){Ee(Me-.1)},children:(0,r.jsx)(re.Z,{})})}),(0,r.jsx)(L.ZP,{item:!0,children:(0,r.jsx)(q.Z,{onClick:function(e){Ee(Me+.1)},children:(0,r.jsx)(ne.Z,{})})})]}),(0,r.jsx)(L.ZP,{item:!0,children:(0,r.jsx)(F.Z,{children:"Prompts"})}),(0,r.jsx)(L.ZP,{item:!0,children:(0,r.jsx)(a.gs,{label:"Positive prompts",fullWidth:!0,multiline:!0,value:null!==Oe.positivePrompt?Oe.positivePrompt:"None indexed"})}),(0,r.jsx)(L.ZP,{item:!0,children:(0,r.jsx)(a.gs,{label:"Negative prompts",fullWidth:!0,multiline:!0,value:null!==Oe.negativePrompt?Oe.negativePrompt:"None indexed"})}),(0,r.jsx)(L.ZP,{item:!0,children:(0,r.jsx)(a.gs,{label:"Generation Information",fullWidth:!0,multiline:!0,value:null!==Oe?Object.entries(Oe).filter((function(e){return"positivePrompt"!==e[0]&&"negativePrompt"!==e[0]&&"_id"!==e[0]&&"location"!==e[0]&&"fileName"!==e[0]&&"creationDate"!==e[0]&&"tags"!==e[0]})).map((function(e,t){return(0!==t?" ":"")+e[0]+": "+e[1]})):"None indexed"})}),(0,r.jsx)(L.ZP,{item:!0,children:(0,r.jsx)(F.Z,{children:"Tags"})}),(0,r.jsx)(L.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:Oe&&Oe.tags.sort().map((function(e,t){return(0,r.jsx)(L.ZP,{item:!0,children:(0,r.jsx)(B.ZP,{children:(0,r.jsx)(K.Z,{label:e})})},t)}))})]})]})})})]})},me={IMAGE_VIEWER:"image-viewer",PROMPT_GENERATOR:"prompt-generator"},ge=function(){var e=(0,i.useState)(me.IMAGE_VIEWER),t=e[0],n=e[1];return(0,r.jsx)(a.Jo,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:t===me.IMAGE_VIEWER&&(0,r.jsx)(xe,{setCurrentPage:n})})}}},function(e){e.O(0,[649,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);