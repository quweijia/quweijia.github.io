(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var bu={exports:{}},Do={},Eu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function wx(){if(kp)return gt;kp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function S(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function _(F,ie,Ie){this.props=F,this.context=ie,this.refs=w,this.updater=Ie||M}_.prototype.isReactComponent={},_.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=_.prototype;function N(F,ie,Ie){this.props=F,this.context=ie,this.refs=w,this.updater=Ie||M}var D=N.prototype=new x;D.constructor=N,b(D,_.prototype),D.isPureReactComponent=!0;var R=Array.isArray,K=Object.prototype.hasOwnProperty,B={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function O(F,ie,Ie){var ne,ge={},Ee=null,_e=null;if(ie!=null)for(ne in ie.ref!==void 0&&(_e=ie.ref),ie.key!==void 0&&(Ee=""+ie.key),ie)K.call(ie,ne)&&!U.hasOwnProperty(ne)&&(ge[ne]=ie[ne]);var Re=arguments.length-2;if(Re===1)ge.children=Ie;else if(1<Re){for(var Oe=Array(Re),Ke=0;Ke<Re;Ke++)Oe[Ke]=arguments[Ke+2];ge.children=Oe}if(F&&F.defaultProps)for(ne in Re=F.defaultProps,Re)ge[ne]===void 0&&(ge[ne]=Re[ne]);return{$$typeof:s,type:F,key:Ee,ref:_e,props:ge,_owner:B.current}}function P(F,ie){return{$$typeof:s,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function A(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function j(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ie){return ie[Ie]})}var ue=/\/+/g;function Z(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?j(""+F.key):ie.toString(36)}function de(F,ie,Ie,ne,ge){var Ee=typeof F;(Ee==="undefined"||Ee==="boolean")&&(F=null);var _e=!1;if(F===null)_e=!0;else switch(Ee){case"string":case"number":_e=!0;break;case"object":switch(F.$$typeof){case s:case e:_e=!0}}if(_e)return _e=F,ge=ge(_e),F=ne===""?"."+Z(_e,0):ne,R(ge)?(Ie="",F!=null&&(Ie=F.replace(ue,"$&/")+"/"),de(ge,ie,Ie,"",function(Ke){return Ke})):ge!=null&&(A(ge)&&(ge=P(ge,Ie+(!ge.key||_e&&_e.key===ge.key?"":(""+ge.key).replace(ue,"$&/")+"/")+F)),ie.push(ge)),1;if(_e=0,ne=ne===""?".":ne+":",R(F))for(var Re=0;Re<F.length;Re++){Ee=F[Re];var Oe=ne+Z(Ee,Re);_e+=de(Ee,ie,Ie,Oe,ge)}else if(Oe=S(F),typeof Oe=="function")for(F=Oe.call(F),Re=0;!(Ee=F.next()).done;)Ee=Ee.value,Oe=ne+Z(Ee,Re++),_e+=de(Ee,ie,Ie,Oe,ge);else if(Ee==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return _e}function me(F,ie,Ie){if(F==null)return F;var ne=[],ge=0;return de(F,ne,"","",function(Ee){return ie.call(Ie,Ee,ge++)}),ne}function ce(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(Ie){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ie)},function(Ie){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ie)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var ee={current:null},z={transition:null},pe={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:z,ReactCurrentOwner:B};function se(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:me,forEach:function(F,ie,Ie){me(F,function(){ie.apply(this,arguments)},Ie)},count:function(F){var ie=0;return me(F,function(){ie++}),ie},toArray:function(F){return me(F,function(ie){return ie})||[]},only:function(F){if(!A(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},gt.Component=_,gt.Fragment=n,gt.Profiler=a,gt.PureComponent=N,gt.StrictMode=r,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,gt.act=se,gt.cloneElement=function(F,ie,Ie){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ne=b({},F.props),ge=F.key,Ee=F.ref,_e=F._owner;if(ie!=null){if(ie.ref!==void 0&&(Ee=ie.ref,_e=B.current),ie.key!==void 0&&(ge=""+ie.key),F.type&&F.type.defaultProps)var Re=F.type.defaultProps;for(Oe in ie)K.call(ie,Oe)&&!U.hasOwnProperty(Oe)&&(ne[Oe]=ie[Oe]===void 0&&Re!==void 0?Re[Oe]:ie[Oe])}var Oe=arguments.length-2;if(Oe===1)ne.children=Ie;else if(1<Oe){Re=Array(Oe);for(var Ke=0;Ke<Oe;Ke++)Re[Ke]=arguments[Ke+2];ne.children=Re}return{$$typeof:s,type:F.type,key:ge,ref:Ee,props:ne,_owner:_e}},gt.createContext=function(F){return F={$$typeof:f,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},gt.createElement=O,gt.createFactory=function(F){var ie=O.bind(null,F);return ie.type=F,ie},gt.createRef=function(){return{current:null}},gt.forwardRef=function(F){return{$$typeof:d,render:F}},gt.isValidElement=A,gt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:ce}},gt.memo=function(F,ie){return{$$typeof:m,type:F,compare:ie===void 0?null:ie}},gt.startTransition=function(F){var ie=z.transition;z.transition={};try{F()}finally{z.transition=ie}},gt.unstable_act=se,gt.useCallback=function(F,ie){return ee.current.useCallback(F,ie)},gt.useContext=function(F){return ee.current.useContext(F)},gt.useDebugValue=function(){},gt.useDeferredValue=function(F){return ee.current.useDeferredValue(F)},gt.useEffect=function(F,ie){return ee.current.useEffect(F,ie)},gt.useId=function(){return ee.current.useId()},gt.useImperativeHandle=function(F,ie,Ie){return ee.current.useImperativeHandle(F,ie,Ie)},gt.useInsertionEffect=function(F,ie){return ee.current.useInsertionEffect(F,ie)},gt.useLayoutEffect=function(F,ie){return ee.current.useLayoutEffect(F,ie)},gt.useMemo=function(F,ie){return ee.current.useMemo(F,ie)},gt.useReducer=function(F,ie,Ie){return ee.current.useReducer(F,ie,Ie)},gt.useRef=function(F){return ee.current.useRef(F)},gt.useState=function(F){return ee.current.useState(F)},gt.useSyncExternalStore=function(F,ie,Ie){return ee.current.useSyncExternalStore(F,ie,Ie)},gt.useTransition=function(){return ee.current.useTransition()},gt.version="18.3.1",gt}var Up;function $d(){return Up||(Up=1,Eu.exports=wx()),Eu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function Tx(){if(Ip)return Do;Ip=1;var s=$d(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,y={},S=null,M=null;m!==void 0&&(S=""+m),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!l.hasOwnProperty(v)&&(y[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)y[v]===void 0&&(y[v]=p[v]);return{$$typeof:e,type:d,key:S,ref:M,props:y,_owner:a.current}}return Do.Fragment=n,Do.jsx=f,Do.jsxs=f,Do}var Op;function Ax(){return Op||(Op=1,bu.exports=Tx()),bu.exports}var u=Ax(),tl={},wu={exports:{}},An={},Tu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function Cx(){return Fp||(Fp=1,(function(s){function e(z,pe){var se=z.length;z.push(pe);e:for(;0<se;){var F=se-1>>>1,ie=z[F];if(0<a(ie,pe))z[F]=pe,z[se]=ie,se=F;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var pe=z[0],se=z.pop();if(se!==pe){z[0]=se;e:for(var F=0,ie=z.length,Ie=ie>>>1;F<Ie;){var ne=2*(F+1)-1,ge=z[ne],Ee=ne+1,_e=z[Ee];if(0>a(ge,se))Ee<ie&&0>a(_e,ge)?(z[F]=_e,z[Ee]=se,F=Ee):(z[F]=ge,z[ne]=se,F=ne);else if(Ee<ie&&0>a(_e,se))z[F]=_e,z[Ee]=se,F=Ee;else break e}}return pe}function a(z,pe){var se=z.sortIndex-pe.sortIndex;return se!==0?se:z.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,y=null,S=3,M=!1,b=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(z){for(var pe=n(m);pe!==null;){if(pe.callback===null)r(m);else if(pe.startTime<=z)r(m),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=n(m)}}function R(z){if(w=!1,D(z),!b)if(n(p)!==null)b=!0,ce(K);else{var pe=n(m);pe!==null&&ee(R,pe.startTime-z)}}function K(z,pe){b=!1,w&&(w=!1,x(O),O=-1),M=!0;var se=S;try{for(D(pe),y=n(p);y!==null&&(!(y.expirationTime>pe)||z&&!j());){var F=y.callback;if(typeof F=="function"){y.callback=null,S=y.priorityLevel;var ie=F(y.expirationTime<=pe);pe=s.unstable_now(),typeof ie=="function"?y.callback=ie:y===n(p)&&r(p),D(pe)}else r(p);y=n(p)}if(y!==null)var Ie=!0;else{var ne=n(m);ne!==null&&ee(R,ne.startTime-pe),Ie=!1}return Ie}finally{y=null,S=se,M=!1}}var B=!1,U=null,O=-1,P=5,A=-1;function j(){return!(s.unstable_now()-A<P)}function ue(){if(U!==null){var z=s.unstable_now();A=z;var pe=!0;try{pe=U(!0,z)}finally{pe?Z():(B=!1,U=null)}}else B=!1}var Z;if(typeof N=="function")Z=function(){N(ue)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,me=de.port2;de.port1.onmessage=ue,Z=function(){me.postMessage(null)}}else Z=function(){_(ue,0)};function ce(z){U=z,B||(B=!0,Z())}function ee(z,pe){O=_(function(){z(s.unstable_now())},pe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){b||M||(b=!0,ce(K))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(z){switch(S){case 1:case 2:case 3:var pe=3;break;default:pe=S}var se=S;S=pe;try{return z()}finally{S=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,pe){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var se=S;S=z;try{return pe()}finally{S=se}},s.unstable_scheduleCallback=function(z,pe,se){var F=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,z={id:v++,callback:pe,priorityLevel:z,startTime:se,expirationTime:ie,sortIndex:-1},se>F?(z.sortIndex=se,e(m,z),n(p)===null&&z===n(m)&&(w?(x(O),O=-1):w=!0,ee(R,se-F))):(z.sortIndex=ie,e(p,z),b||M||(b=!0,ce(K))),z},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(z){var pe=S;return function(){var se=S;S=pe;try{return z.apply(this,arguments)}finally{S=se}}}})(Au)),Au}var zp;function Rx(){return zp||(zp=1,Tu.exports=Cx()),Tu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Nx(){if(Bp)return An;Bp=1;var s=$d(),e=Rx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function S(t){return p.call(y,t)?!0:p.call(v,t)?!1:m.test(t)?y[t]=!0:(v[t]=!0,!1)}function M(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,i,o,c){if(i===null||typeof i>"u"||M(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,c,h,g,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=g,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,N);_[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,N);_[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,N);_[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,c){var h=_.hasOwnProperty(i)?_[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,o,h,c)&&(o=null),c||h===null?S(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):h.mustUseProperty?t[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,c=h.attributeNamespace,o===null?t.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),B=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),j=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),z=Symbol.iterator;function pe(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,F;function ie(t){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var Ie=!1;function ne(t,i){if(!t||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var c=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){c=re}t.call(i.prototype)}else{try{throw Error()}catch(re){c=re}t()}}catch(re){if(re&&c&&typeof re.stack=="string"){for(var h=re.stack.split(`
`),g=c.stack.split(`
`),E=h.length-1,I=g.length-1;1<=E&&0<=I&&h[E]!==g[I];)I--;for(;1<=E&&0<=I;E--,I--)if(h[E]!==g[I]){if(E!==1||I!==1)do if(E--,I--,0>I||h[E]!==g[I]){var H=`
`+h[E].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=E&&0<=I);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function ge(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=ne(t.type,!1),t;case 11:return t=ne(t.type.render,!1),t;case 1:return t=ne(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case B:return"Portal";case P:return"Profiler";case O:return"StrictMode";case Z:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case j:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ue:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case me:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case ce:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(t){var i=Oe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function At(t){t._valueTracker||(t._valueTracker=Ke(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Oe(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function Nt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function q(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function nn(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Re(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function dt(t,i){ht(t,i);var o=Re(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Mt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Mt(t,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Mt(t,i,o){(i!=="number"||Nt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Qe=Array.isArray;function k(t,i,o,c){if(t=t.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=i.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&c&&(t[o].defaultSelected=!0)}else{for(o=""+Re(o),i=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,c&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function W(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Qe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Re(o)}}function L(t,i){var o=Re(i.value),c=Re(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function Q(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function J(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Te(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?J(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Me,Ne=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,h){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,h)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Me=Me||document.createElement("div"),Me.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Me.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function at(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){Fe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function $e(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,h=$e(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,h):t[o]=h}}var Be=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function st(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pe=null,he=null,xe=null;function ke(t){if(t=xo(t)){if(typeof Pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ga(i),Pe(t.stateNode,t.type,i))}}function Le(t){he?xe?xe.push(t):xe=[t]:he=t}function ot(){if(he){var t=he,i=xe;if(xe=he=null,ke(t),i)for(t=0;t<i.length;t++)ke(i[t])}}function kt(t,i){return t(i)}function Xt(){}var yt=!1;function _n(t,i,o){if(yt)return t(i,o);yt=!0;try{return kt(t,i,o)}finally{yt=!1,(he!==null||xe!==null)&&(Xt(),ot())}}function pn(t,i){var o=t.stateNode;if(o===null)return null;var c=ga(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ts=!1;if(d)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{ts=!1}function Mi(t,i,o,c,h,g,E,I,H){var re=Array.prototype.slice.call(arguments,3);try{i.apply(o,re)}catch(ye){this.onError(ye)}}var bi=!1,wr=null,Tr=!1,Yi=null,Ko={onError:function(t){bi=!0,wr=t}};function ns(t,i,o,c,h,g,E,I,H){bi=!1,wr=null,Mi.apply(Ko,arguments)}function Zo(t,i,o,c,h,g,E,I,H){if(ns.apply(this,arguments),bi){if(bi){var re=wr;bi=!1,wr=null}else throw Error(n(198));Tr||(Tr=!0,Yi=re)}}function pi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Jo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function $o(t){if(pi(t)!==t)throw Error(n(188))}function Wl(t){var i=t.alternate;if(!i){if(i=pi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){o=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return $o(h),t;if(g===c)return $o(h),i;g=g.sibling}throw Error(n(188))}if(o.return!==c.return)o=h,c=g;else{for(var E=!1,I=h.child;I;){if(I===o){E=!0,o=h,c=g;break}if(I===c){E=!0,c=h,o=g;break}I=I.sibling}if(!E){for(I=g.child;I;){if(I===o){E=!0,o=g,c=h;break}if(I===c){E=!0,c=g,o=h;break}I=I.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function C(t){return t=Wl(t),t!==null?X(t):null}function X(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=X(t);if(i!==null)return i;t=t.sibling}return null}var oe=e.unstable_scheduleCallback,ae=e.unstable_cancelCallback,Y=e.unstable_shouldYield,Ce=e.unstable_requestPaint,we=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,We=e.unstable_LowPriority,vt=e.unstable_IdlePriority,wt=null,xt=null;function on(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(wt,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:bt,qe=Math.log,$n=Math.LN2;function bt(t){return t>>>=0,t===0?32:31-(qe(t)/$n|0)|0}var an=64,ei=4194304;function qt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mi(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,h=t.suspendedLanes,g=t.pingedLanes,E=o&268435455;if(E!==0){var I=E&~h;I!==0?c=qt(I):(g&=E,g!==0&&(c=qt(g)))}else E=o&~h,E!==0?c=qt(E):g!==0&&(c=qt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-lt(i),h=1<<o,c|=t[o],i&=~h;return c}function Dt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jn(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,h=t.expirationTimes,g=t.pendingLanes;0<g;){var E=31-lt(g),I=1<<E,H=h[E];H===-1?((I&o)===0||(I&c)!==0)&&(h[E]=Dt(I,i)):H<=i&&(t.expiredLanes|=I),g&=~I}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mn(){var t=an;return an<<=1,(an&4194240)===0&&(an=64),t}function Hn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Sn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-lt(i),t[i]=o}function ea(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var h=31-lt(o),g=1<<h;i[h]=0,c[h]=-1,t[h]=-1,o&=~g}}function Xl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-lt(o),h=1<<c;h&i|t[c]&i&&(t[c]|=i),o&=~h}}var Rt=0;function ff(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var hf,ql,pf,mf,gf,Yl=!1,ta=[],Qi=null,Ki=null,Zi=null,eo=new Map,to=new Map,Ji=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(t,i){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(i.pointerId)}}function no(t,i,o,c,h,g){return t===null||t.nativeEvent!==g?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=xo(i),i!==null&&ql(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function Y0(t,i,o,c,h){switch(i){case"focusin":return Qi=no(Qi,t,i,o,c,h),!0;case"dragenter":return Ki=no(Ki,t,i,o,c,h),!0;case"mouseover":return Zi=no(Zi,t,i,o,c,h),!0;case"pointerover":var g=h.pointerId;return eo.set(g,no(eo.get(g)||null,t,i,o,c,h)),!0;case"gotpointercapture":return g=h.pointerId,to.set(g,no(to.get(g)||null,t,i,o,c,h)),!0}return!1}function vf(t){var i=Ar(t.target);if(i!==null){var o=pi(i);if(o!==null){if(i=o.tag,i===13){if(i=Jo(o),i!==null){t.blockedOn=i,gf(t.priority,function(){pf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function na(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Kl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);Ct=c,o.target.dispatchEvent(c),Ct=null}else return i=xo(o),i!==null&&ql(i),t.blockedOn=o,!1;i.shift()}return!0}function yf(t,i,o){na(t)&&o.delete(i)}function Q0(){Yl=!1,Qi!==null&&na(Qi)&&(Qi=null),Ki!==null&&na(Ki)&&(Ki=null),Zi!==null&&na(Zi)&&(Zi=null),eo.forEach(yf),to.forEach(yf)}function io(t,i){t.blockedOn===i&&(t.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Q0)))}function ro(t){function i(h){return io(h,t)}if(0<ta.length){io(ta[0],t);for(var o=1;o<ta.length;o++){var c=ta[o];c.blockedOn===t&&(c.blockedOn=null)}}for(Qi!==null&&io(Qi,t),Ki!==null&&io(Ki,t),Zi!==null&&io(Zi,t),eo.forEach(i),to.forEach(i),o=0;o<Ji.length;o++)c=Ji[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Ji.length&&(o=Ji[0],o.blockedOn===null);)vf(o),o.blockedOn===null&&Ji.shift()}var is=R.ReactCurrentBatchConfig,ia=!0;function K0(t,i,o,c){var h=Rt,g=is.transition;is.transition=null;try{Rt=1,Ql(t,i,o,c)}finally{Rt=h,is.transition=g}}function Z0(t,i,o,c){var h=Rt,g=is.transition;is.transition=null;try{Rt=4,Ql(t,i,o,c)}finally{Rt=h,is.transition=g}}function Ql(t,i,o,c){if(ia){var h=Kl(t,i,o,c);if(h===null)hc(t,i,c,ra,o),xf(t,c);else if(Y0(h,t,i,o,c))c.stopPropagation();else if(xf(t,c),i&4&&-1<q0.indexOf(t)){for(;h!==null;){var g=xo(h);if(g!==null&&hf(g),g=Kl(t,i,o,c),g===null&&hc(t,i,c,ra,o),g===h)break;h=g}h!==null&&c.stopPropagation()}else hc(t,i,c,null,o)}}var ra=null;function Kl(t,i,o,c){if(ra=null,t=V(c),t=Ar(t),t!==null)if(i=pi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Jo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ra=t,null}function _f(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case He:return 1;case tt:return 4;case it:case We:return 16;case vt:return 536870912;default:return 16}default:return 16}}var $i=null,Zl=null,sa=null;function Sf(){if(sa)return sa;var t,i=Zl,o=i.length,c,h="value"in $i?$i.value:$i.textContent,g=h.length;for(t=0;t<o&&i[t]===h[t];t++);var E=o-t;for(c=1;c<=E&&i[o-c]===h[g-c];c++);return sa=h.slice(t,1<c?1-c:void 0)}function oa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function aa(){return!0}function Mf(){return!1}function kn(t){function i(o,c,h,g,E){this._reactName=o,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?aa:Mf,this.isPropagationStopped=Mf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=kn(rs),so=se({},rs,{view:0,detail:0}),J0=kn(so),$l,ec,oo,la=se({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?($l=t.screenX-oo.screenX,ec=t.screenY-oo.screenY):ec=$l=0,oo=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),bf=kn(la),$0=se({},la,{dataTransfer:0}),eg=kn($0),tg=se({},so,{relatedTarget:0}),tc=kn(tg),ng=se({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),ig=kn(ng),rg=se({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sg=kn(rg),og=se({},rs,{data:0}),Ef=kn(og),ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=cg[t])?!!i[t]:!1}function nc(){return ug}var dg=se({},so,{key:function(t){if(t.key){var i=ag[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=oa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(t){return t.type==="keypress"?oa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fg=kn(dg),hg=se({},la,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=kn(hg),pg=se({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),mg=kn(pg),gg=se({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=kn(gg),vg=se({},la,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=kn(vg),_g=[9,13,27,32],ic=d&&"CompositionEvent"in window,ao=null;d&&"documentMode"in document&&(ao=document.documentMode);var Sg=d&&"TextEvent"in window&&!ao,Tf=d&&(!ic||ao&&8<ao&&11>=ao),Af=" ",Cf=!1;function Rf(t,i){switch(t){case"keyup":return _g.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function Mg(t,i){switch(t){case"compositionend":return Nf(i);case"keypress":return i.which!==32?null:(Cf=!0,Af);case"textInput":return t=i.data,t===Af&&Cf?null:t;default:return null}}function bg(t,i){if(ss)return t==="compositionend"||!ic&&Rf(t,i)?(t=Sf(),sa=Zl=$i=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Tf&&i.locale!=="ko"?null:i.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Eg[t.type]:i==="textarea"}function Df(t,i,o,c){Le(c),i=ha(i,"onChange"),0<i.length&&(o=new Jl("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var lo=null,co=null;function wg(t){Kf(t,0)}function ca(t){var i=us(t);if(pt(i))return t}function Tg(t,i){if(t==="change")return i}var Lf=!1;if(d){var rc;if(d){var sc="oninput"in document;if(!sc){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),sc=typeof kf.oninput=="function"}rc=sc}else rc=!1;Lf=rc&&(!document.documentMode||9<document.documentMode)}function Uf(){lo&&(lo.detachEvent("onpropertychange",If),co=lo=null)}function If(t){if(t.propertyName==="value"&&ca(co)){var i=[];Df(i,co,t,V(t)),_n(wg,i)}}function Ag(t,i,o){t==="focusin"?(Uf(),lo=i,co=o,lo.attachEvent("onpropertychange",If)):t==="focusout"&&Uf()}function Cg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ca(co)}function Rg(t,i){if(t==="click")return ca(i)}function Ng(t,i){if(t==="input"||t==="change")return ca(i)}function Pg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:Pg;function uo(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var h=o[c];if(!p.call(i,h)||!ti(t[h],i[h]))return!1}return!0}function Of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ff(t,i){var o=Of(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Of(o)}}function zf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?zf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Bf(){for(var t=window,i=Nt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Nt(t.document)}return i}function oc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Dg(t){var i=Bf(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&zf(o.ownerDocument.documentElement,o)){if(c!==null&&oc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var h=o.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!t.extend&&g>c&&(h=c,c=g,g=h),h=Ff(o,g);var E=Ff(o,c);h&&E&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),t.removeAllRanges(),g>c?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Lg=d&&"documentMode"in document&&11>=document.documentMode,os=null,ac=null,fo=null,lc=!1;function jf(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lc||os==null||os!==Nt(c)||(c=os,"selectionStart"in c&&oc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),fo&&uo(fo,c)||(fo=c,c=ha(ac,"onSelect"),0<c.length&&(i=new Jl("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=os)))}function ua(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var as={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},cc={},Hf={};d&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function da(t){if(cc[t])return cc[t];if(!as[t])return t;var i=as[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Hf)return cc[t]=i[o];return t}var Gf=da("animationend"),Vf=da("animationiteration"),Wf=da("animationstart"),Xf=da("transitionend"),qf=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,i){qf.set(t,i),l(i,[t])}for(var uc=0;uc<Yf.length;uc++){var dc=Yf[uc],kg=dc.toLowerCase(),Ug=dc[0].toUpperCase()+dc.slice(1);er(kg,"on"+Ug)}er(Gf,"onAnimationEnd"),er(Vf,"onAnimationIteration"),er(Wf,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Xf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ig=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function Qf(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,Zo(c,i,void 0,t),t.currentTarget=null}function Kf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var E=c.length-1;0<=E;E--){var I=c[E],H=I.instance,re=I.currentTarget;if(I=I.listener,H!==g&&h.isPropagationStopped())break e;Qf(h,I,re),g=H}else for(E=0;E<c.length;E++){if(I=c[E],H=I.instance,re=I.currentTarget,I=I.listener,H!==g&&h.isPropagationStopped())break e;Qf(h,I,re),g=H}}}if(Tr)throw t=Yi,Tr=!1,Yi=null,t}function Ut(t,i){var o=i[yc];o===void 0&&(o=i[yc]=new Set);var c=t+"__bubble";o.has(c)||(Zf(i,t,2,!1),o.add(c))}function fc(t,i,o){var c=0;i&&(c|=4),Zf(o,t,c,i)}var fa="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[fa]){t[fa]=!0,r.forEach(function(o){o!=="selectionchange"&&(Ig.has(o)||fc(o,!1,t),fc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fa]||(i[fa]=!0,fc("selectionchange",!1,i))}}function Zf(t,i,o,c){switch(_f(i)){case 1:var h=K0;break;case 4:h=Z0;break;default:h=Ql}o=h.bind(null,i,o,t),h=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?t.addEventListener(i,o,{capture:!0,passive:h}):t.addEventListener(i,o,!0):h!==void 0?t.addEventListener(i,o,{passive:h}):t.addEventListener(i,o,!1)}function hc(t,i,o,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var I=c.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===h||H.nodeType===8&&H.parentNode===h))return;E=E.return}for(;I!==null;){if(E=Ar(I),E===null)return;if(H=E.tag,H===5||H===6){c=g=E;continue e}I=I.parentNode}}c=c.return}_n(function(){var re=g,ye=V(o),be=[];e:{var ve=qf.get(t);if(ve!==void 0){var Ue=Jl,je=t;switch(t){case"keypress":if(oa(o)===0)break e;case"keydown":case"keyup":Ue=fg;break;case"focusin":je="focus",Ue=tc;break;case"focusout":je="blur",Ue=tc;break;case"beforeblur":case"afterblur":Ue=tc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=mg;break;case Gf:case Vf:case Wf:Ue=ig;break;case Xf:Ue=xg;break;case"scroll":Ue=J0;break;case"wheel":Ue=yg;break;case"copy":case"cut":case"paste":Ue=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=wf}var Ge=(i&4)!==0,Ht=!Ge&&t==="scroll",$=Ge?ve!==null?ve+"Capture":null:ve;Ge=[];for(var G=re,te;G!==null;){te=G;var Ae=te.stateNode;if(te.tag===5&&Ae!==null&&(te=Ae,$!==null&&(Ae=pn(G,$),Ae!=null&&Ge.push(mo(G,Ae,te)))),Ht)break;G=G.return}0<Ge.length&&(ve=new Ue(ve,je,null,o,ye),be.push({event:ve,listeners:Ge}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",ve&&o!==Ct&&(je=o.relatedTarget||o.fromElement)&&(Ar(je)||je[wi]))break e;if((Ue||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(je=o.relatedTarget||o.toElement,Ue=re,je=je?Ar(je):null,je!==null&&(Ht=pi(je),je!==Ht||je.tag!==5&&je.tag!==6)&&(je=null)):(Ue=null,je=re),Ue!==je)){if(Ge=bf,Ae="onMouseLeave",$="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ge=wf,Ae="onPointerLeave",$="onPointerEnter",G="pointer"),Ht=Ue==null?ve:us(Ue),te=je==null?ve:us(je),ve=new Ge(Ae,G+"leave",Ue,o,ye),ve.target=Ht,ve.relatedTarget=te,Ae=null,Ar(ye)===re&&(Ge=new Ge($,G+"enter",je,o,ye),Ge.target=te,Ge.relatedTarget=Ht,Ae=Ge),Ht=Ae,Ue&&je)t:{for(Ge=Ue,$=je,G=0,te=Ge;te;te=ls(te))G++;for(te=0,Ae=$;Ae;Ae=ls(Ae))te++;for(;0<G-te;)Ge=ls(Ge),G--;for(;0<te-G;)$=ls($),te--;for(;G--;){if(Ge===$||$!==null&&Ge===$.alternate)break t;Ge=ls(Ge),$=ls($)}Ge=null}else Ge=null;Ue!==null&&Jf(be,ve,Ue,Ge,!1),je!==null&&Ht!==null&&Jf(be,Ht,je,Ge,!0)}}e:{if(ve=re?us(re):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var Xe=Tg;else if(Pf(ve))if(Lf)Xe=Ng;else{Xe=Cg;var Ze=Ag}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Xe=Rg);if(Xe&&(Xe=Xe(t,re))){Df(be,Xe,o,ye);break e}Ze&&Ze(t,ve,re),t==="focusout"&&(Ze=ve._wrapperState)&&Ze.controlled&&ve.type==="number"&&Mt(ve,"number",ve.value)}switch(Ze=re?us(re):window,t){case"focusin":(Pf(Ze)||Ze.contentEditable==="true")&&(os=Ze,ac=re,fo=null);break;case"focusout":fo=ac=os=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,jf(be,o,ye);break;case"selectionchange":if(Lg)break;case"keydown":case"keyup":jf(be,o,ye)}var Je;if(ic)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ss?Rf(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(Tf&&o.locale!=="ko"&&(ss||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ss&&(Je=Sf()):($i=ye,Zl="value"in $i?$i.value:$i.textContent,ss=!0)),Ze=ha(re,nt),0<Ze.length&&(nt=new Ef(nt,t,null,o,ye),be.push({event:nt,listeners:Ze}),Je?nt.data=Je:(Je=Nf(o),Je!==null&&(nt.data=Je)))),(Je=Sg?Mg(t,o):bg(t,o))&&(re=ha(re,"onBeforeInput"),0<re.length&&(ye=new Ef("onBeforeInput","beforeinput",null,o,ye),be.push({event:ye,listeners:re}),ye.data=Je))}Kf(be,i)})}function mo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ha(t,i){for(var o=i+"Capture",c=[];t!==null;){var h=t,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=pn(t,o),g!=null&&c.unshift(mo(t,g,h)),g=pn(t,i),g!=null&&c.push(mo(t,g,h))),t=t.return}return c}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jf(t,i,o,c,h){for(var g=i._reactName,E=[];o!==null&&o!==c;){var I=o,H=I.alternate,re=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&re!==null&&(I=re,h?(H=pn(o,g),H!=null&&E.unshift(mo(o,H,I))):h||(H=pn(o,g),H!=null&&E.push(mo(o,H,I)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var Og=/\r\n?/g,Fg=/\u0000|\uFFFD/g;function $f(t){return(typeof t=="string"?t:""+t).replace(Og,`
`).replace(Fg,"")}function pa(t,i,o){if(i=$f(i),$f(t)!==i&&o)throw Error(n(425))}function ma(){}var pc=null,mc=null;function gc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xc=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(t){return eh.resolve(null).then(t).catch(jg)}:xc;function jg(t){setTimeout(function(){throw t})}function vc(t,i){var o=i,c=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(c===0){t.removeChild(h),ro(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=h}while(o);ro(i)}function tr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function th(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),gi="__reactFiber$"+cs,go="__reactProps$"+cs,wi="__reactContainer$"+cs,yc="__reactEvents$"+cs,Hg="__reactListeners$"+cs,Gg="__reactHandles$"+cs;function Ar(t){var i=t[gi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[wi]||o[gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=th(t);t!==null;){if(o=t[gi])return o;t=th(t)}return i}t=o,o=t.parentNode}return null}function xo(t){return t=t[gi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ga(t){return t[go]||null}var _c=[],ds=-1;function nr(t){return{current:t}}function It(t){0>ds||(t.current=_c[ds],_c[ds]=null,ds--)}function Lt(t,i){ds++,_c[ds]=t.current,t.current=i}var ir={},ln=nr(ir),Mn=nr(!1),Cr=ir;function fs(t,i){var o=t.type.contextTypes;if(!o)return ir;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=i[g];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=h),h}function bn(t){return t=t.childContextTypes,t!=null}function xa(){It(Mn),It(ln)}function nh(t,i,o){if(ln.current!==ir)throw Error(n(168));Lt(ln,i),Lt(Mn,o)}function ih(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(n(108,_e(t)||"Unknown",h));return se({},o,c)}function va(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Cr=ln.current,Lt(ln,t),Lt(Mn,Mn.current),!0}function rh(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=ih(t,i,Cr),c.__reactInternalMemoizedMergedChildContext=t,It(Mn),It(ln),Lt(ln,t)):It(Mn),Lt(Mn,o)}var Ti=null,ya=!1,Sc=!1;function sh(t){Ti===null?Ti=[t]:Ti.push(t)}function Vg(t){ya=!0,sh(t)}function rr(){if(!Sc&&Ti!==null){Sc=!0;var t=0,i=Rt;try{var o=Ti;for(Rt=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Ti=null,ya=!1}catch(h){throw Ti!==null&&(Ti=Ti.slice(t+1)),oe(He,rr),h}finally{Rt=i,Sc=!1}}return null}var hs=[],ps=0,_a=null,Sa=0,Gn=[],Vn=0,Rr=null,Ai=1,Ci="";function Nr(t,i){hs[ps++]=Sa,hs[ps++]=_a,_a=t,Sa=i}function oh(t,i,o){Gn[Vn++]=Ai,Gn[Vn++]=Ci,Gn[Vn++]=Rr,Rr=t;var c=Ai;t=Ci;var h=32-lt(c)-1;c&=~(1<<h),o+=1;var g=32-lt(i)+h;if(30<g){var E=h-h%5;g=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Ai=1<<32-lt(i)+h|o<<h|c,Ci=g+t}else Ai=1<<g|o<<h|c,Ci=t}function Mc(t){t.return!==null&&(Nr(t,1),oh(t,1,0))}function bc(t){for(;t===_a;)_a=hs[--ps],hs[ps]=null,Sa=hs[--ps],hs[ps]=null;for(;t===Rr;)Rr=Gn[--Vn],Gn[Vn]=null,Ci=Gn[--Vn],Gn[Vn]=null,Ai=Gn[--Vn],Gn[Vn]=null}var Un=null,In=null,Ot=!1,ni=null;function ah(t,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function lh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,In=tr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Rr!==null?{id:Ai,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Un=t,In=null,!0):!1;default:return!1}}function Ec(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wc(t){if(Ot){var i=In;if(i){var o=i;if(!lh(t,i)){if(Ec(t))throw Error(n(418));i=tr(o.nextSibling);var c=Un;i&&lh(t,i)?ah(c,o):(t.flags=t.flags&-4097|2,Ot=!1,Un=t)}}else{if(Ec(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Un=t}}}function ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Ma(t){if(t!==Un)return!1;if(!Ot)return ch(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!gc(t.type,t.memoizedProps)),i&&(i=In)){if(Ec(t))throw uh(),Error(n(418));for(;i;)ah(t,i),i=tr(i.nextSibling)}if(ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){In=tr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}In=null}}else In=Un?tr(t.stateNode.nextSibling):null;return!0}function uh(){for(var t=In;t;)t=tr(t.nextSibling)}function ms(){In=Un=null,Ot=!1}function Tc(t){ni===null?ni=[t]:ni.push(t)}var Wg=R.ReactCurrentBatchConfig;function vo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var h=c,g=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(E){var I=h.refs;E===null?delete I[g]:I[g]=E},i._stringRef=g,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ba(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function dh(t){var i=t._init;return i(t._payload)}function fh(t){function i($,G){if(t){var te=$.deletions;te===null?($.deletions=[G],$.flags|=16):te.push(G)}}function o($,G){if(!t)return null;for(;G!==null;)i($,G),G=G.sibling;return null}function c($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function h($,G){return $=fr($,G),$.index=0,$.sibling=null,$}function g($,G,te){return $.index=te,t?(te=$.alternate,te!==null?(te=te.index,te<G?($.flags|=2,G):te):($.flags|=2,G)):($.flags|=1048576,G)}function E($){return t&&$.alternate===null&&($.flags|=2),$}function I($,G,te,Ae){return G===null||G.tag!==6?(G=xu(te,$.mode,Ae),G.return=$,G):(G=h(G,te),G.return=$,G)}function H($,G,te,Ae){var Xe=te.type;return Xe===U?ye($,G,te.props.children,Ae,te.key):G!==null&&(G.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ce&&dh(Xe)===G.type)?(Ae=h(G,te.props),Ae.ref=vo($,G,te),Ae.return=$,Ae):(Ae=qa(te.type,te.key,te.props,null,$.mode,Ae),Ae.ref=vo($,G,te),Ae.return=$,Ae)}function re($,G,te,Ae){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=vu(te,$.mode,Ae),G.return=$,G):(G=h(G,te.children||[]),G.return=$,G)}function ye($,G,te,Ae,Xe){return G===null||G.tag!==7?(G=Fr(te,$.mode,Ae,Xe),G.return=$,G):(G=h(G,te),G.return=$,G)}function be($,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=xu(""+G,$.mode,te),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case K:return te=qa(G.type,G.key,G.props,null,$.mode,te),te.ref=vo($,null,G),te.return=$,te;case B:return G=vu(G,$.mode,te),G.return=$,G;case ce:var Ae=G._init;return be($,Ae(G._payload),te)}if(Qe(G)||pe(G))return G=Fr(G,$.mode,te,null),G.return=$,G;ba($,G)}return null}function ve($,G,te,Ae){var Xe=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Xe!==null?null:I($,G,""+te,Ae);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case K:return te.key===Xe?H($,G,te,Ae):null;case B:return te.key===Xe?re($,G,te,Ae):null;case ce:return Xe=te._init,ve($,G,Xe(te._payload),Ae)}if(Qe(te)||pe(te))return Xe!==null?null:ye($,G,te,Ae,null);ba($,te)}return null}function Ue($,G,te,Ae,Xe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return $=$.get(te)||null,I(G,$,""+Ae,Xe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case K:return $=$.get(Ae.key===null?te:Ae.key)||null,H(G,$,Ae,Xe);case B:return $=$.get(Ae.key===null?te:Ae.key)||null,re(G,$,Ae,Xe);case ce:var Ze=Ae._init;return Ue($,G,te,Ze(Ae._payload),Xe)}if(Qe(Ae)||pe(Ae))return $=$.get(te)||null,ye(G,$,Ae,Xe,null);ba(G,Ae)}return null}function je($,G,te,Ae){for(var Xe=null,Ze=null,Je=G,nt=G=0,en=null;Je!==null&&nt<te.length;nt++){Je.index>nt?(en=Je,Je=null):en=Je.sibling;var Et=ve($,Je,te[nt],Ae);if(Et===null){Je===null&&(Je=en);break}t&&Je&&Et.alternate===null&&i($,Je),G=g(Et,G,nt),Ze===null?Xe=Et:Ze.sibling=Et,Ze=Et,Je=en}if(nt===te.length)return o($,Je),Ot&&Nr($,nt),Xe;if(Je===null){for(;nt<te.length;nt++)Je=be($,te[nt],Ae),Je!==null&&(G=g(Je,G,nt),Ze===null?Xe=Je:Ze.sibling=Je,Ze=Je);return Ot&&Nr($,nt),Xe}for(Je=c($,Je);nt<te.length;nt++)en=Ue(Je,$,nt,te[nt],Ae),en!==null&&(t&&en.alternate!==null&&Je.delete(en.key===null?nt:en.key),G=g(en,G,nt),Ze===null?Xe=en:Ze.sibling=en,Ze=en);return t&&Je.forEach(function(hr){return i($,hr)}),Ot&&Nr($,nt),Xe}function Ge($,G,te,Ae){var Xe=pe(te);if(typeof Xe!="function")throw Error(n(150));if(te=Xe.call(te),te==null)throw Error(n(151));for(var Ze=Xe=null,Je=G,nt=G=0,en=null,Et=te.next();Je!==null&&!Et.done;nt++,Et=te.next()){Je.index>nt?(en=Je,Je=null):en=Je.sibling;var hr=ve($,Je,Et.value,Ae);if(hr===null){Je===null&&(Je=en);break}t&&Je&&hr.alternate===null&&i($,Je),G=g(hr,G,nt),Ze===null?Xe=hr:Ze.sibling=hr,Ze=hr,Je=en}if(Et.done)return o($,Je),Ot&&Nr($,nt),Xe;if(Je===null){for(;!Et.done;nt++,Et=te.next())Et=be($,Et.value,Ae),Et!==null&&(G=g(Et,G,nt),Ze===null?Xe=Et:Ze.sibling=Et,Ze=Et);return Ot&&Nr($,nt),Xe}for(Je=c($,Je);!Et.done;nt++,Et=te.next())Et=Ue(Je,$,nt,Et.value,Ae),Et!==null&&(t&&Et.alternate!==null&&Je.delete(Et.key===null?nt:Et.key),G=g(Et,G,nt),Ze===null?Xe=Et:Ze.sibling=Et,Ze=Et);return t&&Je.forEach(function(Ex){return i($,Ex)}),Ot&&Nr($,nt),Xe}function Ht($,G,te,Ae){if(typeof te=="object"&&te!==null&&te.type===U&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case K:e:{for(var Xe=te.key,Ze=G;Ze!==null;){if(Ze.key===Xe){if(Xe=te.type,Xe===U){if(Ze.tag===7){o($,Ze.sibling),G=h(Ze,te.props.children),G.return=$,$=G;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ce&&dh(Xe)===Ze.type){o($,Ze.sibling),G=h(Ze,te.props),G.ref=vo($,Ze,te),G.return=$,$=G;break e}o($,Ze);break}else i($,Ze);Ze=Ze.sibling}te.type===U?(G=Fr(te.props.children,$.mode,Ae,te.key),G.return=$,$=G):(Ae=qa(te.type,te.key,te.props,null,$.mode,Ae),Ae.ref=vo($,G,te),Ae.return=$,$=Ae)}return E($);case B:e:{for(Ze=te.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){o($,G.sibling),G=h(G,te.children||[]),G.return=$,$=G;break e}else{o($,G);break}else i($,G);G=G.sibling}G=vu(te,$.mode,Ae),G.return=$,$=G}return E($);case ce:return Ze=te._init,Ht($,G,Ze(te._payload),Ae)}if(Qe(te))return je($,G,te,Ae);if(pe(te))return Ge($,G,te,Ae);ba($,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(o($,G.sibling),G=h(G,te),G.return=$,$=G):(o($,G),G=xu(te,$.mode,Ae),G.return=$,$=G),E($)):o($,G)}return Ht}var gs=fh(!0),hh=fh(!1),Ea=nr(null),wa=null,xs=null,Ac=null;function Cc(){Ac=xs=wa=null}function Rc(t){var i=Ea.current;It(Ea),t._currentValue=i}function Nc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function vs(t,i){wa=t,Ac=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(En=!0),t.firstContext=null)}function Wn(t){var i=t._currentValue;if(Ac!==t)if(t={context:t,memoizedValue:i,next:null},xs===null){if(wa===null)throw Error(n(308));xs=t,wa.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return i}var Pr=null;function Pc(t){Pr===null?Pr=[t]:Pr.push(t)}function ph(t,i,o,c){var h=i.interleaved;return h===null?(o.next=o,Pc(i)):(o.next=h.next,h.next=o),i.interleaved=o,Ri(t,c)}function Ri(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var sr=!1;function Dc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function or(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(_t&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Ri(t,o)}return h=c.interleaved,h===null?(i.next=i,Pc(c)):(i.next=h.next,h.next=i),c.interleaved=i,Ri(t,o)}function Ta(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Xl(t,o)}}function gh(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?h=g=i:g=g.next=i}else h=g=i;o={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Aa(t,i,o,c){var h=t.updateQueue;sr=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var H=I,re=H.next;H.next=null,E===null?g=re:E.next=re,E=H;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==E&&(I===null?ye.firstBaseUpdate=re:I.next=re,ye.lastBaseUpdate=H))}if(g!==null){var be=h.baseState;E=0,ye=re=H=null,I=g;do{var ve=I.lane,Ue=I.eventTime;if((c&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Ue,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=t,Ge=I;switch(ve=i,Ue=o,Ge.tag){case 1:if(je=Ge.payload,typeof je=="function"){be=je.call(Ue,be,ve);break e}be=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ge.payload,ve=typeof je=="function"?je.call(Ue,be,ve):je,ve==null)break e;be=se({},be,ve);break e;case 2:sr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ve=h.effects,ve===null?h.effects=[I]:ve.push(I))}else Ue={eventTime:Ue,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(re=ye=Ue,H=be):ye=ye.next=Ue,E|=ve;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(ye===null&&(H=be),h.baseState=H,h.firstBaseUpdate=re,h.lastBaseUpdate=ye,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);kr|=E,t.lanes=E,t.memoizedState=be}}function xh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],h=c.callback;if(h!==null){if(c.callback=null,c=o,typeof h!="function")throw Error(n(191,h));h.call(c)}}}var yo={},xi=nr(yo),_o=nr(yo),So=nr(yo);function Dr(t){if(t===yo)throw Error(n(174));return t}function Lc(t,i){switch(Lt(So,i),Lt(_o,t),Lt(xi,yo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Te(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Te(i,t)}It(xi),Lt(xi,i)}function ys(){It(xi),It(_o),It(So)}function vh(t){Dr(So.current);var i=Dr(xi.current),o=Te(i,t.type);i!==o&&(Lt(_o,t),Lt(xi,o))}function kc(t){_o.current===t&&(It(xi),It(_o))}var Ft=nr(0);function Ca(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uc=[];function Ic(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var Ra=R.ReactCurrentDispatcher,Oc=R.ReactCurrentBatchConfig,Lr=0,zt=null,Yt=null,Jt=null,Na=!1,Mo=!1,bo=0,Xg=0;function cn(){throw Error(n(321))}function Fc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ti(t[o],i[o]))return!1;return!0}function zc(t,i,o,c,h,g){if(Lr=g,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ra.current=t===null||t.memoizedState===null?Kg:Zg,t=o(c,h),Mo){g=0;do{if(Mo=!1,bo=0,25<=g)throw Error(n(301));g+=1,Jt=Yt=null,i.updateQueue=null,Ra.current=Jg,t=o(c,h)}while(Mo)}if(Ra.current=La,i=Yt!==null&&Yt.next!==null,Lr=0,Jt=Yt=zt=null,Na=!1,i)throw Error(n(300));return t}function Bc(){var t=bo!==0;return bo=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?zt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Xn(){if(Yt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Jt===null?zt.memoizedState:Jt.next;if(i!==null)Jt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?zt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function Eo(t,i){return typeof i=="function"?i(t):i}function jc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=Yt,h=c.baseQueue,g=o.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}c.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,c=c.baseState;var I=E=null,H=null,re=g;do{var ye=re.lane;if((Lr&ye)===ye)H!==null&&(H=H.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),c=re.hasEagerState?re.eagerState:t(c,re.action);else{var be={lane:ye,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};H===null?(I=H=be,E=c):H=H.next=be,zt.lanes|=ye,kr|=ye}re=re.next}while(re!==null&&re!==g);H===null?E=c:H.next=I,ti(c,i.memoizedState)||(En=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=H,o.lastRenderedState=c}if(t=o.interleaved,t!==null){h=t;do g=h.lane,zt.lanes|=g,kr|=g,h=h.next;while(h!==t)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Hc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,h=o.pending,g=i.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do g=t(g,E.action),E=E.next;while(E!==h);ti(g,i.memoizedState)||(En=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,c]}function yh(){}function _h(t,i){var o=zt,c=Xn(),h=i(),g=!ti(c.memoizedState,h);if(g&&(c.memoizedState=h,En=!0),c=c.queue,Gc(bh.bind(null,o,c,t),[t]),c.getSnapshot!==i||g||Jt!==null&&Jt.memoizedState.tag&1){if(o.flags|=2048,wo(9,Mh.bind(null,o,c,h,i),void 0,null),$t===null)throw Error(n(349));(Lr&30)!==0||Sh(o,i,h)}return h}function Sh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Mh(t,i,o,c){i.value=o,i.getSnapshot=c,Eh(i)&&wh(t)}function bh(t,i,o){return o(function(){Eh(i)&&wh(t)})}function Eh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ti(t,o)}catch{return!0}}function wh(t){var i=Ri(t,1);i!==null&&oi(i,t,1,-1)}function Th(t){var i=vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},i.queue=t,t=t.dispatch=Qg.bind(null,zt,t),[i.memoizedState,t]}function wo(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Ah(){return Xn().memoizedState}function Pa(t,i,o,c){var h=vi();zt.flags|=t,h.memoizedState=wo(1|i,o,void 0,c===void 0?null:c)}function Da(t,i,o,c){var h=Xn();c=c===void 0?null:c;var g=void 0;if(Yt!==null){var E=Yt.memoizedState;if(g=E.destroy,c!==null&&Fc(c,E.deps)){h.memoizedState=wo(i,o,g,c);return}}zt.flags|=t,h.memoizedState=wo(1|i,o,g,c)}function Ch(t,i){return Pa(8390656,8,t,i)}function Gc(t,i){return Da(2048,8,t,i)}function Rh(t,i){return Da(4,2,t,i)}function Nh(t,i){return Da(4,4,t,i)}function Ph(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Dh(t,i,o){return o=o!=null?o.concat([t]):null,Da(4,4,Ph.bind(null,i,t),o)}function Vc(){}function Lh(t,i){var o=Xn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Fc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function kh(t,i){var o=Xn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Fc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Uh(t,i,o){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=o):(ti(o,i)||(o=mn(),zt.lanes|=o,kr|=o,t.baseState=!0),i)}function qg(t,i){var o=Rt;Rt=o!==0&&4>o?o:4,t(!0);var c=Oc.transition;Oc.transition={};try{t(!1),i()}finally{Rt=o,Oc.transition=c}}function Ih(){return Xn().memoizedState}function Yg(t,i,o){var c=ur(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Oh(t))Fh(i,o);else if(o=ph(t,i,o,c),o!==null){var h=xn();oi(o,t,c,h),zh(o,i,c)}}function Qg(t,i,o){var c=ur(t),h={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Oh(t))Fh(i,h);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,I=g(E,o);if(h.hasEagerState=!0,h.eagerState=I,ti(I,E)){var H=i.interleaved;H===null?(h.next=h,Pc(i)):(h.next=H.next,H.next=h),i.interleaved=h;return}}catch{}finally{}o=ph(t,i,h,c),o!==null&&(h=xn(),oi(o,t,c,h),zh(o,i,c))}}function Oh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function Fh(t,i){Mo=Na=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function zh(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Xl(t,o)}}var La={readContext:Wn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},Kg={readContext:Wn,useCallback:function(t,i){return vi().memoizedState=[t,i===void 0?null:i],t},useContext:Wn,useEffect:Ch,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Pa(4194308,4,Ph.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Pa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Pa(4,2,t,i)},useMemo:function(t,i){var o=vi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=vi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Yg.bind(null,zt,t),[c.memoizedState,t]},useRef:function(t){var i=vi();return t={current:t},i.memoizedState=t},useState:Th,useDebugValue:Vc,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=Th(!1),i=t[0];return t=qg.bind(null,t[1]),vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=zt,h=vi();if(Ot){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),$t===null)throw Error(n(349));(Lr&30)!==0||Sh(c,i,o)}h.memoizedState=o;var g={value:o,getSnapshot:i};return h.queue=g,Ch(bh.bind(null,c,g,t),[t]),c.flags|=2048,wo(9,Mh.bind(null,c,g,o,i),void 0,null),o},useId:function(){var t=vi(),i=$t.identifierPrefix;if(Ot){var o=Ci,c=Ai;o=(c&~(1<<32-lt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=bo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Xg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Zg={readContext:Wn,useCallback:Lh,useContext:Wn,useEffect:Gc,useImperativeHandle:Dh,useInsertionEffect:Rh,useLayoutEffect:Nh,useMemo:kh,useReducer:jc,useRef:Ah,useState:function(){return jc(Eo)},useDebugValue:Vc,useDeferredValue:function(t){var i=Xn();return Uh(i,Yt.memoizedState,t)},useTransition:function(){var t=jc(Eo)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:yh,useSyncExternalStore:_h,useId:Ih,unstable_isNewReconciler:!1},Jg={readContext:Wn,useCallback:Lh,useContext:Wn,useEffect:Gc,useImperativeHandle:Dh,useInsertionEffect:Rh,useLayoutEffect:Nh,useMemo:kh,useReducer:Hc,useRef:Ah,useState:function(){return Hc(Eo)},useDebugValue:Vc,useDeferredValue:function(t){var i=Xn();return Yt===null?i.memoizedState=t:Uh(i,Yt.memoizedState,t)},useTransition:function(){var t=Hc(Eo)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:yh,useSyncExternalStore:_h,useId:Ih,unstable_isNewReconciler:!1};function ii(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Wc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var ka={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=xn(),h=ur(t),g=Ni(c,h);g.payload=i,o!=null&&(g.callback=o),i=or(t,g,h),i!==null&&(oi(i,t,h,c),Ta(i,t,h))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=xn(),h=ur(t),g=Ni(c,h);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=or(t,g,h),i!==null&&(oi(i,t,h,c),Ta(i,t,h))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=xn(),c=ur(t),h=Ni(o,c);h.tag=2,i!=null&&(h.callback=i),i=or(t,h,c),i!==null&&(oi(i,t,c,o),Ta(i,t,c))}};function Bh(t,i,o,c,h,g,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,g,E):i.prototype&&i.prototype.isPureReactComponent?!uo(o,c)||!uo(h,g):!0}function jh(t,i,o){var c=!1,h=ir,g=i.contextType;return typeof g=="object"&&g!==null?g=Wn(g):(h=bn(i)?Cr:ln.current,c=i.contextTypes,g=(c=c!=null)?fs(t,h):ir),i=new i(o,g),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ka,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=g),i}function Hh(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&ka.enqueueReplaceState(i,i.state,null)}function Xc(t,i,o,c){var h=t.stateNode;h.props=o,h.state=t.memoizedState,h.refs={},Dc(t);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Wn(g):(g=bn(i)?Cr:ln.current,h.context=fs(t,g)),h.state=t.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Wc(t,i,g,o),h.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&ka.enqueueReplaceState(h,h.state,null),Aa(t,o,h,c),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",c=i;do o+=ge(c),c=c.return;while(c);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:i,stack:h,digest:null}}function qc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Yc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var $g=typeof WeakMap=="function"?WeakMap:Map;function Gh(t,i,o){o=Ni(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){ja||(ja=!0,cu=c),Yc(t,i)},o}function Vh(t,i,o){o=Ni(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;o.payload=function(){return c(h)},o.callback=function(){Yc(t,i)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Yc(t,i),typeof c!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Wh(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new $g;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(o)||(h.add(o),t=hx.bind(null,t,i,o),i.then(t,t))}function Xh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function qh(t,i,o,c,h){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ni(-1,1),i.tag=2,or(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var ex=R.ReactCurrentOwner,En=!1;function gn(t,i,o,c){i.child=t===null?hh(i,null,o,c):gs(i,t.child,o,c)}function Yh(t,i,o,c,h){o=o.render;var g=i.ref;return vs(i,h),c=zc(t,i,o,c,g,h),o=Bc(),t!==null&&!En?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,Pi(t,i,h)):(Ot&&o&&Mc(i),i.flags|=1,gn(t,i,c,h),i.child)}function Qh(t,i,o,c,h){if(t===null){var g=o.type;return typeof g=="function"&&!gu(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Kh(t,i,g,c,h)):(t=qa(o.type,null,c,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(g=t.child,(t.lanes&h)===0){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:uo,o(E,c)&&t.ref===i.ref)return Pi(t,i,h)}return i.flags|=1,t=fr(g,c),t.ref=i.ref,t.return=i,i.child=t}function Kh(t,i,o,c,h){if(t!==null){var g=t.memoizedProps;if(uo(g,c)&&t.ref===i.ref)if(En=!1,i.pendingProps=c=g,(t.lanes&h)!==0)(t.flags&131072)!==0&&(En=!0);else return i.lanes=t.lanes,Pi(t,i,h)}return Qc(t,i,o,c,h)}function Zh(t,i,o){var c=i.pendingProps,h=c.children,g=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ms,On),On|=o;else{if((o&1073741824)===0)return t=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ms,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,Lt(Ms,On),On|=c}else g!==null?(c=g.baseLanes|o,i.memoizedState=null):c=o,Lt(Ms,On),On|=c;return gn(t,i,h,o),i.child}function Jh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Qc(t,i,o,c,h){var g=bn(o)?Cr:ln.current;return g=fs(i,g),vs(i,h),o=zc(t,i,o,c,g,h),c=Bc(),t!==null&&!En?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,Pi(t,i,h)):(Ot&&c&&Mc(i),i.flags|=1,gn(t,i,o,h),i.child)}function $h(t,i,o,c,h){if(bn(o)){var g=!0;va(i)}else g=!1;if(vs(i,h),i.stateNode===null)Ia(t,i),jh(i,o,c),Xc(i,o,c,h),c=!0;else if(t===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var H=E.context,re=o.contextType;typeof re=="object"&&re!==null?re=Wn(re):(re=bn(o)?Cr:ln.current,re=fs(i,re));var ye=o.getDerivedStateFromProps,be=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";be||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==c||H!==re)&&Hh(i,E,c,re),sr=!1;var ve=i.memoizedState;E.state=ve,Aa(i,c,E,h),H=i.memoizedState,I!==c||ve!==H||Mn.current||sr?(typeof ye=="function"&&(Wc(i,o,ye,c),H=i.memoizedState),(I=sr||Bh(i,o,I,c,ve,H,re))?(be||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),E.props=c,E.state=H,E.context=re,c=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,mh(t,i),I=i.memoizedProps,re=i.type===i.elementType?I:ii(i.type,I),E.props=re,be=i.pendingProps,ve=E.context,H=o.contextType,typeof H=="object"&&H!==null?H=Wn(H):(H=bn(o)?Cr:ln.current,H=fs(i,H));var Ue=o.getDerivedStateFromProps;(ye=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==be||ve!==H)&&Hh(i,E,c,H),sr=!1,ve=i.memoizedState,E.state=ve,Aa(i,c,E,h);var je=i.memoizedState;I!==be||ve!==je||Mn.current||sr?(typeof Ue=="function"&&(Wc(i,o,Ue,c),je=i.memoizedState),(re=sr||Bh(i,o,re,c,ve,je,H)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,je,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,je,H)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),E.props=c,E.state=je,E.context=H,c=re):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),c=!1)}return Kc(t,i,o,c,g,h)}function Kc(t,i,o,c,h,g){Jh(t,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&rh(i,o,!1),Pi(t,i,g);c=i.stateNode,ex.current=i;var I=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&E?(i.child=gs(i,t.child,null,g),i.child=gs(i,null,I,g)):gn(t,i,I,g),i.memoizedState=c.state,h&&rh(i,o,!0),i.child}function ep(t){var i=t.stateNode;i.pendingContext?nh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&nh(t,i.context,!1),Lc(t,i.containerInfo)}function tp(t,i,o,c,h){return ms(),Tc(h),i.flags|=256,gn(t,i,o,c),i.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function Jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function np(t,i,o){var c=i.pendingProps,h=Ft.current,g=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=t!==null&&t.memoizedState===null?!1:(h&2)!==0),I?(g=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),Lt(Ft,h&1),t===null)return wc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,t=c.fallback,g?(c=i.mode,g=i.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Ya(E,c,0,null),t=Fr(t,c,o,null),g.return=i,t.return=i,g.sibling=t,i.child=g,i.child.memoizedState=Jc(o),i.memoizedState=Zc,t):$c(i,E));if(h=t.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return tx(t,i,E,c,I,h,o);if(g){g=c.fallback,E=i.mode,h=t.child,I=h.sibling;var H={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=fr(h,H),c.subtreeFlags=h.subtreeFlags&14680064),I!==null?g=fr(I,g):(g=Fr(g,E,o,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,E=t.child.memoizedState,E=E===null?Jc(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=t.childLanes&~o,i.memoizedState=Zc,c}return g=t.child,t=g.sibling,c=fr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function $c(t,i){return i=Ya({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ua(t,i,o,c){return c!==null&&Tc(c),gs(i,t.child,null,o),t=$c(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function tx(t,i,o,c,h,g,E){if(o)return i.flags&256?(i.flags&=-257,c=qc(Error(n(422))),Ua(t,i,E,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Ya({mode:"visible",children:c.children},h,0,null),g=Fr(g,h,E,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&gs(i,t.child,null,E),i.child.memoizedState=Jc(E),i.memoizedState=Zc,g);if((i.mode&1)===0)return Ua(t,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(n(419)),c=qc(g,c,void 0),Ua(t,i,E,c)}if(I=(E&t.childLanes)!==0,En||I){if(c=$t,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Ri(t,h),oi(c,t,h,-1))}return mu(),c=qc(Error(n(421))),Ua(t,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=t.child,i=px.bind(null,t),h._reactRetry=i,null):(t=g.treeContext,In=tr(h.nextSibling),Un=i,Ot=!0,ni=null,t!==null&&(Gn[Vn++]=Ai,Gn[Vn++]=Ci,Gn[Vn++]=Rr,Ai=t.id,Ci=t.overflow,Rr=i),i=$c(i,c.children),i.flags|=4096,i)}function ip(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Nc(t.return,i,o)}function eu(t,i,o,c,h){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=h)}function rp(t,i,o){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(gn(t,i,c.children,o),c=Ft.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ip(t,o,i);else if(t.tag===19)ip(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Lt(Ft,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)t=o.alternate,t!==null&&Ca(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),eu(i,!1,h,o,g);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Ca(t)===null){i.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}eu(i,!0,o,null,g);break;case"together":eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ia(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),kr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=fr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=fr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function nx(t,i,o){switch(i.tag){case 3:ep(i),ms();break;case 5:vh(i);break;case 1:bn(i.type)&&va(i);break;case 4:Lc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Lt(Ea,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Lt(Ft,Ft.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?np(t,i,o):(Lt(Ft,Ft.current&1),t=Pi(t,i,o),t!==null?t.sibling:null);Lt(Ft,Ft.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return rp(t,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Lt(Ft,Ft.current),c)break;return null;case 22:case 23:return i.lanes=0,Zh(t,i,o)}return Pi(t,i,o)}var sp,tu,op,ap;sp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},tu=function(){},op=function(t,i,o,c){var h=t.memoizedProps;if(h!==c){t=i.stateNode,Dr(xi.current);var g=null;switch(o){case"input":h=q(t,h),c=q(t,c),g=[];break;case"select":h=se({},h,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":h=T(t,h),c=T(t,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ma)}mt(o,c);var E;o=null;for(re in h)if(!c.hasOwnProperty(re)&&h.hasOwnProperty(re)&&h[re]!=null)if(re==="style"){var I=h[re];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?g||(g=[]):(g=g||[]).push(re,null));for(re in c){var H=c[re];if(I=h!=null?h[re]:void 0,c.hasOwnProperty(re)&&H!==I&&(H!=null||I!=null))if(re==="style")if(I){for(E in I)!I.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in H)H.hasOwnProperty(E)&&I[E]!==H[E]&&(o||(o={}),o[E]=H[E])}else o||(g||(g=[]),g.push(re,o)),o=H;else re==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(g=g||[]).push(re,H)):re==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(re,""+H):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(H!=null&&re==="onScroll"&&Ut("scroll",t),g||I===H||(g=[])):(g=g||[]).push(re,H))}o&&(g=g||[]).push("style",o);var re=g;(i.updateQueue=re)&&(i.flags|=4)}},ap=function(t,i,o,c){o!==c&&(i.flags|=4)};function To(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function un(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function ix(t,i,o){var c=i.pendingProps;switch(bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return bn(i.type)&&xa(),un(i),null;case 3:return c=i.stateNode,ys(),It(Mn),It(ln),Ic(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ma(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(fu(ni),ni=null))),tu(t,i),un(i),null;case 5:kc(i);var h=Dr(So.current);if(o=i.type,t!==null&&i.stateNode!=null)op(t,i,o,c,h),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return un(i),null}if(t=Dr(xi.current),Ma(i)){c=i.stateNode,o=i.type;var g=i.memoizedProps;switch(c[gi]=i,c[go]=g,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",c),Ut("close",c);break;case"iframe":case"object":case"embed":Ut("load",c);break;case"video":case"audio":for(h=0;h<ho.length;h++)Ut(ho[h],c);break;case"source":Ut("error",c);break;case"img":case"image":case"link":Ut("error",c),Ut("load",c);break;case"details":Ut("toggle",c);break;case"input":nn(c,g),Ut("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ut("invalid",c);break;case"textarea":W(c,g),Ut("invalid",c)}mt(o,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var I=g[E];E==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&pa(c.textContent,I,t),h=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&pa(c.textContent,I,t),h=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Ut("scroll",c)}switch(o){case"input":At(c),Ye(c,g,!0);break;case"textarea":At(c),Q(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=ma)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(o,{is:c.is}):(t=E.createElement(o),o==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,o),t[gi]=i,t[go]=c,sp(t,i,!1,!1),i.stateNode=t;e:{switch(E=st(o,c),o){case"dialog":Ut("cancel",t),Ut("close",t),h=c;break;case"iframe":case"object":case"embed":Ut("load",t),h=c;break;case"video":case"audio":for(h=0;h<ho.length;h++)Ut(ho[h],t);h=c;break;case"source":Ut("error",t),h=c;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),h=c;break;case"details":Ut("toggle",t),h=c;break;case"input":nn(t,c),h=q(t,c),Ut("invalid",t);break;case"option":h=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},h=se({},c,{value:void 0}),Ut("invalid",t);break;case"textarea":W(t,c),h=T(t,c),Ut("invalid",t);break;default:h=c}mt(o,h),I=h;for(g in I)if(I.hasOwnProperty(g)){var H=I[g];g==="style"?et(t,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ne(t,H)):g==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&at(t,H):typeof H=="number"&&at(t,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?H!=null&&g==="onScroll"&&Ut("scroll",t):H!=null&&D(t,g,H,E))}switch(o){case"input":At(t),Ye(t,c,!1);break;case"textarea":At(t),Q(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Re(c.value));break;case"select":t.multiple=!!c.multiple,g=c.value,g!=null?k(t,!!c.multiple,g,!1):c.defaultValue!=null&&k(t,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=ma)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return un(i),null;case 6:if(t&&i.stateNode!=null)ap(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=Dr(So.current),Dr(xi.current),Ma(i)){if(c=i.stateNode,o=i.memoizedProps,c[gi]=i,(g=c.nodeValue!==o)&&(t=Un,t!==null))switch(t.tag){case 3:pa(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pa(c.nodeValue,o,(t.mode&1)!==0)}g&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[gi]=i,i.stateNode=c}return un(i),null;case 13:if(It(Ft),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)uh(),ms(),i.flags|=98560,g=!1;else if(g=Ma(i),c!==null&&c.dehydrated!==null){if(t===null){if(!g)throw Error(n(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[gi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),g=!1}else ni!==null&&(fu(ni),ni=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?Qt===0&&(Qt=3):mu())),i.updateQueue!==null&&(i.flags|=4),un(i),null);case 4:return ys(),tu(t,i),t===null&&po(i.stateNode.containerInfo),un(i),null;case 10:return Rc(i.type._context),un(i),null;case 17:return bn(i.type)&&xa(),un(i),null;case 19:if(It(Ft),g=i.memoizedState,g===null)return un(i),null;if(c=(i.flags&128)!==0,E=g.rendering,E===null)if(c)To(g,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Ca(t),E!==null){for(i.flags|=128,To(g,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)g=o,t=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,t=E.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(Ft,Ft.current&1|2),i.child}t=t.sibling}g.tail!==null&&we()>bs&&(i.flags|=128,c=!0,To(g,!1),i.lanes=4194304)}else{if(!c)if(t=Ca(E),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),To(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Ot)return un(i),null}else 2*we()-g.renderingStartTime>bs&&o!==1073741824&&(i.flags|=128,c=!0,To(g,!1),i.lanes=4194304);g.isBackwards?(E.sibling=i.child,i.child=E):(o=g.last,o!==null?o.sibling=E:i.child=E,g.last=E)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=we(),i.sibling=null,o=Ft.current,Lt(Ft,c?o&1|2:o&1),i):(un(i),null);case 22:case 23:return pu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(On&1073741824)!==0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function rx(t,i){switch(bc(i),i.tag){case 1:return bn(i.type)&&xa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ys(),It(Mn),It(ln),Ic(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return kc(i),null;case 13:if(It(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ft),null;case 4:return ys(),null;case 10:return Rc(i.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var Oa=!1,dn=!1,sx=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Ss(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Bt(t,i,c)}else o.current=null}function nu(t,i,o){try{o()}catch(c){Bt(t,i,c)}}var lp=!1;function ox(t,i){if(pc=ia,t=Bf(),oc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,I=-1,H=-1,re=0,ye=0,be=t,ve=null;t:for(;;){for(var Ue;be!==o||h!==0&&be.nodeType!==3||(I=E+h),be!==g||c!==0&&be.nodeType!==3||(H=E+c),be.nodeType===3&&(E+=be.nodeValue.length),(Ue=be.firstChild)!==null;)ve=be,be=Ue;for(;;){if(be===t)break t;if(ve===o&&++re===h&&(I=E),ve===g&&++ye===c&&(H=E),(Ue=be.nextSibling)!==null)break;be=ve,ve=be.parentNode}be=Ue}o=I===-1||H===-1?null:{start:I,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(mc={focusedElem:t,selectionRange:o},ia=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ge=je.memoizedProps,Ht=je.memoizedState,$=i.stateNode,G=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ii(i.type,Ge),Ht);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){Bt(i,i.return,Ae)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return je=lp,lp=!1,je}function Ao(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&t)===t){var g=h.destroy;h.destroy=void 0,g!==void 0&&nu(i,o,g)}h=h.next}while(h!==c)}}function Fa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function iu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function cp(t){var i=t.alternate;i!==null&&(t.alternate=null,cp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[gi],delete i[go],delete i[yc],delete i[Hg],delete i[Gg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function up(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||up(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ru(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ma));else if(c!==4&&(t=t.child,t!==null))for(ru(t,i,o),t=t.sibling;t!==null;)ru(t,i,o),t=t.sibling}function su(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(su(t,i,o),t=t.sibling;t!==null;)su(t,i,o),t=t.sibling}var rn=null,ri=!1;function ar(t,i,o){for(o=o.child;o!==null;)fp(t,i,o),o=o.sibling}function fp(t,i,o){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(wt,o)}catch{}switch(o.tag){case 5:dn||Ss(o,i);case 6:var c=rn,h=ri;rn=null,ar(t,i,o),rn=c,ri=h,rn!==null&&(ri?(t=rn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):rn.removeChild(o.stateNode));break;case 18:rn!==null&&(ri?(t=rn,o=o.stateNode,t.nodeType===8?vc(t.parentNode,o):t.nodeType===1&&vc(t,o),ro(t)):vc(rn,o.stateNode));break;case 4:c=rn,h=ri,rn=o.stateNode.containerInfo,ri=!0,ar(t,i,o),rn=c,ri=h;break;case 0:case 11:case 14:case 15:if(!dn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&nu(o,i,E),h=h.next}while(h!==c)}ar(t,i,o);break;case 1:if(!dn&&(Ss(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){Bt(o,i,I)}ar(t,i,o);break;case 21:ar(t,i,o);break;case 22:o.mode&1?(dn=(c=dn)||o.memoizedState!==null,ar(t,i,o),dn=c):ar(t,i,o);break;default:ar(t,i,o)}}function hp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new sx),i.forEach(function(c){var h=mx.bind(null,t,c);o.has(c)||(o.add(c),c.then(h,h))})}}function si(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var h=o[c];try{var g=t,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:rn=I.stateNode,ri=!1;break e;case 3:rn=I.stateNode.containerInfo,ri=!0;break e;case 4:rn=I.stateNode.containerInfo,ri=!0;break e}I=I.return}if(rn===null)throw Error(n(160));fp(g,E,h),rn=null,ri=!1;var H=h.alternate;H!==null&&(H.return=null),h.return=null}catch(re){Bt(h,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pp(i,t),i=i.sibling}function pp(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(i,t),yi(t),c&4){try{Ao(3,t,t.return),Fa(3,t)}catch(Ge){Bt(t,t.return,Ge)}try{Ao(5,t,t.return)}catch(Ge){Bt(t,t.return,Ge)}}break;case 1:si(i,t),yi(t),c&512&&o!==null&&Ss(o,o.return);break;case 5:if(si(i,t),yi(t),c&512&&o!==null&&Ss(o,o.return),t.flags&32){var h=t.stateNode;try{at(h,"")}catch(Ge){Bt(t,t.return,Ge)}}if(c&4&&(h=t.stateNode,h!=null)){var g=t.memoizedProps,E=o!==null?o.memoizedProps:g,I=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&ht(h,g),st(I,E);var re=st(I,g);for(E=0;E<H.length;E+=2){var ye=H[E],be=H[E+1];ye==="style"?et(h,be):ye==="dangerouslySetInnerHTML"?Ne(h,be):ye==="children"?at(h,be):D(h,ye,be,re)}switch(I){case"input":dt(h,g);break;case"textarea":L(h,g);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Ue=g.value;Ue!=null?k(h,!!g.multiple,Ue,!1):ve!==!!g.multiple&&(g.defaultValue!=null?k(h,!!g.multiple,g.defaultValue,!0):k(h,!!g.multiple,g.multiple?[]:"",!1))}h[go]=g}catch(Ge){Bt(t,t.return,Ge)}}break;case 6:if(si(i,t),yi(t),c&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,g=t.memoizedProps;try{h.nodeValue=g}catch(Ge){Bt(t,t.return,Ge)}}break;case 3:if(si(i,t),yi(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(Ge){Bt(t,t.return,Ge)}break;case 4:si(i,t),yi(t);break;case 13:si(i,t),yi(t),h=t.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(lu=we())),c&4&&hp(t);break;case 22:if(ye=o!==null&&o.memoizedState!==null,t.mode&1?(dn=(re=dn)||ye,si(i,t),dn=re):si(i,t),yi(t),c&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!ye&&(t.mode&1)!==0)for(ze=t,ye=t.child;ye!==null;){for(be=ze=ye;ze!==null;){switch(ve=ze,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ao(4,ve,ve.return);break;case 1:Ss(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){c=ve,o=ve.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ge){Bt(c,o,Ge)}}break;case 5:Ss(ve,ve.return);break;case 22:if(ve.memoizedState!==null){xp(be);continue}}Ue!==null?(Ue.return=ve,ze=Ue):xp(be)}ye=ye.sibling}e:for(ye=null,be=t;;){if(be.tag===5){if(ye===null){ye=be;try{h=be.stateNode,re?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=be.stateNode,H=be.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=$e("display",E))}catch(Ge){Bt(t,t.return,Ge)}}}else if(be.tag===6){if(ye===null)try{be.stateNode.nodeValue=re?"":be.memoizedProps}catch(Ge){Bt(t,t.return,Ge)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===t)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===t)break e;for(;be.sibling===null;){if(be.return===null||be.return===t)break e;ye===be&&(ye=null),be=be.return}ye===be&&(ye=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:si(i,t),yi(t),c&4&&hp(t);break;case 21:break;default:si(i,t),yi(t)}}function yi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(up(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(at(h,""),c.flags&=-33);var g=dp(t);su(t,g,h);break;case 3:case 4:var E=c.stateNode.containerInfo,I=dp(t);ru(t,I,E);break;default:throw Error(n(161))}}catch(H){Bt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function ax(t,i,o){ze=t,mp(t)}function mp(t,i,o){for(var c=(t.mode&1)!==0;ze!==null;){var h=ze,g=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||Oa;if(!E){var I=h.alternate,H=I!==null&&I.memoizedState!==null||dn;I=Oa;var re=dn;if(Oa=E,(dn=H)&&!re)for(ze=h;ze!==null;)E=ze,H=E.child,E.tag===22&&E.memoizedState!==null?vp(h):H!==null?(H.return=E,ze=H):vp(h);for(;g!==null;)ze=g,mp(g),g=g.sibling;ze=h,Oa=I,dn=re}gp(t)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,ze=g):gp(t)}}function gp(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||Fa(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!dn)if(o===null)c.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);c.componentDidUpdate(h,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&xh(i,g,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}xh(i,E,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var ye=re.memoizedState;if(ye!==null){var be=ye.dehydrated;be!==null&&ro(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dn||i.flags&512&&iu(i)}catch(ve){Bt(i,i.return,ve)}}if(i===t){ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,ze=o;break}ze=i.return}}function xp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ze=o;break}ze=i.return}}function vp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Fa(4,i)}catch(H){Bt(i,o,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(H){Bt(i,h,H)}}var g=i.return;try{iu(i)}catch(H){Bt(i,g,H)}break;case 5:var E=i.return;try{iu(i)}catch(H){Bt(i,E,H)}}}catch(H){Bt(i,i.return,H)}if(i===t){ze=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ze=I;break}ze=i.return}}var lx=Math.ceil,za=R.ReactCurrentDispatcher,ou=R.ReactCurrentOwner,qn=R.ReactCurrentBatchConfig,_t=0,$t=null,Vt=null,sn=0,On=0,Ms=nr(0),Qt=0,Co=null,kr=0,Ba=0,au=0,Ro=null,wn=null,lu=0,bs=1/0,Di=null,ja=!1,cu=null,lr=null,Ha=!1,cr=null,Ga=0,No=0,uu=null,Va=-1,Wa=0;function xn(){return(_t&6)!==0?we():Va!==-1?Va:Va=we()}function ur(t){return(t.mode&1)===0?1:(_t&2)!==0&&sn!==0?sn&-sn:Wg.transition!==null?(Wa===0&&(Wa=mn()),Wa):(t=Rt,t!==0||(t=window.event,t=t===void 0?16:_f(t.type)),t)}function oi(t,i,o,c){if(50<No)throw No=0,uu=null,Error(n(185));Sn(t,o,c),((_t&2)===0||t!==$t)&&(t===$t&&((_t&2)===0&&(Ba|=o),Qt===4&&dr(t,sn)),Tn(t,c),o===1&&_t===0&&(i.mode&1)===0&&(bs=we()+500,ya&&rr()))}function Tn(t,i){var o=t.callbackNode;jn(t,i);var c=mi(t,t===$t?sn:0);if(c===0)o!==null&&ae(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&ae(o),i===1)t.tag===0?Vg(_p.bind(null,t)):sh(_p.bind(null,t)),Bg(function(){(_t&6)===0&&rr()}),o=null;else{switch(ff(c)){case 1:o=He;break;case 4:o=tt;break;case 16:o=it;break;case 536870912:o=vt;break;default:o=it}o=Cp(o,yp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function yp(t,i){if(Va=-1,Wa=0,(_t&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Es()&&t.callbackNode!==o)return null;var c=mi(t,t===$t?sn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Xa(t,c);else{i=c;var h=_t;_t|=2;var g=Mp();($t!==t||sn!==i)&&(Di=null,bs=we()+500,Ir(t,i));do try{dx();break}catch(I){Sp(t,I)}while(!0);Cc(),za.current=g,_t=h,Vt!==null?i=0:($t=null,sn=0,i=Qt)}if(i!==0){if(i===2&&(h=Ei(t),h!==0&&(c=h,i=du(t,h))),i===1)throw o=Co,Ir(t,0),dr(t,c),Tn(t,we()),o;if(i===6)dr(t,c);else{if(h=t.current.alternate,(c&30)===0&&!cx(h)&&(i=Xa(t,c),i===2&&(g=Ei(t),g!==0&&(c=g,i=du(t,g))),i===1))throw o=Co,Ir(t,0),dr(t,c),Tn(t,we()),o;switch(t.finishedWork=h,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Or(t,wn,Di);break;case 3:if(dr(t,c),(c&130023424)===c&&(i=lu+500-we(),10<i)){if(mi(t,0)!==0)break;if(h=t.suspendedLanes,(h&c)!==c){xn(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=xc(Or.bind(null,t,wn,Di),i);break}Or(t,wn,Di);break;case 4:if(dr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,h=-1;0<c;){var E=31-lt(c);g=1<<E,E=i[E],E>h&&(h=E),c&=~g}if(c=h,c=we()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*lx(c/1960))-c,10<c){t.timeoutHandle=xc(Or.bind(null,t,wn,Di),c);break}Or(t,wn,Di);break;case 5:Or(t,wn,Di);break;default:throw Error(n(329))}}}return Tn(t,we()),t.callbackNode===o?yp.bind(null,t):null}function du(t,i){var o=Ro;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=Xa(t,i),t!==2&&(i=wn,wn=o,i!==null&&fu(i)),t}function fu(t){wn===null?wn=t:wn.push.apply(wn,t)}function cx(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var h=o[c],g=h.getSnapshot;h=h.value;try{if(!ti(g(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(t,i){for(i&=~au,i&=~Ba,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-lt(i),c=1<<o;t[o]=-1,i&=~c}}function _p(t){if((_t&6)!==0)throw Error(n(327));Es();var i=mi(t,0);if((i&1)===0)return Tn(t,we()),null;var o=Xa(t,i);if(t.tag!==0&&o===2){var c=Ei(t);c!==0&&(i=c,o=du(t,c))}if(o===1)throw o=Co,Ir(t,0),dr(t,i),Tn(t,we()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Or(t,wn,Di),Tn(t,we()),null}function hu(t,i){var o=_t;_t|=1;try{return t(i)}finally{_t=o,_t===0&&(bs=we()+500,ya&&rr())}}function Ur(t){cr!==null&&cr.tag===0&&(_t&6)===0&&Es();var i=_t;_t|=1;var o=qn.transition,c=Rt;try{if(qn.transition=null,Rt=1,t)return t()}finally{Rt=c,qn.transition=o,_t=i,(_t&6)===0&&rr()}}function pu(){On=Ms.current,It(Ms)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,zg(o)),Vt!==null)for(o=Vt.return;o!==null;){var c=o;switch(bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&xa();break;case 3:ys(),It(Mn),It(ln),Ic();break;case 5:kc(c);break;case 4:ys();break;case 13:It(Ft);break;case 19:It(Ft);break;case 10:Rc(c.type._context);break;case 22:case 23:pu()}o=o.return}if($t=t,Vt=t=fr(t.current,null),sn=On=i,Qt=0,Co=null,au=Ba=kr=0,wn=Ro=null,Pr!==null){for(i=0;i<Pr.length;i++)if(o=Pr[i],c=o.interleaved,c!==null){o.interleaved=null;var h=c.next,g=o.pending;if(g!==null){var E=g.next;g.next=h,c.next=E}o.pending=c}Pr=null}return t}function Sp(t,i){do{var o=Vt;try{if(Cc(),Ra.current=La,Na){for(var c=zt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Na=!1}if(Lr=0,Jt=Yt=zt=null,Mo=!1,bo=0,ou.current=null,o===null||o.return===null){Qt=1,Co=i,Vt=null;break}e:{var g=t,E=o.return,I=o,H=i;if(i=sn,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var re=H,ye=I,be=ye.tag;if((ye.mode&1)===0&&(be===0||be===11||be===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ue=Xh(E);if(Ue!==null){Ue.flags&=-257,qh(Ue,E,I,g,i),Ue.mode&1&&Wh(g,re,i),i=Ue,H=re;var je=i.updateQueue;if(je===null){var Ge=new Set;Ge.add(H),i.updateQueue=Ge}else je.add(H);break e}else{if((i&1)===0){Wh(g,re,i),mu();break e}H=Error(n(426))}}else if(Ot&&I.mode&1){var Ht=Xh(E);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),qh(Ht,E,I,g,i),Tc(_s(H,I));break e}}g=H=_s(H,I),Qt!==4&&(Qt=2),Ro===null?Ro=[g]:Ro.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var $=Gh(g,H,i);gh(g,$);break e;case 1:I=H;var G=g.type,te=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(lr===null||!lr.has(te)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ae=Vh(g,I,i);gh(g,Ae);break e}}g=g.return}while(g!==null)}Ep(o)}catch(Xe){i=Xe,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function Mp(){var t=za.current;return za.current=La,t===null?La:t}function mu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),$t===null||(kr&268435455)===0&&(Ba&268435455)===0||dr($t,sn)}function Xa(t,i){var o=_t;_t|=2;var c=Mp();($t!==t||sn!==i)&&(Di=null,Ir(t,i));do try{ux();break}catch(h){Sp(t,h)}while(!0);if(Cc(),_t=o,za.current=c,Vt!==null)throw Error(n(261));return $t=null,sn=0,Qt}function ux(){for(;Vt!==null;)bp(Vt)}function dx(){for(;Vt!==null&&!Y();)bp(Vt)}function bp(t){var i=Ap(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?Ep(t):Vt=i,ou.current=null}function Ep(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=ix(o,i,On),o!==null){Vt=o;return}}else{if(o=rx(o,i),o!==null){o.flags&=32767,Vt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=t}while(i!==null);Qt===0&&(Qt=5)}function Or(t,i,o){var c=Rt,h=qn.transition;try{qn.transition=null,Rt=1,fx(t,i,o,c)}finally{qn.transition=h,Rt=c}return null}function fx(t,i,o,c){do Es();while(cr!==null);if((_t&6)!==0)throw Error(n(327));o=t.finishedWork;var h=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var g=o.lanes|o.childLanes;if(ea(t,g),t===$t&&(Vt=$t=null,sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ha||(Ha=!0,Cp(it,function(){return Es(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=qn.transition,qn.transition=null;var E=Rt;Rt=1;var I=_t;_t|=4,ou.current=null,ox(t,o),pp(o,t),Dg(mc),ia=!!pc,mc=pc=null,t.current=o,ax(o),Ce(),_t=I,Rt=E,qn.transition=g}else t.current=o;if(Ha&&(Ha=!1,cr=t,Ga=h),g=t.pendingLanes,g===0&&(lr=null),on(o.stateNode),Tn(t,we()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)h=i[o],c(h.value,{componentStack:h.stack,digest:h.digest});if(ja)throw ja=!1,t=cu,cu=null,t;return(Ga&1)!==0&&t.tag!==0&&Es(),g=t.pendingLanes,(g&1)!==0?t===uu?No++:(No=0,uu=t):No=0,rr(),null}function Es(){if(cr!==null){var t=ff(Ga),i=qn.transition,o=Rt;try{if(qn.transition=null,Rt=16>t?16:t,cr===null)var c=!1;else{if(t=cr,cr=null,Ga=0,(_t&6)!==0)throw Error(n(331));var h=_t;for(_t|=4,ze=t.current;ze!==null;){var g=ze,E=g.child;if((ze.flags&16)!==0){var I=g.deletions;if(I!==null){for(var H=0;H<I.length;H++){var re=I[H];for(ze=re;ze!==null;){var ye=ze;switch(ye.tag){case 0:case 11:case 15:Ao(8,ye,g)}var be=ye.child;if(be!==null)be.return=ye,ze=be;else for(;ze!==null;){ye=ze;var ve=ye.sibling,Ue=ye.return;if(cp(ye),ye===re){ze=null;break}if(ve!==null){ve.return=Ue,ze=ve;break}ze=Ue}}}var je=g.alternate;if(je!==null){var Ge=je.child;if(Ge!==null){je.child=null;do{var Ht=Ge.sibling;Ge.sibling=null,Ge=Ht}while(Ge!==null)}}ze=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,ze=E;else e:for(;ze!==null;){if(g=ze,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ao(9,g,g.return)}var $=g.sibling;if($!==null){$.return=g.return,ze=$;break e}ze=g.return}}var G=t.current;for(ze=G;ze!==null;){E=ze;var te=E.child;if((E.subtreeFlags&2064)!==0&&te!==null)te.return=E,ze=te;else e:for(E=G;ze!==null;){if(I=ze,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Fa(9,I)}}catch(Xe){Bt(I,I.return,Xe)}if(I===E){ze=null;break e}var Ae=I.sibling;if(Ae!==null){Ae.return=I.return,ze=Ae;break e}ze=I.return}}if(_t=h,rr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(wt,t)}catch{}c=!0}return c}finally{Rt=o,qn.transition=i}}return!1}function wp(t,i,o){i=_s(o,i),i=Gh(t,i,1),t=or(t,i,1),i=xn(),t!==null&&(Sn(t,1,i),Tn(t,i))}function Bt(t,i,o){if(t.tag===3)wp(t,t,o);else for(;i!==null;){if(i.tag===3){wp(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(lr===null||!lr.has(c))){t=_s(o,t),t=Vh(i,t,1),i=or(i,t,1),t=xn(),i!==null&&(Sn(i,1,t),Tn(i,t));break}}i=i.return}}function hx(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=xn(),t.pingedLanes|=t.suspendedLanes&o,$t===t&&(sn&o)===o&&(Qt===4||Qt===3&&(sn&130023424)===sn&&500>we()-lu?Ir(t,0):au|=o),Tn(t,i)}function Tp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var o=xn();t=Ri(t,i),t!==null&&(Sn(t,i,o),Tn(t,o))}function px(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Tp(t,o)}function mx(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Tp(t,o)}var Ap;Ap=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Mn.current)En=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return En=!1,nx(t,i,o);En=(t.flags&131072)!==0}else En=!1,Ot&&(i.flags&1048576)!==0&&oh(i,Sa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ia(t,i),t=i.pendingProps;var h=fs(i,ln.current);vs(i,o),h=zc(null,i,c,t,h,o);var g=Bc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(c)?(g=!0,va(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Dc(i),h.updater=ka,i.stateNode=h,h._reactInternals=i,Xc(i,c,t,o),i=Kc(null,i,c,!0,g,o)):(i.tag=0,Ot&&g&&Mc(i),gn(null,i,h,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ia(t,i),t=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=xx(c),t=ii(c,t),h){case 0:i=Qc(null,i,c,t,o);break e;case 1:i=$h(null,i,c,t,o);break e;case 11:i=Yh(null,i,c,t,o);break e;case 14:i=Qh(null,i,c,ii(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),Qc(t,i,c,h,o);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),$h(t,i,c,h,o);case 3:e:{if(ep(i),t===null)throw Error(n(387));c=i.pendingProps,g=i.memoizedState,h=g.element,mh(t,i),Aa(i,c,null,o);var E=i.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=_s(Error(n(423)),i),i=tp(t,i,c,o,h);break e}else if(c!==h){h=_s(Error(n(424)),i),i=tp(t,i,c,o,h);break e}else for(In=tr(i.stateNode.containerInfo.firstChild),Un=i,Ot=!0,ni=null,o=hh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),c===h){i=Pi(t,i,o);break e}gn(t,i,c,o)}i=i.child}return i;case 5:return vh(i),t===null&&wc(i),c=i.type,h=i.pendingProps,g=t!==null?t.memoizedProps:null,E=h.children,gc(c,h)?E=null:g!==null&&gc(c,g)&&(i.flags|=32),Jh(t,i),gn(t,i,E,o),i.child;case 6:return t===null&&wc(i),null;case 13:return np(t,i,o);case 4:return Lc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=gs(i,null,c,o):gn(t,i,c,o),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),Yh(t,i,c,h,o);case 7:return gn(t,i,i.pendingProps,o),i.child;case 8:return gn(t,i,i.pendingProps.children,o),i.child;case 12:return gn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,E=h.value,Lt(Ea,c._currentValue),c._currentValue=E,g!==null)if(ti(g.value,E)){if(g.children===h.children&&!Mn.current){i=Pi(t,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var I=g.dependencies;if(I!==null){E=g.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(g.tag===1){H=Ni(-1,o&-o),H.tag=2;var re=g.updateQueue;if(re!==null){re=re.shared;var ye=re.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),re.pending=H}}g.lanes|=o,H=g.alternate,H!==null&&(H.lanes|=o),Nc(g.return,o,i),I.lanes|=o;break}H=H.next}}else if(g.tag===10)E=g.type===i.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(n(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),Nc(E,o,i),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===i){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}gn(t,i,h.children,o),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,vs(i,o),h=Wn(h),c=c(h),i.flags|=1,gn(t,i,c,o),i.child;case 14:return c=i.type,h=ii(c,i.pendingProps),h=ii(c.type,h),Qh(t,i,c,h,o);case 15:return Kh(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),Ia(t,i),i.tag=1,bn(c)?(t=!0,va(i)):t=!1,vs(i,o),jh(i,c,h),Xc(i,c,h,o),Kc(null,i,c,!0,t,o);case 19:return rp(t,i,o);case 22:return Zh(t,i,o)}throw Error(n(156,i.tag))};function Cp(t,i){return oe(t,i)}function gx(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,o,c){return new gx(t,i,o,c)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xx(t){if(typeof t=="function")return gu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ue)return 11;if(t===me)return 14}return 2}function fr(t,i){var o=t.alternate;return o===null?(o=Yn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function qa(t,i,o,c,h,g){var E=2;if(c=t,typeof t=="function")gu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case U:return Fr(o.children,h,g,i);case O:E=8,h|=8;break;case P:return t=Yn(12,o,i,h|2),t.elementType=P,t.lanes=g,t;case Z:return t=Yn(13,o,i,h),t.elementType=Z,t.lanes=g,t;case de:return t=Yn(19,o,i,h),t.elementType=de,t.lanes=g,t;case ee:return Ya(o,h,g,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:E=10;break e;case j:E=9;break e;case ue:E=11;break e;case me:E=14;break e;case ce:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(E,o,i,h),i.elementType=t,i.type=c,i.lanes=g,i}function Fr(t,i,o,c){return t=Yn(7,t,c,i),t.lanes=o,t}function Ya(t,i,o,c){return t=Yn(22,t,c,i),t.elementType=ee,t.lanes=o,t.stateNode={isHidden:!1},t}function xu(t,i,o){return t=Yn(6,t,null,i),t.lanes=o,t}function vu(t,i,o){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function vx(t,i,o,c,h){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hn(0),this.expirationTimes=Hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function yu(t,i,o,c,h,g,E,I,H){return t=new vx(t,i,o,I,H),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Yn(3,null,null,i),t.current=g,g.stateNode=t,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dc(g),t}function yx(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function Rp(t){if(!t)return ir;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(bn(o))return ih(t,o,i)}return i}function Np(t,i,o,c,h,g,E,I,H){return t=yu(o,c,!0,t,h,g,E,I,H),t.context=Rp(null),o=t.current,c=xn(),h=ur(o),g=Ni(c,h),g.callback=i??null,or(o,g,h),t.current.lanes=h,Sn(t,h,c),Tn(t,c),t}function Qa(t,i,o,c){var h=i.current,g=xn(),E=ur(h);return o=Rp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ni(g,E),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=or(h,i,E),t!==null&&(oi(t,h,E,g),Ta(t,h,E)),E}function Ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function _u(t,i){Pp(t,i),(t=t.alternate)&&Pp(t,i)}function _x(){return null}var Dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Su(t){this._internalRoot=t}Za.prototype.render=Su.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Qa(t,i,null,null)},Za.prototype.unmount=Su.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){Qa(null,t,null,null)}),i[wi]=null}};function Za(t){this._internalRoot=t}Za.prototype.unstable_scheduleHydration=function(t){if(t){var i=mf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ji.length&&i!==0&&i<Ji[o].priority;o++);Ji.splice(o,0,t),o===0&&vf(t)}};function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ja(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lp(){}function Sx(t,i,o,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var re=Ka(E);g.call(re)}}var E=Np(i,c,t,0,null,!1,!1,"",Lp);return t._reactRootContainer=E,t[wi]=E.current,po(t.nodeType===8?t.parentNode:t),Ur(),E}for(;h=t.lastChild;)t.removeChild(h);if(typeof c=="function"){var I=c;c=function(){var re=Ka(H);I.call(re)}}var H=yu(t,0,!1,null,null,!1,!1,"",Lp);return t._reactRootContainer=H,t[wi]=H.current,po(t.nodeType===8?t.parentNode:t),Ur(function(){Qa(i,H,o,c)}),H}function $a(t,i,o,c,h){var g=o._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var I=h;h=function(){var H=Ka(E);I.call(H)}}Qa(i,E,t,h)}else E=Sx(o,i,t,h,c);return Ka(E)}hf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=qt(i.pendingLanes);o!==0&&(Xl(i,o|1),Tn(i,we()),(_t&6)===0&&(bs=we()+500,rr()))}break;case 13:Ur(function(){var c=Ri(t,1);if(c!==null){var h=xn();oi(c,t,1,h)}}),_u(t,1)}},ql=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var o=xn();oi(i,t,134217728,o)}_u(t,134217728)}},pf=function(t){if(t.tag===13){var i=ur(t),o=Ri(t,i);if(o!==null){var c=xn();oi(o,t,i,c)}_u(t,i)}},mf=function(){return Rt},gf=function(t,i){var o=Rt;try{return Rt=t,i()}finally{Rt=o}},Pe=function(t,i,o){switch(i){case"input":if(dt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var h=ga(c);if(!h)throw Error(n(90));pt(c),dt(c,h)}}}break;case"textarea":L(t,o);break;case"select":i=o.value,i!=null&&k(t,!!o.multiple,i,!1)}},kt=hu,Xt=Ur;var Mx={usingClientEntryPoint:!1,Events:[xo,us,ga,Le,ot,hu]},Po={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bx={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||_x,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{wt=el.inject(bx),xt=el}catch{}}return An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mx,An.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(i))throw Error(n(200));return yx(t,i,null,o)},An.createRoot=function(t,i){if(!Mu(t))throw Error(n(299));var o=!1,c="",h=Dp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=yu(t,1,!1,null,null,o,!1,c,h),t[wi]=i.current,po(t.nodeType===8?t.parentNode:t),new Su(i)},An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=C(i),t=t===null?null:t.stateNode,t},An.flushSync=function(t){return Ur(t)},An.hydrate=function(t,i,o){if(!Ja(i))throw Error(n(200));return $a(null,t,i,!0,o)},An.hydrateRoot=function(t,i,o){if(!Mu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,h=!1,g="",E=Dp;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Np(i,null,t,1,o??null,h,!1,g,E),t[wi]=i.current,po(t),c)for(t=0;t<c.length;t++)o=c[t],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new Za(i)},An.render=function(t,i,o){if(!Ja(i))throw Error(n(200));return $a(null,t,i,!1,o)},An.unmountComponentAtNode=function(t){if(!Ja(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){$a(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},An.unstable_batchedUpdates=hu,An.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!Ja(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return $a(t,i,o,!1,c)},An.version="18.3.1-next-f1338f8080-20240426",An}var jp;function e0(){if(jp)return wu.exports;jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wu.exports=Nx(),wu.exports}var Hp;function Px(){if(Hp)return tl;Hp=1;var s=e0();return tl.createRoot=s.createRoot,tl.hydrateRoot=s.hydrateRoot,tl}var Dx=Px(),fe=$d();function Cu(s){const e=s.replace("#",""),n=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),a=parseInt(e.substring(4,6),16);return`${n},${r},${a}`}const Ho={cyan:"#00f0c8",purple:"#7c6ff7",pink:"#f472b6",bg:"#05050a"},Lx=[{name:"深空霓虹",colors:Ho},{name:"赛博朋克",colors:{cyan:"#00d4ff",purple:"#ff6ec7",pink:"#ffd700",bg:"#0a0015"}},{name:"极光森林",colors:{cyan:"#39ff14",purple:"#00b4d8",pink:"#e040fb",bg:"#060d06"}},{name:"烈焰熔岩",colors:{cyan:"#ff6b35",purple:"#f72585",pink:"#ffbe0b",bg:"#0d0508"}},{name:"冰蓝幻境",colors:{cyan:"#7df9ff",purple:"#5b8def",pink:"#c4b5fd",bg:"#050810"}},{name:"樱花物语",colors:{cyan:"#ffb7c5",purple:"#c084fc",pink:"#fb7185",bg:"#0a0508"}}],t0=fe.createContext({theme:Ho,setTheme:()=>{}});function Qs(){return fe.useContext(t0)}function kx(s){const e=document.documentElement;e.style.setProperty("--c1",Cu(s.cyan)),e.style.setProperty("--c2",Cu(s.purple)),e.style.setProperty("--c3",Cu(s.pink)),e.style.setProperty("--bg",s.bg),e.style.setProperty("--c1-hex",s.cyan),e.style.setProperty("--c2-hex",s.purple),e.style.setProperty("--c3-hex",s.pink)}function Ux({children:s}){const[e,n]=fe.useState(()=>{try{const a=localStorage.getItem("vic-theme");if(a)return JSON.parse(a)}catch{}return Ho}),r=a=>{n(a),localStorage.setItem("vic-theme",JSON.stringify(a))};return fe.useEffect(()=>{kx(e)},[e]),u.jsx(t0.Provider,{value:{theme:e,setTheme:r},children:s})}function Ix(){const s=fe.useRef(null),e=fe.useRef(null),n=fe.useRef(null),r=fe.useRef({x:-200,y:-200}),a=fe.useRef({x:-200,y:-200}),l=fe.useRef([]),f=fe.useRef(0),d=fe.useRef(!1),p=10,m=25,v=8,y=400,S=1;return fe.useEffect(()=>{const M=U=>{r.current={x:U.clientX,y:U.clientY}},b=()=>d.current=!0,w=()=>d.current=!1,_=n.current,x=_==null?void 0:_.getContext("2d"),N=()=>{_&&(_.width=window.innerWidth,_.height=window.innerHeight)};window.addEventListener("resize",N),N();const D=U=>{const P=getComputedStyle(document.documentElement).getPropertyValue("--c1").trim(),A=P?`rgb(${P})`:"#00f0c8",j=performance.now(),ue=Array.from({length:v},(Z,de)=>({x:U.clientX,y:U.clientY,angle:2*Math.PI*de/v,startTime:j,color:A}));l.current.push(...ue)};window.addEventListener("click",D);const R=U=>U*(2-U),K=U=>{a.current.x+=(r.current.x-a.current.x)*.12,a.current.y+=(r.current.y-a.current.y)*.12,s.current&&(s.current.style.transform=`translate(${r.current.x-4}px, ${r.current.y-4}px)`,s.current.style.opacity=d.current?"1":"0"),e.current&&(e.current.style.transform=`translate(${a.current.x-20}px, ${a.current.y-20}px)`,e.current.style.opacity=d.current?"1":"0"),x&&_&&(x.clearRect(0,0,_.width,_.height),l.current=l.current.filter(O=>{const P=U-O.startTime;if(P>=y)return!1;const A=P/y,j=R(A),ue=j*m*S,Z=p*(1-j),de=O.x+ue*Math.cos(O.angle),me=O.y+ue*Math.sin(O.angle),ce=O.x+(ue+Z)*Math.cos(O.angle),ee=O.y+(ue+Z)*Math.sin(O.angle);return x.strokeStyle=O.color,x.lineWidth=2,x.lineCap="round",x.beginPath(),x.moveTo(de,me),x.lineTo(ce,ee),x.stroke(),!0})),f.current=requestAnimationFrame(K)};window.addEventListener("mousemove",M),f.current=requestAnimationFrame(K);const B=document.getElementById("hero");return B&&(B.addEventListener("mouseenter",b),B.addEventListener("mouseleave",w)),()=>{window.removeEventListener("mousemove",M),window.removeEventListener("click",D),window.removeEventListener("resize",N),cancelAnimationFrame(f.current),B&&(B.removeEventListener("mouseenter",b),B.removeEventListener("mouseleave",w))}},[]),u.jsxs(u.Fragment,{children:[u.jsx("canvas",{ref:n,className:"fixed top-0 left-0 pointer-events-none z-[9995]",style:{width:"100vw",height:"100vh"}}),u.jsx("div",{ref:s,className:"fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9997] transition-opacity duration-200",style:{background:"rgb(var(--c1))",boxShadow:"0 0 8px rgba(0,240,200,0.9), 0 0 20px rgba(0,240,200,0.4)",willChange:"transform",opacity:0}}),u.jsx("div",{ref:e,className:"fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9996] transition-opacity duration-200",style:{border:"1px solid rgba(var(--c1),0.35)",willChange:"transform",opacity:0}})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fx=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Gp=s=>{const e=Fx(s);return e.charAt(0).toUpperCase()+e.slice(1)},n0=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=fe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:f,...d},p)=>fe.createElement("svg",{ref:p,...zx,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:n0("lucide",a),...d},[...f.map(([m,v])=>fe.createElement(m,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(s,e)=>{const n=fe.forwardRef(({className:r,...a},l)=>fe.createElement(Bx,{ref:l,iconNode:e,className:n0(`lucide-${Ox(Gp(s))}`,`lucide-${s}`,r),...a}));return n.displayName=Gp(s),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Hx=rt("activity",jx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Vx=rt("arrow-right",Gx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],i0=rt("arrow-up-right",Wx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Ru=rt("award",Xx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Yx=rt("book-open",qx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Kx=rt("briefcase",Qx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]],Jx=rt("cake",Zx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],ev=rt("chart-column",$x);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],r0=rt("check",tv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],s0=rt("chevron-down",nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],rv=rt("chevron-right",iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ov=rt("circle-alert",sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],lv=rt("circle-check",av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],o0=rt("component",cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],a0=rt("copy",uv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],Vp=rt("disc-3",dv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],ud=rt("download",fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ef=rt("external-link",hv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Wp=rt("graduation-cap",pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],gv=rt("layers",mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],vv=rt("layout-dashboard",xv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],_v=rt("lock",yv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],tf=rt("mail",Sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],l0=rt("map-pin",Mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m21 3-6.75 6.75",key:"pv0uzu"}],["circle",{cx:"10",cy:"14",r:"6",key:"1qwbdc"}]],Ev=rt("mars",bv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Tv=rt("menu",wv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]],Cv=rt("mouse",Av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],c0=rt("palette",Rv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Pv=rt("pause",Nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],Lv=rt("phone-call",Dv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Uv=rt("phone",kv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Ov=rt("play",Iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],zv=rt("presentation",Fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Xp=rt("radio",Bv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Hv=rt("rotate-ccw",jv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Vv=rt("send",Gv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]],Xv=rt("skip-back",Wv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],Yv=rt("skip-forward",qv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],nf=rt("sparkles",Qv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Zv=rt("trophy",Kv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],$v=rt("twitter",Jv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],t1=rt("volume-2",e1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],i1=rt("volume-x",n1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],s1=rt("wand-sparkles",r1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jr=rt("x",o1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],l1=rt("zap",a1);function c1({isLight:s}){const[e,n]=fe.useState(!1),r=fe.useRef(null),{theme:a,setTheme:l}=Qs(),[f,d]=fe.useState(a);fe.useEffect(()=>{d(a)},[a]),fe.useEffect(()=>{const U=O=>{r.current&&!r.current.contains(O.target)&&n(!1)};return e&&document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[e]);const p=(U,O)=>{const P={...f,[U]:O};d(P),l(P)},m=s?"rgba(255,255,255,0.95)":"linear-gradient(160deg, #0d0d1a 0%, #0a0a14 100%)",v=s?"1px solid rgba(0,0,0,0.1)":"1px solid rgba(var(--c1),0.2)",y=s?"0 20px 60px rgba(0,0,0,0.1), 0 0 40px rgba(0,0,0,0.05)":"0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(var(--c1),0.08)",S=s?"#1a1a2e":"rgba(255,255,255,0.8)",M=s?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.06)",b=s?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)",w=U=>s?U?"rgba(0,0,0,0.1)":"rgba(0,0,0,0.03)":U?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.03)",_=U=>s?U?"1px solid rgba(0,0,0,0.2)":"1px solid rgba(0,0,0,0.06)":U?"1px solid rgba(var(--c1),0.4)":"1px solid rgba(255,255,255,0.06)",x=U=>s?U?"#1a1a2e":"rgba(0,0,0,0.45)":U?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.45)",N=s?"linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)":"linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",D=s?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)",R=s?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)",K=s?"rgba(0,0,0,0.3)":"rgba(255,255,255,0.3)",B=s?"1.5px solid rgba(0,0,0,0.15)":"1.5px solid rgba(255,255,255,0.15)";return u.jsxs("div",{className:"relative",ref:r,children:[u.jsx("button",{onClick:()=>n(!e),className:"flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 hover:scale-110",style:s?{background:"transparent",color:"#1a1a2e",fontWeight:500,border:"0.5px solid rgba(0,0,0,0.22)",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",transition:"all 0.3s"}:{background:"linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",color:"rgba(255,255,255,0.95)",fontWeight:600,border:"0.5px solid rgba(var(--c1),0.4)",boxShadow:"0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",transition:"all 0.3s"},title:"切换主题色",children:u.jsx(c0,{size:16})}),e&&u.jsxs("div",{className:"absolute right-0 top-12 w-72 rounded-xl p-4 z-[100]",style:{background:m,border:v,boxShadow:y,backdropFilter:"blur(20px)"},children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:S,letterSpacing:"0.05em"},children:"🎨 主题配色"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("button",{onClick:()=>{l(Ho),d(Ho)},className:"w-6 h-6 rounded-md flex items-center justify-center transition-colors",style:{background:M,color:b},title:"重置默认",children:u.jsx(Hv,{size:12})}),u.jsx("button",{onClick:()=>n(!1),className:"w-6 h-6 rounded-md flex items-center justify-center transition-colors",style:{background:M,color:b},children:u.jsx(Jr,{size:12})})]})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2 mb-4",children:Lx.map(U=>{const O=U.colors.cyan===a.cyan&&U.colors.purple===a.purple&&U.colors.pink===a.pink;return u.jsxs("button",{onClick:()=>l(U.colors),className:"rounded-lg p-2 transition-all duration-200 hover:scale-105",style:{background:w(O),border:_(O)},children:[u.jsx("div",{className:"flex gap-1 justify-center mb-1.5",children:[U.colors.cyan,U.colors.purple,U.colors.pink].map((P,A)=>u.jsx("div",{className:"w-4 h-4 rounded-full",style:{background:P,boxShadow:`0 0 6px ${P}66`}},A))}),u.jsx("span",{style:{fontSize:"0.65rem",color:x(O),fontWeight:O?600:400},children:U.name})]},U.name)})}),u.jsx("div",{className:"h-px mb-3",style:{background:N}}),u.jsx("div",{style:{fontSize:"0.7rem",fontWeight:500,color:D,letterSpacing:"0.08em",marginBottom:"8px"},children:"自定义颜色"}),u.jsx("div",{className:"space-y-2",children:[{key:"cyan",label:"主色 (霓虹青)"},{key:"purple",label:"辅色 (紫罗兰)"},{key:"pink",label:"点缀 (粉玫)"},{key:"bg",label:"背景色"}].map(({key:U,label:O})=>u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsxs("label",{className:"relative w-7 h-7 rounded-lg overflow-hidden cursor-pointer flex-shrink-0",style:{border:B,boxShadow:`0 0 8px ${f[U]}44`},children:[u.jsx("input",{type:"color",value:f[U],onChange:P=>p(U,P.target.value),className:"absolute inset-0 opacity-0 cursor-pointer w-full h-full"}),u.jsx("div",{className:"w-full h-full",style:{background:f[U]}})]}),u.jsx("span",{style:{fontSize:"0.72rem",color:R,flex:1},children:O}),u.jsx("span",{style:{fontSize:"0.65rem",color:K,fontFamily:"monospace"},children:f[U].toUpperCase()})]},U))})]})]})}var u1=e0();function Vo({children:s}){const[e,n]=fe.useState(!1);return fe.useEffect(()=>(n(!0),()=>n(!1)),[]),e?u1.createPortal(s,document.body):null}const qp="data:image/png;base64,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",Nu=[{label:"Home",href:"hero"},{label:"Skills",href:"skills"},{label:"Projects",href:"projects"},{label:"Works",href:"portfolio"},{label:"Education",href:"education"},{label:"Contact",href:"contact"}],d1=new Set(["projects","education"]);function f1(){const[s,e]=fe.useState(!1),[n,r]=fe.useState(!1),[a,l]=fe.useState("hero"),[f,d]=fe.useState(null),[p,m]=fe.useState(!1);fe.useEffect(()=>{const O=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",O,{passive:!0}),O(),()=>window.removeEventListener("scroll",O)},[]),fe.useEffect(()=>{const O={root:null,rootMargin:"-68px 0px -80% 0px",threshold:[.01,.05,.1]},P=new Map,A=ue=>{if(ue.forEach(Z=>{Z.isIntersecting?P.set(Z.target.id,Z.boundingClientRect.top):P.delete(Z.target.id)}),P.size>0){let Z="",de=1/0;P.forEach((me,ce)=>{me<de&&(de=me,Z=ce)}),Z&&l(Z)}},j=new IntersectionObserver(A,O);return Nu.forEach(ue=>{const Z=document.getElementById(ue.href);Z&&j.observe(Z)}),()=>{j.disconnect(),P.clear()}},[]);const v=O=>{var P;(P=document.getElementById(O))==null||P.scrollIntoView({behavior:"smooth"}),r(!1)},y=d1.has(a),S=y?"rgba(255,255,255,0.6)":s?"rgba(5,5,12,0.5)":"rgba(5,5,12,0.6)",M=y?"1px solid rgba(0,0,0,0.08)":`1px solid ${s?"rgba(var(--c1),0.07)":"rgba(var(--c1),0)"}`,b=y?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.04)",w=y?"1px solid rgba(0,0,0,0.10)":"1px solid rgba(255,255,255,0.18)",_=y?"inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 24px rgba(0,0,0,0.06)":"inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)",x=y?"rgba(0,0,0,0.45)":"rgba(255,255,255,0.5)",N=y?"rgba(0,0,0,0.75)":"rgba(255,255,255,0.9)",D=y?"#1a1a2e":"#f0f4f8",R=y?"linear-gradient(135deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.22) 100%)":"linear-gradient(135deg, rgba(var(--c1),0.45) 0%, rgba(var(--c1),0.18) 50%, rgba(var(--c1),0.28) 100%)",K=y?"1px solid rgba(0,0,0,0.22), 1px solid rgba(255,255,255,0.45) inset":"1px solid rgba(var(--c1),0.7), 1px solid rgba(255,255,255,0.18) inset",B=y?"0 0 24px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.15), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -2px 0 rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.12)":"0 0 50px rgba(var(--c1),0.45), 0 12px 48px rgba(0,0,0,0.35), inset 0 3px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.25), 0 0 0 1px rgba(var(--c1),0.25), 0 0 30px rgba(var(--c1),0.2)",U=y?"#1a1a2e":"rgb(var(--c1))";return u.jsxs(u.Fragment,{children:[u.jsxs("nav",{className:"fixed top-0 left-0 z-50 transition-all duration-500",style:{background:S,backdropFilter:"blur(24px) saturate(180%)",WebkitBackdropFilter:"blur(24px) saturate(180%)",borderBottom:M,boxShadow:y?"0 4px 24px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.5)":"0 4px 24px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)",transform:"scale(var(--screen-scale))",transformOrigin:"top left",width:"calc(100% / var(--screen-scale))"},children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between gap-4",children:[u.jsxs("button",{onClick:()=>m(!0),className:"flex items-center gap-3 flex-shrink-0",children:[u.jsx("div",{className:"relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0",style:{border:y?"1.5px solid rgba(0,0,0,0.12)":"1.5px solid rgba(var(--c1),0.45)",boxShadow:y?"0 1px 6px rgba(0,0,0,0.12)":"0 0 8px rgba(var(--c1),0.25)",transition:"border 0.4s, box-shadow 0.4s"},children:u.jsx("img",{src:qp,alt:"Vic Qu",className:"w-full h-full object-cover object-center"})}),u.jsx("span",{className:"whitespace-nowrap",style:{fontWeight:700,fontSize:"1.2rem",color:D,letterSpacing:"0.08em",transition:"color 0.4s"},children:"曲维甲"})]}),u.jsxs("div",{className:`hidden md:flex items-center gap-4 px-1.5 py-1.5 rounded-full transition-all duration-500 flex-shrink-0 ${y?"nav-light":"nav-dark"}`,style:{background:b,border:w,backdropFilter:"blur(12px)",boxShadow:_},children:[Nu.map(O=>{const P=a===O.href,A=f===O.href;return u.jsxs("button",{onClick:()=>{v(O.href),l(O.href)},onMouseEnter:()=>d(O.href),onMouseLeave:()=>d(null),className:"relative px-3 py-1.5 text-base rounded-full overflow-hidden nav-glass-btn flex-shrink-0 whitespace-nowrap",style:{color:P?U:A?N:x,fontWeight:P?600:400,background:P?R:"transparent",border:P?K:"1px solid transparent",boxShadow:P?B:"none",letterSpacing:"0.01em",transition:"color 0.25s, background 0.3s, border 0.3s, box-shadow 0.3s"},children:[P&&!y&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"absolute top-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none",style:{width:"70%",height:"1.5px",background:"linear-gradient(90deg, transparent, rgba(var(--c1),0.85), transparent)",boxShadow:"0 0 12px rgba(var(--c1),0.5), 0 0 24px rgba(var(--c1),0.25)"}}),u.jsx("span",{className:"absolute top-1 left-1/2 -translate-x-1/2 rounded-full pointer-events-none",style:{width:"50%",height:"1px",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",opacity:.6}})]}),O.label]},O.label)}),u.jsx("style",{children:`
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
            `})]}),u.jsxs("div",{className:"hidden md:flex items-center gap-2 flex-shrink-0",children:[u.jsx(c1,{isLight:y}),u.jsx("button",{className:"flex items-center gap-2 px-5 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-[1.1] whitespace-nowrap flex-shrink-0",onClick:()=>m(!0),style:y?{background:"transparent",color:"#1a1a2e",fontWeight:500,border:"0.5px solid rgba(0,0,0,0.22)",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",transition:"all 0.3s"}:{background:"linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",color:"rgba(255,255,255,0.95)",fontWeight:600,border:"0.5px solid rgba(var(--c1),0.4)",boxShadow:"0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",transition:"all 0.3s"},children:"About Me"})]}),u.jsx("button",{className:"md:hidden",style:{color:y?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.7)",transition:"color 0.4s"},onClick:()=>r(!n),children:n?u.jsx(Jr,{size:26}):u.jsx(Tv,{size:26})})]}),n&&u.jsx("div",{className:"md:hidden px-[24px] py-[0px]",style:{background:"transparent",backdropFilter:"none",WebkitBackdropFilter:"none",borderBottom:"none"},children:Nu.map(O=>u.jsx("button",{onClick:()=>v(O.href),className:"block w-full text-left py-3 text-base border-b",style:{color:a===O.href?y?"#1a1a2e":"rgb(var(--c1))":y?"rgba(5,5,12,0.6)":"rgba(255,255,255,0.5)",fontWeight:a===O.href?700:400,borderColor:y?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.05)"},children:O.label},O.label))})]}),p&&u.jsx(Vo,{children:u.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-4",style:{backdropFilter:"blur(16px)",background:"rgba(5,5,12,0.75)"},onClick:()=>m(!1),children:u.jsxs("div",{className:"relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl",style:{background:"linear-gradient(160deg, #0d0d1a 0%, #0a0a14 100%)",border:"1px solid rgba(var(--c1),0.18)",boxShadow:"0 0 60px rgba(var(--c1),0.12), 0 0 120px rgba(var(--c2),0.08), inset 0 1px 0 rgba(var(--c1),0.1)"},onClick:O=>O.stopPropagation(),children:[u.jsxs("div",{className:"sticky top-0 z-10 bg-[#0d0d1a] rounded-t-2xl px-6 sm:px-8 pt-4 sm:pt-8 pb-0",children:[u.jsx("div",{className:"absolute top-0 left-0 right-0 h-px rounded-t-2xl",style:{background:"linear-gradient(90deg, transparent, rgb(var(--c1)), rgb(var(--c2)), transparent)"}}),u.jsx("button",{onClick:()=>m(!1),className:"absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.5)"},children:u.jsx(Jr,{size:15})}),u.jsxs("div",{className:"flex items-center gap-3 sm:gap-5 mb-4 sm:mb-8",children:[u.jsx("div",{className:"relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0",style:{border:"2px solid rgba(var(--c1),0.4)",boxShadow:"0 0 20px rgba(var(--c1),0.2)"},children:u.jsx("img",{src:qp,alt:"Vic Qu",className:"w-full h-full object-cover"})}),u.jsxs("div",{children:[u.jsx("h2",{style:{fontSize:"1.0rem",fontWeight:700,color:"#f0f4f8",letterSpacing:"0.04em"},className:"sm:text-[1.6rem]",children:"曲维甲"}),u.jsx("p",{style:{color:"rgb(var(--c1))",fontSize:"0.8rem",fontWeight:500,letterSpacing:"0.08em"},className:"sm:text-[0.9rem]",children:"Vic Qu · ENFJ 全栈设计师"}),u.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 mt-1 sm:mt-1.5",children:[u.jsx(l0,{size:12,style:{color:"rgba(255,255,255,0.35)"}}),u.jsx("span",{style:{color:"rgba(255,255,255,0.35)",fontSize:"0.8rem"},children:"济南 · 中国"})]})]})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[{icon:u.jsx(Ev,{size:20}),label:"性别",value:"男"},{icon:u.jsx(Jx,{size:20}),label:"生日",value:" 1992.7.9"},{icon:u.jsx(Uv,{size:20}),label:"电话",value:"+86 156 6279 6885"},{icon:u.jsx(tf,{size:20}),label:"邮箱",value:"quweijia@vip.qq.com"}].map(O=>u.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 rounded-xl",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)"},children:[u.jsx("span",{style:{color:"rgb(var(--c1))"},children:O.icon}),u.jsxs("div",{children:[u.jsx("p",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.3)",marginBottom:"1px"},children:O.label}),u.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.8)",fontWeight:500},children:O.value})]})]},O.label))})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto px-6 sm:px-8 pb-6 sm:pb-8",children:[u.jsx("style",{children:`
        div::-webkit-scrollbar {
          display: none;
        }
      `}),u.jsxs("div",{className:"mt-8",children:[u.jsxs("div",{className:"mb-6",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c1)),rgb(var(--c2)))"}}),u.jsx("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:"个人简介"})]}),u.jsx("p",{style:{fontSize:"0.9rem",lineHeight:"1.8",color:"rgba(255,255,255,0.6)"},children:"拥有 10 年以上 UI/UX 设计经验的全栈设计师，深度融合用户研究、交互设计与前端技术，擅长将复杂业务逻辑转化为清晰直觉的数字体验。ENFJ 人格驱动，热衷于跨职能协作与设计系统建设，曾主导多个亿级用户产品的端到端设计工作。"})]}),u.jsxs("div",{className:"mb-6",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c2)),rgb(var(--c3)))"}}),u.jsxs("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:[u.jsx(Yx,{size:12,className:"inline mr-1.5",style:{color:"rgb(var(--c2))"}}),"教育经历"]})]}),u.jsx("div",{className:"space-y-3",children:[{school:"中国石油大学（华东）",degree:"建筑环境与能源应用工程 · 本科",year:"2011 – 2015"},{school:"Google UX Design Certificate",degree:"用户体验设计专业认证",year:"2017"}].map(O=>u.jsxs("div",{className:"flex items-start justify-between px-4 py-3 rounded-xl",style:{background:"rgba(var(--c2),0.06)",border:"1px solid rgba(var(--c2),0.12)"},children:[u.jsxs("div",{children:[u.jsx("p",{style:{fontSize:"0.88rem",fontWeight:600,color:"rgba(255,255,255,0.8)"},children:O.school}),u.jsx("p",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",marginTop:"2px"},children:O.degree})]}),u.jsx("span",{style:{fontSize:"0.75rem",color:"rgb(var(--c2))",fontWeight:500,whiteSpace:"nowrap",marginLeft:"12px"},children:O.year})]},O.school))})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c3)),rgb(var(--c1)))"}}),u.jsxs("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:[u.jsx(Kx,{size:12,className:"inline mr-1.5",style:{color:"rgb(var(--c3))"}}),"工作经历"]})]}),u.jsx("div",{className:"space-y-3",children:[{company:"浪潮智慧建筑科技有限公司",role:"UI 设计主管",year:"2024 – 至今",desc:"深耕智慧园区、智慧工地、建筑节能等核心业务领域的 UI 设计/管理工作。主导构建覆盖移动端与 PC 端的全链路原子组件设计规范体系，建立标准化评审机制把控团队设计输出质量；统筹展厅设计方案对接与落地，协助管理层完成商务级 PPT 视觉优化等。"},{company:"历城控股集团",role:"UI 设计主管",year:"2023 – 2024",desc:"聚焦数字政府建设、数智化产品开发、应用及运营等业务，设计不同风格的视觉界面，参与项目评审并提出有效的修改方案。"},{company:"山东高速集团",role:"UI 设计主管",year:"2023 – 2023",desc:"全面负责UI设计组工作推进，优化迭代公司自主研发的智能货运交易共享平台，参与产品需求讨论，保障产品设计方案有效落地。"},{company:"山东爱城市网科技有限公司",role:"高级 UI/UX 设计师",year:"2018 – 2023",desc:"负责爱城市网 App 核心应用设计、交互动效制作，优化产品和研发的工作流程，维护和更新产品设计规范元件库，牵头设计类专利撰写等。"}].map(O=>u.jsxs("div",{className:"px-4 py-3 rounded-xl",style:{background:"rgba(var(--c3),0.05)",border:"1px solid rgba(var(--c3),0.1)"},children:[u.jsxs("div",{className:"flex items-start justify-between mb-1",children:[u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"0.88rem",fontWeight:600,color:"rgba(255,255,255,0.8)",lineHeight:1.5},children:O.company}),u.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)"},children:O.role})]}),u.jsx("span",{style:{fontSize:"0.75rem",color:"rgb(var(--c3))",fontWeight:500,whiteSpace:"nowrap",marginLeft:"12px"},children:O.year})]}),u.jsx("p",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.35)",lineHeight:"1.6"},children:O.desc})]},O.company))})]})]})]})]})})})]})}function u0({isOpen:s,onClose:e,onConfirm:n}){const[r,a]=fe.useState(""),[l,f]=fe.useState(""),d="vicqu";fe.useEffect(()=>{s&&(a(""),f(""))},[s]),fe.useEffect(()=>{const m=v=>{v.key==="Escape"&&s&&e()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[s,e]);const p=m=>{m.preventDefault(),r===d?(n(),e()):(f("密码错误，请重试"),a(""))};return s?u.jsx(Vo,{children:u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backdropFilter:"blur(8px)",background:"rgba(0, 0, 0, 0.6)"},onClick:e,children:u.jsxs("div",{className:"relative w-full max-w-md rounded-2xl p-8 shadow-2xl",style:{background:"var(--bg)",border:"1px solid rgba(var(--c1), 0.2)",boxShadow:"0 0 40px rgba(var(--c1), 0.15), 0 20px 60px rgba(0, 0, 0, 0.5)"},onClick:m=>m.stopPropagation(),children:[u.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 hover:rotate-90",style:{color:"rgba(255, 255, 255, 0.5)",background:"rgba(var(--c1), 0.1)"},onMouseEnter:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.2)",m.currentTarget.style.color="rgb(var(--c1))"},onMouseLeave:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.1)",m.currentTarget.style.color="rgba(255, 255, 255, 0.5)"},children:u.jsx(Jr,{size:20})}),u.jsx("div",{className:"mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6",style:{background:"linear-gradient(135deg, rgba(var(--c1), 0.15), rgba(var(--c1), 0.05))",border:"1px solid rgba(var(--c1), 0.3)"},children:u.jsx(_v,{size:32,style:{color:"rgb(var(--c1))"}})}),u.jsx("h2",{className:"text-2xl font-bold text-center mb-2",style:{color:"rgba(255, 255, 255, 0.9)"},children:"请输入密码"}),u.jsx("p",{className:"text-center mb-6 text-sm",style:{color:"rgba(255, 255, 255, 0.5)"},children:"请联系 15662796885 获取"}),u.jsxs("form",{onSubmit:p,children:[u.jsxs("div",{className:"mb-6",children:[u.jsx("input",{type:"password",value:r,onChange:m=>{a(m.target.value),f("")},placeholder:"输入密码",className:"w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-200",style:{background:"rgba(var(--c1), 0.05)",border:l?"1px solid rgba(239, 68, 68, 0.5)":"1px solid rgba(var(--c1), 0.2)",color:"rgba(255, 255, 255, 0.9)",boxShadow:l?"0 0 0 3px rgba(239, 68, 68, 0.1)":"none"},onFocus:m=>{l||(m.currentTarget.style.borderColor="rgba(var(--c1), 0.4)",m.currentTarget.style.boxShadow="0 0 0 3px rgba(var(--c1), 0.1)")},onBlur:m=>{l||(m.currentTarget.style.borderColor="rgba(var(--c1), 0.2)",m.currentTarget.style.boxShadow="none")},autoFocus:!0}),l&&u.jsxs("div",{className:"mt-2 flex items-center gap-2 text-sm",style:{color:"rgb(239, 68, 68)"},children:[u.jsx(ov,{size:16}),u.jsx("span",{children:l})]})]}),u.jsxs("div",{className:"flex gap-3",children:[u.jsx("button",{type:"button",onClick:e,className:"flex-1 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:scale-[1.02]",style:{background:"rgba(var(--c1), 0.1)",color:"rgba(255, 255, 255, 0.7)",border:"1px solid rgba(var(--c1), 0.2)"},onMouseEnter:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.15)",m.currentTarget.style.color="rgba(255, 255, 255, 0.9)"},onMouseLeave:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.1)",m.currentTarget.style.color="rgba(255, 255, 255, 0.7)"},children:"取消"}),u.jsx("button",{type:"submit",className:"flex-1 px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 hover:scale-[1.02]",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",color:"var(--bg)",border:"none",boxShadow:"0 0 20px rgba(var(--c1), 0.3)"},onMouseEnter:m=>{m.currentTarget.style.boxShadow="0 0 30px rgba(var(--c1), 0.4)"},onMouseLeave:m=>{m.currentTarget.style.boxShadow="0 0 20px rgba(var(--c1), 0.3)"},children:"确认"})]})]})]})})}):null}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rf="170",h1=0,Yp=1,p1=2,d0=1,m1=2,Fi=3,br=0,Dn=1,zi=2,Sr=0,Bs=1,dd=2,Qp=3,Kp=4,g1=5,Yr=100,x1=101,v1=102,y1=103,_1=104,S1=200,M1=201,b1=202,E1=203,fd=204,hd=205,w1=206,T1=207,A1=208,C1=209,R1=210,N1=211,P1=212,D1=213,L1=214,pd=0,md=1,gd=2,Gs=3,xd=4,vd=5,yd=6,_d=7,f0=0,k1=1,U1=2,Mr=0,I1=1,O1=2,F1=3,z1=4,B1=5,j1=6,H1=7,h0=300,Vs=301,Ws=302,Sd=303,Md=304,jl=306,bd=1e3,fi=1001,Ed=1002,Bn=1003,G1=1004,nl=1005,Pn=1006,Pu=1007,Kr=1008,Gi=1009,p0=1010,m0=1011,Go=1012,sf=1013,$r=1014,Si=1015,Ks=1016,of=1017,af=1018,Xs=1020,g0=35902,x0=1021,v0=1022,Zn=1023,y0=1024,_0=1025,js=1026,qs=1027,S0=1028,lf=1029,M0=1030,cf=1031,uf=1033,Nl=33776,Pl=33777,Dl=33778,Ll=33779,wd=35840,Td=35841,Ad=35842,Cd=35843,Rd=36196,Nd=37492,Pd=37496,Dd=37808,Ld=37809,kd=37810,Ud=37811,Id=37812,Od=37813,Fd=37814,zd=37815,Bd=37816,jd=37817,Hd=37818,Gd=37819,Vd=37820,Wd=37821,kl=36492,Xd=36494,qd=36495,b0=36283,Yd=36284,Qd=36285,Kd=36286,V1=3200,W1=3201,X1=0,q1=1,_r="",Kn="srgb",Zs="srgb-linear",Hl="linear",Pt="srgb",ws=7680,Zp=519,Y1=512,Q1=513,K1=514,E0=515,Z1=516,J1=517,$1=518,ey=519,Jp=35044,$p="300 es",Bi=2e3,Il=2001;class Js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Du=Math.PI/180,Zd=180/Math.PI;function Wo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]).toLowerCase()}function Nn(s,e,n){return Math.max(e,Math.min(n,s))}function ty(s,e){return(s%e+e)%e}function Lu(s,e,n){return(1-n)*s+n*e}function Lo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*a+e.x,this.y=l*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,r,a,l,f,d,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,f,d,p,m)}set(e,n,r,a,l,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=l,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],y=r[7],S=r[2],M=r[5],b=r[8],w=a[0],_=a[3],x=a[6],N=a[1],D=a[4],R=a[7],K=a[2],B=a[5],U=a[8];return l[0]=f*w+d*N+p*K,l[3]=f*_+d*D+p*B,l[6]=f*x+d*R+p*U,l[1]=m*w+v*N+y*K,l[4]=m*_+v*D+y*B,l[7]=m*x+v*R+y*U,l[2]=S*w+M*N+b*K,l[5]=S*_+M*D+b*B,l[8]=S*x+M*R+b*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*l*v+r*d*p+a*l*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],y=v*f-d*m,S=d*p-v*l,M=m*l-f*p,b=n*y+r*S+a*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=y*w,e[1]=(a*m-v*r)*w,e[2]=(d*r-a*f)*w,e[3]=S*w,e[4]=(v*n-a*p)*w,e[5]=(a*l-d*n)*w,e[6]=M*w,e[7]=(r*p-m*n)*w,e[8]=(f*n-r*l)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,f,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(ku.makeScale(e,n)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,n){return this.premultiply(ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ku=new ut;function w0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ny(){const s=Ol("canvas");return s.style.display="block",s}const em={};function zo(s){s in em||(em[s]=!0,console.warn(s))}function iy(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function ry(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sy(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Pt&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Pt&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_r?Hl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const tm=[.64,.33,.3,.6,.15,.06],nm=[.2126,.7152,.0722],im=[.3127,.329],rm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[Zs]:{primaries:tm,whitePoint:im,transfer:Hl,toXYZ:rm,fromXYZ:sm,luminanceCoefficients:nm,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:tm,whitePoint:im,transfer:Pt,toXYZ:rm,fromXYZ:sm,luminanceCoefficients:nm,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Ts;class oy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Ol("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=ji(l[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ji(n[r]/255)*255):n[r]=ji(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ay=0;class T0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?l.push(Uu(a[f].image)):l.push(Uu(a[f]))}else l=Uu(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Uu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?oy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ly=0;class yn extends Js{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,r=fi,a=fi,l=Pn,f=Kr,d=Zn,p=Gi,m=yn.DEFAULT_ANISOTROPY,v=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Wo(),this.name="",this.source=new T0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bd:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bd:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=h0;yn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,r=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*l,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*l,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*l,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const p=e.elements,m=p[0],v=p[4],y=p[8],S=p[1],M=p[5],b=p[9],w=p[2],_=p[6],x=p[10];if(Math.abs(v-S)<.01&&Math.abs(y-w)<.01&&Math.abs(b-_)<.01){if(Math.abs(v+S)<.1&&Math.abs(y+w)<.1&&Math.abs(b+_)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,R=(M+1)/2,K=(x+1)/2,B=(v+S)/4,U=(y+w)/4,O=(b+_)/4;return D>R&&D>K?D<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(D),a=B/r,l=U/r):R>K?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=B/a,l=O/a):K<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(K),r=U/l,a=O/l),this.set(r,a,l,n),this}let N=Math.sqrt((_-b)*(_-b)+(y-w)*(y-w)+(S-v)*(S-v));return Math.abs(N)<.001&&(N=1),this.x=(_-b)/N,this.y=(y-w)/N,this.z=(S-v)/N,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cy extends Js{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new yn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new T0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends cy{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class A0 extends yn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uy extends yn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],y=r[a+3];const S=l[f+0],M=l[f+1],b=l[f+2],w=l[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(d===1){e[n+0]=S,e[n+1]=M,e[n+2]=b,e[n+3]=w;return}if(y!==w||p!==S||m!==M||v!==b){let _=1-d;const x=p*S+m*M+v*b+y*w,N=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const K=Math.sqrt(D),B=Math.atan2(K,x*N);_=Math.sin(_*B)/K,d=Math.sin(d*B)/K}const R=d*N;if(p=p*_+S*R,m=m*_+M*R,v=v*_+b*R,y=y*_+w*R,_===1-d){const K=1/Math.sqrt(p*p+m*m+v*v+y*y);p*=K,m*=K,v*=K,y*=K}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,l,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],y=l[f],S=l[f+1],M=l[f+2],b=l[f+3];return e[n]=d*b+v*y+p*M-m*S,e[n+1]=p*b+v*S+m*y-d*M,e[n+2]=m*b+v*M+d*S-p*y,e[n+3]=v*b-d*y-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),y=d(l/2),S=p(r/2),M=p(a/2),b=p(l/2);switch(f){case"XYZ":this._x=S*v*y+m*M*b,this._y=m*M*y-S*v*b,this._z=m*v*b+S*M*y,this._w=m*v*y-S*M*b;break;case"YXZ":this._x=S*v*y+m*M*b,this._y=m*M*y-S*v*b,this._z=m*v*b-S*M*y,this._w=m*v*y+S*M*b;break;case"ZXY":this._x=S*v*y-m*M*b,this._y=m*M*y+S*v*b,this._z=m*v*b+S*M*y,this._w=m*v*y-S*M*b;break;case"ZYX":this._x=S*v*y-m*M*b,this._y=m*M*y+S*v*b,this._z=m*v*b-S*M*y,this._w=m*v*y+S*M*b;break;case"YZX":this._x=S*v*y+m*M*b,this._y=m*M*y+S*v*b,this._z=m*v*b-S*M*y,this._w=m*v*y-S*M*b;break;case"XZY":this._x=S*v*y-m*M*b,this._y=m*M*y-S*v*b,this._z=m*v*b+S*M*y,this._w=m*v*y+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],y=n[10],S=r+d+y;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-p)*M,this._y=(l-m)*M,this._z=(f-a)*M}else if(r>d&&r>y){const M=2*Math.sqrt(1+r-d-y);this._w=(v-p)/M,this._x=.25*M,this._y=(a+f)/M,this._z=(l+m)/M}else if(d>y){const M=2*Math.sqrt(1+d-r-y);this._w=(l-m)/M,this._x=(a+f)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+y-r-d);this._w=(f-a)/M,this._x=(l+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-l*p,this._y=a*v+f*p+l*d-r*m,this._z=l*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-n;return this._w=M*f+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*l+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),y=Math.sin((1-n)*v)/m,S=Math.sin(n*v)/m;return this._w=f*y+this._w*S,this._x=r*y+this._x*S,this._y=a*y+this._y*S,this._z=l*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,n=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,f=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*f,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*f,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-l*a),y=2*(l*r-f*n);return this.x=n+p*m+f*y-d*v,this.y=r+p*v+d*m-l*y,this.z=a+p*y+l*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-l*d,this.y=l*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Iu.copy(this).projectOnVector(e),this.sub(Iu)}reflect(e){return this.sub(Iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Iu=new le,om=new Xo;class qo{constructor(e=new le(1/0,1/0,1/0),n=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=l.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ai):ai.fromBufferAttribute(l,f),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),il.copy(r.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),rl.subVectors(this.max,ko),As.subVectors(e.a,ko),Cs.subVectors(e.b,ko),Rs.subVectors(e.c,ko),pr.subVectors(Cs,As),mr.subVectors(Rs,Cs),zr.subVectors(As,Rs);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-zr.z,zr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,zr.z,0,-zr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-zr.y,zr.x,0];return!Ou(n,As,Cs,Rs,rl)||(n=[1,0,0,0,1,0,0,0,1],!Ou(n,As,Cs,Rs,rl))?!1:(sl.crossVectors(pr,mr),n=[sl.x,sl.y,sl.z],Ou(n,As,Cs,Rs,rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new le,new le,new le,new le,new le,new le,new le,new le],ai=new le,il=new qo,As=new le,Cs=new le,Rs=new le,pr=new le,mr=new le,zr=new le,ko=new le,rl=new le,sl=new le,Br=new le;function Ou(s,e,n,r,a){for(let l=0,f=s.length-3;l<=f;l+=3){Br.fromArray(s,l);const d=a.x*Math.abs(Br.x)+a.y*Math.abs(Br.y)+a.z*Math.abs(Br.z),p=e.dot(Br),m=n.dot(Br),v=r.dot(Br);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const dy=new qo,Uo=new le,Fu=new le;class Gl{constructor(e=new le,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):dy.setFromPoints(e).getCenter(r);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Fu)),this.expandByPoint(Uo.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new le,zu=new le,ol=new le,gr=new le,Bu=new le,al=new le,ju=new le;class C0{constructor(e=new le,n=new le(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){zu.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(zu);const l=e.distanceTo(n)*.5,f=-this.direction.dot(ol),d=gr.dot(this.direction),p=-gr.dot(ol),m=gr.lengthSq(),v=Math.abs(1-f*f);let y,S,M,b;if(v>0)if(y=f*p-d,S=f*d-p,b=l*v,y>=0)if(S>=-b)if(S<=b){const w=1/v;y*=w,S*=w,M=y*(y+f*S+2*d)+S*(f*y+S+2*p)+m}else S=l,y=Math.max(0,-(f*S+d)),M=-y*y+S*(S+2*p)+m;else S=-l,y=Math.max(0,-(f*S+d)),M=-y*y+S*(S+2*p)+m;else S<=-b?(y=Math.max(0,-(-f*l+d)),S=y>0?-l:Math.min(Math.max(-l,-p),l),M=-y*y+S*(S+2*p)+m):S<=b?(y=0,S=Math.min(Math.max(-l,-p),l),M=S*(S+2*p)+m):(y=Math.max(0,-(f*l+d)),S=y>0?l:Math.min(Math.max(-l,-p),l),M=-y*y+S*(S+2*p)+m);else S=f>0?-l:l,y=Math.max(0,-(f*S+d)),M=-y*y+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(zu).addScaledVector(ol,S),M}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),a=ki.dot(ki)-r*r,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,a=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,a=(e.min.x-S.x)*m),v>=0?(l=(e.min.y-S.y)*v,f=(e.max.y-S.y)*v):(l=(e.max.y-S.y)*v,f=(e.min.y-S.y)*v),r>f||l>a||((l>r||isNaN(r))&&(r=l),(f<a||isNaN(a))&&(a=f),y>=0?(d=(e.min.z-S.z)*y,p=(e.max.z-S.z)*y):(d=(e.max.z-S.z)*y,p=(e.min.z-S.z)*y),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,r,a,l){Bu.subVectors(n,e),al.subVectors(r,e),ju.crossVectors(Bu,al);let f=this.direction.dot(ju),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;gr.subVectors(this.origin,e);const p=d*this.direction.dot(al.crossVectors(gr,al));if(p<0)return null;const m=d*this.direction.dot(Bu.cross(gr));if(m<0||p+m>f)return null;const v=-d*gr.dot(ju);return v<0?null:this.at(v/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,r,a,l,f,d,p,m,v,y,S,M,b,w,_){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,f,d,p,m,v,y,S,M,b,w,_)}set(e,n,r,a,l,f,d,p,m,v,y,S,M,b,w,_){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=a,x[1]=l,x[5]=f,x[9]=d,x[13]=p,x[2]=m,x[6]=v,x[10]=y,x[14]=S,x[3]=M,x[7]=b,x[11]=w,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),l=1/Ns.setFromMatrixColumn(e,1).length(),f=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const S=f*v,M=f*y,b=d*v,w=d*y;n[0]=p*v,n[4]=-p*y,n[8]=m,n[1]=M+b*m,n[5]=S-w*m,n[9]=-d*p,n[2]=w-S*m,n[6]=b+M*m,n[10]=f*p}else if(e.order==="YXZ"){const S=p*v,M=p*y,b=m*v,w=m*y;n[0]=S+w*d,n[4]=b*d-M,n[8]=f*m,n[1]=f*y,n[5]=f*v,n[9]=-d,n[2]=M*d-b,n[6]=w+S*d,n[10]=f*p}else if(e.order==="ZXY"){const S=p*v,M=p*y,b=m*v,w=m*y;n[0]=S-w*d,n[4]=-f*y,n[8]=b+M*d,n[1]=M+b*d,n[5]=f*v,n[9]=w-S*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const S=f*v,M=f*y,b=d*v,w=d*y;n[0]=p*v,n[4]=b*m-M,n[8]=S*m+w,n[1]=p*y,n[5]=w*m+S,n[9]=M*m-b,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const S=f*p,M=f*m,b=d*p,w=d*m;n[0]=p*v,n[4]=w-S*y,n[8]=b*y+M,n[1]=y,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=M*y+b,n[10]=S-w*y}else if(e.order==="XZY"){const S=f*p,M=f*m,b=d*p,w=d*m;n[0]=p*v,n[4]=-y,n[8]=m*v,n[1]=S*y+w,n[5]=f*v,n[9]=M*y-b,n[2]=b*y-M,n[6]=d*v,n[10]=w*y+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fy,e,hy)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),xr.crossVectors(r,Fn),xr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),xr.crossVectors(r,Fn)),xr.normalize(),ll.crossVectors(Fn,xr),a[0]=xr.x,a[4]=ll.x,a[8]=Fn.x,a[1]=xr.y,a[5]=ll.y,a[9]=Fn.y,a[2]=xr.z,a[6]=ll.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],y=r[5],S=r[9],M=r[13],b=r[2],w=r[6],_=r[10],x=r[14],N=r[3],D=r[7],R=r[11],K=r[15],B=a[0],U=a[4],O=a[8],P=a[12],A=a[1],j=a[5],ue=a[9],Z=a[13],de=a[2],me=a[6],ce=a[10],ee=a[14],z=a[3],pe=a[7],se=a[11],F=a[15];return l[0]=f*B+d*A+p*de+m*z,l[4]=f*U+d*j+p*me+m*pe,l[8]=f*O+d*ue+p*ce+m*se,l[12]=f*P+d*Z+p*ee+m*F,l[1]=v*B+y*A+S*de+M*z,l[5]=v*U+y*j+S*me+M*pe,l[9]=v*O+y*ue+S*ce+M*se,l[13]=v*P+y*Z+S*ee+M*F,l[2]=b*B+w*A+_*de+x*z,l[6]=b*U+w*j+_*me+x*pe,l[10]=b*O+w*ue+_*ce+x*se,l[14]=b*P+w*Z+_*ee+x*F,l[3]=N*B+D*A+R*de+K*z,l[7]=N*U+D*j+R*me+K*pe,l[11]=N*O+D*ue+R*ce+K*se,l[15]=N*P+D*Z+R*ee+K*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],y=e[6],S=e[10],M=e[14],b=e[3],w=e[7],_=e[11],x=e[15];return b*(+l*p*y-a*m*y-l*d*S+r*m*S+a*d*M-r*p*M)+w*(+n*p*M-n*m*S+l*f*S-a*f*M+a*m*v-l*p*v)+_*(+n*m*y-n*d*M-l*f*y+r*f*M+l*d*v-r*m*v)+x*(-a*d*v-n*p*y+n*d*S+a*f*y-r*f*S+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],y=e[9],S=e[10],M=e[11],b=e[12],w=e[13],_=e[14],x=e[15],N=y*_*m-w*S*m+w*p*M-d*_*M-y*p*x+d*S*x,D=b*S*m-v*_*m-b*p*M+f*_*M+v*p*x-f*S*x,R=v*w*m-b*y*m+b*d*M-f*w*M-v*d*x+f*y*x,K=b*y*p-v*w*p-b*d*S+f*w*S+v*d*_-f*y*_,B=n*N+r*D+a*R+l*K;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/B;return e[0]=N*U,e[1]=(w*S*l-y*_*l-w*a*M+r*_*M+y*a*x-r*S*x)*U,e[2]=(d*_*l-w*p*l+w*a*m-r*_*m-d*a*x+r*p*x)*U,e[3]=(y*p*l-d*S*l-y*a*m+r*S*m+d*a*M-r*p*M)*U,e[4]=D*U,e[5]=(v*_*l-b*S*l+b*a*M-n*_*M-v*a*x+n*S*x)*U,e[6]=(b*p*l-f*_*l-b*a*m+n*_*m+f*a*x-n*p*x)*U,e[7]=(f*S*l-v*p*l+v*a*m-n*S*m-f*a*M+n*p*M)*U,e[8]=R*U,e[9]=(b*y*l-v*w*l-b*r*M+n*w*M+v*r*x-n*y*x)*U,e[10]=(f*w*l-b*d*l+b*r*m-n*w*m-f*r*x+n*d*x)*U,e[11]=(v*d*l-f*y*l-v*r*m+n*y*m+f*r*M-n*d*M)*U,e[12]=K*U,e[13]=(v*w*a-b*y*a+b*r*S-n*w*S-v*r*_+n*y*_)*U,e[14]=(b*d*a-f*w*a-b*r*p+n*w*p+f*r*_-n*d*_)*U,e[15]=(f*y*a-v*d*a+v*r*p-n*y*p-f*r*S+n*d*S)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,f=e.x,d=e.y,p=e.z,m=l*f,v=l*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,l*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,f){return this.set(1,r,l,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,f=n._y,d=n._z,p=n._w,m=l+l,v=f+f,y=d+d,S=l*m,M=l*v,b=l*y,w=f*v,_=f*y,x=d*y,N=p*m,D=p*v,R=p*y,K=r.x,B=r.y,U=r.z;return a[0]=(1-(w+x))*K,a[1]=(M+R)*K,a[2]=(b-D)*K,a[3]=0,a[4]=(M-R)*B,a[5]=(1-(S+x))*B,a[6]=(_+N)*B,a[7]=0,a[8]=(b+D)*U,a[9]=(_-N)*U,a[10]=(1-(S+w))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Ns.set(a[0],a[1],a[2]).length();const f=Ns.set(a[4],a[5],a[6]).length(),d=Ns.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const m=1/l,v=1/f,y=1/d;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=v,li.elements[5]*=v,li.elements[6]*=v,li.elements[8]*=y,li.elements[9]*=y,li.elements[10]*=y,n.setFromRotationMatrix(li),r.x=l,r.y=f,r.z=d,this}makePerspective(e,n,r,a,l,f,d=Bi){const p=this.elements,m=2*l/(n-e),v=2*l/(r-a),y=(n+e)/(n-e),S=(r+a)/(r-a);let M,b;if(d===Bi)M=-(f+l)/(f-l),b=-2*f*l/(f-l);else if(d===Il)M=-f/(f-l),b=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,l,f,d=Bi){const p=this.elements,m=1/(n-e),v=1/(r-a),y=1/(f-l),S=(n+e)*m,M=(r+a)*v;let b,w;if(d===Bi)b=(f+l)*y,w=-2*y;else if(d===Il)b=l*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ns=new le,li=new Gt,fy=new le(0,0,0),hy=new le(1,1,1),xr=new le,ll=new le,Fn=new le,am=new Gt,lm=new Xo;class Vi{constructor(e=0,n=0,r=0,a=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],y=a[2],S=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Nn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(am,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lm.setFromEuler(this),this.setFromQuaternion(lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let py=0;const cm=new le,Ps=new Xo,Ui=new Gt,cl=new le,Io=new le,my=new le,gy=new Xo,um=new le(1,0,0),dm=new le(0,1,0),fm=new le(0,0,1),hm={type:"added"},xy={type:"removed"},Ds={type:"childadded",child:null},Hu={type:"childremoved",child:null};class Ln extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new le,n=new Vi,r=new Xo,a=new le(1,1,1);function l(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ut}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(um,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(fm,e)}translateOnAxis(e,n){return cm.copy(e).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(um,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?cl.copy(e):cl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Io,cl,this.up):Ui.lookAt(cl,Io,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Ps.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xy),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,my),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const y=p[m];l(e.shapes,y)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(l(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),y=f(e.shapes),S=f(e.skeletons),M=f(e.animations),b=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Ln.DEFAULT_UP=new le(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new le,Ii=new le,Gu=new le,Oi=new le,Ls=new le,ks=new le,pm=new le,Vu=new le,Wu=new le,Xu=new le,qu=new jt,Yu=new jt,Qu=new jt;class di{constructor(e=new le,n=new le,r=new le){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ci.subVectors(e,n),a.cross(ci);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){ci.subVectors(a,n),Ii.subVectors(r,n),Gu.subVectors(e,n);const f=ci.dot(ci),d=ci.dot(Ii),p=ci.dot(Gu),m=Ii.dot(Ii),v=Ii.dot(Gu),y=f*m-d*d;if(y===0)return l.set(0,0,0),null;const S=1/y,M=(m*p-d*v)*S,b=(f*v-d*p)*S;return l.set(1-M-b,b,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,a,l,f,d,p){return this.getBarycoord(e,n,r,a,Oi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Oi.x),p.addScaledVector(f,Oi.y),p.addScaledVector(d,Oi.z),p)}static getInterpolatedAttribute(e,n,r,a,l,f){return qu.setScalar(0),Yu.setScalar(0),Qu.setScalar(0),qu.fromBufferAttribute(e,n),Yu.fromBufferAttribute(e,r),Qu.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(qu,l.x),f.addScaledVector(Yu,l.y),f.addScaledVector(Qu,l.z),f}static isFrontFacing(e,n,r,a){return ci.subVectors(r,n),Ii.subVectors(e,n),ci.cross(Ii).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ci.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return di.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let f,d;Ls.subVectors(a,r),ks.subVectors(l,r),Vu.subVectors(e,r);const p=Ls.dot(Vu),m=ks.dot(Vu);if(p<=0&&m<=0)return n.copy(r);Wu.subVectors(e,a);const v=Ls.dot(Wu),y=ks.dot(Wu);if(v>=0&&y<=v)return n.copy(a);const S=p*y-v*m;if(S<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(Ls,f);Xu.subVectors(e,l);const M=Ls.dot(Xu),b=ks.dot(Xu);if(b>=0&&M<=b)return n.copy(l);const w=M*m-p*b;if(w<=0&&m>=0&&b<=0)return d=m/(m-b),n.copy(r).addScaledVector(ks,d);const _=v*b-M*y;if(_<=0&&y-v>=0&&M-b>=0)return pm.subVectors(l,a),d=(y-v)/(y-v+(M-b)),n.copy(a).addScaledVector(pm,d);const x=1/(_+w+S);return f=w*x,d=S*x,n.copy(r).addScaledVector(Ls,f).addScaledVector(ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const N0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Ku(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Tt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=St.workingColorSpace){return this.r=e,this.g=n,this.b=r,St.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=St.workingColorSpace){if(e=ty(e,1),n=Nn(n,0,1),r=Nn(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,f=2*r-l;this.r=Ku(f,l,e+1/3),this.g=Ku(f,l,e),this.b=Ku(f,l,e-1/3)}return St.toWorkingColorSpace(this,a),this}setStyle(e,n=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=N0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return St.fromWorkingColorSpace(hn.copy(this),e),Math.round(Nn(hn.r*255,0,255))*65536+Math.round(Nn(hn.g*255,0,255))*256+Math.round(Nn(hn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.fromWorkingColorSpace(hn.copy(this),n);const r=hn.r,a=hn.g,l=hn.b,f=Math.max(r,a,l),d=Math.min(r,a,l);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const y=f-d;switch(m=v<=.5?y/(f+d):y/(2-f-d),f){case r:p=(a-l)/y+(a<l?6:0);break;case a:p=(l-r)/y+2;break;case l:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=St.workingColorSpace){return St.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Kn){St.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,a=hn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(ul);const r=Lu(vr.h,ul.h,n),a=Lu(vr.s,ul.s,n),l=Lu(vr.l,ul.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Tt;Tt.NAMES=N0;let vy=0;class Yo extends Js{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Wo(),this.name="",this.blending=Bs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fd&&(r.blendSrc=this.blendSrc),this.blendDst!==hd&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const f=[];for(const d in l){const p=l[d];delete p.metadata,f.push(p)}return f}if(n){const l=a(e.textures),f=a(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class P0 extends Yo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=f0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new le,dl=new ct;class hi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Jp,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Cn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array),a=Cn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array),a=Cn(a,this.array),l=Cn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}}class D0 extends hi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class L0 extends hi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Hi extends hi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let yy=0;const Qn=new Gt,Zu=new Ln,Us=new le,zn=new qo,Oo=new qo,tn=new le;class Xi extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(w0(e)?L0:D0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,n,r){return Qn.makeTranslation(e,n,r),this.applyMatrix4(Qn),this}scale(e,n,r){return Qn.makeScale(e,n,r),this.applyMatrix4(Qn),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Hi(r,3))}else{for(let r=0,a=n.count;r<a;r++){const l=e[r];n.setXYZ(r,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let l=0,f=n.length;l<f;l++){const d=n[l];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(tn.addVectors(zn.min,Oo.min),zn.expandByPoint(tn),tn.addVectors(zn.max,Oo.max),zn.expandByPoint(tn)):(zn.expandByPoint(Oo.min),zn.expandByPoint(Oo.max))}zn.getCenter(r);let a=0;for(let l=0,f=e.count;l<f;l++)tn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(tn));if(n)for(let l=0,f=n.length;l<f;l++){const d=n[l],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)tn.fromBufferAttribute(d,m),p&&(Us.fromBufferAttribute(e,m),tn.add(Us)),a=Math.max(a,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let O=0;O<r.count;O++)d[O]=new le,p[O]=new le;const m=new le,v=new le,y=new le,S=new ct,M=new ct,b=new ct,w=new le,_=new le;function x(O,P,A){m.fromBufferAttribute(r,O),v.fromBufferAttribute(r,P),y.fromBufferAttribute(r,A),S.fromBufferAttribute(l,O),M.fromBufferAttribute(l,P),b.fromBufferAttribute(l,A),v.sub(m),y.sub(m),M.sub(S),b.sub(S);const j=1/(M.x*b.y-b.x*M.y);isFinite(j)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(y,-M.y).multiplyScalar(j),_.copy(y).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(j),d[O].add(w),d[P].add(w),d[A].add(w),p[O].add(_),p[P].add(_),p[A].add(_))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let O=0,P=N.length;O<P;++O){const A=N[O],j=A.start,ue=A.count;for(let Z=j,de=j+ue;Z<de;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const D=new le,R=new le,K=new le,B=new le;function U(O){K.fromBufferAttribute(a,O),B.copy(K);const P=d[O];D.copy(P),D.sub(K.multiplyScalar(K.dot(P))).normalize(),R.crossVectors(B,P);const j=R.dot(p[O])<0?-1:1;f.setXYZW(O,D.x,D.y,D.z,j)}for(let O=0,P=N.length;O<P;++O){const A=N[O],j=A.start,ue=A.count;for(let Z=j,de=j+ue;Z<de;Z+=3)U(e.getX(Z+0)),U(e.getX(Z+1)),U(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const a=new le,l=new le,f=new le,d=new le,p=new le,m=new le,v=new le,y=new le;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),w=e.getX(S+1),_=e.getX(S+2);a.fromBufferAttribute(n,b),l.fromBufferAttribute(n,w),f.fromBufferAttribute(n,_),v.subVectors(f,l),y.subVectors(a,l),v.cross(y),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,_),d.add(v),p.add(v),m.add(v),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let S=0,M=n.count;S<M;S+=3)a.fromBufferAttribute(n,S+0),l.fromBufferAttribute(n,S+1),f.fromBufferAttribute(n,S+2),v.subVectors(f,l),y.subVectors(a,l),v.cross(y),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,y=d.normalized,S=new m.constructor(p.length*v);let M=0,b=0;for(let w=0,_=p.length;w<_;w++){d.isInterleavedBufferAttribute?M=p[w]*d.data.stride+d.offset:M=p[w]*v;for(let x=0;x<v;x++)S[b++]=m[M++]}return new hi(S,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let v=0,y=m.length;v<y;v++){const S=m[v],M=e(S,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let y=0,S=m.length;y<S;y++){const M=m[y];v.push(M.toJSON(e.data))}v.length>0&&(a[p]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const l=e.morphAttributes;for(const m in l){const v=[],y=l[m];for(let S=0,M=y.length;S<M;S++)v.push(y[S].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mm=new Gt,jr=new C0,fl=new Gl,gm=new le,hl=new le,pl=new le,ml=new le,Ju=new le,gl=new le,xm=new le,xl=new le;class Jn extends Ln{constructor(e=new Xi,n=new P0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){gl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const v=d[p],y=l[p];v!==0&&(Ju.fromBufferAttribute(y,e),f?gl.addScaledVector(Ju,v):gl.addScaledVector(Ju.sub(n),v))}n.add(gl)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fl.copy(r.boundingSphere),fl.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(fl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(fl,gm)===null||jr.origin.distanceToSquared(gm)>(e.far-e.near)**2))&&(mm.copy(l).invert(),jr.copy(e.ray).applyMatrix4(mm),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,f=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,y=l.attributes.normal,S=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,w=S.length;b<w;b++){const _=S[b],x=f[_.materialIndex],N=Math.max(_.start,M.start),D=Math.min(d.count,Math.min(_.start+_.count,M.start+M.count));for(let R=N,K=D;R<K;R+=3){const B=d.getX(R),U=d.getX(R+1),O=d.getX(R+2);a=vl(this,x,e,r,m,v,y,B,U,O),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const b=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let _=b,x=w;_<x;_+=3){const N=d.getX(_),D=d.getX(_+1),R=d.getX(_+2);a=vl(this,f,e,r,m,v,y,N,D,R),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let b=0,w=S.length;b<w;b++){const _=S[b],x=f[_.materialIndex],N=Math.max(_.start,M.start),D=Math.min(p.count,Math.min(_.start+_.count,M.start+M.count));for(let R=N,K=D;R<K;R+=3){const B=R,U=R+1,O=R+2;a=vl(this,x,e,r,m,v,y,B,U,O),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let _=b,x=w;_<x;_+=3){const N=_,D=_+1,R=_+2;a=vl(this,f,e,r,m,v,y,N,D,R),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function _y(s,e,n,r,a,l,f,d){let p;if(e.side===Dn?p=r.intersectTriangle(f,l,a,!0,d):p=r.intersectTriangle(a,l,f,e.side===br,d),p===null)return null;xl.copy(d),xl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(xl);return m<n.near||m>n.far?null:{distance:m,point:xl.clone(),object:s}}function vl(s,e,n,r,a,l,f,d,p,m){s.getVertexPosition(d,hl),s.getVertexPosition(p,pl),s.getVertexPosition(m,ml);const v=_y(s,e,n,r,hl,pl,ml,xm);if(v){const y=new le;di.getBarycoord(xm,hl,pl,ml,y),a&&(v.uv=di.getInterpolatedAttribute(a,d,p,m,y,new ct)),l&&(v.uv1=di.getInterpolatedAttribute(l,d,p,m,y,new ct)),f&&(v.normal=di.getInterpolatedAttribute(f,d,p,m,y,new le),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new le,materialIndex:0};di.getNormal(hl,pl,ml,S.normal),v.face=S,v.barycoord=y}return v}class Qo extends Xi{constructor(e=1,n=1,r=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:f};const d=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const p=[],m=[],v=[],y=[];let S=0,M=0;b("z","y","x",-1,-1,r,n,e,f,l,0),b("z","y","x",1,-1,r,n,-e,f,l,1),b("x","z","y",1,1,e,r,n,a,f,2),b("x","z","y",1,-1,e,r,-n,a,f,3),b("x","y","z",1,-1,e,n,r,a,l,4),b("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(p),this.setAttribute("position",new Hi(m,3)),this.setAttribute("normal",new Hi(v,3)),this.setAttribute("uv",new Hi(y,2));function b(w,_,x,N,D,R,K,B,U,O,P){const A=R/U,j=K/O,ue=R/2,Z=K/2,de=B/2,me=U+1,ce=O+1;let ee=0,z=0;const pe=new le;for(let se=0;se<ce;se++){const F=se*j-Z;for(let ie=0;ie<me;ie++){const Ie=ie*A-ue;pe[w]=Ie*N,pe[_]=F*D,pe[x]=de,m.push(pe.x,pe.y,pe.z),pe[w]=0,pe[_]=0,pe[x]=B>0?1:-1,v.push(pe.x,pe.y,pe.z),y.push(ie/U),y.push(1-se/O),ee+=1}}for(let se=0;se<O;se++)for(let F=0;F<U;F++){const ie=S+F+me*se,Ie=S+F+me*(se+1),ne=S+(F+1)+me*(se+1),ge=S+(F+1)+me*se;p.push(ie,Ie,ge),p.push(Ie,ne,ge),z+=6}d.addGroup(M,z,P),M+=z,S+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function vn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const a in r)e[a]=r[a]}return e}function Sy(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function k0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const My={clone:Ys,merge:vn};var by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Yo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=Ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=Sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Fl extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new le,vm=new ct,ym=new ct;class ui extends Fl{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Du*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Du*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,n){return this.getViewBounds(e,vm,ym),n.subVectors(ym,vm)}setViewOffset(e,n,r,a,l,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Du*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;l+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Is=-90,Os=1;class wy extends Ln{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ui(Is,Os,e,n);a.layers=this.layers,this.add(a);const l=new ui(Is,Os,e,n);l.layers=this.layers,this.add(l);const f=new ui(Is,Os,e,n);f.layers=this.layers,this.add(f);const d=new ui(Is,Os,e,n);d.layers=this.layers,this.add(d);const p=new ui(Is,Os,e,n);p.layers=this.layers,this.add(p);const m=new ui(Is,Os,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,f,d,p]=n;for(const m of n)this.remove(m);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,d,p,m,v]=this.children,y=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(y,S,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class U0 extends yn{constructor(e,n,r,a,l,f,d,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,r,a,l,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ty extends Er{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new U0(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Qo(5,5,5),l=new Wi({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:Sr});l.uniforms.tEquirect.value=n;const f=new Jn(a,l),d=n.minFilter;return n.minFilter===Kr&&(n.minFilter=Pn),new wy(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(l)}}const $u=new le,Ay=new le,Cy=new ut;class Xr{constructor(e=new le(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=$u.subVectors(r,n).cross(Ay.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta($u),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Cy.getNormalMatrix(e),a=this.coplanarPoint($u).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Gl,yl=new le;class I0{constructor(e=new Xr,n=new Xr,r=new Xr,a=new Xr,l=new Xr,f=new Xr){this.planes=[e,n,r,a,l,f]}set(e,n,r,a,l,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi){const r=this.planes,a=e.elements,l=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],y=a[6],S=a[7],M=a[8],b=a[9],w=a[10],_=a[11],x=a[12],N=a[13],D=a[14],R=a[15];if(r[0].setComponents(p-l,S-m,_-M,R-x).normalize(),r[1].setComponents(p+l,S+m,_+M,R+x).normalize(),r[2].setComponents(p+f,S+v,_+b,R+N).normalize(),r[3].setComponents(p-f,S-v,_-b,R-N).normalize(),r[4].setComponents(p-d,S-y,_-w,R-D).normalize(),n===Bi)r[5].setComponents(p+d,S+y,_+w,R+D).normalize();else if(n===Il)r[5].setComponents(d,y,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(yl.x=a.normal.x>0?e.max.x:e.min.x,yl.y=a.normal.y>0?e.max.y:e.min.y,yl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O0(){let s=null,e=!1,n=null,r=null;function a(l,f){n(l,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Ry(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,y=m.byteLength,S=s.createBuffer();s.bindBuffer(p,S),s.bufferData(p,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const v=p.array,y=p.updateRanges;if(s.bindBuffer(m,d),y.length===0)s.bufferSubData(m,0,v);else{y.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<y.length;M++){const b=y[S],w=y[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++S,y[S]=w)}y.length=S+1;for(let M=0,b=y.length;M<b;M++){const w=y[M];s.bufferSubData(m,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:l,update:f}}class Zr extends Xi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,y=e/d,S=n/p,M=[],b=[],w=[],_=[];for(let x=0;x<v;x++){const N=x*S-f;for(let D=0;D<m;D++){const R=D*y-l;b.push(R,-N,0),w.push(0,0,1),_.push(D/d),_.push(1-x/p)}}for(let x=0;x<p;x++)for(let N=0;N<d;N++){const D=N+m*x,R=N+m*(x+1),K=N+1+m*(x+1),B=N+1+m*x;M.push(D,R,B),M.push(R,K,B)}this.setIndex(M),this.setAttribute("position",new Hi(b,3)),this.setAttribute("normal",new Hi(w,3)),this.setAttribute("uv",new Hi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Py=`#ifdef USE_ALPHAHASH
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
#endif`,Dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iy=`#ifdef USE_AOMAP
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
#endif`,Oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fy=`#ifdef USE_BATCHING
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
#endif`,zy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,By=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gy=`#ifdef USE_IRIDESCENCE
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
#endif`,Vy=`#ifdef USE_BUMPMAP
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
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$y=`#define PI 3.141592653589793
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
} // validated`,e2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,t2=`vec3 transformedNormal = objectNormal;
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
#endif`,n2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o2="gl_FragColor = linearToOutputTexel( gl_FragColor );",a2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l2=`#ifdef USE_ENVMAP
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
#endif`,c2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u2=`#ifdef USE_ENVMAP
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
#endif`,d2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f2=`#ifdef USE_ENVMAP
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
#endif`,h2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x2=`#ifdef USE_GRADIENTMAP
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
}`,v2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S2=`uniform bool receiveShadow;
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
#endif`,M2=`#ifdef USE_ENVMAP
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
#endif`,b2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A2=`PhysicalMaterial material;
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
#endif`,C2=`struct PhysicalMaterial {
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
}`,R2=`
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
#endif`,N2=`#if defined( RE_IndirectDiffuse )
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
#endif`,P2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z2=`#if defined( USE_POINTS_UV )
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
#endif`,B2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W2=`#ifdef USE_MORPHTARGETS
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
#endif`,X2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J2=`#ifdef USE_NORMALMAP
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
#endif`,$2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p_=`float getShadowMask() {
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
}`,m_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,x_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,y_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,__=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,E_=`#ifdef USE_TRANSMISSION
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N_=`uniform sampler2D t2D;
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`#include <common>
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
}`,I_=`#if DEPTH_PACKING == 3200
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
}`,O_=`#define DISTANCE
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
}`,F_=`#define DISTANCE
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
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`uniform float scale;
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
}`,H_=`uniform vec3 diffuse;
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
}`,G_=`#include <common>
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
}`,V_=`uniform vec3 diffuse;
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
}`,W_=`#define LAMBERT
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define MATCAP
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
}`,Y_=`#define MATCAP
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
}`,Q_=`#define NORMAL
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
}`,K_=`#define NORMAL
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
}`,Z_=`#define PHONG
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
}`,J_=`#define PHONG
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
}`,$_=`#define STANDARD
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
}`,eS=`#define STANDARD
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
}`,tS=`#define TOON
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
}`,nS=`#define TOON
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
}`,iS=`uniform float size;
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
}`,rS=`uniform vec3 diffuse;
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
}`,sS=`#include <common>
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
}`,oS=`uniform vec3 color;
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
}`,aS=`uniform float rotation;
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
}`,lS=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Ny,alphahash_pars_fragment:Py,alphamap_fragment:Dy,alphamap_pars_fragment:Ly,alphatest_fragment:ky,alphatest_pars_fragment:Uy,aomap_fragment:Iy,aomap_pars_fragment:Oy,batching_pars_vertex:Fy,batching_vertex:zy,begin_vertex:By,beginnormal_vertex:jy,bsdfs:Hy,iridescence_fragment:Gy,bumpmap_pars_fragment:Vy,clipping_planes_fragment:Wy,clipping_planes_pars_fragment:Xy,clipping_planes_pars_vertex:qy,clipping_planes_vertex:Yy,color_fragment:Qy,color_pars_fragment:Ky,color_pars_vertex:Zy,color_vertex:Jy,common:$y,cube_uv_reflection_fragment:e2,defaultnormal_vertex:t2,displacementmap_pars_vertex:n2,displacementmap_vertex:i2,emissivemap_fragment:r2,emissivemap_pars_fragment:s2,colorspace_fragment:o2,colorspace_pars_fragment:a2,envmap_fragment:l2,envmap_common_pars_fragment:c2,envmap_pars_fragment:u2,envmap_pars_vertex:d2,envmap_physical_pars_fragment:M2,envmap_vertex:f2,fog_vertex:h2,fog_pars_vertex:p2,fog_fragment:m2,fog_pars_fragment:g2,gradientmap_pars_fragment:x2,lightmap_pars_fragment:v2,lights_lambert_fragment:y2,lights_lambert_pars_fragment:_2,lights_pars_begin:S2,lights_toon_fragment:b2,lights_toon_pars_fragment:E2,lights_phong_fragment:w2,lights_phong_pars_fragment:T2,lights_physical_fragment:A2,lights_physical_pars_fragment:C2,lights_fragment_begin:R2,lights_fragment_maps:N2,lights_fragment_end:P2,logdepthbuf_fragment:D2,logdepthbuf_pars_fragment:L2,logdepthbuf_pars_vertex:k2,logdepthbuf_vertex:U2,map_fragment:I2,map_pars_fragment:O2,map_particle_fragment:F2,map_particle_pars_fragment:z2,metalnessmap_fragment:B2,metalnessmap_pars_fragment:j2,morphinstance_vertex:H2,morphcolor_vertex:G2,morphnormal_vertex:V2,morphtarget_pars_vertex:W2,morphtarget_vertex:X2,normal_fragment_begin:q2,normal_fragment_maps:Y2,normal_pars_fragment:Q2,normal_pars_vertex:K2,normal_vertex:Z2,normalmap_pars_fragment:J2,clearcoat_normal_fragment_begin:$2,clearcoat_normal_fragment_maps:e_,clearcoat_pars_fragment:t_,iridescence_pars_fragment:n_,opaque_fragment:i_,packing:r_,premultiplied_alpha_fragment:s_,project_vertex:o_,dithering_fragment:a_,dithering_pars_fragment:l_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:u_,shadowmap_pars_fragment:d_,shadowmap_pars_vertex:f_,shadowmap_vertex:h_,shadowmask_pars_fragment:p_,skinbase_vertex:m_,skinning_pars_vertex:g_,skinning_vertex:x_,skinnormal_vertex:v_,specularmap_fragment:y_,specularmap_pars_fragment:__,tonemapping_fragment:S_,tonemapping_pars_fragment:M_,transmission_fragment:b_,transmission_pars_fragment:E_,uv_pars_fragment:w_,uv_pars_vertex:T_,uv_vertex:A_,worldpos_vertex:C_,background_vert:R_,background_frag:N_,backgroundCube_vert:P_,backgroundCube_frag:D_,cube_vert:L_,cube_frag:k_,depth_vert:U_,depth_frag:I_,distanceRGBA_vert:O_,distanceRGBA_frag:F_,equirect_vert:z_,equirect_frag:B_,linedashed_vert:j_,linedashed_frag:H_,meshbasic_vert:G_,meshbasic_frag:V_,meshlambert_vert:W_,meshlambert_frag:X_,meshmatcap_vert:q_,meshmatcap_frag:Y_,meshnormal_vert:Q_,meshnormal_frag:K_,meshphong_vert:Z_,meshphong_frag:J_,meshphysical_vert:$_,meshphysical_frag:eS,meshtoon_vert:tS,meshtoon_frag:nS,points_vert:iS,points_frag:rS,shadow_vert:sS,shadow_frag:oS,sprite_vert:aS,sprite_frag:lS},De={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},_i={basic:{uniforms:vn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:vn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:vn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:vn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:vn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:vn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:vn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:vn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:vn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:vn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:vn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:vn([De.common,De.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:vn([De.lights,De.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};_i.physical={uniforms:vn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const _l={r:0,b:0,g:0},Gr=new Vi,cS=new Gt;function uS(s,e,n,r,a,l,f){const d=new Tt(0);let p=l===!0?0:1,m,v,y=null,S=0,M=null;function b(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?n:e).get(D)),D}function w(N){let D=!1;const R=b(N);R===null?x(d,p):R&&R.isColor&&(x(R,1),D=!0);const K=s.xr.getEnvironmentBlendMode();K==="additive"?r.buffers.color.setClear(0,0,0,1,f):K==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(N,D){const R=b(D);R&&(R.isCubeTexture||R.mapping===jl)?(v===void 0&&(v=new Jn(new Qo(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Ys(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(K,B,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Gr.copy(D.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(cS.makeRotationFromEuler(Gr)),v.material.toneMapped=St.getTransfer(R.colorSpace)!==Pt,(y!==R||S!==R.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,y=R,S=R.version,M=s.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Jn(new Zr(2,2),new Wi({name:"BackgroundMaterial",uniforms:Ys(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=St.getTransfer(R.colorSpace)!==Pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(y!==R||S!==R.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,y=R,S=R.version,M=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function x(N,D){N.getRGB(_l,k0(s)),r.buffers.color.setClear(_l.r,_l.g,_l.b,D,f)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),p=D,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,x(d,p)},render:w,addToRenderList:_}}function dS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=S(null);let l=a,f=!1;function d(A,j,ue,Z,de){let me=!1;const ce=y(Z,ue,j);l!==ce&&(l=ce,m(l.object)),me=M(A,Z,ue,de),me&&b(A,Z,ue,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(me||f)&&(f=!1,R(A,j,ue,Z),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function v(A){return s.deleteVertexArray(A)}function y(A,j,ue){const Z=ue.wireframe===!0;let de=r[A.id];de===void 0&&(de={},r[A.id]=de);let me=de[j.id];me===void 0&&(me={},de[j.id]=me);let ce=me[Z];return ce===void 0&&(ce=S(p()),me[Z]=ce),ce}function S(A){const j=[],ue=[],Z=[];for(let de=0;de<n;de++)j[de]=0,ue[de]=0,Z[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ue,attributeDivisors:Z,object:A,attributes:{},index:null}}function M(A,j,ue,Z){const de=l.attributes,me=j.attributes;let ce=0;const ee=ue.getAttributes();for(const z in ee)if(ee[z].location>=0){const se=de[z];let F=me[z];if(F===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(F=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(F=A.instanceColor)),se===void 0||se.attribute!==F||F&&se.data!==F.data)return!0;ce++}return l.attributesNum!==ce||l.index!==Z}function b(A,j,ue,Z){const de={},me=j.attributes;let ce=0;const ee=ue.getAttributes();for(const z in ee)if(ee[z].location>=0){let se=me[z];se===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const F={};F.attribute=se,se&&se.data&&(F.data=se.data),de[z]=F,ce++}l.attributes=de,l.attributesNum=ce,l.index=Z}function w(){const A=l.newAttributes;for(let j=0,ue=A.length;j<ue;j++)A[j]=0}function _(A){x(A,0)}function x(A,j){const ue=l.newAttributes,Z=l.enabledAttributes,de=l.attributeDivisors;ue[A]=1,Z[A]===0&&(s.enableVertexAttribArray(A),Z[A]=1),de[A]!==j&&(s.vertexAttribDivisor(A,j),de[A]=j)}function N(){const A=l.newAttributes,j=l.enabledAttributes;for(let ue=0,Z=j.length;ue<Z;ue++)j[ue]!==A[ue]&&(s.disableVertexAttribArray(ue),j[ue]=0)}function D(A,j,ue,Z,de,me,ce){ce===!0?s.vertexAttribIPointer(A,j,ue,de,me):s.vertexAttribPointer(A,j,ue,Z,de,me)}function R(A,j,ue,Z){w();const de=Z.attributes,me=ue.getAttributes(),ce=j.defaultAttributeValues;for(const ee in me){const z=me[ee];if(z.location>=0){let pe=de[ee];if(pe===void 0&&(ee==="instanceMatrix"&&A.instanceMatrix&&(pe=A.instanceMatrix),ee==="instanceColor"&&A.instanceColor&&(pe=A.instanceColor)),pe!==void 0){const se=pe.normalized,F=pe.itemSize,ie=e.get(pe);if(ie===void 0)continue;const Ie=ie.buffer,ne=ie.type,ge=ie.bytesPerElement,Ee=ne===s.INT||ne===s.UNSIGNED_INT||pe.gpuType===sf;if(pe.isInterleavedBufferAttribute){const _e=pe.data,Re=_e.stride,Oe=pe.offset;if(_e.isInstancedInterleavedBuffer){for(let Ke=0;Ke<z.locationSize;Ke++)x(z.location+Ke,_e.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ke=0;Ke<z.locationSize;Ke++)_(z.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Ke=0;Ke<z.locationSize;Ke++)D(z.location+Ke,F/z.locationSize,ne,se,Re*ge,(Oe+F/z.locationSize*Ke)*ge,Ee)}else{if(pe.isInstancedBufferAttribute){for(let _e=0;_e<z.locationSize;_e++)x(z.location+_e,pe.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let _e=0;_e<z.locationSize;_e++)_(z.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let _e=0;_e<z.locationSize;_e++)D(z.location+_e,F/z.locationSize,ne,se,F*ge,F/z.locationSize*_e*ge,Ee)}}else if(ce!==void 0){const se=ce[ee];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(z.location,se);break;case 3:s.vertexAttrib3fv(z.location,se);break;case 4:s.vertexAttrib4fv(z.location,se);break;default:s.vertexAttrib1fv(z.location,se)}}}}N()}function K(){O();for(const A in r){const j=r[A];for(const ue in j){const Z=j[ue];for(const de in Z)v(Z[de].object),delete Z[de];delete j[ue]}delete r[A]}}function B(A){if(r[A.id]===void 0)return;const j=r[A.id];for(const ue in j){const Z=j[ue];for(const de in Z)v(Z[de].object),delete Z[de];delete j[ue]}delete r[A.id]}function U(A){for(const j in r){const ue=r[j];if(ue[A.id]===void 0)continue;const Z=ue[A.id];for(const de in Z)v(Z[de].object),delete Z[de];delete ue[A.id]}}function O(){P(),f=!0,l!==a&&(l=a,m(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:O,resetDefaultState:P,dispose:K,releaseStatesOfGeometry:B,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:_,disableUnusedAttributes:N}}function fS(s,e,n){let r;function a(m){r=m}function l(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,y){y!==0&&(s.drawArraysInstanced(r,m,v,y),n.update(v,r,y))}function d(m,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,y);let M=0;for(let b=0;b<y;b++)M+=v[b];n.update(M,r,1)}function p(m,v,y,S){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<m.length;b++)f(m[b],v[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,S,0,y);let b=0;for(let w=0;w<y;w++)b+=v[w]*S[w];n.update(b,r,1)}}this.setMode=a,this.render=l,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function hS(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(U){return!(U!==Zn&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const O=U===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Gi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Si&&!O)}function p(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=n.logarithmicDepthBuffer===!0,S=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),K=b>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:K,maxSamples:B}}function pS(s){const e=this;let n=null,r=0,a=!1,l=!1;const f=new Xr,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const M=y.length!==0||S||r!==0||a;return a=S,r=y.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,S){n=v(y,S,0)},this.setState=function(y,S,M){const b=y.clippingPlanes,w=y.clipIntersection,_=y.clipShadows,x=s.get(y);if(!a||b===null||b.length===0||l&&!_)l?v(null):m();else{const N=l?0:r,D=N*4;let R=x.clippingState||null;p.value=R,R=v(b,S,D,M);for(let K=0;K!==D;++K)R[K]=n[K];x.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,S,M,b){const w=y!==null?y.length:0;let _=null;if(w!==0){if(_=p.value,b!==!0||_===null){const x=M+w*4,N=S.matrixWorldInverse;d.getNormalMatrix(N),(_===null||_.length<x)&&(_=new Float32Array(x));for(let D=0,R=M;D!==w;++D,R+=4)f.copy(y[D]).applyMatrix4(N,d),f.normal.toArray(_,R),_[R+3]=f.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function mS(s){let e=new WeakMap;function n(f,d){return d===Sd?f.mapping=Vs:d===Md&&(f.mapping=Ws),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Sd||d===Md)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Ty(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class gS extends Fl{constructor(e=-1,n=1,r=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,f=l+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,_m=[.125,.215,.35,.446,.526,.582],Qr=20,ed=new gS,Sm=new Tt;let td=null,nd=0,id=0,rd=!1;const qr=(1+Math.sqrt(5))/2,Fs=1/qr,Mm=[new le(-qr,Fs,0),new le(qr,Fs,0),new le(-Fs,0,qr),new le(Fs,0,qr),new le(0,qr,-Fs),new le(0,qr,Fs),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Ks,format:Zn,colorSpace:Zs,depthBuffer:!1},a=Em(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xS(l)),this._blurMaterial=vS(l,e,n)}return a}_compileMaterial(e){const n=new Jn(this._lodPlanes[0],e);this._renderer.compile(n,ed)}_sceneToCubeUV(e,n,r,a){const d=new ui(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(Sm),v.toneMapping=Mr,v.autoClear=!1;const M=new P0({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),b=new Jn(new Qo,M);let w=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,w=!0):(M.color.copy(Sm),w=!0);for(let x=0;x<6;x++){const N=x%3;N===0?(d.up.set(0,p[x],0),d.lookAt(m[x],0,0)):N===1?(d.up.set(0,0,p[x]),d.lookAt(0,m[x],0)):(d.up.set(0,p[x],0),d.lookAt(0,0,m[x]));const D=this._cubeSize;Sl(a,N*D,x>2?D:0,D,D),v.setRenderTarget(a),w&&v.render(b,d),v.render(e,d)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=S,v.autoClear=y,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Vs||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wm());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new Jn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Sl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,ed)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const f=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Mm[(a-l-1)%Mm.length];this._blur(e,l-1,l,f,d)}n.autoClear=r}_blur(e,n,r,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",l),this._halfBlur(f,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new Jn(this._lodPlanes[a],m),S=m.uniforms,M=this._sizeLods[r]-1,b=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Qr-1),w=l/b,_=isFinite(l)?1+Math.floor(v*w):Qr;_>Qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Qr}`);const x=[];let N=0;for(let U=0;U<Qr;++U){const O=U/w,P=Math.exp(-O*O/2);x.push(P),U===0?N+=P:U<_&&(N+=2*P)}for(let U=0;U<x.length;U++)x[U]=x[U]/N;S.envMap.value=e.texture,S.samples.value=_,S.weights.value=x,S.latitudinal.value=f==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:D}=this;S.dTheta.value=b,S.mipInt.value=D-r;const R=this._sizeLods[a],K=3*R*(a>D-zs?a-D+zs:0),B=4*(this._cubeSize-R);Sl(n,K,B,3*R,2*R),p.setRenderTarget(n),p.render(y,ed)}}function xS(s){const e=[],n=[],r=[];let a=s;const l=s-zs+1+_m.length;for(let f=0;f<l;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-zs?p=_m[f-s+zs-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,y=1+m,S=[v,v,y,v,y,y,v,v,y,y,v,y],M=6,b=6,w=3,_=2,x=1,N=new Float32Array(w*b*M),D=new Float32Array(_*b*M),R=new Float32Array(x*b*M);for(let B=0;B<M;B++){const U=B%3*2/3-1,O=B>2?0:-1,P=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];N.set(P,w*b*B),D.set(S,_*b*B);const A=[B,B,B,B,B,B];R.set(A,x*b*B)}const K=new Xi;K.setAttribute("position",new hi(N,w)),K.setAttribute("uv",new hi(D,_)),K.setAttribute("faceIndex",new hi(R,x)),e.push(K),a>zs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Em(s,e,n){const r=new Er(s,e,n);return r.texture.mapping=jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function vS(s,e,n){const r=new Float32Array(Qr),a=new le(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:df(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function wm(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Tm(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function df(){return`

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
	`}function yS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Sd||p===Md,v=p===Vs||p===Ws;if(m||v){let y=e.get(d);const S=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return n===null&&(n=new bm(s)),y=m?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const M=d.image;return m&&M&&M.height>0||v&&M&&a(M)?(n===null&&(n=new bm(s)),y=m?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",l),y.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function _S(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&zo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function SS(s,e,n,r){const a={},l=new WeakMap;function f(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const w=S.morphAttributes[b];for(let _=0,x=w.length;_<x;_++)e.remove(w[_])}S.removeEventListener("dispose",f),delete a[S.id];const M=l.get(S);M&&(e.remove(M),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function d(y,S){return a[S.id]===!0||(S.addEventListener("dispose",f),a[S.id]=!0,n.memory.geometries++),S}function p(y){const S=y.attributes;for(const b in S)e.update(S[b],s.ARRAY_BUFFER);const M=y.morphAttributes;for(const b in M){const w=M[b];for(let _=0,x=w.length;_<x;_++)e.update(w[_],s.ARRAY_BUFFER)}}function m(y){const S=[],M=y.index,b=y.attributes.position;let w=0;if(M!==null){const N=M.array;w=M.version;for(let D=0,R=N.length;D<R;D+=3){const K=N[D+0],B=N[D+1],U=N[D+2];S.push(K,B,B,U,U,K)}}else if(b!==void 0){const N=b.array;w=b.version;for(let D=0,R=N.length/3-1;D<R;D+=3){const K=D+0,B=D+1,U=D+2;S.push(K,B,B,U,U,K)}}else return;const _=new(w0(S)?L0:D0)(S,1);_.version=w;const x=l.get(y);x&&e.remove(x),l.set(y,_)}function v(y){const S=l.get(y);if(S){const M=y.index;M!==null&&S.version<M.version&&m(y)}else m(y);return l.get(y)}return{get:d,update:p,getWireframeAttribute:v}}function MS(s,e,n){let r;function a(S){r=S}let l,f;function d(S){l=S.type,f=S.bytesPerElement}function p(S,M){s.drawElements(r,M,l,S*f),n.update(M,r,1)}function m(S,M,b){b!==0&&(s.drawElementsInstanced(r,M,l,S*f,b),n.update(M,r,b))}function v(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,S,0,b);let _=0;for(let x=0;x<b;x++)_+=M[x];n.update(_,r,1)}function y(S,M,b,w){if(b===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<S.length;x++)m(S[x]/f,M[x],w[x]);else{_.multiDrawElementsInstancedWEBGL(r,M,0,l,S,0,w,0,b);let x=0;for(let N=0;N<b;N++)x+=M[N]*w[N];n.update(x,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function bS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function ES(s,e,n){const r=new WeakMap,a=new jt;function l(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=v!==void 0?v.length:0;let S=r.get(d);if(S===void 0||S.count!==y){let A=function(){O.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let R=0;b===!0&&(R=1),w===!0&&(R=2),_===!0&&(R=3);let K=d.attributes.position.count*R,B=1;K>e.maxTextureSize&&(B=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const U=new Float32Array(K*B*4*y),O=new A0(U,K,B,y);O.type=Si,O.needsUpdate=!0;const P=R*4;for(let j=0;j<y;j++){const ue=x[j],Z=N[j],de=D[j],me=K*B*4*j;for(let ce=0;ce<ue.count;ce++){const ee=ce*P;b===!0&&(a.fromBufferAttribute(ue,ce),U[me+ee+0]=a.x,U[me+ee+1]=a.y,U[me+ee+2]=a.z,U[me+ee+3]=0),w===!0&&(a.fromBufferAttribute(Z,ce),U[me+ee+4]=a.x,U[me+ee+5]=a.y,U[me+ee+6]=a.z,U[me+ee+7]=0),_===!0&&(a.fromBufferAttribute(de,ce),U[me+ee+8]=a.x,U[me+ee+9]=a.y,U[me+ee+10]=a.z,U[me+ee+11]=de.itemSize===4?a.w:1)}}S={count:y,texture:O,size:new ct(K,B)},r.set(d,S),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let b=0;for(let _=0;_<m.length;_++)b+=m[_];const w=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",S.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function wS(s,e,n,r){let a=new WeakMap;function l(p){const m=r.render.frame,v=p.geometry,y=e.get(p,v);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;a.get(S)!==m&&(S.update(),a.set(S,m))}return y}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:f}}class F0 extends yn{constructor(e,n,r,a,l,f,d,p,m,v=js){if(v!==js&&v!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===js&&(r=$r),r===void 0&&v===qs&&(r=Xs),super(null,a,l,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Bn,this.minFilter=p!==void 0?p:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const z0=new yn,Am=new F0(1,1),B0=new A0,j0=new uy,H0=new U0,Cm=[],Rm=[],Nm=new Float32Array(16),Pm=new Float32Array(9),Dm=new Float32Array(4);function $s(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Cm[a];if(l===void 0&&(l=new Float32Array(a),Cm[a]=l),e!==0){r.toArray(l,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(l,d)}return l}function Kt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Vl(s,e){let n=Rm[e];n===void 0&&(n=new Int32Array(e),Rm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function TS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function AS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function RS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function NS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;Dm.set(r),s.uniformMatrix2fv(this.addr,!1,Dm),Zt(n,r)}}function PS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;Pm.set(r),s.uniformMatrix3fv(this.addr,!1,Pm),Zt(n,r)}}function DS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;Nm.set(r),s.uniformMatrix4fv(this.addr,!1,Nm),Zt(n,r)}}function LS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function kS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function US(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function IS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function OS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function FS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function zS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function BS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function jS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Am.compareFunction=E0,l=Am):l=z0,n.setTexture2D(e||l,a)}function HS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||j0,a)}function GS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||H0,a)}function VS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||B0,a)}function WS(s){switch(s){case 5126:return TS;case 35664:return AS;case 35665:return CS;case 35666:return RS;case 35674:return NS;case 35675:return PS;case 35676:return DS;case 5124:case 35670:return LS;case 35667:case 35671:return kS;case 35668:case 35672:return US;case 35669:case 35673:return IS;case 5125:return OS;case 36294:return FS;case 36295:return zS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return jS;case 35679:case 36299:case 36307:return HS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return VS}}function XS(s,e){s.uniform1fv(this.addr,e)}function qS(s,e){const n=$s(e,this.size,2);s.uniform2fv(this.addr,n)}function YS(s,e){const n=$s(e,this.size,3);s.uniform3fv(this.addr,n)}function QS(s,e){const n=$s(e,this.size,4);s.uniform4fv(this.addr,n)}function KS(s,e){const n=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function ZS(s,e){const n=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function JS(s,e){const n=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function $S(s,e){s.uniform1iv(this.addr,e)}function eM(s,e){s.uniform2iv(this.addr,e)}function tM(s,e){s.uniform3iv(this.addr,e)}function nM(s,e){s.uniform4iv(this.addr,e)}function iM(s,e){s.uniform1uiv(this.addr,e)}function rM(s,e){s.uniform2uiv(this.addr,e)}function sM(s,e){s.uniform3uiv(this.addr,e)}function oM(s,e){s.uniform4uiv(this.addr,e)}function aM(s,e,n){const r=this.cache,a=e.length,l=Vl(n,a);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||z0,l[f])}function lM(s,e,n){const r=this.cache,a=e.length,l=Vl(n,a);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||j0,l[f])}function cM(s,e,n){const r=this.cache,a=e.length,l=Vl(n,a);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||H0,l[f])}function uM(s,e,n){const r=this.cache,a=e.length,l=Vl(n,a);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||B0,l[f])}function dM(s){switch(s){case 5126:return XS;case 35664:return qS;case 35665:return YS;case 35666:return QS;case 35674:return KS;case 35675:return ZS;case 35676:return JS;case 5124:case 35670:return $S;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return rM;case 36295:return sM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return uM}}class fM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=WS(n.type)}}class hM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dM(n.type)}}class pM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const d=a[l];d.setValue(e,n[d.id],r)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function Lm(s,e){s.seq.push(e),s.map[e.id]=e}function mM(s,e,n){const r=s.name,a=r.length;for(sd.lastIndex=0;;){const l=sd.exec(r),f=sd.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){Lm(n,m===void 0?new fM(d,s,e):new hM(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new pM(d),Lm(n,y)),n=y}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),f=e.getUniformLocation(n,l.name);mM(l,f,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,f=n.length;l!==f;++l){const d=n[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function km(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const gM=37297;let xM=0;function vM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let f=a;f<l;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Um=new ut;function yM(s){St._getMatrix(Um,St.workingColorSpace,s);const e=`mat3( ${Um.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(s)){case Hl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Im(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+vM(s.getShaderSource(e),f)}else return a}function _M(s,e){const n=yM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function SM(s,e){let n;switch(e){case I1:n="Linear";break;case O1:n="Reinhard";break;case F1:n="Cineon";break;case z1:n="ACESFilmic";break;case j1:n="AgX";break;case H1:n="Neutral";break;case B1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ml=new le;function MM(){St.getLuminanceCoefficients(Ml);const s=Ml.x.toFixed(4),e=Ml.y.toFixed(4),n=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function EM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function wM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),f=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Bo(s){return s!==""}function Om(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(s){return s.replace(TM,CM)}const AM=new Map;function CM(s,e){let n=ft[e];if(n===void 0){const r=AM.get(e);if(r!==void 0)n=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Jd(n)}const RM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(s){return s.replace(RM,NM)}function NM(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Bm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===d0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===m1?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function DM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Ws:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function kM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case f0:e="ENVMAP_BLENDING_MULTIPLY";break;case k1:e="ENVMAP_BLENDING_MIX";break;case U1:e="ENVMAP_BLENDING_ADD";break}return e}function UM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function IM(s,e,n,r){const a=s.getContext(),l=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=PM(n),m=DM(n),v=LM(n),y=kM(n),S=UM(n),M=bM(n),b=EM(l),w=a.createProgram();let _,x,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Bo).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(_=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?ft.tonemapping_pars_fragment:"",n.toneMapping!==Mr?SM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,_M("linearToOutputTexel",n.outputColorSpace),MM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bo).join(`
`)),f=Jd(f),f=Om(f,n),f=Fm(f,n),d=Jd(d),d=Om(d,n),d=Fm(d,n),f=zm(f),d=zm(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=N+_+f,R=N+x+d,K=km(a,a.VERTEX_SHADER,D),B=km(a,a.FRAGMENT_SHADER,R);a.attachShader(w,K),a.attachShader(w,B),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function U(j){if(s.debug.checkShaderErrors){const ue=a.getProgramInfoLog(w).trim(),Z=a.getShaderInfoLog(K).trim(),de=a.getShaderInfoLog(B).trim();let me=!0,ce=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(me=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,K,B);else{const ee=Im(a,K,"vertex"),z=Im(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ue+`
`+ee+`
`+z)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(Z===""||de==="")&&(ce=!1);ce&&(j.diagnostics={runnable:me,programLog:ue,vertexShader:{log:Z,prefix:_},fragmentShader:{log:de,prefix:x}})}a.deleteShader(K),a.deleteShader(B),O=new Ul(a,w),P=wM(a,w)}let O;this.getUniforms=function(){return O===void 0&&U(this),O};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(w,gM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=K,this.fragmentShader=B,this}let OM=0;class FM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new zM(e),n.set(e,r)),r}}class zM{constructor(e){this.id=OM++,this.code=e,this.usedTimes=0}}function BM(s,e,n,r,a,l,f){const d=new R0,p=new FM,m=new Set,v=[],y=a.logarithmicDepthBuffer,S=a.vertexTextures;let M=a.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return m.add(P),P===0?"uv":`uv${P}`}function _(P,A,j,ue,Z){const de=ue.fog,me=Z.geometry,ce=P.isMeshStandardMaterial?ue.environment:null,ee=(P.isMeshStandardMaterial?n:e).get(P.envMap||ce),z=ee&&ee.mapping===jl?ee.image.height:null,pe=b[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const se=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,F=se!==void 0?se.length:0;let ie=0;me.morphAttributes.position!==void 0&&(ie=1),me.morphAttributes.normal!==void 0&&(ie=2),me.morphAttributes.color!==void 0&&(ie=3);let Ie,ne,ge,Ee;if(pe){const yt=_i[pe];Ie=yt.vertexShader,ne=yt.fragmentShader}else Ie=P.vertexShader,ne=P.fragmentShader,p.update(P),ge=p.getVertexShaderID(P),Ee=p.getFragmentShaderID(P);const _e=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Oe=Z.isInstancedMesh===!0,Ke=Z.isBatchedMesh===!0,At=!!P.map,pt=!!P.matcap,Nt=!!ee,q=!!P.aoMap,nn=!!P.lightMap,ht=!!P.bumpMap,dt=!!P.normalMap,Ye=!!P.displacementMap,Mt=!!P.emissiveMap,Qe=!!P.metalnessMap,k=!!P.roughnessMap,T=P.anisotropy>0,W=P.clearcoat>0,L=P.dispersion>0,Q=P.iridescence>0,J=P.sheen>0,Te=P.transmission>0,Me=T&&!!P.anisotropyMap,Ne=W&&!!P.clearcoatMap,at=W&&!!P.clearcoatNormalMap,Se=W&&!!P.clearcoatRoughnessMap,Fe=Q&&!!P.iridescenceMap,$e=Q&&!!P.iridescenceThicknessMap,et=J&&!!P.sheenColorMap,Be=J&&!!P.sheenRoughnessMap,mt=!!P.specularMap,st=!!P.specularColorMap,Ct=!!P.specularIntensityMap,V=Te&&!!P.transmissionMap,Pe=Te&&!!P.thicknessMap,he=!!P.gradientMap,xe=!!P.alphaMap,ke=P.alphaTest>0,Le=!!P.alphaHash,ot=!!P.extensions;let kt=Mr;P.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(kt=s.toneMapping);const Xt={shaderID:pe,shaderType:P.type,shaderName:P.name,vertexShader:Ie,fragmentShader:ne,defines:P.defines,customVertexShaderID:ge,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Ke,batchingColor:Ke&&Z._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&Z.instanceColor!==null,instancingMorph:Oe&&Z.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Zs,alphaToCoverage:!!P.alphaToCoverage,map:At,matcap:pt,envMap:Nt,envMapMode:Nt&&ee.mapping,envMapCubeUVHeight:z,aoMap:q,lightMap:nn,bumpMap:ht,normalMap:dt,displacementMap:S&&Ye,emissiveMap:Mt,normalMapObjectSpace:dt&&P.normalMapType===q1,normalMapTangentSpace:dt&&P.normalMapType===X1,metalnessMap:Qe,roughnessMap:k,anisotropy:T,anisotropyMap:Me,clearcoat:W,clearcoatMap:Ne,clearcoatNormalMap:at,clearcoatRoughnessMap:Se,dispersion:L,iridescence:Q,iridescenceMap:Fe,iridescenceThicknessMap:$e,sheen:J,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:mt,specularColorMap:st,specularIntensityMap:Ct,transmission:Te,transmissionMap:V,thicknessMap:Pe,gradientMap:he,opaque:P.transparent===!1&&P.blending===Bs&&P.alphaToCoverage===!1,alphaMap:xe,alphaTest:ke,alphaHash:Le,combine:P.combine,mapUv:At&&w(P.map.channel),aoMapUv:q&&w(P.aoMap.channel),lightMapUv:nn&&w(P.lightMap.channel),bumpMapUv:ht&&w(P.bumpMap.channel),normalMapUv:dt&&w(P.normalMap.channel),displacementMapUv:Ye&&w(P.displacementMap.channel),emissiveMapUv:Mt&&w(P.emissiveMap.channel),metalnessMapUv:Qe&&w(P.metalnessMap.channel),roughnessMapUv:k&&w(P.roughnessMap.channel),anisotropyMapUv:Me&&w(P.anisotropyMap.channel),clearcoatMapUv:Ne&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:at&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(P.sheenRoughnessMap.channel),specularMapUv:mt&&w(P.specularMap.channel),specularColorMapUv:st&&w(P.specularColorMap.channel),specularIntensityMapUv:Ct&&w(P.specularIntensityMap.channel),transmissionMapUv:V&&w(P.transmissionMap.channel),thicknessMapUv:Pe&&w(P.thicknessMap.channel),alphaMapUv:xe&&w(P.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(dt||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!me.attributes.uv&&(At||xe),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Re,skinning:Z.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:At&&P.map.isVideoTexture===!0&&St.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:Mt&&P.emissiveMap.isVideoTexture===!0&&St.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===zi,flipSided:P.side===Dn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function x(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const j in P.defines)A.push(j),A.push(P.defines[j]);return P.isRawShaderMaterial===!1&&(N(A,P),D(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function N(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function D(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const A=b[P.type];let j;if(A){const ue=_i[A];j=My.clone(ue.uniforms)}else j=P.uniforms;return j}function K(P,A){let j;for(let ue=0,Z=v.length;ue<Z;ue++){const de=v[ue];if(de.cacheKey===A){j=de,++j.usedTimes;break}}return j===void 0&&(j=new IM(s,A,P,l),v.push(j)),j}function B(P){if(--P.usedTimes===0){const A=v.indexOf(P);v[A]=v[v.length-1],v.pop(),P.destroy()}}function U(P){p.remove(P)}function O(){p.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:R,acquireProgram:K,releaseProgram:B,releaseShaderCache:U,programs:v,dispose:O}}function jM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function HM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function jm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function f(y,S,M,b,w,_){let x=s[e];return x===void 0?(x={id:y.id,object:y,geometry:S,material:M,groupOrder:b,renderOrder:y.renderOrder,z:w,group:_},s[e]=x):(x.id=y.id,x.object=y,x.geometry=S,x.material=M,x.groupOrder=b,x.renderOrder=y.renderOrder,x.z=w,x.group=_),e++,x}function d(y,S,M,b,w,_){const x=f(y,S,M,b,w,_);M.transmission>0?r.push(x):M.transparent===!0?a.push(x):n.push(x)}function p(y,S,M,b,w,_){const x=f(y,S,M,b,w,_);M.transmission>0?r.unshift(x):M.transparent===!0?a.unshift(x):n.unshift(x)}function m(y,S){n.length>1&&n.sort(y||HM),r.length>1&&r.sort(S||jm),a.length>1&&a.sort(S||jm)}function v(){for(let y=e,S=s.length;y<S;y++){const M=s[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:d,unshift:p,finish:v,sort:m}}function GM(){let s=new WeakMap;function e(r,a){const l=s.get(r);let f;return l===void 0?(f=new Hm,s.set(r,[f])):a>=l.length?(f=new Hm,l.push(f)):f=l[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function VM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new le,color:new Tt};break;case"SpotLight":n={position:new le,direction:new le,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new le,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new le,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=n,n}}}function WM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let XM=0;function qM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function YM(s){const e=new VM,n=WM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new le);const a=new le,l=new Gt,f=new Gt;function d(m){let v=0,y=0,S=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,b=0,w=0,_=0,x=0,N=0,D=0,R=0,K=0,B=0,U=0;m.sort(qM);for(let P=0,A=m.length;P<A;P++){const j=m[P],ue=j.color,Z=j.intensity,de=j.distance,me=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)v+=ue.r*Z,y+=ue.g*Z,S+=ue.b*Z;else if(j.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(j.sh.coefficients[ce],Z);U++}else if(j.isDirectionalLight){const ce=e.get(j);if(ce.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const ee=j.shadow,z=n.get(j);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,r.directionalShadow[M]=z,r.directionalShadowMap[M]=me,r.directionalShadowMatrix[M]=j.shadow.matrix,N++}r.directional[M]=ce,M++}else if(j.isSpotLight){const ce=e.get(j);ce.position.setFromMatrixPosition(j.matrixWorld),ce.color.copy(ue).multiplyScalar(Z),ce.distance=de,ce.coneCos=Math.cos(j.angle),ce.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ce.decay=j.decay,r.spot[w]=ce;const ee=j.shadow;if(j.map&&(r.spotLightMap[K]=j.map,K++,ee.updateMatrices(j),j.castShadow&&B++),r.spotLightMatrix[w]=ee.matrix,j.castShadow){const z=n.get(j);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,r.spotShadow[w]=z,r.spotShadowMap[w]=me,R++}w++}else if(j.isRectAreaLight){const ce=e.get(j);ce.color.copy(ue).multiplyScalar(Z),ce.halfWidth.set(j.width*.5,0,0),ce.halfHeight.set(0,j.height*.5,0),r.rectArea[_]=ce,_++}else if(j.isPointLight){const ce=e.get(j);if(ce.color.copy(j.color).multiplyScalar(j.intensity),ce.distance=j.distance,ce.decay=j.decay,j.castShadow){const ee=j.shadow,z=n.get(j);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,z.shadowCameraNear=ee.camera.near,z.shadowCameraFar=ee.camera.far,r.pointShadow[b]=z,r.pointShadowMap[b]=me,r.pointShadowMatrix[b]=j.shadow.matrix,D++}r.point[b]=ce,b++}else if(j.isHemisphereLight){const ce=e.get(j);ce.skyColor.copy(j.color).multiplyScalar(Z),ce.groundColor.copy(j.groundColor).multiplyScalar(Z),r.hemi[x]=ce,x++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=S;const O=r.hash;(O.directionalLength!==M||O.pointLength!==b||O.spotLength!==w||O.rectAreaLength!==_||O.hemiLength!==x||O.numDirectionalShadows!==N||O.numPointShadows!==D||O.numSpotShadows!==R||O.numSpotMaps!==K||O.numLightProbes!==U)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=_,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+K-B,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=U,O.directionalLength=M,O.pointLength=b,O.spotLength=w,O.rectAreaLength=_,O.hemiLength=x,O.numDirectionalShadows=N,O.numPointShadows=D,O.numSpotShadows=R,O.numSpotMaps=K,O.numLightProbes=U,r.version=XM++)}function p(m,v){let y=0,S=0,M=0,b=0,w=0;const _=v.matrixWorldInverse;for(let x=0,N=m.length;x<N;x++){const D=m[x];if(D.isDirectionalLight){const R=r.directional[y];R.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(_),y++}else if(D.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(_),M++}else if(D.isRectAreaLight){const R=r.rectArea[b];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(_),f.identity(),l.copy(D.matrixWorld),l.premultiply(_),f.extractRotation(l),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),b++}else if(D.isPointLight){const R=r.point[S];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(_),S++}else if(D.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(_),w++}}}return{setup:d,setupView:p,state:r}}function Gm(s){const e=new YM(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function l(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:f}}function QM(s){let e=new WeakMap;function n(a,l=0){const f=e.get(a);let d;return f===void 0?(d=new Gm(s),e.set(a,[d])):l>=f.length?(d=new Gm(s),f.push(d)):d=f[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class KM extends Yo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=V1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZM extends Yo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$M=`uniform sampler2D shadow_pass;
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
}`;function eb(s,e,n){let r=new I0;const a=new ct,l=new ct,f=new jt,d=new KM({depthPacking:W1}),p=new ZM,m={},v=n.maxTextureSize,y={[br]:Dn,[Dn]:br,[zi]:zi},S=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:JM,fragmentShader:$M}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Xi;b.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Jn(b,S),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d0;let x=this.type;this.render=function(B,U,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||B.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),ue=s.state;ue.setBlending(Sr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const Z=x!==Fi&&this.type===Fi,de=x===Fi&&this.type!==Fi;for(let me=0,ce=B.length;me<ce;me++){const ee=B[me],z=ee.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const pe=z.getFrameExtents();if(a.multiply(pe),l.copy(z.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/pe.x),a.x=l.x*pe.x,z.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/pe.y),a.y=l.y*pe.y,z.mapSize.y=l.y)),z.map===null||Z===!0||de===!0){const F=this.type!==Fi?{minFilter:Bn,magFilter:Bn}:{};z.map!==null&&z.map.dispose(),z.map=new Er(a.x,a.y,F),z.map.texture.name=ee.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const se=z.getViewportCount();for(let F=0;F<se;F++){const ie=z.getViewport(F);f.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),ue.viewport(f),z.updateMatrices(ee,F),r=z.getFrustum(),R(U,O,z.camera,ee,this.type)}z.isPointLightShadow!==!0&&this.type===Fi&&N(z,O),z.needsUpdate=!1}x=this.type,_.needsUpdate=!1,s.setRenderTarget(P,A,j)};function N(B,U){const O=e.update(w);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Er(a.x,a.y)),S.uniforms.shadow_pass.value=B.map.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(U,null,O,S,w,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(U,null,O,M,w,null)}function D(B,U,O,P){let A=null;const j=O.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(j!==void 0)A=j;else if(A=O.isPointLight===!0?p:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ue=A.uuid,Z=U.uuid;let de=m[ue];de===void 0&&(de={},m[ue]=de);let me=de[Z];me===void 0&&(me=A.clone(),de[Z]=me,U.addEventListener("dispose",K)),A=me}if(A.visible=U.visible,A.wireframe=U.wireframe,P===Fi?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:y[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ue=s.properties.get(A);ue.light=O}return A}function R(B,U,O,P,A){if(B.visible===!1)return;if(B.layers.test(U.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&A===Fi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,B.matrixWorld);const Z=e.update(B),de=B.material;if(Array.isArray(de)){const me=Z.groups;for(let ce=0,ee=me.length;ce<ee;ce++){const z=me[ce],pe=de[z.materialIndex];if(pe&&pe.visible){const se=D(B,pe,P,A);B.onBeforeShadow(s,B,U,O,Z,se,z),s.renderBufferDirect(O,null,Z,se,B,z),B.onAfterShadow(s,B,U,O,Z,se,z)}}}else if(de.visible){const me=D(B,de,P,A);B.onBeforeShadow(s,B,U,O,Z,me,null),s.renderBufferDirect(O,null,Z,me,B,null),B.onAfterShadow(s,B,U,O,Z,me,null)}}const ue=B.children;for(let Z=0,de=ue.length;Z<de;Z++)R(ue[Z],U,O,P,A)}function K(B){B.target.removeEventListener("dispose",K);for(const O in m){const P=m[O],A=B.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const tb={[pd]:md,[gd]:yd,[xd]:_d,[Gs]:vd,[md]:pd,[yd]:gd,[_d]:xd,[vd]:Gs};function nb(s,e){function n(){let V=!1;const Pe=new jt;let he=null;const xe=new jt(0,0,0,0);return{setMask:function(ke){he!==ke&&!V&&(s.colorMask(ke,ke,ke,ke),he=ke)},setLocked:function(ke){V=ke},setClear:function(ke,Le,ot,kt,Xt){Xt===!0&&(ke*=kt,Le*=kt,ot*=kt),Pe.set(ke,Le,ot,kt),xe.equals(Pe)===!1&&(s.clearColor(ke,Le,ot,kt),xe.copy(Pe))},reset:function(){V=!1,he=null,xe.set(-1,0,0,0)}}}function r(){let V=!1,Pe=!1,he=null,xe=null,ke=null;return{setReversed:function(Le){if(Pe!==Le){const ot=e.get("EXT_clip_control");Pe?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const kt=ke;ke=null,this.setClear(kt)}Pe=Le},getReversed:function(){return Pe},setTest:function(Le){Le?_e(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(Le){he!==Le&&!V&&(s.depthMask(Le),he=Le)},setFunc:function(Le){if(Pe&&(Le=tb[Le]),xe!==Le){switch(Le){case pd:s.depthFunc(s.NEVER);break;case md:s.depthFunc(s.ALWAYS);break;case gd:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case xd:s.depthFunc(s.EQUAL);break;case vd:s.depthFunc(s.GEQUAL);break;case yd:s.depthFunc(s.GREATER);break;case _d:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=Le}},setLocked:function(Le){V=Le},setClear:function(Le){ke!==Le&&(Pe&&(Le=1-Le),s.clearDepth(Le),ke=Le)},reset:function(){V=!1,he=null,xe=null,ke=null,Pe=!1}}}function a(){let V=!1,Pe=null,he=null,xe=null,ke=null,Le=null,ot=null,kt=null,Xt=null;return{setTest:function(yt){V||(yt?_e(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(yt){Pe!==yt&&!V&&(s.stencilMask(yt),Pe=yt)},setFunc:function(yt,_n,pn){(he!==yt||xe!==_n||ke!==pn)&&(s.stencilFunc(yt,_n,pn),he=yt,xe=_n,ke=pn)},setOp:function(yt,_n,pn){(Le!==yt||ot!==_n||kt!==pn)&&(s.stencilOp(yt,_n,pn),Le=yt,ot=_n,kt=pn)},setLocked:function(yt){V=yt},setClear:function(yt){Xt!==yt&&(s.clearStencil(yt),Xt=yt)},reset:function(){V=!1,Pe=null,he=null,xe=null,ke=null,Le=null,ot=null,kt=null,Xt=null}}}const l=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let v={},y={},S=new WeakMap,M=[],b=null,w=!1,_=null,x=null,N=null,D=null,R=null,K=null,B=null,U=new Tt(0,0,0),O=0,P=!1,A=null,j=null,ue=null,Z=null,de=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ee=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(z)[1]),ce=ee>=1):z.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ce=ee>=2);let pe=null,se={};const F=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Ie=new jt().fromArray(F),ne=new jt().fromArray(ie);function ge(V,Pe,he,xe){const ke=new Uint8Array(4),Le=s.createTexture();s.bindTexture(V,Le),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<he;ot++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Pe+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Le}const Ee={};Ee[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),f.setClear(1),d.setClear(0),_e(s.DEPTH_TEST),f.setFunc(Gs),ht(!1),dt(Yp),_e(s.CULL_FACE),q(Sr);function _e(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function Re(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function Oe(V,Pe){return y[V]!==Pe?(s.bindFramebuffer(V,Pe),y[V]=Pe,V===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Pe),V===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ke(V,Pe){let he=M,xe=!1;if(V){he=S.get(Pe),he===void 0&&(he=[],S.set(Pe,he));const ke=V.textures;if(he.length!==ke.length||he[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,ot=ke.length;Le<ot;Le++)he[Le]=s.COLOR_ATTACHMENT0+Le;he.length=ke.length,xe=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,xe=!0);xe&&s.drawBuffers(he)}function At(V){return b!==V?(s.useProgram(V),b=V,!0):!1}const pt={[Yr]:s.FUNC_ADD,[x1]:s.FUNC_SUBTRACT,[v1]:s.FUNC_REVERSE_SUBTRACT};pt[y1]=s.MIN,pt[_1]=s.MAX;const Nt={[S1]:s.ZERO,[M1]:s.ONE,[b1]:s.SRC_COLOR,[fd]:s.SRC_ALPHA,[R1]:s.SRC_ALPHA_SATURATE,[A1]:s.DST_COLOR,[w1]:s.DST_ALPHA,[E1]:s.ONE_MINUS_SRC_COLOR,[hd]:s.ONE_MINUS_SRC_ALPHA,[C1]:s.ONE_MINUS_DST_COLOR,[T1]:s.ONE_MINUS_DST_ALPHA,[N1]:s.CONSTANT_COLOR,[P1]:s.ONE_MINUS_CONSTANT_COLOR,[D1]:s.CONSTANT_ALPHA,[L1]:s.ONE_MINUS_CONSTANT_ALPHA};function q(V,Pe,he,xe,ke,Le,ot,kt,Xt,yt){if(V===Sr){w===!0&&(Re(s.BLEND),w=!1);return}if(w===!1&&(_e(s.BLEND),w=!0),V!==g1){if(V!==_||yt!==P){if((x!==Yr||R!==Yr)&&(s.blendEquation(s.FUNC_ADD),x=Yr,R=Yr),yt)switch(V){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dd:s.blendFunc(s.ONE,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}N=null,D=null,K=null,B=null,U.set(0,0,0),O=0,_=V,P=yt}return}ke=ke||Pe,Le=Le||he,ot=ot||xe,(Pe!==x||ke!==R)&&(s.blendEquationSeparate(pt[Pe],pt[ke]),x=Pe,R=ke),(he!==N||xe!==D||Le!==K||ot!==B)&&(s.blendFuncSeparate(Nt[he],Nt[xe],Nt[Le],Nt[ot]),N=he,D=xe,K=Le,B=ot),(kt.equals(U)===!1||Xt!==O)&&(s.blendColor(kt.r,kt.g,kt.b,Xt),U.copy(kt),O=Xt),_=V,P=!1}function nn(V,Pe){V.side===zi?Re(s.CULL_FACE):_e(s.CULL_FACE);let he=V.side===Dn;Pe&&(he=!he),ht(he),V.blending===Bs&&V.transparent===!1?q(Sr):q(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),l.setMask(V.colorWrite);const xe=V.stencilWrite;d.setTest(xe),xe&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Mt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){A!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),A=V)}function dt(V){V!==h1?(_e(s.CULL_FACE),V!==j&&(V===Yp?s.cullFace(s.BACK):V===p1?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),j=V}function Ye(V){V!==ue&&(ce&&s.lineWidth(V),ue=V)}function Mt(V,Pe,he){V?(_e(s.POLYGON_OFFSET_FILL),(Z!==Pe||de!==he)&&(s.polygonOffset(Pe,he),Z=Pe,de=he)):Re(s.POLYGON_OFFSET_FILL)}function Qe(V){V?_e(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function k(V){V===void 0&&(V=s.TEXTURE0+me-1),pe!==V&&(s.activeTexture(V),pe=V)}function T(V,Pe,he){he===void 0&&(pe===null?he=s.TEXTURE0+me-1:he=pe);let xe=se[he];xe===void 0&&(xe={type:void 0,texture:void 0},se[he]=xe),(xe.type!==V||xe.texture!==Pe)&&(pe!==he&&(s.activeTexture(he),pe=he),s.bindTexture(V,Pe||Ee[V]),xe.type=V,xe.texture=Pe)}function W(){const V=se[pe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function L(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function at(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(V){Ie.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ie.copy(V))}function Be(V){ne.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),ne.copy(V))}function mt(V,Pe){let he=m.get(Pe);he===void 0&&(he=new WeakMap,m.set(Pe,he));let xe=he.get(V);xe===void 0&&(xe=s.getUniformBlockIndex(Pe,V.name),he.set(V,xe))}function st(V,Pe){const xe=m.get(Pe).get(V);p.get(Pe)!==xe&&(s.uniformBlockBinding(Pe,xe,V.__bindingPointIndex),p.set(Pe,xe))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},pe=null,se={},y={},S=new WeakMap,M=[],b=null,w=!1,_=null,x=null,N=null,D=null,R=null,K=null,B=null,U=new Tt(0,0,0),O=0,P=!1,A=null,j=null,ue=null,Z=null,de=null,Ie.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),l.reset(),f.reset(),d.reset()}return{buffers:{color:l,depth:f,stencil:d},enable:_e,disable:Re,bindFramebuffer:Oe,drawBuffers:Ke,useProgram:At,setBlending:q,setMaterial:nn,setFlipSided:ht,setCullFace:dt,setLineWidth:Ye,setPolygonOffset:Mt,setScissorTest:Qe,activeTexture:k,bindTexture:T,unbindTexture:W,compressedTexImage2D:L,compressedTexImage3D:Q,texImage2D:Fe,texImage3D:$e,updateUBOMapping:mt,uniformBlockBinding:st,texStorage2D:at,texStorage3D:Se,texSubImage2D:J,texSubImage3D:Te,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:et,viewport:Be,reset:Ct}}function Vm(s,e,n,r){const a=ib(r);switch(n){case x0:return s*e;case y0:return s*e;case _0:return s*e*2;case S0:return s*e/a.components*a.byteLength;case lf:return s*e/a.components*a.byteLength;case M0:return s*e*2/a.components*a.byteLength;case cf:return s*e*2/a.components*a.byteLength;case v0:return s*e*3/a.components*a.byteLength;case Zn:return s*e*4/a.components*a.byteLength;case uf:return s*e*4/a.components*a.byteLength;case Nl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:case Cd:return Math.max(s,16)*Math.max(e,8)/4;case wd:case Ad:return Math.max(s,8)*Math.max(e,8)/2;case Rd:case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case kl:case Xd:case qd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case b0:case Yd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qd:case Kd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ib(s){switch(s){case Gi:case p0:return{byteLength:1,components:1};case Go:case m0:case Ks:return{byteLength:2,components:1};case of:case af:return{byteLength:2,components:4};case $r:case sf:case Si:return{byteLength:4,components:1};case g0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function rb(s,e,n,r,a,l,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ct,v=new WeakMap;let y;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(k,T){return M?new OffscreenCanvas(k,T):Ol("canvas")}function w(k,T,W){let L=1;const Q=Qe(k);if((Q.width>W||Q.height>W)&&(L=W/Math.max(Q.width,Q.height)),L<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const J=Math.floor(L*Q.width),Te=Math.floor(L*Q.height);y===void 0&&(y=b(J,Te));const Me=T?b(J,Te):y;return Me.width=J,Me.height=Te,Me.getContext("2d").drawImage(k,0,0,J,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+Te+")."),Me}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),k;return k}function _(k){return k.generateMipmaps}function x(k){s.generateMipmap(k)}function N(k){return k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?s.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(k,T,W,L,Q=!1){if(k!==null){if(s[k]!==void 0)return s[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let J=T;if(T===s.RED&&(W===s.FLOAT&&(J=s.R32F),W===s.HALF_FLOAT&&(J=s.R16F),W===s.UNSIGNED_BYTE&&(J=s.R8)),T===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.R8UI),W===s.UNSIGNED_SHORT&&(J=s.R16UI),W===s.UNSIGNED_INT&&(J=s.R32UI),W===s.BYTE&&(J=s.R8I),W===s.SHORT&&(J=s.R16I),W===s.INT&&(J=s.R32I)),T===s.RG&&(W===s.FLOAT&&(J=s.RG32F),W===s.HALF_FLOAT&&(J=s.RG16F),W===s.UNSIGNED_BYTE&&(J=s.RG8)),T===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RG8UI),W===s.UNSIGNED_SHORT&&(J=s.RG16UI),W===s.UNSIGNED_INT&&(J=s.RG32UI),W===s.BYTE&&(J=s.RG8I),W===s.SHORT&&(J=s.RG16I),W===s.INT&&(J=s.RG32I)),T===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RGB8UI),W===s.UNSIGNED_SHORT&&(J=s.RGB16UI),W===s.UNSIGNED_INT&&(J=s.RGB32UI),W===s.BYTE&&(J=s.RGB8I),W===s.SHORT&&(J=s.RGB16I),W===s.INT&&(J=s.RGB32I)),T===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),W===s.UNSIGNED_INT&&(J=s.RGBA32UI),W===s.BYTE&&(J=s.RGBA8I),W===s.SHORT&&(J=s.RGBA16I),W===s.INT&&(J=s.RGBA32I)),T===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),T===s.RGBA){const Te=Q?Hl:St.getTransfer(L);W===s.FLOAT&&(J=s.RGBA32F),W===s.HALF_FLOAT&&(J=s.RGBA16F),W===s.UNSIGNED_BYTE&&(J=Te===Pt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function R(k,T){let W;return k?T===null||T===$r||T===Xs?W=s.DEPTH24_STENCIL8:T===Si?W=s.DEPTH32F_STENCIL8:T===Go&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===$r||T===Xs?W=s.DEPTH_COMPONENT24:T===Si?W=s.DEPTH_COMPONENT32F:T===Go&&(W=s.DEPTH_COMPONENT16),W}function K(k,T){return _(k)===!0||k.isFramebufferTexture&&k.minFilter!==Bn&&k.minFilter!==Pn?Math.log2(Math.max(T.width,T.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?T.mipmaps.length:1}function B(k){const T=k.target;T.removeEventListener("dispose",B),O(T),T.isVideoTexture&&v.delete(T)}function U(k){const T=k.target;T.removeEventListener("dispose",U),A(T)}function O(k){const T=r.get(k);if(T.__webglInit===void 0)return;const W=k.source,L=S.get(W);if(L){const Q=L[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(k),Object.keys(L).length===0&&S.delete(W)}r.remove(k)}function P(k){const T=r.get(k);s.deleteTexture(T.__webglTexture);const W=k.source,L=S.get(W);delete L[T.__cacheKey],f.memory.textures--}function A(k){const T=r.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),r.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(T.__webglFramebuffer[L]))for(let Q=0;Q<T.__webglFramebuffer[L].length;Q++)s.deleteFramebuffer(T.__webglFramebuffer[L][Q]);else s.deleteFramebuffer(T.__webglFramebuffer[L]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[L])}else{if(Array.isArray(T.__webglFramebuffer))for(let L=0;L<T.__webglFramebuffer.length;L++)s.deleteFramebuffer(T.__webglFramebuffer[L]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let L=0;L<T.__webglColorRenderbuffer.length;L++)T.__webglColorRenderbuffer[L]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[L]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=k.textures;for(let L=0,Q=W.length;L<Q;L++){const J=r.get(W[L]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),f.memory.textures--),r.remove(W[L])}r.remove(k)}let j=0;function ue(){j=0}function Z(){const k=j;return k>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+a.maxTextures),j+=1,k}function de(k){const T=[];return T.push(k.wrapS),T.push(k.wrapT),T.push(k.wrapR||0),T.push(k.magFilter),T.push(k.minFilter),T.push(k.anisotropy),T.push(k.internalFormat),T.push(k.format),T.push(k.type),T.push(k.generateMipmaps),T.push(k.premultiplyAlpha),T.push(k.flipY),T.push(k.unpackAlignment),T.push(k.colorSpace),T.join()}function me(k,T){const W=r.get(k);if(k.isVideoTexture&&Ye(k),k.isRenderTargetTexture===!1&&k.version>0&&W.__version!==k.version){const L=k.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,k,T);return}}n.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+T)}function ce(k,T){const W=r.get(k);if(k.version>0&&W.__version!==k.version){ne(W,k,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+T)}function ee(k,T){const W=r.get(k);if(k.version>0&&W.__version!==k.version){ne(W,k,T);return}n.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+T)}function z(k,T){const W=r.get(k);if(k.version>0&&W.__version!==k.version){ge(W,k,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+T)}const pe={[bd]:s.REPEAT,[fi]:s.CLAMP_TO_EDGE,[Ed]:s.MIRRORED_REPEAT},se={[Bn]:s.NEAREST,[G1]:s.NEAREST_MIPMAP_NEAREST,[nl]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[Pu]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},F={[Y1]:s.NEVER,[ey]:s.ALWAYS,[Q1]:s.LESS,[E0]:s.LEQUAL,[K1]:s.EQUAL,[$1]:s.GEQUAL,[Z1]:s.GREATER,[J1]:s.NOTEQUAL};function ie(k,T){if(T.type===Si&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Pn||T.magFilter===Pu||T.magFilter===nl||T.magFilter===Kr||T.minFilter===Pn||T.minFilter===Pu||T.minFilter===nl||T.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(k,s.TEXTURE_WRAP_S,pe[T.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,pe[T.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,pe[T.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,se[T.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Bn||T.minFilter!==nl&&T.minFilter!==Kr||T.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(k,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ie(k,T){let W=!1;k.__webglInit===void 0&&(k.__webglInit=!0,T.addEventListener("dispose",B));const L=T.source;let Q=S.get(L);Q===void 0&&(Q={},S.set(L,Q));const J=de(T);if(J!==k.__cacheKey){Q[J]===void 0&&(Q[J]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,W=!0),Q[J].usedTimes++;const Te=Q[k.__cacheKey];Te!==void 0&&(Q[k.__cacheKey].usedTimes--,Te.usedTimes===0&&P(T)),k.__cacheKey=J,k.__webglTexture=Q[J].texture}return W}function ne(k,T,W){let L=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(L=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(L=s.TEXTURE_3D);const Q=Ie(k,T),J=T.source;n.bindTexture(L,k.__webglTexture,s.TEXTURE0+W);const Te=r.get(J);if(J.version!==Te.__version||Q===!0){n.activeTexture(s.TEXTURE0+W);const Me=St.getPrimaries(St.workingColorSpace),Ne=T.colorSpace===_r?null:St.getPrimaries(T.colorSpace),at=T.colorSpace===_r||Me===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Se=w(T.image,!1,a.maxTextureSize);Se=Mt(T,Se);const Fe=l.convert(T.format,T.colorSpace),$e=l.convert(T.type);let et=D(T.internalFormat,Fe,$e,T.colorSpace,T.isVideoTexture);ie(L,T);let Be;const mt=T.mipmaps,st=T.isVideoTexture!==!0,Ct=Te.__version===void 0||Q===!0,V=J.dataReady,Pe=K(T,Se);if(T.isDepthTexture)et=R(T.format===qs,T.type),Ct&&(st?n.texStorage2D(s.TEXTURE_2D,1,et,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,et,Se.width,Se.height,0,Fe,$e,null));else if(T.isDataTexture)if(mt.length>0){st&&Ct&&n.texStorage2D(s.TEXTURE_2D,Pe,et,mt[0].width,mt[0].height);for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],st?V&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Be.width,Be.height,Fe,$e,Be.data):n.texImage2D(s.TEXTURE_2D,he,et,Be.width,Be.height,0,Fe,$e,Be.data);T.generateMipmaps=!1}else st?(Ct&&n.texStorage2D(s.TEXTURE_2D,Pe,et,Se.width,Se.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Fe,$e,Se.data)):n.texImage2D(s.TEXTURE_2D,0,et,Se.width,Se.height,0,Fe,$e,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,et,mt[0].width,mt[0].height,Se.depth);for(let he=0,xe=mt.length;he<xe;he++)if(Be=mt[he],T.format!==Zn)if(Fe!==null)if(st){if(V)if(T.layerUpdates.size>0){const ke=Vm(Be.width,Be.height,T.format,T.type);for(const Le of T.layerUpdates){const ot=Be.data.subarray(Le*ke/Be.data.BYTES_PER_ELEMENT,(Le+1)*ke/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,Le,Be.width,Be.height,1,Fe,ot)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,Se.depth,Fe,Be.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,et,Be.width,Be.height,Se.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,Se.depth,Fe,$e,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,he,et,Be.width,Be.height,Se.depth,0,Fe,$e,Be.data)}else{st&&Ct&&n.texStorage2D(s.TEXTURE_2D,Pe,et,mt[0].width,mt[0].height);for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],T.format!==Zn?Fe!==null?st?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Be.width,Be.height,Fe,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,he,et,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?V&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Be.width,Be.height,Fe,$e,Be.data):n.texImage2D(s.TEXTURE_2D,he,et,Be.width,Be.height,0,Fe,$e,Be.data)}else if(T.isDataArrayTexture)if(st){if(Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,et,Se.width,Se.height,Se.depth),V)if(T.layerUpdates.size>0){const he=Vm(Se.width,Se.height,T.format,T.type);for(const xe of T.layerUpdates){const ke=Se.data.subarray(xe*he/Se.data.BYTES_PER_ELEMENT,(xe+1)*he/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,Se.width,Se.height,1,Fe,$e,ke)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Fe,$e,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Se.width,Se.height,Se.depth,0,Fe,$e,Se.data);else if(T.isData3DTexture)st?(Ct&&n.texStorage3D(s.TEXTURE_3D,Pe,et,Se.width,Se.height,Se.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Fe,$e,Se.data)):n.texImage3D(s.TEXTURE_3D,0,et,Se.width,Se.height,Se.depth,0,Fe,$e,Se.data);else if(T.isFramebufferTexture){if(Ct)if(st)n.texStorage2D(s.TEXTURE_2D,Pe,et,Se.width,Se.height);else{let he=Se.width,xe=Se.height;for(let ke=0;ke<Pe;ke++)n.texImage2D(s.TEXTURE_2D,ke,et,he,xe,0,Fe,$e,null),he>>=1,xe>>=1}}else if(mt.length>0){if(st&&Ct){const he=Qe(mt[0]);n.texStorage2D(s.TEXTURE_2D,Pe,et,he.width,he.height)}for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],st?V&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Fe,$e,Be):n.texImage2D(s.TEXTURE_2D,he,et,Fe,$e,Be);T.generateMipmaps=!1}else if(st){if(Ct){const he=Qe(Se);n.texStorage2D(s.TEXTURE_2D,Pe,et,he.width,he.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,$e,Se)}else n.texImage2D(s.TEXTURE_2D,0,et,Fe,$e,Se);_(T)&&x(L),Te.__version=J.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function ge(k,T,W){if(T.image.length!==6)return;const L=Ie(k,T),Q=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+W);const J=r.get(Q);if(Q.version!==J.__version||L===!0){n.activeTexture(s.TEXTURE0+W);const Te=St.getPrimaries(St.workingColorSpace),Me=T.colorSpace===_r?null:St.getPrimaries(T.colorSpace),Ne=T.colorSpace===_r||Te===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const at=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let xe=0;xe<6;xe++)!at&&!Se?Fe[xe]=w(T.image[xe],!0,a.maxCubemapSize):Fe[xe]=Se?T.image[xe].image:T.image[xe],Fe[xe]=Mt(T,Fe[xe]);const $e=Fe[0],et=l.convert(T.format,T.colorSpace),Be=l.convert(T.type),mt=D(T.internalFormat,et,Be,T.colorSpace),st=T.isVideoTexture!==!0,Ct=J.__version===void 0||L===!0,V=Q.dataReady;let Pe=K(T,$e);ie(s.TEXTURE_CUBE_MAP,T);let he;if(at){st&&Ct&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,mt,$e.width,$e.height);for(let xe=0;xe<6;xe++){he=Fe[xe].mipmaps;for(let ke=0;ke<he.length;ke++){const Le=he[ke];T.format!==Zn?et!==null?st?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke,0,0,Le.width,Le.height,et,Le.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke,mt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke,0,0,Le.width,Le.height,et,Be,Le.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke,mt,Le.width,Le.height,0,et,Be,Le.data)}}}else{if(he=T.mipmaps,st&&Ct){he.length>0&&Pe++;const xe=Qe(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,mt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Se){st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Fe[xe].width,Fe[xe].height,et,Be,Fe[xe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,Fe[xe].width,Fe[xe].height,0,et,Be,Fe[xe].data);for(let ke=0;ke<he.length;ke++){const ot=he[ke].image[xe].image;st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke+1,0,0,ot.width,ot.height,et,Be,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke+1,mt,ot.width,ot.height,0,et,Be,ot.data)}}else{st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,et,Be,Fe[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,et,Be,Fe[xe]);for(let ke=0;ke<he.length;ke++){const Le=he[ke];st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke+1,0,0,et,Be,Le.image[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke+1,mt,et,Be,Le.image[xe])}}}_(T)&&x(s.TEXTURE_CUBE_MAP),J.__version=Q.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function Ee(k,T,W,L,Q,J){const Te=l.convert(W.format,W.colorSpace),Me=l.convert(W.type),Ne=D(W.internalFormat,Te,Me,W.colorSpace),at=r.get(T),Se=r.get(W);if(Se.__renderTarget=T,!at.__hasExternalTextures){const Fe=Math.max(1,T.width>>J),$e=Math.max(1,T.height>>J);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?n.texImage3D(Q,J,Ne,Fe,$e,T.depth,0,Te,Me,null):n.texImage2D(Q,J,Ne,Fe,$e,0,Te,Me,null)}n.bindFramebuffer(s.FRAMEBUFFER,k),dt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,L,Q,Se.__webglTexture,0,ht(T)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,L,Q,Se.__webglTexture,J),n.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(k,T,W){if(s.bindRenderbuffer(s.RENDERBUFFER,k),T.depthBuffer){const L=T.depthTexture,Q=L&&L.isDepthTexture?L.type:null,J=R(T.stencilBuffer,Q),Te=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=ht(T);dt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,J,T.width,T.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,J,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,J,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,k)}else{const L=T.textures;for(let Q=0;Q<L.length;Q++){const J=L[Q],Te=l.convert(J.format,J.colorSpace),Me=l.convert(J.type),Ne=D(J.internalFormat,Te,Me,J.colorSpace),at=ht(T);W&&dt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Ne,T.width,T.height):dt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,Ne,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(k,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,k),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=r.get(T.depthTexture);L.__renderTarget=T,(!L.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const Q=L.__webglTexture,J=ht(T);if(T.depthTexture.format===js)dt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(T.depthTexture.format===qs)dt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Oe(k){const T=r.get(k),W=k.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==k.depthTexture){const L=k.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),L){const Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,L.removeEventListener("dispose",Q)};L.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=L}if(k.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Re(T.__webglFramebuffer,k)}else if(W){T.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[L]),T.__webglDepthbuffer[L]===void 0)T.__webglDepthbuffer[L]=s.createRenderbuffer(),_e(T.__webglDepthbuffer[L],k,!1);else{const Q=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[L];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,J)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),_e(T.__webglDepthbuffer,k,!1);else{const L=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,L,s.RENDERBUFFER,Q)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(k,T,W){const L=r.get(k);T!==void 0&&Ee(L.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Oe(k)}function At(k){const T=k.texture,W=r.get(k),L=r.get(T);k.addEventListener("dispose",U);const Q=k.textures,J=k.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||(L.__webglTexture===void 0&&(L.__webglTexture=s.createTexture()),L.__version=T.version,f.memory.textures++),J){W.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Me]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)W.__webglFramebuffer[Me][Ne]=s.createFramebuffer()}else W.__webglFramebuffer[Me]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Me=0;Me<T.mipmaps.length;Me++)W.__webglFramebuffer[Me]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Te)for(let Me=0,Ne=Q.length;Me<Ne;Me++){const at=r.get(Q[Me]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),f.memory.textures++)}if(k.samples>0&&dt(k)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Me=0;Me<Q.length;Me++){const Ne=Q[Me];W.__webglColorRenderbuffer[Me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[Me]);const at=l.convert(Ne.format,Ne.colorSpace),Se=l.convert(Ne.type),Fe=D(Ne.internalFormat,at,Se,Ne.colorSpace,k.isXRRenderTarget===!0),$e=ht(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Fe,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,W.__webglColorRenderbuffer[Me])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(W.__webglDepthRenderbuffer,k,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture),ie(s.TEXTURE_CUBE_MAP,T);for(let Me=0;Me<6;Me++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Ee(W.__webglFramebuffer[Me][Ne],k,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne);else Ee(W.__webglFramebuffer[Me],k,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);_(T)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let Me=0,Ne=Q.length;Me<Ne;Me++){const at=Q[Me],Se=r.get(at);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),ie(s.TEXTURE_2D,at),Ee(W.__webglFramebuffer,k,at,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,0),_(at)&&x(s.TEXTURE_2D)}n.unbindTexture()}else{let Me=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Me=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Me,L.__webglTexture),ie(Me,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Ee(W.__webglFramebuffer[Ne],k,T,s.COLOR_ATTACHMENT0,Me,Ne);else Ee(W.__webglFramebuffer,k,T,s.COLOR_ATTACHMENT0,Me,0);_(T)&&x(Me),n.unbindTexture()}k.depthBuffer&&Oe(k)}function pt(k){const T=k.textures;for(let W=0,L=T.length;W<L;W++){const Q=T[W];if(_(Q)){const J=N(k),Te=r.get(Q).__webglTexture;n.bindTexture(J,Te),x(J),n.unbindTexture()}}}const Nt=[],q=[];function nn(k){if(k.samples>0){if(dt(k)===!1){const T=k.textures,W=k.width,L=k.height;let Q=s.COLOR_BUFFER_BIT;const J=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=r.get(k),Me=T.length>1;if(Me)for(let Ne=0;Ne<T.length;Ne++)n.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),Me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Ne]);const at=r.get(T[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,at,0)}s.blitFramebuffer(0,0,W,L,0,0,W,L,Q,s.NEAREST),p===!0&&(Nt.length=0,q.length=0,Nt.push(s.COLOR_ATTACHMENT0+Ne),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Nt.push(J),q.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Me)for(let Ne=0;Ne<T.length;Ne++){n.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Ne]);const at=r.get(T[Ne]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,at,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&p){const T=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ht(k){return Math.min(a.maxSamples,k.samples)}function dt(k){const T=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ye(k){const T=f.render.frame;v.get(k)!==T&&(v.set(k,T),k.update())}function Mt(k,T){const W=k.colorSpace,L=k.format,Q=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||W!==Zs&&W!==_r&&(St.getTransfer(W)===Pt?(L!==Zn||Q!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function Qe(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(m.width=k.naturalWidth||k.width,m.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(m.width=k.displayWidth,m.height=k.displayHeight):(m.width=k.width,m.height=k.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=ue,this.setTexture2D=me,this.setTexture2DArray=ce,this.setTexture3D=ee,this.setTextureCube=z,this.rebindTextures=Ke,this.setupRenderTarget=At,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=dt}function sb(s,e){function n(r,a=_r){let l;const f=St.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===of)return s.UNSIGNED_SHORT_4_4_4_4;if(r===af)return s.UNSIGNED_SHORT_5_5_5_1;if(r===g0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===p0)return s.BYTE;if(r===m0)return s.SHORT;if(r===Go)return s.UNSIGNED_SHORT;if(r===sf)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===Si)return s.FLOAT;if(r===Ks)return s.HALF_FLOAT;if(r===x0)return s.ALPHA;if(r===v0)return s.RGB;if(r===Zn)return s.RGBA;if(r===y0)return s.LUMINANCE;if(r===_0)return s.LUMINANCE_ALPHA;if(r===js)return s.DEPTH_COMPONENT;if(r===qs)return s.DEPTH_STENCIL;if(r===S0)return s.RED;if(r===lf)return s.RED_INTEGER;if(r===M0)return s.RG;if(r===cf)return s.RG_INTEGER;if(r===uf)return s.RGBA_INTEGER;if(r===Nl||r===Pl||r===Dl||r===Ll)if(f===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Nl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ll)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Nl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ll)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wd||r===Td||r===Ad||r===Cd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===wd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Td)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ad)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rd||r===Nd||r===Pd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Rd||r===Nd)return f===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Pd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dd||r===Ld||r===kd||r===Ud||r===Id||r===Od||r===Fd||r===zd||r===Bd||r===jd||r===Hd||r===Gd||r===Vd||r===Wd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Dd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ld)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ud)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Id)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Od)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kl||r===Xd||r===qd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===kl)return f===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===b0||r===Yd||r===Qd||r===Kd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===kl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Yd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class ob extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const w of e.hand.values()){const _=n.getJointPose(w,r),x=this._getHandJoint(m,w);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=v.position.distanceTo(y.position),M=.02,b=.005;m.inputState.pinching&&S>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new bl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const lb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cb=`
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

}`;class ub{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new yn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Wi({vertexShader:lb,fragmentShader:cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new Zr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class db extends Js{constructor(e,n){super();const r=this;let a=null,l=1,f=null,d="local-floor",p=1,m=null,v=null,y=null,S=null,M=null,b=null;const w=new ub,_=n.getContextAttributes();let x=null,N=null;const D=[],R=[],K=new ct;let B=null;const U=new ui;U.viewport=new jt;const O=new ui;O.viewport=new jt;const P=[U,O],A=new ob;let j=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=D[ne];return ge===void 0&&(ge=new od,D[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=D[ne];return ge===void 0&&(ge=new od,D[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=D[ne];return ge===void 0&&(ge=new od,D[ne]=ge),ge.getHandSpace()};function Z(ne){const ge=R.indexOf(ne.inputSource);if(ge===-1)return;const Ee=D[ge];Ee!==void 0&&(Ee.update(ne.inputSource,ne.frame,m||f),Ee.dispatchEvent({type:ne.type,data:ne.inputSource}))}function de(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",me);for(let ne=0;ne<D.length;ne++){const ge=R[ne];ge!==null&&(R[ne]=null,D[ne].disconnect(ge))}j=null,ue=null,w.reset(),e.setRenderTarget(x),M=null,S=null,y=null,a=null,N=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(ne){m=ne},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return y},this.getFrame=function(){return b},this.getSession=function(){return a},this.setSession=async function(ne){if(a=ne,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",de),a.addEventListener("inputsourceschange",me),_.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(K),a.renderState.layers===void 0){const ge={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,n,ge),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Er(M.framebufferWidth,M.framebufferHeight,{format:Zn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ge=null,Ee=null,_e=null;_.depth&&(_e=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=_.stencil?qs:js,Ee=_.stencil?Xs:$r);const Re={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:l};y=new XRWebGLBinding(a,n),S=y.createProjectionLayer(Re),a.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),N=new Er(S.textureWidth,S.textureHeight,{format:Zn,type:Gi,depthTexture:new F0(S.textureWidth,S.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function me(ne){for(let ge=0;ge<ne.removed.length;ge++){const Ee=ne.removed[ge],_e=R.indexOf(Ee);_e>=0&&(R[_e]=null,D[_e].disconnect(Ee))}for(let ge=0;ge<ne.added.length;ge++){const Ee=ne.added[ge];let _e=R.indexOf(Ee);if(_e===-1){for(let Oe=0;Oe<D.length;Oe++)if(Oe>=R.length){R.push(Ee),_e=Oe;break}else if(R[Oe]===null){R[Oe]=Ee,_e=Oe;break}if(_e===-1)break}const Re=D[_e];Re&&Re.connect(Ee)}}const ce=new le,ee=new le;function z(ne,ge,Ee){ce.setFromMatrixPosition(ge.matrixWorld),ee.setFromMatrixPosition(Ee.matrixWorld);const _e=ce.distanceTo(ee),Re=ge.projectionMatrix.elements,Oe=Ee.projectionMatrix.elements,Ke=Re[14]/(Re[10]-1),At=Re[14]/(Re[10]+1),pt=(Re[9]+1)/Re[5],Nt=(Re[9]-1)/Re[5],q=(Re[8]-1)/Re[0],nn=(Oe[8]+1)/Oe[0],ht=Ke*q,dt=Ke*nn,Ye=_e/(-q+nn),Mt=Ye*-q;if(ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Mt),ne.translateZ(Ye),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Re[10]===-1)ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Qe=Ke+Ye,k=At+Ye,T=ht-Mt,W=dt+(_e-Mt),L=pt*At/k*Qe,Q=Nt*At/k*Qe;ne.projectionMatrix.makePerspective(T,W,L,Q,Qe,k),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function pe(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(a===null)return;let ge=ne.near,Ee=ne.far;w.texture!==null&&(w.depthNear>0&&(ge=w.depthNear),w.depthFar>0&&(Ee=w.depthFar)),A.near=O.near=U.near=ge,A.far=O.far=U.far=Ee,(j!==A.near||ue!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,ue=A.far),U.layers.mask=ne.layers.mask|2,O.layers.mask=ne.layers.mask|4,A.layers.mask=U.layers.mask|O.layers.mask;const _e=ne.parent,Re=A.cameras;pe(A,_e);for(let Oe=0;Oe<Re.length;Oe++)pe(Re[Oe],_e);Re.length===2?z(A,U,O):A.projectionMatrix.copy(U.projectionMatrix),se(ne,A,_e)};function se(ne,ge,Ee){Ee===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(Ee.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Zd*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(ne){p=ne,S!==null&&(S.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let F=null;function ie(ne,ge){if(v=ge.getViewerPose(m||f),b=ge,v!==null){const Ee=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let _e=!1;Ee.length!==A.cameras.length&&(A.cameras.length=0,_e=!0);for(let Oe=0;Oe<Ee.length;Oe++){const Ke=Ee[Oe];let At=null;if(M!==null)At=M.getViewport(Ke);else{const Nt=y.getViewSubImage(S,Ke);At=Nt.viewport,Oe===0&&(e.setRenderTargetTextures(N,Nt.colorTexture,S.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(N))}let pt=P[Oe];pt===void 0&&(pt=new ui,pt.layers.enable(Oe),pt.viewport=new jt,P[Oe]=pt),pt.matrix.fromArray(Ke.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ke.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(At.x,At.y,At.width,At.height),Oe===0&&(A.matrix.copy(pt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),_e===!0&&A.cameras.push(pt)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Oe=y.getDepthInformation(Ee[0]);Oe&&Oe.isValid&&Oe.texture&&w.init(e,Oe,a.renderState)}}for(let Ee=0;Ee<D.length;Ee++){const _e=R[Ee],Re=D[Ee];_e!==null&&Re!==void 0&&Re.update(_e,ge,m||f)}F&&F(ne,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),b=null}const Ie=new O0;Ie.setAnimationLoop(ie),this.setAnimationLoop=function(ne){F=ne},this.dispose=function(){}}}const Vr=new Vi,fb=new Gt;function hb(s,e){function n(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function r(_,x){x.color.getRGB(_.fogColor.value,k0(s)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function a(_,x,N,D,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(_,x):x.isMeshToonMaterial?(l(_,x),y(_,x)):x.isMeshPhongMaterial?(l(_,x),v(_,x)):x.isMeshStandardMaterial?(l(_,x),S(_,x),x.isMeshPhysicalMaterial&&M(_,x,R)):x.isMeshMatcapMaterial?(l(_,x),b(_,x)):x.isMeshDepthMaterial?l(_,x):x.isMeshDistanceMaterial?(l(_,x),w(_,x)):x.isMeshNormalMaterial?l(_,x):x.isLineBasicMaterial?(f(_,x),x.isLineDashedMaterial&&d(_,x)):x.isPointsMaterial?p(_,x,N,D):x.isSpriteMaterial?m(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,n(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,n(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,n(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Dn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,n(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Dn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,n(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,n(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const N=e.get(x),D=N.envMap,R=N.envMapRotation;D&&(_.envMap.value=D,Vr.copy(R),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),_.envMapRotation.value.setFromMatrix4(fb.makeRotationFromEuler(Vr)),_.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,_.aoMapTransform))}function f(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,n(x.map,_.mapTransform))}function d(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function p(_,x,N,D){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*N,_.scale.value=D*.5,x.map&&(_.map.value=x.map,n(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,n(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function m(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,n(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,n(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function v(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function y(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function S(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function M(_,x,N){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Dn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=N.texture,_.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,_.specularIntensityMapTransform))}function b(_,x){x.matcap&&(_.matcap.value=x.matcap)}function w(_,x){const N=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(N.matrixWorld),_.nearDistance.value=N.shadow.camera.near,_.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function pb(s,e,n,r){let a={},l={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,D){const R=D.program;r.uniformBlockBinding(N,R)}function m(N,D){let R=a[N.id];R===void 0&&(b(N),R=v(N),a[N.id]=R,N.addEventListener("dispose",_));const K=D.program;r.updateUBOMapping(N,K);const B=e.render.frame;l[N.id]!==B&&(S(N),l[N.id]=B)}function v(N){const D=y();N.__bindingPointIndex=D;const R=s.createBuffer(),K=N.__size,B=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,K,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,R),R}function y(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(N){const D=a[N.id],R=N.uniforms,K=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let B=0,U=R.length;B<U;B++){const O=Array.isArray(R[B])?R[B]:[R[B]];for(let P=0,A=O.length;P<A;P++){const j=O[P];if(M(j,B,P,K)===!0){const ue=j.__offset,Z=Array.isArray(j.value)?j.value:[j.value];let de=0;for(let me=0;me<Z.length;me++){const ce=Z[me],ee=w(ce);typeof ce=="number"||typeof ce=="boolean"?(j.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,ue+de,j.__data)):ce.isMatrix3?(j.__data[0]=ce.elements[0],j.__data[1]=ce.elements[1],j.__data[2]=ce.elements[2],j.__data[3]=0,j.__data[4]=ce.elements[3],j.__data[5]=ce.elements[4],j.__data[6]=ce.elements[5],j.__data[7]=0,j.__data[8]=ce.elements[6],j.__data[9]=ce.elements[7],j.__data[10]=ce.elements[8],j.__data[11]=0):(ce.toArray(j.__data,de),de+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ue,j.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(N,D,R,K){const B=N.value,U=D+"_"+R;if(K[U]===void 0)return typeof B=="number"||typeof B=="boolean"?K[U]=B:K[U]=B.clone(),!0;{const O=K[U];if(typeof B=="number"||typeof B=="boolean"){if(O!==B)return K[U]=B,!0}else if(O.equals(B)===!1)return O.copy(B),!0}return!1}function b(N){const D=N.uniforms;let R=0;const K=16;for(let U=0,O=D.length;U<O;U++){const P=Array.isArray(D[U])?D[U]:[D[U]];for(let A=0,j=P.length;A<j;A++){const ue=P[A],Z=Array.isArray(ue.value)?ue.value:[ue.value];for(let de=0,me=Z.length;de<me;de++){const ce=Z[de],ee=w(ce),z=R%K,pe=z%ee.boundary,se=z+pe;R+=pe,se!==0&&K-se<ee.storage&&(R+=K-se),ue.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=R,R+=ee.storage}}}const B=R%K;return B>0&&(R+=K-B),N.__size=R,N.__cache={},this}function w(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function _(N){const D=N.target;D.removeEventListener("dispose",_);const R=f.indexOf(D.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function x(){for(const N in a)s.deleteBuffer(a[N]);f=[],a={},l={}}return{bind:p,update:m,dispose:x}}class mb{constructor(e={}){const{canvas:n=ny(),context:r=null,depth:a=!0,stencil:l=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const b=new Uint32Array(4),w=new Int32Array(4);let _=null,x=null;const N=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Mr,this.toneMappingExposure=1;const R=this;let K=!1,B=0,U=0,O=null,P=-1,A=null;const j=new jt,ue=new jt;let Z=null;const de=new Tt(0);let me=0,ce=n.width,ee=n.height,z=1,pe=null,se=null;const F=new jt(0,0,ce,ee),ie=new jt(0,0,ce,ee);let Ie=!1;const ne=new I0;let ge=!1,Ee=!1;const _e=new Gt,Re=new Gt,Oe=new le,Ke=new jt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Nt(){return O===null?z:1}let q=r;function nn(C,X){return n.getContext(C,X)}try{const C={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rf}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",Le,!1),q===null){const X="webgl2";if(q=nn(X,C),q===null)throw nn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ht,dt,Ye,Mt,Qe,k,T,W,L,Q,J,Te,Me,Ne,at,Se,Fe,$e,et,Be,mt,st,Ct,V;function Pe(){ht=new _S(q),ht.init(),st=new sb(q,ht),dt=new hS(q,ht,e,st),Ye=new nb(q,ht),dt.reverseDepthBuffer&&S&&Ye.buffers.depth.setReversed(!0),Mt=new bS(q),Qe=new jM,k=new rb(q,ht,Ye,Qe,dt,st,Mt),T=new mS(R),W=new yS(R),L=new Ry(q),Ct=new dS(q,L),Q=new SS(q,L,Mt,Ct),J=new wS(q,Q,L,Mt),et=new ES(q,dt,k),Se=new pS(Qe),Te=new BM(R,T,W,ht,dt,Ct,Se),Me=new hb(R,Qe),Ne=new GM,at=new QM(ht),$e=new uS(R,T,W,Ye,J,M,p),Fe=new eb(R,J,dt),V=new pb(q,Mt,dt,Ye),Be=new fS(q,ht,Mt),mt=new MS(q,ht,Mt),Mt.programs=Te.programs,R.capabilities=dt,R.extensions=ht,R.properties=Qe,R.renderLists=Ne,R.shadowMap=Fe,R.state=Ye,R.info=Mt}Pe();const he=new db(R,q);this.xr=he,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(ce,ee,!1))},this.getSize=function(C){return C.set(ce,ee)},this.setSize=function(C,X,oe=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,ee=X,n.width=Math.floor(C*z),n.height=Math.floor(X*z),oe===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(ce*z,ee*z).floor()},this.setDrawingBufferSize=function(C,X,oe){ce=C,ee=X,z=oe,n.width=Math.floor(C*oe),n.height=Math.floor(X*oe),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(j)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,X,oe,ae){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,X,oe,ae),Ye.viewport(j.copy(F).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,X,oe,ae){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,X,oe,ae),Ye.scissor(ue.copy(ie).multiplyScalar(z).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(C){Ye.setScissorTest(Ie=C)},this.setOpaqueSort=function(C){pe=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(C=!0,X=!0,oe=!0){let ae=0;if(C){let Y=!1;if(O!==null){const Ce=O.texture.format;Y=Ce===uf||Ce===cf||Ce===lf}if(Y){const Ce=O.texture.type,we=Ce===Gi||Ce===$r||Ce===Go||Ce===Xs||Ce===of||Ce===af,Ve=$e.getClearColor(),He=$e.getClearAlpha(),tt=Ve.r,it=Ve.g,We=Ve.b;we?(b[0]=tt,b[1]=it,b[2]=We,b[3]=He,q.clearBufferuiv(q.COLOR,0,b)):(w[0]=tt,w[1]=it,w[2]=We,w[3]=He,q.clearBufferiv(q.COLOR,0,w))}else ae|=q.COLOR_BUFFER_BIT}X&&(ae|=q.DEPTH_BUFFER_BIT),oe&&(ae|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),Ne.dispose(),at.dispose(),Qe.dispose(),T.dispose(),W.dispose(),J.dispose(),Ct.dispose(),V.dispose(),Te.dispose(),he.dispose(),he.removeEventListener("sessionstart",ts),he.removeEventListener("sessionend",qi),Mi.stop()};function xe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const C=Mt.autoReset,X=Fe.enabled,oe=Fe.autoUpdate,ae=Fe.needsUpdate,Y=Fe.type;Pe(),Mt.autoReset=C,Fe.enabled=X,Fe.autoUpdate=oe,Fe.needsUpdate=ae,Fe.type=Y}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ot(C){const X=C.target;X.removeEventListener("dispose",ot),kt(X)}function kt(C){Xt(C),Qe.remove(C)}function Xt(C){const X=Qe.get(C).programs;X!==void 0&&(X.forEach(function(oe){Te.releaseProgram(oe)}),C.isShaderMaterial&&Te.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,oe,ae,Y,Ce){X===null&&(X=At);const we=Y.isMesh&&Y.matrixWorld.determinant()<0,Ve=Jo(C,X,oe,ae,Y);Ye.setMaterial(ae,we);let He=oe.index,tt=1;if(ae.wireframe===!0){if(He=Q.getWireframeAttribute(oe),He===void 0)return;tt=2}const it=oe.drawRange,We=oe.attributes.position;let vt=it.start*tt,wt=(it.start+it.count)*tt;Ce!==null&&(vt=Math.max(vt,Ce.start*tt),wt=Math.min(wt,(Ce.start+Ce.count)*tt)),He!==null?(vt=Math.max(vt,0),wt=Math.min(wt,He.count)):We!=null&&(vt=Math.max(vt,0),wt=Math.min(wt,We.count));const xt=wt-vt;if(xt<0||xt===1/0)return;Ct.setup(Y,ae,Ve,oe,He);let on,lt=Be;if(He!==null&&(on=L.get(He),lt=mt,lt.setIndex(on)),Y.isMesh)ae.wireframe===!0?(Ye.setLineWidth(ae.wireframeLinewidth*Nt()),lt.setMode(q.LINES)):lt.setMode(q.TRIANGLES);else if(Y.isLine){let qe=ae.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Nt()),Y.isLineSegments?lt.setMode(q.LINES):Y.isLineLoop?lt.setMode(q.LINE_LOOP):lt.setMode(q.LINE_STRIP)}else Y.isPoints?lt.setMode(q.POINTS):Y.isSprite&&lt.setMode(q.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)lt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,$n=Y._multiDrawCounts,bt=Y._multiDrawCount,an=He?L.get(He).bytesPerElement:1,ei=Qe.get(ae).currentProgram.getUniforms();for(let qt=0;qt<bt;qt++)ei.setValue(q,"_gl_DrawID",qt),lt.render(qe[qt]/an,$n[qt])}else if(Y.isInstancedMesh)lt.renderInstances(vt,xt,Y.count);else if(oe.isInstancedBufferGeometry){const qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,$n=Math.min(oe.instanceCount,qe);lt.renderInstances(vt,xt,$n)}else lt.render(vt,xt)};function yt(C,X,oe){C.transparent===!0&&C.side===zi&&C.forceSinglePass===!1?(C.side=Dn,C.needsUpdate=!0,ns(C,X,oe),C.side=br,C.needsUpdate=!0,ns(C,X,oe),C.side=zi):ns(C,X,oe)}this.compile=function(C,X,oe=null){oe===null&&(oe=C),x=at.get(oe),x.init(X),D.push(x),oe.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),C!==oe&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights();const ae=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let we=0;we<Ce.length;we++){const Ve=Ce[we];yt(Ve,oe,Y),ae.add(Ve)}else yt(Ce,oe,Y),ae.add(Ce)}),D.pop(),x=null,ae},this.compileAsync=function(C,X,oe=null){const ae=this.compile(C,X,oe);return new Promise(Y=>{function Ce(){if(ae.forEach(function(we){Qe.get(we).currentProgram.isReady()&&ae.delete(we)}),ae.size===0){Y(C);return}setTimeout(Ce,10)}ht.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let _n=null;function pn(C){_n&&_n(C)}function ts(){Mi.stop()}function qi(){Mi.start()}const Mi=new O0;Mi.setAnimationLoop(pn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(C){_n=C,he.setAnimationLoop(C),C===null?Mi.stop():Mi.start()},he.addEventListener("sessionstart",ts),he.addEventListener("sessionend",qi),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(X),X=he.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,X,O),x=at.get(C,D.length),x.init(X),D.push(x),Re.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ne.setFromProjectionMatrix(Re),Ee=this.localClippingEnabled,ge=Se.init(this.clippingPlanes,Ee),_=Ne.get(C,N.length),_.init(),N.push(_),he.enabled===!0&&he.isPresenting===!0){const Ce=R.xr.getDepthSensingMesh();Ce!==null&&bi(Ce,X,-1/0,R.sortObjects)}bi(C,X,0,R.sortObjects),_.finish(),R.sortObjects===!0&&_.sort(pe,se),pt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,pt&&$e.addToRenderList(_,C),this.info.render.frame++,ge===!0&&Se.beginShadows();const oe=x.state.shadowsArray;Fe.render(oe,C,X),ge===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=_.opaque,Y=_.transmissive;if(x.setupLights(),X.isArrayCamera){const Ce=X.cameras;if(Y.length>0)for(let we=0,Ve=Ce.length;we<Ve;we++){const He=Ce[we];Tr(ae,Y,C,He)}pt&&$e.render(C);for(let we=0,Ve=Ce.length;we<Ve;we++){const He=Ce[we];wr(_,C,He,He.viewport)}}else Y.length>0&&Tr(ae,Y,C,X),pt&&$e.render(C),wr(_,C,X);O!==null&&(k.updateMultisampleRenderTarget(O),k.updateRenderTargetMipmap(O)),C.isScene===!0&&C.onAfterRender(R,C,X),Ct.resetDefaultState(),P=-1,A=null,D.pop(),D.length>0?(x=D[D.length-1],ge===!0&&Se.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?_=N[N.length-1]:_=null};function bi(C,X,oe,ae){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ne.intersectsSprite(C)){ae&&Ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Re);const we=J.update(C),Ve=C.material;Ve.visible&&_.push(C,we,Ve,oe,Ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ne.intersectsObject(C))){const we=J.update(C),Ve=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ke.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ke.copy(we.boundingSphere.center)),Ke.applyMatrix4(C.matrixWorld).applyMatrix4(Re)),Array.isArray(Ve)){const He=we.groups;for(let tt=0,it=He.length;tt<it;tt++){const We=He[tt],vt=Ve[We.materialIndex];vt&&vt.visible&&_.push(C,we,vt,oe,Ke.z,We)}}else Ve.visible&&_.push(C,we,Ve,oe,Ke.z,null)}}const Ce=C.children;for(let we=0,Ve=Ce.length;we<Ve;we++)bi(Ce[we],X,oe,ae)}function wr(C,X,oe,ae){const Y=C.opaque,Ce=C.transmissive,we=C.transparent;x.setupLightsView(oe),ge===!0&&Se.setGlobalState(R.clippingPlanes,oe),ae&&Ye.viewport(j.copy(ae)),Y.length>0&&Yi(Y,X,oe),Ce.length>0&&Yi(Ce,X,oe),we.length>0&&Yi(we,X,oe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Tr(C,X,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ae.id]===void 0&&(x.state.transmissionRenderTarget[ae.id]=new Er(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Ks:Gi,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Ce=x.state.transmissionRenderTarget[ae.id],we=ae.viewport||j;Ce.setSize(we.z,we.w);const Ve=R.getRenderTarget();R.setRenderTarget(Ce),R.getClearColor(de),me=R.getClearAlpha(),me<1&&R.setClearColor(16777215,.5),R.clear(),pt&&$e.render(oe);const He=R.toneMapping;R.toneMapping=Mr;const tt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),x.setupLightsView(ae),ge===!0&&Se.setGlobalState(R.clippingPlanes,ae),Yi(C,oe,ae),k.updateMultisampleRenderTarget(Ce),k.updateRenderTargetMipmap(Ce),ht.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,vt=X.length;We<vt;We++){const wt=X[We],xt=wt.object,on=wt.geometry,lt=wt.material,qe=wt.group;if(lt.side===zi&&xt.layers.test(ae.layers)){const $n=lt.side;lt.side=Dn,lt.needsUpdate=!0,Ko(xt,oe,ae,on,lt,qe),lt.side=$n,lt.needsUpdate=!0,it=!0}}it===!0&&(k.updateMultisampleRenderTarget(Ce),k.updateRenderTargetMipmap(Ce))}R.setRenderTarget(Ve),R.setClearColor(de,me),tt!==void 0&&(ae.viewport=tt),R.toneMapping=He}function Yi(C,X,oe){const ae=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Ce=C.length;Y<Ce;Y++){const we=C[Y],Ve=we.object,He=we.geometry,tt=ae===null?we.material:ae,it=we.group;Ve.layers.test(oe.layers)&&Ko(Ve,X,oe,He,tt,it)}}function Ko(C,X,oe,ae,Y,Ce){C.onBeforeRender(R,X,oe,ae,Y,Ce),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(R,X,oe,ae,C,Ce),Y.transparent===!0&&Y.side===zi&&Y.forceSinglePass===!1?(Y.side=Dn,Y.needsUpdate=!0,R.renderBufferDirect(oe,X,ae,Y,C,Ce),Y.side=br,Y.needsUpdate=!0,R.renderBufferDirect(oe,X,ae,Y,C,Ce),Y.side=zi):R.renderBufferDirect(oe,X,ae,Y,C,Ce),C.onAfterRender(R,X,oe,ae,Y,Ce)}function ns(C,X,oe){X.isScene!==!0&&(X=At);const ae=Qe.get(C),Y=x.state.lights,Ce=x.state.shadowsArray,we=Y.state.version,Ve=Te.getParameters(C,Y.state,Ce,X,oe),He=Te.getProgramCacheKey(Ve);let tt=ae.programs;ae.environment=C.isMeshStandardMaterial?X.environment:null,ae.fog=X.fog,ae.envMap=(C.isMeshStandardMaterial?W:T).get(C.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",ot),tt=new Map,ae.programs=tt);let it=tt.get(He);if(it!==void 0){if(ae.currentProgram===it&&ae.lightsStateVersion===we)return pi(C,Ve),it}else Ve.uniforms=Te.getUniforms(C),C.onBeforeCompile(Ve,R),it=Te.acquireProgram(Ve,He),tt.set(He,it),ae.uniforms=Ve.uniforms;const We=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=Se.uniform),pi(C,Ve),ae.needsLights=Wl(C),ae.lightsStateVersion=we,ae.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMap.value=Y.state.directionalShadowMap,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotShadowMap.value=Y.state.spotShadowMap,We.spotLightMatrix.value=Y.state.spotLightMatrix,We.spotLightMap.value=Y.state.spotLightMap,We.pointShadowMap.value=Y.state.pointShadowMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix),ae.currentProgram=it,ae.uniformsList=null,it}function Zo(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Ul.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function pi(C,X){const oe=Qe.get(C);oe.outputColorSpace=X.outputColorSpace,oe.batching=X.batching,oe.batchingColor=X.batchingColor,oe.instancing=X.instancing,oe.instancingColor=X.instancingColor,oe.instancingMorph=X.instancingMorph,oe.skinning=X.skinning,oe.morphTargets=X.morphTargets,oe.morphNormals=X.morphNormals,oe.morphColors=X.morphColors,oe.morphTargetsCount=X.morphTargetsCount,oe.numClippingPlanes=X.numClippingPlanes,oe.numIntersection=X.numClipIntersection,oe.vertexAlphas=X.vertexAlphas,oe.vertexTangents=X.vertexTangents,oe.toneMapping=X.toneMapping}function Jo(C,X,oe,ae,Y){X.isScene!==!0&&(X=At),k.resetTextureUnits();const Ce=X.fog,we=ae.isMeshStandardMaterial?X.environment:null,Ve=O===null?R.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Zs,He=(ae.isMeshStandardMaterial?W:T).get(ae.envMap||we),tt=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,it=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),We=!!oe.morphAttributes.position,vt=!!oe.morphAttributes.normal,wt=!!oe.morphAttributes.color;let xt=Mr;ae.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(xt=R.toneMapping);const on=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,lt=on!==void 0?on.length:0,qe=Qe.get(ae),$n=x.state.lights;if(ge===!0&&(Ee===!0||C!==A)){const mn=C===A&&ae.id===P;Se.setState(ae,C,mn)}let bt=!1;ae.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==$n.state.version||qe.outputColorSpace!==Ve||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==He||ae.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==it||qe.morphTargets!==We||qe.morphNormals!==vt||qe.morphColors!==wt||qe.toneMapping!==xt||qe.morphTargetsCount!==lt)&&(bt=!0):(bt=!0,qe.__version=ae.version);let an=qe.currentProgram;bt===!0&&(an=ns(ae,X,Y));let ei=!1,qt=!1,mi=!1;const Dt=an.getUniforms(),jn=qe.uniforms;if(Ye.useProgram(an.program)&&(ei=!0,qt=!0,mi=!0),ae.id!==P&&(P=ae.id,qt=!0),ei||A!==C){Ye.buffers.depth.getReversed()?(_e.copy(C.projectionMatrix),ry(_e),sy(_e),Dt.setValue(q,"projectionMatrix",_e)):Dt.setValue(q,"projectionMatrix",C.projectionMatrix),Dt.setValue(q,"viewMatrix",C.matrixWorldInverse);const Hn=Dt.map.cameraPosition;Hn!==void 0&&Hn.setValue(q,Oe.setFromMatrixPosition(C.matrixWorld)),dt.logarithmicDepthBuffer&&Dt.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Dt.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,qt=!0,mi=!0)}if(Y.isSkinnedMesh){Dt.setOptional(q,Y,"bindMatrix"),Dt.setOptional(q,Y,"bindMatrixInverse");const mn=Y.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Dt.setValue(q,"boneTexture",mn.boneTexture,k))}Y.isBatchedMesh&&(Dt.setOptional(q,Y,"batchingTexture"),Dt.setValue(q,"batchingTexture",Y._matricesTexture,k),Dt.setOptional(q,Y,"batchingIdTexture"),Dt.setValue(q,"batchingIdTexture",Y._indirectTexture,k),Dt.setOptional(q,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Dt.setValue(q,"batchingColorTexture",Y._colorsTexture,k));const Ei=oe.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&et.update(Y,oe,an),(qt||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Dt.setValue(q,"receiveShadow",Y.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(jn.envMap.value=He,jn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&X.environment!==null&&(jn.envMapIntensity.value=X.environmentIntensity),qt&&(Dt.setValue(q,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&$o(jn,mi),Ce&&ae.fog===!0&&Me.refreshFogUniforms(jn,Ce),Me.refreshMaterialUniforms(jn,ae,z,ee,x.state.transmissionRenderTarget[C.id]),Ul.upload(q,Zo(qe),jn,k)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Ul.upload(q,Zo(qe),jn,k),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Dt.setValue(q,"center",Y.center),Dt.setValue(q,"modelViewMatrix",Y.modelViewMatrix),Dt.setValue(q,"normalMatrix",Y.normalMatrix),Dt.setValue(q,"modelMatrix",Y.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const mn=ae.uniformsGroups;for(let Hn=0,Sn=mn.length;Hn<Sn;Hn++){const ea=mn[Hn];V.update(ea,an),V.bind(ea,an)}}return an}function $o(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Wl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,X,oe){Qe.get(C.texture).__webglTexture=X,Qe.get(C.depthTexture).__webglTexture=oe;const ae=Qe.get(C);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=oe===void 0,ae.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const oe=Qe.get(C);oe.__webglFramebuffer=X,oe.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,oe=0){O=C,B=X,U=oe;let ae=!0,Y=null,Ce=!1,we=!1;if(C){const He=Qe.get(C);if(He.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(q.FRAMEBUFFER,null),ae=!1;else if(He.__webglFramebuffer===void 0)k.setupRenderTarget(C);else if(He.__hasExternalTextures)k.rebindTextures(C,Qe.get(C.texture).__webglTexture,Qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const We=C.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&Qe.has(We)&&(C.width!==We.image.width||C.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(we=!0);const it=Qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[X])?Y=it[X][oe]:Y=it[X],Ce=!0):C.samples>0&&k.useMultisampledRTT(C)===!1?Y=Qe.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?Y=it[oe]:Y=it,j.copy(C.viewport),ue.copy(C.scissor),Z=C.scissorTest}else j.copy(F).multiplyScalar(z).floor(),ue.copy(ie).multiplyScalar(z).floor(),Z=Ie;if(Ye.bindFramebuffer(q.FRAMEBUFFER,Y)&&ae&&Ye.drawBuffers(C,Y),Ye.viewport(j),Ye.scissor(ue),Ye.setScissorTest(Z),Ce){const He=Qe.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,He.__webglTexture,oe)}else if(we){const He=Qe.get(C.texture),tt=X||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,He.__webglTexture,oe||0,tt)}P=-1},this.readRenderTargetPixels=function(C,X,oe,ae,Y,Ce,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ve=Ve[we]),Ve){Ye.bindFramebuffer(q.FRAMEBUFFER,Ve);try{const He=C.texture,tt=He.format,it=He.type;if(!dt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ae&&oe>=0&&oe<=C.height-Y&&q.readPixels(X,oe,ae,Y,st.convert(tt),st.convert(it),Ce)}finally{const He=O!==null?Qe.get(O).__webglFramebuffer:null;Ye.bindFramebuffer(q.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(C,X,oe,ae,Y,Ce,we){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ve=Ve[we]),Ve){const He=C.texture,tt=He.format,it=He.type;if(!dt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-ae&&oe>=0&&oe<=C.height-Y){Ye.bindFramebuffer(q.FRAMEBUFFER,Ve);const We=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,We),q.bufferData(q.PIXEL_PACK_BUFFER,Ce.byteLength,q.STREAM_READ),q.readPixels(X,oe,ae,Y,st.convert(tt),st.convert(it),0);const vt=O!==null?Qe.get(O).__webglFramebuffer:null;Ye.bindFramebuffer(q.FRAMEBUFFER,vt);const wt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await iy(q,wt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,We),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ce),q.deleteBuffer(We),q.deleteSync(wt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,oe=0){C.isTexture!==!0&&(zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const ae=Math.pow(2,-oe),Y=Math.floor(C.image.width*ae),Ce=Math.floor(C.image.height*ae),we=X!==null?X.x:0,Ve=X!==null?X.y:0;k.setTexture2D(C,0),q.copyTexSubImage2D(q.TEXTURE_2D,oe,0,0,we,Ve,Y,Ce),Ye.unbindTexture()},this.copyTextureToTexture=function(C,X,oe=null,ae=null,Y=0){C.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,C=arguments[1],X=arguments[2],Y=arguments[3]||0,oe=null);let Ce,we,Ve,He,tt,it,We,vt,wt;const xt=C.isCompressedTexture?C.mipmaps[Y]:C.image;oe!==null?(Ce=oe.max.x-oe.min.x,we=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,He=oe.min.x,tt=oe.min.y,it=oe.isBox3?oe.min.z:0):(Ce=xt.width,we=xt.height,Ve=xt.depth||1,He=0,tt=0,it=0),ae!==null?(We=ae.x,vt=ae.y,wt=ae.z):(We=0,vt=0,wt=0);const on=st.convert(X.format),lt=st.convert(X.type);let qe;X.isData3DTexture?(k.setTexture3D(X,0),qe=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(k.setTexture2DArray(X,0),qe=q.TEXTURE_2D_ARRAY):(k.setTexture2D(X,0),qe=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);const $n=q.getParameter(q.UNPACK_ROW_LENGTH),bt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),an=q.getParameter(q.UNPACK_SKIP_PIXELS),ei=q.getParameter(q.UNPACK_SKIP_ROWS),qt=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,xt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,He),q.pixelStorei(q.UNPACK_SKIP_ROWS,tt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,it);const mi=C.isDataArrayTexture||C.isData3DTexture,Dt=X.isDataArrayTexture||X.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const jn=Qe.get(C),Ei=Qe.get(X),mn=Qe.get(jn.__renderTarget),Hn=Qe.get(Ei.__renderTarget);Ye.bindFramebuffer(q.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ye.bindFramebuffer(q.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Sn=0;Sn<Ve;Sn++)mi&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Qe.get(C).__webglTexture,Y,it+Sn),C.isDepthTexture?(Dt&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Qe.get(X).__webglTexture,Y,wt+Sn),q.blitFramebuffer(He,tt,Ce,we,We,vt,Ce,we,q.DEPTH_BUFFER_BIT,q.NEAREST)):Dt?q.copyTexSubImage3D(qe,Y,We,vt,wt+Sn,He,tt,Ce,we):q.copyTexSubImage2D(qe,Y,We,vt,wt+Sn,He,tt,Ce,we);Ye.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Dt?C.isDataTexture||C.isData3DTexture?q.texSubImage3D(qe,Y,We,vt,wt,Ce,we,Ve,on,lt,xt.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(qe,Y,We,vt,wt,Ce,we,Ve,on,xt.data):q.texSubImage3D(qe,Y,We,vt,wt,Ce,we,Ve,on,lt,xt):C.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Y,We,vt,Ce,we,on,lt,xt.data):C.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Y,We,vt,xt.width,xt.height,on,xt.data):q.texSubImage2D(q.TEXTURE_2D,Y,We,vt,Ce,we,on,lt,xt);q.pixelStorei(q.UNPACK_ROW_LENGTH,$n),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,bt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,an),q.pixelStorei(q.UNPACK_SKIP_ROWS,ei),q.pixelStorei(q.UNPACK_SKIP_IMAGES,qt),Y===0&&X.generateMipmaps&&q.generateMipmap(qe),Ye.unbindTexture()},this.copyTextureToTexture3D=function(C,X,oe=null,ae=null,Y=0){return C.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ae=arguments[1]||null,C=arguments[2],X=arguments[3],Y=arguments[4]||0),zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,oe,ae,Y)},this.initRenderTarget=function(C){Qe.get(C).__webglFramebuffer===void 0&&k.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?k.setTextureCube(C,0):C.isData3DTexture?k.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?k.setTexture2DArray(C,0):k.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){B=0,U=0,O=null,Ye.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}class Wm extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class gb extends yn{constructor(e=null,n=1,r=1,a,l,f,d,p,m=Bn,v=Bn,y,S){super(null,f,d,p,m,v,a,l,y,S),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xb extends Yo{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zl=new le,Bl=new le,Xm=new Gt,Fo=new C0,El=new Gl,ad=new le,qm=new le;class vb extends Ln{constructor(e=new Xi,n=new xb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)zl.fromBufferAttribute(n,a-1),Bl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=zl.distanceTo(Bl);e.setAttribute("lineDistance",new Hi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(a),El.radius+=l,e.ray.intersectsSphere(El)===!1)return;Xm.copy(a).invert(),Fo.copy(e.ray).applyMatrix4(Xm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=r.index,S=r.attributes.position;if(v!==null){const M=Math.max(0,f.start),b=Math.min(v.count,f.start+f.count);for(let w=M,_=b-1;w<_;w+=m){const x=v.getX(w),N=v.getX(w+1),D=wl(this,e,Fo,p,x,N);D&&n.push(D)}if(this.isLineLoop){const w=v.getX(b-1),_=v.getX(M),x=wl(this,e,Fo,p,w,_);x&&n.push(x)}}else{const M=Math.max(0,f.start),b=Math.min(S.count,f.start+f.count);for(let w=M,_=b-1;w<_;w+=m){const x=wl(this,e,Fo,p,w,w+1);x&&n.push(x)}if(this.isLineLoop){const w=wl(this,e,Fo,p,b-1,M);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function wl(s,e,n,r,a,l){const f=s.geometry.attributes.position;if(zl.fromBufferAttribute(f,a),Bl.fromBufferAttribute(f,l),n.distanceSqToSegment(zl,Bl,ad,qm)>r)return;ad.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(ad);if(!(p<e.near||p>e.far))return{distance:p,point:qm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Ym=new le,Qm=new le;class yb extends vb{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,l=n.count;a<l;a+=2)Ym.fromBufferAttribute(n,a),Qm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Ym.distanceTo(Qm);e.setAttribute("lineDistance",new Hi(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tl extends Wi{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class _b{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Km(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Km();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Km(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);function Sb({mouseForce:s=20,cursorSize:e=100,isViscous:n=!1,viscous:r=30,iterationsViscous:a=32,iterationsPoisson:l=32,dt:f=.014,BFECC:d=!0,resolution:p=.5,isBounce:m=!1,colors:v=["#5227FF","#FF9FFC","#B497CF"],style:y={},className:S="",autoDemo:M=!0,autoSpeed:b=.5,autoIntensity:w=2.2,takeoverDuration:_=.25,autoResumeDelay:x=1e3,autoRampDuration:N=.6}){const D=fe.useRef(null),R=fe.useRef(null),K=fe.useRef(null),B=fe.useRef(null),U=fe.useRef(null),O=fe.useRef(!0),P=fe.useRef(null);return fe.useEffect(()=>{if(!D.current)return;function A(W){let L;Array.isArray(W)&&W.length>0?W.length===1?L=[W[0],W[0]]:L=W:L=["#ffffff","#ffffff"];const Q=L.length,J=new Uint8Array(Q*4);for(let Me=0;Me<Q;Me++){const Ne=new Tt(L[Me]);J[Me*4+0]=Math.round(Ne.r*255),J[Me*4+1]=Math.round(Ne.g*255),J[Me*4+2]=Math.round(Ne.b*255),J[Me*4+3]=255}const Te=new gb(J,Q,1,Zn);return Te.magFilter=Pn,Te.minFilter=Pn,Te.wrapS=fi,Te.wrapT=fi,Te.generateMipmaps=!1,Te.needsUpdate=!0,Te}const j=A(v),ue=new jt(0,0,0,0);class Z{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(L){this.container=L,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new mb({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Tt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new _b,this.clock.start()}resize(){if(!this.container)return;const L=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(L.width)),this.height=Math.max(1,Math.floor(L.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const de=new Z;class me{constructor(){this.mouseMoved=!1,this.coords=new ct,this.coords_old=new ct,this.diff=new ct,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ct,this.takeoverTo=new ct,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(L){this.container=L,this.docTarget=L.ownerDocument||null;const Q=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);Q&&(this.listenerTarget=Q,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(L,Q){if(!this.container)return!1;const J=this.container.getBoundingClientRect();return J.width===0||J.height===0?!1:L>=J.left&&L<=J.right&&Q>=J.top&&Q<=J.bottom}updateHoverState(L,Q){return this.isHoverInside=this.isPointInside(L,Q),this.isHoverInside}setCoords(L,Q){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const J=this.container.getBoundingClientRect();if(J.width===0||J.height===0)return;const Te=(L-J.left)/J.width,Me=(Q-J.top)/J.height;this.coords.set(Te*2-1,-(Me*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(L,Q){this.coords.set(L,Q),this.mouseMoved=!0}onDocumentMouseMove(L){if(this.updateHoverState(L.clientX,L.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const Q=this.container.getBoundingClientRect();if(Q.width===0||Q.height===0)return;const J=(L.clientX-Q.left)/Q.width,Te=(L.clientY-Q.top)/Q.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(J*2-1,-(Te*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(L.clientX,L.clientY),this.hasUserControl=!0}}onDocumentTouchStart(L){if(L.touches.length!==1)return;const Q=L.touches[0];this.updateHoverState(Q.clientX,Q.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Q.clientX,Q.clientY),this.hasUserControl=!0)}onDocumentTouchMove(L){if(L.touches.length!==1)return;const Q=L.touches[0];this.updateHoverState(Q.clientX,Q.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Q.clientX,Q.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const L=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(L>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const Q=L*L*(3-2*L);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,Q)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const ce=new me;class ee{constructor(L,Q,J){this.mouse=L,this.manager=Q,this.enabled=J.enabled,this.speed=J.speed,this.resumeDelay=J.resumeDelay||3e3,this.rampDurationMs=(J.rampDuration||0)*1e3,this.active=!1,this.current=new ct(0,0),this.target=new ct,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ct,this.pickNewTarget()}pickNewTarget(){const L=Math.random;this.target.set((L()*2-1)*(1-this.margin),(L()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const L=performance.now();if(L-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=L,this.activationTime=L),!this.active)return;this.mouse.isAutoActive=!0;let J=(L-this.lastTime)/1e3;this.lastTime=L,J>.2&&(J=.016);const Te=this._tmpDir.subVectors(this.target,this.current),Me=Te.length();if(Me<.01){this.pickNewTarget();return}Te.normalize();let Ne=1;if(this.rampDurationMs>0){const Fe=Math.min(1,(L-this.activationTime)/this.rampDurationMs);Ne=Fe*Fe*(3-2*Fe)}const at=this.speed*J*Ne,Se=Math.min(at,Me);this.current.addScaledVector(Te,Se),this.mouse.setNormalized(this.current.x,this.current.y)}}const z=`
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
`,pe=`
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
`,se=`
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
`,F=`
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
`,ie=`
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
`,Ie=`
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
`,ne=`
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
`,Ee=`
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
`,_e=`
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
`;class Re{constructor(L){var Q;this.props=L||{},this.uniforms=(Q=this.props.material)==null?void 0:Q.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Wm,this.camera=new Fl,this.uniforms&&(this.material=new Tl(this.props.material),this.geometry=new Zr(2,2),this.plane=new Jn(this.geometry,this.material),this.scene.add(this.plane))}update(){de.renderer.setRenderTarget(this.props.output||null),de.renderer.render(this.scene,this.camera),de.renderer.setRenderTarget(null)}}class Oe extends Re{constructor(L){super({material:{vertexShader:z,fragmentShader:F,uniforms:{boundarySpace:{value:L.cellScale},px:{value:L.cellScale},fboSize:{value:L.fboSize},velocity:{value:L.src.texture},dt:{value:L.dt},isBFECC:{value:!0}}},output:L.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const L=new Xi,Q=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);L.setAttribute("position",new hi(Q,3));const J=new Tl({vertexShader:pe,fragmentShader:F,uniforms:this.uniforms});this.line=new yb(L,J),this.scene.add(this.line)}update({dt:L,isBounce:Q,BFECC:J}){this.uniforms.dt.value=L,this.line.visible=Q,this.uniforms.isBFECC.value=J,super.update()}}class Ke extends Re{constructor(L){super({output:L.dst}),this.init(L)}init(L){super.init();const Q=new Zr(1,1),J=new Tl({vertexShader:se,fragmentShader:ne,blending:dd,depthWrite:!1,uniforms:{px:{value:L.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(L.cursor_size,L.cursor_size)}}});this.mouse=new Jn(Q,J),this.scene.add(this.mouse)}update(L){const Q=ce.diff.x/2*L.mouse_force,J=ce.diff.y/2*L.mouse_force,Te=L.cursor_size*L.cellScale.x,Me=L.cursor_size*L.cellScale.y,Ne=Math.min(Math.max(ce.coords.x,-1+Te+L.cellScale.x*2),1-Te-L.cellScale.x*2),at=Math.min(Math.max(ce.coords.y,-1+Me+L.cellScale.y*2),1-Me-L.cellScale.y*2),Se=this.mouse.material.uniforms;Se.force.value.set(Q,J),Se.center.value.set(Ne,at),Se.scale.value.set(L.cursor_size,L.cursor_size),super.update()}}class At extends Re{constructor(L){super({material:{vertexShader:z,fragmentShader:_e,uniforms:{boundarySpace:{value:L.boundarySpace},velocity:{value:L.src.texture},velocity_new:{value:L.dst_.texture},v:{value:L.viscous},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst,output0:L.dst_,output1:L.dst}),this.init()}update({viscous:L,iterations:Q,dt:J}){let Te,Me;this.uniforms.v.value=L;for(let Ne=0;Ne<Q;Ne++)Ne%2===0?(Te=this.props.output0,Me=this.props.output1):(Te=this.props.output1,Me=this.props.output0),this.uniforms.velocity_new.value=Te.texture,this.props.output=Me,this.uniforms.dt.value=J,super.update();return Me}}class pt extends Re{constructor(L){super({material:{vertexShader:z,fragmentShader:Ie,uniforms:{boundarySpace:{value:L.boundarySpace},velocity:{value:L.src.texture},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst}),this.init()}update({vel:L}){this.uniforms.velocity.value=L.texture,super.update()}}class Nt extends Re{constructor(L){super({material:{vertexShader:z,fragmentShader:ge,uniforms:{boundarySpace:{value:L.boundarySpace},pressure:{value:L.dst_.texture},divergence:{value:L.src.texture},px:{value:L.cellScale}}},output:L.dst,output0:L.dst_,output1:L.dst}),this.init()}update({iterations:L}){let Q,J;for(let Te=0;Te<L;Te++)Te%2===0?(Q=this.props.output0,J=this.props.output1):(Q=this.props.output1,J=this.props.output0),this.uniforms.pressure.value=Q.texture,this.props.output=J,super.update();return J}}class q extends Re{constructor(L){super({material:{vertexShader:z,fragmentShader:Ee,uniforms:{boundarySpace:{value:L.boundarySpace},pressure:{value:L.src_p.texture},velocity:{value:L.src_v.texture},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst}),this.init()}update({vel:L,pressure:Q}){this.uniforms.velocity.value=L.texture,this.uniforms.pressure.value=Q.texture,super.update()}}class nn{constructor(L){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...L},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ct,this.cellScale=new ct,this.boundarySpace=new ct,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ks:Si}createAllFBO(){const Q={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Pn,magFilter:Pn,wrapS:fi,wrapT:fi};for(let J in this.fbos)this.fbos[J]=new Er(this.fboSize.x,this.fboSize.y,Q)}createShaderPass(){this.advection=new Oe({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ke({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new At({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Nt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new q({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const L=Math.max(1,Math.round(this.options.resolution*de.width)),Q=Math.max(1,Math.round(this.options.resolution*de.height)),J=1/L,Te=1/Q;this.cellScale.set(J,Te),this.fboSize.set(L,Q)}resize(){this.calcSize();for(let L in this.fbos)this.fbos[L].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let L=this.fbos.vel_1;this.options.isViscous&&(L=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:L});const Q=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:L,pressure:Q})}}class ht{constructor(){this.init()}init(){this.simulation=new nn,this.scene=new Wm,this.camera=new Fl,this.output=new Jn(new Zr(2,2),new Tl({vertexShader:z,fragmentShader:ie,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:j},bgColor:{value:ue}}})),this.scene.add(this.output)}addScene(L){this.scene.add(L)}resize(){this.simulation.resize()}render(){de.renderer.setRenderTarget(null),de.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class dt{constructor(L){this.props=L,de.init(L.$wrapper),ce.init(L.$wrapper),ce.autoIntensity=L.autoIntensity,ce.takeoverDuration=L.takeoverDuration,this.lastUserInteraction=performance.now(),ce.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new ee(ce,this,{enabled:L.autoDemo,speed:L.autoSpeed,resumeDelay:L.autoResumeDelay,rampDuration:L.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():O.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(de.renderer.domElement),this.output=new ht}resize(){de.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),ce.update(),de.update(),this.output.update()}loop(){this.running&&(this.render(),B.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,B.current&&(cancelAnimationFrame(B.current),B.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),ce.dispose(),de.renderer){const L=de.renderer.domElement;L&&L.parentNode&&L.parentNode.removeChild(L),de.renderer.dispose(),de.renderer.forceContextLoss()}}catch{}}}const Ye=D.current;Ye.style.overflow="hidden";const Mt=new dt({$wrapper:Ye,autoDemo:M,autoSpeed:b,autoIntensity:w,takeoverDuration:_,autoResumeDelay:x,autoRampDuration:N});R.current=Mt,(()=>{var Q;if(!R.current)return;const W=(Q=R.current.output)==null?void 0:Q.simulation;if(!W)return;const L=W.options.resolution;Object.assign(W.options,{mouse_force:s,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:l,dt:f,BFECC:d,resolution:p,isBounce:m}),p!==L&&W.resize()})(),Mt.start();const k=new IntersectionObserver(W=>{const L=W[0],Q=L.isIntersecting&&L.intersectionRatio>0;O.current=Q,R.current&&(Q&&!document.hidden?R.current.start():R.current.pause())},{threshold:[0,.01,.1]});k.observe(Ye),U.current=k;const T=new ResizeObserver(()=>{R.current&&(P.current&&cancelAnimationFrame(P.current),P.current=requestAnimationFrame(()=>{R.current&&R.current.resize()}))});return T.observe(Ye),K.current=T,()=>{if(B.current&&cancelAnimationFrame(B.current),K.current)try{K.current.disconnect()}catch{}if(U.current)try{U.current.disconnect()}catch{}R.current&&R.current.dispose(),R.current=null}},[d,e,f,m,n,l,a,s,p,r,v,M,b,w,_,x,N]),fe.useEffect(()=>{var Z;const A=R.current;if(!A)return;const j=(Z=A.output)==null?void 0:Z.simulation;if(!j)return;const ue=j.options.resolution;Object.assign(j.options,{mouse_force:s,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:l,dt:f,BFECC:d,resolution:p,isBounce:m}),A.autoDriver&&(A.autoDriver.enabled=M,A.autoDriver.speed=b,A.autoDriver.resumeDelay=x,A.autoDriver.rampDurationMs=N*1e3,A.autoDriver.mouse&&(A.autoDriver.mouse.autoIntensity=w,A.autoDriver.mouse.takeoverDuration=_)),p!==ue&&j.resize()},[s,e,n,r,a,l,f,d,p,m,M,b,w,_,x,N]),u.jsx("div",{ref:D,className:`absolute inset-0 w-full h-full overflow-hidden pointer-events-none touch-none ${S||""}`,style:{zIndex:0,...y}})}const Mb="/assets/banner1-BG0oYDz9.png",bb="/assets/banner2-Vp_hA9KB.png",Eb="/assets/banner3-DBVxfFnq.png",wb="/assets/banner4-WkPebPYJ.png",Tb="/assets/banner5-CtcdqOYe.png";function Ab(){const s=fe.useRef(null),e=fe.useRef({x:-999,y:-999});return fe.useEffect(()=>{const n=s.current,r=n.getContext("2d");let a=0,l=0,f=0,d=[];const p=()=>{a=n.offsetWidth,l=n.offsetHeight,n.width=a*devicePixelRatio,n.height=l*devicePixelRatio,r.scale(devicePixelRatio,devicePixelRatio);const b=Math.floor(a*l/9e3);d=Array.from({length:Math.min(b,110)},()=>({x:Math.random()*a,y:Math.random()*l,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:Math.random()*1.6+.4,opacity:Math.random()*.6+.2}))},m=140,v=()=>{r.clearRect(0,0,a,l),d.forEach(b=>{b.x+=b.vx,b.y+=b.vy,(b.x<0||b.x>a)&&(b.vx*=-1),(b.y<0||b.y>l)&&(b.vy*=-1);const w=b.x-e.current.x,_=b.y-e.current.y,x=Math.sqrt(w*w+_*_);if(x<100){const D=(100-x)/100;b.x+=w*D*.025,b.y+=_*D*.025}const N=x<80;r.beginPath(),r.arc(b.x,b.y,N?b.r*2:b.r,0,Math.PI*2),r.fillStyle=N?`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${b.opacity*1.8})`:`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${b.opacity*.6})`,r.fill()});for(let b=0;b<d.length;b++)for(let w=b+1;w<d.length;w++){const _=d[b].x-d[w].x,x=d[b].y-d[w].y,N=Math.sqrt(_*_+x*x);if(N<m){const D=(1-N/m)*.25;r.beginPath(),r.moveTo(d[b].x,d[b].y),r.lineTo(d[w].x,d[w].y),r.strokeStyle=`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${D})`,r.lineWidth=.7,r.stroke()}}d.forEach(b=>{const w=b.x-e.current.x,_=b.y-e.current.y,x=Math.sqrt(w*w+_*_);if(x<130){const N=(1-x/130)*.5;r.beginPath(),r.moveTo(b.x,b.y),r.lineTo(e.current.x,e.current.y),r.strokeStyle=`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${N})`,r.lineWidth=.6,r.stroke()}}),f=requestAnimationFrame(v)};p(),v();const y=b=>{const w=n.getBoundingClientRect();e.current={x:b.clientX-w.left,y:b.clientY-w.top}},S=()=>{e.current={x:-999,y:-999}};window.addEventListener("mousemove",y),n.addEventListener("mouseleave",S);const M=new ResizeObserver(p);return M.observe(n),()=>{cancelAnimationFrame(f),window.removeEventListener("mousemove",y),n.removeEventListener("mouseleave",S),M.disconnect()}},[]),u.jsx("canvas",{ref:s,className:"absolute inset-0 w-full h-full pointer-events-none z-5"})}function Cb({words:s}){const[e,n]=fe.useState(0),[r,a]=fe.useState(""),[l,f]=fe.useState(!1);return fe.useEffect(()=>{const d=s[e%s.length];if(!l&&r===d){const v=setTimeout(()=>f(!0),2e3);return()=>clearTimeout(v)}if(l&&r===""){f(!1),n(v=>v+1);return}const m=setTimeout(()=>{a(l?d.slice(0,r.length-1):d.slice(0,r.length+1))},l?50:90);return()=>clearTimeout(m)},[r,l,e,s]),u.jsxs("span",{style:{color:"rgb(var(--c1))"},children:[r,u.jsx("span",{className:"animate-pulse",style:{color:"rgb(var(--c1))",marginLeft:2},children:"|"})]})}function Rb({target:s,suffix:e=""}){const[n,r]=fe.useState(0),a=fe.useRef(null);return fe.useEffect(()=>{const l=new IntersectionObserver(([f])=>{if(f.isIntersecting){let d=0;const p=s/60,m=setInterval(()=>{d=Math.min(d+p,s),r(Math.floor(d)),d>=s&&clearInterval(m)},20);l.disconnect()}},{threshold:.5});return a.current&&l.observe(a.current),()=>l.disconnect()},[s]),u.jsxs("span",{ref:a,children:[n,e]})}function Nb(){const s=fe.useRef(null),[e,n]=fe.useState(0),[r,a]=fe.useState(!1),[l,f]=fe.useState(!1),[d,p]=fe.useState({}),[m,v]=fe.useState(!1);fe.useEffect(()=>{const D=()=>v(window.innerWidth<=640);return D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[]);const y=[{img:Mb,label:"Design Systems",accent:"#7c6ff7",accentBg:"rgba(124,111,247,0.12)",accentBorder:"rgba(124,111,247,0.28)",Icon:o0},{img:bb,label:"团队分享会-设计赋能",accent:"#FE952C",accentBg:"rgba(254, 149, 44, 0.12)",accentBorder:"rgba(254, 149, 44, 0.30)",Icon:zv},{img:Eb,label:"设计复盘",accent:"#456CFF",accentBg:"rgba(69, 108, 255, 0.12)",accentBorder:"rgba(69, 108, 255, 0.30)",Icon:gv},{img:wb,label:"设计扩展",accent:"#f472b6",accentBg:"rgba(244,114,182,0.12)",accentBorder:"rgba(244,114,182,0.28)",Icon:c0},{img:Tb,label:"设计获奖",accent:"#FFEB12",accentBg:"rgba(255,235,18,0.12)",accentBorder:"rgba(255,235,18,0.28)",Icon:Zv}],S=N=>{l||N===e||(f(!0),setTimeout(()=>{n(N),f(!1)},350))};fe.useEffect(()=>{if(r)return;const N=setInterval(()=>{f(!0),setTimeout(()=>{n(D=>(D+1)%y.length),f(!1)},320)},3800);return()=>clearInterval(N)},[r,y.length]);const M=N=>{const D=s.current.getBoundingClientRect(),R=(N.clientX-D.left)/D.width-.5,K=(N.clientY-D.top)/D.height-.5;s.current.style.transform=`perspective(900px) rotateY(${R*12}deg) rotateX(${-K*10}deg) scale3d(1.02,1.02,1.02)`},b=()=>{s.current&&(s.current.style.transform="perspective(900px) rotateY(0) rotateX(0) scale3d(1,1,1)"),a(!1)},w=y[e],_=w.Icon,x=m?"16/9":"16/10";return u.jsxs("div",{ref:s,onMouseMove:M,onMouseEnter:()=>a(!0),onMouseLeave:b,className:"relative rounded-2xl overflow-hidden cursor-pointer w-full !min-w-0 aspect-[16/10] md:aspect-[16/9] sm:aspect-[1/1]",style:{transition:"transform 0.15s ease-out",transformStyle:"preserve-3d",boxShadow:"0 0 60px rgba(0,240,200,0.1), 0 30px 80px rgba(0,0,0,0.5)",border:"1px solid rgba(0,240,200,0.12)",background:"rgba(255,255,255,0.02)",width:"100%",maxWidth:"800px",margin:"0 auto",aspectRatio:x,isolation:"isolate",clipPath:"inset(0 round 16px)"},children:[y.map((N,D)=>u.jsx("div",{className:"absolute inset-0 w-full h-full",style:{opacity:D===e?l?0:1:0,transition:"opacity 0.3s ease"},children:d[D]?u.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-8",style:{background:`linear-gradient(135deg, ${N.accent}18 0%, #05050a 100%)`},children:[u.jsx("p",{className:"text-sm text-center",style:{color:"rgba(255,255,255,0.5)"},children:"图片加载失败"}),u.jsx("p",{className:"text-xs text-center mt-2",style:{color:"rgba(255,255,255,0.35)"},children:"请换个 WiFi 或使用自己的热点"})]}):u.jsx("img",{src:N.img,alt:N.label,className:"absolute inset-0 w-full h-full object-cover",onError:()=>{p(R=>({...R,[D]:!0}))}})},D)),u.jsx("div",{className:"absolute inset-0 z-10 cursor-pointer",onClick:N=>{if(l)return;const D=N.currentTarget.getBoundingClientRect(),K=N.clientX-D.left<D.width/2;S(K?(e-1+y.length)%y.length:(e+1)%y.length)},style:{background:"linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(0,240,200,0.04) 100%)"}}),!m&&u.jsx("div",{className:"absolute top-0 left-0 right-0 z-20 flex items-center gap-2 px-4 py-3",style:{background:"rgba(0,0,0,0.28)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderBottom:"1px solid rgba(255,255,255,0.07)"},children:["#ff5f56","#ffbd2e","#27c93f"].map(N=>u.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:N,opacity:.85}},N))}),u.jsxs("div",{className:`absolute bottom-0 left-0 right-0 z-20 flex items-center ${m?"justify-center":"justify-between"} px-3.5 py-2.5`,style:{background:"rgba(0,0,0,0.28)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderTop:"1px solid rgba(255,255,255,0.07)"},children:[!m&&u.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg",style:{background:w.accentBg,border:`1px solid ${w.accentBorder}`,transition:"background 0.4s, border 0.4s"},children:[u.jsx(_,{size:12,style:{color:w.accent}}),u.jsx("span",{className:"text-xs",style:{color:w.accent,fontWeight:600},children:w.label})]}),u.jsx("div",{className:"flex items-center gap-2",children:y.map((N,D)=>u.jsx("button",{onClick:()=>S(D),className:"relative overflow-hidden",style:{width:D===e?26:6,height:6,borderRadius:9999,background:D===e?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.3)",border:"none",padding:0,transition:"width 0.35s ease, background 0.35s ease",cursor:"pointer"},children:D===e&&u.jsx("span",{className:"absolute inset-0 rounded-full",style:{background:w.accent,width:"0%",animation:"progressFlow 3.6s linear forwards"}})},D))})]})]})}function Pb(){const[s,e]=fe.useState(!1),n=()=>{const r=document.createElement("a");r.href="https://raw.githubusercontent.com/quweijia/file/main/1%E3%80%81UI%20%E4%B8%BB%E7%AE%A1-%E6%9B%B2%E7%BB%B4%E7%94%B2-15662796885.pdf",r.download="曲维甲-UI主管-简历.pdf",r.target="_blank",r.rel="noopener noreferrer",document.body.appendChild(r),r.click(),document.body.removeChild(r)};return u.jsxs("section",{id:"hero",className:"relative flex items-center overflow-hidden",style:{background:"radial-gradient(ellipse 100% 80% at 60% 10%, rgba(0,240,200,0.05) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(124,111,247,0.06) 0%, transparent 60%), #05050a",minHeight:"calc(100vh / var(--screen-scale))"},children:[u.jsx(Sb,{colors:["#00f0c8","#7c6ff7","#ff9ffc"],mouseForce:25,cursorSize:120,resolution:.5,autoDemo:!0,autoSpeed:.3,autoIntensity:1.5}),u.jsx(Ab,{}),u.jsx("div",{className:"absolute left-0 right-0 h-px pointer-events-none z-10 opacity-30",style:{top:"35%",background:"linear-gradient(90deg,transparent,rgba(0,240,200,0.4),transparent)",animation:"scanline 6s ease-in-out infinite"}}),u.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.025]",style:{backgroundImage:"linear-gradient(rgba(0,240,200,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,200,1) 1px,transparent 1px)",backgroundSize:"60px 60px"}}),u.jsxs("div",{className:"relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full",style:{paddingTop:"calc(6rem / var(--screen-scale))",paddingBottom:"calc(4rem / var(--screen-scale))"},children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-0 items-center",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full",style:{background:"rgba(0,240,200,0.06)",border:"1px solid rgba(0,240,200,0.18)"},children:[u.jsx("span",{className:"w-2 h-2 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 8px rgb(var(--c1))"}}),u.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgb(var(--c1))",letterSpacing:"0.16em",fontWeight:500},children:"LOOKING FOR GOOD JOB · 期待您的联系"})]}),u.jsxs("h1",{className:"mb-4",style:{fontSize:"clamp(3.2rem, 7vw, 5.5rem)",fontWeight:800,lineHeight:1.2,letterSpacing:"-0.03em",color:"#f0f4f8"},children:["Vic Qu",u.jsx("br",{}),u.jsx("span",{style:{background:"linear-gradient(135deg, rgb(var(--c1)) 0%, rgb(var(--c2)) 25%, rgb(var(--c3)) 50%, rgb(var(--c2)) 75%, rgb(var(--c1)) 100%)",backgroundSize:"200% 200%",backgroundRepeat:"no-repeat",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline",animation:"flowGradient 6s ease infinite"},children:"Full-Stack"}),u.jsx("br",{}),u.jsx("span",{style:{color:"rgba(255,255,255,0.15)",WebkitTextStroke:"1px rgba(255,255,255,0.2)"},children:"Designer"})]}),u.jsxs("p",{className:"mb-6",style:{fontSize:"1.0625rem",color:"rgba(255,255,255,0.5)",lineHeight:1.7,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"clip"},children:["ENFJ · 全栈设计师 · 专注"," ",u.jsx(Cb,{words:["UI/UX Design","Design Systems","AI Design Workflow","Information Visualization","Full-Stack Implementation","Collaboration Enablement"]}),u.jsx("br",{}),"AI 能力深度融入设计全链路"]}),u.jsx("div",{className:"flex gap-3 overflow-x-auto pb-2 mb-10 flex-nowrap",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:[{icon:u.jsx(o0,{size:11}),label:"原子组件规范落地"},{icon:u.jsx(vv,{size:11}),label:"响应式设计"},{icon:u.jsx(s1,{size:11}),label:"AI 设计赋能 "}].map(r=>u.jsxs("span",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm flex-shrink-0",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.5)"},children:[u.jsx("span",{style:{color:"rgb(var(--c1))"},children:r.icon}),r.label]},r.label))}),u.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[u.jsx("div",{className:"btn-wrapper",children:u.jsxs("button",{onClick:()=>{var r;return(r=document.getElementById("portfolio"))==null?void 0:r.scrollIntoView({behavior:"smooth"})},className:"btn",children:[u.jsx("svg",{className:"btn-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"})}),u.jsxs("div",{className:"txt-wrapper",children:[u.jsxs("div",{className:"txt-1 pl-[0px] pr-[12px] py-[0px]",style:{color:"rgba(var(--c1)",opacity:1,visibility:"visible",fontSize:"16px",lineHeight:"1.5",display:"block",position:"relative",zIndex:10},children:[u.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"查"}),u.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"看"}),u.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"作"}),u.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"品"})]}),u.jsxs("div",{className:"txt-2",children:[u.jsx("span",{className:"btn-letter",children:"查"}),u.jsx("span",{className:"btn-letter",children:"看"}),u.jsx("span",{className:"btn-letter",children:"作"}),u.jsx("span",{className:"btn-letter",children:"品"})]})]})]})}),u.jsxs("button",{onClick:()=>e(!0),className:"group flex items-center gap-2 px-6 py-2 rounded-3xl text-base transition-all duration-300 hover:scale-[1.02]",style:{border:"1px solid rgba(var(--c1),0.3)",color:"rgba(255,255,255,0.65)",background:"rgba(var(--c1),0.15)",boxShadow:"0 0 25px rgba(var(--c1),0.15), 0 5px 15px rgba(0,0,0,0.3)"},onMouseEnter:r=>{r.currentTarget.style.borderColor="rgba(var(--c1),0.5)",r.currentTarget.style.background="rgba(var(--c1),0.25)"},onMouseLeave:r=>{r.currentTarget.style.borderColor="rgba(var(--c1),0.3)",r.currentTarget.style.background="rgba(var(--c1),0.15)"},children:[u.jsx(ud,{size:14,className:"group-hover:animate-bounce group-hover:translate-y-0.5 transition-transform duration-300",style:{color:"rgb(var(--c1))"}}),u.jsx("span",{className:"transition-colors duration-300",style:{color:"rgb(var(--c1))"},children:"简历 PDF"})]})]})]}),u.jsxs("div",{className:"mt-10 md:mt-0",children:[u.jsx("div",{className:"absolute -z-10 w-96 h-96 rounded-full",style:{background:"radial-gradient(circle,rgba(0,240,200,0.08) 0%,transparent 70%)",filter:"blur(50px)",right:0,top:"50%",transform:"translateY(-50%)"}}),u.jsx(Nb,{})]})]}),u.jsx("div",{className:"flex flex-wrap w-full mx-auto justify-between mt-12 mb-0 gap-y-12",children:[{v:10,s:"+",label:"年设计经验"},{v:60,s:"+",label:"上线产品"},{v:5,s:"+",label:"企业级设计系统"},{v:50,s:"+",label:"可视化大屏"},{v:12,s:"+",label:"图标库"},{v:32,s:"+",label:"团队赋能"}].map(r=>u.jsxs("div",{className:"w-[120px] text-center",children:[u.jsx("div",{style:{fontSize:"2rem",fontWeight:800,color:"#f0f4f8",lineHeight:1},children:u.jsx(Rb,{target:r.v,suffix:r.s})}),u.jsx("div",{className:"text-xm mt-1",style:{color:"rgba(255,255,255,0.6)",letterSpacing:"0.06em"},children:r.label})]},r.label))})]}),u.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-24 pointer-events-none",style:{background:"linear-gradient(transparent,#05050a)"}}),u.jsx(u0,{isOpen:s,onClose:()=>e(!1),onConfirm:n}),u.jsx("style",{children:`
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
      `})]})}const es=new IntersectionObserver(s=>{s.forEach(e=>{var n,r;e.isIntersecting&&((r=(n=e.target).__onVisible)==null||r.call(n),es.unobserve(e.target))})},{threshold:.1});function Db(s=.08){const e=fe.useRef(null),[n,r]=fe.useState(!1);return fe.useEffect(()=>{const a=e.current;if(a)return a.__onVisible=()=>r(!0),es.observe(a),()=>es.unobserve(a)},[]),{ref:e,vis:n}}function Lb({pct:s,color:e,delay:n=0,light:r=!1}){const[a,l]=fe.useState(0),f=fe.useRef(null),[d,p]=fe.useState(!1);return fe.useEffect(()=>{const m=f.current;if(m)return m.__onVisible=()=>{setTimeout(()=>l(s),n),setTimeout(()=>p(!0),n+800)},es.observe(m),()=>es.unobserve(m)},[s,n]),u.jsxs("div",{ref:f,className:"relative h-[6px] rounded-full",style:{background:r?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.06)",willChange:"auto"},children:[u.jsx("div",{className:"absolute inset-y-0 left-0 rounded-full",style:{width:`${a}%`,transition:`width 0.8s cubic-bezier(0.4,0,0.2,1) ${n}ms`,background:`linear-gradient(90deg,${e}60,${e})`,boxShadow:d&&!r?`0 0 8px ${e}80, 0 0 4px ${e}`:"none",willChange:"width",transform:"translateZ(0)"}}),u.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none",style:{left:`${a}%`,width:12,height:12,borderRadius:"50%",background:e,boxShadow:d?`0 0 0 3px ${e}30, 0 0 14px 4px ${e}90, 0 0 28px 8px ${e}40`:"none",transition:`left 0.8s cubic-bezier(0.4,0,0.2,1) ${n}ms`,opacity:d?1:0,willChange:"left, opacity",transform:"translateZ(0)"}})]})}function kb({num:s,cat:e,sub:n,pct:r,color:a,tools:l,idx:f}){const[d,p]=fe.useState(!1),[m,v]=fe.useState(0),y=fe.useRef(null),S=fe.useRef(0);return fe.useEffect(()=>{const M=y.current;if(M)return M.__onVisible=()=>{const b=f*60,w=800;setTimeout(()=>{let _=0;const x=performance.now(),N=D=>{const R=D-x,K=Math.min(R/w,1),B=1-Math.pow(1-K,3);_=Math.round(r*B),v(_),K<1&&(S.current=requestAnimationFrame(N))};S.current=requestAnimationFrame(N)},b),setTimeout(()=>p(!0),b+w)},es.observe(M),()=>{es.unobserve(M),cancelAnimationFrame(S.current)}},[r,f]),u.jsx("div",{ref:y,className:"relative py-7 transition-all duration-300",style:{borderTop:"0px solid rgba(255,255,255,0.07)",willChange:"auto"},children:u.jsxs("div",{className:"relative flex flex-wrap items-start gap-0 lg:gap-0",children:[window.innerWidth>=768&&u.jsx("div",{className:"shrink-0 w-8",style:{paddingTop:3},children:u.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:`${a}80`,letterSpacing:"0.12em",fontVariantNumeric:"tabular-nums"},children:s})}),u.jsxs("div",{className:"shrink-0",style:{width:180},children:[u.jsx("p",{style:{fontSize:"0.9375rem",fontWeight:700,color:"#f0f4f8",lineHeight:1.2},children:e}),u.jsx("p",{className:"mt-1",style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.3)",letterSpacing:"0.04em"},children:n})]}),u.jsxs("div",{className:"flex-1 flex flex-col gap-3 mt-2 min-w-[300px]",children:[u.jsxs("div",{className:"flex items-center gap-5",children:[u.jsx("div",{className:"flex-1",children:u.jsx(Lb,{pct:r,color:a,delay:f*120})}),u.jsx("span",{style:{fontSize:"1.0625rem",fontWeight:800,color:d?a:"rgba(255,255,255,0.45)",transition:"color 0.6s ease-out",minWidth:38,textAlign:"right",fontVariantNumeric:"tabular-nums",willChange:"color"},children:m})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5",style:{opacity:d?1:.4,transition:"opacity 0.6s ease-out",willChange:"opacity"},children:l.map(M=>u.jsx("span",{className:"px-2.5 py-1 rounded text-xs",style:{background:d?`${a}10`:"rgba(255,255,255,0.04)",border:`1px solid ${d?`${a}22`:"rgba(255,255,255,0.06)"}`,color:d?a:"rgba(255,255,255,0.3)",transition:"all 0.1s ease-out"},children:M},M))})]})]})})}function Ub(){const{ref:s,vis:e}=Db(.04),{theme:n}=Qs(),r=[{num:"01",cat:"UI / UX Design",sub:u.jsxs(u.Fragment,{children:["交互设计",u.jsx("br",{}),"原子组件设计规范"]}),pct:96,color:n.cyan,tools:["Figma","Principle","Sketch","Master Go","Protopie","Hype 4","Framer"]},{num:"02",cat:"AI Design Workflow",sub:u.jsxs(u.Fragment,{children:["提示生成",u.jsx("br",{}),"自动化"]}),pct:90,color:n.purple,tools:["Open Claw","Figma MCP","Pencil","Vibma","Stitch","Stable Diffusion","Comfy-UI"]},{num:"03",cat:"Visual & Motion",sub:u.jsxs(u.Fragment,{children:["动效设计",u.jsx("br",{}),"Logo"]}),pct:86,color:n.pink,tools:["After Effects","Lotties","Rive","Spline","Blender"]},{num:"04",cat:"Front-End Prototyping",sub:u.jsxs(u.Fragment,{children:["产品元件库",u.jsx("br",{}),"原型 Demo",u.jsx("br",{}),"Swift UI"]}),pct:82,color:"#34d399",tools:["Axure","Amap GIS","Draw.io","Xcode","TRAE","Cursor"]},{num:"05",cat:"Presentation Event",sub:u.jsxs(u.Fragment,{children:["发布会 PPT",u.jsx("br",{}),"设计分享会",u.jsx("br",{}),"专利"]}),pct:80,color:"#fb923c",tools:["PowerPoint","Keynote","Launch Design","Power BI","Patent"]}];return u.jsxs("section",{id:"skills",ref:s,className:"relative overflow-hidden",style:{background:"var(--bg)",padding:"80px 0 0px"},children:[u.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(80px,16vw,200px)",fontWeight:900,lineHeight:1,color:"rgba(255,255,255,0.08)",letterSpacing:"0.05em"},children:"SKILLS"}),u.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 px-[40px] py-[0px]",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[32px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)",willChange:"opacity, transform"},children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[u.jsx("span",{className:"text-xm tracking-widest",style:{color:n.cyan,letterSpacing:"0.2em",fontWeight:600},children:"CAPABILITIES"}),u.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${n.cyan}33,transparent)`}})]}),u.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:"#f0f4f8",lineHeight:1.05,letterSpacing:"-0.04em"},children:"技能全景"})]}),u.jsx("div",{className:"lg:max-w-xs",children:u.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(255,255,255,0.32)",lineHeight:1.85},children:["10 年全栈设计积累",u.jsx("br",{}),"设计工具 × AI 能力 × 技术深度",u.jsx("br",{}),"三维协同，驱动端到端设计交付"]})})]}),u.jsxs("div",{className:"mb-20",children:[r.map((a,l)=>u.jsx(kb,{...a,idx:l},a.num)),u.jsx("div",{style:{borderTop:"0px solid rgba(255,255,255,0.07)"}})]})]})]})}const Ib="/assets/lckg1-BDQtt_fd.png",Ob="/assets/lckg2-ug8bOsSa.png",Fb="/assets/lckg3-DHKhUqU2.png",zb="/assets/lckg4-C8mH9wO0.png",Bb="/assets/lckg5-BOEl4TMn.png",jb="/assets/sjgf1-CnDsrfOI.png",Hb="/assets/sjgf2-CClnWWrn.png",Gb="/assets/sjgf3-DpOLJaNC.png",Vb="/assets/sjgf4-Ggzpf8MF.png",Wb="/assets/sjgf5-z9f6zT5Q.png",Xb="/assets/dap1-2hF8sJn3.gif",qb="/assets/dap2-bURNYTOl.png",Yb="/assets/dap3-CDjco4AV.png",Qb="/assets/dap4-DWuLIiXw.png",Kb="/assets/dap5-C3pLPyGb.png";function G0(s=0){const e=fe.useRef(null),[n,r]=fe.useState(!1);return fe.useEffect(()=>{const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(setTimeout(()=>r(!0),s),a.disconnect())},{threshold:.06});return e.current&&a.observe(e.current),()=>a.disconnect()},[s]),{ref:e,vis:n}}function V0({steps:s,color:e}){return u.jsx("div",{className:"flex flex-wrap items-center gap-1",children:s.map((n,r)=>u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("span",{className:"px-2.5 py-1 rounded text-xs",style:{background:`${e}10`,border:`1px solid ${e}18`,color:e,fontWeight:500},children:n}),r<s.length-1&&u.jsx(rv,{size:10,style:{color:"rgba(0,0,0,0.2)"}})]},n))})}function W0({value:s,unit:e,label:n,color:r}){return u.jsxs("div",{className:"rounded-2xl p-4 flex flex-col gap-1",style:{background:"white",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 2px 12px rgba(0,0,0,0.05)"},children:[u.jsxs("div",{className:"flex items-baseline gap-0.5",children:[u.jsx("span",{style:{fontSize:"1.75rem",fontWeight:900,color:"#0c0b18",lineHeight:1},children:s}),e&&u.jsx("span",{style:{fontSize:"0.875rem",fontWeight:700,color:r},children:e})]}),u.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(12,11,24,0.38)",letterSpacing:"0.06em",lineHeight:1.4},children:n})]})}function X0({type:s,color:e}){return s==="city"?u.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsx("defs",{children:u.jsxs("radialGradient",{id:"cv1",cx:"60%",cy:"40%",r:"60%",children:[u.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),u.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),u.jsx("rect",{width:"320",height:"200",fill:"url(#cv1)"}),[30,70,110,150,190,230,270,310].map(n=>u.jsx("line",{x1:n,y1:"0",x2:n,y2:"200",stroke:e,strokeOpacity:"0.07",strokeWidth:"1"},n)),[25,55,85,115,145,175].map(n=>u.jsx("line",{x1:"0",y1:n,x2:"320",y2:n,stroke:e,strokeOpacity:"0.07",strokeWidth:"1"},n)),u.jsx("path",{d:"M20 170 C60 130 110 110 160 100 S240 70 300 40",fill:"none",stroke:e,strokeWidth:"2.5",strokeOpacity:"0.7",strokeDasharray:"7 4"}),[[20,170],[160,100],[300,40]].map(([n,r],a)=>u.jsxs("g",{children:[u.jsx("circle",{cx:n,cy:r,r:"14",fill:e,fillOpacity:"0.08",stroke:e,strokeOpacity:"0.35",strokeWidth:"1.5"}),u.jsx("circle",{cx:n,cy:r,r:"4",fill:e})]},a)),u.jsx("rect",{x:"190",y:"48",width:"44",height:"76",rx:"8",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5"}),[56,64,72,80,88,96,104].map(n=>u.jsx("rect",{x:"196",y:n,width:n===56?30:22,height:"4",rx:"2",fill:e,fillOpacity:"0.12"},n))]}):s==="chart"?u.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsx("defs",{children:u.jsxs("radialGradient",{id:"cv2",cx:"40%",cy:"30%",r:"60%",children:[u.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),u.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),u.jsx("rect",{width:"320",height:"200",fill:"url(#cv2)"}),[20,60,100,140,180,220,260,300].map(n=>u.jsx("line",{x1:n,y1:"0",x2:n,y2:"200",stroke:e,strokeOpacity:"0.06",strokeWidth:"1"},n)),[20,60,100,140,180].map(n=>u.jsx("line",{x1:"0",y1:n,x2:"320",y2:n,stroke:e,strokeOpacity:"0.06",strokeWidth:"1"},n)),u.jsxs("g",{children:[u.jsx("rect",{x:"30",y:"30",width:"80",height:"36",rx:"8",fill:e,fillOpacity:"0.25",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),u.jsx("rect",{x:"36",y:"42",width:"40",height:"3",rx:"1.5",fill:e,fillOpacity:"0.8"}),u.jsx("rect",{x:"30",y:"85",width:"70",height:"32",rx:"6",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),u.jsx("rect",{x:"36",y:"95",width:"35",height:"2.5",rx:"1.25",fill:e,fillOpacity:"0.6"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"135",y:"30",width:"100",height:"80",rx:"12",fill:"none",stroke:e,strokeOpacity:"0.35",strokeWidth:"1.5"}),u.jsx("rect",{x:"135",y:"30",width:"100",height:"28",rx:"12",fill:e,fillOpacity:"0.15"}),u.jsx("circle",{cx:"150",cy:"44",r:"4",fill:e,fillOpacity:"0.7"}),u.jsx("circle",{cx:"162",cy:"44",r:"4",fill:e,fillOpacity:"0.4"}),u.jsx("circle",{cx:"174",cy:"44",r:"4",fill:e,fillOpacity:"0.25"}),u.jsx("rect",{x:"142",y:"68",width:"50",height:"3",rx:"1.5",fill:e,fillOpacity:"0.5"}),u.jsx("rect",{x:"142",y:"78",width:"70",height:"3",rx:"1.5",fill:e,fillOpacity:"0.3"}),u.jsx("rect",{x:"142",y:"88",width:"60",height:"3",rx:"1.5",fill:e,fillOpacity:"0.3"})]}),u.jsxs("g",{children:[u.jsx("circle",{cx:"260",cy:"45",r:"8",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),u.jsx("circle",{cx:"260",cy:"75",r:"12",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),u.jsx("circle",{cx:"260",cy:"110",r:"16",fill:"none",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5"}),u.jsx("rect",{x:"245",y:"135",width:"30",height:"30",rx:"6",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),u.jsx("rect",{x:"250",y:"140",width:"20",height:"20",rx:"4",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),u.jsx("rect",{x:"255",y:"145",width:"10",height:"10",rx:"2",fill:e,fillOpacity:"0.4"})]}),u.jsx("path",{d:"M115 48 L135 48",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5",strokeDasharray:"4 3"}),u.jsx("path",{d:"M235 70 L245 70",fill:"none",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5",strokeDasharray:"4 3"}),u.jsx("path",{d:"M185 110 L245 110",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5",strokeDasharray:"4 3"}),[[55,170],[160,175],[270,165]].map(([n,r],a)=>u.jsxs("g",{children:[u.jsx("circle",{cx:n,cy:r,r:"10",fill:e,fillOpacity:"0.08",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5"}),u.jsx("circle",{cx:n,cy:r,r:"3",fill:e,fillOpacity:"0.7"})]},a))]}):u.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsx("defs",{children:u.jsxs("radialGradient",{id:"cv3",cx:"50%",cy:"50%",r:"60%",children:[u.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),u.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),u.jsx("rect",{width:"320",height:"200",fill:"url(#cv3)"}),u.jsx("rect",{x:"16",y:"16",width:"288",height:"28",rx:"6",fill:e,fillOpacity:"0.1",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("rect",{x:"30",y:"24",width:"80",height:"12",rx:"3",fill:e,fillOpacity:"0.5"}),u.jsx("rect",{x:"240",y:"24",width:"50",height:"12",rx:"3",fill:e,fillOpacity:"0.3"}),u.jsxs("g",{children:[u.jsxs("g",{children:[u.jsx("rect",{x:"16",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("rect",{x:"28",y:"95",width:"12",height:"12",rx:"2",fill:e,fillOpacity:"0.35"}),u.jsx("rect",{x:"44",y:"82",width:"12",height:"25",rx:"2",fill:e,fillOpacity:"0.45"}),u.jsx("rect",{x:"60",y:"68",width:"12",height:"39",rx:"2",fill:e,fillOpacity:"0.55"}),u.jsx("rect",{x:"76",y:"58",width:"12",height:"49",rx:"2",fill:e,fillOpacity:"0.65"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"115",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("circle",{cx:"160",cy:"82",r:"22",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5"}),u.jsx("circle",{cx:"160",cy:"82",r:"16",fill:"none",stroke:e,strokeOpacity:"0.35",strokeWidth:"2",strokeDasharray:"60 40"}),u.jsx("circle",{cx:"160",cy:"82",r:"5",fill:e,fillOpacity:"0.7"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"214",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("path",{d:"M228 100 L242 88 L256 92 L270 72 L284 76 L298 58",fill:"none",stroke:e,strokeOpacity:"0.6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),[[228,100],[242,88],[256,92],[270,72],[284,76],[298,58]].map(([n,r],a)=>u.jsx("circle",{cx:n,cy:r,r:"3",fill:e,fillOpacity:"0.75"},a))]}),u.jsxs("g",{children:[u.jsx("rect",{x:"16",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("rect",{x:"30",y:"135",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),u.jsx("rect",{x:"30",y:"135",width:"45",height:"6",rx:"3",fill:e,fillOpacity:"0.6"}),u.jsx("rect",{x:"30",y:"150",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),u.jsx("rect",{x:"30",y:"150",width:"52",height:"6",rx:"3",fill:e,fillOpacity:"0.5"}),u.jsx("rect",{x:"30",y:"165",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),u.jsx("rect",{x:"30",y:"165",width:"35",height:"6",rx:"3",fill:e,fillOpacity:"0.4"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"115",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("circle",{cx:"160",cy:"152",r:"18",fill:"none",stroke:e,strokeOpacity:"0.2",strokeWidth:"4"}),u.jsx("circle",{cx:"160",cy:"152",r:"18",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"4",strokeDasharray:"70 43"}),u.jsx("circle",{cx:"160",cy:"152",r:"8",fill:e,fillOpacity:"0.12"}),u.jsx("rect",{x:"150",y:"148",width:"20",height:"3",rx:"1.5",fill:e,fillOpacity:"0.6"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"214",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("rect",{x:"224",y:"132",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),u.jsx("rect",{x:"230",y:"135",width:"30",height:"4",rx:"2",fill:e,fillOpacity:"0.5"}),u.jsx("rect",{x:"224",y:"148",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),u.jsx("rect",{x:"230",y:"151",width:"40",height:"4",rx:"2",fill:e,fillOpacity:"0.45"}),u.jsx("rect",{x:"224",y:"164",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),u.jsx("rect",{x:"230",y:"167",width:"25",height:"4",rx:"2",fill:e,fillOpacity:"0.4"})]})]}),u.jsxs("g",{children:[u.jsx("circle",{cx:"20",cy:"20",r:"4",fill:e,fillOpacity:"0.4"}),u.jsx("circle",{cx:"300",cy:"20",r:"4",fill:e,fillOpacity:"0.4"}),u.jsx("circle",{cx:"20",cy:"180",r:"4",fill:e,fillOpacity:"0.4"}),u.jsx("circle",{cx:"300",cy:"180",r:"4",fill:e,fillOpacity:"0.4"})]})]})}const Zb=[{idx:"01",color:"#015BC9",bg:"#BBDDFE",vizType:"city",name:"移动端&PC端-历城控股 OA",role:"Lead UI/UX Designer",tags:["iOS/Android","Web PC","企业管理"],desc:"历城控股集团 OA 办公系统移动端&PC 端全新升级改版，统一信息架构与视觉语言，面向集团 2000 + 内部员工的一站式办公管理平台，覆盖假勤、工资单、报销、审批等核心办公场景，优化流程后审批平均耗时减少 40%，移动端使用率提升至 85%。",images:[Ib,Ob,Fb,zb,Bb],process:["需求调研","竞品分析","信息架构","交互设计","视觉规范","开发对接","迭代上线"],aiNote:"依托 Eva Design System 构建全链路色彩体系，自动生成色值梯度库，并通过 WCAG 对比度规范自动校验；批量产出移动端启动页与 PC 端登录页的动态视觉资产，同步输出浅色 / 深色双模式适配；通过 Midjourney + PS/Figma 协同产出 Banner 和运营海报；利用 AI 辅助生成 Logo 创意方向，实现高效的多端视觉与品牌资产落地。",metrics:[{value:"-40",unit:"%",label:"审批平均耗时"},{value:"85",unit:"%",label:"移动端使用率"},{value:"+50",unit:"%",label:"报销提交效率"},{value:"4.7",unit:"/5",label:"员工满意度评分"}]},{idx:"02",color:"#3366ff",bg:"#f0eeff",vizType:"chart",name:"UI设计规范-浪潮智慧建筑 原子组件库",role:"Design System Lead",tags:["B端","SaaS","变体设计","Auto-Layout"],desc:"基于原子设计理论（Atomic Design） 体系化搭建企业级 PC 端组件库，累计沉淀 200+ 业务组件，覆盖智慧园区、智慧工地、建筑节能三大核心产品线，形成统一、可扩展、可落地的设计规范与交互标准。组件库提供多状态、多主题、多尺寸的丰富变体配置，支持自动布局、响应式适配、权限联动等原型化能力，产品经理原型复用率提升至 91%。",images:[jb,Hb,Gb,Vb,Wb],process:["组件梳理","原子拆分","变体设计","自动布局","文档输出","团队赋能","持续迭代"],aiNote:"GitHub Copilot 辅助梳理 Figma 组件类型；使用 Vibma + Cursor MCP 自动检查校验组件样式、命名、状态统一性，快速排查漏洞，后期维护成本大幅降低；AI 批量生成线性 / 面性图标，统一视觉风格，再微调落地，告别逐个绘制，图标库搭建提速 80%。",metrics:[{value:"200",unit:"+",label:"自动布局组件"},{value:"91",unit:"%",label:"产品复用率"},{value:"-65",unit:"%",label:"原型制作耗时"},{value:"2.5",unit:"×",label:"交付效率提升"}]},{idx:"03",color:"#11AF95",bg:"#97F9E5",vizType:"net",name:"数据可视化大屏-设计体系",role:"Data Visualization Designer",tags:["Large Screen","Design System","Experience Sharing"],desc:"基于 30+ 政企与金融级可视化大屏项目的实战沉淀，系统性梳理并提炼了非常规尺寸自适应适配、专用数字字体设计、高质感动效设计等领域的核心方法论与最佳实践。针对超宽屏、非标拼接屏、异形分辨率、多设备协同等复杂场景，形成完整的大屏设计工程化解决方案，并输出标准化设计指南、组件规范与典型踩坑案例库，发表并授权相关专利 4 篇。",images:[Xb,qb,Yb,Qb,Kb],process:["项目复盘","规律提炼","要点总结","文档输出","团队分享","迭代优化"],aiNote:"用 AI 一键生成科技感 / 政务风 / 金融风大屏配色方案，自动生成深色模式渐变、霓虹光效色卡，同步校验大屏远距离可视性，省去反复调试色值的时间，风格探索效率提升 60%；AI 快速输出多版布局草案，解决大屏排版难、信息失衡问题，布局设计周期缩短 50%。",metrics:[{value:"30",unit:"+",label:"覆盖项目数量"},{value:"-35",unit:"%",label:"大屏交付周期"},{value:"95",unit:"%",label:"设计一致性"},{value:" 6",unit:"+",label:"团队分享会"}]}];function Jb({project:s,onClose:e}){return fe.useEffect(()=>(s&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[s]),s?u.jsx(Vo,{children:u.jsx("div",{className:"fixed inset-0 z-50 flex items-center sm:items-center justify-center px-6 sm:px-8 pt-8 sm:pt-12 pb-8",style:{background:"rgba(5,5,12,0.70)",backdropFilter:"blur(16px)"},onClick:e,children:u.jsxs("div",{className:"relative w-full sm:max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl",style:{background:"white",border:"1px solid rgba(0,0,0,0.08)",boxShadow:"0 20px 100px rgba(0,0,0,0.3)"},onClick:n=>n.stopPropagation(),children:[u.jsx("div",{className:"sticky top-4 z-20 flex justify-end px-[16px] py-[0px]",style:{background:"transparent"},children:u.jsx("button",{onClick:e,className:"w-10 h-10 rounded-full flex items-center justify-center pt-transition-all duration-200",style:{background:"rgba(255,255,255,0.95)",border:"1px solid rgba(0,0,0,0.1)",color:"#0c0b18",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:u.jsx(Jr,{size:16})})}),u.jsxs("div",{className:"relative overflow-hidden -mt-16",style:{height:"clamp(150px, 30vh, 600px)",background:s.bg},children:[u.jsx(X0,{type:s.vizType,color:s.color}),u.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg,transparent 40%,rgba(255,255,255,0.9) 100%)"}})]}),u.jsxs("div",{className:"px-[20px] sm:px-[40px] pt-[16px] pb-[20px]",children:[u.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[u.jsx("span",{className:"hidden md:inline-block",style:{fontSize:"3.5rem",fontWeight:900,color:`${s.color}18`,lineHeight:1,letterSpacing:"-0.05em"},children:s.idx}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h2",{style:{fontSize:"1.75rem",fontWeight:800,color:"#0c0b18",lineHeight:1.2,marginBottom:"0.5rem"},children:s.name}),u.jsx("p",{style:{fontSize:"1rem",color:s.color,fontWeight:600},children:s.role})]})]}),u.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:s.tags.map(n=>u.jsx("span",{className:"text-sm px-3 py-1.5 rounded-lg",style:{background:`${s.color}12`,border:`1px solid ${s.color}25`,color:s.color,fontWeight:600},children:n},n))}),u.jsx("p",{className:"mb-8",style:{fontSize:"1rem",color:"rgba(12,11,24,0.6)",lineHeight:1.85},children:s.desc}),u.jsxs("div",{className:"mb-8 hidden sm:block",children:[u.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"设计流程"}),u.jsx(V0,{steps:s.process,color:s.color})]}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"核心数据"}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:s.metrics.map(n=>u.jsx(W0,{value:n.value,unit:n.unit,label:n.label,color:s.color},n.label))})]}),u.jsxs("div",{className:"rounded-2xl p-6 mb-8  hidden sm:block",style:{background:`${s.color}12`,border:`1px solid ${s.color}25`},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",style:{color:s.color},children:[u.jsx(nf,{size:16}),u.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:700},children:"AI 应用"})]}),u.jsx("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.6)",lineHeight:1.85},children:s.aiNote})]}),s.images&&s.images.length>0&&u.jsxs("div",{className:"mb-8",children:[u.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"项目展示"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:s.images.map((n,r)=>u.jsx("div",{className:"rounded-2xl overflow-hidden relative",style:{background:`linear-gradient(135deg, ${s.color}08, ${s.color}15)`,border:`1px solid ${s.color}20`,aspectRatio:"16/9",gridColumn:r===0?"1 / -1":"auto"},children:u.jsx("img",{src:n,alt:`${s.name} - 项目展示 ${r+1}`,className:"w-full h-full object-cover",style:{display:"block"},onError:a=>{const l=a.currentTarget;l.style.display="none";const f=l.parentElement;if(f&&!f.querySelector(".img-error-fallback")){const d=document.createElement("div");d.className="img-error-fallback absolute inset-0 flex items-center justify-center",d.style.cssText=`
                            background: linear-gradient(135deg, ${s.color}08, ${s.color}15);
                            color: rgba(12,11,24,0.4);
                            font-size: 0.875rem;
                            text-align: center;
                            padding: 1rem;
                          `,d.textContent="图片加载失败，请换个 WiFi 或使用自己的热点",f.appendChild(d)}}})},r))})]}),u.jsx("div",{className:"flex items-center justify-center gap-4",children:u.jsxs("a",{href:"https://github.com/quweijia/file/blob/main/lckgoa.html",target:"_blank",rel:"noopener noreferrer",className:"w-full group flex items-center justify-center gap-2 rounded-xl text-sm transition-colors px-[24px] py-[12px]",onMouseEnter:n=>{n.currentTarget.style.background=`${s.color}50`},onMouseLeave:n=>{n.currentTarget.style.background=`${s.color}30`},style:{background:`${s.color}30`,color:s.color,fontWeight:600,textDecoration:"none",cursor:"pointer"},children:["Figma 原稿",u.jsx(ef,{size:14,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})})]})]})})}):null}function $b({p:s,rev:e,index:n,onOpenModal:r}){const{ref:a,vis:l}=G0(0),[f,d]=fe.useState(!1);return u.jsx("div",{ref:a,className:"rounded-2xl overflow-hidden transition-all duration-700",style:{background:"white",boxShadow:f?"0 24px 80px rgba(0,0,0,0.13), 0 8px 24px rgba(0,0,0,0.07)":"0 4px 24px rgba(0,0,0,0.06)",opacity:l?1:0,transform:l?"translateY(0)":"translateY(32px)",border:"1px solid rgba(0,0,0,0.05)"},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:u.jsxs("div",{className:`grid 
          ${n===1?"lg:grid-cols-[3fr_7fr]":"lg:grid-cols-[7fr_3fr]"} 
          ${e?"lg:[grid-template-areas:'right_left']":""}
        `,children:[u.jsxs("div",{className:`${e?"lg:[grid-area:left]":""} p-[32px]`,style:{borderRight:e?"none":"1px solid rgba(0,0,0,0.05)",borderLeft:e?"1px solid rgba(0,0,0,0.05)":"none"},children:[u.jsxs("div",{className:"flex items-start justify-between gap-4 mb-6",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{style:{fontSize:window.innerWidth<768?"1.8rem":"3rem",fontWeight:900,color:`${s.color}20`,lineHeight:1,letterSpacing:"-0.05em",display:window.innerWidth<768?"none":"inline"},children:s.idx}),u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:800,color:"#0c0b18",lineHeight:1.2},children:s.name}),u.jsx("p",{className:"mt-0.5",style:{fontSize:"0.8125rem",color:s.color,fontWeight:600},children:s.role})]})]}),u.jsx("button",{className:"shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200",style:{background:f?`${s.color}12`:"rgba(0,0,0,0.04)",border:`1px solid ${f?`${s.color}25`:"rgba(0,0,0,0.07)"}`},onClick:r,children:u.jsx(i0,{size:14,style:{color:f?s.color:"rgba(0,0,0,0.3)"}})})]}),u.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:s.tags.map(m=>u.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:`${s.color}0e`,border:`1px solid ${s.color}20`,color:s.color,fontWeight:500},children:m},m))}),u.jsx("p",{className:"mb-6",style:{fontSize:"0.875rem",color:"rgba(12,11,24,0.55)",lineHeight:1.85},children:s.desc}),u.jsxs("div",{className:"mb-5 hidden sm:block",children:[u.jsx("p",{className:"text-xs mb-2.5 tracking-wider",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.12em"},children:"DESIGN PROCESS"}),u.jsx(V0,{steps:s.process,color:s.color})]}),u.jsxs("div",{className:"rounded-xl p-4",style:{background:`${s.color}12`,border:`1px solid ${s.color}16`},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:s.color},children:[u.jsx(nf,{size:11}),u.jsx("span",{className:"text-xs tracking-wider",style:{letterSpacing:"0.1em",fontWeight:700},children:"AI APPLICATION"})]}),u.jsx("p",{style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.5)",lineHeight:1.8},children:s.aiNote})]})]}),u.jsxs("div",{className:`flex flex-col ${e?"lg:[grid-area:right]":""}`,children:[u.jsxs("div",{className:"relative overflow-hidden hidden lg:block",style:{height:220,background:s.bg},children:[u.jsx(X0,{type:s.vizType,color:s.color}),u.jsx("div",{className:"absolute inset-0 pointer-events-none hidden lg:block",style:{background:"linear-gradient(180deg,transparent 60%,rgba(255,255,255,0.8) 100%)"}})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 flex-1 items-center justify-center place-content-center p-[24px]",children:[u.jsx("p",{className:"col-span-2 text-xs mb-1 tracking-wider text-center",style:{color:"rgba(12,11,24,0.25)",letterSpacing:"0.12em"},children:"KEY METRICS"}),s.metrics.map(m=>u.jsx(W0,{value:m.value,unit:m.unit,label:m.label,color:s.color},m.label))]})]})]})})}function eE(){const{ref:s,vis:e}=G0(.03),{theme:n}=Qs(),[r,a]=fe.useState(null);return u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"projects",ref:s,className:"relative overflow-hidden",style:{background:"#f3f0eb",padding:"80px 0 140px"},children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.025]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"180px"}}),u.jsx("div",{className:"absolute left-0 top-6 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,color:"rgba(12,11,24,0.03)",lineHeight:1,letterSpacing:"0.05em",whiteSpace:"nowrap"},children:"PROJECTS"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[60px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[u.jsx("span",{className:"text-xm tracking-widest",style:{color:n.cyan,letterSpacing:"0.2em",fontWeight:600},children:"CASE STUDIES"}),u.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${n.cyan}66,transparent)`}})]}),u.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:600,color:"#0c0b18",lineHeight:1.05,letterSpacing:"-0.04em"},children:"主导项目"})]}),u.jsx("div",{className:"lg:max-w-md",children:u.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.42)",lineHeight:1.85},children:["主导多个从0-1的项目，覆盖移动端、PC端、可视化大屏",u.jsx("br",{}),"每个项目均展示完整设计过程与可量化成果"]})})]}),u.jsx("div",{className:"space-y-4",children:Zb.map((l,f)=>u.jsx($b,{p:l,rev:f%2===1,index:f,onOpenModal:()=>a(l)},l.idx))})]})]}),u.jsx(Jb,{project:r,onClose:()=>a(null)})]})}const tE="/assets/ntgk1-B3nrUPl7.gif",nE="/assets/ntgk2-CQ0liQgT.png",iE="/assets/ntgk3-Cf6tRBof.gif",rE="/assets/ntgk4-DTaADZHr.png",sE="/assets/ntgk5-CgrPnQtW.png",oE="/assets/ntgk6-DfQ5Spyd.png",aE="/assets/chpgw1-by-8Ydr0.gif",lE="/assets/chpgw2-oq5BKjgi.png",cE="/assets/chpgw3-Cig_yd3z.png",uE="/assets/chpgw4-BiGeB1jo.png",dE="/assets/chpgw5-BZdmsq-I.png",fE="/assets/chpgw6-B6Izi0ni.png",hE="/assets/sdhs1-DT4dxOgU.gif",pE="/assets/sdhs2-CAvh-pmr.png",mE="/assets/sdhs3-I_29WnDL.png",gE="/assets/sdhs4--0dG0U1R.png",xE="/assets/sdhs5-CdImqiWo.png",vE="/assets/sdhs6-pJhOAf5Q.png",yE="/assets/icity1-GDlknkUS.gif",_E="/assets/icity2-LNKIVM7r.png",SE="/assets/icity3-DuPUFJWe.png",ME="/assets/icity4-CxpVfCzq.png",bE="/assets/icity5-DcIf52V4.png",EE="/assets/icity6-CdyQJp4S.png",wE="/assets/PPT1-Bv0-pf9a.png",TE="/assets/PPT2-z1nwjYrV.png",AE="/assets/PPT3-DzvOnPYz.png",CE="/assets/PPT4-BqRgSSJa.png",RE="/assets/PPT5-CcTULwBm.png",NE="/assets/PPT6-Buuk0ms1.png",PE="/assets/ai1-ByLwHQWz.gif",DE="/assets/ai2-BnbmS-5y.gif",LE="/assets/ai3-CLXWscOm.gif",kE="/assets/ai4-FiNq7G6V.png",UE="/assets/ai5-qGdYsoa-.gif",IE="/assets/ai6-UYxnwnU2.png",OE="/assets/dx1-20Ba6fcS.gif",FE="/assets/dx2-C8IGUuq5.gif",zE="/assets/dx3-CWKAeg2p.gif",BE="/assets/dx4-BVMXNlt2.gif",jE="/assets/dx5-qHR_4a8B.gif",HE="/assets/dx6-MaK3v_zP.gif";function GE(s=0){const e=fe.useRef(null),[n,r]=fe.useState(!1);return fe.useEffect(()=>{if(n)return;const a=new IntersectionObserver(([l])=>{l.isIntersecting&&!n&&(setTimeout(()=>r(!0),s),a.disconnect())},{threshold:.04});return e.current&&a.observe(e.current),()=>a.disconnect()},[s,n]),{ref:e,vis:n}}function VE({color:s}){return u.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"c1",cx:"65%",cy:"35%",r:"65%",children:[u.jsx("stop",{offset:"0%",stopColor:s,stopOpacity:"0.22"}),u.jsx("stop",{offset:"100%",stopColor:s,stopOpacity:"0"})]}),u.jsxs("filter",{id:"gf1",children:[u.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"b"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"b"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),u.jsx("rect",{width:"560",height:"320",fill:"url(#c1)"}),[40,100,160,220,280,340,400,460,520].map(e=>u.jsx("line",{x1:e,y1:"0",x2:e,y2:"320",stroke:s,strokeOpacity:"0.05",strokeWidth:"1"},e)),[40,85,130,175,220,270].map(e=>u.jsx("line",{x1:"0",y1:e,x2:"560",y2:e,stroke:s,strokeOpacity:"0.05",strokeWidth:"1"},e)),u.jsx("path",{d:"M30 280 C110 210 200 170 290 155 S400 120 520 70",fill:"none",stroke:s,strokeWidth:"2.5",strokeOpacity:"0.6",strokeDasharray:"9 6",filter:"url(#gf1)"}),u.jsx("path",{d:"M30 280 C120 250 220 235 320 225 S450 200 530 175",fill:"none",stroke:s,strokeWidth:"1.5",strokeOpacity:"0.2",strokeDasharray:"5 4"}),[[30,280],[290,155],[520,70]].map(([e,n],r)=>u.jsxs("g",{filter:"url(#gf1)",children:[u.jsx("circle",{cx:e,cy:n,r:"18",fill:s,fillOpacity:"0.08",stroke:s,strokeOpacity:"0.35",strokeWidth:"1.5"}),u.jsx("circle",{cx:e,cy:n,r:"5.5",fill:s,fillOpacity:"0.9"})]},r)),u.jsx("rect",{x:"350",y:"60",width:"55",height:"96",rx:"10",fill:"none",stroke:s,strokeOpacity:"0.22",strokeWidth:"1.5"}),u.jsx("rect",{x:"356",y:"68",width:"43",height:"70",rx:"4",fill:s,fillOpacity:"0.04"}),[73,81,89,97,105,113,121].map(e=>u.jsx("rect",{x:"360",y:e,width:e%16===1?34:24,height:"4",rx:"2",fill:s,fillOpacity:"0.1"},e)),u.jsx("circle",{cx:"80",cy:"60",r:"38",fill:"none",stroke:s,strokeOpacity:"0.06",strokeWidth:"20"}),u.jsx("circle",{cx:"490",cy:"260",r:"50",fill:"none",stroke:s,strokeOpacity:"0.05",strokeWidth:"28"})]})}function Al({color:s}){const e=[.52,.78,.43,.91,.35,.68,.95,.52,.74,.6,.87,.41,.76,.55];return u.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"c2",cx:"50%",cy:"25%",r:"70%",children:[u.jsx("stop",{offset:"0%",stopColor:s,stopOpacity:"0.18"}),u.jsx("stop",{offset:"100%",stopColor:s,stopOpacity:"0"})]}),u.jsxs("linearGradient",{id:"bg2",x1:"0",y1:"0",x2:"0",y2:"1",children:[u.jsx("stop",{offset:"0%",stopColor:s,stopOpacity:"0.75"}),u.jsx("stop",{offset:"100%",stopColor:s,stopOpacity:"0.1"})]}),u.jsxs("filter",{id:"gf2",children:[u.jsx("feGaussianBlur",{stdDeviation:"2",result:"b"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"b"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),u.jsx("rect",{width:"560",height:"320",fill:"url(#c2)"}),e.map((n,r)=>{const a=n*200,l=26+r*38,f=285-a;return u.jsxs("g",{children:[u.jsx("rect",{x:l,y:f,width:"26",height:a,rx:"3",fill:"url(#bg2)"}),u.jsx("rect",{x:l,y:f,width:"26",height:"5",rx:"2.5",fill:s,filter:"url(#gf2)"})]},r)}),u.jsx("polyline",{points:e.map((n,r)=>`${39+r*38},${285-n*200}`).join(" "),fill:"none",stroke:s,strokeWidth:"2",strokeOpacity:"0.45"}),u.jsx("line",{x1:"22",y1:"285",x2:"545",y2:"285",stroke:s,strokeOpacity:"0.1",strokeWidth:"1"}),[80,160].map(n=>u.jsx("line",{x1:"22",y1:285-n,x2:"545",y2:285-n,stroke:s,strokeOpacity:"0.05",strokeWidth:"1"},n)),u.jsx("rect",{x:"420",y:"30",width:"120",height:"65",rx:"8",fill:s,fillOpacity:"0.06",stroke:s,strokeOpacity:"0.18",strokeWidth:"1"}),u.jsx("rect",{x:"430",y:"40",width:"60",height:"6",rx:"3",fill:s,fillOpacity:"0.2"}),u.jsx("rect",{x:"430",y:"52",width:"96",height:"14",rx:"3",fill:s,fillOpacity:"0.1"}),u.jsx("rect",{x:"430",y:"72",width:"48",height:"5",rx:"2.5",fill:s,fillOpacity:"0.08"})]})}function WE({color:s}){const e=[[280,155],[180,85],[380,85],[140,210],[420,210],[215,42],[345,42]];return u.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"c3",cx:"50%",cy:"48%",r:"58%",children:[u.jsx("stop",{offset:"0%",stopColor:s,stopOpacity:"0.18"}),u.jsx("stop",{offset:"100%",stopColor:s,stopOpacity:"0"})]}),u.jsxs("filter",{id:"gf3",children:[u.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"b"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),u.jsx("rect",{width:"560",height:"320",fill:"url(#c3)"}),e.slice(1).map(([n,r],a)=>u.jsx("line",{x1:n,y1:r,x2:280,y2:155,stroke:s,strokeOpacity:"0.18",strokeWidth:"1.3",strokeDasharray:"5 4"},a)),u.jsx("line",{x1:180,y1:85,x2:140,y2:210,stroke:s,strokeOpacity:"0.1",strokeWidth:"1"}),u.jsx("line",{x1:380,y1:85,x2:420,y2:210,stroke:s,strokeOpacity:"0.1",strokeWidth:"1"}),u.jsx("line",{x1:215,y1:42,x2:180,y2:85,stroke:s,strokeOpacity:"0.1",strokeWidth:"1"}),u.jsx("line",{x1:345,y1:42,x2:380,y2:85,stroke:s,strokeOpacity:"0.1",strokeWidth:"1"}),[50,78,108].map(n=>u.jsx("circle",{cx:280,cy:155,r:n,fill:"none",stroke:s,strokeOpacity:.1/n*40,strokeWidth:"1"},n)),e.map(([n,r],a)=>u.jsxs("g",{filter:"url(#gf3)",children:[u.jsx("circle",{cx:n,cy:r,r:a===0?22:14,fill:s,fillOpacity:a===0?.12:.07,stroke:s,strokeOpacity:a===0?.45:.22,strokeWidth:"1.5"}),u.jsx("circle",{cx:n,cy:r,r:a===0?6:3.5,fill:s,fillOpacity:"0.9"})]},a)),u.jsx("rect",{x:"420",y:"24",width:"116",height:"40",rx:"7",fill:s,fillOpacity:"0.06",stroke:s,strokeOpacity:"0.2",strokeWidth:"1"}),u.jsx("rect",{x:"430",y:"32",width:"72",height:"6",rx:"3",fill:s,fillOpacity:"0.22"}),u.jsx("rect",{x:"430",y:"44",width:"48",height:"5",rx:"2.5",fill:s,fillOpacity:"0.12"})]})}function XE({color:s}){return u.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"c4",cx:"40%",cy:"50%",r:"65%",children:[u.jsx("stop",{offset:"0%",stopColor:s,stopOpacity:"0.18"}),u.jsx("stop",{offset:"100%",stopColor:s,stopOpacity:"0"})]}),u.jsxs("filter",{id:"gf4",children:[u.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"b"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),u.jsx("rect",{width:"560",height:"320",fill:"url(#c4)"}),[[150,150,80],[300,120,55],[230,220,45],[410,200,62],[100,250,38],[460,100,35]].map(([e,n,r],a)=>u.jsx("circle",{cx:e,cy:n,r,fill:s,fillOpacity:.04+a*.01,stroke:s,strokeOpacity:.1+a*.02,strokeWidth:"1.5"},a)),u.jsx("path",{d:"M185 155 C145 105 115 82 165 50 C215 18 268 48 290 100 C312 152 270 182 228 182 C186 182 185 155 185 155Z",fill:s,fillOpacity:"0.08",stroke:s,strokeOpacity:"0.22",strokeWidth:"1.5",filter:"url(#gf4)"}),u.jsx("circle",{cx:430,cy:160,r:62,fill:"none",stroke:s,strokeOpacity:"0.08",strokeWidth:"22"}),u.jsx("circle",{cx:430,cy:160,r:62,fill:"none",stroke:s,strokeOpacity:"0.5",strokeWidth:"3",strokeDasharray:"272 120",strokeDashoffset:"0",filter:"url(#gf4)"}),u.jsx("circle",{cx:430,cy:160,r:7,fill:s,fillOpacity:"0.9",filter:"url(#gf4)"}),[[250,60],[310,60]].map(({0:e,1:n},r)=>u.jsxs("g",{children:[u.jsx("rect",{x:e,y:n,width:"50",height:"88",rx:"9",fill:"none",stroke:s,strokeOpacity:"0.22",strokeWidth:"1.5"}),u.jsx("rect",{x:e+4,y:n+8,width:"42",height:"64",rx:"3",fill:s,fillOpacity:"0.04"}),[14,22,30,38,46,54,62].map(a=>u.jsx("rect",{x:e+8,y:n+a,width:a===14?30:22,height:"4",rx:"2",fill:s,fillOpacity:"0.1"},a))]},r))]})}const Rn=[{id:1,color:"rgb(var(--c1))",Bg:Al,coverImg:tE,year:"2026",title:"能碳管控可视化平台",sub:"Government Carbon Management Dashboard",tags:["智慧园区","能碳管控","智慧工地","GIS定制"],role:"UX Designer · 高德 GIS 地图开发",metric:"政府验收评分 9.6/10",tools:["Figma","Amap Style","Geojson"],desc:"面向省政府机关打造的政务级实时能碳管控大屏，集成GIS地图，实时监控机关事务单位的能耗与碳排数据，支撑节能减排政策执行与预警决策、能耗监测、运维告警、工单管理等多维数据，实现区域能源全生命周期可视化管控与智能决策。",highlights:["搭建15+标准化大屏数据模块","支持2D/3D GIS地图切换","多终端自适应展示","管理决策效率提升60%"],screenshots:[nE,iE,rE,sE,oE],projectLink:"https://www.figma.com/proto/q7DqLbfB1uuKfsAVjnzhoF/%E8%8C%8C%E5%B9%B3%E3%80%81%E5%A4%A9%E6%A1%A5%E8%83%BD%E7%A2%B3%E7%AE%A1%E6%8E%A7%E5%B9%B3%E5%8F%B0%E5%8F%AF%E8%A7%86%E5%8C%96%E5%A4%A7%E5%B1%8F%E8%AE%BE%E8%AE%A1?node-id=192-15924&viewport=-406%2C252%2C0.03&t=1MvOD9WdotlUwLNd-1&scaling=contain&content-scaling=fixed&starting-point-node-id=192%3A15924&page-id=5%3A14"},{id:2,color:"#E877FF",Bg:Al,coverImg:aE,year:"2025",title:"浪潮智慧建筑产品官网全案设计",sub:"Product Official Website",tags:["品牌官网","响应式","动效"],role:"Design System Lead",metric:"响应式设计",tools:["Figma","Storybook","GitHub Copilot"],desc:"浪潮智慧建筑以 “数智融合、绿色低碳” 为核心，打造筑瓴智慧建筑全栈式解决方案体系，覆盖智能应用、数字底座、AI 中台、智能硬件四大维度，为建筑全生命周期提供从 “感知 - 分析 - 决策 - 执行” 的全流程智能化支撑，助力行业实现高效、绿色、高质量的数字化转型。",highlights:["企业品牌官网全链路设计","跨产品线组件复用","交互原型 Demo 设计","迭代交付效率提升2倍"],screenshots:[lE,cE,uE,dE,fE],projectLink:"https://www.figma.com/proto/UwjGPd7UgVQLSN8oE5rdeb/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%91?node-id=91-4991&viewport=-23%2C-1005%2C0.06&t=GIZyLL29GHlGTPVD-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"},{id:3,color:"#02BA53",Bg:VE,coverImg:hE,year:"2023",title:"山东高速满易运 App",sub:"SDHS Manyiyun Driver App",tags:["物流运输","货运平台","MY-TMS"],role:"Lead UI/UX · Product Design",metric:"线上化率提升 85%",tools:["Figma","Principle","Midjourney"],desc:"山东高速集团官方货运司机服务平台，提供在线接单、路线规划、高速通行、费用结算、车辆管理、消息通知等全流程功能，帮助货车司机高效完成运输任务，实现货运流程线上化、标准化、智能化。",highlights:["搭建完整移动端组件库，提升迭代效率","轻量化信息层级，降低司机操作认知成本","极简交互流程设计，缩短高频操作路径","深色模式适配，满足长途夜间驾驶使用"],screenshots:[pE,mE,gE,xE,vE],projectLink:"https://example.com/icty-app"},{id:4,color:"#FE952C",Bg:XE,coverImg:yE,year:"2018",title:"爱城市网 App",sub:"iCity — Urban Service App",tags:["城市服务","政务服务","民生出行"],role:"UI/UX · Product Design · Motion",metric:"省级政务标杆产品",tools:["Sketch","Principle","After Effects"],desc:"省级综合性政务便民服务App，聚焦市民日常办事、民生查询、生活服务核心场景，整合政务办理、社保医保、交通出行、便民缴费、城市资讯、投诉建议等多元功能。统筹全局交互设计逻辑，简化政务操作流程，降低市民使用门槛，打造轻量化、高易用的移动端体验。",highlights:["与 UI 设计规范一致，搭建产品原件库","轻量化信息层级，优化民生办事操作路径","高合规政务视觉体系，兼顾严谨性与美观度","统一多业务线视觉体系，保障产品体验一致性"],screenshots:[_E,SE,ME,bE,EE],projectLink:"https://example.com/icty-web"},{id:5,color:"#34d399",Bg:Al,coverImg:wE,year:"2024",title:"PPT 全案设计与演示体系",sub:"Visual Communication",tags:["产品发布会","汇报模板","设计分享"],role:"视觉设计负责人 · 演示体系搭建",metric:"影视级幻灯片",tools:["PowerPoint","Keynote","ECharts"],desc:"面向政企汇报、产品发布、项目复盘的 PPT 设计体系，统一品牌视觉风格、信息层级与演示逻辑，提升内容传递效率与专业呈现质感。",highlights:["搭建 60+ 页标准化演示模板体系","品牌视觉与版式规范高度统一","数据图表可视化表达更清晰直观","整体汇报制作效率提升 70%"],screenshots:[TE,AE,CE,RE,NE],projectLink:"https://example.com/energy-carbon"},{id:6,color:"#FE952C",Bg:WE,coverImg:PE,year:"2026",title:"AI-设计赋能",sub:"AI-Driven Efficiency",tags:["提效体系","智能辅助","设计自动化"],role:"AI设计体系搭建 · 提效方案负责人",metric:"设计效率提升 65%",tools:["Antigravity","Cursor","GitHub Copilot"],desc:"基于AI能力构建设计提效工作流，覆盖组件生成、图表可视化、原型快速迭代、设计规范落地等场景，通过智能辅助大幅缩短交付周期，提升团队整体产出质量与效率。",highlights:["搭建AI辅助设计标准化流程体系","设计稿迭代周期缩短 50% 以上","组件与图表自动生成覆盖率提升","团队整体设计效率提升 65%"],screenshots:[DE,LE,kE,UE,IE],projectLink:"https://example.com/licheng-oa-mobile"},{id:7,color:"#7c6ff7",Bg:Al,coverImg:OE,year:"2022",title:"交互动效设计",sub:"Motion Interactive Experience",tags:["交互动效","微动画","Lottie落地","GIS动画"],role:"Product Designer · UX Lead",metric:"信息可读性提升 40%",tools:["AE","Lottie","Principle","Hype 4"],desc:"搭建全产品线标准化动效设计体系，制定统一的动效规范与落地标准，覆盖微交互、页面转场、状态反馈、组件动画等核心场景，提升产品交互体验与视觉一致性。",highlights:["制定完整动效设计规范与组件库","统一全产品线动效语言与视觉节奏","动效交付与研发对接效率提升60%","产品操作反馈与体验质感显著优化"],screenshots:[FE,zE,BE,jE,HE],projectLink:"https://example.com/licheng-oa-desktop"}];function qE({item:s,onClose:e}){if(fe.useEffect(()=>(s&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[s]),!s)return null;const n=s.Bg;return u.jsx(Vo,{children:u.jsx("div",{className:"fixed inset-0 z-50 flex items-center sm:items-center justify-center px-6 sm:px-8 pt-8 sm:pt-12 pb-8",style:{background:"rgba(0,0,0,0.88)",backdropFilter:"blur(16px)"},onClick:e,children:u.jsxs("div",{className:"relative w-full sm:max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl",style:{background:"#0c0c18",border:"1px solid rgba(255,255,255,0.07)",boxShadow:`0 0 100px ${s.color}14`},onClick:r=>r.stopPropagation(),children:[u.jsx("button",{onClick:e,className:"sticky top-4 float-right mr-5 mt-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",style:{background:"rgba(0,0,0,0.65)",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.65)",backdropFilter:"blur(8px)"},onMouseEnter:r=>{r.currentTarget.style.background="rgba(0,0,0,0.85)",r.currentTarget.style.borderColor="rgba(255,255,255,0.2)",r.currentTarget.style.color="rgba(255,255,255,0.9)"},onMouseLeave:r=>{r.currentTarget.style.background="rgba(0,0,0,0.65)",r.currentTarget.style.borderColor="rgba(255,255,255,0.12)",r.currentTarget.style.color="rgba(255,255,255,0.65)"},children:u.jsx(Jr,{size:16})}),u.jsxs("div",{className:"relative h-52 overflow-hidden rounded-t-3xl sm:rounded-t-3xl",style:{marginTop:"-52px"},children:[u.jsx(n,{color:s.color}),u.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg,transparent 40%,#0c0c18 100%)"}}),u.jsx("div",{className:"absolute top-4 left-5",children:u.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(0,0,0,0.7)",border:`1px solid ${s.color}22`,color:s.color,backdropFilter:"blur(8px)"},children:s.year})})]}),u.jsxs("div",{className:"px-7 pb-8",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 mb-1",children:[u.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800,color:"#f0f4f8"},children:s.title}),u.jsx("span",{style:{fontSize:"2rem",fontWeight:900,color:`${s.color}20`,lineHeight:1},children:s.num})]}),u.jsx("p",{className:"text-sm mb-1",style:{color:s.color},children:s.sub}),u.jsx("p",{className:"text-xs mb-5",style:{color:"rgba(255,255,255,0.25)"},children:s.role}),u.jsx("p",{className:"mb-5",style:{fontSize:"0.875rem",color:"rgba(255,255,255,0.48)",lineHeight:1.85},children:s.desc}),u.jsx("div",{className:"grid grid-cols-1 gap-4 mb-5",children:u.jsxs("div",{children:[u.jsx("p",{className:"text-xs mb-2 tracking-wider",style:{color:"rgba(255,255,255,0.2)",letterSpacing:"0.12em"},children:"TOOLS"}),u.jsx("div",{className:"flex flex-nowrap gap-1.5 overflow-x-auto scrollbar-hide",children:s.tools.map(r=>u.jsx("span",{className:"px-2 py-1 text-xs rounded",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.42)"},children:r},r))})]})}),u.jsxs("div",{className:"rounded-xl p-4",style:{background:`${s.color}07`,border:`1px solid ${s.color}16`},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",style:{color:s.color},children:[u.jsx(nf,{size:12}),u.jsx("span",{className:"text-xs tracking-wider",style:{letterSpacing:"0.1em",fontWeight:600},children:"HIGHLIGHTS"})]}),s.highlights.map(r=>u.jsxs("div",{className:"flex items-start gap-2.5 mb-2",children:[u.jsx(Vx,{size:11,className:"mt-0.5 shrink-0",style:{color:s.color}}),u.jsx("span",{style:{fontSize:"0.8125rem",color:"rgba(255,255,255,0.48)",lineHeight:1.7},children:r})]},r))]}),s.screenshots&&s.screenshots.length>0&&u.jsxs("div",{className:"mt-6",children:[u.jsx("p",{className:"text-xs mb-3 tracking-wider",style:{color:"rgba(255,255,255,0.2)",letterSpacing:"0.12em"},children:"PROJECT SCREENSHOTS"}),u.jsx("div",{className:"grid grid-cols-1 gap-3",children:s.screenshots.map((r,a)=>u.jsx("div",{className:"relative overflow-hidden rounded-lg",style:{background:"rgba(255,255,255,0.02)",border:`1px solid ${s.color}12`,maxWidth:"100%"},children:u.jsx("img",{src:r,alt:`${s.title} 截图 ${a+1}`,className:"w-full h-auto",onError:l=>{const f=l.currentTarget;f.style.display="none";const d=f.parentElement;if(d&&!d.querySelector(".screenshot-error")){const p=document.createElement("div");p.className="screenshot-error absolute inset-0 flex items-center justify-center",p.style.cssText=`
                            background: rgba(14,14,26,0.9);
                            color: rgba(255,255,255,0.3);
                            font-size: 0.75rem;
                            text-align: center;
                          `,p.textContent="图片加载失败，请换个 WiFi 或使用自己的热点",d.appendChild(p)}}})},a))})]}),s.projectLink&&u.jsx("div",{className:"mt-6",children:u.jsxs("a",{href:s.projectLink,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm transition-all duration-300",style:{background:`${s.color}`,color:"#05050a",fontWeight:700,boxShadow:`0 0 30px ${s.color}40`},onMouseEnter:r=>{r.currentTarget.style.boxShadow=`0 0 40px ${s.color}60`,r.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:r=>{r.currentTarget.style.boxShadow=`0 0 30px ${s.color}40`,r.currentTarget.style.transform="translateY(0)"},children:[u.jsx(i0,{size:16,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"}),"查看完整项目"]})})]})]})})})}function Wr({item:s,tall:e,imageHeight:n,onOpen:r}){const[a,l]=fe.useState(!1),f=s.Bg;return u.jsxs("div",{className:"group relative rounded-2xl overflow-hidden cursor-pointer will-change-transform",style:{border:a?"1px solid rgba(255,255,255, 0.9)":"1px solid rgba(255,255,255,0.06)",transform:a?"scale(1.015)":"scale(1)",transition:"transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), border-color 0.2s ease",boxShadow:a?`0 20px 60px rgba(0,0,0,0.5), 0 0 50px ${s.color}08`:"none",background:"#0e0e1a",outline:"none",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",isolation:"isolate",backgroundColor:"#0e0e1a"},onMouseEnter:()=>l(!0),onMouseLeave:()=>{l(!1)},onClick:r,children:[u.jsxs("div",{className:"relative overflow-hidden rounded-t-2xl",style:{height:n||(e?300:260),WebkitBorderTopLeftRadius:"16px",WebkitBorderTopRightRadius:"16px",borderTopLeftRadius:"16px",borderTopRightRadius:"16px",WebkitBorderBottomLeftRadius:"0",WebkitBorderBottomRightRadius:"0",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},children:[s.coverImg&&u.jsx(u.Fragment,{children:u.jsx("img",{src:s.coverImg,alt:s.title,className:"absolute inset-0 w-full h-full object-cover object-top cover-image",style:{opacity:.85,transform:a?"scale(1.08)":"scale(1)",transition:"transform 0.3s ease-out",willChange:"transform",WebkitBorderTopLeftRadius:"16px",WebkitBorderTopRightRadius:"16px",borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},onError:d=>{const p=d.currentTarget;p.style.display="none";const m=p.parentElement;if(m&&!m.querySelector(".img-error-fallback")){const v=document.createElement("div");v.className="img-error-fallback absolute inset-0 flex items-center justify-center",v.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1;",v.textContent="图片加载失败，请换个 WiFi 或使用自己的热点",m.insertBefore(v,m.firstChild)}}})}),!s.coverImg&&u.jsx(f,{color:s.color}),u.jsx("div",{className:"absolute inset-0 pointer-events-none transition-opacity duration-300 md:block hidden",style:{background:"linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)",opacity:a?.01:.9,borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"}}),u.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(180deg,transparent 0%,rgba(16,16,26,0.01) 80%,rgba(16,16,26,0.01) 100%)",borderTopLeftRadius:"16px",borderTopRightRadius:"16px"}}),u.jsx("div",{className:"absolute top-4 left-4",children:u.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(16,16,26,0.8)",border:`1px solid ${s.color}22`,color:s.color,backdropFilter:"blur(8px)"},children:s.year})})]}),u.jsxs("div",{className:"p-5 bg-[#60606040] bg-[#60606042] m-[0px]",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 mb-2",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-0 mb-0.5",children:[u.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:`${s.color}50`,letterSpacing:"0.08em"},children:s.num}),u.jsx("h3",{style:{fontSize:"0.9375rem",fontWeight:700,color:"#f0f4f8"},children:s.title})]}),u.jsx("p",{className:"text-xs",style:{color:s.color,opacity:.75},children:s.sub})]}),u.jsx("span",{className:"shrink-0 text-xs px-2.5 py-1 rounded-lg",style:{color:s.color,fontWeight:600,whiteSpace:"nowrap",background:`color-mix(in srgb, ${s.color} 12%, transparent)`,border:`1px solid color-mix(in srgb, ${s.color} 14%, transparent)`},children:s.metric})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5 mt-3",children:s.tags.map(d=>u.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.3)"},children:d},d))})]})]})}function YE(){const[s,e]=fe.useState(null),{ref:n,vis:r}=GE(0),{theme:a}=Qs(),[l,f]=fe.useState(!1);return fe.useEffect(()=>{const d=()=>{f(window.innerWidth>=1024)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"portfolio",ref:n,className:"relative overflow-hidden",style:{background:"var(--bg)",padding:"80px 0 140px"},children:[u.jsx("div",{className:"absolute inset-x-0 top-0 h-px pointer-events-none",style:{background:`linear-gradient(90deg,transparent 10%,${a.purple}33 50%,transparent 90%)`}}),u.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,lineHeight:1,color:"rgba(255,255,255,0.05)",letterSpacing:"0.05em"},children:"WORKS"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 mb-20 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(30px)"},children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mb-5",children:[u.jsx("span",{className:"text-xm tracking-widest",style:{color:a.purple,letterSpacing:"0.2em",fontWeight:600},children:"SELECTED WORKS"}),u.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${a.purple}4d,transparent)`}})]}),u.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:"#f0f4f8",lineHeight:1.05,letterSpacing:"-0.04em"},children:"其他精选作品"})]}),u.jsx("div",{className:"lg:max-w-xs",children:u.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(255,255,255,0.28)",lineHeight:1.85},children:["点击任意卡片查看完整案例",u.jsx("br",{}),"设计过程 · 关键数据 · AI 应用"]})})]}),u.jsxs("div",{className:"grid lg:grid-cols-12 gap-4",children:[u.jsx("div",{className:"lg:col-span-7 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"60ms"},children:u.jsx(Wr,{item:Rn[0],tall:!0,onOpen:()=>e(Rn[0]),imageHeight:l?"320px":"200px"})}),u.jsx("div",{className:"lg:col-span-5 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"130ms"},children:u.jsx(Wr,{item:Rn[1],tall:!0,onOpen:()=>e(Rn[1]),imageHeight:l?"320px":"200px"})}),u.jsx("div",{className:"lg:col-span-6 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"200ms"},children:u.jsx(Wr,{item:Rn[2],onOpen:()=>e(Rn[2]),imageHeight:l?"330px":"200px"})}),u.jsx("div",{className:"lg:col-span-6 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"260ms"},children:u.jsx(Wr,{item:Rn[3],onOpen:()=>e(Rn[3]),imageHeight:l?"330px":"200px"})}),u.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"320ms"},children:u.jsx(Wr,{item:Rn[4],onOpen:()=>e(Rn[4]),imageHeight:l?"220px":"200px"})}),u.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"380ms"},children:u.jsx(Wr,{item:Rn[5],onOpen:()=>e(Rn[5]),imageHeight:l?"220px":"200px"})}),u.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"440ms"},children:u.jsx(Wr,{item:Rn[6],onOpen:()=>e(Rn[6]),imageHeight:l?"220px":"200px"})})]})]})]}),u.jsx(qE,{item:s,onClose:()=>e(null)})]})}const jo="#0c0b18",QE="#f0eef9";function KE(s=0){const e=fe.useRef(null),[n,r]=fe.useState(!1);return fe.useEffect(()=>{const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(setTimeout(()=>r(!0),s),a.disconnect())},{threshold:.04});return e.current&&a.observe(e.current),()=>a.disconnect()},[s]),{ref:e,vis:n}}const ZE=[{name:"精英校友奖",issuer:"集团招聘宣讲会",year:"2019",color:"#00b896",icon:"G"},{name:"十佳优秀员工",issuer:"山东爱城市网科技有限公司",year:"2020",color:"#7c6ff7",icon:"S"},{name:"集团 Logo 设计一等奖",issuer:"浪潮集团",year:"2020",color:"#f472b6",icon:"L"},{name:"创新人才奖",issuer:"浪潮集团",year:"2022",color:"#34d399",icon:"C"},{name:"山东省中级工程师职称",issuer:"山东省人社厅",year:"2024",color:"#fb923c",icon:"M"},{name:"已授权发明专利 4 项",issuer:"国家知识产权局",year:"2025",color:"#38bdf8",icon:"Z"}],JE=["App Design","Mobile Design","Saas Design","OA Design","Visual Design","Large Screen","Design Systems","Component Library","AI Workflow","Prototyping","Logo Design","Brand Identity","Motion Design","Front-End","BI / Data Vis","HTML+CSS","Lotties","设计提效","政务服务","TMS System","能碳管控","智慧园区","智慧工地","产品发布会PPT"];function $E({c:s,delay:e}){const[n,r]=fe.useState(!1),a=fe.useRef(null),[l,f]=fe.useState(!1);return fe.useEffect(()=>{const d=new IntersectionObserver(([p])=>{p.isIntersecting&&(setTimeout(()=>f(!0),e),d.disconnect())},{threshold:.1});return a.current&&d.observe(a.current),()=>d.disconnect()},[e]),u.jsxs("div",{ref:a,className:"flex items-center gap-3 p-4 rounded-2xl cursor-default select-none transition-all duration-250",style:{background:n?"white":"rgba(255,255,255,0.5)",border:n?`1px solid ${s.color}25`:"1px solid rgba(12,11,24,0.06)",transform:n?"translateY(-3px) scale(1.01)":l?"translateY(0) scale(1)":"translateY(12px) scale(0.97)",opacity:l?1:0,transition:`all 0.4s cubic-bezier(0.34,1.2,0.64,1) ${e}ms`,boxShadow:n?`0 8px 28px rgba(0,0,0,0.1), 0 0 20px ${s.color}10`:"none"},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[u.jsx("div",{className:"w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-sm transition-all duration-200",style:{background:n?`${s.color}18`:`${s.color}0e`,border:`1px solid ${s.color}20`,color:s.color,fontWeight:800,boxShadow:n?`0 0 12px ${s.color}20`:"none"},children:s.icon}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("p",{style:{fontSize:"0.8125rem",fontWeight:600,color:jo,lineHeight:1.3},children:s.name}),u.jsx("p",{className:"text-xs mt-0.5 truncate",style:{color:"rgba(12,11,24,0.38)"},children:s.issuer})]}),u.jsx("span",{className:"text-xs shrink-0",style:{color:s.color,fontWeight:700},children:s.year})]})}function ew(){const{ref:s,vis:e}=KE(.03),{theme:n}=Qs();return u.jsxs("section",{id:"education",ref:s,className:"relative overflow-hidden",style:{background:QE,padding:"80px 0 140px"},children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.02]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"160px"}}),u.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,color:"rgba(12,11,24,0.03)",lineHeight:1,letterSpacing:"0.05em"},children:"EDUCATION"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[60px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[u.jsx("span",{className:"text-xm tracking-widest",style:{color:n.purple,letterSpacing:"0.2em",fontWeight:600},children:"BACKGROUND"}),u.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${n.purple}66,transparent)`}})]}),u.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:jo,lineHeight:1.05,letterSpacing:"-0.04em"},children:"教育 & 认证"})]}),u.jsx("div",{className:"lg:max-w-xs",children:u.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.42)",lineHeight:1.85},children:["参加系统培训 UI/UX 设计",u.jsx("br",{}),"持续学习 AI 与新兴技术",u.jsx("br",{}),"多项专业认证"]})})]}),u.jsxs("div",{className:"grid lg:grid-cols-[1fr_1px_1fr] gap-0",children:[u.jsxs("div",{className:"pr-0 lg:pr-12",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[u.jsx(Wp,{size:13,style:{color:"#7c6ff7"}}),u.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"EDUCATION"})]}),u.jsxs("div",{className:"relative flex gap-5 mb-2 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)"},children:[u.jsxs("div",{className:"flex flex-col items-center shrink-0",style:{width:40},children:[u.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(124,111,247,0.1)",border:"2px solid #7c6ff7",boxShadow:"0 0 20px rgba(124,111,247,0.2)"},children:u.jsx(Wp,{size:15,style:{color:"#7c6ff7"}})}),u.jsx("div",{className:"w-px mt-2 flex-1",style:{background:"rgba(12,11,24,0.1)",minHeight:24}})]}),u.jsxs("div",{className:"pb-6",children:[u.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-2",children:[u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:jo},children:"中国石油大学（华东） · 储运与建筑学院"}),u.jsx("p",{className:"text-sm mt-0.5",style:{color:"#7c6ff7",fontWeight:600},children:"建筑环境与能源应用工程 · 本科学位"})]}),u.jsxs("div",{className:"text-right",children:[u.jsx("span",{className:"text-xs",style:{color:"rgba(12,11,24,0.35)"},children:"2011 — 2015"}),u.jsx("p",{className:"text-xs mt-0.5",style:{color:"rgba(12,11,24,0.3)"},children:"GPA 4.3 / 5.0"})]})]}),u.jsx("p",{className:"mb-4",style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.48)",lineHeight:1.85},children:"自主深耕 UI/UX 设计与数据可视化领域，将工程逻辑与用户体验设计结合，主导多个 B 端可视化与移动端项目，形成 “工程思维 + 设计落地” 的独特优势。"}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:["专业前 10%","优秀学生干部","校级奖学金 ×3"].map(r=>u.jsxs("div",{className:"rounded-xl p-2.5 text-center",style:{background:"rgba(124,111,247,0.06)",border:"1px solid rgba(124,111,247,0.12)"},children:[u.jsx(Ru,{size:12,className:"mx-auto mb-1",style:{color:"#7c6ff7"}}),u.jsx("span",{style:{fontSize:"0.6875rem",color:"rgba(12,11,24,0.5)",lineHeight:1.4,display:"block"},children:r})]},r))})]})]}),u.jsxs("div",{className:"relative flex gap-5 mb-2 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"120ms"},children:[u.jsxs("div",{className:"flex flex-col items-center shrink-0",style:{width:40},children:[u.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(0,240,200,0.08)",border:"2px solid rgba(0,240,200,0.5)"},children:u.jsx(Ru,{size:14,style:{color:"#00b896"}})}),u.jsx("div",{className:"w-px mt-2 flex-1",style:{background:"rgba(12,11,24,0.1)",minHeight:24}})]}),u.jsxs("div",{className:"pb-6",children:[u.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-2",children:[u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:jo},children:"Google UX Design Certificate"}),u.jsx("p",{className:"text-sm mt-0.5",style:{color:"#11AF95",fontWeight:600},children:"专业认证 · Coursera"})]}),u.jsx("span",{className:"text-xs",style:{color:"rgba(12,11,24,0.35)"},children:"2017"})]}),u.jsx("p",{className:"mb-4",style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.48)",lineHeight:1.85},children:"系统学习 UI/UX 设计全链路技能，覆盖 PS、AI、AE、C4D 视觉设计工具，Axure、Sketch 原型交互工具，以及 HTML+CSS 前端基础与用户研究方法论，完成从视觉到交互的完整设计能力构建。"}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:["全栈设计工具掌握","Google 官方认证","团队项目第一名"].map(r=>u.jsxs("div",{className:"rounded-xl p-2.5 text-center",style:{background:"rgba(0,240,200,0.08)",border:"1px solid rgba(0,240,200,0.2)"},children:[u.jsx(lv,{size:12,className:"mx-auto mb-1",style:{color:"#00b896"}}),u.jsx("span",{style:{fontSize:"0.6875rem",color:"rgba(12,11,24,0.5)",lineHeight:1.4,display:"block"},children:r})]},r))})]})]}),u.jsxs("div",{className:"relative flex gap-5 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"200ms"},children:[u.jsx("div",{className:"shrink-0 flex items-s't",style:{width:40},children:u.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(251,146,60,0.08)",border:"2px dashed rgba(251,146,60,0.3)"},children:u.jsx(l1,{size:14,style:{color:"#fb923c"}})})}),u.jsxs("div",{className:"flex-1 rounded-2xl p-4",style:{background:"rgba(251,146,60,0.05)",border:"1px solid rgba(251,146,60,0.14)"},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-pulse",style:{background:"#fb923c",boxShadow:"0 0 8px #fb923c"}}),u.jsx("span",{className:"text-xs",style:{color:"#fb923c",fontWeight:700},children:"进行中"})]}),u.jsx("p",{style:{fontSize:"0.875rem",fontWeight:600,color:jo},children:"Advanced AI for UX"}),u.jsx("p",{className:"text-xs mt-0.5",style:{color:"rgba(12,11,24,0.38)"},children:"Stanford Online · 持续学习中…"})]})]})]}),u.jsx("div",{className:"hidden lg:block my-4",style:{background:"linear-gradient(180deg,transparent,rgba(12,11,24,0.1) 20%,rgba(12,11,24,0.1) 80%,transparent)"}}),u.jsxs("div",{className:"pl-0 lg:pl-12 mt-12 lg:mt-0",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[u.jsx(Ru,{size:13,style:{color:"#f472b6"}}),u.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"CERTIFICATIONS"})]}),u.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 mb-12",children:ZE.map((r,a)=>u.jsx($E,{c:r,delay:65},r.name))}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full",style:{background:"#f472b6"}}),u.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"EXPERTISE KEYWORDS"})]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:JE.map((r,a)=>u.jsx("span",{className:"px-3 py-1.5 rounded-lg text-xs cursor-default select-none transition-all duration-300",style:{background:"rgba(255,255,255,0.6)",border:"1px solid rgba(12,11,24,0.08)",color:"rgba(12,11,24,0.5)",opacity:e?1:0,transform:e?"scale(1)":"scale(0.88)",transition:"opacity 0.4s, transform 0.4s, background 0s, border-color 0s, color 0s",transitionDelay:"0ms"},onMouseEnter:l=>{const f=["#00b896","#7c6ff7","#f472b6","#34d399","#fb923c","#38bdf8"],d=f[a%f.length];l.currentTarget.style.background=`${d}12`,l.currentTarget.style.borderColor=`${d}22`,l.currentTarget.style.color=d},onMouseLeave:l=>{l.currentTarget.style.background="rgba(255,255,255,0.6)",l.currentTarget.style.borderColor="rgba(12,11,24,0.08)",l.currentTarget.style.color="rgba(12,11,24,0.5)"},children:r},r))})]})]})]})]})]})}const tw="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function nw(s){const[e,n]=fe.useState(!1),r=()=>{n(!0)},{src:a,alt:l,style:f,className:d,...p}=s;return e?u.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${d??""}`,style:f,children:u.jsx("div",{className:"flex items-center justify-center w-full h-full",children:u.jsx("img",{src:tw,alt:"Error loading image",...p,"data-original-url":a})})}):u.jsx("img",{src:a,alt:l,className:d,style:f,...p,onError:r})}const iw="/assets/wx-BH8O_PaO.jpg",rw=({size:s=20,color:e="currentColor"})=>u.jsx("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"#07C160",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M10.0014 14.6757C10.0011 14.6551 10.001 14.6345 10.001 14.6138C10.001 12.1055 12.0175 9.99564 14.7539 9.38092C14.3904 7.07873 11.9602 5.19995 8.90098 5.19995C5.58037 5.19995 3.00098 7.41344 3.00098 9.9793C3.00098 10.9487 3.36131 11.88 4.04082 12.6781C4.0728 12.7157 4.12443 12.7717 4.19342 12.8427C4.78537 13.4517 5.13709 14.2457 5.19546 15.0805C5.90857 14.6683 6.74285 14.5123 7.55832 14.6392C7.72416 14.665 7.85986 14.6847 7.96345 14.6982C8.27111 14.7383 8.58419 14.7586 8.90098 14.7586C9.27825 14.7586 9.64595 14.7301 10.0014 14.6757ZM10.4581 16.627C9.95467 16.7133 9.43399 16.7586 8.90098 16.7586C8.49441 16.7586 8.09502 16.7323 7.70499 16.6815C7.58312 16.6656 7.4317 16.6436 7.25073 16.6154C6.87693 16.5572 6.49436 16.6321 6.1713 16.8268L4.26653 17.9745C4.12052 18.0646 3.94891 18.1057 3.77733 18.0916C3.33814 18.0554 3.01178 17.6744 3.04837 17.2405L3.19859 15.4596C3.23664 15.0086 3.07664 14.5632 2.75931 14.2367C2.66182 14.1364 2.5814 14.0491 2.51802 13.9747C1.56406 12.8542 1.00098 11.4732 1.00098 9.9793C1.00098 6.23517 4.53793 3.19995 8.90098 3.19995C12.9601 3.19995 16.3041 5.82699 16.7504 9.20788C20.1225 9.36136 22.801 11.723 22.801 14.6138C22.801 15.8068 22.3448 16.9097 21.572 17.8044C21.5206 17.8639 21.4555 17.9336 21.3765 18.0137C21.1194 18.2744 20.9898 18.6301 21.0206 18.9903L21.1423 20.4125C21.172 20.759 20.9076 21.0632 20.5518 21.0921C20.4128 21.1034 20.2738 21.0706 20.1555 20.9986L18.6124 20.0821C18.3506 19.9266 18.0407 19.8668 17.7379 19.9133C17.5913 19.9358 17.4686 19.9533 17.3699 19.966C17.0539 20.0066 16.7303 20.0277 16.401 20.0277C13.7074 20.0277 11.4025 18.6201 10.4581 16.627ZM17.4346 17.9364C18.0019 17.8494 18.5793 17.911 19.1105 18.1111C19.2492 17.5503 19.5373 17.0304 19.9524 16.6094C20.0027 16.5585 20.0388 16.5198 20.0584 16.4971C20.5467 15.9318 20.801 15.2839 20.801 14.6138C20.801 12.8095 18.8983 11.2 16.401 11.2C13.9037 11.2 12.001 12.8095 12.001 14.6138C12.001 16.4181 13.9037 18.0277 16.401 18.0277C16.6424 18.0277 16.8809 18.0124 17.115 17.9823C17.1957 17.972 17.3029 17.9566 17.4346 17.9364Z"})});function sw(s=0){const e=fe.useRef(null),[n,r]=fe.useState(!1);return fe.useEffect(()=>{const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(setTimeout(()=>r(!0),s),a.disconnect())},{threshold:.04});return e.current&&a.observe(e.current),()=>a.disconnect()},[s]),{ref:e,vis:n}}function Zm({children:s,onClick:e,primary:n,color:r}){const a=fe.useRef(null),[l,f]=fe.useState({x:0,y:0}),[d,p]=fe.useState(!1);return u.jsx("button",{ref:a,className:"relative flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm overflow-hidden",style:{background:n?"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))":"transparent",border:n?"none":"1px solid rgba(var(--c1), 0.3)",color:n?"var(--bg)":"rgba(var(--c1)",fontWeight:n?700:500,transform:`translate(${l.x}px,${l.y}px)`,transition:d?"transform 0.2s ease-out,box-shadow 0.2s":"transform 0.5s cubic-bezier(0.23,1,0.32,1),box-shadow 0.2s",boxShadow:d&&n?"0 0 35px rgba(var(--c1), 0.4)":"none",cursor:"default"},onMouseMove:m=>{const v=a.current.getBoundingClientRect();f({x:(m.clientX-v.left-v.width/2)*.4,y:(m.clientY-v.top-v.height/2)*.4})},onMouseEnter:()=>p(!0),onMouseLeave:()=>{p(!1),f({x:0,y:0})},onClick:e,children:s})}const ow=[{icon:u.jsx(tf,{size:15}),label:"Email",value:"quweijia@vip.qq.com",href:"mailto:quweijia@vip.qq.com",color:"rgb(var(--c1))"},{icon:u.jsx(Lv,{size:15}),label:"PhoneCall",value:"156-6279-6885",href:" ",color:"#f0f4f8"},{icon:u.jsx(rw,{size:15}),label:"WeChat",value:"vic-qu",href:" ",color:"#07C160"},{icon:u.jsx($v,{size:15}),label:"X / Twitter",value:"@vicqu_design",href:"https://twitter.com",color:"#7c6ff7"}],aw=[{label:"Response Rate",value:"97%",color:"rgb(var(--c1))"},{label:"Reply Time",value:"< 24h",color:"#7c6ff7"},{label:"Remote OK",value:"Yes",color:"#f472b6"},{label:"Availability",value:"On",color:"#34d399"}];function lw({s,onQRCodeClick:e}){const[n,r]=fe.useState(!1),[a,l]=fe.useState(!1),f=s.label==="Email",d=s.label==="PhoneCall",p=s.label==="WeChat",m=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),v=async y=>{if(f){y.preventDefault();const S="quweijia@vip.qq.com";try{await navigator.clipboard.writeText(S),l(!0),setTimeout(()=>l(!1),2e3)}catch{try{const b=document.createElement("textarea");b.value=S,b.style.position="fixed",b.style.left="-999999px",b.style.top="-999999px",document.body.appendChild(b),b.focus(),b.select();const w=document.execCommand("copy");document.body.removeChild(b),w&&(l(!0),setTimeout(()=>l(!1),2e3))}catch(b){console.error("Failed to copy email:",b)}}}else if(d)if(m)window.location.href="tel:15662796885";else{y.preventDefault();const S="15662796885";try{await navigator.clipboard.writeText(S),l(!0),setTimeout(()=>l(!1),2e3)}catch{try{const b=document.createElement("textarea");b.value=S,b.style.position="fixed",b.style.left="-999999px",b.style.top="-999999px",document.body.appendChild(b),b.focus(),b.select();const w=document.execCommand("copy");document.body.removeChild(b),w&&(l(!0),setTimeout(()=>l(!1),2e3))}catch(b){console.error("Failed to copy phone:",b)}}}else p&&(y.preventDefault(),e&&e(),m&&setTimeout(()=>{window.location.href="weixin://"},100))};return u.jsxs("a",{href:d&&m?"tel:15662796885":s.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-4 rounded-xl transition-all duration-200",style:{background:n?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.06)",border:n?`1px solid ${s.color}25`:"1px solid rgba(255,255,255,0.12)",transform:n?"translateX(6px)":"none",textDecoration:"none",cursor:f||d||p?"pointer":"default"},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),onClick:v,children:[u.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200",style:{background:`${s.color}10`,border:`1px solid ${s.color}18`,color:s.color,boxShadow:n?`0 0 14px ${s.color}20`:"none"},children:s.icon}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("p",{style:{fontSize:"0.8125rem",fontWeight:600,color:"#f0f4f8"},children:s.label}),u.jsx("p",{className:"text-xs mt-1.5 truncate",style:{color:"rgba(255,255,255,0.5)"},children:s.value})]}),f||d&&!m||p?a?u.jsx(r0,{size:11,style:{color:s.color,opacity:1,transition:"opacity 0.2s",flexShrink:0}}):u.jsx(a0,{size:11,style:{color:"rgba(255,255,255,0.2)",opacity:n?1:0,transition:"opacity 0.2s",flexShrink:0}}):u.jsx(ef,{size:11,style:{color:"rgba(255,255,255,0.2)",opacity:n?1:0,transition:"opacity 0.2s",flexShrink:0}})]})}function cw(){const{ref:s,vis:e}=sw(.04),{theme:n}=Qs(),[r,a]=fe.useState(""),[l,f]=fe.useState(!1),[d,p]=fe.useState(!1),[m,v]=fe.useState(!1),[y,S]=fe.useState(!1),[M,b]=fe.useState(!1),w=()=>{const N=document.createElement("a");N.href="https://raw.githubusercontent.com/quweijia/file/main/1%E3%80%81UI%20%E4%B8%BB%E7%AE%A1-%E6%9B%B2%E7%BB%B4%E7%94%B2-15662796885.pdf",N.download="曲维甲-UI主管-简历.pdf",N.target="_blank",N.rel="noopener noreferrer",document.body.appendChild(N),N.click(),document.body.removeChild(N)},_=()=>{if(!r.trim())return;if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const D=encodeURIComponent(r);window.location.href=`sms:15662796885${/iPhone|iPad|iPod/i.test(navigator.userAgent)?"&":"?"}body=${D}`,setTimeout(()=>{a("")},500)}else b(!0)},x=async()=>{const N="quweijia@vip.qq.com";try{await navigator.clipboard.writeText(N),S(!0),setTimeout(()=>{S(!1)},2e3)}catch{try{const R=document.createElement("textarea");R.value=N,R.style.position="fixed",R.style.left="-999999px",R.style.top="-999999px",document.body.appendChild(R),R.focus(),R.select();const K=document.execCommand("copy");document.body.removeChild(R),K&&(S(!0),setTimeout(()=>{S(!1)},2e3))}catch(R){console.error("Failed to copy email:",R)}}};return u.jsxs("section",{id:"contact",ref:s,className:"relative overflow-hidden",style:{background:"var(--bg)",padding:"180px 0 20px"},children:[u.jsx("div",{className:"absolute inset-x-0 top-0 h-px pointer-events-none",style:{background:`linear-gradient(90deg,transparent 5%,${n.cyan}2e 50%,transparent 95%)`}}),u.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none",style:{background:`radial-gradient(ellipse,${n.cyan}4d 0%,transparent 70%)`,filter:"blur(30px)"}}),u.jsx("div",{className:"absolute inset-x-0 top-0 flex items-start justify-center overflow-hidden pointer-events-none select-none",style:{paddingTop:"360px"},children:u.jsx("span",{style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,letterSpacing:"0.05em",color:"rgba(255,255,255,0.018)",whiteSpace:"nowrap"},children:"Vic Qu"})}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[u.jsxs("div",{className:"text-center transition-all duration-700 mx-[0px] mt-6 mb-[80px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[u.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:n.cyan,letterSpacing:"0.22em",fontWeight:600},children:"GET IN TOUCH"}),u.jsxs("h2",{style:{fontSize:"clamp(2.8rem,7vw,5.5rem)",fontWeight:900,lineHeight:1.2,letterSpacing:"0em",color:"#f0f4f8"},children:["一起创造",u.jsx("br",{}),u.jsx("span",{style:{background:"linear-gradient(135deg, rgb(var(--c1)) 0%, rgb(var(--c2)) 25%, rgb(var(--c3)) 50%, rgb(var(--c2)) 75%, rgb(var(--c1)) 100%)",backgroundSize:"200% 200%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline-block",animation:"flowGradient 6s ease infinite"},children:"卓越的设计"})]}),u.jsx("svg",{viewBox:"0 0 400 20",className:"mx-auto mt-5 mb-5",style:{width:"min(400px,80%)",opacity:.15},children:u.jsx("path",{d:"M0 10 C40 2 80 18 120 10 S200 2 240 10 S320 18 360 10 S390 4 400 10",fill:"none",stroke:n.cyan,strokeWidth:"1.5"})}),u.jsxs("p",{className:"max-w-md mx-auto",style:{fontSize:"1rem",color:"rgba(255,255,255,0.35)",lineHeight:1.85},children:["岗位意向：UI/UX 设计主管职位",u.jsx("br",{}),"欢迎探讨设计项目合作或咨询机会"]}),u.jsxs("div",{className:"inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"},children:[u.jsx(l0,{size:11,style:{color:"rgba(255,255,255,0.3)"}}),u.jsx("span",{className:"text-xs",style:{color:"rgba(255,255,255,0.3)"},children:"济南 · 中国，接受全球远程机会"})]}),u.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mt-8",children:[u.jsxs("div",{className:"relative",children:[u.jsxs(Zm,{primary:!0,onClick:()=>v(!m),children:[u.jsx(tf,{size:14})," 发送邮件"]}),m&&u.jsxs("div",{className:"absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-xl",style:{bottom:"calc(100% + 12px)",background:"rgba(20, 20, 25, 0.95)",backdropFilter:"blur(12px)",border:"1px solid rgba(var(--c1), 0.3)",boxShadow:"0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(var(--c1), 0.15)",whiteSpace:"nowrap",zIndex:50,animation:"fadeInUp 0.3s ease-out"},children:[u.jsx("span",{className:"text-sm select-all",style:{color:"#f0f4f8",fontWeight:500,fontFamily:"monospace"},children:"quweijia@vip.qq.com"}),u.jsx("button",{onClick:x,className:"flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-200 hover:scale-110",style:{background:y?"rgba(var(--c1), 0.2)":"rgba(255,255,255,0.1)",border:y?"1px solid rgba(var(--c1), 0.4)":"1px solid rgba(255,255,255,0.15)",color:y?"rgb(var(--c1))":"rgba(255,255,255,0.6)"},children:y?u.jsx(r0,{size:13}):u.jsx(a0,{size:13})}),u.jsx("div",{className:"absolute left-1/2 -translate-x-1/2",style:{bottom:"-6px",width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid rgba(var(--c1), 0.3)"}}),u.jsx("div",{className:"absolute left-1/2 -translate-x-1/2",style:{bottom:"-5px",width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid rgba(20, 20, 25, 0.95)"}})]})]}),u.jsxs(Zm,{onClick:()=>p(!0),children:[u.jsx(ud,{size:14})," 下载 PDF 简历"]})]})]}),u.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(20px)",transitionDelay:"100ms"},children:aw.map((N,D)=>u.jsxs("div",{className:"rounded-2xl p-5 text-center group cursor-default select-none transition-all duration-200 hover:scale-[1.02]",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",transitionDelay:`${D*50}ms`},children:[u.jsx("div",{style:{fontSize:"1.625rem",fontWeight:900,color:N.color,lineHeight:1},children:N.value}),u.jsx("p",{className:"mt-1.5 text-xs",style:{color:"rgba(255,255,255,0.3)",letterSpacing:"0.06em"},children:N.label})]},N.label))}),u.jsxs("div",{className:"grid lg:grid-cols-3 gap-6 mb-20",children:[u.jsxs("div",{className:"transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"150ms"},children:[u.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"CONNECT"}),u.jsx("div",{className:"space-y-2.5",children:ow.map(N=>u.jsx(lw,{s:N,onQRCodeClick:N.label==="WeChat"?()=>b(!0):void 0},N.label))})]}),u.jsxs("div",{className:"transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(20px)",transitionDelay:"220ms"},children:[u.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"RESUME"}),u.jsxs("div",{className:"relative overflow-hidden rounded-2xl p-6 h-[calc(100%-40px)]",style:{background:"linear-gradient(135deg,rgba(0,240,200,0.08) 0%,rgba(124,111,247,0.05) 100%)",border:"1px solid rgba(0,240,200,0.12)"},children:[u.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{opacity:.04},children:[[15,30,45,60,75,90].map(N=>u.jsx("line",{x1:"0",y1:N,x2:"100",y2:N,stroke:"rgb(var(--c1))",strokeWidth:"0.5"},N)),[15,30,45,60,75,90].map(N=>u.jsx("line",{x1:N,y1:"0",x2:N,y2:"100",stroke:"rgb(var(--c1))",strokeWidth:"0.5"},N))]}),u.jsx("div",{className:"absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none",style:{background:"radial-gradient(circle,rgba(0,240,200,0.1) 0%,transparent 70%)"}}),u.jsxs("div",{className:"relative z-10",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 6px rgb(var(--c1))"}}),u.jsx("span",{className:"text-xs",style:{color:"rgb(var(--c1))",fontWeight:600,letterSpacing:"0.1em"},children:"RESUME · 简历"})]}),u.jsx("h3",{className:"mt-3 mb-1",style:{fontSize:"1.125rem",fontWeight:800,color:"#f0f4f8"},children:"曲维甲 · Vic Qu"}),u.jsx("p",{className:"text-xs mb-5",style:{color:"rgb(var(--c1))",fontWeight:500},children:"ENFJ · Full-Stack UI/UX Designer"}),u.jsx("p",{className:"mb-5",style:{fontSize:"0.8125rem",color:"rgba(255,255,255,0.4)",lineHeight:1.8},children:"PDF简历：个人信息、求职意向、教育背景、工作经历、技能清单等。"}),u.jsx("div",{className:"flex gap-6 mb-6",children:[["10+","年经验"],["60+","项目"],["20+","AI工具"]].map(([N,D])=>u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"1.125rem",fontWeight:800,color:"#f0f4f8",lineHeight:1.5},children:N}),u.jsx("div",{className:"text-xs mt-0.5",style:{color:"rgba(255,255,255,0.28)"},children:D})]},D))}),u.jsxs("div",{className:"flex flex-wrap gap-3",children:[u.jsxs("button",{onClick:()=>p(!0),className:"flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.03]",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",color:"var(--bg)",fontWeight:700,boxShadow:"0 0 20px rgba(var(--c1), 0.2)"},children:[u.jsx(ud,{size:13,style:{color:"var(--bg)"}})," ","下载 PDF"]}),u.jsxs("button",{className:"flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.02]",style:{border:"1px solid rgba(var(--c1), 0.3)",color:"rgb(var(--c1))",background:"rgba(var(--c1), 0.08)"},children:[u.jsx(ef,{size:13,style:{color:"rgb(var(--c1))"}})," ","在线版"]})]})]})]})]}),u.jsxs("div",{className:"transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(20px)",transitionDelay:"290ms"},children:[u.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"QUICK MESSAGE"}),u.jsxs("div",{className:"rounded-2xl p-5 mb-4",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)"},children:[u.jsx("textarea",{value:r,onChange:N=>a(N.target.value),rows:5,placeholder:"你好 Vic！我对你的设计作品很感兴趣，希望能进一步交流...",className:"w-full resize-none outline-none text-sm mb-3",style:{background:"transparent",color:"#f0f4f8",lineHeight:1.7}}),u.jsx("button",{onClick:_,disabled:!r.trim(),className:"w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm transition-all duration-200",style:{background:r.trim()?l?"rgba(var(--c1), 0.1)":"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))":"rgba(255, 255, 255, 0.05)",color:r.trim()?l?"rgb(var(--c1))":"var(--bg)":"rgba(255, 255, 255, 0.3)",fontWeight:700,border:r.trim()?l?"1px solid rgba(var(--c1), 0.3)":"none":"1px solid rgba(255, 255, 255, 0.1)",cursor:r.trim()?"pointer":"not-allowed",opacity:r.trim()?1:.5},children:l?u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"✓"})," 已发送！"]}):u.jsxs(u.Fragment,{children:[u.jsx(Vv,{size:13,style:{color:r.trim()?"var(--bg)":"rgba(255, 255, 255, 0.3)"}})," ","发送消息"]})})]}),u.jsxs("div",{className:"rounded-xl p-4 flex items-start gap-3",style:{background:"rgba(0,240,200,0.04)",border:"1px solid rgba(0,240,200,0.1)"},children:[u.jsx("div",{className:"shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center",style:{background:"rgba(0,240,200,0.08)"},children:u.jsx("span",{className:"w-2.5 h-2.5 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 10px rgb(var(--c1))"}})}),u.jsxs("div",{children:[u.jsx("p",{style:{fontSize:"0.875rem",fontWeight:600,color:"#f0f4f8"},children:"目前接受新机会"}),u.jsxs("p",{className:"text-xs mt-0.5",style:{color:"rgba(255,255,255,0.3)",lineHeight:1.6},children:["全职设计师 · 项目合作 · 设计咨询",u.jsx("br",{}),"回复率 97% · 通常 24 小时内响应"]})]})]})]})]}),u.jsxs("div",{className:"pt-7 flex flex-wrap items-center justify-between gap-4",style:{borderTop:"1px solid rgba(255,255,255,0.04)"},children:[u.jsx("div",{className:"flex items-center gap-3",children:u.jsxs("p",{className:"text-xs",style:{color:"rgba(255,255,255,0.2)"},children:["© 2026 · Vic Qu · Designed by Figma"," ",u.jsx("span",{style:{color:"rgb(var(--c1))"},children:"&"}),"TRAE CN"]})}),u.jsx("p",{className:"text-xs",style:{color:"rgba(255,255,255,0.2)"},children:"React · Tailwind · Motion · AI-Augmented · Github"})]})]}),u.jsx(u0,{isOpen:d,onClose:()=>p(!1),onConfirm:w}),M&&u.jsx(Vo,{children:u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(12px)"},onClick:()=>b(!1),children:u.jsxs("div",{className:"relative max-w-md w-full",onClick:N=>N.stopPropagation(),children:[u.jsx("button",{onClick:()=>b(!1),className:"absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"rgba(255, 255, 255, 0.9)"},children:u.jsx(Jr,{size:20})}),u.jsx("div",{className:"rounded-2xl overflow-hidden",style:{background:"white",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)"},children:u.jsx(nw,{src:iw,alt:"WeChat QR Code - 长按识别二维码",className:"w-full h-auto",style:{display:"block"}})}),u.jsx("p",{className:"text-center mt-4",style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"0.875rem"},children:"长按图片保存或识别二维码"})]})})})]})}function uw(){const[s,e]=fe.useState(!1),[n,r]=fe.useState(!1),[a,l]=fe.useState(60),[f,d]=fe.useState(0),[p,m]=fe.useState(0),[v,y]=fe.useState(!1),[S,M]=fe.useState(0),[b,w]=fe.useState("bars"),[_,x]=fe.useState(new Array(64).fill(0)),N=fe.useRef(null),D=fe.useRef(null),R=[{name:"Deep Space Drift",artist:"Vic Qu · Ambient",url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},{name:"Neon Dreams",artist:"Vic Qu · Electronic",url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},{name:"Urban Flow",artist:"Vic Qu · Chill",url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"}],K=R[S];fe.useEffect(()=>{N.current&&(N.current.volume=a/100,N.current.muted=n)},[a,n]),fe.useEffect(()=>{const ee=N.current;if(!ee)return;const z=()=>d(ee.currentTime),pe=()=>m(ee.duration),se=()=>{S<R.length-1?M(S+1):e(!1)};return ee.addEventListener("timeupdate",z),ee.addEventListener("loadedmetadata",pe),ee.addEventListener("ended",se),()=>{ee.removeEventListener("timeupdate",z),ee.removeEventListener("loadedmetadata",pe),ee.removeEventListener("ended",se)}},[S,R.length]),fe.useEffect(()=>{const ee=N.current;ee&&(ee.load(),s&&ee.play().catch(console.log))},[S,s]),fe.useEffect(()=>{if(s){const ee=()=>{x(Array.from({length:64},()=>Math.random()*.8+.2)),D.current=requestAnimationFrame(ee)};ee()}else D.current&&cancelAnimationFrame(D.current),x(new Array(64).fill(.1));return()=>{D.current&&cancelAnimationFrame(D.current)}},[s]);const B=async()=>{const ee=N.current;if(ee)if(s)ee.pause(),e(!1);else try{await ee.play(),e(!0)}catch(z){console.log("播放失败：",z)}},U=()=>y(!v),O=()=>r(!n),P=ee=>{l(Number(ee.target.value))},A=ee=>{if(!N.current||!p)return;const z=(ee.clientX-ee.currentTarget.getBoundingClientRect().left)/ee.currentTarget.offsetWidth;N.current.currentTime=z*p},j=()=>{S>0&&M(S-1)},ue=()=>{S<R.length-1&&M(S+1)},Z=ee=>{if(isNaN(ee))return"0:00";const z=Math.floor(ee/60),pe=Math.floor(ee%60).toString().padStart(2,"0");return`${z}:${pe}`},de=()=>{const ee=["bars","wave","circle","spectrum"];w(ee[(ee.indexOf(b)+1)%ee.length])},me=()=>{const z=Math.floor(_.length/32);switch(b){case"bars":return u.jsx("div",{className:"flex items-end justify-center gap-1 h-24 px-2",children:Array.from({length:32}).map((pe,se)=>{const F=_[se*z]||.1,ie=s?Math.max(4,F*80):4;return u.jsx("div",{className:"flex-1 rounded-t-full transition-all",style:{height:`${ie}px`,background:"linear-gradient(to top, rgb(var(--c1)), rgb(var(--c2)))"}},se)})});case"wave":return u.jsx("svg",{className:"w-full h-24",viewBox:"0 0 320 50",children:u.jsx("path",{d:"M0 30 "+Array.from({length:32}).map((pe,se)=>`L${se/32*320} ${48-(_[se*z]||0)*40}`).join(" "),fill:"none",stroke:"rgb(var(--c1))",strokeWidth:"1"})});case"circle":return u.jsx("div",{className:"relative w-full h-24 flex items-center justify-center",children:Array.from({length:24}).map((pe,se)=>{const F=_[Math.floor(se/24*_.length)]||.2,ie=s?20+F*25:20;return u.jsx("div",{className:"absolute w-0.5 rounded-full",style:{height:`${ie}px`,background:"rgb(var(--c2))",transform:`rotate(${se*15}deg) translateY(-${ie/2}px)`}},se)})});default:return u.jsx("div",{className:"h-24 flex items-center justify-center text-white",children:"🎵"})}},ce=()=>{switch(b){case"bars":return u.jsx(ev,{size:14});case"wave":return u.jsx(Hx,{size:14});case"circle":return u.jsx(Xp,{size:14});default:return u.jsx(Xp,{size:14})}};return u.jsxs(u.Fragment,{children:[u.jsx("audio",{ref:N,src:K.url,preload:"auto"}),u.jsxs("div",{className:"fixed z-50 transition-all duration-500",style:{bottom:"calc(1.5rem / var(--screen-scale))",right:"calc(1.5rem / var(--screen-scale))",transform:"scale(var(--screen-scale))",transformOrigin:"bottom right"},children:[!v&&u.jsx("button",{onClick:U,className:"w-14 h-14 rounded-full flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:u.jsx(Vp,{size:24,className:`text-white ${s?"animate-spin":""}`})}),v&&u.jsxs("div",{className:"w-[360px] p-5 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:u.jsx(Vp,{size:20,className:`text-white ${s?"animate-spin":""}`})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("div",{className:"text-white text-sm truncate",children:K.name}),u.jsx("div",{className:"text-white/60 text-xs truncate",children:K.artist})]}),u.jsx("button",{onClick:U,className:"w-8 h-8 rounded-full hover:bg-white/10",children:u.jsx(s0,{size:18,className:"text-white/60"})})]}),u.jsxs("div",{className:"relative rounded-lg bg-white/5 mb-3",children:[me(),u.jsx("button",{onClick:de,className:"absolute top-2 right-2 w-7 h-7 rounded-full bg-black/30 flex items-center justify-center text-white",children:ce()})]}),u.jsxs("div",{className:"mb-2",children:[u.jsx("div",{className:"h-1.5 bg-white/10 rounded-full cursor-pointer",onClick:A,children:u.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[rgb(var(--c1))] to-[rgb(var(--c2))]",style:{width:`${f/p*100||0}%`}})}),u.jsxs("div",{className:"flex justify-between text-xs text-white/50 mt-1",children:[u.jsx("span",{children:Z(f)}),u.jsx("span",{children:Z(p)})]})]}),u.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[u.jsx("button",{onClick:j,disabled:S===0,className:"w-10 h-10 rounded-full hover:bg-white/10",children:u.jsx(Xv,{size:18,className:"text-white"})}),u.jsx("button",{onClick:B,className:"w-14 h-14 rounded-full flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:s?u.jsx(Pv,{size:20,className:"text-white"}):u.jsx(Ov,{size:20,className:"text-white ml-0.5"})}),u.jsx("button",{onClick:ue,disabled:S===R.length-1,className:"w-10 h-10 rounded-full hover:bg-white/10",children:u.jsx(Yv,{size:18,className:"text-white"})})]}),u.jsx("style",{children:`
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
`}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{onClick:O,className:"w-8 h-8 rounded-full hover:bg-white/10",children:n?u.jsx(i1,{size:16,className:"text-white"}):u.jsx(t1,{size:16,className:"text-white"})}),u.jsx("input",{type:"range",min:"0",max:"100",value:a,onChange:P,className:"flex-1 h-1.5 rounded-full volume-slider",style:{background:`linear-gradient(to right, rgb(var(--c1)) ${a}%, rgba(255,255,255,0.2) ${a}%)`}}),u.jsxs("span",{className:"text-xs text-white w-10 text-right",children:[a,"%"]})]})]})]})]})}const Jm="/assets/sprite_9900x4800_70-pwo8PaYC.png",ld=9,dw=8,$m=70,fw=400,Cl=.96,hw=(s,e,n)=>{const r=s.scrollTop,a=e-r,l=performance.now(),f=d=>{const p=d-l,m=Math.min(p/n,1),v=m*(2-m);s.scrollTop=r+a*v,m<1&&requestAnimationFrame(f)};requestAnimationFrame(f)},Rl=1100,cd=600;function pw(){const s=fe.useRef(null),e=fe.useRef(null),n=fe.useRef(null),r=fe.useRef(null),[a,l]=fe.useState(!1),[f,d]=fe.useState(!1),[p,m]=fe.useState(!1),v=fe.useRef(0),y=M=>{const b=e.current,w=n.current;if(!b||!w)return;v.current=M;const _=window.innerWidth,x=_/Rl,N=M%ld,D=Math.floor(M/ld),R=cd*x;w.style.height=`${R}px`,w.style.width=`${_}px`;const K=_/2-(N*Rl+Rl/2)*x,B=-(D*cd*x);b.style.width=`${Rl*ld*x}px`,b.style.height=`${cd*dw*x}px`,b.style.transform=`translate3d(${K}px, ${B}px, 0)`};fe.useEffect(()=>{const M=()=>{m(window.innerWidth<768),y(v.current)};return window.addEventListener("resize",M),M(),f||(document.body.style.overflow="hidden"),()=>{window.removeEventListener("resize",M),document.body.style.overflow="auto"}},[f,p]),fe.useEffect(()=>{const M=new Image;M.src=Jm,M.onload=()=>{l(!0),requestAnimationFrame(()=>y(0))}},[]);const S=()=>{const M=s.current;if(!M||f)return;const b=M.scrollTop,w=M.scrollHeight-M.clientHeight,_=Math.min(1,Math.max(0,b/w));if(_<=Cl){const x=_/Cl,N=Math.floor(x*($m-1));y(N),n.current&&(n.current.style.transform="scale(1)",n.current.style.opacity="1")}else{y($m-1);const x=(_-Cl)/(1-Cl);if(n.current){const N=1-x*.5;n.current.style.transformOrigin="top left",n.current.style.transform=`scale(${N})`,n.current.style.opacity=(1-x).toString()}x>=.99&&d(!0)}};return f?null:u.jsxs("div",{ref:s,onScroll:S,className:"scroll-video-overlay",style:{position:"fixed",inset:0,zIndex:99999,overflowY:"auto",overflowX:"hidden",background:"#000",scrollbarWidth:"none"},children:[u.jsx("style",{children:`
  /* 1. 隐藏滚动条 */
  .scroll-video-overlay::-webkit-scrollbar { display: none; }

  /* 2. 文字呼吸动画 */
  @keyframes pulse-soft {
    0%, 100% { opacity: 0.3; transform: scale(0.95); letter-spacing: 0.2em; }
    50% { opacity: 1; transform: scale(1); letter-spacing: 0.4em; }
  }
  .loading-text {
    animation: pulse-soft 2s infinite ease-in-out;
  }

  /* 3. 装饰横线扫光动画 (这是你之前缺少的) */
  @keyframes shimmer-move {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  .animate-shimmer-run {
    animation: shimmer-move 1.5s infinite linear;
  }
`}),u.jsx("div",{style:{height:`${fw}vh`,position:"relative"},children:u.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",width:"100%",overflow:"hidden",background:"#000"},children:[u.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",marginTop:p?"-100px":"0"},children:u.jsx("div",{ref:n,style:{position:"relative",overflow:"hidden",willChange:"transform, opacity"},children:u.jsx("img",{ref:e,src:Jm,alt:"intro-sprite",style:{position:"absolute",top:0,left:0,maxWidth:"none",display:"block",willChange:"transform",pointerEvents:"none",opacity:a?1:0}})})}),!a&&u.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#000",zIndex:100},children:[u.jsx("div",{className:"loading-text",style:{color:"white",fontSize:"12px",fontWeight:300,textTransform:"uppercase"},children:"Loading"}),u.jsx("div",{style:{width:"70px",height:"1.5px",background:"rgba(255,255,255,0.15)",marginTop:"6px",position:"relative",overflow:"hidden"},children:u.jsx("div",{className:"animate-shimmer-run",style:{position:"absolute",inset:0,background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)"}})})]}),u.jsx("div",{ref:r,style:{position:"absolute",bottom:"8vh",width:"100%",display:"flex",justifyContent:"center",zIndex:10},children:u.jsxs("button",{onClick:M=>{M.preventDefault();const b=s.current;if(!b)return;const w=b.scrollHeight-b.clientHeight;hw(b,w,2800)},className:`
    relative z-10 flex items-center gap-3 px-[32px] py-[12px] 
    text-[14px] font-semibold uppercase tracking-[0.15em]
    text-white border border-white/40 rounded-[34px] 
    bg-black/30 backdrop-blur-sm overflow-hidden
    transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
    
    /* Hover 状态按钮自身变化 */
    hover:scale-110 hover:text-[#212121] hover:border-[#C1A362]
    hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)]
    active:scale-100

    /* 使用 before 伪元素实现中心扩散背景 */
    before:content-[''] before:absolute before:inset-0 before:m-auto
    before:w-[50px] before:h-[50px] before:rounded-full
    before:bg-white before:z-[-1] before:scale-0
    before:transition-all before:duration-700 before:ease-[cubic-bezier(0.23,1,0.32,1)]
    
    /* Hover 时背景圆圈放大 */
    hover:before:scale-[6]
  `,children:[u.jsx(Cv,{size:18,className:"transition-colors duration-300"}),u.jsx("span",{className:"relative z-10",children:"SCROLL"}),u.jsx(s0,{size:18,className:"animate-bounce transition-colors duration-300"})]})})]})})]})}function mw(){fe.useEffect(()=>{const s=()=>{const r=window.innerWidth,a=1920;let l=1;r>a&&(l=Math.min(r/a,2.5)),document.documentElement.style.setProperty("--screen-scale",l.toString())};s();let e;const n=()=>{clearTimeout(e),e=window.setTimeout(s,200)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n),clearTimeout(e)}},[])}function gw(){return mw(),u.jsxs(Ux,{children:[u.jsx(pw,{}),u.jsx(f1,{}),u.jsx(uw,{}),u.jsx("div",{className:"hidden md:block",children:u.jsx(Ix,{})}),u.jsx("div",{className:"min-h-screen screen-scaled-root",style:{background:"var(--bg, #05050a)",color:"#f0f4f8",msOverflowStyle:"none",scrollbarWidth:"none"},children:u.jsxs("main",{children:[u.jsx(Pb,{}),u.jsx(Ub,{}),u.jsx(eE,{}),u.jsx(YE,{}),u.jsx(ew,{}),u.jsx(cw,{})]})})]})}Dx.createRoot(document.getElementById("root")).render(u.jsx(gw,{}));
