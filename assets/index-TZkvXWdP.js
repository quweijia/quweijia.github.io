(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();var Au={exports:{}},Da={},Cu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Wx(){if(jp)return gt;jp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),b=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=b&&z[b]||z["@@iterator"],typeof z=="function"?z:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function S(z,re,Pe){this.props=z,this.context=re,this.refs=w,this.updater=Pe||_}S.prototype.isReactComponent={},S.prototype.setState=function(z,re){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,re,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function v(){}v.prototype=S.prototype;function k(z,re,Pe){this.props=z,this.context=re,this.refs=w,this.updater=Pe||_}var N=k.prototype=new v;N.constructor=k,M(N,S.prototype),N.isPureReactComponent=!0;var T=Array.isArray,U=Object.prototype.hasOwnProperty,F={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function B(z,re,Pe){var ie,ge={},we=null,Se=null;if(re!=null)for(ie in re.ref!==void 0&&(Se=re.ref),re.key!==void 0&&(we=""+re.key),re)U.call(re,ie)&&!D.hasOwnProperty(ie)&&(ge[ie]=re[ie]);var Re=arguments.length-2;if(Re===1)ge.children=Pe;else if(1<Re){for(var Fe=Array(Re),Ke=0;Ke<Re;Ke++)Fe[Ke]=arguments[Ke+2];ge.children=Fe}if(z&&z.defaultProps)for(ie in Re=z.defaultProps,Re)ge[ie]===void 0&&(ge[ie]=Re[ie]);return{$$typeof:i,type:z,key:we,ref:Se,props:ge,_owner:F.current}}function P(z,re){return{$$typeof:i,type:z.type,key:re,ref:z.ref,props:z.props,_owner:z._owner}}function C(z){return typeof z=="object"&&z!==null&&z.$$typeof===i}function j(z){var re={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Pe){return re[Pe]})}var W=/\/+/g;function $(z,re){return typeof z=="object"&&z!==null&&z.key!=null?j(""+z.key):re.toString(36)}function ue(z,re,Pe,ie,ge){var we=typeof z;(we==="undefined"||we==="boolean")&&(z=null);var Se=!1;if(z===null)Se=!0;else switch(we){case"string":case"number":Se=!0;break;case"object":switch(z.$$typeof){case i:case e:Se=!0}}if(Se)return Se=z,ge=ge(Se),z=ie===""?"."+$(Se,0):ie,T(ge)?(Pe="",z!=null&&(Pe=z.replace(W,"$&/")+"/"),ue(ge,re,Pe,"",function(Ke){return Ke})):ge!=null&&(C(ge)&&(ge=P(ge,Pe+(!ge.key||Se&&Se.key===ge.key?"":(""+ge.key).replace(W,"$&/")+"/")+z)),re.push(ge)),1;if(Se=0,ie=ie===""?".":ie+":",T(z))for(var Re=0;Re<z.length;Re++){we=z[Re];var Fe=ie+$(we,Re);Se+=ue(we,re,Pe,Fe,ge)}else if(Fe=y(z),typeof Fe=="function")for(z=Fe.call(z),Re=0;!(we=z.next()).done;)we=we.value,Fe=ie+$(we,Re++),Se+=ue(we,re,Pe,Fe,ge);else if(we==="object")throw re=String(z),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Se}function me(z,re,Pe){if(z==null)return z;var ie=[],ge=0;return ue(z,ie,"","",function(we){return re.call(Pe,we,ge++)}),ie}function le(z){if(z._status===-1){var re=z._result;re=re(),re.then(function(Pe){(z._status===0||z._status===-1)&&(z._status=1,z._result=Pe)},function(Pe){(z._status===0||z._status===-1)&&(z._status=2,z._result=Pe)}),z._status===-1&&(z._status=0,z._result=re)}if(z._status===1)return z._result.default;throw z._result}var pe={current:null},H={transition:null},ee={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:H,ReactCurrentOwner:F};function ae(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:me,forEach:function(z,re,Pe){me(z,function(){re.apply(this,arguments)},Pe)},count:function(z){var re=0;return me(z,function(){re++}),re},toArray:function(z){return me(z,function(re){return re})||[]},only:function(z){if(!C(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=k,gt.StrictMode=s,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,gt.act=ae,gt.cloneElement=function(z,re,Pe){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ie=M({},z.props),ge=z.key,we=z.ref,Se=z._owner;if(re!=null){if(re.ref!==void 0&&(we=re.ref,Se=F.current),re.key!==void 0&&(ge=""+re.key),z.type&&z.type.defaultProps)var Re=z.type.defaultProps;for(Fe in re)U.call(re,Fe)&&!D.hasOwnProperty(Fe)&&(ie[Fe]=re[Fe]===void 0&&Re!==void 0?Re[Fe]:re[Fe])}var Fe=arguments.length-2;if(Fe===1)ie.children=Pe;else if(1<Fe){Re=Array(Fe);for(var Ke=0;Ke<Fe;Ke++)Re[Ke]=arguments[Ke+2];ie.children=Re}return{$$typeof:i,type:z.type,key:ge,ref:we,props:ie,_owner:Se}},gt.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:c,_context:z},z.Consumer=z},gt.createElement=B,gt.createFactory=function(z){var re=B.bind(null,z);return re.type=z,re},gt.createRef=function(){return{current:null}},gt.forwardRef=function(z){return{$$typeof:d,render:z}},gt.isValidElement=C,gt.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:le}},gt.memo=function(z,re){return{$$typeof:m,type:z,compare:re===void 0?null:re}},gt.startTransition=function(z){var re=H.transition;H.transition={};try{z()}finally{H.transition=re}},gt.unstable_act=ae,gt.useCallback=function(z,re){return pe.current.useCallback(z,re)},gt.useContext=function(z){return pe.current.useContext(z)},gt.useDebugValue=function(){},gt.useDeferredValue=function(z){return pe.current.useDeferredValue(z)},gt.useEffect=function(z,re){return pe.current.useEffect(z,re)},gt.useId=function(){return pe.current.useId()},gt.useImperativeHandle=function(z,re,Pe){return pe.current.useImperativeHandle(z,re,Pe)},gt.useInsertionEffect=function(z,re){return pe.current.useInsertionEffect(z,re)},gt.useLayoutEffect=function(z,re){return pe.current.useLayoutEffect(z,re)},gt.useMemo=function(z,re){return pe.current.useMemo(z,re)},gt.useReducer=function(z,re,Pe){return pe.current.useReducer(z,re,Pe)},gt.useRef=function(z){return pe.current.useRef(z)},gt.useState=function(z){return pe.current.useState(z)},gt.useSyncExternalStore=function(z,re,Pe){return pe.current.useSyncExternalStore(z,re,Pe)},gt.useTransition=function(){return pe.current.useTransition()},gt.version="18.3.1",gt}var Hp;function sf(){return Hp||(Hp=1,Cu.exports=Wx()),Cu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Xx(){if(Gp)return Da;Gp=1;var i=sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var x,b={},y=null,_=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(_=p.ref);for(x in p)s.call(p,x)&&!c.hasOwnProperty(x)&&(b[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)b[x]===void 0&&(b[x]=p[x]);return{$$typeof:e,type:d,key:y,ref:_,props:b,_owner:o.current}}return Da.Fragment=t,Da.jsx=f,Da.jsxs=f,Da}var Vp;function qx(){return Vp||(Vp=1,Au.exports=Xx()),Au.exports}var l=qx(),sl={},Ru={exports:{}},Cn={},Nu={exports:{}},Pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Yx(){return Wp||(Wp=1,(function(i){function e(H,ee){var ae=H.length;H.push(ee);e:for(;0<ae;){var z=ae-1>>>1,re=H[z];if(0<o(re,ee))H[z]=ee,H[ae]=re,ae=z;else break e}}function t(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var ee=H[0],ae=H.pop();if(ae!==ee){H[0]=ae;e:for(var z=0,re=H.length,Pe=re>>>1;z<Pe;){var ie=2*(z+1)-1,ge=H[ie],we=ie+1,Se=H[we];if(0>o(ge,ae))we<re&&0>o(Se,ge)?(H[z]=Se,H[we]=ae,z=we):(H[z]=ge,H[ie]=ae,z=ie);else if(we<re&&0>o(Se,ae))H[z]=Se,H[we]=ae,z=we;else break e}}return ee}function o(H,ee){var ae=H.sortIndex-ee.sortIndex;return ae!==0?ae:H.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();i.unstable_now=function(){return f.now()-d}}var p=[],m=[],x=1,b=null,y=3,_=!1,M=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(H){for(var ee=t(m);ee!==null;){if(ee.callback===null)s(m);else if(ee.startTime<=H)s(m),ee.sortIndex=ee.expirationTime,e(p,ee);else break;ee=t(m)}}function T(H){if(w=!1,N(H),!M)if(t(p)!==null)M=!0,le(U);else{var ee=t(m);ee!==null&&pe(T,ee.startTime-H)}}function U(H,ee){M=!1,w&&(w=!1,v(B),B=-1),_=!0;var ae=y;try{for(N(ee),b=t(p);b!==null&&(!(b.expirationTime>ee)||H&&!j());){var z=b.callback;if(typeof z=="function"){b.callback=null,y=b.priorityLevel;var re=z(b.expirationTime<=ee);ee=i.unstable_now(),typeof re=="function"?b.callback=re:b===t(p)&&s(p),N(ee)}else s(p);b=t(p)}if(b!==null)var Pe=!0;else{var ie=t(m);ie!==null&&pe(T,ie.startTime-ee),Pe=!1}return Pe}finally{b=null,y=ae,_=!1}}var F=!1,D=null,B=-1,P=5,C=-1;function j(){return!(i.unstable_now()-C<P)}function W(){if(D!==null){var H=i.unstable_now();C=H;var ee=!0;try{ee=D(!0,H)}finally{ee?$():(F=!1,D=null)}}else F=!1}var $;if(typeof k=="function")$=function(){k(W)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,me=ue.port2;ue.port1.onmessage=W,$=function(){me.postMessage(null)}}else $=function(){S(W,0)};function le(H){D=H,F||(F=!0,$())}function pe(H,ee){B=S(function(){H(i.unstable_now())},ee)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(H){H.callback=null},i.unstable_continueExecution=function(){M||_||(M=!0,le(U))},i.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},i.unstable_getCurrentPriorityLevel=function(){return y},i.unstable_getFirstCallbackNode=function(){return t(p)},i.unstable_next=function(H){switch(y){case 1:case 2:case 3:var ee=3;break;default:ee=y}var ae=y;y=ee;try{return H()}finally{y=ae}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(H,ee){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=y;y=H;try{return ee()}finally{y=ae}},i.unstable_scheduleCallback=function(H,ee,ae){var z=i.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?z+ae:z):ae=z,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ae+re,H={id:x++,callback:ee,priorityLevel:H,startTime:ae,expirationTime:re,sortIndex:-1},ae>z?(H.sortIndex=ae,e(m,H),t(p)===null&&H===t(m)&&(w?(v(B),B=-1):w=!0,pe(T,ae-z))):(H.sortIndex=re,e(p,H),M||_||(M=!0,le(U))),H},i.unstable_shouldYield=j,i.unstable_wrapCallback=function(H){var ee=y;return function(){var ae=y;y=ee;try{return H.apply(this,arguments)}finally{y=ae}}}})(Pu)),Pu}var Xp;function Qx(){return Xp||(Xp=1,Nu.exports=Yx()),Nu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Kx(){if(qp)return Cn;qp=1;var i=sf(),e=Qx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function c(n,r){f(n,r),f(n+"Capture",r)}function f(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},b={};function y(n){return p.call(b,n)?!0:p.call(x,n)?!1:m.test(n)?b[n]=!0:(x[n]=!0,!1)}function _(n,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,a,u){if(r===null||typeof r>"u"||_(n,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,a,u,h,g,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function k(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(v,k);S[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(v,k);S[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(v,k);S[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,r,a,u){var h=S.hasOwnProperty(r)?S[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,a,h,u)&&(a=null),u||h===null?y(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(r=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(r):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,r,a):n.setAttribute(r,a))))}var T=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),F=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),j=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),H=Symbol.iterator;function ee(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,z;function re(n){if(z===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);z=r&&r[1]||""}return`
`+z+n}var Pe=!1;function ie(n,r){if(!n||Pe)return"";Pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(oe){var u=oe}Reflect.construct(n,[],r)}else{try{r.call()}catch(oe){u=oe}n.call(r.prototype)}else{try{throw Error()}catch(oe){u=oe}n()}}catch(oe){if(oe&&u&&typeof oe.stack=="string"){for(var h=oe.stack.split(`
`),g=u.stack.split(`
`),E=h.length-1,O=g.length-1;1<=E&&0<=O&&h[E]!==g[O];)O--;for(;1<=E&&0<=O;E--,O--)if(h[E]!==g[O]){if(E!==1||O!==1)do if(E--,O--,0>O||h[E]!==g[O]){var G=`
`+h[E].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=E&&0<=O);break}}}finally{Pe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function ge(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=ie(n.type,!1),n;case 11:return n=ie(n.type.render,!1),n;case 1:return n=ie(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case F:return"Portal";case P:return"Profiler";case B:return"StrictMode";case $:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case W:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case me:return r=n.displayName||null,r!==null?r:we(n.type)||"Memo";case le:r=n._payload,n=n._init;try{return we(n(r))}catch{}}return null}function Se(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(r);case 8:return r===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ke(n){var r=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,g.call(this,E)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function At(n){n._valueTracker||(n._valueTracker=Ke(n))}function pt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return n&&(u=Fe(n)?n.checked?"true":"false":n.value),n=u,n!==a?(r.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function K(n,r){var a=r.checked;return ae({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function nn(n,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=Re(r.value!=null?r.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ht(n,r){r=r.checked,r!=null&&N(n,"checked",r,!1)}function dt(n,r){ht(n,r);var a=Re(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?bt(n,r.type,a):r.hasOwnProperty("defaultValue")&&bt(n,r.type,Re(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ye(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function bt(n,r,a){(r!=="number"||Nt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Qe=Array.isArray;function I(n,r,a,u){if(n=n.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=r.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Re(a),r=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function A(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Y(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(Qe(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Re(a)}}function L(n,r){var a=Re(r.value),u=Re(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function J(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function te(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Te(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?te(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(r,a,u,h)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ot(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(_e).forEach(function(n){Oe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),_e[r]=_e[n]})});function et(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||_e.hasOwnProperty(n)&&_e[n]?(""+r).trim():r+"px"}function tt(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=et(a,r[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var Be=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(n,r){if(r){if(Be[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function st(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function q(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ke=null,he=null,xe=null;function Ie(n){if(n=va(n)){if(typeof ke!="function")throw Error(t(280));var r=n.stateNode;r&&(r=So(r),ke(n.stateNode,n.type,r))}}function Le(n){he?xe?xe.push(n):xe=[n]:he=n}function at(){if(he){var n=he,r=xe;if(xe=he=null,Ie(n),r)for(n=0;n<r.length;n++)Ie(r[n])}}function Lt(n,r){return n(r)}function Xt(){}var yt=!1;function _n(n,r,a){if(yt)return n(r,a);yt=!0;try{return Lt(n,r,a)}finally{yt=!1,(he!==null||xe!==null)&&(Xt(),at())}}function pn(n,r){var a=n.stateNode;if(a===null)return null;var u=So(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ts=!1;if(d)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){ts=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{ts=!1}function br(n,r,a,u,h,g,E,O,G){var oe=Array.prototype.slice.call(arguments,3);try{r.apply(a,oe)}catch(ye){this.onError(ye)}}var Mr=!1,Ti=null,Ai=!1,Yr=null,$a={onError:function(n){Mr=!0,Ti=n}};function ns(n,r,a,u,h,g,E,O,G){Mr=!1,Ti=null,br.apply($a,arguments)}function eo(n,r,a,u,h,g,E,O,G){if(ns.apply(this,arguments),Mr){if(Mr){var oe=Ti;Mr=!1,Ti=null}else throw Error(t(198));Ai||(Ai=!0,Yr=oe)}}function pr(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function to(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function no(n){if(pr(n)!==n)throw Error(t(188))}function Ql(n){var r=n.alternate;if(!r){if(r=pr(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,u=r;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return no(h),n;if(g===u)return no(h),r;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=g;else{for(var E=!1,O=h.child;O;){if(O===a){E=!0,a=h,u=g;break}if(O===u){E=!0,u=h,a=g;break}O=O.sibling}if(!E){for(O=g.child;O;){if(O===a){E=!0,a=g,u=h;break}if(O===u){E=!0,u=g,a=h;break}O=O.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function R(n){return n=Ql(n),n!==null?Q(n):null}function Q(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Q(n);if(r!==null)return r;n=n.sibling}return null}var ce=e.unstable_scheduleCallback,de=e.unstable_cancelCallback,Z=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Ee=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,nt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,We=e.unstable_LowPriority,vt=e.unstable_IdlePriority,Et=null,xt=null;function an(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Mt,qe=Math.log,$n=Math.LN2;function Mt(n){return n>>>=0,n===0?32:31-(qe(n)/$n|0)|0}var on=64,er=4194304;function qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mr(n,r){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,E=a&268435455;if(E!==0){var O=E&~h;O!==0?u=qt(O):(g&=E,g!==0&&(u=qt(g)))}else E=a&~h,E!==0?u=qt(E):g!==0&&(u=qt(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)a=31-lt(r),h=1<<a,u|=n[a],r&=~h;return u}function kt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jn(n,r){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var E=31-lt(g),O=1<<E,G=h[E];G===-1?((O&a)===0||(O&u)!==0)&&(h[E]=kt(O,r)):G<=r&&(n.expiredLanes|=O),g&=~O}}function wr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function mn(){var n=on;return on<<=1,(on&4194240)===0&&(on=64),n}function Hn(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function bn(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-lt(r),n[r]=a}function ro(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-lt(a),g=1<<h;r[h]=0,u[h]=-1,n[h]=-1,a&=~g}}function Kl(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var u=31-lt(a),h=1<<u;h&r|n[u]&r&&(n[u]|=r),a&=~h}}var Rt=0;function yf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Sf,Zl,_f,bf,Mf,Jl=!1,io=[],Qr=null,Kr=null,Zr=null,na=new Map,ra=new Map,Jr=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wf(n,r){switch(n){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":na.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(r.pointerId)}}function ia(n,r,a,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},r!==null&&(r=va(r),r!==null&&Zl(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function pg(n,r,a,u,h){switch(r){case"focusin":return Qr=ia(Qr,n,r,a,u,h),!0;case"dragenter":return Kr=ia(Kr,n,r,a,u,h),!0;case"mouseover":return Zr=ia(Zr,n,r,a,u,h),!0;case"pointerover":var g=h.pointerId;return na.set(g,ia(na.get(g)||null,n,r,a,u,h)),!0;case"gotpointercapture":return g=h.pointerId,ra.set(g,ia(ra.get(g)||null,n,r,a,u,h)),!0}return!1}function Ef(n){var r=Ci(n.target);if(r!==null){var a=pr(r);if(a!==null){if(r=a.tag,r===13){if(r=to(a),r!==null){n.blockedOn=r,Mf(n.priority,function(){_f(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function so(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ec(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Ct=u,a.target.dispatchEvent(u),Ct=null}else return r=va(a),r!==null&&Zl(r),n.blockedOn=a,!1;r.shift()}return!0}function Tf(n,r,a){so(n)&&a.delete(r)}function mg(){Jl=!1,Qr!==null&&so(Qr)&&(Qr=null),Kr!==null&&so(Kr)&&(Kr=null),Zr!==null&&so(Zr)&&(Zr=null),na.forEach(Tf),ra.forEach(Tf)}function sa(n,r){n.blockedOn===r&&(n.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mg)))}function aa(n){function r(h){return sa(h,n)}if(0<io.length){sa(io[0],n);for(var a=1;a<io.length;a++){var u=io[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Qr!==null&&sa(Qr,n),Kr!==null&&sa(Kr,n),Zr!==null&&sa(Zr,n),na.forEach(r),ra.forEach(r),a=0;a<Jr.length;a++)u=Jr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Jr.length&&(a=Jr[0],a.blockedOn===null);)Ef(a),a.blockedOn===null&&Jr.shift()}var rs=T.ReactCurrentBatchConfig,ao=!0;function gg(n,r,a,u){var h=Rt,g=rs.transition;rs.transition=null;try{Rt=1,$l(n,r,a,u)}finally{Rt=h,rs.transition=g}}function xg(n,r,a,u){var h=Rt,g=rs.transition;rs.transition=null;try{Rt=4,$l(n,r,a,u)}finally{Rt=h,rs.transition=g}}function $l(n,r,a,u){if(ao){var h=ec(n,r,a,u);if(h===null)xc(n,r,u,oo,a),wf(n,u);else if(pg(h,n,r,a,u))u.stopPropagation();else if(wf(n,u),r&4&&-1<hg.indexOf(n)){for(;h!==null;){var g=va(h);if(g!==null&&Sf(g),g=ec(n,r,a,u),g===null&&xc(n,r,u,oo,a),g===h)break;h=g}h!==null&&u.stopPropagation()}else xc(n,r,u,null,a)}}var oo=null;function ec(n,r,a,u){if(oo=null,n=q(u),n=Ci(n),n!==null)if(r=pr(n),r===null)n=null;else if(a=r.tag,a===13){if(n=to(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return oo=n,null}function Af(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case He:return 1;case nt:return 4;case it:case We:return 16;case vt:return 536870912;default:return 16}default:return 16}}var $r=null,tc=null,lo=null;function Cf(){if(lo)return lo;var n,r=tc,a=r.length,u,h="value"in $r?$r.value:$r.textContent,g=h.length;for(n=0;n<a&&r[n]===h[n];n++);var E=a-n;for(u=1;u<=E&&r[a-u]===h[g-u];u++);return lo=h.slice(n,1<u?1-u:void 0)}function co(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function uo(){return!0}function Rf(){return!1}function Ln(n){function r(a,u,h,g,E){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?uo:Rf,this.isPropagationStopped=Rf,this}return ae(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),r}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=Ln(is),oa=ae({},is,{view:0,detail:0}),vg=Ln(oa),rc,ic,la,fo=ae({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==la&&(la&&n.type==="mousemove"?(rc=n.screenX-la.screenX,ic=n.screenY-la.screenY):ic=rc=0,la=n),rc)},movementY:function(n){return"movementY"in n?n.movementY:ic}}),Nf=Ln(fo),yg=ae({},fo,{dataTransfer:0}),Sg=Ln(yg),_g=ae({},oa,{relatedTarget:0}),sc=Ln(_g),bg=ae({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Mg=Ln(bg),wg=ae({},is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Eg=Ln(wg),Tg=ae({},is,{data:0}),Pf=Ln(Tg),Ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Rg[n])?!!r[n]:!1}function ac(){return Ng}var Pg=ae({},oa,{key:function(n){if(n.key){var r=Ag[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=co(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Cg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(n){return n.type==="keypress"?co(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?co(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),kg=Ln(Pg),Dg=ae({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=Ln(Dg),Lg=ae({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),Ig=Ln(Lg),Ug=ae({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fg=Ln(Ug),Og=ae({},fo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),zg=Ln(Og),Bg=[9,13,27,32],oc=d&&"CompositionEvent"in window,ca=null;d&&"documentMode"in document&&(ca=document.documentMode);var jg=d&&"TextEvent"in window&&!ca,Df=d&&(!oc||ca&&8<ca&&11>=ca),Lf=" ",If=!1;function Uf(n,r){switch(n){case"keyup":return Bg.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ss=!1;function Hg(n,r){switch(n){case"compositionend":return Ff(r);case"keypress":return r.which!==32?null:(If=!0,Lf);case"textInput":return n=r.data,n===Lf&&If?null:n;default:return null}}function Gg(n,r){if(ss)return n==="compositionend"||!oc&&Uf(n,r)?(n=Cf(),lo=tc=$r=null,ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Df&&r.locale!=="ko"?null:r.data;default:return null}}var Vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Vg[n.type]:r==="textarea"}function zf(n,r,a,u){Le(u),r=xo(r,"onChange"),0<r.length&&(a=new nc("onChange","change",null,a,u),n.push({event:a,listeners:r}))}var ua=null,da=null;function Wg(n){rh(n,0)}function ho(n){var r=us(n);if(pt(r))return n}function Xg(n,r){if(n==="change")return r}var Bf=!1;if(d){var lc;if(d){var cc="oninput"in document;if(!cc){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),cc=typeof jf.oninput=="function"}lc=cc}else lc=!1;Bf=lc&&(!document.documentMode||9<document.documentMode)}function Hf(){ua&&(ua.detachEvent("onpropertychange",Gf),da=ua=null)}function Gf(n){if(n.propertyName==="value"&&ho(da)){var r=[];zf(r,da,n,q(n)),_n(Wg,r)}}function qg(n,r,a){n==="focusin"?(Hf(),ua=r,da=a,ua.attachEvent("onpropertychange",Gf)):n==="focusout"&&Hf()}function Yg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ho(da)}function Qg(n,r){if(n==="click")return ho(r)}function Kg(n,r){if(n==="input"||n==="change")return ho(r)}function Zg(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var tr=typeof Object.is=="function"?Object.is:Zg;function fa(n,r){if(tr(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!p.call(r,h)||!tr(n[h],r[h]))return!1}return!0}function Vf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wf(n,r){var a=Vf(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=r&&u>=r)return{node:a,offset:r-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vf(a)}}function Xf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Xf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function qf(){for(var n=window,r=Nt();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Nt(n.document)}return r}function uc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Jg(n){var r=qf(),a=n.focusedElem,u=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Xf(a.ownerDocument.documentElement,a)){if(u!==null&&uc(a)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Wf(a,g);var E=Wf(a,u);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(r),n.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $g=d&&"documentMode"in document&&11>=document.documentMode,as=null,dc=null,ha=null,fc=!1;function Yf(n,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||as==null||as!==Nt(u)||(u=as,"selectionStart"in u&&uc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ha&&fa(ha,u)||(ha=u,u=xo(dc,"onSelect"),0<u.length&&(r=new nc("onSelect","select",null,r,a),n.push({event:r,listeners:u}),r.target=as)))}function po(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var os={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},hc={},Qf={};d&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function mo(n){if(hc[n])return hc[n];if(!os[n])return n;var r=os[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Qf)return hc[n]=r[a];return n}var Kf=mo("animationend"),Zf=mo("animationiteration"),Jf=mo("animationstart"),$f=mo("transitionend"),eh=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(n,r){eh.set(n,r),c(r,[n])}for(var pc=0;pc<th.length;pc++){var mc=th[pc],ex=mc.toLowerCase(),tx=mc[0].toUpperCase()+mc.slice(1);ei(ex,"on"+tx)}ei(Kf,"onAnimationEnd"),ei(Zf,"onAnimationIteration"),ei(Jf,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei($f,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function nh(n,r,a){var u=n.type||"unknown-event";n.currentTarget=a,eo(u,r,void 0,n),n.currentTarget=null}function rh(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var E=u.length-1;0<=E;E--){var O=u[E],G=O.instance,oe=O.currentTarget;if(O=O.listener,G!==g&&h.isPropagationStopped())break e;nh(h,O,oe),g=G}else for(E=0;E<u.length;E++){if(O=u[E],G=O.instance,oe=O.currentTarget,O=O.listener,G!==g&&h.isPropagationStopped())break e;nh(h,O,oe),g=G}}}if(Ai)throw n=Yr,Ai=!1,Yr=null,n}function It(n,r){var a=r[Mc];a===void 0&&(a=r[Mc]=new Set);var u=n+"__bubble";a.has(u)||(ih(r,n,2,!1),a.add(u))}function gc(n,r,a){var u=0;r&&(u|=4),ih(a,n,u,r)}var go="_reactListening"+Math.random().toString(36).slice(2);function ma(n){if(!n[go]){n[go]=!0,s.forEach(function(a){a!=="selectionchange"&&(nx.has(a)||gc(a,!1,n),gc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[go]||(r[go]=!0,gc("selectionchange",!1,r))}}function ih(n,r,a,u){switch(Af(r)){case 1:var h=gg;break;case 4:h=xg;break;default:h=$l}a=h.bind(null,r,a,n),h=void 0,!ts||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,a,{capture:!0,passive:h}):n.addEventListener(r,a,!0):h!==void 0?n.addEventListener(r,a,{passive:h}):n.addEventListener(r,a,!1)}function xc(n,r,a,u,h){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var O=u.stateNode.containerInfo;if(O===h||O.nodeType===8&&O.parentNode===h)break;if(E===4)for(E=u.return;E!==null;){var G=E.tag;if((G===3||G===4)&&(G=E.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;E=E.return}for(;O!==null;){if(E=Ci(O),E===null)return;if(G=E.tag,G===5||G===6){u=g=E;continue e}O=O.parentNode}}u=u.return}_n(function(){var oe=g,ye=q(a),Me=[];e:{var ve=eh.get(n);if(ve!==void 0){var Ue=nc,je=n;switch(n){case"keypress":if(co(a)===0)break e;case"keydown":case"keyup":Ue=kg;break;case"focusin":je="focus",Ue=sc;break;case"focusout":je="blur",Ue=sc;break;case"beforeblur":case"afterblur":Ue=sc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Sg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Ig;break;case Kf:case Zf:case Jf:Ue=Mg;break;case $f:Ue=Fg;break;case"scroll":Ue=vg;break;case"wheel":Ue=zg;break;case"copy":case"cut":case"paste":Ue=Eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=kf}var Ge=(r&4)!==0,Ht=!Ge&&n==="scroll",ne=Ge?ve!==null?ve+"Capture":null:ve;Ge=[];for(var X=oe,se;X!==null;){se=X;var Ae=se.stateNode;if(se.tag===5&&Ae!==null&&(se=Ae,ne!==null&&(Ae=pn(X,ne),Ae!=null&&Ge.push(ga(X,Ae,se)))),Ht)break;X=X.return}0<Ge.length&&(ve=new Ue(ve,je,null,a,ye),Me.push({event:ve,listeners:Ge}))}}if((r&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ve&&a!==Ct&&(je=a.relatedTarget||a.fromElement)&&(Ci(je)||je[Er]))break e;if((Ue||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(je=a.relatedTarget||a.toElement,Ue=oe,je=je?Ci(je):null,je!==null&&(Ht=pr(je),je!==Ht||je.tag!==5&&je.tag!==6)&&(je=null)):(Ue=null,je=oe),Ue!==je)){if(Ge=Nf,Ae="onMouseLeave",ne="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=kf,Ae="onPointerLeave",ne="onPointerEnter",X="pointer"),Ht=Ue==null?ve:us(Ue),se=je==null?ve:us(je),ve=new Ge(Ae,X+"leave",Ue,a,ye),ve.target=Ht,ve.relatedTarget=se,Ae=null,Ci(ye)===oe&&(Ge=new Ge(ne,X+"enter",je,a,ye),Ge.target=se,Ge.relatedTarget=Ht,Ae=Ge),Ht=Ae,Ue&&je)t:{for(Ge=Ue,ne=je,X=0,se=Ge;se;se=ls(se))X++;for(se=0,Ae=ne;Ae;Ae=ls(Ae))se++;for(;0<X-se;)Ge=ls(Ge),X--;for(;0<se-X;)ne=ls(ne),se--;for(;X--;){if(Ge===ne||ne!==null&&Ge===ne.alternate)break t;Ge=ls(Ge),ne=ls(ne)}Ge=null}else Ge=null;Ue!==null&&sh(Me,ve,Ue,Ge,!1),je!==null&&Ht!==null&&sh(Me,Ht,je,Ge,!0)}}e:{if(ve=oe?us(oe):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var Xe=Xg;else if(Of(ve))if(Bf)Xe=Kg;else{Xe=Yg;var Je=qg}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Xe=Qg);if(Xe&&(Xe=Xe(n,oe))){zf(Me,Xe,a,ye);break e}Je&&Je(n,ve,oe),n==="focusout"&&(Je=ve._wrapperState)&&Je.controlled&&ve.type==="number"&&bt(ve,"number",ve.value)}switch(Je=oe?us(oe):window,n){case"focusin":(Of(Je)||Je.contentEditable==="true")&&(as=Je,dc=oe,ha=null);break;case"focusout":ha=dc=as=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Yf(Me,a,ye);break;case"selectionchange":if($g)break;case"keydown":case"keyup":Yf(Me,a,ye)}var $e;if(oc)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ss?Uf(n,a)&&(rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Df&&a.locale!=="ko"&&(ss||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ss&&($e=Cf()):($r=ye,tc="value"in $r?$r.value:$r.textContent,ss=!0)),Je=xo(oe,rt),0<Je.length&&(rt=new Pf(rt,n,null,a,ye),Me.push({event:rt,listeners:Je}),$e?rt.data=$e:($e=Ff(a),$e!==null&&(rt.data=$e)))),($e=jg?Hg(n,a):Gg(n,a))&&(oe=xo(oe,"onBeforeInput"),0<oe.length&&(ye=new Pf("onBeforeInput","beforeinput",null,a,ye),Me.push({event:ye,listeners:oe}),ye.data=$e))}rh(Me,r)})}function ga(n,r,a){return{instance:n,listener:r,currentTarget:a}}function xo(n,r){for(var a=r+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=pn(n,a),g!=null&&u.unshift(ga(n,g,h)),g=pn(n,r),g!=null&&u.push(ga(n,g,h))),n=n.return}return u}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function sh(n,r,a,u,h){for(var g=r._reactName,E=[];a!==null&&a!==u;){var O=a,G=O.alternate,oe=O.stateNode;if(G!==null&&G===u)break;O.tag===5&&oe!==null&&(O=oe,h?(G=pn(a,g),G!=null&&E.unshift(ga(a,G,O))):h||(G=pn(a,g),G!=null&&E.push(ga(a,G,O)))),a=a.return}E.length!==0&&n.push({event:r,listeners:E})}var rx=/\r\n?/g,ix=/\u0000|\uFFFD/g;function ah(n){return(typeof n=="string"?n:""+n).replace(rx,`
`).replace(ix,"")}function vo(n,r,a){if(r=ah(r),ah(n)!==r&&a)throw Error(t(425))}function yo(){}var vc=null,yc=null;function Sc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(n){return oh.resolve(null).then(n).catch(ox)}:_c;function ox(n){setTimeout(function(){throw n})}function bc(n,r){var a=r,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),aa(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);aa(r)}function ti(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function lh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var cs=Math.random().toString(36).slice(2),gr="__reactFiber$"+cs,xa="__reactProps$"+cs,Er="__reactContainer$"+cs,Mc="__reactEvents$"+cs,lx="__reactListeners$"+cs,cx="__reactHandles$"+cs;function Ci(n){var r=n[gr];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Er]||a[gr]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=lh(n);n!==null;){if(a=n[gr])return a;n=lh(n)}return r}n=a,a=n.parentNode}return null}function va(n){return n=n[gr]||n[Er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function So(n){return n[xa]||null}var wc=[],ds=-1;function ni(n){return{current:n}}function Ut(n){0>ds||(n.current=wc[ds],wc[ds]=null,ds--)}function Dt(n,r){ds++,wc[ds]=n.current,n.current=r}var ri={},ln=ni(ri),Mn=ni(!1),Ri=ri;function fs(n,r){var a=n.type.contextTypes;if(!a)return ri;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=r[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function wn(n){return n=n.childContextTypes,n!=null}function _o(){Ut(Mn),Ut(ln)}function ch(n,r,a){if(ln.current!==ri)throw Error(t(168));Dt(ln,r),Dt(Mn,a)}function uh(n,r,a){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(t(108,Se(n)||"Unknown",h));return ae({},a,u)}function bo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ri,Ri=ln.current,Dt(ln,n),Dt(Mn,Mn.current),!0}function dh(n,r,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=uh(n,r,Ri),u.__reactInternalMemoizedMergedChildContext=n,Ut(Mn),Ut(ln),Dt(ln,n)):Ut(Mn),Dt(Mn,a)}var Tr=null,Mo=!1,Ec=!1;function fh(n){Tr===null?Tr=[n]:Tr.push(n)}function ux(n){Mo=!0,fh(n)}function ii(){if(!Ec&&Tr!==null){Ec=!0;var n=0,r=Rt;try{var a=Tr;for(Rt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Tr=null,Mo=!1}catch(h){throw Tr!==null&&(Tr=Tr.slice(n+1)),ce(He,ii),h}finally{Rt=r,Ec=!1}}return null}var hs=[],ps=0,wo=null,Eo=0,Gn=[],Vn=0,Ni=null,Ar=1,Cr="";function Pi(n,r){hs[ps++]=Eo,hs[ps++]=wo,wo=n,Eo=r}function hh(n,r,a){Gn[Vn++]=Ar,Gn[Vn++]=Cr,Gn[Vn++]=Ni,Ni=n;var u=Ar;n=Cr;var h=32-lt(u)-1;u&=~(1<<h),a+=1;var g=32-lt(r)+h;if(30<g){var E=h-h%5;g=(u&(1<<E)-1).toString(32),u>>=E,h-=E,Ar=1<<32-lt(r)+h|a<<h|u,Cr=g+n}else Ar=1<<g|a<<h|u,Cr=n}function Tc(n){n.return!==null&&(Pi(n,1),hh(n,1,0))}function Ac(n){for(;n===wo;)wo=hs[--ps],hs[ps]=null,Eo=hs[--ps],hs[ps]=null;for(;n===Ni;)Ni=Gn[--Vn],Gn[Vn]=null,Cr=Gn[--Vn],Gn[Vn]=null,Ar=Gn[--Vn],Gn[Vn]=null}var In=null,Un=null,Ft=!1,nr=null;function ph(n,r){var a=Yn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function mh(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,In=n,Un=ti(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,In=n,Un=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Ni!==null?{id:Ar,overflow:Cr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Yn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,In=n,Un=null,!0):!1;default:return!1}}function Cc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Rc(n){if(Ft){var r=Un;if(r){var a=r;if(!mh(n,r)){if(Cc(n))throw Error(t(418));r=ti(a.nextSibling);var u=In;r&&mh(n,r)?ph(u,a):(n.flags=n.flags&-4097|2,Ft=!1,In=n)}}else{if(Cc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,In=n}}}function gh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;In=n}function To(n){if(n!==In)return!1;if(!Ft)return gh(n),Ft=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Sc(n.type,n.memoizedProps)),r&&(r=Un)){if(Cc(n))throw xh(),Error(t(418));for(;r;)ph(n,r),r=ti(r.nextSibling)}if(gh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){Un=ti(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}Un=null}}else Un=In?ti(n.stateNode.nextSibling):null;return!0}function xh(){for(var n=Un;n;)n=ti(n.nextSibling)}function ms(){Un=In=null,Ft=!1}function Nc(n){nr===null?nr=[n]:nr.push(n)}var dx=T.ReactCurrentBatchConfig;function ya(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(E){var O=h.refs;E===null?delete O[g]:O[g]=E},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ao(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function vh(n){var r=n._init;return r(n._payload)}function yh(n){function r(ne,X){if(n){var se=ne.deletions;se===null?(ne.deletions=[X],ne.flags|=16):se.push(X)}}function a(ne,X){if(!n)return null;for(;X!==null;)r(ne,X),X=X.sibling;return null}function u(ne,X){for(ne=new Map;X!==null;)X.key!==null?ne.set(X.key,X):ne.set(X.index,X),X=X.sibling;return ne}function h(ne,X){return ne=fi(ne,X),ne.index=0,ne.sibling=null,ne}function g(ne,X,se){return ne.index=se,n?(se=ne.alternate,se!==null?(se=se.index,se<X?(ne.flags|=2,X):se):(ne.flags|=2,X)):(ne.flags|=1048576,X)}function E(ne){return n&&ne.alternate===null&&(ne.flags|=2),ne}function O(ne,X,se,Ae){return X===null||X.tag!==6?(X=_u(se,ne.mode,Ae),X.return=ne,X):(X=h(X,se),X.return=ne,X)}function G(ne,X,se,Ae){var Xe=se.type;return Xe===D?ye(ne,X,se.props.children,Ae,se.key):X!==null&&(X.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===le&&vh(Xe)===X.type)?(Ae=h(X,se.props),Ae.ref=ya(ne,X,se),Ae.return=ne,Ae):(Ae=Zo(se.type,se.key,se.props,null,ne.mode,Ae),Ae.ref=ya(ne,X,se),Ae.return=ne,Ae)}function oe(ne,X,se,Ae){return X===null||X.tag!==4||X.stateNode.containerInfo!==se.containerInfo||X.stateNode.implementation!==se.implementation?(X=bu(se,ne.mode,Ae),X.return=ne,X):(X=h(X,se.children||[]),X.return=ne,X)}function ye(ne,X,se,Ae,Xe){return X===null||X.tag!==7?(X=zi(se,ne.mode,Ae,Xe),X.return=ne,X):(X=h(X,se),X.return=ne,X)}function Me(ne,X,se){if(typeof X=="string"&&X!==""||typeof X=="number")return X=_u(""+X,ne.mode,se),X.return=ne,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case U:return se=Zo(X.type,X.key,X.props,null,ne.mode,se),se.ref=ya(ne,null,X),se.return=ne,se;case F:return X=bu(X,ne.mode,se),X.return=ne,X;case le:var Ae=X._init;return Me(ne,Ae(X._payload),se)}if(Qe(X)||ee(X))return X=zi(X,ne.mode,se,null),X.return=ne,X;Ao(ne,X)}return null}function ve(ne,X,se,Ae){var Xe=X!==null?X.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Xe!==null?null:O(ne,X,""+se,Ae);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case U:return se.key===Xe?G(ne,X,se,Ae):null;case F:return se.key===Xe?oe(ne,X,se,Ae):null;case le:return Xe=se._init,ve(ne,X,Xe(se._payload),Ae)}if(Qe(se)||ee(se))return Xe!==null?null:ye(ne,X,se,Ae,null);Ao(ne,se)}return null}function Ue(ne,X,se,Ae,Xe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ne=ne.get(se)||null,O(X,ne,""+Ae,Xe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case U:return ne=ne.get(Ae.key===null?se:Ae.key)||null,G(X,ne,Ae,Xe);case F:return ne=ne.get(Ae.key===null?se:Ae.key)||null,oe(X,ne,Ae,Xe);case le:var Je=Ae._init;return Ue(ne,X,se,Je(Ae._payload),Xe)}if(Qe(Ae)||ee(Ae))return ne=ne.get(se)||null,ye(X,ne,Ae,Xe,null);Ao(X,Ae)}return null}function je(ne,X,se,Ae){for(var Xe=null,Je=null,$e=X,rt=X=0,en=null;$e!==null&&rt<se.length;rt++){$e.index>rt?(en=$e,$e=null):en=$e.sibling;var wt=ve(ne,$e,se[rt],Ae);if(wt===null){$e===null&&($e=en);break}n&&$e&&wt.alternate===null&&r(ne,$e),X=g(wt,X,rt),Je===null?Xe=wt:Je.sibling=wt,Je=wt,$e=en}if(rt===se.length)return a(ne,$e),Ft&&Pi(ne,rt),Xe;if($e===null){for(;rt<se.length;rt++)$e=Me(ne,se[rt],Ae),$e!==null&&(X=g($e,X,rt),Je===null?Xe=$e:Je.sibling=$e,Je=$e);return Ft&&Pi(ne,rt),Xe}for($e=u(ne,$e);rt<se.length;rt++)en=Ue($e,ne,rt,se[rt],Ae),en!==null&&(n&&en.alternate!==null&&$e.delete(en.key===null?rt:en.key),X=g(en,X,rt),Je===null?Xe=en:Je.sibling=en,Je=en);return n&&$e.forEach(function(hi){return r(ne,hi)}),Ft&&Pi(ne,rt),Xe}function Ge(ne,X,se,Ae){var Xe=ee(se);if(typeof Xe!="function")throw Error(t(150));if(se=Xe.call(se),se==null)throw Error(t(151));for(var Je=Xe=null,$e=X,rt=X=0,en=null,wt=se.next();$e!==null&&!wt.done;rt++,wt=se.next()){$e.index>rt?(en=$e,$e=null):en=$e.sibling;var hi=ve(ne,$e,wt.value,Ae);if(hi===null){$e===null&&($e=en);break}n&&$e&&hi.alternate===null&&r(ne,$e),X=g(hi,X,rt),Je===null?Xe=hi:Je.sibling=hi,Je=hi,$e=en}if(wt.done)return a(ne,$e),Ft&&Pi(ne,rt),Xe;if($e===null){for(;!wt.done;rt++,wt=se.next())wt=Me(ne,wt.value,Ae),wt!==null&&(X=g(wt,X,rt),Je===null?Xe=wt:Je.sibling=wt,Je=wt);return Ft&&Pi(ne,rt),Xe}for($e=u(ne,$e);!wt.done;rt++,wt=se.next())wt=Ue($e,ne,rt,wt.value,Ae),wt!==null&&(n&&wt.alternate!==null&&$e.delete(wt.key===null?rt:wt.key),X=g(wt,X,rt),Je===null?Xe=wt:Je.sibling=wt,Je=wt);return n&&$e.forEach(function(Vx){return r(ne,Vx)}),Ft&&Pi(ne,rt),Xe}function Ht(ne,X,se,Ae){if(typeof se=="object"&&se!==null&&se.type===D&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case U:e:{for(var Xe=se.key,Je=X;Je!==null;){if(Je.key===Xe){if(Xe=se.type,Xe===D){if(Je.tag===7){a(ne,Je.sibling),X=h(Je,se.props.children),X.return=ne,ne=X;break e}}else if(Je.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===le&&vh(Xe)===Je.type){a(ne,Je.sibling),X=h(Je,se.props),X.ref=ya(ne,Je,se),X.return=ne,ne=X;break e}a(ne,Je);break}else r(ne,Je);Je=Je.sibling}se.type===D?(X=zi(se.props.children,ne.mode,Ae,se.key),X.return=ne,ne=X):(Ae=Zo(se.type,se.key,se.props,null,ne.mode,Ae),Ae.ref=ya(ne,X,se),Ae.return=ne,ne=Ae)}return E(ne);case F:e:{for(Je=se.key;X!==null;){if(X.key===Je)if(X.tag===4&&X.stateNode.containerInfo===se.containerInfo&&X.stateNode.implementation===se.implementation){a(ne,X.sibling),X=h(X,se.children||[]),X.return=ne,ne=X;break e}else{a(ne,X);break}else r(ne,X);X=X.sibling}X=bu(se,ne.mode,Ae),X.return=ne,ne=X}return E(ne);case le:return Je=se._init,Ht(ne,X,Je(se._payload),Ae)}if(Qe(se))return je(ne,X,se,Ae);if(ee(se))return Ge(ne,X,se,Ae);Ao(ne,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,X!==null&&X.tag===6?(a(ne,X.sibling),X=h(X,se),X.return=ne,ne=X):(a(ne,X),X=_u(se,ne.mode,Ae),X.return=ne,ne=X),E(ne)):a(ne,X)}return Ht}var gs=yh(!0),Sh=yh(!1),Co=ni(null),Ro=null,xs=null,Pc=null;function kc(){Pc=xs=Ro=null}function Dc(n){var r=Co.current;Ut(Co),n._currentValue=r}function Lc(n,r,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===a)break;n=n.return}}function vs(n,r){Ro=n,Pc=xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(En=!0),n.firstContext=null)}function Wn(n){var r=n._currentValue;if(Pc!==n)if(n={context:n,memoizedValue:r,next:null},xs===null){if(Ro===null)throw Error(t(308));xs=n,Ro.dependencies={lanes:0,firstContext:n}}else xs=xs.next=n;return r}var ki=null;function Ic(n){ki===null?ki=[n]:ki.push(n)}function _h(n,r,a,u){var h=r.interleaved;return h===null?(a.next=a,Ic(r)):(a.next=h.next,h.next=a),r.interleaved=a,Rr(n,u)}function Rr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var si=!1;function Uc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Nr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ai(n,r,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(St&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,Rr(n,a)}return h=u.interleaved,h===null?(r.next=r,Ic(u)):(r.next=h.next,h.next=r),u.interleaved=r,Rr(n,a)}function No(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,Kl(n,a)}}function Mh(n,r){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?h=g=r:g=g.next=r}else h=g=r;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Po(n,r,a,u){var h=n.updateQueue;si=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,O=h.shared.pending;if(O!==null){h.shared.pending=null;var G=O,oe=G.next;G.next=null,E===null?g=oe:E.next=oe,E=G;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,O=ye.lastBaseUpdate,O!==E&&(O===null?ye.firstBaseUpdate=oe:O.next=oe,ye.lastBaseUpdate=G))}if(g!==null){var Me=h.baseState;E=0,ye=oe=G=null,O=g;do{var ve=O.lane,Ue=O.eventTime;if((u&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Ue,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var je=n,Ge=O;switch(ve=r,Ue=a,Ge.tag){case 1:if(je=Ge.payload,typeof je=="function"){Me=je.call(Ue,Me,ve);break e}Me=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ge.payload,ve=typeof je=="function"?je.call(Ue,Me,ve):je,ve==null)break e;Me=ae({},Me,ve);break e;case 2:si=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,ve=h.effects,ve===null?h.effects=[O]:ve.push(O))}else Ue={eventTime:Ue,lane:ve,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ye===null?(oe=ye=Ue,G=Me):ye=ye.next=Ue,E|=ve;if(O=O.next,O===null){if(O=h.shared.pending,O===null)break;ve=O,O=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(ye===null&&(G=Me),h.baseState=G,h.firstBaseUpdate=oe,h.lastBaseUpdate=ye,r=h.shared.interleaved,r!==null){h=r;do E|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);Ii|=E,n.lanes=E,n.memoizedState=Me}}function wh(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Sa={},xr=ni(Sa),_a=ni(Sa),ba=ni(Sa);function Di(n){if(n===Sa)throw Error(t(174));return n}function Fc(n,r){switch(Dt(ba,r),Dt(_a,n),Dt(xr,Sa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Te(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Te(r,n)}Ut(xr),Dt(xr,r)}function ys(){Ut(xr),Ut(_a),Ut(ba)}function Eh(n){Di(ba.current);var r=Di(xr.current),a=Te(r,n.type);r!==a&&(Dt(_a,n),Dt(xr,a))}function Oc(n){_a.current===n&&(Ut(xr),Ut(_a))}var Ot=ni(0);function ko(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zc=[];function Bc(){for(var n=0;n<zc.length;n++)zc[n]._workInProgressVersionPrimary=null;zc.length=0}var Do=T.ReactCurrentDispatcher,jc=T.ReactCurrentBatchConfig,Li=0,zt=null,Yt=null,Jt=null,Lo=!1,Ma=!1,wa=0,fx=0;function cn(){throw Error(t(321))}function Hc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!tr(n[a],r[a]))return!1;return!0}function Gc(n,r,a,u,h,g){if(Li=g,zt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Do.current=n===null||n.memoizedState===null?gx:xx,n=a(u,h),Ma){g=0;do{if(Ma=!1,wa=0,25<=g)throw Error(t(301));g+=1,Jt=Yt=null,r.updateQueue=null,Do.current=vx,n=a(u,h)}while(Ma)}if(Do.current=Fo,r=Yt!==null&&Yt.next!==null,Li=0,Jt=Yt=zt=null,Lo=!1,r)throw Error(t(300));return n}function Vc(){var n=wa!==0;return wa=0,n}function vr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?zt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Xn(){if(Yt===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=Yt.next;var r=Jt===null?zt.memoizedState:Jt.next;if(r!==null)Jt=r,Yt=n;else{if(n===null)throw Error(t(310));Yt=n,n={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?zt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function Ea(n,r){return typeof r=="function"?r(n):r}function Wc(n){var r=Xn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Yt,h=u.baseQueue,g=a.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}u.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,u=u.baseState;var O=E=null,G=null,oe=g;do{var ye=oe.lane;if((Li&ye)===ye)G!==null&&(G=G.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),u=oe.hasEagerState?oe.eagerState:n(u,oe.action);else{var Me={lane:ye,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};G===null?(O=G=Me,E=u):G=G.next=Me,zt.lanes|=ye,Ii|=ye}oe=oe.next}while(oe!==null&&oe!==g);G===null?E=u:G.next=O,tr(u,r.memoizedState)||(En=!0),r.memoizedState=u,r.baseState=E,r.baseQueue=G,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do g=h.lane,zt.lanes|=g,Ii|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Xc(n){var r=Xn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,g=r.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do g=n(g,E.action),E=E.next;while(E!==h);tr(g,r.memoizedState)||(En=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),a.lastRenderedState=g}return[g,u]}function Th(){}function Ah(n,r){var a=zt,u=Xn(),h=r(),g=!tr(u.memoizedState,h);if(g&&(u.memoizedState=h,En=!0),u=u.queue,qc(Nh.bind(null,a,u,n),[n]),u.getSnapshot!==r||g||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,Ta(9,Rh.bind(null,a,u,h,r),void 0,null),$t===null)throw Error(t(349));(Li&30)!==0||Ch(a,r,h)}return h}function Ch(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=zt.updateQueue,r===null?(r={lastEffect:null,stores:null},zt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Rh(n,r,a,u){r.value=a,r.getSnapshot=u,Ph(r)&&kh(n)}function Nh(n,r,a){return a(function(){Ph(r)&&kh(n)})}function Ph(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!tr(n,a)}catch{return!0}}function kh(n){var r=Rr(n,1);r!==null&&ar(r,n,1,-1)}function Dh(n){var r=vr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},r.queue=n,n=n.dispatch=mx.bind(null,zt,n),[r.memoizedState,n]}function Ta(n,r,a,u){return n={tag:n,create:r,destroy:a,deps:u,next:null},r=zt.updateQueue,r===null?(r={lastEffect:null,stores:null},zt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,r.lastEffect=n)),n}function Lh(){return Xn().memoizedState}function Io(n,r,a,u){var h=vr();zt.flags|=n,h.memoizedState=Ta(1|r,a,void 0,u===void 0?null:u)}function Uo(n,r,a,u){var h=Xn();u=u===void 0?null:u;var g=void 0;if(Yt!==null){var E=Yt.memoizedState;if(g=E.destroy,u!==null&&Hc(u,E.deps)){h.memoizedState=Ta(r,a,g,u);return}}zt.flags|=n,h.memoizedState=Ta(1|r,a,g,u)}function Ih(n,r){return Io(8390656,8,n,r)}function qc(n,r){return Uo(2048,8,n,r)}function Uh(n,r){return Uo(4,2,n,r)}function Fh(n,r){return Uo(4,4,n,r)}function Oh(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function zh(n,r,a){return a=a!=null?a.concat([n]):null,Uo(4,4,Oh.bind(null,r,n),a)}function Yc(){}function Bh(n,r){var a=Xn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Hc(r,u[1])?u[0]:(a.memoizedState=[n,r],n)}function jh(n,r){var a=Xn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Hc(r,u[1])?u[0]:(n=n(),a.memoizedState=[n,r],n)}function Hh(n,r,a){return(Li&21)===0?(n.baseState&&(n.baseState=!1,En=!0),n.memoizedState=a):(tr(a,r)||(a=mn(),zt.lanes|=a,Ii|=a,n.baseState=!0),r)}function hx(n,r){var a=Rt;Rt=a!==0&&4>a?a:4,n(!0);var u=jc.transition;jc.transition={};try{n(!1),r()}finally{Rt=a,jc.transition=u}}function Gh(){return Xn().memoizedState}function px(n,r,a){var u=ui(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Vh(n))Wh(r,a);else if(a=_h(n,r,a,u),a!==null){var h=xn();ar(a,n,u,h),Xh(a,r,u)}}function mx(n,r,a){var u=ui(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vh(n))Wh(r,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var E=r.lastRenderedState,O=g(E,a);if(h.hasEagerState=!0,h.eagerState=O,tr(O,E)){var G=r.interleaved;G===null?(h.next=h,Ic(r)):(h.next=G.next,G.next=h),r.interleaved=h;return}}catch{}finally{}a=_h(n,r,h,u),a!==null&&(h=xn(),ar(a,n,u,h),Xh(a,r,u))}}function Vh(n){var r=n.alternate;return n===zt||r!==null&&r===zt}function Wh(n,r){Ma=Lo=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Xh(n,r,a){if((a&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,Kl(n,a)}}var Fo={readContext:Wn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},gx={readContext:Wn,useCallback:function(n,r){return vr().memoizedState=[n,r===void 0?null:r],n},useContext:Wn,useEffect:Ih,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Io(4194308,4,Oh.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Io(4194308,4,n,r)},useInsertionEffect:function(n,r){return Io(4,2,n,r)},useMemo:function(n,r){var a=vr();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var u=vr();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=px.bind(null,zt,n),[u.memoizedState,n]},useRef:function(n){var r=vr();return n={current:n},r.memoizedState=n},useState:Dh,useDebugValue:Yc,useDeferredValue:function(n){return vr().memoizedState=n},useTransition:function(){var n=Dh(!1),r=n[0];return n=hx.bind(null,n[1]),vr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var u=zt,h=vr();if(Ft){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),$t===null)throw Error(t(349));(Li&30)!==0||Ch(u,r,a)}h.memoizedState=a;var g={value:a,getSnapshot:r};return h.queue=g,Ih(Nh.bind(null,u,g,n),[n]),u.flags|=2048,Ta(9,Rh.bind(null,u,g,a,r),void 0,null),a},useId:function(){var n=vr(),r=$t.identifierPrefix;if(Ft){var a=Cr,u=Ar;a=(u&~(1<<32-lt(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=wa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=fx++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},xx={readContext:Wn,useCallback:Bh,useContext:Wn,useEffect:qc,useImperativeHandle:zh,useInsertionEffect:Uh,useLayoutEffect:Fh,useMemo:jh,useReducer:Wc,useRef:Lh,useState:function(){return Wc(Ea)},useDebugValue:Yc,useDeferredValue:function(n){var r=Xn();return Hh(r,Yt.memoizedState,n)},useTransition:function(){var n=Wc(Ea)[0],r=Xn().memoizedState;return[n,r]},useMutableSource:Th,useSyncExternalStore:Ah,useId:Gh,unstable_isNewReconciler:!1},vx={readContext:Wn,useCallback:Bh,useContext:Wn,useEffect:qc,useImperativeHandle:zh,useInsertionEffect:Uh,useLayoutEffect:Fh,useMemo:jh,useReducer:Xc,useRef:Lh,useState:function(){return Xc(Ea)},useDebugValue:Yc,useDeferredValue:function(n){var r=Xn();return Yt===null?r.memoizedState=n:Hh(r,Yt.memoizedState,n)},useTransition:function(){var n=Xc(Ea)[0],r=Xn().memoizedState;return[n,r]},useMutableSource:Th,useSyncExternalStore:Ah,useId:Gh,unstable_isNewReconciler:!1};function rr(n,r){if(n&&n.defaultProps){r=ae({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Qc(n,r,a,u){r=n.memoizedState,a=a(u,r),a=a==null?r:ae({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Oo={isMounted:function(n){return(n=n._reactInternals)?pr(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var u=xn(),h=ui(n),g=Nr(u,h);g.payload=r,a!=null&&(g.callback=a),r=ai(n,g,h),r!==null&&(ar(r,n,h,u),No(r,n,h))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var u=xn(),h=ui(n),g=Nr(u,h);g.tag=1,g.payload=r,a!=null&&(g.callback=a),r=ai(n,g,h),r!==null&&(ar(r,n,h,u),No(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=xn(),u=ui(n),h=Nr(a,u);h.tag=2,r!=null&&(h.callback=r),r=ai(n,h,u),r!==null&&(ar(r,n,u,a),No(r,n,u))}};function qh(n,r,a,u,h,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,E):r.prototype&&r.prototype.isPureReactComponent?!fa(a,u)||!fa(h,g):!0}function Yh(n,r,a){var u=!1,h=ri,g=r.contextType;return typeof g=="object"&&g!==null?g=Wn(g):(h=wn(r)?Ri:ln.current,u=r.contextTypes,g=(u=u!=null)?fs(n,h):ri),r=new r(a,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Oo,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),r}function Qh(n,r,a,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==n&&Oo.enqueueReplaceState(r,r.state,null)}function Kc(n,r,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Uc(n);var g=r.contextType;typeof g=="object"&&g!==null?h.context=Wn(g):(g=wn(r)?Ri:ln.current,h.context=fs(n,g)),h.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Qc(n,r,g,a),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&Oo.enqueueReplaceState(h,h.state,null),Po(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,r){try{var a="",u=r;do a+=ge(u),u=u.return;while(u);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:h,digest:null}}function Zc(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Jc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var yx=typeof WeakMap=="function"?WeakMap:Map;function Kh(n,r,a){a=Nr(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){Wo||(Wo=!0,hu=u),Jc(n,r)},a}function Zh(n,r,a){a=Nr(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;a.payload=function(){return u(h)},a.callback=function(){Jc(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Jc(n,r),typeof u!="function"&&(li===null?li=new Set([this]):li.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),a}function Jh(n,r,a){var u=n.pingCache;if(u===null){u=n.pingCache=new yx;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(a)||(h.add(a),n=Dx.bind(null,n,r,a),r.then(n,n))}function $h(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function ep(n,r,a,u,h){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Nr(-1,1),r.tag=2,ai(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Sx=T.ReactCurrentOwner,En=!1;function gn(n,r,a,u){r.child=n===null?Sh(r,null,a,u):gs(r,n.child,a,u)}function tp(n,r,a,u,h){a=a.render;var g=r.ref;return vs(r,h),u=Gc(n,r,a,u,g,h),a=Vc(),n!==null&&!En?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Pr(n,r,h)):(Ft&&a&&Tc(r),r.flags|=1,gn(n,r,u,h),r.child)}function np(n,r,a,u,h){if(n===null){var g=a.type;return typeof g=="function"&&!Su(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=g,rp(n,r,g,u,h)):(n=Zo(a.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&h)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:fa,a(E,u)&&n.ref===r.ref)return Pr(n,r,h)}return r.flags|=1,n=fi(g,u),n.ref=r.ref,n.return=r,r.child=n}function rp(n,r,a,u,h){if(n!==null){var g=n.memoizedProps;if(fa(g,u)&&n.ref===r.ref)if(En=!1,r.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(En=!0);else return r.lanes=n.lanes,Pr(n,r,h)}return $c(n,r,a,u,h)}function ip(n,r,a){var u=r.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(bs,Fn),Fn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Dt(bs,Fn),Fn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,Dt(bs,Fn),Fn|=u}else g!==null?(u=g.baseLanes|a,r.memoizedState=null):u=a,Dt(bs,Fn),Fn|=u;return gn(n,r,h,a),r.child}function sp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function $c(n,r,a,u,h){var g=wn(a)?Ri:ln.current;return g=fs(r,g),vs(r,h),a=Gc(n,r,a,u,g,h),u=Vc(),n!==null&&!En?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Pr(n,r,h)):(Ft&&u&&Tc(r),r.flags|=1,gn(n,r,a,h),r.child)}function ap(n,r,a,u,h){if(wn(a)){var g=!0;bo(r)}else g=!1;if(vs(r,h),r.stateNode===null)Bo(n,r),Yh(r,a,u),Kc(r,a,u,h),u=!0;else if(n===null){var E=r.stateNode,O=r.memoizedProps;E.props=O;var G=E.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=Wn(oe):(oe=wn(a)?Ri:ln.current,oe=fs(r,oe));var ye=a.getDerivedStateFromProps,Me=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";Me||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(O!==u||G!==oe)&&Qh(r,E,u,oe),si=!1;var ve=r.memoizedState;E.state=ve,Po(r,u,E,h),G=r.memoizedState,O!==u||ve!==G||Mn.current||si?(typeof ye=="function"&&(Qc(r,a,ye,u),G=r.memoizedState),(O=si||qh(r,a,O,u,ve,G,oe))?(Me||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=G),E.props=u,E.state=G,E.context=oe,u=O):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{E=r.stateNode,bh(n,r),O=r.memoizedProps,oe=r.type===r.elementType?O:rr(r.type,O),E.props=oe,Me=r.pendingProps,ve=E.context,G=a.contextType,typeof G=="object"&&G!==null?G=Wn(G):(G=wn(a)?Ri:ln.current,G=fs(r,G));var Ue=a.getDerivedStateFromProps;(ye=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(O!==Me||ve!==G)&&Qh(r,E,u,G),si=!1,ve=r.memoizedState,E.state=ve,Po(r,u,E,h);var je=r.memoizedState;O!==Me||ve!==je||Mn.current||si?(typeof Ue=="function"&&(Qc(r,a,Ue,u),je=r.memoizedState),(oe=si||qh(r,a,oe,u,ve,je,G)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,je,G),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,je,G)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=je),E.props=u,E.state=je,E.context=G,u=oe):(typeof E.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),u=!1)}return eu(n,r,a,u,g,h)}function eu(n,r,a,u,h,g){sp(n,r);var E=(r.flags&128)!==0;if(!u&&!E)return h&&dh(r,a,!1),Pr(n,r,g);u=r.stateNode,Sx.current=r;var O=E&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&E?(r.child=gs(r,n.child,null,g),r.child=gs(r,null,O,g)):gn(n,r,O,g),r.memoizedState=u.state,h&&dh(r,a,!0),r.child}function op(n){var r=n.stateNode;r.pendingContext?ch(n,r.pendingContext,r.pendingContext!==r.context):r.context&&ch(n,r.context,!1),Fc(n,r.containerInfo)}function lp(n,r,a,u,h){return ms(),Nc(h),r.flags|=256,gn(n,r,a,u),r.child}var tu={dehydrated:null,treeContext:null,retryLane:0};function nu(n){return{baseLanes:n,cachePool:null,transitions:null}}function cp(n,r,a){var u=r.pendingProps,h=Ot.current,g=!1,E=(r.flags&128)!==0,O;if((O=E)||(O=n!==null&&n.memoizedState===null?!1:(h&2)!==0),O?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Dt(Ot,h&1),n===null)return Rc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(E=u.children,n=u.fallback,g?(u=r.mode,g=r.child,E={mode:"hidden",children:E},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Jo(E,u,0,null),n=zi(n,u,a,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=nu(a),r.memoizedState=tu,n):ru(r,E));if(h=n.memoizedState,h!==null&&(O=h.dehydrated,O!==null))return _x(n,r,E,u,O,h,a);if(g){g=u.fallback,E=r.mode,h=n.child,O=h.sibling;var G={mode:"hidden",children:u.children};return(E&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=G,r.deletions=null):(u=fi(h,G),u.subtreeFlags=h.subtreeFlags&14680064),O!==null?g=fi(O,g):(g=zi(g,E,a,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,E=n.child.memoizedState,E=E===null?nu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=n.childLanes&~a,r.memoizedState=tu,u}return g=n.child,n=g.sibling,u=fi(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=a),u.return=r,u.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=u,r.memoizedState=null,u}function ru(n,r){return r=Jo({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function zo(n,r,a,u){return u!==null&&Nc(u),gs(r,n.child,null,a),n=ru(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function _x(n,r,a,u,h,g,E){if(a)return r.flags&256?(r.flags&=-257,u=Zc(Error(t(422))),zo(n,r,E,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=u.fallback,h=r.mode,u=Jo({mode:"visible",children:u.children},h,0,null),g=zi(g,h,E,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&gs(r,n.child,null,E),r.child.memoizedState=nu(E),r.memoizedState=tu,g);if((r.mode&1)===0)return zo(n,r,E,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var O=u.dgst;return u=O,g=Error(t(419)),u=Zc(g,u,void 0),zo(n,r,E,u)}if(O=(E&n.childLanes)!==0,En||O){if(u=$t,u!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Rr(n,h),ar(u,n,h,-1))}return yu(),u=Zc(Error(t(421))),zo(n,r,E,u)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=Lx.bind(null,n),h._reactRetry=r,null):(n=g.treeContext,Un=ti(h.nextSibling),In=r,Ft=!0,nr=null,n!==null&&(Gn[Vn++]=Ar,Gn[Vn++]=Cr,Gn[Vn++]=Ni,Ar=n.id,Cr=n.overflow,Ni=r),r=ru(r,u.children),r.flags|=4096,r)}function up(n,r,a){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Lc(n.return,r,a)}function iu(n,r,a,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=h)}function dp(n,r,a){var u=r.pendingProps,h=u.revealOrder,g=u.tail;if(gn(n,r,u.children,a),u=Ot.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&up(n,a,r);else if(n.tag===19)up(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Dt(Ot,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(a=r.child,h=null;a!==null;)n=a.alternate,n!==null&&ko(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),iu(r,!1,h,a,g);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&ko(n)===null){r.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}iu(r,!0,a,null,g);break;case"together":iu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Bo(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Pr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ii|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=fi(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=fi(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function bx(n,r,a){switch(r.tag){case 3:op(r),ms();break;case 5:Eh(r);break;case 1:wn(r.type)&&bo(r);break;case 4:Fc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;Dt(Co,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Dt(Ot,Ot.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?cp(n,r,a):(Dt(Ot,Ot.current&1),n=Pr(n,r,a),n!==null?n.sibling:null);Dt(Ot,Ot.current&1);break;case 19:if(u=(a&r.childLanes)!==0,(n.flags&128)!==0){if(u)return dp(n,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Dt(Ot,Ot.current),u)break;return null;case 22:case 23:return r.lanes=0,ip(n,r,a)}return Pr(n,r,a)}var fp,su,hp,pp;fp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},su=function(){},hp=function(n,r,a,u){var h=n.memoizedProps;if(h!==u){n=r.stateNode,Di(xr.current);var g=null;switch(a){case"input":h=K(n,h),u=K(n,u),g=[];break;case"select":h=ae({},h,{value:void 0}),u=ae({},u,{value:void 0}),g=[];break;case"textarea":h=A(n,h),u=A(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=yo)}mt(a,u);var E;a=null;for(oe in h)if(!u.hasOwnProperty(oe)&&h.hasOwnProperty(oe)&&h[oe]!=null)if(oe==="style"){var O=h[oe];for(E in O)O.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?g||(g=[]):(g=g||[]).push(oe,null));for(oe in u){var G=u[oe];if(O=h!=null?h[oe]:void 0,u.hasOwnProperty(oe)&&G!==O&&(G!=null||O!=null))if(oe==="style")if(O){for(E in O)!O.hasOwnProperty(E)||G&&G.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in G)G.hasOwnProperty(E)&&O[E]!==G[E]&&(a||(a={}),a[E]=G[E])}else a||(g||(g=[]),g.push(oe,a)),a=G;else oe==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,O=O?O.__html:void 0,G!=null&&O!==G&&(g=g||[]).push(oe,G)):oe==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(oe,""+G):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(G!=null&&oe==="onScroll"&&It("scroll",n),g||O===G||(g=[])):(g=g||[]).push(oe,G))}a&&(g=g||[]).push("style",a);var oe=g;(r.updateQueue=oe)&&(r.flags|=4)}},pp=function(n,r,a,u){a!==u&&(r.flags|=4)};function Aa(n,r){if(!Ft)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function un(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(r)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,r}function Mx(n,r,a){var u=r.pendingProps;switch(Ac(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(r),null;case 1:return wn(r.type)&&_o(),un(r),null;case 3:return u=r.stateNode,ys(),Ut(Mn),Ut(ln),Bc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(To(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,nr!==null&&(gu(nr),nr=null))),su(n,r),un(r),null;case 5:Oc(r);var h=Di(ba.current);if(a=r.type,n!==null&&r.stateNode!=null)hp(n,r,a,u,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return un(r),null}if(n=Di(xr.current),To(r)){u=r.stateNode,a=r.type;var g=r.memoizedProps;switch(u[gr]=r,u[xa]=g,n=(r.mode&1)!==0,a){case"dialog":It("cancel",u),It("close",u);break;case"iframe":case"object":case"embed":It("load",u);break;case"video":case"audio":for(h=0;h<pa.length;h++)It(pa[h],u);break;case"source":It("error",u);break;case"img":case"image":case"link":It("error",u),It("load",u);break;case"details":It("toggle",u);break;case"input":nn(u,g),It("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},It("invalid",u);break;case"textarea":Y(u,g),It("invalid",u)}mt(a,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var O=g[E];E==="children"?typeof O=="string"?u.textContent!==O&&(g.suppressHydrationWarning!==!0&&vo(u.textContent,O,n),h=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(g.suppressHydrationWarning!==!0&&vo(u.textContent,O,n),h=["children",""+O]):o.hasOwnProperty(E)&&O!=null&&E==="onScroll"&&It("scroll",u)}switch(a){case"input":At(u),Ye(u,g,!0);break;case"textarea":At(u),J(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=yo)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=te(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(a,{is:u.is}):(n=E.createElement(a),a==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,a),n[gr]=r,n[xa]=u,fp(n,r,!1,!1),r.stateNode=n;e:{switch(E=st(a,u),a){case"dialog":It("cancel",n),It("close",n),h=u;break;case"iframe":case"object":case"embed":It("load",n),h=u;break;case"video":case"audio":for(h=0;h<pa.length;h++)It(pa[h],n);h=u;break;case"source":It("error",n),h=u;break;case"img":case"image":case"link":It("error",n),It("load",n),h=u;break;case"details":It("toggle",n),h=u;break;case"input":nn(n,u),h=K(n,u),It("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=ae({},u,{value:void 0}),It("invalid",n);break;case"textarea":Y(n,u),h=A(n,u),It("invalid",n);break;default:h=u}mt(a,h),O=h;for(g in O)if(O.hasOwnProperty(g)){var G=O[g];g==="style"?tt(n,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Ne(n,G)):g==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&ot(n,G):typeof G=="number"&&ot(n,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?G!=null&&g==="onScroll"&&It("scroll",n):G!=null&&N(n,g,G,E))}switch(a){case"input":At(n),Ye(n,u,!1);break;case"textarea":At(n),J(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Re(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?I(n,!!u.multiple,g,!1):u.defaultValue!=null&&I(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=yo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return un(r),null;case 6:if(n&&r.stateNode!=null)pp(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(a=Di(ba.current),Di(xr.current),To(r)){if(u=r.stateNode,a=r.memoizedProps,u[gr]=r,(g=u.nodeValue!==a)&&(n=In,n!==null))switch(n.tag){case 3:vo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&vo(u.nodeValue,a,(n.mode&1)!==0)}g&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[gr]=r,r.stateNode=u}return un(r),null;case 13:if(Ut(Ot),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&Un!==null&&(r.mode&1)!==0&&(r.flags&128)===0)xh(),ms(),r.flags|=98560,g=!1;else if(g=To(r),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[gr]=r}else ms(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;un(r),g=!1}else nr!==null&&(gu(nr),nr=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ot.current&1)!==0?Qt===0&&(Qt=3):yu())),r.updateQueue!==null&&(r.flags|=4),un(r),null);case 4:return ys(),su(n,r),n===null&&ma(r.stateNode.containerInfo),un(r),null;case 10:return Dc(r.type._context),un(r),null;case 17:return wn(r.type)&&_o(),un(r),null;case 19:if(Ut(Ot),g=r.memoizedState,g===null)return un(r),null;if(u=(r.flags&128)!==0,E=g.rendering,E===null)if(u)Aa(g,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(E=ko(n),E!==null){for(r.flags|=128,Aa(g,!1),u=E.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)g=a,n=u,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,n=E.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Dt(Ot,Ot.current&1|2),r.child}n=n.sibling}g.tail!==null&&Ee()>Ms&&(r.flags|=128,u=!0,Aa(g,!1),r.lanes=4194304)}else{if(!u)if(n=ko(E),n!==null){if(r.flags|=128,u=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Aa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Ft)return un(r),null}else 2*Ee()-g.renderingStartTime>Ms&&a!==1073741824&&(r.flags|=128,u=!0,Aa(g,!1),r.lanes=4194304);g.isBackwards?(E.sibling=r.child,r.child=E):(a=g.last,a!==null?a.sibling=E:r.child=E,g.last=E)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Ee(),r.sibling=null,a=Ot.current,Dt(Ot,u?a&1|2:a&1),r):(un(r),null);case 22:case 23:return vu(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Fn&1073741824)!==0&&(un(r),r.subtreeFlags&6&&(r.flags|=8192)):un(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function wx(n,r){switch(Ac(r),r.tag){case 1:return wn(r.type)&&_o(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ys(),Ut(Mn),Ut(ln),Bc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Oc(r),null;case 13:if(Ut(Ot),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ms()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ut(Ot),null;case 4:return ys(),null;case 10:return Dc(r.type._context),null;case 22:case 23:return vu(),null;case 24:return null;default:return null}}var jo=!1,dn=!1,Ex=typeof WeakSet=="function"?WeakSet:Set,ze=null;function _s(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Bt(n,r,u)}else a.current=null}function au(n,r,a){try{a()}catch(u){Bt(n,r,u)}}var mp=!1;function Tx(n,r){if(vc=ao,n=qf(),uc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,O=-1,G=-1,oe=0,ye=0,Me=n,ve=null;t:for(;;){for(var Ue;Me!==a||h!==0&&Me.nodeType!==3||(O=E+h),Me!==g||u!==0&&Me.nodeType!==3||(G=E+u),Me.nodeType===3&&(E+=Me.nodeValue.length),(Ue=Me.firstChild)!==null;)ve=Me,Me=Ue;for(;;){if(Me===n)break t;if(ve===a&&++oe===h&&(O=E),ve===g&&++ye===u&&(G=E),(Ue=Me.nextSibling)!==null)break;Me=ve,ve=Me.parentNode}Me=Ue}a=O===-1||G===-1?null:{start:O,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(yc={focusedElem:n,selectionRange:a},ao=!1,ze=r;ze!==null;)if(r=ze,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ze=n;else for(;ze!==null;){r=ze;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ge=je.memoizedProps,Ht=je.memoizedState,ne=r.stateNode,X=ne.getSnapshotBeforeUpdate(r.elementType===r.type?Ge:rr(r.type,Ge),Ht);ne.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var se=r.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Bt(r,r.return,Ae)}if(n=r.sibling,n!==null){n.return=r.return,ze=n;break}ze=r.return}return je=mp,mp=!1,je}function Ca(n,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&au(r,a,g)}h=h.next}while(h!==u)}}function Ho(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function ou(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function gp(n){var r=n.alternate;r!==null&&(n.alternate=null,gp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[gr],delete r[xa],delete r[Mc],delete r[lx],delete r[cx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xp(n){return n.tag===5||n.tag===3||n.tag===4}function vp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function lu(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=yo));else if(u!==4&&(n=n.child,n!==null))for(lu(n,r,a),n=n.sibling;n!==null;)lu(n,r,a),n=n.sibling}function cu(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(cu(n,r,a),n=n.sibling;n!==null;)cu(n,r,a),n=n.sibling}var rn=null,ir=!1;function oi(n,r,a){for(a=a.child;a!==null;)yp(n,r,a),a=a.sibling}function yp(n,r,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 5:dn||_s(a,r);case 6:var u=rn,h=ir;rn=null,oi(n,r,a),rn=u,ir=h,rn!==null&&(ir?(n=rn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):rn.removeChild(a.stateNode));break;case 18:rn!==null&&(ir?(n=rn,a=a.stateNode,n.nodeType===8?bc(n.parentNode,a):n.nodeType===1&&bc(n,a),aa(n)):bc(rn,a.stateNode));break;case 4:u=rn,h=ir,rn=a.stateNode.containerInfo,ir=!0,oi(n,r,a),rn=u,ir=h;break;case 0:case 11:case 14:case 15:if(!dn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&au(a,r,E),h=h.next}while(h!==u)}oi(n,r,a);break;case 1:if(!dn&&(_s(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(O){Bt(a,r,O)}oi(n,r,a);break;case 21:oi(n,r,a);break;case 22:a.mode&1?(dn=(u=dn)||a.memoizedState!==null,oi(n,r,a),dn=u):oi(n,r,a);break;default:oi(n,r,a)}}function Sp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ex),r.forEach(function(u){var h=Ix.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function sr(n,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var g=n,E=r,O=E;e:for(;O!==null;){switch(O.tag){case 5:rn=O.stateNode,ir=!1;break e;case 3:rn=O.stateNode.containerInfo,ir=!0;break e;case 4:rn=O.stateNode.containerInfo,ir=!0;break e}O=O.return}if(rn===null)throw Error(t(160));yp(g,E,h),rn=null,ir=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(oe){Bt(h,r,oe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)_p(r,n),r=r.sibling}function _p(n,r){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(sr(r,n),yr(n),u&4){try{Ca(3,n,n.return),Ho(3,n)}catch(Ge){Bt(n,n.return,Ge)}try{Ca(5,n,n.return)}catch(Ge){Bt(n,n.return,Ge)}}break;case 1:sr(r,n),yr(n),u&512&&a!==null&&_s(a,a.return);break;case 5:if(sr(r,n),yr(n),u&512&&a!==null&&_s(a,a.return),n.flags&32){var h=n.stateNode;try{ot(h,"")}catch(Ge){Bt(n,n.return,Ge)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,E=a!==null?a.memoizedProps:g,O=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{O==="input"&&g.type==="radio"&&g.name!=null&&ht(h,g),st(O,E);var oe=st(O,g);for(E=0;E<G.length;E+=2){var ye=G[E],Me=G[E+1];ye==="style"?tt(h,Me):ye==="dangerouslySetInnerHTML"?Ne(h,Me):ye==="children"?ot(h,Me):N(h,ye,Me,oe)}switch(O){case"input":dt(h,g);break;case"textarea":L(h,g);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Ue=g.value;Ue!=null?I(h,!!g.multiple,Ue,!1):ve!==!!g.multiple&&(g.defaultValue!=null?I(h,!!g.multiple,g.defaultValue,!0):I(h,!!g.multiple,g.multiple?[]:"",!1))}h[xa]=g}catch(Ge){Bt(n,n.return,Ge)}}break;case 6:if(sr(r,n),yr(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Ge){Bt(n,n.return,Ge)}}break;case 3:if(sr(r,n),yr(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{aa(r.containerInfo)}catch(Ge){Bt(n,n.return,Ge)}break;case 4:sr(r,n),yr(n);break;case 13:sr(r,n),yr(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(fu=Ee())),u&4&&Sp(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(dn=(oe=dn)||ye,sr(r,n),dn=oe):sr(r,n),yr(n),u&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!ye&&(n.mode&1)!==0)for(ze=n,ye=n.child;ye!==null;){for(Me=ze=ye;ze!==null;){switch(ve=ze,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ca(4,ve,ve.return);break;case 1:_s(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){u=ve,a=ve.return;try{r=u,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(Ge){Bt(u,a,Ge)}}break;case 5:_s(ve,ve.return);break;case 22:if(ve.memoizedState!==null){wp(Me);continue}}Ue!==null?(Ue.return=ve,ze=Ue):wp(Me)}ye=ye.sibling}e:for(ye=null,Me=n;;){if(Me.tag===5){if(ye===null){ye=Me;try{h=Me.stateNode,oe?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(O=Me.stateNode,G=Me.memoizedProps.style,E=G!=null&&G.hasOwnProperty("display")?G.display:null,O.style.display=et("display",E))}catch(Ge){Bt(n,n.return,Ge)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=oe?"":Me.memoizedProps}catch(Ge){Bt(n,n.return,Ge)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:sr(r,n),yr(n),u&4&&Sp(n);break;case 21:break;default:sr(r,n),yr(n)}}function yr(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(xp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(ot(h,""),u.flags&=-33);var g=vp(n);cu(n,g,h);break;case 3:case 4:var E=u.stateNode.containerInfo,O=vp(n);lu(n,O,E);break;default:throw Error(t(161))}}catch(G){Bt(n,n.return,G)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Ax(n,r,a){ze=n,bp(n)}function bp(n,r,a){for(var u=(n.mode&1)!==0;ze!==null;){var h=ze,g=h.child;if(h.tag===22&&u){var E=h.memoizedState!==null||jo;if(!E){var O=h.alternate,G=O!==null&&O.memoizedState!==null||dn;O=jo;var oe=dn;if(jo=E,(dn=G)&&!oe)for(ze=h;ze!==null;)E=ze,G=E.child,E.tag===22&&E.memoizedState!==null?Ep(h):G!==null?(G.return=E,ze=G):Ep(h);for(;g!==null;)ze=g,bp(g),g=g.sibling;ze=h,jo=O,dn=oe}Mp(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,ze=g):Mp(n)}}function Mp(n){for(;ze!==null;){var r=ze;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:dn||Ho(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!dn)if(a===null)u.componentDidMount();else{var h=r.elementType===r.type?a.memoizedProps:rr(r.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&wh(r,g,u);break;case 3:var E=r.updateQueue;if(E!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}wh(r,E,a)}break;case 5:var O=r.stateNode;if(a===null&&r.flags&4){a=O;var G=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var oe=r.alternate;if(oe!==null){var ye=oe.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&aa(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}dn||r.flags&512&&ou(r)}catch(ve){Bt(r,r.return,ve)}}if(r===n){ze=null;break}if(a=r.sibling,a!==null){a.return=r.return,ze=a;break}ze=r.return}}function wp(n){for(;ze!==null;){var r=ze;if(r===n){ze=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ze=a;break}ze=r.return}}function Ep(n){for(;ze!==null;){var r=ze;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Ho(4,r)}catch(G){Bt(r,a,G)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(G){Bt(r,h,G)}}var g=r.return;try{ou(r)}catch(G){Bt(r,g,G)}break;case 5:var E=r.return;try{ou(r)}catch(G){Bt(r,E,G)}}}catch(G){Bt(r,r.return,G)}if(r===n){ze=null;break}var O=r.sibling;if(O!==null){O.return=r.return,ze=O;break}ze=r.return}}var Cx=Math.ceil,Go=T.ReactCurrentDispatcher,uu=T.ReactCurrentOwner,qn=T.ReactCurrentBatchConfig,St=0,$t=null,Vt=null,sn=0,Fn=0,bs=ni(0),Qt=0,Ra=null,Ii=0,Vo=0,du=0,Na=null,Tn=null,fu=0,Ms=1/0,kr=null,Wo=!1,hu=null,li=null,Xo=!1,ci=null,qo=0,Pa=0,pu=null,Yo=-1,Qo=0;function xn(){return(St&6)!==0?Ee():Yo!==-1?Yo:Yo=Ee()}function ui(n){return(n.mode&1)===0?1:(St&2)!==0&&sn!==0?sn&-sn:dx.transition!==null?(Qo===0&&(Qo=mn()),Qo):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:Af(n.type)),n)}function ar(n,r,a,u){if(50<Pa)throw Pa=0,pu=null,Error(t(185));bn(n,a,u),((St&2)===0||n!==$t)&&(n===$t&&((St&2)===0&&(Vo|=a),Qt===4&&di(n,sn)),An(n,u),a===1&&St===0&&(r.mode&1)===0&&(Ms=Ee()+500,Mo&&ii()))}function An(n,r){var a=n.callbackNode;jn(n,r);var u=mr(n,n===$t?sn:0);if(u===0)a!==null&&de(a),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(a!=null&&de(a),r===1)n.tag===0?ux(Ap.bind(null,n)):fh(Ap.bind(null,n)),ax(function(){(St&6)===0&&ii()}),a=null;else{switch(yf(u)){case 1:a=He;break;case 4:a=nt;break;case 16:a=it;break;case 536870912:a=vt;break;default:a=it}a=Ip(a,Tp.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Tp(n,r){if(Yo=-1,Qo=0,(St&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ws()&&n.callbackNode!==a)return null;var u=mr(n,n===$t?sn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Ko(n,u);else{r=u;var h=St;St|=2;var g=Rp();($t!==n||sn!==r)&&(kr=null,Ms=Ee()+500,Fi(n,r));do try{Px();break}catch(O){Cp(n,O)}while(!0);kc(),Go.current=g,St=h,Vt!==null?r=0:($t=null,sn=0,r=Qt)}if(r!==0){if(r===2&&(h=wr(n),h!==0&&(u=h,r=mu(n,h))),r===1)throw a=Ra,Fi(n,0),di(n,u),An(n,Ee()),a;if(r===6)di(n,u);else{if(h=n.current.alternate,(u&30)===0&&!Rx(h)&&(r=Ko(n,u),r===2&&(g=wr(n),g!==0&&(u=g,r=mu(n,g))),r===1))throw a=Ra,Fi(n,0),di(n,u),An(n,Ee()),a;switch(n.finishedWork=h,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Oi(n,Tn,kr);break;case 3:if(di(n,u),(u&130023424)===u&&(r=fu+500-Ee(),10<r)){if(mr(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){xn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=_c(Oi.bind(null,n,Tn,kr),r);break}Oi(n,Tn,kr);break;case 4:if(di(n,u),(u&4194240)===u)break;for(r=n.eventTimes,h=-1;0<u;){var E=31-lt(u);g=1<<E,E=r[E],E>h&&(h=E),u&=~g}if(u=h,u=Ee()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Cx(u/1960))-u,10<u){n.timeoutHandle=_c(Oi.bind(null,n,Tn,kr),u);break}Oi(n,Tn,kr);break;case 5:Oi(n,Tn,kr);break;default:throw Error(t(329))}}}return An(n,Ee()),n.callbackNode===a?Tp.bind(null,n):null}function mu(n,r){var a=Na;return n.current.memoizedState.isDehydrated&&(Fi(n,r).flags|=256),n=Ko(n,r),n!==2&&(r=Tn,Tn=a,r!==null&&gu(r)),n}function gu(n){Tn===null?Tn=n:Tn.push.apply(Tn,n)}function Rx(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],g=h.getSnapshot;h=h.value;try{if(!tr(g(),h))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function di(n,r){for(r&=~du,r&=~Vo,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-lt(r),u=1<<a;n[a]=-1,r&=~u}}function Ap(n){if((St&6)!==0)throw Error(t(327));ws();var r=mr(n,0);if((r&1)===0)return An(n,Ee()),null;var a=Ko(n,r);if(n.tag!==0&&a===2){var u=wr(n);u!==0&&(r=u,a=mu(n,u))}if(a===1)throw a=Ra,Fi(n,0),di(n,r),An(n,Ee()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Oi(n,Tn,kr),An(n,Ee()),null}function xu(n,r){var a=St;St|=1;try{return n(r)}finally{St=a,St===0&&(Ms=Ee()+500,Mo&&ii())}}function Ui(n){ci!==null&&ci.tag===0&&(St&6)===0&&ws();var r=St;St|=1;var a=qn.transition,u=Rt;try{if(qn.transition=null,Rt=1,n)return n()}finally{Rt=u,qn.transition=a,St=r,(St&6)===0&&ii()}}function vu(){Fn=bs.current,Ut(bs)}function Fi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,sx(a)),Vt!==null)for(a=Vt.return;a!==null;){var u=a;switch(Ac(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&_o();break;case 3:ys(),Ut(Mn),Ut(ln),Bc();break;case 5:Oc(u);break;case 4:ys();break;case 13:Ut(Ot);break;case 19:Ut(Ot);break;case 10:Dc(u.type._context);break;case 22:case 23:vu()}a=a.return}if($t=n,Vt=n=fi(n.current,null),sn=Fn=r,Qt=0,Ra=null,du=Vo=Ii=0,Tn=Na=null,ki!==null){for(r=0;r<ki.length;r++)if(a=ki[r],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,g=a.pending;if(g!==null){var E=g.next;g.next=h,u.next=E}a.pending=u}ki=null}return n}function Cp(n,r){do{var a=Vt;try{if(kc(),Do.current=Fo,Lo){for(var u=zt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Lo=!1}if(Li=0,Jt=Yt=zt=null,Ma=!1,wa=0,uu.current=null,a===null||a.return===null){Qt=1,Ra=r,Vt=null;break}e:{var g=n,E=a.return,O=a,G=r;if(r=sn,O.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var oe=G,ye=O,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ue=$h(E);if(Ue!==null){Ue.flags&=-257,ep(Ue,E,O,g,r),Ue.mode&1&&Jh(g,oe,r),r=Ue,G=oe;var je=r.updateQueue;if(je===null){var Ge=new Set;Ge.add(G),r.updateQueue=Ge}else je.add(G);break e}else{if((r&1)===0){Jh(g,oe,r),yu();break e}G=Error(t(426))}}else if(Ft&&O.mode&1){var Ht=$h(E);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),ep(Ht,E,O,g,r),Nc(Ss(G,O));break e}}g=G=Ss(G,O),Qt!==4&&(Qt=2),Na===null?Na=[g]:Na.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var ne=Kh(g,G,r);Mh(g,ne);break e;case 1:O=G;var X=g.type,se=g.stateNode;if((g.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(li===null||!li.has(se)))){g.flags|=65536,r&=-r,g.lanes|=r;var Ae=Zh(g,O,r);Mh(g,Ae);break e}}g=g.return}while(g!==null)}Pp(a)}catch(Xe){r=Xe,Vt===a&&a!==null&&(Vt=a=a.return);continue}break}while(!0)}function Rp(){var n=Go.current;return Go.current=Fo,n===null?Fo:n}function yu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),$t===null||(Ii&268435455)===0&&(Vo&268435455)===0||di($t,sn)}function Ko(n,r){var a=St;St|=2;var u=Rp();($t!==n||sn!==r)&&(kr=null,Fi(n,r));do try{Nx();break}catch(h){Cp(n,h)}while(!0);if(kc(),St=a,Go.current=u,Vt!==null)throw Error(t(261));return $t=null,sn=0,Qt}function Nx(){for(;Vt!==null;)Np(Vt)}function Px(){for(;Vt!==null&&!Z();)Np(Vt)}function Np(n){var r=Lp(n.alternate,n,Fn);n.memoizedProps=n.pendingProps,r===null?Pp(n):Vt=r,uu.current=null}function Pp(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=Mx(a,r,Fn),a!==null){Vt=a;return}}else{if(a=wx(a,r),a!==null){a.flags&=32767,Vt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,Vt=null;return}}if(r=r.sibling,r!==null){Vt=r;return}Vt=r=n}while(r!==null);Qt===0&&(Qt=5)}function Oi(n,r,a){var u=Rt,h=qn.transition;try{qn.transition=null,Rt=1,kx(n,r,a,u)}finally{qn.transition=h,Rt=u}return null}function kx(n,r,a,u){do ws();while(ci!==null);if((St&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(ro(n,g),n===$t&&(Vt=$t=null,sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xo||(Xo=!0,Ip(it,function(){return ws(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=qn.transition,qn.transition=null;var E=Rt;Rt=1;var O=St;St|=4,uu.current=null,Tx(n,a),_p(a,n),Jg(yc),ao=!!vc,yc=vc=null,n.current=a,Ax(a),Ce(),St=O,Rt=E,qn.transition=g}else n.current=a;if(Xo&&(Xo=!1,ci=n,qo=h),g=n.pendingLanes,g===0&&(li=null),an(a.stateNode),An(n,Ee()),r!==null)for(u=n.onRecoverableError,a=0;a<r.length;a++)h=r[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(Wo)throw Wo=!1,n=hu,hu=null,n;return(qo&1)!==0&&n.tag!==0&&ws(),g=n.pendingLanes,(g&1)!==0?n===pu?Pa++:(Pa=0,pu=n):Pa=0,ii(),null}function ws(){if(ci!==null){var n=yf(qo),r=qn.transition,a=Rt;try{if(qn.transition=null,Rt=16>n?16:n,ci===null)var u=!1;else{if(n=ci,ci=null,qo=0,(St&6)!==0)throw Error(t(331));var h=St;for(St|=4,ze=n.current;ze!==null;){var g=ze,E=g.child;if((ze.flags&16)!==0){var O=g.deletions;if(O!==null){for(var G=0;G<O.length;G++){var oe=O[G];for(ze=oe;ze!==null;){var ye=ze;switch(ye.tag){case 0:case 11:case 15:Ca(8,ye,g)}var Me=ye.child;if(Me!==null)Me.return=ye,ze=Me;else for(;ze!==null;){ye=ze;var ve=ye.sibling,Ue=ye.return;if(gp(ye),ye===oe){ze=null;break}if(ve!==null){ve.return=Ue,ze=ve;break}ze=Ue}}}var je=g.alternate;if(je!==null){var Ge=je.child;if(Ge!==null){je.child=null;do{var Ht=Ge.sibling;Ge.sibling=null,Ge=Ht}while(Ge!==null)}}ze=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,ze=E;else e:for(;ze!==null;){if(g=ze,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ca(9,g,g.return)}var ne=g.sibling;if(ne!==null){ne.return=g.return,ze=ne;break e}ze=g.return}}var X=n.current;for(ze=X;ze!==null;){E=ze;var se=E.child;if((E.subtreeFlags&2064)!==0&&se!==null)se.return=E,ze=se;else e:for(E=X;ze!==null;){if(O=ze,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Ho(9,O)}}catch(Xe){Bt(O,O.return,Xe)}if(O===E){ze=null;break e}var Ae=O.sibling;if(Ae!==null){Ae.return=O.return,ze=Ae;break e}ze=O.return}}if(St=h,ii(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Et,n)}catch{}u=!0}return u}finally{Rt=a,qn.transition=r}}return!1}function kp(n,r,a){r=Ss(a,r),r=Kh(n,r,1),n=ai(n,r,1),r=xn(),n!==null&&(bn(n,1,r),An(n,r))}function Bt(n,r,a){if(n.tag===3)kp(n,n,a);else for(;r!==null;){if(r.tag===3){kp(r,n,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(li===null||!li.has(u))){n=Ss(a,n),n=Zh(r,n,1),r=ai(r,n,1),n=xn(),r!==null&&(bn(r,1,n),An(r,n));break}}r=r.return}}function Dx(n,r,a){var u=n.pingCache;u!==null&&u.delete(r),r=xn(),n.pingedLanes|=n.suspendedLanes&a,$t===n&&(sn&a)===a&&(Qt===4||Qt===3&&(sn&130023424)===sn&&500>Ee()-fu?Fi(n,0):du|=a),An(n,r)}function Dp(n,r){r===0&&((n.mode&1)===0?r=1:(r=er,er<<=1,(er&130023424)===0&&(er=4194304)));var a=xn();n=Rr(n,r),n!==null&&(bn(n,r,a),An(n,a))}function Lx(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Dp(n,a)}function Ix(n,r){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Dp(n,a)}var Lp;Lp=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Mn.current)En=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return En=!1,bx(n,r,a);En=(n.flags&131072)!==0}else En=!1,Ft&&(r.flags&1048576)!==0&&hh(r,Eo,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Bo(n,r),n=r.pendingProps;var h=fs(r,ln.current);vs(r,a),h=Gc(null,r,u,n,h,a);var g=Vc();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,wn(u)?(g=!0,bo(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Uc(r),h.updater=Oo,r.stateNode=h,h._reactInternals=r,Kc(r,u,n,a),r=eu(null,r,u,!0,g,a)):(r.tag=0,Ft&&g&&Tc(r),gn(null,r,h,a),r=r.child),r;case 16:u=r.elementType;e:{switch(Bo(n,r),n=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=Fx(u),n=rr(u,n),h){case 0:r=$c(null,r,u,n,a);break e;case 1:r=ap(null,r,u,n,a);break e;case 11:r=tp(null,r,u,n,a);break e;case 14:r=np(null,r,u,rr(u.type,n),a);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:rr(u,h),$c(n,r,u,h,a);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:rr(u,h),ap(n,r,u,h,a);case 3:e:{if(op(r),n===null)throw Error(t(387));u=r.pendingProps,g=r.memoizedState,h=g.element,bh(n,r),Po(r,u,null,a);var E=r.memoizedState;if(u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=Ss(Error(t(423)),r),r=lp(n,r,u,a,h);break e}else if(u!==h){h=Ss(Error(t(424)),r),r=lp(n,r,u,a,h);break e}else for(Un=ti(r.stateNode.containerInfo.firstChild),In=r,Ft=!0,nr=null,a=Sh(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),u===h){r=Pr(n,r,a);break e}gn(n,r,u,a)}r=r.child}return r;case 5:return Eh(r),n===null&&Rc(r),u=r.type,h=r.pendingProps,g=n!==null?n.memoizedProps:null,E=h.children,Sc(u,h)?E=null:g!==null&&Sc(u,g)&&(r.flags|=32),sp(n,r),gn(n,r,E,a),r.child;case 6:return n===null&&Rc(r),null;case 13:return cp(n,r,a);case 4:return Fc(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=gs(r,null,u,a):gn(n,r,u,a),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:rr(u,h),tp(n,r,u,h,a);case 7:return gn(n,r,r.pendingProps,a),r.child;case 8:return gn(n,r,r.pendingProps.children,a),r.child;case 12:return gn(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,g=r.memoizedProps,E=h.value,Dt(Co,u._currentValue),u._currentValue=E,g!==null)if(tr(g.value,E)){if(g.children===h.children&&!Mn.current){r=Pr(n,r,a);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var O=g.dependencies;if(O!==null){E=g.child;for(var G=O.firstContext;G!==null;){if(G.context===u){if(g.tag===1){G=Nr(-1,a&-a),G.tag=2;var oe=g.updateQueue;if(oe!==null){oe=oe.shared;var ye=oe.pending;ye===null?G.next=G:(G.next=ye.next,ye.next=G),oe.pending=G}}g.lanes|=a,G=g.alternate,G!==null&&(G.lanes|=a),Lc(g.return,a,r),O.lanes|=a;break}G=G.next}}else if(g.tag===10)E=g.type===r.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,O=E.alternate,O!==null&&(O.lanes|=a),Lc(E,a,r),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===r){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}gn(n,r,h.children,a),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,vs(r,a),h=Wn(h),u=u(h),r.flags|=1,gn(n,r,u,a),r.child;case 14:return u=r.type,h=rr(u,r.pendingProps),h=rr(u.type,h),np(n,r,u,h,a);case 15:return rp(n,r,r.type,r.pendingProps,a);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:rr(u,h),Bo(n,r),r.tag=1,wn(u)?(n=!0,bo(r)):n=!1,vs(r,a),Yh(r,u,h),Kc(r,u,h,a),eu(null,r,u,!0,n,a);case 19:return dp(n,r,a);case 22:return ip(n,r,a)}throw Error(t(156,r.tag))};function Ip(n,r){return ce(n,r)}function Ux(n,r,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,r,a,u){return new Ux(n,r,a,u)}function Su(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fx(n){if(typeof n=="function")return Su(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===me)return 14}return 2}function fi(n,r){var a=n.alternate;return a===null?(a=Yn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Zo(n,r,a,u,h,g){var E=2;if(u=n,typeof n=="function")Su(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case D:return zi(a.children,h,g,r);case B:E=8,h|=8;break;case P:return n=Yn(12,a,r,h|2),n.elementType=P,n.lanes=g,n;case $:return n=Yn(13,a,r,h),n.elementType=$,n.lanes=g,n;case ue:return n=Yn(19,a,r,h),n.elementType=ue,n.lanes=g,n;case pe:return Jo(a,h,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:E=10;break e;case j:E=9;break e;case W:E=11;break e;case me:E=14;break e;case le:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Yn(E,a,r,h),r.elementType=n,r.type=u,r.lanes=g,r}function zi(n,r,a,u){return n=Yn(7,n,u,r),n.lanes=a,n}function Jo(n,r,a,u){return n=Yn(22,n,u,r),n.elementType=pe,n.lanes=a,n.stateNode={isHidden:!1},n}function _u(n,r,a){return n=Yn(6,n,null,r),n.lanes=a,n}function bu(n,r,a){return r=Yn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Ox(n,r,a,u,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hn(0),this.expirationTimes=Hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Mu(n,r,a,u,h,g,E,O,G){return n=new Ox(n,r,a,O,G),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Yn(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(g),n}function zx(n,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:r,implementation:a}}function Up(n){if(!n)return ri;n=n._reactInternals;e:{if(pr(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(wn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(wn(a))return uh(n,a,r)}return r}function Fp(n,r,a,u,h,g,E,O,G){return n=Mu(a,u,!0,n,h,g,E,O,G),n.context=Up(null),a=n.current,u=xn(),h=ui(a),g=Nr(u,h),g.callback=r??null,ai(a,g,h),n.current.lanes=h,bn(n,h,u),An(n,u),n}function $o(n,r,a,u){var h=r.current,g=xn(),E=ui(h);return a=Up(a),r.context===null?r.context=a:r.pendingContext=a,r=Nr(g,E),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=ai(h,r,E),n!==null&&(ar(n,h,E,g),No(n,h,E)),E}function el(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Op(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function wu(n,r){Op(n,r),(n=n.alternate)&&Op(n,r)}function Bx(){return null}var zp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Eu(n){this._internalRoot=n}tl.prototype.render=Eu.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));$o(n,r,null,null)},tl.prototype.unmount=Eu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ui(function(){$o(null,n,null,null)}),r[Er]=null}};function tl(n){this._internalRoot=n}tl.prototype.unstable_scheduleHydration=function(n){if(n){var r=bf();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Jr.length&&r!==0&&r<Jr[a].priority;a++);Jr.splice(a,0,n),a===0&&Ef(n)}};function Tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function jx(n,r,a,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var oe=el(E);g.call(oe)}}var E=Fp(r,u,n,0,null,!1,!1,"",Bp);return n._reactRootContainer=E,n[Er]=E.current,ma(n.nodeType===8?n.parentNode:n),Ui(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var O=u;u=function(){var oe=el(G);O.call(oe)}}var G=Mu(n,0,!1,null,null,!1,!1,"",Bp);return n._reactRootContainer=G,n[Er]=G.current,ma(n.nodeType===8?n.parentNode:n),Ui(function(){$o(r,G,a,u)}),G}function rl(n,r,a,u,h){var g=a._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var O=h;h=function(){var G=el(E);O.call(G)}}$o(r,E,n,h)}else E=jx(a,r,n,h,u);return el(E)}Sf=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=qt(r.pendingLanes);a!==0&&(Kl(r,a|1),An(r,Ee()),(St&6)===0&&(Ms=Ee()+500,ii()))}break;case 13:Ui(function(){var u=Rr(n,1);if(u!==null){var h=xn();ar(u,n,1,h)}}),wu(n,1)}},Zl=function(n){if(n.tag===13){var r=Rr(n,134217728);if(r!==null){var a=xn();ar(r,n,134217728,a)}wu(n,134217728)}},_f=function(n){if(n.tag===13){var r=ui(n),a=Rr(n,r);if(a!==null){var u=xn();ar(a,n,r,u)}wu(n,r)}},bf=function(){return Rt},Mf=function(n,r){var a=Rt;try{return Rt=n,r()}finally{Rt=a}},ke=function(n,r,a){switch(r){case"input":if(dt(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==n&&u.form===n.form){var h=So(u);if(!h)throw Error(t(90));pt(u),dt(u,h)}}}break;case"textarea":L(n,a);break;case"select":r=a.value,r!=null&&I(n,!!a.multiple,r,!1)}},Lt=xu,Xt=Ui;var Hx={usingClientEntryPoint:!1,Events:[va,us,So,Le,at,xu]},ka={findFiberByHostInstance:Ci,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gx={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=R(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||Bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Et=il.inject(Gx),xt=il}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx,Cn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tu(r))throw Error(t(200));return zx(n,r,null,a)},Cn.createRoot=function(n,r){if(!Tu(n))throw Error(t(299));var a=!1,u="",h=zp;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=Mu(n,1,!1,null,null,a,!1,u,h),n[Er]=r.current,ma(n.nodeType===8?n.parentNode:n),new Eu(r)},Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=R(r),n=n===null?null:n.stateNode,n},Cn.flushSync=function(n){return Ui(n)},Cn.hydrate=function(n,r,a){if(!nl(r))throw Error(t(200));return rl(null,n,r,!0,a)},Cn.hydrateRoot=function(n,r,a){if(!Tu(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,g="",E=zp;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),r=Fp(r,null,n,1,a??null,h,!1,g,E),n[Er]=r.current,ma(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,h]:r.mutableSourceEagerHydrationData.push(a,h);return new tl(r)},Cn.render=function(n,r,a){if(!nl(r))throw Error(t(200));return rl(null,n,r,!1,a)},Cn.unmountComponentAtNode=function(n){if(!nl(n))throw Error(t(40));return n._reactRootContainer?(Ui(function(){rl(null,null,n,!1,function(){n._reactRootContainer=null,n[Er]=null})}),!0):!1},Cn.unstable_batchedUpdates=xu,Cn.unstable_renderSubtreeIntoContainer=function(n,r,a,u){if(!nl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return rl(n,r,a,!1,u)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var Yp;function p0(){if(Yp)return Ru.exports;Yp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ru.exports=Kx(),Ru.exports}var Qp;function Zx(){if(Qp)return sl;Qp=1;var i=p0();return sl.createRoot=i.createRoot,sl.hydrateRoot=i.hydrateRoot,sl}var Jx=Zx(),V=sf();function ku(i){const e=i.replace("#",""),t=parseInt(e.substring(0,2),16),s=parseInt(e.substring(2,4),16),o=parseInt(e.substring(4,6),16);return`${t},${s},${o}`}const Va={cyan:"#00f0c8",purple:"#7c6ff7",pink:"#f472b6",bg:"#05050a"},md=[{name:"深空霓虹",colors:Va},{name:"赛博朋克",colors:{cyan:"#00d4ff",purple:"#ff6ec7",pink:"#ffd700",bg:"#0a0015"}},{name:"极光森林",colors:{cyan:"#39ff14",purple:"#00b4d8",pink:"#e040fb",bg:"#060d06"}},{name:"烈焰熔岩",colors:{cyan:"#ff6b35",purple:"#f72585",pink:"#ffbe0b",bg:"#0d0508"}},{name:"冰蓝幻境",colors:{cyan:"#7df9ff",purple:"#5b8def",pink:"#c4b5fd",bg:"#050810"}},{name:"樱花物语",colors:{cyan:"#ffb7c5",purple:"#c084fc",pink:"#fb7185",bg:"#0a0508"}}],m0=V.createContext({theme:Va,setTheme:()=>{}});function Zs(){return V.useContext(m0)}function $x(i){const e=document.documentElement;e.style.setProperty("--c1",ku(i.cyan)),e.style.setProperty("--c2",ku(i.purple)),e.style.setProperty("--c3",ku(i.pink)),e.style.setProperty("--bg",i.bg),e.style.setProperty("--c1-hex",i.cyan),e.style.setProperty("--c2-hex",i.purple),e.style.setProperty("--c3-hex",i.pink)}function ev({children:i}){const[e,t]=V.useState(()=>{try{const o=localStorage.getItem("vic-theme");if(o)return JSON.parse(o)}catch{}if(typeof window<"u"&&window.innerWidth<768){const o=Math.floor(Math.random()*md.length);return md[o].colors}return Va}),s=o=>{t(o),typeof window<"u"&&window.innerWidth>=768&&localStorage.setItem("vic-theme",JSON.stringify(o))};return V.useEffect(()=>{$x(e),window.innerWidth<768&&localStorage.removeItem("vic-theme")},[e]),l.jsx(m0.Provider,{value:{theme:e,setTheme:s},children:i})}function tv(){const i=V.useRef(null),e=V.useRef(null),t=V.useRef(null),s=V.useRef({x:-200,y:-200}),o=V.useRef({x:-200,y:-200}),c=V.useRef([]),f=V.useRef(0),d=V.useRef(!1),p=10,m=25,x=8,b=400,y=1;return V.useEffect(()=>{const _=D=>{s.current={x:D.clientX,y:D.clientY}},M=()=>d.current=!0,w=()=>d.current=!1,S=t.current,v=S==null?void 0:S.getContext("2d"),k=()=>{S&&(S.width=window.innerWidth,S.height=window.innerHeight)};window.addEventListener("resize",k),k();const N=D=>{const P=getComputedStyle(document.documentElement).getPropertyValue("--c1").trim(),C=P?`rgb(${P})`:"#00f0c8",j=performance.now(),W=Array.from({length:x},($,ue)=>({x:D.clientX,y:D.clientY,angle:2*Math.PI*ue/x,startTime:j,color:C}));c.current.push(...W)};window.addEventListener("click",N);const T=D=>D*(2-D),U=D=>{o.current.x=s.current.x,o.current.y=s.current.y,i.current&&(i.current.style.transform=`translate(${s.current.x-4}px, ${s.current.y-4}px)`,i.current.style.opacity=d.current?"1":"0"),e.current&&(e.current.style.transform=`translate(${o.current.x-20}px, ${o.current.y-20}px)`,e.current.style.opacity=d.current?"1":"0"),v&&S&&(v.clearRect(0,0,S.width,S.height),c.current=c.current.filter(B=>{const P=D-B.startTime;if(P>=b)return!1;const C=P/b,j=T(C),W=j*m*y,$=p*(1-j),ue=B.x+W*Math.cos(B.angle),me=B.y+W*Math.sin(B.angle),le=B.x+(W+$)*Math.cos(B.angle),pe=B.y+(W+$)*Math.sin(B.angle);return v.strokeStyle=B.color,v.lineWidth=2,v.lineCap="round",v.beginPath(),v.moveTo(ue,me),v.lineTo(le,pe),v.stroke(),!0})),f.current=requestAnimationFrame(U)};window.addEventListener("mousemove",_),f.current=requestAnimationFrame(U);const F=document.getElementById("hero");return F&&(F.addEventListener("mouseenter",M),F.addEventListener("mouseleave",w)),()=>{window.removeEventListener("mousemove",_),window.removeEventListener("click",N),window.removeEventListener("resize",k),cancelAnimationFrame(f.current),F&&(F.removeEventListener("mouseenter",M),F.removeEventListener("mouseleave",w))}},[]),l.jsxs(l.Fragment,{children:[l.jsx("canvas",{ref:t,className:"fixed top-0 left-0 pointer-events-none z-[9995]",style:{width:"100vw",height:"100vh"}}),l.jsx("div",{ref:i,className:"fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9997] transition-opacity duration-200",style:{background:"rgb(var(--c1))",boxShadow:"0 0 8px rgba(0,240,200,0.9), 0 0 20px rgba(0,240,200,0.4)",willChange:"transform",opacity:0}}),l.jsx("div",{ref:e,className:"fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9996] transition-opacity duration-200",style:{border:"1px solid rgba(var(--c1),0.35)",willChange:"transform",opacity:0}})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rv=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Kp=i=>{const e=rv(i);return e.charAt(0).toUpperCase()+e.slice(1)},g0=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=V.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:c,iconNode:f,...d},p)=>V.createElement("svg",{ref:p,...iv,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:g0("lucide",o),...d},[...f.map(([m,x])=>V.createElement(m,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(i,e)=>{const t=V.forwardRef(({className:s,...o},c)=>V.createElement(sv,{ref:c,iconNode:e,className:g0(`lucide-${nv(Kp(i))}`,`lucide-${i}`,s),...o}));return t.displayName=Kp(i),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],ov=Ze("activity",av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],cv=Ze("arrow-right",lv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],af=Ze("arrow-up-right",uv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Du=Ze("award",dv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],hv=Ze("book-open",fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],of=Ze("briefcase",pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]],gv=Ze("cake",mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],vv=Ze("chart-column",xv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],x0=Ze("check",yv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],v0=Ze("chevron-down",Sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],bv=Ze("chevron-right",_v);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],wv=Ze("circle-alert",Mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Tv=Ze("circle-check",Ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],y0=Ze("code-xml",Av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],S0=Ze("component",Cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],_0=Ze("copy",Rv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],Zp=Ze("disc-3",Nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Jp=Ze("download",Pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],lf=Ze("external-link",kv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],cf=Ze("eye-off",Dv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],uf=Ze("eye",Lv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],b0=Ze("folder-open",Iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],zl=Ze("graduation-cap",Uv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],M0=Ze("house",Fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],zv=Ze("layers",Ov);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],jv=Ze("layout-dashboard",Bv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Gv=Ze("lock",Hv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Xa=Ze("mail",Vv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],w0=Ze("map-pin",Wv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m21 3-6.75 6.75",key:"pv0uzu"}],["circle",{cx:"10",cy:"14",r:"6",key:"1qwbdc"}]],qv=Ze("mars",Xv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Qv=Ze("menu",Yv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],E0=Ze("palette",Kv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],Jv=Ze("panel-left",Zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]],e1=Ze("panel-top",$v);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],n1=Ze("pause",t1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],i1=Ze("phone-call",r1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],a1=Ze("phone",s1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],l1=Ze("play",o1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],u1=Ze("presentation",c1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],$p=Ze("radio",d1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],h1=Ze("rotate-ccw",f1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],T0=Ze("send",p1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]],g1=Ze("skip-back",m1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],v1=Ze("skip-forward",x1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],qa=Ze("sparkles",y1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],_1=Ze("trophy",S1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],M1=Ze("twitter",b1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],E1=Ze("user",w1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],A1=Ze("volume-2",T1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],R1=Ze("volume-x",C1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],P1=Ze("wand-sparkles",N1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_i=Ze("x",k1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],L1=Ze("zap",D1);function I1({isLight:i}){const[e,t]=V.useState(!1),s=V.useRef(null),{theme:o,setTheme:c}=Zs(),[f,d]=V.useState(o);V.useEffect(()=>{d(o)},[o]),V.useEffect(()=>{const D=B=>{s.current&&!s.current.contains(B.target)&&t(!1)};return e&&document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[e]);const p=(D,B)=>{const P={...f,[D]:B};d(P),c(P)},m=i?"rgba(255,255,255,0.95)":"linear-gradient(160deg, #0d0d1a 0%, #0a0a14 100%)",x=i?"1px solid rgba(0,0,0,0.1)":"1px solid rgba(var(--c1),0.2)",b=i?"0 20px 60px rgba(0,0,0,0.1), 0 0 40px rgba(0,0,0,0.05)":"0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(var(--c1),0.08)",y=i?"#1a1a2e":"rgba(255,255,255,0.8)",_=i?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.06)",M=i?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)",w=D=>i?D?"rgba(0,0,0,0.1)":"rgba(0,0,0,0.03)":D?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.03)",S=D=>i?D?"1px solid rgba(0,0,0,0.2)":"1px solid rgba(0,0,0,0.06)":D?"1px solid rgba(var(--c1),0.4)":"1px solid rgba(255,255,255,0.06)",v=D=>i?D?"#1a1a2e":"rgba(0,0,0,0.45)":D?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.45)",k=i?"linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)":"linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",N=i?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)",T=i?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)",U=i?"rgba(0,0,0,0.3)":"rgba(255,255,255,0.3)",F=i?"1.5px solid rgba(0,0,0,0.15)":"1.5px solid rgba(255,255,255,0.15)";return l.jsxs("div",{className:"relative",ref:s,children:[l.jsx("button",{onClick:()=>t(!e),className:"flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 hover:scale-110",style:i?{background:"transparent",color:"#1a1a2e",fontWeight:500,border:"0.5px solid rgba(0,0,0,0.22)",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",transition:"all 0.3s"}:{background:"linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",color:"rgba(255,255,255,0.95)",fontWeight:600,border:"0.5px solid rgba(var(--c1),0.4)",boxShadow:"0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",transition:"all 0.3s"},title:"切换主题色",children:l.jsx(E0,{size:16})}),e&&l.jsxs("div",{className:"absolute right-0 top-12 w-72 rounded-xl p-4 z-[100]",style:{background:m,border:x,boxShadow:b,backdropFilter:"blur(20px)"},children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:y,letterSpacing:"0.05em"},children:"🎨 主题配色"}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("button",{onClick:()=>{c(Va),d(Va)},className:"w-6 h-6 rounded-md flex items-center justify-center transition-colors",style:{background:_,color:M},title:"重置默认",children:l.jsx(h1,{size:12})}),l.jsx("button",{onClick:()=>t(!1),className:"w-6 h-6 rounded-md flex items-center justify-center transition-colors",style:{background:_,color:M},children:l.jsx(_i,{size:12})})]})]}),l.jsx("div",{className:"grid grid-cols-3 gap-2 mb-4",children:md.map(D=>{const B=D.colors.cyan===o.cyan&&D.colors.purple===o.purple&&D.colors.pink===o.pink;return l.jsxs("button",{onClick:()=>c(D.colors),className:"rounded-lg p-2 transition-all duration-200 hover:scale-105",style:{background:w(B),border:S(B)},children:[l.jsx("div",{className:"flex gap-1 justify-center mb-1.5",children:[D.colors.cyan,D.colors.purple,D.colors.pink].map((P,C)=>l.jsx("div",{className:"w-4 h-4 rounded-full",style:{background:P,boxShadow:`0 0 6px ${P}66`}},C))}),l.jsx("span",{style:{fontSize:"0.65rem",color:v(B),fontWeight:B?600:400},children:D.name})]},D.name)})}),l.jsx("div",{className:"h-px mb-3",style:{background:k}}),l.jsx("div",{style:{fontSize:"0.7rem",fontWeight:500,color:N,letterSpacing:"0.08em",marginBottom:"8px"},children:"自定义颜色"}),l.jsx("div",{className:"space-y-2",children:[{key:"cyan",label:"主色 (霓虹青)"},{key:"purple",label:"辅色 (紫罗兰)"},{key:"pink",label:"点缀 (粉玫)"},{key:"bg",label:"背景色"}].map(({key:D,label:B})=>l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsxs("label",{className:"relative w-7 h-7 rounded-lg overflow-hidden cursor-pointer flex-shrink-0",style:{border:F,boxShadow:`0 0 8px ${f[D]}44`},children:[l.jsx("input",{type:"color",value:f[D],onChange:P=>p(D,P.target.value),className:"absolute inset-0 opacity-0 cursor-pointer w-full h-full"}),l.jsx("div",{className:"w-full h-full",style:{background:f[D]}})]}),l.jsx("span",{style:{fontSize:"0.72rem",color:T,flex:1},children:B}),l.jsx("span",{style:{fontSize:"0.65rem",color:U,fontFamily:"monospace"},children:f[D].toUpperCase()})]},D))})]})]})}var U1=p0();function Vs({children:i}){const[e,t]=V.useState(!1);return V.useEffect(()=>(t(!0),()=>t(!1)),[]),e?U1.createPortal(i,document.body):null}const em="data:image/png;base64,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",tm=[{label:"Home",href:"hero",icon:M0},{label:"Skills",href:"skills",icon:y0},{label:"Projects",href:"projects",icon:of},{label:"Works",href:"portfolio",icon:b0},{label:"Education",href:"education",icon:zl,iconSize:26},{label:"Contact",href:"contact",icon:Xa},{label:"About Me",href:"about",icon:E1}];function F1({navMode:i,onToggleNavMode:e,active:t,go:s,isLight:o,aboutOpen:c,setAboutOpen:f}){const[d,p]=V.useState(!1),[m,x]=V.useState(!1),[b,y]=V.useState(null),[_,M]=V.useState(new Set);V.useEffect(()=>{const W=()=>{p(window.scrollY>50)};return window.addEventListener("scroll",W,{passive:!0}),W(),()=>window.removeEventListener("scroll",W)},[]);const w=W=>{if(W==="about"){f(!0);return}s(W),x(!1)},S=o?"rgba(255,255,255,0.6)":d?"rgba(5,5,12,0.5)":"rgba(5,5,12,0.6)",v=o?"1px solid rgba(0,0,0,0.08)":`1px solid ${d?"rgba(var(--c1),0.07)":"rgba(var(--c1),0)"}`,k=o?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.04)",N=o?"1px solid rgba(0,0,0,0.10)":"1px solid rgba(255,255,255,0.18)",T=o?"inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 24px rgba(0,0,0,0.06)":"inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)",U=o?"rgba(0,0,0,0.45)":"rgba(255,255,255,0.5)",F=o?"rgba(0,0,0,0.75)":"rgba(255,255,255,0.9)",D=o?"#1a1a2e":"#f0f4f8",B=o?"linear-gradient(135deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.22) 100%)":"linear-gradient(135deg, rgba(var(--c1),0.45) 0%, rgba(var(--c1),0.18) 50%, rgba(var(--c1),0.28) 100%)",P=o?"1px solid rgba(0,0,0,0.22), 1px solid rgba(255,255,255,0.45) inset":"1px solid rgba(var(--c1),0.7), 1px solid rgba(255,255,255,0.18) inset",C=o?"0 0 24px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.15), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -2px 0 rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.12)":"0 0 50px rgba(var(--c1),0.45), 0 12px 48px rgba(0,0,0,0.35), inset 0 3px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.25), 0 0 0 1px rgba(var(--c1),0.25), 0 0 30px rgba(var(--c1),0.2)",j=o?"#1a1a2e":"rgb(var(--c1))";return l.jsxs(l.Fragment,{children:[l.jsxs("nav",{className:"fixed top-0 left-0 z-50 transition-all duration-500",style:{background:S,backdropFilter:"blur(24px) saturate(180%)",WebkitBackdropFilter:"blur(24px) saturate(180%)",borderBottom:v,boxShadow:o?"0 4px 24px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.5)":"0 4px 24px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)",transform:"scale(var(--screen-scale))",transformOrigin:"top left",width:"calc(100% / var(--screen-scale))"},children:[l.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between gap-4",children:[l.jsxs("button",{onClick:()=>f(!0),className:"flex items-center gap-3 flex-shrink-0",children:[l.jsx("div",{className:"relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0",style:{border:o?"1.5px solid rgba(0,0,0,0.12)":"1.5px solid rgba(var(--c1),0.45)",boxShadow:o?"0 1px 6px rgba(0,0,0,0.12)":"0 0 8px rgba(var(--c1),0.25)",transition:"border 0.4s, box-shadow 0.4s"},children:l.jsx("img",{src:em,alt:"Vic Qu",className:"w-full h-full object-cover object-center"})}),l.jsx("span",{className:"whitespace-nowrap",style:{fontWeight:700,fontSize:"1.2rem",color:D,letterSpacing:"0.08em",transition:"color 0.4s"},children:"曲维甲"})]}),i==="top"&&l.jsxs("div",{className:`hidden md:flex items-center gap-4 px-1.5 py-1.5 rounded-full transition-all duration-500 flex-shrink-0 ${o?"nav-light":"nav-dark"}`,style:{background:k,border:N,backdropFilter:"blur(12px)",boxShadow:T},children:[tm.filter(W=>W.href!=="about").map(W=>{const $=t===W.href,ue=b===W.href;return l.jsxs("button",{onClick:()=>{w(W.href)},onMouseEnter:()=>y(W.href),onMouseLeave:()=>y(null),className:"relative px-3 py-1.5 text-base rounded-full overflow-hidden nav-glass-btn flex-shrink-0 whitespace-nowrap",style:{color:$?j:ue?F:U,fontWeight:$?600:400,background:$?B:"transparent",border:$?P:"1px solid transparent",boxShadow:$?C:"none",letterSpacing:"0.01em",transition:"color 0.25s, background 0.3s, border 0.3s, box-shadow 0.3s"},children:[$&&!o&&l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"absolute top-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none",style:{width:"70%",height:"1.5px",background:"linear-gradient(90deg, transparent, rgba(var(--c1),0.85), transparent)",boxShadow:"0 0 12px rgba(var(--c1),0.5), 0 0 24px rgba(var(--c1),0.25)"}}),l.jsx("span",{className:"absolute top-1 left-1/2 -translate-x-1/2 rounded-full pointer-events-none",style:{width:"50%",height:"1px",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",opacity:.6}})]}),W.label]},W.label)}),l.jsx("style",{children:`
              .nav-glass-btn::after {
                content: "";
                position: absolute;
                inset: 0;
                background: linear-gradient(
                  90deg,
                  transparent,
                  rgba(var(--c1), 0.12),
                  transparent
                );
                transform: translateX(-100%);
                pointer-events: none;
              }
              .nav-glass-btn:hover::after {
                animation: nav-shine 1.2s ease forwards;
              }
              @keyframes nav-shine {
                to { transform: translateX(100%); }
              }
            `})]}),l.jsxs("div",{className:"hidden md:flex items-center gap-2 flex-shrink-0",children:[l.jsx("button",{onClick:e,className:"flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 hover:scale-110",style:o?{background:"transparent",color:"#1a1a2e",fontWeight:500,border:"0.5px solid rgba(0,0,0,0.22)",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",transition:"all 0.3s"}:{background:"linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",color:"rgba(255,255,255,0.95)",fontWeight:600,border:"0.5px solid rgba(var(--c1),0.4)",boxShadow:"0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",transition:"all 0.3s"},title:i==="top"?"切换侧边导航":"切换顶部导航",children:l.jsx(Jv,{size:16})}),l.jsx(I1,{isLight:o}),l.jsx("button",{className:"hidden md:flex items-center gap-2 px-5 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-[1.1] whitespace-nowrap flex-shrink-0",onClick:()=>f(!0),style:o?{background:"transparent",color:"#1a1a2e",fontWeight:500,border:"0.5px solid rgba(0,0,0,0.22)",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",transition:"all 0.3s"}:{background:"linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",color:"rgba(255,255,255,0.95)",fontWeight:600,border:"0.5px solid rgba(var(--c1),0.4)",boxShadow:"0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",transition:"all 0.3s"},children:"About Me"})]}),l.jsx("button",{className:"md:hidden",style:{color:o?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.7)",transition:"color 0.4s"},onClick:()=>x(!m),children:m?l.jsx(_i,{size:26}):l.jsx(Qv,{size:26})})]}),m&&l.jsxs(Vs,{children:[l.jsxs("div",{className:"fixed inset-0 z-[100] flex flex-col",style:{background:o?"rgba(255,255,255,0.98)":"rgba(5,5,12,0.98)",backdropFilter:"blur(40px) saturate(180%)",WebkitBackdropFilter:"blur(40px) saturate(180%)"},onClick:()=>x(!1),children:[l.jsx("div",{className:"flex items-center justify-end px-6 h-[68px] flex-shrink-0",children:l.jsx("button",{onClick:W=>{W.stopPropagation(),x(!1)},className:"w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 active:scale-95",style:{background:o?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.08)",color:o?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)"},children:l.jsx(_i,{size:22})})}),l.jsx("div",{className:"flex-1 flex flex-col items-start justify-center px-10 gap-0 -mt-10",style:{animation:"menuSlideIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",opacity:0,transform:"translateY(-20px)"},children:tm.map((W,$)=>{const ue=W.icon,me=t===W.href;return l.jsxs("button",{onClick:le=>{le.stopPropagation(),w(W.href)},className:"flex items-center gap-4 py-4 w-full transition-all duration-300",style:{fontSize:"clamp(1.5rem, 5vw, 2.2rem)",fontWeight:me?700:400,color:me?"rgb(var(--c1))":o?"rgba(0,0,0,0.8)":"rgba(255,255,255,0.85)",letterSpacing:"0.02em",animation:`menuItemFadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${.1+$*.06}s forwards`,opacity:0,transform:"translateY(12px)"},children:[l.jsx("span",{className:"inline-flex items-center justify-center flex-shrink-0",style:{width:"28px"},children:l.jsx(ue,{size:W.iconSize||24})}),W.label]},W.label)})})]}),l.jsx("style",{children:`
              @keyframes menuSlideIn {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes menuItemFadeIn {
                from { opacity: 0; transform: translateY(12px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `})]})]}),c&&l.jsx(Vs,{children:l.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-4",style:{backdropFilter:"blur(16px)",background:"rgba(5,5,12,0.75)"},onClick:()=>f(!1),children:l.jsxs("div",{className:"relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl",style:{background:"linear-gradient(160deg, #0d0d1a 0%, #0a0a14 100%)",border:"1px solid rgba(var(--c1),0.18)",boxShadow:"0 0 60px rgba(var(--c1),0.12), 0 0 120px rgba(var(--c2),0.08), inset 0 1px 0 rgba(var(--c1),0.1)"},onClick:W=>W.stopPropagation(),children:[l.jsxs("div",{className:"sticky top-0 z-10 bg-[#0d0d1a] rounded-t-2xl px-6 sm:px-8 pt-4 sm:pt-8 pb-0",children:[l.jsx("div",{className:"absolute top-0 left-0 right-0 h-px rounded-t-2xl",style:{background:"linear-gradient(90deg, transparent, rgb(var(--c1)), rgb(var(--c2)), transparent)"}}),l.jsx("button",{onClick:()=>f(!1),className:"absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.5)"},children:l.jsx(_i,{size:15})}),l.jsxs("div",{className:"flex items-center gap-3 sm:gap-5 mb-4 sm:mb-8",children:[l.jsx("div",{className:"relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0",style:{border:"2px solid rgba(var(--c1),0.4)",boxShadow:"0 0 20px rgba(var(--c1),0.2)"},children:l.jsx("img",{src:em,alt:"Vic Qu",className:"w-full h-full object-cover"})}),l.jsxs("div",{children:[l.jsx("h2",{style:{fontSize:"1.0rem",fontWeight:700,color:"#f0f4f8",letterSpacing:"0.04em"},className:"sm:text-[1.6rem]",children:"曲维甲"}),l.jsx("p",{style:{color:"rgb(var(--c1))",fontSize:"0.8rem",fontWeight:500,letterSpacing:"0.08em"},className:"sm:text-[0.9rem]",children:"Vic Qu · ENFJ 全栈设计师"}),l.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 mt-1 sm:mt-1.5",children:[l.jsx(w0,{size:12,style:{color:"rgba(255,255,255,0.35)"}}),l.jsx("span",{style:{color:"rgba(255,255,255,0.35)",fontSize:"0.8rem"},children:"济南 · 中国"})]})]})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[{icon:l.jsx(qv,{size:20}),label:"性别",value:"男"},{icon:l.jsx(gv,{size:20}),label:"生日",value:" 1992.6.9"},{icon:l.jsx(a1,{size:20}),label:"电话",value:"156 6279 6885",mobileHref:"tel:15662796885",maskType:"phone"},{icon:l.jsx(Xa,{size:20}),label:"邮箱",value:"quweijia@vip.qq.com",mobileHref:"mailto:quweijia@vip.qq.com",maskType:"email"}].map(W=>{const $=typeof window<"u"&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),ue="maskType"in W&&W.maskType&&!$,me=_.has(W.label),le=(()=>{if(!ue||me)return W.value;const H=W.maskType;return H==="phone"?W.value.replace(/\D/g,"").replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"):H==="email"?W.value.replace(/^(.{2}).*(@.*)$/,"$1******$2"):W.value})(),pe=$&&W.mobileHref?"a":"div";return l.jsxs(pe,{href:$&&W.mobileHref?W.mobileHref:void 0,className:"flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 rounded-xl block",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)",textDecoration:"none"},children:[l.jsx("span",{style:{color:"rgb(var(--c1))"},children:W.icon}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.3)",marginBottom:"1px"},children:W.label}),l.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[l.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.8)",fontWeight:500,margin:0},children:le}),ue&&l.jsx("button",{onClick:H=>{H.preventDefault(),H.stopPropagation(),M(ee=>{const ae=new Set(ee);return ae.has(W.label)?ae.delete(W.label):ae.add(W.label),ae})},className:"flex items-center justify-center w-5 h-5 rounded transition-all duration-200 hover:scale-110 flex-shrink-0",style:{color:me?"rgb(var(--c1))":"rgba(255,255,255,0.3)"},title:me?"隐藏":"显示",children:me?l.jsx(cf,{size:11}):l.jsx(uf,{size:11})})]})]})]},W.label)})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto px-6 sm:px-8 pb-6 sm:pb-8",children:[l.jsx("style",{children:`
        div::-webkit-scrollbar {
          display: none;
        }
      `}),l.jsxs("div",{className:"mt-8",children:[l.jsxs("div",{className:"mb-6",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c1)),rgb(var(--c2)))"}}),l.jsx("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:"个人简介"})]}),l.jsxs("p",{style:{fontSize:"0.9rem",lineHeight:"1.8",color:"rgba(255,255,255,0.6)"},children:["· 资深全栈UI/UX设计师与团队管理者，拥有10年+设计经验及5年+团队管理背景;",l.jsx("br",{}),"· 深耕B端政企与C端赛道，具备全品类产品（移动端/PC端/可视化大屏）从0到1的落地能力;",l.jsx("br",{}),"· 精通原子设计理论与各类主流设计工具，擅长组件库规范搭建、交互逻辑与高保真原型输出；",l.jsx("br",{}),"· 兼具3D建模（Blender）、全格式动效设计及发布会级PPT视觉呈现能力;",l.jsx("br",{}),"· 熟悉前端基础，能构建AI全链路设计工作流，具备强抗压及多项目并行交付能力;",l.jsx("br",{}),"· 可通过前置对接产品需求与研发协同，高效驱动团队设计效能与高还原度落地。"]})]}),l.jsxs("div",{className:"mb-6",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c2)),rgb(var(--c3)))"}}),l.jsxs("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:[l.jsx(hv,{size:12,className:"inline mr-1.5",style:{color:"rgb(var(--c2))"}}),"教育经历"]})]}),l.jsx("div",{className:"space-y-3",children:[{school:"中国石油大学（华东）",degree:"建筑环境与能源应用工程 · 本科",year:"2011 – 2015"},{school:"Google UX Design Certificate",degree:"用户体验设计专业认证",year:"2017"}].map(W=>l.jsxs("div",{className:"flex items-start justify-between px-4 py-3 rounded-xl",style:{background:"rgba(var(--c2),0.06)",border:"1px solid rgba(var(--c2),0.12)"},children:[l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:"0.88rem",fontWeight:600,color:"rgba(255,255,255,0.8)"},children:W.school}),l.jsx("p",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",marginTop:"2px"},children:W.degree})]}),l.jsx("span",{style:{fontSize:"0.75rem",color:"rgb(var(--c2))",fontWeight:500,whiteSpace:"nowrap",marginLeft:"12px"},children:W.year})]},W.school))})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c3)),rgb(var(--c1)))"}}),l.jsxs("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:[l.jsx(of,{size:12,className:"inline mr-1.5",style:{color:"rgb(var(--c3))"}}),"工作经历"]})]}),l.jsx("div",{className:"space-y-3",children:[{company:"浪潮智慧建筑",role:"UI 设计主管",year:"2024 – 至今",desc:"深耕智慧园区、智慧工地、建筑节能三大核心赛道，主导搭建覆盖移动端 + PC 端的全链路原子组件设计体系，沉淀 200 + 可复用业务组件，产品设计复用率提升至 91%；建立标准化设计评审机制，管控团队输出质量；统筹展厅可视化方案落地，支撑多场政企级商务汇报。"},{company:"历城控股",role:"UI 设计主管",year:"2023 – 2024",desc:"负责集团数字政府、数智化产品全端设计改版，统筹 OA、政务服务等多条产品线设计交付；优化设计协作流程，推动审批链路效率提升 40%；参与项目评审与体验优化，支撑 2000 + 内部员工的办公产品体验升级。"},{company:"浪潮卓数大数据",role:"高级 UI/UX 设计师",year:"2018 – 2023",desc:"主导爱城市网等省级政务标杆产品的核心应用设计与交互动效落地；从 0 到 1 搭建产品设计规范与元件库，牵头完成多项设计类发明专利；推动设计流程标准化，降低跨团队协作成本。"},{company:"早期履历补充",role:"执行设计师",year:"2015 – 2018",desc:"起步于工艺设计与互联网产品 UI 设计，具备工程技术背景，深度理解 B 端政企、工业建筑类业务逻辑，设计方案落地性更强。"}].map(W=>l.jsxs("div",{className:"px-4 py-3 rounded-xl",style:{background:"rgba(var(--c3),0.05)",border:"1px solid rgba(var(--c3),0.1)"},children:[l.jsxs("div",{className:"flex items-start justify-between mb-1",children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.88rem",fontWeight:600,color:"rgba(255,255,255,0.8)",lineHeight:1.5},children:W.company}),l.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)"},children:W.role})]}),l.jsx("span",{style:{fontSize:"0.75rem",color:"rgb(var(--c3))",fontWeight:500,whiteSpace:"nowrap",marginLeft:"12px"},children:W.year})]}),l.jsx("p",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.35)",lineHeight:"1.6"},children:W.desc})]},W.company))})]})]})]})]})})})]})}const O1=[{label:"Home",href:"hero",icon:M0},{label:"Skills",href:"skills",icon:y0},{label:"Projects",href:"projects",icon:of},{label:"Works",href:"portfolio",icon:b0},{label:"Education",href:"education",icon:zl,iconSize:18},{label:"Contact",href:"contact",icon:Xa}],z1=44,B1=180,Lu=1600;function j1({active:i,onNavigate:e,isLight:t,onSwitchToTop:s}){const[o,c]=V.useState(!1),[f,d]=V.useState(null),p=V.useRef(null),m=V.useRef(),x=V.useCallback(()=>{m.current&&clearTimeout(m.current),window.innerWidth<Lu&&c(!0)},[]),b=V.useCallback(()=>{m.current&&clearTimeout(m.current),window.innerWidth<Lu&&(m.current=setTimeout(()=>{c(!1)},300))},[]);V.useEffect(()=>{const k=()=>{window.innerWidth>=Lu?c(!0):c(!1)};return k(),window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)},[]);const y=o?B1:z1,_=t?"rgba(255,255,255,0.75)":"rgba(5,5,12,0.75)",M=t?"rgba(0,0,0,0.08)":"rgba(var(--c1),0.12)",w=t?"rgba(0,0,0,0.35)":"rgba(255,255,255,0.35)",S=t?"#1a1a2e":"rgb(var(--c1))",v=t?"rgba(0,0,0,0.75)":"rgba(255,255,255,0.85)";return l.jsxs("div",{ref:p,className:"fixed left-0 top-0 h-full z-[100] flex items-center",style:{pointerEvents:"none"},children:[o&&l.jsx("div",{className:"absolute left-0 top-[10%] h-[80%] w-px",style:{background:"linear-gradient(180deg, transparent, rgba(var(--c1),0.6) 20%, rgba(var(--c1),0.8) 50%, rgba(var(--c1),0.6) 80%, transparent)",boxShadow:"0 0 8px rgba(var(--c1),0.3), 0 0 18px rgba(var(--c1),0.1)"}}),l.jsxs("div",{className:"relative flex flex-col items-center justify-center py-4 transition-all duration-400 ease-out",style:{width:`${y}px`,marginLeft:"8px",gap:o?"8px":"4px",background:o?_:t?"rgba(255,255,255,0.55)":"rgba(5,5,12,0.55)",backdropFilter:o?"blur(20px) saturate(180%)":"blur(12px)",WebkitBackdropFilter:o?"blur(20px) saturate(180%)":"blur(12px)",border:o?`1px solid ${M}`:t?"1px solid rgba(0,0,0,0.1)":"1px solid rgba(255,255,255,0.12)",borderLeft:"none",borderRadius:o?"16px":"24px",boxShadow:o?t?"4px 0 24px rgba(0,0,0,0.06)":"4px 0 24px rgba(0,0,0,0.3), 0 0 40px rgba(var(--c1),0.06)":t?"0 2px 8px rgba(0,0,0,0.08)":"0 2px 8px rgba(0,0,0,0.25)",pointerEvents:"auto"},onMouseEnter:x,onMouseLeave:b,children:[l.jsx("div",{className:"w-full flex justify-center mb-2 overflow-hidden transition-all duration-400",style:{opacity:o?1:0,maxHeight:o?"32px":"0px"},children:l.jsxs("button",{onClick:s,className:"flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all duration-300 hover:scale-105",style:{color:w,background:t?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.04)",border:t?"1px solid rgba(0,0,0,0.08)":"1px solid rgba(255,255,255,0.1)"},title:"切换回顶部导航",children:[l.jsx(e1,{size:12}),l.jsx("span",{className:"whitespace-nowrap",children:"顶部导航"})]})}),O1.map((k,N)=>{const T=i===k.href,U=f===N,F=k.icon;return l.jsxs("button",{onClick:()=>{e(k.href)},onMouseEnter:()=>d(N),onMouseLeave:()=>d(null),className:"relative flex items-center rounded-r-lg transition-all duration-300 overflow-hidden",style:{width:o?"calc(100% - 4px)":"28px",height:o?"38px":"28px",justifyContent:o?"flex-start":"center",paddingLeft:o?"12px":"0",color:T?S:U?v:w,fontWeight:T?600:400,background:T&&o?t?"linear-gradient(90deg, rgba(0,0,0,0.04) 0%, transparent 100%)":"linear-gradient(90deg, rgba(var(--c1),0.12) 0%, transparent 100%)":"transparent",borderLeft:T&&o?`2px solid ${S}`:"2px solid transparent",boxShadow:T&&o?t?"0 0 12px rgba(0,0,0,0.06)":"0 0 16px rgba(var(--c1),0.15)":"none"},children:[T&&o&&l.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 rounded-full",style:{width:"2px",height:"60%",background:t?"rgba(0,0,0,0.15)":"rgba(var(--c1),0.5)",boxShadow:t?"0 0 4px rgba(0,0,0,0.08)":"0 0 8px rgba(var(--c1),0.4)"}}),o&&U&&!T&&l.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(90deg, transparent, rgba(var(--c1),0.08), transparent)",animation:"side-sweep 0.8s ease forwards"}}),o&&l.jsxs(l.Fragment,{children:[l.jsx(F,{size:k.iconSize||16,style:{flexShrink:0,transition:"all 0.3s",filter:T?`drop-shadow(0 0 4px ${t?"rgba(0,0,0,0.2)":"rgba(var(--c1),0.4)"})`:"none"}}),l.jsx("span",{className:"overflow-hidden whitespace-nowrap transition-all duration-400",style:{marginLeft:"10px",opacity:1,maxWidth:"120px",fontSize:"0.78rem",letterSpacing:"0.02em"},children:k.label})]}),!o&&l.jsxs(l.Fragment,{children:[!T&&l.jsx("div",{className:"rounded-full transition-all duration-300",style:{width:"8px",height:"8px",background:U?"rgba(var(--c1),0.5)":w,boxShadow:U?"0 0 6px rgba(var(--c1),0.3)":"none"}}),T&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"absolute rounded-full",style:{width:"10px",height:"10px",background:"rgb(var(--c1))",boxShadow:"0 0 10px rgba(var(--c1),0.6)"}}),l.jsx("div",{className:"absolute rounded-full animate-ping",style:{width:"18px",height:"18px",border:"1px solid rgba(var(--c1),0.3)",animationDuration:"2s"}})]})]})]},k.href)})]}),l.jsx("style",{children:`
        @keyframes side-sweep {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `})]})}function A0({isOpen:i,onClose:e,onConfirm:t}){const[s,o]=V.useState(""),[c,f]=V.useState(""),d="123789";V.useEffect(()=>{i&&(o(""),f(""))},[i]),V.useEffect(()=>{const m=x=>{x.key==="Escape"&&i&&e()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[i,e]);const p=m=>{m.preventDefault(),s===d?(t(),e()):(f("密码错误，请重试"),o(""))};return i?l.jsx(Vs,{children:l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backdropFilter:"blur(8px)",background:"rgba(0, 0, 0, 0.6)"},onClick:e,children:l.jsxs("div",{className:"relative w-full max-w-md rounded-2xl p-8 shadow-2xl",style:{background:"var(--bg)",border:"1px solid rgba(var(--c1), 0.2)",boxShadow:"0 0 40px rgba(var(--c1), 0.15), 0 20px 60px rgba(0, 0, 0, 0.5)"},onClick:m=>m.stopPropagation(),children:[l.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 hover:rotate-90",style:{color:"rgba(255, 255, 255, 0.5)",background:"rgba(var(--c1), 0.1)"},onMouseEnter:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.2)",m.currentTarget.style.color="rgb(var(--c1))"},onMouseLeave:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.1)",m.currentTarget.style.color="rgba(255, 255, 255, 0.5)"},children:l.jsx(_i,{size:20})}),l.jsx("div",{className:"mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6",style:{background:"linear-gradient(135deg, rgba(var(--c1), 0.15), rgba(var(--c1), 0.05))",border:"1px solid rgba(var(--c1), 0.3)"},children:l.jsx(Gv,{size:32,style:{color:"rgb(var(--c1))"}})}),l.jsx("h2",{className:"text-2xl font-bold text-center mb-2",style:{color:"rgba(255, 255, 255, 0.9)"},children:"请输入密码"}),l.jsx("p",{className:"text-center mb-6 text-sm",style:{color:"rgba(255, 255, 255, 0.5)"},children:"请联系 15662796885 获取"}),l.jsxs("form",{onSubmit:p,children:[l.jsxs("div",{className:"mb-6",children:[l.jsx("input",{type:"password",value:s,onChange:m=>{o(m.target.value),f("")},placeholder:"输入密码",className:"w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-200",style:{background:"rgba(var(--c1), 0.05)",border:c?"1px solid rgba(239, 68, 68, 0.5)":"1px solid rgba(var(--c1), 0.2)",color:"rgba(255, 255, 255, 0.9)",boxShadow:c?"0 0 0 3px rgba(239, 68, 68, 0.1)":"none"},onFocus:m=>{c||(m.currentTarget.style.borderColor="rgba(var(--c1), 0.4)",m.currentTarget.style.boxShadow="0 0 0 3px rgba(var(--c1), 0.1)")},onBlur:m=>{c||(m.currentTarget.style.borderColor="rgba(var(--c1), 0.2)",m.currentTarget.style.boxShadow="none")},autoFocus:!0}),c&&l.jsxs("div",{className:"mt-2 flex items-center gap-2 text-sm",style:{color:"rgb(239, 68, 68)"},children:[l.jsx(wv,{size:16}),l.jsx("span",{children:c})]})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{type:"button",onClick:e,className:"flex-1 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:scale-[1.02]",style:{background:"rgba(var(--c1), 0.1)",color:"rgba(255, 255, 255, 0.7)",border:"1px solid rgba(var(--c1), 0.2)"},onMouseEnter:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.15)",m.currentTarget.style.color="rgba(255, 255, 255, 0.9)"},onMouseLeave:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.1)",m.currentTarget.style.color="rgba(255, 255, 255, 0.7)"},children:"取消"}),l.jsx("button",{type:"submit",className:"flex-1 px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 hover:scale-[1.02]",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",color:"var(--bg)",border:"none",boxShadow:"0 0 20px rgba(var(--c1), 0.3)"},onMouseEnter:m=>{m.currentTarget.style.boxShadow="0 0 30px rgba(var(--c1), 0.4)"},onMouseLeave:m=>{m.currentTarget.style.boxShadow="0 0 20px rgba(var(--c1), 0.3)"},children:"确认"})]})]})]})})}):null}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const df="170",H1=0,nm=1,G1=2,C0=1,V1=2,Or=3,wi=0,kn=1,zr=2,bi=0,js=1,gd=2,rm=3,im=4,W1=5,Qi=100,X1=101,q1=102,Y1=103,Q1=104,K1=200,Z1=201,J1=202,$1=203,xd=204,vd=205,ey=206,ty=207,ny=208,ry=209,iy=210,sy=211,ay=212,oy=213,ly=214,yd=0,Sd=1,_d=2,Ws=3,bd=4,Md=5,wd=6,Ed=7,R0=0,cy=1,uy=2,Mi=0,dy=1,fy=2,hy=3,py=4,my=5,gy=6,xy=7,N0=300,Xs=301,qs=302,Td=303,Ad=304,Wl=306,Cd=1e3,fr=1001,Rd=1002,Bn=1003,vy=1004,al=1005,Pn=1006,Iu=1007,Zi=1008,Gr=1009,P0=1010,k0=1011,Wa=1012,ff=1013,$i=1014,_r=1015,Js=1016,hf=1017,pf=1018,Ys=1020,D0=35902,L0=1021,I0=1022,Zn=1023,U0=1024,F0=1025,Hs=1026,Qs=1027,O0=1028,mf=1029,z0=1030,gf=1031,xf=1033,Dl=33776,Ll=33777,Il=33778,Ul=33779,Nd=35840,Pd=35841,kd=35842,Dd=35843,Ld=36196,Id=37492,Ud=37496,Fd=37808,Od=37809,zd=37810,Bd=37811,jd=37812,Hd=37813,Gd=37814,Vd=37815,Wd=37816,Xd=37817,qd=37818,Yd=37819,Qd=37820,Kd=37821,Fl=36492,Zd=36494,Jd=36495,B0=36283,$d=36284,ef=36285,tf=36286,yy=3200,Sy=3201,_y=0,by=1,Si="",Kn="srgb",$s="srgb-linear",Xl="linear",Pt="srgb",Es=7680,sm=519,My=512,wy=513,Ey=514,j0=515,Ty=516,Ay=517,Cy=518,Ry=519,am=35044,om="300 es",Br=2e3,Bl=2001;class ea{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(t);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,nf=180/Math.PI;function Ya(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]).toLowerCase()}function Nn(i,e,t){return Math.max(e,Math.min(t,i))}function Ny(i,e){return(i%e+e)%e}function Fu(i,e,t){return(1-t)*i+t*e}function La(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*o+e.x,this.y=c*o+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,s,o,c,f,d,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,c,f,d,p,m)}set(e,t,s,o,c,f,d,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=c,x[5]=p,x[6]=s,x[7]=f,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],x=s[4],b=s[7],y=s[2],_=s[5],M=s[8],w=o[0],S=o[3],v=o[6],k=o[1],N=o[4],T=o[7],U=o[2],F=o[5],D=o[8];return c[0]=f*w+d*k+p*U,c[3]=f*S+d*N+p*F,c[6]=f*v+d*T+p*D,c[1]=m*w+x*k+b*U,c[4]=m*S+x*N+b*F,c[7]=m*v+x*T+b*D,c[2]=y*w+_*k+M*U,c[5]=y*S+_*N+M*F,c[8]=y*v+_*T+M*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return t*f*x-t*d*m-s*c*x+s*d*p+o*c*m-o*f*p}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],x=e[8],b=x*f-d*m,y=d*p-x*c,_=m*c-f*p,M=t*b+s*y+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=b*w,e[1]=(o*m-x*s)*w,e[2]=(d*s-o*f)*w,e[3]=y*w,e[4]=(x*t-o*p)*w,e[5]=(o*c-d*t)*w,e[6]=_*w,e[7]=(s*p-m*t)*w,e[8]=(f*t-s*c)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+e,-o*m,o*p,-o*(-m*f+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Ou.makeScale(e,t)),this}rotate(e){return this.premultiply(Ou.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ou=new ut;function H0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Py(){const i=jl("canvas");return i.style.display="block",i}const lm={};function ja(i){i in lm||(lm[i]=!0,console.warn(i))}function ky(i,e,t){return new Promise(function(s,o){function c(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:s()}}setTimeout(c,t)})}function Dy(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ly(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _t={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(i.r=jr(i.r),i.g=jr(i.g),i.b=jr(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?Xl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const cm=[.64,.33,.3,.6,.15,.06],um=[.2126,.7152,.0722],dm=[.3127,.329],fm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_t.define({[$s]:{primaries:cm,whitePoint:dm,transfer:Xl,toXYZ:fm,fromXYZ:hm,luminanceCoefficients:um,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:cm,whitePoint:dm,transfer:Pt,toXYZ:fm,fromXYZ:hm,luminanceCoefficients:um,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Ts;class Iy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=jl("canvas")),Ts.width=e.width,Ts.height=e.height;const s=Ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jl("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=jr(c[f]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(jr(t[s]/255)*255):t[s]=jr(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uy=0;class G0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,d=o.length;f<d;f++)o[f].isDataTexture?c.push(zu(o[f].image)):c.push(zu(o[f]))}else c=zu(o);s.url=c}return t||(e.images[this.uuid]=s),s}}function zu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Iy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fy=0;class Sn extends ea{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,s=fr,o=fr,c=Pn,f=Zi,d=Zn,p=Gr,m=Sn.DEFAULT_ANISOTROPY,x=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Ya(),this.name="",this.source=new G0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cd:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case Rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cd:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case Rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=N0;Sn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,s=0,o=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*t+f[4]*s+f[8]*o+f[12]*c,this.y=f[1]*t+f[5]*s+f[9]*o+f[13]*c,this.z=f[2]*t+f[6]*s+f[10]*o+f[14]*c,this.w=f[3]*t+f[7]*s+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,c;const p=e.elements,m=p[0],x=p[4],b=p[8],y=p[1],_=p[5],M=p[9],w=p[2],S=p[6],v=p[10];if(Math.abs(x-y)<.01&&Math.abs(b-w)<.01&&Math.abs(M-S)<.01){if(Math.abs(x+y)<.1&&Math.abs(b+w)<.1&&Math.abs(M+S)<.1&&Math.abs(m+_+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(m+1)/2,T=(_+1)/2,U=(v+1)/2,F=(x+y)/4,D=(b+w)/4,B=(M+S)/4;return N>T&&N>U?N<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(N),o=F/s,c=D/s):T>U?T<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(T),s=F/o,c=B/o):U<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(U),s=D/c,o=B/c),this.set(s,o,c,t),this}let k=Math.sqrt((S-M)*(S-M)+(b-w)*(b-w)+(y-x)*(y-x));return Math.abs(k)<.001&&(k=1),this.x=(S-M)/k,this.y=(b-w)/k,this.z=(y-x)/k,this.w=Math.acos((m+_+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oy extends ea{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const o={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Sn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new G0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Oy{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class V0 extends Sn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zy extends Sn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,c,f,d){let p=s[o+0],m=s[o+1],x=s[o+2],b=s[o+3];const y=c[f+0],_=c[f+1],M=c[f+2],w=c[f+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=b;return}if(d===1){e[t+0]=y,e[t+1]=_,e[t+2]=M,e[t+3]=w;return}if(b!==w||p!==y||m!==_||x!==M){let S=1-d;const v=p*y+m*_+x*M+b*w,k=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const U=Math.sqrt(N),F=Math.atan2(U,v*k);S=Math.sin(S*F)/U,d=Math.sin(d*F)/U}const T=d*k;if(p=p*S+y*T,m=m*S+_*T,x=x*S+M*T,b=b*S+w*T,S===1-d){const U=1/Math.sqrt(p*p+m*m+x*x+b*b);p*=U,m*=U,x*=U,b*=U}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=b}static multiplyQuaternionsFlat(e,t,s,o,c,f){const d=s[o],p=s[o+1],m=s[o+2],x=s[o+3],b=c[f],y=c[f+1],_=c[f+2],M=c[f+3];return e[t]=d*M+x*b+p*_-m*y,e[t+1]=p*M+x*y+m*b-d*_,e[t+2]=m*M+x*_+d*y-p*b,e[t+3]=x*M-d*b-p*y-m*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(s/2),x=d(o/2),b=d(c/2),y=p(s/2),_=p(o/2),M=p(c/2);switch(f){case"XYZ":this._x=y*x*b+m*_*M,this._y=m*_*b-y*x*M,this._z=m*x*M+y*_*b,this._w=m*x*b-y*_*M;break;case"YXZ":this._x=y*x*b+m*_*M,this._y=m*_*b-y*x*M,this._z=m*x*M-y*_*b,this._w=m*x*b+y*_*M;break;case"ZXY":this._x=y*x*b-m*_*M,this._y=m*_*b+y*x*M,this._z=m*x*M+y*_*b,this._w=m*x*b-y*_*M;break;case"ZYX":this._x=y*x*b-m*_*M,this._y=m*_*b+y*x*M,this._z=m*x*M-y*_*b,this._w=m*x*b+y*_*M;break;case"YZX":this._x=y*x*b+m*_*M,this._y=m*_*b+y*x*M,this._z=m*x*M-y*_*b,this._w=m*x*b-y*_*M;break;case"XZY":this._x=y*x*b-m*_*M,this._y=m*_*b-y*x*M,this._z=m*x*M+y*_*b,this._w=m*x*b+y*_*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],c=t[8],f=t[1],d=t[5],p=t[9],m=t[2],x=t[6],b=t[10],y=s+d+b;if(y>0){const _=.5/Math.sqrt(y+1);this._w=.25/_,this._x=(x-p)*_,this._y=(c-m)*_,this._z=(f-o)*_}else if(s>d&&s>b){const _=2*Math.sqrt(1+s-d-b);this._w=(x-p)/_,this._x=.25*_,this._y=(o+f)/_,this._z=(c+m)/_}else if(d>b){const _=2*Math.sqrt(1+d-s-b);this._w=(c-m)/_,this._x=(o+f)/_,this._y=.25*_,this._z=(p+x)/_}else{const _=2*Math.sqrt(1+b-s-d);this._w=(f-o)/_,this._x=(c+m)/_,this._y=(p+x)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,c=e._z,f=e._w,d=t._x,p=t._y,m=t._z,x=t._w;return this._x=s*x+f*d+o*m-c*p,this._y=o*x+f*p+c*d-s*m,this._z=c*x+f*m+s*p-o*d,this._w=f*x-s*d-o*p-c*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,c=this._z,f=this._w;let d=f*e._w+s*e._x+o*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=s,this._y=o,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const _=1-t;return this._w=_*f+t*this._w,this._x=_*s+t*this._x,this._y=_*o+t*this._y,this._z=_*c+t*this._z,this.normalize(),this}const m=Math.sqrt(p),x=Math.atan2(m,d),b=Math.sin((1-t)*x)/m,y=Math.sin(t*x)/m;return this._w=f*b+this._w*y,this._x=s*b+this._x*y,this._y=o*b+this._y*y,this._z=c*b+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,t=0,s=0){fe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[3]*s+c[6]*o,this.y=c[1]*t+c[4]*s+c[7]*o,this.z=c[2]*t+c[5]*s+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,c=e.elements,f=1/(c[3]*t+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*t+c[4]*s+c[8]*o+c[12])*f,this.y=(c[1]*t+c[5]*s+c[9]*o+c[13])*f,this.z=(c[2]*t+c[6]*s+c[10]*o+c[14])*f,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*o-d*s),x=2*(d*t-c*o),b=2*(c*s-f*t);return this.x=t+p*m+f*b-d*x,this.y=s+p*x+d*m-c*b,this.z=o+p*b+c*x-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o,this.y=c[1]*t+c[5]*s+c[9]*o,this.z=c[2]*t+c[6]*s+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,c=e.z,f=t.x,d=t.y,p=t.z;return this.x=o*p-c*d,this.y=c*f-s*p,this.z=s*d-o*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bu=new fe,pm=new Qa;class Ka{constructor(e=new fe(1/0,1/0,1/0),t=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=or.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,or):or.fromBufferAttribute(c,f),or.applyMatrix4(e.matrixWorld),this.expandByPoint(or);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ol.copy(s.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),ll.subVectors(this.max,Ia),As.subVectors(e.a,Ia),Cs.subVectors(e.b,Ia),Rs.subVectors(e.c,Ia),pi.subVectors(Cs,As),mi.subVectors(Rs,Cs),Bi.subVectors(As,Rs);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Bi.z,Bi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Bi.z,0,-Bi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Bi.y,Bi.x,0];return!ju(t,As,Cs,Rs,ll)||(t=[1,0,0,0,1,0,0,0,1],!ju(t,As,Cs,Rs,ll))?!1:(cl.crossVectors(pi,mi),t=[cl.x,cl.y,cl.z],ju(t,As,Cs,Rs,ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(or).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dr=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],or=new fe,ol=new Ka,As=new fe,Cs=new fe,Rs=new fe,pi=new fe,mi=new fe,Bi=new fe,Ia=new fe,ll=new fe,cl=new fe,ji=new fe;function ju(i,e,t,s,o){for(let c=0,f=i.length-3;c<=f;c+=3){ji.fromArray(i,c);const d=o.x*Math.abs(ji.x)+o.y*Math.abs(ji.y)+o.z*Math.abs(ji.z),p=e.dot(ji),m=t.dot(ji),x=s.dot(ji);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const By=new Ka,Ua=new fe,Hu=new fe;class ql{constructor(e=new fe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):By.setFromPoints(e).getCenter(s);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Ua,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(Hu)),this.expandByPoint(Ua.copy(e.center).sub(Hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Lr=new fe,Gu=new fe,ul=new fe,gi=new fe,Vu=new fe,dl=new fe,Wu=new fe;class W0{constructor(e=new fe,t=new fe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Gu.copy(e).add(t).multiplyScalar(.5),ul.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Gu);const c=e.distanceTo(t)*.5,f=-this.direction.dot(ul),d=gi.dot(this.direction),p=-gi.dot(ul),m=gi.lengthSq(),x=Math.abs(1-f*f);let b,y,_,M;if(x>0)if(b=f*p-d,y=f*d-p,M=c*x,b>=0)if(y>=-M)if(y<=M){const w=1/x;b*=w,y*=w,_=b*(b+f*y+2*d)+y*(f*b+y+2*p)+m}else y=c,b=Math.max(0,-(f*y+d)),_=-b*b+y*(y+2*p)+m;else y=-c,b=Math.max(0,-(f*y+d)),_=-b*b+y*(y+2*p)+m;else y<=-M?(b=Math.max(0,-(-f*c+d)),y=b>0?-c:Math.min(Math.max(-c,-p),c),_=-b*b+y*(y+2*p)+m):y<=M?(b=0,y=Math.min(Math.max(-c,-p),c),_=y*(y+2*p)+m):(b=Math.max(0,-(f*c+d)),y=b>0?c:Math.min(Math.max(-c,-p),c),_=-b*b+y*(y+2*p)+m);else y=f>0?-c:c,b=Math.max(0,-(f*y+d)),_=-b*b+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,b),o&&o.copy(Gu).addScaledVector(ul,y),_}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);const s=Lr.dot(this.direction),o=Lr.dot(Lr)-s*s,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,c,f,d,p;const m=1/this.direction.x,x=1/this.direction.y,b=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),x>=0?(c=(e.min.y-y.y)*x,f=(e.max.y-y.y)*x):(c=(e.max.y-y.y)*x,f=(e.min.y-y.y)*x),s>f||c>o||((c>s||isNaN(s))&&(s=c),(f<o||isNaN(o))&&(o=f),b>=0?(d=(e.min.z-y.z)*b,p=(e.max.z-y.z)*b):(d=(e.max.z-y.z)*b,p=(e.min.z-y.z)*b),s>p||d>o)||((d>s||s!==s)&&(s=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,s,o,c){Vu.subVectors(t,e),dl.subVectors(s,e),Wu.crossVectors(Vu,dl);let f=this.direction.dot(Wu),d;if(f>0){if(o)return null;d=1}else if(f<0)d=-1,f=-f;else return null;gi.subVectors(this.origin,e);const p=d*this.direction.dot(dl.crossVectors(gi,dl));if(p<0)return null;const m=d*this.direction.dot(Vu.cross(gi));if(m<0||p+m>f)return null;const x=-d*gi.dot(Wu);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,s,o,c,f,d,p,m,x,b,y,_,M,w,S){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,c,f,d,p,m,x,b,y,_,M,w,S)}set(e,t,s,o,c,f,d,p,m,x,b,y,_,M,w,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=o,v[1]=c,v[5]=f,v[9]=d,v[13]=p,v[2]=m,v[6]=x,v[10]=b,v[14]=y,v[3]=_,v[7]=M,v[11]=w,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Ns.setFromMatrixColumn(e,0).length(),c=1/Ns.setFromMatrixColumn(e,1).length(),f=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*c,t[5]=s[5]*c,t[6]=s[6]*c,t[7]=0,t[8]=s[8]*f,t[9]=s[9]*f,t[10]=s[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,c=e.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(o),m=Math.sin(o),x=Math.cos(c),b=Math.sin(c);if(e.order==="XYZ"){const y=f*x,_=f*b,M=d*x,w=d*b;t[0]=p*x,t[4]=-p*b,t[8]=m,t[1]=_+M*m,t[5]=y-w*m,t[9]=-d*p,t[2]=w-y*m,t[6]=M+_*m,t[10]=f*p}else if(e.order==="YXZ"){const y=p*x,_=p*b,M=m*x,w=m*b;t[0]=y+w*d,t[4]=M*d-_,t[8]=f*m,t[1]=f*b,t[5]=f*x,t[9]=-d,t[2]=_*d-M,t[6]=w+y*d,t[10]=f*p}else if(e.order==="ZXY"){const y=p*x,_=p*b,M=m*x,w=m*b;t[0]=y-w*d,t[4]=-f*b,t[8]=M+_*d,t[1]=_+M*d,t[5]=f*x,t[9]=w-y*d,t[2]=-f*m,t[6]=d,t[10]=f*p}else if(e.order==="ZYX"){const y=f*x,_=f*b,M=d*x,w=d*b;t[0]=p*x,t[4]=M*m-_,t[8]=y*m+w,t[1]=p*b,t[5]=w*m+y,t[9]=_*m-M,t[2]=-m,t[6]=d*p,t[10]=f*p}else if(e.order==="YZX"){const y=f*p,_=f*m,M=d*p,w=d*m;t[0]=p*x,t[4]=w-y*b,t[8]=M*b+_,t[1]=b,t[5]=f*x,t[9]=-d*x,t[2]=-m*x,t[6]=_*b+M,t[10]=y-w*b}else if(e.order==="XZY"){const y=f*p,_=f*m,M=d*p,w=d*m;t[0]=p*x,t[4]=-b,t[8]=m*x,t[1]=y*b+w,t[5]=f*x,t[9]=_*b-M,t[2]=M*b-_,t[6]=d*x,t[10]=w*b+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jy,e,Hy)}lookAt(e,t,s){const o=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),xi.crossVectors(s,On),xi.lengthSq()===0&&(Math.abs(s.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),xi.crossVectors(s,On)),xi.normalize(),fl.crossVectors(On,xi),o[0]=xi.x,o[4]=fl.x,o[8]=On.x,o[1]=xi.y,o[5]=fl.y,o[9]=On.y,o[2]=xi.z,o[6]=fl.z,o[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],x=s[1],b=s[5],y=s[9],_=s[13],M=s[2],w=s[6],S=s[10],v=s[14],k=s[3],N=s[7],T=s[11],U=s[15],F=o[0],D=o[4],B=o[8],P=o[12],C=o[1],j=o[5],W=o[9],$=o[13],ue=o[2],me=o[6],le=o[10],pe=o[14],H=o[3],ee=o[7],ae=o[11],z=o[15];return c[0]=f*F+d*C+p*ue+m*H,c[4]=f*D+d*j+p*me+m*ee,c[8]=f*B+d*W+p*le+m*ae,c[12]=f*P+d*$+p*pe+m*z,c[1]=x*F+b*C+y*ue+_*H,c[5]=x*D+b*j+y*me+_*ee,c[9]=x*B+b*W+y*le+_*ae,c[13]=x*P+b*$+y*pe+_*z,c[2]=M*F+w*C+S*ue+v*H,c[6]=M*D+w*j+S*me+v*ee,c[10]=M*B+w*W+S*le+v*ae,c[14]=M*P+w*$+S*pe+v*z,c[3]=k*F+N*C+T*ue+U*H,c[7]=k*D+N*j+T*me+U*ee,c[11]=k*B+N*W+T*le+U*ae,c[15]=k*P+N*$+T*pe+U*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],x=e[2],b=e[6],y=e[10],_=e[14],M=e[3],w=e[7],S=e[11],v=e[15];return M*(+c*p*b-o*m*b-c*d*y+s*m*y+o*d*_-s*p*_)+w*(+t*p*_-t*m*y+c*f*y-o*f*_+o*m*x-c*p*x)+S*(+t*m*b-t*d*_-c*f*b+s*f*_+c*d*x-s*m*x)+v*(-o*d*x-t*p*b+t*d*y+o*f*b-s*f*y+s*p*x)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],x=e[8],b=e[9],y=e[10],_=e[11],M=e[12],w=e[13],S=e[14],v=e[15],k=b*S*m-w*y*m+w*p*_-d*S*_-b*p*v+d*y*v,N=M*y*m-x*S*m-M*p*_+f*S*_+x*p*v-f*y*v,T=x*w*m-M*b*m+M*d*_-f*w*_-x*d*v+f*b*v,U=M*b*p-x*w*p-M*d*y+f*w*y+x*d*S-f*b*S,F=t*k+s*N+o*T+c*U;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/F;return e[0]=k*D,e[1]=(w*y*c-b*S*c-w*o*_+s*S*_+b*o*v-s*y*v)*D,e[2]=(d*S*c-w*p*c+w*o*m-s*S*m-d*o*v+s*p*v)*D,e[3]=(b*p*c-d*y*c-b*o*m+s*y*m+d*o*_-s*p*_)*D,e[4]=N*D,e[5]=(x*S*c-M*y*c+M*o*_-t*S*_-x*o*v+t*y*v)*D,e[6]=(M*p*c-f*S*c-M*o*m+t*S*m+f*o*v-t*p*v)*D,e[7]=(f*y*c-x*p*c+x*o*m-t*y*m-f*o*_+t*p*_)*D,e[8]=T*D,e[9]=(M*b*c-x*w*c-M*s*_+t*w*_+x*s*v-t*b*v)*D,e[10]=(f*w*c-M*d*c+M*s*m-t*w*m-f*s*v+t*d*v)*D,e[11]=(x*d*c-f*b*c-x*s*m+t*b*m+f*s*_-t*d*_)*D,e[12]=U*D,e[13]=(x*w*o-M*b*o+M*s*y-t*w*y-x*s*S+t*b*S)*D,e[14]=(M*d*o-f*w*o-M*s*p+t*w*p+f*s*S-t*d*S)*D,e[15]=(f*b*o-x*d*o+x*s*p-t*b*p-f*s*y+t*d*y)*D,this}scale(e){const t=this.elements,s=e.x,o=e.y,c=e.z;return t[0]*=s,t[4]*=o,t[8]*=c,t[1]*=s,t[5]*=o,t[9]*=c,t[2]*=s,t[6]*=o,t[10]*=c,t[3]*=s,t[7]*=o,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),c=1-s,f=e.x,d=e.y,p=e.z,m=c*f,x=c*d;return this.set(m*f+s,m*d-o*p,m*p+o*d,0,m*d+o*p,x*d+s,x*p-o*f,0,m*p-o*d,x*p+o*f,c*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,c,f){return this.set(1,s,c,0,e,1,f,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,c=t._x,f=t._y,d=t._z,p=t._w,m=c+c,x=f+f,b=d+d,y=c*m,_=c*x,M=c*b,w=f*x,S=f*b,v=d*b,k=p*m,N=p*x,T=p*b,U=s.x,F=s.y,D=s.z;return o[0]=(1-(w+v))*U,o[1]=(_+T)*U,o[2]=(M-N)*U,o[3]=0,o[4]=(_-T)*F,o[5]=(1-(y+v))*F,o[6]=(S+k)*F,o[7]=0,o[8]=(M+N)*D,o[9]=(S-k)*D,o[10]=(1-(y+w))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let c=Ns.set(o[0],o[1],o[2]).length();const f=Ns.set(o[4],o[5],o[6]).length(),d=Ns.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],lr.copy(this);const m=1/c,x=1/f,b=1/d;return lr.elements[0]*=m,lr.elements[1]*=m,lr.elements[2]*=m,lr.elements[4]*=x,lr.elements[5]*=x,lr.elements[6]*=x,lr.elements[8]*=b,lr.elements[9]*=b,lr.elements[10]*=b,t.setFromRotationMatrix(lr),s.x=c,s.y=f,s.z=d,this}makePerspective(e,t,s,o,c,f,d=Br){const p=this.elements,m=2*c/(t-e),x=2*c/(s-o),b=(t+e)/(t-e),y=(s+o)/(s-o);let _,M;if(d===Br)_=-(f+c)/(f-c),M=-2*f*c/(f-c);else if(d===Bl)_=-f/(f-c),M=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=b,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=_,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,c,f,d=Br){const p=this.elements,m=1/(t-e),x=1/(s-o),b=1/(f-c),y=(t+e)*m,_=(s+o)*x;let M,w;if(d===Br)M=(f+c)*b,w=-2*b;else if(d===Bl)M=c*b,w=-1*b;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*x,p[9]=0,p[13]=-_,p[2]=0,p[6]=0,p[10]=w,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ns=new fe,lr=new Gt,jy=new fe(0,0,0),Hy=new fe(1,1,1),xi=new fe,fl=new fe,On=new fe,mm=new Gt,gm=new Qa;class Vr{constructor(e=0,t=0,s=0,o=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,c=o[0],f=o[4],d=o[8],p=o[1],m=o[5],x=o[9],b=o[2],y=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,_),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,_),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-b,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-b,_),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Nn(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(y,_),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-b,c)):(this._x=0,this._y=Math.atan2(d,_));break;case"XZY":this._z=Math.asin(-Nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gm.setFromEuler(this),this.setFromQuaternion(gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class X0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gy=0;const xm=new fe,Ps=new Qa,Ir=new Gt,hl=new fe,Fa=new fe,Vy=new fe,Wy=new Qa,vm=new fe(1,0,0),ym=new fe(0,1,0),Sm=new fe(0,0,1),_m={type:"added"},Xy={type:"removed"},ks={type:"childadded",child:null},Xu={type:"childremoved",child:null};class Dn extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new fe,t=new Vr,s=new Qa,o=new fe(1,1,1);function c(){s.setFromEuler(t,!1)}function f(){t.setFromQuaternion(s,void 0,!1)}t._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ut}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(vm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,t){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ir.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?hl.copy(e):hl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ir.lookAt(Fa,hl,this.up):Ir.lookAt(hl,Fa,this.up),this.quaternion.setFromRotationMatrix(Ir),o&&(Ir.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(Ir),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_m),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xy),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_m),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const f=this.children[s].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,Vy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,Wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const b=p[m];c(e.shapes,b)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(t){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),x=f(e.images),b=f(e.shapes),y=f(e.skeletons),_=f(e.animations),M=f(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),x.length>0&&(s.images=x),b.length>0&&(s.shapes=b),y.length>0&&(s.skeletons=y),_.length>0&&(s.animations=_),M.length>0&&(s.nodes=M)}return s.object=o,s;function f(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Dn.DEFAULT_UP=new fe(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cr=new fe,Ur=new fe,qu=new fe,Fr=new fe,Ds=new fe,Ls=new fe,bm=new fe,Yu=new fe,Qu=new fe,Ku=new fe,Zu=new jt,Ju=new jt,$u=new jt;class dr{constructor(e=new fe,t=new fe,s=new fe){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),cr.subVectors(e,t),o.cross(cr);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,t,s,o,c){cr.subVectors(o,t),Ur.subVectors(s,t),qu.subVectors(e,t);const f=cr.dot(cr),d=cr.dot(Ur),p=cr.dot(qu),m=Ur.dot(Ur),x=Ur.dot(qu),b=f*m-d*d;if(b===0)return c.set(0,0,0),null;const y=1/b,_=(m*p-d*x)*y,M=(f*x-d*p)*y;return c.set(1-_-M,M,_)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Fr)===null?!1:Fr.x>=0&&Fr.y>=0&&Fr.x+Fr.y<=1}static getInterpolation(e,t,s,o,c,f,d,p){return this.getBarycoord(e,t,s,o,Fr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Fr.x),p.addScaledVector(f,Fr.y),p.addScaledVector(d,Fr.z),p)}static getInterpolatedAttribute(e,t,s,o,c,f){return Zu.setScalar(0),Ju.setScalar(0),$u.setScalar(0),Zu.fromBufferAttribute(e,t),Ju.fromBufferAttribute(e,s),$u.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(Zu,c.x),f.addScaledVector(Ju,c.y),f.addScaledVector($u,c.z),f}static isFrontFacing(e,t,s,o){return cr.subVectors(s,t),Ur.subVectors(e,t),cr.cross(Ur).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cr.subVectors(this.c,this.b),Ur.subVectors(this.a,this.b),cr.cross(Ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,c){return dr.getInterpolation(e,this.a,this.b,this.c,t,s,o,c)}containsPoint(e){return dr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,c=this.c;let f,d;Ds.subVectors(o,s),Ls.subVectors(c,s),Yu.subVectors(e,s);const p=Ds.dot(Yu),m=Ls.dot(Yu);if(p<=0&&m<=0)return t.copy(s);Qu.subVectors(e,o);const x=Ds.dot(Qu),b=Ls.dot(Qu);if(x>=0&&b<=x)return t.copy(o);const y=p*b-x*m;if(y<=0&&p>=0&&x<=0)return f=p/(p-x),t.copy(s).addScaledVector(Ds,f);Ku.subVectors(e,c);const _=Ds.dot(Ku),M=Ls.dot(Ku);if(M>=0&&_<=M)return t.copy(c);const w=_*m-p*M;if(w<=0&&m>=0&&M<=0)return d=m/(m-M),t.copy(s).addScaledVector(Ls,d);const S=x*M-_*b;if(S<=0&&b-x>=0&&_-M>=0)return bm.subVectors(c,o),d=(b-x)/(b-x+(_-M)),t.copy(o).addScaledVector(bm,d);const v=1/(S+w+y);return f=w*v,d=y*v,t.copy(s).addScaledVector(Ds,f).addScaledVector(Ls,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},pl={h:0,s:0,l:0};function ed(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Tt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=_t.workingColorSpace){return this.r=e,this.g=t,this.b=s,_t.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=_t.workingColorSpace){if(e=Ny(e,1),t=Nn(t,0,1),s=Nn(s,0,1),t===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+t):s+t-s*t,f=2*s-c;this.r=ed(f,c,e+1/3),this.g=ed(f,c,e),this.b=ed(f,c,e-1/3)}return _t.toWorkingColorSpace(this,o),this}setStyle(e,t=Kn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],d=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(c,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const s=q0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return _t.fromWorkingColorSpace(hn.copy(this),e),Math.round(Nn(hn.r*255,0,255))*65536+Math.round(Nn(hn.g*255,0,255))*256+Math.round(Nn(hn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(hn.copy(this),t);const s=hn.r,o=hn.g,c=hn.b,f=Math.max(s,o,c),d=Math.min(s,o,c);let p,m;const x=(d+f)/2;if(d===f)p=0,m=0;else{const b=f-d;switch(m=x<=.5?b/(f+d):b/(2-f-d),f){case s:p=(o-c)/b+(o<c?6:0);break;case o:p=(c-s)/b+2;break;case c:p=(s-o)/b+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Kn){_t.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,s=hn.g,o=hn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(pl);const s=Fu(vi.h,pl.h,t),o=Fu(vi.s,pl.s,t),c=Fu(vi.l,pl.l,t);return this.setHSL(s,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,c=e.elements;return this.r=c[0]*t+c[3]*s+c[6]*o,this.g=c[1]*t+c[4]*s+c[7]*o,this.b=c[2]*t+c[5]*s+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Tt;Tt.NAMES=q0;let qy=0;class Za extends ea{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Ya(),this.name="",this.blending=js,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=vd,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(s.blending=this.blending),this.side!==wi&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==xd&&(s.blendSrc=this.blendSrc),this.blendDst!==vd&&(s.blendDst=this.blendDst),this.blendEquation!==Qi&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(t){const c=o(e.textures),f=o(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=t[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Y0 extends Za{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=R0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new fe,ml=new ct;class hr{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=am,this.updateRanges=[],this.gpuType=_r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=La(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Rn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=La(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=La(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=La(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=La(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array),o=Rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,c){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array),o=Rn(o,this.array),c=Rn(c,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==am&&(e.usage=this.usage),e}}class Q0 extends hr{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class K0 extends hr{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Hr extends hr{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Yy=0;const Qn=new Gt,td=new Dn,Is=new fe,zn=new Ka,Oa=new Ka,tn=new fe;class Xr extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H0(e)?K0:Q0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ut().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,s){return Qn.makeTranslation(e,t,s),this.applyMatrix4(Qn),this}scale(e,t,s){return Qn.makeScale(e,t,s),this.applyMatrix4(Qn),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Hr(s,3))}else{for(let s=0,o=t.count;s<o;s++){const c=e[s];t.setXYZ(s,c.x,c.y,c.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];zn.setFromBufferAttribute(c),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const s=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let c=0,f=t.length;c<f;c++){const d=t[c];Oa.setFromBufferAttribute(d),this.morphTargetsRelative?(tn.addVectors(zn.min,Oa.min),zn.expandByPoint(tn),tn.addVectors(zn.max,Oa.max),zn.expandByPoint(tn)):(zn.expandByPoint(Oa.min),zn.expandByPoint(Oa.max))}zn.getCenter(s);let o=0;for(let c=0,f=e.count;c<f;c++)tn.fromBufferAttribute(e,c),o=Math.max(o,s.distanceToSquared(tn));if(t)for(let c=0,f=t.length;c<f;c++){const d=t[c],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)tn.fromBufferAttribute(d,m),p&&(Is.fromBufferAttribute(e,m),tn.add(Is)),o=Math.max(o,s.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,c=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hr(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<s.count;B++)d[B]=new fe,p[B]=new fe;const m=new fe,x=new fe,b=new fe,y=new ct,_=new ct,M=new ct,w=new fe,S=new fe;function v(B,P,C){m.fromBufferAttribute(s,B),x.fromBufferAttribute(s,P),b.fromBufferAttribute(s,C),y.fromBufferAttribute(c,B),_.fromBufferAttribute(c,P),M.fromBufferAttribute(c,C),x.sub(m),b.sub(m),_.sub(y),M.sub(y);const j=1/(_.x*M.y-M.x*_.y);isFinite(j)&&(w.copy(x).multiplyScalar(M.y).addScaledVector(b,-_.y).multiplyScalar(j),S.copy(b).multiplyScalar(_.x).addScaledVector(x,-M.x).multiplyScalar(j),d[B].add(w),d[P].add(w),d[C].add(w),p[B].add(S),p[P].add(S),p[C].add(S))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let B=0,P=k.length;B<P;++B){const C=k[B],j=C.start,W=C.count;for(let $=j,ue=j+W;$<ue;$+=3)v(e.getX($+0),e.getX($+1),e.getX($+2))}const N=new fe,T=new fe,U=new fe,F=new fe;function D(B){U.fromBufferAttribute(o,B),F.copy(U);const P=d[B];N.copy(P),N.sub(U.multiplyScalar(U.dot(P))).normalize(),T.crossVectors(F,P);const j=T.dot(p[B])<0?-1:1;f.setXYZW(B,N.x,N.y,N.z,j)}for(let B=0,P=k.length;B<P;++B){const C=k[B],j=C.start,W=C.count;for(let $=j,ue=j+W;$<ue;$+=3)D(e.getX($+0)),D(e.getX($+1)),D(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new hr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,_=s.count;y<_;y++)s.setXYZ(y,0,0,0);const o=new fe,c=new fe,f=new fe,d=new fe,p=new fe,m=new fe,x=new fe,b=new fe;if(e)for(let y=0,_=e.count;y<_;y+=3){const M=e.getX(y+0),w=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(t,M),c.fromBufferAttribute(t,w),f.fromBufferAttribute(t,S),x.subVectors(f,c),b.subVectors(o,c),x.cross(b),d.fromBufferAttribute(s,M),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,S),d.add(x),p.add(x),m.add(x),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,_=t.count;y<_;y+=3)o.fromBufferAttribute(t,y+0),c.fromBufferAttribute(t,y+1),f.fromBufferAttribute(t,y+2),x.subVectors(f,c),b.subVectors(o,c),x.cross(b),s.setXYZ(y+0,x.x,x.y,x.z),s.setXYZ(y+1,x.x,x.y,x.z),s.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,b=d.normalized,y=new m.constructor(p.length*x);let _=0,M=0;for(let w=0,S=p.length;w<S;w++){d.isInterleavedBufferAttribute?_=p[w]*d.data.stride+d.offset:_=p[w]*x;for(let v=0;v<x;v++)y[M++]=m[_++]}return new hr(y,x,b)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xr,s=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,s);t.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let x=0,b=m.length;x<b;x++){const y=m[x],_=e(y,s);p.push(_)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let b=0,y=m.length;b<y;b++){const _=m[b];x.push(_.toJSON(e.data))}x.length>0&&(o[p]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const c=e.morphAttributes;for(const m in c){const x=[],b=c[m];for(let y=0,_=b.length;y<_;y++)x.push(b[y].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,x=f.length;m<x;m++){const b=f[m];this.addGroup(b.start,b.count,b.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mm=new Gt,Hi=new W0,gl=new ql,wm=new fe,xl=new fe,vl=new fe,yl=new fe,nd=new fe,Sl=new fe,Em=new fe,_l=new fe;class Jn extends Dn{constructor(e=new Xr,t=new Y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Sl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const x=d[p],b=c[p];x!==0&&(nd.fromBufferAttribute(b,e),f?Sl.addScaledVector(nd,x):Sl.addScaledVector(nd.sub(t),x))}t.add(Sl)}return t}raycast(e,t){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gl.copy(s.boundingSphere),gl.applyMatrix4(c),Hi.copy(e.ray).recast(e.near),!(gl.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(gl,wm)===null||Hi.origin.distanceToSquared(wm)>(e.far-e.near)**2))&&(Mm.copy(c).invert(),Hi.copy(e.ray).applyMatrix4(Mm),!(s.boundingBox!==null&&Hi.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,s){let o;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,x=c.attributes.uv1,b=c.attributes.normal,y=c.groups,_=c.drawRange;if(d!==null)if(Array.isArray(f))for(let M=0,w=y.length;M<w;M++){const S=y[M],v=f[S.materialIndex],k=Math.max(S.start,_.start),N=Math.min(d.count,Math.min(S.start+S.count,_.start+_.count));for(let T=k,U=N;T<U;T+=3){const F=d.getX(T),D=d.getX(T+1),B=d.getX(T+2);o=bl(this,v,e,s,m,x,b,F,D,B),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),w=Math.min(d.count,_.start+_.count);for(let S=M,v=w;S<v;S+=3){const k=d.getX(S),N=d.getX(S+1),T=d.getX(S+2);o=bl(this,f,e,s,m,x,b,k,N,T),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let M=0,w=y.length;M<w;M++){const S=y[M],v=f[S.materialIndex],k=Math.max(S.start,_.start),N=Math.min(p.count,Math.min(S.start+S.count,_.start+_.count));for(let T=k,U=N;T<U;T+=3){const F=T,D=T+1,B=T+2;o=bl(this,v,e,s,m,x,b,F,D,B),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),w=Math.min(p.count,_.start+_.count);for(let S=M,v=w;S<v;S+=3){const k=S,N=S+1,T=S+2;o=bl(this,f,e,s,m,x,b,k,N,T),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Qy(i,e,t,s,o,c,f,d){let p;if(e.side===kn?p=s.intersectTriangle(f,c,o,!0,d):p=s.intersectTriangle(o,c,f,e.side===wi,d),p===null)return null;_l.copy(d),_l.applyMatrix4(i.matrixWorld);const m=t.ray.origin.distanceTo(_l);return m<t.near||m>t.far?null:{distance:m,point:_l.clone(),object:i}}function bl(i,e,t,s,o,c,f,d,p,m){i.getVertexPosition(d,xl),i.getVertexPosition(p,vl),i.getVertexPosition(m,yl);const x=Qy(i,e,t,s,xl,vl,yl,Em);if(x){const b=new fe;dr.getBarycoord(Em,xl,vl,yl,b),o&&(x.uv=dr.getInterpolatedAttribute(o,d,p,m,b,new ct)),c&&(x.uv1=dr.getInterpolatedAttribute(c,d,p,m,b,new ct)),f&&(x.normal=dr.getInterpolatedAttribute(f,d,p,m,b,new fe),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new fe,materialIndex:0};dr.getNormal(xl,vl,yl,y.normal),x.face=y,x.barycoord=b}return x}class Ja extends Xr{constructor(e=1,t=1,s=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:c,depthSegments:f};const d=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],x=[],b=[];let y=0,_=0;M("z","y","x",-1,-1,s,t,e,f,c,0),M("z","y","x",1,-1,s,t,-e,f,c,1),M("x","z","y",1,1,e,s,t,o,f,2),M("x","z","y",1,-1,e,s,-t,o,f,3),M("x","y","z",1,-1,e,t,s,o,c,4),M("x","y","z",-1,-1,e,t,-s,o,c,5),this.setIndex(p),this.setAttribute("position",new Hr(m,3)),this.setAttribute("normal",new Hr(x,3)),this.setAttribute("uv",new Hr(b,2));function M(w,S,v,k,N,T,U,F,D,B,P){const C=T/D,j=U/B,W=T/2,$=U/2,ue=F/2,me=D+1,le=B+1;let pe=0,H=0;const ee=new fe;for(let ae=0;ae<le;ae++){const z=ae*j-$;for(let re=0;re<me;re++){const Pe=re*C-W;ee[w]=Pe*k,ee[S]=z*N,ee[v]=ue,m.push(ee.x,ee.y,ee.z),ee[w]=0,ee[S]=0,ee[v]=F>0?1:-1,x.push(ee.x,ee.y,ee.z),b.push(re/D),b.push(1-ae/B),pe+=1}}for(let ae=0;ae<B;ae++)for(let z=0;z<D;z++){const re=y+z+me*ae,Pe=y+z+me*(ae+1),ie=y+(z+1)+me*(ae+1),ge=y+(z+1)+me*ae;p.push(re,Pe,ge),p.push(Pe,ie,ge),H+=6}d.addGroup(_,H,P),_+=H,y+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const o=i[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function yn(i){const e={};for(let t=0;t<i.length;t++){const s=Ks(i[t]);for(const o in s)e[o]=s[o]}return e}function Ky(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Z0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Zy={clone:Ks,merge:yn};var Jy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$y=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends Za{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jy,this.fragmentShader=$y,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Ky(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?t.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[o]={type:"m4",value:f.toArray()}:t.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Hl extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new fe,Tm=new ct,Am=new ct;class ur extends Hl{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nf*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,Tm,Am),t.subVectors(Am,Tm)}setViewOffset(e,t,s,o,c,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uu*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*o/p,t-=f.offsetY*s/m,o*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Us=-90,Fs=1;class e2 extends Dn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ur(Us,Fs,e,t);o.layers=this.layers,this.add(o);const c=new ur(Us,Fs,e,t);c.layers=this.layers,this.add(c);const f=new ur(Us,Fs,e,t);f.layers=this.layers,this.add(f);const d=new ur(Us,Fs,e,t);d.layers=this.layers,this.add(d);const p=new ur(Us,Fs,e,t);p.layers=this.layers,this.add(p);const m=new ur(Us,Fs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,c,f,d,p]=t;for(const m of t)this.remove(m);if(e===Br)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Bl)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,x]=this.children,b=e.getRenderTarget(),y=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,c),e.setRenderTarget(s,1,o),e.render(t,f),e.setRenderTarget(s,2,o),e.render(t,d),e.setRenderTarget(s,3,o),e.render(t,p),e.setRenderTarget(s,4,o),e.render(t,m),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,o),e.render(t,x),e.setRenderTarget(b,y,_),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class J0 extends Sn{constructor(e,t,s,o,c,f,d,p,m,x){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,s,o,c,f,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t2 extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new J0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ja(5,5,5),c=new Wr({name:"CubemapFromEquirect",uniforms:Ks(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:bi});c.uniforms.tEquirect.value=t;const f=new Jn(o,c),d=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Pn),new e2(1,10,this).update(e,f),t.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,s,o){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,s,o);e.setRenderTarget(c)}}const rd=new fe,n2=new fe,r2=new ut;class qi{constructor(e=new fe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=rd.subVectors(s,t).cross(n2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(rd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||r2.getNormalMatrix(e),o=this.coplanarPoint(rd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new ql,Ml=new fe;class $0{constructor(e=new qi,t=new qi,s=new qi,o=new qi,c=new qi,f=new qi){this.planes=[e,t,s,o,c,f]}set(e,t,s,o,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(c),d[5].copy(f),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Br){const s=this.planes,o=e.elements,c=o[0],f=o[1],d=o[2],p=o[3],m=o[4],x=o[5],b=o[6],y=o[7],_=o[8],M=o[9],w=o[10],S=o[11],v=o[12],k=o[13],N=o[14],T=o[15];if(s[0].setComponents(p-c,y-m,S-_,T-v).normalize(),s[1].setComponents(p+c,y+m,S+_,T+v).normalize(),s[2].setComponents(p+f,y+x,S+M,T+k).normalize(),s[3].setComponents(p-f,y-x,S-M,T-k).normalize(),s[4].setComponents(p-d,y-b,S-w,T-N).normalize(),t===Br)s[5].setComponents(p+d,y+b,S+w,T+N).normalize();else if(t===Bl)s[5].setComponents(d,b,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Ml.x=o.normal.x>0?e.max.x:e.min.x,Ml.y=o.normal.y>0?e.max.y:e.min.y,Ml.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eg(){let i=null,e=!1,t=null,s=null;function o(c,f){t(c,f),s=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){i=c}}}function i2(i){const e=new WeakMap;function t(d,p){const m=d.array,x=d.usage,b=m.byteLength,y=i.createBuffer();i.bindBuffer(p,y),i.bufferData(p,m,x),d.onUploadCallback();let _;if(m instanceof Float32Array)_=i.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)_=i.SHORT;else if(m instanceof Uint32Array)_=i.UNSIGNED_INT;else if(m instanceof Int32Array)_=i.INT;else if(m instanceof Int8Array)_=i.BYTE;else if(m instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:_,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:b}}function s(d,p,m){const x=p.array,b=p.updateRanges;if(i.bindBuffer(m,d),b.length===0)i.bufferSubData(m,0,x);else{b.sort((_,M)=>_.start-M.start);let y=0;for(let _=1;_<b.length;_++){const M=b[y],w=b[_];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++y,b[y]=w)}b.length=y+1;for(let _=0,M=b.length;_<M;_++){const w=b[_];i.bufferSubData(m,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(i.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:o,remove:c,update:f}}class Ji extends Xr{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const c=e/2,f=t/2,d=Math.floor(s),p=Math.floor(o),m=d+1,x=p+1,b=e/d,y=t/p,_=[],M=[],w=[],S=[];for(let v=0;v<x;v++){const k=v*y-f;for(let N=0;N<m;N++){const T=N*b-c;M.push(T,-k,0),w.push(0,0,1),S.push(N/d),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let k=0;k<d;k++){const N=k+m*v,T=k+m*(v+1),U=k+1+m*(v+1),F=k+1+m*v;_.push(N,T,F),_.push(T,U,F)}this.setIndex(_),this.setAttribute("position",new Hr(M,3)),this.setAttribute("normal",new Hr(w,3)),this.setAttribute("uv",new Hr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.widthSegments,e.heightSegments)}}var s2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,f2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,p2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,v2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,y2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,C2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,N2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I2="gl_FragColor = linearToOutputTexel( gl_FragColor );",U2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Z2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,J2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,LS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,US=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$S=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,d_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,f_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:s2,alphahash_pars_fragment:a2,alphamap_fragment:o2,alphamap_pars_fragment:l2,alphatest_fragment:c2,alphatest_pars_fragment:u2,aomap_fragment:d2,aomap_pars_fragment:f2,batching_pars_vertex:h2,batching_vertex:p2,begin_vertex:m2,beginnormal_vertex:g2,bsdfs:x2,iridescence_fragment:v2,bumpmap_pars_fragment:y2,clipping_planes_fragment:S2,clipping_planes_pars_fragment:_2,clipping_planes_pars_vertex:b2,clipping_planes_vertex:M2,color_fragment:w2,color_pars_fragment:E2,color_pars_vertex:T2,color_vertex:A2,common:C2,cube_uv_reflection_fragment:R2,defaultnormal_vertex:N2,displacementmap_pars_vertex:P2,displacementmap_vertex:k2,emissivemap_fragment:D2,emissivemap_pars_fragment:L2,colorspace_fragment:I2,colorspace_pars_fragment:U2,envmap_fragment:F2,envmap_common_pars_fragment:O2,envmap_pars_fragment:z2,envmap_pars_vertex:B2,envmap_physical_pars_fragment:Z2,envmap_vertex:j2,fog_vertex:H2,fog_pars_vertex:G2,fog_fragment:V2,fog_pars_fragment:W2,gradientmap_pars_fragment:X2,lightmap_pars_fragment:q2,lights_lambert_fragment:Y2,lights_lambert_pars_fragment:Q2,lights_pars_begin:K2,lights_toon_fragment:J2,lights_toon_pars_fragment:$2,lights_phong_fragment:eS,lights_phong_pars_fragment:tS,lights_physical_fragment:nS,lights_physical_pars_fragment:rS,lights_fragment_begin:iS,lights_fragment_maps:sS,lights_fragment_end:aS,logdepthbuf_fragment:oS,logdepthbuf_pars_fragment:lS,logdepthbuf_pars_vertex:cS,logdepthbuf_vertex:uS,map_fragment:dS,map_pars_fragment:fS,map_particle_fragment:hS,map_particle_pars_fragment:pS,metalnessmap_fragment:mS,metalnessmap_pars_fragment:gS,morphinstance_vertex:xS,morphcolor_vertex:vS,morphnormal_vertex:yS,morphtarget_pars_vertex:SS,morphtarget_vertex:_S,normal_fragment_begin:bS,normal_fragment_maps:MS,normal_pars_fragment:wS,normal_pars_vertex:ES,normal_vertex:TS,normalmap_pars_fragment:AS,clearcoat_normal_fragment_begin:CS,clearcoat_normal_fragment_maps:RS,clearcoat_pars_fragment:NS,iridescence_pars_fragment:PS,opaque_fragment:kS,packing:DS,premultiplied_alpha_fragment:LS,project_vertex:IS,dithering_fragment:US,dithering_pars_fragment:FS,roughnessmap_fragment:OS,roughnessmap_pars_fragment:zS,shadowmap_pars_fragment:BS,shadowmap_pars_vertex:jS,shadowmap_vertex:HS,shadowmask_pars_fragment:GS,skinbase_vertex:VS,skinning_pars_vertex:WS,skinning_vertex:XS,skinnormal_vertex:qS,specularmap_fragment:YS,specularmap_pars_fragment:QS,tonemapping_fragment:KS,tonemapping_pars_fragment:ZS,transmission_fragment:JS,transmission_pars_fragment:$S,uv_pars_fragment:e_,uv_pars_vertex:t_,uv_vertex:n_,worldpos_vertex:r_,background_vert:i_,background_frag:s_,backgroundCube_vert:a_,backgroundCube_frag:o_,cube_vert:l_,cube_frag:c_,depth_vert:u_,depth_frag:d_,distanceRGBA_vert:f_,distanceRGBA_frag:h_,equirect_vert:p_,equirect_frag:m_,linedashed_vert:g_,linedashed_frag:x_,meshbasic_vert:v_,meshbasic_frag:y_,meshlambert_vert:S_,meshlambert_frag:__,meshmatcap_vert:b_,meshmatcap_frag:M_,meshnormal_vert:w_,meshnormal_frag:E_,meshphong_vert:T_,meshphong_frag:A_,meshphysical_vert:C_,meshphysical_frag:R_,meshtoon_vert:N_,meshtoon_frag:P_,points_vert:k_,points_frag:D_,shadow_vert:L_,shadow_frag:I_,sprite_vert:U_,sprite_frag:F_},De={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Sr={basic:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:yn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:yn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:yn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:yn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:yn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:yn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:yn([De.common,De.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:yn([De.lights,De.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Sr.physical={uniforms:yn([Sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const wl={r:0,b:0,g:0},Vi=new Vr,O_=new Gt;function z_(i,e,t,s,o,c,f){const d=new Tt(0);let p=c===!0?0:1,m,x,b=null,y=0,_=null;function M(k){let N=k.isScene===!0?k.background:null;return N&&N.isTexture&&(N=(k.backgroundBlurriness>0?t:e).get(N)),N}function w(k){let N=!1;const T=M(k);T===null?v(d,p):T&&T.isColor&&(v(T,1),N=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?s.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(i.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(k,N){const T=M(N);T&&(T.isCubeTexture||T.mapping===Wl)?(x===void 0&&(x=new Jn(new Ja(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:Ks(Sr.backgroundCube.uniforms),vertexShader:Sr.backgroundCube.vertexShader,fragmentShader:Sr.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(U,F,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Vi.copy(N.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),x.material.uniforms.envMap.value=T,x.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(O_.makeRotationFromEuler(Vi)),x.material.toneMapped=_t.getTransfer(T.colorSpace)!==Pt,(b!==T||y!==T.version||_!==i.toneMapping)&&(x.material.needsUpdate=!0,b=T,y=T.version,_=i.toneMapping),x.layers.enableAll(),k.unshift(x,x.geometry,x.material,0,0,null)):T&&T.isTexture&&(m===void 0&&(m=new Jn(new Ji(2,2),new Wr({name:"BackgroundMaterial",uniforms:Ks(Sr.background.uniforms),vertexShader:Sr.background.vertexShader,fragmentShader:Sr.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=T,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=_t.getTransfer(T.colorSpace)!==Pt,T.matrixAutoUpdate===!0&&T.updateMatrix(),m.material.uniforms.uvTransform.value.copy(T.matrix),(b!==T||y!==T.version||_!==i.toneMapping)&&(m.material.needsUpdate=!0,b=T,y=T.version,_=i.toneMapping),m.layers.enableAll(),k.unshift(m,m.geometry,m.material,0,0,null))}function v(k,N){k.getRGB(wl,Z0(i)),s.buffers.color.setClear(wl.r,wl.g,wl.b,N,f)}return{getClearColor:function(){return d},setClearColor:function(k,N=1){d.set(k),p=N,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(k){p=k,v(d,p)},render:w,addToRenderList:S}}function B_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=y(null);let c=o,f=!1;function d(C,j,W,$,ue){let me=!1;const le=b($,W,j);c!==le&&(c=le,m(c.object)),me=_(C,$,W,ue),me&&M(C,$,W,ue),ue!==null&&e.update(ue,i.ELEMENT_ARRAY_BUFFER),(me||f)&&(f=!1,T(C,j,W,$),ue!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return i.createVertexArray()}function m(C){return i.bindVertexArray(C)}function x(C){return i.deleteVertexArray(C)}function b(C,j,W){const $=W.wireframe===!0;let ue=s[C.id];ue===void 0&&(ue={},s[C.id]=ue);let me=ue[j.id];me===void 0&&(me={},ue[j.id]=me);let le=me[$];return le===void 0&&(le=y(p()),me[$]=le),le}function y(C){const j=[],W=[],$=[];for(let ue=0;ue<t;ue++)j[ue]=0,W[ue]=0,$[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:W,attributeDivisors:$,object:C,attributes:{},index:null}}function _(C,j,W,$){const ue=c.attributes,me=j.attributes;let le=0;const pe=W.getAttributes();for(const H in pe)if(pe[H].location>=0){const ae=ue[H];let z=me[H];if(z===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),ae===void 0||ae.attribute!==z||z&&ae.data!==z.data)return!0;le++}return c.attributesNum!==le||c.index!==$}function M(C,j,W,$){const ue={},me=j.attributes;let le=0;const pe=W.getAttributes();for(const H in pe)if(pe[H].location>=0){let ae=me[H];ae===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));const z={};z.attribute=ae,ae&&ae.data&&(z.data=ae.data),ue[H]=z,le++}c.attributes=ue,c.attributesNum=le,c.index=$}function w(){const C=c.newAttributes;for(let j=0,W=C.length;j<W;j++)C[j]=0}function S(C){v(C,0)}function v(C,j){const W=c.newAttributes,$=c.enabledAttributes,ue=c.attributeDivisors;W[C]=1,$[C]===0&&(i.enableVertexAttribArray(C),$[C]=1),ue[C]!==j&&(i.vertexAttribDivisor(C,j),ue[C]=j)}function k(){const C=c.newAttributes,j=c.enabledAttributes;for(let W=0,$=j.length;W<$;W++)j[W]!==C[W]&&(i.disableVertexAttribArray(W),j[W]=0)}function N(C,j,W,$,ue,me,le){le===!0?i.vertexAttribIPointer(C,j,W,ue,me):i.vertexAttribPointer(C,j,W,$,ue,me)}function T(C,j,W,$){w();const ue=$.attributes,me=W.getAttributes(),le=j.defaultAttributeValues;for(const pe in me){const H=me[pe];if(H.location>=0){let ee=ue[pe];if(ee===void 0&&(pe==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),pe==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),ee!==void 0){const ae=ee.normalized,z=ee.itemSize,re=e.get(ee);if(re===void 0)continue;const Pe=re.buffer,ie=re.type,ge=re.bytesPerElement,we=ie===i.INT||ie===i.UNSIGNED_INT||ee.gpuType===ff;if(ee.isInterleavedBufferAttribute){const Se=ee.data,Re=Se.stride,Fe=ee.offset;if(Se.isInstancedInterleavedBuffer){for(let Ke=0;Ke<H.locationSize;Ke++)v(H.location+Ke,Se.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ke=0;Ke<H.locationSize;Ke++)S(H.location+Ke);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Ke=0;Ke<H.locationSize;Ke++)N(H.location+Ke,z/H.locationSize,ie,ae,Re*ge,(Fe+z/H.locationSize*Ke)*ge,we)}else{if(ee.isInstancedBufferAttribute){for(let Se=0;Se<H.locationSize;Se++)v(H.location+Se,ee.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<H.locationSize;Se++)S(H.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Se=0;Se<H.locationSize;Se++)N(H.location+Se,z/H.locationSize,ie,ae,z*ge,z/H.locationSize*Se*ge,we)}}else if(le!==void 0){const ae=le[pe];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(H.location,ae);break;case 3:i.vertexAttrib3fv(H.location,ae);break;case 4:i.vertexAttrib4fv(H.location,ae);break;default:i.vertexAttrib1fv(H.location,ae)}}}}k()}function U(){B();for(const C in s){const j=s[C];for(const W in j){const $=j[W];for(const ue in $)x($[ue].object),delete $[ue];delete j[W]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const j=s[C.id];for(const W in j){const $=j[W];for(const ue in $)x($[ue].object),delete $[ue];delete j[W]}delete s[C.id]}function D(C){for(const j in s){const W=s[j];if(W[C.id]===void 0)continue;const $=W[C.id];for(const ue in $)x($[ue].object),delete $[ue];delete W[C.id]}}function B(){P(),f=!0,c!==o&&(c=o,m(c.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:B,resetDefaultState:P,dispose:U,releaseStatesOfGeometry:F,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:S,disableUnusedAttributes:k}}function j_(i,e,t){let s;function o(m){s=m}function c(m,x){i.drawArrays(s,m,x),t.update(x,s,1)}function f(m,x,b){b!==0&&(i.drawArraysInstanced(s,m,x,b),t.update(x,s,b))}function d(m,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,x,0,b);let _=0;for(let M=0;M<b;M++)_+=x[M];t.update(_,s,1)}function p(m,x,b,y){if(b===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<m.length;M++)f(m[M],x[M],y[M]);else{_.multiDrawArraysInstancedWEBGL(s,m,0,x,0,y,0,b);let M=0;for(let w=0;w<b;w++)M+=x[w]*y[w];t.update(M,s,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function H_(i,e,t,s){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(D){return!(D!==Zn&&s.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(D){const B=D===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Gr&&s.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==_r&&!B)}function p(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const b=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),k=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:b,reverseDepthBuffer:y,maxTextures:_,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:k,maxVaryings:N,maxFragmentUniforms:T,vertexTextures:U,maxSamples:F}}function G_(i){const e=this;let t=null,s=0,o=!1,c=!1;const f=new qi,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(b,y){const _=b.length!==0||y||s!==0||o;return o=y,s=b.length,_},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(b,y){t=x(b,y,0)},this.setState=function(b,y,_){const M=b.clippingPlanes,w=b.clipIntersection,S=b.clipShadows,v=i.get(b);if(!o||M===null||M.length===0||c&&!S)c?x(null):m();else{const k=c?0:s,N=k*4;let T=v.clippingState||null;p.value=T,T=x(M,y,N,_);for(let U=0;U!==N;++U)T[U]=t[U];v.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=k}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(b,y,_,M){const w=b!==null?b.length:0;let S=null;if(w!==0){if(S=p.value,M!==!0||S===null){const v=_+w*4,k=y.matrixWorldInverse;d.getNormalMatrix(k),(S===null||S.length<v)&&(S=new Float32Array(v));for(let N=0,T=_;N!==w;++N,T+=4)f.copy(b[N]).applyMatrix4(k,d),f.normal.toArray(S,T),S[T+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function V_(i){let e=new WeakMap;function t(f,d){return d===Td?f.mapping=Xs:d===Ad&&(f.mapping=qs),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Td||d===Ad)if(e.has(f)){const p=e.get(f).texture;return t(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new t2(p.height);return m.fromEquirectangularTexture(i,f),e.set(f,m),f.addEventListener("dispose",o),t(m.texture,f.mapping)}else return null}}return f}function o(f){const d=f.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}class W_ extends Hl{constructor(e=-1,t=1,s=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-e,f=s+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bs=4,Cm=[.125,.215,.35,.446,.526,.582],Ki=20,id=new W_,Rm=new Tt;let sd=null,ad=0,od=0,ld=!1;const Yi=(1+Math.sqrt(5))/2,Os=1/Yi,Nm=[new fe(-Yi,Os,0),new fe(Yi,Os,0),new fe(-Os,0,Yi),new fe(Os,0,Yi),new fe(0,Yi,-Os),new fe(0,Yi,Os),new fe(-1,1,-1),new fe(1,1,-1),new fe(-1,1,1),new fe(1,1,1)];class Pm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,o,c),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,ad,od),this._renderer.xr.enabled=ld,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Js,format:Zn,colorSpace:$s,depthBuffer:!1},o=km(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,t,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X_(c)),this._blurMaterial=q_(c,e,t)}return o}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,id)}_sceneToCubeUV(e,t,s,o){const d=new ur(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,b=x.autoClear,y=x.toneMapping;x.getClearColor(Rm),x.toneMapping=Mi,x.autoClear=!1;const _=new Y0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),M=new Jn(new Ja,_);let w=!1;const S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,w=!0):(_.color.copy(Rm),w=!0);for(let v=0;v<6;v++){const k=v%3;k===0?(d.up.set(0,p[v],0),d.lookAt(m[v],0,0)):k===1?(d.up.set(0,0,p[v]),d.lookAt(0,m[v],0)):(d.up.set(0,p[v],0),d.lookAt(0,0,m[v]));const N=this._cubeSize;El(o,k*N,v>2?N:0,N,N),x.setRenderTarget(o),w&&x.render(M,d),x.render(e,d)}M.geometry.dispose(),M.material.dispose(),x.toneMapping=y,x.autoClear=b,e.background=S}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===Xs||e.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new Jn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;El(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(f,id)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Nm[(o-c-1)%Nm.length];this._blur(e,c-1,c,f,d)}t.autoClear=s}_blur(e,t,s,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,s,o,"latitudinal",c),this._halfBlur(f,e,s,s,o,"longitudinal",c)}_halfBlur(e,t,s,o,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,b=new Jn(this._lodPlanes[o],m),y=m.uniforms,_=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*_):2*Math.PI/(2*Ki-1),w=c/M,S=isFinite(c)?1+Math.floor(x*w):Ki;S>Ki&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ki}`);const v=[];let k=0;for(let D=0;D<Ki;++D){const B=D/w,P=Math.exp(-B*B/2);v.push(P),D===0?k+=P:D<S&&(k+=2*P)}for(let D=0;D<v.length;D++)v[D]=v[D]/k;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=M,y.mipInt.value=N-s;const T=this._sizeLods[o],U=3*T*(o>N-Bs?o-N+Bs:0),F=4*(this._cubeSize-T);El(t,U,F,3*T,2*T),p.setRenderTarget(t),p.render(b,id)}}function X_(i){const e=[],t=[],s=[];let o=i;const c=i-Bs+1+Cm.length;for(let f=0;f<c;f++){const d=Math.pow(2,o);t.push(d);let p=1/d;f>i-Bs?p=Cm[f-i+Bs-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),x=-m,b=1+m,y=[x,x,b,x,b,b,x,x,b,b,x,b],_=6,M=6,w=3,S=2,v=1,k=new Float32Array(w*M*_),N=new Float32Array(S*M*_),T=new Float32Array(v*M*_);for(let F=0;F<_;F++){const D=F%3*2/3-1,B=F>2?0:-1,P=[D,B,0,D+2/3,B,0,D+2/3,B+1,0,D,B,0,D+2/3,B+1,0,D,B+1,0];k.set(P,w*M*F),N.set(y,S*M*F);const C=[F,F,F,F,F,F];T.set(C,v*M*F)}const U=new Xr;U.setAttribute("position",new hr(k,w)),U.setAttribute("uv",new hr(N,S)),U.setAttribute("faceIndex",new hr(T,v)),e.push(U),o>Bs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function km(i,e,t){const s=new Ei(i,e,t);return s.texture.mapping=Wl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function El(i,e,t,s,o){i.viewport.set(e,t,s,o),i.scissor.set(e,t,s,o)}function q_(i,e,t){const s=new Float32Array(Ki),o=new fe(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Dm(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Lm(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function vf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Y_(i){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Td||p===Ad,x=p===Xs||p===qs;if(m||x){let b=e.get(d);const y=b!==void 0?b.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Pm(i)),b=m?t.fromEquirectangular(d,b):t.fromCubemap(d,b),b.texture.pmremVersion=d.pmremVersion,e.set(d,b),b.texture;if(b!==void 0)return b.texture;{const _=d.image;return m&&_&&_.height>0||x&&_&&o(_)?(t===null&&(t=new Pm(i)),b=m?t.fromEquirectangular(d):t.fromCubemap(d),b.texture.pmremVersion=d.pmremVersion,e.set(d,b),d.addEventListener("dispose",c),b.texture):null}}}return d}function o(d){let p=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:f}}function Q_(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&ja("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function K_(i,e,t,s){const o={},c=new WeakMap;function f(b){const y=b.target;y.index!==null&&e.remove(y.index);for(const M in y.attributes)e.remove(y.attributes[M]);for(const M in y.morphAttributes){const w=y.morphAttributes[M];for(let S=0,v=w.length;S<v;S++)e.remove(w[S])}y.removeEventListener("dispose",f),delete o[y.id];const _=c.get(y);_&&(e.remove(_),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(b,y){return o[y.id]===!0||(y.addEventListener("dispose",f),o[y.id]=!0,t.memory.geometries++),y}function p(b){const y=b.attributes;for(const M in y)e.update(y[M],i.ARRAY_BUFFER);const _=b.morphAttributes;for(const M in _){const w=_[M];for(let S=0,v=w.length;S<v;S++)e.update(w[S],i.ARRAY_BUFFER)}}function m(b){const y=[],_=b.index,M=b.attributes.position;let w=0;if(_!==null){const k=_.array;w=_.version;for(let N=0,T=k.length;N<T;N+=3){const U=k[N+0],F=k[N+1],D=k[N+2];y.push(U,F,F,D,D,U)}}else if(M!==void 0){const k=M.array;w=M.version;for(let N=0,T=k.length/3-1;N<T;N+=3){const U=N+0,F=N+1,D=N+2;y.push(U,F,F,D,D,U)}}else return;const S=new(H0(y)?K0:Q0)(y,1);S.version=w;const v=c.get(b);v&&e.remove(v),c.set(b,S)}function x(b){const y=c.get(b);if(y){const _=b.index;_!==null&&y.version<_.version&&m(b)}else m(b);return c.get(b)}return{get:d,update:p,getWireframeAttribute:x}}function Z_(i,e,t){let s;function o(y){s=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function p(y,_){i.drawElements(s,_,c,y*f),t.update(_,s,1)}function m(y,_,M){M!==0&&(i.drawElementsInstanced(s,_,c,y*f,M),t.update(_,s,M))}function x(y,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,c,y,0,M);let S=0;for(let v=0;v<M;v++)S+=_[v];t.update(S,s,1)}function b(y,_,M,w){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<y.length;v++)m(y[v]/f,_[v],w[v]);else{S.multiDrawElementsInstancedWEBGL(s,_,0,c,y,0,w,0,M);let v=0;for(let k=0;k<M;k++)v+=_[k]*w[k];t.update(v,s,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=b}function J_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(t.calls++,f){case i.TRIANGLES:t.triangles+=d*(c/3);break;case i.LINES:t.lines+=d*(c/2);break;case i.LINE_STRIP:t.lines+=d*(c-1);break;case i.LINE_LOOP:t.lines+=d*c;break;case i.POINTS:t.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function $_(i,e,t){const s=new WeakMap,o=new jt;function c(f,d,p){const m=f.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,b=x!==void 0?x.length:0;let y=s.get(d);if(y===void 0||y.count!==b){let C=function(){B.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var _=C;y!==void 0&&y.texture.dispose();const M=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],k=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let T=0;M===!0&&(T=1),w===!0&&(T=2),S===!0&&(T=3);let U=d.attributes.position.count*T,F=1;U>e.maxTextureSize&&(F=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const D=new Float32Array(U*F*4*b),B=new V0(D,U,F,b);B.type=_r,B.needsUpdate=!0;const P=T*4;for(let j=0;j<b;j++){const W=v[j],$=k[j],ue=N[j],me=U*F*4*j;for(let le=0;le<W.count;le++){const pe=le*P;M===!0&&(o.fromBufferAttribute(W,le),D[me+pe+0]=o.x,D[me+pe+1]=o.y,D[me+pe+2]=o.z,D[me+pe+3]=0),w===!0&&(o.fromBufferAttribute($,le),D[me+pe+4]=o.x,D[me+pe+5]=o.y,D[me+pe+6]=o.z,D[me+pe+7]=0),S===!0&&(o.fromBufferAttribute(ue,le),D[me+pe+8]=o.x,D[me+pe+9]=o.y,D[me+pe+10]=o.z,D[me+pe+11]=ue.itemSize===4?o.w:1)}}y={count:b,texture:B,size:new ct(U,F)},s.set(d,y),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",f.morphTexture,t);else{let M=0;for(let S=0;S<m.length;S++)M+=m[S];const w=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(i,"morphTargetBaseInfluence",w),p.getUniforms().setValue(i,"morphTargetInfluences",m)}p.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}return{update:c}}function eb(i,e,t,s){let o=new WeakMap;function c(p){const m=s.render.frame,x=p.geometry,b=e.get(p,x);if(o.get(b)!==m&&(e.update(b),o.set(b,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return b}function f(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:f}}class tg extends Sn{constructor(e,t,s,o,c,f,d,p,m,x=Hs){if(x!==Hs&&x!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&x===Hs&&(s=$i),s===void 0&&x===Qs&&(s=Ys),super(null,o,c,f,d,p,x,s,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:Bn,this.minFilter=p!==void 0?p:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ng=new Sn,Im=new tg(1,1),rg=new V0,ig=new zy,sg=new J0,Um=[],Fm=[],Om=new Float32Array(16),zm=new Float32Array(9),Bm=new Float32Array(4);function ta(i,e,t){const s=i[0];if(s<=0||s>0)return i;const o=e*t;let c=Um[o];if(c===void 0&&(c=new Float32Array(o),Um[o]=c),e!==0){s.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=t,i[f].toArray(c,d)}return c}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Yl(i,e){let t=Fm[e];t===void 0&&(t=new Int32Array(e),Fm[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function tb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function rb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function ib(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function sb(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Bm.set(s),i.uniformMatrix2fv(this.addr,!1,Bm),Zt(t,s)}}function ab(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;zm.set(s),i.uniformMatrix3fv(this.addr,!1,zm),Zt(t,s)}}function ob(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Om.set(s),i.uniformMatrix4fv(this.addr,!1,Om),Zt(t,s)}}function lb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function ub(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function db(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function fb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function mb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function gb(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(Im.compareFunction=j0,c=Im):c=ng,t.setTexture2D(e||c,o)}function xb(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||ig,o)}function vb(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||sg,o)}function yb(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||rg,o)}function Sb(i){switch(i){case 5126:return tb;case 35664:return nb;case 35665:return rb;case 35666:return ib;case 35674:return sb;case 35675:return ab;case 35676:return ob;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return ub;case 35669:case 35673:return db;case 5125:return fb;case 36294:return hb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return yb}}function _b(i,e){i.uniform1fv(this.addr,e)}function bb(i,e){const t=ta(e,this.size,2);i.uniform2fv(this.addr,t)}function Mb(i,e){const t=ta(e,this.size,3);i.uniform3fv(this.addr,t)}function wb(i,e){const t=ta(e,this.size,4);i.uniform4fv(this.addr,t)}function Eb(i,e){const t=ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tb(i,e){const t=ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ab(i,e){const t=ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cb(i,e){i.uniform1iv(this.addr,e)}function Rb(i,e){i.uniform2iv(this.addr,e)}function Nb(i,e){i.uniform3iv(this.addr,e)}function Pb(i,e){i.uniform4iv(this.addr,e)}function kb(i,e){i.uniform1uiv(this.addr,e)}function Db(i,e){i.uniform2uiv(this.addr,e)}function Lb(i,e){i.uniform3uiv(this.addr,e)}function Ib(i,e){i.uniform4uiv(this.addr,e)}function Ub(i,e,t){const s=this.cache,o=e.length,c=Yl(t,o);Kt(s,c)||(i.uniform1iv(this.addr,c),Zt(s,c));for(let f=0;f!==o;++f)t.setTexture2D(e[f]||ng,c[f])}function Fb(i,e,t){const s=this.cache,o=e.length,c=Yl(t,o);Kt(s,c)||(i.uniform1iv(this.addr,c),Zt(s,c));for(let f=0;f!==o;++f)t.setTexture3D(e[f]||ig,c[f])}function Ob(i,e,t){const s=this.cache,o=e.length,c=Yl(t,o);Kt(s,c)||(i.uniform1iv(this.addr,c),Zt(s,c));for(let f=0;f!==o;++f)t.setTextureCube(e[f]||sg,c[f])}function zb(i,e,t){const s=this.cache,o=e.length,c=Yl(t,o);Kt(s,c)||(i.uniform1iv(this.addr,c),Zt(s,c));for(let f=0;f!==o;++f)t.setTexture2DArray(e[f]||rg,c[f])}function Bb(i){switch(i){case 5126:return _b;case 35664:return bb;case 35665:return Mb;case 35666:return wb;case 35674:return Eb;case 35675:return Tb;case 35676:return Ab;case 5124:case 35670:return Cb;case 35667:case 35671:return Rb;case 35668:case 35672:return Nb;case 35669:case 35673:return Pb;case 5125:return kb;case 36294:return Db;case 36295:return Lb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return zb}}class jb{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=Sb(t.type)}}class Hb{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bb(t.type)}}class Gb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const d=o[c];d.setValue(e,t[d.id],s)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function jm(i,e){i.seq.push(e),i.map[e.id]=e}function Vb(i,e,t){const s=i.name,o=s.length;for(cd.lastIndex=0;;){const c=cd.exec(s),f=cd.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===o){jm(t,m===void 0?new jb(d,i,e):new Hb(d,i,e));break}else{let b=t.map[d];b===void 0&&(b=new Gb(d),jm(t,b)),t=b}}}class Ol{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const c=e.getActiveUniform(t,o),f=e.getUniformLocation(t,c.name);Vb(c,f,this)}}setValue(e,t,s,o){const c=this.map[t];c!==void 0&&c.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let c=0,f=t.length;c!==f;++c){const d=t[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in t&&s.push(f)}return s}}function Hm(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const Wb=37297;let Xb=0;function qb(i,e){const t=i.split(`
`),s=[],o=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let f=o;f<c;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${t[f]}`)}return s.join(`
`)}const Gm=new ut;function Yb(i){_t._getMatrix(Gm,_t.workingColorSpace,i);const e=`mat3( ${Gm.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case Xl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vm(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(s&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+qb(i.getShaderSource(e),f)}else return o}function Qb(i,e){const t=Yb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kb(i,e){let t;switch(e){case dy:t="Linear";break;case fy:t="Reinhard";break;case hy:t="Cineon";break;case py:t="ACESFilmic";break;case gy:t="AgX";break;case xy:t="Neutral";break;case my:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tl=new fe;function Zb(){_t.getLuminanceCoefficients(Tl);const i=Tl.x.toFixed(4),e=Tl.y.toFixed(4),t=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function $b(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function eM(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=i.getActiveAttrib(e,o),f=c.name;let d=1;c.type===i.FLOAT_MAT2&&(d=2),c.type===i.FLOAT_MAT3&&(d=3),c.type===i.FLOAT_MAT4&&(d=4),t[f]={type:c.type,location:i.getAttribLocation(e,f),locationSize:d}}return t}function Ha(i){return i!==""}function Wm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tM=/^[ \t]*#include +<([\w\d./]+)>/gm;function rf(i){return i.replace(tM,rM)}const nM=new Map;function rM(i,e){let t=ft[e];if(t===void 0){const s=nM.get(e);if(s!==void 0)t=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return rf(t)}const iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(i){return i.replace(iM,sM)}function sM(i,e,t,s){let o="";for(let c=parseInt(e);c<parseInt(t);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Ym(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===C0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===V1?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Or&&(e="SHADOWMAP_TYPE_VSM"),e}function oM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function cM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case R0:e="ENVMAP_BLENDING_MULTIPLY";break;case cy:e="ENVMAP_BLENDING_MIX";break;case uy:e="ENVMAP_BLENDING_ADD";break}return e}function uM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function dM(i,e,t,s){const o=i.getContext(),c=t.defines;let f=t.vertexShader,d=t.fragmentShader;const p=aM(t),m=oM(t),x=lM(t),b=cM(t),y=uM(t),_=Jb(t),M=$b(c),w=o.createProgram();let S,v,k=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ha).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ha).join(`
`),v.length>0&&(v+=`
`)):(S=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),v=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+b:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?ft.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Kb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Qb("linearToOutputTexel",t.outputColorSpace),Zb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),f=rf(f),f=Wm(f,t),f=Xm(f,t),d=rf(d),d=Wm(d,t),d=Xm(d,t),f=qm(f),d=qm(d),t.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=k+S+f,T=k+v+d,U=Hm(o,o.VERTEX_SHADER,N),F=Hm(o,o.FRAGMENT_SHADER,T);o.attachShader(w,U),o.attachShader(w,F),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function D(j){if(i.debug.checkShaderErrors){const W=o.getProgramInfoLog(w).trim(),$=o.getShaderInfoLog(U).trim(),ue=o.getShaderInfoLog(F).trim();let me=!0,le=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,w,U,F);else{const pe=Vm(o,U,"vertex"),H=Vm(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+W+`
`+pe+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):($===""||ue==="")&&(le=!1);le&&(j.diagnostics={runnable:me,programLog:W,vertexShader:{log:$,prefix:S},fragmentShader:{log:ue,prefix:v}})}o.deleteShader(U),o.deleteShader(F),B=new Ol(o,w),P=eM(o,w)}let B;this.getUniforms=function(){return B===void 0&&D(this),B};let P;this.getAttributes=function(){return P===void 0&&D(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(w,Wb)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=F,this}let fM=0;class hM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new pM(e),t.set(e,s)),s}}class pM{constructor(e){this.id=fM++,this.code=e,this.usedTimes=0}}function mM(i,e,t,s,o,c,f){const d=new X0,p=new hM,m=new Set,x=[],b=o.logarithmicDepthBuffer,y=o.vertexTextures;let _=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return m.add(P),P===0?"uv":`uv${P}`}function S(P,C,j,W,$){const ue=W.fog,me=$.geometry,le=P.isMeshStandardMaterial?W.environment:null,pe=(P.isMeshStandardMaterial?t:e).get(P.envMap||le),H=pe&&pe.mapping===Wl?pe.image.height:null,ee=M[P.type];P.precision!==null&&(_=o.getMaxPrecision(P.precision),_!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",_,"instead."));const ae=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,z=ae!==void 0?ae.length:0;let re=0;me.morphAttributes.position!==void 0&&(re=1),me.morphAttributes.normal!==void 0&&(re=2),me.morphAttributes.color!==void 0&&(re=3);let Pe,ie,ge,we;if(ee){const yt=Sr[ee];Pe=yt.vertexShader,ie=yt.fragmentShader}else Pe=P.vertexShader,ie=P.fragmentShader,p.update(P),ge=p.getVertexShaderID(P),we=p.getFragmentShaderID(P);const Se=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Fe=$.isInstancedMesh===!0,Ke=$.isBatchedMesh===!0,At=!!P.map,pt=!!P.matcap,Nt=!!pe,K=!!P.aoMap,nn=!!P.lightMap,ht=!!P.bumpMap,dt=!!P.normalMap,Ye=!!P.displacementMap,bt=!!P.emissiveMap,Qe=!!P.metalnessMap,I=!!P.roughnessMap,A=P.anisotropy>0,Y=P.clearcoat>0,L=P.dispersion>0,J=P.iridescence>0,te=P.sheen>0,Te=P.transmission>0,be=A&&!!P.anisotropyMap,Ne=Y&&!!P.clearcoatMap,ot=Y&&!!P.clearcoatNormalMap,_e=Y&&!!P.clearcoatRoughnessMap,Oe=J&&!!P.iridescenceMap,et=J&&!!P.iridescenceThicknessMap,tt=te&&!!P.sheenColorMap,Be=te&&!!P.sheenRoughnessMap,mt=!!P.specularMap,st=!!P.specularColorMap,Ct=!!P.specularIntensityMap,q=Te&&!!P.transmissionMap,ke=Te&&!!P.thicknessMap,he=!!P.gradientMap,xe=!!P.alphaMap,Ie=P.alphaTest>0,Le=!!P.alphaHash,at=!!P.extensions;let Lt=Mi;P.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const Xt={shaderID:ee,shaderType:P.type,shaderName:P.name,vertexShader:Pe,fragmentShader:ie,defines:P.defines,customVertexShaderID:ge,customFragmentShaderID:we,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:_,batching:Ke,batchingColor:Ke&&$._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&$.instanceColor!==null,instancingMorph:Fe&&$.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:$s,alphaToCoverage:!!P.alphaToCoverage,map:At,matcap:pt,envMap:Nt,envMapMode:Nt&&pe.mapping,envMapCubeUVHeight:H,aoMap:K,lightMap:nn,bumpMap:ht,normalMap:dt,displacementMap:y&&Ye,emissiveMap:bt,normalMapObjectSpace:dt&&P.normalMapType===by,normalMapTangentSpace:dt&&P.normalMapType===_y,metalnessMap:Qe,roughnessMap:I,anisotropy:A,anisotropyMap:be,clearcoat:Y,clearcoatMap:Ne,clearcoatNormalMap:ot,clearcoatRoughnessMap:_e,dispersion:L,iridescence:J,iridescenceMap:Oe,iridescenceThicknessMap:et,sheen:te,sheenColorMap:tt,sheenRoughnessMap:Be,specularMap:mt,specularColorMap:st,specularIntensityMap:Ct,transmission:Te,transmissionMap:q,thicknessMap:ke,gradientMap:he,opaque:P.transparent===!1&&P.blending===js&&P.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ie,alphaHash:Le,combine:P.combine,mapUv:At&&w(P.map.channel),aoMapUv:K&&w(P.aoMap.channel),lightMapUv:nn&&w(P.lightMap.channel),bumpMapUv:ht&&w(P.bumpMap.channel),normalMapUv:dt&&w(P.normalMap.channel),displacementMapUv:Ye&&w(P.displacementMap.channel),emissiveMapUv:bt&&w(P.emissiveMap.channel),metalnessMapUv:Qe&&w(P.metalnessMap.channel),roughnessMapUv:I&&w(P.roughnessMap.channel),anisotropyMapUv:be&&w(P.anisotropyMap.channel),clearcoatMapUv:Ne&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:ot&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:et&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(P.sheenRoughnessMap.channel),specularMapUv:mt&&w(P.specularMap.channel),specularColorMapUv:st&&w(P.specularColorMap.channel),specularIntensityMapUv:Ct&&w(P.specularIntensityMap.channel),transmissionMapUv:q&&w(P.transmissionMap.channel),thicknessMapUv:ke&&w(P.thicknessMap.channel),alphaMapUv:xe&&w(P.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(dt||A),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!me.attributes.uv&&(At||xe),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:b,reverseDepthBuffer:Re,skinning:$.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:At&&P.map.isVideoTexture===!0&&_t.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:bt&&P.emissiveMap.isVideoTexture===!0&&_t.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===zr,flipSided:P.side===kn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:at&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&P.extensions.multiDraw===!0||Ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function v(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const j in P.defines)C.push(j),C.push(P.defines[j]);return P.isRawShaderMaterial===!1&&(k(C,P),N(C,P),C.push(i.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function k(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function N(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function T(P){const C=M[P.type];let j;if(C){const W=Sr[C];j=Zy.clone(W.uniforms)}else j=P.uniforms;return j}function U(P,C){let j;for(let W=0,$=x.length;W<$;W++){const ue=x[W];if(ue.cacheKey===C){j=ue,++j.usedTimes;break}}return j===void 0&&(j=new dM(i,C,P,c),x.push(j)),j}function F(P){if(--P.usedTimes===0){const C=x.indexOf(P);x[C]=x[x.length-1],x.pop(),P.destroy()}}function D(P){p.remove(P)}function B(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:T,acquireProgram:U,releaseProgram:F,releaseShaderCache:D,programs:x,dispose:B}}function gM(){let i=new WeakMap;function e(f){return i.has(f)}function t(f){let d=i.get(f);return d===void 0&&(d={},i.set(f,d)),d}function s(f){i.delete(f)}function o(f,d,p){i.get(f)[d]=p}function c(){i=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:c}}function xM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Km(){const i=[];let e=0;const t=[],s=[],o=[];function c(){e=0,t.length=0,s.length=0,o.length=0}function f(b,y,_,M,w,S){let v=i[e];return v===void 0?(v={id:b.id,object:b,geometry:y,material:_,groupOrder:M,renderOrder:b.renderOrder,z:w,group:S},i[e]=v):(v.id=b.id,v.object=b,v.geometry=y,v.material=_,v.groupOrder=M,v.renderOrder=b.renderOrder,v.z=w,v.group=S),e++,v}function d(b,y,_,M,w,S){const v=f(b,y,_,M,w,S);_.transmission>0?s.push(v):_.transparent===!0?o.push(v):t.push(v)}function p(b,y,_,M,w,S){const v=f(b,y,_,M,w,S);_.transmission>0?s.unshift(v):_.transparent===!0?o.unshift(v):t.unshift(v)}function m(b,y){t.length>1&&t.sort(b||xM),s.length>1&&s.sort(y||Qm),o.length>1&&o.sort(y||Qm)}function x(){for(let b=e,y=i.length;b<y;b++){const _=i[b];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:s,transparent:o,init:c,push:d,unshift:p,finish:x,sort:m}}function vM(){let i=new WeakMap;function e(s,o){const c=i.get(s);let f;return c===void 0?(f=new Km,i.set(s,[f])):o>=c.length?(f=new Km,c.push(f)):f=c[o],f}function t(){i=new WeakMap}return{get:e,dispose:t}}function yM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new fe,color:new Tt};break;case"SpotLight":t={position:new fe,direction:new fe,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new fe,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new fe,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return i[e.id]=t,t}}}function SM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _M=0;function bM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function MM(i){const e=new yM,t=SM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new fe);const o=new fe,c=new Gt,f=new Gt;function d(m){let x=0,b=0,y=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let _=0,M=0,w=0,S=0,v=0,k=0,N=0,T=0,U=0,F=0,D=0;m.sort(bM);for(let P=0,C=m.length;P<C;P++){const j=m[P],W=j.color,$=j.intensity,ue=j.distance,me=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)x+=W.r*$,b+=W.g*$,y+=W.b*$;else if(j.isLightProbe){for(let le=0;le<9;le++)s.probe[le].addScaledVector(j.sh.coefficients[le],$);D++}else if(j.isDirectionalLight){const le=e.get(j);if(le.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const pe=j.shadow,H=t.get(j);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,s.directionalShadow[_]=H,s.directionalShadowMap[_]=me,s.directionalShadowMatrix[_]=j.shadow.matrix,k++}s.directional[_]=le,_++}else if(j.isSpotLight){const le=e.get(j);le.position.setFromMatrixPosition(j.matrixWorld),le.color.copy(W).multiplyScalar($),le.distance=ue,le.coneCos=Math.cos(j.angle),le.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),le.decay=j.decay,s.spot[w]=le;const pe=j.shadow;if(j.map&&(s.spotLightMap[U]=j.map,U++,pe.updateMatrices(j),j.castShadow&&F++),s.spotLightMatrix[w]=pe.matrix,j.castShadow){const H=t.get(j);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,s.spotShadow[w]=H,s.spotShadowMap[w]=me,T++}w++}else if(j.isRectAreaLight){const le=e.get(j);le.color.copy(W).multiplyScalar($),le.halfWidth.set(j.width*.5,0,0),le.halfHeight.set(0,j.height*.5,0),s.rectArea[S]=le,S++}else if(j.isPointLight){const le=e.get(j);if(le.color.copy(j.color).multiplyScalar(j.intensity),le.distance=j.distance,le.decay=j.decay,j.castShadow){const pe=j.shadow,H=t.get(j);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,H.shadowCameraNear=pe.camera.near,H.shadowCameraFar=pe.camera.far,s.pointShadow[M]=H,s.pointShadowMap[M]=me,s.pointShadowMatrix[M]=j.shadow.matrix,N++}s.point[M]=le,M++}else if(j.isHemisphereLight){const le=e.get(j);le.skyColor.copy(j.color).multiplyScalar($),le.groundColor.copy(j.groundColor).multiplyScalar($),s.hemi[v]=le,v++}}S>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=b,s.ambient[2]=y;const B=s.hash;(B.directionalLength!==_||B.pointLength!==M||B.spotLength!==w||B.rectAreaLength!==S||B.hemiLength!==v||B.numDirectionalShadows!==k||B.numPointShadows!==N||B.numSpotShadows!==T||B.numSpotMaps!==U||B.numLightProbes!==D)&&(s.directional.length=_,s.spot.length=w,s.rectArea.length=S,s.point.length=M,s.hemi.length=v,s.directionalShadow.length=k,s.directionalShadowMap.length=k,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=k,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=T+U-F,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=D,B.directionalLength=_,B.pointLength=M,B.spotLength=w,B.rectAreaLength=S,B.hemiLength=v,B.numDirectionalShadows=k,B.numPointShadows=N,B.numSpotShadows=T,B.numSpotMaps=U,B.numLightProbes=D,s.version=_M++)}function p(m,x){let b=0,y=0,_=0,M=0,w=0;const S=x.matrixWorldInverse;for(let v=0,k=m.length;v<k;v++){const N=m[v];if(N.isDirectionalLight){const T=s.directional[b];T.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(S),b++}else if(N.isSpotLight){const T=s.spot[_];T.position.setFromMatrixPosition(N.matrixWorld),T.position.applyMatrix4(S),T.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(S),_++}else if(N.isRectAreaLight){const T=s.rectArea[M];T.position.setFromMatrixPosition(N.matrixWorld),T.position.applyMatrix4(S),f.identity(),c.copy(N.matrixWorld),c.premultiply(S),f.extractRotation(c),T.halfWidth.set(N.width*.5,0,0),T.halfHeight.set(0,N.height*.5,0),T.halfWidth.applyMatrix4(f),T.halfHeight.applyMatrix4(f),M++}else if(N.isPointLight){const T=s.point[y];T.position.setFromMatrixPosition(N.matrixWorld),T.position.applyMatrix4(S),y++}else if(N.isHemisphereLight){const T=s.hemi[w];T.direction.setFromMatrixPosition(N.matrixWorld),T.direction.transformDirection(S),w++}}}return{setup:d,setupView:p,state:s}}function Zm(i){const e=new MM(i),t=[],s=[];function o(x){m.camera=x,t.length=0,s.length=0}function c(x){t.push(x)}function f(x){s.push(x)}function d(){e.setup(t)}function p(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function wM(i){let e=new WeakMap;function t(o,c=0){const f=e.get(o);let d;return f===void 0?(d=new Zm(i),e.set(o,[d])):c>=f.length?(d=new Zm(i),f.push(d)):d=f[c],d}function s(){e=new WeakMap}return{get:t,dispose:s}}class EM extends Za{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TM extends Za{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const AM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RM(i,e,t){let s=new $0;const o=new ct,c=new ct,f=new jt,d=new EM({depthPacking:Sy}),p=new TM,m={},x=t.maxTextureSize,b={[wi]:kn,[kn]:wi,[zr]:zr},y=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:AM,fragmentShader:CM}),_=y.clone();_.defines.HORIZONTAL_PASS=1;const M=new Xr;M.setAttribute("position",new hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Jn(M,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C0;let v=this.type;this.render=function(F,D,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const P=i.getRenderTarget(),C=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),W=i.state;W.setBlending(bi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const $=v!==Or&&this.type===Or,ue=v===Or&&this.type!==Or;for(let me=0,le=F.length;me<le;me++){const pe=F[me],H=pe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const ee=H.getFrameExtents();if(o.multiply(ee),c.copy(H.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/ee.x),o.x=c.x*ee.x,H.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/ee.y),o.y=c.y*ee.y,H.mapSize.y=c.y)),H.map===null||$===!0||ue===!0){const z=this.type!==Or?{minFilter:Bn,magFilter:Bn}:{};H.map!==null&&H.map.dispose(),H.map=new Ei(o.x,o.y,z),H.map.texture.name=pe.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ae=H.getViewportCount();for(let z=0;z<ae;z++){const re=H.getViewport(z);f.set(c.x*re.x,c.y*re.y,c.x*re.z,c.y*re.w),W.viewport(f),H.updateMatrices(pe,z),s=H.getFrustum(),T(D,B,H.camera,pe,this.type)}H.isPointLightShadow!==!0&&this.type===Or&&k(H,B),H.needsUpdate=!1}v=this.type,S.needsUpdate=!1,i.setRenderTarget(P,C,j)};function k(F,D){const B=e.update(w);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,_.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,_.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ei(o.x,o.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(D,null,B,y,w,null),_.uniforms.shadow_pass.value=F.mapPass.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(D,null,B,_,w,null)}function N(F,D,B,P){let C=null;const j=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(j!==void 0)C=j;else if(C=B.isPointLight===!0?p:d,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const W=C.uuid,$=D.uuid;let ue=m[W];ue===void 0&&(ue={},m[W]=ue);let me=ue[$];me===void 0&&(me=C.clone(),ue[$]=me,D.addEventListener("dispose",U)),C=me}if(C.visible=D.visible,C.wireframe=D.wireframe,P===Or?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:b[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const W=i.properties.get(C);W.light=B}return C}function T(F,D,B,P,C){if(F.visible===!1)return;if(F.layers.test(D.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Or)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const $=e.update(F),ue=F.material;if(Array.isArray(ue)){const me=$.groups;for(let le=0,pe=me.length;le<pe;le++){const H=me[le],ee=ue[H.materialIndex];if(ee&&ee.visible){const ae=N(F,ee,P,C);F.onBeforeShadow(i,F,D,B,$,ae,H),i.renderBufferDirect(B,null,$,ae,F,H),F.onAfterShadow(i,F,D,B,$,ae,H)}}}else if(ue.visible){const me=N(F,ue,P,C);F.onBeforeShadow(i,F,D,B,$,me,null),i.renderBufferDirect(B,null,$,me,F,null),F.onAfterShadow(i,F,D,B,$,me,null)}}const W=F.children;for(let $=0,ue=W.length;$<ue;$++)T(W[$],D,B,P,C)}function U(F){F.target.removeEventListener("dispose",U);for(const B in m){const P=m[B],C=F.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const NM={[yd]:Sd,[_d]:wd,[bd]:Ed,[Ws]:Md,[Sd]:yd,[wd]:_d,[Ed]:bd,[Md]:Ws};function PM(i,e){function t(){let q=!1;const ke=new jt;let he=null;const xe=new jt(0,0,0,0);return{setMask:function(Ie){he!==Ie&&!q&&(i.colorMask(Ie,Ie,Ie,Ie),he=Ie)},setLocked:function(Ie){q=Ie},setClear:function(Ie,Le,at,Lt,Xt){Xt===!0&&(Ie*=Lt,Le*=Lt,at*=Lt),ke.set(Ie,Le,at,Lt),xe.equals(ke)===!1&&(i.clearColor(Ie,Le,at,Lt),xe.copy(ke))},reset:function(){q=!1,he=null,xe.set(-1,0,0,0)}}}function s(){let q=!1,ke=!1,he=null,xe=null,Ie=null;return{setReversed:function(Le){if(ke!==Le){const at=e.get("EXT_clip_control");ke?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Lt=Ie;Ie=null,this.setClear(Lt)}ke=Le},getReversed:function(){return ke},setTest:function(Le){Le?Se(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Le){he!==Le&&!q&&(i.depthMask(Le),he=Le)},setFunc:function(Le){if(ke&&(Le=NM[Le]),xe!==Le){switch(Le){case yd:i.depthFunc(i.NEVER);break;case Sd:i.depthFunc(i.ALWAYS);break;case _d:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case bd:i.depthFunc(i.EQUAL);break;case Md:i.depthFunc(i.GEQUAL);break;case wd:i.depthFunc(i.GREATER);break;case Ed:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Le}},setLocked:function(Le){q=Le},setClear:function(Le){Ie!==Le&&(ke&&(Le=1-Le),i.clearDepth(Le),Ie=Le)},reset:function(){q=!1,he=null,xe=null,Ie=null,ke=!1}}}function o(){let q=!1,ke=null,he=null,xe=null,Ie=null,Le=null,at=null,Lt=null,Xt=null;return{setTest:function(yt){q||(yt?Se(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(yt){ke!==yt&&!q&&(i.stencilMask(yt),ke=yt)},setFunc:function(yt,_n,pn){(he!==yt||xe!==_n||Ie!==pn)&&(i.stencilFunc(yt,_n,pn),he=yt,xe=_n,Ie=pn)},setOp:function(yt,_n,pn){(Le!==yt||at!==_n||Lt!==pn)&&(i.stencilOp(yt,_n,pn),Le=yt,at=_n,Lt=pn)},setLocked:function(yt){q=yt},setClear:function(yt){Xt!==yt&&(i.clearStencil(yt),Xt=yt)},reset:function(){q=!1,ke=null,he=null,xe=null,Ie=null,Le=null,at=null,Lt=null,Xt=null}}}const c=new t,f=new s,d=new o,p=new WeakMap,m=new WeakMap;let x={},b={},y=new WeakMap,_=[],M=null,w=!1,S=null,v=null,k=null,N=null,T=null,U=null,F=null,D=new Tt(0,0,0),B=0,P=!1,C=null,j=null,W=null,$=null,ue=null;const me=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,pe=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(H)[1]),le=pe>=1):H.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),le=pe>=2);let ee=null,ae={};const z=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),Pe=new jt().fromArray(z),ie=new jt().fromArray(re);function ge(q,ke,he,xe){const Ie=new Uint8Array(4),Le=i.createTexture();i.bindTexture(q,Le),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<he;at++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(ke,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(ke+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return Le}const we={};we[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Se(i.DEPTH_TEST),f.setFunc(Ws),ht(!1),dt(nm),Se(i.CULL_FACE),K(bi);function Se(q){x[q]!==!0&&(i.enable(q),x[q]=!0)}function Re(q){x[q]!==!1&&(i.disable(q),x[q]=!1)}function Fe(q,ke){return b[q]!==ke?(i.bindFramebuffer(q,ke),b[q]=ke,q===i.DRAW_FRAMEBUFFER&&(b[i.FRAMEBUFFER]=ke),q===i.FRAMEBUFFER&&(b[i.DRAW_FRAMEBUFFER]=ke),!0):!1}function Ke(q,ke){let he=_,xe=!1;if(q){he=y.get(ke),he===void 0&&(he=[],y.set(ke,he));const Ie=q.textures;if(he.length!==Ie.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,at=Ie.length;Le<at;Le++)he[Le]=i.COLOR_ATTACHMENT0+Le;he.length=Ie.length,xe=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,xe=!0);xe&&i.drawBuffers(he)}function At(q){return M!==q?(i.useProgram(q),M=q,!0):!1}const pt={[Qi]:i.FUNC_ADD,[X1]:i.FUNC_SUBTRACT,[q1]:i.FUNC_REVERSE_SUBTRACT};pt[Y1]=i.MIN,pt[Q1]=i.MAX;const Nt={[K1]:i.ZERO,[Z1]:i.ONE,[J1]:i.SRC_COLOR,[xd]:i.SRC_ALPHA,[iy]:i.SRC_ALPHA_SATURATE,[ny]:i.DST_COLOR,[ey]:i.DST_ALPHA,[$1]:i.ONE_MINUS_SRC_COLOR,[vd]:i.ONE_MINUS_SRC_ALPHA,[ry]:i.ONE_MINUS_DST_COLOR,[ty]:i.ONE_MINUS_DST_ALPHA,[sy]:i.CONSTANT_COLOR,[ay]:i.ONE_MINUS_CONSTANT_COLOR,[oy]:i.CONSTANT_ALPHA,[ly]:i.ONE_MINUS_CONSTANT_ALPHA};function K(q,ke,he,xe,Ie,Le,at,Lt,Xt,yt){if(q===bi){w===!0&&(Re(i.BLEND),w=!1);return}if(w===!1&&(Se(i.BLEND),w=!0),q!==W1){if(q!==S||yt!==P){if((v!==Qi||T!==Qi)&&(i.blendEquation(i.FUNC_ADD),v=Qi,T=Qi),yt)switch(q){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gd:i.blendFunc(i.ONE,i.ONE);break;case rm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case im:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case im:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}k=null,N=null,U=null,F=null,D.set(0,0,0),B=0,S=q,P=yt}return}Ie=Ie||ke,Le=Le||he,at=at||xe,(ke!==v||Ie!==T)&&(i.blendEquationSeparate(pt[ke],pt[Ie]),v=ke,T=Ie),(he!==k||xe!==N||Le!==U||at!==F)&&(i.blendFuncSeparate(Nt[he],Nt[xe],Nt[Le],Nt[at]),k=he,N=xe,U=Le,F=at),(Lt.equals(D)===!1||Xt!==B)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Xt),D.copy(Lt),B=Xt),S=q,P=!1}function nn(q,ke){q.side===zr?Re(i.CULL_FACE):Se(i.CULL_FACE);let he=q.side===kn;ke&&(he=!he),ht(he),q.blending===js&&q.transparent===!1?K(bi):K(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const xe=q.stencilWrite;d.setTest(xe),xe&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),bt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(q){C!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),C=q)}function dt(q){q!==H1?(Se(i.CULL_FACE),q!==j&&(q===nm?i.cullFace(i.BACK):q===G1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),j=q}function Ye(q){q!==W&&(le&&i.lineWidth(q),W=q)}function bt(q,ke,he){q?(Se(i.POLYGON_OFFSET_FILL),($!==ke||ue!==he)&&(i.polygonOffset(ke,he),$=ke,ue=he)):Re(i.POLYGON_OFFSET_FILL)}function Qe(q){q?Se(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function I(q){q===void 0&&(q=i.TEXTURE0+me-1),ee!==q&&(i.activeTexture(q),ee=q)}function A(q,ke,he){he===void 0&&(ee===null?he=i.TEXTURE0+me-1:he=ee);let xe=ae[he];xe===void 0&&(xe={type:void 0,texture:void 0},ae[he]=xe),(xe.type!==q||xe.texture!==ke)&&(ee!==he&&(i.activeTexture(he),ee=he),i.bindTexture(q,ke||we[q]),xe.type=q,xe.texture=ke)}function Y(){const q=ae[ee];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function L(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Oe(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function et(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function tt(q){Pe.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Pe.copy(q))}function Be(q){ie.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),ie.copy(q))}function mt(q,ke){let he=m.get(ke);he===void 0&&(he=new WeakMap,m.set(ke,he));let xe=he.get(q);xe===void 0&&(xe=i.getUniformBlockIndex(ke,q.name),he.set(q,xe))}function st(q,ke){const xe=m.get(ke).get(q);p.get(ke)!==xe&&(i.uniformBlockBinding(ke,xe,q.__bindingPointIndex),p.set(ke,xe))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),f.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),x={},ee=null,ae={},b={},y=new WeakMap,_=[],M=null,w=!1,S=null,v=null,k=null,N=null,T=null,U=null,F=null,D=new Tt(0,0,0),B=0,P=!1,C=null,j=null,W=null,$=null,ue=null,Pe.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Se,disable:Re,bindFramebuffer:Fe,drawBuffers:Ke,useProgram:At,setBlending:K,setMaterial:nn,setFlipSided:ht,setCullFace:dt,setLineWidth:Ye,setPolygonOffset:bt,setScissorTest:Qe,activeTexture:I,bindTexture:A,unbindTexture:Y,compressedTexImage2D:L,compressedTexImage3D:J,texImage2D:Oe,texImage3D:et,updateUBOMapping:mt,uniformBlockBinding:st,texStorage2D:ot,texStorage3D:_e,texSubImage2D:te,texSubImage3D:Te,compressedTexSubImage2D:be,compressedTexSubImage3D:Ne,scissor:tt,viewport:Be,reset:Ct}}function Jm(i,e,t,s){const o=kM(s);switch(t){case L0:return i*e;case U0:return i*e;case F0:return i*e*2;case O0:return i*e/o.components*o.byteLength;case mf:return i*e/o.components*o.byteLength;case z0:return i*e*2/o.components*o.byteLength;case gf:return i*e*2/o.components*o.byteLength;case I0:return i*e*3/o.components*o.byteLength;case Zn:return i*e*4/o.components*o.byteLength;case xf:return i*e*4/o.components*o.byteLength;case Dl:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Il:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pd:case Dd:return Math.max(i,16)*Math.max(e,8)/4;case Nd:case kd:return Math.max(i,8)*Math.max(e,8)/2;case Ld:case Id:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ud:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jd:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fl:case Zd:case Jd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case B0:case $d:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ef:case tf:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kM(i){switch(i){case Gr:case P0:return{byteLength:1,components:1};case Wa:case k0:case Js:return{byteLength:2,components:1};case hf:case pf:return{byteLength:2,components:4};case $i:case ff:case _r:return{byteLength:4,components:1};case D0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function DM(i,e,t,s,o,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ct,x=new WeakMap;let b;const y=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,A){return _?new OffscreenCanvas(I,A):jl("canvas")}function w(I,A,Y){let L=1;const J=Qe(I);if((J.width>Y||J.height>Y)&&(L=Y/Math.max(J.width,J.height)),L<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const te=Math.floor(L*J.width),Te=Math.floor(L*J.height);b===void 0&&(b=M(te,Te));const be=A?M(te,Te):b;return be.width=te,be.height=Te,be.getContext("2d").drawImage(I,0,0,te,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+te+"x"+Te+")."),be}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),I;return I}function S(I){return I.generateMipmaps}function v(I){i.generateMipmap(I)}function k(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(I,A,Y,L,J=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let te=A;if(A===i.RED&&(Y===i.FLOAT&&(te=i.R32F),Y===i.HALF_FLOAT&&(te=i.R16F),Y===i.UNSIGNED_BYTE&&(te=i.R8)),A===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(te=i.R8UI),Y===i.UNSIGNED_SHORT&&(te=i.R16UI),Y===i.UNSIGNED_INT&&(te=i.R32UI),Y===i.BYTE&&(te=i.R8I),Y===i.SHORT&&(te=i.R16I),Y===i.INT&&(te=i.R32I)),A===i.RG&&(Y===i.FLOAT&&(te=i.RG32F),Y===i.HALF_FLOAT&&(te=i.RG16F),Y===i.UNSIGNED_BYTE&&(te=i.RG8)),A===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(te=i.RG8UI),Y===i.UNSIGNED_SHORT&&(te=i.RG16UI),Y===i.UNSIGNED_INT&&(te=i.RG32UI),Y===i.BYTE&&(te=i.RG8I),Y===i.SHORT&&(te=i.RG16I),Y===i.INT&&(te=i.RG32I)),A===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(te=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(te=i.RGB16UI),Y===i.UNSIGNED_INT&&(te=i.RGB32UI),Y===i.BYTE&&(te=i.RGB8I),Y===i.SHORT&&(te=i.RGB16I),Y===i.INT&&(te=i.RGB32I)),A===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),Y===i.UNSIGNED_INT&&(te=i.RGBA32UI),Y===i.BYTE&&(te=i.RGBA8I),Y===i.SHORT&&(te=i.RGBA16I),Y===i.INT&&(te=i.RGBA32I)),A===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),A===i.RGBA){const Te=J?Xl:_t.getTransfer(L);Y===i.FLOAT&&(te=i.RGBA32F),Y===i.HALF_FLOAT&&(te=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(te=Te===Pt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function T(I,A){let Y;return I?A===null||A===$i||A===Ys?Y=i.DEPTH24_STENCIL8:A===_r?Y=i.DEPTH32F_STENCIL8:A===Wa&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$i||A===Ys?Y=i.DEPTH_COMPONENT24:A===_r?Y=i.DEPTH_COMPONENT32F:A===Wa&&(Y=i.DEPTH_COMPONENT16),Y}function U(I,A){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Bn&&I.minFilter!==Pn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function F(I){const A=I.target;A.removeEventListener("dispose",F),B(A),A.isVideoTexture&&x.delete(A)}function D(I){const A=I.target;A.removeEventListener("dispose",D),C(A)}function B(I){const A=s.get(I);if(A.__webglInit===void 0)return;const Y=I.source,L=y.get(Y);if(L){const J=L[A.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(I),Object.keys(L).length===0&&y.delete(Y)}s.remove(I)}function P(I){const A=s.get(I);i.deleteTexture(A.__webglTexture);const Y=I.source,L=y.get(Y);delete L[A.__cacheKey],f.memory.textures--}function C(I){const A=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(A.__webglFramebuffer[L]))for(let J=0;J<A.__webglFramebuffer[L].length;J++)i.deleteFramebuffer(A.__webglFramebuffer[L][J]);else i.deleteFramebuffer(A.__webglFramebuffer[L]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[L])}else{if(Array.isArray(A.__webglFramebuffer))for(let L=0;L<A.__webglFramebuffer.length;L++)i.deleteFramebuffer(A.__webglFramebuffer[L]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let L=0;L<A.__webglColorRenderbuffer.length;L++)A.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[L]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Y=I.textures;for(let L=0,J=Y.length;L<J;L++){const te=s.get(Y[L]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),f.memory.textures--),s.remove(Y[L])}s.remove(I)}let j=0;function W(){j=0}function $(){const I=j;return I>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),j+=1,I}function ue(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function me(I,A){const Y=s.get(I);if(I.isVideoTexture&&Ye(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){const L=I.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Y,I,A);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+A)}function le(I,A){const Y=s.get(I);if(I.version>0&&Y.__version!==I.version){ie(Y,I,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+A)}function pe(I,A){const Y=s.get(I);if(I.version>0&&Y.__version!==I.version){ie(Y,I,A);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+A)}function H(I,A){const Y=s.get(I);if(I.version>0&&Y.__version!==I.version){ge(Y,I,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+A)}const ee={[Cd]:i.REPEAT,[fr]:i.CLAMP_TO_EDGE,[Rd]:i.MIRRORED_REPEAT},ae={[Bn]:i.NEAREST,[vy]:i.NEAREST_MIPMAP_NEAREST,[al]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Iu]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},z={[My]:i.NEVER,[Ry]:i.ALWAYS,[wy]:i.LESS,[j0]:i.LEQUAL,[Ey]:i.EQUAL,[Cy]:i.GEQUAL,[Ty]:i.GREATER,[Ay]:i.NOTEQUAL};function re(I,A){if(A.type===_r&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Pn||A.magFilter===Iu||A.magFilter===al||A.magFilter===Zi||A.minFilter===Pn||A.minFilter===Iu||A.minFilter===al||A.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ee[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ee[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ee[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ae[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ae[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,z[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Bn||A.minFilter!==al&&A.minFilter!==Zi||A.type===_r&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Pe(I,A){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",F));const L=A.source;let J=y.get(L);J===void 0&&(J={},y.set(L,J));const te=ue(A);if(te!==I.__cacheKey){J[te]===void 0&&(J[te]={texture:i.createTexture(),usedTimes:0},f.memory.textures++,Y=!0),J[te].usedTimes++;const Te=J[I.__cacheKey];Te!==void 0&&(J[I.__cacheKey].usedTimes--,Te.usedTimes===0&&P(A)),I.__cacheKey=te,I.__webglTexture=J[te].texture}return Y}function ie(I,A,Y){let L=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(L=i.TEXTURE_3D);const J=Pe(I,A),te=A.source;t.bindTexture(L,I.__webglTexture,i.TEXTURE0+Y);const Te=s.get(te);if(te.version!==Te.__version||J===!0){t.activeTexture(i.TEXTURE0+Y);const be=_t.getPrimaries(_t.workingColorSpace),Ne=A.colorSpace===Si?null:_t.getPrimaries(A.colorSpace),ot=A.colorSpace===Si||be===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let _e=w(A.image,!1,o.maxTextureSize);_e=bt(A,_e);const Oe=c.convert(A.format,A.colorSpace),et=c.convert(A.type);let tt=N(A.internalFormat,Oe,et,A.colorSpace,A.isVideoTexture);re(L,A);let Be;const mt=A.mipmaps,st=A.isVideoTexture!==!0,Ct=Te.__version===void 0||J===!0,q=te.dataReady,ke=U(A,_e);if(A.isDepthTexture)tt=T(A.format===Qs,A.type),Ct&&(st?t.texStorage2D(i.TEXTURE_2D,1,tt,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,tt,_e.width,_e.height,0,Oe,et,null));else if(A.isDataTexture)if(mt.length>0){st&&Ct&&t.texStorage2D(i.TEXTURE_2D,ke,tt,mt[0].width,mt[0].height);for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],st?q&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Be.width,Be.height,Oe,et,Be.data):t.texImage2D(i.TEXTURE_2D,he,tt,Be.width,Be.height,0,Oe,et,Be.data);A.generateMipmaps=!1}else st?(Ct&&t.texStorage2D(i.TEXTURE_2D,ke,tt,_e.width,_e.height),q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Oe,et,_e.data)):t.texImage2D(i.TEXTURE_2D,0,tt,_e.width,_e.height,0,Oe,et,_e.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){st&&Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,tt,mt[0].width,mt[0].height,_e.depth);for(let he=0,xe=mt.length;he<xe;he++)if(Be=mt[he],A.format!==Zn)if(Oe!==null)if(st){if(q)if(A.layerUpdates.size>0){const Ie=Jm(Be.width,Be.height,A.format,A.type);for(const Le of A.layerUpdates){const at=Be.data.subarray(Le*Ie/Be.data.BYTES_PER_ELEMENT,(Le+1)*Ie/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Le,Be.width,Be.height,1,Oe,at)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,_e.depth,Oe,Be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,tt,Be.width,Be.height,_e.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,_e.depth,Oe,et,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,tt,Be.width,Be.height,_e.depth,0,Oe,et,Be.data)}else{st&&Ct&&t.texStorage2D(i.TEXTURE_2D,ke,tt,mt[0].width,mt[0].height);for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],A.format!==Zn?Oe!==null?st?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Be.width,Be.height,Oe,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,he,tt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?q&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Be.width,Be.height,Oe,et,Be.data):t.texImage2D(i.TEXTURE_2D,he,tt,Be.width,Be.height,0,Oe,et,Be.data)}else if(A.isDataArrayTexture)if(st){if(Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,tt,_e.width,_e.height,_e.depth),q)if(A.layerUpdates.size>0){const he=Jm(_e.width,_e.height,A.format,A.type);for(const xe of A.layerUpdates){const Ie=_e.data.subarray(xe*he/_e.data.BYTES_PER_ELEMENT,(xe+1)*he/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,_e.width,_e.height,1,Oe,et,Ie)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Oe,et,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,_e.width,_e.height,_e.depth,0,Oe,et,_e.data);else if(A.isData3DTexture)st?(Ct&&t.texStorage3D(i.TEXTURE_3D,ke,tt,_e.width,_e.height,_e.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Oe,et,_e.data)):t.texImage3D(i.TEXTURE_3D,0,tt,_e.width,_e.height,_e.depth,0,Oe,et,_e.data);else if(A.isFramebufferTexture){if(Ct)if(st)t.texStorage2D(i.TEXTURE_2D,ke,tt,_e.width,_e.height);else{let he=_e.width,xe=_e.height;for(let Ie=0;Ie<ke;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,tt,he,xe,0,Oe,et,null),he>>=1,xe>>=1}}else if(mt.length>0){if(st&&Ct){const he=Qe(mt[0]);t.texStorage2D(i.TEXTURE_2D,ke,tt,he.width,he.height)}for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],st?q&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Oe,et,Be):t.texImage2D(i.TEXTURE_2D,he,tt,Oe,et,Be);A.generateMipmaps=!1}else if(st){if(Ct){const he=Qe(_e);t.texStorage2D(i.TEXTURE_2D,ke,tt,he.width,he.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,et,_e)}else t.texImage2D(i.TEXTURE_2D,0,tt,Oe,et,_e);S(A)&&v(L),Te.__version=te.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ge(I,A,Y){if(A.image.length!==6)return;const L=Pe(I,A),J=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);const te=s.get(J);if(J.version!==te.__version||L===!0){t.activeTexture(i.TEXTURE0+Y);const Te=_t.getPrimaries(_t.workingColorSpace),be=A.colorSpace===Si?null:_t.getPrimaries(A.colorSpace),Ne=A.colorSpace===Si||Te===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ot=A.isCompressedTexture||A.image[0].isCompressedTexture,_e=A.image[0]&&A.image[0].isDataTexture,Oe=[];for(let xe=0;xe<6;xe++)!ot&&!_e?Oe[xe]=w(A.image[xe],!0,o.maxCubemapSize):Oe[xe]=_e?A.image[xe].image:A.image[xe],Oe[xe]=bt(A,Oe[xe]);const et=Oe[0],tt=c.convert(A.format,A.colorSpace),Be=c.convert(A.type),mt=N(A.internalFormat,tt,Be,A.colorSpace),st=A.isVideoTexture!==!0,Ct=te.__version===void 0||L===!0,q=J.dataReady;let ke=U(A,et);re(i.TEXTURE_CUBE_MAP,A);let he;if(ot){st&&Ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,mt,et.width,et.height);for(let xe=0;xe<6;xe++){he=Oe[xe].mipmaps;for(let Ie=0;Ie<he.length;Ie++){const Le=he[Ie];A.format!==Zn?tt!==null?st?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,0,0,Le.width,Le.height,tt,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,mt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,0,0,Le.width,Le.height,tt,Be,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,mt,Le.width,Le.height,0,tt,Be,Le.data)}}}else{if(he=A.mipmaps,st&&Ct){he.length>0&&ke++;const xe=Qe(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,mt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(_e){st?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Oe[xe].width,Oe[xe].height,tt,Be,Oe[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,Oe[xe].width,Oe[xe].height,0,tt,Be,Oe[xe].data);for(let Ie=0;Ie<he.length;Ie++){const at=he[Ie].image[xe].image;st?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,0,0,at.width,at.height,tt,Be,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,mt,at.width,at.height,0,tt,Be,at.data)}}else{st?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,tt,Be,Oe[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,tt,Be,Oe[xe]);for(let Ie=0;Ie<he.length;Ie++){const Le=he[Ie];st?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,0,0,tt,Be,Le.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,mt,tt,Be,Le.image[xe])}}}S(A)&&v(i.TEXTURE_CUBE_MAP),te.__version=J.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function we(I,A,Y,L,J,te){const Te=c.convert(Y.format,Y.colorSpace),be=c.convert(Y.type),Ne=N(Y.internalFormat,Te,be,Y.colorSpace),ot=s.get(A),_e=s.get(Y);if(_e.__renderTarget=A,!ot.__hasExternalTextures){const Oe=Math.max(1,A.width>>te),et=Math.max(1,A.height>>te);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,te,Ne,Oe,et,A.depth,0,Te,be,null):t.texImage2D(J,te,Ne,Oe,et,0,Te,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),dt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,J,_e.__webglTexture,0,ht(A)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,J,_e.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(I,A,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){const L=A.depthTexture,J=L&&L.isDepthTexture?L.type:null,te=T(A.stencilBuffer,J),Te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=ht(A);dt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,te,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,te,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,te,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,I)}else{const L=A.textures;for(let J=0;J<L.length;J++){const te=L[J],Te=c.convert(te.format,te.colorSpace),be=c.convert(te.type),Ne=N(te.internalFormat,Te,be,te.colorSpace),ot=ht(A);Y&&dt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Ne,A.width,A.height):dt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Ne,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=s.get(A.depthTexture);L.__renderTarget=A,(!L.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),me(A.depthTexture,0);const J=L.__webglTexture,te=ht(A);if(A.depthTexture.format===Hs)dt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(A.depthTexture.format===Qs)dt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Fe(I){const A=s.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const L=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),L){const J=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,L.removeEventListener("dispose",J)};L.addEventListener("dispose",J),A.__depthDisposeCallback=J}A.__boundDepthTexture=L}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Re(A.__webglFramebuffer,I)}else if(Y){A.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[L]),A.__webglDepthbuffer[L]===void 0)A.__webglDepthbuffer[L]=i.createRenderbuffer(),Se(A.__webglDepthbuffer[L],I,!1);else{const J=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=A.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Se(A.__webglDepthbuffer,I,!1);else{const L=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(I,A,Y){const L=s.get(I);A!==void 0&&we(L.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Fe(I)}function At(I){const A=I.texture,Y=s.get(I),L=s.get(A);I.addEventListener("dispose",D);const J=I.textures,te=I.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=A.version,f.memory.textures++),te){Y.__webglFramebuffer=[];for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[be]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)Y.__webglFramebuffer[be][Ne]=i.createFramebuffer()}else Y.__webglFramebuffer[be]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let be=0;be<A.mipmaps.length;be++)Y.__webglFramebuffer[be]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Te)for(let be=0,Ne=J.length;be<Ne;be++){const ot=s.get(J[be]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),f.memory.textures++)}if(I.samples>0&&dt(I)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let be=0;be<J.length;be++){const Ne=J[be];Y.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[be]);const ot=c.convert(Ne.format,Ne.colorSpace),_e=c.convert(Ne.type),Oe=N(Ne.internalFormat,ot,_e,Ne.colorSpace,I.isXRRenderTarget===!0),et=ht(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Oe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Y.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),re(i.TEXTURE_CUBE_MAP,A);for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)we(Y.__webglFramebuffer[be][Ne],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne);else we(Y.__webglFramebuffer[be],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);S(A)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let be=0,Ne=J.length;be<Ne;be++){const ot=J[be],_e=s.get(ot);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),re(i.TEXTURE_2D,ot),we(Y.__webglFramebuffer,I,ot,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),S(ot)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,L.__webglTexture),re(be,A),A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)we(Y.__webglFramebuffer[Ne],I,A,i.COLOR_ATTACHMENT0,be,Ne);else we(Y.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,be,0);S(A)&&v(be),t.unbindTexture()}I.depthBuffer&&Fe(I)}function pt(I){const A=I.textures;for(let Y=0,L=A.length;Y<L;Y++){const J=A[Y];if(S(J)){const te=k(I),Te=s.get(J).__webglTexture;t.bindTexture(te,Te),v(te),t.unbindTexture()}}}const Nt=[],K=[];function nn(I){if(I.samples>0){if(dt(I)===!1){const A=I.textures,Y=I.width,L=I.height;let J=i.COLOR_BUFFER_BIT;const te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=s.get(I),be=A.length>1;if(be)for(let Ne=0;Ne<A.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ne=0;Ne<A.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ne]);const ot=s.get(A[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,Y,L,0,0,Y,L,J,i.NEAREST),p===!0&&(Nt.length=0,K.length=0,Nt.push(i.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Nt.push(te),K.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ne=0;Ne<A.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ne]);const ot=s.get(A[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ht(I){return Math.min(o.maxSamples,I.samples)}function dt(I){const A=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ye(I){const A=f.render.frame;x.get(I)!==A&&(x.set(I,A),I.update())}function bt(I,A){const Y=I.colorSpace,L=I.format,J=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==$s&&Y!==Si&&(_t.getTransfer(Y)===Pt?(L!==Zn||J!==Gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),A}function Qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=W,this.setTexture2D=me,this.setTexture2DArray=le,this.setTexture3D=pe,this.setTextureCube=H,this.rebindTextures=Ke,this.setupRenderTarget=At,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=dt}function LM(i,e){function t(s,o=Si){let c;const f=_t.getTransfer(o);if(s===Gr)return i.UNSIGNED_BYTE;if(s===hf)return i.UNSIGNED_SHORT_4_4_4_4;if(s===pf)return i.UNSIGNED_SHORT_5_5_5_1;if(s===D0)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===P0)return i.BYTE;if(s===k0)return i.SHORT;if(s===Wa)return i.UNSIGNED_SHORT;if(s===ff)return i.INT;if(s===$i)return i.UNSIGNED_INT;if(s===_r)return i.FLOAT;if(s===Js)return i.HALF_FLOAT;if(s===L0)return i.ALPHA;if(s===I0)return i.RGB;if(s===Zn)return i.RGBA;if(s===U0)return i.LUMINANCE;if(s===F0)return i.LUMINANCE_ALPHA;if(s===Hs)return i.DEPTH_COMPONENT;if(s===Qs)return i.DEPTH_STENCIL;if(s===O0)return i.RED;if(s===mf)return i.RED_INTEGER;if(s===z0)return i.RG;if(s===gf)return i.RG_INTEGER;if(s===xf)return i.RGBA_INTEGER;if(s===Dl||s===Ll||s===Il||s===Ul)if(f===Pt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Dl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ll)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Il)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ul)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Dl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ll)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Il)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ul)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nd||s===Pd||s===kd||s===Dd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Nd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ld||s===Id||s===Ud)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ld||s===Id)return f===Pt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ud)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fd||s===Od||s===zd||s===Bd||s===jd||s===Hd||s===Gd||s===Vd||s===Wd||s===Xd||s===qd||s===Yd||s===Qd||s===Kd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Fd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Od)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fl||s===Zd||s===Jd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Fl)return f===Pt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===B0||s===$d||s===ef||s===tf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Fl)return c.COMPRESSED_RED_RGTC1_EXT;if(s===$d)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ef)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ys?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}class IM extends ur{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Al extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UM={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,s),v=this._getHandJoint(m,w);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const x=m.joints["index-finger-tip"],b=m.joints["thumb-tip"],y=x.position.distanceTo(b.position),_=.02,M=.005;m.inputState.pinching&&y>_+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=_-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(UM)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Al;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const FM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Sn,c=e.properties.get(o);c.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Wr({vertexShader:FM,fragmentShader:OM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new Ji(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BM extends ea{constructor(e,t){super();const s=this;let o=null,c=1,f=null,d="local-floor",p=1,m=null,x=null,b=null,y=null,_=null,M=null;const w=new zM,S=t.getContextAttributes();let v=null,k=null;const N=[],T=[],U=new ct;let F=null;const D=new ur;D.viewport=new jt;const B=new ur;B.viewport=new jt;const P=[D,B],C=new IM;let j=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ge=N[ie];return ge===void 0&&(ge=new ud,N[ie]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ie){let ge=N[ie];return ge===void 0&&(ge=new ud,N[ie]=ge),ge.getGripSpace()},this.getHand=function(ie){let ge=N[ie];return ge===void 0&&(ge=new ud,N[ie]=ge),ge.getHandSpace()};function $(ie){const ge=T.indexOf(ie.inputSource);if(ge===-1)return;const we=N[ge];we!==void 0&&(we.update(ie.inputSource,ie.frame,m||f),we.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ue(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",me);for(let ie=0;ie<N.length;ie++){const ge=T[ie];ge!==null&&(T[ie]=null,N[ie].disconnect(ge))}j=null,W=null,w.reset(),e.setRenderTarget(v),_=null,y=null,b=null,o=null,k=null,Pe.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(U.width,U.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return y!==null?y:_},this.getBinding=function(){return b},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",me),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(U),o.renderState.layers===void 0){const ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};_=new XRWebGLLayer(o,t,ge),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),k=new Ei(_.framebufferWidth,_.framebufferHeight,{format:Zn,type:Gr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ge=null,we=null,Se=null;S.depth&&(Se=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?Qs:Hs,we=S.stencil?Ys:$i);const Re={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:c};b=new XRWebGLBinding(o,t),y=b.createProjectionLayer(Re),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),k=new Ei(y.textureWidth,y.textureHeight,{format:Zn,type:Gr,depthTexture:new tg(y.textureWidth,y.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await o.requestReferenceSpace(d),Pe.setContext(o),Pe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function me(ie){for(let ge=0;ge<ie.removed.length;ge++){const we=ie.removed[ge],Se=T.indexOf(we);Se>=0&&(T[Se]=null,N[Se].disconnect(we))}for(let ge=0;ge<ie.added.length;ge++){const we=ie.added[ge];let Se=T.indexOf(we);if(Se===-1){for(let Fe=0;Fe<N.length;Fe++)if(Fe>=T.length){T.push(we),Se=Fe;break}else if(T[Fe]===null){T[Fe]=we,Se=Fe;break}if(Se===-1)break}const Re=N[Se];Re&&Re.connect(we)}}const le=new fe,pe=new fe;function H(ie,ge,we){le.setFromMatrixPosition(ge.matrixWorld),pe.setFromMatrixPosition(we.matrixWorld);const Se=le.distanceTo(pe),Re=ge.projectionMatrix.elements,Fe=we.projectionMatrix.elements,Ke=Re[14]/(Re[10]-1),At=Re[14]/(Re[10]+1),pt=(Re[9]+1)/Re[5],Nt=(Re[9]-1)/Re[5],K=(Re[8]-1)/Re[0],nn=(Fe[8]+1)/Fe[0],ht=Ke*K,dt=Ke*nn,Ye=Se/(-K+nn),bt=Ye*-K;if(ge.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(bt),ie.translateZ(Ye),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Re[10]===-1)ie.projectionMatrix.copy(ge.projectionMatrix),ie.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Qe=Ke+Ye,I=At+Ye,A=ht-bt,Y=dt+(Se-bt),L=pt*At/I*Qe,J=Nt*At/I*Qe;ie.projectionMatrix.makePerspective(A,Y,L,J,Qe,I),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ee(ie,ge){ge===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ge.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let ge=ie.near,we=ie.far;w.texture!==null&&(w.depthNear>0&&(ge=w.depthNear),w.depthFar>0&&(we=w.depthFar)),C.near=B.near=D.near=ge,C.far=B.far=D.far=we,(j!==C.near||W!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),j=C.near,W=C.far),D.layers.mask=ie.layers.mask|2,B.layers.mask=ie.layers.mask|4,C.layers.mask=D.layers.mask|B.layers.mask;const Se=ie.parent,Re=C.cameras;ee(C,Se);for(let Fe=0;Fe<Re.length;Fe++)ee(Re[Fe],Se);Re.length===2?H(C,D,B):C.projectionMatrix.copy(D.projectionMatrix),ae(ie,C,Se)};function ae(ie,ge,we){we===null?ie.matrix.copy(ge.matrixWorld):(ie.matrix.copy(we.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ge.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ge.projectionMatrix),ie.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=nf*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&_===null))return p},this.setFoveation=function(ie){p=ie,y!==null&&(y.fixedFoveation=ie),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ie)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let z=null;function re(ie,ge){if(x=ge.getViewerPose(m||f),M=ge,x!==null){const we=x.views;_!==null&&(e.setRenderTargetFramebuffer(k,_.framebuffer),e.setRenderTarget(k));let Se=!1;we.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let Fe=0;Fe<we.length;Fe++){const Ke=we[Fe];let At=null;if(_!==null)At=_.getViewport(Ke);else{const Nt=b.getViewSubImage(y,Ke);At=Nt.viewport,Fe===0&&(e.setRenderTargetTextures(k,Nt.colorTexture,y.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(k))}let pt=P[Fe];pt===void 0&&(pt=new ur,pt.layers.enable(Fe),pt.viewport=new jt,P[Fe]=pt),pt.matrix.fromArray(Ke.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ke.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(At.x,At.y,At.width,At.height),Fe===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(pt)}const Re=o.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Fe=b.getDepthInformation(we[0]);Fe&&Fe.isValid&&Fe.texture&&w.init(e,Fe,o.renderState)}}for(let we=0;we<N.length;we++){const Se=T[we],Re=N[we];Se!==null&&Re!==void 0&&Re.update(Se,ge,m||f)}z&&z(ie,ge),ge.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ge}),M=null}const Pe=new eg;Pe.setAnimationLoop(re),this.setAnimationLoop=function(ie){z=ie},this.dispose=function(){}}}const Wi=new Vr,jM=new Gt;function HM(i,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,Z0(i)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,k,N,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),b(S,v)):v.isMeshPhongMaterial?(c(S,v),x(S,v)):v.isMeshStandardMaterial?(c(S,v),y(S,v),v.isMeshPhysicalMaterial&&_(S,v,T)):v.isMeshMatcapMaterial?(c(S,v),M(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),w(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?p(S,v,k,N):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===kn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===kn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const k=e.get(v),N=k.envMap,T=k.envMapRotation;N&&(S.envMap.value=N,Wi.copy(T),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),S.envMapRotation.value.setFromMatrix4(jM.makeRotationFromEuler(Wi)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,k,N){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*k,S.scale.value=N*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function x(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function b(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function _(S,v,k){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=k.texture,S.transmissionSamplerSize.value.set(k.width,k.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function w(S,v){const k=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(k.matrixWorld),S.nearDistance.value=k.shadow.camera.near,S.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function GM(i,e,t,s){let o={},c={},f=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(k,N){const T=N.program;s.uniformBlockBinding(k,T)}function m(k,N){let T=o[k.id];T===void 0&&(M(k),T=x(k),o[k.id]=T,k.addEventListener("dispose",S));const U=N.program;s.updateUBOMapping(k,U);const F=e.render.frame;c[k.id]!==F&&(y(k),c[k.id]=F)}function x(k){const N=b();k.__bindingPointIndex=N;const T=i.createBuffer(),U=k.__size,F=k.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,U,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,N,T),T}function b(){for(let k=0;k<d;k++)if(f.indexOf(k)===-1)return f.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(k){const N=o[k.id],T=k.uniforms,U=k.__cache;i.bindBuffer(i.UNIFORM_BUFFER,N);for(let F=0,D=T.length;F<D;F++){const B=Array.isArray(T[F])?T[F]:[T[F]];for(let P=0,C=B.length;P<C;P++){const j=B[P];if(_(j,F,P,U)===!0){const W=j.__offset,$=Array.isArray(j.value)?j.value:[j.value];let ue=0;for(let me=0;me<$.length;me++){const le=$[me],pe=w(le);typeof le=="number"||typeof le=="boolean"?(j.__data[0]=le,i.bufferSubData(i.UNIFORM_BUFFER,W+ue,j.__data)):le.isMatrix3?(j.__data[0]=le.elements[0],j.__data[1]=le.elements[1],j.__data[2]=le.elements[2],j.__data[3]=0,j.__data[4]=le.elements[3],j.__data[5]=le.elements[4],j.__data[6]=le.elements[5],j.__data[7]=0,j.__data[8]=le.elements[6],j.__data[9]=le.elements[7],j.__data[10]=le.elements[8],j.__data[11]=0):(le.toArray(j.__data,ue),ue+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,j.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(k,N,T,U){const F=k.value,D=N+"_"+T;if(U[D]===void 0)return typeof F=="number"||typeof F=="boolean"?U[D]=F:U[D]=F.clone(),!0;{const B=U[D];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return U[D]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function M(k){const N=k.uniforms;let T=0;const U=16;for(let D=0,B=N.length;D<B;D++){const P=Array.isArray(N[D])?N[D]:[N[D]];for(let C=0,j=P.length;C<j;C++){const W=P[C],$=Array.isArray(W.value)?W.value:[W.value];for(let ue=0,me=$.length;ue<me;ue++){const le=$[ue],pe=w(le),H=T%U,ee=H%pe.boundary,ae=H+ee;T+=ee,ae!==0&&U-ae<pe.storage&&(T+=U-ae),W.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=pe.storage}}}const F=T%U;return F>0&&(T+=U-F),k.__size=T,k.__cache={},this}function w(k){const N={boundary:0,storage:0};return typeof k=="number"||typeof k=="boolean"?(N.boundary=4,N.storage=4):k.isVector2?(N.boundary=8,N.storage=8):k.isVector3||k.isColor?(N.boundary=16,N.storage=12):k.isVector4?(N.boundary=16,N.storage=16):k.isMatrix3?(N.boundary=48,N.storage=48):k.isMatrix4?(N.boundary=64,N.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),N}function S(k){const N=k.target;N.removeEventListener("dispose",S);const T=f.indexOf(N.__bindingPointIndex);f.splice(T,1),i.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function v(){for(const k in o)i.deleteBuffer(o[k]);f=[],o={},c={}}return{bind:p,update:m,dispose:v}}class VM{constructor(e={}){const{canvas:t=Py(),context:s=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:b=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let _;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=s.getContextAttributes().alpha}else _=f;const M=new Uint32Array(4),w=new Int32Array(4);let S=null,v=null;const k=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Mi,this.toneMappingExposure=1;const T=this;let U=!1,F=0,D=0,B=null,P=-1,C=null;const j=new jt,W=new jt;let $=null;const ue=new Tt(0);let me=0,le=t.width,pe=t.height,H=1,ee=null,ae=null;const z=new jt(0,0,le,pe),re=new jt(0,0,le,pe);let Pe=!1;const ie=new $0;let ge=!1,we=!1;const Se=new Gt,Re=new Gt,Fe=new fe,Ke=new jt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Nt(){return B===null?H:1}let K=s;function nn(R,Q){return t.getContext(R,Q)}try{const R={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:b};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${df}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Le,!1),K===null){const Q="webgl2";if(K=nn(Q,R),K===null)throw nn(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ht,dt,Ye,bt,Qe,I,A,Y,L,J,te,Te,be,Ne,ot,_e,Oe,et,tt,Be,mt,st,Ct,q;function ke(){ht=new Q_(K),ht.init(),st=new LM(K,ht),dt=new H_(K,ht,e,st),Ye=new PM(K,ht),dt.reverseDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),bt=new J_(K),Qe=new gM,I=new DM(K,ht,Ye,Qe,dt,st,bt),A=new V_(T),Y=new Y_(T),L=new i2(K),Ct=new B_(K,L),J=new K_(K,L,bt,Ct),te=new eb(K,J,L,bt),tt=new $_(K,dt,I),_e=new G_(Qe),Te=new mM(T,A,Y,ht,dt,Ct,_e),be=new HM(T,Qe),Ne=new vM,ot=new wM(ht),et=new z_(T,A,Y,Ye,te,_,p),Oe=new RM(T,te,dt),q=new GM(K,bt,dt,Ye),Be=new j_(K,ht,bt),mt=new Z_(K,ht,bt),bt.programs=Te.programs,T.capabilities=dt,T.extensions=ht,T.properties=Qe,T.renderLists=Ne,T.shadowMap=Oe,T.state=Ye,T.info=bt}ke();const he=new BM(T,K);this.xr=he,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(le,pe,!1))},this.getSize=function(R){return R.set(le,pe)},this.setSize=function(R,Q,ce=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=R,pe=Q,t.width=Math.floor(R*H),t.height=Math.floor(Q*H),ce===!0&&(t.style.width=R+"px",t.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(le*H,pe*H).floor()},this.setDrawingBufferSize=function(R,Q,ce){le=R,pe=Q,H=ce,t.width=Math.floor(R*ce),t.height=Math.floor(Q*ce),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(j)},this.getViewport=function(R){return R.copy(z)},this.setViewport=function(R,Q,ce,de){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,Q,ce,de),Ye.viewport(j.copy(z).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,Q,ce,de){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,Q,ce,de),Ye.scissor(W.copy(re).multiplyScalar(H).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(R){Ye.setScissorTest(Pe=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){ae=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(R=!0,Q=!0,ce=!0){let de=0;if(R){let Z=!1;if(B!==null){const Ce=B.texture.format;Z=Ce===xf||Ce===gf||Ce===mf}if(Z){const Ce=B.texture.type,Ee=Ce===Gr||Ce===$i||Ce===Wa||Ce===Ys||Ce===hf||Ce===pf,Ve=et.getClearColor(),He=et.getClearAlpha(),nt=Ve.r,it=Ve.g,We=Ve.b;Ee?(M[0]=nt,M[1]=it,M[2]=We,M[3]=He,K.clearBufferuiv(K.COLOR,0,M)):(w[0]=nt,w[1]=it,w[2]=We,w[3]=He,K.clearBufferiv(K.COLOR,0,w))}else de|=K.COLOR_BUFFER_BIT}Q&&(de|=K.DEPTH_BUFFER_BIT),ce&&(de|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ne.dispose(),ot.dispose(),Qe.dispose(),A.dispose(),Y.dispose(),te.dispose(),Ct.dispose(),q.dispose(),Te.dispose(),he.dispose(),he.removeEventListener("sessionstart",ts),he.removeEventListener("sessionend",qr),br.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const R=bt.autoReset,Q=Oe.enabled,ce=Oe.autoUpdate,de=Oe.needsUpdate,Z=Oe.type;ke(),bt.autoReset=R,Oe.enabled=Q,Oe.autoUpdate=ce,Oe.needsUpdate=de,Oe.type=Z}function Le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const Q=R.target;Q.removeEventListener("dispose",at),Lt(Q)}function Lt(R){Xt(R),Qe.remove(R)}function Xt(R){const Q=Qe.get(R).programs;Q!==void 0&&(Q.forEach(function(ce){Te.releaseProgram(ce)}),R.isShaderMaterial&&Te.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,ce,de,Z,Ce){Q===null&&(Q=At);const Ee=Z.isMesh&&Z.matrixWorld.determinant()<0,Ve=to(R,Q,ce,de,Z);Ye.setMaterial(de,Ee);let He=ce.index,nt=1;if(de.wireframe===!0){if(He=J.getWireframeAttribute(ce),He===void 0)return;nt=2}const it=ce.drawRange,We=ce.attributes.position;let vt=it.start*nt,Et=(it.start+it.count)*nt;Ce!==null&&(vt=Math.max(vt,Ce.start*nt),Et=Math.min(Et,(Ce.start+Ce.count)*nt)),He!==null?(vt=Math.max(vt,0),Et=Math.min(Et,He.count)):We!=null&&(vt=Math.max(vt,0),Et=Math.min(Et,We.count));const xt=Et-vt;if(xt<0||xt===1/0)return;Ct.setup(Z,de,Ve,ce,He);let an,lt=Be;if(He!==null&&(an=L.get(He),lt=mt,lt.setIndex(an)),Z.isMesh)de.wireframe===!0?(Ye.setLineWidth(de.wireframeLinewidth*Nt()),lt.setMode(K.LINES)):lt.setMode(K.TRIANGLES);else if(Z.isLine){let qe=de.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Nt()),Z.isLineSegments?lt.setMode(K.LINES):Z.isLineLoop?lt.setMode(K.LINE_LOOP):lt.setMode(K.LINE_STRIP)}else Z.isPoints?lt.setMode(K.POINTS):Z.isSprite&&lt.setMode(K.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)lt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))lt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const qe=Z._multiDrawStarts,$n=Z._multiDrawCounts,Mt=Z._multiDrawCount,on=He?L.get(He).bytesPerElement:1,er=Qe.get(de).currentProgram.getUniforms();for(let qt=0;qt<Mt;qt++)er.setValue(K,"_gl_DrawID",qt),lt.render(qe[qt]/on,$n[qt])}else if(Z.isInstancedMesh)lt.renderInstances(vt,xt,Z.count);else if(ce.isInstancedBufferGeometry){const qe=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,$n=Math.min(ce.instanceCount,qe);lt.renderInstances(vt,xt,$n)}else lt.render(vt,xt)};function yt(R,Q,ce){R.transparent===!0&&R.side===zr&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,ns(R,Q,ce),R.side=wi,R.needsUpdate=!0,ns(R,Q,ce),R.side=zr):ns(R,Q,ce)}this.compile=function(R,Q,ce=null){ce===null&&(ce=R),v=ot.get(ce),v.init(Q),N.push(v),ce.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==ce&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const de=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ce=Z.material;if(Ce)if(Array.isArray(Ce))for(let Ee=0;Ee<Ce.length;Ee++){const Ve=Ce[Ee];yt(Ve,ce,Z),de.add(Ve)}else yt(Ce,ce,Z),de.add(Ce)}),N.pop(),v=null,de},this.compileAsync=function(R,Q,ce=null){const de=this.compile(R,Q,ce);return new Promise(Z=>{function Ce(){if(de.forEach(function(Ee){Qe.get(Ee).currentProgram.isReady()&&de.delete(Ee)}),de.size===0){Z(R);return}setTimeout(Ce,10)}ht.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let _n=null;function pn(R){_n&&_n(R)}function ts(){br.stop()}function qr(){br.start()}const br=new eg;br.setAnimationLoop(pn),typeof self<"u"&&br.setContext(self),this.setAnimationLoop=function(R){_n=R,he.setAnimationLoop(R),R===null?br.stop():br.start()},he.addEventListener("sessionstart",ts),he.addEventListener("sessionend",qr),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(Q),Q=he.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,Q,B),v=ot.get(R,N.length),v.init(Q),N.push(v),Re.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ie.setFromProjectionMatrix(Re),we=this.localClippingEnabled,ge=_e.init(this.clippingPlanes,we),S=Ne.get(R,k.length),S.init(),k.push(S),he.enabled===!0&&he.isPresenting===!0){const Ce=T.xr.getDepthSensingMesh();Ce!==null&&Mr(Ce,Q,-1/0,T.sortObjects)}Mr(R,Q,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(ee,ae),pt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,pt&&et.addToRenderList(S,R),this.info.render.frame++,ge===!0&&_e.beginShadows();const ce=v.state.shadowsArray;Oe.render(ce,R,Q),ge===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=S.opaque,Z=S.transmissive;if(v.setupLights(),Q.isArrayCamera){const Ce=Q.cameras;if(Z.length>0)for(let Ee=0,Ve=Ce.length;Ee<Ve;Ee++){const He=Ce[Ee];Ai(de,Z,R,He)}pt&&et.render(R);for(let Ee=0,Ve=Ce.length;Ee<Ve;Ee++){const He=Ce[Ee];Ti(S,R,He,He.viewport)}}else Z.length>0&&Ai(de,Z,R,Q),pt&&et.render(R),Ti(S,R,Q);B!==null&&(I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B)),R.isScene===!0&&R.onAfterRender(T,R,Q),Ct.resetDefaultState(),P=-1,C=null,N.pop(),N.length>0?(v=N[N.length-1],ge===!0&&_e.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,k.pop(),k.length>0?S=k[k.length-1]:S=null};function Mr(R,Q,ce,de){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ie.intersectsSprite(R)){de&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const Ee=te.update(R),Ve=R.material;Ve.visible&&S.push(R,Ee,Ve,ce,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ie.intersectsObject(R))){const Ee=te.update(R),Ve=R.material;if(de&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ke.copy(Ee.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(Ve)){const He=Ee.groups;for(let nt=0,it=He.length;nt<it;nt++){const We=He[nt],vt=Ve[We.materialIndex];vt&&vt.visible&&S.push(R,Ee,vt,ce,Ke.z,We)}}else Ve.visible&&S.push(R,Ee,Ve,ce,Ke.z,null)}}const Ce=R.children;for(let Ee=0,Ve=Ce.length;Ee<Ve;Ee++)Mr(Ce[Ee],Q,ce,de)}function Ti(R,Q,ce,de){const Z=R.opaque,Ce=R.transmissive,Ee=R.transparent;v.setupLightsView(ce),ge===!0&&_e.setGlobalState(T.clippingPlanes,ce),de&&Ye.viewport(j.copy(de)),Z.length>0&&Yr(Z,Q,ce),Ce.length>0&&Yr(Ce,Q,ce),Ee.length>0&&Yr(Ee,Q,ce),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Ai(R,Q,ce,de){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[de.id]===void 0&&(v.state.transmissionRenderTarget[de.id]=new Ei(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Js:Gr,minFilter:Zi,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const Ce=v.state.transmissionRenderTarget[de.id],Ee=de.viewport||j;Ce.setSize(Ee.z,Ee.w);const Ve=T.getRenderTarget();T.setRenderTarget(Ce),T.getClearColor(ue),me=T.getClearAlpha(),me<1&&T.setClearColor(16777215,.5),T.clear(),pt&&et.render(ce);const He=T.toneMapping;T.toneMapping=Mi;const nt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),v.setupLightsView(de),ge===!0&&_e.setGlobalState(T.clippingPlanes,de),Yr(R,ce,de),I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce),ht.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,vt=Q.length;We<vt;We++){const Et=Q[We],xt=Et.object,an=Et.geometry,lt=Et.material,qe=Et.group;if(lt.side===zr&&xt.layers.test(de.layers)){const $n=lt.side;lt.side=kn,lt.needsUpdate=!0,$a(xt,ce,de,an,lt,qe),lt.side=$n,lt.needsUpdate=!0,it=!0}}it===!0&&(I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce))}T.setRenderTarget(Ve),T.setClearColor(ue,me),nt!==void 0&&(de.viewport=nt),T.toneMapping=He}function Yr(R,Q,ce){const de=Q.isScene===!0?Q.overrideMaterial:null;for(let Z=0,Ce=R.length;Z<Ce;Z++){const Ee=R[Z],Ve=Ee.object,He=Ee.geometry,nt=de===null?Ee.material:de,it=Ee.group;Ve.layers.test(ce.layers)&&$a(Ve,Q,ce,He,nt,it)}}function $a(R,Q,ce,de,Z,Ce){R.onBeforeRender(T,Q,ce,de,Z,Ce),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(T,Q,ce,de,R,Ce),Z.transparent===!0&&Z.side===zr&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,T.renderBufferDirect(ce,Q,de,Z,R,Ce),Z.side=wi,Z.needsUpdate=!0,T.renderBufferDirect(ce,Q,de,Z,R,Ce),Z.side=zr):T.renderBufferDirect(ce,Q,de,Z,R,Ce),R.onAfterRender(T,Q,ce,de,Z,Ce)}function ns(R,Q,ce){Q.isScene!==!0&&(Q=At);const de=Qe.get(R),Z=v.state.lights,Ce=v.state.shadowsArray,Ee=Z.state.version,Ve=Te.getParameters(R,Z.state,Ce,Q,ce),He=Te.getProgramCacheKey(Ve);let nt=de.programs;de.environment=R.isMeshStandardMaterial?Q.environment:null,de.fog=Q.fog,de.envMap=(R.isMeshStandardMaterial?Y:A).get(R.envMap||de.environment),de.envMapRotation=de.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,nt===void 0&&(R.addEventListener("dispose",at),nt=new Map,de.programs=nt);let it=nt.get(He);if(it!==void 0){if(de.currentProgram===it&&de.lightsStateVersion===Ee)return pr(R,Ve),it}else Ve.uniforms=Te.getUniforms(R),R.onBeforeCompile(Ve,T),it=Te.acquireProgram(Ve,He),nt.set(He,it),de.uniforms=Ve.uniforms;const We=de.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=_e.uniform),pr(R,Ve),de.needsLights=Ql(R),de.lightsStateVersion=Ee,de.needsLights&&(We.ambientLightColor.value=Z.state.ambient,We.lightProbe.value=Z.state.probe,We.directionalLights.value=Z.state.directional,We.directionalLightShadows.value=Z.state.directionalShadow,We.spotLights.value=Z.state.spot,We.spotLightShadows.value=Z.state.spotShadow,We.rectAreaLights.value=Z.state.rectArea,We.ltc_1.value=Z.state.rectAreaLTC1,We.ltc_2.value=Z.state.rectAreaLTC2,We.pointLights.value=Z.state.point,We.pointLightShadows.value=Z.state.pointShadow,We.hemisphereLights.value=Z.state.hemi,We.directionalShadowMap.value=Z.state.directionalShadowMap,We.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,We.spotShadowMap.value=Z.state.spotShadowMap,We.spotLightMatrix.value=Z.state.spotLightMatrix,We.spotLightMap.value=Z.state.spotLightMap,We.pointShadowMap.value=Z.state.pointShadowMap,We.pointShadowMatrix.value=Z.state.pointShadowMatrix),de.currentProgram=it,de.uniformsList=null,it}function eo(R){if(R.uniformsList===null){const Q=R.currentProgram.getUniforms();R.uniformsList=Ol.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function pr(R,Q){const ce=Qe.get(R);ce.outputColorSpace=Q.outputColorSpace,ce.batching=Q.batching,ce.batchingColor=Q.batchingColor,ce.instancing=Q.instancing,ce.instancingColor=Q.instancingColor,ce.instancingMorph=Q.instancingMorph,ce.skinning=Q.skinning,ce.morphTargets=Q.morphTargets,ce.morphNormals=Q.morphNormals,ce.morphColors=Q.morphColors,ce.morphTargetsCount=Q.morphTargetsCount,ce.numClippingPlanes=Q.numClippingPlanes,ce.numIntersection=Q.numClipIntersection,ce.vertexAlphas=Q.vertexAlphas,ce.vertexTangents=Q.vertexTangents,ce.toneMapping=Q.toneMapping}function to(R,Q,ce,de,Z){Q.isScene!==!0&&(Q=At),I.resetTextureUnits();const Ce=Q.fog,Ee=de.isMeshStandardMaterial?Q.environment:null,Ve=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:$s,He=(de.isMeshStandardMaterial?Y:A).get(de.envMap||Ee),nt=de.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,it=!!ce.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),We=!!ce.morphAttributes.position,vt=!!ce.morphAttributes.normal,Et=!!ce.morphAttributes.color;let xt=Mi;de.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(xt=T.toneMapping);const an=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,lt=an!==void 0?an.length:0,qe=Qe.get(de),$n=v.state.lights;if(ge===!0&&(we===!0||R!==C)){const mn=R===C&&de.id===P;_e.setState(de,R,mn)}let Mt=!1;de.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==$n.state.version||qe.outputColorSpace!==Ve||Z.isBatchedMesh&&qe.batching===!1||!Z.isBatchedMesh&&qe.batching===!0||Z.isBatchedMesh&&qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&qe.instancing===!1||!Z.isInstancedMesh&&qe.instancing===!0||Z.isSkinnedMesh&&qe.skinning===!1||!Z.isSkinnedMesh&&qe.skinning===!0||Z.isInstancedMesh&&qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&qe.instancingMorph===!1&&Z.morphTexture!==null||qe.envMap!==He||de.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==_e.numPlanes||qe.numIntersection!==_e.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==it||qe.morphTargets!==We||qe.morphNormals!==vt||qe.morphColors!==Et||qe.toneMapping!==xt||qe.morphTargetsCount!==lt)&&(Mt=!0):(Mt=!0,qe.__version=de.version);let on=qe.currentProgram;Mt===!0&&(on=ns(de,Q,Z));let er=!1,qt=!1,mr=!1;const kt=on.getUniforms(),jn=qe.uniforms;if(Ye.useProgram(on.program)&&(er=!0,qt=!0,mr=!0),de.id!==P&&(P=de.id,qt=!0),er||C!==R){Ye.buffers.depth.getReversed()?(Se.copy(R.projectionMatrix),Dy(Se),Ly(Se),kt.setValue(K,"projectionMatrix",Se)):kt.setValue(K,"projectionMatrix",R.projectionMatrix),kt.setValue(K,"viewMatrix",R.matrixWorldInverse);const Hn=kt.map.cameraPosition;Hn!==void 0&&Hn.setValue(K,Fe.setFromMatrixPosition(R.matrixWorld)),dt.logarithmicDepthBuffer&&kt.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&kt.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,qt=!0,mr=!0)}if(Z.isSkinnedMesh){kt.setOptional(K,Z,"bindMatrix"),kt.setOptional(K,Z,"bindMatrixInverse");const mn=Z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),kt.setValue(K,"boneTexture",mn.boneTexture,I))}Z.isBatchedMesh&&(kt.setOptional(K,Z,"batchingTexture"),kt.setValue(K,"batchingTexture",Z._matricesTexture,I),kt.setOptional(K,Z,"batchingIdTexture"),kt.setValue(K,"batchingIdTexture",Z._indirectTexture,I),kt.setOptional(K,Z,"batchingColorTexture"),Z._colorsTexture!==null&&kt.setValue(K,"batchingColorTexture",Z._colorsTexture,I));const wr=ce.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&tt.update(Z,ce,on),(qt||qe.receiveShadow!==Z.receiveShadow)&&(qe.receiveShadow=Z.receiveShadow,kt.setValue(K,"receiveShadow",Z.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(jn.envMap.value=He,jn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&Q.environment!==null&&(jn.envMapIntensity.value=Q.environmentIntensity),qt&&(kt.setValue(K,"toneMappingExposure",T.toneMappingExposure),qe.needsLights&&no(jn,mr),Ce&&de.fog===!0&&be.refreshFogUniforms(jn,Ce),be.refreshMaterialUniforms(jn,de,H,pe,v.state.transmissionRenderTarget[R.id]),Ol.upload(K,eo(qe),jn,I)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Ol.upload(K,eo(qe),jn,I),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&kt.setValue(K,"center",Z.center),kt.setValue(K,"modelViewMatrix",Z.modelViewMatrix),kt.setValue(K,"normalMatrix",Z.normalMatrix),kt.setValue(K,"modelMatrix",Z.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const mn=de.uniformsGroups;for(let Hn=0,bn=mn.length;Hn<bn;Hn++){const ro=mn[Hn];q.update(ro,on),q.bind(ro,on)}}return on}function no(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function Ql(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,Q,ce){Qe.get(R.texture).__webglTexture=Q,Qe.get(R.depthTexture).__webglTexture=ce;const de=Qe.get(R);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=ce===void 0,de.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Q){const ce=Qe.get(R);ce.__webglFramebuffer=Q,ce.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(R,Q=0,ce=0){B=R,F=Q,D=ce;let de=!0,Z=null,Ce=!1,Ee=!1;if(R){const He=Qe.get(R);if(He.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(K.FRAMEBUFFER,null),de=!1;else if(He.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(He.__hasExternalTextures)I.rebindTextures(R,Qe.get(R.texture).__webglTexture,Qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&Qe.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const nt=R.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ee=!0);const it=Qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[Q])?Z=it[Q][ce]:Z=it[Q],Ce=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?Z=Qe.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?Z=it[ce]:Z=it,j.copy(R.viewport),W.copy(R.scissor),$=R.scissorTest}else j.copy(z).multiplyScalar(H).floor(),W.copy(re).multiplyScalar(H).floor(),$=Pe;if(Ye.bindFramebuffer(K.FRAMEBUFFER,Z)&&de&&Ye.drawBuffers(R,Z),Ye.viewport(j),Ye.scissor(W),Ye.setScissorTest($),Ce){const He=Qe.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Q,He.__webglTexture,ce)}else if(Ee){const He=Qe.get(R.texture),nt=Q||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,He.__webglTexture,ce||0,nt)}P=-1},this.readRenderTargetPixels=function(R,Q,ce,de,Z,Ce,Ee){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ve=Ve[Ee]),Ve){Ye.bindFramebuffer(K.FRAMEBUFFER,Ve);try{const He=R.texture,nt=He.format,it=He.type;if(!dt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-de&&ce>=0&&ce<=R.height-Z&&K.readPixels(Q,ce,de,Z,st.convert(nt),st.convert(it),Ce)}finally{const He=B!==null?Qe.get(B).__webglFramebuffer:null;Ye.bindFramebuffer(K.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,Q,ce,de,Z,Ce,Ee){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ve=Ve[Ee]),Ve){const He=R.texture,nt=He.format,it=He.type;if(!dt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=R.width-de&&ce>=0&&ce<=R.height-Z){Ye.bindFramebuffer(K.FRAMEBUFFER,Ve);const We=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,We),K.bufferData(K.PIXEL_PACK_BUFFER,Ce.byteLength,K.STREAM_READ),K.readPixels(Q,ce,de,Z,st.convert(nt),st.convert(it),0);const vt=B!==null?Qe.get(B).__webglFramebuffer:null;Ye.bindFramebuffer(K.FRAMEBUFFER,vt);const Et=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await ky(K,Et,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,We),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ce),K.deleteBuffer(We),K.deleteSync(Et),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Q=null,ce=0){R.isTexture!==!0&&(ja("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1]);const de=Math.pow(2,-ce),Z=Math.floor(R.image.width*de),Ce=Math.floor(R.image.height*de),Ee=Q!==null?Q.x:0,Ve=Q!==null?Q.y:0;I.setTexture2D(R,0),K.copyTexSubImage2D(K.TEXTURE_2D,ce,0,0,Ee,Ve,Z,Ce),Ye.unbindTexture()},this.copyTextureToTexture=function(R,Q,ce=null,de=null,Z=0){R.isTexture!==!0&&(ja("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,R=arguments[1],Q=arguments[2],Z=arguments[3]||0,ce=null);let Ce,Ee,Ve,He,nt,it,We,vt,Et;const xt=R.isCompressedTexture?R.mipmaps[Z]:R.image;ce!==null?(Ce=ce.max.x-ce.min.x,Ee=ce.max.y-ce.min.y,Ve=ce.isBox3?ce.max.z-ce.min.z:1,He=ce.min.x,nt=ce.min.y,it=ce.isBox3?ce.min.z:0):(Ce=xt.width,Ee=xt.height,Ve=xt.depth||1,He=0,nt=0,it=0),de!==null?(We=de.x,vt=de.y,Et=de.z):(We=0,vt=0,Et=0);const an=st.convert(Q.format),lt=st.convert(Q.type);let qe;Q.isData3DTexture?(I.setTexture3D(Q,0),qe=K.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(I.setTexture2DArray(Q,0),qe=K.TEXTURE_2D_ARRAY):(I.setTexture2D(Q,0),qe=K.TEXTURE_2D),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Q.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,Q.unpackAlignment);const $n=K.getParameter(K.UNPACK_ROW_LENGTH),Mt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),on=K.getParameter(K.UNPACK_SKIP_PIXELS),er=K.getParameter(K.UNPACK_SKIP_ROWS),qt=K.getParameter(K.UNPACK_SKIP_IMAGES);K.pixelStorei(K.UNPACK_ROW_LENGTH,xt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,xt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,He),K.pixelStorei(K.UNPACK_SKIP_ROWS,nt),K.pixelStorei(K.UNPACK_SKIP_IMAGES,it);const mr=R.isDataArrayTexture||R.isData3DTexture,kt=Q.isDataArrayTexture||Q.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const jn=Qe.get(R),wr=Qe.get(Q),mn=Qe.get(jn.__renderTarget),Hn=Qe.get(wr.__renderTarget);Ye.bindFramebuffer(K.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ye.bindFramebuffer(K.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let bn=0;bn<Ve;bn++)mr&&K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Qe.get(R).__webglTexture,Z,it+bn),R.isDepthTexture?(kt&&K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Qe.get(Q).__webglTexture,Z,Et+bn),K.blitFramebuffer(He,nt,Ce,Ee,We,vt,Ce,Ee,K.DEPTH_BUFFER_BIT,K.NEAREST)):kt?K.copyTexSubImage3D(qe,Z,We,vt,Et+bn,He,nt,Ce,Ee):K.copyTexSubImage2D(qe,Z,We,vt,Et+bn,He,nt,Ce,Ee);Ye.bindFramebuffer(K.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else kt?R.isDataTexture||R.isData3DTexture?K.texSubImage3D(qe,Z,We,vt,Et,Ce,Ee,Ve,an,lt,xt.data):Q.isCompressedArrayTexture?K.compressedTexSubImage3D(qe,Z,We,vt,Et,Ce,Ee,Ve,an,xt.data):K.texSubImage3D(qe,Z,We,vt,Et,Ce,Ee,Ve,an,lt,xt):R.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Z,We,vt,Ce,Ee,an,lt,xt.data):R.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Z,We,vt,xt.width,xt.height,an,xt.data):K.texSubImage2D(K.TEXTURE_2D,Z,We,vt,Ce,Ee,an,lt,xt);K.pixelStorei(K.UNPACK_ROW_LENGTH,$n),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Mt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,on),K.pixelStorei(K.UNPACK_SKIP_ROWS,er),K.pixelStorei(K.UNPACK_SKIP_IMAGES,qt),Z===0&&Q.generateMipmaps&&K.generateMipmap(qe),Ye.unbindTexture()},this.copyTextureToTexture3D=function(R,Q,ce=null,de=null,Z=0){return R.isTexture!==!0&&(ja("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,de=arguments[1]||null,R=arguments[2],Q=arguments[3],Z=arguments[4]||0),ja('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Q,ce,de,Z)},this.initRenderTarget=function(R){Qe.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){F=0,D=0,B=null,Ye.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}class $m extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class WM extends Sn{constructor(e=null,t=1,s=1,o,c,f,d,p,m=Bn,x=Bn,b,y){super(null,f,d,p,m,x,o,c,b,y),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class XM extends Za{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gl=new fe,Vl=new fe,e0=new Gt,za=new W0,Cl=new ql,dd=new fe,t0=new fe;class qM extends Dn{constructor(e=new Xr,t=new XM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,c=t.count;o<c;o++)Gl.fromBufferAttribute(t,o-1),Vl.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=Gl.distanceTo(Vl);e.setAttribute("lineDistance",new Hr(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cl.copy(s.boundingSphere),Cl.applyMatrix4(o),Cl.radius+=c,e.ray.intersectsSphere(Cl)===!1)return;e0.copy(o).invert(),za.copy(e.ray).applyMatrix4(e0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,x=s.index,y=s.attributes.position;if(x!==null){const _=Math.max(0,f.start),M=Math.min(x.count,f.start+f.count);for(let w=_,S=M-1;w<S;w+=m){const v=x.getX(w),k=x.getX(w+1),N=Rl(this,e,za,p,v,k);N&&t.push(N)}if(this.isLineLoop){const w=x.getX(M-1),S=x.getX(_),v=Rl(this,e,za,p,w,S);v&&t.push(v)}}else{const _=Math.max(0,f.start),M=Math.min(y.count,f.start+f.count);for(let w=_,S=M-1;w<S;w+=m){const v=Rl(this,e,za,p,w,w+1);v&&t.push(v)}if(this.isLineLoop){const w=Rl(this,e,za,p,M-1,_);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Rl(i,e,t,s,o,c){const f=i.geometry.attributes.position;if(Gl.fromBufferAttribute(f,o),Vl.fromBufferAttribute(f,c),t.distanceSqToSegment(Gl,Vl,dd,t0)>s)return;dd.applyMatrix4(i.matrixWorld);const p=e.ray.origin.distanceTo(dd);if(!(p<e.near||p>e.far))return{distance:p,point:t0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const n0=new fe,r0=new fe;class YM extends qM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,c=t.count;o<c;o+=2)n0.fromBufferAttribute(t,o),r0.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+n0.distanceTo(r0);e.setAttribute("lineDistance",new Hr(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nl extends Wr{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class QM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=i0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=i0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function i0(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=df);function ag({mouseForce:i=20,cursorSize:e=100,isViscous:t=!1,viscous:s=30,iterationsViscous:o=32,iterationsPoisson:c=32,dt:f=.014,BFECC:d=!0,resolution:p=.5,isBounce:m=!1,colors:x=["#5227FF","#FF9FFC","#B497CF"],style:b={},className:y="",autoDemo:_=!0,autoSpeed:M=.5,autoIntensity:w=2.2,takeoverDuration:S=.25,autoResumeDelay:v=1e3,autoRampDuration:k=.6}){const N=V.useRef(null),T=V.useRef(null),U=V.useRef(null),F=V.useRef(null),D=V.useRef(null),B=V.useRef(!0),P=V.useRef(null);return V.useEffect(()=>{if(!N.current)return;function C(Y){let L;Array.isArray(Y)&&Y.length>0?Y.length===1?L=[Y[0],Y[0]]:L=Y:L=["#ffffff","#ffffff"];const J=L.length,te=new Uint8Array(J*4);for(let be=0;be<J;be++){const Ne=new Tt(L[be]);te[be*4+0]=Math.round(Ne.r*255),te[be*4+1]=Math.round(Ne.g*255),te[be*4+2]=Math.round(Ne.b*255),te[be*4+3]=255}const Te=new WM(te,J,1,Zn);return Te.magFilter=Pn,Te.minFilter=Pn,Te.wrapS=fr,Te.wrapT=fr,Te.generateMipmaps=!1,Te.needsUpdate=!0,Te}const j=C(x),W=new jt(0,0,0,0);class ${constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(L){this.container=L,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new VM({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Tt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new QM,this.clock.start()}resize(){if(!this.container)return;const L=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(L.width)),this.height=Math.max(1,Math.floor(L.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ue=new $;class me{constructor(){this.mouseMoved=!1,this.coords=new ct,this.coords_old=new ct,this.diff=new ct,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ct,this.takeoverTo=new ct,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(L){this.container=L,this.docTarget=L.ownerDocument||null;const J=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);J&&(this.listenerTarget=J,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(L,J){if(!this.container)return!1;const te=this.container.getBoundingClientRect();return te.width===0||te.height===0?!1:L>=te.left&&L<=te.right&&J>=te.top&&J<=te.bottom}updateHoverState(L,J){return this.isHoverInside=this.isPointInside(L,J),this.isHoverInside}setCoords(L,J){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const te=this.container.getBoundingClientRect();if(te.width===0||te.height===0)return;const Te=(L-te.left)/te.width,be=(J-te.top)/te.height;this.coords.set(Te*2-1,-(be*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(L,J){this.coords.set(L,J),this.mouseMoved=!0}onDocumentMouseMove(L){if(this.updateHoverState(L.clientX,L.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const J=this.container.getBoundingClientRect();if(J.width===0||J.height===0)return;const te=(L.clientX-J.left)/J.width,Te=(L.clientY-J.top)/J.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(te*2-1,-(Te*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(L.clientX,L.clientY),this.hasUserControl=!0}}onDocumentTouchStart(L){if(L.touches.length!==1)return;const J=L.touches[0];this.updateHoverState(J.clientX,J.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(J.clientX,J.clientY),this.hasUserControl=!0)}onDocumentTouchMove(L){if(L.touches.length!==1)return;const J=L.touches[0];this.updateHoverState(J.clientX,J.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(J.clientX,J.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const L=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(L>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const J=L*L*(3-2*L);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,J)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const le=new me;class pe{constructor(L,J,te){this.mouse=L,this.manager=J,this.enabled=te.enabled,this.speed=te.speed,this.resumeDelay=te.resumeDelay||3e3,this.rampDurationMs=(te.rampDuration||0)*1e3,this.active=!1,this.current=new ct(0,0),this.target=new ct,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ct,this.pickNewTarget()}pickNewTarget(){const L=Math.random;this.target.set((L()*2-1)*(1-this.margin),(L()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const L=performance.now();if(L-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=L,this.activationTime=L),!this.active)return;this.mouse.isAutoActive=!0;let te=(L-this.lastTime)/1e3;this.lastTime=L,te>.2&&(te=.016);const Te=this._tmpDir.subVectors(this.target,this.current),be=Te.length();if(be<.01){this.pickNewTarget();return}Te.normalize();let Ne=1;if(this.rampDurationMs>0){const Oe=Math.min(1,(L-this.activationTime)/this.rampDurationMs);Ne=Oe*Oe*(3-2*Oe)}const ot=this.speed*te*Ne,_e=Math.min(ot,be);this.current.addScaledVector(Te,_e),this.mouse.setNormalized(this.current.x,this.current.y)}}const H=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,ee=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,ae=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,z=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,re=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,Pe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,ie=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,ge=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,we=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,Se=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Re{constructor(L){var J;this.props=L||{},this.uniforms=(J=this.props.material)==null?void 0:J.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new $m,this.camera=new Hl,this.uniforms&&(this.material=new Nl(this.props.material),this.geometry=new Ji(2,2),this.plane=new Jn(this.geometry,this.material),this.scene.add(this.plane))}update(){ue.renderer.setRenderTarget(this.props.output||null),ue.renderer.render(this.scene,this.camera),ue.renderer.setRenderTarget(null)}}class Fe extends Re{constructor(L){super({material:{vertexShader:H,fragmentShader:z,uniforms:{boundarySpace:{value:L.cellScale},px:{value:L.cellScale},fboSize:{value:L.fboSize},velocity:{value:L.src.texture},dt:{value:L.dt},isBFECC:{value:!0}}},output:L.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const L=new Xr,J=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);L.setAttribute("position",new hr(J,3));const te=new Nl({vertexShader:ee,fragmentShader:z,uniforms:this.uniforms});this.line=new YM(L,te),this.scene.add(this.line)}update({dt:L,isBounce:J,BFECC:te}){this.uniforms.dt.value=L,this.line.visible=J,this.uniforms.isBFECC.value=te,super.update()}}class Ke extends Re{constructor(L){super({output:L.dst}),this.init(L)}init(L){super.init();const J=new Ji(1,1),te=new Nl({vertexShader:ae,fragmentShader:ie,blending:gd,depthWrite:!1,uniforms:{px:{value:L.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(L.cursor_size,L.cursor_size)}}});this.mouse=new Jn(J,te),this.scene.add(this.mouse)}update(L){const J=le.diff.x/2*L.mouse_force,te=le.diff.y/2*L.mouse_force,Te=L.cursor_size*L.cellScale.x,be=L.cursor_size*L.cellScale.y,Ne=Math.min(Math.max(le.coords.x,-1+Te+L.cellScale.x*2),1-Te-L.cellScale.x*2),ot=Math.min(Math.max(le.coords.y,-1+be+L.cellScale.y*2),1-be-L.cellScale.y*2),_e=this.mouse.material.uniforms;_e.force.value.set(J,te),_e.center.value.set(Ne,ot),_e.scale.value.set(L.cursor_size,L.cursor_size),super.update()}}class At extends Re{constructor(L){super({material:{vertexShader:H,fragmentShader:Se,uniforms:{boundarySpace:{value:L.boundarySpace},velocity:{value:L.src.texture},velocity_new:{value:L.dst_.texture},v:{value:L.viscous},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst,output0:L.dst_,output1:L.dst}),this.init()}update({viscous:L,iterations:J,dt:te}){let Te,be;this.uniforms.v.value=L;for(let Ne=0;Ne<J;Ne++)Ne%2===0?(Te=this.props.output0,be=this.props.output1):(Te=this.props.output1,be=this.props.output0),this.uniforms.velocity_new.value=Te.texture,this.props.output=be,this.uniforms.dt.value=te,super.update();return be}}class pt extends Re{constructor(L){super({material:{vertexShader:H,fragmentShader:Pe,uniforms:{boundarySpace:{value:L.boundarySpace},velocity:{value:L.src.texture},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst}),this.init()}update({vel:L}){this.uniforms.velocity.value=L.texture,super.update()}}class Nt extends Re{constructor(L){super({material:{vertexShader:H,fragmentShader:ge,uniforms:{boundarySpace:{value:L.boundarySpace},pressure:{value:L.dst_.texture},divergence:{value:L.src.texture},px:{value:L.cellScale}}},output:L.dst,output0:L.dst_,output1:L.dst}),this.init()}update({iterations:L}){let J,te;for(let Te=0;Te<L;Te++)Te%2===0?(J=this.props.output0,te=this.props.output1):(J=this.props.output1,te=this.props.output0),this.uniforms.pressure.value=J.texture,this.props.output=te,super.update();return te}}class K extends Re{constructor(L){super({material:{vertexShader:H,fragmentShader:we,uniforms:{boundarySpace:{value:L.boundarySpace},pressure:{value:L.src_p.texture},velocity:{value:L.src_v.texture},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst}),this.init()}update({vel:L,pressure:J}){this.uniforms.velocity.value=L.texture,this.uniforms.pressure.value=J.texture,super.update()}}class nn{constructor(L){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...L},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ct,this.cellScale=new ct,this.boundarySpace=new ct,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Js:_r}createAllFBO(){const J={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Pn,magFilter:Pn,wrapS:fr,wrapT:fr};for(let te in this.fbos)this.fbos[te]=new Ei(this.fboSize.x,this.fboSize.y,J)}createShaderPass(){this.advection=new Fe({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ke({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new At({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Nt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new K({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const L=Math.max(1,Math.round(this.options.resolution*ue.width)),J=Math.max(1,Math.round(this.options.resolution*ue.height)),te=1/L,Te=1/J;this.cellScale.set(te,Te),this.fboSize.set(L,J)}resize(){this.calcSize();for(let L in this.fbos)this.fbos[L].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let L=this.fbos.vel_1;this.options.isViscous&&(L=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:L});const J=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:L,pressure:J})}}class ht{constructor(){this.init()}init(){this.simulation=new nn,this.scene=new $m,this.camera=new Hl,this.output=new Jn(new Ji(2,2),new Nl({vertexShader:H,fragmentShader:re,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:j},bgColor:{value:W}}})),this.scene.add(this.output)}addScene(L){this.scene.add(L)}resize(){this.simulation.resize()}render(){ue.renderer.setRenderTarget(null),ue.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class dt{constructor(L){this.props=L,ue.init(L.$wrapper),le.init(L.$wrapper),le.autoIntensity=L.autoIntensity,le.takeoverDuration=L.takeoverDuration,this.lastUserInteraction=performance.now(),le.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new pe(le,this,{enabled:L.autoDemo,speed:L.autoSpeed,resumeDelay:L.autoResumeDelay,rampDuration:L.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():B.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ue.renderer.domElement),this.output=new ht}resize(){ue.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),le.update(),ue.update(),this.output.update()}loop(){this.running&&(this.render(),F.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,F.current&&(cancelAnimationFrame(F.current),F.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),le.dispose(),ue.renderer){const L=ue.renderer.domElement;L&&L.parentNode&&L.parentNode.removeChild(L),ue.renderer.dispose(),ue.renderer.forceContextLoss()}}catch{}}}const Ye=N.current;Ye.style.overflow="hidden";const bt=new dt({$wrapper:Ye,autoDemo:_,autoSpeed:M,autoIntensity:w,takeoverDuration:S,autoResumeDelay:v,autoRampDuration:k});T.current=bt,(()=>{var J;if(!T.current)return;const Y=(J=T.current.output)==null?void 0:J.simulation;if(!Y)return;const L=Y.options.resolution;Object.assign(Y.options,{mouse_force:i,cursor_size:e,isViscous:t,viscous:s,iterations_viscous:o,iterations_poisson:c,dt:f,BFECC:d,resolution:p,isBounce:m}),p!==L&&Y.resize()})(),bt.start();const I=new IntersectionObserver(Y=>{const L=Y[0],J=L.isIntersecting&&L.intersectionRatio>0;B.current=J,T.current&&(J&&!document.hidden?T.current.start():T.current.pause())},{threshold:[0,.01,.1]});I.observe(Ye),D.current=I;const A=new ResizeObserver(()=>{T.current&&(P.current&&cancelAnimationFrame(P.current),P.current=requestAnimationFrame(()=>{T.current&&T.current.resize()}))});return A.observe(Ye),U.current=A,()=>{if(F.current&&cancelAnimationFrame(F.current),U.current)try{U.current.disconnect()}catch{}if(D.current)try{D.current.disconnect()}catch{}T.current&&T.current.dispose(),T.current=null}},[d,e,f,m,t,c,o,i,p,s,_,M,w,S,v,k]),V.useEffect(()=>{var $;const C=T.current;if(!C)return;const j=($=C.output)==null?void 0:$.simulation;if(!j)return;const W=j.options.resolution;Object.assign(j.options,{mouse_force:i,cursor_size:e,isViscous:t,viscous:s,iterations_viscous:o,iterations_poisson:c,dt:f,BFECC:d,resolution:p,isBounce:m}),C.autoDriver&&(C.autoDriver.enabled=_,C.autoDriver.speed=M,C.autoDriver.resumeDelay=v,C.autoDriver.rampDurationMs=k*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=w,C.autoDriver.mouse.takeoverDuration=S)),p!==W&&j.resize()},[i,e,t,s,o,c,f,d,p,m,_,M,w,S,v,k]),l.jsx("div",{ref:N,className:`absolute inset-0 w-full h-full overflow-hidden pointer-events-none touch-none ${y||""}`,style:{zIndex:0,...b}})}function KM(){const i=V.useRef(null),e=V.useRef({x:-999,y:-999});return V.useEffect(()=>{const t=i.current,s=t.getContext("2d");let o=0,c=0,f=0,d=[];const p=()=>{o=t.offsetWidth,c=t.offsetHeight,t.width=o*devicePixelRatio,t.height=c*devicePixelRatio,s.scale(devicePixelRatio,devicePixelRatio);const M=Math.floor(o*c/8e3);d=Array.from({length:Math.min(M,150)},()=>({x:Math.random()*o,y:Math.random()*c,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:Math.random()*1.6+.4,opacity:Math.random()*.6+.2}))},m=140,x=()=>{s.clearRect(0,0,o,c),d.forEach(M=>{M.x+=M.vx,M.y+=M.vy,(M.x<0||M.x>o)&&(M.vx*=-1),(M.y<0||M.y>c)&&(M.vy*=-1);const w=M.x-e.current.x,S=M.y-e.current.y,v=Math.sqrt(w*w+S*S);if(v<100){const N=(100-v)/100;M.x+=w*N*.025,M.y+=S*N*.025}const k=v<80;s.beginPath(),s.arc(M.x,M.y,k?M.r*2:M.r,0,Math.PI*2),s.fillStyle=k?`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${M.opacity*1.8})`:`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${M.opacity*.6})`,s.fill()});for(let M=0;M<d.length;M++)for(let w=M+1;w<d.length;w++){const S=d[M].x-d[w].x,v=d[M].y-d[w].y,k=Math.sqrt(S*S+v*v);if(k<m){const N=(1-k/m)*.25;s.beginPath(),s.moveTo(d[M].x,d[M].y),s.lineTo(d[w].x,d[w].y),s.strokeStyle=`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${N})`,s.lineWidth=.7,s.stroke()}}d.forEach(M=>{const w=M.x-e.current.x,S=M.y-e.current.y,v=Math.sqrt(w*w+S*S);if(v<130){const k=(1-v/130)*.5;s.beginPath(),s.moveTo(M.x,M.y),s.lineTo(e.current.x,e.current.y),s.strokeStyle=`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${k})`,s.lineWidth=.6,s.stroke()}}),f=requestAnimationFrame(x)};p(),x();const b=M=>{const w=t.getBoundingClientRect();e.current={x:M.clientX-w.left,y:M.clientY-w.top}},y=()=>{e.current={x:-999,y:-999}};window.addEventListener("mousemove",b),t.addEventListener("mouseleave",y);const _=new ResizeObserver(p);return _.observe(t),()=>{cancelAnimationFrame(f),window.removeEventListener("mousemove",b),t.removeEventListener("mouseleave",y),_.disconnect()}},[]),l.jsx("canvas",{ref:i,className:"absolute inset-0 w-full h-full pointer-events-none z-5"})}function ZM({words:i}){const[e,t]=V.useState(0),[s,o]=V.useState(""),[c,f]=V.useState(!1);return V.useEffect(()=>{const d=i[e%i.length];if(!c&&s===d){const x=setTimeout(()=>f(!0),2e3);return()=>clearTimeout(x)}if(c&&s===""){f(!1),t(x=>x+1);return}const m=setTimeout(()=>{o(c?d.slice(0,s.length-1):d.slice(0,s.length+1))},c?50:90);return()=>clearTimeout(m)},[s,c,e,i]),l.jsxs("span",{style:{color:"rgb(var(--c1))"},children:[s,l.jsx("span",{className:"animate-pulse",style:{color:"rgb(var(--c1))",marginLeft:2},children:"|"})]})}function JM({target:i,suffix:e=""}){const[t,s]=V.useState(0),o=V.useRef(null);return V.useEffect(()=>{const c=new IntersectionObserver(([f])=>{if(f.isIntersecting){let d=0;const p=i/60,m=setInterval(()=>{d=Math.min(d+p,i),s(Math.floor(d)),d>=i&&clearInterval(m)},20);c.disconnect()}},{threshold:.5});return o.current&&c.observe(o.current),()=>c.disconnect()},[i]),l.jsxs("span",{ref:o,children:[t,e]})}function $M(){const i=V.useRef(null),[e,t]=V.useState(0),[s,o]=V.useState(!1),[c,f]=V.useState(!1),[d,p]=V.useState({}),m=V.useRef({}),[x,b]=V.useState(!1),y=T=>{const U=T.replace("#",""),F=parseInt(U.substring(0,2),16),D=parseInt(U.substring(2,4),16),B=parseInt(U.substring(4,6),16);return`${F}, ${D}, ${B}`};V.useEffect(()=>{const U=()=>b(window.innerWidth<=640);return U(),window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[]);const _=[{img:"/assets/images/banner1.png",label:"Design Systems",accent:"#7c6ff7",accentBg:"rgba(124,111,247,0.12)",accentBorder:"rgba(124,111,247,0.28)",Icon:S0},{img:"/assets/images/banner2.png",label:"团队分享会-设计赋能",accent:"#FE952C",accentBg:"rgba(254, 149, 44, 0.12)",accentBorder:"rgba(254, 149, 44, 0.30)",Icon:u1},{img:"/assets/images/banner3.png",label:"设计复盘",accent:"#456CFF",accentBg:"rgba(69, 108, 255, 0.12)",accentBorder:"rgba(69, 108, 255, 0.30)",Icon:zv},{img:"/assets/images/banner4.png",label:"设计扩展",accent:"#f472b6",accentBg:"rgba(244,114,182,0.12)",accentBorder:"rgba(244,114,182,0.28)",Icon:E0},{img:"/assets/images/banner5.png",label:"设计获奖",accent:"#FFEB12",accentBg:"rgba(255,235,18,0.12)",accentBorder:"rgba(255,235,18,0.28)",Icon:_1}],M=(T,U=!1)=>{if(T!==e){if(U){t(T),f(!1);return}c||(f(!0),setTimeout(()=>{t(T),f(!1)},350))}};V.useEffect(()=>{if(s)return;const T=setInterval(()=>{f(!0),setTimeout(()=>{t(U=>(U+1)%_.length),f(!1)},320)},3800);return()=>clearInterval(T)},[s,_.length]);const w=T=>{const U=i.current.getBoundingClientRect(),F=T.clientX-U.left,D=T.clientY-U.top,B=F/U.width-.5,P=D/U.height-.5;i.current.style.transform=`perspective(900px) rotateY(${B*12}deg) rotateX(${-P*10}deg) scale3d(1.02,1.02,1.02)`,i.current.style.setProperty("--mouse-x",`${F}px`),i.current.style.setProperty("--mouse-y",`${D}px`);const C=Math.sqrt(B*B+P*P),j=Math.min(1,Math.max(0,C*2));i.current.style.setProperty("--glow-opacity",`${.4+j*.6}`);const W=200+C*550;i.current.style.setProperty("--border-glow-radius",`${W}px`)},S=()=>{i.current.style.transform="perspective(900px) rotateY(0) rotateX(0) scale3d(1,1,1)",o(!1),i.current.style.setProperty("--mouse-x","-999px"),i.current.style.setProperty("--mouse-y","-999px"),i.current.style.setProperty("--glow-opacity","0"),i.current.style.setProperty("--border-glow-radius","260px")},v=_[e],k=v.Icon,N=x?"16/9":"16/10";return l.jsxs("div",{ref:i,onMouseMove:w,onMouseEnter:()=>o(!0),onMouseLeave:S,className:"relative rounded-2xl cursor-pointer w-full !min-w-0",style:{transition:"transform 0.15s ease-out, background 0.4s ease",transformStyle:"preserve-3d","--accent-rgb":y(v.accent),background:`

        linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02)) padding-box, 
        radial-gradient(circle var(--border-glow-radius, 260px) at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(var(--accent-rgb), 1) 0%, rgba(var(--accent-rgb), 0.4) 50%, transparent 100%) border-box
      `,border:"2px solid transparent",boxShadow:"0 30px 80px rgba(0,0,0,0.5)",maxWidth:"800px",margin:"0 auto",aspectRatio:N,isolation:"isolate"},children:[l.jsx("div",{className:"absolute pointer-events-none",style:{inset:"-20px",borderRadius:"36px",background:"radial-gradient(circle 60px at calc(var(--mouse-x, -999px) + 20px) calc(var(--mouse-y, -999px) + 20px), rgba(var(--accent-rgb), calc(var(--glow-opacity, 0) * 0.85)), transparent 100%)",zIndex:-1,mixBlendMode:"screen",filter:"blur(6px)"}}),l.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-[14px]",style:{transform:"translateZ(0)",willChange:"transform",WebkitMaskImage:"-webkit-radial-gradient(white, black)"},children:[_.map((T,U)=>l.jsxs("div",{className:"absolute inset-0 w-full h-full rounded-[14px] overflow-hidden",style:{opacity:U===e?c?0:1:0,transition:c?"opacity 0.3s ease":"none",transform:"translateZ(0)"},children:[l.jsx("div",{className:"absolute inset-0 skeleton-shimmer rounded-[14px]",style:{zIndex:0}}),l.jsx("img",{src:T.img,alt:T.label,className:"absolute inset-0 w-full h-full object-cover rounded-[14px]",style:{display:d[U]?"none":void 0},onLoad:()=>{const F=m.current[U];F&&(F.timer&&clearTimeout(F.timer),F.interval&&clearInterval(F.interval),delete m.current[U]),p(D=>{const B={...D};return delete B[U],B})},onError:()=>{if(d[U])return;p(D=>({...D,[U]:!0})),(()=>{const D=m.current[U]||{timer:null,interval:null,count:0},B=D.count;B<5?(D.count=B+1,D.timer=setTimeout(()=>{const P=document.querySelector(`[data-banner-idx="${U}"]`);P&&(P.src=T.img+"?_retry="+Date.now())},2e3*(B+1))):D.interval=setInterval(()=>{const P=document.querySelector(`[data-banner-idx="${U}"]`);P&&(P.src=T.img+"?_retry="+Date.now())},8e3),m.current[U]=D})()},"data-banner-idx":U}),d[U]&&l.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-8 rounded-[14px] cursor-pointer",style:{background:`linear-gradient(135deg, ${T.accent}18 0%, #05050a 100%)`,zIndex:1},onClick:()=>{const F=m.current[U];F&&(F.timer&&clearTimeout(F.timer),F.interval&&clearInterval(F.interval),delete m.current[U]),p(B=>{const P={...B};return delete P[U],P});const D=document.querySelector(`[data-banner-idx="${U}"]`);D&&(D.style.display="",D.src=T.img+"?_retry="+Date.now())},children:[l.jsx("p",{className:"text-sm text-center",style:{color:"rgba(255,255,255,0.5)"},children:"图片加载失败"}),l.jsx("p",{className:"text-xs text-center mt-2",style:{color:"rgba(255,255,255,0.35)"},children:"点击重试"})]})]},U)),l.jsx("div",{className:"absolute inset-0 z-10 cursor-pointer rounded-[14px]",onClick:T=>{const U=T.currentTarget.getBoundingClientRect(),D=T.clientX-U.left<U.width/2?(e-1+_.length)%_.length:(e+1)%_.length;M(D,!0)},style:{background:"linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(var(--accent-rgb),0.04) 100%)"}}),!x&&l.jsx("div",{className:"absolute top-0 left-0 right-0 z-20 flex items-center gap-2 px-4 py-3",style:{background:"rgba(0,0,0,0.28)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderBottom:"1px solid rgba(255,255,255,0.07)"},children:["#ff5f56","#ffbd2e","#27c93f"].map(T=>l.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:T,opacity:.85}},T))}),l.jsxs("div",{className:`absolute bottom-0 left-0 right-0 z-20 flex items-center ${x?"justify-center":"justify-between"} px-3.5 py-2.5`,style:{background:"rgba(0,0,0,0.28)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderTop:"1px solid rgba(255,255,255,0.07)"},children:[!x&&l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg",style:{background:v.accentBg,border:`1px solid ${v.accentBorder}`,transition:"background 0.4s, border 0.4s"},children:[l.jsx(k,{size:12,style:{color:v.accent}}),l.jsx("span",{className:"text-xs",style:{color:v.accent,fontWeight:600},children:v.label})]}),l.jsx("div",{className:"flex items-center gap-2",children:_.map((T,U)=>l.jsx("button",{onClick:()=>M(U),className:"relative overflow-hidden",style:{width:U===e?26:6,height:6,borderRadius:9999,background:U===e?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.3)",border:"none",padding:0,transition:"width 0.3s ease, background 0.3s ease",cursor:"pointer",position:"relative"},children:U===e&&l.jsx("span",{className:"absolute inset-0 rounded-full",style:{background:v.accent,width:"0%",animation:"progressFlow 3.2s linear forwards",height:"100%",left:0,top:0}})},U))})]})]})]})}function ew(){const i=V.useMemo(()=>["#00f0c8","#7c6ff7","#ff9ffc"],[]),[e,t]=V.useState(!1),s=()=>{const o=document.createElement("a");o.href="https://raw.githubusercontent.com/quweijia/file/main/1%E3%80%81UI%20%E4%B8%BB%E7%AE%A1-%E6%9B%B2%E7%BB%B4%E7%94%B2-15662796885.pdf",o.download="曲维甲-UI主管-简历.pdf",o.target="_blank",o.rel="noopener noreferrer",document.body.appendChild(o),o.click(),document.body.removeChild(o)};return l.jsxs("section",{id:"hero",className:"relative flex items-center overflow-visible md:overflow-hidden",style:{background:"radial-gradient(ellipse 100% 80% at 60% 10%, rgba(0,240,200,0.05) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(124,111,247,0.06) 0%, transparent 60%), #05050a",minHeight:"calc(100vh / var(--screen-scale))"},children:[l.jsx(ag,{colors:i,mouseForce:25,cursorSize:120,resolution:.5,autoDemo:!0,autoSpeed:.3,autoIntensity:1.5}),l.jsx(KM,{}),l.jsx("div",{className:"absolute left-0 right-0 h-px pointer-events-none z-10 opacity-30",style:{top:"35%",background:"linear-gradient(90deg,transparent,rgba(0,240,200,0.4),transparent)",animation:"scanline 6s ease-in-out infinite"}}),l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.025]",style:{backgroundImage:"linear-gradient(rgba(0,240,200,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,200,1) 1px,transparent 1px)",backgroundSize:"60px 60px"}}),l.jsxs("div",{className:"relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full",style:{paddingTop:"calc(5rem / var(--screen-scale))",paddingBottom:"calc(4rem / var(--screen-scale))"},children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-1 items-center",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full",style:{background:"rgba(0,240,200,0.06)",border:"1px solid rgba(0,240,200,0.18)"},children:[l.jsx("span",{className:"w-2 h-2 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 8px rgb(var(--c1))"}}),l.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgb(var(--c1))",letterSpacing:"0.16em",fontWeight:500},children:"LOOKING FOR GOOD JOB · 期待您的联系"})]}),l.jsxs("h1",{className:"mb-4",style:{fontSize:"clamp(3.2rem, 7vw, 5.5rem)",fontWeight:800,lineHeight:1.2,letterSpacing:"-0.03em",color:"#f0f4f8"},children:["Vic Qu",l.jsx("br",{}),l.jsx("span",{style:{background:"linear-gradient(135deg, rgb(var(--c1)) 0%, rgb(var(--c2)) 25%, rgb(var(--c3)) 50%, rgb(var(--c2)) 75%, rgb(var(--c1)) 100%)",backgroundSize:"200% 200%",backgroundRepeat:"no-repeat",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline",animation:"flowGradient 6s ease infinite"},children:"Full-Stack"}),l.jsx("br",{}),l.jsx("span",{style:{color:"rgba(255,255,255,0.15)",WebkitTextStroke:"1px rgba(255,255,255,0.2)"},children:"Designer"})]}),l.jsxs("p",{className:"mb-6",style:{fontSize:"1rem",color:"rgba(255,255,255,0.5)",lineHeight:1.7,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"clip"},children:["ENFJ · 全栈设计师 · 专注"," ",l.jsx(ZM,{words:["UI/UX Design","Design Systems","AI Design Workflow","Information Visualization","Full-Stack Implementation","Collaboration Enablement"]}),l.jsx("br",{}),"擅长从0到1搭建企业级设计系统，AI驱动设计提效",l.jsx("br",{}),"带领团队落地规模化政企产品"]}),l.jsx("div",{className:"flex gap-3 overflow-x-auto pb-2 mb-10 flex-nowrap",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:[{icon:l.jsx(S0,{size:11}),label:"原子组件规范落地"},{icon:l.jsx(jv,{size:11}),label:"响应式设计"},{icon:l.jsx(P1,{size:11}),label:"AI 设计赋能 "}].map(o=>l.jsxs("span",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm flex-shrink-0",style:{background:"rgba(255,255,255,0.08",border:"1px solid rgba(255,255,255,0.16)",color:"rgba(255,255,255,0.5)"},children:[l.jsx("span",{style:{color:"rgb(var(--c1))"},children:o.icon}),o.label]},o.label))}),l.jsxs("div",{className:"hidden md:flex flex-wrap items-center gap-4",children:[l.jsx("div",{className:"btn-wrapper",children:l.jsxs("button",{onClick:()=>{var o;return(o=document.getElementById("portfolio"))==null?void 0:o.scrollIntoView({behavior:"smooth"})},className:"btn",children:[l.jsx("svg",{className:"btn-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"})}),l.jsxs("div",{className:"txt-wrapper",children:[l.jsxs("div",{className:"txt-1 pl-[0px] pr-[12px] py-[0px]",style:{color:"rgba(var(--c1)",opacity:1,visibility:"visible",fontSize:"16px",lineHeight:"1.5",display:"block",position:"relative",zIndex:10},children:[l.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"查"}),l.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"看"}),l.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"作"}),l.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"品"})]}),l.jsxs("div",{className:"txt-2",children:[l.jsx("span",{className:"btn-letter",children:"查"}),l.jsx("span",{className:"btn-letter",children:"看"}),l.jsx("span",{className:"btn-letter",children:"作"}),l.jsx("span",{className:"btn-letter",children:"品"})]})]})]})}),l.jsxs("button",{onClick:()=>{var o;return(o=document.getElementById("contact"))==null?void 0:o.scrollIntoView({behavior:"smooth"})},className:"group flex items-center gap-2 px-6 py-2 rounded-3xl text-base transition-all duration-300 hover:scale-[1.02]",style:{border:"1px solid rgba(var(--c1),0.3)",color:"rgba(255,255,255,0.65)",background:"rgba(var(--c1),0.15)",boxShadow:"0 0 25px rgba(var(--c1),0.15), 0 5px 15px rgba(0,0,0,0.3)"},onMouseEnter:o=>{o.currentTarget.style.borderColor="rgba(var(--c1),0.5)",o.currentTarget.style.background="rgba(var(--c1),0.25)"},onMouseLeave:o=>{o.currentTarget.style.borderColor="rgba(var(--c1),0.3)",o.currentTarget.style.background="rgba(var(--c1),0.15)"},children:[l.jsx(T0,{size:14,className:"group-hover:animate-bounce group-hover:translate-y-0.5 transition-transform duration-300",style:{color:"rgb(var(--c1))"}}),l.jsx("span",{className:"transition-colors duration-300",style:{color:"rgb(var(--c1))"},children:"获取简历"})]})]})]}),l.jsxs("div",{className:"relative mt-[0px] md:mt-0",children:[l.jsx("div",{className:"absolute -z-10 w-96 h-96 rounded-full",style:{background:"radial-gradient(circle,rgba(0,240,200,0.08) 0%,transparent 70%)",filter:"blur(50px)",right:0,top:"50%",transform:"translateY(-50%)"}}),l.jsx("div",{className:"min-h-[320px] md:min-h-[400px] flex items-center justify-center",children:l.jsx($M,{})})]})]}),l.jsx("div",{className:"flex mt-12 mb-0 overflow-x-auto scrollbar-hide gap-[24px] w-screen relative left-1/2 -translate-x-1/2 pl-0 pr-6 md:static md:w-full md:translate-x-0 md:mx-0 md:max-w-none md:flex-wrap md:justify-between md:gap-y-12 md:overflow-x-visible",children:[{v:10,s:"+",label:"年设计经验"},{v:50,s:"+",label:"可视化大屏"},{v:5,s:"+",label:"企业级设计系统"},{v:32,s:"+",label:"团队赋能"},{v:4,s:"+",label:"已授权专利"},{v:60,s:"+",label:"上线产品"}].map(o=>l.jsxs("div",{className:"shrink-0 w-[120px] text-center md:w-auto",children:[l.jsx("div",{style:{fontSize:"2rem",fontWeight:800,color:"#f0f4f8",lineHeight:1},children:l.jsx(JM,{target:o.v,suffix:o.s})}),l.jsx("div",{className:"text-sm mt-1",style:{color:"rgba(255,255,255,0.6)",letterSpacing:"0.06em"},children:o.label})]},o.label))})]}),l.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-24 pointer-events-none",style:{background:"linear-gradient(transparent,#05050a)"}}),l.jsx(A0,{isOpen:e,onClose:()=>t(!1),onConfirm:s}),l.jsx("style",{children:`
      /* 全局隐藏滚动条 */
        ::-webkit-scrollbar {
          display: none !important;
        }
        html, body {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          overflow-x: hidden;
        }
        @keyframes scanline {
          0%,100% { top:15%; opacity:0; }
          30% { opacity:0.3; }
          50% { top:75%; opacity:0.15; }
          70% { opacity:0; }
        }
        @keyframes flowGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes progressFlow {
          0% { width: 0%; }
          100% { width: 100%; }
        }

/* ============================================== */
/* 🔥 最终版：悬停文字变白 + 动效超强强化 */
/* ============================================== */
.btn-wrapper {
  position: relative;
  display: inline-block;
}

.btn {
  --border-radius: 24px;
  --padding: 0px;
  --transition: 0.3s;
  --button-color: "rgba(var(--c1),0.15)";

  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6em 1.2em;
  font-family: "Poppins", "Inter", "Segoe UI", sans-serif;
  font-size: 1em;
  font-weight: 600;

  background-color: var(--button-color);
  box-shadow:
    inset 0px 1px 1px rgba(255, 255, 255, 0.2),
    inset 0px 2px 2px rgba(255, 255, 255, 0.15),
    inset 0px 4px 4px rgba(255, 255, 255, 0.1),
    0px -1px 1px rgba(0, 0, 0, 0.02),
    0px -2px 2px rgba(0, 0, 0, 0.03);

  border: solid 1px rgba(var(--c1), 0.3);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition:
    box-shadow var(--transition),
    border var(--transition),
    background-color var(--transition);
}

.btn::before {
  content: "";
  position: absolute;
  top: calc(0px - var(--padding));
  left: calc(0px - var(--padding));
  width: calc(100% + var(--padding) * 2);
  height: calc(100% + var(--padding) * 2);
  border-radius: calc(var(--border-radius) + var(--padding));
  pointer-events: none;
  background-image: linear-gradient(0deg, rgba(var(--c1), 0.2), rgba(var(--c1), 0.1));
  z-index: -1;
  transition: box-shadow var(--transition);
  
}

.btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  pointer-events: none;
  background-image: linear-gradient(
    0deg,
    #fff,
    rgba(var(--c1), 0.5),
    rgba(var(--c1), 0.2),
    transparent
  );
  opacity: 0;
  transition: opacity var(--transition);
}

/* ===================== 核心：文字动效超强强化 ===================== */
.btn-letter {
  position: relative;
  display: inline-block;
  color: rgb(var(--c1)); /* 基础色 */
  animation: letter-anim 1.5s ease-in-out infinite alternate;
  padding: 0 1px;
  transition: all var(--transition), color 0.3s ease !important;
}

@keyframes letter-anim {
  0% {
    text-shadow: 0 0 2px rgba(var(--c1), 0.02);
    transform: scale(1);
  }
  50% {
    text-shadow: 0 0 8px rgba(var(--c1), 0.06), 0 0 16px rgba(var(--c1), 0.05);
    color: rgba(var(--c1), 0.6);
    transform: scale(0.9);
  }
  100% {
    text-shadow: 0 0 2px rgba(var(--c1), 0.02);
    transform: scale(1);
  }
}

.btn-svg {
  width: 20px;
  height: 20px;
  fill: rgb(var(--c1));
  animation: flicker 1.5s linear infinite alternate;
  filter: drop-shadow(0 0 3px rgba(var(--c1), 0.6));
  transition: all var(--transition);
  margin-right: 0.5rem;
}
@keyframes flicker {
  50% {
    opacity: 0.5;
    filter: drop-shadow(0 0 6px rgba(var(--c1), 0.8));
  }
}

.txt-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5em;
  height: 24px;
  white-space: nowrap !important;
  overflow: hidden;
}
.txt-1, .txt-2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.txt-1 { animation: appear-anim 1s forwards; }
.txt-2 { opacity: 0; }
@keyframes appear-anim { 0%{opacity:0} 100%{opacity:1} }

.btn-letter:nth-child(1){ animation-delay: 0s; }
.btn-letter:nth-child(2){ animation-delay: 0.06s; }
.btn-letter:nth-child(3){ animation-delay: 0.12s; }
.btn-letter:nth-child(4){ animation-delay: 0.18s; }

/* ===================== 交互动效强化 ===================== */
.btn:hover {
  border-color: rgba(var(--c1), 0.8);
  background-color: rgba(var(--c1), 0.1);
}
.btn:hover .btn-letter {
  color: #ffffff !important; /* 🔥 核心修改：文字变白色 */
  animation-duration: 0.6s;
  text-shadow: 
    0 0 12px rgba(var(--c1), 0.6), 
    0 0 24px rgba(var(--c1), 0.5),
    0 0 32px rgba(var(--c1), 0.3);
  transform: scale(1.15);
}
.btn:hover::after { opacity: 0.8; }
.btn:hover .btn-svg {
  fill: #ffffff; /* 🔥 图标也变白 */
  filter: drop-shadow(0 0 8px rgba(var(--c1), 1));
}

.btn:active {
  border-color: rgba(var(--c1), 1);
  background-color: rgba(var(--c1), 0.15);
}
.btn:active .btn-letter {
  color: #ffffff !important;
  text-shadow: 0 0 15px rgba(var(--c1), 1), 0 0 30px rgba(var(--c1), 0.9);
  animation: none;
  transform: scale(1.2);
}

.btn:focus .btn-letter {
  animation: focused-letter-anim 1s ease-in-out forwards;
}
@keyframes focused-letter-anim {
  50% {
    transform: scale(1.4);
    filter: blur(2px) brightness(200%);
    text-shadow: 0 0 20px rgb(var(--c1)), 0 0 40px rgb(var(--c1));
  }
}
      `})]})}const es=new IntersectionObserver(i=>{i.forEach(e=>{var t,s;e.isIntersecting&&((s=(t=e.target).__onVisible)==null||s.call(t),es.unobserve(e.target))})},{threshold:.1});function tw(i=.08){const e=V.useRef(null),[t,s]=V.useState(!1);return V.useEffect(()=>{const o=e.current;if(o)return o.__onVisible=()=>s(!0),es.observe(o),()=>es.unobserve(o)},[]),{ref:e,vis:t}}function nw({pct:i,color:e,delay:t=0,light:s=!1}){const[o,c]=V.useState(0),f=V.useRef(null),[d,p]=V.useState(!1);return V.useEffect(()=>{const m=f.current;if(m)return m.__onVisible=()=>{setTimeout(()=>c(i),t),setTimeout(()=>p(!0),t+800)},es.observe(m),()=>es.unobserve(m)},[i,t]),l.jsxs("div",{ref:f,className:"relative h-[6px] rounded-full",style:{background:s?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.06)",willChange:"auto"},children:[l.jsx("div",{className:"absolute inset-y-0 left-0 rounded-full",style:{width:`${o}%`,transition:`width 0.8s cubic-bezier(0.4,0,0.2,1) ${t}ms`,background:`linear-gradient(90deg,${e}60,${e})`,boxShadow:d&&!s?`0 0 8px ${e}80, 0 0 4px ${e}`:"none",willChange:"width",transform:"translateZ(0)"}}),l.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none",style:{left:`${o}%`,width:12,height:12,borderRadius:"50%",background:e,boxShadow:d?`0 0 0 3px ${e}30, 0 0 14px 4px ${e}90, 0 0 28px 8px ${e}40`:"none",transition:`left 0.8s cubic-bezier(0.4,0,0.2,1) ${t}ms`,opacity:d?1:0,willChange:"left, opacity",transform:"translateZ(0)"}})]})}function rw({num:i,cat:e,sub:t,pct:s,color:o,tools:c,idx:f}){const[d,p]=V.useState(!1),[m,x]=V.useState(0),b=V.useRef(null),y=V.useRef(0);return V.useEffect(()=>{const _=b.current;if(_)return _.__onVisible=()=>{const M=f*60,w=800;setTimeout(()=>{let S=0;const v=performance.now(),k=N=>{const T=N-v,U=Math.min(T/w,1),F=1-Math.pow(1-U,3);S=Math.round(s*F),x(S),U<1&&(y.current=requestAnimationFrame(k))};y.current=requestAnimationFrame(k)},M),setTimeout(()=>p(!0),M+w)},es.observe(_),()=>{es.unobserve(_),cancelAnimationFrame(y.current)}},[s,f]),l.jsx("div",{ref:b,className:"relative py-7 transition-all duration-300",style:{borderTop:"0px solid rgba(255,255,255,0.07)",willChange:"auto"},children:l.jsxs("div",{className:"relative flex flex-wrap items-start gap-0 lg:gap-0",children:[l.jsx("div",{className:"shrink-0 w-8 hidden md:block",style:{paddingTop:3},children:l.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:`${o}80`,letterSpacing:"0.12em",fontVariantNumeric:"tabular-nums"},children:i})}),l.jsxs("div",{className:"shrink-0",style:{width:180},children:[l.jsx("p",{style:{fontSize:"0.9375rem",fontWeight:700,color:"#f0f4f8",lineHeight:1.2},children:e}),l.jsx("p",{className:"mt-1",style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.4)",letterSpacing:"0.04em"},children:t})]}),l.jsxs("div",{className:"flex-1 flex flex-col gap-3 mt-2 min-w-[300px]",children:[l.jsxs("div",{className:"flex items-center gap-5",children:[l.jsx("div",{className:"flex-1",children:l.jsx(nw,{pct:s,color:o,delay:f*120})}),l.jsx("span",{style:{fontSize:"1.0625rem",fontWeight:800,color:d?o:"rgba(255,255,255,0.45)",transition:"color 0.6s ease-out",minWidth:38,textAlign:"right",fontVariantNumeric:"tabular-nums",willChange:"color"},children:m})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5",style:{opacity:d?1:.4,transition:"opacity 0.6s ease-out",willChange:"opacity"},children:c.map(_=>l.jsx("span",{className:"px-2.5 py-1 rounded text-xs",style:{background:d?`${o}10`:"rgba(255,255,255,0.04)",border:`1px solid ${d?`${o}22`:"rgba(255,255,255,0.06)"}`,color:d?o:"rgba(255,255,255,0.3)",transition:"all 0.1s ease-out"},children:_},_))})]})]})})}function iw(){const{ref:i,vis:e}=tw(.04),{theme:t}=Zs(),s=[{num:"01",cat:"UI / UX Design",sub:l.jsxs(l.Fragment,{children:["项目全周期管控",l.jsx("br",{}),"团队资源调度",l.jsx("br",{}),"跨部门协同"]}),pct:96,color:t.cyan,tools:["Figma","Principle","PPT Design","Master Go","Sketch","Protopie","Hype 4","Framer"]},{num:"02",cat:"AI Design Workflow",sub:l.jsxs(l.Fragment,{children:["提示生成",l.jsx("br",{}),"自动化",l.jsx("br",{}),"知识沉淀赋能"]}),pct:90,color:t.purple,tools:["Open Claw","Figma MCP","Pencil","Vibma","Stitch","Stable Diffusion","Comfy-UI"]},{num:"03",cat:"Visual & Motion",sub:l.jsxs(l.Fragment,{children:["可视化动效输出",l.jsx("br",{}),"Logo",l.jsx("br",{}),"Loading"]}),pct:86,color:t.pink,tools:["After Effects","Lotties","Rive","Spline","Blender"]},{num:"04",cat:"Front-End Prototyping",sub:l.jsxs(l.Fragment,{children:["产品元件库",l.jsx("br",{}),"原型 Demo",l.jsx("br",{}),"GIS可视化适配"]}),pct:82,color:"#34d399",tools:["Axure","Amap GIS","Draw.io","Swift UI","TRAE","Cursor"]},{num:"05",cat:"Presentation Event",sub:l.jsxs(l.Fragment,{children:["发布会 PPT 设计",l.jsx("br",{}),"团队知识体系搭建",l.jsx("br",{}),"设计专利输出"]}),pct:80,color:"#fb923c",tools:["PowerPoint","Keynote","Launch Design","Power BI","Patent"]}];return l.jsxs("section",{id:"skills",ref:i,className:"relative overflow-hidden",style:{background:"var(--bg)",padding:"80px 0 0px"},children:[l.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(80px,16vw,200px)",fontWeight:900,lineHeight:1,color:"rgba(255,255,255,0.08)",letterSpacing:"0.05em"},children:"SKILLS"}),l.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 px-[40px] py-[0px]",children:[l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[32px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)",willChange:"opacity, transform"},children:[l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[l.jsx("span",{className:"text-xm tracking-widest",style:{color:t.cyan,letterSpacing:"0.2em",fontWeight:600},children:"CAPABILITIES"}),l.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${t.cyan}33,transparent)`}})]}),l.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:"#f0f4f8",lineHeight:1.05,letterSpacing:"-0.04em"},children:"技能全景"})]}),l.jsx("div",{className:"lg:max-w-xs",children:l.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(255,255,255,0.32)",lineHeight:1.85},children:["10 年全栈设计积累",l.jsx("br",{}),"能力方向 + 核心产出 + 工具支撑",l.jsx("br",{}),"三维协同，驱动端到端设计交付"]})})]}),l.jsxs("div",{className:"mb-20",children:[s.map((o,c)=>l.jsx("div",{className:o.cat==="Front-End Prototyping"||o.cat==="Presentation Event"?"hidden md:block":"",children:l.jsx(rw,{...o,idx:c})},o.num)),l.jsx("div",{style:{borderTop:"0px solid rgba(255,255,255,0.07)"}})]})]})]})}function og({src:i,alt:e,className:t,style:s,maxRetries:o=5,retryDelay:c=2e3}){const[f,d]=V.useState(0),[p,m]=V.useState(!1),x=V.useRef(),b=V.useRef(),y=V.useRef(null),_=V.useRef(null),M=/\.gif($|\?)/.test(i),w=/\.mp4($|\?)/i.test(i),S=f>0?`${i}${i.includes("?")?"&":"?"}_retry=${f}`:i,v=!p&&f>=o,k=V.useCallback(()=>{x.current&&(clearTimeout(x.current),x.current=void 0),b.current&&(clearInterval(b.current),b.current=void 0)},[]);V.useEffect(()=>k,[k]),V.useEffect(()=>{if(M&&p&&y.current){const F=y.current,D=F.src;F.src="",requestAnimationFrame(()=>{F.src=D})}},[M,p]),V.useEffect(()=>{if(!w)return;const F=()=>{_.current&&_.current.play().catch(()=>{})},D=()=>{F()};return document.addEventListener("touchstart",D,{once:!0}),document.addEventListener("click",D,{once:!0}),setTimeout(F,300),()=>{document.removeEventListener("touchstart",D),document.removeEventListener("click",D)}},[w]),V.useEffect(()=>{if(!(p||f===0)){if(f<o){const F=c*(f+1);x.current=setTimeout(()=>{d(D=>D+1)},F);return}return b.current=setInterval(()=>{d(F=>F+1)},5e3),()=>{b.current&&(clearInterval(b.current),b.current=void 0)}}},[p,f,o,c]),V.useEffect(()=>{p&&k()},[p,k]);const N=()=>{d(F=>F+1)},T=()=>{m(!0)},U=()=>{k(),d(1)};return w?l.jsxs("div",{className:t,style:s,children:[!p&&!v&&l.jsx("div",{className:"absolute inset-0 skeleton-shimmer"}),l.jsx("video",{ref:_,src:S,className:"w-full h-full object-cover object-top",style:{display:v?"none":void 0},autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",onLoadedData:T,onError:N}),v&&l.jsx(s0,{onRetry:U})]}):l.jsxs("div",{className:t,style:s,children:[!p&&!v&&l.jsx("div",{className:"absolute inset-0 skeleton-shimmer"}),l.jsx("img",{ref:y,src:S,alt:e,className:"w-full h-full object-cover object-top",style:{display:v?"none":void 0,...M?{}:p?{}:{opacity:0,transition:"opacity 0.3s ease"}},onLoad:T,onError:N,loading:M?"eager":"lazy"}),v&&l.jsx(s0,{onRetry:U})]})}function s0({onRetry:i}){return l.jsx("div",{className:"absolute inset-0 flex items-center justify-center",style:{background:"rgba(255,255,255,0.04)",cursor:"pointer",zIndex:1},onClick:i,children:l.jsxs("div",{className:"text-center",children:[l.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"rgba(255,255,255,0.2)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l.jsx("polyline",{points:"21 15 16 10 5 21"})]}),l.jsx("p",{className:"text-[10px] mt-1",style:{color:"rgba(255,255,255,0.25)"},children:"加载失败 · 点击重试"})]})})}function a0(i,e){if(i.startsWith("#")){const t=Math.round(e*255).toString(16).padStart(2,"0");return`${i}${t}`}return i.startsWith("rgb(")?i.replace(/^rgb\((.+)\)$/,(t,s)=>`rgba(${s},${e})`):i}function sw({onItemClick:i,paused:e}){const t=V.useRef(null),[s,o]=V.useState(0),c=V.useRef(0),f=V.useRef(!1),d=V.useRef(),p=396,m=V.useCallback(()=>{d.current&&clearInterval(d.current),!e&&(d.current=setInterval(()=>{o(y=>{const _=(y+1)%zs.length;return c.current=_,f.current=!0,t.current&&t.current.scrollTo({left:_*p,behavior:"smooth"}),setTimeout(()=>{f.current=!1},500),_})},4e3))},[p,e]),x=V.useCallback(()=>{if(!f.current&&t.current){const{scrollLeft:y}=t.current,_=Math.round(y/p);_!==c.current&&_>=0&&_<zs.length&&(c.current=_,o(_),m())}},[p,m]);V.useEffect(()=>{const y=t.current;return y&&(y.addEventListener("scroll",x),x()),()=>{y&&y.removeEventListener("scroll",x)}},[x]);const b=V.useCallback(y=>{c.current=y,f.current=!0,t.current&&t.current.scrollTo({left:y*p,behavior:"smooth"}),setTimeout(()=>{f.current=!1},500)},[p]);return V.useEffect(()=>(m(),()=>{d.current&&clearInterval(d.current)}),[m]),V.useEffect(()=>{e||m()},[e,m]),l.jsxs("div",{className:"relative -mx-6 lg:-mx-10",children:[l.jsx("div",{ref:t,className:"flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 snap-x snap-mandatory",style:{scrollBehavior:"smooth"},children:zs.map((y,_)=>l.jsx("div",{className:"shrink-0 w-[90vw] max-w-[380px] snap-center",children:l.jsxs("div",{className:"relative rounded-2xl overflow-hidden cursor-pointer",style:{background:"white",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 4px 24px rgba(0,0,0,0.06)"},onClick:()=>i(y),children:[l.jsxs("div",{className:"relative overflow-hidden aspect-video",style:{background:y.bg},children:[l.jsx(og,{src:y.images[0],alt:y.name,className:"absolute inset-0 w-full h-full object-cover"}),l.jsx("div",{className:"hidden absolute top-3 left-3",children:l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(255,255,255,0.85)",border:`1px solid ${y.color}22`,color:y.color,backdropFilter:"blur(8px)",fontWeight:600},children:y.idx})})]}),l.jsxs("div",{className:"p-4 py-6 md:py-4",children:[l.jsxs("div",{className:"flex items-start justify-between gap-2 mb-2",children:[l.jsxs("div",{children:[l.jsx("h3",{style:{fontSize:"0.9375rem",fontWeight:800,color:"#0c0b18",lineHeight:1.3},children:y.name}),l.jsx("p",{className:"text-xs mt-0.5",style:{color:y.color,fontWeight:600,opacity:.8},children:y.role})]}),l.jsx("span",{className:"hidden shrink-0 w-7 h-7 rounded-lg flex items-center justify-center",style:{background:`${y.color}10`,border:`1px solid ${y.color}20`},children:l.jsx(af,{size:12,style:{color:y.color}})})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5 mb-3",children:y.tags.map(M=>l.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:`${y.color}0e`,border:`1px solid ${y.color}20`,color:y.color,fontWeight:500},children:M},M))}),l.jsx("p",{className:"text-xs mb-3 line-clamp-3",style:{color:"rgba(12,11,24,0.5)",lineHeight:1.7},children:y.desc}),l.jsx("div",{className:"grid grid-cols-2 gap-2",children:y.metrics.slice(0,4).map(M=>l.jsxs("div",{className:"rounded-lg p-2.5",style:{background:`${y.color}08`,border:`1px solid ${y.color}12`},children:[l.jsxs("div",{className:"flex items-baseline gap-0.5",children:[l.jsx("span",{style:{fontSize:"1.125rem",fontWeight:900,color:"#0c0b18",lineHeight:1},children:M.value}),M.unit&&l.jsx("span",{style:{fontSize:"0.625rem",fontWeight:700,color:y.color},children:M.unit})]}),l.jsx("p",{className:"mt-1",style:{fontSize:"0.625rem",color:"rgba(12,11,24,0.35)",lineHeight:1.3},children:M.label})]},M.label))}),l.jsxs("div",{className:"mt-3 rounded-lg p-3",style:{background:`${y.color}08`,border:`1px solid ${y.color}14`},children:[l.jsxs("div",{className:"flex items-center gap-1.5",style:{color:y.color},children:[l.jsx(qa,{size:10}),l.jsx("span",{className:"text-[10px] tracking-wider font-semibold",children:"AI APPLICATION"})]}),l.jsx("p",{className:"text-xs mt-1.5 line-clamp-2",style:{color:"rgba(12,11,24,0.45)",lineHeight:1.6},children:y.aiNote})]})]})]})},y.idx))}),l.jsx("div",{className:"flex justify-center gap-1.5 mt-4",children:zs.map((y,_)=>{const M=zs[s].color;return l.jsx("button",{onClick:()=>b(_),className:"relative overflow-hidden",style:{width:_===s?26:6,height:6,borderRadius:9999,background:_===s?a0(M,.12):a0(M,.2),border:"none",padding:0,transition:"width 0.3s ease, background 0.3s ease",cursor:"pointer",position:"relative"},children:_===s&&l.jsx("span",{className:"absolute inset-0 rounded-full",style:{background:M.startsWith("rgb(")?M.replace("rgb(","rgba(").replace(")",",1)"):M,width:"0%",animation:"progressFlow 3.2s linear forwards",height:"100%",left:0,top:0}})},_)})})]})}function lg(i=0){const e=V.useRef(null),[t,s]=V.useState(!1);return V.useEffect(()=>{const o=new IntersectionObserver(([c])=>{c.isIntersecting&&(setTimeout(()=>s(!0),i),o.disconnect())},{threshold:.06});return e.current&&o.observe(e.current),()=>o.disconnect()},[i]),{ref:e,vis:t}}function cg({steps:i,color:e}){return l.jsx("div",{className:"flex flex-wrap items-center gap-1",children:i.map((t,s)=>l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("span",{className:"px-2.5 py-1 rounded text-xs",style:{background:`${e}10`,border:`1px solid ${e}18`,color:e,fontWeight:500},children:t}),s<i.length-1&&l.jsx(bv,{size:10,style:{color:"rgba(0,0,0,0.2)"}})]},t))})}function ug({value:i,unit:e,label:t,color:s}){return l.jsxs("div",{className:"rounded-2xl p-4 flex flex-col gap-1",style:{background:"white",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 2px 12px rgba(0,0,0,0.05)"},children:[l.jsxs("div",{className:"flex items-baseline gap-0.5",children:[l.jsx("span",{style:{fontSize:"1.75rem",fontWeight:900,color:"#0c0b18",lineHeight:1},children:i}),e&&l.jsx("span",{style:{fontSize:"0.875rem",fontWeight:700,color:s},children:e})]}),l.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(12,11,24,0.38)",letterSpacing:"0.06em",lineHeight:1.4},children:t})]})}function dg({type:i,color:e}){return i==="city"?l.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsx("defs",{children:l.jsxs("radialGradient",{id:"cv1",cx:"60%",cy:"40%",r:"60%",children:[l.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),l.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),l.jsx("rect",{width:"320",height:"200",fill:"url(#cv1)"}),[30,70,110,150,190,230,270,310].map(t=>l.jsx("line",{x1:t,y1:"0",x2:t,y2:"200",stroke:e,strokeOpacity:"0.07",strokeWidth:"1"},t)),[25,55,85,115,145,175].map(t=>l.jsx("line",{x1:"0",y1:t,x2:"320",y2:t,stroke:e,strokeOpacity:"0.07",strokeWidth:"1"},t)),l.jsx("path",{d:"M20 170 C60 130 110 110 160 100 S240 70 300 40",fill:"none",stroke:e,strokeWidth:"2.5",strokeOpacity:"0.7",strokeDasharray:"7 4"}),[[20,170],[160,100],[300,40]].map(([t,s],o)=>l.jsxs("g",{children:[l.jsx("circle",{cx:t,cy:s,r:"14",fill:e,fillOpacity:"0.08",stroke:e,strokeOpacity:"0.35",strokeWidth:"1.5"}),l.jsx("circle",{cx:t,cy:s,r:"4",fill:e})]},o)),l.jsx("rect",{x:"190",y:"48",width:"44",height:"76",rx:"8",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5"}),[56,64,72,80,88,96,104].map(t=>l.jsx("rect",{x:"196",y:t,width:t===56?30:22,height:"4",rx:"2",fill:e,fillOpacity:"0.12"},t))]}):i==="chart"?l.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsx("defs",{children:l.jsxs("radialGradient",{id:"cv2",cx:"40%",cy:"30%",r:"60%",children:[l.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),l.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),l.jsx("rect",{width:"320",height:"200",fill:"url(#cv2)"}),[20,60,100,140,180,220,260,300].map(t=>l.jsx("line",{x1:t,y1:"0",x2:t,y2:"200",stroke:e,strokeOpacity:"0.06",strokeWidth:"1"},t)),[20,60,100,140,180].map(t=>l.jsx("line",{x1:"0",y1:t,x2:"320",y2:t,stroke:e,strokeOpacity:"0.06",strokeWidth:"1"},t)),l.jsxs("g",{children:[l.jsx("rect",{x:"30",y:"30",width:"80",height:"36",rx:"8",fill:e,fillOpacity:"0.25",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),l.jsx("rect",{x:"36",y:"42",width:"40",height:"3",rx:"1.5",fill:e,fillOpacity:"0.8"}),l.jsx("rect",{x:"30",y:"85",width:"70",height:"32",rx:"6",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),l.jsx("rect",{x:"36",y:"95",width:"35",height:"2.5",rx:"1.25",fill:e,fillOpacity:"0.6"})]}),l.jsxs("g",{children:[l.jsx("rect",{x:"135",y:"30",width:"100",height:"80",rx:"12",fill:"none",stroke:e,strokeOpacity:"0.35",strokeWidth:"1.5"}),l.jsx("rect",{x:"135",y:"30",width:"100",height:"28",rx:"12",fill:e,fillOpacity:"0.15"}),l.jsx("circle",{cx:"150",cy:"44",r:"4",fill:e,fillOpacity:"0.7"}),l.jsx("circle",{cx:"162",cy:"44",r:"4",fill:e,fillOpacity:"0.4"}),l.jsx("circle",{cx:"174",cy:"44",r:"4",fill:e,fillOpacity:"0.25"}),l.jsx("rect",{x:"142",y:"68",width:"50",height:"3",rx:"1.5",fill:e,fillOpacity:"0.5"}),l.jsx("rect",{x:"142",y:"78",width:"70",height:"3",rx:"1.5",fill:e,fillOpacity:"0.3"}),l.jsx("rect",{x:"142",y:"88",width:"60",height:"3",rx:"1.5",fill:e,fillOpacity:"0.3"})]}),l.jsxs("g",{children:[l.jsx("circle",{cx:"260",cy:"45",r:"8",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),l.jsx("circle",{cx:"260",cy:"75",r:"12",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),l.jsx("circle",{cx:"260",cy:"110",r:"16",fill:"none",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5"}),l.jsx("rect",{x:"245",y:"135",width:"30",height:"30",rx:"6",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),l.jsx("rect",{x:"250",y:"140",width:"20",height:"20",rx:"4",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),l.jsx("rect",{x:"255",y:"145",width:"10",height:"10",rx:"2",fill:e,fillOpacity:"0.4"})]}),l.jsx("path",{d:"M115 48 L135 48",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5",strokeDasharray:"4 3"}),l.jsx("path",{d:"M235 70 L245 70",fill:"none",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5",strokeDasharray:"4 3"}),l.jsx("path",{d:"M185 110 L245 110",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5",strokeDasharray:"4 3"}),[[55,170],[160,175],[270,165]].map(([t,s],o)=>l.jsxs("g",{children:[l.jsx("circle",{cx:t,cy:s,r:"10",fill:e,fillOpacity:"0.08",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5"}),l.jsx("circle",{cx:t,cy:s,r:"3",fill:e,fillOpacity:"0.7"})]},o))]}):l.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsx("defs",{children:l.jsxs("radialGradient",{id:"cv3",cx:"50%",cy:"50%",r:"60%",children:[l.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),l.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),l.jsx("rect",{width:"320",height:"200",fill:"url(#cv3)"}),l.jsx("rect",{x:"16",y:"16",width:"288",height:"28",rx:"6",fill:e,fillOpacity:"0.1",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("rect",{x:"30",y:"24",width:"80",height:"12",rx:"3",fill:e,fillOpacity:"0.5"}),l.jsx("rect",{x:"240",y:"24",width:"50",height:"12",rx:"3",fill:e,fillOpacity:"0.3"}),l.jsxs("g",{children:[l.jsxs("g",{children:[l.jsx("rect",{x:"16",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("rect",{x:"28",y:"95",width:"12",height:"12",rx:"2",fill:e,fillOpacity:"0.35"}),l.jsx("rect",{x:"44",y:"82",width:"12",height:"25",rx:"2",fill:e,fillOpacity:"0.45"}),l.jsx("rect",{x:"60",y:"68",width:"12",height:"39",rx:"2",fill:e,fillOpacity:"0.55"}),l.jsx("rect",{x:"76",y:"58",width:"12",height:"49",rx:"2",fill:e,fillOpacity:"0.65"})]}),l.jsxs("g",{children:[l.jsx("rect",{x:"115",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("circle",{cx:"160",cy:"82",r:"22",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5"}),l.jsx("circle",{cx:"160",cy:"82",r:"16",fill:"none",stroke:e,strokeOpacity:"0.35",strokeWidth:"2",strokeDasharray:"60 40"}),l.jsx("circle",{cx:"160",cy:"82",r:"5",fill:e,fillOpacity:"0.7"})]}),l.jsxs("g",{children:[l.jsx("rect",{x:"214",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("path",{d:"M228 100 L242 88 L256 92 L270 72 L284 76 L298 58",fill:"none",stroke:e,strokeOpacity:"0.6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),[[228,100],[242,88],[256,92],[270,72],[284,76],[298,58]].map(([t,s],o)=>l.jsx("circle",{cx:t,cy:s,r:"3",fill:e,fillOpacity:"0.75"},o))]}),l.jsxs("g",{children:[l.jsx("rect",{x:"16",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("rect",{x:"30",y:"135",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),l.jsx("rect",{x:"30",y:"135",width:"45",height:"6",rx:"3",fill:e,fillOpacity:"0.6"}),l.jsx("rect",{x:"30",y:"150",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),l.jsx("rect",{x:"30",y:"150",width:"52",height:"6",rx:"3",fill:e,fillOpacity:"0.5"}),l.jsx("rect",{x:"30",y:"165",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),l.jsx("rect",{x:"30",y:"165",width:"35",height:"6",rx:"3",fill:e,fillOpacity:"0.4"})]}),l.jsxs("g",{children:[l.jsx("rect",{x:"115",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("circle",{cx:"160",cy:"152",r:"18",fill:"none",stroke:e,strokeOpacity:"0.2",strokeWidth:"4"}),l.jsx("circle",{cx:"160",cy:"152",r:"18",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"4",strokeDasharray:"70 43"}),l.jsx("circle",{cx:"160",cy:"152",r:"8",fill:e,fillOpacity:"0.12"}),l.jsx("rect",{x:"150",y:"148",width:"20",height:"3",rx:"1.5",fill:e,fillOpacity:"0.6"})]}),l.jsxs("g",{children:[l.jsx("rect",{x:"214",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("rect",{x:"224",y:"132",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),l.jsx("rect",{x:"230",y:"135",width:"30",height:"4",rx:"2",fill:e,fillOpacity:"0.5"}),l.jsx("rect",{x:"224",y:"148",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),l.jsx("rect",{x:"230",y:"151",width:"40",height:"4",rx:"2",fill:e,fillOpacity:"0.45"}),l.jsx("rect",{x:"224",y:"164",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),l.jsx("rect",{x:"230",y:"167",width:"25",height:"4",rx:"2",fill:e,fillOpacity:"0.4"})]})]}),l.jsxs("g",{children:[l.jsx("circle",{cx:"20",cy:"20",r:"4",fill:e,fillOpacity:"0.4"}),l.jsx("circle",{cx:"300",cy:"20",r:"4",fill:e,fillOpacity:"0.4"}),l.jsx("circle",{cx:"20",cy:"180",r:"4",fill:e,fillOpacity:"0.4"}),l.jsx("circle",{cx:"300",cy:"180",r:"4",fill:e,fillOpacity:"0.4"})]})]})}const zs=[{idx:"01",color:"#3366ff",bg:"#f0eeff",vizType:"chart",name:"浪潮智慧建筑原子组件库",role:"Design System Lead / 项目负责人",tags:["B端","SaaS","变体设计"],desc:"从0-1主导企业级设计系统建设，基于原子设计理论（Atomic Design） 体系化搭建企业级 PC 端组件库，累计沉淀 200+ 业务组件，覆盖智慧园区、智慧工地、建筑节能三大核心产品线，形成统一、可扩展、可落地的设计规范与交互标准。组件库提供多状态、多主题、多尺寸的丰富变体配置，支持自动布局、响应式适配等原型化能力，产品经理复用率提升至 91%。",images:["/assets/images/sjgf1.png","/assets/images/sjgf2.png","/assets/images/sjgf3.png","/assets/images/sjgf4.png","/assets/images/sjgf5.png"],process:["组件梳理","原子拆分","变体设计","自动布局","文档输出","团队赋能","持续迭代"],aiNote:"GitHub Copilot 辅助梳理 Figma 组件类型；使用 Vibma + Cursor MCP 自动检查校验组件样式、命名、状态统一性，快速排查漏洞，后期维护成本大幅降低；AI 批量生成线性 / 面性图标，统一视觉风格，再微调落地，告别逐个绘制，图标库搭建提速 80%。",metrics:[{value:"200",unit:"+",label:"自动布局组件"},{value:"91",unit:"%",label:"产品复用率"},{value:"-65",unit:"%",label:"原型制作耗时"},{value:"2.5",unit:"×",label:"交付效率提升"}]},{idx:"02",color:"#015BC9",bg:"#BBDDFE",vizType:"city",name:"历城控股 OA 系统",role:"Design System Lead / 项目负责人",tags:["iOS/Android","Web PC","企业管理"],desc:"统筹历城控股集团OA全端升级改版，管理端到端设计交付，统一信息架构与视觉语言，面向集团 2000 + 内部员工的一站式办公管理平台，覆盖假勤、工资单、报销、审批等核心办公场景，优化流程后审批平均耗时减少 40%，移动端使用率提升至 85%。",images:["/assets/images/lckg1.png","/assets/images/lckg2.png","/assets/images/lckg3.png","/assets/images/lckg4.png","/assets/images/lckg5.png"],process:["需求调研","竞品分析","信息架构","交互设计","视觉规范","开发对接","迭代上线"],aiNote:"依托 Eva Design System 构建全链路色彩体系，自动生成色值梯度库，并通过 WCAG 对比度规范自动校验；批量产出移动端启动页与 PC 端登录页的动态视觉资产，同步输出浅色 / 深色双模式适配；通过 Midjourney + PS/Figma 协同产出 Banner 和运营海报；利用 AI 辅助生成 Logo 创意方向，实现高效的多端视觉与品牌资产落地。",metrics:[{value:"-40",unit:"%",label:"审批平均耗时"},{value:"85",unit:"%",label:"移动端使用率"},{value:"+50",unit:"%",label:"报销提交效率"},{value:"4.7",unit:"/5",label:"员工满意度评分"}]},{idx:"03",color:"#11AF95",bg:"#97F9E5",vizType:"net",name:"数据可视化大屏设计体系",role:"Data Visualization Designer",tags:["Irregular Design","HTML Demo"],desc:"主导30+ 政企大屏项目设计，提炼并沉淀方法论，擅长非常规尺寸自适应适配、专用数字字体设计、高质感动效设计等领域的核心方法论与最佳实践。针对超宽屏、非标拼接屏、异形分辨率、多设备协同等复杂场景，形成完整的大屏设计解决方案，并输出标准化设计指南、组件规范与案例库，发表并授权相关专利 4 篇。",images:["/assets/images/dap1.png","/assets/images/dap2.png","/assets/images/dap3.png","/assets/images/dap4.png","/assets/images/dap5.png"],process:["项目复盘","规律提炼","要点总结","文档输出","团队分享","迭代优化"],aiNote:"用 AI 一键生成科技感 / 政务风 / 金融风大屏配色方案，自动生成深色模式渐变、霓虹光效色卡，同步校验大屏远距离可视性，省去反复调试色值的时间，风格探索效率提升 60%；AI 快速输出多版布局草案，解决大屏排版难、信息失衡问题，布局设计周期缩短 50%。",metrics:[{value:"30",unit:"+",label:"覆盖项目数量"},{value:"-35",unit:"%",label:"大屏交付周期"},{value:"95",unit:"%",label:"设计一致性"},{value:" 6",unit:"+",label:"团队分享会"}]}];function aw({project:i,onClose:e}){return V.useEffect(()=>(i&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[i]),i?l.jsx(Vs,{children:l.jsx("div",{className:"fixed inset-0 z-50 flex items-center sm:items-center justify-center px-6 sm:px-8 pt-0 sm:pt-12 pb-0 sm:pb-8",style:{background:"rgba(5,5,12,0.70)",backdropFilter:"blur(16px)"},onClick:e,children:l.jsxs("div",{className:"relative w-full sm:max-w-4xl max-h-[86vh] overflow-y-auto rounded-2xl",style:{background:"white",border:"1px solid rgba(0,0,0,0.08)",boxShadow:"0 20px 100px rgba(0,0,0,0.3)"},onClick:t=>t.stopPropagation(),children:[l.jsx("div",{className:"sticky top-4 z-20 flex justify-end pr-4 h-0 m-0 overflow-visible",children:l.jsx("button",{onClick:e,className:"w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",style:{background:"rgba(255,255,255,0.95)",border:"1px solid rgba(0,0,0,0.1)",color:"#0c0b18",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:l.jsx(_i,{size:16})})}),l.jsxs("div",{className:"relative overflow-hidden -mt-16 hidden md:block",style:{height:"clamp(150px, 30vh, 600px)",background:i.bg},children:[l.jsx(dg,{type:i.vizType,color:i.color}),l.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg,transparent 40%,rgba(255,255,255,0.9) 100%)"}})]}),l.jsxs("div",{className:"px-[24px] sm:px-[40px] pt-6 pb-[20px]",children:[l.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[l.jsx("span",{className:"hidden md:inline-block",style:{fontSize:"3.5rem",fontWeight:900,color:`${i.color}18`,lineHeight:1,letterSpacing:"-0.05em"},children:i.idx}),l.jsxs("div",{className:"flex-1",children:[l.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,color:"#0c0b18",lineHeight:1.2,marginBottom:"0.5rem"},children:i.name}),l.jsx("p",{style:{fontSize:"1rem",color:i.color,fontWeight:600},children:i.role})]})]}),l.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:i.tags.map(t=>l.jsx("span",{className:"text-sm px-3 py-1.5 rounded-lg",style:{background:`${i.color}12`,border:`1px solid ${i.color}25`,color:i.color,fontWeight:600},children:t},t))}),l.jsx("p",{className:"mb-8",style:{fontSize:"1rem",color:"rgba(12,11,24,0.6)",lineHeight:1.85},children:i.desc}),l.jsxs("div",{className:"mb-8 hidden sm:block",children:[l.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"设计流程"}),l.jsx(cg,{steps:i.process,color:i.color})]}),l.jsxs("div",{className:"mb-8",children:[l.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"核心数据"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:i.metrics.map(t=>l.jsx(ug,{value:t.value,unit:t.unit,label:t.label,color:i.color},t.label))})]}),l.jsxs("div",{className:"rounded-2xl p-6 mb-8  hidden sm:block",style:{background:`${i.color}12`,border:`1px solid ${i.color}25`},children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",style:{color:i.color},children:[l.jsx(qa,{size:16}),l.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:700},children:"AI 应用"})]}),l.jsx("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.6)",lineHeight:1.85},children:i.aiNote})]}),i.images&&i.images.length>0&&l.jsxs("div",{className:"mb-8",children:[l.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"项目展示"}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:i.images.map((t,s)=>l.jsxs("div",{className:"rounded-2xl overflow-hidden relative",style:{background:`linear-gradient(135deg, ${i.color}08, ${i.color}15)`,border:`1px solid ${i.color}20`,aspectRatio:"16/9",gridColumn:s===0?"1 / -1":"auto"},children:[l.jsx("div",{className:"absolute inset-0 skeleton-shimmer rounded-2xl",style:{zIndex:0}}),l.jsx("img",{src:t,alt:`${i.name} - 项目展示 ${s+1}`,className:"w-full h-full object-cover",style:{display:"block"},onLoad:o=>{const c=o.currentTarget,f=c.parentElement;if(c.style.display="block",f){const d=f.querySelector(".img-error-fallback");d&&d.remove();const p=f.querySelector(".skeleton-shimmer");p&&p.remove()}},onError:o=>{const c=o.currentTarget,f=c.parentElement;if(f&&(c.style.display="none",!f.querySelector(".img-error-fallback"))){const d=document.createElement("div");d.className="img-error-fallback absolute inset-0 flex items-center justify-center",d.style.cssText=`background: linear-gradient(135deg, ${i.color}08, ${i.color}15); color: rgba(12,11,24,0.4); font-size: 0.875rem; text-align: center; padding: 1rem; cursor: pointer;`,d.textContent="图片加载失败 · 点击重试";let p=0,m=null,x=null;const b=()=>{m&&clearTimeout(m),x&&clearInterval(x),p<5?(p++,m=setTimeout(()=>{c.src=t+"?_retry="+Date.now()},2e3*p)):x=setInterval(()=>{c.src=t+"?_retry="+Date.now()},8e3)};d.onclick=()=>{p=0,m&&clearTimeout(m),x&&clearInterval(x),d.remove(),c.style.display="block",c.src=t+"?_retry="+Date.now()},f.appendChild(d),b()}}})]},s))})]}),l.jsx("div",{className:"flex items-center justify-center gap-4",children:l.jsxs("a",{href:"https://github.com/quweijia/file/blob/main/lckgoa.html",target:"_blank",rel:"noopener noreferrer",className:"w-full group flex items-center justify-center gap-2 rounded-xl text-sm transition-colors px-[24px] py-[12px]",onMouseEnter:t=>{t.currentTarget.style.background=`${i.color}50`},onMouseLeave:t=>{t.currentTarget.style.background=`${i.color}30`},style:{background:`${i.color}30`,color:i.color,fontWeight:600,textDecoration:"none",cursor:"pointer"},children:["Figma 原稿",l.jsx(lf,{size:14,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})})]})]})})}):null}function ow({p:i,rev:e,index:t,onOpenModal:s}){const{ref:o,vis:c}=lg(0),[f,d]=V.useState(!1);return l.jsx("div",{ref:o,className:"rounded-2xl overflow-hidden transition-all duration-700",style:{background:"white",boxShadow:f?"0 24px 80px rgba(0,0,0,0.13), 0 8px 24px rgba(0,0,0,0.07)":"0 4px 24px rgba(0,0,0,0.06)",opacity:c?1:0,transform:c?"translateY(0)":"translateY(32px)",border:"1px solid rgba(0,0,0,0.05)"},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:l.jsxs("div",{className:`grid 
          ${t===1?"lg:grid-cols-[3fr_7fr]":"lg:grid-cols-[7fr_3fr]"} 
          ${e?"lg:[grid-template-areas:'right_left']":""}
        `,children:[l.jsxs("div",{className:`${e?"lg:[grid-area:left]":""} px-[32px] pt-[32px] pb-[0px] sm:p-[32px]`,style:{borderRight:e?"none":"1px solid rgba(0,0,0,0.05)",borderLeft:e?"1px solid rgba(0,0,0,0.05)":"none"},children:[l.jsxs("div",{className:"flex items-start justify-between gap-4 mb-6",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"hidden md:inline",style:{fontSize:"3rem",fontWeight:900,color:`${i.color}20`,lineHeight:1,letterSpacing:"-0.05em"},children:i.idx}),l.jsxs("div",{children:[l.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:800,color:"#0c0b18",lineHeight:1.2},children:i.name}),l.jsx("p",{className:"mt-0.5",style:{fontSize:"0.8125rem",color:i.color,fontWeight:600},children:i.role})]})]}),l.jsx("button",{className:"shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200",style:{background:f?`${i.color}12`:"rgba(0,0,0,0.04)",border:`1px solid ${f?`${i.color}25`:"rgba(0,0,0,0.07)"}`},onClick:s,children:l.jsx(af,{size:14,style:{color:f?i.color:"rgba(0,0,0,0.3)"}})})]}),l.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:i.tags.map(m=>l.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:`${i.color}0e`,border:`1px solid ${i.color}20`,color:i.color,fontWeight:500},children:m},m))}),l.jsx("p",{className:"mb-[8px] sm:mb-6",style:{fontSize:"0.875rem",color:"rgba(12,11,24,0.55)",lineHeight:1.85},children:i.desc}),l.jsxs("div",{className:"mb-5 hidden sm:block",children:[l.jsx("p",{className:"text-xs mb-2.5 tracking-wider",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.12em"},children:"DESIGN PROCESS"}),l.jsx(cg,{steps:i.process,color:i.color})]}),l.jsxs("div",{className:"rounded-xl p-4 hidden sm:block",style:{background:`${i.color}12`,border:`1px solid ${i.color}16`},children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:i.color},children:[l.jsx(qa,{size:11}),l.jsx("span",{className:"text-xs tracking-wider",style:{letterSpacing:"0.1em",fontWeight:700},children:"AI APPLICATION"})]}),l.jsx("p",{style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.5)",lineHeight:1.8},children:i.aiNote})]})]}),l.jsxs("div",{className:`flex flex-col ${e?"lg:[grid-area:right]":""}`,children:[l.jsxs("div",{className:"relative overflow-hidden hidden lg:block",style:{height:220,background:i.bg},children:[l.jsx(dg,{type:i.vizType,color:i.color}),l.jsx("div",{className:"absolute inset-0 pointer-events-none hidden lg:block",style:{background:"linear-gradient(180deg,transparent 60%,rgba(255,255,255,0.8) 100%)"}})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3 flex-1 items-center justify-center place-content-center p-[24px]",children:[l.jsx("p",{className:"col-span-2 text-xs mb-1 tracking-wider text-center",style:{color:"rgba(12,11,24,0.25)",letterSpacing:"0.12em"},children:"KEY METRICS"}),i.metrics.map(m=>l.jsx(ug,{value:m.value,unit:m.unit,label:m.label,color:i.color},m.label))]})]})]})})}function lw(){const{ref:i,vis:e}=lg(.03),{theme:t}=Zs(),[s,o]=V.useState(null);return l.jsxs(l.Fragment,{children:[l.jsxs("section",{id:"projects",ref:i,className:"relative overflow-visible md:overflow-hidden",style:{background:"#f3f0eb",padding:"80px 0 140px"},children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.025]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"180px"}}),l.jsx("div",{className:"absolute left-0 top-6 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,color:"rgba(12,11,24,0.03)",lineHeight:1,letterSpacing:"0.05em",whiteSpace:"nowrap"},children:"PROJECTS"}),l.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[60px] max-lg:mb-[32px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[l.jsx("span",{className:"text-xm tracking-widest",style:{color:t.cyan,letterSpacing:"0.2em",fontWeight:600},children:"CASE STUDIES"}),l.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${t.cyan}66,transparent)`}})]}),l.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:600,color:"#0c0b18",lineHeight:1.05,letterSpacing:"-0.04em"},children:"主导项目"})]}),l.jsx("div",{className:"lg:max-w-md",children:l.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.42)",lineHeight:1.85},children:["主导多个从0-1移动端、PC端、可视化大屏项目",l.jsx("br",{}),"每个项目均展示完整设计过程与可量化成果"]})})]}),l.jsx("div",{className:"hidden md:block space-y-4",children:zs.map((c,f)=>l.jsx(ow,{p:c,rev:f%2===1,index:f,onOpenModal:()=>o(c)},c.idx))}),l.jsx("div",{className:"md:hidden",children:l.jsx(sw,{onItemClick:o,paused:!!s})})]})]}),l.jsx(aw,{project:s,onClose:()=>o(null)})]})}function fg({children:i,className:e="",glowColor:t="rgba(139, 92, 246, 0.8)",borderRadius:s="1rem",borderWidth:o=1,intensity:c=1}){const f=V.useRef(null),d=V.useRef(null),p=V.useRef(0),m=V.useRef({x:-1e3,y:-1e3,active:!1});return V.useEffect(()=>{const x=f.current,b=d.current;if(!x||!b)return;const y=b.getContext("2d");if(!y)return;const _=()=>{b.width=x.offsetWidth,b.height=x.offsetHeight};_();const M=new ResizeObserver(_);M.observe(x);const w=k=>{const N=x.getBoundingClientRect();m.current={x:k.clientX-N.left,y:k.clientY-N.top,active:!0}},S=()=>{m.current.active=!1};x.addEventListener("mousemove",w),x.addEventListener("mouseleave",S);const v=()=>{const k=b.width,N=b.height;y.clearRect(0,0,k,N);const{x:T,y:U,active:F}=m.current,D=parseFloat(s)*16,B=Math.max(0,D);let P=o,C=c;if(F){const W=T,$=k-T,ue=U,me=N-U,le=Math.min(W,$,ue,me),H=Math.max(0,1-le/60);P=o*(.5+H*.5),C=c*(.5+H*1)}const j=()=>{y.beginPath(),y.moveTo(B,0),y.lineTo(k-B,0),y.arcTo(k,0,k,B,B),y.lineTo(k,N-B),y.arcTo(k,N,k-B,N,B),y.lineTo(B,N),y.arcTo(0,N,0,N-B,B),y.lineTo(0,B),y.arcTo(0,0,B,0,B),y.closePath()};if(F){const W=y.createRadialGradient(T,U,0,T,U,Math.max(k,N)*.5);W.addColorStop(0,t.replace(/[\d.]+\)$/,`${C})`)),W.addColorStop(.3,t.replace(/[\d.]+\)$/,`${C*.5})`)),W.addColorStop(1,t.replace(/[\d.]+\)$/,"0)")),y.lineWidth=P,y.strokeStyle=W,j(),y.stroke()}else y.lineWidth=o,y.strokeStyle=t.replace(/[\d.]+\)$/,"0.2)"),j(),y.stroke();p.current=requestAnimationFrame(v)};return p.current=requestAnimationFrame(v),()=>{cancelAnimationFrame(p.current),M.disconnect(),x.removeEventListener("mousemove",w),x.removeEventListener("mouseleave",S)}},[t,s,o,c]),l.jsxs("div",{ref:f,className:`relative ${e}`,style:{borderRadius:s},children:[l.jsx("div",{style:{borderRadius:s,overflow:"hidden",padding:o*.3+"px"},children:i}),l.jsx("canvas",{ref:d,className:"absolute inset-0 pointer-events-none",style:{borderRadius:s,zIndex:10}})]})}function cw(i){if(i.startsWith("#")&&i.length===7){const e=parseInt(i.slice(1,3),16),t=parseInt(i.slice(3,5),16),s=parseInt(i.slice(5,7),16);return`rgba(${e},${t},${s},1.0)`}return"rgba(139,92,246,1.0)"}function o0(i,e){if(i.startsWith("#")){const t=Math.round(e*255).toString(16).padStart(2,"0");return`${i}${t}`}return i.startsWith("rgb(")?i.replace(/^rgb\((.+)\)$/,(t,s)=>`rgba(${s},${e})`):i}function uw({onItemClick:i,items:e,paused:t}){const s=V.useRef(null),[o,c]=V.useState(0),f=V.useRef(0),d=V.useRef(!1),p=V.useRef(),m=396,x=V.useCallback(()=>{p.current&&clearInterval(p.current),!t&&(p.current=setInterval(()=>{c(_=>{const M=(_+1)%e.length;return f.current=M,d.current=!0,s.current&&s.current.scrollTo({left:M*m,behavior:"smooth"}),setTimeout(()=>{d.current=!1},500),M})},4e3))},[m,e,t]),b=V.useCallback(()=>{if(!d.current&&s.current){const{scrollLeft:_}=s.current,M=Math.round(_/m);M!==f.current&&M>=0&&M<e.length&&(f.current=M,c(M),x())}},[m,x,e]);V.useEffect(()=>{const _=s.current;return _&&(_.addEventListener("scroll",b),b()),()=>{_&&_.removeEventListener("scroll",b)}},[b]),V.useEffect(()=>{c(0),f.current=0,s.current&&s.current.scrollTo({left:0,behavior:"instant"})},[e]);const y=V.useCallback(_=>{f.current=_,d.current=!0,s.current&&s.current.scrollTo({left:_*m,behavior:"smooth"}),setTimeout(()=>{d.current=!1},500)},[m]);return V.useEffect(()=>(x(),()=>{p.current&&clearInterval(p.current)}),[x]),V.useEffect(()=>{t||x()},[t,x]),l.jsxs("div",{className:"relative -mx-6 lg:-mx-10",children:[l.jsx("div",{ref:s,className:"flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 snap-x snap-mandatory",style:{scrollBehavior:"smooth"},children:e.map((_,M)=>l.jsx("div",{className:"shrink-0 w-[90vw] max-w-[380px] snap-center",style:{opacity:M===o?1:.7,transition:"opacity 0.3s ease"},children:l.jsx(fg,{glowColor:cw(_.color),borderRadius:"1rem",borderWidth:5,intensity:2,children:l.jsxs("div",{className:"relative rounded-2xl overflow-hidden cursor-pointer",style:{background:"#0e0e1a"},onClick:()=>i(_),children:[l.jsxs("div",{className:"relative aspect-video overflow-hidden rounded-t-2xl",children:[l.jsx(og,{src:_.coverImg,alt:_.title,className:"absolute inset-0 w-full h-full object-cover object-top"}),l.jsx("div",{className:"hidden md:block absolute top-3 left-3",children:l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(16,16,26,0.8)",border:`1px solid ${_.color}22`,color:_.color,backdropFilter:"blur(8px)"},children:_.year})})]}),l.jsxs("div",{className:"p-5 py-7",children:[l.jsxs("div",{className:"flex items-start justify-between gap-3 mb-5",children:[l.jsxs("div",{children:[l.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:"#f0f4f8"},children:_.title}),l.jsx("p",{className:"text-xs mt-1.5",style:{color:_.color,opacity:.75},children:_.sub})]}),l.jsx("span",{className:"shrink-0 text-xs px-2 py-1 rounded-lg",style:{color:_.color,fontWeight:600,whiteSpace:"nowrap",background:`color-mix(in srgb, ${_.color} 12%, transparent)`,border:`1px solid color-mix(in srgb, ${_.color} 14%, transparent)`},children:_.metric})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5 mt-5",children:_.tags.slice(0,3).map(w=>l.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.3)"},children:w},w))}),l.jsxs("div",{className:"mt-5 rounded-lg p-3",style:{background:_.color.startsWith("rgb(")?_.color.replace("rgb(","rgba(").replace(/\)$/,",0.08)"):`${_.color}14`,border:_.color.startsWith("rgb(")?"1px solid rgba(var(--c1),0.09)":`1px solid ${_.color}16`},children:[l.jsxs("div",{className:"flex items-center gap-1.5",style:{color:_.color},children:[l.jsx(qa,{size:14}),l.jsx("span",{className:"text-xs tracking-wider font-semibold",children:"亮点"})]}),l.jsx("p",{className:"text-xs mt-1.5 line-clamp-2",style:{color:"rgba(255,255,255,0.5)"},children:_.highlights[0]})]})]})]})})},_.id))}),l.jsx("div",{className:"flex justify-center gap-1.5 mt-4",children:e.map((_,M)=>{const w=e[o].color;return l.jsx("button",{onClick:()=>y(M),className:"relative overflow-hidden",style:{width:M===o?26:6,height:6,borderRadius:9999,background:M===o?o0(w,.15):o0(w,.2),border:"none",padding:0,transition:"width 0.3s ease, background 0.3s ease",cursor:"pointer",position:"relative"},children:M===o&&l.jsx("span",{className:"absolute inset-0 rounded-full",style:{background:w.startsWith("rgb(")?w.replace("rgb(","rgba(").replace(")",",1)"):w,width:"0%",animation:"progressFlow 3.2s linear forwards",height:"100%",left:0,top:0}})},M)})})]})}function dw(i){if(i.startsWith("#")&&i.length===7){const e=parseInt(i.slice(1,3),16),t=parseInt(i.slice(3,5),16),s=parseInt(i.slice(5,7),16);return`rgba(${e},${t},${s},1.0)`}return"rgba(139,92,246,1.0)"}function fw(i=0){const e=V.useRef(null),[t,s]=V.useState(!1);return V.useEffect(()=>{if(t)return;const o=new IntersectionObserver(([c])=>{c.isIntersecting&&!t&&(setTimeout(()=>s(!0),i),o.disconnect())},{threshold:.04});return e.current&&o.observe(e.current),()=>o.disconnect()},[i,t]),{ref:e,vis:t}}function hw({color:i}){return l.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsxs("defs",{children:[l.jsxs("radialGradient",{id:"c1",cx:"65%",cy:"35%",r:"65%",children:[l.jsx("stop",{offset:"0%",stopColor:i,stopOpacity:"0.22"}),l.jsx("stop",{offset:"100%",stopColor:i,stopOpacity:"0"})]}),l.jsxs("filter",{id:"gf1",children:[l.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"b"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"b"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),l.jsx("rect",{width:"560",height:"320",fill:"url(#c1)"}),[40,100,160,220,280,340,400,460,520].map(e=>l.jsx("line",{x1:e,y1:"0",x2:e,y2:"320",stroke:i,strokeOpacity:"0.05",strokeWidth:"1"},e)),[40,85,130,175,220,270].map(e=>l.jsx("line",{x1:"0",y1:e,x2:"560",y2:e,stroke:i,strokeOpacity:"0.05",strokeWidth:"1"},e)),l.jsx("path",{d:"M30 280 C110 210 200 170 290 155 S400 120 520 70",fill:"none",stroke:i,strokeWidth:"2.5",strokeOpacity:"0.6",strokeDasharray:"9 6",filter:"url(#gf1)"}),l.jsx("path",{d:"M30 280 C120 250 220 235 320 225 S450 200 530 175",fill:"none",stroke:i,strokeWidth:"1.5",strokeOpacity:"0.2",strokeDasharray:"5 4"}),[[30,280],[290,155],[520,70]].map(([e,t],s)=>l.jsxs("g",{filter:"url(#gf1)",children:[l.jsx("circle",{cx:e,cy:t,r:"18",fill:i,fillOpacity:"0.08",stroke:i,strokeOpacity:"0.35",strokeWidth:"1.5"}),l.jsx("circle",{cx:e,cy:t,r:"5.5",fill:i,fillOpacity:"0.9"})]},s)),l.jsx("rect",{x:"350",y:"60",width:"55",height:"96",rx:"10",fill:"none",stroke:i,strokeOpacity:"0.22",strokeWidth:"1.5"}),l.jsx("rect",{x:"356",y:"68",width:"43",height:"70",rx:"4",fill:i,fillOpacity:"0.04"}),[73,81,89,97,105,113,121].map(e=>l.jsx("rect",{x:"360",y:e,width:e%16===1?34:24,height:"4",rx:"2",fill:i,fillOpacity:"0.1"},e)),l.jsx("circle",{cx:"80",cy:"60",r:"38",fill:"none",stroke:i,strokeOpacity:"0.06",strokeWidth:"20"}),l.jsx("circle",{cx:"490",cy:"260",r:"50",fill:"none",stroke:i,strokeOpacity:"0.05",strokeWidth:"28"})]})}function Pl({color:i}){const e=[.52,.78,.43,.91,.35,.68,.95,.52,.74,.6,.87,.41,.76,.55];return l.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsxs("defs",{children:[l.jsxs("radialGradient",{id:"c2",cx:"50%",cy:"25%",r:"70%",children:[l.jsx("stop",{offset:"0%",stopColor:i,stopOpacity:"0.18"}),l.jsx("stop",{offset:"100%",stopColor:i,stopOpacity:"0"})]}),l.jsxs("linearGradient",{id:"bg2",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:i,stopOpacity:"0.75"}),l.jsx("stop",{offset:"100%",stopColor:i,stopOpacity:"0.1"})]}),l.jsxs("filter",{id:"gf2",children:[l.jsx("feGaussianBlur",{stdDeviation:"2",result:"b"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"b"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),l.jsx("rect",{width:"560",height:"320",fill:"url(#c2)"}),e.map((t,s)=>{const o=t*200,c=26+s*38,f=285-o;return l.jsxs("g",{children:[l.jsx("rect",{x:c,y:f,width:"26",height:o,rx:"3",fill:"url(#bg2)"}),l.jsx("rect",{x:c,y:f,width:"26",height:"5",rx:"2.5",fill:i,filter:"url(#gf2)"})]},s)}),l.jsx("polyline",{points:e.map((t,s)=>`${39+s*38},${285-t*200}`).join(" "),fill:"none",stroke:i,strokeWidth:"2",strokeOpacity:"0.45"}),l.jsx("line",{x1:"22",y1:"285",x2:"545",y2:"285",stroke:i,strokeOpacity:"0.1",strokeWidth:"1"}),[80,160].map(t=>l.jsx("line",{x1:"22",y1:285-t,x2:"545",y2:285-t,stroke:i,strokeOpacity:"0.05",strokeWidth:"1"},t)),l.jsx("rect",{x:"420",y:"30",width:"120",height:"65",rx:"8",fill:i,fillOpacity:"0.06",stroke:i,strokeOpacity:"0.18",strokeWidth:"1"}),l.jsx("rect",{x:"430",y:"40",width:"60",height:"6",rx:"3",fill:i,fillOpacity:"0.2"}),l.jsx("rect",{x:"430",y:"52",width:"96",height:"14",rx:"3",fill:i,fillOpacity:"0.1"}),l.jsx("rect",{x:"430",y:"72",width:"48",height:"5",rx:"2.5",fill:i,fillOpacity:"0.08"})]})}function pw({color:i}){const e=[[280,155],[180,85],[380,85],[140,210],[420,210],[215,42],[345,42]];return l.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsxs("defs",{children:[l.jsxs("radialGradient",{id:"c3",cx:"50%",cy:"48%",r:"58%",children:[l.jsx("stop",{offset:"0%",stopColor:i,stopOpacity:"0.18"}),l.jsx("stop",{offset:"100%",stopColor:i,stopOpacity:"0"})]}),l.jsxs("filter",{id:"gf3",children:[l.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"b"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),l.jsx("rect",{width:"560",height:"320",fill:"url(#c3)"}),e.slice(1).map(([t,s],o)=>l.jsx("line",{x1:t,y1:s,x2:280,y2:155,stroke:i,strokeOpacity:"0.18",strokeWidth:"1.3",strokeDasharray:"5 4"},o)),l.jsx("line",{x1:180,y1:85,x2:140,y2:210,stroke:i,strokeOpacity:"0.1",strokeWidth:"1"}),l.jsx("line",{x1:380,y1:85,x2:420,y2:210,stroke:i,strokeOpacity:"0.1",strokeWidth:"1"}),l.jsx("line",{x1:215,y1:42,x2:180,y2:85,stroke:i,strokeOpacity:"0.1",strokeWidth:"1"}),l.jsx("line",{x1:345,y1:42,x2:380,y2:85,stroke:i,strokeOpacity:"0.1",strokeWidth:"1"}),[50,78,108].map(t=>l.jsx("circle",{cx:280,cy:155,r:t,fill:"none",stroke:i,strokeOpacity:.1/t*40,strokeWidth:"1"},t)),e.map(([t,s],o)=>l.jsxs("g",{filter:"url(#gf3)",children:[l.jsx("circle",{cx:t,cy:s,r:o===0?22:14,fill:i,fillOpacity:o===0?.12:.07,stroke:i,strokeOpacity:o===0?.45:.22,strokeWidth:"1.5"}),l.jsx("circle",{cx:t,cy:s,r:o===0?6:3.5,fill:i,fillOpacity:"0.9"})]},o)),l.jsx("rect",{x:"420",y:"24",width:"116",height:"40",rx:"7",fill:i,fillOpacity:"0.06",stroke:i,strokeOpacity:"0.2",strokeWidth:"1"}),l.jsx("rect",{x:"430",y:"32",width:"72",height:"6",rx:"3",fill:i,fillOpacity:"0.22"}),l.jsx("rect",{x:"430",y:"44",width:"48",height:"5",rx:"2.5",fill:i,fillOpacity:"0.12"})]})}function mw({color:i}){return l.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsxs("defs",{children:[l.jsxs("radialGradient",{id:"c4",cx:"40%",cy:"50%",r:"65%",children:[l.jsx("stop",{offset:"0%",stopColor:i,stopOpacity:"0.18"}),l.jsx("stop",{offset:"100%",stopColor:i,stopOpacity:"0"})]}),l.jsxs("filter",{id:"gf4",children:[l.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"b"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),l.jsx("rect",{width:"560",height:"320",fill:"url(#c4)"}),[[150,150,80],[300,120,55],[230,220,45],[410,200,62],[100,250,38],[460,100,35]].map(([e,t,s],o)=>l.jsx("circle",{cx:e,cy:t,r:s,fill:i,fillOpacity:.04+o*.01,stroke:i,strokeOpacity:.1+o*.02,strokeWidth:"1.5"},o)),l.jsx("path",{d:"M185 155 C145 105 115 82 165 50 C215 18 268 48 290 100 C312 152 270 182 228 182 C186 182 185 155 185 155Z",fill:i,fillOpacity:"0.08",stroke:i,strokeOpacity:"0.22",strokeWidth:"1.5",filter:"url(#gf4)"}),l.jsx("circle",{cx:430,cy:160,r:62,fill:"none",stroke:i,strokeOpacity:"0.08",strokeWidth:"22"}),l.jsx("circle",{cx:430,cy:160,r:62,fill:"none",stroke:i,strokeOpacity:"0.5",strokeWidth:"3",strokeDasharray:"272 120",strokeDashoffset:"0",filter:"url(#gf4)"}),l.jsx("circle",{cx:430,cy:160,r:7,fill:i,fillOpacity:"0.9",filter:"url(#gf4)"}),[[250,60],[310,60]].map(({0:e,1:t},s)=>l.jsxs("g",{children:[l.jsx("rect",{x:e,y:t,width:"50",height:"88",rx:"9",fill:"none",stroke:i,strokeOpacity:"0.22",strokeWidth:"1.5"}),l.jsx("rect",{x:e+4,y:t+8,width:"42",height:"64",rx:"3",fill:i,fillOpacity:"0.04"}),[14,22,30,38,46,54,62].map(o=>l.jsx("rect",{x:e+8,y:t+o,width:o===14?30:22,height:"4",rx:"2",fill:i,fillOpacity:"0.1"},o))]},s))]})}const vn=[{id:1,color:"rgb(var(--c1))",Bg:Pl,coverImg:"/assets/images/ntgk1.mp4",year:"2026",title:"能碳管控可视化平台",sub:"Carbon Management",tags:["智慧园区","能碳管控","GIS定制","智慧工地"],role:"UX Designer · 高德 GIS 地图开发",metric:"政府验收评分 9.6",tools:["Figma","Amap Style","Geojson"],desc:"面向省政府机关打造的政务级实时能碳管控大屏，集成GIS地图，实时监控机关事务单位的能耗与碳排数据，支撑节能减排政策执行与预警决策、能耗监测、运维告警、工单管理等多维数据，实现区域能源全生命周期可视化管控与智能决策。",highlights:["原子化、原型化大屏设计，高保真 Demo 演示","支持2D/3D GIS地图切换","多终端自适应展示","管理决策效率提升60%"],screenshots:["/assets/images/ntgk2.png","/assets/images/ntgk3.mp4","/assets/images/ntgk4.png","/assets/images/ntgk5.png","/assets/images/ntgk6.png"],projectLink:"https://www.figma.com/proto/q7DqLbfB1uuKfsAVjnzhoF/%E8%8C%8C%E5%B9%B3%E3%80%81%E5%A4%A9%E6%A1%A5%E8%83%BD%E7%A2%B3%E7%AE%A1%E6%8E%A7%E5%B9%B3%E5%8F%B0%E5%8F%AF%E8%A7%86%E5%8C%96%E5%A4%A7%E5%B1%8F%E8%AE%BE%E8%AE%A1?node-id=192-15924&viewport=-406%2C252%2C0.03&t=1MvOD9WdotlUwLNd-1&scaling=contain&content-scaling=fixed&starting-point-node-id=192%3A15924&page-id=5%3A14"},{id:2,color:"#E877FF",Bg:Pl,coverImg:"/assets/images/chpgw1.mp4",year:"2025",title:"浪潮智慧建筑产品官网",sub:"Product Official Website",tags:["品牌官网","响应式","动效"],role:"Design System Lead",metric:"全案设计",tools:["Figma","Storybook","GitHub Copilot"],desc:"浪潮智慧建筑以 “数智融合、绿色低碳” 为核心，打造筑瓴智慧建筑全栈式解决方案体系，覆盖智能应用、数字底座、AI 中台、智能硬件四大维度，为建筑全生命周期提供从 “感知 - 分析 - 决策 - 执行” 的全流程智能化支撑，助力行业实现高效、绿色、高质量的数字化转型。",highlights:["企业品牌官网全链路设计","跨产品线组件复用","交互原型 Demo 设计","迭代交付效率提升2倍"],screenshots:["/assets/images/chpgw2.png","/assets/images/chpgw3.png","/assets/images/chpgw4.png","/assets/images/chpgw5.png","/assets/images/chpgw6.png"],projectLink:"https://www.figma.com/proto/UwjGPd7UgVQLSN8oE5rdeb/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%91?node-id=91-4991&viewport=-23%2C-1005%2C0.06&t=GIZyLL29GHlGTPVD-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"},{id:3,color:"#02BA53",Bg:hw,coverImg:"/assets/images/sdhs1.mp4",year:"2023",title:"山东高速满易运 App",sub:"SDHS MY-TMS Driver App",tags:["物流运输","货运平台","MY-TMS"],role:"Lead UI/UX · Product Design",metric:"转化率提升 85%",tools:["Figma","Principle","Midjourney"],desc:"山东高速集团官方货运司机服务平台，提供在线接单、路线规划、高速通行、费用结算、车辆管理、消息通知等全流程功能，帮助货车司机高效完成运输任务，实现货运流程线上化、标准化、智能化。",highlights:["深色模式适配，满足长途夜间驾驶使用","搭建完整移动端组件库，提升迭代效率","轻量化信息层级，降低司机操作认知成本","极简交互流程设计，缩短高频操作路径"],screenshots:["/assets/images/sdhs2.png","/assets/images/sdhs3.png","/assets/images/sdhs4.png","/assets/images/sdhs5.png","/assets/images/sdhs6.png"],projectLink:"https://example.com/icty-app"},{id:4,color:"#FE952C",Bg:mw,coverImg:"/assets/images/icity1.mp4",year:"2018",title:"爱城市网 App",sub:"iCity — Urban Service App",tags:["城市服务","政务服务","民生出行"],role:"UI/UX · Product Design · Motion",metric:"省级政务标杆产品",tools:["Sketch","Principle","After Effects"],desc:"省级综合性政务便民服务App，聚焦市民日常办事、民生查询、生活服务核心场景，整合政务办理、社保医保、交通出行、便民缴费、城市资讯、投诉建议等多元功能。统筹全局交互设计逻辑，简化政务操作流程，降低市民使用门槛，打造轻量化、高易用的移动端体验。",highlights:["高合规政务视觉体系，兼顾严谨性与美观度","与 UI 设计规范一致，搭建产品原件库","轻量化信息层级，优化民生办事操作路径","统一多业务线视觉体系，保障产品体验一致性"],screenshots:["/assets/images/icity2.png","/assets/images/icity3.png","/assets/images/icity4.png","/assets/images/icity5.png","/assets/images/icity6.png"],projectLink:"https://example.com/icty-web"},{id:5,color:"#34d399",Bg:Pl,coverImg:"/assets/images/PPT1.png",year:"2024",title:"PPT 设计与演示体系",sub:"Visual Communication",tags:["产品发布会","汇报模板","设计分享"],role:"视觉设计负责人 · 演示体系搭建",metric:"影视级幻灯片",tools:["PowerPoint","Keynote","ECharts"],desc:"面向政企汇报、产品发布、项目复盘的 PPT 设计体系，统一品牌视觉风格、信息层级与演示逻辑，提升内容传递效率与专业呈现质感。",highlights:["品牌视觉与版式规范高度统一","搭建 60+ 页标准化演示模板体系","数据图表可视化表达更清晰直观","整体汇报制作效率提升 70%"],screenshots:["/assets/images/PPT2.png","/assets/images/PPT3.png","/assets/images/PPT4.png","/assets/images/PPT5.png","/assets/images/PPT6.png"],projectLink:"https://example.com/energy-carbon"},{id:6,color:"#FE952C",Bg:pw,coverImg:"/assets/images/ai1.mp4",year:"2026",title:"AI-设计赋能",sub:"AI-Driven Efficiency",tags:["提效体系","智能辅助","设计自动化"],role:"AI设计体系搭建 · 提效方案负责人",metric:"效率提升 65%",tools:["Antigravity","Cursor","GitHub Copilot"],desc:"基于AI能力构建设计提效工作流，覆盖组件生成、图表可视化、原型快速迭代、设计规范落地等场景，通过智能辅助大幅缩短交付周期，提升团队整体产出质量与效率。",highlights:["搭建AI辅助设计标准化流程体系","设计稿迭代周期缩短 50% 以上","组件与图表自动生成覆盖率提升","团队整体设计效率提升 65%"],screenshots:["/assets/images/ai2.mp4","/assets/images/ai3.mp4","/assets/images/ai4.png","/assets/images/ai5.mp4","/assets/images/ai6.png"],projectLink:"https://example.com/licheng-oa-mobile"},{id:7,color:"#7c6ff7",Bg:Pl,coverImg:"/assets/images/dx1.mp4",year:"2022",title:"交互动效设计",sub:"Motion Interactive",tags:["微动画","Lottie落地","GIS动画"],role:"Product Designer · UX Lead",metric:"信息可读性提升 40%",tools:["AE","Lottie","Principle","Hype 4"],desc:"搭建全产品线标准化动效设计体系，制定统一的动效规范与落地标准，覆盖微交互、页面转场、状态反馈、组件动画等核心场景，提升产品交互体验与视觉一致性。",highlights:["制定完整动效设计规范与组件库","统一全产品线动效语言与视觉节奏","动效交付与研发对接效率提升60%","产品操作反馈与体验质感显著优化"],screenshots:["/assets/images/dx2.mp4","/assets/images/dx3.mp4","/assets/images/dx4.mp4","/assets/images/dx5.mp4","/assets/images/dx6.mp4"],projectLink:"https://example.com/licheng-oa-desktop"}];function gw({item:i,onClose:e}){if(V.useEffect(()=>(i&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[i]),!i)return null;const t=i.Bg;return l.jsx(Vs,{children:l.jsx("div",{className:"fixed inset-0 z-50 flex items-center sm:items-center justify-center px-6 sm:px-8 pt-8 sm:pt-12 pb-8",style:{background:"rgba(0,0,0,0.88)",backdropFilter:"blur(16px)"},onClick:e,children:l.jsxs("div",{className:"relative w-full sm:max-w-4xl max-h-[86vh] overflow-y-auto rounded-2xl",style:{background:"#0c0c18",border:"1px solid rgba(255,255,255,0.07)",boxShadow:`0 0 100px ${i.color}14`},onClick:s=>s.stopPropagation(),children:[l.jsx("button",{onClick:e,className:"sticky top-4 float-right mr-5 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",style:{background:"rgba(0,0,0,0.65)",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.65)",backdropFilter:"blur(8px)"},onMouseEnter:s=>{s.currentTarget.style.background="rgba(0,0,0,0.85)",s.currentTarget.style.borderColor="rgba(255,255,255,0.2)",s.currentTarget.style.color="rgba(255,255,255,0.9)"},onMouseLeave:s=>{s.currentTarget.style.background="rgba(0,0,0,0.65)",s.currentTarget.style.borderColor="rgba(255,255,255,0.12)",s.currentTarget.style.color="rgba(255,255,255,0.65)"},children:l.jsx(_i,{size:16})}),l.jsxs("div",{className:"relative h-52 overflow-hidden rounded-t-3xl sm:rounded-t-3xl hidden md:block",style:{marginTop:"-52px"},children:[l.jsx(t,{color:i.color}),l.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg,transparent 40%,#0c0c18 100%)"}}),l.jsx("div",{className:"absolute top-4 left-5",children:l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(0,0,0,0.7)",border:`1px solid ${i.color}22`,color:i.color,backdropFilter:"blur(8px)"},children:i.year})})]}),l.jsxs("div",{className:"px-6 pt-6 pb-8",children:[l.jsxs("div",{className:"flex items-start justify-between gap-3 mb-1",children:[l.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800,color:"#f0f4f8"},children:i.title}),l.jsx("span",{style:{fontSize:"2rem",fontWeight:900,color:`${i.color}20`,lineHeight:1},children:i.num})]}),l.jsx("p",{className:"text-sm mb-1",style:{color:i.color},children:i.sub}),l.jsx("p",{className:"text-xs mb-5",style:{color:"rgba(255,255,255,0.25)"},children:i.role}),l.jsx("p",{className:"mb-5",style:{fontSize:"0.875rem",color:"rgba(255,255,255,0.48)",lineHeight:1.85},children:i.desc}),l.jsx("div",{className:"grid grid-cols-1 gap-4 mb-5",children:l.jsxs("div",{children:[l.jsx("p",{className:"text-xs mb-2 tracking-wider",style:{color:"rgba(255,255,255,0.2)",letterSpacing:"0.12em"},children:"TOOLS"}),l.jsx("div",{className:"flex flex-nowrap gap-1.5 overflow-x-auto scrollbar-hide",children:i.tools.map(s=>l.jsx("span",{className:"px-2 py-1 text-xs rounded",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.42)"},children:s},s))})]})}),l.jsxs("div",{className:"rounded-xl p-4",style:{background:`${i.color}07`,border:`1px solid ${i.color}16`},children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",style:{color:i.color},children:[l.jsx(qa,{size:12}),l.jsx("span",{className:"text-xs tracking-wider",style:{letterSpacing:"0.1em",fontWeight:600},children:"HIGHLIGHTS"})]}),i.highlights.map(s=>l.jsxs("div",{className:"flex items-start gap-2.5 mb-2",children:[l.jsx(cv,{size:11,className:"mt-0.5 shrink-0",style:{color:i.color}}),l.jsx("span",{style:{fontSize:"0.8125rem",color:"rgba(255,255,255,0.48)",lineHeight:1.7},children:s})]},s))]}),i.screenshots&&i.screenshots.length>0&&l.jsxs("div",{className:"mt-6",children:[l.jsx("p",{className:"text-xs mb-3 tracking-wider",style:{color:"rgba(255,255,255,0.2)",letterSpacing:"0.12em"},children:"PROJECT SCREENSHOTS"}),l.jsx("div",{className:"grid grid-cols-1 gap-3",children:i.screenshots.map((s,o)=>{const c=/\.mp4($|\?)/i.test(s);return l.jsxs("div",{className:"relative overflow-hidden rounded-lg",style:{background:"rgba(255,255,255,0.02)",border:`1px solid ${i.color}12`,maxWidth:"100%"},children:[l.jsx("div",{className:"absolute inset-0 skeleton-shimmer",style:{zIndex:0}}),c?l.jsx("video",{src:s,className:"w-full h-auto",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onLoadedData:f=>{const d=f.currentTarget,p=d.parentElement;if(d.style.display="",p){const m=p.querySelector(".screenshot-error");m&&m.remove();const x=p.querySelector(".skeleton-shimmer");x&&x.remove()}},onError:f=>{const d=f.currentTarget,p=d.parentElement;if(p&&(d.style.display="none",!p.querySelector(".screenshot-error"))){const m=document.createElement("div");m.className="screenshot-error absolute inset-0 flex items-center justify-center",m.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1; cursor: pointer;",m.textContent="视频加载失败 · 点击重试";let x=0,b=null,y=null;const _=()=>{b&&clearTimeout(b),y&&clearInterval(y),x<5?(x++,b=setTimeout(()=>{d.src=s+"?_retry="+Date.now()},2e3*x)):y=setInterval(()=>{d.src=s+"?_retry="+Date.now()},8e3)};m.onclick=()=>{x=0,b&&clearTimeout(b),y&&clearInterval(y),m.remove(),d.style.display="",d.src=s+"?_retry="+Date.now()},p.appendChild(m),_()}}}):l.jsx("img",{src:s,alt:`${i.title} 截图 ${o+1}`,className:"w-full h-auto",onLoad:f=>{const d=f.currentTarget,p=d.parentElement;if(d.style.display="",p){const m=p.querySelector(".screenshot-error");m&&m.remove();const x=p.querySelector(".skeleton-shimmer");x&&x.remove()}},onError:f=>{const d=f.currentTarget,p=d.parentElement;if(p&&(d.style.display="none",!p.querySelector(".screenshot-error"))){const m=document.createElement("div");m.className="screenshot-error absolute inset-0 flex items-center justify-center",m.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1; cursor: pointer;",m.textContent="图片加载失败 · 点击重试";let x=0,b=null,y=null;const _=()=>{b&&clearTimeout(b),y&&clearInterval(y),x<5?(x++,b=setTimeout(()=>{d.src=s+"?_retry="+Date.now()},2e3*x)):y=setInterval(()=>{d.src=s+"?_retry="+Date.now()},8e3)};m.onclick=()=>{x=0,b&&clearTimeout(b),y&&clearInterval(y),m.remove(),d.style.display="",d.src=s+"?_retry="+Date.now()},p.appendChild(m),_()}}})]},o)})})]}),i.projectLink&&l.jsx("div",{className:"mt-6",children:l.jsxs("a",{href:i.projectLink,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm transition-all duration-300",style:{background:`${i.color}`,color:"#05050a",fontWeight:700,boxShadow:`0 0 30px ${i.color}40`},onMouseEnter:s=>{s.currentTarget.style.boxShadow=`0 0 40px ${i.color}60`,s.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:s=>{s.currentTarget.style.boxShadow=`0 0 30px ${i.color}40`,s.currentTarget.style.transform="translateY(0)"},children:[l.jsx(af,{size:16,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"}),"查看完整项目"]})})]})]})})})}function Xi({item:i,tall:e,imageHeight:t,onOpen:s}){const[o,c]=V.useState(!1),f=i.Bg,d=V.useRef({count:0,timer:null,interval:null});return V.useEffect(()=>()=>{d.current.timer&&clearTimeout(d.current.timer),d.current.interval&&clearInterval(d.current.interval)},[]),l.jsx(fg,{glowColor:dw(i.color),borderRadius:"1rem",borderWidth:5,intensity:2,children:l.jsxs("div",{className:"group relative rounded-2xl overflow-hidden cursor-pointer will-change-transform",style:{transform:"none",transition:"transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",boxShadow:o?`0 20px 60px rgba(0,0,0,0.5), 0 0 50px ${i.color}08`:"none",background:"#0e0e1a",outline:"none",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",isolation:"isolate",backgroundColor:"#0e0e1a"},onMouseEnter:()=>c(!0),onMouseLeave:()=>{c(!1)},onClick:s,children:[l.jsxs("div",{className:"relative overflow-hidden rounded-t-2xl",style:{height:t||(e?300:260),WebkitBorderTopLeftRadius:"14px",WebkitBorderTopRightRadius:"14px",borderTopLeftRadius:"14px",borderTopRightRadius:"14px",WebkitBorderBottomLeftRadius:"0",WebkitBorderBottomRightRadius:"0",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},children:[l.jsx("div",{className:"absolute inset-0 skeleton-shimmer rounded-t-2xl",style:{zIndex:0}}),i.coverImg&&(/\.mp4($|\?)/i.test(i.coverImg)?l.jsx("video",{src:i.coverImg,className:"absolute inset-0 w-full h-full object-cover object-top",style:{opacity:.85,transform:o?"scale(1.06)":"scale(1)",transition:"transform 0.2s ease-out",willChange:"transform",borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onLoadedData:m=>{const x=m.currentTarget,b=x.parentElement;if(d.current.timer&&(clearTimeout(d.current.timer),d.current.timer=null),d.current.interval&&(clearInterval(d.current.interval),d.current.interval=null),d.current.count=0,x.style.display="",b){const y=b.querySelector(".img-error-fallback");y&&y.remove();const _=b.querySelector(".skeleton-shimmer");_&&_.remove()}},onError:m=>{const x=m.currentTarget,b=x.parentElement;if(!b)return;if(x.style.display="none",!b.querySelector(".img-error-fallback")){const _=document.createElement("div");_.className="img-error-fallback absolute inset-0 flex items-center justify-center",_.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1; cursor: pointer;",_.textContent="视频加载失败 · 点击重试",_.onclick=()=>{d.current.timer&&clearTimeout(d.current.timer),d.current.interval&&clearInterval(d.current.interval),d.current.count=0,_.remove(),x.style.display="",x.src=i.coverImg+"?_retry="+Date.now()},b.insertBefore(_,b.firstChild)}(()=>{const _=d.current.count;_<5?(d.current.count=_+1,d.current.timer=setTimeout(()=>{x.src=i.coverImg+"?_retry="+Date.now()},2e3*(_+1))):d.current.interval=setInterval(()=>{x.src=i.coverImg+"?_retry="+Date.now()},8e3)})()}}):l.jsx("img",{src:i.coverImg,alt:i.title,className:"absolute inset-0 w-full h-full object-cover object-top cover-image",style:{opacity:.85,transform:o?"scale(1.06)":"scale(1)",transition:"transform 0.2s ease-out",willChange:"transform",WebkitBorderTopLeftRadius:"16px",WebkitBorderTopRightRadius:"16px",borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},onLoad:m=>{const x=m.currentTarget,b=x.parentElement;if(d.current.timer&&(clearTimeout(d.current.timer),d.current.timer=null),d.current.interval&&(clearInterval(d.current.interval),d.current.interval=null),d.current.count=0,x.style.display="",b){const y=b.querySelector(".img-error-fallback");y&&y.remove()}},onError:m=>{const x=m.currentTarget,b=x.parentElement;if(!b)return;if(x.style.display="none",!b.querySelector(".img-error-fallback")){const _=document.createElement("div");_.className="img-error-fallback absolute inset-0 flex items-center justify-center",_.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1; cursor: pointer;",_.textContent="图片加载失败 · 点击重试",_.onclick=()=>{d.current.timer&&clearTimeout(d.current.timer),d.current.interval&&clearInterval(d.current.interval),d.current.count=0,_.remove(),x.style.display="",x.src=i.coverImg+"?_retry="+Date.now()},b.insertBefore(_,b.firstChild)}(()=>{const _=d.current.count;_<5?(d.current.count=_+1,d.current.timer=setTimeout(()=>{x.src=i.coverImg+"?_retry="+Date.now()},2e3*(_+1))):d.current.interval=setInterval(()=>{x.src=i.coverImg+"?_retry="+Date.now()},8e3)})()}})),!i.coverImg&&l.jsx(f,{color:i.color}),l.jsx("div",{className:"absolute inset-0 pointer-events-none transition-opacity duration-300 md:block hidden",style:{background:"linear-gradient(180deg, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.8) 100%)",opacity:o?.01:.9,borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"}}),l.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(180deg,transparent 0%,rgba(16,16,26,0.01) 80%,rgba(16,16,26,0.01) 100%)",borderTopLeftRadius:"16px",borderTopRightRadius:"16px"}}),l.jsx("div",{className:"absolute top-4 left-4",children:l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(16,16,26,0.8)",border:`1px solid ${i.color}22`,color:i.color,backdropFilter:"blur(8px)"},children:i.year})})]}),l.jsxs("div",{className:"px-5 py-10 md:py-5 md:px-5 bg-[#60606040] bg-[#60606042] m-[0px]",children:[l.jsxs("div",{className:"flex items-start justify-between gap-3 mb-6 md:mb-2",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-0 mb-1.5 md:mb-0.5",children:[l.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:`${i.color}50`,letterSpacing:"0.08em"},children:i.num}),l.jsx("h3",{style:{fontSize:"0.9375rem",fontWeight:700,color:"#f0f4f8"},children:i.title})]}),l.jsx("p",{className:"text-xs",style:{color:i.color,opacity:.75},children:i.sub})]}),l.jsx("span",{className:"shrink-0 text-xs px-2.5 py-1 rounded-lg",style:{color:i.color,fontWeight:600,whiteSpace:"nowrap",background:`color-mix(in srgb, ${i.color} 12%, transparent)`,border:`1px solid color-mix(in srgb, ${i.color} 14%, transparent)`},children:i.metric})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5 mt-6 md:mt-3",children:i.tags.map(p=>l.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.3)"},children:p},p))})]})]})})}function xw(){const[i,e]=V.useState(null),{ref:t,vis:s}=fw(0),{theme:o}=Zs(),[c,f]=V.useState(!1);return V.useEffect(()=>{const d=()=>{f(window.innerWidth>=1024)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),l.jsxs(l.Fragment,{children:[l.jsxs("section",{id:"portfolio",ref:t,className:"relative overflow-visible md:overflow-hidden",style:{background:"var(--bg)",padding:"80px 0 140px"},children:[l.jsx("div",{className:"absolute inset-x-0 top-0 h-px pointer-events-none",style:{background:`linear-gradient(90deg,transparent 10%,${o.purple}33 50%,transparent 90%)`}}),l.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,lineHeight:1,color:"rgba(255,255,255,0.05)",letterSpacing:"0.05em"},children:"WORKS"}),l.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 mb-20 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(30px)"},children:[l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-4 mb-5",children:[l.jsx("span",{className:"text-xm tracking-widest",style:{color:o.purple,letterSpacing:"0.2em",fontWeight:600},children:"SELECTED WORKS"}),l.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${o.purple}4d,transparent)`}})]}),l.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:"#f0f4f8",lineHeight:1.05,letterSpacing:"-0.04em"},children:"其他精选作品"})]}),l.jsx("div",{className:"lg:max-w-xs",children:l.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(255,255,255,0.28)",lineHeight:1.85},children:["点击卡片查看完整项目案例",l.jsx("br",{}),"包含设计流程与核心数据成果",l.jsx("br",{}),"以及AI驱动的全链路设计实践"]})})]}),l.jsx("div",{className:"hidden md:block",children:l.jsxs("div",{className:"grid lg:grid-cols-12 gap-4",children:[l.jsx("div",{className:"lg:col-span-7 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"60ms"},children:l.jsx(Xi,{item:vn[0],tall:!0,onOpen:()=>e(vn[0]),imageHeight:c?"320px":"200px"})}),l.jsx("div",{className:"lg:col-span-5 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"130ms"},children:l.jsx(Xi,{item:vn[1],tall:!0,onOpen:()=>e(vn[1]),imageHeight:c?"320px":"200px"})}),l.jsx("div",{className:"lg:col-span-6 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"200ms"},children:l.jsx(Xi,{item:vn[2],onOpen:()=>e(vn[2]),imageHeight:c?"330px":"200px"})}),l.jsx("div",{className:"lg:col-span-6 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"260ms"},children:l.jsx(Xi,{item:vn[3],onOpen:()=>e(vn[3]),imageHeight:c?"330px":"200px"})}),l.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"320ms"},children:l.jsx(Xi,{item:vn[4],onOpen:()=>e(vn[4]),imageHeight:c?"220px":"200px"})}),l.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"380ms"},children:l.jsx(Xi,{item:vn[5],onOpen:()=>e(vn[5]),imageHeight:c?"220px":"200px"})}),l.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"440ms"},children:l.jsx(Xi,{item:vn[6],onOpen:()=>e(vn[6]),imageHeight:c?"220px":"200px"})})]})}),l.jsx("div",{className:"md:hidden",children:l.jsx(uw,{onItemClick:e,items:vn,paused:!!i})})]})]}),l.jsx(gw,{item:i,onClose:()=>e(null)})]})}const Ga="#0c0b18",vw="#f0eef9";function yw(i=0){const e=V.useRef(null),[t,s]=V.useState(!1);return V.useEffect(()=>{const o=new IntersectionObserver(([c])=>{c.isIntersecting&&(setTimeout(()=>s(!0),i),o.disconnect())},{threshold:.04});return e.current&&o.observe(e.current),()=>o.disconnect()},[i]),{ref:e,vis:t}}const fd=[{name:"精英校友奖",issuer:"集团招聘宣讲会",year:"2019",color:"#00b896",icon:"G"},{name:"十佳优秀员工",issuer:"山东爱城市网科技有限公司",year:"2020",color:"#7c6ff7",icon:"S"},{name:"集团 Logo 设计一等奖",issuer:"浪潮集团",year:"2020",color:"#f472b6",icon:"L"},{name:"创新人才奖",issuer:"浪潮集团",year:"2022",color:"#34d399",icon:"C"},{name:"山东省中级工程师职称",issuer:"山东省人社厅",year:"2024",color:"#fb923c",icon:"M"},{name:"已授权发明专利 4 项",issuer:"国家知识产权局",year:"2025",color:"#38bdf8",icon:"Z"}],Sw=["App Design","Mobile Design","Saas Design","OA Design","Visual Design","Large Screen","Design Systems","Component Library","AI Workflow","Prototyping","Logo Design","Brand Identity","Motion Design","Front-End","BI / Data Vis","HTML+CSS","Lotties","设计提效","政务服务","TMS System","能碳管控","智慧园区","智慧工地","产品发布会PPT"];function l0({c:i,delay:e}){const[t,s]=V.useState(!1),o=V.useRef(null),[c,f]=V.useState(!1);return V.useEffect(()=>{const d=new IntersectionObserver(([p])=>{p.isIntersecting&&(setTimeout(()=>f(!0),e),d.disconnect())},{threshold:.1});return o.current&&d.observe(o.current),()=>d.disconnect()},[e]),l.jsxs("div",{ref:o,className:"flex items-center gap-3 p-4 rounded-2xl cursor-default select-none transition-all duration-250",style:{background:t?"white":"rgba(255,255,255,0.5)",border:t?`1px solid ${i.color}25`:"1px solid rgba(12,11,24,0.06)",transform:t?"translateY(-3px) scale(1.01)":c?"translateY(0) scale(1)":"translateY(12px) scale(0.97)",opacity:c?1:0,transition:`all 0.4s cubic-bezier(0.34,1.2,0.64,1) ${e}ms`,boxShadow:t?`0 8px 28px rgba(0,0,0,0.1), 0 0 20px ${i.color}10`:"none"},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[l.jsx("div",{className:"w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-sm transition-all duration-200",style:{background:t?`${i.color}18`:`${i.color}0e`,border:`1px solid ${i.color}20`,color:i.color,fontWeight:800,boxShadow:t?`0 0 12px ${i.color}20`:"none"},children:i.icon}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{style:{fontSize:"0.8125rem",fontWeight:600,color:Ga,lineHeight:1.3},children:i.name}),l.jsx("p",{className:"text-xs mt-0.5 truncate",style:{color:"rgba(12,11,24,0.38)"},children:i.issuer})]}),l.jsx("span",{className:"text-xs shrink-0",style:{color:i.color,fontWeight:700},children:i.year})]})}function _w(){const{ref:i,vis:e}=yw(.03),{theme:t}=Zs();return l.jsxs("section",{id:"education",ref:i,className:"relative overflow-hidden",style:{background:vw,padding:"80px 0 140px"},children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.02]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"160px"}}),l.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,color:"rgba(12,11,24,0.03)",lineHeight:1,letterSpacing:"0.05em"},children:"EDUCATION"}),l.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[60px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[l.jsx("span",{className:"text-xm tracking-widest",style:{color:t.purple,letterSpacing:"0.2em",fontWeight:600},children:"BACKGROUND"}),l.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${t.purple}66,transparent)`}})]}),l.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:Ga,lineHeight:1.05,letterSpacing:"-0.04em"},children:"教育 & 认证"})]}),l.jsx("div",{className:"lg:max-w-xs",children:l.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.42)",lineHeight:1.85},children:["主导搭建 Quick UI 企业级设计体系",l.jsx("br",{}),"累计开展团队内部分享30+场",l.jsx("br",{}),"多项专业认证，持续学习 AI 与新兴技术"]})})]}),l.jsxs("div",{className:"grid lg:grid-cols-[1fr_1px_1fr] gap-0",children:[l.jsxs("div",{className:"pr-0 lg:pr-12",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[l.jsx(zl,{size:14,style:{color:t.purple}}),l.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"EDUCATION"})]}),l.jsxs("div",{className:"relative flex gap-5 mb-2 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)"},children:[l.jsxs("div",{className:"flex flex-col items-center shrink-0",style:{width:40},children:[l.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(124,111,247,0.1)",border:"2px solid rgb(var(--c2))",boxShadow:"0 0 20px rgba(var(--c2),0.2)"},children:l.jsx(zl,{size:16,style:{color:t.purple}})}),l.jsx("div",{className:"w-px mt-2 flex-1",style:{background:"rgba(12,11,24,0.1)",minHeight:24}})]}),l.jsxs("div",{className:"pb-6",children:[l.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-2",children:[l.jsxs("div",{children:[l.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:Ga},children:"中国石油大学（华东） · 储运与建筑学院"}),l.jsx("p",{className:"text-sm mt-0.5",style:{color:t.purple,fontWeight:600},children:"建筑环境与能源应用工程 · 本科学位"})]}),l.jsxs("div",{className:"text-right hidden sm:block",children:[l.jsx("span",{className:"text-xs",style:{color:"rgba(12,11,24,0.35)"},children:"2011 — 2015"}),l.jsx("p",{className:"text-xs mt-0.5",style:{color:"rgba(12,11,24,0.3)"},children:"GPA 4.3 / 5.0"})]})]}),l.jsx("p",{className:"mb-4",style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.48)",lineHeight:1.85},children:"自主深耕 UI/UX 设计与数据可视化领域，深度理解建筑、能碳、园区业务逻辑，设计方案落地性强，能高效对接业务与技术团队，形成 “工程思维 + 设计落地” 的独特优势"}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:["专业前 10%","优秀学生干部","校级奖学金 ×3"].map(s=>l.jsxs("div",{className:"rounded-xl p-2.5 text-center",style:{background:"rgba(124,111,247,0.06)",border:"1px solid rgba(124,111,247,0.12)"},children:[l.jsx(Du,{size:12,className:"mx-auto mb-1",style:{color:t.purple}}),l.jsx("span",{style:{fontSize:"0.6875rem",color:"rgba(12,11,24,0.5)",lineHeight:1.4,display:"block"},children:s})]},s))})]})]}),l.jsxs("div",{className:"relative flex gap-5 mb-2 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"120ms"},children:[l.jsxs("div",{className:"flex flex-col items-center shrink-0",style:{width:40},children:[l.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(0,240,200,0.08)",border:"2px solid rgba(0,240,200,0.5)"},children:l.jsx(Du,{size:14,style:{color:"#00b896"}})}),l.jsx("div",{className:"w-px mt-2 flex-1",style:{background:"rgba(12,11,24,0.1)",minHeight:24}})]}),l.jsxs("div",{className:"pb-6",children:[l.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-2",children:[l.jsxs("div",{children:[l.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:Ga},children:"Google UX Design Certificate"}),l.jsx("p",{className:"text-sm mt-0.5",style:{color:"#11AF95",fontWeight:600},children:"专业认证 · Coursera"})]}),l.jsx("span",{className:"text-xs hidden sm:block",style:{color:"rgba(12,11,24,0.35)"},children:"2017"})]}),l.jsx("p",{className:"mb-4",style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.48)",lineHeight:1.85},children:"系统学习 UI/UX 设计全链路技能，覆盖 PS、AI、AE、C4D 视觉设计工具，Axure、Sketch 原型交互工具，以及 HTML+CSS 前端基础与用户研究方法论，完成从视觉到交互的完整设计能力构建"}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:["全栈设计工具掌握","Google 官方认证","团队项目第一名"].map(s=>l.jsxs("div",{className:"rounded-xl p-2.5 text-center",style:{background:"rgba(0,240,200,0.08)",border:"1px solid rgba(0,240,200,0.2)"},children:[l.jsx(Tv,{size:12,className:"mx-auto mb-1",style:{color:"#00b896"}}),l.jsx("span",{style:{fontSize:"0.6875rem",color:"rgba(12,11,24,0.5)",lineHeight:1.4,display:"block"},children:s})]},s))})]})]}),l.jsxs("div",{className:"relative flex gap-5 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"200ms"},children:[l.jsx("div",{className:"shrink-0 flex items-s't",style:{width:40},children:l.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(251,146,60,0.08)",border:"2px dashed rgba(251,146,60,0.3)"},children:l.jsx(L1,{size:14,style:{color:"#fb923c"}})})}),l.jsxs("div",{className:"flex-1 rounded-2xl p-4",style:{background:"rgba(251,146,60,0.05)",border:"1px solid rgba(251,146,60,0.14)"},children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-pulse",style:{background:"#fb923c",boxShadow:"0 0 8px #fb923c"}}),l.jsx("span",{className:"text-xs",style:{color:"#fb923c",fontWeight:700},children:"进行中"})]}),l.jsx("p",{style:{fontSize:"0.875rem",fontWeight:600,color:Ga},children:"Advanced AI for UX"}),l.jsx("p",{className:"text-xs mt-0.5",style:{color:"rgba(12,11,24,0.38)"},children:"Stanford Online · 持续学习中…"})]})]})]}),l.jsx("div",{className:"hidden lg:block my-4",style:{background:"linear-gradient(180deg,transparent,rgba(12,11,24,0.1) 20%,rgba(12,11,24,0.1) 80%,transparent)"}}),l.jsxs("div",{className:"pl-0 lg:pl-12 mt-12 lg:mt-0",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[l.jsx(Du,{size:13,style:{color:"#f472b6"}}),l.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"CERTIFICATIONS"})]}),l.jsxs("div",{className:"grid sm:grid-cols-2 gap-2.5 mb-12",children:[l.jsx("div",{className:"hidden md:block",children:l.jsx(l0,{c:fd[0],delay:65},fd[0].name)}),fd.slice(1).map((s,o)=>l.jsx(l0,{c:s,delay:65},s.name))]}),l.jsxs("div",{className:"hidden md:block",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full",style:{background:"#f472b6"}}),l.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"EXPERTISE KEYWORDS"})]}),l.jsx("div",{className:"flex flex-wrap gap-2",children:Sw.map((s,o)=>l.jsx("span",{className:"px-3 py-1.5 rounded-lg text-xs cursor-default select-none transition-all duration-300",style:{background:"rgba(255,255,255,0.6)",border:"1px solid rgba(12,11,24,0.08)",color:"rgba(12,11,24,0.5)",opacity:e?1:0,transform:e?"scale(1)":"scale(0.88)",transition:"opacity 0.4s, transform 0.4s, background 0s, border-color 0s, color 0s",transitionDelay:"0ms"},onMouseEnter:c=>{const f=["#00b896","#7c6ff7","#f472b6","#34d399","#fb923c","#38bdf8"],d=f[o%f.length];c.currentTarget.style.background=`${d}12`,c.currentTarget.style.borderColor=`${d}22`,c.currentTarget.style.color=d},onMouseLeave:c=>{c.currentTarget.style.background="rgba(255,255,255,0.6)",c.currentTarget.style.borderColor="rgba(12,11,24,0.08)",c.currentTarget.style.color="rgba(12,11,24,0.5)"},children:s},s))})]})]})]})]})]})}const bw="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Mw(i){const[e,t]=V.useState(!1),s=()=>{t(!0)},{src:o,alt:c,style:f,className:d,...p}=i;return e?l.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${d??""}`,style:f,children:l.jsx("div",{className:"flex items-center justify-center w-full h-full",children:l.jsx("img",{src:bw,alt:"Error loading image",...p,"data-original-url":o})})}):l.jsx("img",{src:o,alt:c,className:d,style:f,...p,onError:s})}const ww="/assets/cd928feb81fb8ff325ac41aaef07a759-BH8O_PaO.jpg",Ew=({size:i=20,color:e="currentColor"})=>l.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"#07C160",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M10.0014 14.6757C10.0011 14.6551 10.001 14.6345 10.001 14.6138C10.001 12.1055 12.0175 9.99564 14.7539 9.38092C14.3904 7.07873 11.9602 5.19995 8.90098 5.19995C5.58037 5.19995 3.00098 7.41344 3.00098 9.9793C3.00098 10.9487 3.36131 11.88 4.04082 12.6781C4.0728 12.7157 4.12443 12.7717 4.19342 12.8427C4.78537 13.4517 5.13709 14.2457 5.19546 15.0805C5.90857 14.6683 6.74285 14.5123 7.55832 14.6392C7.72416 14.665 7.85986 14.6847 7.96345 14.6982C8.27111 14.7383 8.58419 14.7586 8.90098 14.7586C9.27825 14.7586 9.64595 14.7301 10.0014 14.6757ZM10.4581 16.627C9.95467 16.7133 9.43399 16.7586 8.90098 16.7586C8.49441 16.7586 8.09502 16.7323 7.70499 16.6815C7.58312 16.6656 7.4317 16.6436 7.25073 16.6154C6.87693 16.5572 6.49436 16.6321 6.1713 16.8268L4.26653 17.9745C4.12052 18.0646 3.94891 18.1057 3.77733 18.0916C3.33814 18.0554 3.01178 17.6744 3.04837 17.2405L3.19859 15.4596C3.23664 15.0086 3.07664 14.5632 2.75931 14.2367C2.66182 14.1364 2.5814 14.0491 2.51802 13.9747C1.56406 12.8542 1.00098 11.4732 1.00098 9.9793C1.00098 6.23517 4.53793 3.19995 8.90098 3.19995C12.9601 3.19995 16.3041 5.82699 16.7504 9.20788C20.1225 9.36136 22.801 11.723 22.801 14.6138C22.801 15.8068 22.3448 16.9097 21.572 17.8044C21.5206 17.8639 21.4555 17.9336 21.3765 18.0137C21.1194 18.2744 20.9898 18.6301 21.0206 18.9903L21.1423 20.4125C21.172 20.759 20.9076 21.0632 20.5518 21.0921C20.4128 21.1034 20.2738 21.0706 20.1555 20.9986L18.6124 20.0821C18.3506 19.9266 18.0407 19.8668 17.7379 19.9133C17.5913 19.9358 17.4686 19.9533 17.3699 19.966C17.0539 20.0066 16.7303 20.0277 16.401 20.0277C13.7074 20.0277 11.4025 18.6201 10.4581 16.627ZM17.4346 17.9364C18.0019 17.8494 18.5793 17.911 19.1105 18.1111C19.2492 17.5503 19.5373 17.0304 19.9524 16.6094C20.0027 16.5585 20.0388 16.5198 20.0584 16.4971C20.5467 15.9318 20.801 15.2839 20.801 14.6138C20.801 12.8095 18.8983 11.2 16.401 11.2C13.9037 11.2 12.001 12.8095 12.001 14.6138C12.001 16.4181 13.9037 18.0277 16.401 18.0277C16.6424 18.0277 16.8809 18.0124 17.115 17.9823C17.1957 17.972 17.3029 17.9566 17.4346 17.9364Z"})});function Tw(i=0){const e=V.useRef(null),[t,s]=V.useState(!1);return V.useEffect(()=>{const o=new IntersectionObserver(([c])=>{c.isIntersecting&&(setTimeout(()=>s(!0),i),o.disconnect())},{threshold:.04});return e.current&&o.observe(e.current),()=>o.disconnect()},[i]),{ref:e,vis:t}}function c0({children:i,onClick:e,primary:t,color:s}){const o=V.useRef(null),[c,f]=V.useState({x:0,y:0}),[d,p]=V.useState(!1);return l.jsx("button",{ref:o,className:"relative flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm overflow-hidden",style:{background:t?"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))":"transparent",border:t?"none":"1px solid rgba(var(--c1), 0.95)",color:t?"var(--bg)":"rgba(var(--c1), 0.95)",fontWeight:t?700:500,transform:`translate(${c.x}px,${c.y}px)`,transition:d?"transform 0.2s ease-out,box-shadow 0.2s":"transform 0.5s cubic-bezier(0.23,1,0.32,1),box-shadow 0.2s",boxShadow:d&&t?"0 0 35px rgba(var(--c1), 0.4)":"none",cursor:"default"},onMouseMove:m=>{const x=o.current.getBoundingClientRect();f({x:(m.clientX-x.left-x.width/2)*.4,y:(m.clientY-x.top-x.height/2)*.4})},onMouseEnter:()=>p(!0),onMouseLeave:()=>{p(!1),f({x:0,y:0})},onClick:e,children:i})}const Aw=[{icon:l.jsx(Xa,{size:15}),label:"Email",value:"quweijia@vip.qq.com",href:"mailto:quweijia@vip.qq.com",color:"rgb(var(--c1))",maskType:"email"},{icon:l.jsx(i1,{size:15}),label:"PhoneCall",value:"156-6279-6885",href:" ",color:"#f0f4f8",maskType:"phone"},{icon:l.jsx(Ew,{size:15}),label:"WeChat",value:"vic-qu",href:" ",color:"#07C160"},{icon:l.jsx(M1,{size:15}),label:"X / Twitter",value:"@vicqu_design",href:"https://twitter.com/vicqu_design",color:"#7c6ff7",hideOnMobile:!0}],Cw=[{label:"Response Rate",value:"97%",color:"rgb(var(--c1))"},{label:"Reply Time",value:"< 24h",color:"#7c6ff7"},{label:"Remote OK",value:"Yes",color:"#f472b6"},{label:"Availability",value:"On",color:"#34d399"}];function Rw({s:i,onQRCodeClick:e,className:t=""}){const[s,o]=V.useState(!1),[c,f]=V.useState(!1),[d,p]=V.useState(!1),m=i.label==="Email",x=i.label==="PhoneCall",b=i.label==="WeChat",y=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),_="maskType"in i&&i.maskType&&!y,M=(()=>{if(!_||d)return i.value;const S=i.maskType;return S==="phone"?i.value.replace(/\D/g,"").replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"):S==="email"?i.value.replace(/^(.{2}).*(@.*)$/,"$1******$2"):i.value})(),w=async S=>{if(m){S.preventDefault();const v="quweijia@vip.qq.com";try{await navigator.clipboard.writeText(v),f(!0),setTimeout(()=>f(!1),2e3)}catch{try{const N=document.createElement("textarea");N.value=v,N.style.position="fixed",N.style.left="-999999px",N.style.top="-999999px",document.body.appendChild(N),N.focus(),N.select();const T=document.execCommand("copy");document.body.removeChild(N),T&&(f(!0),setTimeout(()=>f(!1),2e3))}catch(N){console.error("Failed to copy email:",N)}}}else if(x)if(y)window.location.href="tel:15662796885";else{S.preventDefault();const v="15662796885";try{await navigator.clipboard.writeText(v),f(!0),setTimeout(()=>f(!1),2e3)}catch{try{const N=document.createElement("textarea");N.value=v,N.style.position="fixed",N.style.left="-999999px",N.style.top="-999999px",document.body.appendChild(N),N.focus(),N.select();const T=document.execCommand("copy");document.body.removeChild(N),T&&(f(!0),setTimeout(()=>f(!1),2e3))}catch(N){console.error("Failed to copy phone:",N)}}}else b&&(S.preventDefault(),e&&e(),y&&setTimeout(()=>{window.location.href="weixin://"},100))};return l.jsxs("a",{href:x&&y?"tel:15662796885":i.href,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-3 p-4 rounded-xl transition-all duration-200 ${t}`,style:{background:s?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.06)",border:s?`1px solid ${i.color==="rgb(var(--c1))"?"rgba(var(--c1), 0.15)":i.color+"25"}`:"1px solid rgba(255,255,255,0.12)",transform:s?"translateX(6px)":"none",textDecoration:"none",cursor:m||x||b?"pointer":"default"},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:w,children:[l.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200",style:{background:`${i.color}10`,border:`1px solid ${i.color}18`,color:i.color,boxShadow:s?`0 0 14px ${i.color}20`:"none"},children:i.icon}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{style:{fontSize:"0.8125rem",fontWeight:600,color:"#f0f4f8"},children:i.label}),l.jsxs("div",{className:"flex items-center gap-1.5 mt-1.5",children:[l.jsx("span",{className:"text-xs truncate",style:{color:"rgba(255,255,255,0.5)"},children:M}),_&&l.jsx("button",{onClick:S=>{S.preventDefault(),S.stopPropagation(),p(!d)},className:"flex items-center justify-center w-5 h-5 rounded transition-all duration-200 hover:scale-110 flex-shrink-0",style:{color:d?i.color:"rgba(255,255,255,0.3)",opacity:s?1:0,transition:"opacity 0.2s"},title:d?"隐藏":"显示",children:d?l.jsx(cf,{size:11}):l.jsx(uf,{size:11})})]})]}),m||x&&!y||b?c?l.jsx(x0,{size:11,style:{color:i.color,opacity:1,transition:"opacity 0.2s",flexShrink:0}}):l.jsx(_0,{size:11,style:{color:"rgba(255,255,255,0.2)",opacity:s?1:0,transition:"opacity 0.2s",flexShrink:0}}):l.jsx(lf,{size:11,style:{color:"rgba(255,255,255,0.2)",opacity:s?1:0,transition:"opacity 0.2s",flexShrink:0}})]})}function Nw({onOpenAboutMe:i}){const{ref:e,vis:t}=Tw(.04),{theme:s}=Zs(),[o,c]=V.useState(""),[f,d]=V.useState(!1),[p,m]=V.useState(!1),[x,b]=V.useState(!1),[y,_]=V.useState(!1),[M,w]=V.useState(!1),[S,v]=V.useState(!1),k=()=>{const U=document.createElement("a");U.href="https://cdn.jsdelivr.net/gh/quweijia/file@main/1%E3%80%81UI%20%E4%B8%BB%E7%AE%A1-%E6%9B%B2%E7%BB%B4%E7%94%B2-15662796885.pdf",U.download="曲维甲-UI主管-简历.pdf",U.target="_blank",U.rel="noopener noreferrer",document.body.appendChild(U),U.click(),document.body.removeChild(U)},N=()=>{if(!o.trim())return;if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const F=encodeURIComponent(o);window.location.href=`sms:15662796885${/iPhone|iPad|iPod/i.test(navigator.userAgent)?"&":"?"}body=${F}`,setTimeout(()=>{c("")},500)}else v(!0)},T=async()=>{const U="quweijia@vip.qq.com";try{await navigator.clipboard.writeText(U),_(!0),setTimeout(()=>{_(!1)},2e3)}catch{try{const D=document.createElement("textarea");D.value=U,D.style.position="fixed",D.style.left="-999999px",D.style.top="-999999px",document.body.appendChild(D),D.focus(),D.select();const B=document.execCommand("copy");document.body.removeChild(D),B&&(_(!0),setTimeout(()=>{_(!1)},2e3))}catch(D){console.error("Failed to copy email:",D)}}};return l.jsxs("section",{id:"contact",ref:e,className:"relative overflow-hidden",style:{background:"var(--bg)",padding:"180px 0 20px"},children:[l.jsx("div",{className:"absolute inset-x-0 top-0 h-px pointer-events-none",style:{background:`linear-gradient(90deg,transparent 5%,${s.cyan}2e 50%,transparent 95%)`}}),l.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none",style:{background:`radial-gradient(ellipse,${s.cyan}4d 0%,transparent 70%)`,filter:"blur(30px)"}}),l.jsx("div",{className:"absolute inset-x-0 top-0 flex items-start justify-center overflow-hidden pointer-events-none select-none",style:{paddingTop:"360px"},children:l.jsx("span",{style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,letterSpacing:"0.05em",color:"rgba(255,255,255,0.018)",whiteSpace:"nowrap"},children:"Vic Qu"})}),l.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[l.jsxs("div",{className:"text-center transition-all duration-700 mx-[0px] mt-6 mb-[80px]",style:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(30px)"},children:[l.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:s.cyan,letterSpacing:"0.22em",fontWeight:600},children:"GET IN TOUCH"}),l.jsxs("h2",{style:{fontSize:"clamp(2.8rem,7vw,5.5rem)",fontWeight:900,lineHeight:1.2,letterSpacing:"0em",color:"#f0f4f8"},children:["一起创造",l.jsx("br",{}),l.jsx("span",{style:{background:"linear-gradient(135deg, rgb(var(--c1)) 0%, rgb(var(--c2)) 25%, rgb(var(--c3)) 50%, rgb(var(--c2)) 75%, rgb(var(--c1)) 100%)",backgroundSize:"200% 200%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline-block",animation:"flowGradient 6s ease infinite"},children:"卓越的设计"})]}),l.jsxs("div",{style:{position:"relative",width:"100%",margin:"1.25rem 0"},children:[l.jsxs("svg",{viewBox:"0 0 400 20",className:"mx-auto",style:{width:"min(400px,80%)",opacity:.5,overflow:"visible"},children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:"waveGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:s.cyan,stopOpacity:"0"}),l.jsx("stop",{offset:"30%",stopColor:s.cyan,stopOpacity:"1"}),l.jsx("stop",{offset:"70%",stopColor:s.cyan,stopOpacity:"1"}),l.jsx("stop",{offset:"100%",stopColor:s.cyan,stopOpacity:"0"})]})}),l.jsx("path",{d:"M0 10 C40 2 80 18 120 10 S200 2 240 10 S320 18 360 10 S390 4 400 10",fill:"none",stroke:"url(#waveGradient)",strokeWidth:"2",strokeDasharray:"80 400",style:{animation:"waveMove 3s linear infinite",willChange:"stroke-dashoffset",transform:"translateZ(0)"}})]}),l.jsx("style",{children:`
    @keyframes waveMove {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: -440; }
    }
  `})]}),l.jsxs("p",{className:"max-w-2xl mx-auto",style:{fontSize:"1rem",color:"rgba(255,255,255,0.35)",lineHeight:1.85},children:[l.jsx("span",{className:"font-bold text-[rgba(var(--c1),0.8)]",children:"岗位意向：UI/UX 设计主管职位"}),l.jsx("br",{}),"带领设计团队搭建体系化设计系统，通过设计管理驱动业务价值增长",l.jsx("span",{className:"inline md:hidden",children:"，"}),l.jsx("br",{className:"hidden md:inline"}),"承接从0到1的企业级设计规范与团队建设工作"]}),l.jsxs("div",{className:"inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"},children:[l.jsx(w0,{size:11,style:{color:"rgba(255,255,255,0.3)"}}),l.jsx("span",{className:"text-xs",style:{color:"rgba(255,255,255,0.3)"},children:"济南 · 中国，接受全球远程机会"})]}),l.jsxs("div",{className:"hidden md:flex flex-wrap justify-center gap-4 mt-8",children:[l.jsxs("div",{className:"relative",children:[l.jsxs(c0,{primary:!0,onClick:()=>b(!x),children:[l.jsx(Xa,{size:14})," 发送邮件"]}),x&&l.jsxs("div",{className:"absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-xl",style:{bottom:"calc(100% + 12px)",background:"rgba(20, 20, 25, 0.95)",backdropFilter:"blur(12px)",border:"1px solid rgba(var(--c1), 0.3)",boxShadow:"0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(var(--c1), 0.15)",whiteSpace:"nowrap",zIndex:50,animation:"fadeInUp 0.3s ease-out"},children:[l.jsx("span",{className:"text-sm select-all",style:{color:"#f0f4f8",fontWeight:500,fontFamily:"monospace"},children:M?"quweijia@vip.qq.com":"qu******@vip.qq.com"}),l.jsx("button",{onClick:U=>{U.stopPropagation(),w(!M)},className:"flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-200 hover:scale-110",style:{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.15)",color:M?"rgb(var(--c1))":"rgba(255,255,255,0.4)"},title:M?"隐藏":"显示",children:M?l.jsx(cf,{size:13}):l.jsx(uf,{size:13})}),l.jsx("button",{onClick:T,className:"flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-200 hover:scale-110",style:{background:y?"rgba(var(--c1), 0.2)":"rgba(255,255,255,0.1)",border:y?"1px solid rgba(var(--c1), 0.4)":"1px solid rgba(255,255,255,0.15)",color:y?"rgb(var(--c1))":"rgba(255,255,255,0.6)"},children:y?l.jsx(x0,{size:13}):l.jsx(_0,{size:13})}),l.jsx("div",{className:"absolute left-1/2 -translate-x-1/2",style:{bottom:"-6px",width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid rgba(var(--c1), 0.3)"}}),l.jsx("div",{className:"absolute left-1/2 -translate-x-1/2",style:{bottom:"-5px",width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid rgba(20, 20, 25, 0.95)"}})]})]}),l.jsxs(c0,{onClick:()=>m(!0),children:[l.jsx(Jp,{size:14})," 下载 PDF 简历"]})]})]}),l.jsx("div",{className:"hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14 transition-all duration-700",style:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(20px)",transitionDelay:"100ms"},children:Cw.map((U,F)=>l.jsxs("div",{className:"rounded-2xl p-5 text-center group cursor-default select-none transition-all duration-200 hover:scale-[1.02]",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",transitionDelay:`${F*50}ms`},children:[l.jsx("div",{style:{fontSize:"1.625rem",fontWeight:900,color:U.color,lineHeight:1},children:U.value}),l.jsx("p",{className:"mt-1.5 text-xs",style:{color:"rgba(255,255,255,0.3)",letterSpacing:"0.06em"},children:U.label})]},U.label))}),l.jsxs("div",{className:"grid lg:grid-cols-3 gap-6 mb-20",children:[l.jsxs("div",{className:"transition-all duration-700",style:{opacity:t?1:0,transform:t?"translateX(0)":"translateX(-20px)",transitionDelay:"150ms"},children:[l.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"CONNECT"}),l.jsx("div",{className:"space-y-2.5",children:Aw.map(U=>l.jsx(Rw,{s:U,className:U.hideOnMobile?"hidden md:flex":"",onQRCodeClick:U.label==="WeChat"?()=>v(!0):void 0},U.label))})]}),l.jsxs("div",{className:"transition-all duration-700",style:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(20px)",transitionDelay:"220ms"},children:[l.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"RESUME"}),l.jsxs("div",{className:"relative overflow-hidden rounded-2xl p-6 h-[calc(100%-35px)]",style:{background:"linear-gradient(135deg,rgba(0,240,200,0.08) 0%,rgba(124,111,247,0.05) 100%)",border:"1px solid rgba(0,240,200,0.12)"},children:[l.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{opacity:.04},children:[[15,30,45,60,75,90].map(U=>l.jsx("line",{x1:"0",y1:U,x2:"100",y2:U,stroke:"rgb(var(--c1))",strokeWidth:"0.5"},U)),[15,30,45,60,75,90].map(U=>l.jsx("line",{x1:U,y1:"0",x2:U,y2:"100",stroke:"rgb(var(--c1))",strokeWidth:"0.5"},U))]}),l.jsx("div",{className:"absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none",style:{background:"radial-gradient(circle,rgba(0,240,200,0.1) 0%,transparent 70%)"}}),l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 6px rgb(var(--c1))"}}),l.jsx("span",{className:"text-xs",style:{color:"rgb(var(--c1))",fontWeight:600,letterSpacing:"0.1em"},children:"RESUME · 简历"})]}),l.jsx("h3",{className:"mt-3 mb-1",style:{fontSize:"1.125rem",fontWeight:800,color:"#f0f4f8"},children:"曲维甲 · Vic Qu"}),l.jsx("p",{className:"text-xs mb-5",style:{color:"rgb(var(--c1))",fontWeight:500},children:"ENFJ · Full-Stack UI/UX Designer"}),l.jsx("p",{className:"mb-5",style:{fontSize:"0.8125rem",color:"rgba(255,255,255,0.4)",lineHeight:1.8},children:"PDF简历：个人信息、求职意向、教育背景、工作经历、技能清单"}),l.jsx("div",{className:"flex gap-6 mb-6",children:[["10+","年经验"],["60+","项目"],["20+","AI工具"]].map(([U,F])=>l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"1.125rem",fontWeight:800,color:"#f0f4f8",lineHeight:1.5},children:U}),l.jsx("div",{className:"text-xs mt-0.5",style:{color:"rgba(255,255,255,0.28)"},children:F})]},F))}),l.jsxs("div",{className:"flex flex-wrap gap-3",children:[l.jsxs("button",{onClick:()=>m(!0),className:"flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.03]",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",color:"var(--bg)",fontWeight:700,boxShadow:"0 0 20px rgba(var(--c1), 0.2)"},children:[l.jsx(Jp,{size:13,style:{color:"var(--bg)"}})," ","下载 PDF"]}),l.jsxs("button",{onClick:()=>i==null?void 0:i(),className:"flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.02]",style:{border:"1px solid rgba(var(--c1), 0.3)",color:"rgb(var(--c1))",background:"rgba(var(--c1), 0.08)"},children:[l.jsx(lf,{size:13,style:{color:"rgb(var(--c1))"}})," ","在线版"]})]})]})]})]}),l.jsxs("div",{className:"transition-all duration-700",style:{opacity:t?1:0,transform:t?"translateX(0)":"translateX(20px)",transitionDelay:"290ms"},children:[l.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"QUICK MESSAGE"}),l.jsxs("div",{className:"rounded-2xl p-5 mb-6",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)"},children:[l.jsx("textarea",{value:o,onChange:U=>c(U.target.value),rows:4,placeholder:"你好 Vic！我对你的设计作品很感兴趣，希望能进一步交流...",className:"w-full resize-none outline-none text-base mb-3",style:{background:"transparent",color:"#f0f4f8",lineHeight:1.7}}),l.jsx("button",{onClick:N,disabled:!o.trim(),className:"w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm transition-all duration-200",style:{background:o.trim()?f?"rgba(var(--c1), 0.1)":"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))":"rgba(255, 255, 255, 0.05)",color:o.trim()?f?"rgb(var(--c1))":"var(--bg)":"rgba(255, 255, 255, 0.3)",fontWeight:700,border:o.trim()?f?"1px solid rgba(var(--c1), 0.3)":"none":"1px solid rgba(255, 255, 255, 0.1)",cursor:o.trim()?"pointer":"not-allowed",opacity:o.trim()?1:.5},children:f?l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"✓"})," 已发送！"]}):l.jsxs(l.Fragment,{children:[l.jsx(T0,{size:13,style:{color:o.trim()?"var(--bg)":"rgba(255, 255, 255, 0.3)"}})," ","发送消息"]})})]}),l.jsxs("div",{className:"rounded-xl p-4 flex items-start gap-3",style:{background:"rgba(0,240,200,0.04)",border:"1px solid rgba(0,240,200,0.1)"},children:[l.jsx("div",{className:"shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center",style:{background:"rgba(0,240,200,0.08)"},children:l.jsx("span",{className:"w-2.5 h-2.5 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 10px rgb(var(--c1))"}})}),l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:"0.875rem",fontWeight:600,color:"#f0f4f8"},children:"目前接受新机会"}),l.jsxs("p",{className:"text-xs mt-0.5",style:{color:"rgba(255,255,255,0.3)",lineHeight:1.6},children:["全职设计师 · 项目合作 · 设计咨询",l.jsx("br",{}),"回复率 97% · 通常 24 小时内响应"]})]})]})]})]}),l.jsxs("div",{className:"pt-7 flex flex-wrap items-center justify-between gap-4",style:{borderTop:"1px solid rgba(255,255,255,0.04)"},children:[l.jsx("div",{className:"flex items-center gap-3",children:l.jsxs("p",{className:"text-xs",style:{color:"rgba(255,255,255,0.2)"},children:["© 2026 · Vic Qu · Designed by Figma"," ",l.jsx("span",{style:{color:"rgb(var(--c1))"},children:"& "}),"TRAE CN"]})}),l.jsx("p",{className:"text-xs",style:{color:"rgba(255,255,255,0.2)"},children:"React · Tailwind · Motion · AI-Augmented · Github"})]})]}),l.jsx(A0,{isOpen:p,onClose:()=>m(!1),onConfirm:k}),S&&l.jsx(Vs,{children:l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(12px)"},onClick:()=>v(!1),children:l.jsxs("div",{className:"relative max-w-md w-full",onClick:U=>U.stopPropagation(),children:[l.jsx("button",{onClick:()=>v(!1),className:"absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"rgba(255, 255, 255, 0.9)"},children:l.jsx(_i,{size:20})}),l.jsx("div",{className:"rounded-2xl overflow-hidden",style:{background:"white",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)"},children:l.jsx(Mw,{src:ww,alt:"WeChat QR Code - 长按识别二维码",className:"w-full h-auto",style:{display:"block"}})}),l.jsx("p",{className:"text-center mt-4",style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"0.875rem"},children:"长按图片保存或识别二维码"})]})})})]})}function Pw({autoPlay:i=!1,defaultTrackIndex:e=2}){const[t,s]=V.useState(i),[o,c]=V.useState(!1),[f,d]=V.useState(60),[p,m]=V.useState(0),[x,b]=V.useState(0),[y,_]=V.useState(!1),[M,w]=V.useState(e),[S,v]=V.useState("bars"),[k,N]=V.useState(new Array(64).fill(.3)),T=V.useRef(null),U=V.useRef(null),F=[{name:"Deep Space Drift",artist:"Vic Qu · Ambient",url:"/assets/audio/SoundHelix-Song-1.mp3"},{name:"Neon Dreams",artist:"Vic Qu · Electronic",url:"/assets/audio/SoundHelix-Song-2.mp3"},{name:"Urban Flow",artist:"Vic Qu · Chill",url:"/assets/audio/SoundHelix-Song-3.mp3"}],D=F[M];V.useEffect(()=>{T.current&&(T.current.volume=f/100,T.current.muted=o)},[f,o]),V.useEffect(()=>{const ee=T.current;if(!ee)return;const ae=()=>m(ee.currentTime),z=()=>b(ee.duration),re=()=>{M<F.length-1?w(M+1):w(0)};return ee.addEventListener("timeupdate",ae),ee.addEventListener("loadedmetadata",z),ee.addEventListener("ended",re),()=>{ee.removeEventListener("timeupdate",ae),ee.removeEventListener("loadedmetadata",z),ee.removeEventListener("ended",re)}},[M,F.length]),V.useEffect(()=>{const ee=T.current;ee&&i&&(ee.load(),ee.play().catch(ae=>{console.log("Autoplay prevented: ",ae),ae.name==="NotAllowedError"&&s(!1)}))},[]),V.useEffect(()=>{const ee=T.current;ee&&(ee.load(),t&&ee.play().catch(console.log))},[M,t]),V.useEffect(()=>{if(!t){N(new Array(64).fill(.1));return}const ee=(z,re,Pe)=>z+(re-z)*Pe,ae=()=>{N(z=>z.map(re=>{const Pe=Math.random()*.75+.15;return ee(re,Pe,.25)})),U.current=requestAnimationFrame(ae)};return U.current=requestAnimationFrame(ae),()=>{U.current&&cancelAnimationFrame(U.current)}},[t]);const B=async()=>{const ee=T.current;if(ee)if(t)ee.pause(),s(!1);else try{await ee.play(),s(!0)}catch(ae){console.log("播放失败：",ae)}},P=()=>_(!y),C=()=>c(!o),j=ee=>{d(Number(ee.target.value))},W=ee=>{if(!T.current||!x)return;const ae=(ee.clientX-ee.currentTarget.getBoundingClientRect().left)/ee.currentTarget.offsetWidth;T.current.currentTime=ae*x},$=()=>{w(ee=>(ee-1+F.length)%F.length)},ue=()=>{w(ee=>(ee+1)%F.length)},me=ee=>{if(isNaN(ee))return"0:00";const ae=Math.floor(ee/60),z=Math.floor(ee%60).toString().padStart(2,"0");return`${ae}:${z}`},le=()=>{const ee=["bars","wave","circle","spectrum"];v(ee[(ee.indexOf(S)+1)%ee.length])},pe=()=>{const ae=Math.floor(k.length/32);switch(S){case"bars":return l.jsx("div",{className:"flex items-end justify-center gap-1 h-24 px-2",children:Array.from({length:32}).map((z,re)=>{const Pe=k[re*ae]||.1,ie=Math.max(4,Pe*80);return l.jsx("div",{className:"flex-1 rounded-t-full transition-all",style:{height:`${ie}px`,background:"linear-gradient(to top, rgb(var(--c1)), rgb(var(--c2)))"}},re)})});case"wave":return l.jsx("svg",{className:"w-full h-24",viewBox:"0 0 320 50",children:l.jsx("path",{d:"M0 30 "+Array.from({length:32}).map((z,re)=>`L${re/32*320} ${48-(k[re*ae]||0)*40}`).join(" "),fill:"none",stroke:"rgb(var(--c1))",strokeWidth:"1"})});case"circle":return l.jsx("div",{className:"relative w-full h-24 flex items-center justify-center",children:Array.from({length:24}).map((z,re)=>{const Pe=k[Math.floor(re/24*k.length)]||.2,ie=t?20+Pe*25:20;return l.jsx("div",{className:"absolute w-0.5 rounded-full",style:{height:`${ie}px`,background:"rgb(var(--c2))",transform:`rotate(${re*15}deg) translateY(-${ie/2}px)`}},re)})});default:return l.jsx("div",{className:"h-24 flex items-center justify-center text-white",children:"🎵"})}},H=()=>{switch(S){case"bars":return l.jsx(vv,{size:14});case"wave":return l.jsx(ov,{size:14});case"circle":return l.jsx($p,{size:14});default:return l.jsx($p,{size:14})}};return l.jsxs(l.Fragment,{children:[l.jsx("audio",{ref:T,src:D.url,preload:"auto"}),l.jsxs("div",{className:"fixed z-50 transition-all duration-500",style:{bottom:"calc(1.5rem / var(--screen-scale))",right:"calc(1.5rem / var(--screen-scale))",transform:"scale(var(--screen-scale))",transformOrigin:"bottom right"},children:[!y&&l.jsx("button",{onClick:P,className:"w-14 h-14 rounded-full flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:l.jsx(Zp,{size:24,className:`text-white ${t?"animate-spin":""}`})}),y&&l.jsxs("div",{className:"w-[360px] p-5 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/10",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:l.jsx(Zp,{size:20,className:`text-white ${t?"animate-spin":""}`})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"text-white text-sm truncate",children:D.name}),l.jsx("div",{className:"text-white/60 text-xs truncate",children:D.artist})]}),l.jsx("button",{onClick:P,className:"w-8 h-8 rounded-full hover:bg-white/10",children:l.jsx(v0,{size:18,className:"text-white/60"})})]}),l.jsxs("div",{className:"relative rounded-lg bg-white/5 mb-3",children:[pe(),l.jsx("button",{onClick:le,className:"absolute top-2 right-2 w-7 h-7 rounded-full bg-black/30 flex items-center justify-center text-white",children:H()})]}),l.jsxs("div",{className:"mb-2",children:[l.jsx("div",{className:"h-1.5 bg-white/10 rounded-full cursor-pointer",onClick:W,children:l.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[rgb(var(--c1))] to-[rgb(var(--c2))]",style:{width:`${p/x*100||0}%`}})}),l.jsxs("div",{className:"flex justify-between text-xs text-white/50 mt-1",children:[l.jsx("span",{children:me(p)}),l.jsx("span",{children:me(x)})]})]}),l.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[l.jsx("button",{onClick:$,className:"w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center",children:l.jsx(g1,{size:18,className:"text-white"})}),l.jsx("button",{onClick:B,className:"w-14 h-14 rounded-full flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:t?l.jsx(n1,{size:20,className:"text-white"}):l.jsx(l1,{size:20,className:"text-white ml-0.5"})}),l.jsx("button",{onClick:ue,className:"w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center",children:l.jsx(v1,{size:18,className:"text-white"})})]}),l.jsx("style",{children:`
  /* 基础样式重置 */
  .volume-slider {
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    border-radius: 999px;
  }
  /* 滑块样式（已生效的小圆点） */
  .volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: rgb(var(--c1));
    cursor: pointer;
  }
  .volume-slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: rgb(var(--c1));
    cursor: pointer;
    border: none;
  }
`}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("button",{onClick:C,className:"w-8 h-8 rounded-full hover:bg-white/10",children:o?l.jsx(R1,{size:16,className:"text-white"}):l.jsx(A1,{size:16,className:"text-white"})}),l.jsx("input",{type:"range",min:"0",max:"100",value:f,onChange:j,className:"flex-1 h-1.5 rounded-full volume-slider",style:{background:`linear-gradient(to right, rgb(var(--c1)) ${f}%, rgba(255,255,255,0.2) ${f}%)`}}),l.jsxs("span",{className:"text-xs text-white w-10 text-right",children:[f,"%"]})]})]})]})]})}const u0="/assets/sprite_9900x4800_70-pwo8PaYC.png",hd=9,kw=8,d0=70,Dw=400,kl=.96,Lw=(i,e,t)=>{const s=i.scrollTop,o=e-s,c=performance.now(),f=d=>{const p=d-c,m=Math.min(p/t,1),x=m*(2-m);i.scrollTop=s+o*x,m<1&&requestAnimationFrame(f)};requestAnimationFrame(f)},Ba=1100,pd=600;function Iw(){const i=V.useRef(null),e=V.useRef(null),t=V.useRef(null),s=V.useRef(null),o=V.useRef(null),c=V.useRef(!1),[f,d]=V.useState(!1),[p,m]=V.useState(!1),[x,b]=V.useState(!1),y=V.useRef(0),_=()=>{const S=e.current,v=t.current;if(!S||!v)return;const k=window.innerWidth,N=k/Ba,T=pd*N;v.style.height=`${T}px`,v.style.width=`${k}px`,S.style.width=`${Ba*hd*N}px`,S.style.height=`${pd*kw*N}px`},M=S=>{const v=e.current;if(!v)return;y.current=S;const k=window.innerWidth,N=k/Ba,T=S%hd,U=Math.floor(S/hd),F=k/2-(T*Ba+Ba/2)*N,D=-(U*pd*N);v.style.transform=`translate3d(${F}px, ${D}px, 0)`};V.useEffect(()=>{const S=()=>{b(window.innerWidth<768)};return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]),V.useEffect(()=>{const S=()=>{f&&(_(),M(y.current))};return window.addEventListener("resize",S),f&&(_(),M(0)),p||(document.body.style.overflow="hidden"),()=>{window.removeEventListener("resize",S),document.body.style.overflow="auto"}},[p,f]),V.useEffect(()=>{const S=new Image;S.src=u0,S.onload=()=>{d(!0)}},[]);const w=()=>{const S=i.current;!S||p||c.current||(window.requestAnimationFrame(()=>{const v=S.scrollTop,k=S.scrollHeight-S.clientHeight,N=Math.min(1,Math.max(0,v/k));if(o.current){const T=Math.max(0,1-N/.25);o.current.style.opacity=T.toString()}if(N<=kl){const T=N/kl,U=Math.floor(T*(d0-1));M(U),t.current&&(t.current.style.transform="scale(1)",t.current.style.opacity="1")}else{M(d0-1);const T=(N-kl)/(1-kl);if(t.current){const U=1-T*.5;t.current.style.transformOrigin="top left",t.current.style.transform=`scale(${U})`,t.current.style.opacity=(1-T).toString()}T>=.99&&m(!0)}c.current=!1}),c.current=!0)};return p?null:l.jsxs("div",{ref:i,onScroll:w,className:"scroll-video-overlay",style:{position:"fixed",inset:0,zIndex:99999,overflowY:"auto",overflowX:"hidden",background:"#000",scrollbarWidth:"none"},children:[l.jsx("style",{children:`
        .scroll-video-overlay::-webkit-scrollbar { display: none; }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(0.95); letter-spacing: 0.2em; }
          50% { opacity: 1; transform: scale(1); letter-spacing: 0.4em; }
        }
        .loading-text { animation: pulse-soft 2s infinite ease-in-out; }
        @keyframes shimmer-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer-run { animation: shimmer-move 1.5s infinite linear; }

        /* ⚡ 优化：动态鼠标样式（完美适配按钮 Hover 变色） */
        .scroll-mouse {
          width: 20px; 
          height: 30px;
          border: 2px solid currentColor; /* 核心：使用 currentColor 使其随 hover 变黑 */
          border-radius: 10px;
          display: flex;
          justify-content: center;
          padding-top: 5px;
          opacity: 0.6;
          transition: opacity 0.3s ease;
          flex-shrink: 0;
          position: relative;
          z-index: 10;
        }
        /* 鼠标悬停到按钮上时，图标完全显现 */
        button:hover .scroll-mouse {
          opacity: 1;
        }
        .scroll-dot {
          width: 3px; 
          height: 5px;
          background: currentColor; /* 核心：滚轮小点同样随 hover 变黑 */
          border-radius: 1.5px;
          animation: scrollAnim 1.8s ease-in-out infinite;
        }
        /* 滚轮小点下落动画 */
        @keyframes scrollAnim {
          0% { transform: translateY(0); opacity: 1; }
          20% { opacity: 1; }
          60% { transform: translateY(8px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
      `}),l.jsx("div",{style:{height:`${Dw}vh`,position:"relative"},children:l.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",width:"100%",overflow:"hidden",background:"#000"},children:[l.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",transform:x?"translateY(-60px)":"translateY(0)",zIndex:2},children:l.jsx("div",{ref:t,style:{position:"relative",overflow:"hidden",willChange:"transform, opacity",transform:x?"translateY(-60px)":"translateY(0)"},children:l.jsx("img",{ref:e,src:u0,alt:"intro-sprite",style:{position:"absolute",top:0,left:0,maxWidth:"none",display:"block",willChange:"transform",pointerEvents:"none",opacity:f?1:0}})})}),l.jsx("div",{ref:o,style:{position:"absolute",inset:0,transition:"opacity 0.2s ease",zIndex:3,pointerEvents:"none"},children:l.jsx(ag,{colors:["#00f0c8","#7c6ff7","#ff9ffc"],autoDemo:!0,autoSpeed:.5,autoIntensity:2.2})}),!f&&l.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#000",zIndex:100},children:[l.jsx("div",{className:"loading-text",style:{color:"white",fontSize:"12px",fontWeight:300,textTransform:"uppercase"},children:"Loading"}),l.jsx("div",{style:{width:"70px",height:"1.5px",background:"rgba(255,255,255,0.15)",marginTop:"6px",position:"relative",overflow:"hidden"},children:l.jsx("div",{className:"animate-shimmer-run",style:{position:"absolute",inset:0,background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)"}})})]}),l.jsx("div",{ref:s,style:{position:"absolute",bottom:"8vh",width:"100%",display:"flex",justifyContent:"center",zIndex:10},children:l.jsxs("button",{onClick:S=>{S.preventDefault();const v=i.current;if(!v)return;const k=v.scrollHeight-v.clientHeight;Lw(v,k,2800)},className:`
                relative z-10 flex items-center gap-4 px-[32px] py-[12px] 
                text-[14px] font-semibold uppercase tracking-[0.15em]
                text-white border border-white/40 rounded-[34px] 
                bg-black/30 backdrop-blur-sm overflow-hidden
                transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
                hover:scale-105 hover:text-[#212121] hover:border-[#C1A362]
                hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)]
                active:scale-100
                before:content-[''] before:absolute before:inset-0 before:m-auto
                before:w-[50px] before:h-[50px] before:rounded-full
                before:bg-white before:z-[-1] before:scale-0
                before:transition-all before:duration-700 before:ease-[cubic-bezier(0.23,1,0.32,1)]
                hover:before:scale-[6]
              `,children:[l.jsx("div",{className:"scroll-mouse",children:l.jsx("div",{className:"scroll-dot"})}),l.jsx("span",{className:"relative z-10",children:"SCROLL"}),l.jsx(v0,{size:18,className:"animate-bounce transition-colors duration-300 relative z-10"})]})})]})})]})}function Uw(){V.useEffect(()=>{const i=()=>{const s=window.innerWidth,o=1920;let c=1;s>o&&(c=Math.min(s/o,2.5)),document.documentElement.style.setProperty("--screen-scale",c.toString())};i();let e;const t=()=>{clearTimeout(e),e=window.setTimeout(i,200)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),clearTimeout(e)}},[])}const f0=new Set(["projects","education"]),h0=[{label:"Home",href:"hero"},{label:"Skills",href:"skills"},{label:"Projects",href:"projects"},{label:"Works",href:"portfolio"},{label:"Education",href:"education"},{label:"Contact",href:"contact"}];function Fw(){Uw();const[i,e]=V.useState("top"),[t,s]=V.useState("hero"),[o,c]=V.useState("hero"),[f,d]=V.useState(!1),p=V.useRef("hero"),m=V.useRef("hero"),x=V.useRef(0),b=V.useRef(0);V.useEffect(()=>{const w=new IntersectionObserver(S=>{let v="",k=1/0;S.forEach(N=>{N.isIntersecting&&N.boundingClientRect.top<k&&(k=N.boundingClientRect.top,v=N.target.id)}),v&&v!==p.current&&(p.current=v,cancelAnimationFrame(x.current),x.current=requestAnimationFrame(()=>s(v)))},{root:null,rootMargin:"-68px 0px -80% 0px",threshold:[0]});return h0.forEach(S=>{const v=document.getElementById(S.href);v&&w.observe(v)}),()=>w.disconnect()},[]),V.useEffect(()=>{const w=new IntersectionObserver(S=>{const v=window.innerHeight/2;let k="",N=1/0;S.forEach(T=>{if(T.isIntersecting){const U=Math.abs(T.boundingClientRect.top-v);U<N&&(N=U,k=T.target.id)}}),k&&k!==m.current&&(m.current=k,cancelAnimationFrame(b.current),b.current=requestAnimationFrame(()=>c(k)))},{root:null,rootMargin:"-45% 0px -45% 0px",threshold:[0]});return h0.forEach(S=>{const v=document.getElementById(S.href);v&&w.observe(v)}),()=>w.disconnect()},[]);const y=V.useCallback(w=>{var S;(S=document.getElementById(w))==null||S.scrollIntoView({behavior:"smooth"})},[]),_=f0.has(t),M=f0.has(o);return l.jsxs(ev,{children:[l.jsx(Iw,{}),i==="top"&&l.jsx(F1,{navMode:i,onToggleNavMode:()=>e(w=>w==="top"?"side":"top"),active:t,go:y,isLight:_,aboutOpen:f,setAboutOpen:d}),i==="side"&&l.jsx(j1,{active:o,onNavigate:y,isLight:M,onSwitchToTop:()=>e("top")}),l.jsx(Pw,{autoPlay:!0,defaultTrackIndex:2}),l.jsx("div",{className:"hidden md:block",children:l.jsx(tv,{})}),l.jsx("div",{className:"min-h-screen screen-scaled-root",style:{background:"var(--bg, #05050a)",color:"#f0f4f8",msOverflowStyle:"none",scrollbarWidth:"none"},children:l.jsxs("main",{children:[l.jsx(ew,{}),l.jsx(iw,{}),l.jsx(lw,{}),l.jsx(xw,{}),l.jsx(_w,{}),l.jsx(Nw,{onOpenAboutMe:()=>d(!0)})]})})]})}Jx.createRoot(document.getElementById("root")).render(l.jsx(Fw,{}));
