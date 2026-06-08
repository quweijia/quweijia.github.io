(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Eu={exports:{}},Pa={},Tu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function Rx(){if(Fp)return gt;Fp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,T={};function y(O,re,Le){this.props=O,this.context=re,this.refs=T,this.updater=Le||M}y.prototype.isReactComponent={},y.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function D(O,re,Le){this.props=O,this.context=re,this.refs=T,this.updater=Le||M}var P=D.prototype=new x;P.constructor=D,b(P,y.prototype),P.isPureReactComponent=!0;var E=Array.isArray,W=Object.prototype.hasOwnProperty,z={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function U(O,re,Le){var te,ge={},we=null,Se=null;if(re!=null)for(te in re.ref!==void 0&&(Se=re.ref),re.key!==void 0&&(we=""+re.key),re)W.call(re,te)&&!I.hasOwnProperty(te)&&(ge[te]=re[te]);var Re=arguments.length-2;if(Re===1)ge.children=Le;else if(1<Re){for(var Fe=Array(Re),Ke=0;Ke<Re;Ke++)Fe[Ke]=arguments[Ke+2];ge.children=Fe}if(O&&O.defaultProps)for(te in Re=O.defaultProps,Re)ge[te]===void 0&&(ge[te]=Re[te]);return{$$typeof:s,type:O,key:we,ref:Se,props:ge,_owner:z.current}}function N(O,re){return{$$typeof:s,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function B(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Le){return re[Le]})}var ae=/\/+/g;function Z(O,re){return typeof O=="object"&&O!==null&&O.key!=null?B(""+O.key):re.toString(36)}function fe(O,re,Le,te,ge){var we=typeof O;(we==="undefined"||we==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(we){case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case s:case e:Se=!0}}if(Se)return Se=O,ge=ge(Se),O=te===""?"."+Z(Se,0):te,E(ge)?(Le="",O!=null&&(Le=O.replace(ae,"$&/")+"/"),fe(ge,re,Le,"",function(Ke){return Ke})):ge!=null&&(C(ge)&&(ge=N(ge,Le+(!ge.key||Se&&Se.key===ge.key?"":(""+ge.key).replace(ae,"$&/")+"/")+O)),re.push(ge)),1;if(Se=0,te=te===""?".":te+":",E(O))for(var Re=0;Re<O.length;Re++){we=O[Re];var Fe=te+Z(we,Re);Se+=fe(we,re,Le,Fe,ge)}else if(Fe=S(O),typeof Fe=="function")for(O=Fe.call(O),Re=0;!(we=O.next()).done;)we=we.value,Fe=te+Z(we,Re++),Se+=fe(we,re,Le,Fe,ge);else if(we==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Se}function me(O,re,Le){if(O==null)return O;var te=[],ge=0;return fe(O,te,"","",function(we){return re.call(Le,we,ge++)}),te}function ue(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(Le){(O._status===0||O._status===-1)&&(O._status=1,O._result=Le)},function(Le){(O._status===0||O._status===-1)&&(O._status=2,O._result=Le)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var pe={current:null},j={transition:null},ee={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:j,ReactCurrentOwner:z};function se(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:me,forEach:function(O,re,Le){me(O,function(){re.apply(this,arguments)},Le)},count:function(O){var re=0;return me(O,function(){re++}),re},toArray:function(O){return me(O,function(re){return re})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},gt.Component=y,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=D,gt.StrictMode=r,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,gt.act=se,gt.cloneElement=function(O,re,Le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var te=b({},O.props),ge=O.key,we=O.ref,Se=O._owner;if(re!=null){if(re.ref!==void 0&&(we=re.ref,Se=z.current),re.key!==void 0&&(ge=""+re.key),O.type&&O.type.defaultProps)var Re=O.type.defaultProps;for(Fe in re)W.call(re,Fe)&&!I.hasOwnProperty(Fe)&&(te[Fe]=re[Fe]===void 0&&Re!==void 0?Re[Fe]:re[Fe])}var Fe=arguments.length-2;if(Fe===1)te.children=Le;else if(1<Fe){Re=Array(Fe);for(var Ke=0;Ke<Fe;Ke++)Re[Ke]=arguments[Ke+2];te.children=Re}return{$$typeof:s,type:O.type,key:ge,ref:we,props:te,_owner:Se}},gt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},gt.createElement=U,gt.createFactory=function(O){var re=U.bind(null,O);return re.type=O,re},gt.createRef=function(){return{current:null}},gt.forwardRef=function(O){return{$$typeof:d,render:O}},gt.isValidElement=C,gt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ue}},gt.memo=function(O,re){return{$$typeof:m,type:O,compare:re===void 0?null:re}},gt.startTransition=function(O){var re=j.transition;j.transition={};try{O()}finally{j.transition=re}},gt.unstable_act=se,gt.useCallback=function(O,re){return pe.current.useCallback(O,re)},gt.useContext=function(O){return pe.current.useContext(O)},gt.useDebugValue=function(){},gt.useDeferredValue=function(O){return pe.current.useDeferredValue(O)},gt.useEffect=function(O,re){return pe.current.useEffect(O,re)},gt.useId=function(){return pe.current.useId()},gt.useImperativeHandle=function(O,re,Le){return pe.current.useImperativeHandle(O,re,Le)},gt.useInsertionEffect=function(O,re){return pe.current.useInsertionEffect(O,re)},gt.useLayoutEffect=function(O,re){return pe.current.useLayoutEffect(O,re)},gt.useMemo=function(O,re){return pe.current.useMemo(O,re)},gt.useReducer=function(O,re,Le){return pe.current.useReducer(O,re,Le)},gt.useRef=function(O){return pe.current.useRef(O)},gt.useState=function(O){return pe.current.useState(O)},gt.useSyncExternalStore=function(O,re,Le){return pe.current.useSyncExternalStore(O,re,Le)},gt.useTransition=function(){return pe.current.useTransition()},gt.version="18.3.1",gt}var Op;function nf(){return Op||(Op=1,Tu.exports=Rx()),Tu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function Nx(){if(zp)return Pa;zp=1;var s=nf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,_={},S=null,M=null;m!==void 0&&(S=""+m),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!l.hasOwnProperty(v)&&(_[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:d,key:S,ref:M,props:_,_owner:o.current}}return Pa.Fragment=t,Pa.jsx=f,Pa.jsxs=f,Pa}var Bp;function Px(){return Bp||(Bp=1,Eu.exports=Nx()),Eu.exports}var u=Px(),il={},Au={exports:{}},Cn={},Cu={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Dx(){return jp||(jp=1,(function(s){function e(j,ee){var se=j.length;j.push(ee);e:for(;0<se;){var O=se-1>>>1,re=j[O];if(0<o(re,ee))j[O]=ee,j[se]=re,se=O;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var ee=j[0],se=j.pop();if(se!==ee){j[0]=se;e:for(var O=0,re=j.length,Le=re>>>1;O<Le;){var te=2*(O+1)-1,ge=j[te],we=te+1,Se=j[we];if(0>o(ge,se))we<re&&0>o(Se,ge)?(j[O]=Se,j[we]=se,O=we):(j[O]=ge,j[te]=se,O=te);else if(we<re&&0>o(Se,se))j[O]=Se,j[we]=se,O=we;else break e}}return ee}function o(j,ee){var se=j.sortIndex-ee.sortIndex;return se!==0?se:j.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,_=null,S=3,M=!1,b=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(j){for(var ee=t(m);ee!==null;){if(ee.callback===null)r(m);else if(ee.startTime<=j)r(m),ee.sortIndex=ee.expirationTime,e(p,ee);else break;ee=t(m)}}function E(j){if(T=!1,P(j),!b)if(t(p)!==null)b=!0,ue(W);else{var ee=t(m);ee!==null&&pe(E,ee.startTime-j)}}function W(j,ee){b=!1,T&&(T=!1,x(U),U=-1),M=!0;var se=S;try{for(P(ee),_=t(p);_!==null&&(!(_.expirationTime>ee)||j&&!B());){var O=_.callback;if(typeof O=="function"){_.callback=null,S=_.priorityLevel;var re=O(_.expirationTime<=ee);ee=s.unstable_now(),typeof re=="function"?_.callback=re:_===t(p)&&r(p),P(ee)}else r(p);_=t(p)}if(_!==null)var Le=!0;else{var te=t(m);te!==null&&pe(E,te.startTime-ee),Le=!1}return Le}finally{_=null,S=se,M=!1}}var z=!1,I=null,U=-1,N=5,C=-1;function B(){return!(s.unstable_now()-C<N)}function ae(){if(I!==null){var j=s.unstable_now();C=j;var ee=!0;try{ee=I(!0,j)}finally{ee?Z():(z=!1,I=null)}}else z=!1}var Z;if(typeof D=="function")Z=function(){D(ae)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,me=fe.port2;fe.port1.onmessage=ae,Z=function(){me.postMessage(null)}}else Z=function(){y(ae,0)};function ue(j){I=j,z||(z=!0,Z())}function pe(j,ee){U=y(function(){j(s.unstable_now())},ee)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){b||M||(b=!0,ue(W))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(j){switch(S){case 1:case 2:case 3:var ee=3;break;default:ee=S}var se=S;S=ee;try{return j()}finally{S=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,ee){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var se=S;S=j;try{return ee()}finally{S=se}},s.unstable_scheduleCallback=function(j,ee,se){var O=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,j){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,j={id:v++,callback:ee,priorityLevel:j,startTime:se,expirationTime:re,sortIndex:-1},se>O?(j.sortIndex=se,e(m,j),t(p)===null&&j===t(m)&&(T?(x(U),U=-1):T=!0,pe(E,se-O))):(j.sortIndex=re,e(p,j),b||M||(b=!0,ue(W))),j},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(j){var ee=S;return function(){var se=S;S=ee;try{return j.apply(this,arguments)}finally{S=se}}}})(Ru)),Ru}var Hp;function Lx(){return Hp||(Hp=1,Cu.exports=Dx()),Cu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function kx(){if(Gp)return Cn;Gp=1;var s=nf(),e=Lx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function S(n){return p.call(_,n)?!0:p.call(v,n)?!1:m.test(n)?_[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,c,h,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,D);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,h,c)&&(a=null),c||h===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var E=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),z=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),j=Symbol.iterator;function ee(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,O;function re(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Le=!1;function te(n,i){if(!n||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var h=oe.stack.split(`
`),g=c.stack.split(`
`),w=h.length-1,F=g.length-1;1<=w&&0<=F&&h[w]!==g[F];)F--;for(;1<=w&&0<=F;w--,F--)if(h[w]!==g[F]){if(w!==1||F!==1)do if(w--,F--,0>F||h[w]!==g[F]){var H=`
`+h[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=F);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function ge(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=te(n.type,!1),n;case 11:return n=te(n.type.render,!1),n;case 1:return n=te(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case z:return"Portal";case N:return"Profiler";case U:return"StrictMode";case Z:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ae:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case me:return i=n.displayName||null,i!==null?i:we(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return we(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function At(n){n._valueTracker||(n._valueTracker=Ke(n))}function pt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Y(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function nn(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Re(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function dt(n,i){ht(n,i);var a=Re(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Mt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Mt(n,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ye(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Mt(n,i,a){(i!=="number"||Nt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Qe=Array.isArray;function k(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Re(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function X(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Qe(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Re(a)}}function L(n,i){var a=Re(i.value),c=Re(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function K(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function J(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Te(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?J(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Me,Ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Me=Me||document.createElement("div"),Me.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Me.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ot(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(_e).forEach(function(n){Oe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),_e[i]=_e[n]})});function $e(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||_e.hasOwnProperty(n)&&_e[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=$e(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Be=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function st(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,he=null,xe=null;function Ie(n){if(n=ga(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=vo(i),Pe(n.stateNode,n.type,i))}}function ke(n){he?xe?xe.push(n):xe=[n]:he=n}function at(){if(he){var n=he,i=xe;if(xe=he=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function kt(n,i){return n(i)}function Xt(){}var yt=!1;function _n(n,i,a){if(yt)return n(i,a);yt=!0;try{return kt(n,i,a)}finally{yt=!1,(he!==null||xe!==null)&&(Xt(),at())}}function mn(n,i){var a=n.stateNode;if(a===null)return null;var c=vo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ts=!1;if(d)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{ts=!1}function Mi(n,i,a,c,h,g,w,F,H){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(ye){this.onError(ye)}}var bi=!1,Er=null,Tr=!1,Yi=null,Za={onError:function(n){bi=!0,Er=n}};function ns(n,i,a,c,h,g,w,F,H){bi=!1,Er=null,Mi.apply(Za,arguments)}function Ja(n,i,a,c,h,g,w,F,H){if(ns.apply(this,arguments),bi){if(bi){var oe=Er;bi=!1,Er=null}else throw Error(t(198));Tr||(Tr=!0,Yi=oe)}}function pi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function $a(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function eo(n){if(pi(n)!==n)throw Error(t(188))}function ql(n){var i=n.alternate;if(!i){if(i=pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return eo(h),n;if(g===c)return eo(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var w=!1,F=h.child;F;){if(F===a){w=!0,a=h,c=g;break}if(F===c){w=!0,c=h,a=g;break}F=F.sibling}if(!w){for(F=g.child;F;){if(F===a){w=!0,a=g,c=h;break}if(F===c){w=!0,c=g,a=h;break}F=F.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function R(n){return n=ql(n),n!==null?q(n):null}function q(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=q(n);if(i!==null)return i;n=n.sibling}return null}var le=e.unstable_scheduleCallback,ce=e.unstable_cancelCallback,Q=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Ee=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,We=e.unstable_LowPriority,vt=e.unstable_IdlePriority,Et=null,xt=null;function on(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:bt,qe=Math.log,$n=Math.LN2;function bt(n){return n>>>=0,n===0?32:31-(qe(n)/$n|0)|0}var ln=64,ei=4194304;function qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var F=w&~h;F!==0?c=qt(F):(g&=w,g!==0&&(c=qt(g)))}else w=a&~h,w!==0?c=qt(w):g!==0&&(c=qt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-lt(i),h=1<<a,c|=n[a],i&=~h;return c}function Dt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-lt(g),F=1<<w,H=h[w];H===-1?((F&a)===0||(F&c)!==0)&&(h[w]=Dt(F,i)):H<=i&&(n.expiredLanes|=F),g&=~F}}function wi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function gn(){var n=ln;return ln<<=1,(ln&4194240)===0&&(ln=64),n}function Hn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Mn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-lt(i),n[i]=a}function to(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-lt(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function Yl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-lt(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var Rt=0;function mf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var gf,Ql,xf,vf,yf,Kl=!1,no=[],Qi=null,Ki=null,Zi=null,ea=new Map,ta=new Map,Ji=[],Z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(n,i){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":ea.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(i.pointerId)}}function na(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=ga(i),i!==null&&Ql(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function J0(n,i,a,c,h){switch(i){case"focusin":return Qi=na(Qi,n,i,a,c,h),!0;case"dragenter":return Ki=na(Ki,n,i,a,c,h),!0;case"mouseover":return Zi=na(Zi,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return ea.set(g,na(ea.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,ta.set(g,na(ta.get(g)||null,n,i,a,c,h)),!0}return!1}function _f(n){var i=Ar(n.target);if(i!==null){var a=pi(i);if(a!==null){if(i=a.tag,i===13){if(i=$a(a),i!==null){n.blockedOn=i,yf(n.priority,function(){xf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function io(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Jl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ct=c,a.target.dispatchEvent(c),Ct=null}else return i=ga(a),i!==null&&Ql(i),n.blockedOn=a,!1;i.shift()}return!0}function Mf(n,i,a){io(n)&&a.delete(i)}function $0(){Kl=!1,Qi!==null&&io(Qi)&&(Qi=null),Ki!==null&&io(Ki)&&(Ki=null),Zi!==null&&io(Zi)&&(Zi=null),ea.forEach(Mf),ta.forEach(Mf)}function ia(n,i){n.blockedOn===i&&(n.blockedOn=null,Kl||(Kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$0)))}function ra(n){function i(h){return ia(h,n)}if(0<no.length){ia(no[0],n);for(var a=1;a<no.length;a++){var c=no[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Qi!==null&&ia(Qi,n),Ki!==null&&ia(Ki,n),Zi!==null&&ia(Zi,n),ea.forEach(i),ta.forEach(i),a=0;a<Ji.length;a++)c=Ji[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Ji.length&&(a=Ji[0],a.blockedOn===null);)_f(a),a.blockedOn===null&&Ji.shift()}var is=E.ReactCurrentBatchConfig,ro=!0;function eg(n,i,a,c){var h=Rt,g=is.transition;is.transition=null;try{Rt=1,Zl(n,i,a,c)}finally{Rt=h,is.transition=g}}function tg(n,i,a,c){var h=Rt,g=is.transition;is.transition=null;try{Rt=4,Zl(n,i,a,c)}finally{Rt=h,is.transition=g}}function Zl(n,i,a,c){if(ro){var h=Jl(n,i,a,c);if(h===null)mc(n,i,c,so,a),Sf(n,c);else if(J0(h,n,i,a,c))c.stopPropagation();else if(Sf(n,c),i&4&&-1<Z0.indexOf(n)){for(;h!==null;){var g=ga(h);if(g!==null&&gf(g),g=Jl(n,i,a,c),g===null&&mc(n,i,c,so,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else mc(n,i,c,null,a)}}var so=null;function Jl(n,i,a,c){if(so=null,n=V(c),n=Ar(n),n!==null)if(i=pi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=$a(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return so=n,null}function bf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case He:return 1;case tt:return 4;case it:case We:return 16;case vt:return 536870912;default:return 16}default:return 16}}var $i=null,$l=null,ao=null;function wf(){if(ao)return ao;var n,i=$l,a=i.length,c,h="value"in $i?$i.value:$i.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===h[g-c];c++);return ao=h.slice(n,1<c?1-c:void 0)}function oo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function lo(){return!0}function Ef(){return!1}function kn(n){function i(a,c,h,g,w){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(g):g[F]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?lo:Ef,this.isPropagationStopped=Ef,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=kn(rs),sa=se({},rs,{view:0,detail:0}),ng=kn(sa),tc,nc,aa,co=se({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==aa&&(aa&&n.type==="mousemove"?(tc=n.screenX-aa.screenX,nc=n.screenY-aa.screenY):nc=tc=0,aa=n),tc)},movementY:function(n){return"movementY"in n?n.movementY:nc}}),Tf=kn(co),ig=se({},co,{dataTransfer:0}),rg=kn(ig),sg=se({},sa,{relatedTarget:0}),ic=kn(sg),ag=se({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),og=kn(ag),lg=se({},rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),cg=kn(lg),ug=se({},rs,{data:0}),Af=kn(ug),dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=hg[n])?!!i[n]:!1}function rc(){return pg}var mg=se({},sa,{key:function(n){if(n.key){var i=dg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=oo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?fg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(n){return n.type==="keypress"?oo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?oo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gg=kn(mg),xg=se({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=kn(xg),vg=se({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),yg=kn(vg),Sg=se({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=kn(Sg),Mg=se({},co,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),bg=kn(Mg),wg=[9,13,27,32],sc=d&&"CompositionEvent"in window,oa=null;d&&"documentMode"in document&&(oa=document.documentMode);var Eg=d&&"TextEvent"in window&&!oa,Rf=d&&(!sc||oa&&8<oa&&11>=oa),Nf=" ",Pf=!1;function Df(n,i){switch(n){case"keyup":return wg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ss=!1;function Tg(n,i){switch(n){case"compositionend":return Lf(i);case"keypress":return i.which!==32?null:(Pf=!0,Nf);case"textInput":return n=i.data,n===Nf&&Pf?null:n;default:return null}}function Ag(n,i){if(ss)return n==="compositionend"||!sc&&Df(n,i)?(n=wf(),ao=$l=$i=null,ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rf&&i.locale!=="ko"?null:i.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Cg[n.type]:i==="textarea"}function If(n,i,a,c){ke(c),i=mo(i,"onChange"),0<i.length&&(a=new ec("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var la=null,ca=null;function Rg(n){$f(n,0)}function uo(n){var i=us(n);if(pt(i))return n}function Ng(n,i){if(n==="change")return i}var Uf=!1;if(d){var ac;if(d){var oc="oninput"in document;if(!oc){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),oc=typeof Ff.oninput=="function"}ac=oc}else ac=!1;Uf=ac&&(!document.documentMode||9<document.documentMode)}function Of(){la&&(la.detachEvent("onpropertychange",zf),ca=la=null)}function zf(n){if(n.propertyName==="value"&&uo(ca)){var i=[];If(i,ca,n,V(n)),_n(Rg,i)}}function Pg(n,i,a){n==="focusin"?(Of(),la=i,ca=a,la.attachEvent("onpropertychange",zf)):n==="focusout"&&Of()}function Dg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return uo(ca)}function Lg(n,i){if(n==="click")return uo(i)}function kg(n,i){if(n==="input"||n==="change")return uo(i)}function Ig(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ti=typeof Object.is=="function"?Object.is:Ig;function ua(n,i){if(ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!ti(n[h],i[h]))return!1}return!0}function Bf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jf(n,i){var a=Bf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bf(a)}}function Hf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Hf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Gf(){for(var n=window,i=Nt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Nt(n.document)}return i}function lc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ug(n){var i=Gf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Hf(a.ownerDocument.documentElement,a)){if(c!==null&&lc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=jf(a,g);var w=jf(a,c);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Fg=d&&"documentMode"in document&&11>=document.documentMode,as=null,cc=null,da=null,uc=!1;function Vf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uc||as==null||as!==Nt(c)||(c=as,"selectionStart"in c&&lc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),da&&ua(da,c)||(da=c,c=mo(cc,"onSelect"),0<c.length&&(i=new ec("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=as)))}function fo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var os={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},dc={},Wf={};d&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function ho(n){if(dc[n])return dc[n];if(!os[n])return n;var i=os[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Wf)return dc[n]=i[a];return n}var Xf=ho("animationend"),qf=ho("animationiteration"),Yf=ho("animationstart"),Qf=ho("transitionend"),Kf=new Map,Zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(n,i){Kf.set(n,i),l(i,[n])}for(var fc=0;fc<Zf.length;fc++){var hc=Zf[fc],Og=hc.toLowerCase(),zg=hc[0].toUpperCase()+hc.slice(1);er(Og,"on"+zg)}er(Xf,"onAnimationEnd"),er(qf,"onAnimationIteration"),er(Yf,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Qf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function Jf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ja(c,i,void 0,n),n.currentTarget=null}function $f(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var F=c[w],H=F.instance,oe=F.currentTarget;if(F=F.listener,H!==g&&h.isPropagationStopped())break e;Jf(h,F,oe),g=H}else for(w=0;w<c.length;w++){if(F=c[w],H=F.instance,oe=F.currentTarget,F=F.listener,H!==g&&h.isPropagationStopped())break e;Jf(h,F,oe),g=H}}}if(Tr)throw n=Yi,Tr=!1,Yi=null,n}function It(n,i){var a=i[_c];a===void 0&&(a=i[_c]=new Set);var c=n+"__bubble";a.has(c)||(eh(i,n,2,!1),a.add(c))}function pc(n,i,a){var c=0;i&&(c|=4),eh(a,n,c,i)}var po="_reactListening"+Math.random().toString(36).slice(2);function ha(n){if(!n[po]){n[po]=!0,r.forEach(function(a){a!=="selectionchange"&&(Bg.has(a)||pc(a,!1,n),pc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[po]||(i[po]=!0,pc("selectionchange",!1,i))}}function eh(n,i,a,c){switch(bf(i)){case 1:var h=eg;break;case 4:h=tg;break;default:h=Zl}a=h.bind(null,i,a,n),h=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function mc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var F=c.stateNode.containerInfo;if(F===h||F.nodeType===8&&F.parentNode===h)break;if(w===4)for(w=c.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===h||H.nodeType===8&&H.parentNode===h))return;w=w.return}for(;F!==null;){if(w=Ar(F),w===null)return;if(H=w.tag,H===5||H===6){c=g=w;continue e}F=F.parentNode}}c=c.return}_n(function(){var oe=g,ye=V(a),be=[];e:{var ve=Kf.get(n);if(ve!==void 0){var Ue=ec,je=n;switch(n){case"keypress":if(oo(a)===0)break e;case"keydown":case"keyup":Ue=gg;break;case"focusin":je="focus",Ue=ic;break;case"focusout":je="blur",Ue=ic;break;case"beforeblur":case"afterblur":Ue=ic;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=yg;break;case Xf:case qf:case Yf:Ue=og;break;case Qf:Ue=_g;break;case"scroll":Ue=ng;break;case"wheel":Ue=bg;break;case"copy":case"cut":case"paste":Ue=cg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Cf}var Ge=(i&4)!==0,Ht=!Ge&&n==="scroll",$=Ge?ve!==null?ve+"Capture":null:ve;Ge=[];for(var G=oe,ne;G!==null;){ne=G;var Ae=ne.stateNode;if(ne.tag===5&&Ae!==null&&(ne=Ae,$!==null&&(Ae=mn(G,$),Ae!=null&&Ge.push(pa(G,Ae,ne)))),Ht)break;G=G.return}0<Ge.length&&(ve=new Ue(ve,je,null,a,ye),be.push({event:ve,listeners:Ge}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ve&&a!==Ct&&(je=a.relatedTarget||a.fromElement)&&(Ar(je)||je[Ei]))break e;if((Ue||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(je=a.relatedTarget||a.toElement,Ue=oe,je=je?Ar(je):null,je!==null&&(Ht=pi(je),je!==Ht||je.tag!==5&&je.tag!==6)&&(je=null)):(Ue=null,je=oe),Ue!==je)){if(Ge=Tf,Ae="onMouseLeave",$="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=Cf,Ae="onPointerLeave",$="onPointerEnter",G="pointer"),Ht=Ue==null?ve:us(Ue),ne=je==null?ve:us(je),ve=new Ge(Ae,G+"leave",Ue,a,ye),ve.target=Ht,ve.relatedTarget=ne,Ae=null,Ar(ye)===oe&&(Ge=new Ge($,G+"enter",je,a,ye),Ge.target=ne,Ge.relatedTarget=Ht,Ae=Ge),Ht=Ae,Ue&&je)t:{for(Ge=Ue,$=je,G=0,ne=Ge;ne;ne=ls(ne))G++;for(ne=0,Ae=$;Ae;Ae=ls(Ae))ne++;for(;0<G-ne;)Ge=ls(Ge),G--;for(;0<ne-G;)$=ls($),ne--;for(;G--;){if(Ge===$||$!==null&&Ge===$.alternate)break t;Ge=ls(Ge),$=ls($)}Ge=null}else Ge=null;Ue!==null&&th(be,ve,Ue,Ge,!1),je!==null&&Ht!==null&&th(be,Ht,je,Ge,!0)}}e:{if(ve=oe?us(oe):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var Xe=Ng;else if(kf(ve))if(Uf)Xe=kg;else{Xe=Dg;var Ze=Pg}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Xe=Lg);if(Xe&&(Xe=Xe(n,oe))){If(be,Xe,a,ye);break e}Ze&&Ze(n,ve,oe),n==="focusout"&&(Ze=ve._wrapperState)&&Ze.controlled&&ve.type==="number"&&Mt(ve,"number",ve.value)}switch(Ze=oe?us(oe):window,n){case"focusin":(kf(Ze)||Ze.contentEditable==="true")&&(as=Ze,cc=oe,da=null);break;case"focusout":da=cc=as=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,Vf(be,a,ye);break;case"selectionchange":if(Fg)break;case"keydown":case"keyup":Vf(be,a,ye)}var Je;if(sc)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ss?Df(n,a)&&(nt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Rf&&a.locale!=="ko"&&(ss||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ss&&(Je=wf()):($i=ye,$l="value"in $i?$i.value:$i.textContent,ss=!0)),Ze=mo(oe,nt),0<Ze.length&&(nt=new Af(nt,n,null,a,ye),be.push({event:nt,listeners:Ze}),Je?nt.data=Je:(Je=Lf(a),Je!==null&&(nt.data=Je)))),(Je=Eg?Tg(n,a):Ag(n,a))&&(oe=mo(oe,"onBeforeInput"),0<oe.length&&(ye=new Af("onBeforeInput","beforeinput",null,a,ye),be.push({event:ye,listeners:oe}),ye.data=Je))}$f(be,i)})}function pa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function mo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=mn(n,a),g!=null&&c.unshift(pa(n,g,h)),g=mn(n,i),g!=null&&c.push(pa(n,g,h))),n=n.return}return c}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function th(n,i,a,c,h){for(var g=i._reactName,w=[];a!==null&&a!==c;){var F=a,H=F.alternate,oe=F.stateNode;if(H!==null&&H===c)break;F.tag===5&&oe!==null&&(F=oe,h?(H=mn(a,g),H!=null&&w.unshift(pa(a,H,F))):h||(H=mn(a,g),H!=null&&w.push(pa(a,H,F)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var jg=/\r\n?/g,Hg=/\u0000|\uFFFD/g;function nh(n){return(typeof n=="string"?n:""+n).replace(jg,`
`).replace(Hg,"")}function go(n,i,a){if(i=nh(i),nh(n)!==i&&a)throw Error(t(425))}function xo(){}var gc=null,xc=null;function vc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yc=typeof setTimeout=="function"?setTimeout:void 0,Gg=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,Vg=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(n){return ih.resolve(null).then(n).catch(Wg)}:yc;function Wg(n){setTimeout(function(){throw n})}function Sc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),ra(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);ra(i)}function tr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function rh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var cs=Math.random().toString(36).slice(2),gi="__reactFiber$"+cs,ma="__reactProps$"+cs,Ei="__reactContainer$"+cs,_c="__reactEvents$"+cs,Xg="__reactListeners$"+cs,qg="__reactHandles$"+cs;function Ar(n){var i=n[gi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ei]||a[gi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=rh(n);n!==null;){if(a=n[gi])return a;n=rh(n)}return i}n=a,a=n.parentNode}return null}function ga(n){return n=n[gi]||n[Ei],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function vo(n){return n[ma]||null}var Mc=[],ds=-1;function nr(n){return{current:n}}function Ut(n){0>ds||(n.current=Mc[ds],Mc[ds]=null,ds--)}function Lt(n,i){ds++,Mc[ds]=n.current,n.current=i}var ir={},cn=nr(ir),bn=nr(!1),Cr=ir;function fs(n,i){var a=n.type.contextTypes;if(!a)return ir;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function wn(n){return n=n.childContextTypes,n!=null}function yo(){Ut(bn),Ut(cn)}function sh(n,i,a){if(cn.current!==ir)throw Error(t(168));Lt(cn,i),Lt(bn,a)}function ah(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,Se(n)||"Unknown",h));return se({},a,c)}function So(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ir,Cr=cn.current,Lt(cn,n),Lt(bn,bn.current),!0}function oh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=ah(n,i,Cr),c.__reactInternalMemoizedMergedChildContext=n,Ut(bn),Ut(cn),Lt(cn,n)):Ut(bn),Lt(bn,a)}var Ti=null,_o=!1,bc=!1;function lh(n){Ti===null?Ti=[n]:Ti.push(n)}function Yg(n){_o=!0,lh(n)}function rr(){if(!bc&&Ti!==null){bc=!0;var n=0,i=Rt;try{var a=Ti;for(Rt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ti=null,_o=!1}catch(h){throw Ti!==null&&(Ti=Ti.slice(n+1)),le(He,rr),h}finally{Rt=i,bc=!1}}return null}var hs=[],ps=0,Mo=null,bo=0,Gn=[],Vn=0,Rr=null,Ai=1,Ci="";function Nr(n,i){hs[ps++]=bo,hs[ps++]=Mo,Mo=n,bo=i}function ch(n,i,a){Gn[Vn++]=Ai,Gn[Vn++]=Ci,Gn[Vn++]=Rr,Rr=n;var c=Ai;n=Ci;var h=32-lt(c)-1;c&=~(1<<h),a+=1;var g=32-lt(i)+h;if(30<g){var w=h-h%5;g=(c&(1<<w)-1).toString(32),c>>=w,h-=w,Ai=1<<32-lt(i)+h|a<<h|c,Ci=g+n}else Ai=1<<g|a<<h|c,Ci=n}function wc(n){n.return!==null&&(Nr(n,1),ch(n,1,0))}function Ec(n){for(;n===Mo;)Mo=hs[--ps],hs[ps]=null,bo=hs[--ps],hs[ps]=null;for(;n===Rr;)Rr=Gn[--Vn],Gn[Vn]=null,Ci=Gn[--Vn],Gn[Vn]=null,Ai=Gn[--Vn],Gn[Vn]=null}var In=null,Un=null,Ft=!1,ni=null;function uh(n,i){var a=Yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function dh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,In=n,Un=tr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,In=n,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Rr!==null?{id:Ai,overflow:Ci}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Yn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,In=n,Un=null,!0):!1;default:return!1}}function Tc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ac(n){if(Ft){var i=Un;if(i){var a=i;if(!dh(n,i)){if(Tc(n))throw Error(t(418));i=tr(a.nextSibling);var c=In;i&&dh(n,i)?uh(c,a):(n.flags=n.flags&-4097|2,Ft=!1,In=n)}}else{if(Tc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,In=n}}}function fh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;In=n}function wo(n){if(n!==In)return!1;if(!Ft)return fh(n),Ft=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!vc(n.type,n.memoizedProps)),i&&(i=Un)){if(Tc(n))throw hh(),Error(t(418));for(;i;)uh(n,i),i=tr(i.nextSibling)}if(fh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Un=tr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Un=null}}else Un=In?tr(n.stateNode.nextSibling):null;return!0}function hh(){for(var n=Un;n;)n=tr(n.nextSibling)}function ms(){Un=In=null,Ft=!1}function Cc(n){ni===null?ni=[n]:ni.push(n)}var Qg=E.ReactCurrentBatchConfig;function xa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var F=h.refs;w===null?delete F[g]:F[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Eo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ph(n){var i=n._init;return i(n._payload)}function mh(n){function i($,G){if(n){var ne=$.deletions;ne===null?($.deletions=[G],$.flags|=16):ne.push(G)}}function a($,G){if(!n)return null;for(;G!==null;)i($,G),G=G.sibling;return null}function c($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function h($,G){return $=fr($,G),$.index=0,$.sibling=null,$}function g($,G,ne){return $.index=ne,n?(ne=$.alternate,ne!==null?(ne=ne.index,ne<G?($.flags|=2,G):ne):($.flags|=2,G)):($.flags|=1048576,G)}function w($){return n&&$.alternate===null&&($.flags|=2),$}function F($,G,ne,Ae){return G===null||G.tag!==6?(G=yu(ne,$.mode,Ae),G.return=$,G):(G=h(G,ne),G.return=$,G)}function H($,G,ne,Ae){var Xe=ne.type;return Xe===I?ye($,G,ne.props.children,Ae,ne.key):G!==null&&(G.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ue&&ph(Xe)===G.type)?(Ae=h(G,ne.props),Ae.ref=xa($,G,ne),Ae.return=$,Ae):(Ae=Qo(ne.type,ne.key,ne.props,null,$.mode,Ae),Ae.ref=xa($,G,ne),Ae.return=$,Ae)}function oe($,G,ne,Ae){return G===null||G.tag!==4||G.stateNode.containerInfo!==ne.containerInfo||G.stateNode.implementation!==ne.implementation?(G=Su(ne,$.mode,Ae),G.return=$,G):(G=h(G,ne.children||[]),G.return=$,G)}function ye($,G,ne,Ae,Xe){return G===null||G.tag!==7?(G=Or(ne,$.mode,Ae,Xe),G.return=$,G):(G=h(G,ne),G.return=$,G)}function be($,G,ne){if(typeof G=="string"&&G!==""||typeof G=="number")return G=yu(""+G,$.mode,ne),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case W:return ne=Qo(G.type,G.key,G.props,null,$.mode,ne),ne.ref=xa($,null,G),ne.return=$,ne;case z:return G=Su(G,$.mode,ne),G.return=$,G;case ue:var Ae=G._init;return be($,Ae(G._payload),ne)}if(Qe(G)||ee(G))return G=Or(G,$.mode,ne,null),G.return=$,G;Eo($,G)}return null}function ve($,G,ne,Ae){var Xe=G!==null?G.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Xe!==null?null:F($,G,""+ne,Ae);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case W:return ne.key===Xe?H($,G,ne,Ae):null;case z:return ne.key===Xe?oe($,G,ne,Ae):null;case ue:return Xe=ne._init,ve($,G,Xe(ne._payload),Ae)}if(Qe(ne)||ee(ne))return Xe!==null?null:ye($,G,ne,Ae,null);Eo($,ne)}return null}function Ue($,G,ne,Ae,Xe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return $=$.get(ne)||null,F(G,$,""+Ae,Xe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case W:return $=$.get(Ae.key===null?ne:Ae.key)||null,H(G,$,Ae,Xe);case z:return $=$.get(Ae.key===null?ne:Ae.key)||null,oe(G,$,Ae,Xe);case ue:var Ze=Ae._init;return Ue($,G,ne,Ze(Ae._payload),Xe)}if(Qe(Ae)||ee(Ae))return $=$.get(ne)||null,ye(G,$,Ae,Xe,null);Eo(G,Ae)}return null}function je($,G,ne,Ae){for(var Xe=null,Ze=null,Je=G,nt=G=0,en=null;Je!==null&&nt<ne.length;nt++){Je.index>nt?(en=Je,Je=null):en=Je.sibling;var wt=ve($,Je,ne[nt],Ae);if(wt===null){Je===null&&(Je=en);break}n&&Je&&wt.alternate===null&&i($,Je),G=g(wt,G,nt),Ze===null?Xe=wt:Ze.sibling=wt,Ze=wt,Je=en}if(nt===ne.length)return a($,Je),Ft&&Nr($,nt),Xe;if(Je===null){for(;nt<ne.length;nt++)Je=be($,ne[nt],Ae),Je!==null&&(G=g(Je,G,nt),Ze===null?Xe=Je:Ze.sibling=Je,Ze=Je);return Ft&&Nr($,nt),Xe}for(Je=c($,Je);nt<ne.length;nt++)en=Ue(Je,$,nt,ne[nt],Ae),en!==null&&(n&&en.alternate!==null&&Je.delete(en.key===null?nt:en.key),G=g(en,G,nt),Ze===null?Xe=en:Ze.sibling=en,Ze=en);return n&&Je.forEach(function(hr){return i($,hr)}),Ft&&Nr($,nt),Xe}function Ge($,G,ne,Ae){var Xe=ee(ne);if(typeof Xe!="function")throw Error(t(150));if(ne=Xe.call(ne),ne==null)throw Error(t(151));for(var Ze=Xe=null,Je=G,nt=G=0,en=null,wt=ne.next();Je!==null&&!wt.done;nt++,wt=ne.next()){Je.index>nt?(en=Je,Je=null):en=Je.sibling;var hr=ve($,Je,wt.value,Ae);if(hr===null){Je===null&&(Je=en);break}n&&Je&&hr.alternate===null&&i($,Je),G=g(hr,G,nt),Ze===null?Xe=hr:Ze.sibling=hr,Ze=hr,Je=en}if(wt.done)return a($,Je),Ft&&Nr($,nt),Xe;if(Je===null){for(;!wt.done;nt++,wt=ne.next())wt=be($,wt.value,Ae),wt!==null&&(G=g(wt,G,nt),Ze===null?Xe=wt:Ze.sibling=wt,Ze=wt);return Ft&&Nr($,nt),Xe}for(Je=c($,Je);!wt.done;nt++,wt=ne.next())wt=Ue(Je,$,nt,wt.value,Ae),wt!==null&&(n&&wt.alternate!==null&&Je.delete(wt.key===null?nt:wt.key),G=g(wt,G,nt),Ze===null?Xe=wt:Ze.sibling=wt,Ze=wt);return n&&Je.forEach(function(Cx){return i($,Cx)}),Ft&&Nr($,nt),Xe}function Ht($,G,ne,Ae){if(typeof ne=="object"&&ne!==null&&ne.type===I&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case W:e:{for(var Xe=ne.key,Ze=G;Ze!==null;){if(Ze.key===Xe){if(Xe=ne.type,Xe===I){if(Ze.tag===7){a($,Ze.sibling),G=h(Ze,ne.props.children),G.return=$,$=G;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ue&&ph(Xe)===Ze.type){a($,Ze.sibling),G=h(Ze,ne.props),G.ref=xa($,Ze,ne),G.return=$,$=G;break e}a($,Ze);break}else i($,Ze);Ze=Ze.sibling}ne.type===I?(G=Or(ne.props.children,$.mode,Ae,ne.key),G.return=$,$=G):(Ae=Qo(ne.type,ne.key,ne.props,null,$.mode,Ae),Ae.ref=xa($,G,ne),Ae.return=$,$=Ae)}return w($);case z:e:{for(Ze=ne.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===ne.containerInfo&&G.stateNode.implementation===ne.implementation){a($,G.sibling),G=h(G,ne.children||[]),G.return=$,$=G;break e}else{a($,G);break}else i($,G);G=G.sibling}G=Su(ne,$.mode,Ae),G.return=$,$=G}return w($);case ue:return Ze=ne._init,Ht($,G,Ze(ne._payload),Ae)}if(Qe(ne))return je($,G,ne,Ae);if(ee(ne))return Ge($,G,ne,Ae);Eo($,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,G!==null&&G.tag===6?(a($,G.sibling),G=h(G,ne),G.return=$,$=G):(a($,G),G=yu(ne,$.mode,Ae),G.return=$,$=G),w($)):a($,G)}return Ht}var gs=mh(!0),gh=mh(!1),To=nr(null),Ao=null,xs=null,Rc=null;function Nc(){Rc=xs=Ao=null}function Pc(n){var i=To.current;Ut(To),n._currentValue=i}function Dc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function vs(n,i){Ao=n,Rc=xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(En=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(Rc!==n)if(n={context:n,memoizedValue:i,next:null},xs===null){if(Ao===null)throw Error(t(308));xs=n,Ao.dependencies={lanes:0,firstContext:n}}else xs=xs.next=n;return i}var Pr=null;function Lc(n){Pr===null?Pr=[n]:Pr.push(n)}function xh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Lc(i)):(a.next=h.next,h.next=a),i.interleaved=a,Ri(n,c)}function Ri(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var sr=!1;function kc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ni(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(St&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Ri(n,a)}return h=c.interleaved,h===null?(i.next=i,Lc(c)):(i.next=h.next,h.next=i),c.interleaved=i,Ri(n,a)}function Co(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Yl(n,a)}}function yh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ro(n,i,a,c){var h=n.updateQueue;sr=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,F=h.shared.pending;if(F!==null){h.shared.pending=null;var H=F,oe=H.next;H.next=null,w===null?g=oe:w.next=oe,w=H;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==w&&(F===null?ye.firstBaseUpdate=oe:F.next=oe,ye.lastBaseUpdate=H))}if(g!==null){var be=h.baseState;w=0,ye=oe=H=null,F=g;do{var ve=F.lane,Ue=F.eventTime;if((c&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Ue,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var je=n,Ge=F;switch(ve=i,Ue=a,Ge.tag){case 1:if(je=Ge.payload,typeof je=="function"){be=je.call(Ue,be,ve);break e}be=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ge.payload,ve=typeof je=="function"?je.call(Ue,be,ve):je,ve==null)break e;be=se({},be,ve);break e;case 2:sr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,ve=h.effects,ve===null?h.effects=[F]:ve.push(F))}else Ue={eventTime:Ue,lane:ve,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(oe=ye=Ue,H=be):ye=ye.next=Ue,w|=ve;if(F=F.next,F===null){if(F=h.shared.pending,F===null)break;ve=F,F=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(ye===null&&(H=be),h.baseState=H,h.firstBaseUpdate=oe,h.lastBaseUpdate=ye,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);kr|=w,n.lanes=w,n.memoizedState=be}}function Sh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var va={},xi=nr(va),ya=nr(va),Sa=nr(va);function Dr(n){if(n===va)throw Error(t(174));return n}function Ic(n,i){switch(Lt(Sa,i),Lt(ya,n),Lt(xi,va),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Te(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Te(i,n)}Ut(xi),Lt(xi,i)}function ys(){Ut(xi),Ut(ya),Ut(Sa)}function _h(n){Dr(Sa.current);var i=Dr(xi.current),a=Te(i,n.type);i!==a&&(Lt(ya,n),Lt(xi,a))}function Uc(n){ya.current===n&&(Ut(xi),Ut(ya))}var Ot=nr(0);function No(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Fc=[];function Oc(){for(var n=0;n<Fc.length;n++)Fc[n]._workInProgressVersionPrimary=null;Fc.length=0}var Po=E.ReactCurrentDispatcher,zc=E.ReactCurrentBatchConfig,Lr=0,zt=null,Yt=null,Jt=null,Do=!1,_a=!1,Ma=0,Kg=0;function un(){throw Error(t(321))}function Bc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ti(n[a],i[a]))return!1;return!0}function jc(n,i,a,c,h,g){if(Lr=g,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Po.current=n===null||n.memoizedState===null?ex:tx,n=a(c,h),_a){g=0;do{if(_a=!1,Ma=0,25<=g)throw Error(t(301));g+=1,Jt=Yt=null,i.updateQueue=null,Po.current=nx,n=a(c,h)}while(_a)}if(Po.current=Io,i=Yt!==null&&Yt.next!==null,Lr=0,Jt=Yt=zt=null,Do=!1,i)throw Error(t(300));return n}function Hc(){var n=Ma!==0;return Ma=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?zt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Xn(){if(Yt===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=Yt.next;var i=Jt===null?zt.memoizedState:Jt.next;if(i!==null)Jt=i,Yt=n;else{if(n===null)throw Error(t(310));Yt=n,n={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?zt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function ba(n,i){return typeof i=="function"?i(n):i}function Gc(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Yt,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var F=w=null,H=null,oe=g;do{var ye=oe.lane;if((Lr&ye)===ye)H!==null&&(H=H.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var be={lane:ye,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};H===null?(F=H=be,w=c):H=H.next=be,zt.lanes|=ye,kr|=ye}oe=oe.next}while(oe!==null&&oe!==g);H===null?w=c:H.next=F,ti(c,i.memoizedState)||(En=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=H,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,zt.lanes|=g,kr|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Vc(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do g=n(g,w.action),w=w.next;while(w!==h);ti(g,i.memoizedState)||(En=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Mh(){}function bh(n,i){var a=zt,c=Xn(),h=i(),g=!ti(c.memoizedState,h);if(g&&(c.memoizedState=h,En=!0),c=c.queue,Wc(Th.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,wa(9,Eh.bind(null,a,c,h,i),void 0,null),$t===null)throw Error(t(349));(Lr&30)!==0||wh(a,i,h)}return h}function wh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Eh(n,i,a,c){i.value=a,i.getSnapshot=c,Ah(i)&&Ch(n)}function Th(n,i,a){return a(function(){Ah(i)&&Ch(n)})}function Ah(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ti(n,a)}catch{return!0}}function Ch(n){var i=Ri(n,1);i!==null&&ai(i,n,1,-1)}function Rh(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:n},i.queue=n,n=n.dispatch=$g.bind(null,zt,n),[i.memoizedState,n]}function wa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Nh(){return Xn().memoizedState}function Lo(n,i,a,c){var h=vi();zt.flags|=n,h.memoizedState=wa(1|i,a,void 0,c===void 0?null:c)}function ko(n,i,a,c){var h=Xn();c=c===void 0?null:c;var g=void 0;if(Yt!==null){var w=Yt.memoizedState;if(g=w.destroy,c!==null&&Bc(c,w.deps)){h.memoizedState=wa(i,a,g,c);return}}zt.flags|=n,h.memoizedState=wa(1|i,a,g,c)}function Ph(n,i){return Lo(8390656,8,n,i)}function Wc(n,i){return ko(2048,8,n,i)}function Dh(n,i){return ko(4,2,n,i)}function Lh(n,i){return ko(4,4,n,i)}function kh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ih(n,i,a){return a=a!=null?a.concat([n]):null,ko(4,4,kh.bind(null,i,n),a)}function Xc(){}function Uh(n,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Bc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Fh(n,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Bc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Oh(n,i,a){return(Lr&21)===0?(n.baseState&&(n.baseState=!1,En=!0),n.memoizedState=a):(ti(a,i)||(a=gn(),zt.lanes|=a,kr|=a,n.baseState=!0),i)}function Zg(n,i){var a=Rt;Rt=a!==0&&4>a?a:4,n(!0);var c=zc.transition;zc.transition={};try{n(!1),i()}finally{Rt=a,zc.transition=c}}function zh(){return Xn().memoizedState}function Jg(n,i,a){var c=ur(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Bh(n))jh(i,a);else if(a=xh(n,i,a,c),a!==null){var h=vn();ai(a,n,c,h),Hh(a,i,c)}}function $g(n,i,a){var c=ur(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bh(n))jh(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,F=g(w,a);if(h.hasEagerState=!0,h.eagerState=F,ti(F,w)){var H=i.interleaved;H===null?(h.next=h,Lc(i)):(h.next=H.next,H.next=h),i.interleaved=h;return}}catch{}finally{}a=xh(n,i,h,c),a!==null&&(h=vn(),ai(a,n,c,h),Hh(a,i,c))}}function Bh(n){var i=n.alternate;return n===zt||i!==null&&i===zt}function jh(n,i){_a=Do=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Hh(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Yl(n,a)}}var Io={readContext:Wn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},ex={readContext:Wn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:Ph,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Lo(4194308,4,kh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Lo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Lo(4,2,n,i)},useMemo:function(n,i){var a=vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=vi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Jg.bind(null,zt,n),[c.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:Rh,useDebugValue:Xc,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Rh(!1),i=n[0];return n=Zg.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=zt,h=vi();if(Ft){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),$t===null)throw Error(t(349));(Lr&30)!==0||wh(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,Ph(Th.bind(null,c,g,n),[n]),c.flags|=2048,wa(9,Eh.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=vi(),i=$t.identifierPrefix;if(Ft){var a=Ci,c=Ai;a=(c&~(1<<32-lt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Kg++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},tx={readContext:Wn,useCallback:Uh,useContext:Wn,useEffect:Wc,useImperativeHandle:Ih,useInsertionEffect:Dh,useLayoutEffect:Lh,useMemo:Fh,useReducer:Gc,useRef:Nh,useState:function(){return Gc(ba)},useDebugValue:Xc,useDeferredValue:function(n){var i=Xn();return Oh(i,Yt.memoizedState,n)},useTransition:function(){var n=Gc(ba)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Mh,useSyncExternalStore:bh,useId:zh,unstable_isNewReconciler:!1},nx={readContext:Wn,useCallback:Uh,useContext:Wn,useEffect:Wc,useImperativeHandle:Ih,useInsertionEffect:Dh,useLayoutEffect:Lh,useMemo:Fh,useReducer:Vc,useRef:Nh,useState:function(){return Vc(ba)},useDebugValue:Xc,useDeferredValue:function(n){var i=Xn();return Yt===null?i.memoizedState=n:Oh(i,Yt.memoizedState,n)},useTransition:function(){var n=Vc(ba)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Mh,useSyncExternalStore:bh,useId:zh,unstable_isNewReconciler:!1};function ii(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function qc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Uo={isMounted:function(n){return(n=n._reactInternals)?pi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=vn(),h=ur(n),g=Ni(c,h);g.payload=i,a!=null&&(g.callback=a),i=ar(n,g,h),i!==null&&(ai(i,n,h,c),Co(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=vn(),h=ur(n),g=Ni(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=ar(n,g,h),i!==null&&(ai(i,n,h,c),Co(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=vn(),c=ur(n),h=Ni(a,c);h.tag=2,i!=null&&(h.callback=i),i=ar(n,h,c),i!==null&&(ai(i,n,c,a),Co(i,n,c))}};function Gh(n,i,a,c,h,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!ua(a,c)||!ua(h,g):!0}function Vh(n,i,a){var c=!1,h=ir,g=i.contextType;return typeof g=="object"&&g!==null?g=Wn(g):(h=wn(i)?Cr:cn.current,c=i.contextTypes,g=(c=c!=null)?fs(n,h):ir),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Uo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Wh(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Uo.enqueueReplaceState(i,i.state,null)}function Yc(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},kc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Wn(g):(g=wn(i)?Cr:cn.current,h.context=fs(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(qc(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Uo.enqueueReplaceState(h,h.state,null),Ro(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,i){try{var a="",c=i;do a+=ge(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Qc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Kc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var ix=typeof WeakMap=="function"?WeakMap:Map;function Xh(n,i,a){a=Ni(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Go||(Go=!0,du=c),Kc(n,i)},a}function qh(n,i,a){a=Ni(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Kc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Kc(n,i),typeof c!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Yh(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new ix;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=xx.bind(null,n,i,a),i.then(n,n))}function Qh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Kh(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ni(-1,1),i.tag=2,ar(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var rx=E.ReactCurrentOwner,En=!1;function xn(n,i,a,c){i.child=n===null?gh(i,null,a,c):gs(i,n.child,a,c)}function Zh(n,i,a,c,h){a=a.render;var g=i.ref;return vs(i,h),c=jc(n,i,a,c,g,h),a=Hc(),n!==null&&!En?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Pi(n,i,h)):(Ft&&a&&wc(i),i.flags|=1,xn(n,i,c,h),i.child)}function Jh(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!vu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,$h(n,i,g,c,h)):(n=Qo(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:ua,a(w,c)&&n.ref===i.ref)return Pi(n,i,h)}return i.flags|=1,n=fr(g,c),n.ref=i.ref,n.return=i,i.child=n}function $h(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(ua(g,c)&&n.ref===i.ref)if(En=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(En=!0);else return i.lanes=n.lanes,Pi(n,i,h)}return Zc(n,i,a,c,h)}function ep(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ms,Fn),Fn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ms,Fn),Fn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Lt(Ms,Fn),Fn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Lt(Ms,Fn),Fn|=c;return xn(n,i,h,a),i.child}function tp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Zc(n,i,a,c,h){var g=wn(a)?Cr:cn.current;return g=fs(i,g),vs(i,h),a=jc(n,i,a,c,g,h),c=Hc(),n!==null&&!En?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Pi(n,i,h)):(Ft&&c&&wc(i),i.flags|=1,xn(n,i,a,h),i.child)}function np(n,i,a,c,h){if(wn(a)){var g=!0;So(i)}else g=!1;if(vs(i,h),i.stateNode===null)Oo(n,i),Vh(i,a,c),Yc(i,a,c,h),c=!0;else if(n===null){var w=i.stateNode,F=i.memoizedProps;w.props=F;var H=w.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=Wn(oe):(oe=wn(a)?Cr:cn.current,oe=fs(i,oe));var ye=a.getDerivedStateFromProps,be=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";be||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==c||H!==oe)&&Wh(i,w,c,oe),sr=!1;var ve=i.memoizedState;w.state=ve,Ro(i,c,w,h),H=i.memoizedState,F!==c||ve!==H||bn.current||sr?(typeof ye=="function"&&(qc(i,a,ye,c),H=i.memoizedState),(F=sr||Gh(i,a,F,c,ve,H,oe))?(be||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),w.props=c,w.state=H,w.context=oe,c=F):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,vh(n,i),F=i.memoizedProps,oe=i.type===i.elementType?F:ii(i.type,F),w.props=oe,be=i.pendingProps,ve=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=Wn(H):(H=wn(a)?Cr:cn.current,H=fs(i,H));var Ue=a.getDerivedStateFromProps;(ye=typeof Ue=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==be||ve!==H)&&Wh(i,w,c,H),sr=!1,ve=i.memoizedState,w.state=ve,Ro(i,c,w,h);var je=i.memoizedState;F!==be||ve!==je||bn.current||sr?(typeof Ue=="function"&&(qc(i,a,Ue,c),je=i.memoizedState),(oe=sr||Gh(i,a,oe,c,ve,je,H)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,je,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,je,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),w.props=c,w.state=je,w.context=H,c=oe):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return Jc(n,i,a,c,g,h)}function Jc(n,i,a,c,h,g){tp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return h&&oh(i,a,!1),Pi(n,i,g);c=i.stateNode,rx.current=i;var F=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=gs(i,n.child,null,g),i.child=gs(i,null,F,g)):xn(n,i,F,g),i.memoizedState=c.state,h&&oh(i,a,!0),i.child}function ip(n){var i=n.stateNode;i.pendingContext?sh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&sh(n,i.context,!1),Ic(n,i.containerInfo)}function rp(n,i,a,c,h){return ms(),Cc(h),i.flags|=256,xn(n,i,a,c),i.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function eu(n){return{baseLanes:n,cachePool:null,transitions:null}}function sp(n,i,a){var c=i.pendingProps,h=Ot.current,g=!1,w=(i.flags&128)!==0,F;if((F=w)||(F=n!==null&&n.memoizedState===null?!1:(h&2)!==0),F?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Lt(Ot,h&1),n===null)return Ac(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Ko(w,c,0,null),n=Or(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=eu(a),i.memoizedState=$c,n):tu(i,w));if(h=n.memoizedState,h!==null&&(F=h.dehydrated,F!==null))return sx(n,i,w,c,F,h,a);if(g){g=c.fallback,w=i.mode,h=n.child,F=h.sibling;var H={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=fr(h,H),c.subtreeFlags=h.subtreeFlags&14680064),F!==null?g=fr(F,g):(g=Or(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=n.child.memoizedState,w=w===null?eu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=$c,c}return g=n.child,n=g.sibling,c=fr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function tu(n,i){return i=Ko({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Fo(n,i,a,c){return c!==null&&Cc(c),gs(i,n.child,null,a),n=tu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function sx(n,i,a,c,h,g,w){if(a)return i.flags&256?(i.flags&=-257,c=Qc(Error(t(422))),Fo(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Ko({mode:"visible",children:c.children},h,0,null),g=Or(g,h,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&gs(i,n.child,null,w),i.child.memoizedState=eu(w),i.memoizedState=$c,g);if((i.mode&1)===0)return Fo(n,i,w,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var F=c.dgst;return c=F,g=Error(t(419)),c=Qc(g,c,void 0),Fo(n,i,w,c)}if(F=(w&n.childLanes)!==0,En||F){if(c=$t,c!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|w))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Ri(n,h),ai(c,n,h,-1))}return xu(),c=Qc(Error(t(421))),Fo(n,i,w,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=vx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,Un=tr(h.nextSibling),In=i,Ft=!0,ni=null,n!==null&&(Gn[Vn++]=Ai,Gn[Vn++]=Ci,Gn[Vn++]=Rr,Ai=n.id,Ci=n.overflow,Rr=i),i=tu(i,c.children),i.flags|=4096,i)}function ap(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Dc(n.return,i,a)}function nu(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function op(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(xn(n,i,c.children,a),c=Ot.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ap(n,a,i);else if(n.tag===19)ap(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Lt(Ot,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&No(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),nu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&No(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}nu(i,!0,a,null,g);break;case"together":nu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Oo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),kr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=fr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=fr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function ax(n,i,a){switch(i.tag){case 3:ip(i),ms();break;case 5:_h(i);break;case 1:wn(i.type)&&So(i);break;case 4:Ic(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Lt(To,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?sp(n,i,a):(Lt(Ot,Ot.current&1),n=Pi(n,i,a),n!==null?n.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return op(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Lt(Ot,Ot.current),c)break;return null;case 22:case 23:return i.lanes=0,ep(n,i,a)}return Pi(n,i,a)}var lp,iu,cp,up;lp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},iu=function(){},cp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Dr(xi.current);var g=null;switch(a){case"input":h=Y(n,h),c=Y(n,c),g=[];break;case"select":h=se({},h,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":h=A(n,h),c=A(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=xo)}mt(a,c);var w;a=null;for(oe in h)if(!c.hasOwnProperty(oe)&&h.hasOwnProperty(oe)&&h[oe]!=null)if(oe==="style"){var F=h[oe];for(w in F)F.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?g||(g=[]):(g=g||[]).push(oe,null));for(oe in c){var H=c[oe];if(F=h!=null?h[oe]:void 0,c.hasOwnProperty(oe)&&H!==F&&(H!=null||F!=null))if(oe==="style")if(F){for(w in F)!F.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&F[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(g||(g=[]),g.push(oe,a)),a=H;else oe==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(g=g||[]).push(oe,H)):oe==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(oe,""+H):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(H!=null&&oe==="onScroll"&&It("scroll",n),g||F===H||(g=[])):(g=g||[]).push(oe,H))}a&&(g=g||[]).push("style",a);var oe=g;(i.updateQueue=oe)&&(i.flags|=4)}},up=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ea(n,i){if(!Ft)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function ox(n,i,a){var c=i.pendingProps;switch(Ec(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return wn(i.type)&&yo(),dn(i),null;case 3:return c=i.stateNode,ys(),Ut(bn),Ut(cn),Oc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(wo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(pu(ni),ni=null))),iu(n,i),dn(i),null;case 5:Uc(i);var h=Dr(Sa.current);if(a=i.type,n!==null&&i.stateNode!=null)cp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return dn(i),null}if(n=Dr(xi.current),wo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[gi]=i,c[ma]=g,n=(i.mode&1)!==0,a){case"dialog":It("cancel",c),It("close",c);break;case"iframe":case"object":case"embed":It("load",c);break;case"video":case"audio":for(h=0;h<fa.length;h++)It(fa[h],c);break;case"source":It("error",c);break;case"img":case"image":case"link":It("error",c),It("load",c);break;case"details":It("toggle",c);break;case"input":nn(c,g),It("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},It("invalid",c);break;case"textarea":X(c,g),It("invalid",c)}mt(a,g),h=null;for(var w in g)if(g.hasOwnProperty(w)){var F=g[w];w==="children"?typeof F=="string"?c.textContent!==F&&(g.suppressHydrationWarning!==!0&&go(c.textContent,F,n),h=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(g.suppressHydrationWarning!==!0&&go(c.textContent,F,n),h=["children",""+F]):o.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&It("scroll",c)}switch(a){case"input":At(c),Ye(c,g,!0);break;case"textarea":At(c),K(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=xo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=J(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[gi]=i,n[ma]=c,lp(n,i,!1,!1),i.stateNode=n;e:{switch(w=st(a,c),a){case"dialog":It("cancel",n),It("close",n),h=c;break;case"iframe":case"object":case"embed":It("load",n),h=c;break;case"video":case"audio":for(h=0;h<fa.length;h++)It(fa[h],n);h=c;break;case"source":It("error",n),h=c;break;case"img":case"image":case"link":It("error",n),It("load",n),h=c;break;case"details":It("toggle",n),h=c;break;case"input":nn(n,c),h=Y(n,c),It("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=se({},c,{value:void 0}),It("invalid",n);break;case"textarea":X(n,c),h=A(n,c),It("invalid",n);break;default:h=c}mt(a,h),F=h;for(g in F)if(F.hasOwnProperty(g)){var H=F[g];g==="style"?et(n,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ne(n,H)):g==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&ot(n,H):typeof H=="number"&&ot(n,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?H!=null&&g==="onScroll"&&It("scroll",n):H!=null&&P(n,g,H,w))}switch(a){case"input":At(n),Ye(n,c,!1);break;case"textarea":At(n),K(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Re(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?k(n,!!c.multiple,g,!1):c.defaultValue!=null&&k(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=xo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(n&&i.stateNode!=null)up(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Dr(Sa.current),Dr(xi.current),wo(i)){if(c=i.stateNode,a=i.memoizedProps,c[gi]=i,(g=c.nodeValue!==a)&&(n=In,n!==null))switch(n.tag){case 3:go(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&go(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[gi]=i,i.stateNode=c}return dn(i),null;case 13:if(Ut(Ot),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)hh(),ms(),i.flags|=98560,g=!1;else if(g=wo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[gi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),g=!1}else ni!==null&&(pu(ni),ni=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ot.current&1)!==0?Qt===0&&(Qt=3):xu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return ys(),iu(n,i),n===null&&ha(i.stateNode.containerInfo),dn(i),null;case 10:return Pc(i.type._context),dn(i),null;case 17:return wn(i.type)&&yo(),dn(i),null;case 19:if(Ut(Ot),g=i.memoizedState,g===null)return dn(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)Ea(g,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=No(n),w!==null){for(i.flags|=128,Ea(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Lt(Ot,Ot.current&1|2),i.child}n=n.sibling}g.tail!==null&&Ee()>bs&&(i.flags|=128,c=!0,Ea(g,!1),i.lanes=4194304)}else{if(!c)if(n=No(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ea(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Ft)return dn(i),null}else 2*Ee()-g.renderingStartTime>bs&&a!==1073741824&&(i.flags|=128,c=!0,Ea(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Ee(),i.sibling=null,a=Ot.current,Lt(Ot,c?a&1|2:a&1),i):(dn(i),null);case 22:case 23:return gu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function lx(n,i){switch(Ec(i),i.tag){case 1:return wn(i.type)&&yo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ys(),Ut(bn),Ut(cn),Oc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Uc(i),null;case 13:if(Ut(Ot),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ms()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ut(Ot),null;case 4:return ys(),null;case 10:return Pc(i.type._context),null;case 22:case 23:return gu(),null;case 24:return null;default:return null}}var zo=!1,fn=!1,cx=typeof WeakSet=="function"?WeakSet:Set,ze=null;function _s(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Bt(n,i,c)}else a.current=null}function ru(n,i,a){try{a()}catch(c){Bt(n,i,c)}}var dp=!1;function ux(n,i){if(gc=ro,n=Gf(),lc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,F=-1,H=-1,oe=0,ye=0,be=n,ve=null;t:for(;;){for(var Ue;be!==a||h!==0&&be.nodeType!==3||(F=w+h),be!==g||c!==0&&be.nodeType!==3||(H=w+c),be.nodeType===3&&(w+=be.nodeValue.length),(Ue=be.firstChild)!==null;)ve=be,be=Ue;for(;;){if(be===n)break t;if(ve===a&&++oe===h&&(F=w),ve===g&&++ye===c&&(H=w),(Ue=be.nextSibling)!==null)break;be=ve,ve=be.parentNode}be=Ue}a=F===-1||H===-1?null:{start:F,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(xc={focusedElem:n,selectionRange:a},ro=!1,ze=i;ze!==null;)if(i=ze,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ze=n;else for(;ze!==null;){i=ze;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ge=je.memoizedProps,Ht=je.memoizedState,$=i.stateNode,G=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ii(i.type,Ge),Ht);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Bt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,ze=n;break}ze=i.return}return je=dp,dp=!1,je}function Ta(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&ru(i,a,g)}h=h.next}while(h!==c)}}function Bo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function su(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function fp(n){var i=n.alternate;i!==null&&(n.alternate=null,fp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[gi],delete i[ma],delete i[_c],delete i[Xg],delete i[qg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function hp(n){return n.tag===5||n.tag===3||n.tag===4}function pp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||hp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function au(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=xo));else if(c!==4&&(n=n.child,n!==null))for(au(n,i,a),n=n.sibling;n!==null;)au(n,i,a),n=n.sibling}function ou(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ou(n,i,a),n=n.sibling;n!==null;)ou(n,i,a),n=n.sibling}var rn=null,ri=!1;function or(n,i,a){for(a=a.child;a!==null;)mp(n,i,a),a=a.sibling}function mp(n,i,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 5:fn||_s(a,i);case 6:var c=rn,h=ri;rn=null,or(n,i,a),rn=c,ri=h,rn!==null&&(ri?(n=rn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):rn.removeChild(a.stateNode));break;case 18:rn!==null&&(ri?(n=rn,a=a.stateNode,n.nodeType===8?Sc(n.parentNode,a):n.nodeType===1&&Sc(n,a),ra(n)):Sc(rn,a.stateNode));break;case 4:c=rn,h=ri,rn=a.stateNode.containerInfo,ri=!0,or(n,i,a),rn=c,ri=h;break;case 0:case 11:case 14:case 15:if(!fn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&ru(a,i,w),h=h.next}while(h!==c)}or(n,i,a);break;case 1:if(!fn&&(_s(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){Bt(a,i,F)}or(n,i,a);break;case 21:or(n,i,a);break;case 22:a.mode&1?(fn=(c=fn)||a.memoizedState!==null,or(n,i,a),fn=c):or(n,i,a);break;default:or(n,i,a)}}function gp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new cx),i.forEach(function(c){var h=yx.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function si(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,w=i,F=w;e:for(;F!==null;){switch(F.tag){case 5:rn=F.stateNode,ri=!1;break e;case 3:rn=F.stateNode.containerInfo,ri=!0;break e;case 4:rn=F.stateNode.containerInfo,ri=!0;break e}F=F.return}if(rn===null)throw Error(t(160));mp(g,w,h),rn=null,ri=!1;var H=h.alternate;H!==null&&(H.return=null),h.return=null}catch(oe){Bt(h,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)xp(i,n),i=i.sibling}function xp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),yi(n),c&4){try{Ta(3,n,n.return),Bo(3,n)}catch(Ge){Bt(n,n.return,Ge)}try{Ta(5,n,n.return)}catch(Ge){Bt(n,n.return,Ge)}}break;case 1:si(i,n),yi(n),c&512&&a!==null&&_s(a,a.return);break;case 5:if(si(i,n),yi(n),c&512&&a!==null&&_s(a,a.return),n.flags&32){var h=n.stateNode;try{ot(h,"")}catch(Ge){Bt(n,n.return,Ge)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,F=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{F==="input"&&g.type==="radio"&&g.name!=null&&ht(h,g),st(F,w);var oe=st(F,g);for(w=0;w<H.length;w+=2){var ye=H[w],be=H[w+1];ye==="style"?et(h,be):ye==="dangerouslySetInnerHTML"?Ne(h,be):ye==="children"?ot(h,be):P(h,ye,be,oe)}switch(F){case"input":dt(h,g);break;case"textarea":L(h,g);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Ue=g.value;Ue!=null?k(h,!!g.multiple,Ue,!1):ve!==!!g.multiple&&(g.defaultValue!=null?k(h,!!g.multiple,g.defaultValue,!0):k(h,!!g.multiple,g.multiple?[]:"",!1))}h[ma]=g}catch(Ge){Bt(n,n.return,Ge)}}break;case 6:if(si(i,n),yi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Ge){Bt(n,n.return,Ge)}}break;case 3:if(si(i,n),yi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ra(i.containerInfo)}catch(Ge){Bt(n,n.return,Ge)}break;case 4:si(i,n),yi(n);break;case 13:si(i,n),yi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(uu=Ee())),c&4&&gp(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(fn=(oe=fn)||ye,si(i,n),fn=oe):si(i,n),yi(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!ye&&(n.mode&1)!==0)for(ze=n,ye=n.child;ye!==null;){for(be=ze=ye;ze!==null;){switch(ve=ze,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ta(4,ve,ve.return);break;case 1:_s(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ge){Bt(c,a,Ge)}}break;case 5:_s(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Sp(be);continue}}Ue!==null?(Ue.return=ve,ze=Ue):Sp(be)}ye=ye.sibling}e:for(ye=null,be=n;;){if(be.tag===5){if(ye===null){ye=be;try{h=be.stateNode,oe?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(F=be.stateNode,H=be.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=$e("display",w))}catch(Ge){Bt(n,n.return,Ge)}}}else if(be.tag===6){if(ye===null)try{be.stateNode.nodeValue=oe?"":be.memoizedProps}catch(Ge){Bt(n,n.return,Ge)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===n)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===n)break e;for(;be.sibling===null;){if(be.return===null||be.return===n)break e;ye===be&&(ye=null),be=be.return}ye===be&&(ye=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:si(i,n),yi(n),c&4&&gp(n);break;case 21:break;default:si(i,n),yi(n)}}function yi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(hp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(ot(h,""),c.flags&=-33);var g=pp(n);ou(n,g,h);break;case 3:case 4:var w=c.stateNode.containerInfo,F=pp(n);au(n,F,w);break;default:throw Error(t(161))}}catch(H){Bt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function dx(n,i,a){ze=n,vp(n)}function vp(n,i,a){for(var c=(n.mode&1)!==0;ze!==null;){var h=ze,g=h.child;if(h.tag===22&&c){var w=h.memoizedState!==null||zo;if(!w){var F=h.alternate,H=F!==null&&F.memoizedState!==null||fn;F=zo;var oe=fn;if(zo=w,(fn=H)&&!oe)for(ze=h;ze!==null;)w=ze,H=w.child,w.tag===22&&w.memoizedState!==null?_p(h):H!==null?(H.return=w,ze=H):_p(h);for(;g!==null;)ze=g,vp(g),g=g.sibling;ze=h,zo=F,fn=oe}yp(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,ze=g):yp(n)}}function yp(n){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||Bo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!fn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:ii(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Sh(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Sh(i,w,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var ye=oe.memoizedState;if(ye!==null){var be=ye.dehydrated;be!==null&&ra(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}fn||i.flags&512&&su(i)}catch(ve){Bt(i,i.return,ve)}}if(i===n){ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,ze=a;break}ze=i.return}}function Sp(n){for(;ze!==null;){var i=ze;if(i===n){ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ze=a;break}ze=i.return}}function _p(n){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Bo(4,i)}catch(H){Bt(i,a,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(H){Bt(i,h,H)}}var g=i.return;try{su(i)}catch(H){Bt(i,g,H)}break;case 5:var w=i.return;try{su(i)}catch(H){Bt(i,w,H)}}}catch(H){Bt(i,i.return,H)}if(i===n){ze=null;break}var F=i.sibling;if(F!==null){F.return=i.return,ze=F;break}ze=i.return}}var fx=Math.ceil,jo=E.ReactCurrentDispatcher,lu=E.ReactCurrentOwner,qn=E.ReactCurrentBatchConfig,St=0,$t=null,Vt=null,sn=0,Fn=0,Ms=nr(0),Qt=0,Aa=null,kr=0,Ho=0,cu=0,Ca=null,Tn=null,uu=0,bs=1/0,Di=null,Go=!1,du=null,lr=null,Vo=!1,cr=null,Wo=0,Ra=0,fu=null,Xo=-1,qo=0;function vn(){return(St&6)!==0?Ee():Xo!==-1?Xo:Xo=Ee()}function ur(n){return(n.mode&1)===0?1:(St&2)!==0&&sn!==0?sn&-sn:Qg.transition!==null?(qo===0&&(qo=gn()),qo):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:bf(n.type)),n)}function ai(n,i,a,c){if(50<Ra)throw Ra=0,fu=null,Error(t(185));Mn(n,a,c),((St&2)===0||n!==$t)&&(n===$t&&((St&2)===0&&(Ho|=a),Qt===4&&dr(n,sn)),An(n,c),a===1&&St===0&&(i.mode&1)===0&&(bs=Ee()+500,_o&&rr()))}function An(n,i){var a=n.callbackNode;jn(n,i);var c=mi(n,n===$t?sn:0);if(c===0)a!==null&&ce(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ce(a),i===1)n.tag===0?Yg(bp.bind(null,n)):lh(bp.bind(null,n)),Vg(function(){(St&6)===0&&rr()}),a=null;else{switch(mf(c)){case 1:a=He;break;case 4:a=tt;break;case 16:a=it;break;case 536870912:a=vt;break;default:a=it}a=Pp(a,Mp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Mp(n,i){if(Xo=-1,qo=0,(St&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ws()&&n.callbackNode!==a)return null;var c=mi(n,n===$t?sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Yo(n,c);else{i=c;var h=St;St|=2;var g=Ep();($t!==n||sn!==i)&&(Di=null,bs=Ee()+500,Ur(n,i));do try{mx();break}catch(F){wp(n,F)}while(!0);Nc(),jo.current=g,St=h,Vt!==null?i=0:($t=null,sn=0,i=Qt)}if(i!==0){if(i===2&&(h=wi(n),h!==0&&(c=h,i=hu(n,h))),i===1)throw a=Aa,Ur(n,0),dr(n,c),An(n,Ee()),a;if(i===6)dr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!hx(h)&&(i=Yo(n,c),i===2&&(g=wi(n),g!==0&&(c=g,i=hu(n,g))),i===1))throw a=Aa,Ur(n,0),dr(n,c),An(n,Ee()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Fr(n,Tn,Di);break;case 3:if(dr(n,c),(c&130023424)===c&&(i=uu+500-Ee(),10<i)){if(mi(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){vn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=yc(Fr.bind(null,n,Tn,Di),i);break}Fr(n,Tn,Di);break;case 4:if(dr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var w=31-lt(c);g=1<<w,w=i[w],w>h&&(h=w),c&=~g}if(c=h,c=Ee()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*fx(c/1960))-c,10<c){n.timeoutHandle=yc(Fr.bind(null,n,Tn,Di),c);break}Fr(n,Tn,Di);break;case 5:Fr(n,Tn,Di);break;default:throw Error(t(329))}}}return An(n,Ee()),n.callbackNode===a?Mp.bind(null,n):null}function hu(n,i){var a=Ca;return n.current.memoizedState.isDehydrated&&(Ur(n,i).flags|=256),n=Yo(n,i),n!==2&&(i=Tn,Tn=a,i!==null&&pu(i)),n}function pu(n){Tn===null?Tn=n:Tn.push.apply(Tn,n)}function hx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!ti(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(n,i){for(i&=~cu,i&=~Ho,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-lt(i),c=1<<a;n[a]=-1,i&=~c}}function bp(n){if((St&6)!==0)throw Error(t(327));ws();var i=mi(n,0);if((i&1)===0)return An(n,Ee()),null;var a=Yo(n,i);if(n.tag!==0&&a===2){var c=wi(n);c!==0&&(i=c,a=hu(n,c))}if(a===1)throw a=Aa,Ur(n,0),dr(n,i),An(n,Ee()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Fr(n,Tn,Di),An(n,Ee()),null}function mu(n,i){var a=St;St|=1;try{return n(i)}finally{St=a,St===0&&(bs=Ee()+500,_o&&rr())}}function Ir(n){cr!==null&&cr.tag===0&&(St&6)===0&&ws();var i=St;St|=1;var a=qn.transition,c=Rt;try{if(qn.transition=null,Rt=1,n)return n()}finally{Rt=c,qn.transition=a,St=i,(St&6)===0&&rr()}}function gu(){Fn=Ms.current,Ut(Ms)}function Ur(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Gg(a)),Vt!==null)for(a=Vt.return;a!==null;){var c=a;switch(Ec(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&yo();break;case 3:ys(),Ut(bn),Ut(cn),Oc();break;case 5:Uc(c);break;case 4:ys();break;case 13:Ut(Ot);break;case 19:Ut(Ot);break;case 10:Pc(c.type._context);break;case 22:case 23:gu()}a=a.return}if($t=n,Vt=n=fr(n.current,null),sn=Fn=i,Qt=0,Aa=null,cu=Ho=kr=0,Tn=Ca=null,Pr!==null){for(i=0;i<Pr.length;i++)if(a=Pr[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=h,c.next=w}a.pending=c}Pr=null}return n}function wp(n,i){do{var a=Vt;try{if(Nc(),Po.current=Io,Do){for(var c=zt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Do=!1}if(Lr=0,Jt=Yt=zt=null,_a=!1,Ma=0,lu.current=null,a===null||a.return===null){Qt=1,Aa=i,Vt=null;break}e:{var g=n,w=a.return,F=a,H=i;if(i=sn,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var oe=H,ye=F,be=ye.tag;if((ye.mode&1)===0&&(be===0||be===11||be===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ue=Qh(w);if(Ue!==null){Ue.flags&=-257,Kh(Ue,w,F,g,i),Ue.mode&1&&Yh(g,oe,i),i=Ue,H=oe;var je=i.updateQueue;if(je===null){var Ge=new Set;Ge.add(H),i.updateQueue=Ge}else je.add(H);break e}else{if((i&1)===0){Yh(g,oe,i),xu();break e}H=Error(t(426))}}else if(Ft&&F.mode&1){var Ht=Qh(w);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Kh(Ht,w,F,g,i),Cc(Ss(H,F));break e}}g=H=Ss(H,F),Qt!==4&&(Qt=2),Ca===null?Ca=[g]:Ca.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var $=Xh(g,H,i);yh(g,$);break e;case 1:F=H;var G=g.type,ne=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(lr===null||!lr.has(ne)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ae=qh(g,F,i);yh(g,Ae);break e}}g=g.return}while(g!==null)}Ap(a)}catch(Xe){i=Xe,Vt===a&&a!==null&&(Vt=a=a.return);continue}break}while(!0)}function Ep(){var n=jo.current;return jo.current=Io,n===null?Io:n}function xu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),$t===null||(kr&268435455)===0&&(Ho&268435455)===0||dr($t,sn)}function Yo(n,i){var a=St;St|=2;var c=Ep();($t!==n||sn!==i)&&(Di=null,Ur(n,i));do try{px();break}catch(h){wp(n,h)}while(!0);if(Nc(),St=a,jo.current=c,Vt!==null)throw Error(t(261));return $t=null,sn=0,Qt}function px(){for(;Vt!==null;)Tp(Vt)}function mx(){for(;Vt!==null&&!Q();)Tp(Vt)}function Tp(n){var i=Np(n.alternate,n,Fn);n.memoizedProps=n.pendingProps,i===null?Ap(n):Vt=i,lu.current=null}function Ap(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=ox(a,i,Fn),a!==null){Vt=a;return}}else{if(a=lx(a,i),a!==null){a.flags&=32767,Vt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=n}while(i!==null);Qt===0&&(Qt=5)}function Fr(n,i,a){var c=Rt,h=qn.transition;try{qn.transition=null,Rt=1,gx(n,i,a,c)}finally{qn.transition=h,Rt=c}return null}function gx(n,i,a,c){do ws();while(cr!==null);if((St&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(to(n,g),n===$t&&(Vt=$t=null,sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Vo||(Vo=!0,Pp(it,function(){return ws(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=qn.transition,qn.transition=null;var w=Rt;Rt=1;var F=St;St|=4,lu.current=null,ux(n,a),xp(a,n),Ug(xc),ro=!!gc,xc=gc=null,n.current=a,dx(a),Ce(),St=F,Rt=w,qn.transition=g}else n.current=a;if(Vo&&(Vo=!1,cr=n,Wo=h),g=n.pendingLanes,g===0&&(lr=null),on(a.stateNode),An(n,Ee()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(Go)throw Go=!1,n=du,du=null,n;return(Wo&1)!==0&&n.tag!==0&&ws(),g=n.pendingLanes,(g&1)!==0?n===fu?Ra++:(Ra=0,fu=n):Ra=0,rr(),null}function ws(){if(cr!==null){var n=mf(Wo),i=qn.transition,a=Rt;try{if(qn.transition=null,Rt=16>n?16:n,cr===null)var c=!1;else{if(n=cr,cr=null,Wo=0,(St&6)!==0)throw Error(t(331));var h=St;for(St|=4,ze=n.current;ze!==null;){var g=ze,w=g.child;if((ze.flags&16)!==0){var F=g.deletions;if(F!==null){for(var H=0;H<F.length;H++){var oe=F[H];for(ze=oe;ze!==null;){var ye=ze;switch(ye.tag){case 0:case 11:case 15:Ta(8,ye,g)}var be=ye.child;if(be!==null)be.return=ye,ze=be;else for(;ze!==null;){ye=ze;var ve=ye.sibling,Ue=ye.return;if(fp(ye),ye===oe){ze=null;break}if(ve!==null){ve.return=Ue,ze=ve;break}ze=Ue}}}var je=g.alternate;if(je!==null){var Ge=je.child;if(Ge!==null){je.child=null;do{var Ht=Ge.sibling;Ge.sibling=null,Ge=Ht}while(Ge!==null)}}ze=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ze=w;else e:for(;ze!==null;){if(g=ze,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ta(9,g,g.return)}var $=g.sibling;if($!==null){$.return=g.return,ze=$;break e}ze=g.return}}var G=n.current;for(ze=G;ze!==null;){w=ze;var ne=w.child;if((w.subtreeFlags&2064)!==0&&ne!==null)ne.return=w,ze=ne;else e:for(w=G;ze!==null;){if(F=ze,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Bo(9,F)}}catch(Xe){Bt(F,F.return,Xe)}if(F===w){ze=null;break e}var Ae=F.sibling;if(Ae!==null){Ae.return=F.return,ze=Ae;break e}ze=F.return}}if(St=h,rr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Et,n)}catch{}c=!0}return c}finally{Rt=a,qn.transition=i}}return!1}function Cp(n,i,a){i=Ss(a,i),i=Xh(n,i,1),n=ar(n,i,1),i=vn(),n!==null&&(Mn(n,1,i),An(n,i))}function Bt(n,i,a){if(n.tag===3)Cp(n,n,a);else for(;i!==null;){if(i.tag===3){Cp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(lr===null||!lr.has(c))){n=Ss(a,n),n=qh(i,n,1),i=ar(i,n,1),n=vn(),i!==null&&(Mn(i,1,n),An(i,n));break}}i=i.return}}function xx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=vn(),n.pingedLanes|=n.suspendedLanes&a,$t===n&&(sn&a)===a&&(Qt===4||Qt===3&&(sn&130023424)===sn&&500>Ee()-uu?Ur(n,0):cu|=a),An(n,i)}function Rp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var a=vn();n=Ri(n,i),n!==null&&(Mn(n,i,a),An(n,a))}function vx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Rp(n,a)}function yx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Rp(n,a)}var Np;Np=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)En=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return En=!1,ax(n,i,a);En=(n.flags&131072)!==0}else En=!1,Ft&&(i.flags&1048576)!==0&&ch(i,bo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Oo(n,i),n=i.pendingProps;var h=fs(i,cn.current);vs(i,a),h=jc(null,i,c,n,h,a);var g=Hc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(c)?(g=!0,So(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,kc(i),h.updater=Uo,i.stateNode=h,h._reactInternals=i,Yc(i,c,n,a),i=Jc(null,i,c,!0,g,a)):(i.tag=0,Ft&&g&&wc(i),xn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Oo(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=_x(c),n=ii(c,n),h){case 0:i=Zc(null,i,c,n,a);break e;case 1:i=np(null,i,c,n,a);break e;case 11:i=Zh(null,i,c,n,a);break e;case 14:i=Jh(null,i,c,ii(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),Zc(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),np(n,i,c,h,a);case 3:e:{if(ip(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,vh(n,i),Ro(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Ss(Error(t(423)),i),i=rp(n,i,c,a,h);break e}else if(c!==h){h=Ss(Error(t(424)),i),i=rp(n,i,c,a,h);break e}else for(Un=tr(i.stateNode.containerInfo.firstChild),In=i,Ft=!0,ni=null,a=gh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),c===h){i=Pi(n,i,a);break e}xn(n,i,c,a)}i=i.child}return i;case 5:return _h(i),n===null&&Ac(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,w=h.children,vc(c,h)?w=null:g!==null&&vc(c,g)&&(i.flags|=32),tp(n,i),xn(n,i,w,a),i.child;case 6:return n===null&&Ac(i),null;case 13:return sp(n,i,a);case 4:return Ic(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=gs(i,null,c,a):xn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),Zh(n,i,c,h,a);case 7:return xn(n,i,i.pendingProps,a),i.child;case 8:return xn(n,i,i.pendingProps.children,a),i.child;case 12:return xn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,w=h.value,Lt(To,c._currentValue),c._currentValue=w,g!==null)if(ti(g.value,w)){if(g.children===h.children&&!bn.current){i=Pi(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var F=g.dependencies;if(F!==null){w=g.child;for(var H=F.firstContext;H!==null;){if(H.context===c){if(g.tag===1){H=Ni(-1,a&-a),H.tag=2;var oe=g.updateQueue;if(oe!==null){oe=oe.shared;var ye=oe.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),oe.pending=H}}g.lanes|=a,H=g.alternate,H!==null&&(H.lanes|=a),Dc(g.return,a,i),F.lanes|=a;break}H=H.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,F=w.alternate,F!==null&&(F.lanes|=a),Dc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}xn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,vs(i,a),h=Wn(h),c=c(h),i.flags|=1,xn(n,i,c,a),i.child;case 14:return c=i.type,h=ii(c,i.pendingProps),h=ii(c.type,h),Jh(n,i,c,h,a);case 15:return $h(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),Oo(n,i),i.tag=1,wn(c)?(n=!0,So(i)):n=!1,vs(i,a),Vh(i,c,h),Yc(i,c,h,a),Jc(null,i,c,!0,n,a);case 19:return op(n,i,a);case 22:return ep(n,i,a)}throw Error(t(156,i.tag))};function Pp(n,i){return le(n,i)}function Sx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,i,a,c){return new Sx(n,i,a,c)}function vu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _x(n){if(typeof n=="function")return vu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===me)return 14}return 2}function fr(n,i){var a=n.alternate;return a===null?(a=Yn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Qo(n,i,a,c,h,g){var w=2;if(c=n,typeof n=="function")vu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case I:return Or(a.children,h,g,i);case U:w=8,h|=8;break;case N:return n=Yn(12,a,i,h|2),n.elementType=N,n.lanes=g,n;case Z:return n=Yn(13,a,i,h),n.elementType=Z,n.lanes=g,n;case fe:return n=Yn(19,a,i,h),n.elementType=fe,n.lanes=g,n;case pe:return Ko(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:w=10;break e;case B:w=9;break e;case ae:w=11;break e;case me:w=14;break e;case ue:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Yn(w,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function Or(n,i,a,c){return n=Yn(7,n,c,i),n.lanes=a,n}function Ko(n,i,a,c){return n=Yn(22,n,c,i),n.elementType=pe,n.lanes=a,n.stateNode={isHidden:!1},n}function yu(n,i,a){return n=Yn(6,n,null,i),n.lanes=a,n}function Su(n,i,a){return i=Yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Mx(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hn(0),this.expirationTimes=Hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function _u(n,i,a,c,h,g,w,F,H){return n=new Mx(n,i,a,F,H),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Yn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(g),n}function bx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Dp(n){if(!n)return ir;n=n._reactInternals;e:{if(pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(wn(a))return ah(n,a,i)}return i}function Lp(n,i,a,c,h,g,w,F,H){return n=_u(a,c,!0,n,h,g,w,F,H),n.context=Dp(null),a=n.current,c=vn(),h=ur(a),g=Ni(c,h),g.callback=i??null,ar(a,g,h),n.current.lanes=h,Mn(n,h,c),An(n,c),n}function Zo(n,i,a,c){var h=i.current,g=vn(),w=ur(h);return a=Dp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ni(g,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ar(h,i,w),n!==null&&(ai(n,h,w,g),Co(n,h,w)),w}function Jo(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function kp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Mu(n,i){kp(n,i),(n=n.alternate)&&kp(n,i)}function wx(){return null}var Ip=typeof reportError=="function"?reportError:function(n){console.error(n)};function bu(n){this._internalRoot=n}$o.prototype.render=bu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Zo(n,i,null,null)},$o.prototype.unmount=bu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ir(function(){Zo(null,n,null,null)}),i[Ei]=null}};function $o(n){this._internalRoot=n}$o.prototype.unstable_scheduleHydration=function(n){if(n){var i=vf();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Ji.length&&i!==0&&i<Ji[a].priority;a++);Ji.splice(a,0,n),a===0&&_f(n)}};function wu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function el(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Up(){}function Ex(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var oe=Jo(w);g.call(oe)}}var w=Lp(i,c,n,0,null,!1,!1,"",Up);return n._reactRootContainer=w,n[Ei]=w.current,ha(n.nodeType===8?n.parentNode:n),Ir(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var F=c;c=function(){var oe=Jo(H);F.call(oe)}}var H=_u(n,0,!1,null,null,!1,!1,"",Up);return n._reactRootContainer=H,n[Ei]=H.current,ha(n.nodeType===8?n.parentNode:n),Ir(function(){Zo(i,H,a,c)}),H}function tl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var w=g;if(typeof h=="function"){var F=h;h=function(){var H=Jo(w);F.call(H)}}Zo(i,w,n,h)}else w=Ex(a,i,n,h,c);return Jo(w)}gf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=qt(i.pendingLanes);a!==0&&(Yl(i,a|1),An(i,Ee()),(St&6)===0&&(bs=Ee()+500,rr()))}break;case 13:Ir(function(){var c=Ri(n,1);if(c!==null){var h=vn();ai(c,n,1,h)}}),Mu(n,1)}},Ql=function(n){if(n.tag===13){var i=Ri(n,134217728);if(i!==null){var a=vn();ai(i,n,134217728,a)}Mu(n,134217728)}},xf=function(n){if(n.tag===13){var i=ur(n),a=Ri(n,i);if(a!==null){var c=vn();ai(a,n,i,c)}Mu(n,i)}},vf=function(){return Rt},yf=function(n,i){var a=Rt;try{return Rt=n,i()}finally{Rt=a}},Pe=function(n,i,a){switch(i){case"input":if(dt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=vo(c);if(!h)throw Error(t(90));pt(c),dt(c,h)}}}break;case"textarea":L(n,a);break;case"select":i=a.value,i!=null&&k(n,!!a.multiple,i,!1)}},kt=mu,Xt=Ir;var Tx={usingClientEntryPoint:!1,Events:[ga,us,vo,ke,at,mu]},Na={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ax={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=R(n),n===null?null:n.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Et=nl.inject(Ax),xt=nl}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tx,Cn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(i))throw Error(t(200));return bx(n,i,null,a)},Cn.createRoot=function(n,i){if(!wu(n))throw Error(t(299));var a=!1,c="",h=Ip;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=_u(n,1,!1,null,null,a,!1,c,h),n[Ei]=i.current,ha(n.nodeType===8?n.parentNode:n),new bu(i)},Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=R(i),n=n===null?null:n.stateNode,n},Cn.flushSync=function(n){return Ir(n)},Cn.hydrate=function(n,i,a){if(!el(i))throw Error(t(200));return tl(null,n,i,!0,a)},Cn.hydrateRoot=function(n,i,a){if(!wu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",w=Ip;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Lp(i,null,n,1,a??null,h,!1,g,w),n[Ei]=i.current,ha(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new $o(i)},Cn.render=function(n,i,a){if(!el(i))throw Error(t(200));return tl(null,n,i,!1,a)},Cn.unmountComponentAtNode=function(n){if(!el(n))throw Error(t(40));return n._reactRootContainer?(Ir(function(){tl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ei]=null})}),!0):!1},Cn.unstable_batchedUpdates=mu,Cn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!el(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return tl(n,i,a,!1,c)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var Vp;function i0(){if(Vp)return Au.exports;Vp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Au.exports=kx(),Au.exports}var Wp;function Ix(){if(Wp)return il;Wp=1;var s=i0();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var Ux=Ix(),ie=nf();function Nu(s){const e=s.replace("#",""),t=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),o=parseInt(e.substring(4,6),16);return`${t},${r},${o}`}const Ha={cyan:"#00f0c8",purple:"#7c6ff7",pink:"#f472b6",bg:"#05050a"},fd=[{name:"深空霓虹",colors:Ha},{name:"赛博朋克",colors:{cyan:"#00d4ff",purple:"#ff6ec7",pink:"#ffd700",bg:"#0a0015"}},{name:"极光森林",colors:{cyan:"#39ff14",purple:"#00b4d8",pink:"#e040fb",bg:"#060d06"}},{name:"烈焰熔岩",colors:{cyan:"#ff6b35",purple:"#f72585",pink:"#ffbe0b",bg:"#0d0508"}},{name:"冰蓝幻境",colors:{cyan:"#7df9ff",purple:"#5b8def",pink:"#c4b5fd",bg:"#050810"}},{name:"樱花物语",colors:{cyan:"#ffb7c5",purple:"#c084fc",pink:"#fb7185",bg:"#0a0508"}}],r0=ie.createContext({theme:Ha,setTheme:()=>{}});function Qs(){return ie.useContext(r0)}function Fx(s){const e=document.documentElement;e.style.setProperty("--c1",Nu(s.cyan)),e.style.setProperty("--c2",Nu(s.purple)),e.style.setProperty("--c3",Nu(s.pink)),e.style.setProperty("--bg",s.bg),e.style.setProperty("--c1-hex",s.cyan),e.style.setProperty("--c2-hex",s.purple),e.style.setProperty("--c3-hex",s.pink)}function Ox({children:s}){const[e,t]=ie.useState(()=>{try{const o=localStorage.getItem("vic-theme");if(o)return JSON.parse(o)}catch{}if(typeof window<"u"&&window.innerWidth<768){const o=Math.floor(Math.random()*fd.length);return fd[o].colors}return Ha}),r=o=>{t(o),typeof window<"u"&&window.innerWidth>=768&&localStorage.setItem("vic-theme",JSON.stringify(o))};return ie.useEffect(()=>{Fx(e),window.innerWidth<768&&localStorage.removeItem("vic-theme")},[e]),u.jsx(r0.Provider,{value:{theme:e,setTheme:r},children:s})}function zx(){const s=ie.useRef(null),e=ie.useRef(null),t=ie.useRef(null),r=ie.useRef({x:-200,y:-200}),o=ie.useRef({x:-200,y:-200}),l=ie.useRef([]),f=ie.useRef(0),d=ie.useRef(!1),p=10,m=25,v=8,_=400,S=1;return ie.useEffect(()=>{const M=I=>{r.current={x:I.clientX,y:I.clientY}},b=()=>d.current=!0,T=()=>d.current=!1,y=t.current,x=y==null?void 0:y.getContext("2d"),D=()=>{y&&(y.width=window.innerWidth,y.height=window.innerHeight)};window.addEventListener("resize",D),D();const P=I=>{const N=getComputedStyle(document.documentElement).getPropertyValue("--c1").trim(),C=N?`rgb(${N})`:"#00f0c8",B=performance.now(),ae=Array.from({length:v},(Z,fe)=>({x:I.clientX,y:I.clientY,angle:2*Math.PI*fe/v,startTime:B,color:C}));l.current.push(...ae)};window.addEventListener("click",P);const E=I=>I*(2-I),W=I=>{o.current.x+=(r.current.x-o.current.x)*.12,o.current.y+=(r.current.y-o.current.y)*.12,s.current&&(s.current.style.transform=`translate(${r.current.x-4}px, ${r.current.y-4}px)`,s.current.style.opacity=d.current?"1":"0"),e.current&&(e.current.style.transform=`translate(${o.current.x-20}px, ${o.current.y-20}px)`,e.current.style.opacity=d.current?"1":"0"),x&&y&&(x.clearRect(0,0,y.width,y.height),l.current=l.current.filter(U=>{const N=I-U.startTime;if(N>=_)return!1;const C=N/_,B=E(C),ae=B*m*S,Z=p*(1-B),fe=U.x+ae*Math.cos(U.angle),me=U.y+ae*Math.sin(U.angle),ue=U.x+(ae+Z)*Math.cos(U.angle),pe=U.y+(ae+Z)*Math.sin(U.angle);return x.strokeStyle=U.color,x.lineWidth=2,x.lineCap="round",x.beginPath(),x.moveTo(fe,me),x.lineTo(ue,pe),x.stroke(),!0})),f.current=requestAnimationFrame(W)};window.addEventListener("mousemove",M),f.current=requestAnimationFrame(W);const z=document.getElementById("hero");return z&&(z.addEventListener("mouseenter",b),z.addEventListener("mouseleave",T)),()=>{window.removeEventListener("mousemove",M),window.removeEventListener("click",P),window.removeEventListener("resize",D),cancelAnimationFrame(f.current),z&&(z.removeEventListener("mouseenter",b),z.removeEventListener("mouseleave",T))}},[]),u.jsxs(u.Fragment,{children:[u.jsx("canvas",{ref:t,className:"fixed top-0 left-0 pointer-events-none z-[9995]",style:{width:"100vw",height:"100vh"}}),u.jsx("div",{ref:s,className:"fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9997] transition-opacity duration-200",style:{background:"rgb(var(--c1))",boxShadow:"0 0 8px rgba(0,240,200,0.9), 0 0 20px rgba(0,240,200,0.4)",willChange:"transform",opacity:0}}),u.jsx("div",{ref:e,className:"fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9996] transition-opacity duration-200",style:{border:"1px solid rgba(var(--c1),0.35)",willChange:"transform",opacity:0}})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jx=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),Xp=s=>{const e=jx(s);return e.charAt(0).toUpperCase()+e.slice(1)},s0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=ie.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:f,...d},p)=>ie.createElement("svg",{ref:p,...Hx,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:s0("lucide",o),...d},[...f.map(([m,v])=>ie.createElement(m,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(s,e)=>{const t=ie.forwardRef(({className:r,...o},l)=>ie.createElement(Gx,{ref:l,iconNode:e,className:s0(`lucide-${Bx(Xp(s))}`,`lucide-${s}`,r),...o}));return t.displayName=Xp(s),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Wx=rt("activity",Vx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],qx=rt("arrow-right",Xx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],rf=rt("arrow-up-right",Yx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Pu=rt("award",Qx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Zx=rt("book-open",Kx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],$x=rt("briefcase",Jx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]],tv=rt("cake",ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],iv=rt("chart-column",nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],a0=rt("check",rv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],o0=rt("chevron-down",sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ov=rt("chevron-right",av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],cv=rt("circle-alert",lv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],dv=rt("circle-check",uv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],l0=rt("component",fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],c0=rt("copy",hv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],qp=rt("disc-3",pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],hd=rt("download",mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],sf=rt("external-link",gv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Yp=rt("graduation-cap",xv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],yv=rt("layers",vv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],_v=rt("layout-dashboard",Sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],bv=rt("lock",Mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],af=rt("mail",wv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],u0=rt("map-pin",Ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m21 3-6.75 6.75",key:"pv0uzu"}],["circle",{cx:"10",cy:"14",r:"6",key:"1qwbdc"}]],Av=rt("mars",Tv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Rv=rt("menu",Cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],d0=rt("palette",Nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Dv=rt("pause",Pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],kv=rt("phone-call",Lv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Uv=rt("phone",Iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Ov=rt("play",Fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],Bv=rt("presentation",zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Qp=rt("radio",jv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Gv=rt("rotate-ccw",Hv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Wv=rt("send",Vv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]],qv=rt("skip-back",Xv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],Qv=rt("skip-forward",Yv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Va=rt("sparkles",Kv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Jv=rt("trophy",Zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],e1=rt("twitter",$v);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],n1=rt("volume-2",t1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],r1=rt("volume-x",i1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],a1=rt("wand-sparkles",s1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jr=rt("x",o1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],c1=rt("zap",l1);function u1({isLight:s}){const[e,t]=ie.useState(!1),r=ie.useRef(null),{theme:o,setTheme:l}=Qs(),[f,d]=ie.useState(o);ie.useEffect(()=>{d(o)},[o]),ie.useEffect(()=>{const I=U=>{r.current&&!r.current.contains(U.target)&&t(!1)};return e&&document.addEventListener("mousedown",I),()=>document.removeEventListener("mousedown",I)},[e]);const p=(I,U)=>{const N={...f,[I]:U};d(N),l(N)},m=s?"rgba(255,255,255,0.95)":"linear-gradient(160deg, #0d0d1a 0%, #0a0a14 100%)",v=s?"1px solid rgba(0,0,0,0.1)":"1px solid rgba(var(--c1),0.2)",_=s?"0 20px 60px rgba(0,0,0,0.1), 0 0 40px rgba(0,0,0,0.05)":"0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(var(--c1),0.08)",S=s?"#1a1a2e":"rgba(255,255,255,0.8)",M=s?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.06)",b=s?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)",T=I=>s?I?"rgba(0,0,0,0.1)":"rgba(0,0,0,0.03)":I?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.03)",y=I=>s?I?"1px solid rgba(0,0,0,0.2)":"1px solid rgba(0,0,0,0.06)":I?"1px solid rgba(var(--c1),0.4)":"1px solid rgba(255,255,255,0.06)",x=I=>s?I?"#1a1a2e":"rgba(0,0,0,0.45)":I?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.45)",D=s?"linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)":"linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",P=s?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)",E=s?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)",W=s?"rgba(0,0,0,0.3)":"rgba(255,255,255,0.3)",z=s?"1.5px solid rgba(0,0,0,0.15)":"1.5px solid rgba(255,255,255,0.15)";return u.jsxs("div",{className:"relative",ref:r,children:[u.jsx("button",{onClick:()=>t(!e),className:"flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 hover:scale-110",style:s?{background:"transparent",color:"#1a1a2e",fontWeight:500,border:"0.5px solid rgba(0,0,0,0.22)",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",transition:"all 0.3s"}:{background:"linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",color:"rgba(255,255,255,0.95)",fontWeight:600,border:"0.5px solid rgba(var(--c1),0.4)",boxShadow:"0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",transition:"all 0.3s"},title:"切换主题色",children:u.jsx(d0,{size:16})}),e&&u.jsxs("div",{className:"absolute right-0 top-12 w-72 rounded-xl p-4 z-[100]",style:{background:m,border:v,boxShadow:_,backdropFilter:"blur(20px)"},children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:S,letterSpacing:"0.05em"},children:"🎨 主题配色"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("button",{onClick:()=>{l(Ha),d(Ha)},className:"w-6 h-6 rounded-md flex items-center justify-center transition-colors",style:{background:M,color:b},title:"重置默认",children:u.jsx(Gv,{size:12})}),u.jsx("button",{onClick:()=>t(!1),className:"w-6 h-6 rounded-md flex items-center justify-center transition-colors",style:{background:M,color:b},children:u.jsx(Jr,{size:12})})]})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2 mb-4",children:fd.map(I=>{const U=I.colors.cyan===o.cyan&&I.colors.purple===o.purple&&I.colors.pink===o.pink;return u.jsxs("button",{onClick:()=>l(I.colors),className:"rounded-lg p-2 transition-all duration-200 hover:scale-105",style:{background:T(U),border:y(U)},children:[u.jsx("div",{className:"flex gap-1 justify-center mb-1.5",children:[I.colors.cyan,I.colors.purple,I.colors.pink].map((N,C)=>u.jsx("div",{className:"w-4 h-4 rounded-full",style:{background:N,boxShadow:`0 0 6px ${N}66`}},C))}),u.jsx("span",{style:{fontSize:"0.65rem",color:x(U),fontWeight:U?600:400},children:I.name})]},I.name)})}),u.jsx("div",{className:"h-px mb-3",style:{background:D}}),u.jsx("div",{style:{fontSize:"0.7rem",fontWeight:500,color:P,letterSpacing:"0.08em",marginBottom:"8px"},children:"自定义颜色"}),u.jsx("div",{className:"space-y-2",children:[{key:"cyan",label:"主色 (霓虹青)"},{key:"purple",label:"辅色 (紫罗兰)"},{key:"pink",label:"点缀 (粉玫)"},{key:"bg",label:"背景色"}].map(({key:I,label:U})=>u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsxs("label",{className:"relative w-7 h-7 rounded-lg overflow-hidden cursor-pointer flex-shrink-0",style:{border:z,boxShadow:`0 0 8px ${f[I]}44`},children:[u.jsx("input",{type:"color",value:f[I],onChange:N=>p(I,N.target.value),className:"absolute inset-0 opacity-0 cursor-pointer w-full h-full"}),u.jsx("div",{className:"w-full h-full",style:{background:f[I]}})]}),u.jsx("span",{style:{fontSize:"0.72rem",color:E,flex:1},children:U}),u.jsx("span",{style:{fontSize:"0.65rem",color:W,fontFamily:"monospace"},children:f[I].toUpperCase()})]},I))})]})]})}var d1=i0();function Wa({children:s}){const[e,t]=ie.useState(!1);return ie.useEffect(()=>(t(!0),()=>t(!1)),[]),e?d1.createPortal(s,document.body):null}const Kp="data:image/png;base64,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",Du=[{label:"Home",href:"hero"},{label:"Skills",href:"skills"},{label:"Projects",href:"projects"},{label:"Works",href:"portfolio"},{label:"Education",href:"education"},{label:"Contact",href:"contact"}],f1=new Set(["projects","education"]);function h1(){const[s,e]=ie.useState(!1),[t,r]=ie.useState(!1),[o,l]=ie.useState("hero"),[f,d]=ie.useState(null),[p,m]=ie.useState(!1);ie.useEffect(()=>{const U=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",U,{passive:!0}),U(),()=>window.removeEventListener("scroll",U)},[]),ie.useEffect(()=>{const U={root:null,rootMargin:"-68px 0px -80% 0px",threshold:[.01,.05,.1]},N=new Map,C=ae=>{if(ae.forEach(Z=>{Z.isIntersecting?N.set(Z.target.id,Z.boundingClientRect.top):N.delete(Z.target.id)}),N.size>0){let Z="",fe=1/0;N.forEach((me,ue)=>{me<fe&&(fe=me,Z=ue)}),Z&&l(Z)}},B=new IntersectionObserver(C,U);return Du.forEach(ae=>{const Z=document.getElementById(ae.href);Z&&B.observe(Z)}),()=>{B.disconnect(),N.clear()}},[]);const v=U=>{var N;(N=document.getElementById(U))==null||N.scrollIntoView({behavior:"smooth"}),r(!1)},_=f1.has(o),S=_?"rgba(255,255,255,0.6)":s?"rgba(5,5,12,0.5)":"rgba(5,5,12,0.6)",M=_?"1px solid rgba(0,0,0,0.08)":`1px solid ${s?"rgba(var(--c1),0.07)":"rgba(var(--c1),0)"}`,b=_?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.04)",T=_?"1px solid rgba(0,0,0,0.10)":"1px solid rgba(255,255,255,0.18)",y=_?"inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 24px rgba(0,0,0,0.06)":"inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)",x=_?"rgba(0,0,0,0.45)":"rgba(255,255,255,0.5)",D=_?"rgba(0,0,0,0.75)":"rgba(255,255,255,0.9)",P=_?"#1a1a2e":"#f0f4f8",E=_?"linear-gradient(135deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.22) 100%)":"linear-gradient(135deg, rgba(var(--c1),0.45) 0%, rgba(var(--c1),0.18) 50%, rgba(var(--c1),0.28) 100%)",W=_?"1px solid rgba(0,0,0,0.22), 1px solid rgba(255,255,255,0.45) inset":"1px solid rgba(var(--c1),0.7), 1px solid rgba(255,255,255,0.18) inset",z=_?"0 0 24px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.15), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -2px 0 rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.12)":"0 0 50px rgba(var(--c1),0.45), 0 12px 48px rgba(0,0,0,0.35), inset 0 3px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.25), 0 0 0 1px rgba(var(--c1),0.25), 0 0 30px rgba(var(--c1),0.2)",I=_?"#1a1a2e":"rgb(var(--c1))";return u.jsxs(u.Fragment,{children:[u.jsxs("nav",{className:"fixed top-0 left-0 z-50 transition-all duration-500",style:{background:S,backdropFilter:"blur(24px) saturate(180%)",WebkitBackdropFilter:"blur(24px) saturate(180%)",borderBottom:M,boxShadow:_?"0 4px 24px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.5)":"0 4px 24px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)",transform:"scale(var(--screen-scale))",transformOrigin:"top left",width:"calc(100% / var(--screen-scale))"},children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between gap-4",children:[u.jsxs("button",{onClick:()=>m(!0),className:"flex items-center gap-3 flex-shrink-0",children:[u.jsx("div",{className:"relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0",style:{border:_?"1.5px solid rgba(0,0,0,0.12)":"1.5px solid rgba(var(--c1),0.45)",boxShadow:_?"0 1px 6px rgba(0,0,0,0.12)":"0 0 8px rgba(var(--c1),0.25)",transition:"border 0.4s, box-shadow 0.4s"},children:u.jsx("img",{src:Kp,alt:"Vic Qu",className:"w-full h-full object-cover object-center"})}),u.jsx("span",{className:"whitespace-nowrap",style:{fontWeight:700,fontSize:"1.2rem",color:P,letterSpacing:"0.08em",transition:"color 0.4s"},children:"曲维甲"})]}),u.jsxs("div",{className:`hidden md:flex items-center gap-4 px-1.5 py-1.5 rounded-full transition-all duration-500 flex-shrink-0 ${_?"nav-light":"nav-dark"}`,style:{background:b,border:T,backdropFilter:"blur(12px)",boxShadow:y},children:[Du.map(U=>{const N=o===U.href,C=f===U.href;return u.jsxs("button",{onClick:()=>{v(U.href),l(U.href)},onMouseEnter:()=>d(U.href),onMouseLeave:()=>d(null),className:"relative px-3 py-1.5 text-base rounded-full overflow-hidden nav-glass-btn flex-shrink-0 whitespace-nowrap",style:{color:N?I:C?D:x,fontWeight:N?600:400,background:N?E:"transparent",border:N?W:"1px solid transparent",boxShadow:N?z:"none",letterSpacing:"0.01em",transition:"color 0.25s, background 0.3s, border 0.3s, box-shadow 0.3s"},children:[N&&!_&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"absolute top-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none",style:{width:"70%",height:"1.5px",background:"linear-gradient(90deg, transparent, rgba(var(--c1),0.85), transparent)",boxShadow:"0 0 12px rgba(var(--c1),0.5), 0 0 24px rgba(var(--c1),0.25)"}}),u.jsx("span",{className:"absolute top-1 left-1/2 -translate-x-1/2 rounded-full pointer-events-none",style:{width:"50%",height:"1px",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",opacity:.6}})]}),U.label]},U.label)}),u.jsx("style",{children:`
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
            `})]}),u.jsxs("div",{className:"hidden md:flex items-center gap-2 flex-shrink-0",children:[u.jsx(u1,{isLight:_}),u.jsx("button",{className:"flex items-center gap-2 px-5 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-[1.1] whitespace-nowrap flex-shrink-0",onClick:()=>m(!0),style:_?{background:"transparent",color:"#1a1a2e",fontWeight:500,border:"0.5px solid rgba(0,0,0,0.22)",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",transition:"all 0.3s"}:{background:"linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",color:"rgba(255,255,255,0.95)",fontWeight:600,border:"0.5px solid rgba(var(--c1),0.4)",boxShadow:"0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",transition:"all 0.3s"},children:"About Me"})]}),u.jsx("button",{className:"md:hidden",style:{color:_?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.7)",transition:"color 0.4s"},onClick:()=>r(!t),children:t?u.jsx(Jr,{size:26}):u.jsx(Rv,{size:26})})]}),t&&u.jsx("div",{className:"md:hidden px-[24px] py-[0px]",style:{background:"transparent",backdropFilter:"none",WebkitBackdropFilter:"none",borderBottom:"none"},children:Du.map(U=>u.jsx("button",{onClick:()=>v(U.href),className:"block w-full text-left py-3 text-base border-b",style:{color:o===U.href?_?"#1a1a2e":"rgb(var(--c1))":_?"rgba(5,5,12,0.6)":"rgba(255,255,255,0.5)",fontWeight:o===U.href?700:400,borderColor:_?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.05)"},children:U.label},U.label))})]}),p&&u.jsx(Wa,{children:u.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-4",style:{backdropFilter:"blur(16px)",background:"rgba(5,5,12,0.75)"},onClick:()=>m(!1),children:u.jsxs("div",{className:"relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl",style:{background:"linear-gradient(160deg, #0d0d1a 0%, #0a0a14 100%)",border:"1px solid rgba(var(--c1),0.18)",boxShadow:"0 0 60px rgba(var(--c1),0.12), 0 0 120px rgba(var(--c2),0.08), inset 0 1px 0 rgba(var(--c1),0.1)"},onClick:U=>U.stopPropagation(),children:[u.jsxs("div",{className:"sticky top-0 z-10 bg-[#0d0d1a] rounded-t-2xl px-6 sm:px-8 pt-4 sm:pt-8 pb-0",children:[u.jsx("div",{className:"absolute top-0 left-0 right-0 h-px rounded-t-2xl",style:{background:"linear-gradient(90deg, transparent, rgb(var(--c1)), rgb(var(--c2)), transparent)"}}),u.jsx("button",{onClick:()=>m(!1),className:"absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.5)"},children:u.jsx(Jr,{size:15})}),u.jsxs("div",{className:"flex items-center gap-3 sm:gap-5 mb-4 sm:mb-8",children:[u.jsx("div",{className:"relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0",style:{border:"2px solid rgba(var(--c1),0.4)",boxShadow:"0 0 20px rgba(var(--c1),0.2)"},children:u.jsx("img",{src:Kp,alt:"Vic Qu",className:"w-full h-full object-cover"})}),u.jsxs("div",{children:[u.jsx("h2",{style:{fontSize:"1.0rem",fontWeight:700,color:"#f0f4f8",letterSpacing:"0.04em"},className:"sm:text-[1.6rem]",children:"曲维甲"}),u.jsx("p",{style:{color:"rgb(var(--c1))",fontSize:"0.8rem",fontWeight:500,letterSpacing:"0.08em"},className:"sm:text-[0.9rem]",children:"Vic Qu · ENFJ 全栈设计师"}),u.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 mt-1 sm:mt-1.5",children:[u.jsx(u0,{size:12,style:{color:"rgba(255,255,255,0.35)"}}),u.jsx("span",{style:{color:"rgba(255,255,255,0.35)",fontSize:"0.8rem"},children:"济南 · 中国"})]})]})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[{icon:u.jsx(Av,{size:20}),label:"性别",value:"男"},{icon:u.jsx(tv,{size:20}),label:"生日",value:" 1992.7.9"},{icon:u.jsx(Uv,{size:20}),label:"电话",value:"+86 156 6279 6885"},{icon:u.jsx(af,{size:20}),label:"邮箱",value:"quweijia@vip.qq.com"}].map(U=>u.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 rounded-xl",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)"},children:[u.jsx("span",{style:{color:"rgb(var(--c1))"},children:U.icon}),u.jsxs("div",{children:[u.jsx("p",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.3)",marginBottom:"1px"},children:U.label}),u.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.8)",fontWeight:500},children:U.value})]})]},U.label))})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto px-6 sm:px-8 pb-6 sm:pb-8",children:[u.jsx("style",{children:`
        div::-webkit-scrollbar {
          display: none;
        }
      `}),u.jsxs("div",{className:"mt-8",children:[u.jsxs("div",{className:"mb-6",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c1)),rgb(var(--c2)))"}}),u.jsx("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:"个人简介"})]}),u.jsx("p",{style:{fontSize:"0.9rem",lineHeight:"1.8",color:"rgba(255,255,255,0.6)"},children:"拥有 10 年以上 UI/UX 设计经验的全栈设计师，深度融合用户研究、交互设计与前端技术，擅长将复杂业务逻辑转化为清晰直觉的数字体验。ENFJ 人格驱动，热衷于跨职能协作与设计系统建设，曾主导多个亿级用户产品的端到端设计工作。"})]}),u.jsxs("div",{className:"mb-6",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c2)),rgb(var(--c3)))"}}),u.jsxs("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:[u.jsx(Zx,{size:12,className:"inline mr-1.5",style:{color:"rgb(var(--c2))"}}),"教育经历"]})]}),u.jsx("div",{className:"space-y-3",children:[{school:"中国石油大学（华东）",degree:"建筑环境与能源应用工程 · 本科",year:"2011 – 2015"},{school:"Google UX Design Certificate",degree:"用户体验设计专业认证",year:"2017"}].map(U=>u.jsxs("div",{className:"flex items-start justify-between px-4 py-3 rounded-xl",style:{background:"rgba(var(--c2),0.06)",border:"1px solid rgba(var(--c2),0.12)"},children:[u.jsxs("div",{children:[u.jsx("p",{style:{fontSize:"0.88rem",fontWeight:600,color:"rgba(255,255,255,0.8)"},children:U.school}),u.jsx("p",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",marginTop:"2px"},children:U.degree})]}),u.jsx("span",{style:{fontSize:"0.75rem",color:"rgb(var(--c2))",fontWeight:500,whiteSpace:"nowrap",marginLeft:"12px"},children:U.year})]},U.school))})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c3)),rgb(var(--c1)))"}}),u.jsxs("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:[u.jsx($x,{size:12,className:"inline mr-1.5",style:{color:"rgb(var(--c3))"}}),"工作经历"]})]}),u.jsx("div",{className:"space-y-3",children:[{company:"浪潮智慧建筑科技有限公司",role:"UI 设计主管",year:"2024 – 至今",desc:"深耕智慧园区、智慧工地、建筑节能等核心业务领域的 UI 设计/管理工作。主导构建覆盖移动端与 PC 端的全链路原子组件设计规范体系，建立标准化评审机制把控团队设计输出质量；统筹展厅设计方案对接与落地，协助管理层完成商务级 PPT 视觉优化等。"},{company:"历城控股集团",role:"UI 设计主管",year:"2023 – 2024",desc:"聚焦数字政府建设、数智化产品开发、应用及运营等业务，设计不同风格的视觉界面，参与项目评审并提出有效的修改方案。"},{company:"山东高速集团",role:"UI 设计主管",year:"2023 – 2023",desc:"全面负责UI设计组工作推进，优化迭代公司自主研发的智能货运交易共享平台，参与产品需求讨论，保障产品设计方案有效落地。"},{company:"山东爱城市网科技有限公司",role:"高级 UI/UX 设计师",year:"2018 – 2023",desc:"负责爱城市网 App 核心应用设计、交互动效制作，优化产品和研发的工作流程，维护和更新产品设计规范元件库，牵头设计类专利撰写等。"}].map(U=>u.jsxs("div",{className:"px-4 py-3 rounded-xl",style:{background:"rgba(var(--c3),0.05)",border:"1px solid rgba(var(--c3),0.1)"},children:[u.jsxs("div",{className:"flex items-start justify-between mb-1",children:[u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"0.88rem",fontWeight:600,color:"rgba(255,255,255,0.8)",lineHeight:1.5},children:U.company}),u.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)"},children:U.role})]}),u.jsx("span",{style:{fontSize:"0.75rem",color:"rgb(var(--c3))",fontWeight:500,whiteSpace:"nowrap",marginLeft:"12px"},children:U.year})]}),u.jsx("p",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.35)",lineHeight:"1.6"},children:U.desc})]},U.company))})]})]})]})]})})})]})}function f0({isOpen:s,onClose:e,onConfirm:t}){const[r,o]=ie.useState(""),[l,f]=ie.useState(""),d="123789";ie.useEffect(()=>{s&&(o(""),f(""))},[s]),ie.useEffect(()=>{const m=v=>{v.key==="Escape"&&s&&e()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[s,e]);const p=m=>{m.preventDefault(),r===d?(t(),e()):(f("密码错误，请重试"),o(""))};return s?u.jsx(Wa,{children:u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backdropFilter:"blur(8px)",background:"rgba(0, 0, 0, 0.6)"},onClick:e,children:u.jsxs("div",{className:"relative w-full max-w-md rounded-2xl p-8 shadow-2xl",style:{background:"var(--bg)",border:"1px solid rgba(var(--c1), 0.2)",boxShadow:"0 0 40px rgba(var(--c1), 0.15), 0 20px 60px rgba(0, 0, 0, 0.5)"},onClick:m=>m.stopPropagation(),children:[u.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 hover:rotate-90",style:{color:"rgba(255, 255, 255, 0.5)",background:"rgba(var(--c1), 0.1)"},onMouseEnter:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.2)",m.currentTarget.style.color="rgb(var(--c1))"},onMouseLeave:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.1)",m.currentTarget.style.color="rgba(255, 255, 255, 0.5)"},children:u.jsx(Jr,{size:20})}),u.jsx("div",{className:"mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6",style:{background:"linear-gradient(135deg, rgba(var(--c1), 0.15), rgba(var(--c1), 0.05))",border:"1px solid rgba(var(--c1), 0.3)"},children:u.jsx(bv,{size:32,style:{color:"rgb(var(--c1))"}})}),u.jsx("h2",{className:"text-2xl font-bold text-center mb-2",style:{color:"rgba(255, 255, 255, 0.9)"},children:"请输入密码"}),u.jsx("p",{className:"text-center mb-6 text-sm",style:{color:"rgba(255, 255, 255, 0.5)"},children:"请联系 15662796885 获取"}),u.jsxs("form",{onSubmit:p,children:[u.jsxs("div",{className:"mb-6",children:[u.jsx("input",{type:"password",value:r,onChange:m=>{o(m.target.value),f("")},placeholder:"输入密码",className:"w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-200",style:{background:"rgba(var(--c1), 0.05)",border:l?"1px solid rgba(239, 68, 68, 0.5)":"1px solid rgba(var(--c1), 0.2)",color:"rgba(255, 255, 255, 0.9)",boxShadow:l?"0 0 0 3px rgba(239, 68, 68, 0.1)":"none"},onFocus:m=>{l||(m.currentTarget.style.borderColor="rgba(var(--c1), 0.4)",m.currentTarget.style.boxShadow="0 0 0 3px rgba(var(--c1), 0.1)")},onBlur:m=>{l||(m.currentTarget.style.borderColor="rgba(var(--c1), 0.2)",m.currentTarget.style.boxShadow="none")},autoFocus:!0}),l&&u.jsxs("div",{className:"mt-2 flex items-center gap-2 text-sm",style:{color:"rgb(239, 68, 68)"},children:[u.jsx(cv,{size:16}),u.jsx("span",{children:l})]})]}),u.jsxs("div",{className:"flex gap-3",children:[u.jsx("button",{type:"button",onClick:e,className:"flex-1 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:scale-[1.02]",style:{background:"rgba(var(--c1), 0.1)",color:"rgba(255, 255, 255, 0.7)",border:"1px solid rgba(var(--c1), 0.2)"},onMouseEnter:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.15)",m.currentTarget.style.color="rgba(255, 255, 255, 0.9)"},onMouseLeave:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.1)",m.currentTarget.style.color="rgba(255, 255, 255, 0.7)"},children:"取消"}),u.jsx("button",{type:"submit",className:"flex-1 px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 hover:scale-[1.02]",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",color:"var(--bg)",border:"none",boxShadow:"0 0 20px rgba(var(--c1), 0.3)"},onMouseEnter:m=>{m.currentTarget.style.boxShadow="0 0 30px rgba(var(--c1), 0.4)"},onMouseLeave:m=>{m.currentTarget.style.boxShadow="0 0 20px rgba(var(--c1), 0.3)"},children:"确认"})]})]})]})})}):null}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const of="170",p1=0,Zp=1,m1=2,h0=1,g1=2,Oi=3,br=0,Dn=1,zi=2,_r=0,Bs=1,pd=2,Jp=3,$p=4,x1=5,Yr=100,v1=101,y1=102,S1=103,_1=104,M1=200,b1=201,w1=202,E1=203,md=204,gd=205,T1=206,A1=207,C1=208,R1=209,N1=210,P1=211,D1=212,L1=213,k1=214,xd=0,vd=1,yd=2,Gs=3,Sd=4,_d=5,Md=6,bd=7,p0=0,I1=1,U1=2,Mr=0,F1=1,O1=2,z1=3,B1=4,j1=5,H1=6,G1=7,m0=300,Vs=301,Ws=302,wd=303,Ed=304,Gl=306,Td=1e3,fi=1001,Ad=1002,Bn=1003,V1=1004,rl=1005,Pn=1006,Lu=1007,Kr=1008,Gi=1009,g0=1010,x0=1011,Ga=1012,lf=1013,$r=1014,_i=1015,Ks=1016,cf=1017,uf=1018,Xs=1020,v0=35902,y0=1021,S0=1022,Zn=1023,_0=1024,M0=1025,js=1026,qs=1027,b0=1028,df=1029,w0=1030,ff=1031,hf=1033,Pl=33776,Dl=33777,Ll=33778,kl=33779,Cd=35840,Rd=35841,Nd=35842,Pd=35843,Dd=36196,Ld=37492,kd=37496,Id=37808,Ud=37809,Fd=37810,Od=37811,zd=37812,Bd=37813,jd=37814,Hd=37815,Gd=37816,Vd=37817,Wd=37818,Xd=37819,qd=37820,Yd=37821,Il=36492,Qd=36494,Kd=36495,E0=36283,Zd=36284,Jd=36285,$d=36286,W1=3200,X1=3201,q1=0,Y1=1,Sr="",Kn="srgb",Zs="srgb-linear",Vl="linear",Pt="srgb",Es=7680,em=519,Q1=512,K1=513,Z1=514,T0=515,J1=516,$1=517,ey=518,ty=519,tm=35044,nm="300 es",Bi=2e3,Ol=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,f=o.length;l<f;l++)o[l].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=Math.PI/180,ef=180/Math.PI;function Xa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function Nn(s,e,t){return Math.max(e,Math.min(t,s))}function ny(s,e){return(s%e+e)%e}function Iu(s,e,t){return(1-t)*s+t*e}function Da(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*o+e.x,this.y=l*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,r,o,l,f,d,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,f,d,p,m)}set(e,t,r,o,l,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],_=r[7],S=r[2],M=r[5],b=r[8],T=o[0],y=o[3],x=o[6],D=o[1],P=o[4],E=o[7],W=o[2],z=o[5],I=o[8];return l[0]=f*T+d*D+p*W,l[3]=f*y+d*P+p*z,l[6]=f*x+d*E+p*I,l[1]=m*T+v*D+_*W,l[4]=m*y+v*P+_*z,l[7]=m*x+v*E+_*I,l[2]=S*T+M*D+b*W,l[5]=S*y+M*P+b*z,l[8]=S*x+M*E+b*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return t*f*v-t*d*m-r*l*v+r*d*p+o*l*m-o*f*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=v*f-d*m,S=d*p-v*l,M=m*l-f*p,b=t*_+r*S+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=_*T,e[1]=(o*m-v*r)*T,e[2]=(d*r-o*f)*T,e[3]=S*T,e[4]=(v*t-o*p)*T,e[5]=(o*l-d*t)*T,e[6]=M*T,e[7]=(r*p-m*t)*T,e[8]=(f*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,f,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-o*m,o*p,-o*(-m*f+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Uu.makeScale(e,t)),this}rotate(e){return this.premultiply(Uu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uu=new ut;function A0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function iy(){const s=zl("canvas");return s.style.display="block",s}const im={};function za(s){s in im||(im[s]=!0,console.warn(s))}function ry(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function sy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ay(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _t={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sr?Vl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const rm=[.64,.33,.3,.6,.15,.06],sm=[.2126,.7152,.0722],am=[.3127,.329],om=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_t.define({[Zs]:{primaries:rm,whitePoint:am,transfer:Vl,toXYZ:om,fromXYZ:lm,luminanceCoefficients:sm,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:rm,whitePoint:am,transfer:Pt,toXYZ:om,fromXYZ:lm,luminanceCoefficients:sm,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Ts;class oy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=zl("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let f=0;f<l.length;f++)l[f]=ji(l[f]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ji(t[r]/255)*255):t[r]=ji(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ly=0;class C0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let f=0,d=o.length;f<d;f++)o[f].isDataTexture?l.push(Fu(o[f].image)):l.push(Fu(o[f]))}else l=Fu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Fu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?oy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cy=0;class Sn extends Js{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,r=fi,o=fi,l=Pn,f=Kr,d=Zn,p=Gi,m=Sn.DEFAULT_ANISOTROPY,v=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Xa(),this.name="",this.source=new C0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=m0;Sn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,r=0,o=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*o+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*o+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*o+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*o+f[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],v=p[4],_=p[8],S=p[1],M=p[5],b=p[9],T=p[2],y=p[6],x=p[10];if(Math.abs(v-S)<.01&&Math.abs(_-T)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+T)<.1&&Math.abs(b+y)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(m+1)/2,E=(M+1)/2,W=(x+1)/2,z=(v+S)/4,I=(_+T)/4,U=(b+y)/4;return P>E&&P>W?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=z/r,l=I/r):E>W?E<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(E),r=z/o,l=U/o):W<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(W),r=I/l,o=U/l),this.set(r,o,l,t),this}let D=Math.sqrt((y-b)*(y-b)+(_-T)*(_-T)+(S-v)*(S-v));return Math.abs(D)<.001&&(D=1),this.x=(y-b)/D,this.y=(_-T)/D,this.z=(S-v)/D,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uy extends Js{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Sn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new C0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends uy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class R0 extends Sn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dy extends Sn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,f,d){let p=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3];const S=l[f+0],M=l[f+1],b=l[f+2],T=l[f+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(d===1){e[t+0]=S,e[t+1]=M,e[t+2]=b,e[t+3]=T;return}if(_!==T||p!==S||m!==M||v!==b){let y=1-d;const x=p*S+m*M+v*b+_*T,D=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const W=Math.sqrt(P),z=Math.atan2(W,x*D);y=Math.sin(y*z)/W,d=Math.sin(d*z)/W}const E=d*D;if(p=p*y+S*E,m=m*y+M*E,v=v*y+b*E,_=_*y+T*E,y===1-d){const W=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=W,m*=W,v*=W,_*=W}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,f){const d=r[o],p=r[o+1],m=r[o+2],v=r[o+3],_=l[f],S=l[f+1],M=l[f+2],b=l[f+3];return e[t]=d*b+v*_+p*M-m*S,e[t+1]=p*b+v*S+m*_-d*M,e[t+2]=m*b+v*M+d*S-p*_,e[t+3]=v*b-d*_-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(o/2),_=d(l/2),S=p(r/2),M=p(o/2),b=p(l/2);switch(f){case"XYZ":this._x=S*v*_+m*M*b,this._y=m*M*_-S*v*b,this._z=m*v*b+S*M*_,this._w=m*v*_-S*M*b;break;case"YXZ":this._x=S*v*_+m*M*b,this._y=m*M*_-S*v*b,this._z=m*v*b-S*M*_,this._w=m*v*_+S*M*b;break;case"ZXY":this._x=S*v*_-m*M*b,this._y=m*M*_+S*v*b,this._z=m*v*b+S*M*_,this._w=m*v*_-S*M*b;break;case"ZYX":this._x=S*v*_-m*M*b,this._y=m*M*_+S*v*b,this._z=m*v*b-S*M*_,this._w=m*v*_+S*M*b;break;case"YZX":this._x=S*v*_+m*M*b,this._y=m*M*_+S*v*b,this._z=m*v*b-S*M*_,this._w=m*v*_-S*M*b;break;case"XZY":this._x=S*v*_-m*M*b,this._y=m*M*_-S*v*b,this._z=m*v*b+S*M*_,this._w=m*v*_+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],f=t[1],d=t[5],p=t[9],m=t[2],v=t[6],_=t[10],S=r+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-p)*M,this._y=(l-m)*M,this._z=(f-o)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(v-p)/M,this._x=.25*M,this._y=(o+f)/M,this._z=(l+m)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(l-m)/M,this._x=(o+f)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(f-o)/M,this._x=(l+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,f=e._w,d=t._x,p=t._y,m=t._z,v=t._w;return this._x=r*v+f*d+o*m-l*p,this._y=o*v+f*p+l*d-r*m,this._z=l*v+f*m+r*p-o*d,this._w=f*v-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,f=this._w;let d=f*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=o,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-t;return this._w=M*f+t*this._w,this._x=M*r+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),_=Math.sin((1-t)*v)/m,S=Math.sin(t*v)/m;return this._w=f*_+this._w*S,this._x=r*_+this._x*S,this._y=o*_+this._y*S,this._z=l*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(e=0,t=0,r=0){de.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*o-d*r),v=2*(d*t-l*o),_=2*(l*r-f*t);return this.x=t+p*m+f*_-d*v,this.y=r+p*v+d*m-l*_,this.z=o+p*_+l*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,f=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*f-r*p,this.z=r*d-o*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ou=new de,cm=new qa;class Ya{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=l.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,oi):oi.fromBufferAttribute(l,f),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const o=e.children;for(let l=0,f=o.length;l<f;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),al.subVectors(this.max,La),As.subVectors(e.a,La),Cs.subVectors(e.b,La),Rs.subVectors(e.c,La),pr.subVectors(Cs,As),mr.subVectors(Rs,Cs),zr.subVectors(As,Rs);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-zr.z,zr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,zr.z,0,-zr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-zr.y,zr.x,0];return!zu(t,As,Cs,Rs,al)||(t=[1,0,0,0,1,0,0,0,1],!zu(t,As,Cs,Rs,al))?!1:(ol.crossVectors(pr,mr),t=[ol.x,ol.y,ol.z],zu(t,As,Cs,Rs,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new de,new de,new de,new de,new de,new de,new de,new de],oi=new de,sl=new Ya,As=new de,Cs=new de,Rs=new de,pr=new de,mr=new de,zr=new de,La=new de,al=new de,ol=new de,Br=new de;function zu(s,e,t,r,o){for(let l=0,f=s.length-3;l<=f;l+=3){Br.fromArray(s,l);const d=o.x*Math.abs(Br.x)+o.y*Math.abs(Br.y)+o.z*Math.abs(Br.z),p=e.dot(Br),m=t.dot(Br),v=r.dot(Br);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const fy=new Ya,ka=new de,Bu=new de;class Wl{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):fy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,f=e.length;l<f;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ka,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Bu)),this.expandByPoint(ka.copy(e.center).sub(Bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new de,ju=new de,ll=new de,gr=new de,Hu=new de,cl=new de,Gu=new de;class N0{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ju.copy(e).add(t).multiplyScalar(.5),ll.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(ju);const l=e.distanceTo(t)*.5,f=-this.direction.dot(ll),d=gr.dot(this.direction),p=-gr.dot(ll),m=gr.lengthSq(),v=Math.abs(1-f*f);let _,S,M,b;if(v>0)if(_=f*p-d,S=f*d-p,b=l*v,_>=0)if(S>=-b)if(S<=b){const T=1/v;_*=T,S*=T,M=_*(_+f*S+2*d)+S*(f*_+S+2*p)+m}else S=l,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*p)+m;else S=-l,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*p)+m;else S<=-b?(_=Math.max(0,-(-f*l+d)),S=_>0?-l:Math.min(Math.max(-l,-p),l),M=-_*_+S*(S+2*p)+m):S<=b?(_=0,S=Math.min(Math.max(-l,-p),l),M=S*(S+2*p)+m):(_=Math.max(0,-(f*l+d)),S=_>0?l:Math.min(Math.max(-l,-p),l),M=-_*_+S*(S+2*p)+m);else S=f>0?-l:l,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(ju).addScaledVector(ll,S),M}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),o=ki.dot(ki)-r*r,l=e.radius*e.radius;if(o>l)return null;const f=Math.sqrt(l-o),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,o=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,o=(e.min.x-S.x)*m),v>=0?(l=(e.min.y-S.y)*v,f=(e.max.y-S.y)*v):(l=(e.max.y-S.y)*v,f=(e.min.y-S.y)*v),r>f||l>o||((l>r||isNaN(r))&&(r=l),(f<o||isNaN(o))&&(o=f),_>=0?(d=(e.min.z-S.z)*_,p=(e.max.z-S.z)*_):(d=(e.max.z-S.z)*_,p=(e.min.z-S.z)*_),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,r,o,l){Hu.subVectors(t,e),cl.subVectors(r,e),Gu.crossVectors(Hu,cl);let f=this.direction.dot(Gu),d;if(f>0){if(o)return null;d=1}else if(f<0)d=-1,f=-f;else return null;gr.subVectors(this.origin,e);const p=d*this.direction.dot(cl.crossVectors(gr,cl));if(p<0)return null;const m=d*this.direction.dot(Hu.cross(gr));if(m<0||p+m>f)return null;const v=-d*gr.dot(Gu);return v<0?null:this.at(v/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,r,o,l,f,d,p,m,v,_,S,M,b,T,y){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,f,d,p,m,v,_,S,M,b,T,y)}set(e,t,r,o,l,f,d,p,m,v,_,S,M,b,T,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=f,x[9]=d,x[13]=p,x[2]=m,x[6]=v,x[10]=_,x[14]=S,x[3]=M,x[7]=b,x[11]=T,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Ns.setFromMatrixColumn(e,0).length(),l=1/Ns.setFromMatrixColumn(e,1).length(),f=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const S=f*v,M=f*_,b=d*v,T=d*_;t[0]=p*v,t[4]=-p*_,t[8]=m,t[1]=M+b*m,t[5]=S-T*m,t[9]=-d*p,t[2]=T-S*m,t[6]=b+M*m,t[10]=f*p}else if(e.order==="YXZ"){const S=p*v,M=p*_,b=m*v,T=m*_;t[0]=S+T*d,t[4]=b*d-M,t[8]=f*m,t[1]=f*_,t[5]=f*v,t[9]=-d,t[2]=M*d-b,t[6]=T+S*d,t[10]=f*p}else if(e.order==="ZXY"){const S=p*v,M=p*_,b=m*v,T=m*_;t[0]=S-T*d,t[4]=-f*_,t[8]=b+M*d,t[1]=M+b*d,t[5]=f*v,t[9]=T-S*d,t[2]=-f*m,t[6]=d,t[10]=f*p}else if(e.order==="ZYX"){const S=f*v,M=f*_,b=d*v,T=d*_;t[0]=p*v,t[4]=b*m-M,t[8]=S*m+T,t[1]=p*_,t[5]=T*m+S,t[9]=M*m-b,t[2]=-m,t[6]=d*p,t[10]=f*p}else if(e.order==="YZX"){const S=f*p,M=f*m,b=d*p,T=d*m;t[0]=p*v,t[4]=T-S*_,t[8]=b*_+M,t[1]=_,t[5]=f*v,t[9]=-d*v,t[2]=-m*v,t[6]=M*_+b,t[10]=S-T*_}else if(e.order==="XZY"){const S=f*p,M=f*m,b=d*p,T=d*m;t[0]=p*v,t[4]=-_,t[8]=m*v,t[1]=S*_+T,t[5]=f*v,t[9]=M*_-b,t[2]=b*_-M,t[6]=d*v,t[10]=T*_+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hy,e,py)}lookAt(e,t,r){const o=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),xr.crossVectors(r,On),xr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),xr.crossVectors(r,On)),xr.normalize(),ul.crossVectors(On,xr),o[0]=xr.x,o[4]=ul.x,o[8]=On.x,o[1]=xr.y,o[5]=ul.y,o[9]=On.y,o[2]=xr.z,o[6]=ul.z,o[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],_=r[5],S=r[9],M=r[13],b=r[2],T=r[6],y=r[10],x=r[14],D=r[3],P=r[7],E=r[11],W=r[15],z=o[0],I=o[4],U=o[8],N=o[12],C=o[1],B=o[5],ae=o[9],Z=o[13],fe=o[2],me=o[6],ue=o[10],pe=o[14],j=o[3],ee=o[7],se=o[11],O=o[15];return l[0]=f*z+d*C+p*fe+m*j,l[4]=f*I+d*B+p*me+m*ee,l[8]=f*U+d*ae+p*ue+m*se,l[12]=f*N+d*Z+p*pe+m*O,l[1]=v*z+_*C+S*fe+M*j,l[5]=v*I+_*B+S*me+M*ee,l[9]=v*U+_*ae+S*ue+M*se,l[13]=v*N+_*Z+S*pe+M*O,l[2]=b*z+T*C+y*fe+x*j,l[6]=b*I+T*B+y*me+x*ee,l[10]=b*U+T*ae+y*ue+x*se,l[14]=b*N+T*Z+y*pe+x*O,l[3]=D*z+P*C+E*fe+W*j,l[7]=D*I+P*B+E*me+W*ee,l[11]=D*U+P*ae+E*ue+W*se,l[15]=D*N+P*Z+E*pe+W*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],_=e[6],S=e[10],M=e[14],b=e[3],T=e[7],y=e[11],x=e[15];return b*(+l*p*_-o*m*_-l*d*S+r*m*S+o*d*M-r*p*M)+T*(+t*p*M-t*m*S+l*f*S-o*f*M+o*m*v-l*p*v)+y*(+t*m*_-t*d*M-l*f*_+r*f*M+l*d*v-r*m*v)+x*(-o*d*v-t*p*_+t*d*S+o*f*_-r*f*S+r*p*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=e[9],S=e[10],M=e[11],b=e[12],T=e[13],y=e[14],x=e[15],D=_*y*m-T*S*m+T*p*M-d*y*M-_*p*x+d*S*x,P=b*S*m-v*y*m-b*p*M+f*y*M+v*p*x-f*S*x,E=v*T*m-b*_*m+b*d*M-f*T*M-v*d*x+f*_*x,W=b*_*p-v*T*p-b*d*S+f*T*S+v*d*y-f*_*y,z=t*D+r*P+o*E+l*W;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return e[0]=D*I,e[1]=(T*S*l-_*y*l-T*o*M+r*y*M+_*o*x-r*S*x)*I,e[2]=(d*y*l-T*p*l+T*o*m-r*y*m-d*o*x+r*p*x)*I,e[3]=(_*p*l-d*S*l-_*o*m+r*S*m+d*o*M-r*p*M)*I,e[4]=P*I,e[5]=(v*y*l-b*S*l+b*o*M-t*y*M-v*o*x+t*S*x)*I,e[6]=(b*p*l-f*y*l-b*o*m+t*y*m+f*o*x-t*p*x)*I,e[7]=(f*S*l-v*p*l+v*o*m-t*S*m-f*o*M+t*p*M)*I,e[8]=E*I,e[9]=(b*_*l-v*T*l-b*r*M+t*T*M+v*r*x-t*_*x)*I,e[10]=(f*T*l-b*d*l+b*r*m-t*T*m-f*r*x+t*d*x)*I,e[11]=(v*d*l-f*_*l-v*r*m+t*_*m+f*r*M-t*d*M)*I,e[12]=W*I,e[13]=(v*T*o-b*_*o+b*r*S-t*T*S-v*r*y+t*_*y)*I,e[14]=(b*d*o-f*T*o-b*r*p+t*T*p+f*r*y-t*d*y)*I,e[15]=(f*_*o-v*d*o+v*r*p-t*_*p-f*r*S+t*d*S)*I,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,f=e.x,d=e.y,p=e.z,m=l*f,v=l*d;return this.set(m*f+r,m*d-o*p,m*p+o*d,0,m*d+o*p,v*d+r,v*p-o*f,0,m*p-o*d,v*p+o*f,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,f){return this.set(1,r,l,0,e,1,f,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,f=t._y,d=t._z,p=t._w,m=l+l,v=f+f,_=d+d,S=l*m,M=l*v,b=l*_,T=f*v,y=f*_,x=d*_,D=p*m,P=p*v,E=p*_,W=r.x,z=r.y,I=r.z;return o[0]=(1-(T+x))*W,o[1]=(M+E)*W,o[2]=(b-P)*W,o[3]=0,o[4]=(M-E)*z,o[5]=(1-(S+x))*z,o[6]=(y+D)*z,o[7]=0,o[8]=(b+P)*I,o[9]=(y-D)*I,o[10]=(1-(S+T))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Ns.set(o[0],o[1],o[2]).length();const f=Ns.set(o[4],o[5],o[6]).length(),d=Ns.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],li.copy(this);const m=1/l,v=1/f,_=1/d;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=v,li.elements[5]*=v,li.elements[6]*=v,li.elements[8]*=_,li.elements[9]*=_,li.elements[10]*=_,t.setFromRotationMatrix(li),r.x=l,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,f,d=Bi){const p=this.elements,m=2*l/(t-e),v=2*l/(r-o),_=(t+e)/(t-e),S=(r+o)/(r-o);let M,b;if(d===Bi)M=-(f+l)/(f-l),b=-2*f*l/(f-l);else if(d===Ol)M=-f/(f-l),b=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,f,d=Bi){const p=this.elements,m=1/(t-e),v=1/(r-o),_=1/(f-l),S=(t+e)*m,M=(r+o)*v;let b,T;if(d===Bi)b=(f+l)*_,T=-2*_;else if(d===Ol)b=l*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ns=new de,li=new Gt,hy=new de(0,0,0),py=new de(1,1,1),xr=new de,ul=new de,On=new de,um=new Gt,dm=new qa;class Vi{constructor(e=0,t=0,r=0,o=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],f=o[4],d=o[8],p=o[1],m=o[5],v=o[9],_=o[2],S=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Nn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(um,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dm.setFromEuler(this),this.setFromQuaternion(dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class P0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let my=0;const fm=new de,Ps=new qa,Ii=new Gt,dl=new de,Ia=new de,gy=new de,xy=new qa,hm=new de(1,0,0),pm=new de(0,1,0),mm=new de(0,0,1),gm={type:"added"},vy={type:"removed"},Ds={type:"childadded",child:null},Vu={type:"childremoved",child:null};class Ln extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new de,t=new Vi,r=new qa,o=new de(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ut}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new P0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,t){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?dl.copy(e):dl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Ia,dl,this.up):Ii.lookAt(dl,Ia,this.up),this.quaternion.setFromRotationMatrix(Ii),o&&(Ii.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vy),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,f=o.length;l<f;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,f=o.length;l<f;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),_=f(e.shapes),S=f(e.skeletons),M=f(e.animations),b=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=o,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Ln.DEFAULT_UP=new de(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new de,Ui=new de,Wu=new de,Fi=new de,Ls=new de,ks=new de,xm=new de,Xu=new de,qu=new de,Yu=new de,Qu=new jt,Ku=new jt,Zu=new jt;class di{constructor(e=new de,t=new de,r=new de){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ci.subVectors(e,t),o.cross(ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ci.subVectors(o,t),Ui.subVectors(r,t),Wu.subVectors(e,t);const f=ci.dot(ci),d=ci.dot(Ui),p=ci.dot(Wu),m=Ui.dot(Ui),v=Ui.dot(Wu),_=f*m-d*d;if(_===0)return l.set(0,0,0),null;const S=1/_,M=(m*p-d*v)*S,b=(f*v-d*p)*S;return l.set(1-M-b,b,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,r,o,l,f,d,p){return this.getBarycoord(e,t,r,o,Fi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Fi.x),p.addScaledVector(f,Fi.y),p.addScaledVector(d,Fi.z),p)}static getInterpolatedAttribute(e,t,r,o,l,f){return Qu.setScalar(0),Ku.setScalar(0),Zu.setScalar(0),Qu.fromBufferAttribute(e,t),Ku.fromBufferAttribute(e,r),Zu.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(Qu,l.x),f.addScaledVector(Ku,l.y),f.addScaledVector(Zu,l.z),f}static isFrontFacing(e,t,r,o){return ci.subVectors(r,t),Ui.subVectors(e,t),ci.cross(Ui).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ci.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return di.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let f,d;Ls.subVectors(o,r),ks.subVectors(l,r),Xu.subVectors(e,r);const p=Ls.dot(Xu),m=ks.dot(Xu);if(p<=0&&m<=0)return t.copy(r);qu.subVectors(e,o);const v=Ls.dot(qu),_=ks.dot(qu);if(v>=0&&_<=v)return t.copy(o);const S=p*_-v*m;if(S<=0&&p>=0&&v<=0)return f=p/(p-v),t.copy(r).addScaledVector(Ls,f);Yu.subVectors(e,l);const M=Ls.dot(Yu),b=ks.dot(Yu);if(b>=0&&M<=b)return t.copy(l);const T=M*m-p*b;if(T<=0&&m>=0&&b<=0)return d=m/(m-b),t.copy(r).addScaledVector(ks,d);const y=v*b-M*_;if(y<=0&&_-v>=0&&M-b>=0)return xm.subVectors(l,o),d=(_-v)/(_-v+(M-b)),t.copy(o).addScaledVector(xm,d);const x=1/(y+T+S);return f=T*x,d=S*x,t.copy(r).addScaledVector(Ls,f).addScaledVector(ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Ju(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Tt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=_t.workingColorSpace){return this.r=e,this.g=t,this.b=r,_t.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=_t.workingColorSpace){if(e=ny(e,1),t=Nn(t,0,1),r=Nn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=Ju(f,l,e+1/3),this.g=Ju(f,l,e),this.b=Ju(f,l,e-1/3)}return _t.toWorkingColorSpace(this,o),this}setStyle(e,t=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=o[1],d=o[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const r=D0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return _t.fromWorkingColorSpace(pn.copy(this),e),Math.round(Nn(pn.r*255,0,255))*65536+Math.round(Nn(pn.g*255,0,255))*256+Math.round(Nn(pn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(pn.copy(this),t);const r=pn.r,o=pn.g,l=pn.b,f=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=v<=.5?_/(f+d):_/(2-f-d),f){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Kn){_t.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,r=pn.g,o=pn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(fl);const r=Iu(vr.h,fl.h,t),o=Iu(vr.s,fl.s,t),l=Iu(vr.l,fl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Tt;Tt.NAMES=D0;let yy=0;class Qa extends Js{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Xa(),this.name="",this.blending=Bs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==md&&(r.blendSrc=this.blendSrc),this.blendDst!==gd&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const f=[];for(const d in l){const p=l[d];delete p.metadata,f.push(p)}return f}if(t){const l=o(e.textures),f=o(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class L0 extends Qa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=p0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new de,hl=new ct;class hi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=tm,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)hl.fromBufferAttribute(this,t),hl.applyMatrix3(e),this.setXY(t,hl.x,hl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Da(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Da(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Da(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Da(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array),o=Rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array),o=Rn(o,this.array),l=Rn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tm&&(e.usage=this.usage),e}}class k0 extends hi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class I0 extends hi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Hi extends hi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Sy=0;const Qn=new Gt,$u=new Ln,Is=new de,zn=new Ya,Ua=new Ya,tn=new de;class Xi extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A0(e)?I0:k0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,r){return Qn.makeTranslation(e,t,r),this.applyMatrix4(Qn),this}scale(e,t,r){return Qn.makeScale(e,t,r),this.applyMatrix4(Qn),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Hi(r,3))}else{for(let r=0,o=t.count;r<o;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const d=t[l];Ua.setFromBufferAttribute(d),this.morphTargetsRelative?(tn.addVectors(zn.min,Ua.min),zn.expandByPoint(tn),tn.addVectors(zn.max,Ua.max),zn.expandByPoint(tn)):(zn.expandByPoint(Ua.min),zn.expandByPoint(Ua.max))}zn.getCenter(r);let o=0;for(let l=0,f=e.count;l<f;l++)tn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(tn));if(t)for(let l=0,f=t.length;l<f;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)tn.fromBufferAttribute(d,m),p&&(Is.fromBufferAttribute(e,m),tn.add(Is)),o=Math.max(o,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let U=0;U<r.count;U++)d[U]=new de,p[U]=new de;const m=new de,v=new de,_=new de,S=new ct,M=new ct,b=new ct,T=new de,y=new de;function x(U,N,C){m.fromBufferAttribute(r,U),v.fromBufferAttribute(r,N),_.fromBufferAttribute(r,C),S.fromBufferAttribute(l,U),M.fromBufferAttribute(l,N),b.fromBufferAttribute(l,C),v.sub(m),_.sub(m),M.sub(S),b.sub(S);const B=1/(M.x*b.y-b.x*M.y);isFinite(B)&&(T.copy(v).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(B),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(B),d[U].add(T),d[N].add(T),d[C].add(T),p[U].add(y),p[N].add(y),p[C].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let U=0,N=D.length;U<N;++U){const C=D[U],B=C.start,ae=C.count;for(let Z=B,fe=B+ae;Z<fe;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new de,E=new de,W=new de,z=new de;function I(U){W.fromBufferAttribute(o,U),z.copy(W);const N=d[U];P.copy(N),P.sub(W.multiplyScalar(W.dot(N))).normalize(),E.crossVectors(z,N);const B=E.dot(p[U])<0?-1:1;f.setXYZW(U,P.x,P.y,P.z,B)}for(let U=0,N=D.length;U<N;++U){const C=D[U],B=C.start,ae=C.count;for(let Z=B,fe=B+ae;Z<fe;Z+=3)I(e.getX(Z+0)),I(e.getX(Z+1)),I(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const o=new de,l=new de,f=new de,d=new de,p=new de,m=new de,v=new de,_=new de;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),T=e.getX(S+1),y=e.getX(S+2);o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,T),f.fromBufferAttribute(t,y),v.subVectors(f,l),_.subVectors(o,l),v.cross(_),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),d.add(v),p.add(v),m.add(v),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=t.count;S<M;S+=3)o.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),f.fromBufferAttribute(t,S+2),v.subVectors(f,l),_.subVectors(o,l),v.cross(_),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,_=d.normalized,S=new m.constructor(p.length*v);let M=0,b=0;for(let T=0,y=p.length;T<y;T++){d.isInterleavedBufferAttribute?M=p[T]*d.data.stride+d.offset:M=p[T]*v;for(let x=0;x<v;x++)S[b++]=m[M++]}return new hi(S,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let v=0,_=m.length;v<_;v++){const S=m[v],M=e(S,r);p.push(M)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,S=m.length;_<S;_++){const M=m[_];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],_=l[m];for(let S=0,M=_.length;S<M;S++)v.push(_[S].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new Gt,jr=new N0,pl=new Wl,ym=new de,ml=new de,gl=new de,xl=new de,ed=new de,vl=new de,Sm=new de,yl=new de;class Jn extends Ln{constructor(e=new Xi,t=new L0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=o.length;l<f;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){vl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const v=d[p],_=l[p];v!==0&&(ed.fromBufferAttribute(_,e),f?vl.addScaledVector(ed,v):vl.addScaledVector(ed.sub(t),v))}t.add(vl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(pl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(pl,ym)===null||jr.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(vm.copy(l).invert(),jr.copy(e.ray).applyMatrix4(vm),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,f=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,S=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,T=S.length;b<T;b++){const y=S[b],x=f[y.materialIndex],D=Math.max(y.start,M.start),P=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let E=D,W=P;E<W;E+=3){const z=d.getX(E),I=d.getX(E+1),U=d.getX(E+2);o=Sl(this,x,e,r,m,v,_,z,I,U),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=b,x=T;y<x;y+=3){const D=d.getX(y),P=d.getX(y+1),E=d.getX(y+2);o=Sl(this,f,e,r,m,v,_,D,P,E),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let b=0,T=S.length;b<T;b++){const y=S[b],x=f[y.materialIndex],D=Math.max(y.start,M.start),P=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let E=D,W=P;E<W;E+=3){const z=E,I=E+1,U=E+2;o=Sl(this,x,e,r,m,v,_,z,I,U),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let y=b,x=T;y<x;y+=3){const D=y,P=y+1,E=y+2;o=Sl(this,f,e,r,m,v,_,D,P,E),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function _y(s,e,t,r,o,l,f,d){let p;if(e.side===Dn?p=r.intersectTriangle(f,l,o,!0,d):p=r.intersectTriangle(o,l,f,e.side===br,d),p===null)return null;yl.copy(d),yl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(yl);return m<t.near||m>t.far?null:{distance:m,point:yl.clone(),object:s}}function Sl(s,e,t,r,o,l,f,d,p,m){s.getVertexPosition(d,ml),s.getVertexPosition(p,gl),s.getVertexPosition(m,xl);const v=_y(s,e,t,r,ml,gl,xl,Sm);if(v){const _=new de;di.getBarycoord(Sm,ml,gl,xl,_),o&&(v.uv=di.getInterpolatedAttribute(o,d,p,m,_,new ct)),l&&(v.uv1=di.getInterpolatedAttribute(l,d,p,m,_,new ct)),f&&(v.normal=di.getInterpolatedAttribute(f,d,p,m,_,new de),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new de,materialIndex:0};di.getNormal(ml,gl,xl,S.normal),v.face=S,v.barycoord=_}return v}class Ka extends Xi{constructor(e=1,t=1,r=1,o=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:f};const d=this;o=Math.floor(o),l=Math.floor(l),f=Math.floor(f);const p=[],m=[],v=[],_=[];let S=0,M=0;b("z","y","x",-1,-1,r,t,e,f,l,0),b("z","y","x",1,-1,r,t,-e,f,l,1),b("x","z","y",1,1,e,r,t,o,f,2),b("x","z","y",1,-1,e,r,-t,o,f,3),b("x","y","z",1,-1,e,t,r,o,l,4),b("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new Hi(m,3)),this.setAttribute("normal",new Hi(v,3)),this.setAttribute("uv",new Hi(_,2));function b(T,y,x,D,P,E,W,z,I,U,N){const C=E/I,B=W/U,ae=E/2,Z=W/2,fe=z/2,me=I+1,ue=U+1;let pe=0,j=0;const ee=new de;for(let se=0;se<ue;se++){const O=se*B-Z;for(let re=0;re<me;re++){const Le=re*C-ae;ee[T]=Le*D,ee[y]=O*P,ee[x]=fe,m.push(ee.x,ee.y,ee.z),ee[T]=0,ee[y]=0,ee[x]=z>0?1:-1,v.push(ee.x,ee.y,ee.z),_.push(re/I),_.push(1-se/U),pe+=1}}for(let se=0;se<U;se++)for(let O=0;O<I;O++){const re=S+O+me*se,Le=S+O+me*(se+1),te=S+(O+1)+me*(se+1),ge=S+(O+1)+me*se;p.push(re,Le,ge),p.push(Le,te,ge),j+=6}d.addGroup(M,j,N),M+=j,S+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function yn(s){const e={};for(let t=0;t<s.length;t++){const r=Ys(s[t]);for(const o in r)e[o]=r[o]}return e}function My(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function U0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const by={clone:Ys,merge:yn};var wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Qa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wy,this.fragmentShader=Ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=My(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?t.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[o]={type:"m4",value:f.toArray()}:t.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Bl extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new de,_m=new ct,Mm=new ct;class ui extends Bl{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,_m,Mm),t.subVectors(Mm,_m)}setViewOffset(e,t,r,o,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ku*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;l+=f.offsetX*o/p,t-=f.offsetY*r/m,o*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Us=-90,Fs=1;class Ty extends Ln{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ui(Us,Fs,e,t);o.layers=this.layers,this.add(o);const l=new ui(Us,Fs,e,t);l.layers=this.layers,this.add(l);const f=new ui(Us,Fs,e,t);f.layers=this.layers,this.add(f);const d=new ui(Us,Fs,e,t);d.layers=this.layers,this.add(d);const p=new ui(Us,Fs,e,t);p.layers=this.layers,this.add(p);const m=new ui(Us,Fs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,f,d,p]=t;for(const m of t)this.remove(m);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ol)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,d,p,m,v]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,f),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(t,v),e.setRenderTarget(_,S,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class F0 extends Sn{constructor(e,t,r,o,l,f,d,p,m,v){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,r,o,l,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ay extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new F0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ka(5,5,5),l=new Wi({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:_r});l.uniforms.tEquirect.value=t;const f=new Jn(o,l),d=t.minFilter;return t.minFilter===Kr&&(t.minFilter=Pn),new Ty(1,10,this).update(e,f),t.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,o);e.setRenderTarget(l)}}const td=new de,Cy=new de,Ry=new ut;class Xr{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=td.subVectors(r,t).cross(Cy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(td),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ry.getNormalMatrix(e),o=this.coplanarPoint(td).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Wl,_l=new de;class O0{constructor(e=new Xr,t=new Xr,r=new Xr,o=new Xr,l=new Xr,f=new Xr){this.planes=[e,t,r,o,l,f]}set(e,t,r,o,l,f){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Bi){const r=this.planes,o=e.elements,l=o[0],f=o[1],d=o[2],p=o[3],m=o[4],v=o[5],_=o[6],S=o[7],M=o[8],b=o[9],T=o[10],y=o[11],x=o[12],D=o[13],P=o[14],E=o[15];if(r[0].setComponents(p-l,S-m,y-M,E-x).normalize(),r[1].setComponents(p+l,S+m,y+M,E+x).normalize(),r[2].setComponents(p+f,S+v,y+b,E+D).normalize(),r[3].setComponents(p-f,S-v,y-b,E-D).normalize(),r[4].setComponents(p-d,S-_,y-T,E-P).normalize(),t===Bi)r[5].setComponents(p+d,S+_,y+T,E+P).normalize();else if(t===Ol)r[5].setComponents(d,_,T,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(_l.x=o.normal.x>0?e.max.x:e.min.x,_l.y=o.normal.y>0?e.max.y:e.min.y,_l.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function z0(){let s=null,e=!1,t=null,r=null;function o(l,f){t(l,f),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ny(s){const e=new WeakMap;function t(d,p){const m=d.array,v=d.usage,_=m.byteLength,S=s.createBuffer();s.bindBuffer(p,S),s.bufferData(p,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,d),_.length===0)s.bufferSubData(m,0,v);else{_.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<_.length;M++){const b=_[S],T=_[M];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++S,_[S]=T)}_.length=S+1;for(let M=0,b=_.length;M<b;M++){const T=_[M];s.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:f}}class Zr extends Xi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,f=t/2,d=Math.floor(r),p=Math.floor(o),m=d+1,v=p+1,_=e/d,S=t/p,M=[],b=[],T=[],y=[];for(let x=0;x<v;x++){const D=x*S-f;for(let P=0;P<m;P++){const E=P*_-l;b.push(E,-D,0),T.push(0,0,1),y.push(P/d),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let D=0;D<d;D++){const P=D+m*x,E=D+m*(x+1),W=D+1+m*(x+1),z=D+1+m*x;M.push(P,E,z),M.push(E,W,z)}this.setIndex(M),this.setAttribute("position",new Hi(b,3)),this.setAttribute("normal",new Hi(T,3)),this.setAttribute("uv",new Hi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dy=`#ifdef USE_ALPHAHASH
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
#endif`,Ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
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
#endif`,zy=`#ifdef USE_BATCHING
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
#endif`,By=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vy=`#ifdef USE_IRIDESCENCE
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
#endif`,Wy=`#ifdef USE_BUMPMAP
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
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
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
#endif`,e2=`#define PI 3.141592653589793
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
} // validated`,t2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n2=`vec3 transformedNormal = objectNormal;
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
#endif`,i2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o2="gl_FragColor = linearToOutputTexel( gl_FragColor );",l2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c2=`#ifdef USE_ENVMAP
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
#endif`,u2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d2=`#ifdef USE_ENVMAP
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
#endif`,f2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h2=`#ifdef USE_ENVMAP
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
#endif`,p2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v2=`#ifdef USE_GRADIENTMAP
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
}`,y2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S2=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M2=`uniform bool receiveShadow;
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
#endif`,b2=`#ifdef USE_ENVMAP
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
#endif`,w2=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C2=`PhysicalMaterial material;
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
#endif`,R2=`struct PhysicalMaterial {
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
}`,N2=`
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
#endif`,P2=`#if defined( RE_IndirectDiffuse )
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
#endif`,D2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B2=`#if defined( USE_POINTS_UV )
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
#endif`,j2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X2=`#ifdef USE_MORPHTARGETS
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
#endif`,q2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$2=`#ifdef USE_NORMALMAP
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
#endif`,eS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mS=`float getShadowMask() {
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
}`,gS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xS=`#ifdef USE_SKINNING
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
#endif`,vS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yS=`#ifdef USE_SKINNING
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
#endif`,SS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_S=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wS=`#ifdef USE_TRANSMISSION
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
#endif`,ES=`#ifdef USE_TRANSMISSION
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
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PS=`uniform sampler2D t2D;
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`#include <common>
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
}`,FS=`#if DEPTH_PACKING == 3200
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
}`,OS=`#define DISTANCE
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
}`,zS=`#define DISTANCE
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
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`uniform float scale;
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
}`,GS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,WS=`uniform vec3 diffuse;
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
}`,XS=`#define LAMBERT
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
}`,qS=`#define LAMBERT
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
}`,YS=`#define MATCAP
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
}`,QS=`#define MATCAP
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
}`,KS=`#define NORMAL
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
}`,ZS=`#define NORMAL
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
}`,JS=`#define PHONG
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
}`,$S=`#define PHONG
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
}`,e_=`#define STANDARD
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
}`,t_=`#define STANDARD
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
}`,n_=`#define TOON
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
}`,i_=`#define TOON
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
}`,r_=`uniform float size;
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
}`,s_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,o_=`uniform vec3 color;
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
}`,l_=`uniform float rotation;
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
}`,c_=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Py,alphahash_pars_fragment:Dy,alphamap_fragment:Ly,alphamap_pars_fragment:ky,alphatest_fragment:Iy,alphatest_pars_fragment:Uy,aomap_fragment:Fy,aomap_pars_fragment:Oy,batching_pars_vertex:zy,batching_vertex:By,begin_vertex:jy,beginnormal_vertex:Hy,bsdfs:Gy,iridescence_fragment:Vy,bumpmap_pars_fragment:Wy,clipping_planes_fragment:Xy,clipping_planes_pars_fragment:qy,clipping_planes_pars_vertex:Yy,clipping_planes_vertex:Qy,color_fragment:Ky,color_pars_fragment:Zy,color_pars_vertex:Jy,color_vertex:$y,common:e2,cube_uv_reflection_fragment:t2,defaultnormal_vertex:n2,displacementmap_pars_vertex:i2,displacementmap_vertex:r2,emissivemap_fragment:s2,emissivemap_pars_fragment:a2,colorspace_fragment:o2,colorspace_pars_fragment:l2,envmap_fragment:c2,envmap_common_pars_fragment:u2,envmap_pars_fragment:d2,envmap_pars_vertex:f2,envmap_physical_pars_fragment:b2,envmap_vertex:h2,fog_vertex:p2,fog_pars_vertex:m2,fog_fragment:g2,fog_pars_fragment:x2,gradientmap_pars_fragment:v2,lightmap_pars_fragment:y2,lights_lambert_fragment:S2,lights_lambert_pars_fragment:_2,lights_pars_begin:M2,lights_toon_fragment:w2,lights_toon_pars_fragment:E2,lights_phong_fragment:T2,lights_phong_pars_fragment:A2,lights_physical_fragment:C2,lights_physical_pars_fragment:R2,lights_fragment_begin:N2,lights_fragment_maps:P2,lights_fragment_end:D2,logdepthbuf_fragment:L2,logdepthbuf_pars_fragment:k2,logdepthbuf_pars_vertex:I2,logdepthbuf_vertex:U2,map_fragment:F2,map_pars_fragment:O2,map_particle_fragment:z2,map_particle_pars_fragment:B2,metalnessmap_fragment:j2,metalnessmap_pars_fragment:H2,morphinstance_vertex:G2,morphcolor_vertex:V2,morphnormal_vertex:W2,morphtarget_pars_vertex:X2,morphtarget_vertex:q2,normal_fragment_begin:Y2,normal_fragment_maps:Q2,normal_pars_fragment:K2,normal_pars_vertex:Z2,normal_vertex:J2,normalmap_pars_fragment:$2,clearcoat_normal_fragment_begin:eS,clearcoat_normal_fragment_maps:tS,clearcoat_pars_fragment:nS,iridescence_pars_fragment:iS,opaque_fragment:rS,packing:sS,premultiplied_alpha_fragment:aS,project_vertex:oS,dithering_fragment:lS,dithering_pars_fragment:cS,roughnessmap_fragment:uS,roughnessmap_pars_fragment:dS,shadowmap_pars_fragment:fS,shadowmap_pars_vertex:hS,shadowmap_vertex:pS,shadowmask_pars_fragment:mS,skinbase_vertex:gS,skinning_pars_vertex:xS,skinning_vertex:vS,skinnormal_vertex:yS,specularmap_fragment:SS,specularmap_pars_fragment:_S,tonemapping_fragment:MS,tonemapping_pars_fragment:bS,transmission_fragment:wS,transmission_pars_fragment:ES,uv_pars_fragment:TS,uv_pars_vertex:AS,uv_vertex:CS,worldpos_vertex:RS,background_vert:NS,background_frag:PS,backgroundCube_vert:DS,backgroundCube_frag:LS,cube_vert:kS,cube_frag:IS,depth_vert:US,depth_frag:FS,distanceRGBA_vert:OS,distanceRGBA_frag:zS,equirect_vert:BS,equirect_frag:jS,linedashed_vert:HS,linedashed_frag:GS,meshbasic_vert:VS,meshbasic_frag:WS,meshlambert_vert:XS,meshlambert_frag:qS,meshmatcap_vert:YS,meshmatcap_frag:QS,meshnormal_vert:KS,meshnormal_frag:ZS,meshphong_vert:JS,meshphong_frag:$S,meshphysical_vert:e_,meshphysical_frag:t_,meshtoon_vert:n_,meshtoon_frag:i_,points_vert:r_,points_frag:s_,shadow_vert:a_,shadow_frag:o_,sprite_vert:l_,sprite_frag:c_},De={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Si={basic:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:yn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:yn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:yn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:yn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:yn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:yn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:yn([De.common,De.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:yn([De.lights,De.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Si.physical={uniforms:yn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ml={r:0,b:0,g:0},Gr=new Vi,u_=new Gt;function d_(s,e,t,r,o,l,f){const d=new Tt(0);let p=l===!0?0:1,m,v,_=null,S=0,M=null;function b(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?t:e).get(P)),P}function T(D){let P=!1;const E=b(D);E===null?x(d,p):E&&E.isColor&&(x(E,1),P=!0);const W=s.xr.getEnvironmentBlendMode();W==="additive"?r.buffers.color.setClear(0,0,0,1,f):W==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,P){const E=b(P);E&&(E.isCubeTexture||E.mapping===Gl)?(v===void 0&&(v=new Jn(new Ka(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Ys(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(W,z,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Gr.copy(P.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),v.material.uniforms.envMap.value=E,v.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(u_.makeRotationFromEuler(Gr)),v.material.toneMapped=_t.getTransfer(E.colorSpace)!==Pt,(_!==E||S!==E.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=E,S=E.version,M=s.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):E&&E.isTexture&&(m===void 0&&(m=new Jn(new Zr(2,2),new Wi({name:"BackgroundMaterial",uniforms:Ys(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=E,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=_t.getTransfer(E.colorSpace)!==Pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),m.material.uniforms.uvTransform.value.copy(E.matrix),(_!==E||S!==E.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,_=E,S=E.version,M=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function x(D,P){D.getRGB(Ml,U0(s)),r.buffers.color.setClear(Ml.r,Ml.g,Ml.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),p=P,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,x(d,p)},render:T,addToRenderList:y}}function f_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let l=o,f=!1;function d(C,B,ae,Z,fe){let me=!1;const ue=_(Z,ae,B);l!==ue&&(l=ue,m(l.object)),me=M(C,Z,ae,fe),me&&b(C,Z,ae,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(me||f)&&(f=!1,E(C,B,ae,Z),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function _(C,B,ae){const Z=ae.wireframe===!0;let fe=r[C.id];fe===void 0&&(fe={},r[C.id]=fe);let me=fe[B.id];me===void 0&&(me={},fe[B.id]=me);let ue=me[Z];return ue===void 0&&(ue=S(p()),me[Z]=ue),ue}function S(C){const B=[],ae=[],Z=[];for(let fe=0;fe<t;fe++)B[fe]=0,ae[fe]=0,Z[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ae,attributeDivisors:Z,object:C,attributes:{},index:null}}function M(C,B,ae,Z){const fe=l.attributes,me=B.attributes;let ue=0;const pe=ae.getAttributes();for(const j in pe)if(pe[j].location>=0){const se=fe[j];let O=me[j];if(O===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),se===void 0||se.attribute!==O||O&&se.data!==O.data)return!0;ue++}return l.attributesNum!==ue||l.index!==Z}function b(C,B,ae,Z){const fe={},me=B.attributes;let ue=0;const pe=ae.getAttributes();for(const j in pe)if(pe[j].location>=0){let se=me[j];se===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const O={};O.attribute=se,se&&se.data&&(O.data=se.data),fe[j]=O,ue++}l.attributes=fe,l.attributesNum=ue,l.index=Z}function T(){const C=l.newAttributes;for(let B=0,ae=C.length;B<ae;B++)C[B]=0}function y(C){x(C,0)}function x(C,B){const ae=l.newAttributes,Z=l.enabledAttributes,fe=l.attributeDivisors;ae[C]=1,Z[C]===0&&(s.enableVertexAttribArray(C),Z[C]=1),fe[C]!==B&&(s.vertexAttribDivisor(C,B),fe[C]=B)}function D(){const C=l.newAttributes,B=l.enabledAttributes;for(let ae=0,Z=B.length;ae<Z;ae++)B[ae]!==C[ae]&&(s.disableVertexAttribArray(ae),B[ae]=0)}function P(C,B,ae,Z,fe,me,ue){ue===!0?s.vertexAttribIPointer(C,B,ae,fe,me):s.vertexAttribPointer(C,B,ae,Z,fe,me)}function E(C,B,ae,Z){T();const fe=Z.attributes,me=ae.getAttributes(),ue=B.defaultAttributeValues;for(const pe in me){const j=me[pe];if(j.location>=0){let ee=fe[pe];if(ee===void 0&&(pe==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),pe==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),ee!==void 0){const se=ee.normalized,O=ee.itemSize,re=e.get(ee);if(re===void 0)continue;const Le=re.buffer,te=re.type,ge=re.bytesPerElement,we=te===s.INT||te===s.UNSIGNED_INT||ee.gpuType===lf;if(ee.isInterleavedBufferAttribute){const Se=ee.data,Re=Se.stride,Fe=ee.offset;if(Se.isInstancedInterleavedBuffer){for(let Ke=0;Ke<j.locationSize;Ke++)x(j.location+Ke,Se.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ke=0;Ke<j.locationSize;Ke++)y(j.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ke=0;Ke<j.locationSize;Ke++)P(j.location+Ke,O/j.locationSize,te,se,Re*ge,(Fe+O/j.locationSize*Ke)*ge,we)}else{if(ee.isInstancedBufferAttribute){for(let Se=0;Se<j.locationSize;Se++)x(j.location+Se,ee.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<j.locationSize;Se++)y(j.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Se=0;Se<j.locationSize;Se++)P(j.location+Se,O/j.locationSize,te,se,O*ge,O/j.locationSize*Se*ge,we)}}else if(ue!==void 0){const se=ue[pe];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(j.location,se);break;case 3:s.vertexAttrib3fv(j.location,se);break;case 4:s.vertexAttrib4fv(j.location,se);break;default:s.vertexAttrib1fv(j.location,se)}}}}D()}function W(){U();for(const C in r){const B=r[C];for(const ae in B){const Z=B[ae];for(const fe in Z)v(Z[fe].object),delete Z[fe];delete B[ae]}delete r[C]}}function z(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const ae in B){const Z=B[ae];for(const fe in Z)v(Z[fe].object),delete Z[fe];delete B[ae]}delete r[C.id]}function I(C){for(const B in r){const ae=r[B];if(ae[C.id]===void 0)continue;const Z=ae[C.id];for(const fe in Z)v(Z[fe].object),delete Z[fe];delete ae[C.id]}}function U(){N(),f=!0,l!==o&&(l=o,m(l.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:U,resetDefaultState:N,dispose:W,releaseStatesOfGeometry:z,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function h_(s,e,t){let r;function o(m){r=m}function l(m,v){s.drawArrays(r,m,v),t.update(v,r,1)}function f(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),t.update(v,r,_))}function d(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let M=0;for(let b=0;b<_;b++)M+=v[b];t.update(M,r,1)}function p(m,v,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<m.length;b++)f(m[b],v[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,S,0,_);let b=0;for(let T=0;T<_;T++)b+=v[T]*S[T];t.update(b,r,1)}}this.setMode=o,this.render=l,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function p_(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(I){return!(I!==Zn&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const U=I===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Gi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==_i&&!U)}function p(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=t.logarithmicDepthBuffer===!0,S=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=b>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:E,vertexTextures:W,maxSamples:z}}function m_(s){const e=this;let t=null,r=0,o=!1,l=!1;const f=new Xr,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||o;return o=S,r=_.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,S){t=v(_,S,0)},this.setState=function(_,S,M){const b=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!o||b===null||b.length===0||l&&!y)l?v(null):m();else{const D=l?0:r,P=D*4;let E=x.clippingState||null;p.value=E,E=v(b,S,P,M);for(let W=0;W!==P;++W)E[W]=t[W];x.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,S,M,b){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=p.value,b!==!0||y===null){const x=M+T*4,D=S.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,E=M;P!==T;++P,E+=4)f.copy(_[P]).applyMatrix4(D,d),f.normal.toArray(y,E),y[E+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function g_(s){let e=new WeakMap;function t(f,d){return d===wd?f.mapping=Vs:d===Ed&&(f.mapping=Ws),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===wd||d===Ed)if(e.has(f)){const p=e.get(f).texture;return t(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Ay(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",o),t(m.texture,f.mapping)}else return null}}return f}function o(f){const d=f.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class x_ extends Bl{constructor(e=-1,t=1,r=1,o=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,f=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,f=l+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zs=4,bm=[.125,.215,.35,.446,.526,.582],Qr=20,nd=new x_,wm=new Tt;let id=null,rd=0,sd=0,ad=!1;const qr=(1+Math.sqrt(5))/2,Os=1/qr,Em=[new de(-qr,Os,0),new de(qr,Os,0),new de(-Os,0,qr),new de(Os,0,qr),new de(0,qr,-Os),new de(0,qr,Os),new de(-1,1,-1),new de(1,1,-1),new de(-1,1,1),new de(1,1,1)];class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){id=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(id,rd,sd),this._renderer.xr.enabled=ad,e.scissorTest=!1,bl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),id=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Ks,format:Zn,colorSpace:Zs,depthBuffer:!1},o=Am(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v_(l)),this._blurMaterial=y_(l,e,t)}return o}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,nd)}_sceneToCubeUV(e,t,r,o){const d=new ui(90,1,t,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(wm),v.toneMapping=Mr,v.autoClear=!1;const M=new L0({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),b=new Jn(new Ka,M);let T=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,T=!0):(M.color.copy(wm),T=!0);for(let x=0;x<6;x++){const D=x%3;D===0?(d.up.set(0,p[x],0),d.lookAt(m[x],0,0)):D===1?(d.up.set(0,0,p[x]),d.lookAt(0,m[x],0)):(d.up.set(0,p[x],0),d.lookAt(0,0,m[x]));const P=this._cubeSize;bl(o,D*P,x>2?P:0,P,P),v.setRenderTarget(o),T&&v.render(b,d),v.render(e,d)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=S,v.autoClear=_,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Vs||e.mapping===Ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const l=o?this._cubemapMaterial:this._equirectMaterial,f=new Jn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;bl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(f,nd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const f=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Em[(o-l-1)%Em.length];this._blur(e,l-1,l,f,d)}t.autoClear=r}_blur(e,t,r,o,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,o,"latitudinal",l),this._halfBlur(f,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new Jn(this._lodPlanes[o],m),S=m.uniforms,M=this._sizeLods[r]-1,b=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Qr-1),T=l/b,y=isFinite(l)?1+Math.floor(v*T):Qr;y>Qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Qr}`);const x=[];let D=0;for(let I=0;I<Qr;++I){const U=I/T,N=Math.exp(-U*U/2);x.push(N),I===0?D+=N:I<y&&(D+=2*N)}for(let I=0;I<x.length;I++)x[I]=x[I]/D;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=f==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:P}=this;S.dTheta.value=b,S.mipInt.value=P-r;const E=this._sizeLods[o],W=3*E*(o>P-zs?o-P+zs:0),z=4*(this._cubeSize-E);bl(t,W,z,3*E,2*E),p.setRenderTarget(t),p.render(_,nd)}}function v_(s){const e=[],t=[],r=[];let o=s;const l=s-zs+1+bm.length;for(let f=0;f<l;f++){const d=Math.pow(2,o);t.push(d);let p=1/d;f>s-zs?p=bm[f-s+zs-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,_=1+m,S=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,b=6,T=3,y=2,x=1,D=new Float32Array(T*b*M),P=new Float32Array(y*b*M),E=new Float32Array(x*b*M);for(let z=0;z<M;z++){const I=z%3*2/3-1,U=z>2?0:-1,N=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];D.set(N,T*b*z),P.set(S,y*b*z);const C=[z,z,z,z,z,z];E.set(C,x*b*z)}const W=new Xi;W.setAttribute("position",new hi(D,T)),W.setAttribute("uv",new hi(P,y)),W.setAttribute("faceIndex",new hi(E,x)),e.push(W),o>zs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Am(s,e,t){const r=new wr(s,e,t);return r.texture.mapping=Gl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function y_(s,e,t){const r=new Float32Array(Qr),o=new de(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:pf(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Cm(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pf(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Rm(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function pf(){return`

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
	`}function S_(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===wd||p===Ed,v=p===Vs||p===Ws;if(m||v){let _=e.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return t===null&&(t=new Tm(s)),_=m?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return m&&M&&M.height>0||v&&M&&o(M)?(t===null&&(t=new Tm(s)),_=m?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function o(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function __(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&za("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function M_(s,e,t,r){const o={},l=new WeakMap;function f(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const T=S.morphAttributes[b];for(let y=0,x=T.length;y<x;y++)e.remove(T[y])}S.removeEventListener("dispose",f),delete o[S.id];const M=l.get(S);M&&(e.remove(M),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function d(_,S){return o[S.id]===!0||(S.addEventListener("dispose",f),o[S.id]=!0,t.memory.geometries++),S}function p(_){const S=_.attributes;for(const b in S)e.update(S[b],s.ARRAY_BUFFER);const M=_.morphAttributes;for(const b in M){const T=M[b];for(let y=0,x=T.length;y<x;y++)e.update(T[y],s.ARRAY_BUFFER)}}function m(_){const S=[],M=_.index,b=_.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let P=0,E=D.length;P<E;P+=3){const W=D[P+0],z=D[P+1],I=D[P+2];S.push(W,z,z,I,I,W)}}else if(b!==void 0){const D=b.array;T=b.version;for(let P=0,E=D.length/3-1;P<E;P+=3){const W=P+0,z=P+1,I=P+2;S.push(W,z,z,I,I,W)}}else return;const y=new(A0(S)?I0:k0)(S,1);y.version=T;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function v(_){const S=l.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&m(_)}else m(_);return l.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function b_(s,e,t){let r;function o(S){r=S}let l,f;function d(S){l=S.type,f=S.bytesPerElement}function p(S,M){s.drawElements(r,M,l,S*f),t.update(M,r,1)}function m(S,M,b){b!==0&&(s.drawElementsInstanced(r,M,l,S*f,b),t.update(M,r,b))}function v(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,S,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];t.update(y,r,1)}function _(S,M,b,T){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)m(S[x]/f,M[x],T[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,S,0,T,0,b);let x=0;for(let D=0;D<b;D++)x+=M[D]*T[D];t.update(x,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function w_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,d){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function E_(s,e,t){const r=new WeakMap,o=new jt;function l(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let C=function(){U.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let E=0;b===!0&&(E=1),T===!0&&(E=2),y===!0&&(E=3);let W=d.attributes.position.count*E,z=1;W>e.maxTextureSize&&(z=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const I=new Float32Array(W*z*4*_),U=new R0(I,W,z,_);U.type=_i,U.needsUpdate=!0;const N=E*4;for(let B=0;B<_;B++){const ae=x[B],Z=D[B],fe=P[B],me=W*z*4*B;for(let ue=0;ue<ae.count;ue++){const pe=ue*N;b===!0&&(o.fromBufferAttribute(ae,ue),I[me+pe+0]=o.x,I[me+pe+1]=o.y,I[me+pe+2]=o.z,I[me+pe+3]=0),T===!0&&(o.fromBufferAttribute(Z,ue),I[me+pe+4]=o.x,I[me+pe+5]=o.y,I[me+pe+6]=o.z,I[me+pe+7]=0),y===!0&&(o.fromBufferAttribute(fe,ue),I[me+pe+8]=o.x,I[me+pe+9]=o.y,I[me+pe+10]=o.z,I[me+pe+11]=fe.itemSize===4?o.w:1)}}S={count:_,texture:U,size:new ct(W,z)},r.set(d,S),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,t);else{let b=0;for(let y=0;y<m.length;y++)b+=m[y];const T=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function T_(s,e,t,r){let o=new WeakMap;function l(p){const m=r.render.frame,v=p.geometry,_=e.get(p,v);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;o.get(S)!==m&&(S.update(),o.set(S,m))}return _}function f(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:f}}class B0 extends Sn{constructor(e,t,r,o,l,f,d,p,m,v=js){if(v!==js&&v!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===js&&(r=$r),r===void 0&&v===qs&&(r=Xs),super(null,o,l,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:Bn,this.minFilter=p!==void 0?p:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const j0=new Sn,Nm=new B0(1,1),H0=new R0,G0=new dy,V0=new F0,Pm=[],Dm=[],Lm=new Float32Array(16),km=new Float32Array(9),Im=new Float32Array(4);function $s(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Pm[o];if(l===void 0&&(l=new Float32Array(o),Pm[o]=l),e!==0){r.toArray(l,0);for(let f=1,d=0;f!==e;++f)d+=t,s[f].toArray(l,d)}return l}function Kt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Xl(s,e){let t=Dm[e];t===void 0&&(t=new Int32Array(e),Dm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function A_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function C_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function R_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function N_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function P_(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,r))return;Im.set(r),s.uniformMatrix2fv(this.addr,!1,Im),Zt(t,r)}}function D_(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,r))return;km.set(r),s.uniformMatrix3fv(this.addr,!1,km),Zt(t,r)}}function L_(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,r))return;Lm.set(r),s.uniformMatrix4fv(this.addr,!1,Lm),Zt(t,r)}}function k_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function I_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function U_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function F_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function O_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function B_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function j_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function H_(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Nm.compareFunction=T0,l=Nm):l=j0,t.setTexture2D(e||l,o)}function G_(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||G0,o)}function V_(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||V0,o)}function W_(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||H0,o)}function X_(s){switch(s){case 5126:return A_;case 35664:return C_;case 35665:return R_;case 35666:return N_;case 35674:return P_;case 35675:return D_;case 35676:return L_;case 5124:case 35670:return k_;case 35667:case 35671:return I_;case 35668:case 35672:return U_;case 35669:case 35673:return F_;case 5125:return O_;case 36294:return z_;case 36295:return B_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return W_}}function q_(s,e){s.uniform1fv(this.addr,e)}function Y_(s,e){const t=$s(e,this.size,2);s.uniform2fv(this.addr,t)}function Q_(s,e){const t=$s(e,this.size,3);s.uniform3fv(this.addr,t)}function K_(s,e){const t=$s(e,this.size,4);s.uniform4fv(this.addr,t)}function Z_(s,e){const t=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function J_(s,e){const t=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function $_(s,e){const t=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function eM(s,e){s.uniform1iv(this.addr,e)}function tM(s,e){s.uniform2iv(this.addr,e)}function nM(s,e){s.uniform3iv(this.addr,e)}function iM(s,e){s.uniform4iv(this.addr,e)}function rM(s,e){s.uniform1uiv(this.addr,e)}function sM(s,e){s.uniform2uiv(this.addr,e)}function aM(s,e){s.uniform3uiv(this.addr,e)}function oM(s,e){s.uniform4uiv(this.addr,e)}function lM(s,e,t){const r=this.cache,o=e.length,l=Xl(t,o);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let f=0;f!==o;++f)t.setTexture2D(e[f]||j0,l[f])}function cM(s,e,t){const r=this.cache,o=e.length,l=Xl(t,o);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let f=0;f!==o;++f)t.setTexture3D(e[f]||G0,l[f])}function uM(s,e,t){const r=this.cache,o=e.length,l=Xl(t,o);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let f=0;f!==o;++f)t.setTextureCube(e[f]||V0,l[f])}function dM(s,e,t){const r=this.cache,o=e.length,l=Xl(t,o);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let f=0;f!==o;++f)t.setTexture2DArray(e[f]||H0,l[f])}function fM(s){switch(s){case 5126:return q_;case 35664:return Y_;case 35665:return Q_;case 35666:return K_;case 35674:return Z_;case 35675:return J_;case 35676:return $_;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return sM;case 36295:return aM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return dM}}class hM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=X_(t.type)}}class pM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fM(t.type)}}class mM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,f=o.length;l!==f;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const od=/(\w+)(\])?(\[|\.)?/g;function Um(s,e){s.seq.push(e),s.map[e.id]=e}function gM(s,e,t){const r=s.name,o=r.length;for(od.lastIndex=0;;){const l=od.exec(r),f=od.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===o){Um(t,m===void 0?new hM(d,s,e):new pM(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new mM(d),Um(t,_)),t=_}}}class Ul{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),f=e.getUniformLocation(t,l.name);gM(l,f,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,f=t.length;l!==f;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const f=e[o];f.id in t&&r.push(f)}return r}}function Fm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const xM=37297;let vM=0;function yM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=o;f<l;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${t[f]}`)}return r.join(`
`)}const Om=new ut;function SM(s){_t._getMatrix(Om,_t.workingColorSpace,s);const e=`mat3( ${Om.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(s)){case Vl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function zm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+yM(s.getShaderSource(e),f)}else return o}function _M(s,e){const t=SM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function MM(s,e){let t;switch(e){case F1:t="Linear";break;case O1:t="Reinhard";break;case z1:t="Cineon";break;case B1:t="ACESFilmic";break;case H1:t="AgX";break;case G1:t="Neutral";break;case j1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wl=new de;function bM(){_t.getLuminanceCoefficients(wl);const s=wl.x.toFixed(4),e=wl.y.toFixed(4),t=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function EM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function TM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),f=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:d}}return t}function Ba(s){return s!==""}function Bm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AM=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(s){return s.replace(AM,RM)}const CM=new Map;function RM(s,e){let t=ft[e];if(t===void 0){const r=CM.get(e);if(r!==void 0)t=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return tf(t)}const NM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(s){return s.replace(NM,PM)}function PM(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Gm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function DM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===h0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===g1?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function LM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function IM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case p0:e="ENVMAP_BLENDING_MULTIPLY";break;case I1:e="ENVMAP_BLENDING_MIX";break;case U1:e="ENVMAP_BLENDING_ADD";break}return e}function UM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function FM(s,e,t,r){const o=s.getContext(),l=t.defines;let f=t.vertexShader,d=t.fragmentShader;const p=DM(t),m=LM(t),v=kM(t),_=IM(t),S=UM(t),M=wM(t),b=EM(l),T=o.createProgram();let y,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ba).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ba).join(`
`),x.length>0&&(x+=`
`)):(y=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),x=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?ft.tonemapping_pars_fragment:"",t.toneMapping!==Mr?MM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,_M("linearToOutputTexel",t.outputColorSpace),bM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),f=tf(f),f=Bm(f,t),f=jm(f,t),d=tf(d),d=Bm(d,t),d=jm(d,t),f=Hm(f),d=Hm(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=D+y+f,E=D+x+d,W=Fm(o,o.VERTEX_SHADER,P),z=Fm(o,o.FRAGMENT_SHADER,E);o.attachShader(T,W),o.attachShader(T,z),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function I(B){if(s.debug.checkShaderErrors){const ae=o.getProgramInfoLog(T).trim(),Z=o.getShaderInfoLog(W).trim(),fe=o.getShaderInfoLog(z).trim();let me=!0,ue=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(me=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,W,z);else{const pe=zm(o,W,"vertex"),j=zm(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ae+`
`+pe+`
`+j)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(Z===""||fe==="")&&(ue=!1);ue&&(B.diagnostics={runnable:me,programLog:ae,vertexShader:{log:Z,prefix:y},fragmentShader:{log:fe,prefix:x}})}o.deleteShader(W),o.deleteShader(z),U=new Ul(o,T),N=TM(o,T)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,xM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=W,this.fragmentShader=z,this}let OM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new BM(e),t.set(e,r)),r}}class BM{constructor(e){this.id=OM++,this.code=e,this.usedTimes=0}}function jM(s,e,t,r,o,l,f){const d=new P0,p=new zM,m=new Set,v=[],_=o.logarithmicDepthBuffer,S=o.vertexTextures;let M=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return m.add(N),N===0?"uv":`uv${N}`}function y(N,C,B,ae,Z){const fe=ae.fog,me=Z.geometry,ue=N.isMeshStandardMaterial?ae.environment:null,pe=(N.isMeshStandardMaterial?t:e).get(N.envMap||ue),j=pe&&pe.mapping===Gl?pe.image.height:null,ee=b[N.type];N.precision!==null&&(M=o.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const se=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,O=se!==void 0?se.length:0;let re=0;me.morphAttributes.position!==void 0&&(re=1),me.morphAttributes.normal!==void 0&&(re=2),me.morphAttributes.color!==void 0&&(re=3);let Le,te,ge,we;if(ee){const yt=Si[ee];Le=yt.vertexShader,te=yt.fragmentShader}else Le=N.vertexShader,te=N.fragmentShader,p.update(N),ge=p.getVertexShaderID(N),we=p.getFragmentShaderID(N);const Se=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Fe=Z.isInstancedMesh===!0,Ke=Z.isBatchedMesh===!0,At=!!N.map,pt=!!N.matcap,Nt=!!pe,Y=!!N.aoMap,nn=!!N.lightMap,ht=!!N.bumpMap,dt=!!N.normalMap,Ye=!!N.displacementMap,Mt=!!N.emissiveMap,Qe=!!N.metalnessMap,k=!!N.roughnessMap,A=N.anisotropy>0,X=N.clearcoat>0,L=N.dispersion>0,K=N.iridescence>0,J=N.sheen>0,Te=N.transmission>0,Me=A&&!!N.anisotropyMap,Ne=X&&!!N.clearcoatMap,ot=X&&!!N.clearcoatNormalMap,_e=X&&!!N.clearcoatRoughnessMap,Oe=K&&!!N.iridescenceMap,$e=K&&!!N.iridescenceThicknessMap,et=J&&!!N.sheenColorMap,Be=J&&!!N.sheenRoughnessMap,mt=!!N.specularMap,st=!!N.specularColorMap,Ct=!!N.specularIntensityMap,V=Te&&!!N.transmissionMap,Pe=Te&&!!N.thicknessMap,he=!!N.gradientMap,xe=!!N.alphaMap,Ie=N.alphaTest>0,ke=!!N.alphaHash,at=!!N.extensions;let kt=Mr;N.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(kt=s.toneMapping);const Xt={shaderID:ee,shaderType:N.type,shaderName:N.name,vertexShader:Le,fragmentShader:te,defines:N.defines,customVertexShaderID:ge,customFragmentShaderID:we,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:Ke,batchingColor:Ke&&Z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&Z.instanceColor!==null,instancingMorph:Fe&&Z.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Zs,alphaToCoverage:!!N.alphaToCoverage,map:At,matcap:pt,envMap:Nt,envMapMode:Nt&&pe.mapping,envMapCubeUVHeight:j,aoMap:Y,lightMap:nn,bumpMap:ht,normalMap:dt,displacementMap:S&&Ye,emissiveMap:Mt,normalMapObjectSpace:dt&&N.normalMapType===Y1,normalMapTangentSpace:dt&&N.normalMapType===q1,metalnessMap:Qe,roughnessMap:k,anisotropy:A,anisotropyMap:Me,clearcoat:X,clearcoatMap:Ne,clearcoatNormalMap:ot,clearcoatRoughnessMap:_e,dispersion:L,iridescence:K,iridescenceMap:Oe,iridescenceThicknessMap:$e,sheen:J,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:mt,specularColorMap:st,specularIntensityMap:Ct,transmission:Te,transmissionMap:V,thicknessMap:Pe,gradientMap:he,opaque:N.transparent===!1&&N.blending===Bs&&N.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ie,alphaHash:ke,combine:N.combine,mapUv:At&&T(N.map.channel),aoMapUv:Y&&T(N.aoMap.channel),lightMapUv:nn&&T(N.lightMap.channel),bumpMapUv:ht&&T(N.bumpMap.channel),normalMapUv:dt&&T(N.normalMap.channel),displacementMapUv:Ye&&T(N.displacementMap.channel),emissiveMapUv:Mt&&T(N.emissiveMap.channel),metalnessMapUv:Qe&&T(N.metalnessMap.channel),roughnessMapUv:k&&T(N.roughnessMap.channel),anisotropyMapUv:Me&&T(N.anisotropyMap.channel),clearcoatMapUv:Ne&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:ot&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(N.sheenRoughnessMap.channel),specularMapUv:mt&&T(N.specularMap.channel),specularColorMapUv:st&&T(N.specularColorMap.channel),specularIntensityMapUv:Ct&&T(N.specularIntensityMap.channel),transmissionMapUv:V&&T(N.transmissionMap.channel),thicknessMapUv:Pe&&T(N.thicknessMap.channel),alphaMapUv:xe&&T(N.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(dt||A),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!me.attributes.uv&&(At||xe),fog:!!fe,useFog:N.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Re,skinning:Z.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:At&&N.map.isVideoTexture===!0&&_t.getTransfer(N.map.colorSpace)===Pt,decodeVideoTextureEmissive:Mt&&N.emissiveMap.isVideoTexture===!0&&_t.getTransfer(N.emissiveMap.colorSpace)===Pt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===zi,flipSided:N.side===Dn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:at&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&N.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function x(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const B in N.defines)C.push(B),C.push(N.defines[B]);return N.isRawShaderMaterial===!1&&(D(C,N),P(C,N),C.push(s.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function D(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function P(N,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),N.push(d.mask)}function E(N){const C=b[N.type];let B;if(C){const ae=Si[C];B=by.clone(ae.uniforms)}else B=N.uniforms;return B}function W(N,C){let B;for(let ae=0,Z=v.length;ae<Z;ae++){const fe=v[ae];if(fe.cacheKey===C){B=fe,++B.usedTimes;break}}return B===void 0&&(B=new FM(s,C,N,l),v.push(B)),B}function z(N){if(--N.usedTimes===0){const C=v.indexOf(N);v[C]=v[v.length-1],v.pop(),N.destroy()}}function I(N){p.remove(N)}function U(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:E,acquireProgram:W,releaseProgram:z,releaseShaderCache:I,programs:v,dispose:U}}function HM(){let s=new WeakMap;function e(f){return s.has(f)}function t(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function o(f,d,p){s.get(f)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function GM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function f(_,S,M,b,T,y){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:S,material:M,groupOrder:b,renderOrder:_.renderOrder,z:T,group:y},s[e]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=M,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=T,x.group=y),e++,x}function d(_,S,M,b,T,y){const x=f(_,S,M,b,T,y);M.transmission>0?r.push(x):M.transparent===!0?o.push(x):t.push(x)}function p(_,S,M,b,T,y){const x=f(_,S,M,b,T,y);M.transmission>0?r.unshift(x):M.transparent===!0?o.unshift(x):t.unshift(x)}function m(_,S){t.length>1&&t.sort(_||GM),r.length>1&&r.sort(S||Vm),o.length>1&&o.sort(S||Vm)}function v(){for(let _=e,S=s.length;_<S;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:v,sort:m}}function VM(){let s=new WeakMap;function e(r,o){const l=s.get(r);let f;return l===void 0?(f=new Wm,s.set(r,[f])):o>=l.length?(f=new Wm,l.push(f)):f=l[o],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function WM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new de,color:new Tt};break;case"SpotLight":t={position:new de,direction:new de,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new de,halfWidth:new de,halfHeight:new de};break}return s[e.id]=t,t}}}function XM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let qM=0;function YM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function QM(s){const e=new WM,t=XM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new de);const o=new de,l=new Gt,f=new Gt;function d(m){let v=0,_=0,S=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,b=0,T=0,y=0,x=0,D=0,P=0,E=0,W=0,z=0,I=0;m.sort(YM);for(let N=0,C=m.length;N<C;N++){const B=m[N],ae=B.color,Z=B.intensity,fe=B.distance,me=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=ae.r*Z,_+=ae.g*Z,S+=ae.b*Z;else if(B.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(B.sh.coefficients[ue],Z);I++}else if(B.isDirectionalLight){const ue=e.get(B);if(ue.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const pe=B.shadow,j=t.get(B);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=me,r.directionalShadowMatrix[M]=B.shadow.matrix,D++}r.directional[M]=ue,M++}else if(B.isSpotLight){const ue=e.get(B);ue.position.setFromMatrixPosition(B.matrixWorld),ue.color.copy(ae).multiplyScalar(Z),ue.distance=fe,ue.coneCos=Math.cos(B.angle),ue.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ue.decay=B.decay,r.spot[T]=ue;const pe=B.shadow;if(B.map&&(r.spotLightMap[W]=B.map,W++,pe.updateMatrices(B),B.castShadow&&z++),r.spotLightMatrix[T]=pe.matrix,B.castShadow){const j=t.get(B);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,r.spotShadow[T]=j,r.spotShadowMap[T]=me,E++}T++}else if(B.isRectAreaLight){const ue=e.get(B);ue.color.copy(ae).multiplyScalar(Z),ue.halfWidth.set(B.width*.5,0,0),ue.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=ue,y++}else if(B.isPointLight){const ue=e.get(B);if(ue.color.copy(B.color).multiplyScalar(B.intensity),ue.distance=B.distance,ue.decay=B.decay,B.castShadow){const pe=B.shadow,j=t.get(B);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,j.shadowCameraNear=pe.camera.near,j.shadowCameraFar=pe.camera.far,r.pointShadow[b]=j,r.pointShadowMap[b]=me,r.pointShadowMatrix[b]=B.shadow.matrix,P++}r.point[b]=ue,b++}else if(B.isHemisphereLight){const ue=e.get(B);ue.skyColor.copy(B.color).multiplyScalar(Z),ue.groundColor.copy(B.groundColor).multiplyScalar(Z),r.hemi[x]=ue,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=S;const U=r.hash;(U.directionalLength!==M||U.pointLength!==b||U.spotLength!==T||U.rectAreaLength!==y||U.hemiLength!==x||U.numDirectionalShadows!==D||U.numPointShadows!==P||U.numSpotShadows!==E||U.numSpotMaps!==W||U.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=E+W-z,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=I,U.directionalLength=M,U.pointLength=b,U.spotLength=T,U.rectAreaLength=y,U.hemiLength=x,U.numDirectionalShadows=D,U.numPointShadows=P,U.numSpotShadows=E,U.numSpotMaps=W,U.numLightProbes=I,r.version=qM++)}function p(m,v){let _=0,S=0,M=0,b=0,T=0;const y=v.matrixWorldInverse;for(let x=0,D=m.length;x<D;x++){const P=m[x];if(P.isDirectionalLight){const E=r.directional[_];E.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(y),_++}else if(P.isSpotLight){const E=r.spot[M];E.position.setFromMatrixPosition(P.matrixWorld),E.position.applyMatrix4(y),E.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(y),M++}else if(P.isRectAreaLight){const E=r.rectArea[b];E.position.setFromMatrixPosition(P.matrixWorld),E.position.applyMatrix4(y),f.identity(),l.copy(P.matrixWorld),l.premultiply(y),f.extractRotation(l),E.halfWidth.set(P.width*.5,0,0),E.halfHeight.set(0,P.height*.5,0),E.halfWidth.applyMatrix4(f),E.halfHeight.applyMatrix4(f),b++}else if(P.isPointLight){const E=r.point[S];E.position.setFromMatrixPosition(P.matrixWorld),E.position.applyMatrix4(y),S++}else if(P.isHemisphereLight){const E=r.hemi[T];E.direction.setFromMatrixPosition(P.matrixWorld),E.direction.transformDirection(y),T++}}}return{setup:d,setupView:p,state:r}}function Xm(s){const e=new QM(s),t=[],r=[];function o(v){m.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function f(v){r.push(v)}function d(){e.setup(t)}function p(v){e.setupView(t,v)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:f}}function KM(s){let e=new WeakMap;function t(o,l=0){const f=e.get(o);let d;return f===void 0?(d=new Xm(s),e.set(o,[d])):l>=f.length?(d=new Xm(s),f.push(d)):d=f[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class ZM extends Qa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=W1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JM extends Qa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eb=`uniform sampler2D shadow_pass;
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
}`;function tb(s,e,t){let r=new O0;const o=new ct,l=new ct,f=new jt,d=new ZM({depthPacking:X1}),p=new JM,m={},v=t.maxTextureSize,_={[br]:Dn,[Dn]:br,[zi]:zi},S=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:$M,fragmentShader:eb}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Xi;b.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Jn(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h0;let x=this.type;this.render=function(z,I,U){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const N=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(_r),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const Z=x!==Oi&&this.type===Oi,fe=x===Oi&&this.type!==Oi;for(let me=0,ue=z.length;me<ue;me++){const pe=z[me],j=pe.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const ee=j.getFrameExtents();if(o.multiply(ee),l.copy(j.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/ee.x),o.x=l.x*ee.x,j.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/ee.y),o.y=l.y*ee.y,j.mapSize.y=l.y)),j.map===null||Z===!0||fe===!0){const O=this.type!==Oi?{minFilter:Bn,magFilter:Bn}:{};j.map!==null&&j.map.dispose(),j.map=new wr(o.x,o.y,O),j.map.texture.name=pe.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const se=j.getViewportCount();for(let O=0;O<se;O++){const re=j.getViewport(O);f.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ae.viewport(f),j.updateMatrices(pe,O),r=j.getFrustum(),E(I,U,j.camera,pe,this.type)}j.isPointLightShadow!==!0&&this.type===Oi&&D(j,U),j.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(N,C,B)};function D(z,I){const U=e.update(T);S.defines.VSM_SAMPLES!==z.blurSamples&&(S.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new wr(o.x,o.y)),S.uniforms.shadow_pass.value=z.map.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(I,null,U,S,T,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(I,null,U,M,T,null)}function P(z,I,U,N){let C=null;const B=U.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(B!==void 0)C=B;else if(C=U.isPointLight===!0?p:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ae=C.uuid,Z=I.uuid;let fe=m[ae];fe===void 0&&(fe={},m[ae]=fe);let me=fe[Z];me===void 0&&(me=C.clone(),fe[Z]=me,I.addEventListener("dispose",W)),C=me}if(C.visible=I.visible,C.wireframe=I.wireframe,N===Oi?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:_[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,U.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=s.properties.get(C);ae.light=U}return C}function E(z,I,U,N,C){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===Oi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,z.matrixWorld);const Z=e.update(z),fe=z.material;if(Array.isArray(fe)){const me=Z.groups;for(let ue=0,pe=me.length;ue<pe;ue++){const j=me[ue],ee=fe[j.materialIndex];if(ee&&ee.visible){const se=P(z,ee,N,C);z.onBeforeShadow(s,z,I,U,Z,se,j),s.renderBufferDirect(U,null,Z,se,z,j),z.onAfterShadow(s,z,I,U,Z,se,j)}}}else if(fe.visible){const me=P(z,fe,N,C);z.onBeforeShadow(s,z,I,U,Z,me,null),s.renderBufferDirect(U,null,Z,me,z,null),z.onAfterShadow(s,z,I,U,Z,me,null)}}const ae=z.children;for(let Z=0,fe=ae.length;Z<fe;Z++)E(ae[Z],I,U,N,C)}function W(z){z.target.removeEventListener("dispose",W);for(const U in m){const N=m[U],C=z.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const nb={[xd]:vd,[yd]:Md,[Sd]:bd,[Gs]:_d,[vd]:xd,[Md]:yd,[bd]:Sd,[_d]:Gs};function ib(s,e){function t(){let V=!1;const Pe=new jt;let he=null;const xe=new jt(0,0,0,0);return{setMask:function(Ie){he!==Ie&&!V&&(s.colorMask(Ie,Ie,Ie,Ie),he=Ie)},setLocked:function(Ie){V=Ie},setClear:function(Ie,ke,at,kt,Xt){Xt===!0&&(Ie*=kt,ke*=kt,at*=kt),Pe.set(Ie,ke,at,kt),xe.equals(Pe)===!1&&(s.clearColor(Ie,ke,at,kt),xe.copy(Pe))},reset:function(){V=!1,he=null,xe.set(-1,0,0,0)}}}function r(){let V=!1,Pe=!1,he=null,xe=null,Ie=null;return{setReversed:function(ke){if(Pe!==ke){const at=e.get("EXT_clip_control");Pe?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const kt=Ie;Ie=null,this.setClear(kt)}Pe=ke},getReversed:function(){return Pe},setTest:function(ke){ke?Se(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(ke){he!==ke&&!V&&(s.depthMask(ke),he=ke)},setFunc:function(ke){if(Pe&&(ke=nb[ke]),xe!==ke){switch(ke){case xd:s.depthFunc(s.NEVER);break;case vd:s.depthFunc(s.ALWAYS);break;case yd:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case Sd:s.depthFunc(s.EQUAL);break;case _d:s.depthFunc(s.GEQUAL);break;case Md:s.depthFunc(s.GREATER);break;case bd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=ke}},setLocked:function(ke){V=ke},setClear:function(ke){Ie!==ke&&(Pe&&(ke=1-ke),s.clearDepth(ke),Ie=ke)},reset:function(){V=!1,he=null,xe=null,Ie=null,Pe=!1}}}function o(){let V=!1,Pe=null,he=null,xe=null,Ie=null,ke=null,at=null,kt=null,Xt=null;return{setTest:function(yt){V||(yt?Se(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(yt){Pe!==yt&&!V&&(s.stencilMask(yt),Pe=yt)},setFunc:function(yt,_n,mn){(he!==yt||xe!==_n||Ie!==mn)&&(s.stencilFunc(yt,_n,mn),he=yt,xe=_n,Ie=mn)},setOp:function(yt,_n,mn){(ke!==yt||at!==_n||kt!==mn)&&(s.stencilOp(yt,_n,mn),ke=yt,at=_n,kt=mn)},setLocked:function(yt){V=yt},setClear:function(yt){Xt!==yt&&(s.clearStencil(yt),Xt=yt)},reset:function(){V=!1,Pe=null,he=null,xe=null,Ie=null,ke=null,at=null,kt=null,Xt=null}}}const l=new t,f=new r,d=new o,p=new WeakMap,m=new WeakMap;let v={},_={},S=new WeakMap,M=[],b=null,T=!1,y=null,x=null,D=null,P=null,E=null,W=null,z=null,I=new Tt(0,0,0),U=0,N=!1,C=null,B=null,ae=null,Z=null,fe=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,pe=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(j)[1]),ue=pe>=1):j.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ue=pe>=2);let ee=null,se={};const O=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Le=new jt().fromArray(O),te=new jt().fromArray(re);function ge(V,Pe,he,xe){const Ie=new Uint8Array(4),ke=s.createTexture();s.bindTexture(V,ke),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<he;at++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Pe+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return ke}const we={};we[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Se(s.DEPTH_TEST),f.setFunc(Gs),ht(!1),dt(Zp),Se(s.CULL_FACE),Y(_r);function Se(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function Re(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function Fe(V,Pe){return _[V]!==Pe?(s.bindFramebuffer(V,Pe),_[V]=Pe,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Pe),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ke(V,Pe){let he=M,xe=!1;if(V){he=S.get(Pe),he===void 0&&(he=[],S.set(Pe,he));const Ie=V.textures;if(he.length!==Ie.length||he[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,at=Ie.length;ke<at;ke++)he[ke]=s.COLOR_ATTACHMENT0+ke;he.length=Ie.length,xe=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,xe=!0);xe&&s.drawBuffers(he)}function At(V){return b!==V?(s.useProgram(V),b=V,!0):!1}const pt={[Yr]:s.FUNC_ADD,[v1]:s.FUNC_SUBTRACT,[y1]:s.FUNC_REVERSE_SUBTRACT};pt[S1]=s.MIN,pt[_1]=s.MAX;const Nt={[M1]:s.ZERO,[b1]:s.ONE,[w1]:s.SRC_COLOR,[md]:s.SRC_ALPHA,[N1]:s.SRC_ALPHA_SATURATE,[C1]:s.DST_COLOR,[T1]:s.DST_ALPHA,[E1]:s.ONE_MINUS_SRC_COLOR,[gd]:s.ONE_MINUS_SRC_ALPHA,[R1]:s.ONE_MINUS_DST_COLOR,[A1]:s.ONE_MINUS_DST_ALPHA,[P1]:s.CONSTANT_COLOR,[D1]:s.ONE_MINUS_CONSTANT_COLOR,[L1]:s.CONSTANT_ALPHA,[k1]:s.ONE_MINUS_CONSTANT_ALPHA};function Y(V,Pe,he,xe,Ie,ke,at,kt,Xt,yt){if(V===_r){T===!0&&(Re(s.BLEND),T=!1);return}if(T===!1&&(Se(s.BLEND),T=!0),V!==x1){if(V!==y||yt!==N){if((x!==Yr||E!==Yr)&&(s.blendEquation(s.FUNC_ADD),x=Yr,E=Yr),yt)switch(V){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pd:s.blendFunc(s.ONE,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}D=null,P=null,W=null,z=null,I.set(0,0,0),U=0,y=V,N=yt}return}Ie=Ie||Pe,ke=ke||he,at=at||xe,(Pe!==x||Ie!==E)&&(s.blendEquationSeparate(pt[Pe],pt[Ie]),x=Pe,E=Ie),(he!==D||xe!==P||ke!==W||at!==z)&&(s.blendFuncSeparate(Nt[he],Nt[xe],Nt[ke],Nt[at]),D=he,P=xe,W=ke,z=at),(kt.equals(I)===!1||Xt!==U)&&(s.blendColor(kt.r,kt.g,kt.b,Xt),I.copy(kt),U=Xt),y=V,N=!1}function nn(V,Pe){V.side===zi?Re(s.CULL_FACE):Se(s.CULL_FACE);let he=V.side===Dn;Pe&&(he=!he),ht(he),V.blending===Bs&&V.transparent===!1?Y(_r):Y(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),l.setMask(V.colorWrite);const xe=V.stencilWrite;d.setTest(xe),xe&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Mt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){C!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),C=V)}function dt(V){V!==p1?(Se(s.CULL_FACE),V!==B&&(V===Zp?s.cullFace(s.BACK):V===m1?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),B=V}function Ye(V){V!==ae&&(ue&&s.lineWidth(V),ae=V)}function Mt(V,Pe,he){V?(Se(s.POLYGON_OFFSET_FILL),(Z!==Pe||fe!==he)&&(s.polygonOffset(Pe,he),Z=Pe,fe=he)):Re(s.POLYGON_OFFSET_FILL)}function Qe(V){V?Se(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function k(V){V===void 0&&(V=s.TEXTURE0+me-1),ee!==V&&(s.activeTexture(V),ee=V)}function A(V,Pe,he){he===void 0&&(ee===null?he=s.TEXTURE0+me-1:he=ee);let xe=se[he];xe===void 0&&(xe={type:void 0,texture:void 0},se[he]=xe),(xe.type!==V||xe.texture!==Pe)&&(ee!==he&&(s.activeTexture(he),ee=he),s.bindTexture(V,Pe||we[V]),xe.type=V,xe.texture=Pe)}function X(){const V=se[ee];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function L(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(V){Le.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Le.copy(V))}function Be(V){te.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),te.copy(V))}function mt(V,Pe){let he=m.get(Pe);he===void 0&&(he=new WeakMap,m.set(Pe,he));let xe=he.get(V);xe===void 0&&(xe=s.getUniformBlockIndex(Pe,V.name),he.set(V,xe))}function st(V,Pe){const xe=m.get(Pe).get(V);p.get(Pe)!==xe&&(s.uniformBlockBinding(Pe,xe,V.__bindingPointIndex),p.set(Pe,xe))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ee=null,se={},_={},S=new WeakMap,M=[],b=null,T=!1,y=null,x=null,D=null,P=null,E=null,W=null,z=null,I=new Tt(0,0,0),U=0,N=!1,C=null,B=null,ae=null,Z=null,fe=null,Le.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),l.reset(),f.reset(),d.reset()}return{buffers:{color:l,depth:f,stencil:d},enable:Se,disable:Re,bindFramebuffer:Fe,drawBuffers:Ke,useProgram:At,setBlending:Y,setMaterial:nn,setFlipSided:ht,setCullFace:dt,setLineWidth:Ye,setPolygonOffset:Mt,setScissorTest:Qe,activeTexture:k,bindTexture:A,unbindTexture:X,compressedTexImage2D:L,compressedTexImage3D:K,texImage2D:Oe,texImage3D:$e,updateUBOMapping:mt,uniformBlockBinding:st,texStorage2D:ot,texStorage3D:_e,texSubImage2D:J,texSubImage3D:Te,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:et,viewport:Be,reset:Ct}}function qm(s,e,t,r){const o=rb(r);switch(t){case y0:return s*e;case _0:return s*e;case M0:return s*e*2;case b0:return s*e/o.components*o.byteLength;case df:return s*e/o.components*o.byteLength;case w0:return s*e*2/o.components*o.byteLength;case ff:return s*e*2/o.components*o.byteLength;case S0:return s*e*3/o.components*o.byteLength;case Zn:return s*e*4/o.components*o.byteLength;case hf:return s*e*4/o.components*o.byteLength;case Pl:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ll:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Pd:return Math.max(s,16)*Math.max(e,8)/4;case Cd:case Nd:return Math.max(s,8)*Math.max(e,8)/2;case Dd:case Ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Il:case Qd:case Kd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case E0:case Zd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rb(s){switch(s){case Gi:case g0:return{byteLength:1,components:1};case Ga:case x0:case Ks:return{byteLength:2,components:1};case cf:case uf:return{byteLength:2,components:4};case $r:case lf:case _i:return{byteLength:4,components:1};case v0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function sb(s,e,t,r,o,l,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ct,v=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(k,A){return M?new OffscreenCanvas(k,A):zl("canvas")}function T(k,A,X){let L=1;const K=Qe(k);if((K.width>X||K.height>X)&&(L=X/Math.max(K.width,K.height)),L<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const J=Math.floor(L*K.width),Te=Math.floor(L*K.height);_===void 0&&(_=b(J,Te));const Me=A?b(J,Te):_;return Me.width=J,Me.height=Te,Me.getContext("2d").drawImage(k,0,0,J,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+J+"x"+Te+")."),Me}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),k;return k}function y(k){return k.generateMipmaps}function x(k){s.generateMipmap(k)}function D(k){return k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?s.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(k,A,X,L,K=!1){if(k!==null){if(s[k]!==void 0)return s[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let J=A;if(A===s.RED&&(X===s.FLOAT&&(J=s.R32F),X===s.HALF_FLOAT&&(J=s.R16F),X===s.UNSIGNED_BYTE&&(J=s.R8)),A===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(J=s.R8UI),X===s.UNSIGNED_SHORT&&(J=s.R16UI),X===s.UNSIGNED_INT&&(J=s.R32UI),X===s.BYTE&&(J=s.R8I),X===s.SHORT&&(J=s.R16I),X===s.INT&&(J=s.R32I)),A===s.RG&&(X===s.FLOAT&&(J=s.RG32F),X===s.HALF_FLOAT&&(J=s.RG16F),X===s.UNSIGNED_BYTE&&(J=s.RG8)),A===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(J=s.RG8UI),X===s.UNSIGNED_SHORT&&(J=s.RG16UI),X===s.UNSIGNED_INT&&(J=s.RG32UI),X===s.BYTE&&(J=s.RG8I),X===s.SHORT&&(J=s.RG16I),X===s.INT&&(J=s.RG32I)),A===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(J=s.RGB8UI),X===s.UNSIGNED_SHORT&&(J=s.RGB16UI),X===s.UNSIGNED_INT&&(J=s.RGB32UI),X===s.BYTE&&(J=s.RGB8I),X===s.SHORT&&(J=s.RGB16I),X===s.INT&&(J=s.RGB32I)),A===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),X===s.UNSIGNED_INT&&(J=s.RGBA32UI),X===s.BYTE&&(J=s.RGBA8I),X===s.SHORT&&(J=s.RGBA16I),X===s.INT&&(J=s.RGBA32I)),A===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),A===s.RGBA){const Te=K?Vl:_t.getTransfer(L);X===s.FLOAT&&(J=s.RGBA32F),X===s.HALF_FLOAT&&(J=s.RGBA16F),X===s.UNSIGNED_BYTE&&(J=Te===Pt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(k,A){let X;return k?A===null||A===$r||A===Xs?X=s.DEPTH24_STENCIL8:A===_i?X=s.DEPTH32F_STENCIL8:A===Ga&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$r||A===Xs?X=s.DEPTH_COMPONENT24:A===_i?X=s.DEPTH_COMPONENT32F:A===Ga&&(X=s.DEPTH_COMPONENT16),X}function W(k,A){return y(k)===!0||k.isFramebufferTexture&&k.minFilter!==Bn&&k.minFilter!==Pn?Math.log2(Math.max(A.width,A.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?A.mipmaps.length:1}function z(k){const A=k.target;A.removeEventListener("dispose",z),U(A),A.isVideoTexture&&v.delete(A)}function I(k){const A=k.target;A.removeEventListener("dispose",I),C(A)}function U(k){const A=r.get(k);if(A.__webglInit===void 0)return;const X=k.source,L=S.get(X);if(L){const K=L[A.__cacheKey];K.usedTimes--,K.usedTimes===0&&N(k),Object.keys(L).length===0&&S.delete(X)}r.remove(k)}function N(k){const A=r.get(k);s.deleteTexture(A.__webglTexture);const X=k.source,L=S.get(X);delete L[A.__cacheKey],f.memory.textures--}function C(k){const A=r.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),r.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(A.__webglFramebuffer[L]))for(let K=0;K<A.__webglFramebuffer[L].length;K++)s.deleteFramebuffer(A.__webglFramebuffer[L][K]);else s.deleteFramebuffer(A.__webglFramebuffer[L]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[L])}else{if(Array.isArray(A.__webglFramebuffer))for(let L=0;L<A.__webglFramebuffer.length;L++)s.deleteFramebuffer(A.__webglFramebuffer[L]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let L=0;L<A.__webglColorRenderbuffer.length;L++)A.__webglColorRenderbuffer[L]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[L]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const X=k.textures;for(let L=0,K=X.length;L<K;L++){const J=r.get(X[L]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),f.memory.textures--),r.remove(X[L])}r.remove(k)}let B=0;function ae(){B=0}function Z(){const k=B;return k>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+o.maxTextures),B+=1,k}function fe(k){const A=[];return A.push(k.wrapS),A.push(k.wrapT),A.push(k.wrapR||0),A.push(k.magFilter),A.push(k.minFilter),A.push(k.anisotropy),A.push(k.internalFormat),A.push(k.format),A.push(k.type),A.push(k.generateMipmaps),A.push(k.premultiplyAlpha),A.push(k.flipY),A.push(k.unpackAlignment),A.push(k.colorSpace),A.join()}function me(k,A){const X=r.get(k);if(k.isVideoTexture&&Ye(k),k.isRenderTargetTexture===!1&&k.version>0&&X.__version!==k.version){const L=k.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(X,k,A);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+A)}function ue(k,A){const X=r.get(k);if(k.version>0&&X.__version!==k.version){te(X,k,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+A)}function pe(k,A){const X=r.get(k);if(k.version>0&&X.__version!==k.version){te(X,k,A);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+A)}function j(k,A){const X=r.get(k);if(k.version>0&&X.__version!==k.version){ge(X,k,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+A)}const ee={[Td]:s.REPEAT,[fi]:s.CLAMP_TO_EDGE,[Ad]:s.MIRRORED_REPEAT},se={[Bn]:s.NEAREST,[V1]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[Lu]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},O={[Q1]:s.NEVER,[ty]:s.ALWAYS,[K1]:s.LESS,[T0]:s.LEQUAL,[Z1]:s.EQUAL,[ey]:s.GEQUAL,[J1]:s.GREATER,[$1]:s.NOTEQUAL};function re(k,A){if(A.type===_i&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Pn||A.magFilter===Lu||A.magFilter===rl||A.magFilter===Kr||A.minFilter===Pn||A.minFilter===Lu||A.minFilter===rl||A.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(k,s.TEXTURE_WRAP_S,ee[A.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,ee[A.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,ee[A.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,se[A.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,se[A.minFilter]),A.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,O[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Bn||A.minFilter!==rl&&A.minFilter!==Kr||A.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(k,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Le(k,A){let X=!1;k.__webglInit===void 0&&(k.__webglInit=!0,A.addEventListener("dispose",z));const L=A.source;let K=S.get(L);K===void 0&&(K={},S.set(L,K));const J=fe(A);if(J!==k.__cacheKey){K[J]===void 0&&(K[J]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,X=!0),K[J].usedTimes++;const Te=K[k.__cacheKey];Te!==void 0&&(K[k.__cacheKey].usedTimes--,Te.usedTimes===0&&N(A)),k.__cacheKey=J,k.__webglTexture=K[J].texture}return X}function te(k,A,X){let L=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(L=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(L=s.TEXTURE_3D);const K=Le(k,A),J=A.source;t.bindTexture(L,k.__webglTexture,s.TEXTURE0+X);const Te=r.get(J);if(J.version!==Te.__version||K===!0){t.activeTexture(s.TEXTURE0+X);const Me=_t.getPrimaries(_t.workingColorSpace),Ne=A.colorSpace===Sr?null:_t.getPrimaries(A.colorSpace),ot=A.colorSpace===Sr||Me===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let _e=T(A.image,!1,o.maxTextureSize);_e=Mt(A,_e);const Oe=l.convert(A.format,A.colorSpace),$e=l.convert(A.type);let et=P(A.internalFormat,Oe,$e,A.colorSpace,A.isVideoTexture);re(L,A);let Be;const mt=A.mipmaps,st=A.isVideoTexture!==!0,Ct=Te.__version===void 0||K===!0,V=J.dataReady,Pe=W(A,_e);if(A.isDepthTexture)et=E(A.format===qs,A.type),Ct&&(st?t.texStorage2D(s.TEXTURE_2D,1,et,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,et,_e.width,_e.height,0,Oe,$e,null));else if(A.isDataTexture)if(mt.length>0){st&&Ct&&t.texStorage2D(s.TEXTURE_2D,Pe,et,mt[0].width,mt[0].height);for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],st?V&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Be.width,Be.height,Oe,$e,Be.data):t.texImage2D(s.TEXTURE_2D,he,et,Be.width,Be.height,0,Oe,$e,Be.data);A.generateMipmaps=!1}else st?(Ct&&t.texStorage2D(s.TEXTURE_2D,Pe,et,_e.width,_e.height),V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e.width,_e.height,Oe,$e,_e.data)):t.texImage2D(s.TEXTURE_2D,0,et,_e.width,_e.height,0,Oe,$e,_e.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){st&&Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,et,mt[0].width,mt[0].height,_e.depth);for(let he=0,xe=mt.length;he<xe;he++)if(Be=mt[he],A.format!==Zn)if(Oe!==null)if(st){if(V)if(A.layerUpdates.size>0){const Ie=qm(Be.width,Be.height,A.format,A.type);for(const ke of A.layerUpdates){const at=Be.data.subarray(ke*Ie/Be.data.BYTES_PER_ELEMENT,(ke+1)*Ie/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,ke,Be.width,Be.height,1,Oe,at)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,_e.depth,Oe,Be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,et,Be.width,Be.height,_e.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,_e.depth,Oe,$e,Be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,et,Be.width,Be.height,_e.depth,0,Oe,$e,Be.data)}else{st&&Ct&&t.texStorage2D(s.TEXTURE_2D,Pe,et,mt[0].width,mt[0].height);for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],A.format!==Zn?Oe!==null?st?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Be.width,Be.height,Oe,Be.data):t.compressedTexImage2D(s.TEXTURE_2D,he,et,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?V&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Be.width,Be.height,Oe,$e,Be.data):t.texImage2D(s.TEXTURE_2D,he,et,Be.width,Be.height,0,Oe,$e,Be.data)}else if(A.isDataArrayTexture)if(st){if(Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,et,_e.width,_e.height,_e.depth),V)if(A.layerUpdates.size>0){const he=qm(_e.width,_e.height,A.format,A.type);for(const xe of A.layerUpdates){const Ie=_e.data.subarray(xe*he/_e.data.BYTES_PER_ELEMENT,(xe+1)*he/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,_e.width,_e.height,1,Oe,$e,Ie)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Oe,$e,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,_e.width,_e.height,_e.depth,0,Oe,$e,_e.data);else if(A.isData3DTexture)st?(Ct&&t.texStorage3D(s.TEXTURE_3D,Pe,et,_e.width,_e.height,_e.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Oe,$e,_e.data)):t.texImage3D(s.TEXTURE_3D,0,et,_e.width,_e.height,_e.depth,0,Oe,$e,_e.data);else if(A.isFramebufferTexture){if(Ct)if(st)t.texStorage2D(s.TEXTURE_2D,Pe,et,_e.width,_e.height);else{let he=_e.width,xe=_e.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,et,he,xe,0,Oe,$e,null),he>>=1,xe>>=1}}else if(mt.length>0){if(st&&Ct){const he=Qe(mt[0]);t.texStorage2D(s.TEXTURE_2D,Pe,et,he.width,he.height)}for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],st?V&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Oe,$e,Be):t.texImage2D(s.TEXTURE_2D,he,et,Oe,$e,Be);A.generateMipmaps=!1}else if(st){if(Ct){const he=Qe(_e);t.texStorage2D(s.TEXTURE_2D,Pe,et,he.width,he.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,$e,_e)}else t.texImage2D(s.TEXTURE_2D,0,et,Oe,$e,_e);y(A)&&x(L),Te.__version=J.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function ge(k,A,X){if(A.image.length!==6)return;const L=Le(k,A),K=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+X);const J=r.get(K);if(K.version!==J.__version||L===!0){t.activeTexture(s.TEXTURE0+X);const Te=_t.getPrimaries(_t.workingColorSpace),Me=A.colorSpace===Sr?null:_t.getPrimaries(A.colorSpace),Ne=A.colorSpace===Sr||Te===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ot=A.isCompressedTexture||A.image[0].isCompressedTexture,_e=A.image[0]&&A.image[0].isDataTexture,Oe=[];for(let xe=0;xe<6;xe++)!ot&&!_e?Oe[xe]=T(A.image[xe],!0,o.maxCubemapSize):Oe[xe]=_e?A.image[xe].image:A.image[xe],Oe[xe]=Mt(A,Oe[xe]);const $e=Oe[0],et=l.convert(A.format,A.colorSpace),Be=l.convert(A.type),mt=P(A.internalFormat,et,Be,A.colorSpace),st=A.isVideoTexture!==!0,Ct=J.__version===void 0||L===!0,V=K.dataReady;let Pe=W(A,$e);re(s.TEXTURE_CUBE_MAP,A);let he;if(ot){st&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,mt,$e.width,$e.height);for(let xe=0;xe<6;xe++){he=Oe[xe].mipmaps;for(let Ie=0;Ie<he.length;Ie++){const ke=he[Ie];A.format!==Zn?et!==null?st?V&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,0,0,ke.width,ke.height,et,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,mt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,0,0,ke.width,ke.height,et,Be,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,mt,ke.width,ke.height,0,et,Be,ke.data)}}}else{if(he=A.mipmaps,st&&Ct){he.length>0&&Pe++;const xe=Qe(Oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,mt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(_e){st?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Oe[xe].width,Oe[xe].height,et,Be,Oe[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,Oe[xe].width,Oe[xe].height,0,et,Be,Oe[xe].data);for(let Ie=0;Ie<he.length;Ie++){const at=he[Ie].image[xe].image;st?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,0,0,at.width,at.height,et,Be,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,mt,at.width,at.height,0,et,Be,at.data)}}else{st?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,et,Be,Oe[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,et,Be,Oe[xe]);for(let Ie=0;Ie<he.length;Ie++){const ke=he[Ie];st?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,0,0,et,Be,ke.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,mt,et,Be,ke.image[xe])}}}y(A)&&x(s.TEXTURE_CUBE_MAP),J.__version=K.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function we(k,A,X,L,K,J){const Te=l.convert(X.format,X.colorSpace),Me=l.convert(X.type),Ne=P(X.internalFormat,Te,Me,X.colorSpace),ot=r.get(A),_e=r.get(X);if(_e.__renderTarget=A,!ot.__hasExternalTextures){const Oe=Math.max(1,A.width>>J),$e=Math.max(1,A.height>>J);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,J,Ne,Oe,$e,A.depth,0,Te,Me,null):t.texImage2D(K,J,Ne,Oe,$e,0,Te,Me,null)}t.bindFramebuffer(s.FRAMEBUFFER,k),dt(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,L,K,_e.__webglTexture,0,ht(A)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,L,K,_e.__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(k,A,X){if(s.bindRenderbuffer(s.RENDERBUFFER,k),A.depthBuffer){const L=A.depthTexture,K=L&&L.isDepthTexture?L.type:null,J=E(A.stencilBuffer,K),Te=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=ht(A);dt(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,J,A.width,A.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,J,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,J,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,k)}else{const L=A.textures;for(let K=0;K<L.length;K++){const J=L[K],Te=l.convert(J.format,J.colorSpace),Me=l.convert(J.type),Ne=P(J.internalFormat,Te,Me,J.colorSpace),ot=ht(A);X&&dt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Ne,A.width,A.height):dt(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,Ne,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(k,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=r.get(A.depthTexture);L.__renderTarget=A,(!L.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),me(A.depthTexture,0);const K=L.__webglTexture,J=ht(A);if(A.depthTexture.format===js)dt(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(A.depthTexture.format===qs)dt(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Fe(k){const A=r.get(k),X=k.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==k.depthTexture){const L=k.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),L){const K=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,L.removeEventListener("dispose",K)};L.addEventListener("dispose",K),A.__depthDisposeCallback=K}A.__boundDepthTexture=L}if(k.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Re(A.__webglFramebuffer,k)}else if(X){A.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[L]),A.__webglDepthbuffer[L]===void 0)A.__webglDepthbuffer[L]=s.createRenderbuffer(),Se(A.__webglDepthbuffer[L],k,!1);else{const K=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=A.__webglDepthbuffer[L];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,J)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Se(A.__webglDepthbuffer,k,!1);else{const L=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,L,s.RENDERBUFFER,K)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(k,A,X){const L=r.get(k);A!==void 0&&we(L.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Fe(k)}function At(k){const A=k.texture,X=r.get(k),L=r.get(A);k.addEventListener("dispose",I);const K=k.textures,J=k.isWebGLCubeRenderTarget===!0,Te=K.length>1;if(Te||(L.__webglTexture===void 0&&(L.__webglTexture=s.createTexture()),L.__version=A.version,f.memory.textures++),J){X.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[Me]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)X.__webglFramebuffer[Me][Ne]=s.createFramebuffer()}else X.__webglFramebuffer[Me]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let Me=0;Me<A.mipmaps.length;Me++)X.__webglFramebuffer[Me]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Te)for(let Me=0,Ne=K.length;Me<Ne;Me++){const ot=r.get(K[Me]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),f.memory.textures++)}if(k.samples>0&&dt(k)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Me=0;Me<K.length;Me++){const Ne=K[Me];X.__webglColorRenderbuffer[Me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Me]);const ot=l.convert(Ne.format,Ne.colorSpace),_e=l.convert(Ne.type),Oe=P(Ne.internalFormat,ot,_e,Ne.colorSpace,k.isXRRenderTarget===!0),$e=ht(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Oe,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,X.__webglColorRenderbuffer[Me])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Se(X.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture),re(s.TEXTURE_CUBE_MAP,A);for(let Me=0;Me<6;Me++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)we(X.__webglFramebuffer[Me][Ne],k,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne);else we(X.__webglFramebuffer[Me],k,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);y(A)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let Me=0,Ne=K.length;Me<Ne;Me++){const ot=K[Me],_e=r.get(ot);t.bindTexture(s.TEXTURE_2D,_e.__webglTexture),re(s.TEXTURE_2D,ot),we(X.__webglFramebuffer,k,ot,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,0),y(ot)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let Me=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Me=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Me,L.__webglTexture),re(Me,A),A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)we(X.__webglFramebuffer[Ne],k,A,s.COLOR_ATTACHMENT0,Me,Ne);else we(X.__webglFramebuffer,k,A,s.COLOR_ATTACHMENT0,Me,0);y(A)&&x(Me),t.unbindTexture()}k.depthBuffer&&Fe(k)}function pt(k){const A=k.textures;for(let X=0,L=A.length;X<L;X++){const K=A[X];if(y(K)){const J=D(k),Te=r.get(K).__webglTexture;t.bindTexture(J,Te),x(J),t.unbindTexture()}}}const Nt=[],Y=[];function nn(k){if(k.samples>0){if(dt(k)===!1){const A=k.textures,X=k.width,L=k.height;let K=s.COLOR_BUFFER_BIT;const J=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=r.get(k),Me=A.length>1;if(Me)for(let Ne=0;Ne<A.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ne=0;Ne<A.length;Ne++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),Me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Ne]);const ot=r.get(A[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,X,L,0,0,X,L,K,s.NEAREST),p===!0&&(Nt.length=0,Y.length=0,Nt.push(s.COLOR_ATTACHMENT0+Ne),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Nt.push(J),Y.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Y)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Me)for(let Ne=0;Ne<A.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Ne]);const ot=r.get(A[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,ot,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&p){const A=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function ht(k){return Math.min(o.maxSamples,k.samples)}function dt(k){const A=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ye(k){const A=f.render.frame;v.get(k)!==A&&(v.set(k,A),k.update())}function Mt(k,A){const X=k.colorSpace,L=k.format,K=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||X!==Zs&&X!==Sr&&(_t.getTransfer(X)===Pt?(L!==Zn||K!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}function Qe(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(m.width=k.naturalWidth||k.width,m.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(m.width=k.displayWidth,m.height=k.displayHeight):(m.width=k.width,m.height=k.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=ae,this.setTexture2D=me,this.setTexture2DArray=ue,this.setTexture3D=pe,this.setTextureCube=j,this.rebindTextures=Ke,this.setupRenderTarget=At,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=dt}function ab(s,e){function t(r,o=Sr){let l;const f=_t.getTransfer(o);if(r===Gi)return s.UNSIGNED_BYTE;if(r===cf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===uf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===v0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===g0)return s.BYTE;if(r===x0)return s.SHORT;if(r===Ga)return s.UNSIGNED_SHORT;if(r===lf)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===_i)return s.FLOAT;if(r===Ks)return s.HALF_FLOAT;if(r===y0)return s.ALPHA;if(r===S0)return s.RGB;if(r===Zn)return s.RGBA;if(r===_0)return s.LUMINANCE;if(r===M0)return s.LUMINANCE_ALPHA;if(r===js)return s.DEPTH_COMPONENT;if(r===qs)return s.DEPTH_STENCIL;if(r===b0)return s.RED;if(r===df)return s.RED_INTEGER;if(r===w0)return s.RG;if(r===ff)return s.RG_INTEGER;if(r===hf)return s.RGBA_INTEGER;if(r===Pl||r===Dl||r===Ll||r===kl)if(f===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Pl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Pl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cd||r===Rd||r===Nd||r===Pd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Cd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dd||r===Ld||r===kd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Dd||r===Ld)return f===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===kd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Id||r===Ud||r===Fd||r===Od||r===zd||r===Bd||r===jd||r===Hd||r===Gd||r===Vd||r===Wd||r===Xd||r===qd||r===Yd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Id)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ud)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Od)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Il||r===Qd||r===Kd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Il)return f===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===E0||r===Zd||r===Jd||r===$d)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Il)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Zd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$d)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class ob extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class El extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lb={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),x=this._getHandJoint(m,T);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],S=v.position.distanceTo(_.position),M=.02,b=.005;m.inputState.pinching&&S>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new El;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const cb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ub=`
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

}`;class db{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Sn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Wi({vertexShader:cb,fragmentShader:ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new Zr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fb extends Js{constructor(e,t){super();const r=this;let o=null,l=1,f=null,d="local-floor",p=1,m=null,v=null,_=null,S=null,M=null,b=null;const T=new db,y=t.getContextAttributes();let x=null,D=null;const P=[],E=[],W=new ct;let z=null;const I=new ui;I.viewport=new jt;const U=new ui;U.viewport=new jt;const N=[I,U],C=new ob;let B=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=P[te];return ge===void 0&&(ge=new ld,P[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=P[te];return ge===void 0&&(ge=new ld,P[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=P[te];return ge===void 0&&(ge=new ld,P[te]=ge),ge.getHandSpace()};function Z(te){const ge=E.indexOf(te.inputSource);if(ge===-1)return;const we=P[ge];we!==void 0&&(we.update(te.inputSource,te.frame,m||f),we.dispatchEvent({type:te.type,data:te.inputSource}))}function fe(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",me);for(let te=0;te<P.length;te++){const ge=E[te];ge!==null&&(E[te]=null,P[te].disconnect(ge))}B=null,ae=null,T.reset(),e.setRenderTarget(x),M=null,S=null,_=null,o=null,D=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",me),y.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(W),o.renderState.layers===void 0){const ge={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ge),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new wr(M.framebufferWidth,M.framebufferHeight,{format:Zn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ge=null,we=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=y.stencil?qs:js,we=y.stencil?Xs:$r);const Re={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:l};_=new XRWebGLBinding(o,t),S=_.createProjectionLayer(Re),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new wr(S.textureWidth,S.textureHeight,{format:Zn,type:Gi,depthTexture:new B0(S.textureWidth,S.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await o.requestReferenceSpace(d),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function me(te){for(let ge=0;ge<te.removed.length;ge++){const we=te.removed[ge],Se=E.indexOf(we);Se>=0&&(E[Se]=null,P[Se].disconnect(we))}for(let ge=0;ge<te.added.length;ge++){const we=te.added[ge];let Se=E.indexOf(we);if(Se===-1){for(let Fe=0;Fe<P.length;Fe++)if(Fe>=E.length){E.push(we),Se=Fe;break}else if(E[Fe]===null){E[Fe]=we,Se=Fe;break}if(Se===-1)break}const Re=P[Se];Re&&Re.connect(we)}}const ue=new de,pe=new de;function j(te,ge,we){ue.setFromMatrixPosition(ge.matrixWorld),pe.setFromMatrixPosition(we.matrixWorld);const Se=ue.distanceTo(pe),Re=ge.projectionMatrix.elements,Fe=we.projectionMatrix.elements,Ke=Re[14]/(Re[10]-1),At=Re[14]/(Re[10]+1),pt=(Re[9]+1)/Re[5],Nt=(Re[9]-1)/Re[5],Y=(Re[8]-1)/Re[0],nn=(Fe[8]+1)/Fe[0],ht=Ke*Y,dt=Ke*nn,Ye=Se/(-Y+nn),Mt=Ye*-Y;if(ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Mt),te.translateZ(Ye),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Re[10]===-1)te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Qe=Ke+Ye,k=At+Ye,A=ht-Mt,X=dt+(Se-Mt),L=pt*At/k*Qe,K=Nt*At/k*Qe;te.projectionMatrix.makePerspective(A,X,L,K,Qe,k),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ee(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let ge=te.near,we=te.far;T.texture!==null&&(T.depthNear>0&&(ge=T.depthNear),T.depthFar>0&&(we=T.depthFar)),C.near=U.near=I.near=ge,C.far=U.far=I.far=we,(B!==C.near||ae!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ae=C.far),I.layers.mask=te.layers.mask|2,U.layers.mask=te.layers.mask|4,C.layers.mask=I.layers.mask|U.layers.mask;const Se=te.parent,Re=C.cameras;ee(C,Se);for(let Fe=0;Fe<Re.length;Fe++)ee(Re[Fe],Se);Re.length===2?j(C,I,U):C.projectionMatrix.copy(I.projectionMatrix),se(te,C,Se)};function se(te,ge,we){we===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ef*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(te){p=te,S!==null&&(S.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let O=null;function re(te,ge){if(v=ge.getViewerPose(m||f),b=ge,v!==null){const we=v.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Se=!1;we.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let Fe=0;Fe<we.length;Fe++){const Ke=we[Fe];let At=null;if(M!==null)At=M.getViewport(Ke);else{const Nt=_.getViewSubImage(S,Ke);At=Nt.viewport,Fe===0&&(e.setRenderTargetTextures(D,Nt.colorTexture,S.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(D))}let pt=N[Fe];pt===void 0&&(pt=new ui,pt.layers.enable(Fe),pt.viewport=new jt,N[Fe]=pt),pt.matrix.fromArray(Ke.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ke.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(At.x,At.y,At.width,At.height),Fe===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(pt)}const Re=o.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Fe=_.getDepthInformation(we[0]);Fe&&Fe.isValid&&Fe.texture&&T.init(e,Fe,o.renderState)}}for(let we=0;we<P.length;we++){const Se=E[we],Re=P[we];Se!==null&&Re!==void 0&&Re.update(Se,ge,m||f)}O&&O(te,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),b=null}const Le=new z0;Le.setAnimationLoop(re),this.setAnimationLoop=function(te){O=te},this.dispose=function(){}}}const Vr=new Vi,hb=new Gt;function pb(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,U0(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,D,P,E){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),v(y,x)):x.isMeshStandardMaterial?(l(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,E)):x.isMeshMatcapMaterial?(l(y,x),b(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),T(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?p(y,x,D,P):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Dn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Dn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),P=D.envMap,E=D.envMapRotation;P&&(y.envMap.value=P,Vr.copy(E),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),y.envMapRotation.value.setFromMatrix4(hb.makeRotationFromEuler(Vr)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,D,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=P*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Dn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function T(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function mb(s,e,t,r){let o={},l={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,P){const E=P.program;r.uniformBlockBinding(D,E)}function m(D,P){let E=o[D.id];E===void 0&&(b(D),E=v(D),o[D.id]=E,D.addEventListener("dispose",y));const W=P.program;r.updateUBOMapping(D,W);const z=e.render.frame;l[D.id]!==z&&(S(D),l[D.id]=z)}function v(D){const P=_();D.__bindingPointIndex=P;const E=s.createBuffer(),W=D.__size,z=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,W,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,E),E}function _(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const P=o[D.id],E=D.uniforms,W=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let z=0,I=E.length;z<I;z++){const U=Array.isArray(E[z])?E[z]:[E[z]];for(let N=0,C=U.length;N<C;N++){const B=U[N];if(M(B,z,N,W)===!0){const ae=B.__offset,Z=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let me=0;me<Z.length;me++){const ue=Z[me],pe=T(ue);typeof ue=="number"||typeof ue=="boolean"?(B.__data[0]=ue,s.bufferSubData(s.UNIFORM_BUFFER,ae+fe,B.__data)):ue.isMatrix3?(B.__data[0]=ue.elements[0],B.__data[1]=ue.elements[1],B.__data[2]=ue.elements[2],B.__data[3]=0,B.__data[4]=ue.elements[3],B.__data[5]=ue.elements[4],B.__data[6]=ue.elements[5],B.__data[7]=0,B.__data[8]=ue.elements[6],B.__data[9]=ue.elements[7],B.__data[10]=ue.elements[8],B.__data[11]=0):(ue.toArray(B.__data,fe),fe+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,P,E,W){const z=D.value,I=P+"_"+E;if(W[I]===void 0)return typeof z=="number"||typeof z=="boolean"?W[I]=z:W[I]=z.clone(),!0;{const U=W[I];if(typeof z=="number"||typeof z=="boolean"){if(U!==z)return W[I]=z,!0}else if(U.equals(z)===!1)return U.copy(z),!0}return!1}function b(D){const P=D.uniforms;let E=0;const W=16;for(let I=0,U=P.length;I<U;I++){const N=Array.isArray(P[I])?P[I]:[P[I]];for(let C=0,B=N.length;C<B;C++){const ae=N[C],Z=Array.isArray(ae.value)?ae.value:[ae.value];for(let fe=0,me=Z.length;fe<me;fe++){const ue=Z[fe],pe=T(ue),j=E%W,ee=j%pe.boundary,se=j+ee;E+=ee,se!==0&&W-se<pe.storage&&(E+=W-se),ae.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=E,E+=pe.storage}}}const z=E%W;return z>0&&(E+=W-z),D.__size=E,D.__cache={},this}function T(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function y(D){const P=D.target;P.removeEventListener("dispose",y);const E=f.indexOf(P.__bindingPointIndex);f.splice(E,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function x(){for(const D in o)s.deleteBuffer(o[D]);f=[],o={},l={}}return{bind:p,update:m,dispose:x}}class gb{constructor(e={}){const{canvas:t=iy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const b=new Uint32Array(4),T=new Int32Array(4);let y=null,x=null;const D=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Mr,this.toneMappingExposure=1;const E=this;let W=!1,z=0,I=0,U=null,N=-1,C=null;const B=new jt,ae=new jt;let Z=null;const fe=new Tt(0);let me=0,ue=t.width,pe=t.height,j=1,ee=null,se=null;const O=new jt(0,0,ue,pe),re=new jt(0,0,ue,pe);let Le=!1;const te=new O0;let ge=!1,we=!1;const Se=new Gt,Re=new Gt,Fe=new de,Ke=new jt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Nt(){return U===null?j:1}let Y=r;function nn(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${of}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ke,!1),Y===null){const q="webgl2";if(Y=nn(q,R),Y===null)throw nn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ht,dt,Ye,Mt,Qe,k,A,X,L,K,J,Te,Me,Ne,ot,_e,Oe,$e,et,Be,mt,st,Ct,V;function Pe(){ht=new __(Y),ht.init(),st=new ab(Y,ht),dt=new p_(Y,ht,e,st),Ye=new ib(Y,ht),dt.reverseDepthBuffer&&S&&Ye.buffers.depth.setReversed(!0),Mt=new w_(Y),Qe=new HM,k=new sb(Y,ht,Ye,Qe,dt,st,Mt),A=new g_(E),X=new S_(E),L=new Ny(Y),Ct=new f_(Y,L),K=new M_(Y,L,Mt,Ct),J=new T_(Y,K,L,Mt),et=new E_(Y,dt,k),_e=new m_(Qe),Te=new jM(E,A,X,ht,dt,Ct,_e),Me=new pb(E,Qe),Ne=new VM,ot=new KM(ht),$e=new d_(E,A,X,Ye,J,M,p),Oe=new tb(E,J,dt),V=new mb(Y,Mt,dt,Ye),Be=new h_(Y,ht,Mt),mt=new b_(Y,ht,Mt),Mt.programs=Te.programs,E.capabilities=dt,E.extensions=ht,E.properties=Qe,E.renderLists=Ne,E.shadowMap=Oe,E.state=Ye,E.info=Mt}Pe();const he=new fb(E,Y);this.xr=he,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(ue,pe,!1))},this.getSize=function(R){return R.set(ue,pe)},this.setSize=function(R,q,le=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=R,pe=q,t.width=Math.floor(R*j),t.height=Math.floor(q*j),le===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(ue*j,pe*j).floor()},this.setDrawingBufferSize=function(R,q,le){ue=R,pe=q,j=le,t.width=Math.floor(R*le),t.height=Math.floor(q*le),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,q,le,ce){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,q,le,ce),Ye.viewport(B.copy(O).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,q,le,ce){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,q,le,ce),Ye.scissor(ae.copy(re).multiplyScalar(j).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(R){Ye.setScissorTest(Le=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(R=!0,q=!0,le=!0){let ce=0;if(R){let Q=!1;if(U!==null){const Ce=U.texture.format;Q=Ce===hf||Ce===ff||Ce===df}if(Q){const Ce=U.texture.type,Ee=Ce===Gi||Ce===$r||Ce===Ga||Ce===Xs||Ce===cf||Ce===uf,Ve=$e.getClearColor(),He=$e.getClearAlpha(),tt=Ve.r,it=Ve.g,We=Ve.b;Ee?(b[0]=tt,b[1]=it,b[2]=We,b[3]=He,Y.clearBufferuiv(Y.COLOR,0,b)):(T[0]=tt,T[1]=it,T[2]=We,T[3]=He,Y.clearBufferiv(Y.COLOR,0,T))}else ce|=Y.COLOR_BUFFER_BIT}q&&(ce|=Y.DEPTH_BUFFER_BIT),le&&(ce|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),Ne.dispose(),ot.dispose(),Qe.dispose(),A.dispose(),X.dispose(),J.dispose(),Ct.dispose(),V.dispose(),Te.dispose(),he.dispose(),he.removeEventListener("sessionstart",ts),he.removeEventListener("sessionend",qi),Mi.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const R=Mt.autoReset,q=Oe.enabled,le=Oe.autoUpdate,ce=Oe.needsUpdate,Q=Oe.type;Pe(),Mt.autoReset=R,Oe.enabled=q,Oe.autoUpdate=le,Oe.needsUpdate=ce,Oe.type=Q}function ke(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const q=R.target;q.removeEventListener("dispose",at),kt(q)}function kt(R){Xt(R),Qe.remove(R)}function Xt(R){const q=Qe.get(R).programs;q!==void 0&&(q.forEach(function(le){Te.releaseProgram(le)}),R.isShaderMaterial&&Te.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,le,ce,Q,Ce){q===null&&(q=At);const Ee=Q.isMesh&&Q.matrixWorld.determinant()<0,Ve=$a(R,q,le,ce,Q);Ye.setMaterial(ce,Ee);let He=le.index,tt=1;if(ce.wireframe===!0){if(He=K.getWireframeAttribute(le),He===void 0)return;tt=2}const it=le.drawRange,We=le.attributes.position;let vt=it.start*tt,Et=(it.start+it.count)*tt;Ce!==null&&(vt=Math.max(vt,Ce.start*tt),Et=Math.min(Et,(Ce.start+Ce.count)*tt)),He!==null?(vt=Math.max(vt,0),Et=Math.min(Et,He.count)):We!=null&&(vt=Math.max(vt,0),Et=Math.min(Et,We.count));const xt=Et-vt;if(xt<0||xt===1/0)return;Ct.setup(Q,ce,Ve,le,He);let on,lt=Be;if(He!==null&&(on=L.get(He),lt=mt,lt.setIndex(on)),Q.isMesh)ce.wireframe===!0?(Ye.setLineWidth(ce.wireframeLinewidth*Nt()),lt.setMode(Y.LINES)):lt.setMode(Y.TRIANGLES);else if(Q.isLine){let qe=ce.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Nt()),Q.isLineSegments?lt.setMode(Y.LINES):Q.isLineLoop?lt.setMode(Y.LINE_LOOP):lt.setMode(Y.LINE_STRIP)}else Q.isPoints?lt.setMode(Y.POINTS):Q.isSprite&&lt.setMode(Y.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)lt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))lt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const qe=Q._multiDrawStarts,$n=Q._multiDrawCounts,bt=Q._multiDrawCount,ln=He?L.get(He).bytesPerElement:1,ei=Qe.get(ce).currentProgram.getUniforms();for(let qt=0;qt<bt;qt++)ei.setValue(Y,"_gl_DrawID",qt),lt.render(qe[qt]/ln,$n[qt])}else if(Q.isInstancedMesh)lt.renderInstances(vt,xt,Q.count);else if(le.isInstancedBufferGeometry){const qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,$n=Math.min(le.instanceCount,qe);lt.renderInstances(vt,xt,$n)}else lt.render(vt,xt)};function yt(R,q,le){R.transparent===!0&&R.side===zi&&R.forceSinglePass===!1?(R.side=Dn,R.needsUpdate=!0,ns(R,q,le),R.side=br,R.needsUpdate=!0,ns(R,q,le),R.side=zi):ns(R,q,le)}this.compile=function(R,q,le=null){le===null&&(le=R),x=ot.get(le),x.init(q),P.push(x),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),R!==le&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const ce=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Ee=0;Ee<Ce.length;Ee++){const Ve=Ce[Ee];yt(Ve,le,Q),ce.add(Ve)}else yt(Ce,le,Q),ce.add(Ce)}),P.pop(),x=null,ce},this.compileAsync=function(R,q,le=null){const ce=this.compile(R,q,le);return new Promise(Q=>{function Ce(){if(ce.forEach(function(Ee){Qe.get(Ee).currentProgram.isReady()&&ce.delete(Ee)}),ce.size===0){Q(R);return}setTimeout(Ce,10)}ht.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let _n=null;function mn(R){_n&&_n(R)}function ts(){Mi.stop()}function qi(){Mi.start()}const Mi=new z0;Mi.setAnimationLoop(mn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){_n=R,he.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},he.addEventListener("sessionstart",ts),he.addEventListener("sessionend",qi),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(q),q=he.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,q,U),x=ot.get(R,P.length),x.init(q),P.push(x),Re.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),te.setFromProjectionMatrix(Re),we=this.localClippingEnabled,ge=_e.init(this.clippingPlanes,we),y=Ne.get(R,D.length),y.init(),D.push(y),he.enabled===!0&&he.isPresenting===!0){const Ce=E.xr.getDepthSensingMesh();Ce!==null&&bi(Ce,q,-1/0,E.sortObjects)}bi(R,q,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(ee,se),pt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,pt&&$e.addToRenderList(y,R),this.info.render.frame++,ge===!0&&_e.beginShadows();const le=x.state.shadowsArray;Oe.render(le,R,q),ge===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=y.opaque,Q=y.transmissive;if(x.setupLights(),q.isArrayCamera){const Ce=q.cameras;if(Q.length>0)for(let Ee=0,Ve=Ce.length;Ee<Ve;Ee++){const He=Ce[Ee];Tr(ce,Q,R,He)}pt&&$e.render(R);for(let Ee=0,Ve=Ce.length;Ee<Ve;Ee++){const He=Ce[Ee];Er(y,R,He,He.viewport)}}else Q.length>0&&Tr(ce,Q,R,q),pt&&$e.render(R),Er(y,R,q);U!==null&&(k.updateMultisampleRenderTarget(U),k.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(E,R,q),Ct.resetDefaultState(),N=-1,C=null,P.pop(),P.length>0?(x=P[P.length-1],ge===!0&&_e.setGlobalState(E.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function bi(R,q,le,ce){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){ce&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const Ee=J.update(R),Ve=R.material;Ve.visible&&y.push(R,Ee,Ve,le,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||te.intersectsObject(R))){const Ee=J.update(R),Ve=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ke.copy(Ee.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(Ve)){const He=Ee.groups;for(let tt=0,it=He.length;tt<it;tt++){const We=He[tt],vt=Ve[We.materialIndex];vt&&vt.visible&&y.push(R,Ee,vt,le,Ke.z,We)}}else Ve.visible&&y.push(R,Ee,Ve,le,Ke.z,null)}}const Ce=R.children;for(let Ee=0,Ve=Ce.length;Ee<Ve;Ee++)bi(Ce[Ee],q,le,ce)}function Er(R,q,le,ce){const Q=R.opaque,Ce=R.transmissive,Ee=R.transparent;x.setupLightsView(le),ge===!0&&_e.setGlobalState(E.clippingPlanes,le),ce&&Ye.viewport(B.copy(ce)),Q.length>0&&Yi(Q,q,le),Ce.length>0&&Yi(Ce,q,le),Ee.length>0&&Yi(Ee,q,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Tr(R,q,le,ce){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ce.id]===void 0&&(x.state.transmissionRenderTarget[ce.id]=new wr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Ks:Gi,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const Ce=x.state.transmissionRenderTarget[ce.id],Ee=ce.viewport||B;Ce.setSize(Ee.z,Ee.w);const Ve=E.getRenderTarget();E.setRenderTarget(Ce),E.getClearColor(fe),me=E.getClearAlpha(),me<1&&E.setClearColor(16777215,.5),E.clear(),pt&&$e.render(le);const He=E.toneMapping;E.toneMapping=Mr;const tt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),x.setupLightsView(ce),ge===!0&&_e.setGlobalState(E.clippingPlanes,ce),Yi(R,le,ce),k.updateMultisampleRenderTarget(Ce),k.updateRenderTargetMipmap(Ce),ht.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,vt=q.length;We<vt;We++){const Et=q[We],xt=Et.object,on=Et.geometry,lt=Et.material,qe=Et.group;if(lt.side===zi&&xt.layers.test(ce.layers)){const $n=lt.side;lt.side=Dn,lt.needsUpdate=!0,Za(xt,le,ce,on,lt,qe),lt.side=$n,lt.needsUpdate=!0,it=!0}}it===!0&&(k.updateMultisampleRenderTarget(Ce),k.updateRenderTargetMipmap(Ce))}E.setRenderTarget(Ve),E.setClearColor(fe,me),tt!==void 0&&(ce.viewport=tt),E.toneMapping=He}function Yi(R,q,le){const ce=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Ce=R.length;Q<Ce;Q++){const Ee=R[Q],Ve=Ee.object,He=Ee.geometry,tt=ce===null?Ee.material:ce,it=Ee.group;Ve.layers.test(le.layers)&&Za(Ve,q,le,He,tt,it)}}function Za(R,q,le,ce,Q,Ce){R.onBeforeRender(E,q,le,ce,Q,Ce),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(E,q,le,ce,R,Ce),Q.transparent===!0&&Q.side===zi&&Q.forceSinglePass===!1?(Q.side=Dn,Q.needsUpdate=!0,E.renderBufferDirect(le,q,ce,Q,R,Ce),Q.side=br,Q.needsUpdate=!0,E.renderBufferDirect(le,q,ce,Q,R,Ce),Q.side=zi):E.renderBufferDirect(le,q,ce,Q,R,Ce),R.onAfterRender(E,q,le,ce,Q,Ce)}function ns(R,q,le){q.isScene!==!0&&(q=At);const ce=Qe.get(R),Q=x.state.lights,Ce=x.state.shadowsArray,Ee=Q.state.version,Ve=Te.getParameters(R,Q.state,Ce,q,le),He=Te.getProgramCacheKey(Ve);let tt=ce.programs;ce.environment=R.isMeshStandardMaterial?q.environment:null,ce.fog=q.fog,ce.envMap=(R.isMeshStandardMaterial?X:A).get(R.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",at),tt=new Map,ce.programs=tt);let it=tt.get(He);if(it!==void 0){if(ce.currentProgram===it&&ce.lightsStateVersion===Ee)return pi(R,Ve),it}else Ve.uniforms=Te.getUniforms(R),R.onBeforeCompile(Ve,E),it=Te.acquireProgram(Ve,He),tt.set(He,it),ce.uniforms=Ve.uniforms;const We=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=_e.uniform),pi(R,Ve),ce.needsLights=ql(R),ce.lightsStateVersion=Ee,ce.needsLights&&(We.ambientLightColor.value=Q.state.ambient,We.lightProbe.value=Q.state.probe,We.directionalLights.value=Q.state.directional,We.directionalLightShadows.value=Q.state.directionalShadow,We.spotLights.value=Q.state.spot,We.spotLightShadows.value=Q.state.spotShadow,We.rectAreaLights.value=Q.state.rectArea,We.ltc_1.value=Q.state.rectAreaLTC1,We.ltc_2.value=Q.state.rectAreaLTC2,We.pointLights.value=Q.state.point,We.pointLightShadows.value=Q.state.pointShadow,We.hemisphereLights.value=Q.state.hemi,We.directionalShadowMap.value=Q.state.directionalShadowMap,We.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,We.spotShadowMap.value=Q.state.spotShadowMap,We.spotLightMatrix.value=Q.state.spotLightMatrix,We.spotLightMap.value=Q.state.spotLightMap,We.pointShadowMap.value=Q.state.pointShadowMap,We.pointShadowMatrix.value=Q.state.pointShadowMatrix),ce.currentProgram=it,ce.uniformsList=null,it}function Ja(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Ul.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function pi(R,q){const le=Qe.get(R);le.outputColorSpace=q.outputColorSpace,le.batching=q.batching,le.batchingColor=q.batchingColor,le.instancing=q.instancing,le.instancingColor=q.instancingColor,le.instancingMorph=q.instancingMorph,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function $a(R,q,le,ce,Q){q.isScene!==!0&&(q=At),k.resetTextureUnits();const Ce=q.fog,Ee=ce.isMeshStandardMaterial?q.environment:null,Ve=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Zs,He=(ce.isMeshStandardMaterial?X:A).get(ce.envMap||Ee),tt=ce.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,it=!!le.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),We=!!le.morphAttributes.position,vt=!!le.morphAttributes.normal,Et=!!le.morphAttributes.color;let xt=Mr;ce.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(xt=E.toneMapping);const on=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,lt=on!==void 0?on.length:0,qe=Qe.get(ce),$n=x.state.lights;if(ge===!0&&(we===!0||R!==C)){const gn=R===C&&ce.id===N;_e.setState(ce,R,gn)}let bt=!1;ce.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==$n.state.version||qe.outputColorSpace!==Ve||Q.isBatchedMesh&&qe.batching===!1||!Q.isBatchedMesh&&qe.batching===!0||Q.isBatchedMesh&&qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&qe.instancing===!1||!Q.isInstancedMesh&&qe.instancing===!0||Q.isSkinnedMesh&&qe.skinning===!1||!Q.isSkinnedMesh&&qe.skinning===!0||Q.isInstancedMesh&&qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&qe.instancingMorph===!1&&Q.morphTexture!==null||qe.envMap!==He||ce.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==_e.numPlanes||qe.numIntersection!==_e.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==it||qe.morphTargets!==We||qe.morphNormals!==vt||qe.morphColors!==Et||qe.toneMapping!==xt||qe.morphTargetsCount!==lt)&&(bt=!0):(bt=!0,qe.__version=ce.version);let ln=qe.currentProgram;bt===!0&&(ln=ns(ce,q,Q));let ei=!1,qt=!1,mi=!1;const Dt=ln.getUniforms(),jn=qe.uniforms;if(Ye.useProgram(ln.program)&&(ei=!0,qt=!0,mi=!0),ce.id!==N&&(N=ce.id,qt=!0),ei||C!==R){Ye.buffers.depth.getReversed()?(Se.copy(R.projectionMatrix),sy(Se),ay(Se),Dt.setValue(Y,"projectionMatrix",Se)):Dt.setValue(Y,"projectionMatrix",R.projectionMatrix),Dt.setValue(Y,"viewMatrix",R.matrixWorldInverse);const Hn=Dt.map.cameraPosition;Hn!==void 0&&Hn.setValue(Y,Fe.setFromMatrixPosition(R.matrixWorld)),dt.logarithmicDepthBuffer&&Dt.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Dt.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,qt=!0,mi=!0)}if(Q.isSkinnedMesh){Dt.setOptional(Y,Q,"bindMatrix"),Dt.setOptional(Y,Q,"bindMatrixInverse");const gn=Q.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Dt.setValue(Y,"boneTexture",gn.boneTexture,k))}Q.isBatchedMesh&&(Dt.setOptional(Y,Q,"batchingTexture"),Dt.setValue(Y,"batchingTexture",Q._matricesTexture,k),Dt.setOptional(Y,Q,"batchingIdTexture"),Dt.setValue(Y,"batchingIdTexture",Q._indirectTexture,k),Dt.setOptional(Y,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Dt.setValue(Y,"batchingColorTexture",Q._colorsTexture,k));const wi=le.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&et.update(Q,le,ln),(qt||qe.receiveShadow!==Q.receiveShadow)&&(qe.receiveShadow=Q.receiveShadow,Dt.setValue(Y,"receiveShadow",Q.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(jn.envMap.value=He,jn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&q.environment!==null&&(jn.envMapIntensity.value=q.environmentIntensity),qt&&(Dt.setValue(Y,"toneMappingExposure",E.toneMappingExposure),qe.needsLights&&eo(jn,mi),Ce&&ce.fog===!0&&Me.refreshFogUniforms(jn,Ce),Me.refreshMaterialUniforms(jn,ce,j,pe,x.state.transmissionRenderTarget[R.id]),Ul.upload(Y,Ja(qe),jn,k)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Ul.upload(Y,Ja(qe),jn,k),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Dt.setValue(Y,"center",Q.center),Dt.setValue(Y,"modelViewMatrix",Q.modelViewMatrix),Dt.setValue(Y,"normalMatrix",Q.normalMatrix),Dt.setValue(Y,"modelMatrix",Q.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const gn=ce.uniformsGroups;for(let Hn=0,Mn=gn.length;Hn<Mn;Hn++){const to=gn[Hn];V.update(to,ln),V.bind(to,ln)}}return ln}function eo(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ql(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,q,le){Qe.get(R.texture).__webglTexture=q,Qe.get(R.depthTexture).__webglTexture=le;const ce=Qe.get(R);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=le===void 0,ce.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const le=Qe.get(R);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,le=0){U=R,z=q,I=le;let ce=!0,Q=null,Ce=!1,Ee=!1;if(R){const He=Qe.get(R);if(He.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(Y.FRAMEBUFFER,null),ce=!1;else if(He.__webglFramebuffer===void 0)k.setupRenderTarget(R);else if(He.__hasExternalTextures)k.rebindTextures(R,Qe.get(R.texture).__webglTexture,Qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&Qe.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ee=!0);const it=Qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[q])?Q=it[q][le]:Q=it[q],Ce=!0):R.samples>0&&k.useMultisampledRTT(R)===!1?Q=Qe.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?Q=it[le]:Q=it,B.copy(R.viewport),ae.copy(R.scissor),Z=R.scissorTest}else B.copy(O).multiplyScalar(j).floor(),ae.copy(re).multiplyScalar(j).floor(),Z=Le;if(Ye.bindFramebuffer(Y.FRAMEBUFFER,Q)&&ce&&Ye.drawBuffers(R,Q),Ye.viewport(B),Ye.scissor(ae),Ye.setScissorTest(Z),Ce){const He=Qe.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,le)}else if(Ee){const He=Qe.get(R.texture),tt=q||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,He.__webglTexture,le||0,tt)}N=-1},this.readRenderTargetPixels=function(R,q,le,ce,Q,Ce,Ee){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ve=Ve[Ee]),Ve){Ye.bindFramebuffer(Y.FRAMEBUFFER,Ve);try{const He=R.texture,tt=He.format,it=He.type;if(!dt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ce&&le>=0&&le<=R.height-Q&&Y.readPixels(q,le,ce,Q,st.convert(tt),st.convert(it),Ce)}finally{const He=U!==null?Qe.get(U).__webglFramebuffer:null;Ye.bindFramebuffer(Y.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,q,le,ce,Q,Ce,Ee){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ve=Ve[Ee]),Ve){const He=R.texture,tt=He.format,it=He.type;if(!dt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-ce&&le>=0&&le<=R.height-Q){Ye.bindFramebuffer(Y.FRAMEBUFFER,Ve);const We=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,We),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ce.byteLength,Y.STREAM_READ),Y.readPixels(q,le,ce,Q,st.convert(tt),st.convert(it),0);const vt=U!==null?Qe.get(U).__webglFramebuffer:null;Ye.bindFramebuffer(Y.FRAMEBUFFER,vt);const Et=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await ry(Y,Et,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,We),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ce),Y.deleteBuffer(We),Y.deleteSync(Et),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,le=0){R.isTexture!==!0&&(za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const ce=Math.pow(2,-le),Q=Math.floor(R.image.width*ce),Ce=Math.floor(R.image.height*ce),Ee=q!==null?q.x:0,Ve=q!==null?q.y:0;k.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,le,0,0,Ee,Ve,Q,Ce),Ye.unbindTexture()},this.copyTextureToTexture=function(R,q,le=null,ce=null,Q=0){R.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,R=arguments[1],q=arguments[2],Q=arguments[3]||0,le=null);let Ce,Ee,Ve,He,tt,it,We,vt,Et;const xt=R.isCompressedTexture?R.mipmaps[Q]:R.image;le!==null?(Ce=le.max.x-le.min.x,Ee=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,He=le.min.x,tt=le.min.y,it=le.isBox3?le.min.z:0):(Ce=xt.width,Ee=xt.height,Ve=xt.depth||1,He=0,tt=0,it=0),ce!==null?(We=ce.x,vt=ce.y,Et=ce.z):(We=0,vt=0,Et=0);const on=st.convert(q.format),lt=st.convert(q.type);let qe;q.isData3DTexture?(k.setTexture3D(q,0),qe=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(k.setTexture2DArray(q,0),qe=Y.TEXTURE_2D_ARRAY):(k.setTexture2D(q,0),qe=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const $n=Y.getParameter(Y.UNPACK_ROW_LENGTH),bt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),ln=Y.getParameter(Y.UNPACK_SKIP_PIXELS),ei=Y.getParameter(Y.UNPACK_SKIP_ROWS),qt=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,xt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,xt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,He),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,tt),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,it);const mi=R.isDataArrayTexture||R.isData3DTexture,Dt=q.isDataArrayTexture||q.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const jn=Qe.get(R),wi=Qe.get(q),gn=Qe.get(jn.__renderTarget),Hn=Qe.get(wi.__renderTarget);Ye.bindFramebuffer(Y.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ye.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Mn=0;Mn<Ve;Mn++)mi&&Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Qe.get(R).__webglTexture,Q,it+Mn),R.isDepthTexture?(Dt&&Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Qe.get(q).__webglTexture,Q,Et+Mn),Y.blitFramebuffer(He,tt,Ce,Ee,We,vt,Ce,Ee,Y.DEPTH_BUFFER_BIT,Y.NEAREST)):Dt?Y.copyTexSubImage3D(qe,Q,We,vt,Et+Mn,He,tt,Ce,Ee):Y.copyTexSubImage2D(qe,Q,We,vt,Et+Mn,He,tt,Ce,Ee);Ye.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Dt?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(qe,Q,We,vt,Et,Ce,Ee,Ve,on,lt,xt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(qe,Q,We,vt,Et,Ce,Ee,Ve,on,xt.data):Y.texSubImage3D(qe,Q,We,vt,Et,Ce,Ee,Ve,on,lt,xt):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Q,We,vt,Ce,Ee,on,lt,xt.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Q,We,vt,xt.width,xt.height,on,xt.data):Y.texSubImage2D(Y.TEXTURE_2D,Q,We,vt,Ce,Ee,on,lt,xt);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,$n),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,bt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,ln),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,ei),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,qt),Q===0&&q.generateMipmaps&&Y.generateMipmap(qe),Ye.unbindTexture()},this.copyTextureToTexture3D=function(R,q,le=null,ce=null,Q=0){return R.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ce=arguments[1]||null,R=arguments[2],q=arguments[3],Q=arguments[4]||0),za('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,le,ce,Q)},this.initRenderTarget=function(R){Qe.get(R).__webglFramebuffer===void 0&&k.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?k.setTextureCube(R,0):R.isData3DTexture?k.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?k.setTexture2DArray(R,0):k.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){z=0,I=0,U=null,Ye.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}class Ym extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xb extends Sn{constructor(e=null,t=1,r=1,o,l,f,d,p,m=Bn,v=Bn,_,S){super(null,f,d,p,m,v,o,l,_,S),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vb extends Qa{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jl=new de,Hl=new de,Qm=new Gt,Fa=new N0,Tl=new Wl,cd=new de,Km=new de;class yb extends Ln{constructor(e=new Xi,t=new vb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)jl.fromBufferAttribute(t,o-1),Hl.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=jl.distanceTo(Hl);e.setAttribute("lineDistance",new Hi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(o),Tl.radius+=l,e.ray.intersectsSphere(Tl)===!1)return;Qm.copy(o).invert(),Fa.copy(e.ray).applyMatrix4(Qm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=r.index,S=r.attributes.position;if(v!==null){const M=Math.max(0,f.start),b=Math.min(v.count,f.start+f.count);for(let T=M,y=b-1;T<y;T+=m){const x=v.getX(T),D=v.getX(T+1),P=Al(this,e,Fa,p,x,D);P&&t.push(P)}if(this.isLineLoop){const T=v.getX(b-1),y=v.getX(M),x=Al(this,e,Fa,p,T,y);x&&t.push(x)}}else{const M=Math.max(0,f.start),b=Math.min(S.count,f.start+f.count);for(let T=M,y=b-1;T<y;T+=m){const x=Al(this,e,Fa,p,T,T+1);x&&t.push(x)}if(this.isLineLoop){const T=Al(this,e,Fa,p,b-1,M);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=o.length;l<f;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Al(s,e,t,r,o,l){const f=s.geometry.attributes.position;if(jl.fromBufferAttribute(f,o),Hl.fromBufferAttribute(f,l),t.distanceSqToSegment(jl,Hl,cd,Km)>r)return;cd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(cd);if(!(p<e.near||p>e.far))return{distance:p,point:Km.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Zm=new de,Jm=new de;class Sb extends yb{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Zm.fromBufferAttribute(t,o),Jm.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Zm.distanceTo(Jm);e.setAttribute("lineDistance",new Hi(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cl extends Wi{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class _b{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$m(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$m();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $m(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=of);function W0({mouseForce:s=20,cursorSize:e=100,isViscous:t=!1,viscous:r=30,iterationsViscous:o=32,iterationsPoisson:l=32,dt:f=.014,BFECC:d=!0,resolution:p=.5,isBounce:m=!1,colors:v=["#5227FF","#FF9FFC","#B497CF"],style:_={},className:S="",autoDemo:M=!0,autoSpeed:b=.5,autoIntensity:T=2.2,takeoverDuration:y=.25,autoResumeDelay:x=1e3,autoRampDuration:D=.6}){const P=ie.useRef(null),E=ie.useRef(null),W=ie.useRef(null),z=ie.useRef(null),I=ie.useRef(null),U=ie.useRef(!0),N=ie.useRef(null);return ie.useEffect(()=>{if(!P.current)return;function C(X){let L;Array.isArray(X)&&X.length>0?X.length===1?L=[X[0],X[0]]:L=X:L=["#ffffff","#ffffff"];const K=L.length,J=new Uint8Array(K*4);for(let Me=0;Me<K;Me++){const Ne=new Tt(L[Me]);J[Me*4+0]=Math.round(Ne.r*255),J[Me*4+1]=Math.round(Ne.g*255),J[Me*4+2]=Math.round(Ne.b*255),J[Me*4+3]=255}const Te=new xb(J,K,1,Zn);return Te.magFilter=Pn,Te.minFilter=Pn,Te.wrapS=fi,Te.wrapT=fi,Te.generateMipmaps=!1,Te.needsUpdate=!0,Te}const B=C(v),ae=new jt(0,0,0,0);class Z{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(L){this.container=L,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new gb({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Tt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new _b,this.clock.start()}resize(){if(!this.container)return;const L=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(L.width)),this.height=Math.max(1,Math.floor(L.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const fe=new Z;class me{constructor(){this.mouseMoved=!1,this.coords=new ct,this.coords_old=new ct,this.diff=new ct,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ct,this.takeoverTo=new ct,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(L){this.container=L,this.docTarget=L.ownerDocument||null;const K=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);K&&(this.listenerTarget=K,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(L,K){if(!this.container)return!1;const J=this.container.getBoundingClientRect();return J.width===0||J.height===0?!1:L>=J.left&&L<=J.right&&K>=J.top&&K<=J.bottom}updateHoverState(L,K){return this.isHoverInside=this.isPointInside(L,K),this.isHoverInside}setCoords(L,K){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const J=this.container.getBoundingClientRect();if(J.width===0||J.height===0)return;const Te=(L-J.left)/J.width,Me=(K-J.top)/J.height;this.coords.set(Te*2-1,-(Me*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(L,K){this.coords.set(L,K),this.mouseMoved=!0}onDocumentMouseMove(L){if(this.updateHoverState(L.clientX,L.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const K=this.container.getBoundingClientRect();if(K.width===0||K.height===0)return;const J=(L.clientX-K.left)/K.width,Te=(L.clientY-K.top)/K.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(J*2-1,-(Te*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(L.clientX,L.clientY),this.hasUserControl=!0}}onDocumentTouchStart(L){if(L.touches.length!==1)return;const K=L.touches[0];this.updateHoverState(K.clientX,K.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(K.clientX,K.clientY),this.hasUserControl=!0)}onDocumentTouchMove(L){if(L.touches.length!==1)return;const K=L.touches[0];this.updateHoverState(K.clientX,K.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(K.clientX,K.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const L=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(L>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const K=L*L*(3-2*L);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,K)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const ue=new me;class pe{constructor(L,K,J){this.mouse=L,this.manager=K,this.enabled=J.enabled,this.speed=J.speed,this.resumeDelay=J.resumeDelay||3e3,this.rampDurationMs=(J.rampDuration||0)*1e3,this.active=!1,this.current=new ct(0,0),this.target=new ct,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ct,this.pickNewTarget()}pickNewTarget(){const L=Math.random;this.target.set((L()*2-1)*(1-this.margin),(L()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const L=performance.now();if(L-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=L,this.activationTime=L),!this.active)return;this.mouse.isAutoActive=!0;let J=(L-this.lastTime)/1e3;this.lastTime=L,J>.2&&(J=.016);const Te=this._tmpDir.subVectors(this.target,this.current),Me=Te.length();if(Me<.01){this.pickNewTarget();return}Te.normalize();let Ne=1;if(this.rampDurationMs>0){const Oe=Math.min(1,(L-this.activationTime)/this.rampDurationMs);Ne=Oe*Oe*(3-2*Oe)}const ot=this.speed*J*Ne,_e=Math.min(ot,Me);this.current.addScaledVector(Te,_e),this.mouse.setNormalized(this.current.x,this.current.y)}}const j=`
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
`,O=`
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
`,Le=`
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
`,te=`
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
`;class Re{constructor(L){var K;this.props=L||{},this.uniforms=(K=this.props.material)==null?void 0:K.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Ym,this.camera=new Bl,this.uniforms&&(this.material=new Cl(this.props.material),this.geometry=new Zr(2,2),this.plane=new Jn(this.geometry,this.material),this.scene.add(this.plane))}update(){fe.renderer.setRenderTarget(this.props.output||null),fe.renderer.render(this.scene,this.camera),fe.renderer.setRenderTarget(null)}}class Fe extends Re{constructor(L){super({material:{vertexShader:j,fragmentShader:O,uniforms:{boundarySpace:{value:L.cellScale},px:{value:L.cellScale},fboSize:{value:L.fboSize},velocity:{value:L.src.texture},dt:{value:L.dt},isBFECC:{value:!0}}},output:L.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const L=new Xi,K=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);L.setAttribute("position",new hi(K,3));const J=new Cl({vertexShader:ee,fragmentShader:O,uniforms:this.uniforms});this.line=new Sb(L,J),this.scene.add(this.line)}update({dt:L,isBounce:K,BFECC:J}){this.uniforms.dt.value=L,this.line.visible=K,this.uniforms.isBFECC.value=J,super.update()}}class Ke extends Re{constructor(L){super({output:L.dst}),this.init(L)}init(L){super.init();const K=new Zr(1,1),J=new Cl({vertexShader:se,fragmentShader:te,blending:pd,depthWrite:!1,uniforms:{px:{value:L.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(L.cursor_size,L.cursor_size)}}});this.mouse=new Jn(K,J),this.scene.add(this.mouse)}update(L){const K=ue.diff.x/2*L.mouse_force,J=ue.diff.y/2*L.mouse_force,Te=L.cursor_size*L.cellScale.x,Me=L.cursor_size*L.cellScale.y,Ne=Math.min(Math.max(ue.coords.x,-1+Te+L.cellScale.x*2),1-Te-L.cellScale.x*2),ot=Math.min(Math.max(ue.coords.y,-1+Me+L.cellScale.y*2),1-Me-L.cellScale.y*2),_e=this.mouse.material.uniforms;_e.force.value.set(K,J),_e.center.value.set(Ne,ot),_e.scale.value.set(L.cursor_size,L.cursor_size),super.update()}}class At extends Re{constructor(L){super({material:{vertexShader:j,fragmentShader:Se,uniforms:{boundarySpace:{value:L.boundarySpace},velocity:{value:L.src.texture},velocity_new:{value:L.dst_.texture},v:{value:L.viscous},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst,output0:L.dst_,output1:L.dst}),this.init()}update({viscous:L,iterations:K,dt:J}){let Te,Me;this.uniforms.v.value=L;for(let Ne=0;Ne<K;Ne++)Ne%2===0?(Te=this.props.output0,Me=this.props.output1):(Te=this.props.output1,Me=this.props.output0),this.uniforms.velocity_new.value=Te.texture,this.props.output=Me,this.uniforms.dt.value=J,super.update();return Me}}class pt extends Re{constructor(L){super({material:{vertexShader:j,fragmentShader:Le,uniforms:{boundarySpace:{value:L.boundarySpace},velocity:{value:L.src.texture},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst}),this.init()}update({vel:L}){this.uniforms.velocity.value=L.texture,super.update()}}class Nt extends Re{constructor(L){super({material:{vertexShader:j,fragmentShader:ge,uniforms:{boundarySpace:{value:L.boundarySpace},pressure:{value:L.dst_.texture},divergence:{value:L.src.texture},px:{value:L.cellScale}}},output:L.dst,output0:L.dst_,output1:L.dst}),this.init()}update({iterations:L}){let K,J;for(let Te=0;Te<L;Te++)Te%2===0?(K=this.props.output0,J=this.props.output1):(K=this.props.output1,J=this.props.output0),this.uniforms.pressure.value=K.texture,this.props.output=J,super.update();return J}}class Y extends Re{constructor(L){super({material:{vertexShader:j,fragmentShader:we,uniforms:{boundarySpace:{value:L.boundarySpace},pressure:{value:L.src_p.texture},velocity:{value:L.src_v.texture},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst}),this.init()}update({vel:L,pressure:K}){this.uniforms.velocity.value=L.texture,this.uniforms.pressure.value=K.texture,super.update()}}class nn{constructor(L){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...L},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ct,this.cellScale=new ct,this.boundarySpace=new ct,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ks:_i}createAllFBO(){const K={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Pn,magFilter:Pn,wrapS:fi,wrapT:fi};for(let J in this.fbos)this.fbos[J]=new wr(this.fboSize.x,this.fboSize.y,K)}createShaderPass(){this.advection=new Fe({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ke({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new At({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Nt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Y({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const L=Math.max(1,Math.round(this.options.resolution*fe.width)),K=Math.max(1,Math.round(this.options.resolution*fe.height)),J=1/L,Te=1/K;this.cellScale.set(J,Te),this.fboSize.set(L,K)}resize(){this.calcSize();for(let L in this.fbos)this.fbos[L].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let L=this.fbos.vel_1;this.options.isViscous&&(L=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:L});const K=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:L,pressure:K})}}class ht{constructor(){this.init()}init(){this.simulation=new nn,this.scene=new Ym,this.camera=new Bl,this.output=new Jn(new Zr(2,2),new Cl({vertexShader:j,fragmentShader:re,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:B},bgColor:{value:ae}}})),this.scene.add(this.output)}addScene(L){this.scene.add(L)}resize(){this.simulation.resize()}render(){fe.renderer.setRenderTarget(null),fe.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class dt{constructor(L){this.props=L,fe.init(L.$wrapper),ue.init(L.$wrapper),ue.autoIntensity=L.autoIntensity,ue.takeoverDuration=L.takeoverDuration,this.lastUserInteraction=performance.now(),ue.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new pe(ue,this,{enabled:L.autoDemo,speed:L.autoSpeed,resumeDelay:L.autoResumeDelay,rampDuration:L.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():U.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(fe.renderer.domElement),this.output=new ht}resize(){fe.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),ue.update(),fe.update(),this.output.update()}loop(){this.running&&(this.render(),z.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,z.current&&(cancelAnimationFrame(z.current),z.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),ue.dispose(),fe.renderer){const L=fe.renderer.domElement;L&&L.parentNode&&L.parentNode.removeChild(L),fe.renderer.dispose(),fe.renderer.forceContextLoss()}}catch{}}}const Ye=P.current;Ye.style.overflow="hidden";const Mt=new dt({$wrapper:Ye,autoDemo:M,autoSpeed:b,autoIntensity:T,takeoverDuration:y,autoResumeDelay:x,autoRampDuration:D});E.current=Mt,(()=>{var K;if(!E.current)return;const X=(K=E.current.output)==null?void 0:K.simulation;if(!X)return;const L=X.options.resolution;Object.assign(X.options,{mouse_force:s,cursor_size:e,isViscous:t,viscous:r,iterations_viscous:o,iterations_poisson:l,dt:f,BFECC:d,resolution:p,isBounce:m}),p!==L&&X.resize()})(),Mt.start();const k=new IntersectionObserver(X=>{const L=X[0],K=L.isIntersecting&&L.intersectionRatio>0;U.current=K,E.current&&(K&&!document.hidden?E.current.start():E.current.pause())},{threshold:[0,.01,.1]});k.observe(Ye),I.current=k;const A=new ResizeObserver(()=>{E.current&&(N.current&&cancelAnimationFrame(N.current),N.current=requestAnimationFrame(()=>{E.current&&E.current.resize()}))});return A.observe(Ye),W.current=A,()=>{if(z.current&&cancelAnimationFrame(z.current),W.current)try{W.current.disconnect()}catch{}if(I.current)try{I.current.disconnect()}catch{}E.current&&E.current.dispose(),E.current=null}},[d,e,f,m,t,l,o,s,p,r,v,M,b,T,y,x,D]),ie.useEffect(()=>{var Z;const C=E.current;if(!C)return;const B=(Z=C.output)==null?void 0:Z.simulation;if(!B)return;const ae=B.options.resolution;Object.assign(B.options,{mouse_force:s,cursor_size:e,isViscous:t,viscous:r,iterations_viscous:o,iterations_poisson:l,dt:f,BFECC:d,resolution:p,isBounce:m}),C.autoDriver&&(C.autoDriver.enabled=M,C.autoDriver.speed=b,C.autoDriver.resumeDelay=x,C.autoDriver.rampDurationMs=D*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=T,C.autoDriver.mouse.takeoverDuration=y)),p!==ae&&B.resize()},[s,e,t,r,o,l,f,d,p,m,M,b,T,y,x,D]),u.jsx("div",{ref:P,className:`absolute inset-0 w-full h-full overflow-hidden pointer-events-none touch-none ${S||""}`,style:{zIndex:0,..._}})}function Mb(){const s=ie.useRef(null),e=ie.useRef({x:-999,y:-999});return ie.useEffect(()=>{const t=s.current,r=t.getContext("2d");let o=0,l=0,f=0,d=[];const p=()=>{o=t.offsetWidth,l=t.offsetHeight,t.width=o*devicePixelRatio,t.height=l*devicePixelRatio,r.scale(devicePixelRatio,devicePixelRatio);const b=Math.floor(o*l/9e3);d=Array.from({length:Math.min(b,110)},()=>({x:Math.random()*o,y:Math.random()*l,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:Math.random()*1.6+.4,opacity:Math.random()*.6+.2}))},m=140,v=()=>{r.clearRect(0,0,o,l),d.forEach(b=>{b.x+=b.vx,b.y+=b.vy,(b.x<0||b.x>o)&&(b.vx*=-1),(b.y<0||b.y>l)&&(b.vy*=-1);const T=b.x-e.current.x,y=b.y-e.current.y,x=Math.sqrt(T*T+y*y);if(x<100){const P=(100-x)/100;b.x+=T*P*.025,b.y+=y*P*.025}const D=x<80;r.beginPath(),r.arc(b.x,b.y,D?b.r*2:b.r,0,Math.PI*2),r.fillStyle=D?`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${b.opacity*1.8})`:`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${b.opacity*.6})`,r.fill()});for(let b=0;b<d.length;b++)for(let T=b+1;T<d.length;T++){const y=d[b].x-d[T].x,x=d[b].y-d[T].y,D=Math.sqrt(y*y+x*x);if(D<m){const P=(1-D/m)*.25;r.beginPath(),r.moveTo(d[b].x,d[b].y),r.lineTo(d[T].x,d[T].y),r.strokeStyle=`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${P})`,r.lineWidth=.7,r.stroke()}}d.forEach(b=>{const T=b.x-e.current.x,y=b.y-e.current.y,x=Math.sqrt(T*T+y*y);if(x<130){const D=(1-x/130)*.5;r.beginPath(),r.moveTo(b.x,b.y),r.lineTo(e.current.x,e.current.y),r.strokeStyle=`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${D})`,r.lineWidth=.6,r.stroke()}}),f=requestAnimationFrame(v)};p(),v();const _=b=>{const T=t.getBoundingClientRect();e.current={x:b.clientX-T.left,y:b.clientY-T.top}},S=()=>{e.current={x:-999,y:-999}};window.addEventListener("mousemove",_),t.addEventListener("mouseleave",S);const M=new ResizeObserver(p);return M.observe(t),()=>{cancelAnimationFrame(f),window.removeEventListener("mousemove",_),t.removeEventListener("mouseleave",S),M.disconnect()}},[]),u.jsx("canvas",{ref:s,className:"absolute inset-0 w-full h-full pointer-events-none z-5"})}function bb({words:s}){const[e,t]=ie.useState(0),[r,o]=ie.useState(""),[l,f]=ie.useState(!1);return ie.useEffect(()=>{const d=s[e%s.length];if(!l&&r===d){const v=setTimeout(()=>f(!0),2e3);return()=>clearTimeout(v)}if(l&&r===""){f(!1),t(v=>v+1);return}const m=setTimeout(()=>{o(l?d.slice(0,r.length-1):d.slice(0,r.length+1))},l?50:90);return()=>clearTimeout(m)},[r,l,e,s]),u.jsxs("span",{style:{color:"rgb(var(--c1))"},children:[r,u.jsx("span",{className:"animate-pulse",style:{color:"rgb(var(--c1))",marginLeft:2},children:"|"})]})}function wb({target:s,suffix:e=""}){const[t,r]=ie.useState(0),o=ie.useRef(null);return ie.useEffect(()=>{const l=new IntersectionObserver(([f])=>{if(f.isIntersecting){let d=0;const p=s/60,m=setInterval(()=>{d=Math.min(d+p,s),r(Math.floor(d)),d>=s&&clearInterval(m)},20);l.disconnect()}},{threshold:.5});return o.current&&l.observe(o.current),()=>l.disconnect()},[s]),u.jsxs("span",{ref:o,children:[t,e]})}function Eb(){const s=ie.useRef(null),[e,t]=ie.useState(0),[r,o]=ie.useState(!1),[l,f]=ie.useState(!1),[d,p]=ie.useState({}),[m,v]=ie.useState(!1),_=P=>{const E=P.replace("#",""),W=parseInt(E.substring(0,2),16),z=parseInt(E.substring(2,4),16),I=parseInt(E.substring(4,6),16);return`${W}, ${z}, ${I}`};ie.useEffect(()=>{const E=()=>v(window.innerWidth<=640);return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]);const S=[{img:"/assets/images/banner1.png",label:"Design Systems",accent:"#7c6ff7",accentBg:"rgba(124,111,247,0.12)",accentBorder:"rgba(124,111,247,0.28)",Icon:l0},{img:"/assets/images/banner2.png",label:"团队分享会-设计赋能",accent:"#FE952C",accentBg:"rgba(254, 149, 44, 0.12)",accentBorder:"rgba(254, 149, 44, 0.30)",Icon:Bv},{img:"/assets/images/banner3.png",label:"设计复盘",accent:"#456CFF",accentBg:"rgba(69, 108, 255, 0.12)",accentBorder:"rgba(69, 108, 255, 0.30)",Icon:yv},{img:"/assets/images/banner4.png",label:"设计扩展",accent:"#f472b6",accentBg:"rgba(244,114,182,0.12)",accentBorder:"rgba(244,114,182,0.28)",Icon:d0},{img:"/assets/images/banner5.png",label:"设计获奖",accent:"#FFEB12",accentBg:"rgba(255,235,18,0.12)",accentBorder:"rgba(255,235,18,0.28)",Icon:Jv}],M=(P,E=!1)=>{if(P!==e){if(E){t(P),f(!1);return}l||(f(!0),setTimeout(()=>{t(P),f(!1)},350))}};ie.useEffect(()=>{if(r)return;const P=setInterval(()=>{f(!0),setTimeout(()=>{t(E=>(E+1)%S.length),f(!1)},320)},3800);return()=>clearInterval(P)},[r,S.length]);const b=P=>{const E=s.current.getBoundingClientRect(),W=P.clientX-E.left,z=P.clientY-E.top,I=W/E.width-.5,U=z/E.height-.5;s.current.style.transform=`perspective(900px) rotateY(${I*12}deg) rotateX(${-U*10}deg) scale3d(1.02,1.02,1.02)`,s.current.style.setProperty("--mouse-x",`${W}px`),s.current.style.setProperty("--mouse-y",`${z}px`);const N=Math.sqrt(I*I+U*U),C=Math.min(1,Math.max(0,N*2));s.current.style.setProperty("--glow-opacity",`${.4+C*.6}`);const B=200+N*550;s.current.style.setProperty("--border-glow-radius",`${B}px`)},T=()=>{s.current.style.transform="perspective(900px) rotateY(0) rotateX(0) scale3d(1,1,1)",o(!1),s.current.style.setProperty("--mouse-x","-999px"),s.current.style.setProperty("--mouse-y","-999px"),s.current.style.setProperty("--glow-opacity","0"),s.current.style.setProperty("--border-glow-radius","260px")},y=S[e],x=y.Icon,D=m?"16/9":"16/10";return u.jsxs("div",{ref:s,onMouseMove:b,onMouseEnter:()=>o(!0),onMouseLeave:T,className:"relative rounded-2xl cursor-pointer w-full !min-w-0",style:{transition:"transform 0.15s ease-out, background 0.4s ease",transformStyle:"preserve-3d","--accent-rgb":_(y.accent),background:`

        linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02)) padding-box, 
        radial-gradient(circle var(--border-glow-radius, 260px) at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(var(--accent-rgb), 1) 0%, rgba(var(--accent-rgb), 0.4) 50%, transparent 100%) border-box
      `,border:"2px solid transparent",boxShadow:"0 30px 80px rgba(0,0,0,0.5)",maxWidth:"800px",margin:"0 auto",aspectRatio:D,isolation:"isolate"},children:[u.jsx("div",{className:"absolute pointer-events-none",style:{inset:"-20px",borderRadius:"36px",background:"radial-gradient(circle 60px at calc(var(--mouse-x, -999px) + 20px) calc(var(--mouse-y, -999px) + 20px), rgba(var(--accent-rgb), calc(var(--glow-opacity, 0) * 0.85)), transparent 100%)",zIndex:-1,mixBlendMode:"screen",filter:"blur(6px)"}}),u.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-[14px]",style:{transform:"translateZ(0)",willChange:"transform",WebkitMaskImage:"-webkit-radial-gradient(white, black)"},children:[S.map((P,E)=>u.jsx("div",{className:"absolute inset-0 w-full h-full rounded-[14px] overflow-hidden",style:{opacity:E===e?l?0:1:0,transition:l?"opacity 0.3s ease":"none",transform:"translateZ(0)"},children:d[E]?u.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-8 rounded-[14px]",style:{background:`linear-gradient(135deg, ${P.accent}18 0%, #05050a 100%)`},children:[u.jsx("p",{className:"text-sm text-center",style:{color:"rgba(255,255,255,0.5)"},children:"图片加载失败"}),u.jsx("p",{className:"text-xs text-center mt-2",style:{color:"rgba(255,255,255,0.35)"},children:"请换个 WiFi 或使用自己的热点"})]}):u.jsx("img",{src:P.img,alt:P.label,className:"absolute inset-0 w-full h-full object-cover rounded-[14px]",onError:()=>p(W=>({...W,[E]:!0}))})},E)),u.jsx("div",{className:"absolute inset-0 z-10 cursor-pointer rounded-[14px]",onClick:P=>{const E=P.currentTarget.getBoundingClientRect(),z=P.clientX-E.left<E.width/2?(e-1+S.length)%S.length:(e+1)%S.length;M(z,!0)},style:{background:"linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(var(--accent-rgb),0.04) 100%)"}}),!m&&u.jsx("div",{className:"absolute top-0 left-0 right-0 z-20 flex items-center gap-2 px-4 py-3",style:{background:"rgba(0,0,0,0.28)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderBottom:"1px solid rgba(255,255,255,0.07)"},children:["#ff5f56","#ffbd2e","#27c93f"].map(P=>u.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:P,opacity:.85}},P))}),u.jsxs("div",{className:`absolute bottom-0 left-0 right-0 z-20 flex items-center ${m?"justify-center":"justify-between"} px-3.5 py-2.5`,style:{background:"rgba(0,0,0,0.28)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderTop:"1px solid rgba(255,255,255,0.07)"},children:[!m&&u.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg",style:{background:y.accentBg,border:`1px solid ${y.accentBorder}`,transition:"background 0.4s, border 0.4s"},children:[u.jsx(x,{size:12,style:{color:y.accent}}),u.jsx("span",{className:"text-xs",style:{color:y.accent,fontWeight:600},children:y.label})]}),u.jsx("div",{className:"flex items-center gap-2",children:S.map((P,E)=>u.jsx("button",{onClick:()=>M(E),className:"relative overflow-hidden",style:{width:E===e?26:6,height:6,borderRadius:9999,background:E===e?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.3)",border:"none",padding:0,transition:"width 0.3s ease, background 0.3s ease",cursor:"pointer",position:"relative"},children:E===e&&u.jsx("span",{className:"absolute inset-0 rounded-full",style:{background:y.accent,width:"0%",animation:"progressFlow 3.2s linear forwards",height:"100%",left:0,top:0}})},E))})]})]})]})}function Tb(){const[s,e]=ie.useState(!1),t=()=>{const r=document.createElement("a");r.href="https://raw.githubusercontent.com/quweijia/file/main/1%E3%80%81UI%20%E4%B8%BB%E7%AE%A1-%E6%9B%B2%E7%BB%B4%E7%94%B2-15662796885.pdf",r.download="曲维甲-UI主管-简历.pdf",r.target="_blank",r.rel="noopener noreferrer",document.body.appendChild(r),r.click(),document.body.removeChild(r)};return u.jsxs("section",{id:"hero",className:"relative flex items-center overflow-visible md:overflow-hidden",style:{background:"radial-gradient(ellipse 100% 80% at 60% 10%, rgba(0,240,200,0.05) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(124,111,247,0.06) 0%, transparent 60%), #05050a",minHeight:"calc(100vh / var(--screen-scale))"},children:[u.jsx(W0,{colors:["#00f0c8","#7c6ff7","#ff9ffc"],mouseForce:25,cursorSize:120,resolution:.5,autoDemo:!0,autoSpeed:.3,autoIntensity:1.5}),u.jsx(Mb,{}),u.jsx("div",{className:"absolute left-0 right-0 h-px pointer-events-none z-10 opacity-30",style:{top:"35%",background:"linear-gradient(90deg,transparent,rgba(0,240,200,0.4),transparent)",animation:"scanline 6s ease-in-out infinite"}}),u.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.025]",style:{backgroundImage:"linear-gradient(rgba(0,240,200,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,200,1) 1px,transparent 1px)",backgroundSize:"60px 60px"}}),u.jsxs("div",{className:"relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full",style:{paddingTop:"calc(6rem / var(--screen-scale))",paddingBottom:"calc(4rem / var(--screen-scale))"},children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-0 items-center",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full",style:{background:"rgba(0,240,200,0.06)",border:"1px solid rgba(0,240,200,0.18)"},children:[u.jsx("span",{className:"w-2 h-2 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 8px rgb(var(--c1))"}}),u.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgb(var(--c1))",letterSpacing:"0.16em",fontWeight:500},children:"LOOKING FOR GOOD JOB · 期待您的联系"})]}),u.jsxs("h1",{className:"mb-4",style:{fontSize:"clamp(3.2rem, 7vw, 5.5rem)",fontWeight:800,lineHeight:1.2,letterSpacing:"-0.03em",color:"#f0f4f8"},children:["Vic Qu",u.jsx("br",{}),u.jsx("span",{style:{background:"linear-gradient(135deg, rgb(var(--c1)) 0%, rgb(var(--c2)) 25%, rgb(var(--c3)) 50%, rgb(var(--c2)) 75%, rgb(var(--c1)) 100%)",backgroundSize:"200% 200%",backgroundRepeat:"no-repeat",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline",animation:"flowGradient 6s ease infinite"},children:"Full-Stack"}),u.jsx("br",{}),u.jsx("span",{style:{color:"rgba(255,255,255,0.15)",WebkitTextStroke:"1px rgba(255,255,255,0.2)"},children:"Designer"})]}),u.jsxs("p",{className:"mb-6",style:{fontSize:"1.0625rem",color:"rgba(255,255,255,0.5)",lineHeight:1.7,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"clip"},children:["ENFJ · 全栈设计师 · 专注"," ",u.jsx(bb,{words:["UI/UX Design","Design Systems","AI Design Workflow","Information Visualization","Full-Stack Implementation","Collaboration Enablement"]}),u.jsx("br",{}),"AI 能力深度融入设计全链路"]}),u.jsx("div",{className:"flex gap-3 overflow-x-auto pb-2 mb-10 flex-nowrap",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:[{icon:u.jsx(l0,{size:11}),label:"原子组件规范落地"},{icon:u.jsx(_v,{size:11}),label:"响应式设计"},{icon:u.jsx(a1,{size:11}),label:"AI 设计赋能 "}].map(r=>u.jsxs("span",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm flex-shrink-0",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.5)"},children:[u.jsx("span",{style:{color:"rgb(var(--c1))"},children:r.icon}),r.label]},r.label))}),u.jsxs("div",{className:"hidden md:flex flex-wrap items-center gap-4",children:[u.jsx("div",{className:"btn-wrapper",children:u.jsxs("button",{onClick:()=>{var r;return(r=document.getElementById("portfolio"))==null?void 0:r.scrollIntoView({behavior:"smooth"})},className:"btn",children:[u.jsx("svg",{className:"btn-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"})}),u.jsxs("div",{className:"txt-wrapper",children:[u.jsxs("div",{className:"txt-1 pl-[0px] pr-[12px] py-[0px]",style:{color:"rgba(var(--c1)",opacity:1,visibility:"visible",fontSize:"16px",lineHeight:"1.5",display:"block",position:"relative",zIndex:10},children:[u.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"查"}),u.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"看"}),u.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"作"}),u.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"品"})]}),u.jsxs("div",{className:"txt-2",children:[u.jsx("span",{className:"btn-letter",children:"查"}),u.jsx("span",{className:"btn-letter",children:"看"}),u.jsx("span",{className:"btn-letter",children:"作"}),u.jsx("span",{className:"btn-letter",children:"品"})]})]})]})}),u.jsxs("button",{onClick:()=>e(!0),className:"group flex items-center gap-2 px-6 py-2 rounded-3xl text-base transition-all duration-300 hover:scale-[1.02]",style:{border:"1px solid rgba(var(--c1),0.3)",color:"rgba(255,255,255,0.65)",background:"rgba(var(--c1),0.15)",boxShadow:"0 0 25px rgba(var(--c1),0.15), 0 5px 15px rgba(0,0,0,0.3)"},onMouseEnter:r=>{r.currentTarget.style.borderColor="rgba(var(--c1),0.5)",r.currentTarget.style.background="rgba(var(--c1),0.25)"},onMouseLeave:r=>{r.currentTarget.style.borderColor="rgba(var(--c1),0.3)",r.currentTarget.style.background="rgba(var(--c1),0.15)"},children:[u.jsx(hd,{size:14,className:"group-hover:animate-bounce group-hover:translate-y-0.5 transition-transform duration-300",style:{color:"rgb(var(--c1))"}}),u.jsx("span",{className:"transition-colors duration-300",style:{color:"rgb(var(--c1))"},children:"简历 PDF"})]})]})]}),u.jsxs("div",{className:"mt-[0px] md:mt-0",children:[u.jsx("div",{className:"absolute -z-10 w-96 h-96 rounded-full",style:{background:"radial-gradient(circle,rgba(0,240,200,0.08) 0%,transparent 70%)",filter:"blur(50px)",right:0,top:"50%",transform:"translateY(-50%)"}}),u.jsx(Eb,{})]})]}),u.jsx("div",{className:"flex mt-12 mb-0 overflow-x-auto scrollbar-hide gap-[24px] w-screen relative left-1/2 -translate-x-1/2 pl-0 pr-6 md:static md:w-full md:translate-x-0 md:mx-0 md:max-w-none md:flex-wrap md:justify-between md:gap-y-12 md:overflow-x-visible",children:[{v:10,s:"+",label:"年设计经验"},{v:60,s:"+",label:"上线产品"},{v:5,s:"+",label:"企业级设计系统"},{v:50,s:"+",label:"可视化大屏"},{v:12,s:"+",label:"图标库"},{v:32,s:"+",label:"团队赋能"}].map(r=>u.jsxs("div",{className:"shrink-0 w-[120px] text-center md:w-auto",children:[u.jsx("div",{style:{fontSize:"2rem",fontWeight:800,color:"#f0f4f8",lineHeight:1},children:u.jsx(wb,{target:r.v,suffix:r.s})}),u.jsx("div",{className:"text-sm mt-1",style:{color:"rgba(255,255,255,0.6)",letterSpacing:"0.06em"},children:r.label})]},r.label))})]}),u.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-24 pointer-events-none",style:{background:"linear-gradient(transparent,#05050a)"}}),u.jsx(f0,{isOpen:s,onClose:()=>e(!1),onConfirm:t}),u.jsx("style",{children:`
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
      `})]})}const es=new IntersectionObserver(s=>{s.forEach(e=>{var t,r;e.isIntersecting&&((r=(t=e.target).__onVisible)==null||r.call(t),es.unobserve(e.target))})},{threshold:.1});function Ab(s=.08){const e=ie.useRef(null),[t,r]=ie.useState(!1);return ie.useEffect(()=>{const o=e.current;if(o)return o.__onVisible=()=>r(!0),es.observe(o),()=>es.unobserve(o)},[]),{ref:e,vis:t}}function Cb({pct:s,color:e,delay:t=0,light:r=!1}){const[o,l]=ie.useState(0),f=ie.useRef(null),[d,p]=ie.useState(!1);return ie.useEffect(()=>{const m=f.current;if(m)return m.__onVisible=()=>{setTimeout(()=>l(s),t),setTimeout(()=>p(!0),t+800)},es.observe(m),()=>es.unobserve(m)},[s,t]),u.jsxs("div",{ref:f,className:"relative h-[6px] rounded-full",style:{background:r?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.06)",willChange:"auto"},children:[u.jsx("div",{className:"absolute inset-y-0 left-0 rounded-full",style:{width:`${o}%`,transition:`width 0.8s cubic-bezier(0.4,0,0.2,1) ${t}ms`,background:`linear-gradient(90deg,${e}60,${e})`,boxShadow:d&&!r?`0 0 8px ${e}80, 0 0 4px ${e}`:"none",willChange:"width",transform:"translateZ(0)"}}),u.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none",style:{left:`${o}%`,width:12,height:12,borderRadius:"50%",background:e,boxShadow:d?`0 0 0 3px ${e}30, 0 0 14px 4px ${e}90, 0 0 28px 8px ${e}40`:"none",transition:`left 0.8s cubic-bezier(0.4,0,0.2,1) ${t}ms`,opacity:d?1:0,willChange:"left, opacity",transform:"translateZ(0)"}})]})}function Rb({num:s,cat:e,sub:t,pct:r,color:o,tools:l,idx:f}){const[d,p]=ie.useState(!1),[m,v]=ie.useState(0),_=ie.useRef(null),S=ie.useRef(0);return ie.useEffect(()=>{const M=_.current;if(M)return M.__onVisible=()=>{const b=f*60,T=800;setTimeout(()=>{let y=0;const x=performance.now(),D=P=>{const E=P-x,W=Math.min(E/T,1),z=1-Math.pow(1-W,3);y=Math.round(r*z),v(y),W<1&&(S.current=requestAnimationFrame(D))};S.current=requestAnimationFrame(D)},b),setTimeout(()=>p(!0),b+T)},es.observe(M),()=>{es.unobserve(M),cancelAnimationFrame(S.current)}},[r,f]),u.jsx("div",{ref:_,className:"relative py-7 transition-all duration-300",style:{borderTop:"0px solid rgba(255,255,255,0.07)",willChange:"auto"},children:u.jsxs("div",{className:"relative flex flex-wrap items-start gap-0 lg:gap-0",children:[u.jsx("div",{className:"shrink-0 w-8 hidden md:block",style:{paddingTop:3},children:u.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:`${o}80`,letterSpacing:"0.12em",fontVariantNumeric:"tabular-nums"},children:s})}),u.jsxs("div",{className:"shrink-0",style:{width:180},children:[u.jsx("p",{style:{fontSize:"0.9375rem",fontWeight:700,color:"#f0f4f8",lineHeight:1.2},children:e}),u.jsx("p",{className:"mt-1",style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.3)",letterSpacing:"0.04em"},children:t})]}),u.jsxs("div",{className:"flex-1 flex flex-col gap-3 mt-2 min-w-[300px]",children:[u.jsxs("div",{className:"flex items-center gap-5",children:[u.jsx("div",{className:"flex-1",children:u.jsx(Cb,{pct:r,color:o,delay:f*120})}),u.jsx("span",{style:{fontSize:"1.0625rem",fontWeight:800,color:d?o:"rgba(255,255,255,0.45)",transition:"color 0.6s ease-out",minWidth:38,textAlign:"right",fontVariantNumeric:"tabular-nums",willChange:"color"},children:m})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5",style:{opacity:d?1:.4,transition:"opacity 0.6s ease-out",willChange:"opacity"},children:l.map(M=>u.jsx("span",{className:"px-2.5 py-1 rounded text-xs",style:{background:d?`${o}10`:"rgba(255,255,255,0.04)",border:`1px solid ${d?`${o}22`:"rgba(255,255,255,0.06)"}`,color:d?o:"rgba(255,255,255,0.3)",transition:"all 0.1s ease-out"},children:M},M))})]})]})})}function Nb(){const{ref:s,vis:e}=Ab(.04),{theme:t}=Qs(),r=[{num:"01",cat:"UI / UX Design",sub:u.jsxs(u.Fragment,{children:["交互设计",u.jsx("br",{}),"原子组件设计规范"]}),pct:96,color:t.cyan,tools:["Figma","Principle","PPT Design","Master Go","Sketch","Protopie","Hype 4","Framer"]},{num:"02",cat:"AI Design Workflow",sub:u.jsxs(u.Fragment,{children:["提示生成",u.jsx("br",{}),"自动化"]}),pct:90,color:t.purple,tools:["Open Claw","Figma MCP","Pencil","Vibma","Stitch","Stable Diffusion","Comfy-UI"]},{num:"03",cat:"Visual & Motion",sub:u.jsxs(u.Fragment,{children:["动效设计",u.jsx("br",{}),"Logo"]}),pct:86,color:t.pink,tools:["After Effects","Lotties","Rive","Spline","Blender"]},{num:"04",cat:"Front-End Prototyping",sub:u.jsxs(u.Fragment,{children:["产品元件库",u.jsx("br",{}),"原型 Demo",u.jsx("br",{}),"Swift UI"]}),pct:82,color:"#34d399",tools:["Axure","Amap GIS","Draw.io","Xcode","TRAE","Cursor"]},{num:"05",cat:"Presentation Event",sub:u.jsxs(u.Fragment,{children:["发布会 PPT",u.jsx("br",{}),"设计分享会",u.jsx("br",{}),"专利"]}),pct:80,color:"#fb923c",tools:["PowerPoint","Keynote","Launch Design","Power BI","Patent"]}];return u.jsxs("section",{id:"skills",ref:s,className:"relative overflow-hidden",style:{background:"var(--bg)",padding:"80px 0 0px"},children:[u.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(80px,16vw,200px)",fontWeight:900,lineHeight:1,color:"rgba(255,255,255,0.08)",letterSpacing:"0.05em"},children:"SKILLS"}),u.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 px-[40px] py-[0px]",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[32px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)",willChange:"opacity, transform"},children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[u.jsx("span",{className:"text-xm tracking-widest",style:{color:t.cyan,letterSpacing:"0.2em",fontWeight:600},children:"CAPABILITIES"}),u.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${t.cyan}33,transparent)`}})]}),u.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:"#f0f4f8",lineHeight:1.05,letterSpacing:"-0.04em"},children:"技能全景"})]}),u.jsx("div",{className:"lg:max-w-xs",children:u.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(255,255,255,0.32)",lineHeight:1.85},children:["10 年全栈设计积累",u.jsx("br",{}),"设计工具 × AI 能力 × 技术深度",u.jsx("br",{}),"三维协同，驱动端到端设计交付"]})})]}),u.jsxs("div",{className:"mb-20",children:[r.map((o,l)=>u.jsx("div",{className:o.cat==="Front-End Prototyping"||o.cat==="Presentation Event"?"hidden md:block":"",children:u.jsx(Rb,{...o,idx:l})},o.num)),u.jsx("div",{style:{borderTop:"0px solid rgba(255,255,255,0.07)"}})]})]})]})}function Pb({onItemClick:s}){const e=ie.useRef(null),[t,r]=ie.useState(0),o=336,l=ie.useCallback(()=>{if(e.current){const{scrollLeft:d}=e.current,p=Math.round(d/o);p!==t&&p>=0&&p<Fl.length&&r(p)}},[o,t]);ie.useEffect(()=>{const d=e.current;return d&&(d.addEventListener("scroll",l),l()),()=>{d&&d.removeEventListener("scroll",l)}},[l]);const f=ie.useCallback(d=>{e.current&&e.current.scrollTo({left:d*o,behavior:"smooth"})},[o]);return u.jsxs("div",{className:"relative -mx-6 lg:-mx-10",children:[u.jsx("div",{ref:e,className:"flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 snap-x snap-mandatory",style:{scrollBehavior:"smooth"},children:Fl.map((d,p)=>u.jsx("div",{className:"shrink-0 w-[85vw] max-w-[320px] snap-center",style:{opacity:p===t?1:.7,transition:"opacity 0.3s ease"},children:u.jsxs("div",{className:"relative rounded-2xl overflow-hidden cursor-pointer",style:{background:"white",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 4px 24px rgba(0,0,0,0.06)"},onClick:()=>s(d),children:[u.jsxs("div",{className:"relative overflow-hidden aspect-video",style:{background:d.bg},children:[u.jsx("img",{src:d.images[0],alt:d.name,className:"absolute inset-0 w-full h-full object-cover",style:{opacity:.95}}),u.jsx("div",{className:"hidden absolute top-3 left-3",children:u.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(255,255,255,0.85)",border:`1px solid ${d.color}22`,color:d.color,backdropFilter:"blur(8px)",fontWeight:600},children:d.idx})})]}),u.jsxs("div",{className:"p-4 py-6 md:py-4",children:[u.jsxs("div",{className:"flex items-start justify-between gap-2 mb-2",children:[u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"0.9375rem",fontWeight:800,color:"#0c0b18",lineHeight:1.3},children:d.name}),u.jsx("p",{className:"text-xs mt-0.5",style:{color:d.color,fontWeight:600,opacity:.8},children:d.role})]}),u.jsx("span",{className:"hidden shrink-0 w-7 h-7 rounded-lg flex items-center justify-center",style:{background:`${d.color}10`,border:`1px solid ${d.color}20`},children:u.jsx(rf,{size:12,style:{color:d.color}})})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5 mb-3",children:d.tags.map(m=>u.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:`${d.color}0e`,border:`1px solid ${d.color}20`,color:d.color,fontWeight:500},children:m},m))}),u.jsx("p",{className:"text-xs mb-3 line-clamp-3",style:{color:"rgba(12,11,24,0.5)",lineHeight:1.7},children:d.desc}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:d.metrics.slice(0,4).map(m=>u.jsxs("div",{className:"rounded-lg p-2.5",style:{background:`${d.color}08`,border:`1px solid ${d.color}12`},children:[u.jsxs("div",{className:"flex items-baseline gap-0.5",children:[u.jsx("span",{style:{fontSize:"1.125rem",fontWeight:900,color:"#0c0b18",lineHeight:1},children:m.value}),m.unit&&u.jsx("span",{style:{fontSize:"0.625rem",fontWeight:700,color:d.color},children:m.unit})]}),u.jsx("p",{className:"mt-1",style:{fontSize:"0.625rem",color:"rgba(12,11,24,0.35)",lineHeight:1.3},children:m.label})]},m.label))}),u.jsxs("div",{className:"mt-3 rounded-lg p-3",style:{background:`${d.color}08`,border:`1px solid ${d.color}14`},children:[u.jsxs("div",{className:"flex items-center gap-1.5",style:{color:d.color},children:[u.jsx(Va,{size:10}),u.jsx("span",{className:"text-[10px] tracking-wider font-semibold",children:"AI APPLICATION"})]}),u.jsx("p",{className:"text-xs mt-1.5 line-clamp-2",style:{color:"rgba(12,11,24,0.45)",lineHeight:1.6},children:d.aiNote})]})]})]})},d.idx))}),u.jsx("div",{className:"flex justify-center gap-1.5 mt-4",children:Fl.map((d,p)=>u.jsx("button",{onClick:()=>f(p),className:"transition-all duration-300 rounded-full",style:{height:"4px",width:p===t?24:8,background:p===t?"rgba(12,11,24,0.5)":"rgba(12,11,24,0.15)"}},p))})]})}function X0(s=0){const e=ie.useRef(null),[t,r]=ie.useState(!1);return ie.useEffect(()=>{const o=new IntersectionObserver(([l])=>{l.isIntersecting&&(setTimeout(()=>r(!0),s),o.disconnect())},{threshold:.06});return e.current&&o.observe(e.current),()=>o.disconnect()},[s]),{ref:e,vis:t}}function q0({steps:s,color:e}){return u.jsx("div",{className:"flex flex-wrap items-center gap-1",children:s.map((t,r)=>u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("span",{className:"px-2.5 py-1 rounded text-xs",style:{background:`${e}10`,border:`1px solid ${e}18`,color:e,fontWeight:500},children:t}),r<s.length-1&&u.jsx(ov,{size:10,style:{color:"rgba(0,0,0,0.2)"}})]},t))})}function Y0({value:s,unit:e,label:t,color:r}){return u.jsxs("div",{className:"rounded-2xl p-4 flex flex-col gap-1",style:{background:"white",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 2px 12px rgba(0,0,0,0.05)"},children:[u.jsxs("div",{className:"flex items-baseline gap-0.5",children:[u.jsx("span",{style:{fontSize:"1.75rem",fontWeight:900,color:"#0c0b18",lineHeight:1},children:s}),e&&u.jsx("span",{style:{fontSize:"0.875rem",fontWeight:700,color:r},children:e})]}),u.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(12,11,24,0.38)",letterSpacing:"0.06em",lineHeight:1.4},children:t})]})}function Q0({type:s,color:e}){return s==="city"?u.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsx("defs",{children:u.jsxs("radialGradient",{id:"cv1",cx:"60%",cy:"40%",r:"60%",children:[u.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),u.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),u.jsx("rect",{width:"320",height:"200",fill:"url(#cv1)"}),[30,70,110,150,190,230,270,310].map(t=>u.jsx("line",{x1:t,y1:"0",x2:t,y2:"200",stroke:e,strokeOpacity:"0.07",strokeWidth:"1"},t)),[25,55,85,115,145,175].map(t=>u.jsx("line",{x1:"0",y1:t,x2:"320",y2:t,stroke:e,strokeOpacity:"0.07",strokeWidth:"1"},t)),u.jsx("path",{d:"M20 170 C60 130 110 110 160 100 S240 70 300 40",fill:"none",stroke:e,strokeWidth:"2.5",strokeOpacity:"0.7",strokeDasharray:"7 4"}),[[20,170],[160,100],[300,40]].map(([t,r],o)=>u.jsxs("g",{children:[u.jsx("circle",{cx:t,cy:r,r:"14",fill:e,fillOpacity:"0.08",stroke:e,strokeOpacity:"0.35",strokeWidth:"1.5"}),u.jsx("circle",{cx:t,cy:r,r:"4",fill:e})]},o)),u.jsx("rect",{x:"190",y:"48",width:"44",height:"76",rx:"8",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5"}),[56,64,72,80,88,96,104].map(t=>u.jsx("rect",{x:"196",y:t,width:t===56?30:22,height:"4",rx:"2",fill:e,fillOpacity:"0.12"},t))]}):s==="chart"?u.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsx("defs",{children:u.jsxs("radialGradient",{id:"cv2",cx:"40%",cy:"30%",r:"60%",children:[u.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),u.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),u.jsx("rect",{width:"320",height:"200",fill:"url(#cv2)"}),[20,60,100,140,180,220,260,300].map(t=>u.jsx("line",{x1:t,y1:"0",x2:t,y2:"200",stroke:e,strokeOpacity:"0.06",strokeWidth:"1"},t)),[20,60,100,140,180].map(t=>u.jsx("line",{x1:"0",y1:t,x2:"320",y2:t,stroke:e,strokeOpacity:"0.06",strokeWidth:"1"},t)),u.jsxs("g",{children:[u.jsx("rect",{x:"30",y:"30",width:"80",height:"36",rx:"8",fill:e,fillOpacity:"0.25",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),u.jsx("rect",{x:"36",y:"42",width:"40",height:"3",rx:"1.5",fill:e,fillOpacity:"0.8"}),u.jsx("rect",{x:"30",y:"85",width:"70",height:"32",rx:"6",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),u.jsx("rect",{x:"36",y:"95",width:"35",height:"2.5",rx:"1.25",fill:e,fillOpacity:"0.6"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"135",y:"30",width:"100",height:"80",rx:"12",fill:"none",stroke:e,strokeOpacity:"0.35",strokeWidth:"1.5"}),u.jsx("rect",{x:"135",y:"30",width:"100",height:"28",rx:"12",fill:e,fillOpacity:"0.15"}),u.jsx("circle",{cx:"150",cy:"44",r:"4",fill:e,fillOpacity:"0.7"}),u.jsx("circle",{cx:"162",cy:"44",r:"4",fill:e,fillOpacity:"0.4"}),u.jsx("circle",{cx:"174",cy:"44",r:"4",fill:e,fillOpacity:"0.25"}),u.jsx("rect",{x:"142",y:"68",width:"50",height:"3",rx:"1.5",fill:e,fillOpacity:"0.5"}),u.jsx("rect",{x:"142",y:"78",width:"70",height:"3",rx:"1.5",fill:e,fillOpacity:"0.3"}),u.jsx("rect",{x:"142",y:"88",width:"60",height:"3",rx:"1.5",fill:e,fillOpacity:"0.3"})]}),u.jsxs("g",{children:[u.jsx("circle",{cx:"260",cy:"45",r:"8",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),u.jsx("circle",{cx:"260",cy:"75",r:"12",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),u.jsx("circle",{cx:"260",cy:"110",r:"16",fill:"none",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5"}),u.jsx("rect",{x:"245",y:"135",width:"30",height:"30",rx:"6",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),u.jsx("rect",{x:"250",y:"140",width:"20",height:"20",rx:"4",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),u.jsx("rect",{x:"255",y:"145",width:"10",height:"10",rx:"2",fill:e,fillOpacity:"0.4"})]}),u.jsx("path",{d:"M115 48 L135 48",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5",strokeDasharray:"4 3"}),u.jsx("path",{d:"M235 70 L245 70",fill:"none",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5",strokeDasharray:"4 3"}),u.jsx("path",{d:"M185 110 L245 110",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5",strokeDasharray:"4 3"}),[[55,170],[160,175],[270,165]].map(([t,r],o)=>u.jsxs("g",{children:[u.jsx("circle",{cx:t,cy:r,r:"10",fill:e,fillOpacity:"0.08",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5"}),u.jsx("circle",{cx:t,cy:r,r:"3",fill:e,fillOpacity:"0.7"})]},o))]}):u.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsx("defs",{children:u.jsxs("radialGradient",{id:"cv3",cx:"50%",cy:"50%",r:"60%",children:[u.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),u.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),u.jsx("rect",{width:"320",height:"200",fill:"url(#cv3)"}),u.jsx("rect",{x:"16",y:"16",width:"288",height:"28",rx:"6",fill:e,fillOpacity:"0.1",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("rect",{x:"30",y:"24",width:"80",height:"12",rx:"3",fill:e,fillOpacity:"0.5"}),u.jsx("rect",{x:"240",y:"24",width:"50",height:"12",rx:"3",fill:e,fillOpacity:"0.3"}),u.jsxs("g",{children:[u.jsxs("g",{children:[u.jsx("rect",{x:"16",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("rect",{x:"28",y:"95",width:"12",height:"12",rx:"2",fill:e,fillOpacity:"0.35"}),u.jsx("rect",{x:"44",y:"82",width:"12",height:"25",rx:"2",fill:e,fillOpacity:"0.45"}),u.jsx("rect",{x:"60",y:"68",width:"12",height:"39",rx:"2",fill:e,fillOpacity:"0.55"}),u.jsx("rect",{x:"76",y:"58",width:"12",height:"49",rx:"2",fill:e,fillOpacity:"0.65"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"115",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("circle",{cx:"160",cy:"82",r:"22",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5"}),u.jsx("circle",{cx:"160",cy:"82",r:"16",fill:"none",stroke:e,strokeOpacity:"0.35",strokeWidth:"2",strokeDasharray:"60 40"}),u.jsx("circle",{cx:"160",cy:"82",r:"5",fill:e,fillOpacity:"0.7"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"214",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("path",{d:"M228 100 L242 88 L256 92 L270 72 L284 76 L298 58",fill:"none",stroke:e,strokeOpacity:"0.6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),[[228,100],[242,88],[256,92],[270,72],[284,76],[298,58]].map(([t,r],o)=>u.jsx("circle",{cx:t,cy:r,r:"3",fill:e,fillOpacity:"0.75"},o))]}),u.jsxs("g",{children:[u.jsx("rect",{x:"16",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("rect",{x:"30",y:"135",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),u.jsx("rect",{x:"30",y:"135",width:"45",height:"6",rx:"3",fill:e,fillOpacity:"0.6"}),u.jsx("rect",{x:"30",y:"150",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),u.jsx("rect",{x:"30",y:"150",width:"52",height:"6",rx:"3",fill:e,fillOpacity:"0.5"}),u.jsx("rect",{x:"30",y:"165",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),u.jsx("rect",{x:"30",y:"165",width:"35",height:"6",rx:"3",fill:e,fillOpacity:"0.4"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"115",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("circle",{cx:"160",cy:"152",r:"18",fill:"none",stroke:e,strokeOpacity:"0.2",strokeWidth:"4"}),u.jsx("circle",{cx:"160",cy:"152",r:"18",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"4",strokeDasharray:"70 43"}),u.jsx("circle",{cx:"160",cy:"152",r:"8",fill:e,fillOpacity:"0.12"}),u.jsx("rect",{x:"150",y:"148",width:"20",height:"3",rx:"1.5",fill:e,fillOpacity:"0.6"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"214",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("rect",{x:"224",y:"132",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),u.jsx("rect",{x:"230",y:"135",width:"30",height:"4",rx:"2",fill:e,fillOpacity:"0.5"}),u.jsx("rect",{x:"224",y:"148",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),u.jsx("rect",{x:"230",y:"151",width:"40",height:"4",rx:"2",fill:e,fillOpacity:"0.45"}),u.jsx("rect",{x:"224",y:"164",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),u.jsx("rect",{x:"230",y:"167",width:"25",height:"4",rx:"2",fill:e,fillOpacity:"0.4"})]})]}),u.jsxs("g",{children:[u.jsx("circle",{cx:"20",cy:"20",r:"4",fill:e,fillOpacity:"0.4"}),u.jsx("circle",{cx:"300",cy:"20",r:"4",fill:e,fillOpacity:"0.4"}),u.jsx("circle",{cx:"20",cy:"180",r:"4",fill:e,fillOpacity:"0.4"}),u.jsx("circle",{cx:"300",cy:"180",r:"4",fill:e,fillOpacity:"0.4"})]})]})}const Fl=[{idx:"01",color:"#015BC9",bg:"#BBDDFE",vizType:"city",name:"移动端&PC端-历城控股 OA",role:"Lead UI/UX Designer",tags:["iOS/Android","Web PC","企业管理"],desc:"历城控股集团 OA 办公系统移动端&PC 端全新升级改版，统一信息架构与视觉语言，面向集团 2000 + 内部员工的一站式办公管理平台，覆盖假勤、工资单、报销、审批等核心办公场景，优化流程后审批平均耗时减少 40%，移动端使用率提升至 85%。",images:["https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/lckg1.png","https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/lckg2.png","https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/lckg3.png","https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/lckg4.png","https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/lckg5.png"],process:["需求调研","竞品分析","信息架构","交互设计","视觉规范","开发对接","迭代上线"],aiNote:"依托 Eva Design System 构建全链路色彩体系，自动生成色值梯度库，并通过 WCAG 对比度规范自动校验；批量产出移动端启动页与 PC 端登录页的动态视觉资产，同步输出浅色 / 深色双模式适配；通过 Midjourney + PS/Figma 协同产出 Banner 和运营海报；利用 AI 辅助生成 Logo 创意方向，实现高效的多端视觉与品牌资产落地。",metrics:[{value:"-40",unit:"%",label:"审批平均耗时"},{value:"85",unit:"%",label:"移动端使用率"},{value:"+50",unit:"%",label:"报销提交效率"},{value:"4.7",unit:"/5",label:"员工满意度评分"}]},{idx:"02",color:"#3366ff",bg:"#f0eeff",vizType:"chart",name:"UI设计规范-浪潮智慧建筑 原子组件库",role:"Design System Lead",tags:["B端","SaaS","变体设计","Auto-Layout"],desc:"基于原子设计理论（Atomic Design） 体系化搭建企业级 PC 端组件库，累计沉淀 200+ 业务组件，覆盖智慧园区、智慧工地、建筑节能三大核心产品线，形成统一、可扩展、可落地的设计规范与交互标准。组件库提供多状态、多主题、多尺寸的丰富变体配置，支持自动布局、响应式适配等原型化能力，产品经理复用率提升至 91%。",images:["https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/sjgf1.png","https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/sjgf2.png","https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/sjgf3.png","https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/sjgf4.png","https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/sjgf5.png"],process:["组件梳理","原子拆分","变体设计","自动布局","文档输出","团队赋能","持续迭代"],aiNote:"GitHub Copilot 辅助梳理 Figma 组件类型；使用 Vibma + Cursor MCP 自动检查校验组件样式、命名、状态统一性，快速排查漏洞，后期维护成本大幅降低；AI 批量生成线性 / 面性图标，统一视觉风格，再微调落地，告别逐个绘制，图标库搭建提速 80%。",metrics:[{value:"200",unit:"+",label:"自动布局组件"},{value:"91",unit:"%",label:"产品复用率"},{value:"-65",unit:"%",label:"原型制作耗时"},{value:"2.5",unit:"×",label:"交付效率提升"}]},{idx:"03",color:"#11AF95",bg:"#97F9E5",vizType:"net",name:"数据可视化大屏-设计体系",role:"Data Visualization Designer",tags:["Large Screen","Demo","Experience Share"],desc:"基于 30+ 政企与金融级可视化大屏项目的实战沉淀，系统性梳理并提炼了非常规尺寸自适应适配、专用数字字体设计、高质感动效设计等领域的核心方法论与最佳实践。针对超宽屏、非标拼接屏、异形分辨率、多设备协同等复杂场景，形成完整的大屏设计解决方案，并输出标准化设计指南、组件规范与案例库，发表并授权相关专利 4 篇。",images:["https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/dap1.png","https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/dap2.png","https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/dap3.png","https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/dap4.png","https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/dap5.png"],process:["项目复盘","规律提炼","要点总结","文档输出","团队分享","迭代优化"],aiNote:"用 AI 一键生成科技感 / 政务风 / 金融风大屏配色方案，自动生成深色模式渐变、霓虹光效色卡，同步校验大屏远距离可视性，省去反复调试色值的时间，风格探索效率提升 60%；AI 快速输出多版布局草案，解决大屏排版难、信息失衡问题，布局设计周期缩短 50%。",metrics:[{value:"30",unit:"+",label:"覆盖项目数量"},{value:"-35",unit:"%",label:"大屏交付周期"},{value:"95",unit:"%",label:"设计一致性"},{value:" 6",unit:"+",label:"团队分享会"}]}];function Db({project:s,onClose:e}){return ie.useEffect(()=>(s&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[s]),s?u.jsx(Wa,{children:u.jsx("div",{className:"fixed inset-0 z-50 flex items-center sm:items-center justify-center px-6 sm:px-8 pt-8 sm:pt-12 pb-8",style:{background:"rgba(5,5,12,0.70)",backdropFilter:"blur(16px)"},onClick:e,children:u.jsxs("div",{className:"relative w-full sm:max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl",style:{background:"white",border:"1px solid rgba(0,0,0,0.08)",boxShadow:"0 20px 100px rgba(0,0,0,0.3)"},onClick:t=>t.stopPropagation(),children:[u.jsx("div",{className:"sticky top-4 z-20 flex justify-end px-[16px] py-[0px]",style:{background:"transparent"},children:u.jsx("button",{onClick:e,className:"w-10 h-10 rounded-full flex items-center justify-center pt-transition-all duration-200",style:{background:"rgba(255,255,255,0.95)",border:"1px solid rgba(0,0,0,0.1)",color:"#0c0b18",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:u.jsx(Jr,{size:16})})}),u.jsxs("div",{className:"relative overflow-hidden -mt-16",style:{height:"clamp(150px, 30vh, 600px)",background:s.bg},children:[u.jsx(Q0,{type:s.vizType,color:s.color}),u.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg,transparent 40%,rgba(255,255,255,0.9) 100%)"}})]}),u.jsxs("div",{className:"px-[20px] sm:px-[40px] pt-[16px] pb-[20px]",children:[u.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[u.jsx("span",{className:"hidden md:inline-block",style:{fontSize:"3.5rem",fontWeight:900,color:`${s.color}18`,lineHeight:1,letterSpacing:"-0.05em"},children:s.idx}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h2",{style:{fontSize:"1.75rem",fontWeight:800,color:"#0c0b18",lineHeight:1.2,marginBottom:"0.5rem"},children:s.name}),u.jsx("p",{style:{fontSize:"1rem",color:s.color,fontWeight:600},children:s.role})]})]}),u.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:s.tags.map(t=>u.jsx("span",{className:"text-sm px-3 py-1.5 rounded-lg",style:{background:`${s.color}12`,border:`1px solid ${s.color}25`,color:s.color,fontWeight:600},children:t},t))}),u.jsx("p",{className:"mb-8",style:{fontSize:"1rem",color:"rgba(12,11,24,0.6)",lineHeight:1.85},children:s.desc}),u.jsxs("div",{className:"mb-8 hidden sm:block",children:[u.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"设计流程"}),u.jsx(q0,{steps:s.process,color:s.color})]}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"核心数据"}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:s.metrics.map(t=>u.jsx(Y0,{value:t.value,unit:t.unit,label:t.label,color:s.color},t.label))})]}),u.jsxs("div",{className:"rounded-2xl p-6 mb-8  hidden sm:block",style:{background:`${s.color}12`,border:`1px solid ${s.color}25`},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",style:{color:s.color},children:[u.jsx(Va,{size:16}),u.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:700},children:"AI 应用"})]}),u.jsx("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.6)",lineHeight:1.85},children:s.aiNote})]}),s.images&&s.images.length>0&&u.jsxs("div",{className:"mb-8",children:[u.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"项目展示"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:s.images.map((t,r)=>u.jsx("div",{className:"rounded-2xl overflow-hidden relative",style:{background:`linear-gradient(135deg, ${s.color}08, ${s.color}15)`,border:`1px solid ${s.color}20`,aspectRatio:"16/9",gridColumn:r===0?"1 / -1":"auto"},children:u.jsx("img",{src:t,alt:`${s.name} - 项目展示 ${r+1}`,className:"w-full h-full object-cover",style:{display:"block"},onError:o=>{const l=o.currentTarget;l.style.display="none";const f=l.parentElement;if(f&&!f.querySelector(".img-error-fallback")){const d=document.createElement("div");d.className="img-error-fallback absolute inset-0 flex items-center justify-center",d.style.cssText=`
                            background: linear-gradient(135deg, ${s.color}08, ${s.color}15);
                            color: rgba(12,11,24,0.4);
                            font-size: 0.875rem;
                            text-align: center;
                            padding: 1rem;
                          `,d.textContent="图片加载失败，请换个 WiFi 或使用自己的热点",f.appendChild(d)}}})},r))})]}),u.jsx("div",{className:"flex items-center justify-center gap-4",children:u.jsxs("a",{href:"https://github.com/quweijia/file/blob/main/lckgoa.html",target:"_blank",rel:"noopener noreferrer",className:"w-full group flex items-center justify-center gap-2 rounded-xl text-sm transition-colors px-[24px] py-[12px]",onMouseEnter:t=>{t.currentTarget.style.background=`${s.color}50`},onMouseLeave:t=>{t.currentTarget.style.background=`${s.color}30`},style:{background:`${s.color}30`,color:s.color,fontWeight:600,textDecoration:"none",cursor:"pointer"},children:["Figma 原稿",u.jsx(sf,{size:14,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})})]})]})})}):null}function Lb({p:s,rev:e,index:t,onOpenModal:r}){const{ref:o,vis:l}=X0(0),[f,d]=ie.useState(!1);return u.jsx("div",{ref:o,className:"rounded-2xl overflow-hidden transition-all duration-700",style:{background:"white",boxShadow:f?"0 24px 80px rgba(0,0,0,0.13), 0 8px 24px rgba(0,0,0,0.07)":"0 4px 24px rgba(0,0,0,0.06)",opacity:l?1:0,transform:l?"translateY(0)":"translateY(32px)",border:"1px solid rgba(0,0,0,0.05)"},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:u.jsxs("div",{className:`grid 
          ${t===1?"lg:grid-cols-[3fr_7fr]":"lg:grid-cols-[7fr_3fr]"} 
          ${e?"lg:[grid-template-areas:'right_left']":""}
        `,children:[u.jsxs("div",{className:`${e?"lg:[grid-area:left]":""} px-[32px] pt-[32px] pb-[0px] sm:p-[32px]`,style:{borderRight:e?"none":"1px solid rgba(0,0,0,0.05)",borderLeft:e?"1px solid rgba(0,0,0,0.05)":"none"},children:[u.jsxs("div",{className:"flex items-start justify-between gap-4 mb-6",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"hidden md:inline",style:{fontSize:"3rem",fontWeight:900,color:`${s.color}20`,lineHeight:1,letterSpacing:"-0.05em"},children:s.idx}),u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:800,color:"#0c0b18",lineHeight:1.2},children:s.name}),u.jsx("p",{className:"mt-0.5",style:{fontSize:"0.8125rem",color:s.color,fontWeight:600},children:s.role})]})]}),u.jsx("button",{className:"shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200",style:{background:f?`${s.color}12`:"rgba(0,0,0,0.04)",border:`1px solid ${f?`${s.color}25`:"rgba(0,0,0,0.07)"}`},onClick:r,children:u.jsx(rf,{size:14,style:{color:f?s.color:"rgba(0,0,0,0.3)"}})})]}),u.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:s.tags.map(m=>u.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:`${s.color}0e`,border:`1px solid ${s.color}20`,color:s.color,fontWeight:500},children:m},m))}),u.jsx("p",{className:"mb-[8px] sm:mb-6",style:{fontSize:"0.875rem",color:"rgba(12,11,24,0.55)",lineHeight:1.85},children:s.desc}),u.jsxs("div",{className:"mb-5 hidden sm:block",children:[u.jsx("p",{className:"text-xs mb-2.5 tracking-wider",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.12em"},children:"DESIGN PROCESS"}),u.jsx(q0,{steps:s.process,color:s.color})]}),u.jsxs("div",{className:"rounded-xl p-4 hidden sm:block",style:{background:`${s.color}12`,border:`1px solid ${s.color}16`},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:s.color},children:[u.jsx(Va,{size:11}),u.jsx("span",{className:"text-xs tracking-wider",style:{letterSpacing:"0.1em",fontWeight:700},children:"AI APPLICATION"})]}),u.jsx("p",{style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.5)",lineHeight:1.8},children:s.aiNote})]})]}),u.jsxs("div",{className:`flex flex-col ${e?"lg:[grid-area:right]":""}`,children:[u.jsxs("div",{className:"relative overflow-hidden hidden lg:block",style:{height:220,background:s.bg},children:[u.jsx(Q0,{type:s.vizType,color:s.color}),u.jsx("div",{className:"absolute inset-0 pointer-events-none hidden lg:block",style:{background:"linear-gradient(180deg,transparent 60%,rgba(255,255,255,0.8) 100%)"}})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 flex-1 items-center justify-center place-content-center p-[24px]",children:[u.jsx("p",{className:"col-span-2 text-xs mb-1 tracking-wider text-center",style:{color:"rgba(12,11,24,0.25)",letterSpacing:"0.12em"},children:"KEY METRICS"}),s.metrics.map(m=>u.jsx(Y0,{value:m.value,unit:m.unit,label:m.label,color:s.color},m.label))]})]})]})})}function kb(){const{ref:s,vis:e}=X0(.03),{theme:t}=Qs(),[r,o]=ie.useState(null);return u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"projects",ref:s,className:"relative overflow-visible md:overflow-hidden",style:{background:"#f3f0eb",padding:"80px 0 140px"},children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.025]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"180px"}}),u.jsx("div",{className:"absolute left-0 top-6 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,color:"rgba(12,11,24,0.03)",lineHeight:1,letterSpacing:"0.05em",whiteSpace:"nowrap"},children:"PROJECTS"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[60px] max-lg:mb-[32px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[u.jsx("span",{className:"text-xm tracking-widest",style:{color:t.cyan,letterSpacing:"0.2em",fontWeight:600},children:"CASE STUDIES"}),u.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${t.cyan}66,transparent)`}})]}),u.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:600,color:"#0c0b18",lineHeight:1.05,letterSpacing:"-0.04em"},children:"主导项目"})]}),u.jsx("div",{className:"lg:max-w-md",children:u.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.42)",lineHeight:1.85},children:["主导多个从0-1移动端、PC端、可视化大屏项目",u.jsx("br",{}),"每个项目均展示完整设计过程与可量化成果"]})})]}),u.jsx("div",{className:"hidden md:block space-y-4",children:Fl.map((l,f)=>u.jsx(Lb,{p:l,rev:f%2===1,index:f,onOpenModal:()=>o(l)},l.idx))}),u.jsx("div",{className:"md:hidden",children:u.jsx(Pb,{onItemClick:o})})]})]}),u.jsx(Db,{project:r,onClose:()=>o(null)})]})}function K0({children:s,className:e="",glowColor:t="rgba(139, 92, 246, 0.8)",borderRadius:r="1rem",borderWidth:o=1,intensity:l=1}){const f=ie.useRef(null),d=ie.useRef(null),p=ie.useRef(0),m=ie.useRef({x:-1e3,y:-1e3,active:!1});return ie.useEffect(()=>{const v=f.current,_=d.current;if(!v||!_)return;const S=_.getContext("2d");if(!S)return;const M=()=>{_.width=v.offsetWidth,_.height=v.offsetHeight};M();const b=new ResizeObserver(M);b.observe(v);const T=D=>{const P=v.getBoundingClientRect();m.current={x:D.clientX-P.left,y:D.clientY-P.top,active:!0}},y=()=>{m.current.active=!1};v.addEventListener("mousemove",T),v.addEventListener("mouseleave",y);const x=()=>{const D=_.width,P=_.height;S.clearRect(0,0,D,P);const{x:E,y:W,active:z}=m.current,I=parseFloat(r)*16,U=Math.max(0,I);let N=o,C=l;if(z){const ae=E,Z=D-E,fe=W,me=P-W,ue=Math.min(ae,Z,fe,me),j=Math.max(0,1-ue/60);N=o*(.5+j*.5),C=l*(.5+j*1)}const B=()=>{S.beginPath(),S.moveTo(U,0),S.lineTo(D-U,0),S.arcTo(D,0,D,U,U),S.lineTo(D,P-U),S.arcTo(D,P,D-U,P,U),S.lineTo(U,P),S.arcTo(0,P,0,P-U,U),S.lineTo(0,U),S.arcTo(0,0,U,0,U),S.closePath()};if(z){const ae=S.createRadialGradient(E,W,0,E,W,Math.max(D,P)*.5);ae.addColorStop(0,t.replace(/[\d.]+\)$/,`${C})`)),ae.addColorStop(.3,t.replace(/[\d.]+\)$/,`${C*.5})`)),ae.addColorStop(1,t.replace(/[\d.]+\)$/,"0)")),S.lineWidth=N,S.strokeStyle=ae,B(),S.stroke()}else S.lineWidth=o,S.strokeStyle=t.replace(/[\d.]+\)$/,"0.2)"),B(),S.stroke();p.current=requestAnimationFrame(x)};return p.current=requestAnimationFrame(x),()=>{cancelAnimationFrame(p.current),b.disconnect(),v.removeEventListener("mousemove",T),v.removeEventListener("mouseleave",y)}},[t,r,o,l]),u.jsxs("div",{ref:f,className:`relative ${e}`,style:{borderRadius:r},children:[u.jsx("div",{style:{borderRadius:r,overflow:"hidden",padding:o*.3+"px"},children:s}),u.jsx("canvas",{ref:d,className:"absolute inset-0 pointer-events-none",style:{borderRadius:r,zIndex:10}})]})}function Ib(s){if(s.startsWith("#")&&s.length===7){const e=parseInt(s.slice(1,3),16),t=parseInt(s.slice(3,5),16),r=parseInt(s.slice(5,7),16);return`rgba(${e},${t},${r},1.0)`}return"rgba(139,92,246,1.0)"}function Ub({onItemClick:s}){const e=ie.useRef(null),[t,r]=ie.useState(0),o=336,l=ie.useCallback(()=>{if(e.current){const{scrollLeft:d}=e.current,p=Math.round(d/o);p!==t&&p>=0&&p<an.length&&r(p)}},[o,t]);ie.useEffect(()=>{const d=e.current;return d&&(d.addEventListener("scroll",l),l()),()=>{d&&d.removeEventListener("scroll",l)}},[l]);const f=ie.useCallback(d=>{e.current&&e.current.scrollTo({left:d*o,behavior:"smooth"})},[o]);return u.jsxs("div",{className:"relative -mx-6 lg:-mx-10",children:[u.jsx("div",{ref:e,className:"flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 snap-x snap-mandatory",style:{scrollBehavior:"smooth"},children:an.map((d,p)=>u.jsx("div",{className:"shrink-0 w-[85vw] max-w-[320px] snap-center",style:{opacity:p===t?1:.7,transition:"opacity 0.3s ease"},children:u.jsx(K0,{glowColor:Ib(d.color),borderRadius:"1rem",borderWidth:5,intensity:2,children:u.jsxs("div",{className:"relative rounded-2xl overflow-hidden cursor-pointer",style:{background:"#0e0e1a"},onClick:()=>s(d),children:[u.jsxs("div",{className:"relative h-48 overflow-hidden rounded-t-2xl",children:[u.jsx("img",{src:d.coverImg,alt:d.title,className:"absolute inset-0 w-full h-full object-cover object-top",style:{opacity:1},onError:m=>{const v=m.currentTarget;v.style.display="none"}}),u.jsx("div",{className:"absolute top-3 left-3",children:u.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(16,16,26,0.8)",border:`1px solid ${d.color}22`,color:d.color,backdropFilter:"blur(8px)"},children:d.year})})]}),u.jsxs("div",{className:"p-4",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 mb-2",children:[u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:"#f0f4f8"},children:d.title}),u.jsx("p",{className:"text-xs mt-0.5",style:{color:d.color,opacity:.75},children:d.sub})]}),u.jsx("span",{className:"shrink-0 text-xs px-2 py-1 rounded-lg",style:{color:d.color,fontWeight:600,whiteSpace:"nowrap",background:`color-mix(in srgb, ${d.color} 12%, transparent)`,border:`1px solid color-mix(in srgb, ${d.color} 14%, transparent)`},children:d.metric})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:d.tags.slice(0,3).map(m=>u.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.3)"},children:m},m))}),u.jsxs("div",{className:"mt-3 rounded-lg p-3",style:{background:`${d.color}07`,border:`1px solid ${d.color}16`},children:[u.jsxs("div",{className:"flex items-center gap-1.5",style:{color:d.color},children:[u.jsx(Va,{size:10}),u.jsx("span",{className:"text-[10px] tracking-wider font-semibold",children:"亮点"})]}),u.jsx("p",{className:"text-xs mt-1.5 line-clamp-2",style:{color:"rgba(255,255,255,0.5)"},children:d.highlights[0]})]})]})]})})},d.id))}),u.jsx("div",{className:"flex justify-center gap-1.5 mt-4",children:an.map((d,p)=>u.jsx("button",{onClick:()=>f(p),className:"transition-all duration-300 rounded-full",style:{height:"4px",width:p===t?24:8,background:p===t?"rgba(255,255,255,0.6)":"rgba(255,255,255,0.2)"}},p))})]})}function Fb(s){if(s.startsWith("#")&&s.length===7){const e=parseInt(s.slice(1,3),16),t=parseInt(s.slice(3,5),16),r=parseInt(s.slice(5,7),16);return`rgba(${e},${t},${r},1.0)`}return"rgba(139,92,246,1.0)"}function Ob(s=0){const e=ie.useRef(null),[t,r]=ie.useState(!1);return ie.useEffect(()=>{if(t)return;const o=new IntersectionObserver(([l])=>{l.isIntersecting&&!t&&(setTimeout(()=>r(!0),s),o.disconnect())},{threshold:.04});return e.current&&o.observe(e.current),()=>o.disconnect()},[s,t]),{ref:e,vis:t}}function zb({color:s}){return u.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"c1",cx:"65%",cy:"35%",r:"65%",children:[u.jsx("stop",{offset:"0%",stopColor:s,stopOpacity:"0.22"}),u.jsx("stop",{offset:"100%",stopColor:s,stopOpacity:"0"})]}),u.jsxs("filter",{id:"gf1",children:[u.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"b"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"b"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),u.jsx("rect",{width:"560",height:"320",fill:"url(#c1)"}),[40,100,160,220,280,340,400,460,520].map(e=>u.jsx("line",{x1:e,y1:"0",x2:e,y2:"320",stroke:s,strokeOpacity:"0.05",strokeWidth:"1"},e)),[40,85,130,175,220,270].map(e=>u.jsx("line",{x1:"0",y1:e,x2:"560",y2:e,stroke:s,strokeOpacity:"0.05",strokeWidth:"1"},e)),u.jsx("path",{d:"M30 280 C110 210 200 170 290 155 S400 120 520 70",fill:"none",stroke:s,strokeWidth:"2.5",strokeOpacity:"0.6",strokeDasharray:"9 6",filter:"url(#gf1)"}),u.jsx("path",{d:"M30 280 C120 250 220 235 320 225 S450 200 530 175",fill:"none",stroke:s,strokeWidth:"1.5",strokeOpacity:"0.2",strokeDasharray:"5 4"}),[[30,280],[290,155],[520,70]].map(([e,t],r)=>u.jsxs("g",{filter:"url(#gf1)",children:[u.jsx("circle",{cx:e,cy:t,r:"18",fill:s,fillOpacity:"0.08",stroke:s,strokeOpacity:"0.35",strokeWidth:"1.5"}),u.jsx("circle",{cx:e,cy:t,r:"5.5",fill:s,fillOpacity:"0.9"})]},r)),u.jsx("rect",{x:"350",y:"60",width:"55",height:"96",rx:"10",fill:"none",stroke:s,strokeOpacity:"0.22",strokeWidth:"1.5"}),u.jsx("rect",{x:"356",y:"68",width:"43",height:"70",rx:"4",fill:s,fillOpacity:"0.04"}),[73,81,89,97,105,113,121].map(e=>u.jsx("rect",{x:"360",y:e,width:e%16===1?34:24,height:"4",rx:"2",fill:s,fillOpacity:"0.1"},e)),u.jsx("circle",{cx:"80",cy:"60",r:"38",fill:"none",stroke:s,strokeOpacity:"0.06",strokeWidth:"20"}),u.jsx("circle",{cx:"490",cy:"260",r:"50",fill:"none",stroke:s,strokeOpacity:"0.05",strokeWidth:"28"})]})}function Rl({color:s}){const e=[.52,.78,.43,.91,.35,.68,.95,.52,.74,.6,.87,.41,.76,.55];return u.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"c2",cx:"50%",cy:"25%",r:"70%",children:[u.jsx("stop",{offset:"0%",stopColor:s,stopOpacity:"0.18"}),u.jsx("stop",{offset:"100%",stopColor:s,stopOpacity:"0"})]}),u.jsxs("linearGradient",{id:"bg2",x1:"0",y1:"0",x2:"0",y2:"1",children:[u.jsx("stop",{offset:"0%",stopColor:s,stopOpacity:"0.75"}),u.jsx("stop",{offset:"100%",stopColor:s,stopOpacity:"0.1"})]}),u.jsxs("filter",{id:"gf2",children:[u.jsx("feGaussianBlur",{stdDeviation:"2",result:"b"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"b"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),u.jsx("rect",{width:"560",height:"320",fill:"url(#c2)"}),e.map((t,r)=>{const o=t*200,l=26+r*38,f=285-o;return u.jsxs("g",{children:[u.jsx("rect",{x:l,y:f,width:"26",height:o,rx:"3",fill:"url(#bg2)"}),u.jsx("rect",{x:l,y:f,width:"26",height:"5",rx:"2.5",fill:s,filter:"url(#gf2)"})]},r)}),u.jsx("polyline",{points:e.map((t,r)=>`${39+r*38},${285-t*200}`).join(" "),fill:"none",stroke:s,strokeWidth:"2",strokeOpacity:"0.45"}),u.jsx("line",{x1:"22",y1:"285",x2:"545",y2:"285",stroke:s,strokeOpacity:"0.1",strokeWidth:"1"}),[80,160].map(t=>u.jsx("line",{x1:"22",y1:285-t,x2:"545",y2:285-t,stroke:s,strokeOpacity:"0.05",strokeWidth:"1"},t)),u.jsx("rect",{x:"420",y:"30",width:"120",height:"65",rx:"8",fill:s,fillOpacity:"0.06",stroke:s,strokeOpacity:"0.18",strokeWidth:"1"}),u.jsx("rect",{x:"430",y:"40",width:"60",height:"6",rx:"3",fill:s,fillOpacity:"0.2"}),u.jsx("rect",{x:"430",y:"52",width:"96",height:"14",rx:"3",fill:s,fillOpacity:"0.1"}),u.jsx("rect",{x:"430",y:"72",width:"48",height:"5",rx:"2.5",fill:s,fillOpacity:"0.08"})]})}function Bb({color:s}){const e=[[280,155],[180,85],[380,85],[140,210],[420,210],[215,42],[345,42]];return u.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"c3",cx:"50%",cy:"48%",r:"58%",children:[u.jsx("stop",{offset:"0%",stopColor:s,stopOpacity:"0.18"}),u.jsx("stop",{offset:"100%",stopColor:s,stopOpacity:"0"})]}),u.jsxs("filter",{id:"gf3",children:[u.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"b"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),u.jsx("rect",{width:"560",height:"320",fill:"url(#c3)"}),e.slice(1).map(([t,r],o)=>u.jsx("line",{x1:t,y1:r,x2:280,y2:155,stroke:s,strokeOpacity:"0.18",strokeWidth:"1.3",strokeDasharray:"5 4"},o)),u.jsx("line",{x1:180,y1:85,x2:140,y2:210,stroke:s,strokeOpacity:"0.1",strokeWidth:"1"}),u.jsx("line",{x1:380,y1:85,x2:420,y2:210,stroke:s,strokeOpacity:"0.1",strokeWidth:"1"}),u.jsx("line",{x1:215,y1:42,x2:180,y2:85,stroke:s,strokeOpacity:"0.1",strokeWidth:"1"}),u.jsx("line",{x1:345,y1:42,x2:380,y2:85,stroke:s,strokeOpacity:"0.1",strokeWidth:"1"}),[50,78,108].map(t=>u.jsx("circle",{cx:280,cy:155,r:t,fill:"none",stroke:s,strokeOpacity:.1/t*40,strokeWidth:"1"},t)),e.map(([t,r],o)=>u.jsxs("g",{filter:"url(#gf3)",children:[u.jsx("circle",{cx:t,cy:r,r:o===0?22:14,fill:s,fillOpacity:o===0?.12:.07,stroke:s,strokeOpacity:o===0?.45:.22,strokeWidth:"1.5"}),u.jsx("circle",{cx:t,cy:r,r:o===0?6:3.5,fill:s,fillOpacity:"0.9"})]},o)),u.jsx("rect",{x:"420",y:"24",width:"116",height:"40",rx:"7",fill:s,fillOpacity:"0.06",stroke:s,strokeOpacity:"0.2",strokeWidth:"1"}),u.jsx("rect",{x:"430",y:"32",width:"72",height:"6",rx:"3",fill:s,fillOpacity:"0.22"}),u.jsx("rect",{x:"430",y:"44",width:"48",height:"5",rx:"2.5",fill:s,fillOpacity:"0.12"})]})}function jb({color:s}){return u.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"c4",cx:"40%",cy:"50%",r:"65%",children:[u.jsx("stop",{offset:"0%",stopColor:s,stopOpacity:"0.18"}),u.jsx("stop",{offset:"100%",stopColor:s,stopOpacity:"0"})]}),u.jsxs("filter",{id:"gf4",children:[u.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"b"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),u.jsx("rect",{width:"560",height:"320",fill:"url(#c4)"}),[[150,150,80],[300,120,55],[230,220,45],[410,200,62],[100,250,38],[460,100,35]].map(([e,t,r],o)=>u.jsx("circle",{cx:e,cy:t,r,fill:s,fillOpacity:.04+o*.01,stroke:s,strokeOpacity:.1+o*.02,strokeWidth:"1.5"},o)),u.jsx("path",{d:"M185 155 C145 105 115 82 165 50 C215 18 268 48 290 100 C312 152 270 182 228 182 C186 182 185 155 185 155Z",fill:s,fillOpacity:"0.08",stroke:s,strokeOpacity:"0.22",strokeWidth:"1.5",filter:"url(#gf4)"}),u.jsx("circle",{cx:430,cy:160,r:62,fill:"none",stroke:s,strokeOpacity:"0.08",strokeWidth:"22"}),u.jsx("circle",{cx:430,cy:160,r:62,fill:"none",stroke:s,strokeOpacity:"0.5",strokeWidth:"3",strokeDasharray:"272 120",strokeDashoffset:"0",filter:"url(#gf4)"}),u.jsx("circle",{cx:430,cy:160,r:7,fill:s,fillOpacity:"0.9",filter:"url(#gf4)"}),[[250,60],[310,60]].map(({0:e,1:t},r)=>u.jsxs("g",{children:[u.jsx("rect",{x:e,y:t,width:"50",height:"88",rx:"9",fill:"none",stroke:s,strokeOpacity:"0.22",strokeWidth:"1.5"}),u.jsx("rect",{x:e+4,y:t+8,width:"42",height:"64",rx:"3",fill:s,fillOpacity:"0.04"}),[14,22,30,38,46,54,62].map(o=>u.jsx("rect",{x:e+8,y:t+o,width:o===14?30:22,height:"4",rx:"2",fill:s,fillOpacity:"0.1"},o))]},r))]})}const an=[{id:1,color:"rgb(var(--c1))",Bg:Rl,coverImg:"/assets/images/ntgk1.gif",year:"2026",title:"能碳管控可视化平台",sub:"Carbon Management",tags:["智慧园区","能碳管控","GIS定制","智慧工地"],role:"UX Designer · 高德 GIS 地图开发",metric:"政府验收评分 9.6",tools:["Figma","Amap Style","Geojson"],desc:"面向省政府机关打造的政务级实时能碳管控大屏，集成GIS地图，实时监控机关事务单位的能耗与碳排数据，支撑节能减排政策执行与预警决策、能耗监测、运维告警、工单管理等多维数据，实现区域能源全生命周期可视化管控与智能决策。",highlights:["原子化、原型化大屏设计，高保真 Demo 演示","支持2D/3D GIS地图切换","多终端自适应展示","管理决策效率提升60%"],screenshots:["/assets/images/ntgk2.png","/assets/images/ntgk3.gif","/assets/images/ntgk4.png","/assets/images/ntgk5.png","/assets/images/ntgk6.png"],projectLink:"https://www.figma.com/proto/q7DqLbfB1uuKfsAVjnzhoF/%E8%8C%8C%E5%B9%B3%E3%80%81%E5%A4%A9%E6%A1%A5%E8%83%BD%E7%A2%B3%E7%AE%A1%E6%8E%A7%E5%B9%B3%E5%8F%B0%E5%8F%AF%E8%A7%86%E5%8C%96%E5%A4%A7%E5%B1%8F%E8%AE%BE%E8%AE%A1?node-id=192-15924&viewport=-406%2C252%2C0.03&t=1MvOD9WdotlUwLNd-1&scaling=contain&content-scaling=fixed&starting-point-node-id=192%3A15924&page-id=5%3A14"},{id:2,color:"#E877FF",Bg:Rl,coverImg:"/assets/images/chpgw1.gif",year:"2025",title:"浪潮智慧建筑产品官网",sub:"Product Official Website",tags:["品牌官网","响应式","动效"],role:"Design System Lead",metric:"全案设计",tools:["Figma","Storybook","GitHub Copilot"],desc:"浪潮智慧建筑以 “数智融合、绿色低碳” 为核心，打造筑瓴智慧建筑全栈式解决方案体系，覆盖智能应用、数字底座、AI 中台、智能硬件四大维度，为建筑全生命周期提供从 “感知 - 分析 - 决策 - 执行” 的全流程智能化支撑，助力行业实现高效、绿色、高质量的数字化转型。",highlights:["企业品牌官网全链路设计","跨产品线组件复用","交互原型 Demo 设计","迭代交付效率提升2倍"],screenshots:["/assets/images/chpgw2.png","/assets/images/chpgw3.png","/assets/images/chpgw4.png","/assets/images/chpgw5.png","/assets/images/chpgw6.png"],projectLink:"https://www.figma.com/proto/UwjGPd7UgVQLSN8oE5rdeb/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%91?node-id=91-4991&viewport=-23%2C-1005%2C0.06&t=GIZyLL29GHlGTPVD-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"},{id:3,color:"#02BA53",Bg:zb,coverImg:"/assets/images/sdhs1.gif",year:"2023",title:"山东高速满易运 App",sub:"SDHS MY-TMS Driver App",tags:["物流运输","货运平台","MY-TMS"],role:"Lead UI/UX · Product Design",metric:"转化率提升 85%",tools:["Figma","Principle","Midjourney"],desc:"山东高速集团官方货运司机服务平台，提供在线接单、路线规划、高速通行、费用结算、车辆管理、消息通知等全流程功能，帮助货车司机高效完成运输任务，实现货运流程线上化、标准化、智能化。",highlights:["深色模式适配，满足长途夜间驾驶使用","搭建完整移动端组件库，提升迭代效率","轻量化信息层级，降低司机操作认知成本","极简交互流程设计，缩短高频操作路径"],screenshots:["/assets/images/sdhs2.png","/assets/images/sdhs3.png","/assets/images/sdhs4.png","/assets/images/sdhs5.png","/assets/images/sdhs6.png"],projectLink:"https://example.com/icty-app"},{id:4,color:"#FE952C",Bg:jb,coverImg:"/assets/images/icity1.gif",year:"2018",title:"爱城市网 App",sub:"iCity — Urban Service App",tags:["城市服务","政务服务","民生出行"],role:"UI/UX · Product Design · Motion",metric:"省级政务标杆产品",tools:["Sketch","Principle","After Effects"],desc:"省级综合性政务便民服务App，聚焦市民日常办事、民生查询、生活服务核心场景，整合政务办理、社保医保、交通出行、便民缴费、城市资讯、投诉建议等多元功能。统筹全局交互设计逻辑，简化政务操作流程，降低市民使用门槛，打造轻量化、高易用的移动端体验。",highlights:["高合规政务视觉体系，兼顾严谨性与美观度","与 UI 设计规范一致，搭建产品原件库","轻量化信息层级，优化民生办事操作路径","统一多业务线视觉体系，保障产品体验一致性"],screenshots:["/assets/images/icity2.png","/assets/images/icity3.png","/assets/images/icity4.png","/assets/images/icity5.png","/assets/images/icity6.png"],projectLink:"https://example.com/icty-web"},{id:5,color:"#34d399",Bg:Rl,coverImg:"/assets/images/PPT1.png",year:"2024",title:"PPT 全案设计与演示体系",sub:"Visual Communication",tags:["产品发布会","汇报模板","设计分享"],role:"视觉设计负责人 · 演示体系搭建",metric:"影视级幻灯片",tools:["PowerPoint","Keynote","ECharts"],desc:"面向政企汇报、产品发布、项目复盘的 PPT 设计体系，统一品牌视觉风格、信息层级与演示逻辑，提升内容传递效率与专业呈现质感。",highlights:["品牌视觉与版式规范高度统一","搭建 60+ 页标准化演示模板体系","数据图表可视化表达更清晰直观","整体汇报制作效率提升 70%"],screenshots:["/assets/images/PPT2.png","/assets/images/PPT3.png","/assets/images/PPT4.png","/assets/images/PPT5.png","/assets/images/PPT6.png"],projectLink:"https://example.com/energy-carbon"},{id:6,color:"#FE952C",Bg:Bb,coverImg:"/assets/images/ai1.gif",year:"2026",title:"AI-设计赋能",sub:"AI-Driven Efficiency",tags:["提效体系","智能辅助","设计自动化"],role:"AI设计体系搭建 · 提效方案负责人",metric:"效率提升 65%",tools:["Antigravity","Cursor","GitHub Copilot"],desc:"基于AI能力构建设计提效工作流，覆盖组件生成、图表可视化、原型快速迭代、设计规范落地等场景，通过智能辅助大幅缩短交付周期，提升团队整体产出质量与效率。",highlights:["搭建AI辅助设计标准化流程体系","设计稿迭代周期缩短 50% 以上","组件与图表自动生成覆盖率提升","团队整体设计效率提升 65%"],screenshots:["/assets/images/ai2.gif","/assets/images/ai3.gif","/assets/images/ai4.png","/assets/images/ai5.gif","/assets/images/ai6.png"],projectLink:"https://example.com/licheng-oa-mobile"},{id:7,color:"#7c6ff7",Bg:Rl,coverImg:"/assets/images/dx1.gif",year:"2022",title:"交互动效设计",sub:"Motion Interactive",tags:["微动画","Lottie落地","GIS动画"],role:"Product Designer · UX Lead",metric:"信息可读性提升 40%",tools:["AE","Lottie","Principle","Hype 4"],desc:"搭建全产品线标准化动效设计体系，制定统一的动效规范与落地标准，覆盖微交互、页面转场、状态反馈、组件动画等核心场景，提升产品交互体验与视觉一致性。",highlights:["制定完整动效设计规范与组件库","统一全产品线动效语言与视觉节奏","动效交付与研发对接效率提升60%","产品操作反馈与体验质感显著优化"],screenshots:["/assets/images/dx2.gif","/assets/images/dx3.gif","/assets/images/dx4.gif","/assets/images/dx5.gif","/assets/images/dx6.gif"],projectLink:"https://example.com/licheng-oa-desktop"}];function Hb({item:s,onClose:e}){if(ie.useEffect(()=>(s&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[s]),!s)return null;const t=s.Bg;return u.jsx(Wa,{children:u.jsx("div",{className:"fixed inset-0 z-50 flex items-center sm:items-center justify-center px-6 sm:px-8 pt-8 sm:pt-12 pb-8",style:{background:"rgba(0,0,0,0.88)",backdropFilter:"blur(16px)"},onClick:e,children:u.jsxs("div",{className:"relative w-full sm:max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl",style:{background:"#0c0c18",border:"1px solid rgba(255,255,255,0.07)",boxShadow:`0 0 100px ${s.color}14`},onClick:r=>r.stopPropagation(),children:[u.jsx("button",{onClick:e,className:"sticky top-4 float-right mr-5 mt-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",style:{background:"rgba(0,0,0,0.65)",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.65)",backdropFilter:"blur(8px)"},onMouseEnter:r=>{r.currentTarget.style.background="rgba(0,0,0,0.85)",r.currentTarget.style.borderColor="rgba(255,255,255,0.2)",r.currentTarget.style.color="rgba(255,255,255,0.9)"},onMouseLeave:r=>{r.currentTarget.style.background="rgba(0,0,0,0.65)",r.currentTarget.style.borderColor="rgba(255,255,255,0.12)",r.currentTarget.style.color="rgba(255,255,255,0.65)"},children:u.jsx(Jr,{size:16})}),u.jsxs("div",{className:"relative h-52 overflow-hidden rounded-t-3xl sm:rounded-t-3xl",style:{marginTop:"-52px"},children:[u.jsx(t,{color:s.color}),u.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg,transparent 40%,#0c0c18 100%)"}}),u.jsx("div",{className:"absolute top-4 left-5",children:u.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(0,0,0,0.7)",border:`1px solid ${s.color}22`,color:s.color,backdropFilter:"blur(8px)"},children:s.year})})]}),u.jsxs("div",{className:"px-7 pb-8",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 mb-1",children:[u.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800,color:"#f0f4f8"},children:s.title}),u.jsx("span",{style:{fontSize:"2rem",fontWeight:900,color:`${s.color}20`,lineHeight:1},children:s.num})]}),u.jsx("p",{className:"text-sm mb-1",style:{color:s.color},children:s.sub}),u.jsx("p",{className:"text-xs mb-5",style:{color:"rgba(255,255,255,0.25)"},children:s.role}),u.jsx("p",{className:"mb-5",style:{fontSize:"0.875rem",color:"rgba(255,255,255,0.48)",lineHeight:1.85},children:s.desc}),u.jsx("div",{className:"grid grid-cols-1 gap-4 mb-5",children:u.jsxs("div",{children:[u.jsx("p",{className:"text-xs mb-2 tracking-wider",style:{color:"rgba(255,255,255,0.2)",letterSpacing:"0.12em"},children:"TOOLS"}),u.jsx("div",{className:"flex flex-nowrap gap-1.5 overflow-x-auto scrollbar-hide",children:s.tools.map(r=>u.jsx("span",{className:"px-2 py-1 text-xs rounded",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.42)"},children:r},r))})]})}),u.jsxs("div",{className:"rounded-xl p-4",style:{background:`${s.color}07`,border:`1px solid ${s.color}16`},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",style:{color:s.color},children:[u.jsx(Va,{size:12}),u.jsx("span",{className:"text-xs tracking-wider",style:{letterSpacing:"0.1em",fontWeight:600},children:"HIGHLIGHTS"})]}),s.highlights.map(r=>u.jsxs("div",{className:"flex items-start gap-2.5 mb-2",children:[u.jsx(qx,{size:11,className:"mt-0.5 shrink-0",style:{color:s.color}}),u.jsx("span",{style:{fontSize:"0.8125rem",color:"rgba(255,255,255,0.48)",lineHeight:1.7},children:r})]},r))]}),s.screenshots&&s.screenshots.length>0&&u.jsxs("div",{className:"mt-6",children:[u.jsx("p",{className:"text-xs mb-3 tracking-wider",style:{color:"rgba(255,255,255,0.2)",letterSpacing:"0.12em"},children:"PROJECT SCREENSHOTS"}),u.jsx("div",{className:"grid grid-cols-1 gap-3",children:s.screenshots.map((r,o)=>u.jsx("div",{className:"relative overflow-hidden rounded-lg",style:{background:"rgba(255,255,255,0.02)",border:`1px solid ${s.color}12`,maxWidth:"100%"},children:u.jsx("img",{src:r,alt:`${s.title} 截图 ${o+1}`,className:"w-full h-auto",onError:l=>{const f=l.currentTarget;f.style.display="none";const d=f.parentElement;if(d&&!d.querySelector(".screenshot-error")){const p=document.createElement("div");p.className="screenshot-error absolute inset-0 flex items-center justify-center",p.style.cssText=`
                            background: rgba(14,14,26,0.9);
                            color: rgba(255,255,255,0.3);
                            font-size: 0.75rem;
                            text-align: center;
                          `,p.textContent="图片加载失败，请换个 WiFi 或使用自己的热点",d.appendChild(p)}}})},o))})]}),s.projectLink&&u.jsx("div",{className:"mt-6",children:u.jsxs("a",{href:s.projectLink,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm transition-all duration-300",style:{background:`${s.color}`,color:"#05050a",fontWeight:700,boxShadow:`0 0 30px ${s.color}40`},onMouseEnter:r=>{r.currentTarget.style.boxShadow=`0 0 40px ${s.color}60`,r.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:r=>{r.currentTarget.style.boxShadow=`0 0 30px ${s.color}40`,r.currentTarget.style.transform="translateY(0)"},children:[u.jsx(rf,{size:16,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"}),"查看完整项目"]})})]})]})})})}function Wr({item:s,tall:e,imageHeight:t,onOpen:r}){const[o,l]=ie.useState(!1),f=s.Bg;return u.jsx(K0,{glowColor:Fb(s.color),borderRadius:"1rem",borderWidth:5,intensity:2,children:u.jsxs("div",{className:"group relative rounded-2xl overflow-hidden cursor-pointer will-change-transform",style:{transform:"none",transition:"transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",boxShadow:o?`0 20px 60px rgba(0,0,0,0.5), 0 0 50px ${s.color}08`:"none",background:"#0e0e1a",outline:"none",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",isolation:"isolate",backgroundColor:"#0e0e1a"},onMouseEnter:()=>l(!0),onMouseLeave:()=>{l(!1)},onClick:r,children:[u.jsxs("div",{className:"relative overflow-hidden rounded-t-2xl",style:{height:t||(e?300:260),WebkitBorderTopLeftRadius:"14px",WebkitBorderTopRightRadius:"14px",borderTopLeftRadius:"14px",borderTopRightRadius:"14px",WebkitBorderBottomLeftRadius:"0",WebkitBorderBottomRightRadius:"0",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},children:[s.coverImg&&u.jsx(u.Fragment,{children:u.jsx("img",{src:s.coverImg,alt:s.title,className:"absolute inset-0 w-full h-full object-cover object-top cover-image",style:{opacity:.85,transform:o?"scale(1.06)":"scale(1)",transition:"transform 0.2s ease-out",willChange:"transform",WebkitBorderTopLeftRadius:"16px",WebkitBorderTopRightRadius:"16px",borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},onError:d=>{const p=d.currentTarget;p.style.display="none";const m=p.parentElement;if(m&&!m.querySelector(".img-error-fallback")){const v=document.createElement("div");v.className="img-error-fallback absolute inset-0 flex items-center justify-center",v.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1;",v.textContent="图片加载失败，请换个 WiFi 或使用自己的热点",m.insertBefore(v,m.firstChild)}}})}),!s.coverImg&&u.jsx(f,{color:s.color}),u.jsx("div",{className:"absolute inset-0 pointer-events-none transition-opacity duration-300 md:block hidden",style:{background:"linear-gradient(180deg, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.8) 100%)",opacity:o?.01:.9,borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"}}),u.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(180deg,transparent 0%,rgba(16,16,26,0.01) 80%,rgba(16,16,26,0.01) 100%)",borderTopLeftRadius:"16px",borderTopRightRadius:"16px"}}),u.jsx("div",{className:"absolute top-4 left-4",children:u.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(16,16,26,0.8)",border:`1px solid ${s.color}22`,color:s.color,backdropFilter:"blur(8px)"},children:s.year})})]}),u.jsxs("div",{className:"p-5 bg-[#60606040] bg-[#60606042] m-[0px]",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 mb-2",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-0 mb-0.5",children:[u.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:`${s.color}50`,letterSpacing:"0.08em"},children:s.num}),u.jsx("h3",{style:{fontSize:"0.9375rem",fontWeight:700,color:"#f0f4f8"},children:s.title})]}),u.jsx("p",{className:"text-xs",style:{color:s.color,opacity:.75},children:s.sub})]}),u.jsx("span",{className:"shrink-0 text-xs px-2.5 py-1 rounded-lg",style:{color:s.color,fontWeight:600,whiteSpace:"nowrap",background:`color-mix(in srgb, ${s.color} 12%, transparent)`,border:`1px solid color-mix(in srgb, ${s.color} 14%, transparent)`},children:s.metric})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5 mt-3",children:s.tags.map(d=>u.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.3)"},children:d},d))})]})]})})}function Gb(){const[s,e]=ie.useState(null),{ref:t,vis:r}=Ob(0),{theme:o}=Qs(),[l,f]=ie.useState(!1);return ie.useEffect(()=>{const d=()=>{f(window.innerWidth>=1024)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"portfolio",ref:t,className:"relative overflow-visible md:overflow-hidden",style:{background:"var(--bg)",padding:"80px 0 140px"},children:[u.jsx("div",{className:"absolute inset-x-0 top-0 h-px pointer-events-none",style:{background:`linear-gradient(90deg,transparent 10%,${o.purple}33 50%,transparent 90%)`}}),u.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,lineHeight:1,color:"rgba(255,255,255,0.05)",letterSpacing:"0.05em"},children:"WORKS"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 mb-20 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(30px)"},children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mb-5",children:[u.jsx("span",{className:"text-xm tracking-widest",style:{color:o.purple,letterSpacing:"0.2em",fontWeight:600},children:"SELECTED WORKS"}),u.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${o.purple}4d,transparent)`}})]}),u.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:"#f0f4f8",lineHeight:1.05,letterSpacing:"-0.04em"},children:"其他精选作品"})]}),u.jsx("div",{className:"lg:max-w-xs",children:u.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(255,255,255,0.28)",lineHeight:1.85},children:["点击任意卡片查看完整案例",u.jsx("br",{}),"设计过程 · 关键数据 · AI 应用"]})})]}),u.jsx("div",{className:"hidden md:block",children:u.jsxs("div",{className:"grid lg:grid-cols-12 gap-4",children:[u.jsx("div",{className:"lg:col-span-7 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"60ms"},children:u.jsx(Wr,{item:an[0],tall:!0,onOpen:()=>e(an[0]),imageHeight:l?"320px":"200px"})}),u.jsx("div",{className:"lg:col-span-5 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"130ms"},children:u.jsx(Wr,{item:an[1],tall:!0,onOpen:()=>e(an[1]),imageHeight:l?"320px":"200px"})}),u.jsx("div",{className:"lg:col-span-6 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"200ms"},children:u.jsx(Wr,{item:an[2],onOpen:()=>e(an[2]),imageHeight:l?"330px":"200px"})}),u.jsx("div",{className:"lg:col-span-6 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"260ms"},children:u.jsx(Wr,{item:an[3],onOpen:()=>e(an[3]),imageHeight:l?"330px":"200px"})}),u.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"320ms"},children:u.jsx(Wr,{item:an[4],onOpen:()=>e(an[4]),imageHeight:l?"220px":"200px"})}),u.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"380ms"},children:u.jsx(Wr,{item:an[5],onOpen:()=>e(an[5]),imageHeight:l?"220px":"200px"})}),u.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(28px)",transitionDelay:"440ms"},children:u.jsx(Wr,{item:an[6],onOpen:()=>e(an[6]),imageHeight:l?"220px":"200px"})})]})}),u.jsx("div",{className:"md:hidden",children:u.jsx(Ub,{onItemClick:e})})]})]}),u.jsx(Hb,{item:s,onClose:()=>e(null)})]})}const ja="#0c0b18",Vb="#f0eef9";function Wb(s=0){const e=ie.useRef(null),[t,r]=ie.useState(!1);return ie.useEffect(()=>{const o=new IntersectionObserver(([l])=>{l.isIntersecting&&(setTimeout(()=>r(!0),s),o.disconnect())},{threshold:.04});return e.current&&o.observe(e.current),()=>o.disconnect()},[s]),{ref:e,vis:t}}const Xb=[{name:"精英校友奖",issuer:"集团招聘宣讲会",year:"2019",color:"#00b896",icon:"G"},{name:"十佳优秀员工",issuer:"山东爱城市网科技有限公司",year:"2020",color:"#7c6ff7",icon:"S"},{name:"集团 Logo 设计一等奖",issuer:"浪潮集团",year:"2020",color:"#f472b6",icon:"L"},{name:"创新人才奖",issuer:"浪潮集团",year:"2022",color:"#34d399",icon:"C"},{name:"山东省中级工程师职称",issuer:"山东省人社厅",year:"2024",color:"#fb923c",icon:"M"},{name:"已授权发明专利 4 项",issuer:"国家知识产权局",year:"2025",color:"#38bdf8",icon:"Z"}],qb=["App Design","Mobile Design","Saas Design","OA Design","Visual Design","Large Screen","Design Systems","Component Library","AI Workflow","Prototyping","Logo Design","Brand Identity","Motion Design","Front-End","BI / Data Vis","HTML+CSS","Lotties","设计提效","政务服务","TMS System","能碳管控","智慧园区","智慧工地","产品发布会PPT"];function Yb({c:s,delay:e}){const[t,r]=ie.useState(!1),o=ie.useRef(null),[l,f]=ie.useState(!1);return ie.useEffect(()=>{const d=new IntersectionObserver(([p])=>{p.isIntersecting&&(setTimeout(()=>f(!0),e),d.disconnect())},{threshold:.1});return o.current&&d.observe(o.current),()=>d.disconnect()},[e]),u.jsxs("div",{ref:o,className:"flex items-center gap-3 p-4 rounded-2xl cursor-default select-none transition-all duration-250",style:{background:t?"white":"rgba(255,255,255,0.5)",border:t?`1px solid ${s.color}25`:"1px solid rgba(12,11,24,0.06)",transform:t?"translateY(-3px) scale(1.01)":l?"translateY(0) scale(1)":"translateY(12px) scale(0.97)",opacity:l?1:0,transition:`all 0.4s cubic-bezier(0.34,1.2,0.64,1) ${e}ms`,boxShadow:t?`0 8px 28px rgba(0,0,0,0.1), 0 0 20px ${s.color}10`:"none"},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[u.jsx("div",{className:"w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-sm transition-all duration-200",style:{background:t?`${s.color}18`:`${s.color}0e`,border:`1px solid ${s.color}20`,color:s.color,fontWeight:800,boxShadow:t?`0 0 12px ${s.color}20`:"none"},children:s.icon}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("p",{style:{fontSize:"0.8125rem",fontWeight:600,color:ja,lineHeight:1.3},children:s.name}),u.jsx("p",{className:"text-xs mt-0.5 truncate",style:{color:"rgba(12,11,24,0.38)"},children:s.issuer})]}),u.jsx("span",{className:"text-xs shrink-0",style:{color:s.color,fontWeight:700},children:s.year})]})}function Qb(){const{ref:s,vis:e}=Wb(.03),{theme:t}=Qs();return u.jsxs("section",{id:"education",ref:s,className:"relative overflow-hidden",style:{background:Vb,padding:"80px 0 140px"},children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.02]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"160px"}}),u.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,color:"rgba(12,11,24,0.03)",lineHeight:1,letterSpacing:"0.05em"},children:"EDUCATION"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[60px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[u.jsx("span",{className:"text-xm tracking-widest",style:{color:t.purple,letterSpacing:"0.2em",fontWeight:600},children:"BACKGROUND"}),u.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${t.purple}66,transparent)`}})]}),u.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:ja,lineHeight:1.05,letterSpacing:"-0.04em"},children:"教育 & 认证"})]}),u.jsx("div",{className:"lg:max-w-xs",children:u.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.42)",lineHeight:1.85},children:["参加系统培训 UI/UX 设计",u.jsx("br",{}),"持续学习 AI 与新兴技术",u.jsx("br",{}),"多项专业认证"]})})]}),u.jsxs("div",{className:"grid lg:grid-cols-[1fr_1px_1fr] gap-0",children:[u.jsxs("div",{className:"pr-0 lg:pr-12",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[u.jsx(Yp,{size:13,style:{color:"#7c6ff7"}}),u.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"EDUCATION"})]}),u.jsxs("div",{className:"relative flex gap-5 mb-2 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)"},children:[u.jsxs("div",{className:"flex flex-col items-center shrink-0",style:{width:40},children:[u.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(124,111,247,0.1)",border:"2px solid #7c6ff7",boxShadow:"0 0 20px rgba(124,111,247,0.2)"},children:u.jsx(Yp,{size:15,style:{color:"#7c6ff7"}})}),u.jsx("div",{className:"w-px mt-2 flex-1",style:{background:"rgba(12,11,24,0.1)",minHeight:24}})]}),u.jsxs("div",{className:"pb-6",children:[u.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-2",children:[u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:ja},children:"中国石油大学（华东） · 储运与建筑学院"}),u.jsx("p",{className:"text-sm mt-0.5",style:{color:"#7c6ff7",fontWeight:600},children:"建筑环境与能源应用工程 · 本科学位"})]}),u.jsxs("div",{className:"text-right",children:[u.jsx("span",{className:"text-xs",style:{color:"rgba(12,11,24,0.35)"},children:"2011 — 2015"}),u.jsx("p",{className:"text-xs mt-0.5",style:{color:"rgba(12,11,24,0.3)"},children:"GPA 4.3 / 5.0"})]})]}),u.jsx("p",{className:"mb-4",style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.48)",lineHeight:1.85},children:"自主深耕 UI/UX 设计与数据可视化领域，将工程逻辑与用户体验设计结合，主导多个 B 端可视化与移动端项目，形成 “工程思维 + 设计落地” 的独特优势。"}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:["专业前 10%","优秀学生干部","校级奖学金 ×3"].map(r=>u.jsxs("div",{className:"rounded-xl p-2.5 text-center",style:{background:"rgba(124,111,247,0.06)",border:"1px solid rgba(124,111,247,0.12)"},children:[u.jsx(Pu,{size:12,className:"mx-auto mb-1",style:{color:"#7c6ff7"}}),u.jsx("span",{style:{fontSize:"0.6875rem",color:"rgba(12,11,24,0.5)",lineHeight:1.4,display:"block"},children:r})]},r))})]})]}),u.jsxs("div",{className:"relative flex gap-5 mb-2 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"120ms"},children:[u.jsxs("div",{className:"flex flex-col items-center shrink-0",style:{width:40},children:[u.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(0,240,200,0.08)",border:"2px solid rgba(0,240,200,0.5)"},children:u.jsx(Pu,{size:14,style:{color:"#00b896"}})}),u.jsx("div",{className:"w-px mt-2 flex-1",style:{background:"rgba(12,11,24,0.1)",minHeight:24}})]}),u.jsxs("div",{className:"pb-6",children:[u.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-2",children:[u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:ja},children:"Google UX Design Certificate"}),u.jsx("p",{className:"text-sm mt-0.5",style:{color:"#11AF95",fontWeight:600},children:"专业认证 · Coursera"})]}),u.jsx("span",{className:"text-xs",style:{color:"rgba(12,11,24,0.35)"},children:"2017"})]}),u.jsx("p",{className:"mb-4",style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.48)",lineHeight:1.85},children:"系统学习 UI/UX 设计全链路技能，覆盖 PS、AI、AE、C4D 视觉设计工具，Axure、Sketch 原型交互工具，以及 HTML+CSS 前端基础与用户研究方法论，完成从视觉到交互的完整设计能力构建。"}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:["全栈设计工具掌握","Google 官方认证","团队项目第一名"].map(r=>u.jsxs("div",{className:"rounded-xl p-2.5 text-center",style:{background:"rgba(0,240,200,0.08)",border:"1px solid rgba(0,240,200,0.2)"},children:[u.jsx(dv,{size:12,className:"mx-auto mb-1",style:{color:"#00b896"}}),u.jsx("span",{style:{fontSize:"0.6875rem",color:"rgba(12,11,24,0.5)",lineHeight:1.4,display:"block"},children:r})]},r))})]})]}),u.jsxs("div",{className:"relative flex gap-5 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"200ms"},children:[u.jsx("div",{className:"shrink-0 flex items-s't",style:{width:40},children:u.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(251,146,60,0.08)",border:"2px dashed rgba(251,146,60,0.3)"},children:u.jsx(c1,{size:14,style:{color:"#fb923c"}})})}),u.jsxs("div",{className:"flex-1 rounded-2xl p-4",style:{background:"rgba(251,146,60,0.05)",border:"1px solid rgba(251,146,60,0.14)"},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-pulse",style:{background:"#fb923c",boxShadow:"0 0 8px #fb923c"}}),u.jsx("span",{className:"text-xs",style:{color:"#fb923c",fontWeight:700},children:"进行中"})]}),u.jsx("p",{style:{fontSize:"0.875rem",fontWeight:600,color:ja},children:"Advanced AI for UX"}),u.jsx("p",{className:"text-xs mt-0.5",style:{color:"rgba(12,11,24,0.38)"},children:"Stanford Online · 持续学习中…"})]})]})]}),u.jsx("div",{className:"hidden lg:block my-4",style:{background:"linear-gradient(180deg,transparent,rgba(12,11,24,0.1) 20%,rgba(12,11,24,0.1) 80%,transparent)"}}),u.jsxs("div",{className:"pl-0 lg:pl-12 mt-12 lg:mt-0",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[u.jsx(Pu,{size:13,style:{color:"#f472b6"}}),u.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"CERTIFICATIONS"})]}),u.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 mb-12",children:Xb.map((r,o)=>u.jsx(Yb,{c:r,delay:65},r.name))}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full",style:{background:"#f472b6"}}),u.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"EXPERTISE KEYWORDS"})]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:qb.map((r,o)=>u.jsx("span",{className:"px-3 py-1.5 rounded-lg text-xs cursor-default select-none transition-all duration-300",style:{background:"rgba(255,255,255,0.6)",border:"1px solid rgba(12,11,24,0.08)",color:"rgba(12,11,24,0.5)",opacity:e?1:0,transform:e?"scale(1)":"scale(0.88)",transition:"opacity 0.4s, transform 0.4s, background 0s, border-color 0s, color 0s",transitionDelay:"0ms"},onMouseEnter:l=>{const f=["#00b896","#7c6ff7","#f472b6","#34d399","#fb923c","#38bdf8"],d=f[o%f.length];l.currentTarget.style.background=`${d}12`,l.currentTarget.style.borderColor=`${d}22`,l.currentTarget.style.color=d},onMouseLeave:l=>{l.currentTarget.style.background="rgba(255,255,255,0.6)",l.currentTarget.style.borderColor="rgba(12,11,24,0.08)",l.currentTarget.style.color="rgba(12,11,24,0.5)"},children:r},r))})]})]})]})]})]})}const Kb="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Zb(s){const[e,t]=ie.useState(!1),r=()=>{t(!0)},{src:o,alt:l,style:f,className:d,...p}=s;return e?u.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${d??""}`,style:f,children:u.jsx("div",{className:"flex items-center justify-center w-full h-full",children:u.jsx("img",{src:Kb,alt:"Error loading image",...p,"data-original-url":o})})}):u.jsx("img",{src:o,alt:l,className:d,style:f,...p,onError:r})}const Jb="/assets/cd928feb81fb8ff325ac41aaef07a759-BH8O_PaO.jpg",$b=({size:s=20,color:e="currentColor"})=>u.jsx("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"#07C160",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M10.0014 14.6757C10.0011 14.6551 10.001 14.6345 10.001 14.6138C10.001 12.1055 12.0175 9.99564 14.7539 9.38092C14.3904 7.07873 11.9602 5.19995 8.90098 5.19995C5.58037 5.19995 3.00098 7.41344 3.00098 9.9793C3.00098 10.9487 3.36131 11.88 4.04082 12.6781C4.0728 12.7157 4.12443 12.7717 4.19342 12.8427C4.78537 13.4517 5.13709 14.2457 5.19546 15.0805C5.90857 14.6683 6.74285 14.5123 7.55832 14.6392C7.72416 14.665 7.85986 14.6847 7.96345 14.6982C8.27111 14.7383 8.58419 14.7586 8.90098 14.7586C9.27825 14.7586 9.64595 14.7301 10.0014 14.6757ZM10.4581 16.627C9.95467 16.7133 9.43399 16.7586 8.90098 16.7586C8.49441 16.7586 8.09502 16.7323 7.70499 16.6815C7.58312 16.6656 7.4317 16.6436 7.25073 16.6154C6.87693 16.5572 6.49436 16.6321 6.1713 16.8268L4.26653 17.9745C4.12052 18.0646 3.94891 18.1057 3.77733 18.0916C3.33814 18.0554 3.01178 17.6744 3.04837 17.2405L3.19859 15.4596C3.23664 15.0086 3.07664 14.5632 2.75931 14.2367C2.66182 14.1364 2.5814 14.0491 2.51802 13.9747C1.56406 12.8542 1.00098 11.4732 1.00098 9.9793C1.00098 6.23517 4.53793 3.19995 8.90098 3.19995C12.9601 3.19995 16.3041 5.82699 16.7504 9.20788C20.1225 9.36136 22.801 11.723 22.801 14.6138C22.801 15.8068 22.3448 16.9097 21.572 17.8044C21.5206 17.8639 21.4555 17.9336 21.3765 18.0137C21.1194 18.2744 20.9898 18.6301 21.0206 18.9903L21.1423 20.4125C21.172 20.759 20.9076 21.0632 20.5518 21.0921C20.4128 21.1034 20.2738 21.0706 20.1555 20.9986L18.6124 20.0821C18.3506 19.9266 18.0407 19.8668 17.7379 19.9133C17.5913 19.9358 17.4686 19.9533 17.3699 19.966C17.0539 20.0066 16.7303 20.0277 16.401 20.0277C13.7074 20.0277 11.4025 18.6201 10.4581 16.627ZM17.4346 17.9364C18.0019 17.8494 18.5793 17.911 19.1105 18.1111C19.2492 17.5503 19.5373 17.0304 19.9524 16.6094C20.0027 16.5585 20.0388 16.5198 20.0584 16.4971C20.5467 15.9318 20.801 15.2839 20.801 14.6138C20.801 12.8095 18.8983 11.2 16.401 11.2C13.9037 11.2 12.001 12.8095 12.001 14.6138C12.001 16.4181 13.9037 18.0277 16.401 18.0277C16.6424 18.0277 16.8809 18.0124 17.115 17.9823C17.1957 17.972 17.3029 17.9566 17.4346 17.9364Z"})});function ew(s=0){const e=ie.useRef(null),[t,r]=ie.useState(!1);return ie.useEffect(()=>{const o=new IntersectionObserver(([l])=>{l.isIntersecting&&(setTimeout(()=>r(!0),s),o.disconnect())},{threshold:.04});return e.current&&o.observe(e.current),()=>o.disconnect()},[s]),{ref:e,vis:t}}function e0({children:s,onClick:e,primary:t,color:r}){const o=ie.useRef(null),[l,f]=ie.useState({x:0,y:0}),[d,p]=ie.useState(!1);return u.jsx("button",{ref:o,className:"relative flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm overflow-hidden",style:{background:t?"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))":"transparent",border:t?"none":"1px solid rgba(var(--c1), 0.3)",color:t?"var(--bg)":"rgba(var(--c1)",fontWeight:t?700:500,transform:`translate(${l.x}px,${l.y}px)`,transition:d?"transform 0.2s ease-out,box-shadow 0.2s":"transform 0.5s cubic-bezier(0.23,1,0.32,1),box-shadow 0.2s",boxShadow:d&&t?"0 0 35px rgba(var(--c1), 0.4)":"none",cursor:"default"},onMouseMove:m=>{const v=o.current.getBoundingClientRect();f({x:(m.clientX-v.left-v.width/2)*.4,y:(m.clientY-v.top-v.height/2)*.4})},onMouseEnter:()=>p(!0),onMouseLeave:()=>{p(!1),f({x:0,y:0})},onClick:e,children:s})}const tw=[{icon:u.jsx(af,{size:15}),label:"Email",value:"quweijia@vip.qq.com",href:"mailto:quweijia@vip.qq.com",color:"rgb(var(--c1))"},{icon:u.jsx(kv,{size:15}),label:"PhoneCall",value:"156-6279-6885",href:" ",color:"#f0f4f8"},{icon:u.jsx($b,{size:15}),label:"WeChat",value:"vic-qu",href:" ",color:"#07C160"},{icon:u.jsx(e1,{size:15}),label:"X / Twitter",value:"@vicqu_design",href:"https://twitter.com",color:"#7c6ff7"}],nw=[{label:"Response Rate",value:"97%",color:"rgb(var(--c1))"},{label:"Reply Time",value:"< 24h",color:"#7c6ff7"},{label:"Remote OK",value:"Yes",color:"#f472b6"},{label:"Availability",value:"On",color:"#34d399"}];function iw({s,onQRCodeClick:e}){const[t,r]=ie.useState(!1),[o,l]=ie.useState(!1),f=s.label==="Email",d=s.label==="PhoneCall",p=s.label==="WeChat",m=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),v=async _=>{if(f){_.preventDefault();const S="quweijia@vip.qq.com";try{await navigator.clipboard.writeText(S),l(!0),setTimeout(()=>l(!1),2e3)}catch{try{const b=document.createElement("textarea");b.value=S,b.style.position="fixed",b.style.left="-999999px",b.style.top="-999999px",document.body.appendChild(b),b.focus(),b.select();const T=document.execCommand("copy");document.body.removeChild(b),T&&(l(!0),setTimeout(()=>l(!1),2e3))}catch(b){console.error("Failed to copy email:",b)}}}else if(d)if(m)window.location.href="tel:15662796885";else{_.preventDefault();const S="15662796885";try{await navigator.clipboard.writeText(S),l(!0),setTimeout(()=>l(!1),2e3)}catch{try{const b=document.createElement("textarea");b.value=S,b.style.position="fixed",b.style.left="-999999px",b.style.top="-999999px",document.body.appendChild(b),b.focus(),b.select();const T=document.execCommand("copy");document.body.removeChild(b),T&&(l(!0),setTimeout(()=>l(!1),2e3))}catch(b){console.error("Failed to copy phone:",b)}}}else p&&(_.preventDefault(),e&&e(),m&&setTimeout(()=>{window.location.href="weixin://"},100))};return u.jsxs("a",{href:d&&m?"tel:15662796885":s.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-4 rounded-xl transition-all duration-200",style:{background:t?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.06)",border:t?`1px solid ${s.color}25`:"1px solid rgba(255,255,255,0.12)",transform:t?"translateX(6px)":"none",textDecoration:"none",cursor:f||d||p?"pointer":"default"},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),onClick:v,children:[u.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200",style:{background:`${s.color}10`,border:`1px solid ${s.color}18`,color:s.color,boxShadow:t?`0 0 14px ${s.color}20`:"none"},children:s.icon}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("p",{style:{fontSize:"0.8125rem",fontWeight:600,color:"#f0f4f8"},children:s.label}),u.jsx("p",{className:"text-xs mt-1.5 truncate",style:{color:"rgba(255,255,255,0.5)"},children:s.value})]}),f||d&&!m||p?o?u.jsx(a0,{size:11,style:{color:s.color,opacity:1,transition:"opacity 0.2s",flexShrink:0}}):u.jsx(c0,{size:11,style:{color:"rgba(255,255,255,0.2)",opacity:t?1:0,transition:"opacity 0.2s",flexShrink:0}}):u.jsx(sf,{size:11,style:{color:"rgba(255,255,255,0.2)",opacity:t?1:0,transition:"opacity 0.2s",flexShrink:0}})]})}function rw(){const{ref:s,vis:e}=ew(.04),{theme:t}=Qs(),[r,o]=ie.useState(""),[l,f]=ie.useState(!1),[d,p]=ie.useState(!1),[m,v]=ie.useState(!1),[_,S]=ie.useState(!1),[M,b]=ie.useState(!1),T=()=>{const D=document.createElement("a");D.href="https://raw.githubusercontent.com/quweijia/file/main/1%E3%80%81UI%20%E4%B8%BB%E7%AE%A1-%E6%9B%B2%E7%BB%B4%E7%94%B2-15662796885.pdf",D.download="曲维甲-UI主管-简历.pdf",D.target="_blank",D.rel="noopener noreferrer",document.body.appendChild(D),D.click(),document.body.removeChild(D)},y=()=>{if(!r.trim())return;if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const P=encodeURIComponent(r);window.location.href=`sms:15662796885${/iPhone|iPad|iPod/i.test(navigator.userAgent)?"&":"?"}body=${P}`,setTimeout(()=>{o("")},500)}else b(!0)},x=async()=>{const D="quweijia@vip.qq.com";try{await navigator.clipboard.writeText(D),S(!0),setTimeout(()=>{S(!1)},2e3)}catch{try{const E=document.createElement("textarea");E.value=D,E.style.position="fixed",E.style.left="-999999px",E.style.top="-999999px",document.body.appendChild(E),E.focus(),E.select();const W=document.execCommand("copy");document.body.removeChild(E),W&&(S(!0),setTimeout(()=>{S(!1)},2e3))}catch(E){console.error("Failed to copy email:",E)}}};return u.jsxs("section",{id:"contact",ref:s,className:"relative overflow-hidden",style:{background:"var(--bg)",padding:"180px 0 20px"},children:[u.jsx("div",{className:"absolute inset-x-0 top-0 h-px pointer-events-none",style:{background:`linear-gradient(90deg,transparent 5%,${t.cyan}2e 50%,transparent 95%)`}}),u.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none",style:{background:`radial-gradient(ellipse,${t.cyan}4d 0%,transparent 70%)`,filter:"blur(30px)"}}),u.jsx("div",{className:"absolute inset-x-0 top-0 flex items-start justify-center overflow-hidden pointer-events-none select-none",style:{paddingTop:"360px"},children:u.jsx("span",{style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,letterSpacing:"0.05em",color:"rgba(255,255,255,0.018)",whiteSpace:"nowrap"},children:"Vic Qu"})}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[u.jsxs("div",{className:"text-center transition-all duration-700 mx-[0px] mt-6 mb-[80px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[u.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:t.cyan,letterSpacing:"0.22em",fontWeight:600},children:"GET IN TOUCH"}),u.jsxs("h2",{style:{fontSize:"clamp(2.8rem,7vw,5.5rem)",fontWeight:900,lineHeight:1.2,letterSpacing:"0em",color:"#f0f4f8"},children:["一起创造",u.jsx("br",{}),u.jsx("span",{style:{background:"linear-gradient(135deg, rgb(var(--c1)) 0%, rgb(var(--c2)) 25%, rgb(var(--c3)) 50%, rgb(var(--c2)) 75%, rgb(var(--c1)) 100%)",backgroundSize:"200% 200%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline-block",animation:"flowGradient 6s ease infinite"},children:"卓越的设计"})]}),u.jsx("svg",{viewBox:"0 0 400 20",className:"mx-auto mt-5 mb-5",style:{width:"min(400px,80%)",opacity:.15},children:u.jsx("path",{d:"M0 10 C40 2 80 18 120 10 S200 2 240 10 S320 18 360 10 S390 4 400 10",fill:"none",stroke:t.cyan,strokeWidth:"1.5"})}),u.jsxs("p",{className:"max-w-md mx-auto",style:{fontSize:"1rem",color:"rgba(255,255,255,0.35)",lineHeight:1.85},children:["岗位意向：UI/UX 设计主管职位",u.jsx("br",{}),"欢迎探讨设计项目合作或咨询机会"]}),u.jsxs("div",{className:"inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"},children:[u.jsx(u0,{size:11,style:{color:"rgba(255,255,255,0.3)"}}),u.jsx("span",{className:"text-xs",style:{color:"rgba(255,255,255,0.3)"},children:"济南 · 中国，接受全球远程机会"})]}),u.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mt-8",children:[u.jsxs("div",{className:"relative",children:[u.jsxs(e0,{primary:!0,onClick:()=>v(!m),children:[u.jsx(af,{size:14})," 发送邮件"]}),m&&u.jsxs("div",{className:"absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-xl",style:{bottom:"calc(100% + 12px)",background:"rgba(20, 20, 25, 0.95)",backdropFilter:"blur(12px)",border:"1px solid rgba(var(--c1), 0.3)",boxShadow:"0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(var(--c1), 0.15)",whiteSpace:"nowrap",zIndex:50,animation:"fadeInUp 0.3s ease-out"},children:[u.jsx("span",{className:"text-sm select-all",style:{color:"#f0f4f8",fontWeight:500,fontFamily:"monospace"},children:"quweijia@vip.qq.com"}),u.jsx("button",{onClick:x,className:"flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-200 hover:scale-110",style:{background:_?"rgba(var(--c1), 0.2)":"rgba(255,255,255,0.1)",border:_?"1px solid rgba(var(--c1), 0.4)":"1px solid rgba(255,255,255,0.15)",color:_?"rgb(var(--c1))":"rgba(255,255,255,0.6)"},children:_?u.jsx(a0,{size:13}):u.jsx(c0,{size:13})}),u.jsx("div",{className:"absolute left-1/2 -translate-x-1/2",style:{bottom:"-6px",width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid rgba(var(--c1), 0.3)"}}),u.jsx("div",{className:"absolute left-1/2 -translate-x-1/2",style:{bottom:"-5px",width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid rgba(20, 20, 25, 0.95)"}})]})]}),u.jsxs(e0,{onClick:()=>p(!0),children:[u.jsx(hd,{size:14})," 下载 PDF 简历"]})]})]}),u.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(20px)",transitionDelay:"100ms"},children:nw.map((D,P)=>u.jsxs("div",{className:"rounded-2xl p-5 text-center group cursor-default select-none transition-all duration-200 hover:scale-[1.02]",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",transitionDelay:`${P*50}ms`},children:[u.jsx("div",{style:{fontSize:"1.625rem",fontWeight:900,color:D.color,lineHeight:1},children:D.value}),u.jsx("p",{className:"mt-1.5 text-xs",style:{color:"rgba(255,255,255,0.3)",letterSpacing:"0.06em"},children:D.label})]},D.label))}),u.jsxs("div",{className:"grid lg:grid-cols-3 gap-6 mb-20",children:[u.jsxs("div",{className:"transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"150ms"},children:[u.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"CONNECT"}),u.jsx("div",{className:"space-y-2.5",children:tw.map(D=>u.jsx(iw,{s:D,onQRCodeClick:D.label==="WeChat"?()=>b(!0):void 0},D.label))})]}),u.jsxs("div",{className:"transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(20px)",transitionDelay:"220ms"},children:[u.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"RESUME"}),u.jsxs("div",{className:"relative overflow-hidden rounded-2xl p-6 h-[calc(100%-40px)]",style:{background:"linear-gradient(135deg,rgba(0,240,200,0.08) 0%,rgba(124,111,247,0.05) 100%)",border:"1px solid rgba(0,240,200,0.12)"},children:[u.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{opacity:.04},children:[[15,30,45,60,75,90].map(D=>u.jsx("line",{x1:"0",y1:D,x2:"100",y2:D,stroke:"rgb(var(--c1))",strokeWidth:"0.5"},D)),[15,30,45,60,75,90].map(D=>u.jsx("line",{x1:D,y1:"0",x2:D,y2:"100",stroke:"rgb(var(--c1))",strokeWidth:"0.5"},D))]}),u.jsx("div",{className:"absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none",style:{background:"radial-gradient(circle,rgba(0,240,200,0.1) 0%,transparent 70%)"}}),u.jsxs("div",{className:"relative z-10",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 6px rgb(var(--c1))"}}),u.jsx("span",{className:"text-xs",style:{color:"rgb(var(--c1))",fontWeight:600,letterSpacing:"0.1em"},children:"RESUME · 简历"})]}),u.jsx("h3",{className:"mt-3 mb-1",style:{fontSize:"1.125rem",fontWeight:800,color:"#f0f4f8"},children:"曲维甲 · Vic Qu"}),u.jsx("p",{className:"text-xs mb-5",style:{color:"rgb(var(--c1))",fontWeight:500},children:"ENFJ · Full-Stack UI/UX Designer"}),u.jsx("p",{className:"mb-5",style:{fontSize:"0.8125rem",color:"rgba(255,255,255,0.4)",lineHeight:1.8},children:"PDF简历：个人信息、求职意向、教育背景、工作经历、技能清单等。"}),u.jsx("div",{className:"flex gap-6 mb-6",children:[["10+","年经验"],["60+","项目"],["20+","AI工具"]].map(([D,P])=>u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"1.125rem",fontWeight:800,color:"#f0f4f8",lineHeight:1.5},children:D}),u.jsx("div",{className:"text-xs mt-0.5",style:{color:"rgba(255,255,255,0.28)"},children:P})]},P))}),u.jsxs("div",{className:"flex flex-wrap gap-3",children:[u.jsxs("button",{onClick:()=>p(!0),className:"flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.03]",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",color:"var(--bg)",fontWeight:700,boxShadow:"0 0 20px rgba(var(--c1), 0.2)"},children:[u.jsx(hd,{size:13,style:{color:"var(--bg)"}})," ","下载 PDF"]}),u.jsxs("button",{className:"flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.02]",style:{border:"1px solid rgba(var(--c1), 0.3)",color:"rgb(var(--c1))",background:"rgba(var(--c1), 0.08)"},children:[u.jsx(sf,{size:13,style:{color:"rgb(var(--c1))"}})," ","在线版"]})]})]})]})]}),u.jsxs("div",{className:"transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(20px)",transitionDelay:"290ms"},children:[u.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"QUICK MESSAGE"}),u.jsxs("div",{className:"rounded-2xl p-5 mb-4",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)"},children:[u.jsx("textarea",{value:r,onChange:D=>o(D.target.value),rows:5,placeholder:"你好 Vic！我对你的设计作品很感兴趣，希望能进一步交流...",className:"w-full resize-none outline-none text-sm mb-3",style:{background:"transparent",color:"#f0f4f8",lineHeight:1.7}}),u.jsx("button",{onClick:y,disabled:!r.trim(),className:"w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm transition-all duration-200",style:{background:r.trim()?l?"rgba(var(--c1), 0.1)":"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))":"rgba(255, 255, 255, 0.05)",color:r.trim()?l?"rgb(var(--c1))":"var(--bg)":"rgba(255, 255, 255, 0.3)",fontWeight:700,border:r.trim()?l?"1px solid rgba(var(--c1), 0.3)":"none":"1px solid rgba(255, 255, 255, 0.1)",cursor:r.trim()?"pointer":"not-allowed",opacity:r.trim()?1:.5},children:l?u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"✓"})," 已发送！"]}):u.jsxs(u.Fragment,{children:[u.jsx(Wv,{size:13,style:{color:r.trim()?"var(--bg)":"rgba(255, 255, 255, 0.3)"}})," ","发送消息"]})})]}),u.jsxs("div",{className:"rounded-xl p-4 flex items-start gap-3",style:{background:"rgba(0,240,200,0.04)",border:"1px solid rgba(0,240,200,0.1)"},children:[u.jsx("div",{className:"shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center",style:{background:"rgba(0,240,200,0.08)"},children:u.jsx("span",{className:"w-2.5 h-2.5 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 10px rgb(var(--c1))"}})}),u.jsxs("div",{children:[u.jsx("p",{style:{fontSize:"0.875rem",fontWeight:600,color:"#f0f4f8"},children:"目前接受新机会"}),u.jsxs("p",{className:"text-xs mt-0.5",style:{color:"rgba(255,255,255,0.3)",lineHeight:1.6},children:["全职设计师 · 项目合作 · 设计咨询",u.jsx("br",{}),"回复率 97% · 通常 24 小时内响应"]})]})]})]})]}),u.jsxs("div",{className:"pt-7 flex flex-wrap items-center justify-between gap-4",style:{borderTop:"1px solid rgba(255,255,255,0.04)"},children:[u.jsx("div",{className:"flex items-center gap-3",children:u.jsxs("p",{className:"text-xs",style:{color:"rgba(255,255,255,0.2)"},children:["© 2026 · Vic Qu · Designed by Figma"," ",u.jsx("span",{style:{color:"rgb(var(--c1))"},children:"&"}),"TRAE CN"]})}),u.jsx("p",{className:"text-xs",style:{color:"rgba(255,255,255,0.2)"},children:"React · Tailwind · Motion · AI-Augmented · Github"})]})]}),u.jsx(f0,{isOpen:d,onClose:()=>p(!1),onConfirm:T}),M&&u.jsx(Wa,{children:u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(12px)"},onClick:()=>b(!1),children:u.jsxs("div",{className:"relative max-w-md w-full",onClick:D=>D.stopPropagation(),children:[u.jsx("button",{onClick:()=>b(!1),className:"absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"rgba(255, 255, 255, 0.9)"},children:u.jsx(Jr,{size:20})}),u.jsx("div",{className:"rounded-2xl overflow-hidden",style:{background:"white",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)"},children:u.jsx(Zb,{src:Jb,alt:"WeChat QR Code - 长按识别二维码",className:"w-full h-auto",style:{display:"block"}})}),u.jsx("p",{className:"text-center mt-4",style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"0.875rem"},children:"长按图片保存或识别二维码"})]})})})]})}function sw({autoPlay:s=!1,defaultTrackIndex:e=2}){const[t,r]=ie.useState(s),[o,l]=ie.useState(!1),[f,d]=ie.useState(60),[p,m]=ie.useState(0),[v,_]=ie.useState(0),[S,M]=ie.useState(!1),[b,T]=ie.useState(e),[y,x]=ie.useState("bars"),[D,P]=ie.useState(new Array(64).fill(0)),E=ie.useRef(null),W=ie.useRef(null),z=[{name:"Deep Space Drift",artist:"Vic Qu · Ambient",url:"/assets/audio/SoundHelix-Song-1.mp3"},{name:"Neon Dreams",artist:"Vic Qu · Electronic",url:"/assets/audio/SoundHelix-Song-2.mp3"},{name:"Urban Flow",artist:"Vic Qu · Chill",url:"/assets/audio/SoundHelix-Song-3.mp3"}],I=z[b];ie.useEffect(()=>{E.current&&(E.current.volume=f/100,E.current.muted=o)},[f,o]),ie.useEffect(()=>{const ee=E.current;if(!ee)return;const se=()=>m(ee.currentTime),O=()=>_(ee.duration),re=()=>{b<z.length-1?T(b+1):r(!1)};return ee.addEventListener("timeupdate",se),ee.addEventListener("loadedmetadata",O),ee.addEventListener("ended",re),()=>{ee.removeEventListener("timeupdate",se),ee.removeEventListener("loadedmetadata",O),ee.removeEventListener("ended",re)}},[b,z.length]),ie.useEffect(()=>{const ee=E.current;ee&&s&&(ee.load(),ee.play().catch(se=>{console.log("Autoplay prevented: ",se),se.name==="NotAllowedError"&&r(!1)}))},[]),ie.useEffect(()=>{const ee=E.current;ee&&(ee.load(),t&&ee.play().catch(console.log))},[b,t]),ie.useEffect(()=>{if(t){const ee=()=>{P(Array.from({length:64},()=>Math.random()*.8+.2)),W.current=requestAnimationFrame(ee)};ee()}else W.current&&cancelAnimationFrame(W.current),P(new Array(64).fill(.1));return()=>{W.current&&cancelAnimationFrame(W.current)}},[t]);const U=async()=>{const ee=E.current;if(ee)if(t)ee.pause(),r(!1);else try{await ee.play(),r(!0)}catch(se){console.log("播放失败：",se)}},N=()=>M(!S),C=()=>l(!o),B=ee=>{d(Number(ee.target.value))},ae=ee=>{if(!E.current||!v)return;const se=(ee.clientX-ee.currentTarget.getBoundingClientRect().left)/ee.currentTarget.offsetWidth;E.current.currentTime=se*v},Z=()=>{b>0&&T(b-1)},fe=()=>{b<z.length-1&&T(b+1)},me=ee=>{if(isNaN(ee))return"0:00";const se=Math.floor(ee/60),O=Math.floor(ee%60).toString().padStart(2,"0");return`${se}:${O}`},ue=()=>{const ee=["bars","wave","circle","spectrum"];x(ee[(ee.indexOf(y)+1)%ee.length])},pe=()=>{const se=Math.floor(D.length/32);switch(y){case"bars":return u.jsx("div",{className:"flex items-end justify-center gap-1 h-24 px-2",children:Array.from({length:32}).map((O,re)=>{const Le=D[re*se]||.1,te=t?Math.max(4,Le*80):4;return u.jsx("div",{className:"flex-1 rounded-t-full transition-all",style:{height:`${te}px`,background:"linear-gradient(to top, rgb(var(--c1)), rgb(var(--c2)))"}},re)})});case"wave":return u.jsx("svg",{className:"w-full h-24",viewBox:"0 0 320 50",children:u.jsx("path",{d:"M0 30 "+Array.from({length:32}).map((O,re)=>`L${re/32*320} ${48-(D[re*se]||0)*40}`).join(" "),fill:"none",stroke:"rgb(var(--c1))",strokeWidth:"1"})});case"circle":return u.jsx("div",{className:"relative w-full h-24 flex items-center justify-center",children:Array.from({length:24}).map((O,re)=>{const Le=D[Math.floor(re/24*D.length)]||.2,te=t?20+Le*25:20;return u.jsx("div",{className:"absolute w-0.5 rounded-full",style:{height:`${te}px`,background:"rgb(var(--c2))",transform:`rotate(${re*15}deg) translateY(-${te/2}px)`}},re)})});default:return u.jsx("div",{className:"h-24 flex items-center justify-center text-white",children:"🎵"})}},j=()=>{switch(y){case"bars":return u.jsx(iv,{size:14});case"wave":return u.jsx(Wx,{size:14});case"circle":return u.jsx(Qp,{size:14});default:return u.jsx(Qp,{size:14})}};return u.jsxs(u.Fragment,{children:[u.jsx("audio",{ref:E,src:I.url,preload:"auto"}),u.jsxs("div",{className:"fixed z-50 transition-all duration-500",style:{bottom:"calc(1.5rem / var(--screen-scale))",right:"calc(1.5rem / var(--screen-scale))",transform:"scale(var(--screen-scale))",transformOrigin:"bottom right"},children:[!S&&u.jsx("button",{onClick:N,className:"w-14 h-14 rounded-full flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:u.jsx(qp,{size:24,className:`text-white ${t?"animate-spin":""}`})}),S&&u.jsxs("div",{className:"w-[360px] p-5 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:u.jsx(qp,{size:20,className:`text-white ${t?"animate-spin":""}`})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("div",{className:"text-white text-sm truncate",children:I.name}),u.jsx("div",{className:"text-white/60 text-xs truncate",children:I.artist})]}),u.jsx("button",{onClick:N,className:"w-8 h-8 rounded-full hover:bg-white/10",children:u.jsx(o0,{size:18,className:"text-white/60"})})]}),u.jsxs("div",{className:"relative rounded-lg bg-white/5 mb-3",children:[pe(),u.jsx("button",{onClick:ue,className:"absolute top-2 right-2 w-7 h-7 rounded-full bg-black/30 flex items-center justify-center text-white",children:j()})]}),u.jsxs("div",{className:"mb-2",children:[u.jsx("div",{className:"h-1.5 bg-white/10 rounded-full cursor-pointer",onClick:ae,children:u.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[rgb(var(--c1))] to-[rgb(var(--c2))]",style:{width:`${p/v*100||0}%`}})}),u.jsxs("div",{className:"flex justify-between text-xs text-white/50 mt-1",children:[u.jsx("span",{children:me(p)}),u.jsx("span",{children:me(v)})]})]}),u.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[u.jsx("button",{onClick:Z,disabled:b===0,className:"w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center",children:u.jsx(qv,{size:18,className:"text-white"})}),u.jsx("button",{onClick:U,className:"w-14 h-14 rounded-full flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:t?u.jsx(Dv,{size:20,className:"text-white"}):u.jsx(Ov,{size:20,className:"text-white ml-0.5"})}),u.jsx("button",{onClick:fe,disabled:b===z.length-1,className:"w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center",children:u.jsx(Qv,{size:18,className:"text-white"})})]}),u.jsx("style",{children:`
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
`}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{onClick:C,className:"w-8 h-8 rounded-full hover:bg-white/10",children:o?u.jsx(r1,{size:16,className:"text-white"}):u.jsx(n1,{size:16,className:"text-white"})}),u.jsx("input",{type:"range",min:"0",max:"100",value:f,onChange:B,className:"flex-1 h-1.5 rounded-full volume-slider",style:{background:`linear-gradient(to right, rgb(var(--c1)) ${f}%, rgba(255,255,255,0.2) ${f}%)`}}),u.jsxs("span",{className:"text-xs text-white w-10 text-right",children:[f,"%"]})]})]})]})]})}const t0="/assets/sprite_9900x4800_70-pwo8PaYC.png",ud=9,aw=8,n0=70,ow=400,Nl=.96,lw=(s,e,t)=>{const r=s.scrollTop,o=e-r,l=performance.now(),f=d=>{const p=d-l,m=Math.min(p/t,1),v=m*(2-m);s.scrollTop=r+o*v,m<1&&requestAnimationFrame(f)};requestAnimationFrame(f)},Oa=1100,dd=600;function cw(){const s=ie.useRef(null),e=ie.useRef(null),t=ie.useRef(null),r=ie.useRef(null),o=ie.useRef(null),l=ie.useRef(!1),[f,d]=ie.useState(!1),[p,m]=ie.useState(!1),[v,_]=ie.useState(!1),S=ie.useRef(0),M=()=>{const y=e.current,x=t.current;if(!y||!x)return;const D=window.innerWidth,P=D/Oa,E=dd*P;x.style.height=`${E}px`,x.style.width=`${D}px`,y.style.width=`${Oa*ud*P}px`,y.style.height=`${dd*aw*P}px`},b=y=>{const x=e.current;if(!x)return;S.current=y;const D=window.innerWidth,P=D/Oa,E=y%ud,W=Math.floor(y/ud),z=D/2-(E*Oa+Oa/2)*P,I=-(W*dd*P);x.style.transform=`translate3d(${z}px, ${I}px, 0)`};ie.useEffect(()=>{const y=()=>{_(window.innerWidth<768),f&&(M(),b(S.current))};return window.addEventListener("resize",y),f&&(M(),b(0)),p||(document.body.style.overflow="hidden"),()=>{window.removeEventListener("resize",y),document.body.style.overflow="auto"}},[p,f]),ie.useEffect(()=>{const y=new Image;y.src=t0,y.onload=()=>{d(!0)}},[]);const T=()=>{const y=s.current;!y||p||l.current||(window.requestAnimationFrame(()=>{const x=y.scrollTop,D=y.scrollHeight-y.clientHeight,P=Math.min(1,Math.max(0,x/D));if(o.current){const E=Math.max(0,1-P/.25);o.current.style.opacity=E.toString()}if(P<=Nl){const E=P/Nl,W=Math.floor(E*(n0-1));b(W),t.current&&(t.current.style.transform="scale(1)",t.current.style.opacity="1")}else{b(n0-1);const E=(P-Nl)/(1-Nl);if(t.current){const W=1-E*.5;t.current.style.transformOrigin="top left",t.current.style.transform=`scale(${W})`,t.current.style.opacity=(1-E).toString()}E>=.99&&m(!0)}l.current=!1}),l.current=!0)};return p?null:u.jsxs("div",{ref:s,onScroll:T,className:"scroll-video-overlay",style:{position:"fixed",inset:0,zIndex:99999,overflowY:"auto",overflowX:"hidden",background:"#000",scrollbarWidth:"none"},children:[u.jsx("style",{children:`
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
      `}),u.jsx("div",{style:{height:`${ow}vh`,position:"relative"},children:u.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",width:"100%",overflow:"hidden",background:"#000"},children:[u.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",marginTop:v?"-100px":"0",zIndex:2},children:u.jsx("div",{ref:t,style:{position:"relative",overflow:"hidden",willChange:"transform, opacity"},children:u.jsx("img",{ref:e,src:t0,alt:"intro-sprite",style:{position:"absolute",top:0,left:0,maxWidth:"none",display:"block",willChange:"transform",pointerEvents:"none",opacity:f?1:0}})})}),u.jsx("div",{ref:o,style:{position:"absolute",inset:0,transition:"opacity 0.2s ease",zIndex:3,pointerEvents:"none"},children:u.jsx(W0,{colors:["#00f0c8","#7c6ff7","#ff9ffc"],autoDemo:!0,autoSpeed:.5,autoIntensity:2.2})}),!f&&u.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#000",zIndex:100},children:[u.jsx("div",{className:"loading-text",style:{color:"white",fontSize:"12px",fontWeight:300,textTransform:"uppercase"},children:"Loading"}),u.jsx("div",{style:{width:"70px",height:"1.5px",background:"rgba(255,255,255,0.15)",marginTop:"6px",position:"relative",overflow:"hidden"},children:u.jsx("div",{className:"animate-shimmer-run",style:{position:"absolute",inset:0,background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)"}})})]}),u.jsx("div",{ref:r,style:{position:"absolute",bottom:"8vh",width:"100%",display:"flex",justifyContent:"center",zIndex:10},children:u.jsxs("button",{onClick:y=>{y.preventDefault();const x=s.current;if(!x)return;const D=x.scrollHeight-x.clientHeight;lw(x,D,2800)},className:`
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
              `,children:[u.jsx("div",{className:"scroll-mouse",children:u.jsx("div",{className:"scroll-dot"})}),u.jsx("span",{className:"relative z-10",children:"SCROLL"}),u.jsx(o0,{size:18,className:"animate-bounce transition-colors duration-300 relative z-10"})]})})]})})]})}function uw(){ie.useEffect(()=>{const s=()=>{const r=window.innerWidth,o=1920;let l=1;r>o&&(l=Math.min(r/o,2.5)),document.documentElement.style.setProperty("--screen-scale",l.toString())};s();let e;const t=()=>{clearTimeout(e),e=window.setTimeout(s,200)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),clearTimeout(e)}},[])}function dw(){return uw(),u.jsxs(Ox,{children:[u.jsx(cw,{}),u.jsx(h1,{}),u.jsx(sw,{autoPlay:!0,defaultTrackIndex:2}),u.jsx("div",{className:"hidden md:block",children:u.jsx(zx,{})}),u.jsx("div",{className:"min-h-screen screen-scaled-root",style:{background:"var(--bg, #05050a)",color:"#f0f4f8",msOverflowStyle:"none",scrollbarWidth:"none"},children:u.jsxs("main",{children:[u.jsx(Tb,{}),u.jsx(Nb,{}),u.jsx(kb,{}),u.jsx(Gb,{}),u.jsx(Qb,{}),u.jsx(rw,{})]})})]})}Ux.createRoot(document.getElementById("root")).render(u.jsx(dw,{}));
