const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-C4JZrR_h.js","assets/Card-GZmgqvQc.js","assets/Skeleton-DA-jzxjD.js","assets/clock-D5uHoVea.js","assets/circle-check-big-cn6NWgxY.js","assets/award-D59prGFU.js","assets/map-pin-CcNoYd00.js","assets/Finance-BuCWoOqo.js","assets/Badge-M7NapcJS.js","assets/download-DXk35TIt.js","assets/StudentRecords-Dcdz6uXy.js","assets/papaparse.min-Did8Xaeq.js","assets/Modal-BGgoI6g_.js","assets/EmptyState-B-K3MhMu.js","assets/user-plus-HbYylAZ7.js","assets/trash-2-CGoWeJV3.js","assets/StaffDirectory-tB3tXJi4.js","assets/Reports-DUsv1_eO.js","assets/circle-x-7qTIWtc_.js","assets/AddStudent-DJDQb0bO.js","assets/Settings-DQI_OwF_.js","assets/auditLogger-BVR1y5MH.js","assets/camera-CZ4IDjnb.js","assets/save-CLpzmEYi.js","assets/shield-Y0J9SlGF.js","assets/send-glXgKfCG.js","assets/UserManagement-BovHnW8x.js","assets/MyProfile-Dz4nX5yf.js","assets/upload-CUMIIUD9.js","assets/Announcements-BBgDoj7j.js","assets/Attendance-C3iy_ZkC.js","assets/circle-alert-WrEfKZMS.js","assets/Assignments-qqhtSQNo.js","assets/circle-plus-B8Spo6Mz.js","assets/AcademicStructure-DcDYLS0o.js","assets/AuditLogs-kg_Dnvwg.js","assets/Timetable-BygpgWdl.js","assets/Requests-qXs4v0W1.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var KB=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dw={exports:{}},$f={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U2=Symbol.for("react.transitional.element"),j2=Symbol.for("react.fragment");function Nw(t,e,n){var r=null;if(n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),"key"in e){n={};for(var i in e)i!=="key"&&(n[i]=e[i])}else n=e;return e=n.ref,{$$typeof:U2,type:t,key:r,ref:e!==void 0?e:null,props:n}}$f.Fragment=j2;$f.jsx=Nw;$f.jsxs=Nw;Dw.exports=$f;var I=Dw.exports,Pw={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy=Symbol.for("react.transitional.element"),B2=Symbol.for("react.portal"),z2=Symbol.for("react.fragment"),q2=Symbol.for("react.strict_mode"),F2=Symbol.for("react.profiler"),H2=Symbol.for("react.consumer"),G2=Symbol.for("react.context"),$2=Symbol.for("react.forward_ref"),K2=Symbol.for("react.suspense"),Q2=Symbol.for("react.memo"),Ow=Symbol.for("react.lazy"),k0=Symbol.iterator;function Y2(t){return t===null||typeof t!="object"?null:(t=k0&&t[k0]||t["@@iterator"],typeof t=="function"?t:null)}var Vw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kw=Object.assign,Mw={};function yo(t,e,n){this.props=t,this.context=e,this.refs=Mw,this.updater=n||Vw}yo.prototype.isReactComponent={};yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lw(){}Lw.prototype=yo.prototype;function ay(t,e,n){this.props=t,this.context=e,this.refs=Mw,this.updater=n||Vw}var oy=ay.prototype=new Lw;oy.constructor=ay;kw(oy,yo.prototype);oy.isPureReactComponent=!0;var M0=Array.isArray,Pe={H:null,A:null,T:null,S:null,V:null},Uw=Object.prototype.hasOwnProperty;function ly(t,e,n,r,i,s){return n=s.ref,{$$typeof:sy,type:t,key:e,ref:n!==void 0?n:null,props:s}}function X2(t,e){return ly(t.type,e,void 0,void 0,void 0,t.props)}function uy(t){return typeof t=="object"&&t!==null&&t.$$typeof===sy}function W2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var L0=/\/+/g;function vm(t,e){return typeof t=="object"&&t!==null&&t.key!=null?W2(""+t.key):e.toString(36)}function U0(){}function J2(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(U0,U0):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function aa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"bigint":case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case sy:case B2:a=!0;break;case Ow:return a=t._init,aa(a(t._payload),e,n,r,i)}}if(a)return i=i(t),a=r===""?"."+vm(t,0):r,M0(i)?(n="",a!=null&&(n=a.replace(L0,"$&/")+"/"),aa(i,e,n,"",function(c){return c})):i!=null&&(uy(i)&&(i=X2(i,n+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(L0,"$&/")+"/")+a)),e.push(i)),1;a=0;var o=r===""?".":r+":";if(M0(t))for(var l=0;l<t.length;l++)r=t[l],s=o+vm(r,l),a+=aa(r,e,n,s,i);else if(l=Y2(t),typeof l=="function")for(t=l.call(t),l=0;!(r=t.next()).done;)r=r.value,s=o+vm(r,l++),a+=aa(r,e,n,s,i);else if(s==="object"){if(typeof t.then=="function")return aa(J2(t),e,n,r,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return a}function Rc(t,e,n){if(t==null)return t;var r=[],i=0;return aa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Z2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var j0=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function eD(){}te.Children={map:Rc,forEach:function(t,e,n){Rc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Rc(t,function(){e++}),e},toArray:function(t){return Rc(t,function(e){return e})||[]},only:function(t){if(!uy(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=yo;te.Fragment=z2;te.Profiler=F2;te.PureComponent=ay;te.StrictMode=q2;te.Suspense=K2;te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Pe;te.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Pe.H.useMemoCache(t)}};te.cache=function(t){return function(){return t.apply(null,arguments)}};te.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var r=kw({},t.props),i=t.key,s=void 0;if(e!=null)for(a in e.ref!==void 0&&(s=void 0),e.key!==void 0&&(i=""+e.key),e)!Uw.call(e,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&e.ref===void 0||(r[a]=e[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];r.children=o}return ly(t.type,i,void 0,void 0,s,r)};te.createContext=function(t){return t={$$typeof:G2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:H2,_context:t},t};te.createElement=function(t,e,n){var r,i={},s=null;if(e!=null)for(r in e.key!==void 0&&(s=""+e.key),e)Uw.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];i.children=o}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return ly(t,s,void 0,void 0,null,i)};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:$2,render:t}};te.isValidElement=uy;te.lazy=function(t){return{$$typeof:Ow,_payload:{_status:-1,_result:t},_init:Z2}};te.memo=function(t,e){return{$$typeof:Q2,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Pe.T,n={};Pe.T=n;try{var r=t(),i=Pe.S;i!==null&&i(n,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(eD,j0)}catch(s){j0(s)}finally{Pe.T=e}};te.unstable_useCacheRefresh=function(){return Pe.H.useCacheRefresh()};te.use=function(t){return Pe.H.use(t)};te.useActionState=function(t,e,n){return Pe.H.useActionState(t,e,n)};te.useCallback=function(t,e){return Pe.H.useCallback(t,e)};te.useContext=function(t){return Pe.H.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t,e){return Pe.H.useDeferredValue(t,e)};te.useEffect=function(t,e,n){var r=Pe.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(t,e)};te.useId=function(){return Pe.H.useId()};te.useImperativeHandle=function(t,e,n){return Pe.H.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return Pe.H.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return Pe.H.useLayoutEffect(t,e)};te.useMemo=function(t,e){return Pe.H.useMemo(t,e)};te.useOptimistic=function(t,e){return Pe.H.useOptimistic(t,e)};te.useReducer=function(t,e,n){return Pe.H.useReducer(t,e,n)};te.useRef=function(t){return Pe.H.useRef(t)};te.useState=function(t){return Pe.H.useState(t)};te.useSyncExternalStore=function(t,e,n){return Pe.H.useSyncExternalStore(t,e,n)};te.useTransition=function(){return Pe.H.useTransition()};te.version="19.1.0";Pw.exports=te;var D=Pw.exports;const tD=Cw(D);var jw={exports:{}},Kf={},Bw={exports:{}},zw={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,ee){var Z=G.length;G.push(ee);e:for(;0<Z;){var Re=Z-1>>>1,Ge=G[Re];if(0<i(Ge,ee))G[Re]=ee,G[Z]=Ge,Z=Re;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var ee=G[0],Z=G.pop();if(Z!==ee){G[0]=Z;e:for(var Re=0,Ge=G.length,Ks=Ge>>>1;Re<Ks;){var $t=2*(Re+1)-1,Xe=G[$t],sr=$t+1,Mn=G[sr];if(0>i(Xe,Z))sr<Ge&&0>i(Mn,Xe)?(G[Re]=Mn,G[sr]=Z,Re=sr):(G[Re]=Xe,G[$t]=Z,Re=$t);else if(sr<Ge&&0>i(Mn,Z))G[Re]=Mn,G[sr]=Z,Re=sr;else break e}}return ee}function i(G,ee){var Z=G.sortIndex-ee.sortIndex;return Z!==0?Z:G.id-ee.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,d=null,m=3,g=!1,w=!1,x=!1,C=!1,v=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function N(G){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=G)r(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function U(G){if(x=!1,N(G),!w)if(n(l)!==null)w=!0,z||(z=!0,V());else{var ee=n(c);ee!==null&&ir(U,ee.startTime-G)}}var z=!1,b=-1,E=5,A=-1;function S(){return C?!0:!(t.unstable_now()-A<E)}function P(){if(C=!1,z){var G=t.unstable_now();A=G;var ee=!0;try{e:{w=!1,x&&(x=!1,y(b),b=-1),g=!0;var Z=m;try{t:{for(N(G),d=n(l);d!==null&&!(d.expirationTime>G&&S());){var Re=d.callback;if(typeof Re=="function"){d.callback=null,m=d.priorityLevel;var Ge=Re(d.expirationTime<=G);if(G=t.unstable_now(),typeof Ge=="function"){d.callback=Ge,N(G),ee=!0;break t}d===n(l)&&r(l),N(G)}else r(l);d=n(l)}if(d!==null)ee=!0;else{var Ks=n(c);Ks!==null&&ir(U,Ks.startTime-G),ee=!1}}break e}finally{d=null,m=Z,g=!1}ee=void 0}}finally{ee?V():z=!1}}}var V;if(typeof T=="function")V=function(){T(P)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,wn=R.port2;R.port1.onmessage=P,V=function(){wn.postMessage(null)}}else V=function(){v(P,0)};function ir(G,ee){b=v(function(){G(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_next=function(G){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var Z=m;m=ee;try{return G()}finally{m=Z}},t.unstable_requestPaint=function(){C=!0},t.unstable_runWithPriority=function(G,ee){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Z=m;m=G;try{return ee()}finally{m=Z}},t.unstable_scheduleCallback=function(G,ee,Z){var Re=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Re+Z:Re):Z=Re,G){case 1:var Ge=-1;break;case 2:Ge=250;break;case 5:Ge=1073741823;break;case 4:Ge=1e4;break;default:Ge=5e3}return Ge=Z+Ge,G={id:h++,callback:ee,priorityLevel:G,startTime:Z,expirationTime:Ge,sortIndex:-1},Z>Re?(G.sortIndex=Z,e(c,G),n(l)===null&&G===n(c)&&(x?(y(b),b=-1):x=!0,ir(U,Z-Re))):(G.sortIndex=Ge,e(l,G),w||g||(w=!0,z||(z=!0,V()))),G},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(G){var ee=m;return function(){var Z=m;m=ee;try{return G.apply(this,arguments)}finally{m=Z}}}})(zw);Bw.exports=zw;var nD=Bw.exports,qw={exports:{}},kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rD=D;function Fw(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Fr(){}var Ot={d:{f:Fr,r:function(){throw Error(Fw(522))},D:Fr,C:Fr,L:Fr,m:Fr,X:Fr,S:Fr,M:Fr},p:0,findDOMNode:null},iD=Symbol.for("react.portal");function sD(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:iD,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}var vl=rD.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Qf(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ot;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Fw(299));return sD(t,e,null,n)};kt.flushSync=function(t){var e=vl.T,n=Ot.p;try{if(vl.T=null,Ot.p=2,t)return t()}finally{vl.T=e,Ot.p=n,Ot.d.f()}};kt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Ot.d.C(t,e))};kt.prefetchDNS=function(t){typeof t=="string"&&Ot.d.D(t)};kt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,r=Qf(n,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Ot.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:s}):n==="script"&&Ot.d.X(t,{crossOrigin:r,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};kt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Qf(e.as,e.crossOrigin);Ot.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Ot.d.M(t)};kt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,r=Qf(n,e.crossOrigin);Ot.d.L(t,n,{crossOrigin:r,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};kt.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Qf(e.as,e.crossOrigin);Ot.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Ot.d.m(t)};kt.requestFormReset=function(t){Ot.d.r(t)};kt.unstable_batchedUpdates=function(t,e){return t(e)};kt.useFormState=function(t,e,n){return vl.H.useFormState(t,e,n)};kt.useFormStatus=function(){return vl.H.useHostTransitionStatus()};kt.version="19.1.0";function Hw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hw)}catch(t){console.error(t)}}Hw(),qw.exports=kt;var aD=qw.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var it=nD,Gw=D,oD=aD;function j(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $w(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Kw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function B0(t){if(Ru(t)!==t)throw Error(j(188))}function lD(t){var e=t.alternate;if(!e){if(e=Ru(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return B0(i),t;if(s===r)return B0(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Qw(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Qw(t),e!==null)return e;t=t.sibling}return null}var Ce=Object.assign,uD=Symbol.for("react.element"),xc=Symbol.for("react.transitional.element"),ll=Symbol.for("react.portal"),ma=Symbol.for("react.fragment"),Yw=Symbol.for("react.strict_mode"),wp=Symbol.for("react.profiler"),cD=Symbol.for("react.provider"),Xw=Symbol.for("react.consumer"),dr=Symbol.for("react.context"),cy=Symbol.for("react.forward_ref"),Ap=Symbol.for("react.suspense"),Sp=Symbol.for("react.suspense_list"),hy=Symbol.for("react.memo"),Xr=Symbol.for("react.lazy"),Ip=Symbol.for("react.activity"),hD=Symbol.for("react.memo_cache_sentinel"),z0=Symbol.iterator;function Ko(t){return t===null||typeof t!="object"?null:(t=z0&&t[z0]||t["@@iterator"],typeof t=="function"?t:null)}var fD=Symbol.for("react.client.reference");function Rp(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fD?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ma:return"Fragment";case wp:return"Profiler";case Yw:return"StrictMode";case Ap:return"Suspense";case Sp:return"SuspenseList";case Ip:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ll:return"Portal";case dr:return(t.displayName||"Context")+".Provider";case Xw:return(t._context.displayName||"Context")+".Consumer";case cy:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hy:return e=t.displayName||null,e!==null?e:Rp(t.type)||"Memo";case Xr:e=t._payload,t=t._init;try{return Rp(t(e))}catch{}}return null}var ul=Array.isArray,W=Gw.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de=oD.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,hs={pending:!1,data:null,method:null,action:null},xp=[],pa=-1;function tr(t){return{current:t}}function ht(t){0>pa||(t.current=xp[pa],xp[pa]=null,pa--)}function Oe(t,e){pa++,xp[pa]=t.current,t.current=e}var $n=tr(null),Ql=tr(null),pi=tr(null),kh=tr(null);function Mh(t,e){switch(Oe(pi,e),Oe(Ql,t),Oe($n,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?$E(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=$E(e),t=dS(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ht($n),Oe($n,t)}function ja(){ht($n),ht(Ql),ht(pi)}function Cp(t){t.memoizedState!==null&&Oe(kh,t);var e=$n.current,n=dS(e,t.type);e!==n&&(Oe(Ql,t),Oe($n,n))}function Lh(t){Ql.current===t&&(ht($n),ht(Ql)),kh.current===t&&(ht(kh),iu._currentValue=hs)}var Dp=Object.prototype.hasOwnProperty,fy=it.unstable_scheduleCallback,Em=it.unstable_cancelCallback,dD=it.unstable_shouldYield,mD=it.unstable_requestPaint,Kn=it.unstable_now,pD=it.unstable_getCurrentPriorityLevel,Ww=it.unstable_ImmediatePriority,Jw=it.unstable_UserBlockingPriority,Uh=it.unstable_NormalPriority,gD=it.unstable_LowPriority,Zw=it.unstable_IdlePriority,yD=it.log,_D=it.unstable_setDisableYieldValue,xu=null,nn=null;function ci(t){if(typeof yD=="function"&&_D(t),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(xu,t)}catch{}}var rn=Math.clz32?Math.clz32:TD,vD=Math.log,ED=Math.LN2;function TD(t){return t>>>=0,t===0?32:31-(vD(t)/ED|0)|0}var Cc=256,Dc=4194304;function Zi(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Yf(t,e,n){var r=t.pendingLanes;if(r===0)return 0;var i=0,s=t.suspendedLanes,a=t.pingedLanes;t=t.warmLanes;var o=r&134217727;return o!==0?(r=o&~s,r!==0?i=Zi(r):(a&=o,a!==0?i=Zi(a):n||(n=o&~t,n!==0&&(i=Zi(n))))):(o=r&~s,o!==0?i=Zi(o):a!==0?i=Zi(a):n||(n=r&~t,n!==0&&(i=Zi(n)))),i===0?0:e!==0&&e!==i&&!(e&s)&&(s=i&-i,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:i}function Cu(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function bD(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e1(){var t=Cc;return Cc<<=1,!(Cc&4194048)&&(Cc=256),t}function t1(){var t=Dc;return Dc<<=1,!(Dc&62914560)&&(Dc=4194304),t}function Tm(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Du(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function wD(t,e,n,r,i,s){var a=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=a&~n;0<n;){var h=31-rn(n),d=1<<h;o[h]=0,l[h]=-1;var m=c[h];if(m!==null)for(c[h]=null,h=0;h<m.length;h++){var g=m[h];g!==null&&(g.lane&=-536870913)}n&=~d}r!==0&&n1(t,r,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(a&~e))}function n1(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-rn(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|n&4194090}function r1(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}function dy(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function my(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function i1(){var t=de.p;return t!==0?t:(t=window.event,t===void 0?32:wS(t.type))}function AD(t,e){var n=de.p;try{return de.p=t,e()}finally{de.p=n}}var Mi=Math.random().toString(36).slice(2),At="__reactFiber$"+Mi,Ht="__reactProps$"+Mi,_o="__reactContainer$"+Mi,Np="__reactEvents$"+Mi,SD="__reactListeners$"+Mi,ID="__reactHandles$"+Mi,q0="__reactResources$"+Mi,Nu="__reactMarker$"+Mi;function py(t){delete t[At],delete t[Ht],delete t[Np],delete t[SD],delete t[ID]}function ga(t){var e=t[At];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_o]||n[At]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=YE(t);t!==null;){if(n=t[At])return n;t=YE(t)}return e}t=n,n=t.parentNode}return null}function vo(t){if(t=t[At]||t[_o]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function cl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(j(33))}function Ra(t){var e=t[q0];return e||(e=t[q0]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ut(t){t[Nu]=!0}var s1=new Set,a1={};function Bs(t,e){Ba(t,e),Ba(t+"Capture",e)}function Ba(t,e){for(a1[t]=e,t=0;t<e.length;t++)s1.add(e[t])}var RD=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),F0={},H0={};function xD(t){return Dp.call(H0,t)?!0:Dp.call(F0,t)?!1:RD.test(t)?H0[t]=!0:(F0[t]=!0,!1)}function nh(t,e,n){if(xD(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Nc(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function lr(t,e,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+r)}}var bm,G0;function oa(t){if(bm===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bm=e&&e[1]||"",G0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bm+t+G0}var wm=!1;function Am(t,e){if(!t||wm)return"";wm=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(g){var m=g}Reflect.construct(t,[],d)}else{try{d.call()}catch(g){m=g}t.call(d.prototype)}}else{try{throw Error()}catch(g){m=g}(d=t())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(g){if(g&&m&&typeof g.stack=="string")return[g.stack,m.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=r.DetermineComponentFrameRoot(),a=s[0],o=s[1];if(a&&o){var l=a.split(`
`),c=o.split(`
`);for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(r!==1||i!==1)do if(r--,i--,0>i||l[r]!==c[i]){var h=`
`+l[r].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=r&&0<=i);break}}}finally{wm=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?oa(n):""}function CD(t){switch(t.tag){case 26:case 27:case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 15:return Am(t.type,!1);case 11:return Am(t.type.render,!1);case 1:return Am(t.type,!0);case 31:return oa("Activity");default:return""}}function $0(t){try{var e="";do e+=CD(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function fn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function o1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function DD(t){var e=o1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jh(t){t._valueTracker||(t._valueTracker=DD(t))}function l1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=o1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ND=/[\n"\\]/g;function pn(t){return t.replace(ND,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Pp(t,e,n,r,i,s,a,o){t.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?t.type=a:t.removeAttribute("type"),e!=null?a==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+fn(e)):t.value!==""+fn(e)&&(t.value=""+fn(e)):a!=="submit"&&a!=="reset"||t.removeAttribute("value"),e!=null?Op(t,a,fn(e)):n!=null?Op(t,a,fn(n)):r!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+fn(o):t.removeAttribute("name")}function u1(t,e,n,r,i,s,a,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null))return;n=n!=null?""+fn(n):"",e=e!=null?""+fn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}r=r??i,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=o?t.checked:!!r,t.defaultChecked=!!r,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.name=a)}function Op(t,e,n){e==="number"&&Bh(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function xa(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function c1(t,e,n){if(e!=null&&(e=""+fn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+fn(n):""}function h1(t,e,n,r){if(e==null){if(r!=null){if(n!=null)throw Error(j(92));if(ul(r)){if(1<r.length)throw Error(j(93));r=r[0]}n=r}n==null&&(n=""),e=n}n=fn(e),t.defaultValue=n,r=t.textContent,r===n&&r!==""&&r!==null&&(t.value=r)}function za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var PD=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function K0(t,e,n){var r=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,n):typeof n!="number"||n===0||PD.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function f1(t,e,n){if(e!=null&&typeof e!="object")throw Error(j(62));if(t=t.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var i in e)r=e[i],e.hasOwnProperty(i)&&n[i]!==r&&K0(t,i,r)}else for(var s in e)e.hasOwnProperty(s)&&K0(t,s,e[s])}function gy(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var OD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),VD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rh(t){return VD.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Vp=null;function yy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ya=null,Ca=null;function Q0(t){var e=vo(t);if(e&&(t=e.stateNode)){var n=t[Ht]||null;e:switch(t=e.stateNode,e.type){case"input":if(Pp(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+pn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=r[Ht]||null;if(!i)throw Error(j(90));Pp(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)r=n[e],r.form===t.form&&l1(r)}break e;case"textarea":c1(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&xa(t,!!n.multiple,e,!1)}}}var Sm=!1;function d1(t,e,n){if(Sm)return t(e,n);Sm=!0;try{var r=t(e);return r}finally{if(Sm=!1,(ya!==null||Ca!==null)&&(sd(),ya&&(e=ya,t=Ca,Ca=ya=null,Q0(e),t)))for(e=0;e<t.length;e++)Q0(t[e])}}function Yl(t,e){var n=t.stateNode;if(n===null)return null;var r=n[Ht]||null;if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kp=!1;if(Sr)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){kp=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{kp=!1}var hi=null,_y=null,ih=null;function m1(){if(ih)return ih;var t,e=_y,n=e.length,r,i="value"in hi?hi.value:hi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return ih=i.slice(t,1<r?1-r:void 0)}function sh(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pc(){return!0}function Y0(){return!1}function Gt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pc:Y0,this.isPropagationStopped=Y0,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pc)},persist:function(){},isPersistent:Pc}),e}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xf=Gt(zs),Pu=Ce({},zs,{view:0,detail:0}),kD=Gt(Pu),Im,Rm,Yo,Wf=Ce({},Pu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(Im=t.screenX-Yo.screenX,Rm=t.screenY-Yo.screenY):Rm=Im=0,Yo=t),Im)},movementY:function(t){return"movementY"in t?t.movementY:Rm}}),X0=Gt(Wf),MD=Ce({},Wf,{dataTransfer:0}),LD=Gt(MD),UD=Ce({},Pu,{relatedTarget:0}),xm=Gt(UD),jD=Ce({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),BD=Gt(jD),zD=Ce({},zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qD=Gt(zD),FD=Ce({},zs,{data:0}),W0=Gt(FD),HD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$D={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KD(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$D[t])?!!e[t]:!1}function vy(){return KD}var QD=Ce({},Pu,{key:function(t){if(t.key){var e=HD[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sh(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GD[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vy,charCode:function(t){return t.type==="keypress"?sh(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sh(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YD=Gt(QD),XD=Ce({},Wf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),J0=Gt(XD),WD=Ce({},Pu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vy}),JD=Gt(WD),ZD=Ce({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),eN=Gt(ZD),tN=Ce({},Wf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nN=Gt(tN),rN=Ce({},zs,{newState:0,oldState:0}),iN=Gt(rN),sN=[9,13,27,32],Ey=Sr&&"CompositionEvent"in window,El=null;Sr&&"documentMode"in document&&(El=document.documentMode);var aN=Sr&&"TextEvent"in window&&!El,p1=Sr&&(!Ey||El&&8<El&&11>=El),Z0=" ",eE=!1;function g1(t,e){switch(t){case"keyup":return sN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _a=!1;function oN(t,e){switch(t){case"compositionend":return y1(e);case"keypress":return e.which!==32?null:(eE=!0,Z0);case"textInput":return t=e.data,t===Z0&&eE?null:t;default:return null}}function lN(t,e){if(_a)return t==="compositionend"||!Ey&&g1(t,e)?(t=m1(),ih=_y=hi=null,_a=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p1&&e.locale!=="ko"?null:e.data;default:return null}}var uN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tE(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uN[t.type]:e==="textarea"}function _1(t,e,n,r){ya?Ca?Ca.push(r):Ca=[r]:ya=r,e=sf(e,"onChange"),0<e.length&&(n=new Xf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Tl=null,Xl=null;function cN(t){cS(t,0)}function Jf(t){var e=cl(t);if(l1(e))return t}function nE(t,e){if(t==="change")return e}var v1=!1;if(Sr){var Cm;if(Sr){var Dm="oninput"in document;if(!Dm){var rE=document.createElement("div");rE.setAttribute("oninput","return;"),Dm=typeof rE.oninput=="function"}Cm=Dm}else Cm=!1;v1=Cm&&(!document.documentMode||9<document.documentMode)}function iE(){Tl&&(Tl.detachEvent("onpropertychange",E1),Xl=Tl=null)}function E1(t){if(t.propertyName==="value"&&Jf(Xl)){var e=[];_1(e,Xl,t,yy(t)),d1(cN,e)}}function hN(t,e,n){t==="focusin"?(iE(),Tl=e,Xl=n,Tl.attachEvent("onpropertychange",E1)):t==="focusout"&&iE()}function fN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jf(Xl)}function dN(t,e){if(t==="click")return Jf(e)}function mN(t,e){if(t==="input"||t==="change")return Jf(e)}function pN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:pN;function Wl(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dp.call(e,i)||!un(t[i],e[i]))return!1}return!0}function sE(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function aE(t,e){var n=sE(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sE(n)}}function T1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?T1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function b1(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Bh(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bh(t.document)}return e}function Ty(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var gN=Sr&&"documentMode"in document&&11>=document.documentMode,va=null,Mp=null,bl=null,Lp=!1;function oE(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lp||va==null||va!==Bh(r)||(r=va,"selectionStart"in r&&Ty(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bl&&Wl(bl,r)||(bl=r,r=sf(Mp,"onSelect"),0<r.length&&(e=new Xf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=va)))}function Wi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ea={animationend:Wi("Animation","AnimationEnd"),animationiteration:Wi("Animation","AnimationIteration"),animationstart:Wi("Animation","AnimationStart"),transitionrun:Wi("Transition","TransitionRun"),transitionstart:Wi("Transition","TransitionStart"),transitioncancel:Wi("Transition","TransitionCancel"),transitionend:Wi("Transition","TransitionEnd")},Nm={},w1={};Sr&&(w1=document.createElement("div").style,"AnimationEvent"in window||(delete Ea.animationend.animation,delete Ea.animationiteration.animation,delete Ea.animationstart.animation),"TransitionEvent"in window||delete Ea.transitionend.transition);function qs(t){if(Nm[t])return Nm[t];if(!Ea[t])return t;var e=Ea[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in w1)return Nm[t]=e[n];return t}var A1=qs("animationend"),S1=qs("animationiteration"),I1=qs("animationstart"),yN=qs("transitionrun"),_N=qs("transitionstart"),vN=qs("transitioncancel"),R1=qs("transitionend"),x1=new Map,Up="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Up.push("scrollEnd");function On(t,e){x1.set(t,e),Bs(e,[t])}var lE=new WeakMap;function gn(t,e){if(typeof t=="object"&&t!==null){var n=lE.get(t);return n!==void 0?n:(e={value:t,source:e,stack:$0(e)},lE.set(t,e),e)}return{value:t,source:e,stack:$0(e)}}var hn=[],Ta=0,by=0;function Zf(){for(var t=Ta,e=by=Ta=0;e<t;){var n=hn[e];hn[e++]=null;var r=hn[e];hn[e++]=null;var i=hn[e];hn[e++]=null;var s=hn[e];if(hn[e++]=null,r!==null&&i!==null){var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}s!==0&&C1(n,i,s)}}function ed(t,e,n,r){hn[Ta++]=t,hn[Ta++]=e,hn[Ta++]=n,hn[Ta++]=r,by|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function wy(t,e,n,r){return ed(t,e,n,r),zh(t)}function Eo(t,e){return ed(t,null,null,e),zh(t)}function C1(t,e,n){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n);for(var i=!1,s=t.return;s!==null;)s.childLanes|=n,r=s.alternate,r!==null&&(r.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-rn(n),t=s.hiddenUpdates,r=t[i],r===null?t[i]=[e]:r.push(e),e.lane=n|536870912),s):null}function zh(t){if(50<Pl)throw Pl=0,sg=null,Error(j(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ba={};function EN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new EN(t,e,n,r)}function Ay(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function D1(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ah(t,e,n,r,i,s){var a=0;if(r=t,typeof t=="function")Ay(t)&&(a=1);else if(typeof t=="string")a=bP(t,n,$n.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Ip:return t=Jt(31,n,e,i),t.elementType=Ip,t.lanes=s,t;case ma:return fs(n.children,i,s,e);case Yw:a=8,i|=24;break;case wp:return t=Jt(12,n,e,i|2),t.elementType=wp,t.lanes=s,t;case Ap:return t=Jt(13,n,e,i),t.elementType=Ap,t.lanes=s,t;case Sp:return t=Jt(19,n,e,i),t.elementType=Sp,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cD:case dr:a=10;break e;case Xw:a=9;break e;case cy:a=11;break e;case hy:a=14;break e;case Xr:a=16,r=null;break e}a=29,n=Error(j(130,t===null?"null":typeof t,"")),r=null}return e=Jt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fs(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function Pm(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function Om(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var wa=[],Aa=0,qh=null,Fh=0,dn=[],mn=0,ds=null,mr=1,pr="";function es(t,e){wa[Aa++]=Fh,wa[Aa++]=qh,qh=t,Fh=e}function N1(t,e,n){dn[mn++]=mr,dn[mn++]=pr,dn[mn++]=ds,ds=t;var r=mr;t=pr;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,mr=1<<32-rn(e)+i|n<<i|r,pr=s+t}else mr=1<<s|n<<i|r,pr=t}function Sy(t){t.return!==null&&(es(t,1),N1(t,1,0))}function Iy(t){for(;t===qh;)qh=wa[--Aa],wa[Aa]=null,Fh=wa[--Aa],wa[Aa]=null;for(;t===ds;)ds=dn[--mn],dn[mn]=null,pr=dn[--mn],dn[mn]=null,mr=dn[--mn],dn[mn]=null}var Pt=null,je=null,he=!1,ms=null,Bn=!1,jp=Error(j(519));function As(t){var e=Error(j(418,""));throw Jl(gn(e,t)),jp}function uE(t){var e=t.stateNode,n=t.type,r=t.memoizedProps;switch(e[At]=t,e[Ht]=r,n){case"dialog":ie("cancel",e),ie("close",e);break;case"iframe":case"object":case"embed":ie("load",e);break;case"video":case"audio":for(n=0;n<tu.length;n++)ie(tu[n],e);break;case"source":ie("error",e);break;case"img":case"image":case"link":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"input":ie("invalid",e),u1(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),jh(e);break;case"select":ie("invalid",e);break;case"textarea":ie("invalid",e),h1(e,r.value,r.defaultValue,r.children),jh(e)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||r.suppressHydrationWarning===!0||fS(e.textContent,n)?(r.popover!=null&&(ie("beforetoggle",e),ie("toggle",e)),r.onScroll!=null&&ie("scroll",e),r.onScrollEnd!=null&&ie("scrollend",e),r.onClick!=null&&(e.onclick=ld),e=!0):e=!1,e||As(t)}function cE(t){for(Pt=t.return;Pt;)switch(Pt.tag){case 5:case 13:Bn=!1;return;case 27:case 3:Bn=!0;return;default:Pt=Pt.return}}function Xo(t){if(t!==Pt)return!1;if(!he)return cE(t),he=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||hg(t.type,t.memoizedProps)),n=!n),n&&je&&As(t),cE(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){je=xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}je=null}}else e===27?(e=je,Li(t.type)?(t=mg,mg=null,je=t):je=e):je=Pt?xn(t.stateNode.nextSibling):null;return!0}function Ou(){je=Pt=null,he=!1}function hE(){var t=ms;return t!==null&&(Ut===null?Ut=t:Ut.push.apply(Ut,t),ms=null),t}function Jl(t){ms===null?ms=[t]:ms.push(t)}var Bp=tr(null),Fs=null,gr=null;function Jr(t,e,n){Oe(Bp,e._currentValue),e._currentValue=n}function br(t){t._currentValue=Bp.current,ht(Bp)}function zp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qp(t,e,n,r){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var a=i.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=i;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),zp(s.return,n,t),r||(a=null);break e}s=o.next}}else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),zp(a,n,t),a=null}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}}function Vu(t,e,n,r){t=null;for(var i=e,s=!1;i!==null;){if(!s){if(i.flags&524288)s=!0;else if(i.flags&262144)break}if(i.tag===10){var a=i.alternate;if(a===null)throw Error(j(387));if(a=a.memoizedProps,a!==null){var o=i.type;un(i.pendingProps.value,a.value)||(t!==null?t.push(o):t=[o])}}else if(i===kh.current){if(a=i.alternate,a===null)throw Error(j(387));a.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(iu):t=[iu])}i=i.return}t!==null&&qp(e,t,n,r),e.flags|=262144}function Hh(t){for(t=t.firstContext;t!==null;){if(!un(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ss(t){Fs=t,gr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function St(t){return P1(Fs,t)}function Oc(t,e){return Fs===null&&Ss(t),P1(t,e)}function P1(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},gr===null){if(t===null)throw Error(j(308));gr=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else gr=gr.next=e;return n}var TN=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},bN=it.unstable_scheduleCallback,wN=it.unstable_NormalPriority,tt={$$typeof:dr,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ry(){return{controller:new TN,data:new Map,refCount:0}}function ku(t){t.refCount--,t.refCount===0&&bN(wN,function(){t.controller.abort()})}var wl=null,Fp=0,qa=0,Da=null;function AN(t,e){if(wl===null){var n=wl=[];Fp=0,qa=Xy(),Da={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Fp++,e.then(fE,fE),e}function fE(){if(--Fp===0&&wl!==null){Da!==null&&(Da.status="fulfilled");var t=wl;wl=null,qa=0,Da=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function SN(t,e){var n=[],r={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(r.status="rejected",r.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),r}var dE=W.S;W.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&AN(t,e),dE!==null&&dE(t,e)};var ps=tr(null);function xy(){var t=ps.current;return t!==null?t:Ae.pooledCache}function oh(t,e){e===null?Oe(ps,ps.current):Oe(ps,e.pool)}function O1(){var t=xy();return t===null?null:{parent:tt._currentValue,pool:t}}var Mu=Error(j(460)),V1=Error(j(474)),td=Error(j(542)),Hp={then:function(){}};function mE(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Vc(){}function k1(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Vc,Vc),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,gE(t),t;default:if(typeof e.status=="string")e.then(Vc,Vc);else{if(t=Ae,t!==null&&100<t.shellSuspendCounter)throw Error(j(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=r}},function(r){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,gE(t),t}throw Al=e,Mu}}var Al=null;function pE(){if(Al===null)throw Error(j(459));var t=Al;return Al=null,t}function gE(t){if(t===Mu||t===td)throw Error(j(483))}var Wr=!1;function Cy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function gi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function yi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,e=zh(t),C1(t,null,n),e}return ed(t,r,e,n),zh(t)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,r1(t,n)}}function Vm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,callbacks:r.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var $p=!1;function Il(){if($p){var t=Da;if(t!==null)throw t}}function Rl(t,e,n,r){$p=!1;var i=t.updateQueue;Wr=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;a=0,h=c=l=null,o=s;do{var m=o.lane&-536870913,g=m!==o.lane;if(g?(ue&m)===m:(r&m)===m){m!==0&&m===qa&&($p=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var w=t,x=o;m=e;var C=n;switch(x.tag){case 1:if(w=x.payload,typeof w=="function"){d=w.call(C,d,m);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,m=typeof w=="function"?w.call(C,d,m):w,m==null)break e;d=Ce({},d,m);break e;case 2:Wr=!0}}m=o.callback,m!==null&&(t.flags|=64,g&&(t.flags|=8192),g=i.callbacks,g===null?i.callbacks=[m]:g.push(m))}else g={lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=g,l=d):h=h.next=g,a|=m;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;g=o,o=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,s===null&&(i.shared.lanes=0),Di|=a,t.lanes=a,t.memoizedState=d}}function M1(t,e){if(typeof t!="function")throw Error(j(191,t));t.call(e)}function L1(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)M1(n[t],e)}var Fa=tr(null),Gh=tr(0);function yE(t,e){t=xr,Oe(Gh,t),Oe(Fa,e),xr=t|e.baseLanes}function Kp(){Oe(Gh,xr),Oe(Fa,Fa.current)}function Dy(){xr=Gh.current,ht(Fa),ht(Gh)}var xi=0,ne=null,Ee=null,Je=null,$h=!1,Na=!1,Is=!1,Kh=0,Zl=0,Pa=null,IN=0;function $e(){throw Error(j(321))}function Ny(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function Py(t,e,n,r,i,s){return xi=s,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,W.H=t===null||t.memoizedState===null?mA:pA,Is=!1,s=n(r,i),Is=!1,Na&&(s=j1(e,n,r,i)),U1(t),s}function U1(t){W.H=Qh;var e=Ee!==null&&Ee.next!==null;if(xi=0,Je=Ee=ne=null,$h=!1,Zl=0,Pa=null,e)throw Error(j(300));t===null||ct||(t=t.dependencies,t!==null&&Hh(t)&&(ct=!0))}function j1(t,e,n,r){ne=t;var i=0;do{if(Na&&(Pa=null),Zl=0,Na=!1,25<=i)throw Error(j(301));if(i+=1,Je=Ee=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}W.H=ON,s=e(n,r)}while(Na);return s}function RN(){var t=W.H,e=t.useState()[0];return e=typeof e.then=="function"?Lu(e):e,t=t.useState()[0],(Ee!==null?Ee.memoizedState:null)!==t&&(ne.flags|=1024),e}function Oy(){var t=Kh!==0;return Kh=0,t}function Vy(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function ky(t){if($h){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}$h=!1}xi=0,Je=Ee=ne=null,Na=!1,Zl=Kh=0,Pa=null}function Mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ne.memoizedState=Je=t:Je=Je.next=t,Je}function et(){if(Ee===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=Ee.next;var e=Je===null?ne.memoizedState:Je.next;if(e!==null)Je=e,Ee=t;else{if(t===null)throw ne.alternate===null?Error(j(467)):Error(j(310));Ee=t,t={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Je===null?ne.memoizedState=Je=t:Je=Je.next=t}return Je}function My(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lu(t){var e=Zl;return Zl+=1,Pa===null&&(Pa=[]),t=k1(Pa,t,e),e=ne,(Je===null?e.memoizedState:Je.next)===null&&(e=e.alternate,W.H=e===null||e.memoizedState===null?mA:pA),t}function nd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Lu(t);if(t.$$typeof===dr)return St(t)}throw Error(j(438,String(t)))}function Ly(t){var e=null,n=ne.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var r=ne.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=My(),ne.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),r=0;r<t;r++)n[r]=hD;return e.index++,n}function Ir(t,e){return typeof e=="function"?e(t):e}function lh(t){var e=et();return Uy(e,Ee,t)}function Uy(t,e,n){var r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=n;var i=t.baseQueue,s=r.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}e.baseQueue=i=s,r.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var o=a=null,l=null,c=e,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(ue&d)===d:(xi&d)===d){var m=c.revertLane;if(m===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===qa&&(h=!0);else if((xi&m)===m){c=c.next,m===qa&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,a=s):l=l.next=d,ne.lanes|=m,Di|=m;d=c.action,Is&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else m={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=m,a=s):l=l.next=m,ne.lanes|=d,Di|=d;c=c.next}while(c!==null&&c!==e);if(l===null?a=s:l.next=o,!un(s,t.memoizedState)&&(ct=!0,h&&(n=Da,n!==null)))throw n;t.memoizedState=s,t.baseState=a,t.baseQueue=l,r.lastRenderedState=s}return i===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function km(t){var e=et(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);un(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function B1(t,e,n){var r=ne,i=et(),s=he;if(s){if(n===void 0)throw Error(j(407));n=n()}else n=e();var a=!un((Ee||i).memoizedState,n);a&&(i.memoizedState=n,ct=!0),i=i.queue;var o=F1.bind(null,r,i,t);if(Uu(2048,8,o,[t]),i.getSnapshot!==e||a||Je!==null&&Je.memoizedState.tag&1){if(r.flags|=2048,Ha(9,rd(),q1.bind(null,r,i,n,e),null),Ae===null)throw Error(j(349));s||xi&124||z1(r,e,n)}return n}function z1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e=My(),ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function q1(t,e,n,r){e.value=n,e.getSnapshot=r,H1(e)&&G1(t)}function F1(t,e,n){return n(function(){H1(e)&&G1(t)})}function H1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function G1(t){var e=Eo(t,2);e!==null&&an(e,t,2)}function Qp(t){var e=Mt();if(typeof t=="function"){var n=t;if(t=n(),Is){ci(!0);try{n()}finally{ci(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:t},e}function $1(t,e,n,r){return t.baseState=n,Uy(t,Ee,typeof r=="function"?r:Ir)}function xN(t,e,n,r,i){if(id(t))throw Error(j(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){s.listeners.push(a)}};W.T!==null?n(!0):s.isTransition=!1,r(s),n=e.pending,n===null?(s.next=e.pending=s,K1(e,s)):(s.next=n.next,e.pending=n.next=s)}}function K1(t,e){var n=e.action,r=e.payload,i=t.state;if(e.isTransition){var s=W.T,a={};W.T=a;try{var o=n(i,r),l=W.S;l!==null&&l(a,o),_E(t,e,o)}catch(c){Yp(t,e,c)}finally{W.T=s}}else try{s=n(i,r),_E(t,e,s)}catch(c){Yp(t,e,c)}}function _E(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){vE(t,e,r)},function(r){return Yp(t,e,r)}):vE(t,e,n)}function vE(t,e,n){e.status="fulfilled",e.value=n,Q1(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,K1(t,n)))}function Yp(t,e,n){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=n,Q1(e),e=e.next;while(e!==r)}t.action=null}function Q1(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Y1(t,e){return e}function EE(t,e){if(he){var n=Ae.formState;if(n!==null){e:{var r=ne;if(he){if(je){t:{for(var i=je,s=Bn;i.nodeType!==8;){if(!s){i=null;break t}if(i=xn(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){je=xn(i.nextSibling),r=i.data==="F!";break e}}As(r)}r=!1}r&&(e=n[0])}}return n=Mt(),n.memoizedState=n.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y1,lastRenderedState:e},n.queue=r,n=hA.bind(null,ne,r),r.dispatch=n,r=Qp(!1),s=qy.bind(null,ne,!1,r.queue),r=Mt(),i={state:e,dispatch:null,action:t,pending:null},r.queue=i,n=xN.bind(null,ne,i,s,n),i.dispatch=n,r.memoizedState=t,[e,n,!1]}function TE(t){var e=et();return X1(e,Ee,t)}function X1(t,e,n){if(e=Uy(t,e,Y1)[0],t=lh(Ir)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Lu(e)}catch(a){throw a===Mu?td:a}else r=e;e=et();var i=e.queue,s=i.dispatch;return n!==e.memoizedState&&(ne.flags|=2048,Ha(9,rd(),CN.bind(null,i,n),null)),[r,s,t]}function CN(t,e){t.action=e}function bE(t){var e=et(),n=Ee;if(n!==null)return X1(e,n,t);et(),e=e.memoizedState,n=et();var r=n.queue.dispatch;return n.memoizedState=t,[e,r,!1]}function Ha(t,e,n,r){return t={tag:t,create:n,deps:r,inst:e,next:null},e=ne.updateQueue,e===null&&(e=My(),ne.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t),t}function rd(){return{destroy:void 0,resource:void 0}}function W1(){return et().memoizedState}function uh(t,e,n,r){var i=Mt();r=r===void 0?null:r,ne.flags|=t,i.memoizedState=Ha(1|e,rd(),n,r)}function Uu(t,e,n,r){var i=et();r=r===void 0?null:r;var s=i.memoizedState.inst;Ee!==null&&r!==null&&Ny(r,Ee.memoizedState.deps)?i.memoizedState=Ha(e,s,n,r):(ne.flags|=t,i.memoizedState=Ha(1|e,s,n,r))}function wE(t,e){uh(8390656,8,t,e)}function J1(t,e){Uu(2048,8,t,e)}function Z1(t,e){return Uu(4,2,t,e)}function eA(t,e){return Uu(4,4,t,e)}function tA(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nA(t,e,n){n=n!=null?n.concat([t]):null,Uu(4,4,tA.bind(null,e,t),n)}function jy(){}function rA(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return e!==null&&Ny(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function iA(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;if(e!==null&&Ny(e,r[1]))return r[0];if(r=t(),Is){ci(!0);try{t()}finally{ci(!1)}}return n.memoizedState=[r,e],r}function By(t,e,n){return n===void 0||xi&1073741824?t.memoizedState=e:(t.memoizedState=n,t=QA(),ne.lanes|=t,Di|=t,n)}function sA(t,e,n,r){return un(n,e)?n:Fa.current!==null?(t=By(t,n,r),un(t,e)||(ct=!0),t):xi&42?(t=QA(),ne.lanes|=t,Di|=t,e):(ct=!0,t.memoizedState=n)}function aA(t,e,n,r,i){var s=de.p;de.p=s!==0&&8>s?s:8;var a=W.T,o={};W.T=o,qy(t,!1,e,n);try{var l=i(),c=W.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=SN(l,r);xl(t,e,h,sn(t))}else xl(t,e,r,sn(t))}catch(d){xl(t,e,{then:function(){},status:"rejected",reason:d},sn())}finally{de.p=s,W.T=a}}function DN(){}function Xp(t,e,n,r){if(t.tag!==5)throw Error(j(476));var i=oA(t).queue;aA(t,i,e,hs,n===null?DN:function(){return lA(t),n(r)})}function oA(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:hs,baseState:hs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:hs},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function lA(t){var e=oA(t).next.queue;xl(t,e,{},sn())}function zy(){return St(iu)}function uA(){return et().memoizedState}function cA(){return et().memoizedState}function NN(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=sn();t=gi(n);var r=yi(e,t,n);r!==null&&(an(r,e,n),Sl(r,e,n)),e={cache:Ry()},t.payload=e;return}e=e.return}}function PN(t,e,n){var r=sn();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},id(t)?fA(e,n):(n=wy(t,e,n,r),n!==null&&(an(n,t,r),dA(n,e,r)))}function hA(t,e,n){var r=sn();xl(t,e,n,r)}function xl(t,e,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(id(t))fA(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,un(o,a))return ed(t,e,i,0),Ae===null&&Zf(),!1}catch{}finally{}if(n=wy(t,e,i,r),n!==null)return an(n,t,r),dA(n,e,r),!0}return!1}function qy(t,e,n,r){if(r={lane:2,revertLane:Xy(),action:r,hasEagerState:!1,eagerState:null,next:null},id(t)){if(e)throw Error(j(479))}else e=wy(t,n,r,2),e!==null&&an(e,t,2)}function id(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function fA(t,e){Na=$h=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dA(t,e,n){if(n&4194048){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,r1(t,n)}}var Qh={readContext:St,use:nd,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},mA={readContext:St,use:nd,useCallback:function(t,e){return Mt().memoizedState=[t,e===void 0?null:e],t},useContext:St,useEffect:wE,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,uh(4194308,4,tA.bind(null,e,t),n)},useLayoutEffect:function(t,e){return uh(4194308,4,t,e)},useInsertionEffect:function(t,e){uh(4,2,t,e)},useMemo:function(t,e){var n=Mt();e=e===void 0?null:e;var r=t();if(Is){ci(!0);try{t()}finally{ci(!1)}}return n.memoizedState=[r,e],r},useReducer:function(t,e,n){var r=Mt();if(n!==void 0){var i=n(e);if(Is){ci(!0);try{n(e)}finally{ci(!1)}}}else i=e;return r.memoizedState=r.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},r.queue=t,t=t.dispatch=PN.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=Mt();return t={current:t},e.memoizedState=t},useState:function(t){t=Qp(t);var e=t.queue,n=hA.bind(null,ne,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:jy,useDeferredValue:function(t,e){var n=Mt();return By(n,t,e)},useTransition:function(){var t=Qp(!1);return t=aA.bind(null,ne,t.queue,!0,!1),Mt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var r=ne,i=Mt();if(he){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ae===null)throw Error(j(349));ue&124||z1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wE(F1.bind(null,r,s,t),[t]),r.flags|=2048,Ha(9,rd(),q1.bind(null,r,s,n,e),null),n},useId:function(){var t=Mt(),e=Ae.identifierPrefix;if(he){var n=pr,r=mr;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e="«"+e+"R"+n,n=Kh++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=IN++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:zy,useFormState:EE,useActionState:EE,useOptimistic:function(t){var e=Mt();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=qy.bind(null,ne,!0,n),n.dispatch=e,[t,e]},useMemoCache:Ly,useCacheRefresh:function(){return Mt().memoizedState=NN.bind(null,ne)}},pA={readContext:St,use:nd,useCallback:rA,useContext:St,useEffect:J1,useImperativeHandle:nA,useInsertionEffect:Z1,useLayoutEffect:eA,useMemo:iA,useReducer:lh,useRef:W1,useState:function(){return lh(Ir)},useDebugValue:jy,useDeferredValue:function(t,e){var n=et();return sA(n,Ee.memoizedState,t,e)},useTransition:function(){var t=lh(Ir)[0],e=et().memoizedState;return[typeof t=="boolean"?t:Lu(t),e]},useSyncExternalStore:B1,useId:uA,useHostTransitionStatus:zy,useFormState:TE,useActionState:TE,useOptimistic:function(t,e){var n=et();return $1(n,Ee,t,e)},useMemoCache:Ly,useCacheRefresh:cA},ON={readContext:St,use:nd,useCallback:rA,useContext:St,useEffect:J1,useImperativeHandle:nA,useInsertionEffect:Z1,useLayoutEffect:eA,useMemo:iA,useReducer:km,useRef:W1,useState:function(){return km(Ir)},useDebugValue:jy,useDeferredValue:function(t,e){var n=et();return Ee===null?By(n,t,e):sA(n,Ee.memoizedState,t,e)},useTransition:function(){var t=km(Ir)[0],e=et().memoizedState;return[typeof t=="boolean"?t:Lu(t),e]},useSyncExternalStore:B1,useId:uA,useHostTransitionStatus:zy,useFormState:bE,useActionState:bE,useOptimistic:function(t,e){var n=et();return Ee!==null?$1(n,Ee,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Ly,useCacheRefresh:cA},Oa=null,eu=0;function kc(t){var e=eu;return eu+=1,Oa===null&&(Oa=[]),k1(Oa,t,e)}function Wo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Mc(t,e){throw e.$$typeof===uD?Error(j(525)):(t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function AE(t){var e=t._init;return e(t._payload)}function gA(t){function e(v,y){if(t){var T=v.deletions;T===null?(v.deletions=[y],v.flags|=16):T.push(y)}}function n(v,y){if(!t)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function r(v){for(var y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function i(v,y){return v=Tr(v,y),v.index=0,v.sibling=null,v}function s(v,y,T){return v.index=T,t?(T=v.alternate,T!==null?(T=T.index,T<y?(v.flags|=67108866,y):T):(v.flags|=67108866,y)):(v.flags|=1048576,y)}function a(v){return t&&v.alternate===null&&(v.flags|=67108866),v}function o(v,y,T,N){return y===null||y.tag!==6?(y=Pm(T,v.mode,N),y.return=v,y):(y=i(y,T),y.return=v,y)}function l(v,y,T,N){var U=T.type;return U===ma?h(v,y,T.props.children,N,T.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Xr&&AE(U)===y.type)?(y=i(y,T.props),Wo(y,T),y.return=v,y):(y=ah(T.type,T.key,T.props,null,v.mode,N),Wo(y,T),y.return=v,y)}function c(v,y,T,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=Om(T,v.mode,N),y.return=v,y):(y=i(y,T.children||[]),y.return=v,y)}function h(v,y,T,N,U){return y===null||y.tag!==7?(y=fs(T,v.mode,N,U),y.return=v,y):(y=i(y,T),y.return=v,y)}function d(v,y,T){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Pm(""+y,v.mode,T),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xc:return T=ah(y.type,y.key,y.props,null,v.mode,T),Wo(T,y),T.return=v,T;case ll:return y=Om(y,v.mode,T),y.return=v,y;case Xr:var N=y._init;return y=N(y._payload),d(v,y,T)}if(ul(y)||Ko(y))return y=fs(y,v.mode,T,null),y.return=v,y;if(typeof y.then=="function")return d(v,kc(y),T);if(y.$$typeof===dr)return d(v,Oc(v,y),T);Mc(v,y)}return null}function m(v,y,T,N){var U=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return U!==null?null:o(v,y,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case xc:return T.key===U?l(v,y,T,N):null;case ll:return T.key===U?c(v,y,T,N):null;case Xr:return U=T._init,T=U(T._payload),m(v,y,T,N)}if(ul(T)||Ko(T))return U!==null?null:h(v,y,T,N,null);if(typeof T.then=="function")return m(v,y,kc(T),N);if(T.$$typeof===dr)return m(v,y,Oc(v,T),N);Mc(v,T)}return null}function g(v,y,T,N,U){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return v=v.get(T)||null,o(y,v,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case xc:return v=v.get(N.key===null?T:N.key)||null,l(y,v,N,U);case ll:return v=v.get(N.key===null?T:N.key)||null,c(y,v,N,U);case Xr:var z=N._init;return N=z(N._payload),g(v,y,T,N,U)}if(ul(N)||Ko(N))return v=v.get(T)||null,h(y,v,N,U,null);if(typeof N.then=="function")return g(v,y,T,kc(N),U);if(N.$$typeof===dr)return g(v,y,T,Oc(y,N),U);Mc(y,N)}return null}function w(v,y,T,N){for(var U=null,z=null,b=y,E=y=0,A=null;b!==null&&E<T.length;E++){b.index>E?(A=b,b=null):A=b.sibling;var S=m(v,b,T[E],N);if(S===null){b===null&&(b=A);break}t&&b&&S.alternate===null&&e(v,b),y=s(S,y,E),z===null?U=S:z.sibling=S,z=S,b=A}if(E===T.length)return n(v,b),he&&es(v,E),U;if(b===null){for(;E<T.length;E++)b=d(v,T[E],N),b!==null&&(y=s(b,y,E),z===null?U=b:z.sibling=b,z=b);return he&&es(v,E),U}for(b=r(b);E<T.length;E++)A=g(b,v,E,T[E],N),A!==null&&(t&&A.alternate!==null&&b.delete(A.key===null?E:A.key),y=s(A,y,E),z===null?U=A:z.sibling=A,z=A);return t&&b.forEach(function(P){return e(v,P)}),he&&es(v,E),U}function x(v,y,T,N){if(T==null)throw Error(j(151));for(var U=null,z=null,b=y,E=y=0,A=null,S=T.next();b!==null&&!S.done;E++,S=T.next()){b.index>E?(A=b,b=null):A=b.sibling;var P=m(v,b,S.value,N);if(P===null){b===null&&(b=A);break}t&&b&&P.alternate===null&&e(v,b),y=s(P,y,E),z===null?U=P:z.sibling=P,z=P,b=A}if(S.done)return n(v,b),he&&es(v,E),U;if(b===null){for(;!S.done;E++,S=T.next())S=d(v,S.value,N),S!==null&&(y=s(S,y,E),z===null?U=S:z.sibling=S,z=S);return he&&es(v,E),U}for(b=r(b);!S.done;E++,S=T.next())S=g(b,v,E,S.value,N),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?E:S.key),y=s(S,y,E),z===null?U=S:z.sibling=S,z=S);return t&&b.forEach(function(V){return e(v,V)}),he&&es(v,E),U}function C(v,y,T,N){if(typeof T=="object"&&T!==null&&T.type===ma&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case xc:e:{for(var U=T.key;y!==null;){if(y.key===U){if(U=T.type,U===ma){if(y.tag===7){n(v,y.sibling),N=i(y,T.props.children),N.return=v,v=N;break e}}else if(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Xr&&AE(U)===y.type){n(v,y.sibling),N=i(y,T.props),Wo(N,T),N.return=v,v=N;break e}n(v,y);break}else e(v,y);y=y.sibling}T.type===ma?(N=fs(T.props.children,v.mode,N,T.key),N.return=v,v=N):(N=ah(T.type,T.key,T.props,null,v.mode,N),Wo(N,T),N.return=v,v=N)}return a(v);case ll:e:{for(U=T.key;y!==null;){if(y.key===U)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){n(v,y.sibling),N=i(y,T.children||[]),N.return=v,v=N;break e}else{n(v,y);break}else e(v,y);y=y.sibling}N=Om(T,v.mode,N),N.return=v,v=N}return a(v);case Xr:return U=T._init,T=U(T._payload),C(v,y,T,N)}if(ul(T))return w(v,y,T,N);if(Ko(T)){if(U=Ko(T),typeof U!="function")throw Error(j(150));return T=U.call(T),x(v,y,T,N)}if(typeof T.then=="function")return C(v,y,kc(T),N);if(T.$$typeof===dr)return C(v,y,Oc(v,T),N);Mc(v,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,y!==null&&y.tag===6?(n(v,y.sibling),N=i(y,T),N.return=v,v=N):(n(v,y),N=Pm(T,v.mode,N),N.return=v,v=N),a(v)):n(v,y)}return function(v,y,T,N){try{eu=0;var U=C(v,y,T,N);return Oa=null,U}catch(b){if(b===Mu||b===td)throw b;var z=Jt(29,b,null,v.mode);return z.lanes=N,z.return=v,z}finally{}}}var Ga=gA(!0),yA=gA(!1),vn=tr(null),Qn=null;function Zr(t){var e=t.alternate;Oe(rt,rt.current&1),Oe(vn,t),Qn===null&&(e===null||Fa.current!==null||e.memoizedState!==null)&&(Qn=t)}function _A(t){if(t.tag===22){if(Oe(rt,rt.current),Oe(vn,t),Qn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Qn=t)}}else ei()}function ei(){Oe(rt,rt.current),Oe(vn,vn.current)}function yr(t){ht(vn),Qn===t&&(Qn=null),ht(rt)}var rt=tr(0);function Yh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||dg(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Mm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wp={enqueueSetState:function(t,e,n){t=t._reactInternals;var r=sn(),i=gi(r);i.payload=e,n!=null&&(i.callback=n),e=yi(t,i,r),e!==null&&(an(e,t,r),Sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=sn(),i=gi(r);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=yi(t,i,r),e!==null&&(an(e,t,r),Sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),r=gi(n);r.tag=2,e!=null&&(r.callback=e),e=yi(t,r,n),e!==null&&(an(e,t,n),Sl(e,t,n))}};function SE(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Wl(n,r)||!Wl(i,s):!0}function IE(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wp.enqueueReplaceState(e,e.state,null)}function Rs(t,e){var n=e;if("ref"in e){n={};for(var r in e)r!=="ref"&&(n[r]=e[r])}if(t=t.defaultProps){n===e&&(n=Ce({},n));for(var i in t)n[i]===void 0&&(n[i]=t[i])}return n}var Xh=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function vA(t){Xh(t)}function EA(t){console.error(t)}function TA(t){Xh(t)}function Wh(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function RE(t,e,n){try{var r=t.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Jp(t,e,n){return n=gi(n),n.tag=3,n.payload={element:null},n.callback=function(){Wh(t,e)},n}function bA(t){return t=gi(t),t.tag=3,t}function wA(t,e,n,r){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=r.value;t.payload=function(){return i(s)},t.callback=function(){RE(e,n,r)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){RE(e,n,r),typeof i!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var o=r.stack;this.componentDidCatch(r.value,{componentStack:o!==null?o:""})})}function VN(t,e,n,r,i){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=n.alternate,e!==null&&Vu(e,n,i,!0),n=vn.current,n!==null){switch(n.tag){case 13:return Qn===null?ag():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Hp?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([r]):e.add(r),Km(t,r,i)),!1;case 22:return n.flags|=65536,r===Hp?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([r]):n.add(r)),Km(t,r,i)),!1}throw Error(j(435,n.tag))}return Km(t,r,i),ag(),!1}if(he)return e=vn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=i,r!==jp&&(t=Error(j(422),{cause:r}),Jl(gn(t,n)))):(r!==jp&&(e=Error(j(423),{cause:r}),Jl(gn(e,n))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,r=gn(r,n),i=Jp(t.stateNode,r,i),Vm(t,i),Be!==4&&(Be=2)),!1;var s=Error(j(520),{cause:r});if(s=gn(s,n),Nl===null?Nl=[s]:Nl.push(s),Be!==4&&(Be=2),e===null)return!0;r=gn(r,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=i&-i,n.lanes|=t,t=Jp(n.stateNode,r,t),Vm(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(_i===null||!_i.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=bA(i),wA(i,t,n,r),Vm(n,i),!1}n=n.return}while(n!==null);return!1}var AA=Error(j(461)),ct=!1;function dt(t,e,n,r){e.child=t===null?yA(e,null,n,r):Ga(e,t.child,n,r)}function xE(t,e,n,r,i){n=n.render;var s=e.ref;if("ref"in r){var a={};for(var o in r)o!=="ref"&&(a[o]=r[o])}else a=r;return Ss(e),r=Py(t,e,n,a,s,i),o=Oy(),t!==null&&!ct?(Vy(t,e,i),Rr(t,e,i)):(he&&o&&Sy(e),e.flags|=1,dt(t,e,r,i),e.child)}function CE(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ay(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,SA(t,e,s,r,i)):(t=ah(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Fy(t,i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wl,n(a,r)&&t.ref===e.ref)return Rr(t,e,i)}return e.flags|=1,t=Tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function SA(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wl(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,Fy(t,i))t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,Rr(t,e,i)}return Zp(t,e,n,r,i)}function IA(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"){if(e.flags&128){if(r=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;e.childLanes=s&~r}else e.childLanes=0,e.child=null;return DE(t,e,r,n)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&oh(e,s!==null?s.cachePool:null),s!==null?yE(e,s):Kp(),_A(e);else return e.lanes=e.childLanes=536870912,DE(t,e,s!==null?s.baseLanes|n:n,n)}else s!==null?(oh(e,s.cachePool),yE(e,s),ei(),e.memoizedState=null):(t!==null&&oh(e,null),Kp(),ei());return dt(t,e,i,n),e.child}function DE(t,e,n,r){var i=xy();return i=i===null?null:{parent:tt._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},t!==null&&oh(e,null),Kp(),_A(e),t!==null&&Vu(t,e,r,!0),null}function ch(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Zp(t,e,n,r,i){return Ss(e),n=Py(t,e,n,r,void 0,i),r=Oy(),t!==null&&!ct?(Vy(t,e,i),Rr(t,e,i)):(he&&r&&Sy(e),e.flags|=1,dt(t,e,n,i),e.child)}function NE(t,e,n,r,i,s){return Ss(e),e.updateQueue=null,n=j1(e,r,n,i),U1(t),r=Oy(),t!==null&&!ct?(Vy(t,e,s),Rr(t,e,s)):(he&&r&&Sy(e),e.flags|=1,dt(t,e,n,s),e.child)}function PE(t,e,n,r,i){if(Ss(e),e.stateNode===null){var s=ba,a=n.contextType;typeof a=="object"&&a!==null&&(s=St(a)),s=new n(r,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Wp,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=r,s.state=e.memoizedState,s.refs={},Cy(e),a=n.contextType,s.context=typeof a=="object"&&a!==null?St(a):ba,s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Mm(e,n,a,r),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(a=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),a!==s.state&&Wp.enqueueReplaceState(s,s.state,null),Rl(e,r,s,i),Il(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=Rs(n,o);s.props=l;var c=s.context,h=n.contextType;a=ba,typeof h=="object"&&h!==null&&(a=St(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==a)&&IE(e,s,r,a),Wr=!1;var m=e.memoizedState;s.state=m,Rl(e,r,s,i),Il(),c=e.memoizedState,o||m!==c||Wr?(typeof d=="function"&&(Mm(e,n,d,r),c=e.memoizedState),(l=Wr||SE(e,n,l,r,m,c,a))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),s.props=r,s.state=c,s.context=a,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Gp(t,e),a=e.memoizedProps,h=Rs(n,a),s.props=h,d=e.pendingProps,m=s.context,c=n.contextType,l=ba,typeof c=="object"&&c!==null&&(l=St(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||m!==l)&&IE(e,s,r,l),Wr=!1,m=e.memoizedState,s.state=m,Rl(e,r,s,i),Il();var g=e.memoizedState;a!==d||m!==g||Wr||t!==null&&t.dependencies!==null&&Hh(t.dependencies)?(typeof o=="function"&&(Mm(e,n,o,r),g=e.memoizedState),(h=Wr||SE(e,n,h,r,m,g,l)||t!==null&&t.dependencies!==null&&Hh(t.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),s.props=r,s.state=g,s.context=l,r=h):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return s=r,ch(t,e),r=(e.flags&128)!==0,s||r?(s=e.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&r?(e.child=Ga(e,t.child,null,i),e.child=Ga(e,null,n,i)):dt(t,e,n,i),e.memoizedState=s.state,t=e.child):t=Rr(t,e,i),t}function OE(t,e,n,r){return Ou(),e.flags|=256,dt(t,e,n,r),e.child}var Lm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Um(t){return{baseLanes:t,cachePool:O1()}}function jm(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=_n),t}function RA(t,e,n){var r=e.pendingProps,i=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(rt.current&2)!==0),a&&(i=!0,e.flags&=-129),a=(e.flags&32)!==0,e.flags&=-33,t===null){if(he){if(i?Zr(e):ei(),he){var o=je,l;if(l=o){e:{for(l=o,o=Bn;l.nodeType!==8;){if(!o){o=null;break e}if(l=xn(l.nextSibling),l===null){o=null;break e}}o=l}o!==null?(e.memoizedState={dehydrated:o,treeContext:ds!==null?{id:mr,overflow:pr}:null,retryLane:536870912,hydrationErrors:null},l=Jt(18,null,null,0),l.stateNode=o,l.return=e,e.child=l,Pt=e,je=null,l=!0):l=!1}l||As(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return dg(o)?e.lanes=32:e.lanes=536870912,null;yr(e)}return o=r.children,r=r.fallback,i?(ei(),i=e.mode,o=Jh({mode:"hidden",children:o},i),r=fs(r,i,n,null),o.return=e,r.return=e,o.sibling=r,e.child=o,i=e.child,i.memoizedState=Um(n),i.childLanes=jm(t,a,n),e.memoizedState=Lm,r):(Zr(e),eg(e,o))}if(l=t.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(Zr(e),e.flags&=-257,e=Bm(t,e,n)):e.memoizedState!==null?(ei(),e.child=t.child,e.flags|=128,e=null):(ei(),i=r.fallback,o=e.mode,r=Jh({mode:"visible",children:r.children},o),i=fs(i,o,n,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,Ga(e,t.child,null,n),r=e.child,r.memoizedState=Um(n),r.childLanes=jm(t,a,n),e.memoizedState=Lm,e=i);else if(Zr(e),dg(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;a=c,r=Error(j(419)),r.stack="",r.digest=a,Jl({value:r,source:null,stack:null}),e=Bm(t,e,n)}else if(ct||Vu(t,e,n,!1),a=(n&t.childLanes)!==0,ct||a){if(a=Ae,a!==null&&(r=n&-n,r=r&42?1:dy(r),r=r&(a.suspendedLanes|n)?0:r,r!==0&&r!==l.retryLane))throw l.retryLane=r,Eo(t,r),an(a,t,r),AA;o.data==="$?"||ag(),e=Bm(t,e,n)}else o.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,je=xn(o.nextSibling),Pt=e,he=!0,ms=null,Bn=!1,t!==null&&(dn[mn++]=mr,dn[mn++]=pr,dn[mn++]=ds,mr=t.id,pr=t.overflow,ds=e),e=eg(e,r.children),e.flags|=4096);return e}return i?(ei(),i=r.fallback,o=e.mode,l=t.child,c=l.sibling,r=Tr(l,{mode:"hidden",children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,c!==null?i=Tr(c,i):(i=fs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o===null?o=Um(n):(l=o.cachePool,l!==null?(c=tt._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=O1(),o={baseLanes:o.baseLanes|n,cachePool:l}),i.memoizedState=o,i.childLanes=jm(t,a,n),e.memoizedState=Lm,r):(Zr(e),n=t.child,t=n.sibling,n=Tr(n,{mode:"visible",children:r.children}),n.return=e,n.sibling=null,t!==null&&(a=e.deletions,a===null?(e.deletions=[t],e.flags|=16):a.push(t)),e.child=n,e.memoizedState=null,n)}function eg(t,e){return e=Jh({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Jh(t,e){return t=Jt(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Bm(t,e,n){return Ga(e,t.child,null,n),t=eg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VE(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zp(t.return,e,n)}function zm(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function xA(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=rt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&VE(t,n,e);else if(t.tag===19)VE(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(Oe(rt,r),i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zm(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zm(e,!0,n,null,s);break;case"together":zm(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Di|=e.lanes,!(n&e.childLanes))if(t!==null){if(Vu(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Fy(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Hh(t)))}function kN(t,e,n){switch(e.tag){case 3:Mh(e,e.stateNode.containerInfo),Jr(e,tt,t.memoizedState.cache),Ou();break;case 27:case 5:Cp(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:Jr(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(Zr(e),e.flags|=128,null):n&e.child.childLanes?RA(t,e,n):(Zr(e),t=Rr(t,e,n),t!==null?t.sibling:null);Zr(e);break;case 19:var i=(t.flags&128)!==0;if(r=(n&e.childLanes)!==0,r||(Vu(t,e,n,!1),r=(n&e.childLanes)!==0),i){if(r)return xA(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(rt,rt.current),r)break;return null;case 22:case 23:return e.lanes=0,IA(t,e,n);case 24:Jr(e,tt,t.memoizedState.cache)}return Rr(t,e,n)}function CA(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)ct=!0;else{if(!Fy(t,n)&&!(e.flags&128))return ct=!1,kN(t,e,n);ct=!!(t.flags&131072)}else ct=!1,he&&e.flags&1048576&&N1(e,Fh,e.index);switch(e.lanes=0,e.tag){case 16:e:{t=e.pendingProps;var r=e.elementType,i=r._init;if(r=i(r._payload),e.type=r,typeof r=="function")Ay(r)?(t=Rs(r,t),e.tag=1,e=PE(null,e,r,t,n)):(e.tag=0,e=Zp(null,e,r,t,n));else{if(r!=null){if(i=r.$$typeof,i===cy){e.tag=11,e=xE(null,e,r,t,n);break e}else if(i===hy){e.tag=14,e=CE(null,e,r,t,n);break e}}throw e=Rp(r)||r,Error(j(306,e,""))}}return e;case 0:return Zp(t,e,e.type,e.pendingProps,n);case 1:return r=e.type,i=Rs(r,e.pendingProps),PE(t,e,r,i,n);case 3:e:{if(Mh(e,e.stateNode.containerInfo),t===null)throw Error(j(387));r=e.pendingProps;var s=e.memoizedState;i=s.element,Gp(t,e),Rl(e,r,null,n);var a=e.memoizedState;if(r=a.cache,Jr(e,tt,r),r!==s.cache&&qp(e,[tt],n,!0),Il(),r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=OE(t,e,r,n);break e}else if(r!==i){i=gn(Error(j(424)),e),Jl(i),e=OE(t,e,r,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=xn(t.firstChild),Pt=e,he=!0,ms=null,Bn=!0,n=yA(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ou(),r===i){e=Rr(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 26:return ch(t,e),t===null?(n=WE(e.type,null,e.pendingProps,null))?e.memoizedState=n:he||(n=e.type,t=e.pendingProps,r=af(pi.current).createElement(n),r[At]=e,r[Ht]=t,gt(r,n,t),ut(r),e.stateNode=r):e.memoizedState=WE(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Cp(e),t===null&&he&&(r=e.stateNode=pS(e.type,e.pendingProps,pi.current),Pt=e,Bn=!0,i=je,Li(e.type)?(mg=i,je=xn(r.firstChild)):je=i),dt(t,e,e.pendingProps.children,n),ch(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&he&&((i=r=je)&&(r=uP(r,e.type,e.pendingProps,Bn),r!==null?(e.stateNode=r,Pt=e,je=xn(r.firstChild),Bn=!1,i=!0):i=!1),i||As(e)),Cp(e),i=e.type,s=e.pendingProps,a=t!==null?t.memoizedProps:null,r=s.children,hg(i,s)?r=null:a!==null&&hg(i,a)&&(e.flags|=32),e.memoizedState!==null&&(i=Py(t,e,RN,null,null,n),iu._currentValue=i),ch(t,e),dt(t,e,r,n),e.child;case 6:return t===null&&he&&((t=n=je)&&(n=cP(n,e.pendingProps,Bn),n!==null?(e.stateNode=n,Pt=e,je=null,t=!0):t=!1),t||As(e)),null;case 13:return RA(t,e,n);case 4:return Mh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ga(e,null,r,n):dt(t,e,r,n),e.child;case 11:return xE(t,e,e.type,e.pendingProps,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:return r=e.pendingProps,Jr(e,e.type,r.value),dt(t,e,r.children,n),e.child;case 9:return i=e.type._context,r=e.pendingProps.children,Ss(e),i=St(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return CE(t,e,e.type,e.pendingProps,n);case 15:return SA(t,e,e.type,e.pendingProps,n);case 19:return xA(t,e,n);case 31:return r=e.pendingProps,n=e.mode,r={mode:r.mode,children:r.children},t===null?(n=Jh(r,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Tr(t.child,r),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return IA(t,e,n);case 24:return Ss(e),r=St(tt),t===null?(i=xy(),i===null&&(i=Ae,s=Ry(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),e.memoizedState={parent:r,cache:i},Cy(e),Jr(e,tt,i)):(t.lanes&n&&(Gp(t,e),Rl(e,null,null,n),Il()),i=t.memoizedState,s=e.memoizedState,i.parent!==r?(i={parent:r,cache:r},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Jr(e,tt,r)):(r=s.cache,Jr(e,tt,r),r!==i.cache&&qp(e,[tt],n,!0))),dt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(j(156,e.tag))}function ur(t){t.flags|=4}function kE(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!_S(e)){if(e=vn.current,e!==null&&((ue&4194048)===ue?Qn!==null:(ue&62914560)!==ue&&!(ue&536870912)||e!==Qn))throw Al=Hp,V1;t.flags|=8192}}function Lc(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?t1():536870912,t.lanes|=e,$a|=e)}function Jo(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MN(t,e,n){var r=e.pendingProps;switch(Iy(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(e),null;case 1:return ke(e),null;case 3:return n=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),br(tt),ja(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Xo(e)?ur(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hE())),ke(e),null;case 26:return n=e.memoizedState,t===null?(ur(e),n!==null?(ke(e),kE(e,n)):(ke(e),e.flags&=-16777217)):n?n!==t.memoizedState?(ur(e),ke(e),kE(e,n)):(ke(e),e.flags&=-16777217):(t.memoizedProps!==r&&ur(e),ke(e),e.flags&=-16777217),null;case 27:Lh(e),n=pi.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&ur(e);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ke(e),null}t=$n.current,Xo(e)?uE(e):(t=pS(i,r,n),e.stateNode=t,ur(e))}return ke(e),null;case 5:if(Lh(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&ur(e);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ke(e),null}if(t=$n.current,Xo(e))uE(e);else{switch(i=af(pi.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?i.createElement(n,{is:r.is}):i.createElement(n)}}t[At]=e,t[Ht]=r;e:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;e:switch(gt(t,n,r),n){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ur(e)}}return ke(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&ur(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(t=pi.current,Xo(e)){if(t=e.stateNode,n=e.memoizedProps,r=null,i=Pt,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}t[At]=e,t=!!(t.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||fS(t.nodeValue,n)),t||As(e)}else t=af(t).createTextNode(r),t[At]=e,e.stateNode=t}return ke(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Xo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[At]=e}else Ou(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ke(e),i=!1}else i=hE(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(yr(e),e):(yr(e),null)}if(yr(e),e.flags&128)return e.lanes=n,e;if(n=r!==null,t=t!==null&&t.memoizedState!==null,n){r=e.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool);var s=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==i&&(r.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Lc(e,e.updateQueue),ke(e),null;case 4:return ja(),t===null&&Wy(e.stateNode.containerInfo),ke(e),null;case 10:return br(e.type),ke(e),null;case 19:if(ht(rt),i=e.memoizedState,i===null)return ke(e),null;if(r=(e.flags&128)!==0,s=i.rendering,s===null)if(r)Jo(i,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Yh(t),s!==null){for(e.flags|=128,Jo(i,!1),t=s.updateQueue,e.updateQueue=t,Lc(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)D1(n,t),n=n.sibling;return Oe(rt,rt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Kn()>ef&&(e.flags|=128,r=!0,Jo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Yh(s),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Lc(e,t),Jo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!he)return ke(e),null}else 2*Kn()-i.renderingStartTime>ef&&n!==536870912&&(e.flags|=128,r=!0,Jo(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Kn(),e.sibling=null,t=rt.current,Oe(rt,r?t&1|2:t&1),e):(ke(e),null);case 22:case 23:return yr(e),Dy(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?n&536870912&&!(e.flags&128)&&(ke(e),e.subtreeFlags&6&&(e.flags|=8192)):ke(e),n=e.updateQueue,n!==null&&Lc(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==n&&(e.flags|=2048),t!==null&&ht(ps),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),br(tt),ke(e),null;case 25:return null;case 30:return null}throw Error(j(156,e.tag))}function LN(t,e){switch(Iy(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return br(tt),ja(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Lh(e),null;case 13:if(yr(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Ou()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(rt),null;case 4:return ja(),null;case 10:return br(e.type),null;case 22:case 23:return yr(e),Dy(),t!==null&&ht(ps),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return br(tt),null;case 25:return null;default:return null}}function DA(t,e){switch(Iy(e),e.tag){case 3:br(tt),ja();break;case 26:case 27:case 5:Lh(e);break;case 4:ja();break;case 13:yr(e);break;case 19:ht(rt);break;case 10:br(e.type);break;case 22:case 23:yr(e),Dy(),t!==null&&ht(ps);break;case 24:br(tt)}}function ju(t,e){try{var n=e.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&t)===t){r=void 0;var s=n.create,a=n.inst;r=s(),a.destroy=r}n=n.next}while(n!==i)}}catch(o){be(e,e.return,o)}}function Ci(t,e,n){try{var r=e.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var s=i.next;r=s;do{if((r.tag&t)===t){var a=r.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,i=e;var l=n,c=o;try{c()}catch(h){be(i,l,h)}}}r=r.next}while(r!==s)}}catch(h){be(e,e.return,h)}}function NA(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{L1(e,n)}catch(r){be(t,t.return,r)}}}function PA(t,e,n){n.props=Rs(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(r){be(t,e,r)}}function Cl(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof n=="function"?t.refCleanup=n(r):n.current=r}}catch(i){be(t,e,i)}}function zn(t,e){var n=t.ref,r=t.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(i){be(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){be(t,e,i)}else n.current=null}function OA(t){var e=t.type,n=t.memoizedProps,r=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){be(t,t.return,i)}}function qm(t,e,n){try{var r=t.stateNode;iP(r,t.type,n,e),r[Ht]=e}catch(i){be(t,t.return,i)}}function VA(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Li(t.type)||t.tag===4}function Fm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||VA(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Li(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ld));else if(r!==4&&(r===27&&Li(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(tg(t,e,n),t=t.sibling;t!==null;)tg(t,e,n),t=t.sibling}function Zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(r===27&&Li(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Zh(t,e,n),t=t.sibling;t!==null;)Zh(t,e,n),t=t.sibling}function kA(t){var e=t.stateNode,n=t.memoizedProps;try{for(var r=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);gt(e,r,n),e[At]=t,e[Ht]=n}catch(s){be(t,t.return,s)}}var fr=!1,Ke=!1,Hm=!1,ME=typeof WeakSet=="function"?WeakSet:Set,lt=null;function UN(t,e){if(t=t.containerInfo,ug=cf,t=b1(t),Ty(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,d=t,m=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(o=a+i),d!==s||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(g=d.firstChild)!==null;)m=d,d=g;for(;;){if(d===t)break t;if(m===n&&++c===i&&(o=a),m===s&&++h===r&&(l=a),(g=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cg={focusedElem:t,selectionRange:n},cf=!1,lt=e;lt!==null;)if(e=lt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,lt=t;else for(;lt!==null;){switch(e=lt,s=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,i=s.memoizedProps,s=s.memoizedState,r=n.stateNode;try{var w=Rs(n.type,i,n.elementType===n.type);t=r.getSnapshotBeforeUpdate(w,s),r.__reactInternalSnapshotBeforeUpdate=t}catch(x){be(n,n.return,x)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)fg(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":fg(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(j(163))}if(t=e.sibling,t!==null){t.return=e.return,lt=t;break}lt=e.return}}function MA(t,e,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Hr(t,n),r&4&&ju(5,n);break;case 1:if(Hr(t,n),r&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(a){be(n,n.return,a)}else{var i=Rs(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(a){be(n,n.return,a)}}r&64&&NA(n),r&512&&Cl(n,n.return);break;case 3:if(Hr(t,n),r&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{L1(t,e)}catch(a){be(n,n.return,a)}}break;case 27:e===null&&r&4&&kA(n);case 26:case 5:Hr(t,n),e===null&&r&4&&OA(n),r&512&&Cl(n,n.return);break;case 12:Hr(t,n);break;case 13:Hr(t,n),r&4&&jA(t,n),r&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=KN.bind(null,n),hP(t,n))));break;case 22:if(r=n.memoizedState!==null||fr,!r){e=e!==null&&e.memoizedState!==null||Ke,i=fr;var s=Ke;fr=r,(Ke=e)&&!s?Yr(t,n,(n.subtreeFlags&8772)!==0):Hr(t,n),fr=i,Ke=s}break;case 30:break;default:Hr(t,n)}}function LA(t){var e=t.alternate;e!==null&&(t.alternate=null,LA(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&py(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var De=null,Lt=!1;function cr(t,e,n){for(n=n.child;n!==null;)UA(t,e,n),n=n.sibling}function UA(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(xu,n)}catch{}switch(n.tag){case 26:Ke||zn(n,e),cr(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ke||zn(n,e);var r=De,i=Lt;Li(n.type)&&(De=n.stateNode,Lt=!1),cr(t,e,n),Ol(n.stateNode),De=r,Lt=i;break;case 5:Ke||zn(n,e);case 6:if(r=De,i=Lt,De=null,cr(t,e,n),De=r,Lt=i,De!==null)if(Lt)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(n.stateNode)}catch(s){be(n,e,s)}else try{De.removeChild(n.stateNode)}catch(s){be(n,e,s)}break;case 18:De!==null&&(Lt?(t=De,QE(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),ou(t)):QE(De,n.stateNode));break;case 4:r=De,i=Lt,De=n.stateNode.containerInfo,Lt=!0,cr(t,e,n),De=r,Lt=i;break;case 0:case 11:case 14:case 15:Ke||Ci(2,n,e),Ke||Ci(4,n,e),cr(t,e,n);break;case 1:Ke||(zn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"&&PA(n,e,r)),cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:Ke=(r=Ke)||n.memoizedState!==null,cr(t,e,n),Ke=r;break;default:cr(t,e,n)}}function jA(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ou(t)}catch(n){be(e,e.return,n)}}function jN(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new ME),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new ME),e;default:throw Error(j(435,t.tag))}}function Gm(t,e){var n=jN(t);e.forEach(function(r){var i=QN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 27:if(Li(o.type)){De=o.stateNode,Lt=!1;break e}break;case 5:De=o.stateNode,Lt=!1;break e;case 3:case 4:De=o.stateNode.containerInfo,Lt=!0;break e}o=o.return}if(De===null)throw Error(j(160));UA(s,a,i),De=null,Lt=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)BA(e,t),e=e.sibling}var Sn=null;function BA(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qt(e,t),Yt(t),r&4&&(Ci(3,t,t.return),ju(3,t),Ci(5,t,t.return));break;case 1:Qt(e,t),Yt(t),r&512&&(Ke||n===null||zn(n,n.return)),r&64&&fr&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=Sn;if(Qt(e,t),Yt(t),r&512&&(Ke||n===null||zn(n,n.return)),r&4){var s=n!==null?n.memoizedState:null;if(r=t.memoizedState,n===null)if(r===null)if(t.stateNode===null){e:{r=t.type,n=t.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Nu]||s[At]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(r),i.head.insertBefore(s,i.querySelector("head > title"))),gt(s,r,n),s[At]=t,ut(s),r=s;break e;case"link":var a=ZE("link","href",i).get(r+(n.href||""));if(a){for(var o=0;o<a.length;o++)if(s=a[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break t}}s=i.createElement(r),gt(s,r,n),i.head.appendChild(s);break;case"meta":if(a=ZE("meta","content",i).get(r+(n.content||""))){for(o=0;o<a.length;o++)if(s=a[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(o,1);break t}}s=i.createElement(r),gt(s,r,n),i.head.appendChild(s);break;default:throw Error(j(468,r))}s[At]=t,ut(s),r=s}t.stateNode=r}else eT(i,t.type,t.stateNode);else t.stateNode=JE(i,r,t.memoizedProps);else s!==r?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,r===null?eT(i,t.type,t.stateNode):JE(i,r,t.memoizedProps)):r===null&&t.stateNode!==null&&qm(t,t.memoizedProps,n.memoizedProps)}break;case 27:Qt(e,t),Yt(t),r&512&&(Ke||n===null||zn(n,n.return)),n!==null&&r&4&&qm(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Qt(e,t),Yt(t),r&512&&(Ke||n===null||zn(n,n.return)),t.flags&32){i=t.stateNode;try{za(i,"")}catch(g){be(t,t.return,g)}}r&4&&t.stateNode!=null&&(i=t.memoizedProps,qm(t,i,n!==null?n.memoizedProps:i)),r&1024&&(Hm=!0);break;case 6:if(Qt(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(j(162));r=t.memoizedProps,n=t.stateNode;try{n.nodeValue=r}catch(g){be(t,t.return,g)}}break;case 3:if(dh=null,i=Sn,Sn=of(e.containerInfo),Qt(e,t),Sn=i,Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ou(e.containerInfo)}catch(g){be(t,t.return,g)}Hm&&(Hm=!1,zA(t));break;case 4:r=Sn,Sn=of(t.stateNode.containerInfo),Qt(e,t),Yt(t),Sn=r;break;case 12:Qt(e,t),Yt(t);break;case 13:Qt(e,t),Yt(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Qy=Kn()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Gm(t,r)));break;case 22:i=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=fr,h=Ke;if(fr=c||i,Ke=h||l,Qt(e,t),Ke=h,fr=c,Yt(t),r&8192)e:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||l||fr||Ke||ts(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(s=l.stateNode,i)a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,m=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(g){be(l,l.return,g)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=i?"":l.memoizedProps}catch(g){be(l,l.return,g)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Gm(t,n))));break;case 19:Qt(e,t),Yt(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Gm(t,r)));break;case 30:break;case 21:break;default:Qt(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{for(var n,r=t.return;r!==null;){if(VA(r)){n=r;break}r=r.return}if(n==null)throw Error(j(160));switch(n.tag){case 27:var i=n.stateNode,s=Fm(t);Zh(t,s,i);break;case 5:var a=n.stateNode;n.flags&32&&(za(a,""),n.flags&=-33);var o=Fm(t);Zh(t,o,a);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Fm(t);tg(t,c,l);break;default:throw Error(j(161))}}catch(h){be(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zA(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;zA(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Hr(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)MA(t,e.alternate,e),e=e.sibling}function ts(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ci(4,e,e.return),ts(e);break;case 1:zn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&PA(e,e.return,n),ts(e);break;case 27:Ol(e.stateNode);case 26:case 5:zn(e,e.return),ts(e);break;case 22:e.memoizedState===null&&ts(e);break;case 30:ts(e);break;default:ts(e)}t=t.sibling}}function Yr(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,i=t,s=e,a=s.flags;switch(s.tag){case 0:case 11:case 15:Yr(i,s,n),ju(4,s);break;case 1:if(Yr(i,s,n),r=s,i=r.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(c){be(r,r.return,c)}if(r=s,i=r.updateQueue,i!==null){var o=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)M1(l[i],o)}catch(c){be(r,r.return,c)}}n&&a&64&&NA(s),Cl(s,s.return);break;case 27:kA(s);case 26:case 5:Yr(i,s,n),n&&r===null&&a&4&&OA(s),Cl(s,s.return);break;case 12:Yr(i,s,n);break;case 13:Yr(i,s,n),n&&a&4&&jA(i,s);break;case 22:s.memoizedState===null&&Yr(i,s,n),Cl(s,s.return);break;case 30:break;default:Yr(i,s,n)}e=e.sibling}}function Hy(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&ku(n))}function Gy(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ku(t))}function Ln(t,e,n,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qA(t,e,n,r),e=e.sibling}function qA(t,e,n,r){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ln(t,e,n,r),i&2048&&ju(9,e);break;case 1:Ln(t,e,n,r);break;case 3:Ln(t,e,n,r),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ku(t)));break;case 12:if(i&2048){Ln(t,e,n,r),t=e.stateNode;try{var s=e.memoizedProps,a=s.id,o=s.onPostCommit;typeof o=="function"&&o(a,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){be(e,e.return,l)}}else Ln(t,e,n,r);break;case 13:Ln(t,e,n,r);break;case 23:break;case 22:s=e.stateNode,a=e.alternate,e.memoizedState!==null?s._visibility&2?Ln(t,e,n,r):Dl(t,e):s._visibility&2?Ln(t,e,n,r):(s._visibility|=2,la(t,e,n,r,(e.subtreeFlags&10256)!==0)),i&2048&&Hy(a,e);break;case 24:Ln(t,e,n,r),i&2048&&Gy(e.alternate,e);break;default:Ln(t,e,n,r)}}function la(t,e,n,r,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var s=t,a=e,o=n,l=r,c=a.flags;switch(a.tag){case 0:case 11:case 15:la(s,a,o,l,i),ju(8,a);break;case 23:break;case 22:var h=a.stateNode;a.memoizedState!==null?h._visibility&2?la(s,a,o,l,i):Dl(s,a):(h._visibility|=2,la(s,a,o,l,i)),i&&c&2048&&Hy(a.alternate,a);break;case 24:la(s,a,o,l,i),i&&c&2048&&Gy(a.alternate,a);break;default:la(s,a,o,l,i)}e=e.sibling}}function Dl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,r=e,i=r.flags;switch(r.tag){case 22:Dl(n,r),i&2048&&Hy(r.alternate,r);break;case 24:Dl(n,r),i&2048&&Gy(r.alternate,r);break;default:Dl(n,r)}e=e.sibling}}var hl=8192;function Js(t){if(t.subtreeFlags&hl)for(t=t.child;t!==null;)FA(t),t=t.sibling}function FA(t){switch(t.tag){case 26:Js(t),t.flags&hl&&t.memoizedState!==null&&AP(Sn,t.memoizedState,t.memoizedProps);break;case 5:Js(t);break;case 3:case 4:var e=Sn;Sn=of(t.stateNode.containerInfo),Js(t),Sn=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=hl,hl=16777216,Js(t),hl=e):Js(t));break;default:Js(t)}}function HA(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Zo(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];lt=r,$A(r,t)}HA(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)GA(t),t=t.sibling}function GA(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&Ci(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,hh(t)):Zo(t);break;default:Zo(t)}}function hh(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];lt=r,$A(r,t)}HA(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ci(8,e,e.return),hh(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,hh(e));break;default:hh(e)}t=t.sibling}}function $A(t,e){for(;lt!==null;){var n=lt;switch(n.tag){case 0:case 11:case 15:Ci(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ku(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,lt=r;else e:for(n=t;lt!==null;){r=lt;var i=r.sibling,s=r.return;if(LA(r),r===n){lt=null;break e}if(i!==null){i.return=s,lt=i;break e}lt=s}}}var BN={getCacheForType:function(t){var e=St(tt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},zN=typeof WeakMap=="function"?WeakMap:Map,ge=0,Ae=null,se=null,ue=0,me=0,Xt=null,fi=!1,To=!1,$y=!1,xr=0,Be=0,Di=0,gs=0,Ky=0,_n=0,$a=0,Nl=null,Ut=null,ng=!1,Qy=0,ef=1/0,tf=null,_i=null,pt=0,vi=null,Ka=null,Va=0,rg=0,ig=null,KA=null,Pl=0,sg=null;function sn(){if(ge&2&&ue!==0)return ue&-ue;if(W.T!==null){var t=qa;return t!==0?t:Xy()}return i1()}function QA(){_n===0&&(_n=!(ue&536870912)||he?e1():536870912);var t=vn.current;return t!==null&&(t.flags|=32),_n}function an(t,e,n){(t===Ae&&(me===2||me===9)||t.cancelPendingCommit!==null)&&(Qa(t,0),di(t,ue,_n,!1)),Du(t,n),(!(ge&2)||t!==Ae)&&(t===Ae&&(!(ge&2)&&(gs|=n),Be===4&&di(t,ue,_n,!1)),nr(t))}function YA(t,e,n){if(ge&6)throw Error(j(327));var r=!n&&(e&124)===0&&(e&t.expiredLanes)===0||Cu(t,e),i=r?HN(t,e):$m(t,e,!0),s=r;do{if(i===0){To&&!r&&di(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!qN(n)){i=$m(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var a=0;else a=t.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){e=a;e:{var o=t;i=Nl;var l=o.current.memoizedState.isDehydrated;if(l&&(Qa(o,a).flags|=256),a=$m(o,a,!1),a!==2){if($y&&!l){o.errorRecoveryDisabledLanes|=s,gs|=s,i=4;break e}s=Ut,Ut=i,s!==null&&(Ut===null?Ut=s:Ut.push.apply(Ut,s))}i=a}if(s=!1,i!==2)continue}}if(i===1){Qa(t,0),di(t,e,0,!0);break}e:{switch(r=t,s=i,s){case 0:case 1:throw Error(j(345));case 4:if((e&4194048)!==e)break;case 6:di(r,e,_n,!fi);break e;case 2:Ut=null;break;case 3:case 5:break;default:throw Error(j(329))}if((e&62914560)===e&&(i=Qy+300-Kn(),10<i)){if(di(r,e,_n,!fi),Yf(r,0,!0)!==0)break e;r.timeoutHandle=mS(LE.bind(null,r,n,Ut,tf,ng,e,_n,gs,$a,fi,s,2,-0,0),i);break e}LE(r,n,Ut,tf,ng,e,_n,gs,$a,fi,s,0,-0,0)}}break}while(!0);nr(t)}function LE(t,e,n,r,i,s,a,o,l,c,h,d,m,g){if(t.timeoutHandle=-1,d=e.subtreeFlags,(d&8192||(d&16785408)===16785408)&&(ru={stylesheets:null,count:0,unsuspend:wP},FA(e),d=SP(),d!==null)){t.cancelPendingCommit=d(jE.bind(null,t,e,s,n,r,i,a,o,l,h,1,m,g)),di(t,s,a,!c);return}jE(t,e,s,n,r,i,a,o,l)}function qN(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function di(t,e,n,r){e&=~Ky,e&=~gs,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var i=e;0<i;){var s=31-rn(i),a=1<<s;r[s]=-1,i&=~a}n!==0&&n1(t,n,e)}function sd(){return ge&6?!0:(Bu(0),!1)}function Yy(){if(se!==null){if(me===0)var t=se.return;else t=se,gr=Fs=null,ky(t),Oa=null,eu=0,t=se;for(;t!==null;)DA(t.alternate,t),t=t.return;se=null}}function Qa(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,aP(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Yy(),Ae=t,se=n=Tr(t.current,null),ue=e,me=0,Xt=null,fi=!1,To=Cu(t,e),$y=!1,$a=_n=Ky=gs=Di=Be=0,Ut=Nl=null,ng=!1,e&8&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var i=31-rn(r),s=1<<i;e|=t[i],r&=~s}return xr=e,Zf(),n}function XA(t,e){ne=null,W.H=Qh,e===Mu||e===td?(e=pE(),me=3):e===V1?(e=pE(),me=4):me=e===AA?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Xt=e,se===null&&(Be=1,Wh(t,gn(e,t.current)))}function WA(){var t=W.H;return W.H=Qh,t===null?Qh:t}function JA(){var t=W.A;return W.A=BN,t}function ag(){Be=4,fi||(ue&4194048)!==ue&&vn.current!==null||(To=!0),!(Di&134217727)&&!(gs&134217727)||Ae===null||di(Ae,ue,_n,!1)}function $m(t,e,n){var r=ge;ge|=2;var i=WA(),s=JA();(Ae!==t||ue!==e)&&(tf=null,Qa(t,e)),e=!1;var a=Be;e:do try{if(me!==0&&se!==null){var o=se,l=Xt;switch(me){case 8:Yy(),a=6;break e;case 3:case 2:case 9:case 6:vn.current===null&&(e=!0);var c=me;if(me=0,Xt=null,Sa(t,o,l,c),n&&To){a=0;break e}break;default:c=me,me=0,Xt=null,Sa(t,o,l,c)}}FN(),a=Be;break}catch(h){XA(t,h)}while(!0);return e&&t.shellSuspendCounter++,gr=Fs=null,ge=r,W.H=i,W.A=s,se===null&&(Ae=null,ue=0,Zf()),a}function FN(){for(;se!==null;)ZA(se)}function HN(t,e){var n=ge;ge|=2;var r=WA(),i=JA();Ae!==t||ue!==e?(tf=null,ef=Kn()+500,Qa(t,e)):To=Cu(t,e);e:do try{if(me!==0&&se!==null){e=se;var s=Xt;t:switch(me){case 1:me=0,Xt=null,Sa(t,e,s,1);break;case 2:case 9:if(mE(s)){me=0,Xt=null,UE(e);break}e=function(){me!==2&&me!==9||Ae!==t||(me=7),nr(t)},s.then(e,e);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:mE(s)?(me=0,Xt=null,UE(e)):(me=0,Xt=null,Sa(t,e,s,7));break;case 5:var a=null;switch(se.tag){case 26:a=se.memoizedState;case 5:case 27:var o=se;if(!a||_S(a)){me=0,Xt=null;var l=o.sibling;if(l!==null)se=l;else{var c=o.return;c!==null?(se=c,ad(c)):se=null}break t}}me=0,Xt=null,Sa(t,e,s,5);break;case 6:me=0,Xt=null,Sa(t,e,s,6);break;case 8:Yy(),Be=6;break e;default:throw Error(j(462))}}GN();break}catch(h){XA(t,h)}while(!0);return gr=Fs=null,W.H=r,W.A=i,ge=n,se!==null?0:(Ae=null,ue=0,Zf(),Be)}function GN(){for(;se!==null&&!dD();)ZA(se)}function ZA(t){var e=CA(t.alternate,t,xr);t.memoizedProps=t.pendingProps,e===null?ad(t):se=e}function UE(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=NE(n,e,e.pendingProps,e.type,void 0,ue);break;case 11:e=NE(n,e,e.pendingProps,e.type.render,e.ref,ue);break;case 5:ky(e);default:DA(n,e),e=se=D1(e,xr),e=CA(n,e,xr)}t.memoizedProps=t.pendingProps,e===null?ad(t):se=e}function Sa(t,e,n,r){gr=Fs=null,ky(e),Oa=null,eu=0;var i=e.return;try{if(VN(t,i,e,n,ue)){Be=1,Wh(t,gn(n,t.current)),se=null;return}}catch(s){if(i!==null)throw se=i,s;Be=1,Wh(t,gn(n,t.current)),se=null;return}e.flags&32768?(he||r===1?t=!0:To||ue&536870912?t=!1:(fi=t=!0,(r===2||r===9||r===3||r===6)&&(r=vn.current,r!==null&&r.tag===13&&(r.flags|=16384))),eS(e,t)):ad(e)}function ad(t){var e=t;do{if(e.flags&32768){eS(e,fi);return}t=e.return;var n=MN(e.alternate,e,xr);if(n!==null){se=n;return}if(e=e.sibling,e!==null){se=e;return}se=e=t}while(e!==null);Be===0&&(Be=5)}function eS(t,e){do{var n=LN(t.alternate,t);if(n!==null){n.flags&=32767,se=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){se=t;return}se=t=n}while(t!==null);Be=6,se=null}function jE(t,e,n,r,i,s,a,o,l){t.cancelPendingCommit=null;do od();while(pt!==0);if(ge&6)throw Error(j(327));if(e!==null){if(e===t.current)throw Error(j(177));if(s=e.lanes|e.childLanes,s|=by,wD(t,n,s,a,o,l),t===Ae&&(se=Ae=null,ue=0),Ka=e,vi=t,Va=n,rg=s,ig=i,KA=r,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,YN(Uh,function(){return sS(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,e.subtreeFlags&13878||r){r=W.T,W.T=null,i=de.p,de.p=2,a=ge,ge|=4;try{UN(t,e,n)}finally{ge=a,de.p=i,W.T=r}}pt=1,tS(),nS(),rS()}}function tS(){if(pt===1){pt=0;var t=vi,e=Ka,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=W.T,W.T=null;var r=de.p;de.p=2;var i=ge;ge|=4;try{BA(e,t);var s=cg,a=b1(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(a!==o&&o&&o.ownerDocument&&T1(o.ownerDocument.documentElement,o)){if(l!==null&&Ty(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,m=d&&d.defaultView||window;if(m.getSelection){var g=m.getSelection(),w=o.textContent.length,x=Math.min(l.start,w),C=l.end===void 0?x:Math.min(l.end,w);!g.extend&&x>C&&(a=C,C=x,x=a);var v=aE(o,x),y=aE(o,C);if(v&&y&&(g.rangeCount!==1||g.anchorNode!==v.node||g.anchorOffset!==v.offset||g.focusNode!==y.node||g.focusOffset!==y.offset)){var T=d.createRange();T.setStart(v.node,v.offset),g.removeAllRanges(),x>C?(g.addRange(T),g.extend(y.node,y.offset)):(T.setEnd(y.node,y.offset),g.addRange(T))}}}}for(d=[],g=o;g=g.parentNode;)g.nodeType===1&&d.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var N=d[o];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}cf=!!ug,cg=ug=null}finally{ge=i,de.p=r,W.T=n}}t.current=e,pt=2}}function nS(){if(pt===2){pt=0;var t=vi,e=Ka,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=W.T,W.T=null;var r=de.p;de.p=2;var i=ge;ge|=4;try{MA(t,e.alternate,e)}finally{ge=i,de.p=r,W.T=n}}pt=3}}function rS(){if(pt===4||pt===3){pt=0,mD();var t=vi,e=Ka,n=Va,r=KA;e.subtreeFlags&10256||e.flags&10256?pt=5:(pt=0,Ka=vi=null,iS(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(_i=null),my(n),e=e.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(xu,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=W.T,i=de.p,de.p=2,W.T=null;try{for(var s=t.onRecoverableError,a=0;a<r.length;a++){var o=r[a];s(o.value,{componentStack:o.stack})}}finally{W.T=e,de.p=i}}Va&3&&od(),nr(t),i=t.pendingLanes,n&4194090&&i&42?t===sg?Pl++:(Pl=0,sg=t):Pl=0,Bu(0)}}function iS(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ku(e)))}function od(t){return tS(),nS(),rS(),sS()}function sS(){if(pt!==5)return!1;var t=vi,e=rg;rg=0;var n=my(Va),r=W.T,i=de.p;try{de.p=32>n?32:n,W.T=null,n=ig,ig=null;var s=vi,a=Va;if(pt=0,Ka=vi=null,Va=0,ge&6)throw Error(j(331));var o=ge;if(ge|=4,GA(s.current),qA(s,s.current,a,n),ge=o,Bu(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(xu,s)}catch{}return!0}finally{de.p=i,W.T=r,iS(t,e)}}function BE(t,e,n){e=gn(n,e),e=Jp(t.stateNode,e,2),t=yi(t,e,2),t!==null&&(Du(t,2),nr(t))}function be(t,e,n){if(t.tag===3)BE(t,t,n);else for(;e!==null;){if(e.tag===3){BE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_i===null||!_i.has(r))){t=gn(n,t),n=bA(2),r=yi(e,n,2),r!==null&&(wA(n,r,e,t),Du(r,2),nr(r));break}}e=e.return}}function Km(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||($y=!0,i.add(n),t=$N.bind(null,t,e,n),e.then(t,t))}function $N(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Ae===t&&(ue&n)===n&&(Be===4||Be===3&&(ue&62914560)===ue&&300>Kn()-Qy?!(ge&2)&&Qa(t,0):Ky|=n,$a===ue&&($a=0)),nr(t)}function aS(t,e){e===0&&(e=t1()),t=Eo(t,e),t!==null&&(Du(t,e),nr(t))}function KN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),aS(t,n)}function QN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(j(314))}r!==null&&r.delete(e),aS(t,n)}function YN(t,e){return fy(t,e)}var nf=null,ua=null,og=!1,rf=!1,Qm=!1,ys=0;function nr(t){t!==ua&&t.next===null&&(ua===null?nf=ua=t:ua=ua.next=t),rf=!0,og||(og=!0,WN())}function Bu(t,e){if(!Qm&&rf){Qm=!0;do for(var n=!1,r=nf;r!==null;){if(t!==0){var i=r.pendingLanes;if(i===0)var s=0;else{var a=r.suspendedLanes,o=r.pingedLanes;s=(1<<31-rn(42|t)+1)-1,s&=i&~(a&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,zE(r,s))}else s=ue,s=Yf(r,r===Ae?s:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(s&3)||Cu(r,s)||(n=!0,zE(r,s));r=r.next}while(n);Qm=!1}}function XN(){oS()}function oS(){rf=og=!1;var t=0;ys!==0&&(sP()&&(t=ys),ys=0);for(var e=Kn(),n=null,r=nf;r!==null;){var i=r.next,s=lS(r,e);s===0?(r.next=null,n===null?nf=i:n.next=i,i===null&&(ua=n)):(n=r,(t!==0||s&3)&&(rf=!0)),r=i}Bu(t)}function lS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var a=31-rn(s),o=1<<a,l=i[a];l===-1?(!(o&n)||o&r)&&(i[a]=bD(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=Ae,n=ue,n=Yf(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,n===0||t===e&&(me===2||me===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Em(r),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Cu(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(r!==null&&Em(r),my(n)){case 2:case 8:n=Jw;break;case 32:n=Uh;break;case 268435456:n=Zw;break;default:n=Uh}return r=uS.bind(null,t),n=fy(n,r),t.callbackPriority=e,t.callbackNode=n,e}return r!==null&&r!==null&&Em(r),t.callbackPriority=2,t.callbackNode=null,2}function uS(t,e){if(pt!==0&&pt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(od()&&t.callbackNode!==n)return null;var r=ue;return r=Yf(t,t===Ae?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(YA(t,r,e),lS(t,Kn()),t.callbackNode!=null&&t.callbackNode===n?uS.bind(null,t):null)}function zE(t,e){if(od())return null;YA(t,e,!0)}function WN(){oP(function(){ge&6?fy(Ww,XN):oS()})}function Xy(){return ys===0&&(ys=e1()),ys}function qE(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rh(""+t)}function FE(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function JN(t,e,n,r,i){if(e==="submit"&&n&&n.stateNode===i){var s=qE((i[Ht]||null).action),a=r.submitter;a&&(e=(e=a[Ht]||null)?qE(e.formAction):a.getAttribute("formAction"),e!==null&&(s=e,a=null));var o=new Xf("action","action",null,r,i);t.push({event:o,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ys!==0){var l=a?FE(i,a):new FormData(i);Xp(n,{pending:!0,data:l,method:i.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=a?FE(i,a):new FormData(i),Xp(n,{pending:!0,data:l,method:i.method,action:s},s,l))},currentTarget:i}]})}}for(var Ym=0;Ym<Up.length;Ym++){var Xm=Up[Ym],ZN=Xm.toLowerCase(),eP=Xm[0].toUpperCase()+Xm.slice(1);On(ZN,"on"+eP)}On(A1,"onAnimationEnd");On(S1,"onAnimationIteration");On(I1,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(yN,"onTransitionRun");On(_N,"onTransitionStart");On(vN,"onTransitionCancel");On(R1,"onTransitionEnd");Ba("onMouseEnter",["mouseout","mouseover"]);Ba("onMouseLeave",["mouseout","mouseover"]);Ba("onPointerEnter",["pointerout","pointerover"]);Ba("onPointerLeave",["pointerout","pointerover"]);Bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tu));function cS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=c;try{s(i)}catch(h){Xh(h)}i.currentTarget=null,s=l}else for(a=0;a<r.length;a++){if(o=r[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=c;try{s(i)}catch(h){Xh(h)}i.currentTarget=null,s=l}}}}function ie(t,e){var n=e[Np];n===void 0&&(n=e[Np]=new Set);var r=t+"__bubble";n.has(r)||(hS(e,t,2,!1),n.add(r))}function Wm(t,e,n){var r=0;e&&(r|=4),hS(n,t,r,e)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function Wy(t){if(!t[Uc]){t[Uc]=!0,s1.forEach(function(n){n!=="selectionchange"&&(tP.has(n)||Wm(n,!1,t),Wm(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Uc]||(e[Uc]=!0,Wm("selectionchange",!1,e))}}function hS(t,e,n,r){switch(wS(e)){case 2:var i=xP;break;case 8:i=CP;break;default:i=t_}n=i.bind(null,e,n,t),i=void 0,!kp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jm(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===i)return;a=a.return}for(;o!==null;){if(a=ga(o),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){r=s=a;continue e}o=o.parentNode}}r=r.return}d1(function(){var c=s,h=yy(n),d=[];e:{var m=x1.get(t);if(m!==void 0){var g=Xf,w=t;switch(t){case"keypress":if(sh(n)===0)break e;case"keydown":case"keyup":g=YD;break;case"focusin":w="focus",g=xm;break;case"focusout":w="blur",g=xm;break;case"beforeblur":case"afterblur":g=xm;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=X0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=LD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=JD;break;case A1:case S1:case I1:g=BD;break;case R1:g=eN;break;case"scroll":case"scrollend":g=kD;break;case"wheel":g=nN;break;case"copy":case"cut":case"paste":g=qD;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=J0;break;case"toggle":case"beforetoggle":g=iN}var x=(e&4)!==0,C=!x&&(t==="scroll"||t==="scrollend"),v=x?m!==null?m+"Capture":null:m;x=[];for(var y=c,T;y!==null;){var N=y;if(T=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||T===null||v===null||(N=Yl(y,v),N!=null&&x.push(nu(y,N,T))),C)break;y=y.return}0<x.length&&(m=new g(m,w,null,n,h),d.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==Vp&&(w=n.relatedTarget||n.fromElement)&&(ga(w)||w[_o]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?ga(w):null,w!==null&&(C=Ru(w),x=w.tag,w!==C||x!==5&&x!==27&&x!==6)&&(w=null)):(g=null,w=c),g!==w)){if(x=X0,N="onMouseLeave",v="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(x=J0,N="onPointerLeave",v="onPointerEnter",y="pointer"),C=g==null?m:cl(g),T=w==null?m:cl(w),m=new x(N,y+"leave",g,n,h),m.target=C,m.relatedTarget=T,N=null,ga(h)===c&&(x=new x(v,y+"enter",w,n,h),x.target=T,x.relatedTarget=C,N=x),C=N,g&&w)t:{for(x=g,v=w,y=0,T=x;T;T=Zs(T))y++;for(T=0,N=v;N;N=Zs(N))T++;for(;0<y-T;)x=Zs(x),y--;for(;0<T-y;)v=Zs(v),T--;for(;y--;){if(x===v||v!==null&&x===v.alternate)break t;x=Zs(x),v=Zs(v)}x=null}else x=null;g!==null&&HE(d,m,g,x,!1),w!==null&&C!==null&&HE(d,C,w,x,!0)}}e:{if(m=c?cl(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var U=nE;else if(tE(m))if(v1)U=mN;else{U=fN;var z=hN}else g=m.nodeName,!g||g.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?c&&gy(c.elementType)&&(U=nE):U=dN;if(U&&(U=U(t,c))){_1(d,U,n,h);break e}z&&z(t,m,c),t==="focusout"&&c&&m.type==="number"&&c.memoizedProps.value!=null&&Op(m,"number",m.value)}switch(z=c?cl(c):window,t){case"focusin":(tE(z)||z.contentEditable==="true")&&(va=z,Mp=c,bl=null);break;case"focusout":bl=Mp=va=null;break;case"mousedown":Lp=!0;break;case"contextmenu":case"mouseup":case"dragend":Lp=!1,oE(d,n,h);break;case"selectionchange":if(gN)break;case"keydown":case"keyup":oE(d,n,h)}var b;if(Ey)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else _a?g1(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(p1&&n.locale!=="ko"&&(_a||E!=="onCompositionStart"?E==="onCompositionEnd"&&_a&&(b=m1()):(hi=h,_y="value"in hi?hi.value:hi.textContent,_a=!0)),z=sf(c,E),0<z.length&&(E=new W0(E,t,null,n,h),d.push({event:E,listeners:z}),b?E.data=b:(b=y1(n),b!==null&&(E.data=b)))),(b=aN?oN(t,n):lN(t,n))&&(E=sf(c,"onBeforeInput"),0<E.length&&(z=new W0("onBeforeInput","beforeinput",null,n,h),d.push({event:z,listeners:E}),z.data=b)),JN(d,t,c,n,h)}cS(d,e)})}function nu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sf(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Yl(t,n),i!=null&&r.unshift(nu(t,i,s)),i=Yl(t,e),i!=null&&r.push(nu(t,i,s))),t.tag===3)return r;t=t.return}return[]}function Zs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function HE(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===r)break;o!==5&&o!==26&&o!==27||c===null||(l=c,i?(c=Yl(n,s),c!=null&&a.unshift(nu(n,c,l))):i||(c=Yl(n,s),c!=null&&a.push(nu(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var nP=/\r\n?/g,rP=/\u0000|\uFFFD/g;function GE(t){return(typeof t=="string"?t:""+t).replace(nP,`
`).replace(rP,"")}function fS(t,e){return e=GE(e),GE(t)===e}function ld(){}function ve(t,e,n,r,i,s){switch(n){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||za(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&za(t,""+r);break;case"className":Nc(t,"class",r);break;case"tabIndex":Nc(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Nc(t,n,r);break;case"style":f1(t,r,s);break;case"data":if(e!=="object"){Nc(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=rh(""+r),t.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&ve(t,e,"name",i.name,i,null),ve(t,e,"formEncType",i.formEncType,i,null),ve(t,e,"formMethod",i.formMethod,i,null),ve(t,e,"formTarget",i.formTarget,i,null)):(ve(t,e,"encType",i.encType,i,null),ve(t,e,"method",i.method,i,null),ve(t,e,"target",i.target,i,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=rh(""+r),t.setAttribute(n,r);break;case"onClick":r!=null&&(t.onclick=ld);break;case"onScroll":r!=null&&ie("scroll",t);break;case"onScrollEnd":r!=null&&ie("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(j(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(j(60));t.innerHTML=n}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}n=rh(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""+r):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":r===!0?t.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,r):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(n,r):t.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(n):t.setAttribute(n,r);break;case"popover":ie("beforetoggle",t),ie("toggle",t),nh(t,"popover",r);break;case"xlinkActuate":lr(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":lr(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":lr(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":lr(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":lr(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":lr(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":lr(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":lr(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":lr(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":nh(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=OD.get(n)||n,nh(t,n,r))}}function lg(t,e,n,r,i,s){switch(n){case"style":f1(t,r,s);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(j(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(j(60));t.innerHTML=n}}break;case"children":typeof r=="string"?za(t,r):(typeof r=="number"||typeof r=="bigint")&&za(t,""+r);break;case"onScroll":r!=null&&ie("scroll",t);break;case"onScrollEnd":r!=null&&ie("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ld);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!a1.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),s=t[Ht]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,i),typeof r=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,r,i);break e}n in t?t[n]=r:r===!0?t.setAttribute(n,""):nh(t,n,r)}}}function gt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",t),ie("load",t);var r=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var a=n[s];if(a!=null)switch(s){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,e));default:ve(t,e,s,a,n,null)}}i&&ve(t,e,"srcSet",n.srcSet,n,null),r&&ve(t,e,"src",n.src,n,null);return;case"input":ie("invalid",t);var o=s=a=i=null,l=null,c=null;for(r in n)if(n.hasOwnProperty(r)){var h=n[r];if(h!=null)switch(r){case"name":i=h;break;case"type":a=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(j(137,e));break;default:ve(t,e,r,h,n,null)}}u1(t,s,o,l,c,a,i,!1),jh(t);return;case"select":ie("invalid",t),r=a=s=null;for(i in n)if(n.hasOwnProperty(i)&&(o=n[i],o!=null))switch(i){case"value":s=o;break;case"defaultValue":a=o;break;case"multiple":r=o;default:ve(t,e,i,o,n,null)}e=s,n=a,t.multiple=!!r,e!=null?xa(t,!!r,e,!1):n!=null&&xa(t,!!r,n,!0);return;case"textarea":ie("invalid",t),s=i=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":i=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:ve(t,e,a,o,n,null)}h1(t,r,i,s),jh(t);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ve(t,e,l,r,n,null)}return;case"dialog":ie("beforetoggle",t),ie("toggle",t),ie("cancel",t),ie("close",t);break;case"iframe":case"object":ie("load",t);break;case"video":case"audio":for(r=0;r<tu.length;r++)ie(tu[r],t);break;case"image":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"embed":case"source":case"link":ie("error",t),ie("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(r=n[c],r!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,e));default:ve(t,e,c,r,n,null)}return;default:if(gy(e)){for(h in n)n.hasOwnProperty(h)&&(r=n[h],r!==void 0&&lg(t,e,h,r,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(r=n[o],r!=null&&ve(t,e,o,r,n,null))}function iP(t,e,n,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,a=null,o=null,l=null,c=null,h=null;for(g in n){var d=n[g];if(n.hasOwnProperty(g)&&d!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":l=d;default:r.hasOwnProperty(g)||ve(t,e,g,null,r,d)}}for(var m in r){var g=r[m];if(d=n[m],r.hasOwnProperty(m)&&(g!=null||d!=null))switch(m){case"type":s=g;break;case"name":i=g;break;case"checked":c=g;break;case"defaultChecked":h=g;break;case"value":a=g;break;case"defaultValue":o=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(j(137,e));break;default:g!==d&&ve(t,e,m,g,r,d)}}Pp(t,a,o,l,c,h,s,i);return;case"select":g=a=o=m=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":g=l;default:r.hasOwnProperty(s)||ve(t,e,s,null,r,l)}for(i in r)if(s=r[i],l=n[i],r.hasOwnProperty(i)&&(s!=null||l!=null))switch(i){case"value":m=s;break;case"defaultValue":o=s;break;case"multiple":a=s;default:s!==l&&ve(t,e,i,s,r,l)}e=o,n=a,r=g,m!=null?xa(t,!!n,m,!1):!!r!=!!n&&(e!=null?xa(t,!!n,e,!0):xa(t,!!n,n?[]:"",!1));return;case"textarea":g=m=null;for(o in n)if(i=n[o],n.hasOwnProperty(o)&&i!=null&&!r.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ve(t,e,o,null,r,i)}for(a in r)if(i=r[a],s=n[a],r.hasOwnProperty(a)&&(i!=null||s!=null))switch(a){case"value":m=i;break;case"defaultValue":g=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(j(91));break;default:i!==s&&ve(t,e,a,i,r,s)}c1(t,m,g);return;case"option":for(var w in n)if(m=n[w],n.hasOwnProperty(w)&&m!=null&&!r.hasOwnProperty(w))switch(w){case"selected":t.selected=!1;break;default:ve(t,e,w,null,r,m)}for(l in r)if(m=r[l],g=n[l],r.hasOwnProperty(l)&&m!==g&&(m!=null||g!=null))switch(l){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:ve(t,e,l,m,r,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)m=n[x],n.hasOwnProperty(x)&&m!=null&&!r.hasOwnProperty(x)&&ve(t,e,x,null,r,m);for(c in r)if(m=r[c],g=n[c],r.hasOwnProperty(c)&&m!==g&&(m!=null||g!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(j(137,e));break;default:ve(t,e,c,m,r,g)}return;default:if(gy(e)){for(var C in n)m=n[C],n.hasOwnProperty(C)&&m!==void 0&&!r.hasOwnProperty(C)&&lg(t,e,C,void 0,r,m);for(h in r)m=r[h],g=n[h],!r.hasOwnProperty(h)||m===g||m===void 0&&g===void 0||lg(t,e,h,m,r,g);return}}for(var v in n)m=n[v],n.hasOwnProperty(v)&&m!=null&&!r.hasOwnProperty(v)&&ve(t,e,v,null,r,m);for(d in r)m=r[d],g=n[d],!r.hasOwnProperty(d)||m===g||m==null&&g==null||ve(t,e,d,m,r,g)}var ug=null,cg=null;function af(t){return t.nodeType===9?t:t.ownerDocument}function $E(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dS(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function hg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zm=null;function sP(){var t=window.event;return t&&t.type==="popstate"?t===Zm?!1:(Zm=t,!0):(Zm=null,!1)}var mS=typeof setTimeout=="function"?setTimeout:void 0,aP=typeof clearTimeout=="function"?clearTimeout:void 0,KE=typeof Promise=="function"?Promise:void 0,oP=typeof queueMicrotask=="function"?queueMicrotask:typeof KE<"u"?function(t){return KE.resolve(null).then(t).catch(lP)}:mS;function lP(t){setTimeout(function(){throw t})}function Li(t){return t==="head"}function QE(t,e){var n=e,r=0,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(0<r&&8>r){n=r;var a=t.ownerDocument;if(n&1&&Ol(a.documentElement),n&2&&Ol(a.body),n&4)for(n=a.head,Ol(n),a=n.firstChild;a;){var o=a.nextSibling,l=a.nodeName;a[Nu]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=o}}if(i===0){t.removeChild(s),ou(e);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:r=n.charCodeAt(0)-48;else r=0;n=s}while(n);ou(e)}function fg(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":fg(n),py(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function uP(t,e,n,r){for(;t.nodeType===1;){var i=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Nu])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=xn(t.nextSibling),t===null)break}return null}function cP(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xn(t.nextSibling),t===null))return null;return t}function dg(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function hP(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var r=function(){e(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var mg=null;function YE(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function pS(t,e,n){switch(e=af(n),t){case"html":if(t=e.documentElement,!t)throw Error(j(452));return t;case"head":if(t=e.head,!t)throw Error(j(453));return t;case"body":if(t=e.body,!t)throw Error(j(454));return t;default:throw Error(j(451))}}function Ol(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);py(t)}var En=new Map,XE=new Set;function of(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var kr=de.d;de.d={f:fP,r:dP,D:mP,C:pP,L:gP,m:yP,X:vP,S:_P,M:EP};function fP(){var t=kr.f(),e=sd();return t||e}function dP(t){var e=vo(t);e!==null&&e.tag===5&&e.type==="form"?lA(e):kr.r(t)}var bo=typeof document>"u"?null:document;function gS(t,e,n){var r=bo;if(r&&typeof e=="string"&&e){var i=pn(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),XE.has(i)||(XE.add(i),t={rel:t,crossOrigin:n,href:e},r.querySelector(i)===null&&(e=r.createElement("link"),gt(e,"link",t),ut(e),r.head.appendChild(e)))}}function mP(t){kr.D(t),gS("dns-prefetch",t,null)}function pP(t,e){kr.C(t,e),gS("preconnect",t,e)}function gP(t,e,n){kr.L(t,e,n);var r=bo;if(r&&t&&e){var i='link[rel="preload"][as="'+pn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+pn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+pn(n.imageSizes)+'"]')):i+='[href="'+pn(t)+'"]';var s=i;switch(e){case"style":s=Ya(t);break;case"script":s=wo(t)}En.has(s)||(t=Ce({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),En.set(s,t),r.querySelector(i)!==null||e==="style"&&r.querySelector(zu(s))||e==="script"&&r.querySelector(qu(s))||(e=r.createElement("link"),gt(e,"link",t),ut(e),r.head.appendChild(e)))}}function yP(t,e){kr.m(t,e);var n=bo;if(n&&t){var r=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+pn(r)+'"][href="'+pn(t)+'"]',s=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=wo(t)}if(!En.has(s)&&(t=Ce({rel:"modulepreload",href:t},e),En.set(s,t),n.querySelector(i)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(qu(s)))return}r=n.createElement("link"),gt(r,"link",t),ut(r),n.head.appendChild(r)}}}function _P(t,e,n){kr.S(t,e,n);var r=bo;if(r&&t){var i=Ra(r).hoistableStyles,s=Ya(t);e=e||"default";var a=i.get(s);if(!a){var o={loading:0,preload:null};if(a=r.querySelector(zu(s)))o.loading=5;else{t=Ce({rel:"stylesheet",href:t,"data-precedence":e},n),(n=En.get(s))&&Jy(t,n);var l=a=r.createElement("link");ut(l),gt(l,"link",t),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,fh(a,e,r)}a={type:"stylesheet",instance:a,count:1,state:o},i.set(s,a)}}}function vP(t,e){kr.X(t,e);var n=bo;if(n&&t){var r=Ra(n).hoistableScripts,i=wo(t),s=r.get(i);s||(s=n.querySelector(qu(i)),s||(t=Ce({src:t,async:!0},e),(e=En.get(i))&&Zy(t,e),s=n.createElement("script"),ut(s),gt(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}function EP(t,e){kr.M(t,e);var n=bo;if(n&&t){var r=Ra(n).hoistableScripts,i=wo(t),s=r.get(i);s||(s=n.querySelector(qu(i)),s||(t=Ce({src:t,async:!0,type:"module"},e),(e=En.get(i))&&Zy(t,e),s=n.createElement("script"),ut(s),gt(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}function WE(t,e,n,r){var i=(i=pi.current)?of(i):null;if(!i)throw Error(j(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ya(n.href),n=Ra(i).hoistableStyles,r=n.get(e),r||(r={type:"style",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ya(n.href);var s=Ra(i).hoistableStyles,a=s.get(t);if(a||(i=i.ownerDocument||i,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,a),(s=i.querySelector(zu(t)))&&!s._p&&(a.instance=s,a.state.loading=5),En.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},En.set(t,n),s||TP(i,t,n,a.state))),e&&r===null)throw Error(j(528,""));return a}if(e&&r!==null)throw Error(j(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=wo(n),n=Ra(i).hoistableScripts,r=n.get(e),r||(r={type:"script",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,t))}}function Ya(t){return'href="'+pn(t)+'"'}function zu(t){return'link[rel="stylesheet"]['+t+"]"}function yS(t){return Ce({},t,{"data-precedence":t.precedence,precedence:null})}function TP(t,e,n,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),gt(e,"link",n),ut(e),t.head.appendChild(e))}function wo(t){return'[src="'+pn(t)+'"]'}function qu(t){return"script[async]"+t}function JE(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+pn(n.href)+'"]');if(r)return e.instance=r,ut(r),r;var i=Ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),ut(r),gt(r,"style",i),fh(r,n.precedence,t),e.instance=r;case"stylesheet":i=Ya(n.href);var s=t.querySelector(zu(i));if(s)return e.state.loading|=4,e.instance=s,ut(s),s;r=yS(n),(i=En.get(i))&&Jy(r,i),s=(t.ownerDocument||t).createElement("link"),ut(s);var a=s;return a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),gt(s,"link",r),e.state.loading|=4,fh(s,n.precedence,t),e.instance=s;case"script":return s=wo(n.src),(i=t.querySelector(qu(s)))?(e.instance=i,ut(i),i):(r=n,(i=En.get(s))&&(r=Ce({},n),Zy(r,i)),t=t.ownerDocument||t,i=t.createElement("script"),ut(i),gt(i,"link",r),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(j(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(r=e.instance,e.state.loading|=4,fh(r,n.precedence,t));return e.instance}function fh(t,e,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,s=i,a=0;a<r.length;a++){var o=r[a];if(o.dataset.precedence===e)s=o;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Jy(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Zy(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var dh=null;function ZE(t,e,n){if(dh===null){var r=new Map,i=dh=new Map;i.set(n,r)}else i=dh,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(t))return r;for(r.set(t,null),n=n.getElementsByTagName(t),i=0;i<n.length;i++){var s=n[i];if(!(s[Nu]||s[At]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var a=s.getAttribute(e)||"";a=t+a;var o=r.get(a);o?o.push(s):r.set(a,[s])}}return r}function eT(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function bP(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function _S(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var ru=null;function wP(){}function AP(t,e,n){if(ru===null)throw Error(j(475));var r=ru;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var i=Ya(n.href),s=t.querySelector(zu(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=lf.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=s,ut(s);return}s=t.ownerDocument||t,n=yS(n),(i=En.get(i))&&Jy(n,i),s=s.createElement("link"),ut(s);var a=s;a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),gt(s,"link",n),e.instance=s}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(r.count++,e=lf.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function SP(){if(ru===null)throw Error(j(475));var t=ru;return t.stylesheets&&t.count===0&&pg(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&pg(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function lf(){if(this.count--,this.count===0){if(this.stylesheets)pg(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var uf=null;function pg(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uf=new Map,e.forEach(IP,t),uf=null,lf.call(t))}function IP(t,e){if(!(e.state.loading&4)){var n=uf.get(t);if(n)var r=n.get(null);else{n=new Map,uf.set(t,n);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var a=i[s];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}i=e.instance,a=i.getAttribute("data-precedence"),s=n.get(a)||r,s===r&&n.set(null,i),n.set(a,i),this.count++,r=lf.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var iu={$$typeof:dr,Provider:null,Consumer:null,_currentValue:hs,_currentValue2:hs,_threadCount:0};function RP(t,e,n,r,i,s,a,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tm(0),this.hiddenUpdates=Tm(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function vS(t,e,n,r,i,s,a,o,l,c,h,d){return t=new RP(t,e,n,a,o,l,c,d),e=1,s===!0&&(e|=24),s=Jt(3,null,null,e),t.current=s,s.stateNode=t,e=Ry(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:r,isDehydrated:n,cache:e},Cy(s),t}function ES(t){return t?(t=ba,t):ba}function TS(t,e,n,r,i,s){i=ES(i),r.context===null?r.context=i:r.pendingContext=i,r=gi(e),r.payload={element:n},s=s===void 0?null:s,s!==null&&(r.callback=s),n=yi(t,r,e),n!==null&&(an(n,t,e),Sl(n,t,e))}function tT(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function e_(t,e){tT(t,e),(t=t.alternate)&&tT(t,e)}function bS(t){if(t.tag===13){var e=Eo(t,67108864);e!==null&&an(e,t,67108864),e_(t,67108864)}}var cf=!0;function xP(t,e,n,r){var i=W.T;W.T=null;var s=de.p;try{de.p=2,t_(t,e,n,r)}finally{de.p=s,W.T=i}}function CP(t,e,n,r){var i=W.T;W.T=null;var s=de.p;try{de.p=8,t_(t,e,n,r)}finally{de.p=s,W.T=i}}function t_(t,e,n,r){if(cf){var i=gg(r);if(i===null)Jm(t,e,r,hf,n),nT(t,r);else if(NP(i,t,e,n,r))r.stopPropagation();else if(nT(t,r),e&4&&-1<DP.indexOf(t)){for(;i!==null;){var s=vo(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var a=Zi(s.pendingLanes);if(a!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-rn(a);o.entanglements[1]|=l,a&=~l}nr(s),!(ge&6)&&(ef=Kn()+500,Bu(0))}}break;case 13:o=Eo(s,2),o!==null&&an(o,s,2),sd(),e_(s,2)}if(s=gg(r),s===null&&Jm(t,e,r,hf,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jm(t,e,r,null,n)}}function gg(t){return t=yy(t),n_(t)}var hf=null;function n_(t){if(hf=null,t=ga(t),t!==null){var e=Ru(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Kw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return hf=t,null}function wS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pD()){case Ww:return 2;case Jw:return 8;case Uh:case gD:return 32;case Zw:return 268435456;default:return 32}default:return 32}}var yg=!1,Ei=null,Ti=null,bi=null,su=new Map,au=new Map,ti=[],DP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nT(t,e){switch(t){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":bi=null;break;case"pointerover":case"pointerout":su.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":au.delete(e.pointerId)}}function el(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vo(e),e!==null&&bS(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NP(t,e,n,r,i){switch(e){case"focusin":return Ei=el(Ei,t,e,n,r,i),!0;case"dragenter":return Ti=el(Ti,t,e,n,r,i),!0;case"mouseover":return bi=el(bi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return su.set(s,el(su.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,au.set(s,el(au.get(s)||null,t,e,n,r,i)),!0}return!1}function AS(t){var e=ga(t.target);if(e!==null){var n=Ru(e);if(n!==null){if(e=n.tag,e===13){if(e=Kw(n),e!==null){t.blockedOn=e,AD(t.priority,function(){if(n.tag===13){var r=sn();r=dy(r);var i=Eo(n,r);i!==null&&an(i,n,r),e_(n,r)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mh(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gg(t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vp=r,n.target.dispatchEvent(r),Vp=null}else return e=vo(n),e!==null&&bS(e),t.blockedOn=n,!1;e.shift()}return!0}function rT(t,e,n){mh(t)&&n.delete(e)}function PP(){yg=!1,Ei!==null&&mh(Ei)&&(Ei=null),Ti!==null&&mh(Ti)&&(Ti=null),bi!==null&&mh(bi)&&(bi=null),su.forEach(rT),au.forEach(rT)}function jc(t,e){t.blockedOn===e&&(t.blockedOn=null,yg||(yg=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,PP)))}var Bc=null;function iT(t){Bc!==t&&(Bc=t,it.unstable_scheduleCallback(it.unstable_NormalPriority,function(){Bc===t&&(Bc=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],i=t[e+2];if(typeof r!="function"){if(n_(r||n)===null)continue;break}var s=vo(n);s!==null&&(t.splice(e,3),e-=3,Xp(s,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function ou(t){function e(l){return jc(l,t)}Ei!==null&&jc(Ei,t),Ti!==null&&jc(Ti,t),bi!==null&&jc(bi,t),su.forEach(e),au.forEach(e);for(var n=0;n<ti.length;n++){var r=ti[n];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ti.length&&(n=ti[0],n.blockedOn===null);)AS(n),n.blockedOn===null&&ti.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],s=n[r+1],a=i[Ht]||null;if(typeof s=="function")a||iT(n);else if(a){var o=null;if(s&&s.hasAttribute("formAction")){if(i=s,a=s[Ht]||null)o=a.formAction;else if(n_(i)!==null)continue}else o=a.action;typeof o=="function"?n[r+1]=o:(n.splice(r,3),r-=3),iT(n)}}}function r_(t){this._internalRoot=t}ud.prototype.render=r_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));var n=e.current,r=sn();TS(n,r,t,e,null,null)};ud.prototype.unmount=r_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;TS(t.current,2,null,t,null,null),sd(),e[_o]=null}};function ud(t){this._internalRoot=t}ud.prototype.unstable_scheduleHydration=function(t){if(t){var e=i1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ti.length&&e!==0&&e<ti[n].priority;n++);ti.splice(n,0,t),n===0&&AS(t)}};var sT=Gw.version;if(sT!=="19.1.0")throw Error(j(527,sT,"19.1.0"));de.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=lD(e),t=t!==null?Qw(t):null,t=t===null?null:t.stateNode,t};var OP={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:W,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{xu=zc.inject(OP),nn=zc}catch{}}Kf.createRoot=function(t,e){if(!$w(t))throw Error(j(299));var n=!1,r="",i=vA,s=EA,a=TA,o=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(a=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=vS(t,1,!1,null,null,n,r,i,s,a,o,null),t[_o]=e.current,Wy(t),new r_(e)};Kf.hydrateRoot=function(t,e,n){if(!$w(t))throw Error(j(299));var r=!1,i="",s=vA,a=EA,o=TA,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),e=vS(t,1,!0,e,n??null,r,i,s,a,o,l,c),e.context=ES(null),n=e.current,r=sn(),r=dy(r),i=gi(r),i.callback=null,yi(n,i,r),n=r,e.current.lanes=n,Du(e,n),nr(e),t[_o]=e.current,Wy(t),new ud(e)};Kf.version="19.1.0";function SS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SS)}catch(t){console.error(t)}}SS(),jw.exports=Kf;var VP=jw.exports;const kP=Cw(VP),MP="modulepreload",LP=function(t){return"/"+t},aT={},xt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=LP(l),l in aT)return;aT[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":MP,c||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((m,g)=>{d.addEventListener("load",m),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var oT="popstate";function UP(t={}){function e(r,i){let{pathname:s,search:a,hash:o}=r.location;return _g("",{pathname:s,search:a,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:lu(i)}return BP(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Dn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jP(){return Math.random().toString(36).substring(2,10)}function lT(t,e){return{usr:t.state,key:t.key,idx:e}}function _g(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Ao(e):e,state:n,key:e&&e.key||r||jP()}}function lu({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ao(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function BP(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o="POP",l=null,c=h();c==null&&(c=0,a.replaceState({...a.state,idx:c},""));function h(){return(a.state||{idx:null}).idx}function d(){o="POP";let C=h(),v=C==null?null:C-c;c=C,l&&l({action:o,location:x.location,delta:v})}function m(C,v){o="PUSH";let y=_g(x.location,C,v);c=h()+1;let T=lT(y,c),N=x.createHref(y);try{a.pushState(T,"",N)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(N)}s&&l&&l({action:o,location:x.location,delta:1})}function g(C,v){o="REPLACE";let y=_g(x.location,C,v);c=h();let T=lT(y,c),N=x.createHref(y);a.replaceState(T,"",N),s&&l&&l({action:o,location:x.location,delta:0})}function w(C){return zP(C)}let x={get action(){return o},get location(){return t(i,a)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(oT,d),l=C,()=>{i.removeEventListener(oT,d),l=null}},createHref(C){return e(i,C)},createURL:w,encodeLocation(C){let v=w(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:g,go(C){return a.go(C)}};return x}function zP(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ve(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:lu(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function IS(t,e,n="/"){return qP(t,e,n,!1)}function qP(t,e,n,r){let i=typeof e=="string"?Ao(e):e,s=Cr(i.pathname||"/",n);if(s==null)return null;let a=RS(t);FP(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=eO(s);o=JP(a[l],c,r)}return o}function RS(t,e=[],n=[],r=""){let i=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Ve(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let c=wr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Ve(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),RS(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:XP(c,s.index),routesMeta:h})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))i(s,a);else for(let l of xS(s.path))i(s,a,l)}),e}function xS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=xS(r.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),i&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function FP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var HP=/^:[\w-]+$/,GP=3,$P=2,KP=1,QP=10,YP=-2,uT=t=>t==="*";function XP(t,e){let n=t.split("/"),r=n.length;return n.some(uT)&&(r+=YP),e&&(r+=$P),n.filter(i=>!uT(i)).reduce((i,s)=>i+(HP.test(s)?GP:s===""?KP:QP),r)}function WP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function JP(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",a=[];for(let o=0;o<r.length;++o){let l=r[o],c=o===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=ff({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),m=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=ff({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:wr([s,d.pathname]),pathnameBase:iO(wr([s,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(s=wr([s,d.pathnameBase]))}return a}function ff(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ZP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((c,{paramName:h,isOptional:d},m)=>{if(h==="*"){let w=o[m]||"";a=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const g=o[m];return d&&!g?c[h]=void 0:c[h]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function ZP(t,e=!1,n=!0){Dn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(r.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function eO(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Dn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Cr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function tO(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ao(t):t;return{pathname:n?n.startsWith("/")?n:nO(n,e):e,search:sO(r),hash:aO(i)}}function nO(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ep(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rO(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function i_(t){let e=rO(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function s_(t,e,n,r=!1){let i;typeof t=="string"?i=Ao(t):(i={...t},Ve(!i.pathname||!i.pathname.includes("?"),ep("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),ep("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),ep("#","search","hash",i)));let s=t===""||i.pathname==="",a=s?"/":i.pathname,o;if(a==null)o=n;else{let d=e.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}o=d>=0?e[d]:"/"}let l=tO(i,o),c=a&&a!=="/"&&a.endsWith("/"),h=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}var wr=t=>t.join("/").replace(/\/\/+/g,"/"),iO=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sO=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,aO=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function oO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var CS=["POST","PUT","PATCH","DELETE"];new Set(CS);var lO=["GET",...CS];new Set(lO);var So=D.createContext(null);So.displayName="DataRouter";var cd=D.createContext(null);cd.displayName="DataRouterState";D.createContext(!1);var DS=D.createContext({isTransitioning:!1});DS.displayName="ViewTransition";var uO=D.createContext(new Map);uO.displayName="Fetchers";var cO=D.createContext(null);cO.displayName="Await";var Vn=D.createContext(null);Vn.displayName="Navigation";var Fu=D.createContext(null);Fu.displayName="Location";var kn=D.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var a_=D.createContext(null);a_.displayName="RouteError";function hO(t,{relative:e}={}){Ve(Io(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=D.useContext(Vn),{hash:i,pathname:s,search:a}=Hu(t,{relative:e}),o=s;return n!=="/"&&(o=s==="/"?n:wr([n,s])),r.createHref({pathname:o,search:a,hash:i})}function Io(){return D.useContext(Fu)!=null}function Ui(){return Ve(Io(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(Fu).location}var NS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function PS(t){D.useContext(Vn).static||D.useLayoutEffect(t)}function o_(){let{isDataRoute:t}=D.useContext(kn);return t?IO():fO()}function fO(){Ve(Io(),"useNavigate() may be used only in the context of a <Router> component.");let t=D.useContext(So),{basename:e,navigator:n}=D.useContext(Vn),{matches:r}=D.useContext(kn),{pathname:i}=Ui(),s=JSON.stringify(i_(r)),a=D.useRef(!1);return PS(()=>{a.current=!0}),D.useCallback((l,c={})=>{if(Dn(a.current,NS),!a.current)return;if(typeof l=="number"){n.go(l);return}let h=s_(l,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:wr([e,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[e,n,s,i,t])}var dO=D.createContext(null);function mO(t){let e=D.useContext(kn).outlet;return e&&D.createElement(dO.Provider,{value:t},e)}function Hu(t,{relative:e}={}){let{matches:n}=D.useContext(kn),{pathname:r}=Ui(),i=JSON.stringify(i_(n));return D.useMemo(()=>s_(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function pO(t,e){return OS(t,e)}function OS(t,e,n,r){var v;Ve(Io(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=D.useContext(Vn),{matches:s}=D.useContext(kn),a=s[s.length-1],o=a?a.params:{},l=a?a.pathname:"/",c=a?a.pathnameBase:"/",h=a&&a.route;{let y=h&&h.path||"";VS(l,!h||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let d=Ui(),m;if(e){let y=typeof e=="string"?Ao(e):e;Ve(c==="/"||((v=y.pathname)==null?void 0:v.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${y.pathname}" was given in the \`location\` prop.`),m=y}else m=d;let g=m.pathname||"/",w=g;if(c!=="/"){let y=c.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let x=IS(t,{pathname:w});Dn(h||x!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Dn(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=EO(x&&x.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:wr([c,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:wr([c,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&C?D.createElement(Fu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},C):C}function gO(){let t=SO(),e=oO(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:s},"ErrorBoundary")," or"," ",D.createElement("code",{style:s},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,a)}var yO=D.createElement(gO,null),_O=class extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?D.createElement(kn.Provider,{value:this.props.routeContext},D.createElement(a_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vO({routeContext:t,match:e,children:n}){let r=D.useContext(So);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),D.createElement(kn.Provider,{value:t},n)}function EO(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let l=i.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);Ve(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,l+1))}let a=!1,o=-1;if(n)for(let l=0;l<i.length;l++){let c=i[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(o=l),c.route.id){let{loaderData:h,errors:d}=n,m=c.route.loader&&!h.hasOwnProperty(c.route.id)&&(!d||d[c.route.id]===void 0);if(c.route.lazy||m){a=!0,o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}return i.reduceRight((l,c,h)=>{let d,m=!1,g=null,w=null;n&&(d=s&&c.route.id?s[c.route.id]:void 0,g=c.route.errorElement||yO,a&&(o<0&&h===0?(VS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,w=null):o===h&&(m=!0,w=c.route.hydrateFallbackElement||null)));let x=e.concat(i.slice(0,h+1)),C=()=>{let v;return d?v=g:m?v=w:c.route.Component?v=D.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=l,D.createElement(vO,{match:c,routeContext:{outlet:l,matches:x,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?D.createElement(_O,{location:n.location,revalidation:n.revalidation,component:g,error:d,children:C(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):C()},null)}function l_(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function TO(t){let e=D.useContext(So);return Ve(e,l_(t)),e}function bO(t){let e=D.useContext(cd);return Ve(e,l_(t)),e}function wO(t){let e=D.useContext(kn);return Ve(e,l_(t)),e}function u_(t){let e=wO(t),n=e.matches[e.matches.length-1];return Ve(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function AO(){return u_("useRouteId")}function SO(){var r;let t=D.useContext(a_),e=bO("useRouteError"),n=u_("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function IO(){let{router:t}=TO("useNavigate"),e=u_("useNavigate"),n=D.useRef(!1);return PS(()=>{n.current=!0}),D.useCallback(async(i,s={})=>{Dn(n.current,NS),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var cT={};function VS(t,e,n){!e&&!cT[t]&&(cT[t]=!0,Dn(!1,n))}D.memo(RO);function RO({routes:t,future:e,state:n}){return OS(t,void 0,n,e)}function kS({to:t,replace:e,state:n,relative:r}){Ve(Io(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=D.useContext(Vn);Dn(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=D.useContext(kn),{pathname:a}=Ui(),o=o_(),l=s_(t,i_(s),a,r==="path"),c=JSON.stringify(l);return D.useEffect(()=>{o(JSON.parse(c),{replace:e,state:n,relative:r})},[o,c,r,e,n]),null}function xO(t){return mO(t.context)}function Ue(t){Ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function CO({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){Ve(!Io(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=t.replace(/^\/*/,"/"),o=D.useMemo(()=>({basename:a,navigator:i,static:s,future:{}}),[a,i,s]);typeof n=="string"&&(n=Ao(n));let{pathname:l="/",search:c="",hash:h="",state:d=null,key:m="default"}=n,g=D.useMemo(()=>{let w=Cr(l,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:d,key:m},navigationType:r}},[a,l,c,h,d,m,r]);return Dn(g!=null,`<Router basename="${a}"> is not able to match the URL "${l}${c}${h}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:D.createElement(Vn.Provider,{value:o},D.createElement(Fu.Provider,{children:e,value:g}))}function DO({children:t,location:e}){return pO(vg(t),e)}function vg(t,e=[]){let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,vg(r.props.children,s));return}Ve(r.type===Ue,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ve(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=vg(r.props.children,s)),n.push(a)}),n}var ph="get",gh="application/x-www-form-urlencoded";function hd(t){return t!=null&&typeof t.tagName=="string"}function NO(t){return hd(t)&&t.tagName.toLowerCase()==="button"}function PO(t){return hd(t)&&t.tagName.toLowerCase()==="form"}function OO(t){return hd(t)&&t.tagName.toLowerCase()==="input"}function VO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function kO(t,e){return t.button===0&&(!e||e==="_self")&&!VO(t)}var qc=null;function MO(){if(qc===null)try{new FormData(document.createElement("form"),0),qc=!1}catch{qc=!0}return qc}var LO=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function tp(t){return t!=null&&!LO.has(t)?(Dn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gh}"`),null):t}function UO(t,e){let n,r,i,s,a;if(PO(t)){let o=t.getAttribute("action");r=o?Cr(o,e):null,n=t.getAttribute("method")||ph,i=tp(t.getAttribute("enctype"))||gh,s=new FormData(t)}else if(NO(t)||OO(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(r=l?Cr(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||ph,i=tp(t.getAttribute("formenctype"))||tp(o.getAttribute("enctype"))||gh,s=new FormData(o,t),!MO()){let{name:c,type:h,value:d}=t;if(h==="image"){let m=c?`${c}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else c&&s.append(c,d)}}else{if(hd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ph,r=null,i=gh,a=t}return s&&i==="text/plain"&&(a=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function c_(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jO(t,e,n){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&Cr(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function BO(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zO(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function qO(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let a=await BO(s,n);return a.links?a.links():[]}return[]}));return $O(r.flat(1).filter(zO).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function hT(t,e,n,r,i,s){let a=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,o=(l,c)=>{var h;return n[c].pathname!==l.pathname||((h=n[c].route.path)==null?void 0:h.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,c)=>a(l,c)||o(l,c)):s==="data"?e.filter((l,c)=>{var d;let h=r.routes[l.route.id];if(!h||!h.hasLoader)return!1;if(a(l,c)||o(l,c))return!0;if(l.route.shouldRevalidate){let m=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function FO(t,e,{includeHydrateFallback:n}={}){return HO(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function HO(t){return[...new Set(t)]}function GO(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function $O(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(GO(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function MS(){let t=D.useContext(So);return c_(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function KO(){let t=D.useContext(cd);return c_(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var h_=D.createContext(void 0);h_.displayName="FrameworkContext";function LS(){let t=D.useContext(h_);return c_(t,"You must render this element inside a <HydratedRouter> element"),t}function QO(t,e){let n=D.useContext(h_),[r,i]=D.useState(!1),[s,a]=D.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:c,onMouseLeave:h,onTouchStart:d}=e,m=D.useRef(null);D.useEffect(()=>{if(t==="render"&&a(!0),t==="viewport"){let x=v=>{v.forEach(y=>{a(y.isIntersecting)})},C=new IntersectionObserver(x,{threshold:.5});return m.current&&C.observe(m.current),()=>{C.disconnect()}}},[t]),D.useEffect(()=>{if(r){let x=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(x)}}},[r]);let g=()=>{i(!0)},w=()=>{i(!1),a(!1)};return n?t!=="intent"?[s,m,{}]:[s,m,{onFocus:tl(o,g),onBlur:tl(l,w),onMouseEnter:tl(c,g),onMouseLeave:tl(h,w),onTouchStart:tl(d,g)}]:[!1,m,{}]}function tl(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function YO({page:t,...e}){let{router:n}=MS(),r=D.useMemo(()=>IS(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?D.createElement(WO,{page:t,matches:r,...e}):null}function XO(t){let{manifest:e,routeModules:n}=LS(),[r,i]=D.useState([]);return D.useEffect(()=>{let s=!1;return qO(t,e,n).then(a=>{s||i(a)}),()=>{s=!0}},[t,e,n]),r}function WO({page:t,matches:e,...n}){let r=Ui(),{manifest:i,routeModules:s}=LS(),{basename:a}=MS(),{loaderData:o,matches:l}=KO(),c=D.useMemo(()=>hT(t,e,l,i,r,"data"),[t,e,l,i,r]),h=D.useMemo(()=>hT(t,e,l,i,r,"assets"),[t,e,l,i,r]),d=D.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let w=new Set,x=!1;if(e.forEach(v=>{var T;let y=i.routes[v.route.id];!y||!y.hasLoader||(!c.some(N=>N.route.id===v.route.id)&&v.route.id in o&&((T=s[v.route.id])!=null&&T.shouldRevalidate)||y.hasClientLoader?x=!0:w.add(v.route.id))}),w.size===0)return[];let C=jO(t,a,"data");return x&&w.size>0&&C.searchParams.set("_routes",e.filter(v=>w.has(v.route.id)).map(v=>v.route.id).join(",")),[C.pathname+C.search]},[a,o,r,i,c,e,t,s]),m=D.useMemo(()=>FO(h,i),[h,i]),g=XO(h);return D.createElement(D.Fragment,null,d.map(w=>D.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),m.map(w=>D.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),g.map(({key:w,link:x})=>D.createElement("link",{key:w,...x})))}function JO(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var US=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{US&&(window.__reactRouterVersion="7.7.0")}catch{}function ZO({basename:t,children:e,window:n}){let r=D.useRef();r.current==null&&(r.current=UP({window:n,v5Compat:!0}));let i=r.current,[s,a]=D.useState({action:i.action,location:i.location}),o=D.useCallback(l=>{D.startTransition(()=>a(l))},[a]);return D.useLayoutEffect(()=>i.listen(o),[i,o]),D.createElement(CO,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var jS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,BS=D.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:h,viewTransition:d,...m},g){let{basename:w}=D.useContext(Vn),x=typeof c=="string"&&jS.test(c),C,v=!1;if(typeof c=="string"&&x&&(C=c,US))try{let A=new URL(window.location.href),S=c.startsWith("//")?new URL(A.protocol+c):new URL(c),P=Cr(S.pathname,w);S.origin===A.origin&&P!=null?c=P+S.search+S.hash:v=!0}catch{Dn(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=hO(c,{relative:i}),[T,N,U]=QO(r,m),z=nV(c,{replace:a,state:o,target:l,preventScrollReset:h,relative:i,viewTransition:d});function b(A){e&&e(A),A.defaultPrevented||z(A)}let E=D.createElement("a",{...m,...U,href:C||y,onClick:v||s?e:b,ref:JO(g,N),target:l,"data-discover":!x&&n==="render"?"true":void 0});return T&&!x?D.createElement(D.Fragment,null,E,D.createElement(YO,{page:y})):E});BS.displayName="Link";var zS=D.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:a,viewTransition:o,children:l,...c},h){let d=Hu(a,{relative:c.relative}),m=Ui(),g=D.useContext(cd),{navigator:w,basename:x}=D.useContext(Vn),C=g!=null&&oV(d)&&o===!0,v=w.encodeLocation?w.encodeLocation(d).pathname:d.pathname,y=m.pathname,T=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;n||(y=y.toLowerCase(),T=T?T.toLowerCase():null,v=v.toLowerCase()),T&&x&&(T=Cr(T,x)||T);const N=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let U=y===v||!i&&y.startsWith(v)&&y.charAt(N)==="/",z=T!=null&&(T===v||!i&&T.startsWith(v)&&T.charAt(v.length)==="/"),b={isActive:U,isPending:z,isTransitioning:C},E=U?e:void 0,A;typeof r=="function"?A=r(b):A=[r,U?"active":null,z?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let S=typeof s=="function"?s(b):s;return D.createElement(BS,{...c,"aria-current":E,className:A,ref:h,style:S,to:a,viewTransition:o},typeof l=="function"?l(b):l)});zS.displayName="NavLink";var eV=D.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:a=ph,action:o,onSubmit:l,relative:c,preventScrollReset:h,viewTransition:d,...m},g)=>{let w=sV(),x=aV(o,{relative:c}),C=a.toLowerCase()==="get"?"get":"post",v=typeof o=="string"&&jS.test(o),y=T=>{if(l&&l(T),T.defaultPrevented)return;T.preventDefault();let N=T.nativeEvent.submitter,U=(N==null?void 0:N.getAttribute("formmethod"))||a;w(N||T.currentTarget,{fetcherKey:e,method:U,navigate:n,replace:i,state:s,relative:c,preventScrollReset:h,viewTransition:d})};return D.createElement("form",{ref:g,method:C,action:x,onSubmit:r?l:y,...m,"data-discover":!v&&t==="render"?"true":void 0})});eV.displayName="Form";function tV(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qS(t){let e=D.useContext(So);return Ve(e,tV(t)),e}function nV(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:a}={}){let o=o_(),l=Ui(),c=Hu(t,{relative:s});return D.useCallback(h=>{if(kO(h,e)){h.preventDefault();let d=n!==void 0?n:lu(l)===lu(c);o(t,{replace:d,state:r,preventScrollReset:i,relative:s,viewTransition:a})}},[l,o,c,n,r,e,t,i,s,a])}var rV=0,iV=()=>`__${String(++rV)}__`;function sV(){let{router:t}=qS("useSubmit"),{basename:e}=D.useContext(Vn),n=AO();return D.useCallback(async(r,i={})=>{let{action:s,method:a,encType:o,formData:l,body:c}=UO(r,e);if(i.navigate===!1){let h=i.fetcherKey||iV();await t.fetch(h,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||a,formEncType:i.encType||o,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||a,formEncType:i.encType||o,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function aV(t,{relative:e}={}){let{basename:n}=D.useContext(Vn),r=D.useContext(kn);Ve(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Hu(t||".",{relative:e})},a=Ui();if(t==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(h=>h==="")){o.delete("index"),l.filter(d=>d).forEach(d=>o.append("index",d));let h=o.toString();s.search=h?`?${h}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:wr([n,s.pathname])),lu(s)}function oV(t,e={}){let n=D.useContext(DS);Ve(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=qS("useViewTransitionState"),i=Hu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Cr(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Cr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ff(i.pathname,a)!=null||ff(i.pathname,s)!=null}const lV=()=>{};var fT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uV=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],o=t[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},HS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,o=a?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|o>>4;let m=(o&15)<<2|c>>6,g=c&63;l||(g=64,a||(m=64)),r.push(n[h],n[d],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(FS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uV(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||o==null||c==null||d==null)throw new cV;const m=s<<2|o>>4;if(r.push(m),c!==64){const g=o<<4&240|c>>2;if(r.push(g),d!==64){const w=c<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cV extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hV=function(t){const e=FS(t);return HS.encodeByteArray(e,!0)},df=function(t){return hV(t).replace(/\./g,"")},GS=function(t){try{return HS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV=()=>$S().__FIREBASE_DEFAULTS__,dV=()=>{if(typeof process>"u"||typeof fT>"u")return;const t=fT.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mV=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&GS(t[1]);return e&&JSON.parse(e)},fd=()=>{try{return lV()||fV()||dV()||mV()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},KS=t=>{var e,n;return(n=(e=fd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},pV=t=>{const e=KS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},QS=()=>{var t;return(t=fd())==null?void 0:t.config},YS=t=>{var e;return(e=fd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function f_(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yV(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[df(JSON.stringify(n)),df(JSON.stringify(a)),""].join(".")}const Vl={};function _V(){const t={prod:[],emulator:[]};for(const e of Object.keys(Vl))Vl[e]?t.emulator.push(e):t.prod.push(e);return t}function vV(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let dT=!1;function XS(t,e){if(typeof window>"u"||typeof document>"u"||!ji(window.location.host)||Vl[t]===e||Vl[t]||dT)return;Vl[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=_V().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function o(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{dT=!0,a()},m}function h(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function d(){const m=vV(r),g=n("text"),w=document.getElementById(g)||document.createElement("span"),x=n("learnmore"),C=document.getElementById(x)||document.createElement("a"),v=n("preprendIcon"),y=document.getElementById(v)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const T=m.element;o(T),h(C,x);const N=c();l(y,v),T.append(y,w,C,N),document.body.appendChild(T)}s?(w.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function EV(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function WS(){var e;const t=(e=fd())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TV(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bV(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wV(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZS(){return!WS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eI(){return!WS()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function d_(){try{return typeof indexedDB=="object"}catch{return!1}}function tI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function AV(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SV,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?IV(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new bn(i,o,r)}}function IV(t,e){return t.replace(RV,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const RV=/\{\$([^}]+)}/g;function xV(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ni(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(mT(s)&&mT(a)){if(!Ni(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mT(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function dl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function CV(t,e){const n=new DV(t,e);return n.subscribe.bind(n)}class DV{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NV(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=np),i.error===void 0&&(i.error=np),i.complete===void 0&&(i.complete=np);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NV(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function np(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PV=1e3,OV=2,VV=4*60*60*1e3,kV=.5;function pT(t,e=PV,n=OV){const r=e*Math.pow(n,t),i=Math.round(kV*r*(Math.random()-.5)*2);return Math.min(VV,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gV;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UV(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LV(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LV(t){return t===ns?void 0:t}function UV(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MV(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const BV={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},zV=ae.INFO,qV={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},FV=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qV[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dd{constructor(e){this.name=e,this._logLevel=zV,this._logHandler=FV,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BV[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const HV=(t,e)=>e.some(n=>t instanceof n);let gT,yT;function GV(){return gT||(gT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $V(){return yT||(yT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nI=new WeakMap,Eg=new WeakMap,rI=new WeakMap,rp=new WeakMap,m_=new WeakMap;function KV(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(wi(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&nI.set(n,t)}).catch(()=>{}),m_.set(e,t),e}function QV(t){if(Eg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Eg.set(t,e)}let Tg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Eg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YV(t){Tg=t(Tg)}function XV(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ip(this),e,...n);return rI.set(r,e.sort?e.sort():[e]),wi(r)}:$V().includes(t)?function(...e){return t.apply(ip(this),e),wi(nI.get(this))}:function(...e){return wi(t.apply(ip(this),e))}}function WV(t){return typeof t=="function"?XV(t):(t instanceof IDBTransaction&&QV(t),HV(t,GV())?new Proxy(t,Tg):t)}function wi(t){if(t instanceof IDBRequest)return KV(t);if(rp.has(t))return rp.get(t);const e=WV(t);return e!==t&&(rp.set(t,e),m_.set(e,t)),e}const ip=t=>m_.get(t);function iI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),o=wi(a);return r&&a.addEventListener("upgradeneeded",l=>{r(wi(a.result),l.oldVersion,l.newVersion,wi(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const JV=["get","getKey","getAll","getAllKeys","count"],ZV=["put","add","delete","clear"],sp=new Map;function _T(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sp.get(e))return sp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ZV.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JV.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),i&&l.done]))[0]};return sp.set(e,s),s}YV(t=>({...t,get:(e,n,r)=>_T(e,n)||t.get(e,n,r),has:(e,n)=>!!_T(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function t4(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bg="@firebase/app",vT="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new dd("@firebase/app"),n4="@firebase/app-compat",r4="@firebase/analytics-compat",i4="@firebase/analytics",s4="@firebase/app-check-compat",a4="@firebase/app-check",o4="@firebase/auth",l4="@firebase/auth-compat",u4="@firebase/database",c4="@firebase/data-connect",h4="@firebase/database-compat",f4="@firebase/functions",d4="@firebase/functions-compat",m4="@firebase/installations",p4="@firebase/installations-compat",g4="@firebase/messaging",y4="@firebase/messaging-compat",_4="@firebase/performance",v4="@firebase/performance-compat",E4="@firebase/remote-config",T4="@firebase/remote-config-compat",b4="@firebase/storage",w4="@firebase/storage-compat",A4="@firebase/firestore",S4="@firebase/ai",I4="@firebase/firestore-compat",R4="firebase",x4="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="[DEFAULT]",C4={[bg]:"fire-core",[n4]:"fire-core-compat",[i4]:"fire-analytics",[r4]:"fire-analytics-compat",[a4]:"fire-app-check",[s4]:"fire-app-check-compat",[o4]:"fire-auth",[l4]:"fire-auth-compat",[u4]:"fire-rtdb",[c4]:"fire-data-connect",[h4]:"fire-rtdb-compat",[f4]:"fire-fn",[d4]:"fire-fn-compat",[m4]:"fire-iid",[p4]:"fire-iid-compat",[g4]:"fire-fcm",[y4]:"fire-fcm-compat",[_4]:"fire-perf",[v4]:"fire-perf-compat",[E4]:"fire-rc",[T4]:"fire-rc-compat",[b4]:"fire-gcs",[w4]:"fire-gcs-compat",[A4]:"fire-fst",[I4]:"fire-fst-compat",[S4]:"fire-vertex","fire-js":"fire-js",[R4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=new Map,D4=new Map,Ag=new Map;function ET(t,e){try{t.container.addComponent(e)}catch(n){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(Ag.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Ag.set(e,t);for(const n of mf.values())ET(n,t);for(const n of D4.values())ET(n,t);return!0}function Bi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ai=new Hs("app","Firebase",N4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=x4;function sI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:wg,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Ai.create("bad-app-name",{appName:String(i)});if(n||(n=QS()),!n)throw Ai.create("no-options");const s=mf.get(i);if(s){if(Ni(n,s.options)&&Ni(r,s.config))return s;throw Ai.create("duplicate-app",{appName:i})}const a=new jV(i);for(const l of Ag.values())a.addComponent(l);const o=new P4(n,r,a);return mf.set(i,o),o}function p_(t=wg){const e=mf.get(t);if(!e&&t===wg&&QS())return sI();if(!e)throw Ai.create("no-app",{appName:t});return e}function zt(t,e,n){let r=C4[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(a.join(" "));return}Nn(new Tn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O4="firebase-heartbeat-database",V4=1,uu="firebase-heartbeat-store";let ap=null;function aI(){return ap||(ap=iI(O4,V4,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(uu)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ai.create("idb-open",{originalErrorMessage:t.message})})),ap}async function k4(t){try{const n=(await aI()).transaction(uu),r=await n.objectStore(uu).get(oI(t));return await n.done,r}catch(e){if(e instanceof bn)Dr.warn(e.message);else{const n=Ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(n.message)}}}async function TT(t,e){try{const r=(await aI()).transaction(uu,"readwrite");await r.objectStore(uu).put(e,oI(t)),await r.done}catch(n){if(n instanceof bn)Dr.warn(n.message);else{const r=Ai.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dr.warn(r.message)}}}function oI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4=1024,L4=30;class U4{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new B4(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bT();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>L4){const a=z4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Dr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bT(),{heartbeatsToSend:r,unsentEntries:i}=j4(this._heartbeatsCache.heartbeats),s=df(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Dr.warn(n),""}}}function bT(){return new Date().toISOString().substring(0,10)}function j4(t,e=M4){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),wT(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wT(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class B4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return d_()?tI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await k4(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return TT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return TT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wT(t){return df(JSON.stringify({version:2,heartbeats:t})).length}function z4(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q4(t){Nn(new Tn("platform-logger",e=>new e4(e),"PRIVATE")),Nn(new Tn("heartbeat",e=>new U4(e),"PRIVATE")),zt(bg,vT,t),zt(bg,vT,"esm2020"),zt("fire-js","")}q4("");var F4="firebase",H4="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(F4,H4,"app");const lI="@firebase/installations",g_="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=1e4,cI=`w:${g_}`,hI="FIS_v2",G4="https://firebaseinstallations.googleapis.com/v1",$4=60*60*1e3,K4="installations",Q4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xs=new Hs(K4,Q4,Y4);function fI(t){return t instanceof bn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI({projectId:t}){return`${G4}/projects/${t}/installations`}function mI(t){return{token:t.token,requestStatus:2,expiresIn:W4(t.expiresIn),creationTime:Date.now()}}async function pI(t,e){const r=(await e.json()).error;return xs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function gI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function X4(t,{refreshToken:e}){const n=gI(t);return n.append("Authorization",J4(e)),n}async function yI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function W4(t){return Number(t.replace("s","000"))}function J4(t){return`${hI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z4({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=dI(t),i=gI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const a={fid:n,authVersion:hI,appId:t.appId,sdkVersion:cI},o={method:"POST",headers:i,body:JSON.stringify(a)},l=await yI(()=>fetch(r,o));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:mI(c.authToken)}}else throw await pI("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=/^[cdef][\w-]{21}$/,Sg="";function nk(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=rk(t);return tk.test(n)?n:Sg}catch{return Sg}}function rk(t){return ek(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new Map;function EI(t,e){const n=md(t);TI(n,e),ik(n,e)}function TI(t,e){const n=vI.get(t);if(n)for(const r of n)r(e)}function ik(t,e){const n=sk();n&&n.postMessage({key:t,fid:e}),ak()}let us=null;function sk(){return!us&&"BroadcastChannel"in self&&(us=new BroadcastChannel("[Firebase] FID Change"),us.onmessage=t=>{TI(t.data.key,t.data.fid)}),us}function ak(){vI.size===0&&us&&(us.close(),us=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="firebase-installations-database",lk=1,Cs="firebase-installations-store";let op=null;function y_(){return op||(op=iI(ok,lk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cs)}}})),op}async function pf(t,e){const n=md(t),i=(await y_()).transaction(Cs,"readwrite"),s=i.objectStore(Cs),a=await s.get(n);return await s.put(e,n),await i.done,(!a||a.fid!==e.fid)&&EI(t,e.fid),e}async function bI(t){const e=md(t),r=(await y_()).transaction(Cs,"readwrite");await r.objectStore(Cs).delete(e),await r.done}async function pd(t,e){const n=md(t),i=(await y_()).transaction(Cs,"readwrite"),s=i.objectStore(Cs),a=await s.get(n),o=e(a);return o===void 0?await s.delete(n):await s.put(o,n),await i.done,o&&(!a||a.fid!==o.fid)&&EI(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(t){let e;const n=await pd(t.appConfig,r=>{const i=uk(r),s=ck(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Sg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uk(t){const e=t||{fid:nk(),registrationStatus:0};return wI(e)}function ck(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(xs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=hk(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fk(t)}:{installationEntry:e}}async function hk(t,e){try{const n=await Z4(t,e);return pf(t.appConfig,n)}catch(n){throw fI(n)&&n.customData.serverCode===409?await bI(t.appConfig):await pf(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function fk(t){let e=await AT(t.appConfig);for(;e.registrationStatus===1;)await _I(100),e=await AT(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await __(t);return r||n}return e}function AT(t){return pd(t,e=>{if(!e)throw xs.create("installation-not-found");return wI(e)})}function wI(t){return dk(t)?{fid:t.fid,registrationStatus:0}:t}function dk(t){return t.registrationStatus===1&&t.registrationTime+uI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk({appConfig:t,heartbeatServiceProvider:e},n){const r=pk(t,n),i=X4(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const a={installation:{sdkVersion:cI,appId:t.appId}},o={method:"POST",headers:i,body:JSON.stringify(a)},l=await yI(()=>fetch(r,o));if(l.ok){const c=await l.json();return mI(c)}else throw await pI("Generate Auth Token",l)}function pk(t,{fid:e}){return`${dI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(t,e=!1){let n;const r=await pd(t.appConfig,s=>{if(!AI(s))throw xs.create("not-registered");const a=s.authToken;if(!e&&_k(a))return s;if(a.requestStatus===1)return n=gk(t,e),s;{if(!navigator.onLine)throw xs.create("app-offline");const o=Ek(s);return n=yk(t,o),o}});return n?await n:r.authToken}async function gk(t,e){let n=await ST(t.appConfig);for(;n.authToken.requestStatus===1;)await _I(100),n=await ST(t.appConfig);const r=n.authToken;return r.requestStatus===0?v_(t,e):r}function ST(t){return pd(t,e=>{if(!AI(e))throw xs.create("not-registered");const n=e.authToken;return Tk(n)?{...e,authToken:{requestStatus:0}}:e})}async function yk(t,e){try{const n=await mk(t,e),r={...e,authToken:n};return await pf(t.appConfig,r),n}catch(n){if(fI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await bI(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await pf(t.appConfig,r)}throw n}}function AI(t){return t!==void 0&&t.registrationStatus===2}function _k(t){return t.requestStatus===2&&!vk(t)}function vk(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$4}function Ek(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Tk(t){return t.requestStatus===1&&t.requestTime+uI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(t){const e=t,{installationEntry:n,registrationPromise:r}=await __(e);return r?r.catch(console.error):v_(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(t,e=!1){const n=t;return await Ak(n),(await v_(n,e)).token}async function Ak(t){const{registrationPromise:e}=await __(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){if(!t||!t.options)throw lp("App Configuration");if(!t.name)throw lp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw lp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function lp(t){return xs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="installations",Ik="installations-internal",Rk=t=>{const e=t.getProvider("app").getImmediate(),n=Sk(e),r=Bi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},xk=t=>{const e=t.getProvider("app").getImmediate(),n=Bi(e,SI).getImmediate();return{getId:()=>bk(n),getToken:i=>wk(n,i)}};function Ck(){Nn(new Tn(SI,Rk,"PUBLIC")),Nn(new Tn(Ik,xk,"PRIVATE"))}Ck();zt(lI,g_);zt(lI,g_,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="analytics",Dk="firebase_id",Nk="origin",Pk=60*1e3,Ok="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",E_="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new dd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},on=new Hs("analytics","Analytics",Vk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t){if(!t.startsWith(E_)){const e=on.create("invalid-gtag-resource",{gtagURL:t});return qt.warn(e.message),""}return t}function II(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Mk(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Lk(t,e){const n=Mk("firebase-js-sdk-policy",{createScriptURL:kk}),r=document.createElement("script"),i=`${E_}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Uk(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function jk(t,e,n,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await II(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(o){qt.error(o)}t("config",i,s)}async function Bk(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const o=await II(n);for(const l of a){const c=o.find(d=>d.measurementId===l),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){qt.error(s)}}function zk(t,e,n,r){async function i(s,...a){try{if(s==="event"){const[o,l]=a;await Bk(t,e,n,o,l)}else if(s==="config"){const[o,l]=a;await jk(t,e,n,r,o,l)}else if(s==="consent"){const[o,l]=a;t("consent",o,l)}else if(s==="get"){const[o,l,c]=a;t("get",o,l,c)}else if(s==="set"){const[o]=a;t("set",o)}else t(s,...a)}catch(o){qt.error(o)}}return i}function qk(t,e,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=zk(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Fk(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(E_)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=30,Gk=1e3;class $k{constructor(e={},n=Gk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const RI=new $k;function Kk(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Qk(t){var a;const{appId:e,apiKey:n}=t,r={method:"GET",headers:Kk(n)},i=Ok.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let o="";try{const l=await s.json();(a=l.error)!=null&&a.message&&(o=l.error.message)}catch{}throw on.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Yk(t,e=RI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw on.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw on.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Jk;return setTimeout(async()=>{o.abort()},Pk),xI({appId:r,apiKey:i,measurementId:s},a,o,e)}async function xI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=RI){var o;const{appId:s,measurementId:a}=t;try{await Xk(r,e)}catch(l){if(a)return qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await Qk(t);return i.deleteThrottleMetadata(s),l}catch(l){const c=l;if(!Wk(c)){if(i.deleteThrottleMetadata(s),a)return qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:a};throw l}const h=Number((o=c==null?void 0:c.customData)==null?void 0:o.httpStatus)===503?pT(n,i.intervalMillis,Hk):pT(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(s,d),qt.debug(`Calling attemptFetch again in ${h} millis`),xI(t,d,r,i)}}function Xk(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(on.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Wk(t){if(!(t instanceof bn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Jk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Zk(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,a={...r,send_to:s};t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eM(){if(d_())try{await tI()}catch(t){return qt.warn(on.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return qt.warn(on.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tM(t,e,n,r,i,s,a){const o=Yk(t);o.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&qt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>qt.error(m)),e.push(o);const l=eM().then(m=>{if(m)return r.getId()}),[c,h]=await Promise.all([o,l]);Fk(s)||Lk(s,c.measurementId),i("js",new Date);const d=(a==null?void 0:a.config)??{};return d[Nk]="firebase",d.update=!0,h!=null&&(d[Dk]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.app=e}_delete(){return delete kl[this.app.options.appId],Promise.resolve()}}let kl={},IT=[];const RT={};let up="dataLayer",rM="gtag",xT,CI,CT=!1;function iM(){const t=[];if(JS()&&t.push("This is a browser extension environment."),AV()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=on.create("invalid-analytics-context",{errorInfo:e});qt.warn(n.message)}}function sM(t,e,n){iM();const r=t.options.appId;if(!r)throw on.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw on.create("no-api-key");if(kl[r]!=null)throw on.create("already-exists",{id:r});if(!CT){Uk(up);const{wrappedGtag:s,gtagCore:a}=qk(kl,IT,RT,up,rM);CI=s,xT=a,CT=!0}return kl[r]=tM(t,IT,RT,e,xT,up,n),new nM(t)}function aM(t=p_()){t=we(t);const e=Bi(t,gf);return e.isInitialized()?e.getImmediate():oM(t)}function oM(t,e={}){const n=Bi(t,gf);if(n.isInitialized()){const i=n.getImmediate();if(Ni(e,n.getOptions()))return i;throw on.create("already-initialized")}return n.initialize({options:e})}function lM(t,e,n,r){t=we(t),Zk(CI,kl[t.app.options.appId],e,n,r).catch(i=>qt.error(i))}const DT="@firebase/analytics",NT="0.10.18";function uM(){Nn(new Tn(gf,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return sM(r,i,n)},"PUBLIC")),Nn(new Tn("analytics-internal",t,"PRIVATE")),zt(DT,NT),zt(DT,NT,"esm2020");function t(e){try{const n=e.getProvider(gf).getImmediate();return{logEvent:(r,i,s)=>lM(n,r,i,s)}}catch(n){throw on.create("interop-component-reg-failed",{reason:n})}}}uM();var PT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si,DI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function A(){}A.prototype=E.prototype,b.D=E.prototype,b.prototype=new A,b.prototype.constructor=b,b.C=function(S,P,V){for(var R=Array(arguments.length-2),wn=2;wn<arguments.length;wn++)R[wn-2]=arguments[wn];return E.prototype[P].apply(S,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,E,A){A||(A=0);var S=Array(16);if(typeof E=="string")for(var P=0;16>P;++P)S[P]=E.charCodeAt(A++)|E.charCodeAt(A++)<<8|E.charCodeAt(A++)<<16|E.charCodeAt(A++)<<24;else for(P=0;16>P;++P)S[P]=E[A++]|E[A++]<<8|E[A++]<<16|E[A++]<<24;E=b.g[0],A=b.g[1],P=b.g[2];var V=b.g[3],R=E+(V^A&(P^V))+S[0]+3614090360&4294967295;E=A+(R<<7&4294967295|R>>>25),R=V+(P^E&(A^P))+S[1]+3905402710&4294967295,V=E+(R<<12&4294967295|R>>>20),R=P+(A^V&(E^A))+S[2]+606105819&4294967295,P=V+(R<<17&4294967295|R>>>15),R=A+(E^P&(V^E))+S[3]+3250441966&4294967295,A=P+(R<<22&4294967295|R>>>10),R=E+(V^A&(P^V))+S[4]+4118548399&4294967295,E=A+(R<<7&4294967295|R>>>25),R=V+(P^E&(A^P))+S[5]+1200080426&4294967295,V=E+(R<<12&4294967295|R>>>20),R=P+(A^V&(E^A))+S[6]+2821735955&4294967295,P=V+(R<<17&4294967295|R>>>15),R=A+(E^P&(V^E))+S[7]+4249261313&4294967295,A=P+(R<<22&4294967295|R>>>10),R=E+(V^A&(P^V))+S[8]+1770035416&4294967295,E=A+(R<<7&4294967295|R>>>25),R=V+(P^E&(A^P))+S[9]+2336552879&4294967295,V=E+(R<<12&4294967295|R>>>20),R=P+(A^V&(E^A))+S[10]+4294925233&4294967295,P=V+(R<<17&4294967295|R>>>15),R=A+(E^P&(V^E))+S[11]+2304563134&4294967295,A=P+(R<<22&4294967295|R>>>10),R=E+(V^A&(P^V))+S[12]+1804603682&4294967295,E=A+(R<<7&4294967295|R>>>25),R=V+(P^E&(A^P))+S[13]+4254626195&4294967295,V=E+(R<<12&4294967295|R>>>20),R=P+(A^V&(E^A))+S[14]+2792965006&4294967295,P=V+(R<<17&4294967295|R>>>15),R=A+(E^P&(V^E))+S[15]+1236535329&4294967295,A=P+(R<<22&4294967295|R>>>10),R=E+(P^V&(A^P))+S[1]+4129170786&4294967295,E=A+(R<<5&4294967295|R>>>27),R=V+(A^P&(E^A))+S[6]+3225465664&4294967295,V=E+(R<<9&4294967295|R>>>23),R=P+(E^A&(V^E))+S[11]+643717713&4294967295,P=V+(R<<14&4294967295|R>>>18),R=A+(V^E&(P^V))+S[0]+3921069994&4294967295,A=P+(R<<20&4294967295|R>>>12),R=E+(P^V&(A^P))+S[5]+3593408605&4294967295,E=A+(R<<5&4294967295|R>>>27),R=V+(A^P&(E^A))+S[10]+38016083&4294967295,V=E+(R<<9&4294967295|R>>>23),R=P+(E^A&(V^E))+S[15]+3634488961&4294967295,P=V+(R<<14&4294967295|R>>>18),R=A+(V^E&(P^V))+S[4]+3889429448&4294967295,A=P+(R<<20&4294967295|R>>>12),R=E+(P^V&(A^P))+S[9]+568446438&4294967295,E=A+(R<<5&4294967295|R>>>27),R=V+(A^P&(E^A))+S[14]+3275163606&4294967295,V=E+(R<<9&4294967295|R>>>23),R=P+(E^A&(V^E))+S[3]+4107603335&4294967295,P=V+(R<<14&4294967295|R>>>18),R=A+(V^E&(P^V))+S[8]+1163531501&4294967295,A=P+(R<<20&4294967295|R>>>12),R=E+(P^V&(A^P))+S[13]+2850285829&4294967295,E=A+(R<<5&4294967295|R>>>27),R=V+(A^P&(E^A))+S[2]+4243563512&4294967295,V=E+(R<<9&4294967295|R>>>23),R=P+(E^A&(V^E))+S[7]+1735328473&4294967295,P=V+(R<<14&4294967295|R>>>18),R=A+(V^E&(P^V))+S[12]+2368359562&4294967295,A=P+(R<<20&4294967295|R>>>12),R=E+(A^P^V)+S[5]+4294588738&4294967295,E=A+(R<<4&4294967295|R>>>28),R=V+(E^A^P)+S[8]+2272392833&4294967295,V=E+(R<<11&4294967295|R>>>21),R=P+(V^E^A)+S[11]+1839030562&4294967295,P=V+(R<<16&4294967295|R>>>16),R=A+(P^V^E)+S[14]+4259657740&4294967295,A=P+(R<<23&4294967295|R>>>9),R=E+(A^P^V)+S[1]+2763975236&4294967295,E=A+(R<<4&4294967295|R>>>28),R=V+(E^A^P)+S[4]+1272893353&4294967295,V=E+(R<<11&4294967295|R>>>21),R=P+(V^E^A)+S[7]+4139469664&4294967295,P=V+(R<<16&4294967295|R>>>16),R=A+(P^V^E)+S[10]+3200236656&4294967295,A=P+(R<<23&4294967295|R>>>9),R=E+(A^P^V)+S[13]+681279174&4294967295,E=A+(R<<4&4294967295|R>>>28),R=V+(E^A^P)+S[0]+3936430074&4294967295,V=E+(R<<11&4294967295|R>>>21),R=P+(V^E^A)+S[3]+3572445317&4294967295,P=V+(R<<16&4294967295|R>>>16),R=A+(P^V^E)+S[6]+76029189&4294967295,A=P+(R<<23&4294967295|R>>>9),R=E+(A^P^V)+S[9]+3654602809&4294967295,E=A+(R<<4&4294967295|R>>>28),R=V+(E^A^P)+S[12]+3873151461&4294967295,V=E+(R<<11&4294967295|R>>>21),R=P+(V^E^A)+S[15]+530742520&4294967295,P=V+(R<<16&4294967295|R>>>16),R=A+(P^V^E)+S[2]+3299628645&4294967295,A=P+(R<<23&4294967295|R>>>9),R=E+(P^(A|~V))+S[0]+4096336452&4294967295,E=A+(R<<6&4294967295|R>>>26),R=V+(A^(E|~P))+S[7]+1126891415&4294967295,V=E+(R<<10&4294967295|R>>>22),R=P+(E^(V|~A))+S[14]+2878612391&4294967295,P=V+(R<<15&4294967295|R>>>17),R=A+(V^(P|~E))+S[5]+4237533241&4294967295,A=P+(R<<21&4294967295|R>>>11),R=E+(P^(A|~V))+S[12]+1700485571&4294967295,E=A+(R<<6&4294967295|R>>>26),R=V+(A^(E|~P))+S[3]+2399980690&4294967295,V=E+(R<<10&4294967295|R>>>22),R=P+(E^(V|~A))+S[10]+4293915773&4294967295,P=V+(R<<15&4294967295|R>>>17),R=A+(V^(P|~E))+S[1]+2240044497&4294967295,A=P+(R<<21&4294967295|R>>>11),R=E+(P^(A|~V))+S[8]+1873313359&4294967295,E=A+(R<<6&4294967295|R>>>26),R=V+(A^(E|~P))+S[15]+4264355552&4294967295,V=E+(R<<10&4294967295|R>>>22),R=P+(E^(V|~A))+S[6]+2734768916&4294967295,P=V+(R<<15&4294967295|R>>>17),R=A+(V^(P|~E))+S[13]+1309151649&4294967295,A=P+(R<<21&4294967295|R>>>11),R=E+(P^(A|~V))+S[4]+4149444226&4294967295,E=A+(R<<6&4294967295|R>>>26),R=V+(A^(E|~P))+S[11]+3174756917&4294967295,V=E+(R<<10&4294967295|R>>>22),R=P+(E^(V|~A))+S[2]+718787259&4294967295,P=V+(R<<15&4294967295|R>>>17),R=A+(V^(P|~E))+S[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,b.g[2]=b.g[2]+P&4294967295,b.g[3]=b.g[3]+V&4294967295}r.prototype.u=function(b,E){E===void 0&&(E=b.length);for(var A=E-this.blockSize,S=this.B,P=this.h,V=0;V<E;){if(P==0)for(;V<=A;)i(this,b,V),V+=this.blockSize;if(typeof b=="string"){for(;V<E;)if(S[P++]=b.charCodeAt(V++),P==this.blockSize){i(this,S),P=0;break}}else for(;V<E;)if(S[P++]=b[V++],P==this.blockSize){i(this,S),P=0;break}}this.h=P,this.o+=E},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;var A=8*this.o;for(E=b.length-8;E<b.length;++E)b[E]=A&255,A/=256;for(this.u(b),b=Array(16),E=A=0;4>E;++E)for(var S=0;32>S;S+=8)b[A++]=this.g[E]>>>S&255;return b};function s(b,E){var A=o;return Object.prototype.hasOwnProperty.call(A,b)?A[b]:A[b]=E(b)}function a(b,E){this.h=E;for(var A=[],S=!0,P=b.length-1;0<=P;P--){var V=b[P]|0;S&&V==E||(A[P]=V,S=!1)}this.g=A}var o={};function l(b){return-128<=b&&128>b?s(b,function(E){return new a([E|0],0>E?-1:0)}):new a([b|0],0>b?-1:0)}function c(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return C(c(-b));for(var E=[],A=1,S=0;b>=A;S++)E[S]=b/A|0,A*=4294967296;return new a(E,0)}function h(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return C(h(b.substring(1),E));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(E,8)),S=d,P=0;P<b.length;P+=8){var V=Math.min(8,b.length-P),R=parseInt(b.substring(P,P+V),E);8>V?(V=c(Math.pow(E,V)),S=S.j(V).add(c(R))):(S=S.j(A),S=S.add(c(R)))}return S}var d=l(0),m=l(1),g=l(16777216);t=a.prototype,t.m=function(){if(x(this))return-C(this).m();for(var b=0,E=1,A=0;A<this.g.length;A++){var S=this.i(A);b+=(0<=S?S:4294967296+S)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(w(this))return"0";if(x(this))return"-"+C(this).toString(b);for(var E=c(Math.pow(b,6)),A=this,S="";;){var P=N(A,E).g;A=v(A,P.j(E));var V=((0<A.g.length?A.g[0]:A.h)>>>0).toString(b);if(A=P,w(A))return V+S;for(;6>V.length;)V="0"+V;S=V+S}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function w(b){if(b.h!=0)return!1;for(var E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function x(b){return b.h==-1}t.l=function(b){return b=v(this,b),x(b)?-1:w(b)?0:1};function C(b){for(var E=b.g.length,A=[],S=0;S<E;S++)A[S]=~b.g[S];return new a(A,~b.h).add(m)}t.abs=function(){return x(this)?C(this):this},t.add=function(b){for(var E=Math.max(this.g.length,b.g.length),A=[],S=0,P=0;P<=E;P++){var V=S+(this.i(P)&65535)+(b.i(P)&65535),R=(V>>>16)+(this.i(P)>>>16)+(b.i(P)>>>16);S=R>>>16,V&=65535,R&=65535,A[P]=R<<16|V}return new a(A,A[A.length-1]&-2147483648?-1:0)};function v(b,E){return b.add(C(E))}t.j=function(b){if(w(this)||w(b))return d;if(x(this))return x(b)?C(this).j(C(b)):C(C(this).j(b));if(x(b))return C(this.j(C(b)));if(0>this.l(g)&&0>b.l(g))return c(this.m()*b.m());for(var E=this.g.length+b.g.length,A=[],S=0;S<2*E;S++)A[S]=0;for(S=0;S<this.g.length;S++)for(var P=0;P<b.g.length;P++){var V=this.i(S)>>>16,R=this.i(S)&65535,wn=b.i(P)>>>16,ir=b.i(P)&65535;A[2*S+2*P]+=R*ir,y(A,2*S+2*P),A[2*S+2*P+1]+=V*ir,y(A,2*S+2*P+1),A[2*S+2*P+1]+=R*wn,y(A,2*S+2*P+1),A[2*S+2*P+2]+=V*wn,y(A,2*S+2*P+2)}for(S=0;S<E;S++)A[S]=A[2*S+1]<<16|A[2*S];for(S=E;S<2*E;S++)A[S]=0;return new a(A,0)};function y(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function T(b,E){this.g=b,this.h=E}function N(b,E){if(w(E))throw Error("division by zero");if(w(b))return new T(d,d);if(x(b))return E=N(C(b),E),new T(C(E.g),C(E.h));if(x(E))return E=N(b,C(E)),new T(C(E.g),E.h);if(30<b.g.length){if(x(b)||x(E))throw Error("slowDivide_ only works with positive integers.");for(var A=m,S=E;0>=S.l(b);)A=U(A),S=U(S);var P=z(A,1),V=z(S,1);for(S=z(S,2),A=z(A,2);!w(S);){var R=V.add(S);0>=R.l(b)&&(P=P.add(A),V=R),S=z(S,1),A=z(A,1)}return E=v(b,P.j(E)),new T(P,E)}for(P=d;0<=b.l(E);){for(A=Math.max(1,Math.floor(b.m()/E.m())),S=Math.ceil(Math.log(A)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),V=c(A),R=V.j(E);x(R)||0<R.l(b);)A-=S,V=c(A),R=V.j(E);w(V)&&(V=m),P=P.add(V),b=v(b,R)}return new T(P,b)}t.A=function(b){return N(this,b).h},t.and=function(b){for(var E=Math.max(this.g.length,b.g.length),A=[],S=0;S<E;S++)A[S]=this.i(S)&b.i(S);return new a(A,this.h&b.h)},t.or=function(b){for(var E=Math.max(this.g.length,b.g.length),A=[],S=0;S<E;S++)A[S]=this.i(S)|b.i(S);return new a(A,this.h|b.h)},t.xor=function(b){for(var E=Math.max(this.g.length,b.g.length),A=[],S=0;S<E;S++)A[S]=this.i(S)^b.i(S);return new a(A,this.h^b.h)};function U(b){for(var E=b.g.length+1,A=[],S=0;S<E;S++)A[S]=b.i(S)<<1|b.i(S-1)>>>31;return new a(A,b.h)}function z(b,E){var A=E>>5;E%=32;for(var S=b.g.length-A,P=[],V=0;V<S;V++)P[V]=0<E?b.i(V+A)>>>E|b.i(V+A+1)<<32-E:b.i(V+A);return new a(P,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,DI=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=c,a.fromString=h,Si=a}).apply(typeof PT<"u"?PT:typeof self<"u"?self:typeof window<"u"?window:{});var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var NI,ml,PI,yh,Ig,OI,VI,kI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,p){return u==Array.prototype||u==Object.prototype||(u[f]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fc=="object"&&Fc];for(var f=0;f<u.length;++f){var p=u[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,f){if(f)e:{var p=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var k=u[_];if(!(k in p))break e;p=p[k]}u=u[u.length-1],_=p[u],f=f(_),f!=_&&f!=null&&e(p,u,{configurable:!0,writable:!0,value:f})}}function s(u,f){u instanceof String&&(u+="");var p=0,_=!1,k={next:function(){if(!_&&p<u.length){var M=p++;return{value:f(M,u[M]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(u){return u||function(){return s(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},o=this||self;function l(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function c(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function h(u,f,p){return u.call.apply(u.bind,arguments)}function d(u,f,p){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),u.apply(f,k)}}return function(){return u.apply(f,arguments)}}function m(u,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function g(u,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function w(u,f){function p(){}p.prototype=f.prototype,u.aa=f.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(_,k,M){for(var F=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)F[Te-2]=arguments[Te];return f.prototype[k].apply(_,F)}}function x(u){const f=u.length;if(0<f){const p=Array(f);for(let _=0;_<f;_++)p[_]=u[_];return p}return[]}function C(u,f){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const k=u.length||0,M=_.length||0;u.length=k+M;for(let F=0;F<M;F++)u[k+F]=_[F]}else u.push(_)}}class v{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function y(u){return/^[\s\xa0]*$/.test(u)}function T(){var u=o.navigator;return u&&(u=u.userAgent)?u:""}function N(u){return N[" "](u),u}N[" "]=function(){};var U=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function z(u,f,p){for(const _ in u)f.call(p,u[_],_,u)}function b(u,f){for(const p in u)f.call(void 0,u[p],p,u)}function E(u){const f={};for(const p in u)f[p]=u[p];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(u,f){let p,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(p in _)u[p]=_[p];for(let M=0;M<A.length;M++)p=A[M],Object.prototype.hasOwnProperty.call(_,p)&&(u[p]=_[p])}}function P(u){var f=1;u=u.split(":");const p=[];for(;0<f&&u.length;)p.push(u.shift()),f--;return u.length&&p.push(u.join(":")),p}function V(u){o.setTimeout(()=>{throw u},0)}function R(){var u=Re;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class wn{constructor(){this.h=this.g=null}add(f,p){const _=ir.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var ir=new v(()=>new G,u=>u.reset());class G{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,Z=!1,Re=new wn,Ge=()=>{const u=o.Promise.resolve(void 0);ee=()=>{u.then(Ks)}};var Ks=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(p){V(p)}var f=ir;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}Z=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Xe(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var sr=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};o.addEventListener("test",p,f),o.removeEventListener("test",p,f)}catch{}return u}();function Mn(u,f){if(Xe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(U){e:{try{N(f.nodeName);var k=!0;break e}catch{}k=!1}k||(f=null)}}else p=="mouseover"?f=u.fromElement:p=="mouseout"&&(f=u.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:a2[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Mn.aa.h.call(this)}}w(Mn,Xe);var a2={2:"touch",3:"pen",4:"mouse"};Mn.prototype.h=function(){Mn.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var lc="closure_listenable_"+(1e6*Math.random()|0),o2=0;function l2(u,f,p,_,k){this.listener=u,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=k,this.key=++o2,this.da=this.fa=!1}function uc(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function cc(u){this.src=u,this.g={},this.h=0}cc.prototype.add=function(u,f,p,_,k){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var F=Wd(u,f,_,k);return-1<F?(f=u[F],p||(f.fa=!1)):(f=new l2(f,this.src,M,!!_,k),f.fa=p,u.push(f)),f};function Xd(u,f){var p=f.type;if(p in u.g){var _=u.g[p],k=Array.prototype.indexOf.call(_,f,void 0),M;(M=0<=k)&&Array.prototype.splice.call(_,k,1),M&&(uc(f),u.g[p].length==0&&(delete u.g[p],u.h--))}}function Wd(u,f,p,_){for(var k=0;k<u.length;++k){var M=u[k];if(!M.da&&M.listener==f&&M.capture==!!p&&M.ha==_)return k}return-1}var Jd="closure_lm_"+(1e6*Math.random()|0),Zd={};function Mv(u,f,p,_,k){if(Array.isArray(f)){for(var M=0;M<f.length;M++)Mv(u,f[M],p,_,k);return null}return p=jv(p),u&&u[lc]?u.K(f,p,c(_)?!!_.capture:!1,k):u2(u,f,p,!1,_,k)}function u2(u,f,p,_,k,M){if(!f)throw Error("Invalid event type");var F=c(k)?!!k.capture:!!k,Te=tm(u);if(Te||(u[Jd]=Te=new cc(u)),p=Te.add(f,p,_,F,M),p.proxy)return p;if(_=c2(),p.proxy=_,_.src=u,_.listener=p,u.addEventListener)sr||(k=F),k===void 0&&(k=!1),u.addEventListener(f.toString(),_,k);else if(u.attachEvent)u.attachEvent(Uv(f.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function c2(){function u(p){return f.call(u.src,u.listener,p)}const f=h2;return u}function Lv(u,f,p,_,k){if(Array.isArray(f))for(var M=0;M<f.length;M++)Lv(u,f[M],p,_,k);else _=c(_)?!!_.capture:!!_,p=jv(p),u&&u[lc]?(u=u.i,f=String(f).toString(),f in u.g&&(M=u.g[f],p=Wd(M,p,_,k),-1<p&&(uc(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete u.g[f],u.h--)))):u&&(u=tm(u))&&(f=u.g[f.toString()],u=-1,f&&(u=Wd(f,p,_,k)),(p=-1<u?f[u]:null)&&em(p))}function em(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[lc])Xd(f.i,u);else{var p=u.type,_=u.proxy;f.removeEventListener?f.removeEventListener(p,_,u.capture):f.detachEvent?f.detachEvent(Uv(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=tm(f))?(Xd(p,u),p.h==0&&(p.src=null,f[Jd]=null)):uc(u)}}}function Uv(u){return u in Zd?Zd[u]:Zd[u]="on"+u}function h2(u,f){if(u.da)u=!0;else{f=new Mn(f,this);var p=u.listener,_=u.ha||u.src;u.fa&&em(u),u=p.call(_,f)}return u}function tm(u){return u=u[Jd],u instanceof cc?u:null}var nm="__closure_events_fn_"+(1e9*Math.random()>>>0);function jv(u){return typeof u=="function"?u:(u[nm]||(u[nm]=function(f){return u.handleEvent(f)}),u[nm])}function yt(){$t.call(this),this.i=new cc(this),this.M=this,this.F=null}w(yt,$t),yt.prototype[lc]=!0,yt.prototype.removeEventListener=function(u,f,p,_){Lv(this,u,f,p,_)};function Ct(u,f){var p,_=u.F;if(_)for(p=[];_;_=_.F)p.push(_);if(u=u.M,_=f.type||f,typeof f=="string")f=new Xe(f,u);else if(f instanceof Xe)f.target=f.target||u;else{var k=f;f=new Xe(_,u),S(f,k)}if(k=!0,p)for(var M=p.length-1;0<=M;M--){var F=f.g=p[M];k=hc(F,_,!0,f)&&k}if(F=f.g=u,k=hc(F,_,!0,f)&&k,k=hc(F,_,!1,f)&&k,p)for(M=0;M<p.length;M++)F=f.g=p[M],k=hc(F,_,!1,f)&&k}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var p=u.g[f],_=0;_<p.length;_++)uc(p[_]);delete u.g[f],u.h--}}this.F=null},yt.prototype.K=function(u,f,p,_){return this.i.add(String(u),f,!1,p,_)},yt.prototype.L=function(u,f,p,_){return this.i.add(String(u),f,!0,p,_)};function hc(u,f,p,_){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var k=!0,M=0;M<f.length;++M){var F=f[M];if(F&&!F.da&&F.capture==p){var Te=F.listener,ft=F.ha||F.src;F.fa&&Xd(u.i,F),k=Te.call(ft,_)!==!1&&k}}return k&&!_.defaultPrevented}function Bv(u,f,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:o.setTimeout(u,f||0)}function zv(u){u.g=Bv(()=>{u.g=null,u.i&&(u.i=!1,zv(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class f2 extends $t{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:zv(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vo(u){$t.call(this),this.h=u,this.g={}}w(Vo,$t);var qv=[];function Fv(u){z(u.g,function(f,p){this.g.hasOwnProperty(p)&&em(f)},u),u.g={}}Vo.prototype.N=function(){Vo.aa.N.call(this),Fv(this)},Vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rm=o.JSON.stringify,d2=o.JSON.parse,m2=class{stringify(u){return o.JSON.stringify(u,void 0)}parse(u){return o.JSON.parse(u,void 0)}};function im(){}im.prototype.h=null;function Hv(u){return u.h||(u.h=u.i())}function Gv(){}var ko={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sm(){Xe.call(this,"d")}w(sm,Xe);function am(){Xe.call(this,"c")}w(am,Xe);var Ki={},$v=null;function fc(){return $v=$v||new yt}Ki.La="serverreachability";function Kv(u){Xe.call(this,Ki.La,u)}w(Kv,Xe);function Mo(u){const f=fc();Ct(f,new Kv(f))}Ki.STAT_EVENT="statevent";function Qv(u,f){Xe.call(this,Ki.STAT_EVENT,u),this.stat=f}w(Qv,Xe);function Dt(u){const f=fc();Ct(f,new Qv(f,u))}Ki.Ma="timingevent";function Yv(u,f){Xe.call(this,Ki.Ma,u),this.size=f}w(Yv,Xe);function Lo(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){u()},f)}function Uo(){this.g=!0}Uo.prototype.xa=function(){this.g=!1};function p2(u,f,p,_,k,M){u.info(function(){if(u.g)if(M)for(var F="",Te=M.split("&"),ft=0;ft<Te.length;ft++){var ce=Te[ft].split("=");if(1<ce.length){var _t=ce[0];ce=ce[1];var vt=_t.split("_");F=2<=vt.length&&vt[1]=="type"?F+(_t+"="+ce+"&"):F+(_t+"=redacted&")}}else F=null;else F=M;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+f+`
`+p+`
`+F})}function g2(u,f,p,_,k,M,F){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+f+`
`+p+`
`+M+" "+F})}function Qs(u,f,p,_){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+_2(u,p)+(_?" "+_:"")})}function y2(u,f){u.info(function(){return"TIMEOUT: "+f})}Uo.prototype.info=function(){};function _2(u,f){if(!u.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var _=p[u];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var M=k[0];if(M!="noop"&&M!="stop"&&M!="close")for(var F=1;F<k.length;F++)k[F]=""}}}}return rm(p)}catch{return f}}var dc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},om;function mc(){}w(mc,im),mc.prototype.g=function(){return new XMLHttpRequest},mc.prototype.i=function(){return{}},om=new mc;function Br(u,f,p,_){this.j=u,this.i=f,this.l=p,this.R=_||1,this.U=new Vo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wv}function Wv(){this.i=null,this.g="",this.h=!1}var Jv={},lm={};function um(u,f,p){u.L=1,u.v=_c(ar(f)),u.m=p,u.P=!0,Zv(u,null)}function Zv(u,f){u.F=Date.now(),pc(u),u.A=ar(u.v);var p=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),d0(p.i,"t",_),u.C=0,p=u.j.J,u.h=new Wv,u.g=N0(u.j,p?f:null,!u.m),0<u.O&&(u.M=new f2(m(u.Y,u,u.g),u.O)),f=u.U,p=u.g,_=u.ca;var k="readystatechange";Array.isArray(k)||(k&&(qv[0]=k.toString()),k=qv);for(var M=0;M<k.length;M++){var F=Mv(p,k[M],_||f.handleEvent,!1,f.h||f);if(!F)break;f.g[F.key]=F}f=u.H?E(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),Mo(),p2(u.i,u.u,u.A,u.l,u.R,u.m)}Br.prototype.ca=function(u){u=u.target;const f=this.M;f&&or(u)==3?f.j():this.Y(u)},Br.prototype.Y=function(u){try{if(u==this.g)e:{const vt=or(this.g);var f=this.g.Ba();const Ws=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||E0(this.g)))){this.J||vt!=4||f==7||(f==8||0>=Ws?Mo(3):Mo(2)),cm(this);var p=this.g.Z();this.X=p;t:if(e0(this)){var _=E0(this.g);u="";var k=_.length,M=or(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qi(this),jo(this);var F="";break t}this.h.i=new o.TextDecoder}for(f=0;f<k;f++)this.h.h=!0,u+=this.h.i.decode(_[f],{stream:!(M&&f==k-1)});_.length=0,this.h.g+=u,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=p==200,g2(this.i,this.u,this.A,this.l,this.R,vt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,ft=this.g;if((Te=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(Te)){var ce=Te;break t}}ce=null}if(p=ce)Qs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hm(this,p);else{this.o=!1,this.s=3,Dt(12),Qi(this),jo(this);break e}}if(this.P){p=!0;let An;for(;!this.J&&this.C<F.length;)if(An=v2(this,F),An==lm){vt==4&&(this.s=4,Dt(14),p=!1),Qs(this.i,this.l,null,"[Incomplete Response]");break}else if(An==Jv){this.s=4,Dt(15),Qs(this.i,this.l,F,"[Invalid Chunk]"),p=!1;break}else Qs(this.i,this.l,An,null),hm(this,An);if(e0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||F.length!=0||this.h.h||(this.s=1,Dt(16),p=!1),this.o=this.o&&p,!p)Qs(this.i,this.l,F,"[Invalid Chunked Response]"),Qi(this),jo(this);else if(0<F.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),ym(_t),_t.M=!0,Dt(11))}}else Qs(this.i,this.l,F,null),hm(this,F);vt==4&&Qi(this),this.o&&!this.J&&(vt==4?R0(this.j,this):(this.o=!1,pc(this)))}else M2(this.g),p==400&&0<F.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),Qi(this),jo(this)}}}catch{}finally{}};function e0(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function v2(u,f){var p=u.C,_=f.indexOf(`
`,p);return _==-1?lm:(p=Number(f.substring(p,_)),isNaN(p)?Jv:(_+=1,_+p>f.length?lm:(f=f.slice(_,_+p),u.C=_+p,f)))}Br.prototype.cancel=function(){this.J=!0,Qi(this)};function pc(u){u.S=Date.now()+u.I,t0(u,u.I)}function t0(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Lo(m(u.ba,u),f)}function cm(u){u.B&&(o.clearTimeout(u.B),u.B=null)}Br.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(y2(this.i,this.A),this.L!=2&&(Mo(),Dt(17)),Qi(this),this.s=2,jo(this)):t0(this,this.S-u)};function jo(u){u.j.G==0||u.J||R0(u.j,u)}function Qi(u){cm(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,Fv(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function hm(u,f){try{var p=u.j;if(p.G!=0&&(p.g==u||fm(p.h,u))){if(!u.K&&fm(p.h,u)&&p.G==3){try{var _=p.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)Ac(p),bc(p);else break e;gm(p),Dt(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=Lo(m(p.Za,p),6e3));if(1>=i0(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Xi(p,11)}else if((u.K||p.g==u)&&Ac(p),!y(f))for(k=p.Da.g.parse(f),f=0;f<k.length;f++){let ce=k[f];if(p.T=ce[0],ce=ce[1],p.G==2)if(ce[0]=="c"){p.K=ce[1],p.ia=ce[2];const _t=ce[3];_t!=null&&(p.la=_t,p.j.info("VER="+p.la));const vt=ce[4];vt!=null&&(p.Aa=vt,p.j.info("SVER="+p.Aa));const Ws=ce[5];Ws!=null&&typeof Ws=="number"&&0<Ws&&(_=1.5*Ws,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const An=u.g;if(An){const Ic=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ic){var M=_.h;M.g||Ic.indexOf("spdy")==-1&&Ic.indexOf("quic")==-1&&Ic.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(dm(M,M.h),M.h=null))}if(_.D){const _m=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;_m&&(_.ya=_m,xe(_.I,_.D,_m))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var F=u;if(_.qa=D0(_,_.J?_.ia:null,_.W),F.K){s0(_.h,F);var Te=F,ft=_.L;ft&&(Te.I=ft),Te.B&&(cm(Te),pc(Te)),_.g=F}else S0(_);0<p.i.length&&wc(p)}else ce[0]!="stop"&&ce[0]!="close"||Xi(p,7);else p.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Xi(p,7):pm(p):ce[0]!="noop"&&p.l&&p.l.ta(ce),p.v=0)}}Mo(4)}catch{}}var E2=class{constructor(u,f){this.g=u,this.map=f}};function n0(u){this.l=u||10,o.PerformanceNavigationTiming?(u=o.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function r0(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function i0(u){return u.h?1:u.g?u.g.size:0}function fm(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function dm(u,f){u.g?u.g.add(f):u.h=f}function s0(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}n0.prototype.cancel=function(){if(this.i=a0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function a0(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const p of u.g.values())f=f.concat(p.D);return f}return x(u.i)}function T2(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var f=[],p=u.length,_=0;_<p;_++)f.push(u[_]);return f}f=[],p=0;for(_ in u)f[p++]=u[_];return f}function b2(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var f=[];u=u.length;for(var p=0;p<u;p++)f.push(p);return f}f=[],p=0;for(const _ in u)f[p++]=_;return f}}}function o0(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var p=b2(u),_=T2(u),k=_.length,M=0;M<k;M++)f.call(void 0,_[M],p&&p[M],u)}var l0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function w2(u,f){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var _=u[p].indexOf("="),k=null;if(0<=_){var M=u[p].substring(0,_);k=u[p].substring(_+1)}else M=u[p];f(M,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Yi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Yi){this.h=u.h,gc(this,u.j),this.o=u.o,this.g=u.g,yc(this,u.s),this.l=u.l;var f=u.i,p=new qo;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),u0(this,p),this.m=u.m}else u&&(f=String(u).match(l0))?(this.h=!1,gc(this,f[1]||"",!0),this.o=Bo(f[2]||""),this.g=Bo(f[3]||"",!0),yc(this,f[4]),this.l=Bo(f[5]||"",!0),u0(this,f[6]||"",!0),this.m=Bo(f[7]||"")):(this.h=!1,this.i=new qo(null,this.h))}Yi.prototype.toString=function(){var u=[],f=this.j;f&&u.push(zo(f,c0,!0),":");var p=this.g;return(p||f=="file")&&(u.push("//"),(f=this.o)&&u.push(zo(f,c0,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(zo(p,p.charAt(0)=="/"?I2:S2,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",zo(p,x2)),u.join("")};function ar(u){return new Yi(u)}function gc(u,f,p){u.j=p?Bo(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function yc(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function u0(u,f,p){f instanceof qo?(u.i=f,C2(u.i,u.h)):(p||(f=zo(f,R2)),u.i=new qo(f,u.h))}function xe(u,f,p){u.i.set(f,p)}function _c(u){return xe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Bo(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function zo(u,f,p){return typeof u=="string"?(u=encodeURI(u).replace(f,A2),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function A2(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var c0=/[#\/\?@]/g,S2=/[#\?:]/g,I2=/[#\?]/g,R2=/[#\?@]/g,x2=/#/g;function qo(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function zr(u){u.g||(u.g=new Map,u.h=0,u.i&&w2(u.i,function(f,p){u.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=qo.prototype,t.add=function(u,f){zr(this),this.i=null,u=Ys(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(f),this.h+=1,this};function h0(u,f){zr(u),f=Ys(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function f0(u,f){return zr(u),f=Ys(u,f),u.g.has(f)}t.forEach=function(u,f){zr(this),this.g.forEach(function(p,_){p.forEach(function(k){u.call(f,k,_,this)},this)},this)},t.na=function(){zr(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let _=0;_<f.length;_++){const k=u[_];for(let M=0;M<k.length;M++)p.push(f[_])}return p},t.V=function(u){zr(this);let f=[];if(typeof u=="string")f0(this,u)&&(f=f.concat(this.g.get(Ys(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)f=f.concat(u[p])}return f},t.set=function(u,f){return zr(this),this.i=null,u=Ys(this,u),f0(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},t.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function d0(u,f,p){h0(u,f),0<p.length&&(u.i=null,u.g.set(Ys(u,f),x(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var _=f[p];const M=encodeURIComponent(String(_)),F=this.V(_);for(_=0;_<F.length;_++){var k=M;F[_]!==""&&(k+="="+encodeURIComponent(String(F[_]))),u.push(k)}}return this.i=u.join("&")};function Ys(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function C2(u,f){f&&!u.j&&(zr(u),u.i=null,u.g.forEach(function(p,_){var k=_.toLowerCase();_!=k&&(h0(this,_),d0(this,k,p))},u)),u.j=f}function D2(u,f){const p=new Uo;if(o.Image){const _=new Image;_.onload=g(qr,p,"TestLoadImage: loaded",!0,f,_),_.onerror=g(qr,p,"TestLoadImage: error",!1,f,_),_.onabort=g(qr,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=g(qr,p,"TestLoadImage: timeout",!1,f,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else f(!1)}function N2(u,f){const p=new Uo,_=new AbortController,k=setTimeout(()=>{_.abort(),qr(p,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:_.signal}).then(M=>{clearTimeout(k),M.ok?qr(p,"TestPingServer: ok",!0,f):qr(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(k),qr(p,"TestPingServer: error",!1,f)})}function qr(u,f,p,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(p)}catch{}}function P2(){this.g=new m2}function O2(u,f,p){const _=p||"";try{o0(u,function(k,M){let F=k;c(k)&&(F=rm(k)),f.push(_+M+"="+encodeURIComponent(F))})}catch(k){throw f.push(_+"type="+encodeURIComponent("_badmap")),k}}function vc(u){this.l=u.Ub||null,this.j=u.eb||!1}w(vc,im),vc.prototype.g=function(){return new Ec(this.l,this.j)},vc.prototype.i=function(u){return function(){return u}}({});function Ec(u,f){yt.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Ec,yt),t=Ec.prototype,t.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Ho(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||o).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fo(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ho(this)),this.g&&(this.readyState=3,Ho(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;m0(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function m0(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?Fo(this):Ho(this),this.readyState==3&&m0(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Fo(this))},t.Qa=function(u){this.g&&(this.response=u,Fo(this))},t.ga=function(){this.g&&Fo(this)};function Fo(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ho(u)}t.setRequestHeader=function(u,f){this.u.append(u,f)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=f.next();return u.join(`\r
`)};function Ho(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function p0(u){let f="";return z(u,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function mm(u,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=p0(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):xe(u,f,p))}function Le(u){yt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Le,yt);var V2=/^https?$/i,k2=["POST","PUT"];t=Le.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():om.g(),this.v=this.o?Hv(this.o):Hv(om),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(M){g0(this,M);return}if(u=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)p.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const M of _.keys())p.set(M,_.get(M));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),k=o.FormData&&u instanceof o.FormData,!(0<=Array.prototype.indexOf.call(k2,f,void 0))||_||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,F]of p)this.g.setRequestHeader(M,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{v0(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){g0(this,M)}};function g0(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,y0(u),Tc(u)}function y0(u){u.A||(u.A=!0,Ct(u,"complete"),Ct(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ct(this,"complete"),Ct(this,"abort"),Tc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tc(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_0(this):this.bb())},t.bb=function(){_0(this)};function _0(u){if(u.h&&typeof a<"u"&&(!u.v[1]||or(u)!=4||u.Z()!=2)){if(u.u&&or(u)==4)Bv(u.Ea,0,u);else if(Ct(u,"readystatechange"),or(u)==4){u.h=!1;try{const F=u.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=F===0){var k=String(u.D).match(l0)[1]||null;!k&&o.self&&o.self.location&&(k=o.self.location.protocol.slice(0,-1)),_=!V2.test(k?k.toLowerCase():"")}p=_}if(p)Ct(u,"complete"),Ct(u,"success");else{u.m=6;try{var M=2<or(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",y0(u)}}finally{Tc(u)}}}}function Tc(u,f){if(u.g){v0(u);const p=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||Ct(u,"ready");try{p.onreadystatechange=_}catch{}}}function v0(u){u.I&&(o.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function or(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<or(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),d2(f)}};function E0(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function M2(u){const f={};u=(u.g&&2<=or(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(y(u[_]))continue;var p=P(u[_]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=f[k]||[];f[k]=M,M.push(p)}b(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Go(u,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||f}function T0(u){this.Aa=0,this.i=[],this.j=new Uo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Go("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Go("baseRetryDelayMs",5e3,u),this.cb=Go("retryDelaySeedMs",1e4,u),this.Wa=Go("forwardChannelMaxRetries",2,u),this.wa=Go("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new n0(u&&u.concurrentRequestLimit),this.Da=new P2,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=T0.prototype,t.la=8,t.G=1,t.connect=function(u,f,p,_){Dt(0),this.W=u,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=D0(this,null,this.W),wc(this)};function pm(u){if(b0(u),u.G==3){var f=u.U++,p=ar(u.I);if(xe(p,"SID",u.K),xe(p,"RID",f),xe(p,"TYPE","terminate"),$o(u,p),f=new Br(u,u.j,f),f.L=2,f.v=_c(ar(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&o.Image&&(new Image().src=f.v,p=!0),p||(f.g=N0(f.j,null),f.g.ea(f.v)),f.F=Date.now(),pc(f)}C0(u)}function bc(u){u.g&&(ym(u),u.g.cancel(),u.g=null)}function b0(u){bc(u),u.u&&(o.clearTimeout(u.u),u.u=null),Ac(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&o.clearTimeout(u.s),u.s=null)}function wc(u){if(!r0(u.h)&&!u.s){u.s=!0;var f=u.Ga;ee||Ge(),Z||(ee(),Z=!0),Re.add(f,u),u.B=0}}function L2(u,f){return i0(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Lo(m(u.Ga,u,f),x0(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const k=new Br(this,this.j,u);let M=this.o;if(this.S&&(M?(M=E(M),S(M,this.S)):M=this.S),this.m!==null||this.O||(k.H=M,M=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=A0(this,k,f),p=ar(this.I),xe(p,"RID",u),xe(p,"CVER",22),this.D&&xe(p,"X-HTTP-Session-Id",this.D),$o(this,p),M&&(this.O?f="headers="+encodeURIComponent(String(p0(M)))+"&"+f:this.m&&mm(p,this.m,M)),dm(this.h,k),this.Ua&&xe(p,"TYPE","init"),this.P?(xe(p,"$req",f),xe(p,"SID","null"),k.T=!0,um(k,p,null)):um(k,p,f),this.G=2}}else this.G==3&&(u?w0(this,u):this.i.length==0||r0(this.h)||w0(this))};function w0(u,f){var p;f?p=f.l:p=u.U++;const _=ar(u.I);xe(_,"SID",u.K),xe(_,"RID",p),xe(_,"AID",u.T),$o(u,_),u.m&&u.o&&mm(_,u.m,u.o),p=new Br(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),f&&(u.i=f.D.concat(u.i)),f=A0(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),dm(u.h,p),um(p,_,f)}function $o(u,f){u.H&&z(u.H,function(p,_){xe(f,_,p)}),u.l&&o0({},function(p,_){xe(f,_,p)})}function A0(u,f,p){p=Math.min(u.i.length,p);var _=u.l?m(u.l.Na,u.l,u):null;e:{var k=u.i;let M=-1;for(;;){const F=["count="+p];M==-1?0<p?(M=k[0].g,F.push("ofs="+M)):M=0:F.push("ofs="+M);let Te=!0;for(let ft=0;ft<p;ft++){let ce=k[ft].g;const _t=k[ft].map;if(ce-=M,0>ce)M=Math.max(0,k[ft].g-100),Te=!1;else try{O2(_t,F,"req"+ce+"_")}catch{_&&_(_t)}}if(Te){_=F.join("&");break e}}}return u=u.i.splice(0,p),f.D=u,_}function S0(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;ee||Ge(),Z||(ee(),Z=!0),Re.add(f,u),u.v=0}}function gm(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Lo(m(u.Fa,u),x0(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,I0(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Lo(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),bc(this),I0(this))};function ym(u){u.A!=null&&(o.clearTimeout(u.A),u.A=null)}function I0(u){u.g=new Br(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=ar(u.qa);xe(f,"RID","rpc"),xe(f,"SID",u.K),xe(f,"AID",u.T),xe(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&xe(f,"TO",u.ja),xe(f,"TYPE","xmlhttp"),$o(u,f),u.m&&u.o&&mm(f,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=_c(ar(f)),p.m=null,p.P=!0,Zv(p,u)}t.Za=function(){this.C!=null&&(this.C=null,bc(this),gm(this),Dt(19))};function Ac(u){u.C!=null&&(o.clearTimeout(u.C),u.C=null)}function R0(u,f){var p=null;if(u.g==f){Ac(u),ym(u),u.g=null;var _=2}else if(fm(u.h,f))p=f.D,s0(u.h,f),_=1;else return;if(u.G!=0){if(f.o)if(_==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var k=u.B;_=fc(),Ct(_,new Yv(_,p)),wc(u)}else S0(u);else if(k=f.s,k==3||k==0&&0<f.X||!(_==1&&L2(u,f)||_==2&&gm(u)))switch(p&&0<p.length&&(f=u.h,f.i=f.i.concat(p)),k){case 1:Xi(u,5);break;case 4:Xi(u,10);break;case 3:Xi(u,6);break;default:Xi(u,2)}}}function x0(u,f){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*f}function Xi(u,f){if(u.j.info("Error code "+f),f==2){var p=m(u.fb,u),_=u.Xa;const k=!_;_=new Yi(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||gc(_,"https"),_c(_),k?D2(_.toString(),p):N2(_.toString(),p)}else Dt(2);u.G=0,u.l&&u.l.sa(f),C0(u),b0(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function C0(u){if(u.G=0,u.ka=[],u.l){const f=a0(u.h);(f.length!=0||u.i.length!=0)&&(C(u.ka,f),C(u.ka,u.i),u.h.i.length=0,x(u.i),u.i.length=0),u.l.ra()}}function D0(u,f,p){var _=p instanceof Yi?ar(p):new Yi(p);if(_.g!="")f&&(_.g=f+"."+_.g),yc(_,_.s);else{var k=o.location;_=k.protocol,f=f?f+"."+k.hostname:k.hostname,k=+k.port;var M=new Yi(null);_&&gc(M,_),f&&(M.g=f),k&&yc(M,k),p&&(M.l=p),_=M}return p=u.D,f=u.ya,p&&f&&xe(_,p,f),xe(_,"VER",u.la),$o(u,_),_}function N0(u,f,p){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new Le(new vc({eb:p})):new Le(u.pa),f.Ha(u.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function P0(){}t=P0.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sc(){}Sc.prototype.g=function(u,f){return new Kt(u,f)};function Kt(u,f){yt.call(this),this.g=new T0(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!y(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!y(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new Xs(this)}w(Kt,yt),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){pm(this.g)},Kt.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=rm(u),u=p);f.i.push(new E2(f.Ya++,u)),f.G==3&&wc(f)},Kt.prototype.N=function(){this.g.l=null,delete this.j,pm(this.g),delete this.g,Kt.aa.N.call(this)};function O0(u){sm.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const p in f){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}w(O0,sm);function V0(){am.call(this),this.status=1}w(V0,am);function Xs(u){this.g=u}w(Xs,P0),Xs.prototype.ua=function(){Ct(this.g,"a")},Xs.prototype.ta=function(u){Ct(this.g,new O0(u))},Xs.prototype.sa=function(u){Ct(this.g,new V0)},Xs.prototype.ra=function(){Ct(this.g,"b")},Sc.prototype.createWebChannel=Sc.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,kI=function(){return new Sc},VI=function(){return fc()},OI=Ki,Ig={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},dc.NO_ERROR=0,dc.TIMEOUT=8,dc.HTTP_ERROR=6,yh=dc,Xv.COMPLETE="complete",PI=Xv,Gv.EventType=ko,ko.OPEN="a",ko.CLOSE="b",ko.ERROR="c",ko.MESSAGE="d",yt.prototype.listen=yt.prototype.K,ml=Gv,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,NI=Le}).apply(typeof Fc<"u"?Fc:typeof self<"u"?self:typeof window<"u"?window:{});const OT="@firebase/firestore",VT="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new dd("@firebase/firestore");function ca(){return Ds.logLevel}function B(t,...e){if(Ds.logLevel<=ae.DEBUG){const n=e.map(T_);Ds.debug(`Firestore (${Ro}): ${t}`,...n)}}function Qe(t,...e){if(Ds.logLevel<=ae.ERROR){const n=e.map(T_);Ds.error(`Firestore (${Ro}): ${t}`,...n)}}function cu(t,...e){if(Ds.logLevel<=ae.WARN){const n=e.map(T_);Ds.warn(`Firestore (${Ro}): ${t}`,...n)}}function T_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,MI(t,r,n)}function MI(t,e,n){let r=`FIRESTORE (${Ro}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Qe(r),new Error(r)}function Q(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||MI(e,i,r)}function K(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class fM{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Q(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Cn,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},o=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>o(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?o(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Cn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new cM(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{h:e}),new Tt(e)}}class dM{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class mM{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dM(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pM{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Q(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new kT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new kT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=gM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function Rg(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return cp(i)===cp(s)?J(i,s):cp(i)?1:-1}return J(t.length,e.length)}const yM=55296,_M=57343;function cp(t){const e=t.charCodeAt(0);return e>=yM&&e<=_M}function Xa(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function LI(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="__name__";class Un{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&$(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Un?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Un.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return J(e.length,n.length)}static compareSegments(e,n){const r=Un.isNumericId(e),i=Un.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Un.extractNumericId(e).compare(Un.extractNumericId(n)):Rg(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Si.fromString(e.substring(4,e.length-2))}}class fe extends Un{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const vM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends Un{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return vM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===MT}static keyField(){return new Me([MT])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const o=e[i];if(o==="\\"){if(i+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else o==="`"?(a=!a,i++):o!=="."||a?(r+=o,i++):(s(),i++)}if(s(),a)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(fe.fromString(e))}static fromName(e){return new H(fe.fromString(e).popFirst(5))}static empty(){return new H(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new fe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function EM(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function LT(t){if(!H.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function UT(t){if(H.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function gd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$(12329,{type:typeof t})}function Ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gd(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function TM(t,e){if(e<=0)throw new q(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function $u(t,e){if(!jI(t))throw new q(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=-62135596800,BT=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*BT);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<jT)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/BT}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if($u(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:Ze("string",pe._jsonSchemaVersion),seconds:Ze("number"),nanoseconds:Ze("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new pe(0,0))}static max(){return new Y(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=-1;class yf{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function xg(t){return t.fields.find(e=>e.kind===2)}function rs(t){return t.fields.filter(e=>e.kind!==2)}yf.UNKNOWN_ID=-1;class _h{constructor(e,n){this.fieldPath=e,this.kind=n}}class hu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new hu(0,cn.min())}}function BI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new cn(i,H.empty(),e)}function zI(t){return new cn(t.readTime,t.key,Wa)}class cn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cn(Y.min(),H.empty(),Wa)}static max(){return new cn(Y.max(),H.empty(),Wa)}}function w_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==qI)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,a=!1;e.forEach(o=>{++i,o.next(()=>{++s,a&&s===i&&n()},l=>r(l))}),a=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,a=new Array(s);let o=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{a[c]=h,++o,o===s&&r(a)},h=>i(h))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="SimpleDb";class yd{static open(e,n,r,i){try{return new yd(n,e.transaction(i,r))}catch(s){throw new Ml(n,s)}}constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.S=new Cn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{n.error?this.S.reject(new Ml(e,n.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=A_(r.target.error);this.S.reject(new Ml(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(B(Wt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new wM(n)}}class Ii{static delete(e){return B(Wt,"Removing database:",e),ss($S().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!d_())return!1;if(Ii.F())return!0;const e=st(),n=Ii.M(e),r=0<n&&n<10,i=HI(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,n){return e.store(n)}static M(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,n,r){this.name=e,this.version=n,this.N=r,this.B=null,Ii.M(st())===12.2&&Qe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(B(Wt,"Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const a=s.target.result;n(a)},i.onblocked=()=>{r(new Ml(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const a=s.target.error;a.name==="VersionError"?r(new q(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?r(new q(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):r(new Ml(e,a))},i.onupgradeneeded=s=>{B(Wt,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;this.N.k(a,i.transaction,s.oldVersion,this.version).next(()=>{B(Wt,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=n=>this.q(n)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let a=0;for(;;){++a;try{this.db=await this.L(e);const o=yd.open(this.db,e,s?"readonly":"readwrite",r),l=i(o).next(c=>(o.C(),c)).catch(c=>(o.abort(c),O.reject(c))).toPromise();return l.catch(()=>{}),await o.D,l}catch(o){const l=o,c=l.name!=="FirebaseError"&&a<3;if(B(Wt,"Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function HI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class bM{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return ss(this.U.delete())}}class Ml extends q{constructor(e,n){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function qi(t){return t.name==="IndexedDbTransactionError"}class wM{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(B(Wt,"PUT",this.store.name,e,n),r=this.store.put(n,e)):(B(Wt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ss(r)}add(e){return B(Wt,"ADD",this.store.name,e,e),ss(this.store.add(e))}get(e){return ss(this.store.get(e)).next(n=>(n===void 0&&(n=null),B(Wt,"GET",this.store.name,e,n),n))}delete(e){return B(Wt,"DELETE",this.store.name,e),ss(this.store.delete(e))}count(){return B(Wt,"COUNT",this.store.name),ss(this.store.count())}J(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((a,o)=>{s.onerror=l=>{o(l.target.error)},s.onsuccess=l=>{a(l.target.result)}})}{const s=this.cursor(r),a=[];return this.H(s,(o,l)=>{a.push(l)}).next(()=>a)}}Y(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new O((i,s)=>{r.onerror=a=>{s(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}Z(e,n){B(Wt,"DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,a,o)=>o.delete())}ee(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}te(e){const n=this.cursor({});return new O((r,i)=>{n.onerror=s=>{const a=A_(s.target.error);i(a)},n.onsuccess=s=>{const a=s.target.result;a?e(a.primaryKey,a.value).next(o=>{o?a.continue():r()}):r()}})}H(e,n){const r=[];return new O((i,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{const o=a.target.result;if(!o)return void i();const l=new bM(o),c=n(o.primaryKey,o.value,l);if(c instanceof O){const h=c.catch(d=>(l.done(),O.reject(d)));r.push(h)}l.isDone?i():l.G===null?o.continue():o.continue(l.G)}}).next(()=>O.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ss(t){return new O((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=A_(r.target.error);n(i)}})}let zT=!1;function A_(t){const e=Ii.M(st());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new q("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return zT||(zT=!0,setTimeout(()=>{throw r},0)),r}}return t}const Ll="IndexBackfiller";class AM{constructor(e,n){this.asyncQueue=e,this.ne=n,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){B(Ll,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const n=await this.ne.ie();B(Ll,`Documents written: ${n}`)}catch(n){qi(n)?B(Ll,"Ignoring IndexedDB error during index backfill: ",n):await zi(n)}await this.re(6e4)})}}class SM{constructor(e,n){this.localStore=e,this.persistence=n}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.se(n,e))}se(e,n){const r=new Set;let i=n,s=!0;return O.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!r.has(a))return B(Ll,`Processing collection: ${a}`),this.oe(e,a,i).next(o=>{i-=o,r.add(a)});s=!1})).next(()=>n-i)}oe(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this._e(i,s)).next(o=>(B(Ll,`Updating offset: ${o}`),this.localStore.indexManager.updateCollectionGroup(e,n,o))).next(()=>a.size)}))}_e(e,n){let r=e;return n.changes.forEach((i,s)=>{const a=zI(s);w_(a,r)>0&&(r=a)}),new cn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}jt.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=-1;function _d(t){return t==null}function fu(t){return t===0&&1/t==-1/0}function GI(t){return typeof t=="number"&&Number.isInteger(t)&&!fu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="";function Rt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=qT(e)),e=IM(t.get(n),e);return qT(e)}function IM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case _f:n+="";break;default:n+=s}}return n}function qT(t){return t+_f+""}function qn(t){const e=t.length;if(Q(e>=2,64408,{path:t}),e===2)return Q(t.charAt(0)===_f&&t.charAt(1)==="",56145,{path:t}),fe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const a=t.indexOf(_f,s);switch((a<0||a>n)&&$(50515,{path:t}),t.charAt(a+1)){case"":const o=t.substring(s,a);let l;i.length===0?l=o:(i+=o,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,a),i+="\0";break;case"":i+=t.substring(s,a+1);break;default:$(61167,{path:t})}s=a+2}return new fe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="remoteDocuments",Ku="owner",ea="owner",du="mutationQueues",RM="userId",In="mutations",FT="batchId",cs="userMutationsIndex",HT=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t,e){return[t,Rt(e)]}function $I(t,e,n){return[t,Rt(e),n]}const xM={},Ja="documentMutations",vf="remoteDocumentsV14",CM=["prefixPath","collectionGroup","readTime","documentId"],Eh="documentKeyIndex",DM=["prefixPath","collectionGroup","documentId"],KI="collectionGroupIndex",NM=["collectionGroup","readTime","prefixPath","documentId"],mu="remoteDocumentGlobal",Cg="remoteDocumentGlobalKey",Za="targets",QI="queryTargetsIndex",PM=["canonicalId","targetId"],eo="targetDocuments",OM=["targetId","path"],S_="documentTargetsIndex",VM=["path","targetId"],Ef="targetGlobalKey",vs="targetGlobal",pu="collectionParents",kM=["collectionId","parent"],to="clientMetadata",MM="clientId",vd="bundles",LM="bundleId",Ed="namedQueries",UM="name",I_="indexConfiguration",jM="indexId",Dg="collectionGroupIndex",BM="collectionGroup",Ul="indexState",zM=["indexId","uid"],YI="sequenceNumberIndex",qM=["uid","sequenceNumber"],jl="indexEntries",FM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],XI="documentKeyIndex",HM=["indexId","uid","orderedDocumentKey"],Td="documentOverlays",GM=["userId","collectionPath","documentId"],Ng="collectionPathOverlayIndex",$M=["userId","collectionPath","largestBatchId"],WI="collectionGroupOverlayIndex",KM=["userId","collectionGroup","largestBatchId"],R_="globals",QM="name",JI=[du,In,Ja,is,Za,Ku,vs,eo,to,mu,pu,vd,Ed],YM=[...JI,Td],ZI=[du,In,Ja,vf,Za,Ku,vs,eo,to,mu,pu,vd,Ed,Td],eR=ZI,x_=[...eR,I_,Ul,jl],XM=x_,tR=[...x_,R_],WM=tR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg extends FI{constructor(e,n){super(),this.le=e,this.currentSequenceNumber=n}}function at(t,e){const n=K(t);return Ii.O(n.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JM(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function nR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hc(this.root,e,this.comparator,!0)}}class Hc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??mt.RED,this.left=i??mt.EMPTY,this.right=s??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new mt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $T(this.data.getIterator())}getIteratorFrom(e){return new $T(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class $T{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ta(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new _e(Me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xa(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new rR("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const ZM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(t){if(Q(!!t,39018),typeof t=="string"){let e=0;const n=ZM.exec(t);if(Q(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="server_timestamp",sR="__type__",aR="__previous_value__",oR="__local_write_time__";function C_(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[sR])==null?void 0:r.stringValue)===iR}function bd(t){const e=t.mapValue.fields[aR];return C_(e)?bd(e):e}function gu(t){const e=Nr(t.mapValue.fields[oR].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e,n,r,i,s,a,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=h}}const Tf="(default)";class Ns{constructor(e,n){this.projectId=e,this.database=n||Tf}static empty(){return new Ns("","")}get isDefaultDatabase(){return this.database===Tf}isEqual(e){return e instanceof Ns&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="__type__",lR="__max__",mi={mapValue:{fields:{__type__:{stringValue:lR}}}},N_="__vector__",no="value",Th={nullValue:"NULL_VALUE"};function Pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?C_(t)?4:uR(t)?9007199254740991:wd(t)?10:11:$(28295,{value:t})}function Zn(t,e){if(t===e)return!0;const n=Pi(t);if(n!==Pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gu(t).isEqual(gu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Nr(i.timestampValue),o=Nr(s.timestampValue);return a.seconds===o.seconds&&a.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Pr(i.bytesValue).isEqual(Pr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Ne(i.doubleValue),o=Ne(s.doubleValue);return a===o?fu(a)===fu(o):isNaN(a)&&isNaN(o)}return!1}(t,e);case 9:return Xa(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},o=s.mapValue.fields||{};if(GT(a)!==GT(o))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(o[l]===void 0||!Zn(a[l],o[l])))return!1;return!0}(t,e);default:return $(52216,{left:t})}}function yu(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function Oi(t,e){if(t===e)return 0;const n=Pi(t),r=Pi(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(s,a){const o=Ne(s.integerValue||s.doubleValue),l=Ne(a.integerValue||a.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(t,e);case 3:return KT(t.timestampValue,e.timestampValue);case 4:return KT(gu(t),gu(e));case 5:return Rg(t.stringValue,e.stringValue);case 6:return function(s,a){const o=Pr(s),l=Pr(a);return o.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const o=s.split("/"),l=a.split("/");for(let c=0;c<o.length&&c<l.length;c++){const h=J(o[c],l[c]);if(h!==0)return h}return J(o.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const o=J(Ne(s.latitude),Ne(a.latitude));return o!==0?o:J(Ne(s.longitude),Ne(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return QT(t.arrayValue,e.arrayValue);case 10:return function(s,a){var m,g,w,x;const o=s.fields||{},l=a.fields||{},c=(m=o[no])==null?void 0:m.arrayValue,h=(g=l[no])==null?void 0:g.arrayValue,d=J(((w=c==null?void 0:c.values)==null?void 0:w.length)||0,((x=h==null?void 0:h.values)==null?void 0:x.length)||0);return d!==0?d:QT(c,h)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===mi.mapValue&&a===mi.mapValue)return 0;if(s===mi.mapValue)return 1;if(a===mi.mapValue)return-1;const o=s.fields||{},l=Object.keys(o),c=a.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const m=Rg(l[d],h[d]);if(m!==0)return m;const g=Oi(o[l[d]],c[h[d]]);if(g!==0)return g}return J(l.length,h.length)}(t.mapValue,e.mapValue);default:throw $(23264,{he:n})}}function KT(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=Nr(t),r=Nr(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function QT(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Oi(n[i],r[i]);if(s)return s}return J(n.length,r.length)}function ro(t){return Og(t)}function Og(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Og(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Og(n.fields[a])}`;return i+"}"}(t.mapValue):$(61005,{value:t})}function bh(t){switch(Pi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=bd(t);return e?16+bh(e):16;case 5:return 2*t.stringValue.length;case 6:return Pr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+bh(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Fi(r.fields,(s,a)=>{i+=s.length+bh(a)}),i}(t.mapValue);default:throw $(13486,{value:t})}}function _u(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vg(t){return!!t&&"integerValue"in t}function vu(t){return!!t&&"arrayValue"in t}function YT(t){return!!t&&"nullValue"in t}function XT(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wh(t){return!!t&&"mapValue"in t}function wd(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[D_])==null?void 0:r.stringValue)===N_}function Bl(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bl(t.arrayValue.values[n]);return e}return{...t}}function uR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===lR}const cR={mapValue:{fields:{[D_]:{stringValue:N_},[no]:{arrayValue:{}}}}};function t6(t){return"nullValue"in t?Th:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?_u(Ns.empty(),H.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?wd(t)?cR:{mapValue:{}}:$(35942,{value:t})}function n6(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?_u(Ns.empty(),H.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?cR:"mapValue"in t?wd(t)?{mapValue:{}}:mi:$(61959,{value:t})}function WT(t,e){const n=Oi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function JT(t,e){const n=Oi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bl(n)}setAll(e){let n=Me.emptyPath(),r={},i=[];e.forEach((a,o)=>{if(!n.isImmediateParentOf(o)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=o.popLast()}a?r[o.lastSegment()]=Bl(a):i.push(o.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());wh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(Bl(this.value))}}function hR(t){const e=[];return Fi(t.fields,(n,r)=>{const i=new Me([n]);if(wh(r)){const s=hR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,r,i,s,a,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=o}static newInvalidDocument(e){return new ze(e,0,Y.min(),Y.min(),Y.min(),wt.empty(),0)}static newFoundDocument(e,n,r,i){return new ze(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ze(e,2,n,Y.min(),Y.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,Y.min(),Y.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.position=e,this.inclusive=n}}function ZT(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(a.referenceValue),n.key):r=Oi(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function eb(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n="asc"){this.field=e,this.dir=n}}function r6(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{}class oe extends fR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new i6(e,n,r):n==="array-contains"?new o6(e,r):n==="in"?new _R(e,r):n==="not-in"?new l6(e,r):n==="array-contains-any"?new u6(e,r):new oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new s6(e,r):new a6(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Oi(n,this.value)):n!==null&&Pi(this.value)===Pi(n)&&this.matchesComparison(Oi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ye extends fR{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ye(e,n)}matches(e){return so(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function so(t){return t.op==="and"}function kg(t){return t.op==="or"}function P_(t){return dR(t)&&so(t)}function dR(t){for(const e of t.filters)if(e instanceof ye)return!1;return!0}function Mg(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+ro(t.value);if(P_(t))return t.filters.map(e=>Mg(e)).join(",");{const e=t.filters.map(n=>Mg(n)).join(",");return`${t.op}(${e})`}}function mR(t,e){return t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&Zn(r.value,i.value)}(t,e):t instanceof ye?function(r,i){return i instanceof ye&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,o)=>s&&mR(a,i.filters[o]),!0):!1}(t,e):void $(19439)}function pR(t,e){const n=t.filters.concat(e);return ye.create(n,t.op)}function gR(t){return t instanceof oe?function(n){return`${n.field.canonicalString()} ${n.op} ${ro(n.value)}`}(t):t instanceof ye?function(n){return n.op.toString()+" {"+n.getFilters().map(gR).join(" ,")+"}"}(t):"Filter"}class i6 extends oe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class s6 extends oe{constructor(e,n){super(e,"in",n),this.keys=yR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class a6 extends oe{constructor(e,n){super(e,"not-in",n),this.keys=yR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yR(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class o6 extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vu(n)&&yu(n.arrayValue,this.value)}}class _R extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yu(this.value.arrayValue,n)}}class l6 extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(yu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!yu(this.value.arrayValue,n)}}class u6 extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{constructor(e,n=null,r=[],i=[],s=null,a=null,o=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=o,this.Te=null}}function Lg(t,e=null,n=[],r=[],i=null,s=null,a=null){return new c6(t,e,n,r,i,s,a)}function Ps(t){const e=K(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_d(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ro(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ro(r)).join(",")),e.Te=n}return e.Te}function Qu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!r6(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!eb(t.startAt,e.startAt)&&eb(t.endAt,e.endAt)}function bf(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function wf(t,e){return t.filters.filter(n=>n instanceof oe&&n.field.isEqual(e))}function tb(t,e,n){let r=Th,i=!0;for(const s of wf(t,e)){let a=Th,o=!0;switch(s.op){case"<":case"<=":a=t6(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,o=!1;break;case"!=":case"not-in":a=Th}WT({value:r,inclusive:i},{value:a,inclusive:o})<0&&(r=a,i=o)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const a=n.position[s];WT({value:r,inclusive:i},{value:a,inclusive:n.inclusive})<0&&(r=a,i=n.inclusive);break}}return{value:r,inclusive:i}}function nb(t,e,n){let r=mi,i=!0;for(const s of wf(t,e)){let a=mi,o=!0;switch(s.op){case">=":case">":a=n6(s.value),o=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,o=!1;break;case"!=":case"not-in":a=mi}JT({value:r,inclusive:i},{value:a,inclusive:o})>0&&(r=a,i=o)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const a=n.position[s];JT({value:r,inclusive:i},{value:a,inclusive:n.inclusive})>0&&(r=a,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n=null,r=[],i=[],s=null,a="F",o=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=o,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function vR(t,e,n,r,i,s,a,o){return new xo(t,e,n,r,i,s,a,o)}function Yu(t){return new xo(t)}function rb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ER(t){return t.collectionGroup!==null}function zl(t){const e=K(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new _e(Me.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(o=o.add(c.field))})}),o})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Eu(s,r))}),n.has(Me.keyField().canonicalString())||e.Ie.push(new Eu(Me.keyField(),r))}return e.Ie}function ln(t){const e=K(t);return e.Ee||(e.Ee=TR(e,zl(t))),e.Ee}function h6(t){const e=K(t);return e.de||(e.de=TR(e,t.explicitOrderBy)),e.de}function TR(t,e){if(t.limitType==="F")return Lg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Eu(i.field,s)});const n=t.endAt?new io(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new io(t.startAt.position,t.startAt.inclusive):null;return Lg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ug(t,e){const n=t.filters.concat([e]);return new xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Af(t,e,n){return new xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ad(t,e){return Qu(ln(t),ln(e))&&t.limitType===e.limitType}function bR(t){return`${Ps(ln(t))}|lt:${t.limitType}`}function ha(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>gR(i)).join(", ")}]`),_d(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ro(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ro(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Xu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of zl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,o,l){const c=ZT(a,o,l);return a.inclusive?c<=0:c<0}(r.startAt,zl(r),i)||r.endAt&&!function(a,o,l){const c=ZT(a,o,l);return a.inclusive?c>=0:c>0}(r.endAt,zl(r),i))}(t,e)}function wR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AR(t){return(e,n)=>{let r=!1;for(const i of zl(t)){const s=f6(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function f6(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,a,o){const l=a.data.field(s),c=o.data.field(s);return l!==null&&c!==null?Oi(l,c):$(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return nR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d6=new Se(H.comparator);function en(){return d6}const SR=new Se(H.comparator);function pl(...t){let e=SR;for(const n of t)e=e.insert(n.key,n);return e}function IR(t){let e=SR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fn(){return ql()}function RR(){return ql()}function ql(){return new Mr(t=>t.toString(),(t,e)=>t.isEqual(e))}const m6=new Se(H.comparator),p6=new _e(H.comparator);function re(...t){let e=p6;for(const n of t)e=e.add(n);return e}const g6=new _e(J);function O_(){return g6}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fu(e)?"-0":e}}function xR(t){return{integerValue:""+t}}function y6(t,e){return GI(e)?xR(e):V_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this._=void 0}}function _6(t,e,n){return t instanceof ao?function(i,s){const a={fields:{[sR]:{stringValue:iR},[oR]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&C_(s)&&(s=bd(s)),s&&(a.fields[aR]=s),{mapValue:a}}(n,e):t instanceof oo?DR(t,e):t instanceof lo?NR(t,e):function(i,s){const a=CR(i,s),o=ib(a)+ib(i.Ae);return Vg(a)&&Vg(i.Ae)?xR(o):V_(i.serializer,o)}(t,e)}function v6(t,e,n){return t instanceof oo?DR(t,e):t instanceof lo?NR(t,e):n}function CR(t,e){return t instanceof Tu?function(r){return Vg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ao extends Sd{}class oo extends Sd{constructor(e){super(),this.elements=e}}function DR(t,e){const n=PR(e);for(const r of t.elements)n.some(i=>Zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class lo extends Sd{constructor(e){super(),this.elements=e}}function NR(t,e){let n=PR(e);for(const r of t.elements)n=n.filter(i=>!Zn(i,r));return{arrayValue:{values:n}}}class Tu extends Sd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function ib(t){return Ne(t.integerValue||t.doubleValue)}function PR(t){return vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n){this.field=e,this.transform=n}}function E6(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof oo&&i instanceof oo||r instanceof lo&&i instanceof lo?Xa(r.elements,i.elements,Zn):r instanceof Tu&&i instanceof Tu?Zn(r.Ae,i.Ae):r instanceof ao&&i instanceof ao}(t.transform,e.transform)}class T6{constructor(e,n){this.version=e,this.transformResults=n}}class It{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ah(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Id{}function VR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Rd(t.key,It.none()):new Co(t.key,t.data,It.none());{const n=t.data,r=wt.empty();let i=new _e(Me.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Lr(t.key,r,new Bt(i.toArray()),It.none())}}function b6(t,e,n){t instanceof Co?function(i,s,a){const o=i.value.clone(),l=ab(i.fieldTransforms,s,a.transformResults);o.setAll(l),s.convertToFoundDocument(a.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(i,s,a){if(!Ah(i.precondition,s))return void s.convertToUnknownDocument(a.version);const o=ab(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(kR(i)),l.setAll(o),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Fl(t,e,n,r){return t instanceof Co?function(s,a,o,l){if(!Ah(s.precondition,a))return o;const c=s.value.clone(),h=ob(s.fieldTransforms,l,a);return c.setAll(h),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(s,a,o,l){if(!Ah(s.precondition,a))return o;const c=ob(s.fieldTransforms,l,a),h=a.data;return h.setAll(kR(s)),h.setAll(c),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,a,o){return Ah(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o}(t,e,n)}function w6(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=CR(r.transform,i||null);s!=null&&(n===null&&(n=wt.empty()),n.set(r.field,s))}return n||null}function sb(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xa(r,i,(s,a)=>E6(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends Id{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Lr extends Id{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ab(t,e,n){const r=new Map;Q(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,o=e.data.field(s.field);r.set(s.field,v6(a,o,n[i]))}return r}function ob(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,_6(s,a,e))}return r}class Rd extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MR extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&b6(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=RR();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let o=this.applyToLocalView(a,s.mutatedFields);o=n.has(i.key)?null:o;const l=VR(a,o);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Xa(this.mutations,e.mutations,(n,r)=>sb(n,r))&&Xa(this.baseMutations,e.baseMutations,(n,r)=>sb(n,r))}}class M_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Q(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return m6}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new M_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S6{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,le;function I6(t){switch(t){case L.OK:return $(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return $(15467,{code:t})}}function LR(t){if(t===void 0)return Qe("GRPC error has no .code"),L.UNKNOWN;switch(t){case We.OK:return L.OK;case We.CANCELLED:return L.CANCELLED;case We.UNKNOWN:return L.UNKNOWN;case We.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case We.INTERNAL:return L.INTERNAL;case We.UNAVAILABLE:return L.UNAVAILABLE;case We.UNAUTHENTICATED:return L.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case We.NOT_FOUND:return L.NOT_FOUND;case We.ALREADY_EXISTS:return L.ALREADY_EXISTS;case We.PERMISSION_DENIED:return L.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case We.ABORTED:return L.ABORTED;case We.OUT_OF_RANGE:return L.OUT_OF_RANGE;case We.UNIMPLEMENTED:return L.UNIMPLEMENTED;case We.DATA_LOSS:return L.DATA_LOSS;default:return $(39323,{code:t})}}(le=We||(We={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R6(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x6=new Si([4294967295,4294967295],0);function lb(t){const e=R6().encode(t),n=new DI;return n.update(e),new Uint8Array(n.digest())}function ub(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Si([n,r],0),new Si([i,s],0)]}class U_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gl(`Invalid padding: ${n}`);if(r<0)throw new gl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Si.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Si.fromNumber(r)));return i.compare(x6)===1&&(i=new Si([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=lb(e),[r,i]=ub(n);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);if(!this.we(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new U_(s,i,n);return r.forEach(o=>a.insert(o)),a}insert(e){if(this.ge===0)return;const n=lb(e),[r,i]=ub(n);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ju.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wu(Y.min(),i,new Se(J),en(),re())}}class Ju{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ju(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class UR{constructor(e,n){this.targetId=e,this.Ce=n}}class jR{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class cb{constructor(){this.ve=0,this.Fe=hb(),this.Me=Ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$(38017,{changeType:s})}}),new Ju(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=hb()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class C6{constructor(e){this.Ge=e,this.ze=new Map,this.je=en(),this.Je=Gc(),this.He=Gc(),this.Ye=new Se(J)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:$(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(bf(s))if(r===0){const a=new H(s.path);this.et(n,a,ze.newNoDocument(a,Y.min()))}else Q(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const o=this.ut(e),l=o?this.ct(o,e,a):1;if(l!==0){this.it(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,o;try{a=Pr(r).toUint8Array()}catch(l){if(l instanceof rR)return cu("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{o=new U_(a,i,s)}catch(l){return cu(l instanceof gl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return o.ge===0?null:o}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Ge.ht(),o=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(o)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,a)=>{const o=this.ot(a);if(o){if(s.current&&bf(o.target)){const l=new H(o.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ze.newNoDocument(l,e))}s.Be&&(n.set(a,s.ke()),s.qe())}});let r=re();this.He.forEach((s,a)=>{let o=!0;a.forEachWhile(l=>{const c=this.ot(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)}),o&&(r=r.add(s))}),this.je.forEach((s,a)=>a.setReadTime(e));const i=new Wu(e,n,this.Ye,this.je,r);return this.je=en(),this.Je=Gc(),this.He=Gc(),this.Ye=new Se(J),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new cb,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new _e(J),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new _e(J),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new cb),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Gc(){return new Se(H.comparator)}function hb(){return new Se(H.comparator)}const D6={asc:"ASCENDING",desc:"DESCENDING"},N6={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},P6={and:"AND",or:"OR"};class O6{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jg(t,e){return t.useProto3Json||_d(e)?e:{value:e}}function uo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function V6(t,e){return uo(t,e.toTimestamp())}function Vt(t){return Q(!!t,49232),Y.fromTimestamp(function(n){const r=Nr(n);return new pe(r.seconds,r.nanos)}(t))}function j_(t,e){return Bg(t,e).canonicalString()}function Bg(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zR(t){const e=fe.fromString(t);return Q(YR(e),10190,{key:e.toString()}),e}function Sf(t,e){return j_(t.databaseId,e.path)}function Es(t,e){const n=zR(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(HR(n))}function qR(t,e){return j_(t.databaseId,e)}function FR(t){const e=zR(t);return e.length===4?fe.emptyPath():HR(e)}function zg(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HR(t){return Q(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function fb(t,e,n){return{name:Sf(t,e),fields:n.value.mapValue.fields}}function k6(t,e,n){const r=Es(t,e.name),i=Vt(e.updateTime),s=e.createTime?Vt(e.createTime):Y.min(),a=new wt({mapValue:{fields:e.fields}}),o=ze.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function M6(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:$(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Q(h===void 0||typeof h=="string",58123),Ye.fromBase64String(h||"")):(Q(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ye.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&function(c){const h=c.code===void 0?L.UNKNOWN:LR(c.code);return new q(h,c.message||"")}(a);n=new jR(r,i,s,o||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Es(t,r.document.name),s=Vt(r.document.updateTime),a=r.document.createTime?Vt(r.document.createTime):Y.min(),o=new wt({mapValue:{fields:r.document.fields}}),l=ze.newFoundDocument(i,s,a,o),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Sh(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Es(t,r.document),s=r.readTime?Vt(r.readTime):Y.min(),a=ze.newNoDocument(i,s),o=r.removedTargetIds||[];n=new Sh([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Es(t,r.document),s=r.removedTargetIds||[];n=new Sh([],s,i,null)}else{if(!("filter"in e))return $(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new S6(i,s),o=r.targetId;n=new UR(o,a)}}return n}function If(t,e){let n;if(e instanceof Co)n={update:fb(t,e.key,e.value)};else if(e instanceof Rd)n={delete:Sf(t,e.key)};else if(e instanceof Lr)n={update:fb(t,e.key,e.data),updateMask:F6(e.fieldMask)};else{if(!(e instanceof MR))return $(16599,{Vt:e.type});n={verify:Sf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const o=a.transform;if(o instanceof ao)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof oo)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof lo)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Tu)return{fieldPath:a.field.canonicalString(),increment:o.Ae};throw $(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:V6(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$(27497)}(t,e.precondition)),n}function qg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?It.updateTime(Vt(s.updateTime)):s.exists!==void 0?It.exists(s.exists):It.none()}(e.currentDocument):It.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(a,o){let l=null;if("setToServerValue"in o)Q(o.setToServerValue==="REQUEST_TIME",16630,{proto:o}),l=new ao;else if("appendMissingElements"in o){const h=o.appendMissingElements.values||[];l=new oo(h)}else if("removeAllFromArray"in o){const h=o.removeAllFromArray.values||[];l=new lo(h)}else"increment"in o?l=new Tu(a,o.increment):$(16584,{proto:o});const c=Me.fromServerFormat(o.fieldPath);return new OR(c,l)}(t,i)):[];if(e.update){e.update.name;const i=Es(t,e.update.name),s=new wt({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(l){const c=l.fieldPaths||[];return new Bt(c.map(h=>Me.fromServerFormat(h)))}(e.updateMask);return new Lr(i,s,a,n,r)}return new Co(i,s,n,r)}if(e.delete){const i=Es(t,e.delete);return new Rd(i,n)}if(e.verify){const i=Es(t,e.verify);return new MR(i,n)}return $(1463,{proto:e})}function L6(t,e){return t&&t.length>0?(Q(e!==void 0,14353),t.map(n=>function(i,s){let a=i.updateTime?Vt(i.updateTime):Vt(s);return a.isEqual(Y.min())&&(a=Vt(s)),new T6(a,i.transformResults||[])}(n,e))):[]}function GR(t,e){return{documents:[qR(t,e.path)]}}function B_(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qR(t,i);const s=function(c){if(c.length!==0)return QR(ye.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:ni(m.field),direction:B6(m.dir)}}(h))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const o=jg(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function U6(t,e,n,r){const{ft:i,parent:s}=B_(t,e),a={},o=[];let l=0;return n.forEach(c=>{const h="aggregate_"+l++;a[h]=c.alias,c.aggregateType==="count"?o.push({alias:h,count:{}}):c.aggregateType==="avg"?o.push({alias:h,avg:{field:ni(c.fieldPath)}}):c.aggregateType==="sum"&&o.push({alias:h,sum:{field:ni(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:o,structuredQuery:i.structuredQuery},parent:i.parent},gt:a,parent:s}}function $R(t){let e=FR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Q(r===1,65062);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(d){const m=KR(d);return m instanceof ye&&P_(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(d){return d.map(m=>function(w){return new Eu(fa(w.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(m))}(n.orderBy));let o=null;n.limit&&(o=function(d){let m;return m=typeof d=="object"?d.value:d,_d(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(d){const m=!!d.before,g=d.values||[];return new io(g,m)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const m=!d.before,g=d.values||[];return new io(g,m)}(n.endAt)),vR(e,i,a,s,o,"F",l,c)}function j6(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function KR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fa(n.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fa(n.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fa(n.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=fa(n.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}}(t):t.fieldFilter!==void 0?function(n){return oe.create(fa(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ye.create(n.compositeFilter.filters.map(r=>KR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $(1026)}}(n.compositeFilter.op))}(t):$(30097,{filter:t})}function B6(t){return D6[t]}function z6(t){return N6[t]}function q6(t){return P6[t]}function ni(t){return{fieldPath:t.canonicalString()}}function fa(t){return Me.fromServerFormat(t.fieldPath)}function QR(t){return t instanceof oe?function(n){if(n.op==="=="){if(XT(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NAN"}};if(YT(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(XT(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NOT_NAN"}};if(YT(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(n.field),op:z6(n.op),value:n.value}}}(t):t instanceof ye?function(n){const r=n.getFilters().map(i=>QR(i));return r.length===1?r[0]:{compositeFilter:{op:q6(n.op),filters:r}}}(t):$(54877,{filter:t})}function F6(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,r,i,s=Y.min(),a=Y.min(),o=Ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=l}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.yt=e}}function H6(t,e){let n;if(e.document)n=k6(t.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=H.fromSegments(e.noDocument.path),i=Vs(e.noDocument.readTime);n=ze.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $(56709);{const r=H.fromSegments(e.unknownDocument.path),i=Vs(e.unknownDocument.version);n=ze.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new pe(i[0],i[1]);return Y.fromTimestamp(s)}(e.readTime)),n}function db(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Rf(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,a){return{name:Sf(s,a.key),fields:a.data.value.mapValue.fields,updateTime:uo(s,a.version.toTimestamp()),createTime:uo(s,a.createTime.toTimestamp())}}(t.yt,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Os(e.version)};else{if(!e.isUnknownDocument())return $(57904,{document:e});r.unknownDocument={path:n.path.toArray(),version:Os(e.version)}}return r}function Rf(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Os(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Vs(t){const e=new pe(t.seconds,t.nanoseconds);return Y.fromTimestamp(e)}function as(t,e){const n=(e.baseMutations||[]).map(s=>qg(t.yt,s));for(let s=0;s<e.mutations.length-1;++s){const a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const o=e.mutations[s+1];a.updateTransforms=o.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>qg(t.yt,s)),i=pe.fromMillis(e.localWriteTimeMs);return new k_(e.batchId,i,n,r)}function yl(t){const e=Vs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Vs(t.lastLimboFreeSnapshotVersion):Y.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){const a=s.documents.length;return Q(a===1,1966,{count:a}),ln(Yu(FR(s.documents[0])))}(t.query):function(s){return ln($R(s))}(t.query),new _r(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Ye.fromBase64String(t.resumeToken))}function WR(t,e){const n=Os(e.snapshotVersion),r=Os(e.lastLimboFreeSnapshotVersion);let i;i=bf(e.target)?GR(t.yt,e.target):B_(t.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ps(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function JR(t){const e=$R({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Af(e,e.limit,"L"):e}function hp(t,e){return new L_(e.largestBatchId,qg(t.yt,e.overlayMutation))}function mb(t,e){const n=e.path.lastSegment();return[t,Rt(e.path.popLast()),n]}function pb(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Os(r.readTime),documentKey:Rt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6{getBundleMetadata(e,n){return gb(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Vs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return gb(e).put(function(i){return{bundleId:i.id,createTime:Os(Vt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return yb(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:JR(s.bundledQuery),readTime:Vs(s.readTime)}}(r)})}saveNamedQuery(e,n){return yb(e).put(function(i){return{name:i.name,readTime:Os(Vt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function gb(t){return at(t,vd)}function yb(t){return at(t,Ed)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n){this.serializer=e,this.userId=n}static wt(e,n){const r=n.uid||"";return new xd(e,r)}getOverlay(e,n){return nl(e).get(mb(this.userId,n)).next(r=>r?hp(this.serializer,r):null)}getOverlays(e,n){const r=Fn();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,a)=>{const o=new L_(n,a);i.push(this.St(e,o))}),O.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(a=>i.add(Rt(a.getCollectionPath())));const s=[];return i.forEach(a=>{const o=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,r+1],!1,!0);s.push(nl(e).Z(Ng,o))}),O.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Fn(),s=Rt(n),a=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return nl(e).J(Ng,a).next(o=>{for(const l of o){const c=hp(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Fn();let a;const o=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return nl(e).ee({index:WI,range:o},(l,c,h)=>{const d=hp(this.serializer,c);s.size()<i||d.largestBatchId===a?(s.set(d.getKey(),d),a=d.largestBatchId):h.done()}).next(()=>s)}St(e,n){return nl(e).put(function(i,s,a){const[o,l,c]=mb(s,a.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:If(i.yt,a.mutation)}}(this.serializer,this.userId,n))}}function nl(t){return at(t,Td)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $6{bt(e){return at(e,R_)}getSessionToken(e){return this.bt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Ye.fromUint8Array(r):Ye.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.bt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){}Dt(e,n){this.Ct(e,n),n.vt()}Ct(e,n){if("nullValue"in e)this.Ft(n,5);else if("booleanValue"in e)this.Ft(n,10),n.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(n,15),n.Mt(Ne(e.integerValue));else if("doubleValue"in e){const r=Ne(e.doubleValue);isNaN(r)?this.Ft(n,13):(this.Ft(n,15),fu(r)?n.Mt(0):n.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(n,20),typeof r=="string"&&(r=Nr(r)),n.xt(`${r.seconds||""}`),n.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,n),this.Nt(n);else if("bytesValue"in e)this.Ft(n,30),n.Bt(Pr(e.bytesValue)),this.Nt(n);else if("referenceValue"in e)this.Lt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(n,45),n.Mt(r.latitude||0),n.Mt(r.longitude||0)}else"mapValue"in e?uR(e)?this.Ft(n,Number.MAX_SAFE_INTEGER):wd(e)?this.kt(e.mapValue,n):(this.qt(e.mapValue,n),this.Nt(n)):"arrayValue"in e?(this.Qt(e.arrayValue,n),this.Nt(n)):$(19022,{$t:e})}Ot(e,n){this.Ft(n,25),this.Ut(e,n)}Ut(e,n){n.xt(e)}qt(e,n){const r=e.fields||{};this.Ft(n,55);for(const i of Object.keys(r))this.Ot(i,n),this.Ct(r[i],n)}kt(e,n){var a,o;const r=e.fields||{};this.Ft(n,53);const i=no,s=((o=(a=r[i].arrayValue)==null?void 0:a.values)==null?void 0:o.length)||0;this.Ft(n,15),n.Mt(Ne(s)),this.Ot(i,n),this.Ct(r[i],n)}Qt(e,n){const r=e.values||[];this.Ft(n,50);for(const i of r)this.Ct(i,n)}Lt(e,n){this.Ft(n,37),H.fromName(e).path.forEach(r=>{this.Ft(n,60),this.Ut(r,n)})}Ft(e,n){e.Mt(n)}Nt(e){e.Mt(2)}}os.Kt=new os;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=255;function K6(t){if(t===0)return 8;let e=0;return t>>4||(e+=4,t<<=4),t>>6||(e+=2,t<<=2),t>>7||(e+=1),e}function _b(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const a=K6(255&r[s]);if(i+=a,a!==8)break}return i}(t);return Math.ceil(e/8)}class Q6{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Gt(r.value),r=n.next();this.zt()}jt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Jt(r.value),r=n.next();this.Ht()}Yt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=n.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Zt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const i=n.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Ht()}Xt(e){const n=this.en(e),r=_b(n);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}nn(e){const n=this.en(e),r=_b(n);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}rn(){this.sn(na),this.sn(255)}_n(){this.an(na),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const n=function(s){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(e),r=!!(128&n[0]);n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Gt(e){const n=255&e;n===0?(this.sn(0),this.sn(255)):n===na?(this.sn(na),this.sn(0)):this.sn(n)}Jt(e){const n=255&e;n===0?(this.an(0),this.an(255)):n===na?(this.an(na),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Y6{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class X6{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class rl{constructor(){this.cn=new Q6,this.ln=new Y6(this.cn),this.hn=new X6(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n,r,i){this.Tn=e,this.In=n,this.En=r,this.dn=i}An(){const e=this.dn.length,n=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.dn,0),n!==e?r.set([0],this.dn.length):++r[r.length-1],new ls(this.Tn,this.In,this.En,r)}Rn(e,n,r){return{indexId:this.Tn,uid:e,arrayValue:Ih(this.En),directionalValue:Ih(this.dn),orderedDocumentKey:Ih(n),documentKey:r.path.toArray()}}Vn(e,n,r){const i=this.Rn(e,n,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Gr(t,e){let n=t.Tn-e.Tn;return n!==0?n:(n=vb(t.En,e.En),n!==0?n:(n=vb(t.dn,e.dn),n!==0?n:H.comparator(t.In,e.In)))}function vb(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}function Ih(t){return eI()?function(n){let r="";for(let i=0;i<n.length;i++)r+=String.fromCharCode(n[i]);return r}(t):t}function Eb(t){return typeof t!="string"?t:function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(t)}class Tb{constructor(e){this.mn=new _e((n,r)=>Me.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const n of e.filters){const r=n;r.isInequality()?this.mn=this.mn.add(r):this.gn.push(r)}}get pn(){return this.mn.size>1}yn(e){if(Q(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const n=xg(e);if(n!==void 0&&!this.wn(n))return!1;const r=rs(e);let i=new Set,s=0,a=0;for(;s<r.length&&this.wn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.mn.size>0){const o=this.mn.getIterator().getNext();if(!i.has(o.field.canonicalString())){const l=r[s];if(!this.Sn(o,l)||!this.bn(this.fn[a++],l))return!1}++s}for(;s<r.length;++s){const o=r[s];if(a>=this.fn.length||!this.bn(this.fn[a++],o))return!1}return!0}Dn(){if(this.pn)return null;let e=new _e(Me.comparator);const n=[];for(const r of this.gn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new _h(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new _h(r.field,0))}for(const r of this.fn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new _h(r.field,r.dir==="asc"?0:1)));return new yf(yf.UNKNOWN_ID,this.collectionId,n,hu.empty())}wn(e){for(const n of this.gn)if(this.Sn(n,e))return!0;return!1}Sn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}bn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t){var n,r;if(Q(t instanceof oe||t instanceof ye,20012),t instanceof oe){if(t instanceof _R){const i=((r=(n=t.value.arrayValue)==null?void 0:n.values)==null?void 0:r.map(s=>oe.create(t.field,"==",s)))||[];return ye.create(i,"or")}return t}const e=t.filters.map(i=>ZR(i));return ye.create(e,t.op)}function W6(t){if(t.getFilters().length===0)return[];const e=Gg(ZR(t));return Q(ex(e),7391),Fg(e)||Hg(e)?[e]:e.getFilters()}function Fg(t){return t instanceof oe}function Hg(t){return t instanceof ye&&P_(t)}function ex(t){return Fg(t)||Hg(t)||function(n){if(n instanceof ye&&kg(n)){for(const r of n.getFilters())if(!Fg(r)&&!Hg(r))return!1;return!0}return!1}(t)}function Gg(t){if(Q(t instanceof oe||t instanceof ye,34018),t instanceof oe)return t;if(t.filters.length===1)return Gg(t.filters[0]);const e=t.filters.map(r=>Gg(r));let n=ye.create(e,t.op);return n=xf(n),ex(n)?n:(Q(n instanceof ye,64498),Q(so(n),40251),Q(n.filters.length>1,57927),n.filters.reduce((r,i)=>z_(r,i)))}function z_(t,e){let n;return Q(t instanceof oe||t instanceof ye,38388),Q(e instanceof oe||e instanceof ye,25473),n=t instanceof oe?e instanceof oe?function(i,s){return ye.create([i,s],"and")}(t,e):bb(t,e):e instanceof oe?bb(e,t):function(i,s){if(Q(i.filters.length>0&&s.filters.length>0,48005),so(i)&&so(s))return pR(i,s.getFilters());const a=kg(i)?i:s,o=kg(i)?s:i,l=a.filters.map(c=>z_(c,o));return ye.create(l,"or")}(t,e),xf(n)}function bb(t,e){if(so(e))return pR(e,t.getFilters());{const n=e.filters.map(r=>z_(t,r));return ye.create(n,"or")}}function xf(t){if(Q(t instanceof oe||t instanceof ye,11850),t instanceof oe)return t;const e=t.getFilters();if(e.length===1)return xf(e[0]);if(dR(t))return t;const n=e.map(i=>xf(i)),r=[];return n.forEach(i=>{i instanceof oe?r.push(i):i instanceof ye&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ye.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J6{constructor(){this.Cn=new q_}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(cn.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(cn.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class q_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="IndexedDbIndexManager",$c=new Uint8Array(0);class Z6{constructor(e,n){this.databaseId=n,this.vn=new q_,this.Fn=new Mr(r=>Ps(r),(r,i)=>Qu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.vn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.vn.add(n)});const s={collectionId:r,parent:Rt(i)};return Ab(e).put(s)}return O.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[LI(n),""],!1,!0);return Ab(e).J(i).next(s=>{for(const a of s){if(a.collectionId!==n)break;r.push(qn(a.parent))}return r})}addFieldIndex(e,n){const r=il(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const a=ia(e);return s.next(o=>{a.put(pb(o,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=il(e),i=ia(e),s=ra(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=il(e),r=ra(e),i=ia(e);return n.Z().next(()=>r.Z()).next(()=>i.Z())}createTargetIndexes(e,n){return O.forEach(this.Mn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Tb(r).Dn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=ra(e);let i=!0;const s=new Map;return O.forEach(this.Mn(n),a=>this.xn(e,a).next(o=>{i&&(i=!!o),s.set(a,o)})).next(()=>{if(i){let a=re();const o=[];return O.forEach(s,(l,c)=>{B(wb,`Using index ${function(T){return`id=${T.indexId}|cg=${T.collectionGroup}|f=${T.fields.map(N=>`${N.fieldPath}:${N.kind}`).join(",")}`}(l)} to execute ${Ps(n)}`);const h=function(T,N){const U=xg(N);if(U===void 0)return null;for(const z of wf(T,U.fieldPath))switch(z.op){case"array-contains-any":return z.value.arrayValue.values||[];case"array-contains":return[z.value]}return null}(c,l),d=function(T,N){const U=new Map;for(const z of rs(N))for(const b of wf(T,z.fieldPath))switch(b.op){case"==":case"in":U.set(z.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return U.set(z.fieldPath.canonicalString(),b.value),Array.from(U.values())}return null}(c,l),m=function(T,N){const U=[];let z=!0;for(const b of rs(N)){const E=b.kind===0?tb(T,b.fieldPath,T.startAt):nb(T,b.fieldPath,T.startAt);U.push(E.value),z&&(z=E.inclusive)}return new io(U,z)}(c,l),g=function(T,N){const U=[];let z=!0;for(const b of rs(N)){const E=b.kind===0?nb(T,b.fieldPath,T.endAt):tb(T,b.fieldPath,T.endAt);U.push(E.value),z&&(z=E.inclusive)}return new io(U,z)}(c,l),w=this.On(l,c,m),x=this.On(l,c,g),C=this.Nn(l,c,d),v=this.Bn(l.indexId,h,w,m.inclusive,x,g.inclusive,C);return O.forEach(v,y=>r.Y(y,n.limit).next(T=>{T.forEach(N=>{const U=H.fromSegments(N.documentKey);a.has(U)||(a=a.add(U),o.push(U))})}))}).next(()=>o)}return O.resolve(null)})}Mn(e){let n=this.Fn.get(e);return n||(e.filters.length===0?n=[e]:n=W6(ye.create(e.filters,"and")).map(r=>Lg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Fn.set(e,n),n)}Bn(e,n,r,i,s,a,o){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),h=[];for(let d=0;d<l;++d){const m=n?this.Ln(n[d/c]):$c,g=this.kn(e,m,r[d%c],i),w=this.qn(e,m,s[d%c],a),x=o.map(C=>this.kn(e,m,C,!0));h.push(...this.createRange(g,w,x))}return h}kn(e,n,r,i){const s=new ls(e,H.empty(),n,r);return i?s:s.An()}qn(e,n,r,i){const s=new ls(e,H.empty(),n,r);return i?s.An():s}xn(e,n){const r=new Tb(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let a=null;for(const o of s)r.yn(o)&&(!a||o.fields.length>a.fields.length)&&(a=o);return a})}getIndexType(e,n){let r=2;const i=this.Mn(n);return O.forEach(i,s=>this.xn(e,s).next(a=>{a?r!==0&&a.fields.length<function(l){let c=new _e(Me.comparator),h=!1;for(const d of l.filters)for(const m of d.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:c=c.add(m.field));for(const d of l.orderBy)d.field.isKeyField()||(c=c.add(d.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(a){return a.limit!==null}(n)&&i.length>1&&r===2?1:r)}Qn(e,n){const r=new rl;for(const i of rs(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const a=r.Pn(i.kind);os.Kt.Dt(s,a)}return r.un()}Ln(e){const n=new rl;return os.Kt.Dt(e,n.Pn(0)),n.un()}$n(e,n){const r=new rl;return os.Kt.Dt(_u(this.databaseId,n),r.Pn(function(s){const a=rs(s);return a.length===0?0:a[a.length-1].kind}(e))),r.un()}Nn(e,n,r){if(r===null)return[];let i=[];i.push(new rl);let s=0;for(const a of rs(e)){const o=r[s++];for(const l of i)if(this.Un(n,a.fieldPath)&&vu(o))i=this.Kn(i,a,o);else{const c=l.Pn(a.kind);os.Kt.Dt(o,c)}}return this.Wn(i)}On(e,n,r){return this.Nn(e,n,r.position)}Wn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].un();return n}Kn(e,n,r){const i=[...e],s=[];for(const a of r.arrayValue.values||[])for(const o of i){const l=new rl;l.seed(o.un()),os.Kt.Dt(a,l.Pn(n.kind)),s.push(l)}return s}Un(e,n){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=il(e),i=ia(e);return(n?r.J(Dg,IDBKeyRange.bound(n,n)):r.J()).next(s=>{const a=[];return O.forEach(s,o=>i.get([o.indexId,this.uid]).next(l=>{a.push(function(h,d){const m=d?new hu(d.sequenceNumber,new cn(Vs(d.readTime),new H(qn(d.documentKey)),d.largestBatchId)):hu.empty(),g=h.fields.map(([w,x])=>new _h(Me.fromServerFormat(w),x));return new yf(h.indexId,h.collectionGroup,g,m)}(o,l))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:J(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=il(e),s=ia(e);return this.Gn(e).next(a=>i.J(Dg,IDBKeyRange.bound(n,n)).next(o=>O.forEach(o,l=>s.put(pb(l.indexId,this.uid,a,r)))))}updateIndexEntries(e,n){const r=new Map;return O.forEach(n,(i,s)=>{const a=r.get(i.collectionGroup);return(a?O.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(o=>(r.set(i.collectionGroup,o),O.forEach(o,l=>this.zn(e,i,l).next(c=>{const h=this.jn(s,l);return c.isEqual(h)?O.resolve():this.Jn(e,s,l,c,h)}))))})}Hn(e,n,r,i){return ra(e).put(i.Rn(this.uid,this.$n(r,n.key),n.key))}Yn(e,n,r,i){return ra(e).delete(i.Vn(this.uid,this.$n(r,n.key),n.key))}zn(e,n,r){const i=ra(e);let s=new _e(Gr);return i.ee({index:XI,range:IDBKeyRange.only([r.indexId,this.uid,Ih(this.$n(r,n))])},(a,o)=>{s=s.add(new ls(r.indexId,n,Eb(o.arrayValue),Eb(o.directionalValue)))}).next(()=>s)}jn(e,n){let r=new _e(Gr);const i=this.Qn(n,e);if(i==null)return r;const s=xg(n);if(s!=null){const a=e.data.field(s.fieldPath);if(vu(a))for(const o of a.arrayValue.values||[])r=r.add(new ls(n.indexId,e.key,this.Ln(o),i))}else r=r.add(new ls(n.indexId,e.key,$c,i));return r}Jn(e,n,r,i,s){B(wb,"Updating index entries for document '%s'",n.key);const a=[];return function(l,c,h,d,m){const g=l.getIterator(),w=c.getIterator();let x=ta(g),C=ta(w);for(;x||C;){let v=!1,y=!1;if(x&&C){const T=h(x,C);T<0?y=!0:T>0&&(v=!0)}else x!=null?y=!0:v=!0;v?(d(C),C=ta(w)):y?(m(x),x=ta(g)):(x=ta(g),C=ta(w))}}(i,s,Gr,o=>{a.push(this.Hn(e,n,r,o))},o=>{a.push(this.Yn(e,n,r,o))}),O.waitFor(a)}Gn(e){let n=1;return ia(e).ee({index:YI,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((a,o)=>Gr(a,o)).filter((a,o,l)=>!o||Gr(a,l[o-1])!==0);const i=[];i.push(e);for(const a of r){const o=Gr(a,e),l=Gr(a,n);if(o===0)i[0]=e.An();else if(o>0&&l<0)i.push(a),i.push(a.An());else if(l>0)break}i.push(n);const s=[];for(let a=0;a<i.length;a+=2){if(this.Zn(i[a],i[a+1]))return[];const o=i[a].Vn(this.uid,$c,H.empty()),l=i[a+1].Vn(this.uid,$c,H.empty());s.push(IDBKeyRange.bound(o,l))}return s}Zn(e,n){return Gr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Sb)}getMinOffset(e,n){return O.mapArray(this.Mn(n),r=>this.xn(e,r).next(i=>i||$(44426))).next(Sb)}}function Ab(t){return at(t,pu)}function ra(t){return at(t,jl)}function il(t){return at(t,I_)}function ia(t){return at(t,Ul)}function Sb(t){Q(t.length!==0,28825);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;w_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new cn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tx=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t,e,n){const r=t.store(In),i=t.store(Ja),s=[],a=IDBKeyRange.only(n.batchId);let o=0;const l=r.ee({range:a},(h,d,m)=>(o++,m.delete()));s.push(l.next(()=>{Q(o===1,47070,{batchId:n.batchId})}));const c=[];for(const h of n.mutations){const d=$I(e,h.key.path,n.batchId);s.push(i.delete(d)),c.push(h.key)}return O.waitFor(s).next(()=>c)}function Cf(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $(14731);e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(tx,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);class Cd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Xn={}}static wt(e,n,r,i){Q(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new Cd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return $r(e).ee({index:cs,range:r},(i,s,a)=>{n=!1,a.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=da(e),a=$r(e);return a.add({}).next(o=>{Q(typeof o=="number",49019);const l=new k_(o,n,r,i),c=function(g,w,x){const C=x.baseMutations.map(y=>If(g.yt,y)),v=x.mutations.map(y=>If(g.yt,y));return{userId:w,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:C,mutations:v}}(this.serializer,this.userId,l),h=[];let d=new _e((m,g)=>J(m.canonicalString(),g.canonicalString()));for(const m of i){const g=$I(this.userId,m.key.path,o);d=d.add(m.key.path.popLast()),h.push(a.put(c)),h.push(s.put(g,xM))}return d.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Xn[o]=l.keys()}),O.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return $r(e).get(n).next(r=>r?(Q(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:n}),as(this.serializer,r)):null)}er(e,n){return this.Xn[n]?O.resolve(this.Xn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Xn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return $r(e).ee({index:cs,range:i},(a,o,l)=>{o.userId===this.userId&&(Q(o.batchId>=r,47524,{tr:r}),s=as(this.serializer,o)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=_s;return $r(e).ee({index:cs,range:n,reverse:!0},(i,s,a)=>{r=s.batchId,a.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,_s],[this.userId,Number.POSITIVE_INFINITY]);return $r(e).J(cs,n).next(r=>r.map(i=>as(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=vh(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return da(e).ee({range:i},(a,o,l)=>{const[c,h,d]=a,m=qn(h);if(c===this.userId&&n.path.isEqual(m))return $r(e).get(d).next(g=>{if(!g)throw $(61480,{nr:a,batchId:d});Q(g.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:g.userId,batchId:d}),s.push(as(this.serializer,g))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(J);const i=[];return n.forEach(s=>{const a=vh(this.userId,s.path),o=IDBKeyRange.lowerBound(a),l=da(e).ee({range:o},(c,h,d)=>{const[m,g,w]=c,x=qn(g);m===this.userId&&s.path.isEqual(x)?r=r.add(w):d.done()});i.push(l)}),O.waitFor(i).next(()=>this.rr(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=vh(this.userId,r),a=IDBKeyRange.lowerBound(s);let o=new _e(J);return da(e).ee({range:a},(l,c,h)=>{const[d,m,g]=l,w=qn(m);d===this.userId&&r.isPrefixOf(w)?w.length===i&&(o=o.add(g)):h.done()}).next(()=>this.rr(e,o))}rr(e,n){const r=[],i=[];return n.forEach(s=>{i.push($r(e).get(s).next(a=>{if(a===null)throw $(35274,{batchId:s});Q(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:s}),r.push(as(this.serializer,a))}))}),O.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return nx(e.le,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.ir(n.batchId)}),O.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return O.resolve();const r=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return da(e).ee({range:r},(s,a,o)=>{if(s[0]===this.userId){const l=qn(s[1]);i.push(l)}else o.done()}).next(()=>{Q(i.length===0,56720,{sr:i.map(s=>s.canonicalString())})})})}containsKey(e,n){return rx(e,this.userId,n)}_r(e){return ix(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:_s,lastStreamToken:""})}}function rx(t,e,n){const r=vh(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let a=!1;return da(t).ee({range:s,X:!0},(o,l,c)=>{const[h,d,m]=o;h===e&&d===i&&(a=!0),c.done()}).next(()=>a)}function $r(t){return at(t,In)}function da(t){return at(t,Ja)}function ix(t){return at(t,du)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ks(0)}static cr(){return new ks(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.lr(e).next(n=>{const r=new ks(n.highestTargetId);return n.highestTargetId=r.next(),this.hr(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.lr(e).next(n=>Y.fromTimestamp(new pe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.lr(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.lr(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.hr(e,i)))}addTargetData(e,n){return this.Pr(e,n).next(()=>this.lr(e).next(r=>(r.targetCount+=1,this.Tr(n,r),this.hr(e,r))))}updateTargetData(e,n){return this.Pr(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>sa(e).delete(n.targetId)).next(()=>this.lr(e)).next(r=>(Q(r.targetCount>0,8065),r.targetCount-=1,this.hr(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return sa(e).ee((a,o)=>{const l=yl(o);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>O.waitFor(s)).next(()=>i)}forEachTarget(e,n){return sa(e).ee((r,i)=>{const s=yl(i);n(s)})}lr(e){return Rb(e).get(Ef).next(n=>(Q(n!==null,2888),n))}hr(e,n){return Rb(e).put(Ef,n)}Pr(e,n){return sa(e).put(WR(this.serializer,n))}Tr(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.lr(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ps(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return sa(e).ee({range:i,index:QI},(a,o,l)=>{const c=yl(o);Qu(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ri(e);return n.forEach(a=>{const o=Rt(a.path);i.push(s.put({targetId:r,path:o})),i.push(this.referenceDelegate.addReference(e,r,a))}),O.waitFor(i)}removeMatchingKeys(e,n,r){const i=ri(e);return O.forEach(n,s=>{const a=Rt(s.path);return O.waitFor([i.delete([r,a]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ri(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ri(e);let s=re();return i.ee({range:r,X:!0},(a,o,l)=>{const c=qn(a[1]),h=new H(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=Rt(n.path),i=IDBKeyRange.bound([r],[LI(r)],!1,!0);let s=0;return ri(e).ee({index:S_,X:!0,range:i},([a,o],l,c)=>{a!==0&&(s++,c.done())}).next(()=>s>0)}At(e,n){return sa(e).get(n).next(r=>r?yl(r):null)}}function sa(t){return at(t,Za)}function Rb(t){return at(t,vs)}function ri(t){return at(t,eo)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="LruGarbageCollector",sx=1048576;function Cb([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class t3{constructor(e){this.Ir=e,this.buffer=new _e(Cb),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Cb(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ax{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){B(xb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qi(n)?B(xb,"Ignoring IndexedDB error during garbage collection: ",n):await zi(n)}await this.Vr(3e5)})}}class n3{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(jt.ce);const r=new t3(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Ib)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ib):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,a,o,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,a=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,o=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(c=Date.now(),ca()<=ae.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-h}ms
	Determined least recently used ${i} in `+(o-a)+`ms
	Removed ${s} targets in `+(l-o)+`ms
	Removed ${d} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function ox(t,e){return new n3(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e,n){this.db=e,this.garbageCollector=ox(this,n)}gr(e){const n=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}pr(e,n){return this.Sr(e,(r,i)=>n(i))}addReference(e,n,r){return Kc(e,r)}removeReference(e,n,r){return Kc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Kc(e,n)}br(e,n){return function(i,s){let a=!1;return ix(i).te(o=>rx(i,o,s).next(l=>(l&&(a=!0),O.resolve(!l)))).next(()=>a)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Sr(e,(a,o)=>{if(o<=n){const l=this.br(e,a).next(c=>{if(!c)return s++,r.getEntry(e,a).next(()=>(r.removeEntry(a,Y.min()),ri(e).delete(function(d){return[0,Rt(d.path)]}(a))))});i.push(l)}}).next(()=>O.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Kc(e,n)}Sr(e,n){const r=ri(e);let i,s=jt.ce;return r.ee({index:S_},([a,o],{path:l,sequenceNumber:c})=>{a===0?(s!==jt.ce&&n(new H(qn(i)),s),s=c,i=l):s=jt.ce}).next(()=>{s!==jt.ce&&n(new H(qn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Kc(t,e){return ri(t).put(function(r,i){return{targetId:0,path:Rt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(){this.changes=new Mr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ji(e).put(r)}removeEntry(e,n,r){return Ji(e).delete(function(s,a){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Rf(a),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Dr(e,r)))}getEntry(e,n){let r=ze.newInvalidDocument(n);return Ji(e).ee({index:Eh,range:IDBKeyRange.only(sl(n))},(i,s)=>{r=this.Cr(n,s)}).next(()=>r)}vr(e,n){let r={size:0,document:ze.newInvalidDocument(n)};return Ji(e).ee({index:Eh,range:IDBKeyRange.only(sl(n))},(i,s)=>{r={document:this.Cr(n,s),size:Cf(s)}}).next(()=>r)}getEntries(e,n){let r=en();return this.Fr(e,n,(i,s)=>{const a=this.Cr(i,s);r=r.insert(i,a)}).next(()=>r)}Mr(e,n){let r=en(),i=new Se(H.comparator);return this.Fr(e,n,(s,a)=>{const o=this.Cr(s,a);r=r.insert(s,o),i=i.insert(s,Cf(a))}).next(()=>({documents:r,Or:i}))}Fr(e,n,r){if(n.isEmpty())return O.resolve();let i=new _e(Pb);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(sl(i.first()),sl(i.last())),a=i.getIterator();let o=a.getNext();return Ji(e).ee({index:Eh,range:s},(l,c,h)=>{const d=H.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;o&&Pb(o,d)<0;)r(o,null),o=a.getNext();o&&o.isEqual(d)&&(r(o,c),o=a.hasNext()?a.getNext():null),o?h.j(sl(o)):h.done()}).next(()=>{for(;o;)r(o,null),o=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const a=n.path,o=[a.popLast().toArray(),a.lastSegment(),Rf(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ji(e).J(IDBKeyRange.bound(o,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=en();for(const d of c){const m=this.Cr(H.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);m.isFoundDocument()&&(Xu(n,m)||i.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=en();const a=Nb(n,r),o=Nb(n,cn.max());return Ji(e).ee({index:KI,range:IDBKeyRange.bound(a,o,!0)},(l,c,h)=>{const d=this.Cr(H.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(d.key,d),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new s3(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Db(e).get(Cg).next(n=>(Q(!!n,20021),n))}Dr(e,n){return Db(e).put(Cg,n)}Cr(e,n){if(n){const r=H6(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(Y.min())))return r}return ze.newInvalidDocument(e)}}function ux(t){return new i3(t)}class s3 extends lx{constructor(e,n){super(),this.Nr=e,this.trackRemovals=n,this.Br=new Mr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new _e((s,a)=>J(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const o=this.Br.get(s);if(n.push(this.Nr.removeEntry(e,s,o.readTime)),a.isValidDocument()){const l=db(this.Nr.serializer,a);i=i.add(s.path.popLast());const c=Cf(l);r+=c-o.size,n.push(this.Nr.addEntry(e,s,l))}else if(r-=o.size,this.trackRemovals){const l=db(this.Nr.serializer,a.convertToNoDocument(Y.min()));n.push(this.Nr.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.Nr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Nr.updateMetadata(e,r)),O.waitFor(n)}getFromCache(e,n){return this.Nr.vr(e,n).next(r=>(this.Br.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Nr.Mr(e,n).next(({documents:r,Or:i})=>(i.forEach((s,a)=>{this.Br.set(s,{size:a,readTime:r.get(s).readTime})}),r))}}function Db(t){return at(t,mu)}function Ji(t){return at(t,vf)}function sl(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Nb(t,e){const n=e.documentKey.path.toArray();return[t,Rf(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Pb(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=J(n[s],r[s]),i)return i;return i=J(n.length,r.length),i||(i=J(n[n.length-2],r[r.length-2]),i||J(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fl(r.mutation,i,Bt.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Fn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=pl();return s.forEach((o,l)=>{a=a.insert(o,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Fn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,o)=>{n.set(a,o)})})}computeViews(e,n,r,i){let s=en();const a=ql(),o=function(){return ql()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Lr)?s=s.insert(c.key,c):h!==void 0?(a.set(c.key,h.mutation.getFieldMask()),Fl(h.mutation,c,h.mutation.getFieldMask(),pe.now())):a.set(c.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>a.set(c,h)),n.forEach((c,h)=>o.set(c,new a3(h,a.get(c)??null))),o))}recalculateAndSaveOverlays(e,n){const r=ql();let i=new Se((a,o)=>a-o),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const o of a)o.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Bt.empty();h=o.applyToLocalView(c,h),r.set(l,h);const d=(i.get(o.batchId)||re()).add(l);i=i.insert(o.batchId,d)})}).next(()=>{const a=[],o=i.getReverseIterator();for(;o.hasNext();){const l=o.getNext(),c=l.key,h=l.value,d=RR();h.forEach(m=>{if(!s.has(m)){const g=VR(n.get(m),r.get(m));g!==null&&d.set(m,g),s=s.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,c,d))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ER(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Fn());let o=Wa,l=s;return a.next(c=>O.forEach(c,(h,d)=>(o<d.largestBatchId&&(o=d.largestBatchId),s.get(h)?O.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,re())).next(h=>({batchId:o,changes:IR(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=pl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=pl();return this.indexManager.getCollectionParents(e,s).next(o=>O.forEach(o,l=>{const c=function(d,m){return new xo(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((d,m)=>{a=a.insert(d,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((l,c)=>{const h=c.getKey();a.get(h)===null&&(a=a.insert(h,ze.newInvalidDocument(h)))});let o=pl();return a.forEach((l,c)=>{const h=s.get(l);h!==void 0&&Fl(h.mutation,c,Bt.empty(),pe.now()),Xu(n,c)&&(o=o.insert(l,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Vt(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:JR(i.bundledQuery),readTime:Vt(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(){this.overlays=new Se(H.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fn();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Fn(),s=n.length+1,a=new H(n.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const l=o.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((c,h)=>c-h);const a=this.overlays.getIterator();for(;a.hasNext();){const c=a.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Fn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const o=Fn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>o.set(c,h)),!(o.size()>=i)););return O.resolve(o)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new L_(n,r));let s=this.qr.get(n);s===void 0&&(s=re(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u3{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.Qr=new _e(ot.$r),this.Ur=new _e(ot.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ot(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new H(new fe([])),r=new ot(n,e),i=new ot(n,e+1),s=[];return this.Ur.forEachInRange([r,i],a=>{this.Gr(a),s.push(a.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new H(new fe([])),r=new ot(n,e),i=new ot(n,e+1);let s=re();return this.Ur.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new ot(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return H.comparator(e.key,n.key)||J(e.Yr,n.Yr)}static Kr(e,n){return J(e.Yr,n.Yr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new _e(ot.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new k_(s,n,r,i);this.mutationQueue.push(a);for(const o of i)this.Zr=this.Zr.add(new ot(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?_s:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),i=new ot(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],a=>{const o=this.Xr(a.Yr);s.push(o)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(J);return n.forEach(i=>{const s=new ot(i,0),a=new ot(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,a],o=>{r=r.add(o.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const a=new ot(new H(s),0);let o=new _e(J);return this.Zr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(o=o.add(l.Yr)),!0)},a),O.resolve(this.ti(o))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Q(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,i=>{const s=new ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ot(n,0),i=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h3{constructor(e){this.ri=e,this.docs=function(){return new Se(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let r=en();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ze.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=en();const a=n.path,o=new H(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(o);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||w_(zI(h),r)<=0||(i.has(h.key)||Xu(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new f3(this)}getSize(e){return O.resolve(this.size)}}class f3 extends lx{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d3{constructor(e){this.persistence=e,this.si=new Mr(n=>Ps(n),Qu),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new F_,this.targetCount=0,this.ai=ks.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ks(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((a,o)=>{o.sequenceNumber<=n&&r.get(o.targetId)===null&&(this.si.delete(a),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n){this.ui={},this.overlays={},this.ci=new jt(0),this.li=!1,this.li=!0,this.hi=new u3,this.referenceDelegate=e(this),this.Pi=new d3(this),this.indexManager=new J6,this.remoteDocumentCache=function(i){return new h3(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new XR(n),this.Ii=new o3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new l3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new c3(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new m3(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class m3 extends FI{constructor(e){super(),this.currentSequenceNumber=e}}class Dd{constructor(e){this.persistence=e,this.Ri=new F_,this.Vi=null}static mi(e){return new Dd(e)}get fi(){if(this.Vi)return this.Vi;throw $(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const i=H.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Df{constructor(e,n){this.persistence=e,this.pi=new Mr(r=>Rt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=ox(this,n)}static mi(e,n){return new Df(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,a=>this.br(e,a,n).next(o=>{o||(r++,s.removeEntry(a,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=bh(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(e){this.serializer=e}k(e,n,r,i){const s=new yd("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore(Ku)}(e),function(l){l.createObjectStore(du,{keyPath:RM}),l.createObjectStore(In,{keyPath:FT,autoIncrement:!0}).createIndex(cs,HT,{unique:!0}),l.createObjectStore(Ja)}(e),Ob(e),function(l){l.createObjectStore(is)}(e));let a=O.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore(eo),l.deleteObjectStore(Za),l.deleteObjectStore(vs)}(e),Ob(e)),a=a.next(()=>function(l){const c=l.store(vs),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Y.min().toTimestamp(),targetCount:0};return c.put(Ef,h)}(s))),r<4&&i>=4&&(r!==0&&(a=a.next(()=>function(l,c){return c.store(In).J().next(d=>{l.deleteObjectStore(In),l.createObjectStore(In,{keyPath:FT,autoIncrement:!0}).createIndex(cs,HT,{unique:!0});const m=c.store(In),g=d.map(w=>m.put(w));return O.waitFor(g)})}(e,s))),a=a.next(()=>{(function(l){l.createObjectStore(to,{keyPath:MM})})(e)})),r<5&&i>=5&&(a=a.next(()=>this.yi(s))),r<6&&i>=6&&(a=a.next(()=>(function(l){l.createObjectStore(mu)}(e),this.wi(s)))),r<7&&i>=7&&(a=a.next(()=>this.Si(s))),r<8&&i>=8&&(a=a.next(()=>this.bi(e,s))),r<9&&i>=9&&(a=a.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(a=a.next(()=>this.Di(s))),r<11&&i>=11&&(a=a.next(()=>{(function(l){l.createObjectStore(vd,{keyPath:LM})})(e),function(l){l.createObjectStore(Ed,{keyPath:UM})}(e)})),r<12&&i>=12&&(a=a.next(()=>{(function(l){const c=l.createObjectStore(Td,{keyPath:GM});c.createIndex(Ng,$M,{unique:!1}),c.createIndex(WI,KM,{unique:!1})})(e)})),r<13&&i>=13&&(a=a.next(()=>function(l){const c=l.createObjectStore(vf,{keyPath:CM});c.createIndex(Eh,DM),c.createIndex(KI,NM)}(e)).next(()=>this.Ci(e,s)).next(()=>e.deleteObjectStore(is))),r<14&&i>=14&&(a=a.next(()=>this.Fi(e,s))),r<15&&i>=15&&(a=a.next(()=>function(l){l.createObjectStore(I_,{keyPath:jM,autoIncrement:!0}).createIndex(Dg,BM,{unique:!1}),l.createObjectStore(Ul,{keyPath:zM}).createIndex(YI,qM,{unique:!1}),l.createObjectStore(jl,{keyPath:FM}).createIndex(XI,HM,{unique:!1})}(e))),r<16&&i>=16&&(a=a.next(()=>{n.objectStore(Ul).clear()}).next(()=>{n.objectStore(jl).clear()})),r<17&&i>=17&&(a=a.next(()=>{(function(l){l.createObjectStore(R_,{keyPath:QM})})(e)})),r<18&&i>=18&&eI()&&(a=a.next(()=>{n.objectStore(Ul).clear()}).next(()=>{n.objectStore(jl).clear()})),a}wi(e){let n=0;return e.store(is).ee((r,i)=>{n+=Cf(i)}).next(()=>{const r={byteSize:n};return e.store(mu).put(Cg,r)})}yi(e){const n=e.store(du),r=e.store(In);return n.J().next(i=>O.forEach(i,s=>{const a=IDBKeyRange.bound([s.userId,_s],[s.userId,s.lastAcknowledgedBatchId]);return r.J(cs,a).next(o=>O.forEach(o,l=>{Q(l.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const c=as(this.serializer,l);return nx(e,s.userId,c).next(()=>{})}))}))}Si(e){const n=e.store(eo),r=e.store(is);return e.store(vs).get(Ef).next(i=>{const s=[];return r.ee((a,o)=>{const l=new fe(a),c=function(d){return[0,Rt(d)]}(l);s.push(n.get(c).next(h=>h?O.resolve():(d=>n.put({targetId:0,path:Rt(d),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>O.waitFor(s))})}bi(e,n){e.createObjectStore(pu,{keyPath:kM});const r=n.store(pu),i=new q_,s=a=>{if(i.add(a)){const o=a.lastSegment(),l=a.popLast();return r.put({collectionId:o,parent:Rt(l)})}};return n.store(is).ee({X:!0},(a,o)=>{const l=new fe(a);return s(l.popLast())}).next(()=>n.store(Ja).ee({X:!0},([a,o,l],c)=>{const h=qn(o);return s(h.popLast())}))}Di(e){const n=e.store(Za);return n.ee((r,i)=>{const s=yl(i),a=WR(this.serializer,s);return n.put(a)})}Ci(e,n){const r=n.store(is),i=[];return r.ee((s,a)=>{const o=n.store(vf),l=function(d){return d.document?new H(fe.fromString(d.document.name).popFirst(5)):d.noDocument?H.fromSegments(d.noDocument.path):d.unknownDocument?H.fromSegments(d.unknownDocument.path):$(36783)}(a).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(o.put(c))}).next(()=>O.waitFor(i))}Fi(e,n){const r=n.store(In),i=ux(this.serializer),s=new H_(Dd.mi,this.serializer.yt);return r.J().next(a=>{const o=new Map;return a.forEach(l=>{let c=o.get(l.userId)??re();as(this.serializer,l).keys().forEach(h=>c=c.add(h)),o.set(l.userId,c)}),O.forEach(o,(l,c)=>{const h=new Tt(c),d=xd.wt(this.serializer,h),m=s.getIndexManager(h),g=Cd.wt(h,this.serializer,m,s.referenceDelegate);return new cx(i,g,d,m).recalculateAndSaveOverlaysForDocumentKeys(new Pg(n,jt.ce),l).next()})})}}function Ob(t){t.createObjectStore(eo,{keyPath:OM}).createIndex(S_,VM,{unique:!0}),t.createObjectStore(Za,{keyPath:"targetId"}).createIndex(QI,PM,{unique:!0}),t.createObjectStore(vs)}const Kr="IndexedDbPersistence",fp=18e5,dp=5e3,mp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",g3="main";class G_{constructor(e,n,r,i,s,a,o,l,c,h,d=18){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Mi=s,this.window=a,this.document=o,this.xi=c,this.Oi=h,this.Ni=d,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=m=>Promise.resolve(),!G_.v())throw new q(L.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new r3(this,i),this.$i=n+g3,this.serializer=new XR(l),this.Ui=new Ii(this.$i,this.Ni,new p3(this.serializer)),this.hi=new $6,this.Pi=new e3(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ux(this.serializer),this.Ii=new G6,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,h===!1&&Qe(Kr,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new q(L.FAILED_PRECONDITION,mp);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Pi.getHighestSequenceNumber(e))}).then(e=>{this.ci=new jt(e,this.xi)}).then(()=>{this.li=!0}).catch(e=>(this.Ui&&this.Ui.close(),Promise.reject(e)))}Ji(e){return this.Qi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Qc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(e).next(n=>{n||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(e)).next(n=>this.isPrimary&&!n?this.Zi(e).next(()=>!1):!!n&&this.Xi(e).next(()=>!0))).catch(e=>{if(qi(e))return B(Kr,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return B(Kr,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable(()=>this.Qi(e)),this.isPrimary=e})}Hi(e){return al(e).get(ea).next(n=>O.resolve(this.es(n)))}ts(e){return Qc(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,fp)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=at(n,to);return r.J().next(i=>{const s=this.ss(i,fp),a=i.filter(o=>s.indexOf(o)===-1);return O.forEach(a,o=>r.delete(o.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Ki)for(const n of e)this.Ki.removeItem(this._s(n.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?O.resolve(!0):al(e).get(ea).next(n=>{if(n!==null&&this.rs(n.leaseTimestampMs,dp)&&!this.us(n.ownerId)){if(this.es(n)&&this.networkEnabled)return!0;if(!this.es(n)){if(!n.allowTabSynchronization)throw new q(L.FAILED_PRECONDITION,mp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Qc(e).J().next(r=>this.ss(r,dp).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,o=this.networkEnabled===i.networkEnabled;if(s||a&&o)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&B(Kr,`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Ku,to],e=>{const n=new Pg(e,jt.ce);return this.Zi(n).next(()=>this.ts(n))}),this.Ui.close(),this.Ps()}ss(e,n){return e.filter(r=>this.rs(r.updateTimeMs,n)&&!this.us(r.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",e=>Qc(e).J().next(n=>this.ss(n,fp).map(r=>r.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,n){return Cd.wt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Z6(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return xd.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,n,r){B(Kr,"Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===18?WM:l===17?tR:l===16?XM:l===15?x_:l===14?eR:l===13?ZI:l===12?YM:l===11?JI:void $(60245)}(this.Ni);let a;return this.Ui.runTransaction(e,i,s,o=>(a=new Pg(o,this.ci?this.ci.next():jt.ce),n==="readwrite-primary"?this.Hi(a).next(l=>!!l||this.Yi(a)).next(l=>{if(!l)throw Qe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new q(L.FAILED_PRECONDITION,qI);return r(a)}).next(l=>this.Xi(a).next(()=>l)):this.Is(a).next(()=>r(a)))).then(o=>(a.raiseOnCommittedEvent(),o))}Is(e){return al(e).get(ea).next(n=>{if(n!==null&&this.rs(n.leaseTimestampMs,dp)&&!this.us(n.ownerId)&&!this.es(n)&&!(this.Oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new q(L.FAILED_PRECONDITION,mp)})}Xi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return al(e).put(ea,n)}static v(){return Ii.v()}Zi(e){const n=al(e);return n.get(ea).next(r=>this.es(r)?(B(Kr,"Releasing primary lease."),n.delete(ea)):O.resolve())}rs(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Qe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const n=/(?:Version|Mobile)\/1[456]/;ZS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var n;try{const r=((n=this.Ki)==null?void 0:n.getItem(this._s(e)))!==null;return B(Kr,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Qe(Kr,"Failed to get zombied client id.",r),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){Qe("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function al(t){return at(t,Ku)}function Qc(t){return at(t,to)}function hx(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y3{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return ZS()?8:HI(st())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new y3;return this.Ss(e,n,a).next(o=>{if(s.result=o,this.Vs)return this.bs(e,n,a,o.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(ca()<=ae.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ha(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(ca()<=ae.DEBUG&&B("QueryEngine","Query:",ha(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ca()<=ae.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ha(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):O.resolve())}ys(e,n){if(rb(n))return O.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Af(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=re(...s);return this.ps.getDocuments(e,a).next(o=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Ds(n,o);return this.Cs(n,c,a,l.readTime)?this.ys(e,Af(n,null,"F")):this.vs(e,c,n,l)}))})))}ws(e,n,r,i){return rb(n)||i.isEqual(Y.min())?O.resolve(null):this.ps.getDocuments(e,r).next(s=>{const a=this.Ds(n,s);return this.Cs(n,a,r,i)?O.resolve(null):(ca()<=ae.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ha(n)),this.vs(e,a,n,BI(i,Wa)).next(o=>o))})}Ds(e,n){let r=new _e(AR(e));return n.forEach((i,s)=>{Xu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return ca()<=ae.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ha(n)),this.ps.getDocumentsMatchingQuery(e,n,cn.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="LocalStore",_3=3e8;class v3{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Se(J),this.xs=new Mr(s=>Ps(s),Qu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function dx(t,e,n,r){return new v3(t,e,n,r)}async function mx(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],o=[];let l=re();for(const c of i){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({Ls:c,removedBatchIds:a,addedBatchIds:o}))})})}function E3(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(o,l,c,h){const d=c.batch,m=d.keys();let g=O.resolve();return m.forEach(w=>{g=g.next(()=>h.getEntry(l,w)).next(x=>{const C=c.docVersions.get(w);Q(C!==null,48541),x.version.compareTo(C)<0&&(d.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),h.addEntry(x)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let l=re();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(l=l.add(o.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function px(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function T3(t,e){const n=K(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const o=[];e.targetChanges.forEach((h,d)=>{const m=i.get(d);if(!m)return;o.push(n.Pi.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.Pi.addMatchingKeys(s,h.addedDocuments,d)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Ye.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(d,g),function(x,C,v){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=_3?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,g,h)&&o.push(n.Pi.updateTargetData(s,g))});let l=en(),c=re();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),o.push(b3(s,a,e.documentUpdates).next(h=>{l=h.ks,c=h.qs})),!r.isEqual(Y.min())){const h=n.Pi.getLastRemoteSnapshotVersion(s).next(d=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));o.push(h)}return O.waitFor(o).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Ms=i,s))}function b3(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=en();return n.forEach((o,l)=>{const c=s.get(o);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(o)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(o,l.readTime),a=a.insert(o,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),a=a.insert(o,l)):B(K_,"Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",l.version)}),{ks:a,qs:i}})}function w3(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=_s),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Nf(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Pi.allocateTargetId(r).next(a=>(i=new _r(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function co(t,e,n){const r=K(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!qi(a))throw a;B(K_,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function $g(t,e,n){const r=K(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,c,h){const d=K(l),m=d.xs.get(h);return m!==void 0?O.resolve(d.Ms.get(m)):d.Pi.getTargetData(c,h)}(r,a,ln(e)).next(o=>{if(o)return i=o.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,o.targetId).next(l=>{s=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,n?i:Y.min(),n?s:re())).next(o=>(_x(r,wR(e),o),{documents:o,Qs:s})))}function gx(t,e){const n=K(t),r=K(n.Pi),i=n.Ms.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.At(s,e).next(a=>a?a.target:null))}function yx(t,e){const n=K(t),r=n.Os.get(e)||Y.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Ns.getAllFromCollectionGroup(i,e,BI(r,Wa),Number.MAX_SAFE_INTEGER)).then(i=>(_x(n,e,i),i))}function _x(t,e,n){let r=t.Os.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="firestore_clients";function Vb(t,e){return`${vx}_${t}_${e}`}const Ex="firestore_mutations";function kb(t,e,n){let r=`${Ex}_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const Tx="firestore_targets";function pp(t,e){return`${Tx}_${t}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="SharedClientState";class Pf{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Ws(e,n,r){const i=JSON.parse(r);let s,a=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return a&&i.error&&(a=typeof i.error.message=="string"&&typeof i.error.code=="string",a&&(s=new q(i.error.code,i.error.message))),a?new Pf(e,n,i.state,s):(Qe(jn,`Failed to parse mutation state for ID '${n}': ${r}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Hl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Ws(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new q(r.error.code,r.error.message))),s?new Hl(e,r.state,i):(Qe(jn,`Failed to parse target state for ID '${e}': ${n}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Of{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Ws(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=O_();for(let a=0;i&&a<r.activeTargetIds.length;++a)i=GI(r.activeTargetIds[a]),s=s.add(r.activeTargetIds[a]);return i?new Of(e,s):(Qe(jn,`Failed to parse client data for instance '${e}': ${n}`),null)}}class Q_{constructor(e,n){this.clientId=e,this.onlineState=n}static Ws(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Q_(n.clientId,n.onlineState):(Qe(jn,`Failed to parse online state: ${e}`),null)}}class Kg{constructor(){this.activeTargetIds=O_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gp{constructor(e,n,r,i,s){this.window=e,this.Mi=n,this.persistenceKey=r,this.Js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new Se(J),this.started=!1,this.Xs=[];const a=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.eo=Vb(this.persistenceKey,this.Js),this.no=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new Kg),this.ro=new RegExp(`^${vx}_${a}_([^_]*)$`),this.io=new RegExp(`^${Ex}_${a}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${Tx}_${a}_(\\d+)$`),this.oo=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this._o=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ts();for(const r of e){if(r===this.Js)continue;const i=this.getItem(Vb(this.persistenceKey,r));if(i){const s=Of.Ws(r,i);s&&(this.Zs=this.Zs.insert(s.clientId,s))}}this.ao();const n=this.storage.getItem(this.oo);if(n){const r=this.uo(n);r&&this.co(r)}for(const r of this.Xs)this.Ys(r);this.Xs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let n=!1;return this.Zs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,n,r){this.ho(e,n,r),this.Po(e)}addLocalQueryTarget(e,n=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(pp(this.persistenceKey,e));if(i){const s=Hl.Ws(e,i);s&&(r=s.state)}}return n&&this.To.zs(e),this.ao(),r}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(pp(this.persistenceKey,e))}updateQueryState(e,n,r){this.Io(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Po(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return B(jn,"READ",e,n),n}setItem(e,n){B(jn,"SET",e,n),this.storage.setItem(e,n)}removeItem(e){B(jn,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const n=e;if(n.storageArea===this.storage){if(B(jn,"EVENT",n.key,n.newValue),n.key===this.eo)return void Qe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.ro.test(n.key)){if(n.newValue==null){const r=this.Ro(n.key);return this.Vo(r,null)}{const r=this.mo(n.key,n.newValue);if(r)return this.Vo(r.clientId,r)}}else if(this.io.test(n.key)){if(n.newValue!==null){const r=this.fo(n.key,n.newValue);if(r)return this.po(r)}}else if(this.so.test(n.key)){if(n.newValue!==null){const r=this.yo(n.key,n.newValue);if(r)return this.wo(r)}}else if(n.key===this.oo){if(n.newValue!==null){const r=this.uo(n.newValue);if(r)return this.co(r)}}else if(n.key===this.no){const r=function(s){let a=jt.ce;if(s!=null)try{const o=JSON.parse(s);Q(typeof o=="number",30636,{So:s}),a=o}catch(o){Qe(jn,"Failed to read sequence number from WebStorage",o)}return a}(n.newValue);r!==jt.ce&&this.sequenceNumberHandler(r)}else if(n.key===this._o){const r=this.bo(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Do(i)))}}}else this.Xs.push(n)})}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,n,r){const i=new Pf(this.currentUser,e,n,r),s=kb(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Gs())}Po(e){const n=kb(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Eo(e){const n={clientId:this.Js,onlineState:e};this.storage.setItem(this.oo,JSON.stringify(n))}Io(e,n,r){const i=pp(this.persistenceKey,e),s=new Hl(e,n,r);this.setItem(i,s.Gs())}Ao(e){const n=JSON.stringify(Array.from(e));this.setItem(this._o,n)}Ro(e){const n=this.ro.exec(e);return n?n[1]:null}mo(e,n){const r=this.Ro(e);return Of.Ws(r,n)}fo(e,n){const r=this.io.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Pf.Ws(new Tt(s),i,n)}yo(e,n){const r=this.so.exec(e),i=Number(r[1]);return Hl.Ws(i,n)}uo(e){return Q_.Ws(e)}bo(e){return JSON.parse(e)}async po(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);B(jn,`Ignoring mutation for non-active user ${e.user.uid}`)}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,n){const r=n?this.Zs.insert(e,n):this.Zs.remove(e),i=this.lo(this.Zs),s=this.lo(r),a=[],o=[];return s.forEach(l=>{i.has(l)||a.push(l)}),i.forEach(l=>{s.has(l)||o.push(l)}),this.syncEngine.Fo(a,o).then(()=>{this.Zs=r})}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let n=O_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class bx{constructor(){this.Mo=new Kg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Kg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A3{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb="ConnectivityMonitor";class Lb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){B(Mb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){B(Mb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc=null;function Qg(){return Yc===null?Yc=function(){return 268435456+Math.round(2147483648*Math.random())}():Yc++,"0x"+Yc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="RestConnection",S3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class I3{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Tf?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const a=Qg(),o=this.zo(e,n.toUriEncodedString());B(yp,`Sending RPC '${e}' ${a}:`,o,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,i,s);const{host:c}=new URL(o),h=ji(c);return this.Jo(e,o,l,r,h).then(d=>(B(yp,`Received RPC '${e}' ${a}: `,d),d),d=>{throw cu(yp,`RPC '${e}' ${a} failed with error: `,d,"url: ",o,"request:",r),d})}Ho(e,n,r,i,s,a){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ro}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=S3[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class x3 extends I3{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const a=Qg();return new Promise((o,l)=>{const c=new NI;c.setWithCredentials(!0),c.listenOnce(PI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case yh.NO_ERROR:const d=c.getResponseJson();B(Et,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(d)),o(d);break;case yh.TIMEOUT:B(Et,`RPC '${e}' ${a} timed out`),l(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case yh.HTTP_ERROR:const m=c.getStatus();if(B(Et,`RPC '${e}' ${a} failed with status:`,m,"response text:",c.getResponseText()),m>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const x=function(v){const y=v.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(y)>=0?y:L.UNKNOWN}(w.status);l(new q(x,w.message))}else l(new q(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new q(L.UNAVAILABLE,"Connection failed."));break;default:$(9055,{l_:e,streamId:a,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{B(Et,`RPC '${e}' ${a} completed.`)}});const h=JSON.stringify(i);B(Et,`RPC '${e}' ${a} sending request:`,i),c.send(n,"POST",h,r,15)})}T_(e,n,r){const i=Qg(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=kI(),o=VI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");B(Et,`Creating RPC '${e}' stream ${i}: ${h}`,l);const d=a.createWebChannel(h,l);this.I_(d);let m=!1,g=!1;const w=new R3({Yo:C=>{g?B(Et,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(B(Et,`Opening RPC '${e}' stream ${i} transport.`),d.open(),m=!0),B(Et,`RPC '${e}' stream ${i} sending:`,C),d.send(C))},Zo:()=>d.close()}),x=(C,v,y)=>{C.listen(v,T=>{try{y(T)}catch(N){setTimeout(()=>{throw N},0)}})};return x(d,ml.EventType.OPEN,()=>{g||(B(Et,`RPC '${e}' stream ${i} transport opened.`),w.o_())}),x(d,ml.EventType.CLOSE,()=>{g||(g=!0,B(Et,`RPC '${e}' stream ${i} transport closed`),w.a_(),this.E_(d))}),x(d,ml.EventType.ERROR,C=>{g||(g=!0,cu(Et,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),w.a_(new q(L.UNAVAILABLE,"The operation could not be completed")))}),x(d,ml.EventType.MESSAGE,C=>{var v;if(!g){const y=C.data[0];Q(!!y,16349);const T=y,N=(T==null?void 0:T.error)||((v=T[0])==null?void 0:v.error);if(N){B(Et,`RPC '${e}' stream ${i} received error:`,N);const U=N.status;let z=function(A){const S=We[A];if(S!==void 0)return LR(S)}(U),b=N.message;z===void 0&&(z=L.INTERNAL,b="Unknown error status: "+U+" with message "+N.message),g=!0,w.a_(new q(z,b)),d.close()}else B(Et,`RPC '${e}' stream ${i} received:`,y),w.u_(y)}}),x(o,OI.STAT_EVENT,C=>{C.stat===Ig.PROXY?B(Et,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Ig.NOPROXY&&B(Et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.__()},0),w}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(){return typeof window<"u"?window:null}function Rh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){return new O6(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="PersistentStream";class Sx{constructor(e,n,r,i,s,a,o,l){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ax(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Qe(n.toString()),Qe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(Ub,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(B(Ub,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class C3 extends Sx{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=M6(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?Vt(a.readTime):Y.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=zg(this.serializer),n.addTarget=function(s,a){let o;const l=a.target;if(o=bf(l)?{documents:GR(s,l)}:{query:B_(s,l).ft},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=BR(s,a.resumeToken);const c=jg(s,a.expectedCount);c!==null&&(o.expectedCount=c)}else if(a.snapshotVersion.compareTo(Y.min())>0){o.readTime=uo(s,a.snapshotVersion.toTimestamp());const c=jg(s,a.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=j6(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=zg(this.serializer),n.removeTarget=e,this.q_(n)}}class D3 extends Sx{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=L6(e.writeResults,e.commitTime),r=Vt(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=zg(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>If(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{}class P3 extends N3{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Go(e,Bg(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(L.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection.Ho(e,Bg(n,r),i,a,o,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(L.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class O3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Qe(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="RemoteStore";class V3{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{$s(this)&&(B(Ms,"Restarting streams for network reachability change."),await async function(l){const c=K(l);c.Ea.add(4),await Zu(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Pd(c)}(this))})}),this.Ra=new O3(r,i)}}async function Pd(t){if($s(t))for(const e of t.da)await e(!0)}async function Zu(t){for(const e of t.da)await e(!1)}function Od(t,e){const n=K(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),W_(n)?X_(n):No(n).O_()&&Y_(n,e))}function ho(t,e){const n=K(t),r=No(n);n.Ia.delete(e),r.O_()&&Ix(n,e),n.Ia.size===0&&(r.O_()?r.L_():$s(n)&&n.Ra.set("Unknown"))}function Y_(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}No(t).Y_(e)}function Ix(t,e){t.Va.Ue(e),No(t).Z_(e)}function X_(t){t.Va=new C6({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),No(t).start(),t.Ra.ua()}function W_(t){return $s(t)&&!No(t).x_()&&t.Ia.size>0}function $s(t){return K(t).Ea.size===0}function Rx(t){t.Va=void 0}async function k3(t){t.Ra.set("Online")}async function M3(t){t.Ia.forEach((e,n)=>{Y_(t,e)})}async function L3(t,e){Rx(t),W_(t)?(t.Ra.ha(e),X_(t)):t.Ra.set("Unknown")}async function U3(t,e,n){if(t.Ra.set("Online"),e instanceof jR&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const o of s.targetIds)i.Ia.has(o)&&(await i.remoteSyncer.rejectListen(o,a),i.Ia.delete(o),i.Va.removeTarget(o))}(t,e)}catch(r){B(Ms,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vf(t,r)}else if(e instanceof Sh?t.Va.Ze(e):e instanceof UR?t.Va.st(e):t.Va.tt(e),!n.isEqual(Y.min()))try{const r=await px(t.localStore);n.compareTo(r)>=0&&await function(s,a){const o=s.Va.Tt(a);return o.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.Ia.get(c);h&&s.Ia.set(c,h.withResumeToken(l.resumeToken,a))}}),o.targetMismatches.forEach((l,c)=>{const h=s.Ia.get(l);if(!h)return;s.Ia.set(l,h.withResumeToken(Ye.EMPTY_BYTE_STRING,h.snapshotVersion)),Ix(s,l);const d=new _r(h.target,l,c,h.sequenceNumber);Y_(s,d)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){B(Ms,"Failed to raise snapshot:",r),await Vf(t,r)}}async function Vf(t,e,n){if(!qi(e))throw e;t.Ea.add(1),await Zu(t),t.Ra.set("Offline"),n||(n=()=>px(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(Ms,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Pd(t)})}function xx(t,e){return e().catch(n=>Vf(t,n,e))}async function Do(t){const e=K(t),n=Vi(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:_s;for(;j3(e);)try{const i=await w3(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,B3(e,i)}catch(i){await Vf(e,i)}Cx(e)&&Dx(e)}function j3(t){return $s(t)&&t.Ta.length<10}function B3(t,e){t.Ta.push(e);const n=Vi(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Cx(t){return $s(t)&&!Vi(t).x_()&&t.Ta.length>0}function Dx(t){Vi(t).start()}async function z3(t){Vi(t).ra()}async function q3(t){const e=Vi(t);for(const n of t.Ta)e.ea(n.mutations)}async function F3(t,e,n){const r=t.Ta.shift(),i=M_.from(r,e,n);await xx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Do(t)}async function H3(t,e){e&&Vi(t).X_&&await async function(r,i){if(function(a){return I6(a)&&a!==L.ABORTED}(i.code)){const s=r.Ta.shift();Vi(r).B_(),await xx(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Do(r)}}(t,e),Cx(t)&&Dx(t)}async function jb(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),B(Ms,"RemoteStore received new credentials");const r=$s(n);n.Ea.add(3),await Zu(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Pd(n)}async function Yg(t,e){const n=K(t);e?(n.Ea.delete(2),await Pd(n)):e||(n.Ea.add(2),await Zu(n),n.Ra.set("Unknown"))}function No(t){return t.ma||(t.ma=function(n,r,i){const s=K(n);return s.sa(),new C3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:k3.bind(null,t),t_:M3.bind(null,t),r_:L3.bind(null,t),H_:U3.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),W_(t)?X_(t):t.Ra.set("Unknown")):(await t.ma.stop(),Rx(t))})),t.ma}function Vi(t){return t.fa||(t.fa=function(n,r,i){const s=K(n);return s.sa(),new D3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:z3.bind(null,t),r_:H3.bind(null,t),ta:q3.bind(null,t),na:F3.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Do(t)):(await t.fa.stop(),t.Ta.length>0&&(B(Ms,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,o=new J_(e,n,a,i,s);return o.start(r),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Z_(t,e){if(Qe("AsyncQueue",`${e}: ${t}`),qi(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{static emptySet(e){return new ka(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=pl(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ka)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ka;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.ga=new Se(H.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):$(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class fo{constructor(e,n,r,i,s,a,o,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(o=>{a.push({type:0,doc:o})}),new fo(e,n,ka.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ad(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class $3{constructor(){this.queries=zb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=K(n),s=i.queries;i.queries=zb(),s.forEach((a,o)=>{for(const l of o.Sa)l.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function zb(){return new Mr(t=>bR(t),Ad)}async function ev(t,e){const n=K(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new G3,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const o=Z_(a,`Initialization of query '${ha(e.query)}' failed`);return void e.onError(o)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&nv(n)}async function tv(t,e){const n=K(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.Sa.indexOf(e);a>=0&&(s.Sa.splice(a,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function K3(t,e){const n=K(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const o of a.Sa)o.Fa(i)&&(r=!0);a.wa=i}}r&&nv(n)}function Q3(t,e,n){const r=K(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function nv(t){t.Ca.forEach(e=>{e.next()})}var Xg,qb;(qb=Xg||(Xg={})).Ma="default",qb.Cache="cache";class rv{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Xg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.key=e}}class Px{constructor(e){this.key=e}}class Y3{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=AR(e),this.tu=new ka(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Bb,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,o=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const m=i.get(h),g=Xu(this.query,d)?d:null,w=!!m&&this.mutatedKeys.has(m.key),x=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;m&&g?m.data.isEqual(g.data)?w!==x&&(r.track({type:3,doc:g}),C=!0):this.su(m,g)||(r.track({type:2,doc:g}),C=!0,(l&&this.eu(g,l)>0||c&&this.eu(g,c)<0)&&(o=!0)):!m&&g?(r.track({type:0,doc:g}),C=!0):m&&!g&&(r.track({type:1,doc:m}),C=!0,(l||c)&&(o=!0)),C&&(g?(a=a.add(g),s=x?s.add(h):s.delete(h)):(a=a.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const h=this.query.limitType==="F"?a.last():a.first();a=a.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{tu:a,iu:r,Cs:o,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((h,d)=>function(g,w){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{Rt:C})}};return x(g)-x(w)}(h.type,d.type)||this.eu(h.doc,d.doc)),this.ou(r),i=i??!1;const o=n&&!i?this._u():[],l=this.Xa.size===0&&this.current&&!i?1:0,c=l!==this.Za;return this.Za=l,a.length!==0||c?{snapshot:new fo(this.query,e.tu,s,a,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Px(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Nx(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return fo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Po="SyncEngine";class X3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class W3{constructor(e){this.key=e,this.hu=!1}}class J3{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Mr(o=>bR(o),Ad),this.Iu=new Map,this.Eu=new Set,this.du=new Se(H.comparator),this.Au=new Map,this.Ru=new F_,this.Vu={},this.mu=new Map,this.fu=ks.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Z3(t,e,n=!0){const r=Vd(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Ox(r,e,n,!0),i}async function eL(t,e){const n=Vd(t);await Ox(n,e,!0,!1)}async function Ox(t,e,n,r){const i=await Nf(t.localStore,ln(e)),s=i.targetId,a=t.sharedClientState.addLocalQueryTarget(s,n);let o;return r&&(o=await iv(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&Od(t.remoteStore,i),o}async function iv(t,e,n,r,i){t.pu=(d,m,g)=>async function(x,C,v,y){let T=C.view.ru(v);T.Cs&&(T=await $g(x.localStore,C.query,!1).then(({documents:b})=>C.view.ru(b,T)));const N=y&&y.targetChanges.get(C.targetId),U=y&&y.targetMismatches.get(C.targetId)!=null,z=C.view.applyChanges(T,x.isPrimaryClient,N,U);return Wg(x,C.targetId,z.au),z.snapshot}(t,d,m,g);const s=await $g(t.localStore,e,!0),a=new Y3(e,s.Qs),o=a.ru(s.documents),l=Ju.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=a.applyChanges(o,t.isPrimaryClient,l);Wg(t,n,c.au);const h=new X3(e,n,a);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function tL(t,e,n){const r=K(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(a=>!Ad(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await co(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ho(r.remoteStore,i.targetId),mo(r,i.targetId)}).catch(zi)):(mo(r,i.targetId),await co(r.localStore,i.targetId,!0))}async function nL(t,e){const n=K(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ho(n.remoteStore,r.targetId))}async function rL(t,e,n){const r=lv(t);try{const i=await function(a,o){const l=K(a),c=pe.now(),h=o.reduce((g,w)=>g.add(w.key),re());let d,m;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=en(),x=re();return l.Ns.getEntries(g,h).next(C=>{w=C,w.forEach((v,y)=>{y.isValidDocument()||(x=x.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,w)).next(C=>{d=C;const v=[];for(const y of o){const T=w6(y,d.get(y.key).overlayedDocument);T!=null&&v.push(new Lr(y.key,T,hR(T.value.mapValue),It.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,v,o)}).next(C=>{m=C;const v=C.applyToLocalDocumentSet(d,x);return l.documentOverlayCache.saveOverlays(g,C.batchId,v)})}).then(()=>({batchId:m.batchId,changes:IR(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,o,l){let c=a.Vu[a.currentUser.toKey()];c||(c=new Se(J)),c=c.insert(o,l),a.Vu[a.currentUser.toKey()]=c}(r,i.batchId,n),await Hi(r,i.changes),await Do(r.remoteStore)}catch(i){const s=Z_(i,"Failed to persist write");n.reject(s)}}async function Vx(t,e){const n=K(t);try{const r=await T3(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.Au.get(s);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?Q(a.hu,14607):i.removedDocuments.size>0&&(Q(a.hu,42227),a.hu=!1))}),await Hi(n,r,e)}catch(r){await zi(r)}}function Fb(t,e,n){const r=K(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,a)=>{const o=a.view.va(e);o.snapshot&&i.push(o.snapshot)}),function(a,o){const l=K(a);l.onlineState=o;let c=!1;l.queries.forEach((h,d)=>{for(const m of d.Sa)m.va(o)&&(c=!0)}),c&&nv(l)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iL(t,e,n){const r=K(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let a=new Se(H.comparator);a=a.insert(s,ze.newNoDocument(s,Y.min()));const o=re().add(s),l=new Wu(Y.min(),new Map,new Se(J),a,o);await Vx(r,l),r.du=r.du.remove(s),r.Au.delete(e),ov(r)}else await co(r.localStore,e,!1).then(()=>mo(r,e,n)).catch(zi)}async function sL(t,e){const n=K(t),r=e.batch.batchId;try{const i=await E3(n.localStore,e);av(n,r,null),sv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hi(n,i)}catch(i){await zi(i)}}async function aL(t,e,n){const r=K(t);try{const i=await function(a,o){const l=K(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,o).next(d=>(Q(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(c,d))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,o)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);av(r,e,n),sv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Hi(r,i)}catch(i){await zi(i)}}function sv(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function av(t,e,n){const r=K(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function mo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||kx(t,r)})}function kx(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ho(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),ov(t))}function Wg(t,e,n){for(const r of n)r instanceof Nx?(t.Ru.addReference(r.key,e),oL(t,r)):r instanceof Px?(B(Po,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||kx(t,r.key)):$(19791,{wu:r})}function oL(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(B(Po,"New document in limbo: "+n),t.Eu.add(r),ov(t))}function ov(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new H(fe.fromString(e)),r=t.fu.next();t.Au.set(r,new W3(n)),t.du=t.du.insert(n,r),Od(t.remoteStore,new _r(ln(Yu(n.path)),r,"TargetPurposeLimboResolution",jt.ce))}}async function Hi(t,e,n){const r=K(t),i=[],s=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((o,l)=>{a.push(r.pu(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const d=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(c){i.push(c);const d=$_.As(l.targetId,c);s.push(d)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(l,c){const h=K(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>O.forEach(c,m=>O.forEach(m.Es,g=>h.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>O.forEach(m.ds,g=>h.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!qi(d))throw d;B(K_,"Failed to update sequence numbers: "+d)}for(const d of c){const m=d.targetId;if(!d.fromCache){const g=h.Ms.get(m),w=g.snapshotVersion,x=g.withLastLimboFreeSnapshotVersion(w);h.Ms=h.Ms.insert(m,x)}}}(r.localStore,s))}async function lL(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){B(Po,"User change. New user:",e.toKey());const r=await mx(n.localStore,e);n.currentUser=e,function(s,a){s.mu.forEach(o=>{o.forEach(l=>{l.reject(new q(L.CANCELLED,a))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hi(n,r.Ls)}}function uL(t,e){const n=K(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Iu.get(e);if(!s)return i;for(const a of s){const o=n.Tu.get(a);i=i.unionWith(o.view.nu)}return i}}async function cL(t,e){const n=K(t),r=await $g(n.localStore,e.query,!0),i=e.view.cu(r);return n.isPrimaryClient&&Wg(n,e.targetId,i.au),i}async function hL(t,e){const n=K(t);return yx(n.localStore,e).then(r=>Hi(n,r))}async function fL(t,e,n,r){const i=K(t),s=await function(o,l){const c=K(o),h=K(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",d=>h.er(d,l).next(m=>m?c.localDocuments.getDocuments(d,m):O.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Do(i.remoteStore):n==="acknowledged"||n==="rejected"?(av(i,e,r||null),sv(i,e),function(o,l){K(K(o).mutationQueue).ir(l)}(i.localStore,e)):$(6720,"Unknown batchState",{Su:n}),await Hi(i,s)):B(Po,"Cannot apply mutation batch with id: "+e)}async function dL(t,e){const n=K(t);if(Vd(n),lv(n),e===!0&&n.gu!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await Hb(n,r.toArray());n.gu=!0,await Yg(n.remoteStore,!0);for(const s of i)Od(n.remoteStore,s)}else if(e===!1&&n.gu!==!1){const r=[];let i=Promise.resolve();n.Iu.forEach((s,a)=>{n.sharedClientState.isLocalQueryTarget(a)?r.push(a):i=i.then(()=>(mo(n,a),co(n.localStore,a,!0))),ho(n.remoteStore,a)}),await i,await Hb(n,r),function(a){const o=K(a);o.Au.forEach((l,c)=>{ho(o.remoteStore,c)}),o.Ru.Jr(),o.Au=new Map,o.du=new Se(H.comparator)}(n),n.gu=!1,await Yg(n.remoteStore,!1)}}async function Hb(t,e,n){const r=K(t),i=[],s=[];for(const a of e){let o;const l=r.Iu.get(a);if(l&&l.length!==0){o=await Nf(r.localStore,ln(l[0]));for(const c of l){const h=r.Tu.get(c),d=await cL(r,h);d.snapshot&&s.push(d.snapshot)}}else{const c=await gx(r.localStore,a);o=await Nf(r.localStore,c),await iv(r,Mx(c),a,!1,o.resumeToken)}i.push(o)}return r.Pu.H_(s),i}function Mx(t){return vR(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function mL(t){return function(n){return K(K(n).persistence).Ts()}(K(t).localStore)}async function pL(t,e,n,r){const i=K(t);if(i.gu)return void B(Po,"Ignoring unexpected query state notification.");const s=i.Iu.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const a=await yx(i.localStore,wR(s[0])),o=Wu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ye.EMPTY_BYTE_STRING);await Hi(i,a,o);break}case"rejected":await co(i.localStore,e,!0),mo(i,e,r);break;default:$(64155,n)}}async function gL(t,e,n){const r=Vd(t);if(r.gu){for(const i of e){if(r.Iu.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){B(Po,"Adding an already active target "+i);continue}const s=await gx(r.localStore,i),a=await Nf(r.localStore,s);await iv(r,Mx(s),a.targetId,!1,a.resumeToken),Od(r.remoteStore,a)}for(const i of n)r.Iu.has(i)&&await co(r.localStore,i,!1).then(()=>{ho(r.remoteStore,i),mo(r,i)}).catch(zi)}}function Vd(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iL.bind(null,e),e.Pu.H_=K3.bind(null,e.eventManager),e.Pu.yu=Q3.bind(null,e.eventManager),e}function lv(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aL.bind(null,e),e}class bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return dx(this.persistence,new fx,e.initialUser,this.serializer)}Cu(e){return new H_(Dd.mi,this.serializer)}Du(e){return new bx}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bu.provider={build:()=>new bu};class yL extends bu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Q(this.persistence.referenceDelegate instanceof Df,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ax(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new H_(r=>Df.mi(r,n),this.serializer)}}class Lx extends bu{constructor(e,n,r){super(),this.xu=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await lv(this.xu.syncEngine),await Do(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return dx(this.persistence,new fx,e.initialUser,this.serializer)}Fu(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new ax(r,e.asyncQueue,n)}Mu(e,n){const r=new SM(n,this.persistence);return new AM(e.asyncQueue,r)}Cu(e){const n=hx(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new G_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,wx(),Rh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new bx}}class _L extends Lx{constructor(e,n){super(e,n,!1),this.xu=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.xu.syncEngine;this.sharedClientState instanceof gp&&(this.sharedClientState.syncEngine={Co:fL.bind(null,n),vo:pL.bind(null,n),Fo:gL.bind(null,n),Ts:mL.bind(null,n),Do:hL.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ji(async r=>{await dL(this.xu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Du(e){const n=wx();if(!gp.v(n))throw new q(L.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=hx(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new gp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class wu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fb(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lL.bind(null,this.syncEngine),await Yg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $3}()}createDatastore(e){const n=Nd(e.databaseInfo.databaseId),r=function(s){return new x3(s)}(e.databaseInfo);return function(s,a,o,l){return new P3(s,a,o,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,o){return new V3(r,i,s,a,o)}(this.localStore,this.datastore,e.asyncQueue,n=>Fb(this.syncEngine,n,0),function(){return Lb.v()?new Lb:new A3}())}createSyncEngine(e,n){return function(i,s,a,o,l,c,h){const d=new J3(i,s,a,o,l,c);return h&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=K(i);B(Ms,"RemoteStore shutting down."),s.Ea.add(5),await Zu(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}wu.provider={build:()=>new wu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Qe("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="FirestoreClient";class vL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Tt.UNAUTHENTICATED,this.clientId=b_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{B(ki,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B(ki,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Z_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _p(t,e){t.asyncQueue.verifyOperationInProgress(),B(ki,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await mx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await EL(t);B(ki,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jb(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>jb(e.remoteStore,i)),t._onlineComponents=e}async function EL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(ki,"Using user provided OfflineComponentProvider");try{await _p(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;cu("Error using user provided cache. Falling back to memory cache: "+n),await _p(t,new bu)}}else B(ki,"Using default OfflineComponentProvider"),await _p(t,new yL(void 0));return t._offlineComponents}async function cv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(ki,"Using user provided OnlineComponentProvider"),await Gb(t,t._uninitializedComponentsProvider._online)):(B(ki,"Using default OnlineComponentProvider"),await Gb(t,new wu))),t._onlineComponents}function TL(t){return cv(t).then(e=>e.syncEngine)}function bL(t){return cv(t).then(e=>e.datastore)}async function kf(t){const e=await cv(t),n=e.eventManager;return n.onListen=Z3.bind(null,e.syncEngine),n.onUnlisten=tL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=eL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nL.bind(null,e.syncEngine),n}function wL(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(s,a,o,l,c){const h=new uv({next:m=>{h.Nu(),a.enqueueAndForget(()=>tv(s,d));const g=m.docs.has(o);!g&&m.fromCache?c.reject(new q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&l&&l.source==="server"?c.reject(new q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),d=new rv(Yu(o.path),h,{includeMetadataChanges:!0,qa:!0});return ev(s,d)}(await kf(t),t.asyncQueue,e,n,r)),r.promise}function AL(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(s,a,o,l,c){const h=new uv({next:m=>{h.Nu(),a.enqueueAndForget(()=>tv(s,d)),m.fromCache&&l.source==="server"?c.reject(new q(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),d=new rv(o,h,{includeMetadataChanges:!0,qa:!0});return ev(s,d)}(await kf(t),t.asyncQueue,e,n,r)),r.promise}function SL(t,e,n){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await bL(t);r.resolve(async function(a,o,l){var x;const c=K(a),{request:h,gt:d,parent:m}=U6(c.serializer,h6(o),l);c.connection.$o||delete h.parent;const g=(await c.Ho("RunAggregationQuery",c.serializer.databaseId,m,h,1)).filter(C=>!!C.result);Q(g.length===1,64727);const w=(x=g[0].result)==null?void 0:x.aggregateFields;return Object.keys(w).reduce((C,v)=>(C[d[v]]=w[v],C),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL="firestore.googleapis.com",Kb=!0;class Qb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=IL,this.ssl=Kb}else this.host=e.host,this.ssl=e.ssl??Kb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tx;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sx)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}EM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ux(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hv{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hM;switch(r.type){case"firstParty":return new mM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$b.get(n);r&&(B("ComponentProvider","Removing Datastore"),$b.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if($u(n,qe._jsonSchema))return new qe(e,r||null,new H(fe.fromString(n.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:Ze("string",qe._jsonSchemaVersion),referencePath:Ze("string")};class Ri extends Ur{constructor(e,n,r){super(e,n,Yu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new H(e))}withConverter(e){return new Ri(this.firestore,e,this._path)}}function XB(t,e,...n){if(t=we(t),UI("collection","path",e),t instanceof hv){const r=fe.fromString(e,...n);return UT(r),new Ri(t,null,r)}{if(!(t instanceof qe||t instanceof Ri))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return UT(r),new Ri(t.firestore,null,r)}}function Au(t,e,...n){if(t=we(t),arguments.length===1&&(e=b_.newId()),UI("doc","path",e),t instanceof hv){const r=fe.fromString(e,...n);return LT(r),new qe(t,null,new H(r))}{if(!(t instanceof qe||t instanceof Ri))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return LT(r),new qe(t.firestore,t instanceof Ri?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="AsyncQueue";class Xb{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ax(this,"async_queue_retry"),this._c=()=>{const r=Rh();r&&B(Yb,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Rh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Rh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Cn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!qi(e))throw e;B(Yb,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Qe("INTERNAL UNHANDLED ERROR: ",Wb(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=J_.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&$(47125,{Pc:Wb(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Wb(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class er extends hv{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Xb,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xb(e),this._firestoreClient=void 0,await e}}}function RL(t,e,n){n||(n=Tf);const r=Bi(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(Ni(s,e))return i;throw new q(L.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new q(L.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sx)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&ji(e.host)&&f_(e.host),r.initialize({options:e,instanceIdentifier:n})}function ec(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||xL(t),t._firestoreClient}function xL(t){var r,i,s;const e=t._freezeSettings(),n=function(o,l,c,h){return new e6(o,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Ux(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new vL(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(o){const l=o==null?void 0:o._online.build();return{_offline:o==null?void 0:o._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class DL{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(Ye.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yn(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if($u(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:Ze("string",yn._jsonSchemaVersion),bytes:Ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yn._jsonSchemaVersion}}static fromJSON(e){if($u(e,Yn._jsonSchema))return new Yn(e.latitude,e.longitude)}}Yn._jsonSchemaVersion="firestore/geoPoint/1.0",Yn._jsonSchema={type:Ze("string",Yn._jsonSchemaVersion),latitude:Ze("number"),longitude:Ze("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if($u(e,Xn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Xn(e.vectorValues);throw new q(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xn._jsonSchemaVersion="firestore/vectorValue/1.0",Xn._jsonSchema={type:Ze("string",Xn._jsonSchemaVersion),vectorValues:Ze("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL=/^__.*__$/;class PL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Co(e,this.data,n,this.fieldTransforms)}}class jx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Bx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{Ac:t})}}class fv{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new fv({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Mf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Bx(this.Ac)&&NL.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class OL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nd(e)}Cc(e,n,r,i=!1){return new fv({Ac:e,methodName:n,Dc:r,path:Me.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ld(t){const e=t._freezeSettings(),n=Nd(t._databaseId);return new OL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zx(t,e,n,r,i,s={}){const a=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);mv("Data must be an object, but it was:",a,r);const o=qx(r,a);let l,c;if(s.merge)l=new Bt(a.fieldMask),c=a.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const m=Jg(e,d,n);if(!a.contains(m))throw new q(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Hx(h,m)||h.push(m)}l=new Bt(h),c=a.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=a.fieldTransforms;return new PL(new wt(o),l,c)}class Ud extends Md{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ud}}class dv extends Md{_toFieldTransform(e){return new OR(e.path,new ao)}isEqual(e){return e instanceof dv}}function VL(t,e,n,r){const i=t.Cc(1,e,n);mv("Data must be an object, but it was:",i,r);const s=[],a=wt.empty();Fi(r,(l,c)=>{const h=pv(e,l,n);c=we(c);const d=i.yc(h);if(c instanceof Ud)s.push(h);else{const m=tc(c,d);m!=null&&(s.push(h),a.set(h,m))}});const o=new Bt(s);return new jx(a,o,i.fieldTransforms)}function kL(t,e,n,r,i,s){const a=t.Cc(1,e,n),o=[Jg(e,r,n)],l=[i];if(s.length%2!=0)throw new q(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)o.push(Jg(e,s[m])),l.push(s[m+1]);const c=[],h=wt.empty();for(let m=o.length-1;m>=0;--m)if(!Hx(c,o[m])){const g=o[m];let w=l[m];w=we(w);const x=a.yc(g);if(w instanceof Ud)c.push(g);else{const C=tc(w,x);C!=null&&(c.push(g),h.set(g,C))}}const d=new Bt(c);return new jx(h,d,a.fieldTransforms)}function ML(t,e,n,r=!1){return tc(n,t.Cc(r?4:3,e))}function tc(t,e){if(Fx(t=we(t)))return mv("Unsupported field value:",e,t),qx(t,e);if(t instanceof Md)return function(r,i){if(!Bx(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const o of r){let l=tc(o,i.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return y6(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:uo(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uo(i.serializer,s)}}if(r instanceof Yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yn)return{bytesValue:BR(i.serializer,r._byteString)};if(r instanceof qe){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:j_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Xn)return function(a,o){return{mapValue:{fields:{[D_]:{stringValue:N_},[no]:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw o.Sc("VectorValues must only contain numeric values.");return V_(o.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${gd(r)}`)}(t,e)}function qx(t,e){const n={};return nR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(t,(r,i)=>{const s=tc(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Fx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof Yn||t instanceof yn||t instanceof qe||t instanceof Md||t instanceof Xn)}function mv(t,e,n){if(!Fx(n)||!jI(n)){const r=gd(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Jg(t,e,n){if((e=we(e))instanceof kd)return e._internalPath;if(typeof e=="string")return pv(t,e);throw Mf("Field path arguments must be of type string or ",t,!1,void 0,n)}const LL=new RegExp("[~\\*/\\[\\]]");function pv(t,e,n){if(e.search(LL)>=0)throw Mf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kd(...e.split("."))._internalPath}catch{throw Mf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mf(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let o=`Function ${e}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new q(L.INVALID_ARGUMENT,o+t+l)}function Hx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UL extends Gx{data(){return super.data()}}function jd(t,e){return typeof e=="string"?pv(t,e):e instanceof kd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gv{}class yv extends gv{}function WB(t,e,...n){let r=[];e instanceof gv&&r.push(e),r=r.concat(n),function(s){const a=s.filter(l=>l instanceof _v).length,o=s.filter(l=>l instanceof Bd).length;if(a>1||a>0&&o>0)throw new q(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Bd extends yv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bd(e,n,r)}_apply(e){const n=this._parse(e);return Kx(e._query,n),new Ur(e.firestore,e.converter,Ug(e._query,n))}_parse(e){const n=Ld(e.firestore);return function(s,a,o,l,c,h,d){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){ew(d,h);const w=[];for(const x of d)w.push(Zb(l,s,x));m={arrayValue:{values:w}}}else m=Zb(l,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||ew(d,h),m=ML(o,a,d,h==="in"||h==="not-in");return oe.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function JB(t,e,n){const r=e,i=jd("where",t);return Bd._create(i,r,n)}class _v extends gv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _v(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ye.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let a=i;const o=s.getFlattenedFilters();for(const l of o)Kx(a,l),a=Ug(a,l)}(e._query,n),new Ur(e.firestore,e.converter,Ug(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vv extends yv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vv(e,n)}_apply(e){const n=function(i,s,a){if(i.startAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Eu(s,a)}(e._query,this._field,this._direction);return new Ur(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new xo(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ZB(t,e="asc"){const n=e,r=jd("orderBy",t);return vv._create(r,n)}class Ev extends yv{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ev(e,n,r)}_apply(e){return new Ur(e.firestore,e.converter,Af(e._query,this._limit,this._limitType))}}function ez(t){return TM("limit",t),Ev._create("limit",t,"F")}function Zb(t,e,n){if(typeof(n=we(n))=="string"){if(n==="")throw new q(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ER(e)&&n.indexOf("/")!==-1)throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!H.isDocumentKey(r))throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _u(t,new H(r))}if(n instanceof qe)return _u(t,n._key);throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gd(n)}.`)}function ew(t,e){if(!Array.isArray(t)||t.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Kx(t,e){const n=function(i,s){for(const a of i)for(const o of a.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class jL{convertValue(e,n="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[no].arrayValue)==null?void 0:i.values)==null?void 0:s.map(a=>Ne(a.doubleValue));return new Xn(n)}convertGeoPoint(e){return new Yn(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gu(e));default:return null}}convertTimestamp(e){const n=Nr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);Q(YR(r),9688,{name:e});const i=new Ns(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Qe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function BL(){return new CL("count")}class _l{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ts extends Gx{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ts._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ts._jsonSchema={type:Ze("string",Ts._jsonSchemaVersion),bundleSource:Ze("string","DocumentSnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class xh extends Ts{data(e={}){return super.data(e)}}class bs{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _l(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xh(this._firestore,this._userDataWriter,r.key,r,new _l(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(o=>{const l=new xh(i._firestore,i._userDataWriter,o.doc.key,o.doc,new _l(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const l=new xh(i._firestore,i._userDataWriter,o.doc.key,o.doc,new _l(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return o.type!==0&&(c=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),h=a.indexOf(o.doc.key)),{type:zL(o.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=b_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tz(t){t=Ft(t,qe);const e=Ft(t.firestore,er);return wL(ec(e),t._key).then(n=>Yx(e,t,n))}bs._jsonSchemaVersion="firestore/querySnapshot/1.0",bs._jsonSchema={type:Ze("string",bs._jsonSchemaVersion),bundleSource:Ze("string","QuerySnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class zd extends jL{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function nz(t){t=Ft(t,Ur);const e=Ft(t.firestore,er),n=ec(e),r=new zd(e);return $x(t._query),AL(n,t._query).then(i=>new bs(e,r,t,i))}function qL(t,e,n){t=Ft(t,qe);const r=Ft(t.firestore,er),i=Qx(t.converter,e,n);return qd(r,[zx(Ld(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,It.none())])}function FL(t,e,n,...r){t=Ft(t,qe);const i=Ft(t.firestore,er),s=Ld(i);let a;return a=typeof(e=we(e))=="string"||e instanceof kd?kL(s,"updateDoc",t._key,e,n,r):VL(s,"updateDoc",t._key,e),qd(i,[a.toMutation(t._key,It.exists(!0))])}function rz(t){return qd(Ft(t.firestore,er),[new Rd(t._key,It.none())])}function iz(t,e){const n=Ft(t.firestore,er),r=Au(t),i=Qx(t.converter,e);return qd(n,[zx(Ld(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,It.exists(!1))]).then(()=>r)}function tw(t,...e){var l,c,h;t=we(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Jb(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Jb(e[r])){const d=e[r];e[r]=(l=d.next)==null?void 0:l.bind(d),e[r+1]=(c=d.error)==null?void 0:c.bind(d),e[r+2]=(h=d.complete)==null?void 0:h.bind(d)}let s,a,o;if(t instanceof qe)a=Ft(t.firestore,er),o=Yu(t._key.path),s={next:d=>{e[r]&&e[r](Yx(a,t,d))},error:e[r+1],complete:e[r+2]};else{const d=Ft(t,Ur);a=Ft(d.firestore,er),o=d._query;const m=new zd(a);s={next:g=>{e[r]&&e[r](new bs(a,m,d,g))},error:e[r+1],complete:e[r+2]},$x(t._query)}return function(m,g,w,x){const C=new uv(x),v=new rv(g,C,w);return m.asyncQueue.enqueueAndForget(async()=>ev(await kf(m),v)),()=>{C.Nu(),m.asyncQueue.enqueueAndForget(async()=>tv(await kf(m),v))}}(ec(a),o,i,s)}function qd(t,e){return function(r,i){const s=new Cn;return r.asyncQueue.enqueueAndForget(async()=>rL(await TL(r),i,s)),s.promise}(ec(t),e)}function Yx(t,e,n){const r=n.docs.get(e._key),i=new zd(t);return new Ts(t,i,e._key,r,new _l(n.hasPendingWrites,n.fromCache),e.converter)}function sz(t){return HL(t,{count:BL()})}function HL(t,e){const n=Ft(t.firestore,er),r=ec(n),i=JM(e,(s,a)=>new A6(a,s.aggregateType,s._internalFieldPath));return SL(r,t._query,i).then(s=>function(o,l,c){const h=new zd(o);return new DL(l,h,c)}(n,t,s))}class GL{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=YL(void 0),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function $L(t){return new GL(t)}class KL{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=wu.provider,this._offlineComponentProvider={build:n=>new Lx(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class QL{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=wu.provider,this._offlineComponentProvider={build:n=>new _L(n,e==null?void 0:e.cacheSizeBytes)}}}function YL(t){return new KL(t==null?void 0:t.forceOwnership)}function XL(){return new QL}function WL(){return new dv("serverTimestamp")}(function(e,n=!0){(function(i){Ro=i})(Gs),Nn(new Tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),o=new er(new fM(r.getProvider("auth-internal")),new pM(a,r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ns(c.options.projectId,h)}(a,i),a);return s={useFetchStreams:n,...s},o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),zt(OT,VT,e),zt(OT,VT,"esm2020")})();function Xx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JL=Xx,Wx=new Hs("auth","Firebase",Xx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new dd("@firebase/auth");function ZL(t,...e){Lf.logLevel<=ae.WARN&&Lf.warn(`Auth (${Gs}): ${t}`,...e)}function Ch(t,...e){Lf.logLevel<=ae.ERROR&&Lf.error(`Auth (${Gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,...e){throw Tv(t,...e)}function Wn(t,...e){return Tv(t,...e)}function Jx(t,e,n){const r={...JL(),[e]:n};return new Hs("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return Jx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wx.create(t,...e)}function X(t,e,...n){if(!t)throw Tv(e,...n)}function vr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ch(e),new Error(e)}function Or(t,e){t||vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function eU(){return nw()==="http:"||nw()==="https:"}function nw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tU(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eU()||JS()||"connection"in navigator)?navigator.onLine:!0}function nU(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Or(n>e,"Short delay should be less than long delay!"),this.isMobile=EV()||bV()}get(){return tU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t,e){Or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sU=new nc(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function rr(t,e,n,r,i={}){return eC(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=Gu({key:t.config.apiKey,...a}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return TV()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ji(t.emulatorConfig.host)&&(c.credentials="include"),Zx.fetch()(await tC(t,t.config.apiHost,n,o),c)})}async function eC(t,e,n){t._canInitEmulator=!1;const r={...rU,...e};try{const i=new oU(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Xc(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xc(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Xc(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Xc(t,"user-disabled",a);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Jx(t,h,c);Pn(t,h)}}catch(i){if(i instanceof bn)throw i;Pn(t,"network-request-failed",{message:String(i)})}}async function rc(t,e,n,r,i={}){const s=await rr(t,e,n,r,i);return"mfaPendingCredential"in s&&Pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function tC(t,e,n,r){const i=`${e}${n}?${r}`,s=t,a=s.config.emulator?bv(t.config,i):`${t.config.apiScheme}://${i}`;return iU.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function aU(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oU{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wn(this.auth,"network-request-failed")),sU.get())})}}function Xc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wn(t,e,r);return i.customData._tokenResponse=n,i}function rw(t){return t!==void 0&&t.enterprise!==void 0}class lU{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return aU(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uU(t,e){return rr(t,"GET","/v2/recaptchaConfig",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cU(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function Uf(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hU(t,e=!1){const n=we(t),r=await n.getIdToken(e),i=wv(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gl(vp(i.auth_time)),issuedAtTime:Gl(vp(i.iat)),expirationTime:Gl(vp(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vp(t){return Number(t)*1e3}function wv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ch("JWT malformed, contained fewer than 3 sections"),null;try{const i=GS(n);return i?JSON.parse(i):(Ch("Failed to decode base64 JWT payload"),null)}catch(i){return Ch("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function iw(t){const e=wv(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&fU(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fU({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dU{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gl(this.lastLoginAt),this.creationTime=Gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(t){var d;const e=t.auth,n=await t.getIdToken(),r=await po(t,Uf(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?nC(i.providerUserInfo):[],a=pU(t.providerData,s),o=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),c=o?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ey(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function mU(t){const e=we(t);await jf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pU(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nC(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gU(t,e){const n=await eC(t,{},async()=>{const r=Gu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=await tC(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:o,body:r};return t.emulatorConfig&&ji(t.emulatorConfig.host)&&(l.credentials="include"),Zx.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yU(t,e){return rr(t,"POST","/v2/accounts:revokeToken",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=iw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gU(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Ma;return r&&(X(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ma,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new dU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ey(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await po(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hU(this,e)}reload(){return mU(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await po(this,cU(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,o=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:m,isAnonymous:g,providerData:w,stsTokenManager:x}=n;X(d&&x,e,"internal-error");const C=Ma.fromJSON(this.name,x);X(typeof d=="string",e,"internal-error"),Qr(r,e.name),Qr(i,e.name),X(typeof m=="boolean",e,"internal-error"),X(typeof g=="boolean",e,"internal-error"),Qr(s,e.name),Qr(a,e.name),Qr(o,e.name),Qr(l,e.name),Qr(c,e.name),Qr(h,e.name);const v=new Rn({uid:d,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:g,photoURL:a,phoneNumber:s,tenantId:o,stsTokenManager:C,createdAt:c,lastLoginAt:h});return w&&Array.isArray(w)&&(v.providerData=w.map(y=>({...y}))),l&&(v._redirectEventId=l),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ma;i.updateFromServerResponse(n);const s=new Rn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jf(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?nC(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new Ma;o.updateFromIdToken(r);const l=new Rn({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ey(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new Map;function Er(t){Or(t instanceof Function,"Expected a class definition");let e=sw.get(t);return e?(Or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rC.type="NONE";const aw=rC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t,e,n){return`firebase:${t}:${e}:${n}`}class La{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dh(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dh("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Uf(this.auth,{idToken:e}).catch(()=>{});return n?Rn._fromGetAccountInfoResponse(this.auth,n,e):null}return Rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new La(Er(aw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Er(aw);const a=Dh(r,e.config.apiKey,e.name);let o=null;for(const c of n)try{const h=await c._get(a);if(h){let d;if(typeof h=="string"){const m=await Uf(e,{idToken:h}).catch(()=>{});if(!m)break;d=await Rn._fromGetAccountInfoResponse(e,m,h)}else d=Rn._fromJSON(e,h);c!==s&&(o=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new La(s,e,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new La(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uC(e))return"Blackberry";if(cC(e))return"Webos";if(sC(e))return"Safari";if((e.includes("chrome/")||aC(e))&&!e.includes("edge/"))return"Chrome";if(lC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iC(t=st()){return/firefox\//i.test(t)}function sC(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aC(t=st()){return/crios\//i.test(t)}function oC(t=st()){return/iemobile/i.test(t)}function lC(t=st()){return/android/i.test(t)}function uC(t=st()){return/blackberry/i.test(t)}function cC(t=st()){return/webos/i.test(t)}function Av(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _U(t=st()){var e;return Av(t)&&!!((e=window.navigator)!=null&&e.standalone)}function vU(){return wV()&&document.documentMode===10}function hC(t=st()){return Av(t)||lC(t)||cC(t)||uC(t)||/windows phone/i.test(t)||oC(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t,e=[]){let n;switch(t){case"Browser":n=ow(st());break;case"Worker":n=`${ow(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,o)=>{try{const l=e(s);a(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TU(t,e={}){return rr(t,"GET","/v2/passwordPolicy",jr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU=6;class wU{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??bU,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lw(this),this.idTokenSubscription=new lw(this),this.beforeStateQueue=new EU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await La.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Uf(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Zt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,o=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===o)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jf(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nU()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(Ar(this));const n=e?we(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TU(this),n=new wU(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yU(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await La.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ZL(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Gi(t){return we(t)}class lw{constructor(e){this.auth=e,this.observer=null,this.addObserver=CV(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SU(t){Fd=t}function dC(t){return Fd.loadJS(t)}function IU(){return Fd.recaptchaEnterpriseScript}function RU(){return Fd.gapiScript}function xU(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class CU{constructor(){this.enterprise=new DU}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class DU{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const NU="recaptcha-enterprise",mC="NO_RECAPTCHA";class PU{constructor(e){this.type=NU,this.auth=Gi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{uU(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const c=new lU(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,a(c.siteKey)}}).catch(l=>{o(l)})})}function i(s,a,o){const l=window.grecaptcha;rw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{a(c)}).catch(()=>{a(mC)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new CU().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&rw(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=IU();l.length!==0&&(l+=o),dC(l).then(()=>{i(o,s,a)}).catch(c=>{a(c)})}}).catch(o=>{a(o)})})}}async function uw(t,e,n,r=!1,i=!1){const s=new PU(t);let a;if(i)a=mC;else try{a=await s.verify(n)}catch{a=await s.verify(n,!0)}const o={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const l=o.phoneEnrollmentInfo.phoneNumber,c=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const l=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Bf(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await uw(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await uw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OU(t,e){const n=Bi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ni(s,e??{}))return i;Pn(i,"already-initialized")}return n.initialize({options:e})}function VU(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kU(t,e,n){const r=Gi(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=pC(e),{host:a,port:o}=MU(e),l=o===null?"":`:${o}`,c={url:`${s}//${a}${l}/`},h=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Ni(c,r.config.emulator)&&Ni(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,ji(a)?(f_(`${s}//${a}${l}`),XS("Auth",!0)):LU()}function pC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MU(t){const e=pC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cw(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:cw(a)}}}function cw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LU(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,n){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}async function UU(t,e){return rr(t,"POST","/v1/accounts:update",e)}async function jU(t,e){return rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BU(t,e){return rc(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}async function zU(t,e){return rr(t,"POST","/v1/accounts:sendOobCode",jr(t,e))}async function qU(t,e){return zU(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FU(t,e){return rc(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function HU(t,e){return rc(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends Sv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Su(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Su(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bf(e,n,"signInWithPassword",BU);case"emailLink":return FU(e,{email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bf(e,r,"signUpPassword",jU);case"emailLink":return HU(e,{idToken:n,email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(t,e){return rc(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GU="http://localhost";class Ls extends Sv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new Ls(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Ua(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ua(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ua(e,n)}buildRequest(){const e={requestUri:GU,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $U(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KU(t){const e=fl(dl(t)).link,n=e?fl(dl(e)).deep_link_id:null,r=fl(dl(t)).deep_link_id;return(r?fl(dl(r)).link:null)||r||n||e||t}class Iv{constructor(e){const n=fl(dl(e)),r=n.apiKey??null,i=n.oobCode??null,s=$U(n.mode??null);X(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=KU(e);try{return new Iv(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.providerId=Oo.PROVIDER_ID}static credential(e,n){return Su._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Iv.parseLink(n);return X(r,"argument-error"),Su._fromEmailAndCode(e,r.code,r.tenantId)}}Oo.PROVIDER_ID="password";Oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends gC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends ic{constructor(){super("facebook.com")}static credential(e){return Ls._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends ic{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ls._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return si.credential(n,r)}catch{return null}}}si.GOOGLE_SIGN_IN_METHOD="google.com";si.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends ic{constructor(){super("github.com")}static credential(e){return Ls._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.GITHUB_SIGN_IN_METHOD="github.com";ai.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends ic{constructor(){super("twitter.com")}static credential(e,n){return Ls._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return oi.credential(n,r)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QU(t,e){return rc(t,"POST","/v1/accounts:signUp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rn._fromIdTokenResponse(e,r,i),a=hw(r);return new Us({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hw(r);return new Us({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf extends bn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zf(e,n,r,i)}}function yC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zf._fromErrorAndOperation(t,s,e,r):s})}async function YU(t,e,n=!1){const r=await po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Us._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XU(t,e,n=!1){const{auth:r}=t;if(Zt(r.app))return Promise.reject(Ar(r));const i="reauthenticate";try{const s=await po(t,yC(r,i,e,t),n);X(s.idToken,r,"internal-error");const a=wv(s.idToken);X(a,r,"internal-error");const{sub:o}=a;return X(t.uid===o,r,"user-mismatch"),Us._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e,n=!1){if(Zt(t.app))return Promise.reject(Ar(t));const r="signIn",i=await yC(t,r,e),s=await Us._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function WU(t,e){return _C(Gi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t){const e=Gi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function az(t,e,n){const r=Gi(t);await Bf(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",qU)}async function JU(t,e,n){if(Zt(t.app))return Promise.reject(Ar(t));const r=Gi(t),a=await Bf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QU).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&vC(t),l}),o=await Us._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function ZU(t,e,n){return Zt(t.app)?Promise.reject(Ar(t)):WU(we(t),Oo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vC(t),r})}function oz(t,e){return e5(we(t),null,e)}async function e5(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(s.password=n);const a=await po(t,UU(r,s));await t._updateTokensIfNecessary(a,!0)}function t5(t,e,n,r){return we(t).onIdTokenChanged(e,n,r)}function n5(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function r5(t,e,n,r){return we(t).onAuthStateChanged(e,n,r)}function i5(t){return we(t).signOut()}const qf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qf,"1"),this.storage.removeItem(qf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s5=1e3,a5=10;class TC extends EC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);vU()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,a5):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},s5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TC.type="LOCAL";const o5=TC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC extends EC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bC.type="SESSION";const wC=bC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l5(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Hd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async c=>c(n.origin,s)),l=await l5(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u5{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const c=Rv("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(d){const m=d;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return window}function c5(t){Jn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function h5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f5(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function d5(){return AC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="firebaseLocalStorageDb",m5=1,Ff="firebaseLocalStorage",IC="fbase_key";class sc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gd(t,e){return t.transaction([Ff],e?"readwrite":"readonly").objectStore(Ff)}function p5(){const t=indexedDB.deleteDatabase(SC);return new sc(t).toPromise()}function ty(){const t=indexedDB.open(SC,m5);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ff,{keyPath:IC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ff)?e(r):(r.close(),await p5(),e(await ty()))})})}async function fw(t,e,n){const r=Gd(t,!0).put({[IC]:e,value:n});return new sc(r).toPromise()}async function g5(t,e){const n=Gd(t,!1).get(e),r=await new sc(n).toPromise();return r===void 0?null:r.value}function dw(t,e){const n=Gd(t,!0).delete(e);return new sc(n).toPromise()}const y5=800,_5=3;class RC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ty(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_5)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hd._getInstance(d5()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await h5(),!this.activeServiceWorker)return;this.sender=new u5(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ty();return await fw(e,qf,"1"),await dw(e,qf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>g5(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gd(i,!1).getAll();return new sc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RC.type="LOCAL";const v5=RC;new nc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E5(t,e){return e?Er(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv extends Sv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ua(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ua(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ua(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function T5(t){return _C(t.auth,new xv(t),t.bypassAuthState)}function b5(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),XU(n,new xv(t),t.bypassAuthState)}async function w5(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),YU(n,new xv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T5;case"linkViaPopup":case"linkViaRedirect":return w5;case"reauthViaPopup":case"reauthViaRedirect":return b5;default:Pn(this.auth,"internal-error")}}resolve(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A5=new nc(2e3,1e4);class Ia extends xC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ia.currentPopupAction&&Ia.currentPopupAction.cancel(),Ia.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const e=Rv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ia.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A5.get())};e()}}Ia.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S5="pendingRedirect",Nh=new Map;class I5 extends xC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Nh.get(this.auth._key());if(!e){try{const r=await R5(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Nh.set(this.auth._key(),e)}return this.bypassAuthState||Nh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R5(t,e){const n=D5(e),r=C5(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function x5(t,e){Nh.set(t._key(),e)}function C5(t){return Er(t._redirectPersistence)}function D5(t){return Dh(S5,t.config.apiKey,t.name)}async function N5(t,e,n=!1){if(Zt(t.app))return Promise.reject(Ar(t));const r=Gi(t),i=E5(r,e),a=await new I5(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P5=10*60*1e3;class O5{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!V5(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!CC(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=P5&&this.cachedEventUids.clear(),this.cachedEventUids.has(mw(e))}saveEventToCache(e){this.cachedEventUids.add(mw(e)),this.lastProcessedEventTime=Date.now()}}function mw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function CC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function V5(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return CC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k5(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L5=/^https?/;async function U5(t){if(t.config.emulator)return;const{authorizedDomains:e}=await k5(t);for(const n of e)try{if(j5(n))return}catch{}Pn(t,"unauthorized-domain")}function j5(t){const e=Zg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!L5.test(n))return!1;if(M5.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B5=new nc(3e4,6e4);function pw(){const t=Jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function z5(t){return new Promise((e,n)=>{var i,s,a;function r(){pw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pw(),n(Wn(t,"network-request-failed"))},timeout:B5.get()})}if((s=(i=Jn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=Jn().gapi)!=null&&a.load)r();else{const o=xU("iframefcb");return Jn()[o]=()=>{gapi.load?r():n(Wn(t,"network-request-failed"))},dC(`${RU()}?onload=${o}`).catch(l=>n(l))}}).catch(e=>{throw Ph=null,e})}let Ph=null;function q5(t){return Ph=Ph||z5(t),Ph}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F5=new nc(5e3,15e3),H5="__/auth/iframe",G5="emulator/auth/iframe",$5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},K5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Q5(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bv(e,G5):`https://${t.config.authDomain}/${H5}`,r={apiKey:e.apiKey,appName:t.name,v:Gs},i=K5.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Gu(r).slice(1)}`}async function Y5(t){const e=await q5(t),n=Jn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:Q5(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$5,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Wn(t,"network-request-failed"),o=Jn().setTimeout(()=>{s(a)},F5.get());function l(){Jn().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X5={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W5=500,J5=600,Z5="_blank",e9="http://localhost";class gw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t9(t,e,n,r=W5,i=J5){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l={...X5,width:r.toString(),height:i.toString(),top:s,left:a},c=st().toLowerCase();n&&(o=aC(c)?Z5:n),iC(c)&&(e=e||e9,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[g,w])=>`${m}${g}=${w},`,"");if(_U(c)&&o!=="_self")return n9(e||"",o),new gw(null);const d=window.open(e||"",o,h);X(d,t,"popup-blocked");try{d.focus()}catch{}return new gw(d)}function n9(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r9="__/auth/handler",i9="emulator/auth/handler",s9=encodeURIComponent("fac");async function yw(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gs,eventId:i};if(e instanceof gC){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",xV(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))a[h]=d}if(e instanceof ic){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(a.scopes=h.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const h of Object.keys(o))o[h]===void 0&&delete o[h];const l=await t._getAppCheckToken(),c=l?`#${s9}=${encodeURIComponent(l)}`:"";return`${a9(t)}?${Gu(o).slice(1)}${c}`}function a9({config:t}){return t.emulator?bv(t,i9):`https://${t.authDomain}/${r9}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="webStorageSupport";class o9{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wC,this._completeRedirectFn=N5,this._overrideRedirectResult=x5}async _openPopup(e,n,r,i){var a;Or((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await yw(e,n,r,Zg(),i);return t9(e,s,Rv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yw(e,n,r,Zg(),i);return c5(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Y5(e),r=new O5(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ep,{type:Ep},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[Ep];s!==void 0&&n(!!s),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=U5(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hC()||sC()||Av()}}const l9=o9;var _w="@firebase/auth",vw="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c9(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function h9(t){Nn(new Tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;X(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fC(t)},c=new AU(r,i,s,l);return VU(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new Tn("auth-internal",e=>{const n=Gi(e.getProvider("auth").getImmediate());return(r=>new u9(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(_w,vw,c9(t)),zt(_w,vw,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f9=5*60,d9=YS("authIdTokenMaxAge")||f9;let Ew=null;const m9=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>d9)return;const i=n==null?void 0:n.token;Ew!==i&&(Ew=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function p9(t=p_()){const e=Bi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OU(t,{popupRedirectResolver:l9,persistence:[v5,o5,wC]}),r=YS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=m9(s.toString());n5(n,a,()=>a(n.currentUser)),t5(n,o=>a(o))}}const i=KS("auth");return i&&kU(n,`http://${i}`),n}function g9(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}SU({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",g9().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});h9("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="firebasestorage.googleapis.com",NC="storageBucket",y9=2*60*1e3,_9=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends bn{constructor(e,n,r=0){super(Tp(e),`Firebase Storage: ${n} (${Tp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,He.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function Tp(t){return"storage/"+t}function Cv(){const t="An unknown error occurred, please check the error payload for server response.";return new He(Fe.UNKNOWN,t)}function v9(t){return new He(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function E9(t){return new He(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function T9(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new He(Fe.UNAUTHENTICATED,t)}function b9(){return new He(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w9(t){return new He(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function A9(){return new He(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function S9(){return new He(Fe.CANCELED,"User canceled the upload/download.")}function I9(t){return new He(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function R9(t){return new He(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function x9(){return new He(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+NC+"' property when initializing the app?")}function C9(){return new He(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function D9(){return new He(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function N9(t){return new He(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ny(t){return new He(Fe.INVALID_ARGUMENT,t)}function PC(){return new He(Fe.APP_DELETED,"The Firebase app was deleted.")}function P9(t){return new He(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $l(t,e){return new He(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ol(t){throw new He(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=tn.makeFromUrl(e,n)}catch{return new tn(e,"")}if(r.path==="")return r;throw R9(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+i+a,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${i}/o${m}`,"i"),w={bucket:1,path:3},x=n===DC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",v=new RegExp(`^https?://${x}/${i}/${C}`,"i"),T=[{regex:o,indices:l,postModify:s},{regex:g,indices:w,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<T.length;N++){const U=T[N],z=U.regex.exec(e);if(z){const b=z[U.indices.bucket];let E=z[U.indices.path];E||(E=""),r=new tn(b,E),U.postModify(r);break}}if(r==null)throw I9(e);return r}}class O9{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V9(t,e,n){let r=1,i=null,s=null,a=!1,o=0;function l(){return o===2}let c=!1;function h(...C){c||(c=!0,e.apply(null,C))}function d(C){i=setTimeout(()=>{i=null,t(g,l())},C)}function m(){s&&clearTimeout(s)}function g(C,...v){if(c){m();return}if(C){m(),h.call(null,C,...v);return}if(l()||a){m(),h.call(null,C,...v);return}r<64&&(r*=2);let T;o===1?(o=2,T=0):T=(r+Math.random())*1e3,d(T)}let w=!1;function x(C){w||(w=!0,m(),!c&&(i!==null?(C||(o=2),clearTimeout(i),d(0)):C||(o=1)))}return d(0),s=setTimeout(()=>{a=!0,x(!0)},n),x}function k9(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M9(t){return t!==void 0}function L9(t){return typeof t=="object"&&!Array.isArray(t)}function Dv(t){return typeof t=="string"||t instanceof String}function Tw(t){return Nv()&&t instanceof Blob}function Nv(){return typeof Blob<"u"}function bw(t,e,n,r){if(r<e)throw ny(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ny(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function OC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ws;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ws||(ws={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U9(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j9{constructor(e,n,r,i,s,a,o,l,c,h,d,m=!0,g=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=d,this.retry=m,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,x)=>{this.resolve_=w,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Wc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=o=>{const l=o.loaded,c=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const o=s.getErrorCode()===ws.NO_ERROR,l=s.getStatus();if(!o||U9(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===ws.ABORT;r(!1,new Wc(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Wc(c,s))})},n=(r,i)=>{const s=this.resolve_,a=this.reject_,o=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(o,o.getResponse());M9(l)?s(l):s()}catch(l){a(l)}else if(o!==null){const l=Cv();l.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,l)):a(l)}else if(i.canceled){const l=this.appDelete_?PC():S9();a(l)}else{const l=A9();a(l)}};this.canceled_?n(!1,new Wc(!1,null,!0)):this.backoffId_=V9(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&k9(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function B9(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function z9(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function q9(t,e){e&&(t["X-Firebase-GMPID"]=e)}function F9(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function H9(t,e,n,r,i,s,a=!0,o=!1){const l=OC(t.urlParams),c=t.url+l,h=Object.assign({},t.headers);return q9(h,e),B9(h,n),z9(h,s),F9(h,r),new j9(c,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,a,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G9(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $9(...t){const e=G9();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Nv())return new Blob(t);throw new He(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function K9(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q9(t){if(typeof atob>"u")throw N9("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class bp{constructor(e,n){this.data=e,this.contentType=n||null}}function Y9(t,e){switch(t){case Hn.RAW:return new bp(VC(e));case Hn.BASE64:case Hn.BASE64URL:return new bp(kC(t,e));case Hn.DATA_URL:return new bp(W9(e),J9(e))}throw Cv()}function VC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,a=t.charCodeAt(++n);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function X9(t){let e;try{e=decodeURIComponent(t)}catch{throw $l(Hn.DATA_URL,"Malformed data URL.")}return VC(e)}function kC(t,e){switch(t){case Hn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw $l(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Hn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw $l(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Q9(e)}catch(i){throw i.message.includes("polyfill")?i:$l(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class MC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw $l(Hn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Z9(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function W9(t){const e=new MC(t);return e.base64?kC(Hn.BASE64,e.rest):X9(e.rest)}function J9(t){return new MC(t).contentType}function Z9(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){let r=0,i="";Tw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Tw(this.data_)){const r=this.data_,i=K9(r,e,n);return i===null?null:new li(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new li(r,!0)}}static getBlob(...e){if(Nv()){const n=e.map(r=>r instanceof li?r.data_:r);return new li($9.apply(null,n))}else{const n=e.map(a=>Dv(a)?Y9(Hn.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(a=>{for(let o=0;o<a.length;o++)i[s++]=a[o]}),new li(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){let e;try{e=JSON.parse(t)}catch{return null}return L9(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e8(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function t8(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function UC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n8(t,e){return e}class Nt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||n8}}let Jc=null;function r8(t){return!Dv(t)||t.length<2?t:UC(t)}function jC(){if(Jc)return Jc;const t=[];t.push(new Nt("bucket")),t.push(new Nt("generation")),t.push(new Nt("metageneration")),t.push(new Nt("name","fullPath",!0));function e(s,a){return r8(a)}const n=new Nt("name");n.xform=e,t.push(n);function r(s,a){return a!==void 0?Number(a):a}const i=new Nt("size");return i.xform=r,t.push(i),t.push(new Nt("timeCreated")),t.push(new Nt("updated")),t.push(new Nt("md5Hash",null,!0)),t.push(new Nt("cacheControl",null,!0)),t.push(new Nt("contentDisposition",null,!0)),t.push(new Nt("contentEncoding",null,!0)),t.push(new Nt("contentLanguage",null,!0)),t.push(new Nt("contentType",null,!0)),t.push(new Nt("metadata","customMetadata",!0)),Jc=t,Jc}function i8(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new tn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function s8(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const a=n[s];r[a.local]=a.xform(r,e[a.server])}return i8(r,t),r}function BC(t,e,n){const r=LC(e);return r===null?null:s8(t,r,n)}function a8(t,e,n,r){const i=LC(e);if(i===null||!Dv(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,d=t.fullPath,m="/b/"+a(h)+"/o/"+a(d),g=$d(m,n,r),w=OC({alt:"media",token:c});return g+w})[0]}function o8(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Pv{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t){if(!t)throw Cv()}function l8(t,e){function n(r,i){const s=BC(t,i,e);return zC(s!==null),s}return n}function u8(t,e){function n(r,i){const s=BC(t,i,e);return zC(s!==null),a8(s,i,t.host,t._protocol)}return n}function qC(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=b9():i=T9():n.getStatus()===402?i=E9(t.bucket):n.getStatus()===403?i=w9(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function FC(t){const e=qC(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=v9(t.path)),s.serverResponse=i.serverResponse,s}return n}function c8(t,e,n){const r=e.fullServerUrl(),i=$d(r,t.host,t._protocol),s="GET",a=t.maxOperationRetryTime,o=new Pv(i,s,u8(t,n),a);return o.errorHandler=FC(e),o}function h8(t,e){const n=e.fullServerUrl(),r=$d(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function a(l,c){}const o=new Pv(r,i,a,s);return o.successCodes=[200,204],o.errorHandler=FC(e),o}function f8(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function d8(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=f8(null,e)),r}function m8(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function o(){let T="";for(let N=0;N<2;N++)T=T+Math.random().toString().slice(2);return T}const l=o();a["Content-Type"]="multipart/related; boundary="+l;const c=d8(e,r,i),h=o8(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+l+"--",g=li.getBlob(d,r,m);if(g===null)throw C9();const w={name:c.fullPath},x=$d(s,t.host,t._protocol),C="POST",v=t.maxUploadRetryTime,y=new Pv(x,C,l8(t,n),v);return y.urlParams=w,y.headers=a,y.body=g.uploadData(),y.errorHandler=qC(e),y}class p8{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ws.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ws.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ws.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw ol("cannot .send() more than once");if(ji(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ol("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ol("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ol("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ol("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class g8 extends p8{initXhr(){this.xhr_.responseType="text"}}function Ov(){return new g8}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this._service=e,n instanceof tn?this._location=n:this._location=tn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new js(e,n)}get root(){const e=new tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return UC(this._location.path)}get storage(){return this._service}get parent(){const e=e8(this._location.path);if(e===null)return null;const n=new tn(this._location.bucket,e);return new js(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw P9(e)}}function y8(t,e,n){t._throwIfRoot("uploadBytes");const r=m8(t.storage,t._location,jC(),new li(e,!0),n);return t.storage.makeRequestWithTokens(r,Ov).then(i=>({metadata:i,ref:t}))}function _8(t){t._throwIfRoot("getDownloadURL");const e=c8(t.storage,t._location,jC());return t.storage.makeRequestWithTokens(e,Ov).then(n=>{if(n===null)throw D9();return n})}function v8(t){t._throwIfRoot("deleteObject");const e=h8(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ov)}function E8(t,e){const n=t8(t._location.path,e),r=new tn(t._location.bucket,n);return new js(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T8(t){return/^[A-Za-z]+:\/\//.test(t)}function b8(t,e){return new js(t,e)}function HC(t,e){if(t instanceof Vv){const n=t;if(n._bucket==null)throw x9();const r=new js(n,n._bucket);return e!=null?HC(r,e):r}else return e!==void 0?E8(t,e):t}function w8(t,e){if(e&&T8(e)){if(t instanceof Vv)return b8(t,e);throw ny("To use ref(service, url), the first argument must be a Storage instance.")}else return HC(t,e)}function ww(t,e){const n=e==null?void 0:e[NC];return n==null?null:tn.makeFromBucketSpec(n,t)}function A8(t,e,n,r={}){t.host=`${e}:${n}`;const i=ji(e);i&&(f_(`https://${t.host}/b`),XS("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:yV(s,t.app.options.projectId))}class Vv{constructor(e,n,r,i,s,a=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=a,this._bucket=null,this._host=DC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=y9,this._maxUploadRetryTime=_9,this._requests=new Set,i!=null?this._bucket=tn.makeFromBucketSpec(i,this._host):this._bucket=ww(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tn.makeFromBucketSpec(this._url,e):this._bucket=ww(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new js(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new O9(PC());{const a=H9(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Aw="@firebase/storage",Sw="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="storage";function lz(t,e,n){return t=we(t),y8(t,e,n)}function uz(t){return t=we(t),_8(t)}function cz(t){return t=we(t),v8(t)}function hz(t,e){return t=we(t),w8(t,e)}function S8(t=p_(),e){t=we(t);const r=Bi(t,GC).getImmediate({identifier:e}),i=pV("storage");return i&&I8(r,...i),r}function I8(t,e,n,r={}){A8(t,e,n,r)}function R8(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Vv(n,r,i,e,Gs)}function x8(){Nn(new Tn(GC,R8,"PUBLIC").setMultipleInstances(!0)),zt(Aw,Sw,""),zt(Aw,Sw,"esm2020")}x8();const C8={apiKey:"AIzaSyAr9IEL0ylviKTPflup9A39883GM5EGMxQ",authDomain:"project1-d9e1a.firebaseapp.com",projectId:"project1-d9e1a",storageBucket:"project1-d9e1a.appspot.com",messagingSenderId:"776904102098",appId:"1:776904102098:web:8c826b983a51aa65d75d0b",measurementId:"G-D9WPYHYJ0R"},Kd=sI(C8);aM(Kd);const Hf=RL(Kd,{localCache:$L({tabManager:XL()})}),go=p9(Kd),fz=S8(Kd),$C=D.createContext();function ac(){return D.useContext($C)}function D8({children:t}){const[e,n]=D.useState(null),[r,i]=D.useState(null),[s,a]=D.useState(null),[o,l]=D.useState(!0);D.useEffect(()=>{const h=r5(go,d=>{if(d){const m=Au(Hf,"users",d.uid),g=Au(Hf,"requests",d.uid);let w=null;const x=tw(m,C=>{if(C.exists()){w&&(w(),w=null);const v=C.data();a(v),i(v.role||"student"),n(d),l(!1)}else w||(w=tw(g,v=>{if(v.exists()){const y=v.data();a({...y,isPending:y.status==="pending",isRejected:y.status==="rejected"}),i(y.role_requested||"student")}else a(null),i(null);n(d),l(!1)}))},C=>{console.error("Error fetching user data:",C),n(d),l(!1)});return()=>{x(),w&&w()}}else n(null),i(null),a(null),l(!1)});return()=>h()},[]);const c={currentUser:e,userRole:r,userData:s,loading:o};return I.jsx($C.Provider,{value:c,children:!o&&t})}const KC=D.createContext();function dz(){return D.useContext(KC)}const Oh={"light-professional":{name:"Light Professional",emoji:"☀️",vars:{"--bg":"#fafaf9","--bg-card":"#ffffff","--bg-secondary":"#f5f5f4","--text":"#1c1917","--text-muted":"#78716c","--text-inverted":"#ffffff","--border":"#e7e5e4","--border-hover":"#d6d3d1","--primary":"#4f46e5","--primary-hover":"#4338ca","--primary-light":"#eef2ff","--accent":"#10b981","--sidebar-bg":"#ffffff","--topbar-bg":"rgba(255,255,255,0.8)","--shadow":"0 1px 3px rgba(0,0,0,0.04)","--input-bg":"#ffffff"}},"dark-mode":{name:"Dark Mode",emoji:"🌙",vars:{"--bg":"#0f0f0f","--bg-card":"#1a1a1a","--bg-secondary":"#262626","--text":"#fafaf9","--text-muted":"#a8a29e","--text-inverted":"#1c1917","--border":"#333333","--border-hover":"#444444","--primary":"#818cf8","--primary-hover":"#6366f1","--primary-light":"#1e1b4b","--accent":"#34d399","--sidebar-bg":"#141414","--topbar-bg":"rgba(15,15,15,0.85)","--shadow":"0 1px 3px rgba(0,0,0,0.3)","--input-bg":"#262626"}},"midnight-blue":{name:"Midnight Blue",emoji:"🌊",vars:{"--bg":"#0b1120","--bg-card":"#111827","--bg-secondary":"#1e293b","--text":"#e2e8f0","--text-muted":"#94a3b8","--text-inverted":"#0f172a","--border":"#1e3a5f","--border-hover":"#2563eb","--primary":"#3b82f6","--primary-hover":"#2563eb","--primary-light":"#172554","--accent":"#38bdf8","--sidebar-bg":"#0f172a","--topbar-bg":"rgba(11,17,32,0.9)","--shadow":"0 1px 3px rgba(0,0,0,0.4)","--input-bg":"#1e293b"}},"emerald-green":{name:"Emerald Green",emoji:"🌿",vars:{"--bg":"#f0fdf4","--bg-card":"#ffffff","--bg-secondary":"#dcfce7","--text":"#14532d","--text-muted":"#4ade80","--text-inverted":"#ffffff","--border":"#bbf7d0","--border-hover":"#86efac","--primary":"#059669","--primary-hover":"#047857","--primary-light":"#d1fae5","--accent":"#10b981","--sidebar-bg":"#f0fdf4","--topbar-bg":"rgba(240,253,244,0.85)","--shadow":"0 1px 3px rgba(0,80,40,0.06)","--input-bg":"#ffffff"}},"royal-purple":{name:"Royal Purple",emoji:"👑",vars:{"--bg":"#0d0520","--bg-card":"#1a0a33","--bg-secondary":"#2d1b54","--text":"#e9d5ff","--text-muted":"#c084fc","--text-inverted":"#1a0a33","--border":"#3b1f6e","--border-hover":"#7c3aed","--primary":"#8b5cf6","--primary-hover":"#7c3aed","--primary-light":"#2e1065","--accent":"#a78bfa","--sidebar-bg":"#110830","--topbar-bg":"rgba(13,5,32,0.9)","--shadow":"0 1px 3px rgba(80,0,120,0.3)","--input-bg":"#2d1b54"}},"sunset-orange":{name:"Sunset Orange",emoji:"🌅",vars:{"--bg":"#fffbeb","--bg-card":"#ffffff","--bg-secondary":"#fef3c7","--text":"#78350f","--text-muted":"#b45309","--text-inverted":"#ffffff","--border":"#fde68a","--border-hover":"#fbbf24","--primary":"#ea580c","--primary-hover":"#c2410c","--primary-light":"#ffedd5","--accent":"#f59e0b","--sidebar-bg":"#fffbeb","--topbar-bg":"rgba(255,251,235,0.85)","--shadow":"0 1px 3px rgba(120,50,0,0.06)","--input-bg":"#ffffff"}},"minimal-beige":{name:"Minimal Beige",emoji:"🏛️",vars:{"--bg":"#faf8f5","--bg-card":"#ffffff","--bg-secondary":"#f5f0ea","--text":"#3d3529","--text-muted":"#8a7e6e","--text-inverted":"#ffffff","--border":"#e6dfd4","--border-hover":"#d4c8b8","--primary":"#8b6f47","--primary-hover":"#725a38","--primary-light":"#f5f0ea","--accent":"#a78a5c","--sidebar-bg":"#faf8f5","--topbar-bg":"rgba(250,248,245,0.85)","--shadow":"0 1px 3px rgba(60,50,30,0.05)","--input-bg":"#ffffff"}},"high-contrast":{name:"High Contrast",emoji:"♿",vars:{"--bg":"#000000","--bg-card":"#111111","--bg-secondary":"#1a1a1a","--text":"#ffffff","--text-muted":"#cccccc","--text-inverted":"#000000","--border":"#555555","--border-hover":"#ffffff","--primary":"#ffff00","--primary-hover":"#ffcc00","--primary-light":"#333300","--accent":"#00ff88","--sidebar-bg":"#0a0a0a","--topbar-bg":"rgba(0,0,0,0.95)","--shadow":"0 1px 3px rgba(255,255,255,0.1)","--input-bg":"#1a1a1a"}},"corporate-gray":{name:"Corporate Gray",emoji:"🏢",vars:{"--bg":"#f8f9fa","--bg-card":"#ffffff","--bg-secondary":"#e9ecef","--text":"#212529","--text-muted":"#6c757d","--text-inverted":"#ffffff","--border":"#dee2e6","--border-hover":"#adb5bd","--primary":"#495057","--primary-hover":"#343a40","--primary-light":"#e9ecef","--accent":"#0d6efd","--sidebar-bg":"#f8f9fa","--topbar-bg":"rgba(248,249,250,0.85)","--shadow":"0 1px 3px rgba(0,0,0,0.04)","--input-bg":"#ffffff"}},"neon-tech":{name:"Neon Tech",emoji:"💜",vars:{"--bg":"#0a0a0f","--bg-card":"#12121a","--bg-secondary":"#1a1a2e","--text":"#e0e0ff","--text-muted":"#7b7bff","--text-inverted":"#0a0a0f","--border":"#2a2a4a","--border-hover":"#00f0ff","--primary":"#00f0ff","--primary-hover":"#00c4cc","--primary-light":"#0a2a2e","--accent":"#ff00ff","--sidebar-bg":"#0d0d14","--topbar-bg":"rgba(10,10,15,0.9)","--shadow":"0 0 12px rgba(0,240,255,0.08)","--input-bg":"#1a1a2e"}}},N8="light-professional";function Zc(t){const e=Oh[t];if(!e)return;const n=document.documentElement;Object.entries(e.vars).forEach(([r,i])=>{n.style.setProperty(r,i)})}function P8({children:t}){const{currentUser:e,userData:n}=ac(),[r,i]=D.useState(()=>localStorage.getItem("erp-theme")||N8);D.useEffect(()=>{n!=null&&n.theme&&Oh[n.theme]?(i(n.theme),Zc(n.theme),localStorage.setItem("erp-theme",n.theme)):Zc(r)},[n]),D.useEffect(()=>{Zc(r)},[r]);const s=D.useCallback(async a=>{if(Oh[a]&&(i(a),Zc(a),localStorage.setItem("erp-theme",a),e))try{await FL(Au(Hf,"users",e.uid),{theme:a})}catch(o){console.error("Failed to persist theme:",o)}},[e]);return I.jsx(KC.Provider,{value:{theme:r,setTheme:s,themes:Oh},children:t})}/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=t=>{const e=V8(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k8={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=D.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...o},l)=>D.createElement("svg",{ref:l,...k8,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:QC("lucide",i),...!s&&!M8(o)&&{"aria-hidden":"true"},...o},[...a.map(([c,h])=>D.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=(t,e)=>{const n=D.forwardRef(({className:r,...i},s)=>D.createElement(L8,{ref:s,iconNode:e,className:QC(`lucide-${O8(Iw(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Iw(t),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],YC=Ie("bell",U8);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Iu=Ie("book-open",j8);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],z8=Ie("calendar-check",B8);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]],F8=Ie("calendar-clock",q8);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],G8=Ie("chart-column",H8);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],K8=Ie("chevron-left",$8);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Y8=Ie("chevron-right",Q8);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],W8=Ie("clipboard-list",X8);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Z8=Ie("dollar-sign",J8);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],tj=Ie("file-text",ej);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],rj=Ie("graduation-cap",nj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],sj=Ie("history",ij);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],oj=Ie("layout-dashboard",aj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],uj=Ie("loader-circle",lj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],XC=Ie("lock",cj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],fj=Ie("log-out",hj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],WC=Ie("mail",dj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],pj=Ie("menu",mj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],yj=Ie("network",gj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],vj=Ie("search",_j);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Tj=Ie("settings",Ej);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Rw=Ie("shield-alert",bj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Aj=Ie("shield-check",wj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ij=Ie("user-check",Sj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],xj=Ie("user",Rj);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Dj=Ie("users",Cj),Nj=[{label:"Dashboard",icon:oj,path:"/",roles:["admin","staff","student"]},{label:"Academic Structure",icon:yj,path:"/academic-structure",roles:["admin"]},{label:"User Management",icon:Ij,path:"/users",roles:["admin"]},{label:"Audit Logs",icon:sj,path:"/audit-logs",roles:["admin"]},{label:"Timetable",icon:F8,path:"/timetable",roles:["admin","staff","student"]},{label:"Student Records",icon:rj,path:"/students",roles:["admin","staff"]},{label:"My Academic Profile",icon:xj,path:"/my-profile",roles:["student"]},{label:"Attendance",icon:z8,path:"/attendance",roles:["admin","staff","student"]},{label:"Assignments",icon:W8,path:"/assignments",roles:["admin","staff","student"]},{label:"Requests",icon:tj,path:"/requests",roles:["admin","staff","student"]},{label:"Announcements",icon:YC,path:"/announcements",roles:["admin","staff","student"]},{label:"Finance",icon:Z8,path:"/finance",roles:["admin","staff"]},{label:"Staff Directory",icon:Dj,path:"/staff",roles:["admin","staff","student"]},{label:"Reports",icon:G8,path:"/reports",roles:["admin","staff"]},{label:"Settings",icon:Tj,path:"/settings",roles:["admin","staff","student"]}];function Pj({collapsed:t,setCollapsed:e}){var c,h;const n=o_(),{userRole:r,userData:i}=ac(),s=r||"student",a=Nj.filter(d=>d.roles.includes(s)),o=async()=>{try{await i5(go),n("/login")}catch(d){console.error("Logout error:",d)}},l=((h=(c=i==null?void 0:i.name)==null?void 0:c.charAt(0))==null?void 0:h.toUpperCase())||"U";return I.jsxs(I.Fragment,{children:[I.jsx("div",{className:`fixed inset-0 z-40 lg:hidden ${t?"hidden":"block"}`,style:{backgroundColor:"rgba(0,0,0,0.3)"},onClick:()=>e(!0)}),I.jsxs("aside",{className:`fixed top-0 left-0 z-50 h-screen flex flex-col transition-all duration-300 ease-out ${t?"w-[72px]":"w-64"} lg:relative lg:z-auto ${t?"-translate-x-full lg:translate-x-0":"translate-x-0"}`,style:{backgroundColor:"var(--sidebar-bg)",borderRight:"1px solid var(--border)",transition:"background-color 0.3s ease, border-color 0.3s ease"},children:[I.jsxs("div",{className:"flex items-center gap-3 px-5 h-16 shrink-0",style:{borderBottom:"1px solid var(--border)"},children:[I.jsx("div",{className:"w-8 h-8 rounded-xl flex items-center justify-center shrink-0",style:{background:"linear-gradient(135deg, var(--primary), var(--accent))"},children:I.jsx(Iu,{className:"w-4 h-4",style:{color:"var(--text-inverted)"}})}),!t&&I.jsx("span",{className:"font-bold text-lg whitespace-nowrap animate-fade-in",style:{color:"var(--text)"},children:"ERP Portal"})]}),I.jsx("nav",{className:"flex-1 py-4 px-3 space-y-1 overflow-y-auto",children:a.map(({label:d,icon:m,path:g})=>I.jsxs(zS,{to:g,end:g==="/",onClick:()=>{window.innerWidth<1024&&e(!0)},className:({isActive:w})=>`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${t?"justify-center":""}`,style:({isActive:w})=>({backgroundColor:w?"var(--primary-light)":"transparent",color:w?"var(--primary)":"var(--text-muted)"}),children:[I.jsx(m,{className:"w-5 h-5 shrink-0"}),!t&&I.jsx("span",{className:"animate-fade-in",children:d})]},g))}),I.jsxs("div",{className:"p-3 space-y-2 shrink-0",style:{borderTop:"1px solid var(--border)"},children:[!t&&I.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 rounded-xl mb-1",style:{backgroundColor:"var(--bg-secondary)"},children:[i!=null&&i.photoURL?I.jsx("img",{src:i.photoURL,alt:"Avatar",className:"w-8 h-8 rounded-lg object-cover shrink-0"}):I.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold",style:{backgroundColor:"var(--primary)",color:"var(--text-inverted)"},children:l}),I.jsxs("div",{className:"min-w-0",children:[I.jsx("p",{className:"text-sm font-bold truncate",style:{color:"var(--text)"},children:(i==null?void 0:i.name)||"User"}),I.jsx("p",{className:"text-xs truncate capitalize",style:{color:"var(--text-muted)"},children:s})]})]}),I.jsxs("button",{onClick:o,className:`flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-sm font-medium text-red-500 hover:bg-red-500/10 transition-all duration-200 ${t?"justify-center":""}`,children:[I.jsx(fj,{className:"w-5 h-5 shrink-0"}),!t&&I.jsx("span",{children:"Logout"})]}),I.jsx("button",{onClick:()=>e(!t),className:"hidden lg:flex items-center justify-center w-full py-2 rounded-xl transition-colors",style:{color:"var(--text-muted)"},children:t?I.jsx(Y8,{className:"w-4 h-4"}):I.jsx(K8,{className:"w-4 h-4"})})]})]})]})}function Oj({onMenuClick:t,title:e}){var i,s,a,o;const{userData:n}=ac(),r=((s=(i=n==null?void 0:n.name)==null?void 0:i.charAt(0))==null?void 0:s.toUpperCase())||((o=(a=n==null?void 0:n.email)==null?void 0:a.charAt(0))==null?void 0:o.toUpperCase())||"U";return I.jsx("header",{className:"sticky top-0 z-30 backdrop-blur-lg border-b",style:{backgroundColor:"var(--topbar-bg)",borderColor:"var(--border)",transition:"background-color 0.3s ease"},children:I.jsxs("div",{className:"flex items-center justify-between h-16 px-4 lg:px-6",children:[I.jsxs("div",{className:"flex items-center gap-3",children:[I.jsx("button",{onClick:t,className:"lg:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-colors",style:{color:"var(--text-muted)"},"aria-label":"Toggle menu",children:I.jsx(pj,{className:"w-5 h-5"})}),e&&I.jsx("h1",{className:"text-lg font-semibold",style:{color:"var(--text)"},children:e})]}),I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsxs("div",{className:"hidden md:flex items-center rounded-xl px-3 py-2 gap-2 border transition-all w-64",style:{backgroundColor:"var(--input-bg)",borderColor:"var(--border)"},children:[I.jsx(vj,{className:"w-4 h-4 shrink-0",style:{color:"var(--text-muted)"}}),I.jsx("input",{type:"text",placeholder:"Search...",className:"bg-transparent text-sm placeholder:opacity-50 outline-none w-full",style:{color:"var(--text)"}})]}),I.jsxs("button",{className:"relative w-9 h-9 rounded-xl flex items-center justify-center transition-colors",style:{color:"var(--text-muted)"},children:[I.jsx(YC,{className:"w-5 h-5"}),I.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"})]}),n!=null&&n.photoURL?I.jsx("img",{src:n.photoURL,alt:"Profile",className:"w-9 h-9 rounded-xl object-cover cursor-pointer hover:shadow-card transition-all border",style:{borderColor:"var(--border)"}}):I.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-card transition-all",style:{backgroundColor:"var(--primary)",color:"var(--text-inverted)"},children:I.jsx("span",{className:"text-sm font-semibold",children:r})})]})]})})}let Vj={data:""},kj=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||Vj},Mj=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Lj=/\/\*[^]*?\*\/|  +/g,xw=/\n+/g,ui=(t,e)=>{let n="",r="",i="";for(let s in t){let a=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+a+";":r+=s[1]=="f"?ui(a,s):s+"{"+ui(a,s[1]=="k"?"":e)+"}":typeof a=="object"?r+=ui(a,e?e.replace(/([^,])+/g,o=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,o):o?o+" "+l:l)):s):a!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=ui.p?ui.p(s,a):s+":"+a+";")}return n+(e&&i?e+"{"+i+"}":i)+r},hr={},JC=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+JC(t[n]);return e}return t},Uj=(t,e,n,r,i)=>{let s=JC(t),a=hr[s]||(hr[s]=(l=>{let c=0,h=11;for(;c<l.length;)h=101*h+l.charCodeAt(c++)>>>0;return"go"+h})(s));if(!hr[a]){let l=s!==t?t:(c=>{let h,d,m=[{}];for(;h=Mj.exec(c.replace(Lj,""));)h[4]?m.shift():h[3]?(d=h[3].replace(xw," ").trim(),m.unshift(m[0][d]=m[0][d]||{})):m[0][h[1]]=h[2].replace(xw," ").trim();return m[0]})(t);hr[a]=ui(i?{["@keyframes "+a]:l}:l,n?"":"."+a)}let o=n&&hr.g?hr.g:null;return n&&(hr.g=hr[a]),((l,c,h,d)=>{d?c.data=c.data.replace(d,l):c.data.indexOf(l)===-1&&(c.data=h?l+c.data:c.data+l)})(hr[a],e,r,o),a},jj=(t,e,n)=>t.reduce((r,i,s)=>{let a=e[s];if(a&&a.call){let o=a(n),l=o&&o.props&&o.props.className||/^go/.test(o)&&o;a=l?"."+l:o&&typeof o=="object"?o.props?"":ui(o,""):o===!1?"":o}return r+i+(a??"")},"");function Qd(t){let e=this||{},n=t.call?t(e.p):t;return Uj(n.unshift?n.raw?jj(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,kj(e.target),e.g,e.o,e.k)}let ZC,ry,iy;Qd.bind({g:1});let Vr=Qd.bind({k:1});function Bj(t,e,n,r){ui.p=e,ZC=t,ry=n,iy=r}function $i(t,e){let n=this||{};return function(){let r=arguments;function i(s,a){let o=Object.assign({},s),l=o.className||i.className;n.p=Object.assign({theme:ry&&ry()},o),n.o=/ *go\d+/.test(l),o.className=Qd.apply(n,r)+(l?" "+l:"");let c=t;return t[0]&&(c=o.as||t,delete o.as),iy&&c[0]&&iy(o),ZC(c,o)}return i}}var zj=t=>typeof t=="function",Gf=(t,e)=>zj(t)?t(e):t,qj=(()=>{let t=0;return()=>(++t).toString()})(),e2=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Fj=20,kv="default",t2=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:r}=e;return t2(t,{type:t.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(a=>a.id===i||i===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},Vh=[],n2={toasts:[],pausedAt:void 0,settings:{toastLimit:Fj}},Gn={},r2=(t,e=kv)=>{Gn[e]=t2(Gn[e]||n2,t),Vh.forEach(([n,r])=>{n===e&&r(Gn[e])})},i2=t=>Object.keys(Gn).forEach(e=>r2(t,e)),Hj=t=>Object.keys(Gn).find(e=>Gn[e].toasts.some(n=>n.id===t)),Yd=(t=kv)=>e=>{r2(e,t)},Gj={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$j=(t={},e=kv)=>{let[n,r]=D.useState(Gn[e]||n2),i=D.useRef(Gn[e]);D.useEffect(()=>(i.current!==Gn[e]&&r(Gn[e]),Vh.push([e,r]),()=>{let a=Vh.findIndex(([o])=>o===e);a>-1&&Vh.splice(a,1)}),[e]);let s=n.toasts.map(a=>{var o,l,c;return{...t,...t[a.type],...a,removeDelay:a.removeDelay||((o=t[a.type])==null?void 0:o.removeDelay)||(t==null?void 0:t.removeDelay),duration:a.duration||((l=t[a.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||Gj[a.type],style:{...t.style,...(c=t[a.type])==null?void 0:c.style,...a.style}}});return{...n,toasts:s}},Kj=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||qj()}),oc=t=>(e,n)=>{let r=Kj(e,t,n);return Yd(r.toasterId||Hj(r.id))({type:2,toast:r}),r.id},nt=(t,e)=>oc("blank")(t,e);nt.error=oc("error");nt.success=oc("success");nt.loading=oc("loading");nt.custom=oc("custom");nt.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Yd(e)(n):i2(n)};nt.dismissAll=t=>nt.dismiss(void 0,t);nt.remove=(t,e)=>{let n={type:4,toastId:t};e?Yd(e)(n):i2(n)};nt.removeAll=t=>nt.remove(void 0,t);nt.promise=(t,e,n)=>{let r=nt.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?Gf(e.success,i):void 0;return s?nt.success(s,{id:r,...n,...n==null?void 0:n.success}):nt.dismiss(r),i}).catch(i=>{let s=e.error?Gf(e.error,i):void 0;s?nt.error(s,{id:r,...n,...n==null?void 0:n.error}):nt.dismiss(r)}),t};var Qj=1e3,Yj=(t,e="default")=>{let{toasts:n,pausedAt:r}=$j(t,e),i=D.useRef(new Map).current,s=D.useCallback((d,m=Qj)=>{if(i.has(d))return;let g=setTimeout(()=>{i.delete(d),a({type:4,toastId:d})},m);i.set(d,g)},[]);D.useEffect(()=>{if(r)return;let d=Date.now(),m=n.map(g=>{if(g.duration===1/0)return;let w=(g.duration||0)+g.pauseDuration-(d-g.createdAt);if(w<0){g.visible&&nt.dismiss(g.id);return}return setTimeout(()=>nt.dismiss(g.id,e),w)});return()=>{m.forEach(g=>g&&clearTimeout(g))}},[n,r,e]);let a=D.useCallback(Yd(e),[e]),o=D.useCallback(()=>{a({type:5,time:Date.now()})},[a]),l=D.useCallback((d,m)=>{a({type:1,toast:{id:d,height:m}})},[a]),c=D.useCallback(()=>{r&&a({type:6,time:Date.now()})},[r,a]),h=D.useCallback((d,m)=>{let{reverseOrder:g=!1,gutter:w=8,defaultPosition:x}=m||{},C=n.filter(T=>(T.position||x)===(d.position||x)&&T.height),v=C.findIndex(T=>T.id===d.id),y=C.filter((T,N)=>N<v&&T.visible).length;return C.filter(T=>T.visible).slice(...g?[y+1]:[0,y]).reduce((T,N)=>T+(N.height||0)+w,0)},[n]);return D.useEffect(()=>{n.forEach(d=>{if(d.dismissed)s(d.id,d.removeDelay);else{let m=i.get(d.id);m&&(clearTimeout(m),i.delete(d.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:o,endPause:c,calculateOffset:h}}},Xj=Vr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Wj=Vr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Jj=Vr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Zj=$i("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Xj} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Wj} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Jj} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,eB=Vr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,tB=$i("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${eB} 1s linear infinite;
`,nB=Vr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,rB=Vr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,iB=$i("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${nB} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${rB} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,sB=$i("div")`
  position: absolute;
`,aB=$i("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,oB=Vr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,lB=$i("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${oB} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,uB=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?D.createElement(lB,null,e):e:n==="blank"?null:D.createElement(aB,null,D.createElement(tB,{...r}),n!=="loading"&&D.createElement(sB,null,n==="error"?D.createElement(Zj,{...r}):D.createElement(iB,{...r})))},cB=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,hB=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,fB="0%{opacity:0;} 100%{opacity:1;}",dB="0%{opacity:1;} 100%{opacity:0;}",mB=$i("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,pB=$i("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,gB=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=e2()?[fB,dB]:[cB(n),hB(n)];return{animation:e?`${Vr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Vr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},yB=D.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?gB(t.position||e||"top-center",t.visible):{opacity:0},s=D.createElement(uB,{toast:t}),a=D.createElement(pB,{...t.ariaProps},Gf(t.message,t));return D.createElement(mB,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:a}):D.createElement(D.Fragment,null,s,a))});Bj(D.createElement);var _B=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=D.useCallback(a=>{if(a){let o=()=>{let l=a.getBoundingClientRect().height;r(t,l)};o(),new MutationObserver(o).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return D.createElement("div",{ref:s,className:e,style:n},i)},vB=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:e2()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},EB=Qd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eh=16,TB=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:a,containerClassName:o})=>{let{toasts:l,handlers:c}=Yj(n,s);return D.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:eh,left:eh,right:eh,bottom:eh,pointerEvents:"none",...a},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(h=>{let d=h.position||e,m=c.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),g=vB(d,m);return D.createElement(_B,{id:h.id,key:h.id,onHeightUpdate:c.updateHeight,className:h.visible?EB:"",style:g},h.type==="custom"?Gf(h.message,h):i?i(h):D.createElement(yB,{toast:h,position:d}))}))},mz=nt;function bB({children:t,title:e}){const[n,r]=D.useState(!0);return I.jsxs("div",{className:"flex h-screen overflow-hidden",style:{backgroundColor:"var(--bg)",color:"var(--text)",transition:"background-color 0.3s ease, color 0.3s ease"},children:[I.jsx(TB,{position:"top-right",toastOptions:{duration:4e3,style:{borderRadius:"12px",background:"var(--bg-card)",color:"var(--text)",border:"1px solid var(--border)",fontSize:"14px"},success:{iconTheme:{primary:"#10b981",secondary:"#fff"}},error:{iconTheme:{primary:"#ef4444",secondary:"#fff"}}}}),I.jsx(Pj,{collapsed:n,setCollapsed:r}),I.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden",children:[I.jsx(Oj,{onMenuClick:()=>r(!n),title:e}),I.jsx("main",{className:"flex-1 overflow-y-auto",children:I.jsx("div",{className:"p-4 lg:p-6 max-w-[1400px] mx-auto w-full",children:t})})]})]})}function th({allowedRoles:t}){const{currentUser:e,userRole:n,userData:r,loading:i}=ac();return i?null:e?r!=null&&r.isPending?I.jsxs("div",{className:"min-h-screen bg-surface-50 flex flex-col items-center justify-center p-4",children:[I.jsx("div",{className:"w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-6",children:I.jsx("svg",{className:"w-10 h-10 text-amber-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})}),I.jsx("h2",{className:"text-2xl font-bold text-surface-900 mb-2",children:"Account Pending Approval"}),I.jsx("p",{className:"text-surface-500 max-w-md text-center",children:"Your registration is currently under review by an administrator. You will be granted access once approved."}),I.jsx("button",{onClick:()=>go.signOut(),className:"mt-8 text-primary-600 font-medium hover:underline",children:"Sign Out"})]}):r!=null&&r.isRejected?I.jsxs("div",{className:"min-h-screen bg-surface-50 flex flex-col items-center justify-center p-4",children:[I.jsx("div",{className:"w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6",children:I.jsx(Rw,{className:"w-10 h-10 text-red-600"})}),I.jsx("h2",{className:"text-2xl font-bold text-surface-900 mb-2",children:"Registration Rejected"}),I.jsx("p",{className:"text-surface-500 max-w-md text-center",children:"Your registration request has been rejected by an administrator."}),I.jsx("button",{onClick:()=>go.signOut(),className:"mt-8 text-primary-600 font-medium hover:underline",children:"Sign Out"})]}):t&&n&&!t.includes(n)?I.jsx(bB,{title:"Access Denied",children:I.jsxs("div",{className:"flex flex-col items-center justify-center py-20 animate-fade-in",children:[I.jsx("div",{className:"w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6",children:I.jsx(Rw,{className:"w-10 h-10 text-red-600"})}),I.jsx("h2",{className:"text-2xl font-bold text-surface-900 mb-2",children:"Unauthorized Access"}),I.jsxs("p",{className:"text-surface-500 max-w-md text-center",children:["You do not have the required permissions (",t.join(" or "),") to view this page. If you believe this is an error, please contact the administrator."]})]})}):I.jsx(xO,{}):I.jsx(kS,{to:"/",replace:!0})}function Kl({label:t,error:e,icon:n,className:r="",id:i,...s}){const a=i||(t==null?void 0:t.toLowerCase().replace(/\s+/g,"-"));return I.jsxs("div",{className:`space-y-1.5 ${r}`,children:[t&&I.jsx("label",{htmlFor:a,className:"block text-sm font-medium text-surface-700",children:t}),I.jsxs("div",{className:"relative",children:[n&&I.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:I.jsx(n,{className:"w-4 h-4 text-surface-400"})}),I.jsx("input",{id:a,className:`
            block w-full rounded-xl border bg-white px-4 py-2.5 text-sm
            transition-all duration-200
            placeholder:text-surface-400
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            disabled:bg-surface-100 disabled:cursor-not-allowed disabled:opacity-60
            ${n?"pl-10":""}
            ${e?"border-red-400 text-red-900 focus:ring-red-500 focus:border-red-500":"border-surface-300 text-surface-800 hover:border-surface-400"}
          `,...s})]}),e&&I.jsxs("p",{className:"text-xs text-red-600 flex items-center gap-1 mt-1",children:[I.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:I.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),e]})]})}const wB={primary:"bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-soft hover:shadow-card",secondary:"border border-surface-300 text-surface-700 bg-white hover:bg-surface-50 active:bg-surface-100",ghost:"text-surface-600 hover:bg-surface-100 active:bg-surface-200",danger:"bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-soft"},AB={sm:"px-3 py-1.5 text-xs gap-1.5",md:"px-4 py-2 text-sm gap-2",lg:"px-6 py-2.5 text-base gap-2"};function s2({children:t,variant:e="primary",size:n="md",loading:r=!1,icon:i,className:s="",disabled:a,...o}){return I.jsxs("button",{className:`
        inline-flex items-center justify-center font-medium rounded-xl
        transition-all duration-200 ease-out
        disabled:opacity-50 disabled:cursor-not-allowed
        focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
        ${wB[e]}
        ${AB[n]}
        ${s}
      `,disabled:a||r,...o,children:[r?I.jsx(uj,{className:"w-4 h-4 animate-spin"}):i?I.jsx(i,{className:"w-4 h-4"}):null,t]})}function SB({goToSignup:t}){const[e,n]=D.useState(""),[r,i]=D.useState(""),[s,a]=D.useState(""),[o,l]=D.useState(!1),c=async d=>{if(d.preventDefault(),!e||!r){a("Please fill in all fields");return}l(!0),a("");try{await ZU(go,e,r)}catch(m){a(h(m.code))}finally{l(!1)}},h=d=>{switch(d){case"auth/invalid-email":return"Invalid email address";case"auth/user-disabled":return"This account has been disabled";case"auth/user-not-found":case"auth/wrong-password":return"Invalid email or password";case"auth/invalid-credential":return"Invalid email or password";default:return"Login failed. Please try again."}};return I.jsxs("div",{className:"min-h-screen flex",children:[I.jsxs("div",{className:"hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 relative overflow-hidden",children:[I.jsx("div",{className:"absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full"}),I.jsx("div",{className:"absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full"}),I.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full"}),I.jsxs("div",{className:"relative z-10 flex flex-col justify-center px-16 text-white",children:[I.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8",children:I.jsx(Iu,{className:"w-7 h-7 text-white"})}),I.jsxs("h1",{className:"text-4xl font-bold mb-4 leading-tight",children:["Welcome to",I.jsx("br",{}),"ERP Portal"]}),I.jsx("p",{className:"text-lg text-white/70 max-w-md leading-relaxed",children:"A modern institutional management system for students, staff, finances, and reports — all in one place."}),I.jsxs("div",{className:"mt-12 flex items-center gap-6 text-sm text-white/50",children:[I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-400"}),"Secure Authentication"]}),I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-400"}),"Real-time Data"]})]})]})]}),I.jsx("div",{className:"flex-1 flex items-center justify-center p-6 bg-surface-50",children:I.jsxs("div",{className:"w-full max-w-md animate-slide-up",children:[I.jsxs("div",{className:"lg:hidden flex items-center gap-3 mb-10",children:[I.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center",children:I.jsx(Iu,{className:"w-5 h-5 text-white"})}),I.jsx("span",{className:"text-xl font-bold text-surface-900",children:"ERP Portal"})]}),I.jsx("h2",{className:"text-2xl font-bold text-surface-900 mb-1",children:"Sign in"}),I.jsx("p",{className:"text-surface-500 text-sm mb-8",children:"Enter your credentials to access the portal"}),s&&I.jsxs("div",{className:"mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2 animate-scale-in",children:[I.jsx("svg",{className:"w-4 h-4 shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:I.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),s]}),I.jsxs("form",{onSubmit:c,className:"space-y-5",children:[I.jsx(Kl,{label:"Email",type:"email",icon:WC,placeholder:"you@institution.edu",value:e,onChange:d=>n(d.target.value),disabled:o}),I.jsx(Kl,{label:"Password",type:"password",icon:XC,placeholder:"••••••••",value:r,onChange:d=>i(d.target.value),disabled:o}),I.jsx(s2,{type:"submit",loading:o,className:"w-full",size:"lg",children:o?"Signing in...":"Sign in"})]}),I.jsxs("p",{className:"text-center text-sm text-surface-500 mt-8",children:["Don't have an account?"," ",I.jsx("button",{onClick:t,className:"text-primary-600 font-medium hover:text-primary-700 transition-colors",disabled:o,children:"Create account"})]})]})})]})}function IB({goToLogin:t}){const[e,n]=D.useState({email:"",password:"",confirmPassword:"",role:"student"}),[r,i]=D.useState({}),[s,a]=D.useState(!1),[o,l]=D.useState(""),c=()=>{const w={},x=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return e.email?x.test(e.email)||(w.email="Invalid email format"):w.email="Email is required",e.password?e.password.length<6&&(w.password="Password must be at least 6 characters"):w.password="Password is required",e.password!==e.confirmPassword&&(w.confirmPassword="Passwords do not match"),i(w),Object.keys(w).length===0},h=w=>{const{name:x,value:C}=w.target;n(v=>({...v,[x]:C})),r[x]&&i(v=>({...v,[x]:""}))},d=async w=>{if(w.preventDefault(),!!c()){a(!0);try{const x=await JU(go,e.email,e.password);await qL(Au(Hf,"requests",x.user.uid),{email:e.email,role_requested:e.role,name:e.email.split("@")[0],status:"pending",timestamp:WL()}),l("Account created successfully!"),n({email:"",password:"",confirmPassword:"",role:"student"})}catch(x){i({server:x.message.replace("Firebase: ","")})}finally{a(!1)}}},g=(()=>{const w=e.password;return w?w.length<6?{level:1,label:"Weak",color:"bg-red-500"}:w.length<10?{level:2,label:"Fair",color:"bg-amber-500"}:/[A-Z]/.test(w)&&/[0-9]/.test(w)&&/[^A-Za-z0-9]/.test(w)?{level:4,label:"Strong",color:"bg-emerald-500"}:{level:3,label:"Good",color:"bg-primary-500"}:{level:0,label:"",color:""}})();return I.jsxs("div",{className:"min-h-screen flex",children:[I.jsxs("div",{className:"hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 relative overflow-hidden",children:[I.jsx("div",{className:"absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full"}),I.jsx("div",{className:"absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full"}),I.jsx("div",{className:"absolute top-1/3 left-1/3 w-96 h-96 bg-white/5 rounded-full"}),I.jsxs("div",{className:"relative z-10 flex flex-col justify-center px-16 text-white",children:[I.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8",children:I.jsx(Iu,{className:"w-7 h-7 text-white"})}),I.jsxs("h1",{className:"text-4xl font-bold mb-4 leading-tight",children:["Get started",I.jsx("br",{}),"with ERP Portal"]}),I.jsx("p",{className:"text-lg text-white/70 max-w-md leading-relaxed",children:"Create your account to access the full suite of institutional management tools."})]})]}),I.jsx("div",{className:"flex-1 flex items-center justify-center p-6 bg-surface-50",children:I.jsxs("div",{className:"w-full max-w-md animate-slide-up",children:[I.jsxs("div",{className:"lg:hidden flex items-center gap-3 mb-10",children:[I.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center",children:I.jsx(Iu,{className:"w-5 h-5 text-white"})}),I.jsx("span",{className:"text-xl font-bold text-surface-900",children:"ERP Portal"})]}),I.jsx("h2",{className:"text-2xl font-bold text-surface-900 mb-1",children:"Create account"}),I.jsx("p",{className:"text-surface-500 text-sm mb-8",children:"Fill in the details below to get started"}),o&&I.jsxs("div",{className:"mb-6 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm animate-scale-in",children:["✓ ",o]}),r.server&&I.jsx("div",{className:"mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm animate-scale-in",children:r.server}),I.jsxs("form",{onSubmit:d,className:"space-y-5",children:[I.jsx(Kl,{label:"Email",type:"email",name:"email",icon:WC,placeholder:"you@institution.edu",value:e.email,onChange:h,error:r.email}),I.jsxs("div",{children:[I.jsx(Kl,{label:"Password",type:"password",name:"password",icon:XC,placeholder:"Min. 6 characters",value:e.password,onChange:h,error:r.password}),e.password&&I.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[I.jsx("div",{className:"flex-1 h-1.5 bg-surface-200 rounded-full overflow-hidden flex gap-0.5",children:[1,2,3,4].map(w=>I.jsx("div",{className:`flex-1 rounded-full transition-all duration-300 ${w<=g.level?g.color:"bg-surface-200"}`},w))}),I.jsx("span",{className:"text-xs text-surface-500",children:g.label})]})]}),I.jsx(Kl,{label:"Confirm Password",type:"password",name:"confirmPassword",icon:Aj,placeholder:"Re-enter your password",value:e.confirmPassword,onChange:h,error:r.confirmPassword}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm font-medium text-surface-700 mb-1.5 ml-1",children:"Account Role"}),I.jsxs("select",{name:"role",value:e.role,onChange:h,className:"w-full bg-white border border-surface-300 rounded-xl px-4 py-3 text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all appearance-none cursor-pointer",children:[I.jsx("option",{value:"student",children:"Student"}),I.jsx("option",{value:"staff",children:"Staff / Teacher"}),I.jsx("option",{value:"admin",children:"Administrator"})]})]}),I.jsx(s2,{type:"submit",loading:s,className:"w-full",size:"lg",children:s?"Creating account...":"Create account"})]}),I.jsxs("p",{className:"text-center text-sm text-surface-500 mt-8",children:["Already have an account?"," ",I.jsx("button",{onClick:t,className:"text-primary-600 font-medium hover:text-primary-700 transition-colors",children:"Sign in"})]})]})})]})}const RB=D.lazy(()=>xt(()=>import("./Home-C4JZrR_h.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),xB=D.lazy(()=>xt(()=>import("./Finance-BuCWoOqo.js"),__vite__mapDeps([7,1,8,2,9]))),CB=D.lazy(()=>xt(()=>import("./StudentRecords-Dcdz6uXy.js"),__vite__mapDeps([10,11,1,8,12,2,13,14,9,15]))),DB=D.lazy(()=>xt(()=>import("./StaffDirectory-tB3tXJi4.js"),__vite__mapDeps([16,11,1,8,2,13,9]))),NB=D.lazy(()=>xt(()=>import("./Reports-DUsv1_eO.js"),__vite__mapDeps([17,11,1,9,4,18]))),PB=D.lazy(()=>xt(()=>import("./AddStudent-DJDQb0bO.js"),__vite__mapDeps([19,1,14,5]))),OB=D.lazy(()=>xt(()=>import("./Settings-DQI_OwF_.js"),__vite__mapDeps([20,21,1,22,23,15,24,25]))),VB=D.lazy(()=>xt(()=>import("./UserManagement-BovHnW8x.js"),__vite__mapDeps([26,21,1,8,12,2,13,24]))),kB=D.lazy(()=>xt(()=>import("./MyProfile-Dz4nX5yf.js"),__vite__mapDeps([27,1,8,12,22,28,15,24,3]))),MB=D.lazy(()=>xt(()=>import("./Announcements-BBgDoj7j.js"),__vite__mapDeps([29,21,1,8,25,15]))),LB=D.lazy(()=>xt(()=>import("./Attendance-C3iy_ZkC.js"),__vite__mapDeps([30,21,1,8,2,13,31,3,23]))),UB=D.lazy(()=>xt(()=>import("./Assignments-qqhtSQNo.js"),__vite__mapDeps([32,21,1,8,2,13,3,4,31,28,33,9]))),jB=D.lazy(()=>xt(()=>import("./AcademicStructure-DcDYLS0o.js"),__vite__mapDeps([34,21,1,8,2,13,33,15]))),BB=D.lazy(()=>xt(()=>import("./AuditLogs-kg_Dnvwg.js"),__vite__mapDeps([35,1,8,2,13]))),zB=D.lazy(()=>xt(()=>import("./Timetable-BygpgWdl.js"),__vite__mapDeps([36,21,1,8,2,13,33,6,15]))),qB=D.lazy(()=>xt(()=>import("./Requests-qXs4v0W1.js"),__vite__mapDeps([37,21,1,8,12,2,13,33,4,18,3])));function FB(){return I.jsx("div",{className:"flex items-center justify-center min-h-[60vh]",children:I.jsxs("div",{className:"flex flex-col items-center gap-3 animate-fade-in",children:[I.jsx("div",{className:"w-8 h-8 rounded-xl animate-pulse-soft",style:{background:"linear-gradient(135deg, var(--primary), var(--accent))"}}),I.jsx("p",{className:"text-sm font-medium",style:{color:"var(--text-muted)"},children:"Loading module..."})]})})}function HB(){const{currentUser:t,loading:e}=ac(),[n,r]=D.useState(!0);return D.useEffect(()=>{const i=document.getElementById("initial-loader");i&&i.remove()},[]),e?I.jsx("div",{className:"min-h-screen flex items-center justify-center",style:{background:"var(--bg)"},children:I.jsxs("div",{className:"flex flex-col items-center gap-4 animate-fade-in",children:[I.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center animate-pulse-soft",style:{background:"linear-gradient(135deg, var(--primary), var(--accent))"},children:I.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),I.jsx("p",{className:"text-sm font-medium",style:{color:"var(--text-muted)"},children:"Loading CampusFlow..."})]})}):t?I.jsx(D.Suspense,{fallback:I.jsx(FB,{}),children:I.jsxs(DO,{children:[I.jsx(Ue,{path:"/",element:I.jsx(RB,{})}),I.jsxs(Ue,{element:I.jsx(th,{allowedRoles:["admin"]}),children:[I.jsx(Ue,{path:"/users",element:I.jsx(VB,{})}),I.jsx(Ue,{path:"/academic-structure",element:I.jsx(jB,{})}),I.jsx(Ue,{path:"/audit-logs",element:I.jsx(BB,{})})]}),I.jsxs(Ue,{element:I.jsx(th,{allowedRoles:["admin","staff"]}),children:[I.jsx(Ue,{path:"/finance",element:I.jsx(xB,{})}),I.jsx(Ue,{path:"/add-student",element:I.jsx(PB,{})}),I.jsx(Ue,{path:"/students",element:I.jsx(CB,{})})]}),I.jsx(Ue,{element:I.jsx(th,{allowedRoles:["student"]}),children:I.jsx(Ue,{path:"/my-profile",element:I.jsx(kB,{})})}),I.jsxs(Ue,{element:I.jsx(th,{allowedRoles:["admin","staff","student"]}),children:[I.jsx(Ue,{path:"/staff",element:I.jsx(DB,{})}),I.jsx(Ue,{path:"/reports",element:I.jsx(NB,{})}),I.jsx(Ue,{path:"/settings",element:I.jsx(OB,{})}),I.jsx(Ue,{path:"/announcements",element:I.jsx(MB,{})}),I.jsx(Ue,{path:"/attendance",element:I.jsx(LB,{})}),I.jsx(Ue,{path:"/assignments",element:I.jsx(UB,{})}),I.jsx(Ue,{path:"/timetable",element:I.jsx(zB,{})}),I.jsx(Ue,{path:"/requests",element:I.jsx(qB,{})})]}),I.jsx(Ue,{path:"*",element:I.jsx(kS,{to:"/"})})]})}):n?I.jsx(SB,{goToSignup:()=>r(!1)}):I.jsx(IB,{goToLogin:()=>r(!0)})}function GB(){return I.jsx(D8,{children:I.jsx(P8,{children:I.jsx(HB,{})})})}const $B=kP.createRoot(document.getElementById("root"));$B.render(I.jsx(tD.StrictMode,{children:I.jsxs(ZO,{children:[" ",I.jsx(GB,{})]})}));export{az as $,bB as A,Iu as B,W8 as C,iz as D,WL as E,tj as F,rj as G,dz as H,Kl as I,XC as J,Tj as K,BS as L,WC as M,tz as N,oz as O,go as P,qL as Q,hz as R,Aj as S,Oh as T,Dj as U,fz as V,lz as W,uz as X,FL as Y,cz as Z,xt as _,XB as a,Ij as a0,z8 as a1,sj as a2,F8 as a3,nz as b,Ie as c,Hf as d,YC as e,Y8 as f,sz as g,G8 as h,s2 as i,I as j,o_ as k,ez as l,vj as m,tw as n,ZB as o,rz as p,WB as q,D as r,Au as s,Cw as t,ac as u,aD as v,JB as w,KB as x,xj as y,mz as z};
