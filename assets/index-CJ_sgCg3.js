(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Eu={exports:{}},Lo={},Tu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function Lx(){if(Op)return gt;Op=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function _(z,re,Le){this.props=z,this.context=re,this.refs=w,this.updater=Le||M}_.prototype.isReactComponent={},_.prototype.setState=function(z,re){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,re,"setState")},_.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function S(){}S.prototype=_.prototype;function P(z,re,Le){this.props=z,this.context=re,this.refs=w,this.updater=Le||M}var D=P.prototype=new S;D.constructor=P,b(D,_.prototype),D.isPureReactComponent=!0;var T=Array.isArray,B=Object.prototype.hasOwnProperty,O={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function U(z,re,Le){var ne,ge={},we=null,Se=null;if(re!=null)for(ne in re.ref!==void 0&&(Se=re.ref),re.key!==void 0&&(we=""+re.key),re)B.call(re,ne)&&!L.hasOwnProperty(ne)&&(ge[ne]=re[ne]);var Re=arguments.length-2;if(Re===1)ge.children=Le;else if(1<Re){for(var Oe=Array(Re),Ke=0;Ke<Re;Ke++)Oe[Ke]=arguments[Ke+2];ge.children=Oe}if(z&&z.defaultProps)for(ne in Re=z.defaultProps,Re)ge[ne]===void 0&&(ge[ne]=Re[ne]);return{$$typeof:r,type:z,key:we,ref:Se,props:ge,_owner:O.current}}function R(z,re){return{$$typeof:r,type:z.type,key:re,ref:z.ref,props:z.props,_owner:z._owner}}function C(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function j(z){var re={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Le){return re[Le]})}var se=/\/+/g;function J(z,re){return typeof z=="object"&&z!==null&&z.key!=null?j(""+z.key):re.toString(36)}function fe(z,re,Le,ne,ge){var we=typeof z;(we==="undefined"||we==="boolean")&&(z=null);var Se=!1;if(z===null)Se=!0;else switch(we){case"string":case"number":Se=!0;break;case"object":switch(z.$$typeof){case r:case e:Se=!0}}if(Se)return Se=z,ge=ge(Se),z=ne===""?"."+J(Se,0):ne,T(ge)?(Le="",z!=null&&(Le=z.replace(se,"$&/")+"/"),fe(ge,re,Le,"",function(Ke){return Ke})):ge!=null&&(C(ge)&&(ge=R(ge,Le+(!ge.key||Se&&Se.key===ge.key?"":(""+ge.key).replace(se,"$&/")+"/")+z)),re.push(ge)),1;if(Se=0,ne=ne===""?".":ne+":",T(z))for(var Re=0;Re<z.length;Re++){we=z[Re];var Oe=ne+J(we,Re);Se+=fe(we,re,Le,Oe,ge)}else if(Oe=y(z),typeof Oe=="function")for(z=Oe.call(z),Re=0;!(we=z.next()).done;)we=we.value,Oe=ne+J(we,Re++),Se+=fe(we,re,Le,Oe,ge);else if(we==="object")throw re=String(z),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Se}function me(z,re,Le){if(z==null)return z;var ne=[],ge=0;return fe(z,ne,"","",function(we){return re.call(Le,we,ge++)}),ne}function ue(z){if(z._status===-1){var re=z._result;re=re(),re.then(function(Le){(z._status===0||z._status===-1)&&(z._status=1,z._result=Le)},function(Le){(z._status===0||z._status===-1)&&(z._status=2,z._result=Le)}),z._status===-1&&(z._status=0,z._result=re)}if(z._status===1)return z._result.default;throw z._result}var pe={current:null},H={transition:null},te={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:H,ReactCurrentOwner:O};function oe(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:me,forEach:function(z,re,Le){me(z,function(){re.apply(this,arguments)},Le)},count:function(z){var re=0;return me(z,function(){re++}),re},toArray:function(z){return me(z,function(re){return re})||[]},only:function(z){if(!C(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},gt.Component=_,gt.Fragment=t,gt.Profiler=a,gt.PureComponent=P,gt.StrictMode=s,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,gt.act=oe,gt.cloneElement=function(z,re,Le){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ne=b({},z.props),ge=z.key,we=z.ref,Se=z._owner;if(re!=null){if(re.ref!==void 0&&(we=re.ref,Se=O.current),re.key!==void 0&&(ge=""+re.key),z.type&&z.type.defaultProps)var Re=z.type.defaultProps;for(Oe in re)B.call(re,Oe)&&!L.hasOwnProperty(Oe)&&(ne[Oe]=re[Oe]===void 0&&Re!==void 0?Re[Oe]:re[Oe])}var Oe=arguments.length-2;if(Oe===1)ne.children=Le;else if(1<Oe){Re=Array(Oe);for(var Ke=0;Ke<Oe;Ke++)Re[Ke]=arguments[Ke+2];ne.children=Re}return{$$typeof:r,type:z.type,key:ge,ref:we,props:ne,_owner:Se}},gt.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:l,_context:z},z.Consumer=z},gt.createElement=U,gt.createFactory=function(z){var re=U.bind(null,z);return re.type=z,re},gt.createRef=function(){return{current:null}},gt.forwardRef=function(z){return{$$typeof:d,render:z}},gt.isValidElement=C,gt.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:ue}},gt.memo=function(z,re){return{$$typeof:m,type:z,compare:re===void 0?null:re}},gt.startTransition=function(z){var re=H.transition;H.transition={};try{z()}finally{H.transition=re}},gt.unstable_act=oe,gt.useCallback=function(z,re){return pe.current.useCallback(z,re)},gt.useContext=function(z){return pe.current.useContext(z)},gt.useDebugValue=function(){},gt.useDeferredValue=function(z){return pe.current.useDeferredValue(z)},gt.useEffect=function(z,re){return pe.current.useEffect(z,re)},gt.useId=function(){return pe.current.useId()},gt.useImperativeHandle=function(z,re,Le){return pe.current.useImperativeHandle(z,re,Le)},gt.useInsertionEffect=function(z,re){return pe.current.useInsertionEffect(z,re)},gt.useLayoutEffect=function(z,re){return pe.current.useLayoutEffect(z,re)},gt.useMemo=function(z,re){return pe.current.useMemo(z,re)},gt.useReducer=function(z,re,Le){return pe.current.useReducer(z,re,Le)},gt.useRef=function(z){return pe.current.useRef(z)},gt.useState=function(z){return pe.current.useState(z)},gt.useSyncExternalStore=function(z,re,Le){return pe.current.useSyncExternalStore(z,re,Le)},gt.useTransition=function(){return pe.current.useTransition()},gt.version="18.3.1",gt}var Fp;function nf(){return Fp||(Fp=1,Tu.exports=Lx()),Tu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function kx(){if(zp)return Lo;zp=1;var r=nf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,g={},y=null,M=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)s.call(p,v)&&!l.hasOwnProperty(v)&&(g[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)g[v]===void 0&&(g[v]=p[v]);return{$$typeof:e,type:d,key:y,ref:M,props:g,_owner:a.current}}return Lo.Fragment=t,Lo.jsx=f,Lo.jsxs=f,Lo}var Bp;function Ix(){return Bp||(Bp=1,Eu.exports=kx()),Eu.exports}var u=Ix(),rl={},Au={exports:{}},Cn={},Cu={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Ux(){return jp||(jp=1,(function(r){function e(H,te){var oe=H.length;H.push(te);e:for(;0<oe;){var z=oe-1>>>1,re=H[z];if(0<a(re,te))H[z]=te,H[oe]=re,oe=z;else break e}}function t(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var te=H[0],oe=H.pop();if(oe!==te){H[0]=oe;e:for(var z=0,re=H.length,Le=re>>>1;z<Le;){var ne=2*(z+1)-1,ge=H[ne],we=ne+1,Se=H[we];if(0>a(ge,oe))we<re&&0>a(Se,ge)?(H[z]=Se,H[we]=oe,z=we):(H[z]=ge,H[ne]=oe,z=ne);else if(we<re&&0>a(Se,oe))H[z]=Se,H[we]=oe,z=we;else break e}}return te}function a(H,te){var oe=H.sortIndex-te.sortIndex;return oe!==0?oe:H.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,g=null,y=3,M=!1,b=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(H){for(var te=t(m);te!==null;){if(te.callback===null)s(m);else if(te.startTime<=H)s(m),te.sortIndex=te.expirationTime,e(p,te);else break;te=t(m)}}function T(H){if(w=!1,D(H),!b)if(t(p)!==null)b=!0,ue(B);else{var te=t(m);te!==null&&pe(T,te.startTime-H)}}function B(H,te){b=!1,w&&(w=!1,S(U),U=-1),M=!0;var oe=y;try{for(D(te),g=t(p);g!==null&&(!(g.expirationTime>te)||H&&!j());){var z=g.callback;if(typeof z=="function"){g.callback=null,y=g.priorityLevel;var re=z(g.expirationTime<=te);te=r.unstable_now(),typeof re=="function"?g.callback=re:g===t(p)&&s(p),D(te)}else s(p);g=t(p)}if(g!==null)var Le=!0;else{var ne=t(m);ne!==null&&pe(T,ne.startTime-te),Le=!1}return Le}finally{g=null,y=oe,M=!1}}var O=!1,L=null,U=-1,R=5,C=-1;function j(){return!(r.unstable_now()-C<R)}function se(){if(L!==null){var H=r.unstable_now();C=H;var te=!0;try{te=L(!0,H)}finally{te?J():(O=!1,L=null)}}else O=!1}var J;if(typeof P=="function")J=function(){P(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,me=fe.port2;fe.port1.onmessage=se,J=function(){me.postMessage(null)}}else J=function(){_(se,0)};function ue(H){L=H,O||(O=!0,J())}function pe(H,te){U=_(function(){H(r.unstable_now())},te)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){b||M||(b=!0,ue(B))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(H){switch(y){case 1:case 2:case 3:var te=3;break;default:te=y}var oe=y;y=te;try{return H()}finally{y=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,te){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var oe=y;y=H;try{return te()}finally{y=oe}},r.unstable_scheduleCallback=function(H,te,oe){var z=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?z+oe:z):oe=z,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=oe+re,H={id:v++,callback:te,priorityLevel:H,startTime:oe,expirationTime:re,sortIndex:-1},oe>z?(H.sortIndex=oe,e(m,H),t(p)===null&&H===t(m)&&(w?(S(U),U=-1):w=!0,pe(T,oe-z))):(H.sortIndex=re,e(p,H),b||M||(b=!0,ue(B))),H},r.unstable_shouldYield=j,r.unstable_wrapCallback=function(H){var te=y;return function(){var oe=y;y=te;try{return H.apply(this,arguments)}finally{y=oe}}}})(Ru)),Ru}var Hp;function Ox(){return Hp||(Hp=1,Cu.exports=Ux()),Cu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Fx(){if(Gp)return Cn;Gp=1;var r=nf(),e=Ox();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function y(n){return p.call(g,n)?!0:p.call(v,n)?!1:m.test(n)?g[n]=!0:(v[n]=!0,!1)}function M(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,o,c){if(i===null||typeof i>"u"||M(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,c,h,x,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,P);_[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,P);_[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,P);_[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,o,c){var h=_.hasOwnProperty(i)?_[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,o,h,c)&&(o=null),c||h===null?y(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,c=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var T=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),O=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),j=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),H=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,z;function re(n){if(z===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);z=i&&i[1]||""}return`
`+z+n}var Le=!1;function ne(n,i){if(!n||Le)return"";Le=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var c=ae}Reflect.construct(n,[],i)}else{try{i.call()}catch(ae){c=ae}n.call(i.prototype)}else{try{throw Error()}catch(ae){c=ae}n()}}catch(ae){if(ae&&c&&typeof ae.stack=="string"){for(var h=ae.stack.split(`
`),x=c.stack.split(`
`),E=h.length-1,F=x.length-1;1<=E&&0<=F&&h[E]!==x[F];)F--;for(;1<=E&&0<=F;E--,F--)if(h[E]!==x[F]){if(E!==1||F!==1)do if(E--,F--,0>F||h[E]!==x[F]){var G=`
`+h[E].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=E&&0<=F);break}}}finally{Le=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function ge(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=ne(n.type,!1),n;case 11:return n=ne(n.type.render,!1),n;case 1:return n=ne(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case L:return"Fragment";case O:return"Portal";case R:return"Profiler";case U:return"StrictMode";case J:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case se:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case me:return i=n.displayName||null,i!==null?i:we(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return we(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Oe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,x=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,x.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function At(n){n._valueTracker||(n._valueTracker=Ke(n))}function pt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Oe(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Q(n,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function rn(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Re(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function dt(n,i){ht(n,i);var o=Re(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Mt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Mt(n,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ye(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Mt(n,i,o){(i!=="number"||Nt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Qe=Array.isArray;function I(n,i,o,c){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Re(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function q(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Qe(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Re(o)}}function k(n,i){var o=Re(i.value),c=Re(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Z(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function $(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Te(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?$(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Me,Ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Me=Me||document.createElement("div"),Me.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Me.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function at(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(_e).forEach(function(n){Fe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),_e[i]=_e[n]})});function $e(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||_e.hasOwnProperty(n)&&_e[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,h=$e(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,h):n[o]=h}}var Be=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function st(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,he=null,xe=null;function Ie(n){if(n=vo(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ya(i),Pe(n.stateNode,n.type,i))}}function ke(n){he?xe?xe.push(n):xe=[n]:he=n}function ot(){if(he){var n=he,i=xe;if(xe=he=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function kt(n,i){return n(i)}function Xt(){}var yt=!1;function _n(n,i,o){if(yt)return n(i,o);yt=!0;try{return kt(n,i,o)}finally{yt=!1,(he!==null||xe!==null)&&(Xt(),ot())}}function mn(n,i){var o=n.stateNode;if(o===null)return null;var c=ya(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ts=!1;if(d)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{ts=!1}function Mi(n,i,o,c,h,x,E,F,G){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(o,ae)}catch(ye){this.onError(ye)}}var bi=!1,Er=null,Tr=!1,Yi=null,$o={onError:function(n){bi=!0,Er=n}};function ns(n,i,o,c,h,x,E,F,G){bi=!1,Er=null,Mi.apply($o,arguments)}function ea(n,i,o,c,h,x,E,F,G){if(ns.apply(this,arguments),bi){if(bi){var ae=Er;bi=!1,Er=null}else throw Error(t(198));Tr||(Tr=!0,Yi=ae)}}function pi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ta(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function na(n){if(pi(n)!==n)throw Error(t(188))}function ql(n){var i=n.alternate;if(!i){if(i=pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var h=o.return;if(h===null)break;var x=h.alternate;if(x===null){if(c=h.return,c!==null){o=c;continue}break}if(h.child===x.child){for(x=h.child;x;){if(x===o)return na(h),n;if(x===c)return na(h),i;x=x.sibling}throw Error(t(188))}if(o.return!==c.return)o=h,c=x;else{for(var E=!1,F=h.child;F;){if(F===o){E=!0,o=h,c=x;break}if(F===c){E=!0,c=h,o=x;break}F=F.sibling}if(!E){for(F=x.child;F;){if(F===o){E=!0,o=x,c=h;break}if(F===c){E=!0,c=x,o=h;break}F=F.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function N(n){return n=ql(n),n!==null?Y(n):null}function Y(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Y(n);if(i!==null)return i;n=n.sibling}return null}var le=e.unstable_scheduleCallback,ce=e.unstable_cancelCallback,K=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Ee=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,We=e.unstable_LowPriority,vt=e.unstable_IdlePriority,Et=null,xt=null;function an(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:bt,qe=Math.log,$n=Math.LN2;function bt(n){return n>>>=0,n===0?32:31-(qe(n)/$n|0)|0}var ln=64,ei=4194304;function qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mi(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,h=n.suspendedLanes,x=n.pingedLanes,E=o&268435455;if(E!==0){var F=E&~h;F!==0?c=qt(F):(x&=E,x!==0&&(c=qt(x)))}else E=o&~h,E!==0?c=qt(E):x!==0&&(c=qt(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,x=i&-i,h>=x||h===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-lt(i),h=1<<o,c|=n[o],i&=~h;return c}function Dt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,x=n.pendingLanes;0<x;){var E=31-lt(x),F=1<<E,G=h[E];G===-1?((F&o)===0||(F&c)!==0)&&(h[E]=Dt(F,i)):G<=i&&(n.expiredLanes|=F),x&=~F}}function wi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function gn(){var n=ln;return ln<<=1,(ln&4194240)===0&&(ln=64),n}function Hn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Mn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-lt(i),n[i]=o}function ia(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-lt(o),x=1<<h;i[h]=0,c[h]=-1,n[h]=-1,o&=~x}}function Yl(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-lt(o),h=1<<c;h&i|n[c]&i&&(n[c]|=i),o&=~h}}var Rt=0;function mf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var gf,Ql,xf,vf,yf,Kl=!1,ra=[],Qi=null,Ki=null,Zi=null,to=new Map,no=new Map,Ji=[],tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(n,i){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":to.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(i.pointerId)}}function io(n,i,o,c,h,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:x,targetContainers:[h]},i!==null&&(i=vo(i),i!==null&&Ql(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function ng(n,i,o,c,h){switch(i){case"focusin":return Qi=io(Qi,n,i,o,c,h),!0;case"dragenter":return Ki=io(Ki,n,i,o,c,h),!0;case"mouseover":return Zi=io(Zi,n,i,o,c,h),!0;case"pointerover":var x=h.pointerId;return to.set(x,io(to.get(x)||null,n,i,o,c,h)),!0;case"gotpointercapture":return x=h.pointerId,no.set(x,io(no.get(x)||null,n,i,o,c,h)),!0}return!1}function _f(n){var i=Ar(n.target);if(i!==null){var o=pi(i);if(o!==null){if(i=o.tag,i===13){if(i=ta(o),i!==null){n.blockedOn=i,yf(n.priority,function(){xf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Jl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Ct=c,o.target.dispatchEvent(c),Ct=null}else return i=vo(o),i!==null&&Ql(i),n.blockedOn=o,!1;i.shift()}return!0}function Mf(n,i,o){sa(n)&&o.delete(i)}function ig(){Kl=!1,Qi!==null&&sa(Qi)&&(Qi=null),Ki!==null&&sa(Ki)&&(Ki=null),Zi!==null&&sa(Zi)&&(Zi=null),to.forEach(Mf),no.forEach(Mf)}function ro(n,i){n.blockedOn===i&&(n.blockedOn=null,Kl||(Kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ig)))}function so(n){function i(h){return ro(h,n)}if(0<ra.length){ro(ra[0],n);for(var o=1;o<ra.length;o++){var c=ra[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Qi!==null&&ro(Qi,n),Ki!==null&&ro(Ki,n),Zi!==null&&ro(Zi,n),to.forEach(i),no.forEach(i),o=0;o<Ji.length;o++)c=Ji[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Ji.length&&(o=Ji[0],o.blockedOn===null);)_f(o),o.blockedOn===null&&Ji.shift()}var is=T.ReactCurrentBatchConfig,oa=!0;function rg(n,i,o,c){var h=Rt,x=is.transition;is.transition=null;try{Rt=1,Zl(n,i,o,c)}finally{Rt=h,is.transition=x}}function sg(n,i,o,c){var h=Rt,x=is.transition;is.transition=null;try{Rt=4,Zl(n,i,o,c)}finally{Rt=h,is.transition=x}}function Zl(n,i,o,c){if(oa){var h=Jl(n,i,o,c);if(h===null)mc(n,i,c,aa,o),Sf(n,c);else if(ng(h,n,i,o,c))c.stopPropagation();else if(Sf(n,c),i&4&&-1<tg.indexOf(n)){for(;h!==null;){var x=vo(h);if(x!==null&&gf(x),x=Jl(n,i,o,c),x===null&&mc(n,i,c,aa,o),x===h)break;h=x}h!==null&&c.stopPropagation()}else mc(n,i,c,null,o)}}var aa=null;function Jl(n,i,o,c){if(aa=null,n=W(c),n=Ar(n),n!==null)if(i=pi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ta(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return aa=n,null}function bf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case He:return 1;case tt:return 4;case it:case We:return 16;case vt:return 536870912;default:return 16}default:return 16}}var $i=null,$l=null,la=null;function wf(){if(la)return la;var n,i=$l,o=i.length,c,h="value"in $i?$i.value:$i.textContent,x=h.length;for(n=0;n<o&&i[n]===h[n];n++);var E=o-n;for(c=1;c<=E&&i[o-c]===h[x-c];c++);return la=h.slice(n,1<c?1-c:void 0)}function ca(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ua(){return!0}function Ef(){return!1}function kn(n){function i(o,c,h,x,E){this._reactName=o,this._targetInst=h,this.type=c,this.nativeEvent=x,this.target=E,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(o=n[F],this[F]=o?o(x):x[F]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?ua:Ef,this.isPropagationStopped=Ef,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=kn(rs),oo=oe({},rs,{view:0,detail:0}),og=kn(oo),tc,nc,ao,da=oe({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ao&&(ao&&n.type==="mousemove"?(tc=n.screenX-ao.screenX,nc=n.screenY-ao.screenY):nc=tc=0,ao=n),tc)},movementY:function(n){return"movementY"in n?n.movementY:nc}}),Tf=kn(da),ag=oe({},da,{dataTransfer:0}),lg=kn(ag),cg=oe({},oo,{relatedTarget:0}),ic=kn(cg),ug=oe({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),dg=kn(ug),fg=oe({},rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hg=kn(fg),pg=oe({},rs,{data:0}),Af=kn(pg),mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=xg[n])?!!i[n]:!1}function rc(){return vg}var yg=oe({},oo,{key:function(n){if(n.key){var i=mg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ca(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(n){return n.type==="keypress"?ca(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ca(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Sg=kn(yg),_g=oe({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=kn(_g),Mg=oe({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),bg=kn(Mg),wg=oe({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eg=kn(wg),Tg=oe({},da,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ag=kn(Tg),Cg=[9,13,27,32],sc=d&&"CompositionEvent"in window,lo=null;d&&"documentMode"in document&&(lo=document.documentMode);var Rg=d&&"TextEvent"in window&&!lo,Rf=d&&(!sc||lo&&8<lo&&11>=lo),Nf=" ",Pf=!1;function Df(n,i){switch(n){case"keyup":return Cg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ss=!1;function Ng(n,i){switch(n){case"compositionend":return Lf(i);case"keypress":return i.which!==32?null:(Pf=!0,Nf);case"textInput":return n=i.data,n===Nf&&Pf?null:n;default:return null}}function Pg(n,i){if(ss)return n==="compositionend"||!sc&&Df(n,i)?(n=wf(),la=$l=$i=null,ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rf&&i.locale!=="ko"?null:i.data;default:return null}}var Dg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Dg[n.type]:i==="textarea"}function If(n,i,o,c){ke(c),i=ga(i,"onChange"),0<i.length&&(o=new ec("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var co=null,uo=null;function Lg(n){$f(n,0)}function fa(n){var i=us(n);if(pt(i))return n}function kg(n,i){if(n==="change")return i}var Uf=!1;if(d){var oc;if(d){var ac="oninput"in document;if(!ac){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),ac=typeof Of.oninput=="function"}oc=ac}else oc=!1;Uf=oc&&(!document.documentMode||9<document.documentMode)}function Ff(){co&&(co.detachEvent("onpropertychange",zf),uo=co=null)}function zf(n){if(n.propertyName==="value"&&fa(uo)){var i=[];If(i,uo,n,W(n)),_n(Lg,i)}}function Ig(n,i,o){n==="focusin"?(Ff(),co=i,uo=o,co.attachEvent("onpropertychange",zf)):n==="focusout"&&Ff()}function Ug(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fa(uo)}function Og(n,i){if(n==="click")return fa(i)}function Fg(n,i){if(n==="input"||n==="change")return fa(i)}function zg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ti=typeof Object.is=="function"?Object.is:zg;function fo(n,i){if(ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var h=o[c];if(!p.call(i,h)||!ti(n[h],i[h]))return!1}return!0}function Bf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jf(n,i){var o=Bf(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Bf(o)}}function Hf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Hf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Gf(){for(var n=window,i=Nt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Nt(n.document)}return i}function lc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Bg(n){var i=Gf(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Hf(o.ownerDocument.documentElement,o)){if(c!==null&&lc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,x=Math.min(c.start,h);c=c.end===void 0?x:Math.min(c.end,h),!n.extend&&x>c&&(h=c,c=x,x=h),h=jf(o,x);var E=jf(o,c);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var jg=d&&"documentMode"in document&&11>=document.documentMode,os=null,cc=null,ho=null,uc=!1;function Vf(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;uc||os==null||os!==Nt(c)||(c=os,"selectionStart"in c&&lc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ho&&fo(ho,c)||(ho=c,c=ga(cc,"onSelect"),0<c.length&&(i=new ec("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=os)))}function ha(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var as={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},dc={},Wf={};d&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function pa(n){if(dc[n])return dc[n];if(!as[n])return n;var i=as[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Wf)return dc[n]=i[o];return n}var Xf=pa("animationend"),qf=pa("animationiteration"),Yf=pa("animationstart"),Qf=pa("transitionend"),Kf=new Map,Zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(n,i){Kf.set(n,i),l(i,[n])}for(var fc=0;fc<Zf.length;fc++){var hc=Zf[fc],Hg=hc.toLowerCase(),Gg=hc[0].toUpperCase()+hc.slice(1);er(Hg,"on"+Gg)}er(Xf,"onAnimationEnd"),er(qf,"onAnimationIteration"),er(Yf,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Qf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vg=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Jf(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ea(c,i,void 0,n),n.currentTarget=null}function $f(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],h=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var E=c.length-1;0<=E;E--){var F=c[E],G=F.instance,ae=F.currentTarget;if(F=F.listener,G!==x&&h.isPropagationStopped())break e;Jf(h,F,ae),x=G}else for(E=0;E<c.length;E++){if(F=c[E],G=F.instance,ae=F.currentTarget,F=F.listener,G!==x&&h.isPropagationStopped())break e;Jf(h,F,ae),x=G}}}if(Tr)throw n=Yi,Tr=!1,Yi=null,n}function It(n,i){var o=i[_c];o===void 0&&(o=i[_c]=new Set);var c=n+"__bubble";o.has(c)||(eh(i,n,2,!1),o.add(c))}function pc(n,i,o){var c=0;i&&(c|=4),eh(o,n,c,i)}var ma="_reactListening"+Math.random().toString(36).slice(2);function mo(n){if(!n[ma]){n[ma]=!0,s.forEach(function(o){o!=="selectionchange"&&(Vg.has(o)||pc(o,!1,n),pc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ma]||(i[ma]=!0,pc("selectionchange",!1,i))}}function eh(n,i,o,c){switch(bf(i)){case 1:var h=rg;break;case 4:h=sg;break;default:h=Zl}o=h.bind(null,i,o,n),h=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function mc(n,i,o,c,h){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var F=c.stateNode.containerInfo;if(F===h||F.nodeType===8&&F.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var G=E.tag;if((G===3||G===4)&&(G=E.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;E=E.return}for(;F!==null;){if(E=Ar(F),E===null)return;if(G=E.tag,G===5||G===6){c=x=E;continue e}F=F.parentNode}}c=c.return}_n(function(){var ae=x,ye=W(o),be=[];e:{var ve=Kf.get(n);if(ve!==void 0){var Ue=ec,je=n;switch(n){case"keypress":if(ca(o)===0)break e;case"keydown":case"keyup":Ue=Sg;break;case"focusin":je="focus",Ue=ic;break;case"focusout":je="blur",Ue=ic;break;case"beforeblur":case"afterblur":Ue=ic;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=bg;break;case Xf:case qf:case Yf:Ue=dg;break;case Qf:Ue=Eg;break;case"scroll":Ue=og;break;case"wheel":Ue=Ag;break;case"copy":case"cut":case"paste":Ue=hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Cf}var Ge=(i&4)!==0,Ht=!Ge&&n==="scroll",ee=Ge?ve!==null?ve+"Capture":null:ve;Ge=[];for(var V=ae,ie;V!==null;){ie=V;var Ae=ie.stateNode;if(ie.tag===5&&Ae!==null&&(ie=Ae,ee!==null&&(Ae=mn(V,ee),Ae!=null&&Ge.push(go(V,Ae,ie)))),Ht)break;V=V.return}0<Ge.length&&(ve=new Ue(ve,je,null,o,ye),be.push({event:ve,listeners:Ge}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ve&&o!==Ct&&(je=o.relatedTarget||o.fromElement)&&(Ar(je)||je[Ei]))break e;if((Ue||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(je=o.relatedTarget||o.toElement,Ue=ae,je=je?Ar(je):null,je!==null&&(Ht=pi(je),je!==Ht||je.tag!==5&&je.tag!==6)&&(je=null)):(Ue=null,je=ae),Ue!==je)){if(Ge=Tf,Ae="onMouseLeave",ee="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=Cf,Ae="onPointerLeave",ee="onPointerEnter",V="pointer"),Ht=Ue==null?ve:us(Ue),ie=je==null?ve:us(je),ve=new Ge(Ae,V+"leave",Ue,o,ye),ve.target=Ht,ve.relatedTarget=ie,Ae=null,Ar(ye)===ae&&(Ge=new Ge(ee,V+"enter",je,o,ye),Ge.target=ie,Ge.relatedTarget=Ht,Ae=Ge),Ht=Ae,Ue&&je)t:{for(Ge=Ue,ee=je,V=0,ie=Ge;ie;ie=ls(ie))V++;for(ie=0,Ae=ee;Ae;Ae=ls(Ae))ie++;for(;0<V-ie;)Ge=ls(Ge),V--;for(;0<ie-V;)ee=ls(ee),ie--;for(;V--;){if(Ge===ee||ee!==null&&Ge===ee.alternate)break t;Ge=ls(Ge),ee=ls(ee)}Ge=null}else Ge=null;Ue!==null&&th(be,ve,Ue,Ge,!1),je!==null&&Ht!==null&&th(be,Ht,je,Ge,!0)}}e:{if(ve=ae?us(ae):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var Xe=kg;else if(kf(ve))if(Uf)Xe=Fg;else{Xe=Ug;var Ze=Ig}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Xe=Og);if(Xe&&(Xe=Xe(n,ae))){If(be,Xe,o,ye);break e}Ze&&Ze(n,ve,ae),n==="focusout"&&(Ze=ve._wrapperState)&&Ze.controlled&&ve.type==="number"&&Mt(ve,"number",ve.value)}switch(Ze=ae?us(ae):window,n){case"focusin":(kf(Ze)||Ze.contentEditable==="true")&&(os=Ze,cc=ae,ho=null);break;case"focusout":ho=cc=os=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,Vf(be,o,ye);break;case"selectionchange":if(jg)break;case"keydown":case"keyup":Vf(be,o,ye)}var Je;if(sc)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ss?Df(n,o)&&(nt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(Rf&&o.locale!=="ko"&&(ss||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ss&&(Je=wf()):($i=ye,$l="value"in $i?$i.value:$i.textContent,ss=!0)),Ze=ga(ae,nt),0<Ze.length&&(nt=new Af(nt,n,null,o,ye),be.push({event:nt,listeners:Ze}),Je?nt.data=Je:(Je=Lf(o),Je!==null&&(nt.data=Je)))),(Je=Rg?Ng(n,o):Pg(n,o))&&(ae=ga(ae,"onBeforeInput"),0<ae.length&&(ye=new Af("onBeforeInput","beforeinput",null,o,ye),be.push({event:ye,listeners:ae}),ye.data=Je))}$f(be,i)})}function go(n,i,o){return{instance:n,listener:i,currentTarget:o}}function ga(n,i){for(var o=i+"Capture",c=[];n!==null;){var h=n,x=h.stateNode;h.tag===5&&x!==null&&(h=x,x=mn(n,o),x!=null&&c.unshift(go(n,x,h)),x=mn(n,i),x!=null&&c.push(go(n,x,h))),n=n.return}return c}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function th(n,i,o,c,h){for(var x=i._reactName,E=[];o!==null&&o!==c;){var F=o,G=F.alternate,ae=F.stateNode;if(G!==null&&G===c)break;F.tag===5&&ae!==null&&(F=ae,h?(G=mn(o,x),G!=null&&E.unshift(go(o,G,F))):h||(G=mn(o,x),G!=null&&E.push(go(o,G,F)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var Wg=/\r\n?/g,Xg=/\u0000|\uFFFD/g;function nh(n){return(typeof n=="string"?n:""+n).replace(Wg,`
`).replace(Xg,"")}function xa(n,i,o){if(i=nh(i),nh(n)!==i&&o)throw Error(t(425))}function va(){}var gc=null,xc=null;function vc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yc=typeof setTimeout=="function"?setTimeout:void 0,qg=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,Yg=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(n){return ih.resolve(null).then(n).catch(Qg)}:yc;function Qg(n){setTimeout(function(){throw n})}function Sc(n,i){var o=i,c=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(c===0){n.removeChild(h),so(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=h}while(o);so(i)}function tr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function rh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var cs=Math.random().toString(36).slice(2),gi="__reactFiber$"+cs,xo="__reactProps$"+cs,Ei="__reactContainer$"+cs,_c="__reactEvents$"+cs,Kg="__reactListeners$"+cs,Zg="__reactHandles$"+cs;function Ar(n){var i=n[gi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ei]||o[gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=rh(n);n!==null;){if(o=n[gi])return o;n=rh(n)}return i}n=o,o=n.parentNode}return null}function vo(n){return n=n[gi]||n[Ei],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ya(n){return n[xo]||null}var Mc=[],ds=-1;function nr(n){return{current:n}}function Ut(n){0>ds||(n.current=Mc[ds],Mc[ds]=null,ds--)}function Lt(n,i){ds++,Mc[ds]=n.current,n.current=i}var ir={},cn=nr(ir),bn=nr(!1),Cr=ir;function fs(n,i){var o=n.type.contextTypes;if(!o)return ir;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},x;for(x in o)h[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function wn(n){return n=n.childContextTypes,n!=null}function Sa(){Ut(bn),Ut(cn)}function sh(n,i,o){if(cn.current!==ir)throw Error(t(168));Lt(cn,i),Lt(bn,o)}function oh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,Se(n)||"Unknown",h));return oe({},o,c)}function _a(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ir,Cr=cn.current,Lt(cn,n),Lt(bn,bn.current),!0}function ah(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=oh(n,i,Cr),c.__reactInternalMemoizedMergedChildContext=n,Ut(bn),Ut(cn),Lt(cn,n)):Ut(bn),Lt(bn,o)}var Ti=null,Ma=!1,bc=!1;function lh(n){Ti===null?Ti=[n]:Ti.push(n)}function Jg(n){Ma=!0,lh(n)}function rr(){if(!bc&&Ti!==null){bc=!0;var n=0,i=Rt;try{var o=Ti;for(Rt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Ti=null,Ma=!1}catch(h){throw Ti!==null&&(Ti=Ti.slice(n+1)),le(He,rr),h}finally{Rt=i,bc=!1}}return null}var hs=[],ps=0,ba=null,wa=0,Gn=[],Vn=0,Rr=null,Ai=1,Ci="";function Nr(n,i){hs[ps++]=wa,hs[ps++]=ba,ba=n,wa=i}function ch(n,i,o){Gn[Vn++]=Ai,Gn[Vn++]=Ci,Gn[Vn++]=Rr,Rr=n;var c=Ai;n=Ci;var h=32-lt(c)-1;c&=~(1<<h),o+=1;var x=32-lt(i)+h;if(30<x){var E=h-h%5;x=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Ai=1<<32-lt(i)+h|o<<h|c,Ci=x+n}else Ai=1<<x|o<<h|c,Ci=n}function wc(n){n.return!==null&&(Nr(n,1),ch(n,1,0))}function Ec(n){for(;n===ba;)ba=hs[--ps],hs[ps]=null,wa=hs[--ps],hs[ps]=null;for(;n===Rr;)Rr=Gn[--Vn],Gn[Vn]=null,Ci=Gn[--Vn],Gn[Vn]=null,Ai=Gn[--Vn],Gn[Vn]=null}var In=null,Un=null,Ot=!1,ni=null;function uh(n,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function dh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,In=n,Un=tr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,In=n,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Rr!==null?{id:Ai,overflow:Ci}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,In=n,Un=null,!0):!1;default:return!1}}function Tc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ac(n){if(Ot){var i=Un;if(i){var o=i;if(!dh(n,i)){if(Tc(n))throw Error(t(418));i=tr(o.nextSibling);var c=In;i&&dh(n,i)?uh(c,o):(n.flags=n.flags&-4097|2,Ot=!1,In=n)}}else{if(Tc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ot=!1,In=n}}}function fh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;In=n}function Ea(n){if(n!==In)return!1;if(!Ot)return fh(n),Ot=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!vc(n.type,n.memoizedProps)),i&&(i=Un)){if(Tc(n))throw hh(),Error(t(418));for(;i;)uh(n,i),i=tr(i.nextSibling)}if(fh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Un=tr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Un=null}}else Un=In?tr(n.stateNode.nextSibling):null;return!0}function hh(){for(var n=Un;n;)n=tr(n.nextSibling)}function ms(){Un=In=null,Ot=!1}function Cc(n){ni===null?ni=[n]:ni.push(n)}var $g=T.ReactCurrentBatchConfig;function yo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var h=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(E){var F=h.refs;E===null?delete F[x]:F[x]=E},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ta(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ph(n){var i=n._init;return i(n._payload)}function mh(n){function i(ee,V){if(n){var ie=ee.deletions;ie===null?(ee.deletions=[V],ee.flags|=16):ie.push(V)}}function o(ee,V){if(!n)return null;for(;V!==null;)i(ee,V),V=V.sibling;return null}function c(ee,V){for(ee=new Map;V!==null;)V.key!==null?ee.set(V.key,V):ee.set(V.index,V),V=V.sibling;return ee}function h(ee,V){return ee=fr(ee,V),ee.index=0,ee.sibling=null,ee}function x(ee,V,ie){return ee.index=ie,n?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<V?(ee.flags|=2,V):ie):(ee.flags|=2,V)):(ee.flags|=1048576,V)}function E(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function F(ee,V,ie,Ae){return V===null||V.tag!==6?(V=yu(ie,ee.mode,Ae),V.return=ee,V):(V=h(V,ie),V.return=ee,V)}function G(ee,V,ie,Ae){var Xe=ie.type;return Xe===L?ye(ee,V,ie.props.children,Ae,ie.key):V!==null&&(V.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ue&&ph(Xe)===V.type)?(Ae=h(V,ie.props),Ae.ref=yo(ee,V,ie),Ae.return=ee,Ae):(Ae=Ka(ie.type,ie.key,ie.props,null,ee.mode,Ae),Ae.ref=yo(ee,V,ie),Ae.return=ee,Ae)}function ae(ee,V,ie,Ae){return V===null||V.tag!==4||V.stateNode.containerInfo!==ie.containerInfo||V.stateNode.implementation!==ie.implementation?(V=Su(ie,ee.mode,Ae),V.return=ee,V):(V=h(V,ie.children||[]),V.return=ee,V)}function ye(ee,V,ie,Ae,Xe){return V===null||V.tag!==7?(V=Fr(ie,ee.mode,Ae,Xe),V.return=ee,V):(V=h(V,ie),V.return=ee,V)}function be(ee,V,ie){if(typeof V=="string"&&V!==""||typeof V=="number")return V=yu(""+V,ee.mode,ie),V.return=ee,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case B:return ie=Ka(V.type,V.key,V.props,null,ee.mode,ie),ie.ref=yo(ee,null,V),ie.return=ee,ie;case O:return V=Su(V,ee.mode,ie),V.return=ee,V;case ue:var Ae=V._init;return be(ee,Ae(V._payload),ie)}if(Qe(V)||te(V))return V=Fr(V,ee.mode,ie,null),V.return=ee,V;Ta(ee,V)}return null}function ve(ee,V,ie,Ae){var Xe=V!==null?V.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Xe!==null?null:F(ee,V,""+ie,Ae);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:return ie.key===Xe?G(ee,V,ie,Ae):null;case O:return ie.key===Xe?ae(ee,V,ie,Ae):null;case ue:return Xe=ie._init,ve(ee,V,Xe(ie._payload),Ae)}if(Qe(ie)||te(ie))return Xe!==null?null:ye(ee,V,ie,Ae,null);Ta(ee,ie)}return null}function Ue(ee,V,ie,Ae,Xe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ee=ee.get(ie)||null,F(V,ee,""+Ae,Xe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case B:return ee=ee.get(Ae.key===null?ie:Ae.key)||null,G(V,ee,Ae,Xe);case O:return ee=ee.get(Ae.key===null?ie:Ae.key)||null,ae(V,ee,Ae,Xe);case ue:var Ze=Ae._init;return Ue(ee,V,ie,Ze(Ae._payload),Xe)}if(Qe(Ae)||te(Ae))return ee=ee.get(ie)||null,ye(V,ee,Ae,Xe,null);Ta(V,Ae)}return null}function je(ee,V,ie,Ae){for(var Xe=null,Ze=null,Je=V,nt=V=0,tn=null;Je!==null&&nt<ie.length;nt++){Je.index>nt?(tn=Je,Je=null):tn=Je.sibling;var wt=ve(ee,Je,ie[nt],Ae);if(wt===null){Je===null&&(Je=tn);break}n&&Je&&wt.alternate===null&&i(ee,Je),V=x(wt,V,nt),Ze===null?Xe=wt:Ze.sibling=wt,Ze=wt,Je=tn}if(nt===ie.length)return o(ee,Je),Ot&&Nr(ee,nt),Xe;if(Je===null){for(;nt<ie.length;nt++)Je=be(ee,ie[nt],Ae),Je!==null&&(V=x(Je,V,nt),Ze===null?Xe=Je:Ze.sibling=Je,Ze=Je);return Ot&&Nr(ee,nt),Xe}for(Je=c(ee,Je);nt<ie.length;nt++)tn=Ue(Je,ee,nt,ie[nt],Ae),tn!==null&&(n&&tn.alternate!==null&&Je.delete(tn.key===null?nt:tn.key),V=x(tn,V,nt),Ze===null?Xe=tn:Ze.sibling=tn,Ze=tn);return n&&Je.forEach(function(hr){return i(ee,hr)}),Ot&&Nr(ee,nt),Xe}function Ge(ee,V,ie,Ae){var Xe=te(ie);if(typeof Xe!="function")throw Error(t(150));if(ie=Xe.call(ie),ie==null)throw Error(t(151));for(var Ze=Xe=null,Je=V,nt=V=0,tn=null,wt=ie.next();Je!==null&&!wt.done;nt++,wt=ie.next()){Je.index>nt?(tn=Je,Je=null):tn=Je.sibling;var hr=ve(ee,Je,wt.value,Ae);if(hr===null){Je===null&&(Je=tn);break}n&&Je&&hr.alternate===null&&i(ee,Je),V=x(hr,V,nt),Ze===null?Xe=hr:Ze.sibling=hr,Ze=hr,Je=tn}if(wt.done)return o(ee,Je),Ot&&Nr(ee,nt),Xe;if(Je===null){for(;!wt.done;nt++,wt=ie.next())wt=be(ee,wt.value,Ae),wt!==null&&(V=x(wt,V,nt),Ze===null?Xe=wt:Ze.sibling=wt,Ze=wt);return Ot&&Nr(ee,nt),Xe}for(Je=c(ee,Je);!wt.done;nt++,wt=ie.next())wt=Ue(Je,ee,nt,wt.value,Ae),wt!==null&&(n&&wt.alternate!==null&&Je.delete(wt.key===null?nt:wt.key),V=x(wt,V,nt),Ze===null?Xe=wt:Ze.sibling=wt,Ze=wt);return n&&Je.forEach(function(Dx){return i(ee,Dx)}),Ot&&Nr(ee,nt),Xe}function Ht(ee,V,ie,Ae){if(typeof ie=="object"&&ie!==null&&ie.type===L&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:e:{for(var Xe=ie.key,Ze=V;Ze!==null;){if(Ze.key===Xe){if(Xe=ie.type,Xe===L){if(Ze.tag===7){o(ee,Ze.sibling),V=h(Ze,ie.props.children),V.return=ee,ee=V;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ue&&ph(Xe)===Ze.type){o(ee,Ze.sibling),V=h(Ze,ie.props),V.ref=yo(ee,Ze,ie),V.return=ee,ee=V;break e}o(ee,Ze);break}else i(ee,Ze);Ze=Ze.sibling}ie.type===L?(V=Fr(ie.props.children,ee.mode,Ae,ie.key),V.return=ee,ee=V):(Ae=Ka(ie.type,ie.key,ie.props,null,ee.mode,Ae),Ae.ref=yo(ee,V,ie),Ae.return=ee,ee=Ae)}return E(ee);case O:e:{for(Ze=ie.key;V!==null;){if(V.key===Ze)if(V.tag===4&&V.stateNode.containerInfo===ie.containerInfo&&V.stateNode.implementation===ie.implementation){o(ee,V.sibling),V=h(V,ie.children||[]),V.return=ee,ee=V;break e}else{o(ee,V);break}else i(ee,V);V=V.sibling}V=Su(ie,ee.mode,Ae),V.return=ee,ee=V}return E(ee);case ue:return Ze=ie._init,Ht(ee,V,Ze(ie._payload),Ae)}if(Qe(ie))return je(ee,V,ie,Ae);if(te(ie))return Ge(ee,V,ie,Ae);Ta(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,V!==null&&V.tag===6?(o(ee,V.sibling),V=h(V,ie),V.return=ee,ee=V):(o(ee,V),V=yu(ie,ee.mode,Ae),V.return=ee,ee=V),E(ee)):o(ee,V)}return Ht}var gs=mh(!0),gh=mh(!1),Aa=nr(null),Ca=null,xs=null,Rc=null;function Nc(){Rc=xs=Ca=null}function Pc(n){var i=Aa.current;Ut(Aa),n._currentValue=i}function Dc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function vs(n,i){Ca=n,Rc=xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(En=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(Rc!==n)if(n={context:n,memoizedValue:i,next:null},xs===null){if(Ca===null)throw Error(t(308));xs=n,Ca.dependencies={lanes:0,firstContext:n}}else xs=xs.next=n;return i}var Pr=null;function Lc(n){Pr===null?Pr=[n]:Pr.push(n)}function xh(n,i,o,c){var h=i.interleaved;return h===null?(o.next=o,Lc(i)):(o.next=h.next,h.next=o),i.interleaved=o,Ri(n,c)}function Ri(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var sr=!1;function kc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ni(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function or(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(St&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Ri(n,o)}return h=c.interleaved,h===null?(i.next=i,Lc(c)):(i.next=h.next,h.next=i),c.interleaved=i,Ri(n,o)}function Ra(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Yl(n,o)}}function yh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var h=null,x=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};x===null?h=x=E:x=x.next=E,o=o.next}while(o!==null);x===null?h=x=i:x=x.next=i}else h=x=i;o={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Na(n,i,o,c){var h=n.updateQueue;sr=!1;var x=h.firstBaseUpdate,E=h.lastBaseUpdate,F=h.shared.pending;if(F!==null){h.shared.pending=null;var G=F,ae=G.next;G.next=null,E===null?x=ae:E.next=ae,E=G;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==E&&(F===null?ye.firstBaseUpdate=ae:F.next=ae,ye.lastBaseUpdate=G))}if(x!==null){var be=h.baseState;E=0,ye=ae=G=null,F=x;do{var ve=F.lane,Ue=F.eventTime;if((c&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Ue,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var je=n,Ge=F;switch(ve=i,Ue=o,Ge.tag){case 1:if(je=Ge.payload,typeof je=="function"){be=je.call(Ue,be,ve);break e}be=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ge.payload,ve=typeof je=="function"?je.call(Ue,be,ve):je,ve==null)break e;be=oe({},be,ve);break e;case 2:sr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,ve=h.effects,ve===null?h.effects=[F]:ve.push(F))}else Ue={eventTime:Ue,lane:ve,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(ae=ye=Ue,G=be):ye=ye.next=Ue,E|=ve;if(F=F.next,F===null){if(F=h.shared.pending,F===null)break;ve=F,F=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(ye===null&&(G=be),h.baseState=G,h.firstBaseUpdate=ae,h.lastBaseUpdate=ye,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else x===null&&(h.shared.lanes=0);kr|=E,n.lanes=E,n.memoizedState=be}}function Sh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=o,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var So={},xi=nr(So),_o=nr(So),Mo=nr(So);function Dr(n){if(n===So)throw Error(t(174));return n}function Ic(n,i){switch(Lt(Mo,i),Lt(_o,n),Lt(xi,So),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Te(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Te(i,n)}Ut(xi),Lt(xi,i)}function ys(){Ut(xi),Ut(_o),Ut(Mo)}function _h(n){Dr(Mo.current);var i=Dr(xi.current),o=Te(i,n.type);i!==o&&(Lt(_o,n),Lt(xi,o))}function Uc(n){_o.current===n&&(Ut(xi),Ut(_o))}var Ft=nr(0);function Pa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Oc=[];function Fc(){for(var n=0;n<Oc.length;n++)Oc[n]._workInProgressVersionPrimary=null;Oc.length=0}var Da=T.ReactCurrentDispatcher,zc=T.ReactCurrentBatchConfig,Lr=0,zt=null,Yt=null,$t=null,La=!1,bo=!1,wo=0,ex=0;function un(){throw Error(t(321))}function Bc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ti(n[o],i[o]))return!1;return!0}function jc(n,i,o,c,h,x){if(Lr=x,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Da.current=n===null||n.memoizedState===null?rx:sx,n=o(c,h),bo){x=0;do{if(bo=!1,wo=0,25<=x)throw Error(t(301));x+=1,$t=Yt=null,i.updateQueue=null,Da.current=ox,n=o(c,h)}while(bo)}if(Da.current=Ua,i=Yt!==null&&Yt.next!==null,Lr=0,$t=Yt=zt=null,La=!1,i)throw Error(t(300));return n}function Hc(){var n=wo!==0;return wo=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?zt.memoizedState=$t=n:$t=$t.next=n,$t}function Xn(){if(Yt===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=Yt.next;var i=$t===null?zt.memoizedState:$t.next;if(i!==null)$t=i,Yt=n;else{if(n===null)throw Error(t(310));Yt=n,n={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},$t===null?zt.memoizedState=$t=n:$t=$t.next=n}return $t}function Eo(n,i){return typeof i=="function"?i(n):i}function Gc(n){var i=Xn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=Yt,h=c.baseQueue,x=o.pending;if(x!==null){if(h!==null){var E=h.next;h.next=x.next,x.next=E}c.baseQueue=h=x,o.pending=null}if(h!==null){x=h.next,c=c.baseState;var F=E=null,G=null,ae=x;do{var ye=ae.lane;if((Lr&ye)===ye)G!==null&&(G=G.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),c=ae.hasEagerState?ae.eagerState:n(c,ae.action);else{var be={lane:ye,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};G===null?(F=G=be,E=c):G=G.next=be,zt.lanes|=ye,kr|=ye}ae=ae.next}while(ae!==null&&ae!==x);G===null?E=c:G.next=F,ti(c,i.memoizedState)||(En=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=G,o.lastRenderedState=c}if(n=o.interleaved,n!==null){h=n;do x=h.lane,zt.lanes|=x,kr|=x,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Vc(n){var i=Xn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,h=o.pending,x=i.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do x=n(x,E.action),E=E.next;while(E!==h);ti(x,i.memoizedState)||(En=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),o.lastRenderedState=x}return[x,c]}function Mh(){}function bh(n,i){var o=zt,c=Xn(),h=i(),x=!ti(c.memoizedState,h);if(x&&(c.memoizedState=h,En=!0),c=c.queue,Wc(Th.bind(null,o,c,n),[n]),c.getSnapshot!==i||x||$t!==null&&$t.memoizedState.tag&1){if(o.flags|=2048,To(9,Eh.bind(null,o,c,h,i),void 0,null),en===null)throw Error(t(349));(Lr&30)!==0||wh(o,i,h)}return h}function wh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Eh(n,i,o,c){i.value=o,i.getSnapshot=c,Ah(i)&&Ch(n)}function Th(n,i,o){return o(function(){Ah(i)&&Ch(n)})}function Ah(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ti(n,o)}catch{return!0}}function Ch(n){var i=Ri(n,1);i!==null&&oi(i,n,1,-1)}function Rh(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:n},i.queue=n,n=n.dispatch=ix.bind(null,zt,n),[i.memoizedState,n]}function To(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Nh(){return Xn().memoizedState}function ka(n,i,o,c){var h=vi();zt.flags|=n,h.memoizedState=To(1|i,o,void 0,c===void 0?null:c)}function Ia(n,i,o,c){var h=Xn();c=c===void 0?null:c;var x=void 0;if(Yt!==null){var E=Yt.memoizedState;if(x=E.destroy,c!==null&&Bc(c,E.deps)){h.memoizedState=To(i,o,x,c);return}}zt.flags|=n,h.memoizedState=To(1|i,o,x,c)}function Ph(n,i){return ka(8390656,8,n,i)}function Wc(n,i){return Ia(2048,8,n,i)}function Dh(n,i){return Ia(4,2,n,i)}function Lh(n,i){return Ia(4,4,n,i)}function kh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ih(n,i,o){return o=o!=null?o.concat([n]):null,Ia(4,4,kh.bind(null,i,n),o)}function Xc(){}function Uh(n,i){var o=Xn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Bc(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Oh(n,i){var o=Xn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Bc(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Fh(n,i,o){return(Lr&21)===0?(n.baseState&&(n.baseState=!1,En=!0),n.memoizedState=o):(ti(o,i)||(o=gn(),zt.lanes|=o,kr|=o,n.baseState=!0),i)}function tx(n,i){var o=Rt;Rt=o!==0&&4>o?o:4,n(!0);var c=zc.transition;zc.transition={};try{n(!1),i()}finally{Rt=o,zc.transition=c}}function zh(){return Xn().memoizedState}function nx(n,i,o){var c=ur(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Bh(n))jh(i,o);else if(o=xh(n,i,o,c),o!==null){var h=vn();oi(o,n,c,h),Hh(o,i,c)}}function ix(n,i,o){var c=ur(n),h={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Bh(n))jh(i,h);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var E=i.lastRenderedState,F=x(E,o);if(h.hasEagerState=!0,h.eagerState=F,ti(F,E)){var G=i.interleaved;G===null?(h.next=h,Lc(i)):(h.next=G.next,G.next=h),i.interleaved=h;return}}catch{}finally{}o=xh(n,i,h,c),o!==null&&(h=vn(),oi(o,n,c,h),Hh(o,i,c))}}function Bh(n){var i=n.alternate;return n===zt||i!==null&&i===zt}function jh(n,i){bo=La=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Hh(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Yl(n,o)}}var Ua={readContext:Wn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},rx={readContext:Wn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:Ph,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,ka(4194308,4,kh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return ka(4194308,4,n,i)},useInsertionEffect:function(n,i){return ka(4,2,n,i)},useMemo:function(n,i){var o=vi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=vi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=nx.bind(null,zt,n),[c.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:Rh,useDebugValue:Xc,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Rh(!1),i=n[0];return n=tx.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=zt,h=vi();if(Ot){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),en===null)throw Error(t(349));(Lr&30)!==0||wh(c,i,o)}h.memoizedState=o;var x={value:o,getSnapshot:i};return h.queue=x,Ph(Th.bind(null,c,x,n),[n]),c.flags|=2048,To(9,Eh.bind(null,c,x,o,i),void 0,null),o},useId:function(){var n=vi(),i=en.identifierPrefix;if(Ot){var o=Ci,c=Ai;o=(c&~(1<<32-lt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=wo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=ex++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},sx={readContext:Wn,useCallback:Uh,useContext:Wn,useEffect:Wc,useImperativeHandle:Ih,useInsertionEffect:Dh,useLayoutEffect:Lh,useMemo:Oh,useReducer:Gc,useRef:Nh,useState:function(){return Gc(Eo)},useDebugValue:Xc,useDeferredValue:function(n){var i=Xn();return Fh(i,Yt.memoizedState,n)},useTransition:function(){var n=Gc(Eo)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Mh,useSyncExternalStore:bh,useId:zh,unstable_isNewReconciler:!1},ox={readContext:Wn,useCallback:Uh,useContext:Wn,useEffect:Wc,useImperativeHandle:Ih,useInsertionEffect:Dh,useLayoutEffect:Lh,useMemo:Oh,useReducer:Vc,useRef:Nh,useState:function(){return Vc(Eo)},useDebugValue:Xc,useDeferredValue:function(n){var i=Xn();return Yt===null?i.memoizedState=n:Fh(i,Yt.memoizedState,n)},useTransition:function(){var n=Vc(Eo)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Mh,useSyncExternalStore:bh,useId:zh,unstable_isNewReconciler:!1};function ii(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function qc(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:oe({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Oa={isMounted:function(n){return(n=n._reactInternals)?pi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=vn(),h=ur(n),x=Ni(c,h);x.payload=i,o!=null&&(x.callback=o),i=or(n,x,h),i!==null&&(oi(i,n,h,c),Ra(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=vn(),h=ur(n),x=Ni(c,h);x.tag=1,x.payload=i,o!=null&&(x.callback=o),i=or(n,x,h),i!==null&&(oi(i,n,h,c),Ra(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=vn(),c=ur(n),h=Ni(o,c);h.tag=2,i!=null&&(h.callback=i),i=or(n,h,c),i!==null&&(oi(i,n,c,o),Ra(i,n,c))}};function Gh(n,i,o,c,h,x,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,E):i.prototype&&i.prototype.isPureReactComponent?!fo(o,c)||!fo(h,x):!0}function Vh(n,i,o){var c=!1,h=ir,x=i.contextType;return typeof x=="object"&&x!==null?x=Wn(x):(h=wn(i)?Cr:cn.current,c=i.contextTypes,x=(c=c!=null)?fs(n,h):ir),i=new i(o,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oa,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=x),i}function Wh(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Oa.enqueueReplaceState(i,i.state,null)}function Yc(n,i,o,c){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},kc(n);var x=i.contextType;typeof x=="object"&&x!==null?h.context=Wn(x):(x=wn(i)?Cr:cn.current,h.context=fs(n,x)),h.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(qc(n,i,x,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Oa.enqueueReplaceState(h,h.state,null),Na(n,o,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,i){try{var o="",c=i;do o+=ge(c),c=c.return;while(c);var h=o}catch(x){h=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:h,digest:null}}function Qc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Kc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var ax=typeof WeakMap=="function"?WeakMap:Map;function Xh(n,i,o){o=Ni(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Va||(Va=!0,du=c),Kc(n,i)},o}function qh(n,i,o){o=Ni(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;o.payload=function(){return c(h)},o.callback=function(){Kc(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(o.callback=function(){Kc(n,i),typeof c!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Yh(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new ax;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(o)||(h.add(o),n=_x.bind(null,n,i,o),i.then(n,n))}function Qh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Kh(n,i,o,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ni(-1,1),i.tag=2,or(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var lx=T.ReactCurrentOwner,En=!1;function xn(n,i,o,c){i.child=n===null?gh(i,null,o,c):gs(i,n.child,o,c)}function Zh(n,i,o,c,h){o=o.render;var x=i.ref;return vs(i,h),c=jc(n,i,o,c,x,h),o=Hc(),n!==null&&!En?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Pi(n,i,h)):(Ot&&o&&wc(i),i.flags|=1,xn(n,i,c,h),i.child)}function Jh(n,i,o,c,h){if(n===null){var x=o.type;return typeof x=="function"&&!vu(x)&&x.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=x,$h(n,i,x,c,h)):(n=Ka(o.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&h)===0){var E=x.memoizedProps;if(o=o.compare,o=o!==null?o:fo,o(E,c)&&n.ref===i.ref)return Pi(n,i,h)}return i.flags|=1,n=fr(x,c),n.ref=i.ref,n.return=i,i.child=n}function $h(n,i,o,c,h){if(n!==null){var x=n.memoizedProps;if(fo(x,c)&&n.ref===i.ref)if(En=!1,i.pendingProps=c=x,(n.lanes&h)!==0)(n.flags&131072)!==0&&(En=!0);else return i.lanes=n.lanes,Pi(n,i,h)}return Zc(n,i,o,c,h)}function ep(n,i,o){var c=i.pendingProps,h=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ms,On),On|=o;else{if((o&1073741824)===0)return n=x!==null?x.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ms,On),On|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:o,Lt(Ms,On),On|=c}else x!==null?(c=x.baseLanes|o,i.memoizedState=null):c=o,Lt(Ms,On),On|=c;return xn(n,i,h,o),i.child}function tp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Zc(n,i,o,c,h){var x=wn(o)?Cr:cn.current;return x=fs(i,x),vs(i,h),o=jc(n,i,o,c,x,h),c=Hc(),n!==null&&!En?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Pi(n,i,h)):(Ot&&c&&wc(i),i.flags|=1,xn(n,i,o,h),i.child)}function np(n,i,o,c,h){if(wn(o)){var x=!0;_a(i)}else x=!1;if(vs(i,h),i.stateNode===null)za(n,i),Vh(i,o,c),Yc(i,o,c,h),c=!0;else if(n===null){var E=i.stateNode,F=i.memoizedProps;E.props=F;var G=E.context,ae=o.contextType;typeof ae=="object"&&ae!==null?ae=Wn(ae):(ae=wn(o)?Cr:cn.current,ae=fs(i,ae));var ye=o.getDerivedStateFromProps,be=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";be||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==c||G!==ae)&&Wh(i,E,c,ae),sr=!1;var ve=i.memoizedState;E.state=ve,Na(i,c,E,h),G=i.memoizedState,F!==c||ve!==G||bn.current||sr?(typeof ye=="function"&&(qc(i,o,ye,c),G=i.memoizedState),(F=sr||Gh(i,o,F,c,ve,G,ae))?(be||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),E.props=c,E.state=G,E.context=ae,c=F):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,vh(n,i),F=i.memoizedProps,ae=i.type===i.elementType?F:ii(i.type,F),E.props=ae,be=i.pendingProps,ve=E.context,G=o.contextType,typeof G=="object"&&G!==null?G=Wn(G):(G=wn(o)?Cr:cn.current,G=fs(i,G));var Ue=o.getDerivedStateFromProps;(ye=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==be||ve!==G)&&Wh(i,E,c,G),sr=!1,ve=i.memoizedState,E.state=ve,Na(i,c,E,h);var je=i.memoizedState;F!==be||ve!==je||bn.current||sr?(typeof Ue=="function"&&(qc(i,o,Ue,c),je=i.memoizedState),(ae=sr||Gh(i,o,ae,c,ve,je,G)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,je,G),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,je,G)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),E.props=c,E.state=je,E.context=G,c=ae):(typeof E.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return Jc(n,i,o,c,x,h)}function Jc(n,i,o,c,h,x){tp(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&ah(i,o,!1),Pi(n,i,x);c=i.stateNode,lx.current=i;var F=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=gs(i,n.child,null,x),i.child=gs(i,null,F,x)):xn(n,i,F,x),i.memoizedState=c.state,h&&ah(i,o,!0),i.child}function ip(n){var i=n.stateNode;i.pendingContext?sh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&sh(n,i.context,!1),Ic(n,i.containerInfo)}function rp(n,i,o,c,h){return ms(),Cc(h),i.flags|=256,xn(n,i,o,c),i.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function eu(n){return{baseLanes:n,cachePool:null,transitions:null}}function sp(n,i,o){var c=i.pendingProps,h=Ft.current,x=!1,E=(i.flags&128)!==0,F;if((F=E)||(F=n!==null&&n.memoizedState===null?!1:(h&2)!==0),F?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Lt(Ft,h&1),n===null)return Ac(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,x?(c=i.mode,x=i.child,E={mode:"hidden",children:E},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=E):x=Za(E,c,0,null),n=Fr(n,c,o,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=eu(o),i.memoizedState=$c,n):tu(i,E));if(h=n.memoizedState,h!==null&&(F=h.dehydrated,F!==null))return cx(n,i,E,c,F,h,o);if(x){x=c.fallback,E=i.mode,h=n.child,F=h.sibling;var G={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=fr(h,G),c.subtreeFlags=h.subtreeFlags&14680064),F!==null?x=fr(F,x):(x=Fr(x,E,o,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,E=n.child.memoizedState,E=E===null?eu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},x.memoizedState=E,x.childLanes=n.childLanes&~o,i.memoizedState=$c,c}return x=n.child,n=x.sibling,c=fr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function tu(n,i){return i=Za({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Fa(n,i,o,c){return c!==null&&Cc(c),gs(i,n.child,null,o),n=tu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function cx(n,i,o,c,h,x,E){if(o)return i.flags&256?(i.flags&=-257,c=Qc(Error(t(422))),Fa(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,h=i.mode,c=Za({mode:"visible",children:c.children},h,0,null),x=Fr(x,h,E,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&gs(i,n.child,null,E),i.child.memoizedState=eu(E),i.memoizedState=$c,x);if((i.mode&1)===0)return Fa(n,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var F=c.dgst;return c=F,x=Error(t(419)),c=Qc(x,c,void 0),Fa(n,i,E,c)}if(F=(E&n.childLanes)!==0,En||F){if(c=en,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==x.retryLane&&(x.retryLane=h,Ri(n,h),oi(c,n,h,-1))}return xu(),c=Qc(Error(t(421))),Fa(n,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Mx.bind(null,n),h._reactRetry=i,null):(n=x.treeContext,Un=tr(h.nextSibling),In=i,Ot=!0,ni=null,n!==null&&(Gn[Vn++]=Ai,Gn[Vn++]=Ci,Gn[Vn++]=Rr,Ai=n.id,Ci=n.overflow,Rr=i),i=tu(i,c.children),i.flags|=4096,i)}function op(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Dc(n.return,i,o)}function nu(n,i,o,c,h){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:h}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=o,x.tailMode=h)}function ap(n,i,o){var c=i.pendingProps,h=c.revealOrder,x=c.tail;if(xn(n,i,c.children,o),c=Ft.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&op(n,o,i);else if(n.tag===19)op(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Lt(Ft,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&Pa(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),nu(i,!1,h,o,x);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Pa(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}nu(i,!0,o,null,x);break;case"together":nu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function za(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),kr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=fr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=fr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function ux(n,i,o){switch(i.tag){case 3:ip(i),ms();break;case 5:_h(i);break;case 1:wn(i.type)&&_a(i);break;case 4:Ic(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Lt(Aa,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Lt(Ft,Ft.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?sp(n,i,o):(Lt(Ft,Ft.current&1),n=Pi(n,i,o),n!==null?n.sibling:null);Lt(Ft,Ft.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return ap(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Lt(Ft,Ft.current),c)break;return null;case 22:case 23:return i.lanes=0,ep(n,i,o)}return Pi(n,i,o)}var lp,iu,cp,up;lp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},iu=function(){},cp=function(n,i,o,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Dr(xi.current);var x=null;switch(o){case"input":h=Q(n,h),c=Q(n,c),x=[];break;case"select":h=oe({},h,{value:void 0}),c=oe({},c,{value:void 0}),x=[];break;case"textarea":h=A(n,h),c=A(n,c),x=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=va)}mt(o,c);var E;o=null;for(ae in h)if(!c.hasOwnProperty(ae)&&h.hasOwnProperty(ae)&&h[ae]!=null)if(ae==="style"){var F=h[ae];for(E in F)F.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(a.hasOwnProperty(ae)?x||(x=[]):(x=x||[]).push(ae,null));for(ae in c){var G=c[ae];if(F=h!=null?h[ae]:void 0,c.hasOwnProperty(ae)&&G!==F&&(G!=null||F!=null))if(ae==="style")if(F){for(E in F)!F.hasOwnProperty(E)||G&&G.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in G)G.hasOwnProperty(E)&&F[E]!==G[E]&&(o||(o={}),o[E]=G[E])}else o||(x||(x=[]),x.push(ae,o)),o=G;else ae==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,F=F?F.__html:void 0,G!=null&&F!==G&&(x=x||[]).push(ae,G)):ae==="children"?typeof G!="string"&&typeof G!="number"||(x=x||[]).push(ae,""+G):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(a.hasOwnProperty(ae)?(G!=null&&ae==="onScroll"&&It("scroll",n),x||F===G||(x=[])):(x=x||[]).push(ae,G))}o&&(x=x||[]).push("style",o);var ae=x;(i.updateQueue=ae)&&(i.flags|=4)}},up=function(n,i,o,c){o!==c&&(i.flags|=4)};function Ao(n,i){if(!Ot)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function dx(n,i,o){var c=i.pendingProps;switch(Ec(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return wn(i.type)&&Sa(),dn(i),null;case 3:return c=i.stateNode,ys(),Ut(bn),Ut(cn),Fc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ea(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(pu(ni),ni=null))),iu(n,i),dn(i),null;case 5:Uc(i);var h=Dr(Mo.current);if(o=i.type,n!==null&&i.stateNode!=null)cp(n,i,o,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return dn(i),null}if(n=Dr(xi.current),Ea(i)){c=i.stateNode,o=i.type;var x=i.memoizedProps;switch(c[gi]=i,c[xo]=x,n=(i.mode&1)!==0,o){case"dialog":It("cancel",c),It("close",c);break;case"iframe":case"object":case"embed":It("load",c);break;case"video":case"audio":for(h=0;h<po.length;h++)It(po[h],c);break;case"source":It("error",c);break;case"img":case"image":case"link":It("error",c),It("load",c);break;case"details":It("toggle",c);break;case"input":rn(c,x),It("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},It("invalid",c);break;case"textarea":q(c,x),It("invalid",c)}mt(o,x),h=null;for(var E in x)if(x.hasOwnProperty(E)){var F=x[E];E==="children"?typeof F=="string"?c.textContent!==F&&(x.suppressHydrationWarning!==!0&&xa(c.textContent,F,n),h=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(x.suppressHydrationWarning!==!0&&xa(c.textContent,F,n),h=["children",""+F]):a.hasOwnProperty(E)&&F!=null&&E==="onScroll"&&It("scroll",c)}switch(o){case"input":At(c),Ye(c,x,!0);break;case"textarea":At(c),Z(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=va)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=$(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(o,{is:c.is}):(n=E.createElement(o),o==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,o),n[gi]=i,n[xo]=c,lp(n,i,!1,!1),i.stateNode=n;e:{switch(E=st(o,c),o){case"dialog":It("cancel",n),It("close",n),h=c;break;case"iframe":case"object":case"embed":It("load",n),h=c;break;case"video":case"audio":for(h=0;h<po.length;h++)It(po[h],n);h=c;break;case"source":It("error",n),h=c;break;case"img":case"image":case"link":It("error",n),It("load",n),h=c;break;case"details":It("toggle",n),h=c;break;case"input":rn(n,c),h=Q(n,c),It("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=oe({},c,{value:void 0}),It("invalid",n);break;case"textarea":q(n,c),h=A(n,c),It("invalid",n);break;default:h=c}mt(o,h),F=h;for(x in F)if(F.hasOwnProperty(x)){var G=F[x];x==="style"?et(n,G):x==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Ne(n,G)):x==="children"?typeof G=="string"?(o!=="textarea"||G!=="")&&at(n,G):typeof G=="number"&&at(n,""+G):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?G!=null&&x==="onScroll"&&It("scroll",n):G!=null&&D(n,x,G,E))}switch(o){case"input":At(n),Ye(n,c,!1);break;case"textarea":At(n),Z(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Re(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?I(n,!!c.multiple,x,!1):c.defaultValue!=null&&I(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=va)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(n&&i.stateNode!=null)up(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Dr(Mo.current),Dr(xi.current),Ea(i)){if(c=i.stateNode,o=i.memoizedProps,c[gi]=i,(x=c.nodeValue!==o)&&(n=In,n!==null))switch(n.tag){case 3:xa(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xa(c.nodeValue,o,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[gi]=i,i.stateNode=c}return dn(i),null;case 13:if(Ut(Ft),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)hh(),ms(),i.flags|=98560,x=!1;else if(x=Ea(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[gi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),x=!1}else ni!==null&&(pu(ni),ni=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ft.current&1)!==0?Qt===0&&(Qt=3):xu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return ys(),iu(n,i),n===null&&mo(i.stateNode.containerInfo),dn(i),null;case 10:return Pc(i.type._context),dn(i),null;case 17:return wn(i.type)&&Sa(),dn(i),null;case 19:if(Ut(Ft),x=i.memoizedState,x===null)return dn(i),null;if(c=(i.flags&128)!==0,E=x.rendering,E===null)if(c)Ao(x,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Pa(n),E!==null){for(i.flags|=128,Ao(x,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)x=o,n=c,x.flags&=14680066,E=x.alternate,E===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=E.childLanes,x.lanes=E.lanes,x.child=E.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=E.memoizedProps,x.memoizedState=E.memoizedState,x.updateQueue=E.updateQueue,x.type=E.type,n=E.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Lt(Ft,Ft.current&1|2),i.child}n=n.sibling}x.tail!==null&&Ee()>bs&&(i.flags|=128,c=!0,Ao(x,!1),i.lanes=4194304)}else{if(!c)if(n=Pa(E),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ao(x,!0),x.tail===null&&x.tailMode==="hidden"&&!E.alternate&&!Ot)return dn(i),null}else 2*Ee()-x.renderingStartTime>bs&&o!==1073741824&&(i.flags|=128,c=!0,Ao(x,!1),i.lanes=4194304);x.isBackwards?(E.sibling=i.child,i.child=E):(o=x.last,o!==null?o.sibling=E:i.child=E,x.last=E)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=Ee(),i.sibling=null,o=Ft.current,Lt(Ft,c?o&1|2:o&1),i):(dn(i),null);case 22:case 23:return gu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(On&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function fx(n,i){switch(Ec(i),i.tag){case 1:return wn(i.type)&&Sa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ys(),Ut(bn),Ut(cn),Fc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Uc(i),null;case 13:if(Ut(Ft),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ms()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ut(Ft),null;case 4:return ys(),null;case 10:return Pc(i.type._context),null;case 22:case 23:return gu(),null;case 24:return null;default:return null}}var Ba=!1,fn=!1,hx=typeof WeakSet=="function"?WeakSet:Set,ze=null;function _s(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Bt(n,i,c)}else o.current=null}function ru(n,i,o){try{o()}catch(c){Bt(n,i,c)}}var dp=!1;function px(n,i){if(gc=oa,n=Gf(),lc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var h=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{o.nodeType,x.nodeType}catch{o=null;break e}var E=0,F=-1,G=-1,ae=0,ye=0,be=n,ve=null;t:for(;;){for(var Ue;be!==o||h!==0&&be.nodeType!==3||(F=E+h),be!==x||c!==0&&be.nodeType!==3||(G=E+c),be.nodeType===3&&(E+=be.nodeValue.length),(Ue=be.firstChild)!==null;)ve=be,be=Ue;for(;;){if(be===n)break t;if(ve===o&&++ae===h&&(F=E),ve===x&&++ye===c&&(G=E),(Ue=be.nextSibling)!==null)break;be=ve,ve=be.parentNode}be=Ue}o=F===-1||G===-1?null:{start:F,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(xc={focusedElem:n,selectionRange:o},oa=!1,ze=i;ze!==null;)if(i=ze,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ze=n;else for(;ze!==null;){i=ze;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ge=je.memoizedProps,Ht=je.memoizedState,ee=i.stateNode,V=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ii(i.type,Ge),Ht);ee.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Bt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,ze=n;break}ze=i.return}return je=dp,dp=!1,je}function Co(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var x=h.destroy;h.destroy=void 0,x!==void 0&&ru(i,o,x)}h=h.next}while(h!==c)}}function ja(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function su(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function fp(n){var i=n.alternate;i!==null&&(n.alternate=null,fp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[gi],delete i[xo],delete i[_c],delete i[Kg],delete i[Zg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function hp(n){return n.tag===5||n.tag===3||n.tag===4}function pp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||hp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ou(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=va));else if(c!==4&&(n=n.child,n!==null))for(ou(n,i,o),n=n.sibling;n!==null;)ou(n,i,o),n=n.sibling}function au(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(au(n,i,o),n=n.sibling;n!==null;)au(n,i,o),n=n.sibling}var sn=null,ri=!1;function ar(n,i,o){for(o=o.child;o!==null;)mp(n,i,o),o=o.sibling}function mp(n,i,o){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Et,o)}catch{}switch(o.tag){case 5:fn||_s(o,i);case 6:var c=sn,h=ri;sn=null,ar(n,i,o),sn=c,ri=h,sn!==null&&(ri?(n=sn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):sn.removeChild(o.stateNode));break;case 18:sn!==null&&(ri?(n=sn,o=o.stateNode,n.nodeType===8?Sc(n.parentNode,o):n.nodeType===1&&Sc(n,o),so(n)):Sc(sn,o.stateNode));break;case 4:c=sn,h=ri,sn=o.stateNode.containerInfo,ri=!0,ar(n,i,o),sn=c,ri=h;break;case 0:case 11:case 14:case 15:if(!fn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var x=h,E=x.destroy;x=x.tag,E!==void 0&&((x&2)!==0||(x&4)!==0)&&ru(o,i,E),h=h.next}while(h!==c)}ar(n,i,o);break;case 1:if(!fn&&(_s(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(F){Bt(o,i,F)}ar(n,i,o);break;case 21:ar(n,i,o);break;case 22:o.mode&1?(fn=(c=fn)||o.memoizedState!==null,ar(n,i,o),fn=c):ar(n,i,o);break;default:ar(n,i,o)}}function gp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new hx),i.forEach(function(c){var h=bx.bind(null,n,c);o.has(c)||(o.add(c),c.then(h,h))})}}function si(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var h=o[c];try{var x=n,E=i,F=E;e:for(;F!==null;){switch(F.tag){case 5:sn=F.stateNode,ri=!1;break e;case 3:sn=F.stateNode.containerInfo,ri=!0;break e;case 4:sn=F.stateNode.containerInfo,ri=!0;break e}F=F.return}if(sn===null)throw Error(t(160));mp(x,E,h),sn=null,ri=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(ae){Bt(h,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)xp(i,n),i=i.sibling}function xp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),yi(n),c&4){try{Co(3,n,n.return),ja(3,n)}catch(Ge){Bt(n,n.return,Ge)}try{Co(5,n,n.return)}catch(Ge){Bt(n,n.return,Ge)}}break;case 1:si(i,n),yi(n),c&512&&o!==null&&_s(o,o.return);break;case 5:if(si(i,n),yi(n),c&512&&o!==null&&_s(o,o.return),n.flags&32){var h=n.stateNode;try{at(h,"")}catch(Ge){Bt(n,n.return,Ge)}}if(c&4&&(h=n.stateNode,h!=null)){var x=n.memoizedProps,E=o!==null?o.memoizedProps:x,F=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{F==="input"&&x.type==="radio"&&x.name!=null&&ht(h,x),st(F,E);var ae=st(F,x);for(E=0;E<G.length;E+=2){var ye=G[E],be=G[E+1];ye==="style"?et(h,be):ye==="dangerouslySetInnerHTML"?Ne(h,be):ye==="children"?at(h,be):D(h,ye,be,ae)}switch(F){case"input":dt(h,x);break;case"textarea":k(h,x);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!x.multiple;var Ue=x.value;Ue!=null?I(h,!!x.multiple,Ue,!1):ve!==!!x.multiple&&(x.defaultValue!=null?I(h,!!x.multiple,x.defaultValue,!0):I(h,!!x.multiple,x.multiple?[]:"",!1))}h[xo]=x}catch(Ge){Bt(n,n.return,Ge)}}break;case 6:if(si(i,n),yi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,x=n.memoizedProps;try{h.nodeValue=x}catch(Ge){Bt(n,n.return,Ge)}}break;case 3:if(si(i,n),yi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{so(i.containerInfo)}catch(Ge){Bt(n,n.return,Ge)}break;case 4:si(i,n),yi(n);break;case 13:si(i,n),yi(n),h=n.child,h.flags&8192&&(x=h.memoizedState!==null,h.stateNode.isHidden=x,!x||h.alternate!==null&&h.alternate.memoizedState!==null||(uu=Ee())),c&4&&gp(n);break;case 22:if(ye=o!==null&&o.memoizedState!==null,n.mode&1?(fn=(ae=fn)||ye,si(i,n),fn=ae):si(i,n),yi(n),c&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!ye&&(n.mode&1)!==0)for(ze=n,ye=n.child;ye!==null;){for(be=ze=ye;ze!==null;){switch(ve=ze,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Co(4,ve,ve.return);break;case 1:_s(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){c=ve,o=ve.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ge){Bt(c,o,Ge)}}break;case 5:_s(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Sp(be);continue}}Ue!==null?(Ue.return=ve,ze=Ue):Sp(be)}ye=ye.sibling}e:for(ye=null,be=n;;){if(be.tag===5){if(ye===null){ye=be;try{h=be.stateNode,ae?(x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(F=be.stateNode,G=be.memoizedProps.style,E=G!=null&&G.hasOwnProperty("display")?G.display:null,F.style.display=$e("display",E))}catch(Ge){Bt(n,n.return,Ge)}}}else if(be.tag===6){if(ye===null)try{be.stateNode.nodeValue=ae?"":be.memoizedProps}catch(Ge){Bt(n,n.return,Ge)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===n)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===n)break e;for(;be.sibling===null;){if(be.return===null||be.return===n)break e;ye===be&&(ye=null),be=be.return}ye===be&&(ye=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:si(i,n),yi(n),c&4&&gp(n);break;case 21:break;default:si(i,n),yi(n)}}function yi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(hp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(at(h,""),c.flags&=-33);var x=pp(n);au(n,x,h);break;case 3:case 4:var E=c.stateNode.containerInfo,F=pp(n);ou(n,F,E);break;default:throw Error(t(161))}}catch(G){Bt(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function mx(n,i,o){ze=n,vp(n)}function vp(n,i,o){for(var c=(n.mode&1)!==0;ze!==null;){var h=ze,x=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||Ba;if(!E){var F=h.alternate,G=F!==null&&F.memoizedState!==null||fn;F=Ba;var ae=fn;if(Ba=E,(fn=G)&&!ae)for(ze=h;ze!==null;)E=ze,G=E.child,E.tag===22&&E.memoizedState!==null?_p(h):G!==null?(G.return=E,ze=G):_p(h);for(;x!==null;)ze=x,vp(x),x=x.sibling;ze=h,Ba=F,fn=ae}yp(n)}else(h.subtreeFlags&8772)!==0&&x!==null?(x.return=h,ze=x):yp(n)}}function yp(n){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||ja(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!fn)if(o===null)c.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);c.componentDidUpdate(h,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&Sh(i,x,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Sh(i,E,o)}break;case 5:var F=i.stateNode;if(o===null&&i.flags&4){o=F;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&o.focus();break;case"img":G.src&&(o.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var ye=ae.memoizedState;if(ye!==null){var be=ye.dehydrated;be!==null&&so(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}fn||i.flags&512&&su(i)}catch(ve){Bt(i,i.return,ve)}}if(i===n){ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,ze=o;break}ze=i.return}}function Sp(n){for(;ze!==null;){var i=ze;if(i===n){ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ze=o;break}ze=i.return}}function _p(n){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ja(4,i)}catch(G){Bt(i,o,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(G){Bt(i,h,G)}}var x=i.return;try{su(i)}catch(G){Bt(i,x,G)}break;case 5:var E=i.return;try{su(i)}catch(G){Bt(i,E,G)}}}catch(G){Bt(i,i.return,G)}if(i===n){ze=null;break}var F=i.sibling;if(F!==null){F.return=i.return,ze=F;break}ze=i.return}}var gx=Math.ceil,Ha=T.ReactCurrentDispatcher,lu=T.ReactCurrentOwner,qn=T.ReactCurrentBatchConfig,St=0,en=null,Vt=null,on=0,On=0,Ms=nr(0),Qt=0,Ro=null,kr=0,Ga=0,cu=0,No=null,Tn=null,uu=0,bs=1/0,Di=null,Va=!1,du=null,lr=null,Wa=!1,cr=null,Xa=0,Po=0,fu=null,qa=-1,Ya=0;function vn(){return(St&6)!==0?Ee():qa!==-1?qa:qa=Ee()}function ur(n){return(n.mode&1)===0?1:(St&2)!==0&&on!==0?on&-on:$g.transition!==null?(Ya===0&&(Ya=gn()),Ya):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:bf(n.type)),n)}function oi(n,i,o,c){if(50<Po)throw Po=0,fu=null,Error(t(185));Mn(n,o,c),((St&2)===0||n!==en)&&(n===en&&((St&2)===0&&(Ga|=o),Qt===4&&dr(n,on)),An(n,c),o===1&&St===0&&(i.mode&1)===0&&(bs=Ee()+500,Ma&&rr()))}function An(n,i){var o=n.callbackNode;jn(n,i);var c=mi(n,n===en?on:0);if(c===0)o!==null&&ce(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&ce(o),i===1)n.tag===0?Jg(bp.bind(null,n)):lh(bp.bind(null,n)),Yg(function(){(St&6)===0&&rr()}),o=null;else{switch(mf(c)){case 1:o=He;break;case 4:o=tt;break;case 16:o=it;break;case 536870912:o=vt;break;default:o=it}o=Pp(o,Mp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Mp(n,i){if(qa=-1,Ya=0,(St&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ws()&&n.callbackNode!==o)return null;var c=mi(n,n===en?on:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Qa(n,c);else{i=c;var h=St;St|=2;var x=Ep();(en!==n||on!==i)&&(Di=null,bs=Ee()+500,Ur(n,i));do try{yx();break}catch(F){wp(n,F)}while(!0);Nc(),Ha.current=x,St=h,Vt!==null?i=0:(en=null,on=0,i=Qt)}if(i!==0){if(i===2&&(h=wi(n),h!==0&&(c=h,i=hu(n,h))),i===1)throw o=Ro,Ur(n,0),dr(n,c),An(n,Ee()),o;if(i===6)dr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!xx(h)&&(i=Qa(n,c),i===2&&(x=wi(n),x!==0&&(c=x,i=hu(n,x))),i===1))throw o=Ro,Ur(n,0),dr(n,c),An(n,Ee()),o;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Or(n,Tn,Di);break;case 3:if(dr(n,c),(c&130023424)===c&&(i=uu+500-Ee(),10<i)){if(mi(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){vn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=yc(Or.bind(null,n,Tn,Di),i);break}Or(n,Tn,Di);break;case 4:if(dr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var E=31-lt(c);x=1<<E,E=i[E],E>h&&(h=E),c&=~x}if(c=h,c=Ee()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*gx(c/1960))-c,10<c){n.timeoutHandle=yc(Or.bind(null,n,Tn,Di),c);break}Or(n,Tn,Di);break;case 5:Or(n,Tn,Di);break;default:throw Error(t(329))}}}return An(n,Ee()),n.callbackNode===o?Mp.bind(null,n):null}function hu(n,i){var o=No;return n.current.memoizedState.isDehydrated&&(Ur(n,i).flags|=256),n=Qa(n,i),n!==2&&(i=Tn,Tn=o,i!==null&&pu(i)),n}function pu(n){Tn===null?Tn=n:Tn.push.apply(Tn,n)}function xx(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var h=o[c],x=h.getSnapshot;h=h.value;try{if(!ti(x(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(n,i){for(i&=~cu,i&=~Ga,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-lt(i),c=1<<o;n[o]=-1,i&=~c}}function bp(n){if((St&6)!==0)throw Error(t(327));ws();var i=mi(n,0);if((i&1)===0)return An(n,Ee()),null;var o=Qa(n,i);if(n.tag!==0&&o===2){var c=wi(n);c!==0&&(i=c,o=hu(n,c))}if(o===1)throw o=Ro,Ur(n,0),dr(n,i),An(n,Ee()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Or(n,Tn,Di),An(n,Ee()),null}function mu(n,i){var o=St;St|=1;try{return n(i)}finally{St=o,St===0&&(bs=Ee()+500,Ma&&rr())}}function Ir(n){cr!==null&&cr.tag===0&&(St&6)===0&&ws();var i=St;St|=1;var o=qn.transition,c=Rt;try{if(qn.transition=null,Rt=1,n)return n()}finally{Rt=c,qn.transition=o,St=i,(St&6)===0&&rr()}}function gu(){On=Ms.current,Ut(Ms)}function Ur(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,qg(o)),Vt!==null)for(o=Vt.return;o!==null;){var c=o;switch(Ec(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Sa();break;case 3:ys(),Ut(bn),Ut(cn),Fc();break;case 5:Uc(c);break;case 4:ys();break;case 13:Ut(Ft);break;case 19:Ut(Ft);break;case 10:Pc(c.type._context);break;case 22:case 23:gu()}o=o.return}if(en=n,Vt=n=fr(n.current,null),on=On=i,Qt=0,Ro=null,cu=Ga=kr=0,Tn=No=null,Pr!==null){for(i=0;i<Pr.length;i++)if(o=Pr[i],c=o.interleaved,c!==null){o.interleaved=null;var h=c.next,x=o.pending;if(x!==null){var E=x.next;x.next=h,c.next=E}o.pending=c}Pr=null}return n}function wp(n,i){do{var o=Vt;try{if(Nc(),Da.current=Ua,La){for(var c=zt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}La=!1}if(Lr=0,$t=Yt=zt=null,bo=!1,wo=0,lu.current=null,o===null||o.return===null){Qt=1,Ro=i,Vt=null;break}e:{var x=n,E=o.return,F=o,G=i;if(i=on,F.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ae=G,ye=F,be=ye.tag;if((ye.mode&1)===0&&(be===0||be===11||be===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ue=Qh(E);if(Ue!==null){Ue.flags&=-257,Kh(Ue,E,F,x,i),Ue.mode&1&&Yh(x,ae,i),i=Ue,G=ae;var je=i.updateQueue;if(je===null){var Ge=new Set;Ge.add(G),i.updateQueue=Ge}else je.add(G);break e}else{if((i&1)===0){Yh(x,ae,i),xu();break e}G=Error(t(426))}}else if(Ot&&F.mode&1){var Ht=Qh(E);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Kh(Ht,E,F,x,i),Cc(Ss(G,F));break e}}x=G=Ss(G,F),Qt!==4&&(Qt=2),No===null?No=[x]:No.push(x),x=E;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var ee=Xh(x,G,i);yh(x,ee);break e;case 1:F=G;var V=x.type,ie=x.stateNode;if((x.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(lr===null||!lr.has(ie)))){x.flags|=65536,i&=-i,x.lanes|=i;var Ae=qh(x,F,i);yh(x,Ae);break e}}x=x.return}while(x!==null)}Ap(o)}catch(Xe){i=Xe,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function Ep(){var n=Ha.current;return Ha.current=Ua,n===null?Ua:n}function xu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),en===null||(kr&268435455)===0&&(Ga&268435455)===0||dr(en,on)}function Qa(n,i){var o=St;St|=2;var c=Ep();(en!==n||on!==i)&&(Di=null,Ur(n,i));do try{vx();break}catch(h){wp(n,h)}while(!0);if(Nc(),St=o,Ha.current=c,Vt!==null)throw Error(t(261));return en=null,on=0,Qt}function vx(){for(;Vt!==null;)Tp(Vt)}function yx(){for(;Vt!==null&&!K();)Tp(Vt)}function Tp(n){var i=Np(n.alternate,n,On);n.memoizedProps=n.pendingProps,i===null?Ap(n):Vt=i,lu.current=null}function Ap(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=dx(o,i,On),o!==null){Vt=o;return}}else{if(o=fx(o,i),o!==null){o.flags&=32767,Vt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=n}while(i!==null);Qt===0&&(Qt=5)}function Or(n,i,o){var c=Rt,h=qn.transition;try{qn.transition=null,Rt=1,Sx(n,i,o,c)}finally{qn.transition=h,Rt=c}return null}function Sx(n,i,o,c){do ws();while(cr!==null);if((St&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=o.lanes|o.childLanes;if(ia(n,x),n===en&&(Vt=en=null,on=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Wa||(Wa=!0,Pp(it,function(){return ws(),null})),x=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||x){x=qn.transition,qn.transition=null;var E=Rt;Rt=1;var F=St;St|=4,lu.current=null,px(n,o),xp(o,n),Bg(xc),oa=!!gc,xc=gc=null,n.current=o,mx(o),Ce(),St=F,Rt=E,qn.transition=x}else n.current=o;if(Wa&&(Wa=!1,cr=n,Xa=h),x=n.pendingLanes,x===0&&(lr=null),an(o.stateNode),An(n,Ee()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],c(h.value,{componentStack:h.stack,digest:h.digest});if(Va)throw Va=!1,n=du,du=null,n;return(Xa&1)!==0&&n.tag!==0&&ws(),x=n.pendingLanes,(x&1)!==0?n===fu?Po++:(Po=0,fu=n):Po=0,rr(),null}function ws(){if(cr!==null){var n=mf(Xa),i=qn.transition,o=Rt;try{if(qn.transition=null,Rt=16>n?16:n,cr===null)var c=!1;else{if(n=cr,cr=null,Xa=0,(St&6)!==0)throw Error(t(331));var h=St;for(St|=4,ze=n.current;ze!==null;){var x=ze,E=x.child;if((ze.flags&16)!==0){var F=x.deletions;if(F!==null){for(var G=0;G<F.length;G++){var ae=F[G];for(ze=ae;ze!==null;){var ye=ze;switch(ye.tag){case 0:case 11:case 15:Co(8,ye,x)}var be=ye.child;if(be!==null)be.return=ye,ze=be;else for(;ze!==null;){ye=ze;var ve=ye.sibling,Ue=ye.return;if(fp(ye),ye===ae){ze=null;break}if(ve!==null){ve.return=Ue,ze=ve;break}ze=Ue}}}var je=x.alternate;if(je!==null){var Ge=je.child;if(Ge!==null){je.child=null;do{var Ht=Ge.sibling;Ge.sibling=null,Ge=Ht}while(Ge!==null)}}ze=x}}if((x.subtreeFlags&2064)!==0&&E!==null)E.return=x,ze=E;else e:for(;ze!==null;){if(x=ze,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Co(9,x,x.return)}var ee=x.sibling;if(ee!==null){ee.return=x.return,ze=ee;break e}ze=x.return}}var V=n.current;for(ze=V;ze!==null;){E=ze;var ie=E.child;if((E.subtreeFlags&2064)!==0&&ie!==null)ie.return=E,ze=ie;else e:for(E=V;ze!==null;){if(F=ze,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:ja(9,F)}}catch(Xe){Bt(F,F.return,Xe)}if(F===E){ze=null;break e}var Ae=F.sibling;if(Ae!==null){Ae.return=F.return,ze=Ae;break e}ze=F.return}}if(St=h,rr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Et,n)}catch{}c=!0}return c}finally{Rt=o,qn.transition=i}}return!1}function Cp(n,i,o){i=Ss(o,i),i=Xh(n,i,1),n=or(n,i,1),i=vn(),n!==null&&(Mn(n,1,i),An(n,i))}function Bt(n,i,o){if(n.tag===3)Cp(n,n,o);else for(;i!==null;){if(i.tag===3){Cp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(lr===null||!lr.has(c))){n=Ss(o,n),n=qh(i,n,1),i=or(i,n,1),n=vn(),i!==null&&(Mn(i,1,n),An(i,n));break}}i=i.return}}function _x(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=vn(),n.pingedLanes|=n.suspendedLanes&o,en===n&&(on&o)===o&&(Qt===4||Qt===3&&(on&130023424)===on&&500>Ee()-uu?Ur(n,0):cu|=o),An(n,i)}function Rp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var o=vn();n=Ri(n,i),n!==null&&(Mn(n,i,o),An(n,o))}function Mx(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Rp(n,o)}function bx(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Rp(n,o)}var Np;Np=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)En=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return En=!1,ux(n,i,o);En=(n.flags&131072)!==0}else En=!1,Ot&&(i.flags&1048576)!==0&&ch(i,wa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;za(n,i),n=i.pendingProps;var h=fs(i,cn.current);vs(i,o),h=jc(null,i,c,n,h,o);var x=Hc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(c)?(x=!0,_a(i)):x=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,kc(i),h.updater=Oa,i.stateNode=h,h._reactInternals=i,Yc(i,c,n,o),i=Jc(null,i,c,!0,x,o)):(i.tag=0,Ot&&x&&wc(i),xn(null,i,h,o),i=i.child),i;case 16:c=i.elementType;e:{switch(za(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=Ex(c),n=ii(c,n),h){case 0:i=Zc(null,i,c,n,o);break e;case 1:i=np(null,i,c,n,o);break e;case 11:i=Zh(null,i,c,n,o);break e;case 14:i=Jh(null,i,c,ii(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),Zc(n,i,c,h,o);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),np(n,i,c,h,o);case 3:e:{if(ip(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,h=x.element,vh(n,i),Na(i,c,null,o);var E=i.memoizedState;if(c=E.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){h=Ss(Error(t(423)),i),i=rp(n,i,c,o,h);break e}else if(c!==h){h=Ss(Error(t(424)),i),i=rp(n,i,c,o,h);break e}else for(Un=tr(i.stateNode.containerInfo.firstChild),In=i,Ot=!0,ni=null,o=gh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),c===h){i=Pi(n,i,o);break e}xn(n,i,c,o)}i=i.child}return i;case 5:return _h(i),n===null&&Ac(i),c=i.type,h=i.pendingProps,x=n!==null?n.memoizedProps:null,E=h.children,vc(c,h)?E=null:x!==null&&vc(c,x)&&(i.flags|=32),tp(n,i),xn(n,i,E,o),i.child;case 6:return n===null&&Ac(i),null;case 13:return sp(n,i,o);case 4:return Ic(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=gs(i,null,c,o):xn(n,i,c,o),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),Zh(n,i,c,h,o);case 7:return xn(n,i,i.pendingProps,o),i.child;case 8:return xn(n,i,i.pendingProps.children,o),i.child;case 12:return xn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,x=i.memoizedProps,E=h.value,Lt(Aa,c._currentValue),c._currentValue=E,x!==null)if(ti(x.value,E)){if(x.children===h.children&&!bn.current){i=Pi(n,i,o);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var F=x.dependencies;if(F!==null){E=x.child;for(var G=F.firstContext;G!==null;){if(G.context===c){if(x.tag===1){G=Ni(-1,o&-o),G.tag=2;var ae=x.updateQueue;if(ae!==null){ae=ae.shared;var ye=ae.pending;ye===null?G.next=G:(G.next=ye.next,ye.next=G),ae.pending=G}}x.lanes|=o,G=x.alternate,G!==null&&(G.lanes|=o),Dc(x.return,o,i),F.lanes|=o;break}G=G.next}}else if(x.tag===10)E=x.type===i.type?null:x.child;else if(x.tag===18){if(E=x.return,E===null)throw Error(t(341));E.lanes|=o,F=E.alternate,F!==null&&(F.lanes|=o),Dc(E,o,i),E=x.sibling}else E=x.child;if(E!==null)E.return=x;else for(E=x;E!==null;){if(E===i){E=null;break}if(x=E.sibling,x!==null){x.return=E.return,E=x;break}E=E.return}x=E}xn(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,vs(i,o),h=Wn(h),c=c(h),i.flags|=1,xn(n,i,c,o),i.child;case 14:return c=i.type,h=ii(c,i.pendingProps),h=ii(c.type,h),Jh(n,i,c,h,o);case 15:return $h(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),za(n,i),i.tag=1,wn(c)?(n=!0,_a(i)):n=!1,vs(i,o),Vh(i,c,h),Yc(i,c,h,o),Jc(null,i,c,!0,n,o);case 19:return ap(n,i,o);case 22:return ep(n,i,o)}throw Error(t(156,i.tag))};function Pp(n,i){return le(n,i)}function wx(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,i,o,c){return new wx(n,i,o,c)}function vu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ex(n){if(typeof n=="function")return vu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===me)return 14}return 2}function fr(n,i){var o=n.alternate;return o===null?(o=Yn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ka(n,i,o,c,h,x){var E=2;if(c=n,typeof n=="function")vu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case L:return Fr(o.children,h,x,i);case U:E=8,h|=8;break;case R:return n=Yn(12,o,i,h|2),n.elementType=R,n.lanes=x,n;case J:return n=Yn(13,o,i,h),n.elementType=J,n.lanes=x,n;case fe:return n=Yn(19,o,i,h),n.elementType=fe,n.lanes=x,n;case pe:return Za(o,h,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:E=10;break e;case j:E=9;break e;case se:E=11;break e;case me:E=14;break e;case ue:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Yn(E,o,i,h),i.elementType=n,i.type=c,i.lanes=x,i}function Fr(n,i,o,c){return n=Yn(7,n,c,i),n.lanes=o,n}function Za(n,i,o,c){return n=Yn(22,n,c,i),n.elementType=pe,n.lanes=o,n.stateNode={isHidden:!1},n}function yu(n,i,o){return n=Yn(6,n,null,i),n.lanes=o,n}function Su(n,i,o){return i=Yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Tx(n,i,o,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hn(0),this.expirationTimes=Hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function _u(n,i,o,c,h,x,E,F,G){return n=new Tx(n,i,o,F,G),i===1?(i=1,x===!0&&(i|=8)):i=0,x=Yn(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(x),n}function Ax(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Dp(n){if(!n)return ir;n=n._reactInternals;e:{if(pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(wn(o))return oh(n,o,i)}return i}function Lp(n,i,o,c,h,x,E,F,G){return n=_u(o,c,!0,n,h,x,E,F,G),n.context=Dp(null),o=n.current,c=vn(),h=ur(o),x=Ni(c,h),x.callback=i??null,or(o,x,h),n.current.lanes=h,Mn(n,h,c),An(n,c),n}function Ja(n,i,o,c){var h=i.current,x=vn(),E=ur(h);return o=Dp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ni(x,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=or(h,i,E),n!==null&&(oi(n,h,E,x),Ra(n,h,E)),E}function $a(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function kp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Mu(n,i){kp(n,i),(n=n.alternate)&&kp(n,i)}function Cx(){return null}var Ip=typeof reportError=="function"?reportError:function(n){console.error(n)};function bu(n){this._internalRoot=n}el.prototype.render=bu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ja(n,i,null,null)},el.prototype.unmount=bu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ir(function(){Ja(null,n,null,null)}),i[Ei]=null}};function el(n){this._internalRoot=n}el.prototype.unstable_scheduleHydration=function(n){if(n){var i=vf();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Ji.length&&i!==0&&i<Ji[o].priority;o++);Ji.splice(o,0,n),o===0&&_f(n)}};function wu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Up(){}function Rx(n,i,o,c,h){if(h){if(typeof c=="function"){var x=c;c=function(){var ae=$a(E);x.call(ae)}}var E=Lp(i,c,n,0,null,!1,!1,"",Up);return n._reactRootContainer=E,n[Ei]=E.current,mo(n.nodeType===8?n.parentNode:n),Ir(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var F=c;c=function(){var ae=$a(G);F.call(ae)}}var G=_u(n,0,!1,null,null,!1,!1,"",Up);return n._reactRootContainer=G,n[Ei]=G.current,mo(n.nodeType===8?n.parentNode:n),Ir(function(){Ja(i,G,o,c)}),G}function nl(n,i,o,c,h){var x=o._reactRootContainer;if(x){var E=x;if(typeof h=="function"){var F=h;h=function(){var G=$a(E);F.call(G)}}Ja(i,E,n,h)}else E=Rx(o,i,n,h,c);return $a(E)}gf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=qt(i.pendingLanes);o!==0&&(Yl(i,o|1),An(i,Ee()),(St&6)===0&&(bs=Ee()+500,rr()))}break;case 13:Ir(function(){var c=Ri(n,1);if(c!==null){var h=vn();oi(c,n,1,h)}}),Mu(n,1)}},Ql=function(n){if(n.tag===13){var i=Ri(n,134217728);if(i!==null){var o=vn();oi(i,n,134217728,o)}Mu(n,134217728)}},xf=function(n){if(n.tag===13){var i=ur(n),o=Ri(n,i);if(o!==null){var c=vn();oi(o,n,i,c)}Mu(n,i)}},vf=function(){return Rt},yf=function(n,i){var o=Rt;try{return Rt=n,i()}finally{Rt=o}},Pe=function(n,i,o){switch(i){case"input":if(dt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var h=ya(c);if(!h)throw Error(t(90));pt(c),dt(c,h)}}}break;case"textarea":k(n,o);break;case"select":i=o.value,i!=null&&I(n,!!o.multiple,i,!1)}},kt=mu,Xt=Ir;var Nx={usingClientEntryPoint:!1,Events:[vo,us,ya,ke,ot,mu]},Do={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Px={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=N(n),n===null?null:n.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||Cx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Et=il.inject(Px),xt=il}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nx,Cn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(i))throw Error(t(200));return Ax(n,i,null,o)},Cn.createRoot=function(n,i){if(!wu(n))throw Error(t(299));var o=!1,c="",h=Ip;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=_u(n,1,!1,null,null,o,!1,c,h),n[Ei]=i.current,mo(n.nodeType===8?n.parentNode:n),new bu(i)},Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=N(i),n=n===null?null:n.stateNode,n},Cn.flushSync=function(n){return Ir(n)},Cn.hydrate=function(n,i,o){if(!tl(i))throw Error(t(200));return nl(null,n,i,!0,o)},Cn.hydrateRoot=function(n,i,o){if(!wu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,h=!1,x="",E=Ip;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(x=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Lp(i,null,n,1,o??null,h,!1,x,E),n[Ei]=i.current,mo(n),c)for(n=0;n<c.length;n++)o=c[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new el(i)},Cn.render=function(n,i,o){if(!tl(i))throw Error(t(200));return nl(null,n,i,!1,o)},Cn.unmountComponentAtNode=function(n){if(!tl(n))throw Error(t(40));return n._reactRootContainer?(Ir(function(){nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ei]=null})}),!0):!1},Cn.unstable_batchedUpdates=mu,Cn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!tl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return nl(n,i,o,!1,c)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var Vp;function o0(){if(Vp)return Au.exports;Vp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Au.exports=Fx(),Au.exports}var Wp;function zx(){if(Wp)return rl;Wp=1;var r=o0();return rl.createRoot=r.createRoot,rl.hydrateRoot=r.hydrateRoot,rl}var Bx=zx(),X=nf();function Nu(r){const e=r.replace("#",""),t=parseInt(e.substring(0,2),16),s=parseInt(e.substring(2,4),16),a=parseInt(e.substring(4,6),16);return`${t},${s},${a}`}const Vo={cyan:"#00f0c8",purple:"#7c6ff7",pink:"#f472b6",bg:"#05050a"},fd=[{name:"深空霓虹",colors:Vo},{name:"赛博朋克",colors:{cyan:"#00d4ff",purple:"#ff6ec7",pink:"#ffd700",bg:"#0a0015"}},{name:"极光森林",colors:{cyan:"#39ff14",purple:"#00b4d8",pink:"#e040fb",bg:"#060d06"}},{name:"烈焰熔岩",colors:{cyan:"#ff6b35",purple:"#f72585",pink:"#ffbe0b",bg:"#0d0508"}},{name:"冰蓝幻境",colors:{cyan:"#7df9ff",purple:"#5b8def",pink:"#c4b5fd",bg:"#050810"}},{name:"樱花物语",colors:{cyan:"#ffb7c5",purple:"#c084fc",pink:"#fb7185",bg:"#0a0508"}}],a0=X.createContext({theme:Vo,setTheme:()=>{}});function Ks(){return X.useContext(a0)}function jx(r){const e=document.documentElement;e.style.setProperty("--c1",Nu(r.cyan)),e.style.setProperty("--c2",Nu(r.purple)),e.style.setProperty("--c3",Nu(r.pink)),e.style.setProperty("--bg",r.bg),e.style.setProperty("--c1-hex",r.cyan),e.style.setProperty("--c2-hex",r.purple),e.style.setProperty("--c3-hex",r.pink)}function Hx({children:r}){const[e,t]=X.useState(()=>{try{const a=localStorage.getItem("vic-theme");if(a)return JSON.parse(a)}catch{}if(typeof window<"u"&&window.innerWidth<768){const a=Math.floor(Math.random()*fd.length);return fd[a].colors}return Vo}),s=a=>{t(a),typeof window<"u"&&window.innerWidth>=768&&localStorage.setItem("vic-theme",JSON.stringify(a))};return X.useEffect(()=>{jx(e),window.innerWidth<768&&localStorage.removeItem("vic-theme")},[e]),u.jsx(a0.Provider,{value:{theme:e,setTheme:s},children:r})}function Gx(){const r=X.useRef(null),e=X.useRef(null),t=X.useRef(null),s=X.useRef({x:-200,y:-200}),a=X.useRef({x:-200,y:-200}),l=X.useRef([]),f=X.useRef(0),d=X.useRef(!1),p=10,m=25,v=8,g=400,y=1;return X.useEffect(()=>{const M=L=>{s.current={x:L.clientX,y:L.clientY}},b=()=>d.current=!0,w=()=>d.current=!1,_=t.current,S=_==null?void 0:_.getContext("2d"),P=()=>{_&&(_.width=window.innerWidth,_.height=window.innerHeight)};window.addEventListener("resize",P),P();const D=L=>{const R=getComputedStyle(document.documentElement).getPropertyValue("--c1").trim(),C=R?`rgb(${R})`:"#00f0c8",j=performance.now(),se=Array.from({length:v},(J,fe)=>({x:L.clientX,y:L.clientY,angle:2*Math.PI*fe/v,startTime:j,color:C}));l.current.push(...se)};window.addEventListener("click",D);const T=L=>L*(2-L),B=L=>{a.current.x+=(s.current.x-a.current.x)*.12,a.current.y+=(s.current.y-a.current.y)*.12,r.current&&(r.current.style.transform=`translate(${s.current.x-4}px, ${s.current.y-4}px)`,r.current.style.opacity=d.current?"1":"0"),e.current&&(e.current.style.transform=`translate(${a.current.x-20}px, ${a.current.y-20}px)`,e.current.style.opacity=d.current?"1":"0"),S&&_&&(S.clearRect(0,0,_.width,_.height),l.current=l.current.filter(U=>{const R=L-U.startTime;if(R>=g)return!1;const C=R/g,j=T(C),se=j*m*y,J=p*(1-j),fe=U.x+se*Math.cos(U.angle),me=U.y+se*Math.sin(U.angle),ue=U.x+(se+J)*Math.cos(U.angle),pe=U.y+(se+J)*Math.sin(U.angle);return S.strokeStyle=U.color,S.lineWidth=2,S.lineCap="round",S.beginPath(),S.moveTo(fe,me),S.lineTo(ue,pe),S.stroke(),!0})),f.current=requestAnimationFrame(B)};window.addEventListener("mousemove",M),f.current=requestAnimationFrame(B);const O=document.getElementById("hero");return O&&(O.addEventListener("mouseenter",b),O.addEventListener("mouseleave",w)),()=>{window.removeEventListener("mousemove",M),window.removeEventListener("click",D),window.removeEventListener("resize",P),cancelAnimationFrame(f.current),O&&(O.removeEventListener("mouseenter",b),O.removeEventListener("mouseleave",w))}},[]),u.jsxs(u.Fragment,{children:[u.jsx("canvas",{ref:t,className:"fixed top-0 left-0 pointer-events-none z-[9995]",style:{width:"100vw",height:"100vh"}}),u.jsx("div",{ref:r,className:"fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9997] transition-opacity duration-200",style:{background:"rgb(var(--c1))",boxShadow:"0 0 8px rgba(0,240,200,0.9), 0 0 20px rgba(0,240,200,0.4)",willChange:"transform",opacity:0}}),u.jsx("div",{ref:e,className:"fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9996] transition-opacity duration-200",style:{border:"1px solid rgba(var(--c1),0.35)",willChange:"transform",opacity:0}})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wx=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Xp=r=>{const e=Wx(r);return e.charAt(0).toUpperCase()+e.slice(1)},l0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=X.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:f,...d},p)=>X.createElement("svg",{ref:p,...Xx,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:l0("lucide",a),...d},[...f.map(([m,v])=>X.createElement(m,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(r,e)=>{const t=X.forwardRef(({className:s,...a},l)=>X.createElement(qx,{ref:l,iconNode:e,className:l0(`lucide-${Vx(Xp(r))}`,`lucide-${r}`,s),...a}));return t.displayName=Xp(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Qx=rt("activity",Yx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Zx=rt("arrow-right",Kx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],rf=rt("arrow-up-right",Jx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Pu=rt("award",$x);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],tv=rt("book-open",ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],iv=rt("briefcase",nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]],sv=rt("cake",rv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],av=rt("chart-column",ov);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],c0=rt("check",lv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],u0=rt("chevron-down",cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],dv=rt("chevron-right",uv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],hv=rt("circle-alert",fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mv=rt("circle-check",pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],d0=rt("component",gv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],f0=rt("copy",xv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],qp=rt("disc-3",vv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],hd=rt("download",yv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],sf=rt("external-link",Sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Yp=rt("graduation-cap",_v);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],bv=rt("layers",Mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Ev=rt("layout-dashboard",wv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Av=rt("lock",Tv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],of=rt("mail",Cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],h0=rt("map-pin",Rv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m21 3-6.75 6.75",key:"pv0uzu"}],["circle",{cx:"10",cy:"14",r:"6",key:"1qwbdc"}]],Pv=rt("mars",Nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Lv=rt("menu",Dv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],p0=rt("palette",kv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Uv=rt("pause",Iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],Fv=rt("phone-call",Ov);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Bv=rt("phone",zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Hv=rt("play",jv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],Vv=rt("presentation",Gv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Qp=rt("radio",Wv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],qv=rt("rotate-ccw",Xv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Qv=rt("send",Yv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]],Zv=rt("skip-back",Kv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],$v=rt("skip-forward",Jv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Xo=rt("sparkles",e1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],n1=rt("trophy",t1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],r1=rt("twitter",i1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],o1=rt("volume-2",s1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],l1=rt("volume-x",a1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],u1=rt("wand-sparkles",c1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jr=rt("x",d1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],h1=rt("zap",f1);function p1({isLight:r}){const[e,t]=X.useState(!1),s=X.useRef(null),{theme:a,setTheme:l}=Ks(),[f,d]=X.useState(a);X.useEffect(()=>{d(a)},[a]),X.useEffect(()=>{const L=U=>{s.current&&!s.current.contains(U.target)&&t(!1)};return e&&document.addEventListener("mousedown",L),()=>document.removeEventListener("mousedown",L)},[e]);const p=(L,U)=>{const R={...f,[L]:U};d(R),l(R)},m=r?"rgba(255,255,255,0.95)":"linear-gradient(160deg, #0d0d1a 0%, #0a0a14 100%)",v=r?"1px solid rgba(0,0,0,0.1)":"1px solid rgba(var(--c1),0.2)",g=r?"0 20px 60px rgba(0,0,0,0.1), 0 0 40px rgba(0,0,0,0.05)":"0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(var(--c1),0.08)",y=r?"#1a1a2e":"rgba(255,255,255,0.8)",M=r?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.06)",b=r?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)",w=L=>r?L?"rgba(0,0,0,0.1)":"rgba(0,0,0,0.03)":L?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.03)",_=L=>r?L?"1px solid rgba(0,0,0,0.2)":"1px solid rgba(0,0,0,0.06)":L?"1px solid rgba(var(--c1),0.4)":"1px solid rgba(255,255,255,0.06)",S=L=>r?L?"#1a1a2e":"rgba(0,0,0,0.45)":L?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.45)",P=r?"linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)":"linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",D=r?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)",T=r?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)",B=r?"rgba(0,0,0,0.3)":"rgba(255,255,255,0.3)",O=r?"1.5px solid rgba(0,0,0,0.15)":"1.5px solid rgba(255,255,255,0.15)";return u.jsxs("div",{className:"relative",ref:s,children:[u.jsx("button",{onClick:()=>t(!e),className:"flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 hover:scale-110",style:r?{background:"transparent",color:"#1a1a2e",fontWeight:500,border:"0.5px solid rgba(0,0,0,0.22)",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",transition:"all 0.3s"}:{background:"linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",color:"rgba(255,255,255,0.95)",fontWeight:600,border:"0.5px solid rgba(var(--c1),0.4)",boxShadow:"0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",transition:"all 0.3s"},title:"切换主题色",children:u.jsx(p0,{size:16})}),e&&u.jsxs("div",{className:"absolute right-0 top-12 w-72 rounded-xl p-4 z-[100]",style:{background:m,border:v,boxShadow:g,backdropFilter:"blur(20px)"},children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:y,letterSpacing:"0.05em"},children:"🎨 主题配色"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("button",{onClick:()=>{l(Vo),d(Vo)},className:"w-6 h-6 rounded-md flex items-center justify-center transition-colors",style:{background:M,color:b},title:"重置默认",children:u.jsx(qv,{size:12})}),u.jsx("button",{onClick:()=>t(!1),className:"w-6 h-6 rounded-md flex items-center justify-center transition-colors",style:{background:M,color:b},children:u.jsx(Jr,{size:12})})]})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2 mb-4",children:fd.map(L=>{const U=L.colors.cyan===a.cyan&&L.colors.purple===a.purple&&L.colors.pink===a.pink;return u.jsxs("button",{onClick:()=>l(L.colors),className:"rounded-lg p-2 transition-all duration-200 hover:scale-105",style:{background:w(U),border:_(U)},children:[u.jsx("div",{className:"flex gap-1 justify-center mb-1.5",children:[L.colors.cyan,L.colors.purple,L.colors.pink].map((R,C)=>u.jsx("div",{className:"w-4 h-4 rounded-full",style:{background:R,boxShadow:`0 0 6px ${R}66`}},C))}),u.jsx("span",{style:{fontSize:"0.65rem",color:S(U),fontWeight:U?600:400},children:L.name})]},L.name)})}),u.jsx("div",{className:"h-px mb-3",style:{background:P}}),u.jsx("div",{style:{fontSize:"0.7rem",fontWeight:500,color:D,letterSpacing:"0.08em",marginBottom:"8px"},children:"自定义颜色"}),u.jsx("div",{className:"space-y-2",children:[{key:"cyan",label:"主色 (霓虹青)"},{key:"purple",label:"辅色 (紫罗兰)"},{key:"pink",label:"点缀 (粉玫)"},{key:"bg",label:"背景色"}].map(({key:L,label:U})=>u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsxs("label",{className:"relative w-7 h-7 rounded-lg overflow-hidden cursor-pointer flex-shrink-0",style:{border:O,boxShadow:`0 0 8px ${f[L]}44`},children:[u.jsx("input",{type:"color",value:f[L],onChange:R=>p(L,R.target.value),className:"absolute inset-0 opacity-0 cursor-pointer w-full h-full"}),u.jsx("div",{className:"w-full h-full",style:{background:f[L]}})]}),u.jsx("span",{style:{fontSize:"0.72rem",color:T,flex:1},children:U}),u.jsx("span",{style:{fontSize:"0.65rem",color:B,fontFamily:"monospace"},children:f[L].toUpperCase()})]},L))})]})]})}var m1=o0();function qo({children:r}){const[e,t]=X.useState(!1);return X.useEffect(()=>(t(!0),()=>t(!1)),[]),e?m1.createPortal(r,document.body):null}const Kp="data:image/png;base64,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",Du=[{label:"Home",href:"hero"},{label:"Skills",href:"skills"},{label:"Projects",href:"projects"},{label:"Works",href:"portfolio"},{label:"Education",href:"education"},{label:"Contact",href:"contact"}],g1=new Set(["projects","education"]);function x1(){const[r,e]=X.useState(!1),[t,s]=X.useState(!1),[a,l]=X.useState("hero"),[f,d]=X.useState(null),[p,m]=X.useState(!1);X.useEffect(()=>{const U=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",U,{passive:!0}),U(),()=>window.removeEventListener("scroll",U)},[]),X.useEffect(()=>{const U={root:null,rootMargin:"-68px 0px -80% 0px",threshold:[.01,.05,.1]},R=new Map,C=se=>{if(se.forEach(J=>{J.isIntersecting?R.set(J.target.id,J.boundingClientRect.top):R.delete(J.target.id)}),R.size>0){let J="",fe=1/0;R.forEach((me,ue)=>{me<fe&&(fe=me,J=ue)}),J&&l(J)}},j=new IntersectionObserver(C,U);return Du.forEach(se=>{const J=document.getElementById(se.href);J&&j.observe(J)}),()=>{j.disconnect(),R.clear()}},[]);const v=U=>{var R;(R=document.getElementById(U))==null||R.scrollIntoView({behavior:"smooth"}),s(!1)},g=g1.has(a),y=g?"rgba(255,255,255,0.6)":r?"rgba(5,5,12,0.5)":"rgba(5,5,12,0.6)",M=g?"1px solid rgba(0,0,0,0.08)":`1px solid ${r?"rgba(var(--c1),0.07)":"rgba(var(--c1),0)"}`,b=g?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.04)",w=g?"1px solid rgba(0,0,0,0.10)":"1px solid rgba(255,255,255,0.18)",_=g?"inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 24px rgba(0,0,0,0.06)":"inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)",S=g?"rgba(0,0,0,0.45)":"rgba(255,255,255,0.5)",P=g?"rgba(0,0,0,0.75)":"rgba(255,255,255,0.9)",D=g?"#1a1a2e":"#f0f4f8",T=g?"linear-gradient(135deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.22) 100%)":"linear-gradient(135deg, rgba(var(--c1),0.45) 0%, rgba(var(--c1),0.18) 50%, rgba(var(--c1),0.28) 100%)",B=g?"1px solid rgba(0,0,0,0.22), 1px solid rgba(255,255,255,0.45) inset":"1px solid rgba(var(--c1),0.7), 1px solid rgba(255,255,255,0.18) inset",O=g?"0 0 24px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.15), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -2px 0 rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.12)":"0 0 50px rgba(var(--c1),0.45), 0 12px 48px rgba(0,0,0,0.35), inset 0 3px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.25), 0 0 0 1px rgba(var(--c1),0.25), 0 0 30px rgba(var(--c1),0.2)",L=g?"#1a1a2e":"rgb(var(--c1))";return u.jsxs(u.Fragment,{children:[u.jsxs("nav",{className:"fixed top-0 left-0 z-50 transition-all duration-500",style:{background:y,backdropFilter:"blur(24px) saturate(180%)",WebkitBackdropFilter:"blur(24px) saturate(180%)",borderBottom:M,boxShadow:g?"0 4px 24px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.5)":"0 4px 24px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)",transform:"scale(var(--screen-scale))",transformOrigin:"top left",width:"calc(100% / var(--screen-scale))"},children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between gap-4",children:[u.jsxs("button",{onClick:()=>m(!0),className:"flex items-center gap-3 flex-shrink-0",children:[u.jsx("div",{className:"relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0",style:{border:g?"1.5px solid rgba(0,0,0,0.12)":"1.5px solid rgba(var(--c1),0.45)",boxShadow:g?"0 1px 6px rgba(0,0,0,0.12)":"0 0 8px rgba(var(--c1),0.25)",transition:"border 0.4s, box-shadow 0.4s"},children:u.jsx("img",{src:Kp,alt:"Vic Qu",className:"w-full h-full object-cover object-center"})}),u.jsx("span",{className:"whitespace-nowrap",style:{fontWeight:700,fontSize:"1.2rem",color:D,letterSpacing:"0.08em",transition:"color 0.4s"},children:"曲维甲"})]}),u.jsxs("div",{className:`hidden md:flex items-center gap-4 px-1.5 py-1.5 rounded-full transition-all duration-500 flex-shrink-0 ${g?"nav-light":"nav-dark"}`,style:{background:b,border:w,backdropFilter:"blur(12px)",boxShadow:_},children:[Du.map(U=>{const R=a===U.href,C=f===U.href;return u.jsxs("button",{onClick:()=>{v(U.href),l(U.href)},onMouseEnter:()=>d(U.href),onMouseLeave:()=>d(null),className:"relative px-3 py-1.5 text-base rounded-full overflow-hidden nav-glass-btn flex-shrink-0 whitespace-nowrap",style:{color:R?L:C?P:S,fontWeight:R?600:400,background:R?T:"transparent",border:R?B:"1px solid transparent",boxShadow:R?O:"none",letterSpacing:"0.01em",transition:"color 0.25s, background 0.3s, border 0.3s, box-shadow 0.3s"},children:[R&&!g&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"absolute top-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none",style:{width:"70%",height:"1.5px",background:"linear-gradient(90deg, transparent, rgba(var(--c1),0.85), transparent)",boxShadow:"0 0 12px rgba(var(--c1),0.5), 0 0 24px rgba(var(--c1),0.25)"}}),u.jsx("span",{className:"absolute top-1 left-1/2 -translate-x-1/2 rounded-full pointer-events-none",style:{width:"50%",height:"1px",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",opacity:.6}})]}),U.label]},U.label)}),u.jsx("style",{children:`
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
            `})]}),u.jsxs("div",{className:"hidden md:flex items-center gap-2 flex-shrink-0",children:[u.jsx(p1,{isLight:g}),u.jsx("button",{className:"flex items-center gap-2 px-5 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-[1.1] whitespace-nowrap flex-shrink-0",onClick:()=>m(!0),style:g?{background:"transparent",color:"#1a1a2e",fontWeight:500,border:"0.5px solid rgba(0,0,0,0.22)",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",transition:"all 0.3s"}:{background:"linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",color:"rgba(255,255,255,0.95)",fontWeight:600,border:"0.5px solid rgba(var(--c1),0.4)",boxShadow:"0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",transition:"all 0.3s"},children:"About Me"})]}),u.jsx("button",{className:"md:hidden",style:{color:g?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.7)",transition:"color 0.4s"},onClick:()=>s(!t),children:t?u.jsx(Jr,{size:26}):u.jsx(Lv,{size:26})})]}),t&&u.jsx("div",{className:"md:hidden px-[24px] py-[0px]",style:{background:"transparent",backdropFilter:"none",WebkitBackdropFilter:"none",borderBottom:"none"},children:Du.map(U=>u.jsx("button",{onClick:()=>v(U.href),className:"block w-full text-left py-3 text-base border-b",style:{color:a===U.href?g?"#1a1a2e":"rgb(var(--c1))":g?"rgba(5,5,12,0.6)":"rgba(255,255,255,0.5)",fontWeight:a===U.href?700:400,borderColor:g?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.05)"},children:U.label},U.label))})]}),p&&u.jsx(qo,{children:u.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-4",style:{backdropFilter:"blur(16px)",background:"rgba(5,5,12,0.75)"},onClick:()=>m(!1),children:u.jsxs("div",{className:"relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl",style:{background:"linear-gradient(160deg, #0d0d1a 0%, #0a0a14 100%)",border:"1px solid rgba(var(--c1),0.18)",boxShadow:"0 0 60px rgba(var(--c1),0.12), 0 0 120px rgba(var(--c2),0.08), inset 0 1px 0 rgba(var(--c1),0.1)"},onClick:U=>U.stopPropagation(),children:[u.jsxs("div",{className:"sticky top-0 z-10 bg-[#0d0d1a] rounded-t-2xl px-6 sm:px-8 pt-4 sm:pt-8 pb-0",children:[u.jsx("div",{className:"absolute top-0 left-0 right-0 h-px rounded-t-2xl",style:{background:"linear-gradient(90deg, transparent, rgb(var(--c1)), rgb(var(--c2)), transparent)"}}),u.jsx("button",{onClick:()=>m(!1),className:"absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.5)"},children:u.jsx(Jr,{size:15})}),u.jsxs("div",{className:"flex items-center gap-3 sm:gap-5 mb-4 sm:mb-8",children:[u.jsx("div",{className:"relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0",style:{border:"2px solid rgba(var(--c1),0.4)",boxShadow:"0 0 20px rgba(var(--c1),0.2)"},children:u.jsx("img",{src:Kp,alt:"Vic Qu",className:"w-full h-full object-cover"})}),u.jsxs("div",{children:[u.jsx("h2",{style:{fontSize:"1.0rem",fontWeight:700,color:"#f0f4f8",letterSpacing:"0.04em"},className:"sm:text-[1.6rem]",children:"曲维甲"}),u.jsx("p",{style:{color:"rgb(var(--c1))",fontSize:"0.8rem",fontWeight:500,letterSpacing:"0.08em"},className:"sm:text-[0.9rem]",children:"Vic Qu · ENFJ 全栈设计师"}),u.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 mt-1 sm:mt-1.5",children:[u.jsx(h0,{size:12,style:{color:"rgba(255,255,255,0.35)"}}),u.jsx("span",{style:{color:"rgba(255,255,255,0.35)",fontSize:"0.8rem"},children:"济南 · 中国"})]})]})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[{icon:u.jsx(Pv,{size:20}),label:"性别",value:"男"},{icon:u.jsx(sv,{size:20}),label:"生日",value:" 1992.7.9"},{icon:u.jsx(Bv,{size:20}),label:"电话",value:"+86 156 6279 6885"},{icon:u.jsx(of,{size:20}),label:"邮箱",value:"quweijia@vip.qq.com"}].map(U=>u.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 rounded-xl",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)"},children:[u.jsx("span",{style:{color:"rgb(var(--c1))"},children:U.icon}),u.jsxs("div",{children:[u.jsx("p",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.3)",marginBottom:"1px"},children:U.label}),u.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.8)",fontWeight:500},children:U.value})]})]},U.label))})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto px-6 sm:px-8 pb-6 sm:pb-8",children:[u.jsx("style",{children:`
        div::-webkit-scrollbar {
          display: none;
        }
      `}),u.jsxs("div",{className:"mt-8",children:[u.jsxs("div",{className:"mb-6",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c1)),rgb(var(--c2)))"}}),u.jsx("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:"个人简介"})]}),u.jsx("p",{style:{fontSize:"0.9rem",lineHeight:"1.8",color:"rgba(255,255,255,0.6)"},children:"拥有 10 年以上 UI/UX 设计经验的全栈设计师，深度融合用户研究、交互设计与前端技术，擅长将复杂业务逻辑转化为清晰直觉的数字体验。ENFJ 人格驱动，热衷于跨职能协作与设计系统建设，主导多个百万级用户产品端到端的设计工作。"})]}),u.jsxs("div",{className:"mb-6",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c2)),rgb(var(--c3)))"}}),u.jsxs("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:[u.jsx(tv,{size:12,className:"inline mr-1.5",style:{color:"rgb(var(--c2))"}}),"教育经历"]})]}),u.jsx("div",{className:"space-y-3",children:[{school:"中国石油大学（华东）",degree:"建筑环境与能源应用工程 · 本科",year:"2011 – 2015"},{school:"Google UX Design Certificate",degree:"用户体验设计专业认证",year:"2017"}].map(U=>u.jsxs("div",{className:"flex items-start justify-between px-4 py-3 rounded-xl",style:{background:"rgba(var(--c2),0.06)",border:"1px solid rgba(var(--c2),0.12)"},children:[u.jsxs("div",{children:[u.jsx("p",{style:{fontSize:"0.88rem",fontWeight:600,color:"rgba(255,255,255,0.8)"},children:U.school}),u.jsx("p",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",marginTop:"2px"},children:U.degree})]}),u.jsx("span",{style:{fontSize:"0.75rem",color:"rgb(var(--c2))",fontWeight:500,whiteSpace:"nowrap",marginLeft:"12px"},children:U.year})]},U.school))})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c3)),rgb(var(--c1)))"}}),u.jsxs("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:[u.jsx(iv,{size:12,className:"inline mr-1.5",style:{color:"rgb(var(--c3))"}}),"工作经历"]})]}),u.jsx("div",{className:"space-y-3",children:[{company:"浪潮智慧建筑科技有限公司",role:"UI 设计主管",year:"2024 – 至今",desc:"深耕智慧园区、智慧工地、建筑节能等核心业务领域的 UI 设计/管理工作。主导构建覆盖移动端与 PC 端的全链路原子组件设计规范体系，建立标准化评审机制把控团队设计输出质量；统筹展厅设计方案对接与落地，协助管理层完成商务级 PPT 视觉优化等。"},{company:"历城控股集团",role:"UI 设计主管",year:"2023 – 2024",desc:"聚焦数字政府建设、数智化产品开发、应用及运营等业务，设计不同风格的视觉界面，参与项目评审并提出有效的修改方案。"},{company:"山东高速集团",role:"UI 设计主管",year:"2023 – 2023",desc:"全面负责UI设计组工作推进，优化迭代公司自主研发的智能货运交易共享平台，参与产品需求讨论，保障产品设计方案有效落地。"},{company:"山东爱城市网科技有限公司",role:"高级 UI/UX 设计师",year:"2018 – 2023",desc:"负责爱城市网 App 核心应用设计、交互动效制作，优化产品和研发的工作流程，维护和更新产品设计规范元件库，牵头设计类专利撰写等。"}].map(U=>u.jsxs("div",{className:"px-4 py-3 rounded-xl",style:{background:"rgba(var(--c3),0.05)",border:"1px solid rgba(var(--c3),0.1)"},children:[u.jsxs("div",{className:"flex items-start justify-between mb-1",children:[u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"0.88rem",fontWeight:600,color:"rgba(255,255,255,0.8)",lineHeight:1.5},children:U.company}),u.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)"},children:U.role})]}),u.jsx("span",{style:{fontSize:"0.75rem",color:"rgb(var(--c3))",fontWeight:500,whiteSpace:"nowrap",marginLeft:"12px"},children:U.year})]}),u.jsx("p",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.35)",lineHeight:"1.6"},children:U.desc})]},U.company))})]})]})]})]})})})]})}function m0({isOpen:r,onClose:e,onConfirm:t}){const[s,a]=X.useState(""),[l,f]=X.useState(""),d="123789";X.useEffect(()=>{r&&(a(""),f(""))},[r]),X.useEffect(()=>{const m=v=>{v.key==="Escape"&&r&&e()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[r,e]);const p=m=>{m.preventDefault(),s===d?(t(),e()):(f("密码错误，请重试"),a(""))};return r?u.jsx(qo,{children:u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backdropFilter:"blur(8px)",background:"rgba(0, 0, 0, 0.6)"},onClick:e,children:u.jsxs("div",{className:"relative w-full max-w-md rounded-2xl p-8 shadow-2xl",style:{background:"var(--bg)",border:"1px solid rgba(var(--c1), 0.2)",boxShadow:"0 0 40px rgba(var(--c1), 0.15), 0 20px 60px rgba(0, 0, 0, 0.5)"},onClick:m=>m.stopPropagation(),children:[u.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 hover:rotate-90",style:{color:"rgba(255, 255, 255, 0.5)",background:"rgba(var(--c1), 0.1)"},onMouseEnter:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.2)",m.currentTarget.style.color="rgb(var(--c1))"},onMouseLeave:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.1)",m.currentTarget.style.color="rgba(255, 255, 255, 0.5)"},children:u.jsx(Jr,{size:20})}),u.jsx("div",{className:"mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6",style:{background:"linear-gradient(135deg, rgba(var(--c1), 0.15), rgba(var(--c1), 0.05))",border:"1px solid rgba(var(--c1), 0.3)"},children:u.jsx(Av,{size:32,style:{color:"rgb(var(--c1))"}})}),u.jsx("h2",{className:"text-2xl font-bold text-center mb-2",style:{color:"rgba(255, 255, 255, 0.9)"},children:"请输入密码"}),u.jsx("p",{className:"text-center mb-6 text-sm",style:{color:"rgba(255, 255, 255, 0.5)"},children:"请联系 15662796885 获取"}),u.jsxs("form",{onSubmit:p,children:[u.jsxs("div",{className:"mb-6",children:[u.jsx("input",{type:"password",value:s,onChange:m=>{a(m.target.value),f("")},placeholder:"输入密码",className:"w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-200",style:{background:"rgba(var(--c1), 0.05)",border:l?"1px solid rgba(239, 68, 68, 0.5)":"1px solid rgba(var(--c1), 0.2)",color:"rgba(255, 255, 255, 0.9)",boxShadow:l?"0 0 0 3px rgba(239, 68, 68, 0.1)":"none"},onFocus:m=>{l||(m.currentTarget.style.borderColor="rgba(var(--c1), 0.4)",m.currentTarget.style.boxShadow="0 0 0 3px rgba(var(--c1), 0.1)")},onBlur:m=>{l||(m.currentTarget.style.borderColor="rgba(var(--c1), 0.2)",m.currentTarget.style.boxShadow="none")},autoFocus:!0}),l&&u.jsxs("div",{className:"mt-2 flex items-center gap-2 text-sm",style:{color:"rgb(239, 68, 68)"},children:[u.jsx(hv,{size:16}),u.jsx("span",{children:l})]})]}),u.jsxs("div",{className:"flex gap-3",children:[u.jsx("button",{type:"button",onClick:e,className:"flex-1 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:scale-[1.02]",style:{background:"rgba(var(--c1), 0.1)",color:"rgba(255, 255, 255, 0.7)",border:"1px solid rgba(var(--c1), 0.2)"},onMouseEnter:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.15)",m.currentTarget.style.color="rgba(255, 255, 255, 0.9)"},onMouseLeave:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.1)",m.currentTarget.style.color="rgba(255, 255, 255, 0.7)"},children:"取消"}),u.jsx("button",{type:"submit",className:"flex-1 px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 hover:scale-[1.02]",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",color:"var(--bg)",border:"none",boxShadow:"0 0 20px rgba(var(--c1), 0.3)"},onMouseEnter:m=>{m.currentTarget.style.boxShadow="0 0 30px rgba(var(--c1), 0.4)"},onMouseLeave:m=>{m.currentTarget.style.boxShadow="0 0 20px rgba(var(--c1), 0.3)"},children:"确认"})]})]})]})})}):null}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const af="170",v1=0,Zp=1,y1=2,g0=1,S1=2,Fi=3,br=0,Dn=1,zi=2,_r=0,js=1,pd=2,Jp=3,$p=4,_1=5,Yr=100,M1=101,b1=102,w1=103,E1=104,T1=200,A1=201,C1=202,R1=203,md=204,gd=205,N1=206,P1=207,D1=208,L1=209,k1=210,I1=211,U1=212,O1=213,F1=214,xd=0,vd=1,yd=2,Vs=3,Sd=4,_d=5,Md=6,bd=7,x0=0,z1=1,B1=2,Mr=0,j1=1,H1=2,G1=3,V1=4,W1=5,X1=6,q1=7,v0=300,Ws=301,Xs=302,wd=303,Ed=304,Gl=306,Td=1e3,fi=1001,Ad=1002,Bn=1003,Y1=1004,sl=1005,Pn=1006,Lu=1007,Kr=1008,Gi=1009,y0=1010,S0=1011,Wo=1012,lf=1013,$r=1014,_i=1015,Zs=1016,cf=1017,uf=1018,qs=1020,_0=35902,M0=1021,b0=1022,Zn=1023,w0=1024,E0=1025,Hs=1026,Ys=1027,T0=1028,df=1029,A0=1030,ff=1031,hf=1033,Dl=33776,Ll=33777,kl=33778,Il=33779,Cd=35840,Rd=35841,Nd=35842,Pd=35843,Dd=36196,Ld=37492,kd=37496,Id=37808,Ud=37809,Od=37810,Fd=37811,zd=37812,Bd=37813,jd=37814,Hd=37815,Gd=37816,Vd=37817,Wd=37818,Xd=37819,qd=37820,Yd=37821,Ul=36492,Qd=36494,Kd=36495,C0=36283,Zd=36284,Jd=36285,$d=36286,Q1=3200,K1=3201,Z1=0,J1=1,Sr="",Kn="srgb",Js="srgb-linear",Vl="linear",Pt="srgb",Es=7680,em=519,$1=512,ey=513,ty=514,R0=515,ny=516,iy=517,ry=518,sy=519,tm=35044,nm="300 es",Bi=2e3,Fl=2001;class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=Math.PI/180,ef=180/Math.PI;function Yo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]).toLowerCase()}function Nn(r,e,t){return Math.max(e,Math.min(t,r))}function oy(r,e){return(r%e+e)%e}function Iu(r,e,t){return(1-t)*r+t*e}function ko(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*s-f*a+e.x,this.y=l*a+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,s,a,l,f,d,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,f,d,p,m)}set(e,t,s,a,l,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=t,v[4]=l,v[5]=p,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],v=s[4],g=s[7],y=s[2],M=s[5],b=s[8],w=a[0],_=a[3],S=a[6],P=a[1],D=a[4],T=a[7],B=a[2],O=a[5],L=a[8];return l[0]=f*w+d*P+p*B,l[3]=f*_+d*D+p*O,l[6]=f*S+d*T+p*L,l[1]=m*w+v*P+g*B,l[4]=m*_+v*D+g*O,l[7]=m*S+v*T+g*L,l[2]=y*w+M*P+b*B,l[5]=y*_+M*D+b*O,l[8]=y*S+M*T+b*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return t*f*v-t*d*m-s*l*v+s*d*p+a*l*m-a*f*p}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=v*f-d*m,y=d*p-v*l,M=m*l-f*p,b=t*g+s*y+a*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=g*w,e[1]=(a*m-v*s)*w,e[2]=(d*s-a*f)*w,e[3]=y*w,e[4]=(v*t-a*p)*w,e[5]=(a*l-d*t)*w,e[6]=M*w,e[7]=(s*p-m*t)*w,e[8]=(f*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,f,d){const p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Uu.makeScale(e,t)),this}rotate(e){return this.premultiply(Uu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uu=new ut;function N0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function zl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ay(){const r=zl("canvas");return r.style.display="block",r}const im={};function jo(r){r in im||(im[r]=!0,console.warn(r))}function ly(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function cy(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uy(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _t={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(r.r=Gs(r.r),r.g=Gs(r.g),r.b=Gs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?Vl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const rm=[.64,.33,.3,.6,.15,.06],sm=[.2126,.7152,.0722],om=[.3127,.329],am=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_t.define({[Js]:{primaries:rm,whitePoint:om,transfer:Vl,toXYZ:am,fromXYZ:lm,luminanceCoefficients:sm,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:rm,whitePoint:om,transfer:Pt,toXYZ:am,fromXYZ:lm,luminanceCoefficients:sm,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Ts;class dy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=zl("canvas")),Ts.width=e.width,Ts.height=e.height;const s=Ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zl("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=ji(l[f]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(ji(t[s]/255)*255):t[s]=ji(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fy=0;class P0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?l.push(Ou(a[f].image)):l.push(Ou(a[f]))}else l=Ou(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Ou(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hy=0;class Sn extends $s{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,s=fi,a=fi,l=Pn,f=Kr,d=Zn,p=Gi,m=Sn.DEFAULT_ANISOTROPY,v=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Yo(),this.name="",this.source=new P0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=v0;Sn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,s=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*s+f[8]*a+f[12]*l,this.y=f[1]*t+f[5]*s+f[9]*a+f[13]*l,this.z=f[2]*t+f[6]*s+f[10]*a+f[14]*l,this.w=f[3]*t+f[7]*s+f[11]*a+f[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const p=e.elements,m=p[0],v=p[4],g=p[8],y=p[1],M=p[5],b=p[9],w=p[2],_=p[6],S=p[10];if(Math.abs(v-y)<.01&&Math.abs(g-w)<.01&&Math.abs(b-_)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+w)<.1&&Math.abs(b+_)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(m+1)/2,T=(M+1)/2,B=(S+1)/2,O=(v+y)/4,L=(g+w)/4,U=(b+_)/4;return D>T&&D>B?D<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(D),a=O/s,l=L/s):T>B?T<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(T),s=O/a,l=U/a):B<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(B),s=L/l,a=U/l),this.set(s,a,l,t),this}let P=Math.sqrt((_-b)*(_-b)+(g-w)*(g-w)+(y-v)*(y-v));return Math.abs(P)<.001&&(P=1),this.x=(_-b)/P,this.y=(g-w)/P,this.z=(y-v)/P,this.w=Math.acos((m+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class py extends $s{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Sn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new P0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends py{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class D0 extends Sn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class my extends Sn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,f,d){let p=s[a+0],m=s[a+1],v=s[a+2],g=s[a+3];const y=l[f+0],M=l[f+1],b=l[f+2],w=l[f+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d===1){e[t+0]=y,e[t+1]=M,e[t+2]=b,e[t+3]=w;return}if(g!==w||p!==y||m!==M||v!==b){let _=1-d;const S=p*y+m*M+v*b+g*w,P=S>=0?1:-1,D=1-S*S;if(D>Number.EPSILON){const B=Math.sqrt(D),O=Math.atan2(B,S*P);_=Math.sin(_*O)/B,d=Math.sin(d*O)/B}const T=d*P;if(p=p*_+y*T,m=m*_+M*T,v=v*_+b*T,g=g*_+w*T,_===1-d){const B=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=B,m*=B,v*=B,g*=B}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,a,l,f){const d=s[a],p=s[a+1],m=s[a+2],v=s[a+3],g=l[f],y=l[f+1],M=l[f+2],b=l[f+3];return e[t]=d*b+v*g+p*M-m*y,e[t+1]=p*b+v*y+m*g-d*M,e[t+2]=m*b+v*M+d*y-p*g,e[t+3]=v*b-d*g-p*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(a/2),g=d(l/2),y=p(s/2),M=p(a/2),b=p(l/2);switch(f){case"XYZ":this._x=y*v*g+m*M*b,this._y=m*M*g-y*v*b,this._z=m*v*b+y*M*g,this._w=m*v*g-y*M*b;break;case"YXZ":this._x=y*v*g+m*M*b,this._y=m*M*g-y*v*b,this._z=m*v*b-y*M*g,this._w=m*v*g+y*M*b;break;case"ZXY":this._x=y*v*g-m*M*b,this._y=m*M*g+y*v*b,this._z=m*v*b+y*M*g,this._w=m*v*g-y*M*b;break;case"ZYX":this._x=y*v*g-m*M*b,this._y=m*M*g+y*v*b,this._z=m*v*b-y*M*g,this._w=m*v*g+y*M*b;break;case"YZX":this._x=y*v*g+m*M*b,this._y=m*M*g+y*v*b,this._z=m*v*b-y*M*g,this._w=m*v*g-y*M*b;break;case"XZY":this._x=y*v*g-m*M*b,this._y=m*M*g-y*v*b,this._z=m*v*b+y*M*g,this._w=m*v*g+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],f=t[1],d=t[5],p=t[9],m=t[2],v=t[6],g=t[10],y=s+d+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-p)*M,this._y=(l-m)*M,this._z=(f-a)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(v-p)/M,this._x=.25*M,this._y=(a+f)/M,this._z=(l+m)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(l-m)/M,this._x=(a+f)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(f-a)/M,this._x=(l+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,f=e._w,d=t._x,p=t._y,m=t._z,v=t._w;return this._x=s*v+f*d+a*m-l*p,this._y=a*v+f*p+l*d-s*m,this._z=l*v+f*m+s*p-a*d,this._w=f*v-s*d-a*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,f=this._w;let d=f*e._w+s*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=s,this._y=a,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-t;return this._w=M*f+t*this._w,this._x=M*s+t*this._x,this._y=M*a+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),g=Math.sin((1-t)*v)/m,y=Math.sin(t*v)/m;return this._w=f*g+this._w*y,this._x=s*g+this._x*y,this._y=a*g+this._y*y,this._z=l*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(e=0,t=0,s=0){de.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,f=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*f,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*f,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*f,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*s),v=2*(d*t-l*a),g=2*(l*s-f*t);return this.x=t+p*m+f*g-d*v,this.y=s+p*v+d*m-l*g,this.z=a+p*g+l*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,f=t.x,d=t.y,p=t.z;return this.x=a*p-l*d,this.y=l*f-s*p,this.z=s*d-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fu=new de,cm=new Qo;class Ko{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=l.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ai):ai.fromBufferAttribute(l,f),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ol.copy(s.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),al.subVectors(this.max,Io),As.subVectors(e.a,Io),Cs.subVectors(e.b,Io),Rs.subVectors(e.c,Io),pr.subVectors(Cs,As),mr.subVectors(Rs,Cs),zr.subVectors(As,Rs);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-zr.z,zr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,zr.z,0,-zr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-zr.y,zr.x,0];return!zu(t,As,Cs,Rs,al)||(t=[1,0,0,0,1,0,0,0,1],!zu(t,As,Cs,Rs,al))?!1:(ll.crossVectors(pr,mr),t=[ll.x,ll.y,ll.z],zu(t,As,Cs,Rs,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new de,new de,new de,new de,new de,new de,new de,new de],ai=new de,ol=new Ko,As=new de,Cs=new de,Rs=new de,pr=new de,mr=new de,zr=new de,Io=new de,al=new de,ll=new de,Br=new de;function zu(r,e,t,s,a){for(let l=0,f=r.length-3;l<=f;l+=3){Br.fromArray(r,l);const d=a.x*Math.abs(Br.x)+a.y*Math.abs(Br.y)+a.z*Math.abs(Br.z),p=e.dot(Br),m=t.dot(Br),v=s.dot(Br);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const gy=new Ko,Uo=new de,Bu=new de;class Wl{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):gy.setFromPoints(e).getCenter(s);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const t=Uo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Uo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Bu)),this.expandByPoint(Uo.copy(e.center).sub(Bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new de,ju=new de,cl=new de,gr=new de,Hu=new de,ul=new de,Gu=new de;class L0{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){ju.copy(e).add(t).multiplyScalar(.5),cl.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(ju);const l=e.distanceTo(t)*.5,f=-this.direction.dot(cl),d=gr.dot(this.direction),p=-gr.dot(cl),m=gr.lengthSq(),v=Math.abs(1-f*f);let g,y,M,b;if(v>0)if(g=f*p-d,y=f*d-p,b=l*v,g>=0)if(y>=-b)if(y<=b){const w=1/v;g*=w,y*=w,M=g*(g+f*y+2*d)+y*(f*g+y+2*p)+m}else y=l,g=Math.max(0,-(f*y+d)),M=-g*g+y*(y+2*p)+m;else y=-l,g=Math.max(0,-(f*y+d)),M=-g*g+y*(y+2*p)+m;else y<=-b?(g=Math.max(0,-(-f*l+d)),y=g>0?-l:Math.min(Math.max(-l,-p),l),M=-g*g+y*(y+2*p)+m):y<=b?(g=0,y=Math.min(Math.max(-l,-p),l),M=y*(y+2*p)+m):(g=Math.max(0,-(f*l+d)),y=g>0?l:Math.min(Math.max(-l,-p),l),M=-g*g+y*(y+2*p)+m);else y=f>0?-l:l,g=Math.max(0,-(f*y+d)),M=-g*g+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(ju).addScaledVector(cl,y),M}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const s=ki.dot(this.direction),a=ki.dot(ki)-s*s,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),v>=0?(l=(e.min.y-y.y)*v,f=(e.max.y-y.y)*v):(l=(e.max.y-y.y)*v,f=(e.min.y-y.y)*v),s>f||l>a||((l>s||isNaN(s))&&(s=l),(f<a||isNaN(a))&&(a=f),g>=0?(d=(e.min.z-y.z)*g,p=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,p=(e.min.z-y.z)*g),s>p||d>a)||((d>s||s!==s)&&(s=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,s,a,l){Hu.subVectors(t,e),ul.subVectors(s,e),Gu.crossVectors(Hu,ul);let f=this.direction.dot(Gu),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;gr.subVectors(this.origin,e);const p=d*this.direction.dot(ul.crossVectors(gr,ul));if(p<0)return null;const m=d*this.direction.dot(Hu.cross(gr));if(m<0||p+m>f)return null;const v=-d*gr.dot(Gu);return v<0?null:this.at(v/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,s,a,l,f,d,p,m,v,g,y,M,b,w,_){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,f,d,p,m,v,g,y,M,b,w,_)}set(e,t,s,a,l,f,d,p,m,v,g,y,M,b,w,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=a,S[1]=l,S[5]=f,S[9]=d,S[13]=p,S[2]=m,S[6]=v,S[10]=g,S[14]=y,S[3]=M,S[7]=b,S[11]=w,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),l=1/Ns.setFromMatrixColumn(e,1).length(),f=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*f,t[9]=s[9]*f,t[10]=s[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(a),m=Math.sin(a),v=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const y=f*v,M=f*g,b=d*v,w=d*g;t[0]=p*v,t[4]=-p*g,t[8]=m,t[1]=M+b*m,t[5]=y-w*m,t[9]=-d*p,t[2]=w-y*m,t[6]=b+M*m,t[10]=f*p}else if(e.order==="YXZ"){const y=p*v,M=p*g,b=m*v,w=m*g;t[0]=y+w*d,t[4]=b*d-M,t[8]=f*m,t[1]=f*g,t[5]=f*v,t[9]=-d,t[2]=M*d-b,t[6]=w+y*d,t[10]=f*p}else if(e.order==="ZXY"){const y=p*v,M=p*g,b=m*v,w=m*g;t[0]=y-w*d,t[4]=-f*g,t[8]=b+M*d,t[1]=M+b*d,t[5]=f*v,t[9]=w-y*d,t[2]=-f*m,t[6]=d,t[10]=f*p}else if(e.order==="ZYX"){const y=f*v,M=f*g,b=d*v,w=d*g;t[0]=p*v,t[4]=b*m-M,t[8]=y*m+w,t[1]=p*g,t[5]=w*m+y,t[9]=M*m-b,t[2]=-m,t[6]=d*p,t[10]=f*p}else if(e.order==="YZX"){const y=f*p,M=f*m,b=d*p,w=d*m;t[0]=p*v,t[4]=w-y*g,t[8]=b*g+M,t[1]=g,t[5]=f*v,t[9]=-d*v,t[2]=-m*v,t[6]=M*g+b,t[10]=y-w*g}else if(e.order==="XZY"){const y=f*p,M=f*m,b=d*p,w=d*m;t[0]=p*v,t[4]=-g,t[8]=m*v,t[1]=y*g+w,t[5]=f*v,t[9]=M*g-b,t[2]=b*g-M,t[6]=d*v,t[10]=w*g+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xy,e,vy)}lookAt(e,t,s){const a=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),xr.crossVectors(s,Fn),xr.lengthSq()===0&&(Math.abs(s.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),xr.crossVectors(s,Fn)),xr.normalize(),dl.crossVectors(Fn,xr),a[0]=xr.x,a[4]=dl.x,a[8]=Fn.x,a[1]=xr.y,a[5]=dl.y,a[9]=Fn.y,a[2]=xr.z,a[6]=dl.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],v=s[1],g=s[5],y=s[9],M=s[13],b=s[2],w=s[6],_=s[10],S=s[14],P=s[3],D=s[7],T=s[11],B=s[15],O=a[0],L=a[4],U=a[8],R=a[12],C=a[1],j=a[5],se=a[9],J=a[13],fe=a[2],me=a[6],ue=a[10],pe=a[14],H=a[3],te=a[7],oe=a[11],z=a[15];return l[0]=f*O+d*C+p*fe+m*H,l[4]=f*L+d*j+p*me+m*te,l[8]=f*U+d*se+p*ue+m*oe,l[12]=f*R+d*J+p*pe+m*z,l[1]=v*O+g*C+y*fe+M*H,l[5]=v*L+g*j+y*me+M*te,l[9]=v*U+g*se+y*ue+M*oe,l[13]=v*R+g*J+y*pe+M*z,l[2]=b*O+w*C+_*fe+S*H,l[6]=b*L+w*j+_*me+S*te,l[10]=b*U+w*se+_*ue+S*oe,l[14]=b*R+w*J+_*pe+S*z,l[3]=P*O+D*C+T*fe+B*H,l[7]=P*L+D*j+T*me+B*te,l[11]=P*U+D*se+T*ue+B*oe,l[15]=P*R+D*J+T*pe+B*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],g=e[6],y=e[10],M=e[14],b=e[3],w=e[7],_=e[11],S=e[15];return b*(+l*p*g-a*m*g-l*d*y+s*m*y+a*d*M-s*p*M)+w*(+t*p*M-t*m*y+l*f*y-a*f*M+a*m*v-l*p*v)+_*(+t*m*g-t*d*M-l*f*g+s*f*M+l*d*v-s*m*v)+S*(-a*d*v-t*p*g+t*d*y+a*f*g-s*f*y+s*p*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=e[9],y=e[10],M=e[11],b=e[12],w=e[13],_=e[14],S=e[15],P=g*_*m-w*y*m+w*p*M-d*_*M-g*p*S+d*y*S,D=b*y*m-v*_*m-b*p*M+f*_*M+v*p*S-f*y*S,T=v*w*m-b*g*m+b*d*M-f*w*M-v*d*S+f*g*S,B=b*g*p-v*w*p-b*d*y+f*w*y+v*d*_-f*g*_,O=t*P+s*D+a*T+l*B;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return e[0]=P*L,e[1]=(w*y*l-g*_*l-w*a*M+s*_*M+g*a*S-s*y*S)*L,e[2]=(d*_*l-w*p*l+w*a*m-s*_*m-d*a*S+s*p*S)*L,e[3]=(g*p*l-d*y*l-g*a*m+s*y*m+d*a*M-s*p*M)*L,e[4]=D*L,e[5]=(v*_*l-b*y*l+b*a*M-t*_*M-v*a*S+t*y*S)*L,e[6]=(b*p*l-f*_*l-b*a*m+t*_*m+f*a*S-t*p*S)*L,e[7]=(f*y*l-v*p*l+v*a*m-t*y*m-f*a*M+t*p*M)*L,e[8]=T*L,e[9]=(b*g*l-v*w*l-b*s*M+t*w*M+v*s*S-t*g*S)*L,e[10]=(f*w*l-b*d*l+b*s*m-t*w*m-f*s*S+t*d*S)*L,e[11]=(v*d*l-f*g*l-v*s*m+t*g*m+f*s*M-t*d*M)*L,e[12]=B*L,e[13]=(v*w*a-b*g*a+b*s*y-t*w*y-v*s*_+t*g*_)*L,e[14]=(b*d*a-f*w*a-b*s*p+t*w*p+f*s*_-t*d*_)*L,e[15]=(f*g*a-v*d*a+v*s*p-t*g*p-f*s*y+t*d*y)*L,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,f=e.x,d=e.y,p=e.z,m=l*f,v=l*d;return this.set(m*f+s,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+s,v*p-a*f,0,m*p-a*d,v*p+a*f,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,f){return this.set(1,s,l,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,f=t._y,d=t._z,p=t._w,m=l+l,v=f+f,g=d+d,y=l*m,M=l*v,b=l*g,w=f*v,_=f*g,S=d*g,P=p*m,D=p*v,T=p*g,B=s.x,O=s.y,L=s.z;return a[0]=(1-(w+S))*B,a[1]=(M+T)*B,a[2]=(b-D)*B,a[3]=0,a[4]=(M-T)*O,a[5]=(1-(y+S))*O,a[6]=(_+P)*O,a[7]=0,a[8]=(b+D)*L,a[9]=(_-P)*L,a[10]=(1-(y+w))*L,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Ns.set(a[0],a[1],a[2]).length();const f=Ns.set(a[4],a[5],a[6]).length(),d=Ns.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const m=1/l,v=1/f,g=1/d;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=v,li.elements[5]*=v,li.elements[6]*=v,li.elements[8]*=g,li.elements[9]*=g,li.elements[10]*=g,t.setFromRotationMatrix(li),s.x=l,s.y=f,s.z=d,this}makePerspective(e,t,s,a,l,f,d=Bi){const p=this.elements,m=2*l/(t-e),v=2*l/(s-a),g=(t+e)/(t-e),y=(s+a)/(s-a);let M,b;if(d===Bi)M=-(f+l)/(f-l),b=-2*f*l/(f-l);else if(d===Fl)M=-f/(f-l),b=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,a,l,f,d=Bi){const p=this.elements,m=1/(t-e),v=1/(s-a),g=1/(f-l),y=(t+e)*m,M=(s+a)*v;let b,w;if(d===Bi)b=(f+l)*g,w=-2*g;else if(d===Fl)b=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ns=new de,li=new Gt,xy=new de(0,0,0),vy=new de(1,1,1),xr=new de,dl=new de,Fn=new de,um=new Gt,dm=new Qo;class Vi{constructor(e=0,t=0,s=0,a=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],g=a[2],y=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(um,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dm.setFromEuler(this),this.setFromQuaternion(dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class k0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yy=0;const fm=new de,Ps=new Qo,Ii=new Gt,fl=new de,Oo=new de,Sy=new de,_y=new Qo,hm=new de(1,0,0),pm=new de(0,1,0),mm=new de(0,0,1),gm={type:"added"},My={type:"removed"},Ds={type:"childadded",child:null},Vu={type:"childremoved",child:null};class Ln extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new de,t=new Vi,s=new Qo,a=new de(1,1,1);function l(){s.setFromEuler(t,!1)}function f(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ut}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,t){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?fl.copy(e):fl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Oo,fl,this.up):Ii.lookAt(fl,Oo,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Ps.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(My),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const f=this.children[s].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,Sy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,_y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];l(e.shapes,g)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(l(e.animations,p))}}if(t){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),g=f(e.shapes),y=f(e.skeletons),M=f(e.animations),b=f(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=a,s;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Ln.DEFAULT_UP=new de(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new de,Ui=new de,Wu=new de,Oi=new de,Ls=new de,ks=new de,xm=new de,Xu=new de,qu=new de,Yu=new de,Qu=new jt,Ku=new jt,Zu=new jt;class di{constructor(e=new de,t=new de,s=new de){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),ci.subVectors(e,t),a.cross(ci);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){ci.subVectors(a,t),Ui.subVectors(s,t),Wu.subVectors(e,t);const f=ci.dot(ci),d=ci.dot(Ui),p=ci.dot(Wu),m=Ui.dot(Ui),v=Ui.dot(Wu),g=f*m-d*d;if(g===0)return l.set(0,0,0),null;const y=1/g,M=(m*p-d*v)*y,b=(f*v-d*p)*y;return l.set(1-M-b,b,M)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,s,a,l,f,d,p){return this.getBarycoord(e,t,s,a,Oi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Oi.x),p.addScaledVector(f,Oi.y),p.addScaledVector(d,Oi.z),p)}static getInterpolatedAttribute(e,t,s,a,l,f){return Qu.setScalar(0),Ku.setScalar(0),Zu.setScalar(0),Qu.fromBufferAttribute(e,t),Ku.fromBufferAttribute(e,s),Zu.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Qu,l.x),f.addScaledVector(Ku,l.y),f.addScaledVector(Zu,l.z),f}static isFrontFacing(e,t,s,a){return ci.subVectors(s,t),Ui.subVectors(e,t),ci.cross(Ui).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ci.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return di.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let f,d;Ls.subVectors(a,s),ks.subVectors(l,s),Xu.subVectors(e,s);const p=Ls.dot(Xu),m=ks.dot(Xu);if(p<=0&&m<=0)return t.copy(s);qu.subVectors(e,a);const v=Ls.dot(qu),g=ks.dot(qu);if(v>=0&&g<=v)return t.copy(a);const y=p*g-v*m;if(y<=0&&p>=0&&v<=0)return f=p/(p-v),t.copy(s).addScaledVector(Ls,f);Yu.subVectors(e,l);const M=Ls.dot(Yu),b=ks.dot(Yu);if(b>=0&&M<=b)return t.copy(l);const w=M*m-p*b;if(w<=0&&m>=0&&b<=0)return d=m/(m-b),t.copy(s).addScaledVector(ks,d);const _=v*b-M*g;if(_<=0&&g-v>=0&&M-b>=0)return xm.subVectors(l,a),d=(g-v)/(g-v+(M-b)),t.copy(a).addScaledVector(xm,d);const S=1/(_+w+y);return f=w*S,d=y*S,t.copy(s).addScaledVector(Ls,f).addScaledVector(ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},hl={h:0,s:0,l:0};function Ju(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Tt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=_t.workingColorSpace){return this.r=e,this.g=t,this.b=s,_t.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=_t.workingColorSpace){if(e=oy(e,1),t=Nn(t,0,1),s=Nn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,f=2*s-l;this.r=Ju(f,l,e+1/3),this.g=Ju(f,l,e),this.b=Ju(f,l,e-1/3)}return _t.toWorkingColorSpace(this,a),this}setStyle(e,t=Kn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const s=I0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return _t.fromWorkingColorSpace(pn.copy(this),e),Math.round(Nn(pn.r*255,0,255))*65536+Math.round(Nn(pn.g*255,0,255))*256+Math.round(Nn(pn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(pn.copy(this),t);const s=pn.r,a=pn.g,l=pn.b,f=Math.max(s,a,l),d=Math.min(s,a,l);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const g=f-d;switch(m=v<=.5?g/(f+d):g/(2-f-d),f){case s:p=(a-l)/g+(a<l?6:0);break;case a:p=(l-s)/g+2;break;case l:p=(s-a)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Kn){_t.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,s=pn.g,a=pn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(hl);const s=Iu(vr.h,hl.h,t),a=Iu(vr.s,hl.s,t),l=Iu(vr.l,hl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Tt;Tt.NAMES=I0;let by=0;class Zo extends $s{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Yo(),this.name="",this.blending=js,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(s.blending=this.blending),this.side!==br&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==md&&(s.blendSrc=this.blendSrc),this.blendDst!==gd&&(s.blendDst=this.blendDst),this.blendEquation!==Yr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const f=[];for(const d in l){const p=l[d];delete p.metadata,f.push(p)}return f}if(t){const l=a(e.textures),f=a(e.images);l.length>0&&(s.textures=l),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class U0 extends Zo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=x0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new de,pl=new ct;class hi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=tm,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)pl.fromBufferAttribute(this,t),pl.applyMatrix3(e),this.setXY(t,pl.x,pl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=ko(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Rn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ko(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ko(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ko(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ko(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array),a=Rn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array),a=Rn(a,this.array),l=Rn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tm&&(e.usage=this.usage),e}}class O0 extends hi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class F0 extends hi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Hi extends hi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let wy=0;const Qn=new Gt,$u=new Ln,Is=new de,zn=new Ko,Fo=new Ko,nn=new de;class Xi extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?F0:O0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ut().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,s){return Qn.makeTranslation(e,t,s),this.applyMatrix4(Qn),this}scale(e,t,s){return Qn.makeScale(e,t,s),this.applyMatrix4(Qn),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const f=e[a];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Hi(s,3))}else{for(let s=0,a=t.count;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const s=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const d=t[l];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(zn.min,Fo.min),zn.expandByPoint(nn),nn.addVectors(zn.max,Fo.max),zn.expandByPoint(nn)):(zn.expandByPoint(Fo.min),zn.expandByPoint(Fo.max))}zn.getCenter(s);let a=0;for(let l=0,f=e.count;l<f;l++)nn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(nn));if(t)for(let l=0,f=t.length;l<f;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)nn.fromBufferAttribute(d,m),p&&(Is.fromBufferAttribute(e,m),nn.add(Is)),a=Math.max(a,s.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let U=0;U<s.count;U++)d[U]=new de,p[U]=new de;const m=new de,v=new de,g=new de,y=new ct,M=new ct,b=new ct,w=new de,_=new de;function S(U,R,C){m.fromBufferAttribute(s,U),v.fromBufferAttribute(s,R),g.fromBufferAttribute(s,C),y.fromBufferAttribute(l,U),M.fromBufferAttribute(l,R),b.fromBufferAttribute(l,C),v.sub(m),g.sub(m),M.sub(y),b.sub(y);const j=1/(M.x*b.y-b.x*M.y);isFinite(j)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(j),_.copy(g).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(j),d[U].add(w),d[R].add(w),d[C].add(w),p[U].add(_),p[R].add(_),p[C].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let U=0,R=P.length;U<R;++U){const C=P[U],j=C.start,se=C.count;for(let J=j,fe=j+se;J<fe;J+=3)S(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const D=new de,T=new de,B=new de,O=new de;function L(U){B.fromBufferAttribute(a,U),O.copy(B);const R=d[U];D.copy(R),D.sub(B.multiplyScalar(B.dot(R))).normalize(),T.crossVectors(O,R);const j=T.dot(p[U])<0?-1:1;f.setXYZW(U,D.x,D.y,D.z,j)}for(let U=0,R=P.length;U<R;++U){const C=P[U],j=C.start,se=C.count;for(let J=j,fe=j+se;J<fe;J+=3)L(e.getX(J+0)),L(e.getX(J+1)),L(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const a=new de,l=new de,f=new de,d=new de,p=new de,m=new de,v=new de,g=new de;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),w=e.getX(y+1),_=e.getX(y+2);a.fromBufferAttribute(t,b),l.fromBufferAttribute(t,w),f.fromBufferAttribute(t,_),v.subVectors(f,l),g.subVectors(a,l),v.cross(g),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,_),d.add(v),p.add(v),m.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(_,m.x,m.y,m.z)}else for(let y=0,M=t.count;y<M;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),f.fromBufferAttribute(t,y+2),v.subVectors(f,l),g.subVectors(a,l),v.cross(g),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,g=d.normalized,y=new m.constructor(p.length*v);let M=0,b=0;for(let w=0,_=p.length;w<_;w++){d.isInterleavedBufferAttribute?M=p[w]*d.data.stride+d.offset:M=p[w]*v;for(let S=0;S<v;S++)y[b++]=m[M++]}return new hi(y,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,s=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,s);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let v=0,g=m.length;v<g;v++){const y=m[v],M=e(y,s);p.push(M)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,y=m.length;g<y;g++){const M=m[g];v.push(M.toJSON(e.data))}v.length>0&&(a[p]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],g=l[m];for(let y=0,M=g.length;y<M;y++)v.push(g[y].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new Gt,jr=new L0,ml=new Wl,ym=new de,gl=new de,xl=new de,vl=new de,ed=new de,yl=new de,Sm=new de,Sl=new de;class Jn extends Ln{constructor(e=new Xi,t=new U0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,f=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){yl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const v=d[p],g=l[p];v!==0&&(ed.fromBufferAttribute(g,e),f?yl.addScaledVector(ed,v):yl.addScaledVector(ed.sub(t),v))}t.add(yl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ml.copy(s.boundingSphere),ml.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(ml.containsPoint(jr.origin)===!1&&(jr.intersectSphere(ml,ym)===null||jr.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(vm.copy(l).invert(),jr.copy(e.ray).applyMatrix4(vm),!(s.boundingBox!==null&&jr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,f=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,g=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,w=y.length;b<w;b++){const _=y[b],S=f[_.materialIndex],P=Math.max(_.start,M.start),D=Math.min(d.count,Math.min(_.start+_.count,M.start+M.count));for(let T=P,B=D;T<B;T+=3){const O=d.getX(T),L=d.getX(T+1),U=d.getX(T+2);a=_l(this,S,e,s,m,v,g,O,L,U),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const b=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let _=b,S=w;_<S;_+=3){const P=d.getX(_),D=d.getX(_+1),T=d.getX(_+2);a=_l(this,f,e,s,m,v,g,P,D,T),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let b=0,w=y.length;b<w;b++){const _=y[b],S=f[_.materialIndex],P=Math.max(_.start,M.start),D=Math.min(p.count,Math.min(_.start+_.count,M.start+M.count));for(let T=P,B=D;T<B;T+=3){const O=T,L=T+1,U=T+2;a=_l(this,S,e,s,m,v,g,O,L,U),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let _=b,S=w;_<S;_+=3){const P=_,D=_+1,T=_+2;a=_l(this,f,e,s,m,v,g,P,D,T),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function Ey(r,e,t,s,a,l,f,d){let p;if(e.side===Dn?p=s.intersectTriangle(f,l,a,!0,d):p=s.intersectTriangle(a,l,f,e.side===br,d),p===null)return null;Sl.copy(d),Sl.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Sl);return m<t.near||m>t.far?null:{distance:m,point:Sl.clone(),object:r}}function _l(r,e,t,s,a,l,f,d,p,m){r.getVertexPosition(d,gl),r.getVertexPosition(p,xl),r.getVertexPosition(m,vl);const v=Ey(r,e,t,s,gl,xl,vl,Sm);if(v){const g=new de;di.getBarycoord(Sm,gl,xl,vl,g),a&&(v.uv=di.getInterpolatedAttribute(a,d,p,m,g,new ct)),l&&(v.uv1=di.getInterpolatedAttribute(l,d,p,m,g,new ct)),f&&(v.normal=di.getInterpolatedAttribute(f,d,p,m,g,new de),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new de,materialIndex:0};di.getNormal(gl,xl,vl,y.normal),v.face=y,v.barycoord=g}return v}class Jo extends Xi{constructor(e=1,t=1,s=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:f};const d=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const p=[],m=[],v=[],g=[];let y=0,M=0;b("z","y","x",-1,-1,s,t,e,f,l,0),b("z","y","x",1,-1,s,t,-e,f,l,1),b("x","z","y",1,1,e,s,t,a,f,2),b("x","z","y",1,-1,e,s,-t,a,f,3),b("x","y","z",1,-1,e,t,s,a,l,4),b("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(p),this.setAttribute("position",new Hi(m,3)),this.setAttribute("normal",new Hi(v,3)),this.setAttribute("uv",new Hi(g,2));function b(w,_,S,P,D,T,B,O,L,U,R){const C=T/L,j=B/U,se=T/2,J=B/2,fe=O/2,me=L+1,ue=U+1;let pe=0,H=0;const te=new de;for(let oe=0;oe<ue;oe++){const z=oe*j-J;for(let re=0;re<me;re++){const Le=re*C-se;te[w]=Le*P,te[_]=z*D,te[S]=fe,m.push(te.x,te.y,te.z),te[w]=0,te[_]=0,te[S]=O>0?1:-1,v.push(te.x,te.y,te.z),g.push(re/L),g.push(1-oe/U),pe+=1}}for(let oe=0;oe<U;oe++)for(let z=0;z<L;z++){const re=y+z+me*oe,Le=y+z+me*(oe+1),ne=y+(z+1)+me*(oe+1),ge=y+(z+1)+me*oe;p.push(re,Le,ge),p.push(Le,ne,ge),H+=6}d.addGroup(M,H,R),M+=H,y+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const s=Qs(r[t]);for(const a in s)e[a]=s[a]}return e}function Ty(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function z0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Ay={clone:Qs,merge:yn};var Cy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Zo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cy,this.fragmentShader=Ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Bl extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new de,_m=new ct,Mm=new ct;class ui extends Bl{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,_m,Mm),t.subVectors(Mm,_m)}setViewOffset(e,t,s,a,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ku*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;l+=f.offsetX*a/p,t-=f.offsetY*s/m,a*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Us=-90,Os=1;class Ny extends Ln{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ui(Us,Os,e,t);a.layers=this.layers,this.add(a);const l=new ui(Us,Os,e,t);l.layers=this.layers,this.add(l);const f=new ui(Us,Os,e,t);f.layers=this.layers,this.add(f);const d=new ui(Us,Os,e,t);d.layers=this.layers,this.add(d);const p=new ui(Us,Os,e,t);p.layers=this.layers,this.add(p);const m=new ui(Us,Os,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,f,d,p]=t;for(const m of t)this.remove(m);if(e===Bi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,d,p,m,v]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,f),e.setRenderTarget(s,2,a),e.render(t,d),e.setRenderTarget(s,3,a),e.render(t,p),e.setRenderTarget(s,4,a),e.render(t,m),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,v),e.setRenderTarget(g,y,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class B0 extends Sn{constructor(e,t,s,a,l,f,d,p,m,v){e=e!==void 0?e:[],t=t!==void 0?t:Ws,super(e,t,s,a,l,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Py extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new B0(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Jo(5,5,5),l=new Wi({name:"CubemapFromEquirect",uniforms:Qs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Dn,blending:_r});l.uniforms.tEquirect.value=t;const f=new Jn(a,l),d=t.minFilter;return t.minFilter===Kr&&(t.minFilter=Pn),new Ny(1,10,this).update(e,f),t.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,s,a);e.setRenderTarget(l)}}const td=new de,Dy=new de,Ly=new ut;class Xr{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=td.subVectors(s,t).cross(Dy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(td),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Ly.getNormalMatrix(e),a=this.coplanarPoint(td).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Wl,Ml=new de;class j0{constructor(e=new Xr,t=new Xr,s=new Xr,a=new Xr,l=new Xr,f=new Xr){this.planes=[e,t,s,a,l,f]}set(e,t,s,a,l,f){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(a),d[4].copy(l),d[5].copy(f),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Bi){const s=this.planes,a=e.elements,l=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],g=a[6],y=a[7],M=a[8],b=a[9],w=a[10],_=a[11],S=a[12],P=a[13],D=a[14],T=a[15];if(s[0].setComponents(p-l,y-m,_-M,T-S).normalize(),s[1].setComponents(p+l,y+m,_+M,T+S).normalize(),s[2].setComponents(p+f,y+v,_+b,T+P).normalize(),s[3].setComponents(p-f,y-v,_-b,T-P).normalize(),s[4].setComponents(p-d,y-g,_-w,T-D).normalize(),t===Bi)s[5].setComponents(p+d,y+g,_+w,T+D).normalize();else if(t===Fl)s[5].setComponents(d,g,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Ml.x=a.normal.x>0?e.max.x:e.min.x,Ml.y=a.normal.y>0?e.max.y:e.min.y,Ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function H0(){let r=null,e=!1,t=null,s=null;function a(l,f){t(l,f),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function ky(r){const e=new WeakMap;function t(d,p){const m=d.array,v=d.usage,g=m.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=r.SHORT;else if(m instanceof Uint32Array)M=r.UNSIGNED_INT;else if(m instanceof Int32Array)M=r.INT;else if(m instanceof Int8Array)M=r.BYTE;else if(m instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const v=p.array,g=p.updateRanges;if(r.bindBuffer(m,d),g.length===0)r.bufferSubData(m,0,v);else{g.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<g.length;M++){const b=g[y],w=g[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++y,g[y]=w)}g.length=y+1;for(let M=0,b=g.length;M<b;M++){const w=g[M];r.bufferSubData(m,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:a,remove:l,update:f}}class Zr extends Xi{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,f=t/2,d=Math.floor(s),p=Math.floor(a),m=d+1,v=p+1,g=e/d,y=t/p,M=[],b=[],w=[],_=[];for(let S=0;S<v;S++){const P=S*y-f;for(let D=0;D<m;D++){const T=D*g-l;b.push(T,-P,0),w.push(0,0,1),_.push(D/d),_.push(1-S/p)}}for(let S=0;S<p;S++)for(let P=0;P<d;P++){const D=P+m*S,T=P+m*(S+1),B=P+1+m*(S+1),O=P+1+m*S;M.push(D,T,O),M.push(T,B,O)}this.setIndex(M),this.setAttribute("position",new Hi(b,3)),this.setAttribute("normal",new Hi(w,3)),this.setAttribute("uv",new Hi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uy=`#ifdef USE_ALPHAHASH
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
#endif`,Oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,By=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jy=`#ifdef USE_AOMAP
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
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
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
#endif`,Vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
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
#endif`,Qy=`#ifdef USE_BUMPMAP
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
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,r2=`#define PI 3.141592653589793
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
} // validated`,s2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o2=`vec3 transformedNormal = objectNormal;
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
#endif`,a2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d2="gl_FragColor = linearToOutputTexel( gl_FragColor );",f2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h2=`#ifdef USE_ENVMAP
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
#endif`,p2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m2=`#ifdef USE_ENVMAP
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
#endif`,g2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
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
#endif`,v2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M2=`#ifdef USE_GRADIENTMAP
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
}`,b2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T2=`uniform bool receiveShadow;
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
#endif`,A2=`#ifdef USE_ENVMAP
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
#endif`,C2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D2=`PhysicalMaterial material;
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
#endif`,L2=`struct PhysicalMaterial {
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
}`,k2=`
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
#endif`,I2=`#if defined( RE_IndirectDiffuse )
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
#endif`,U2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V2=`#if defined( USE_POINTS_UV )
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
#endif`,W2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K2=`#ifdef USE_MORPHTARGETS
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
#endif`,Z2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iS=`#ifdef USE_NORMALMAP
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
#endif`,rS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yS=`float getShadowMask() {
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
}`,SS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_S=`#ifdef USE_SKINNING
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
#endif`,MS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bS=`#ifdef USE_SKINNING
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
#endif`,wS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ES=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CS=`#ifdef USE_TRANSMISSION
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
#endif`,RS=`#ifdef USE_TRANSMISSION
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IS=`uniform sampler2D t2D;
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
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`#include <common>
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
}`,jS=`#if DEPTH_PACKING == 3200
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
}`,HS=`#define DISTANCE
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
}`,GS=`#define DISTANCE
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
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`uniform float scale;
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
}`,qS=`uniform vec3 diffuse;
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
}`,YS=`#include <common>
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
}`,QS=`uniform vec3 diffuse;
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
}`,KS=`#define LAMBERT
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
}`,ZS=`#define LAMBERT
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
}`,JS=`#define MATCAP
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
}`,$S=`#define MATCAP
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
}`,e_=`#define NORMAL
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
}`,t_=`#define NORMAL
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
}`,n_=`#define PHONG
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
}`,i_=`#define PHONG
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
}`,r_=`#define STANDARD
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
}`,s_=`#define STANDARD
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
}`,o_=`#define TOON
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
}`,a_=`#define TOON
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
}`,l_=`uniform float size;
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
}`,c_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,d_=`uniform vec3 color;
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
}`,f_=`uniform float rotation;
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
}`,h_=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Iy,alphahash_pars_fragment:Uy,alphamap_fragment:Oy,alphamap_pars_fragment:Fy,alphatest_fragment:zy,alphatest_pars_fragment:By,aomap_fragment:jy,aomap_pars_fragment:Hy,batching_pars_vertex:Gy,batching_vertex:Vy,begin_vertex:Wy,beginnormal_vertex:Xy,bsdfs:qy,iridescence_fragment:Yy,bumpmap_pars_fragment:Qy,clipping_planes_fragment:Ky,clipping_planes_pars_fragment:Zy,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:$y,color_fragment:e2,color_pars_fragment:t2,color_pars_vertex:n2,color_vertex:i2,common:r2,cube_uv_reflection_fragment:s2,defaultnormal_vertex:o2,displacementmap_pars_vertex:a2,displacementmap_vertex:l2,emissivemap_fragment:c2,emissivemap_pars_fragment:u2,colorspace_fragment:d2,colorspace_pars_fragment:f2,envmap_fragment:h2,envmap_common_pars_fragment:p2,envmap_pars_fragment:m2,envmap_pars_vertex:g2,envmap_physical_pars_fragment:A2,envmap_vertex:x2,fog_vertex:v2,fog_pars_vertex:y2,fog_fragment:S2,fog_pars_fragment:_2,gradientmap_pars_fragment:M2,lightmap_pars_fragment:b2,lights_lambert_fragment:w2,lights_lambert_pars_fragment:E2,lights_pars_begin:T2,lights_toon_fragment:C2,lights_toon_pars_fragment:R2,lights_phong_fragment:N2,lights_phong_pars_fragment:P2,lights_physical_fragment:D2,lights_physical_pars_fragment:L2,lights_fragment_begin:k2,lights_fragment_maps:I2,lights_fragment_end:U2,logdepthbuf_fragment:O2,logdepthbuf_pars_fragment:F2,logdepthbuf_pars_vertex:z2,logdepthbuf_vertex:B2,map_fragment:j2,map_pars_fragment:H2,map_particle_fragment:G2,map_particle_pars_fragment:V2,metalnessmap_fragment:W2,metalnessmap_pars_fragment:X2,morphinstance_vertex:q2,morphcolor_vertex:Y2,morphnormal_vertex:Q2,morphtarget_pars_vertex:K2,morphtarget_vertex:Z2,normal_fragment_begin:J2,normal_fragment_maps:$2,normal_pars_fragment:eS,normal_pars_vertex:tS,normal_vertex:nS,normalmap_pars_fragment:iS,clearcoat_normal_fragment_begin:rS,clearcoat_normal_fragment_maps:sS,clearcoat_pars_fragment:oS,iridescence_pars_fragment:aS,opaque_fragment:lS,packing:cS,premultiplied_alpha_fragment:uS,project_vertex:dS,dithering_fragment:fS,dithering_pars_fragment:hS,roughnessmap_fragment:pS,roughnessmap_pars_fragment:mS,shadowmap_pars_fragment:gS,shadowmap_pars_vertex:xS,shadowmap_vertex:vS,shadowmask_pars_fragment:yS,skinbase_vertex:SS,skinning_pars_vertex:_S,skinning_vertex:MS,skinnormal_vertex:bS,specularmap_fragment:wS,specularmap_pars_fragment:ES,tonemapping_fragment:TS,tonemapping_pars_fragment:AS,transmission_fragment:CS,transmission_pars_fragment:RS,uv_pars_fragment:NS,uv_pars_vertex:PS,uv_vertex:DS,worldpos_vertex:LS,background_vert:kS,background_frag:IS,backgroundCube_vert:US,backgroundCube_frag:OS,cube_vert:FS,cube_frag:zS,depth_vert:BS,depth_frag:jS,distanceRGBA_vert:HS,distanceRGBA_frag:GS,equirect_vert:VS,equirect_frag:WS,linedashed_vert:XS,linedashed_frag:qS,meshbasic_vert:YS,meshbasic_frag:QS,meshlambert_vert:KS,meshlambert_frag:ZS,meshmatcap_vert:JS,meshmatcap_frag:$S,meshnormal_vert:e_,meshnormal_frag:t_,meshphong_vert:n_,meshphong_frag:i_,meshphysical_vert:r_,meshphysical_frag:s_,meshtoon_vert:o_,meshtoon_frag:a_,points_vert:l_,points_frag:c_,shadow_vert:u_,shadow_frag:d_,sprite_vert:f_,sprite_frag:h_},De={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Si={basic:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:yn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:yn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:yn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:yn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:yn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:yn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:yn([De.common,De.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:yn([De.lights,De.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Si.physical={uniforms:yn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const bl={r:0,b:0,g:0},Gr=new Vi,p_=new Gt;function m_(r,e,t,s,a,l,f){const d=new Tt(0);let p=l===!0?0:1,m,v,g=null,y=0,M=null;function b(P){let D=P.isScene===!0?P.background:null;return D&&D.isTexture&&(D=(P.backgroundBlurriness>0?t:e).get(D)),D}function w(P){let D=!1;const T=b(P);T===null?S(d,p):T&&T.isColor&&(S(T,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(P,D){const T=b(D);T&&(T.isCubeTexture||T.mapping===Gl)?(v===void 0&&(v=new Jn(new Jo(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Qs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,O,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Gr.copy(D.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),v.material.uniforms.envMap.value=T,v.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(p_.makeRotationFromEuler(Gr)),v.material.toneMapped=_t.getTransfer(T.colorSpace)!==Pt,(g!==T||y!==T.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,g=T,y=T.version,M=r.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):T&&T.isTexture&&(m===void 0&&(m=new Jn(new Zr(2,2),new Wi({name:"BackgroundMaterial",uniforms:Qs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=T,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=_t.getTransfer(T.colorSpace)!==Pt,T.matrixAutoUpdate===!0&&T.updateMatrix(),m.material.uniforms.uvTransform.value.copy(T.matrix),(g!==T||y!==T.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,g=T,y=T.version,M=r.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function S(P,D){P.getRGB(bl,z0(r)),s.buffers.color.setClear(bl.r,bl.g,bl.b,D,f)}return{getClearColor:function(){return d},setClearColor:function(P,D=1){d.set(P),p=D,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,S(d,p)},render:w,addToRenderList:_}}function g_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=y(null);let l=a,f=!1;function d(C,j,se,J,fe){let me=!1;const ue=g(J,se,j);l!==ue&&(l=ue,m(l.object)),me=M(C,J,se,fe),me&&b(C,J,se,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(me||f)&&(f=!1,T(C,j,se,J),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function v(C){return r.deleteVertexArray(C)}function g(C,j,se){const J=se.wireframe===!0;let fe=s[C.id];fe===void 0&&(fe={},s[C.id]=fe);let me=fe[j.id];me===void 0&&(me={},fe[j.id]=me);let ue=me[J];return ue===void 0&&(ue=y(p()),me[J]=ue),ue}function y(C){const j=[],se=[],J=[];for(let fe=0;fe<t;fe++)j[fe]=0,se[fe]=0,J[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:se,attributeDivisors:J,object:C,attributes:{},index:null}}function M(C,j,se,J){const fe=l.attributes,me=j.attributes;let ue=0;const pe=se.getAttributes();for(const H in pe)if(pe[H].location>=0){const oe=fe[H];let z=me[H];if(z===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),oe===void 0||oe.attribute!==z||z&&oe.data!==z.data)return!0;ue++}return l.attributesNum!==ue||l.index!==J}function b(C,j,se,J){const fe={},me=j.attributes;let ue=0;const pe=se.getAttributes();for(const H in pe)if(pe[H].location>=0){let oe=me[H];oe===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const z={};z.attribute=oe,oe&&oe.data&&(z.data=oe.data),fe[H]=z,ue++}l.attributes=fe,l.attributesNum=ue,l.index=J}function w(){const C=l.newAttributes;for(let j=0,se=C.length;j<se;j++)C[j]=0}function _(C){S(C,0)}function S(C,j){const se=l.newAttributes,J=l.enabledAttributes,fe=l.attributeDivisors;se[C]=1,J[C]===0&&(r.enableVertexAttribArray(C),J[C]=1),fe[C]!==j&&(r.vertexAttribDivisor(C,j),fe[C]=j)}function P(){const C=l.newAttributes,j=l.enabledAttributes;for(let se=0,J=j.length;se<J;se++)j[se]!==C[se]&&(r.disableVertexAttribArray(se),j[se]=0)}function D(C,j,se,J,fe,me,ue){ue===!0?r.vertexAttribIPointer(C,j,se,fe,me):r.vertexAttribPointer(C,j,se,J,fe,me)}function T(C,j,se,J){w();const fe=J.attributes,me=se.getAttributes(),ue=j.defaultAttributeValues;for(const pe in me){const H=me[pe];if(H.location>=0){let te=fe[pe];if(te===void 0&&(pe==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),pe==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){const oe=te.normalized,z=te.itemSize,re=e.get(te);if(re===void 0)continue;const Le=re.buffer,ne=re.type,ge=re.bytesPerElement,we=ne===r.INT||ne===r.UNSIGNED_INT||te.gpuType===lf;if(te.isInterleavedBufferAttribute){const Se=te.data,Re=Se.stride,Oe=te.offset;if(Se.isInstancedInterleavedBuffer){for(let Ke=0;Ke<H.locationSize;Ke++)S(H.location+Ke,Se.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ke=0;Ke<H.locationSize;Ke++)_(H.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let Ke=0;Ke<H.locationSize;Ke++)D(H.location+Ke,z/H.locationSize,ne,oe,Re*ge,(Oe+z/H.locationSize*Ke)*ge,we)}else{if(te.isInstancedBufferAttribute){for(let Se=0;Se<H.locationSize;Se++)S(H.location+Se,te.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Se=0;Se<H.locationSize;Se++)_(H.location+Se);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let Se=0;Se<H.locationSize;Se++)D(H.location+Se,z/H.locationSize,ne,oe,z*ge,z/H.locationSize*Se*ge,we)}}else if(ue!==void 0){const oe=ue[pe];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(H.location,oe);break;case 3:r.vertexAttrib3fv(H.location,oe);break;case 4:r.vertexAttrib4fv(H.location,oe);break;default:r.vertexAttrib1fv(H.location,oe)}}}}P()}function B(){U();for(const C in s){const j=s[C];for(const se in j){const J=j[se];for(const fe in J)v(J[fe].object),delete J[fe];delete j[se]}delete s[C]}}function O(C){if(s[C.id]===void 0)return;const j=s[C.id];for(const se in j){const J=j[se];for(const fe in J)v(J[fe].object),delete J[fe];delete j[se]}delete s[C.id]}function L(C){for(const j in s){const se=s[j];if(se[C.id]===void 0)continue;const J=se[C.id];for(const fe in J)v(J[fe].object),delete J[fe];delete se[C.id]}}function U(){R(),f=!0,l!==a&&(l=a,m(l.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:U,resetDefaultState:R,dispose:B,releaseStatesOfGeometry:O,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:_,disableUnusedAttributes:P}}function x_(r,e,t){let s;function a(m){s=m}function l(m,v){r.drawArrays(s,m,v),t.update(v,s,1)}function f(m,v,g){g!==0&&(r.drawArraysInstanced(s,m,v,g),t.update(v,s,g))}function d(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,g);let M=0;for(let b=0;b<g;b++)M+=v[b];t.update(M,s,1)}function p(m,v,g,y){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<m.length;b++)f(m[b],v[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,v,0,y,0,g);let b=0;for(let w=0;w<g;w++)b+=v[w]*y[w];t.update(b,s,1)}}this.setMode=a,this.render=l,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function v_(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(L){return!(L!==Zn&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const U=L===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Gi&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==_i&&!U)}function p(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:T,vertexTextures:B,maxSamples:O}}function y_(r){const e=this;let t=null,s=0,a=!1,l=!1;const f=new Xr,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||s!==0||a;return a=y,s=g.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,y){t=v(g,y,0)},this.setState=function(g,y,M){const b=g.clippingPlanes,w=g.clipIntersection,_=g.clipShadows,S=r.get(g);if(!a||b===null||b.length===0||l&&!_)l?v(null):m();else{const P=l?0:s,D=P*4;let T=S.clippingState||null;p.value=T,T=v(b,y,D,M);for(let B=0;B!==D;++B)T[B]=t[B];S.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,y,M,b){const w=g!==null?g.length:0;let _=null;if(w!==0){if(_=p.value,b!==!0||_===null){const S=M+w*4,P=y.matrixWorldInverse;d.getNormalMatrix(P),(_===null||_.length<S)&&(_=new Float32Array(S));for(let D=0,T=M;D!==w;++D,T+=4)f.copy(g[D]).applyMatrix4(P,d),f.normal.toArray(_,T),_[T+3]=f.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function S_(r){let e=new WeakMap;function t(f,d){return d===wd?f.mapping=Ws:d===Ed&&(f.mapping=Xs),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===wd||d===Ed)if(e.has(f)){const p=e.get(f).texture;return t(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Py(p.height);return m.fromEquirectangularTexture(r,f),e.set(f,m),f.addEventListener("dispose",a),t(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class __ extends Bl{constructor(e=-1,t=1,s=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,f=s+e,d=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,f=l+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bs=4,bm=[.125,.215,.35,.446,.526,.582],Qr=20,nd=new __,wm=new Tt;let id=null,rd=0,sd=0,od=!1;const qr=(1+Math.sqrt(5))/2,Fs=1/qr,Em=[new de(-qr,Fs,0),new de(qr,Fs,0),new de(-Fs,0,qr),new de(Fs,0,qr),new de(0,qr,-Fs),new de(0,qr,Fs),new de(-1,1,-1),new de(1,1,-1),new de(-1,1,1),new de(1,1,1)];class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){id=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(id,rd,sd),this._renderer.xr.enabled=od,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),id=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Zs,format:Zn,colorSpace:Js,depthBuffer:!1},a=Am(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M_(l)),this._blurMaterial=b_(l,e,t)}return a}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,nd)}_sceneToCubeUV(e,t,s,a){const d=new ui(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(wm),v.toneMapping=Mr,v.autoClear=!1;const M=new U0({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),b=new Jn(new Jo,M);let w=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,w=!0):(M.color.copy(wm),w=!0);for(let S=0;S<6;S++){const P=S%3;P===0?(d.up.set(0,p[S],0),d.lookAt(m[S],0,0)):P===1?(d.up.set(0,0,p[S]),d.lookAt(0,m[S],0)):(d.up.set(0,p[S],0),d.lookAt(0,0,m[S]));const D=this._cubeSize;wl(a,P*D,S>2?D:0,D,D),v.setRenderTarget(a),w&&v.render(b,d),v.render(e,d)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=y,v.autoClear=g,e.background=_}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Ws||e.mapping===Xs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new Jn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;wl(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(f,nd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const f=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Em[(a-l-1)%Em.length];this._blur(e,l-1,l,f,d)}t.autoClear=s}_blur(e,t,s,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,s,a,"latitudinal",l),this._halfBlur(f,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Jn(this._lodPlanes[a],m),y=m.uniforms,M=this._sizeLods[s]-1,b=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Qr-1),w=l/b,_=isFinite(l)?1+Math.floor(v*w):Qr;_>Qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Qr}`);const S=[];let P=0;for(let L=0;L<Qr;++L){const U=L/w,R=Math.exp(-U*U/2);S.push(R),L===0?P+=R:L<_&&(P+=2*R)}for(let L=0;L<S.length;L++)S[L]=S[L]/P;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=S,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=b,y.mipInt.value=D-s;const T=this._sizeLods[a],B=3*T*(a>D-Bs?a-D+Bs:0),O=4*(this._cubeSize-T);wl(t,B,O,3*T,2*T),p.setRenderTarget(t),p.render(g,nd)}}function M_(r){const e=[],t=[],s=[];let a=r;const l=r-Bs+1+bm.length;for(let f=0;f<l;f++){const d=Math.pow(2,a);t.push(d);let p=1/d;f>r-Bs?p=bm[f-r+Bs-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),v=-m,g=1+m,y=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,b=6,w=3,_=2,S=1,P=new Float32Array(w*b*M),D=new Float32Array(_*b*M),T=new Float32Array(S*b*M);for(let O=0;O<M;O++){const L=O%3*2/3-1,U=O>2?0:-1,R=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];P.set(R,w*b*O),D.set(y,_*b*O);const C=[O,O,O,O,O,O];T.set(C,S*b*O)}const B=new Xi;B.setAttribute("position",new hi(P,w)),B.setAttribute("uv",new hi(D,_)),B.setAttribute("faceIndex",new hi(T,S)),e.push(B),a>Bs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Am(r,e,t){const s=new wr(r,e,t);return s.texture.mapping=Gl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wl(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function b_(r,e,t){const s=new Float32Array(Qr),a=new de(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:pf(),fragmentShader:`

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
	`}function w_(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===wd||p===Ed,v=p===Ws||p===Xs;if(m||v){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Tm(r)),g=m?t.fromEquirectangular(d,g):t.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return m&&M&&M.height>0||v&&M&&a(M)?(t===null&&(t=new Tm(r)),g=m?t.fromEquirectangular(d):t.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:f}}function E_(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&jo("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function T_(r,e,t,s){const a={},l=new WeakMap;function f(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);for(const b in y.morphAttributes){const w=y.morphAttributes[b];for(let _=0,S=w.length;_<S;_++)e.remove(w[_])}y.removeEventListener("dispose",f),delete a[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(g,y){return a[y.id]===!0||(y.addEventListener("dispose",f),a[y.id]=!0,t.memory.geometries++),y}function p(g){const y=g.attributes;for(const b in y)e.update(y[b],r.ARRAY_BUFFER);const M=g.morphAttributes;for(const b in M){const w=M[b];for(let _=0,S=w.length;_<S;_++)e.update(w[_],r.ARRAY_BUFFER)}}function m(g){const y=[],M=g.index,b=g.attributes.position;let w=0;if(M!==null){const P=M.array;w=M.version;for(let D=0,T=P.length;D<T;D+=3){const B=P[D+0],O=P[D+1],L=P[D+2];y.push(B,O,O,L,L,B)}}else if(b!==void 0){const P=b.array;w=b.version;for(let D=0,T=P.length/3-1;D<T;D+=3){const B=D+0,O=D+1,L=D+2;y.push(B,O,O,L,L,B)}}else return;const _=new(N0(y)?F0:O0)(y,1);_.version=w;const S=l.get(g);S&&e.remove(S),l.set(g,_)}function v(g){const y=l.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&m(g)}else m(g);return l.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function A_(r,e,t){let s;function a(y){s=y}let l,f;function d(y){l=y.type,f=y.bytesPerElement}function p(y,M){r.drawElements(s,M,l,y*f),t.update(M,s,1)}function m(y,M,b){b!==0&&(r.drawElementsInstanced(s,M,l,y*f,b),t.update(M,s,b))}function v(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,l,y,0,b);let _=0;for(let S=0;S<b;S++)_+=M[S];t.update(_,s,1)}function g(y,M,b,w){if(b===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<y.length;S++)m(y[S]/f,M[S],w[S]);else{_.multiDrawElementsInstancedWEBGL(s,M,0,l,y,0,w,0,b);let S=0;for(let P=0;P<b;P++)S+=M[P]*w[P];t.update(S,s,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function C_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,f,d){switch(t.calls++,f){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function R_(r,e,t){const s=new WeakMap,a=new jt;function l(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let C=function(){U.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let T=0;b===!0&&(T=1),w===!0&&(T=2),_===!0&&(T=3);let B=d.attributes.position.count*T,O=1;B>e.maxTextureSize&&(O=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const L=new Float32Array(B*O*4*g),U=new D0(L,B,O,g);U.type=_i,U.needsUpdate=!0;const R=T*4;for(let j=0;j<g;j++){const se=S[j],J=P[j],fe=D[j],me=B*O*4*j;for(let ue=0;ue<se.count;ue++){const pe=ue*R;b===!0&&(a.fromBufferAttribute(se,ue),L[me+pe+0]=a.x,L[me+pe+1]=a.y,L[me+pe+2]=a.z,L[me+pe+3]=0),w===!0&&(a.fromBufferAttribute(J,ue),L[me+pe+4]=a.x,L[me+pe+5]=a.y,L[me+pe+6]=a.z,L[me+pe+7]=0),_===!0&&(a.fromBufferAttribute(fe,ue),L[me+pe+8]=a.x,L[me+pe+9]=a.y,L[me+pe+10]=a.z,L[me+pe+11]=fe.itemSize===4?a.w:1)}}y={count:g,texture:U,size:new ct(B,O)},s.set(d,y),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,t);else{let b=0;for(let _=0;_<m.length;_++)b+=m[_];const w=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",w),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:l}}function N_(r,e,t,s){let a=new WeakMap;function l(p){const m=s.render.frame,v=p.geometry,g=e.get(p,v);if(a.get(g)!==m&&(e.update(g),a.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return g}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:f}}class G0 extends Sn{constructor(e,t,s,a,l,f,d,p,m,v=Hs){if(v!==Hs&&v!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===Hs&&(s=$r),s===void 0&&v===Ys&&(s=qs),super(null,a,l,f,d,p,v,s,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:Bn,this.minFilter=p!==void 0?p:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const V0=new Sn,Nm=new G0(1,1),W0=new D0,X0=new my,q0=new B0,Pm=[],Dm=[],Lm=new Float32Array(16),km=new Float32Array(9),Im=new Float32Array(4);function eo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Pm[a];if(l===void 0&&(l=new Float32Array(a),Pm[a]=l),e!==0){s.toArray(l,0);for(let f=1,d=0;f!==e;++f)d+=t,r[f].toArray(l,d)}return l}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Xl(r,e){let t=Dm[e];t===void 0&&(t=new Int32Array(e),Dm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function P_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function D_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function L_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function k_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function I_(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,s))return;Im.set(s),r.uniformMatrix2fv(this.addr,!1,Im),Jt(t,s)}}function U_(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,s))return;km.set(s),r.uniformMatrix3fv(this.addr,!1,km),Jt(t,s)}}function O_(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,s))return;Lm.set(s),r.uniformMatrix4fv(this.addr,!1,Lm),Jt(t,s)}}function F_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function z_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function B_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function j_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function H_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function G_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function V_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function W_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function X_(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Nm.compareFunction=R0,l=Nm):l=V0,t.setTexture2D(e||l,a)}function q_(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||X0,a)}function Y_(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||q0,a)}function Q_(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||W0,a)}function K_(r){switch(r){case 5126:return P_;case 35664:return D_;case 35665:return L_;case 35666:return k_;case 35674:return I_;case 35675:return U_;case 35676:return O_;case 5124:case 35670:return F_;case 35667:case 35671:return z_;case 35668:case 35672:return B_;case 35669:case 35673:return j_;case 5125:return H_;case 36294:return G_;case 36295:return V_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Q_}}function Z_(r,e){r.uniform1fv(this.addr,e)}function J_(r,e){const t=eo(e,this.size,2);r.uniform2fv(this.addr,t)}function $_(r,e){const t=eo(e,this.size,3);r.uniform3fv(this.addr,t)}function eM(r,e){const t=eo(e,this.size,4);r.uniform4fv(this.addr,t)}function tM(r,e){const t=eo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function nM(r,e){const t=eo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function iM(r,e){const t=eo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rM(r,e){r.uniform1iv(this.addr,e)}function sM(r,e){r.uniform2iv(this.addr,e)}function oM(r,e){r.uniform3iv(this.addr,e)}function aM(r,e){r.uniform4iv(this.addr,e)}function lM(r,e){r.uniform1uiv(this.addr,e)}function cM(r,e){r.uniform2uiv(this.addr,e)}function uM(r,e){r.uniform3uiv(this.addr,e)}function dM(r,e){r.uniform4uiv(this.addr,e)}function fM(r,e,t){const s=this.cache,a=e.length,l=Xl(t,a);Zt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||V0,l[f])}function hM(r,e,t){const s=this.cache,a=e.length,l=Xl(t,a);Zt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||X0,l[f])}function pM(r,e,t){const s=this.cache,a=e.length,l=Xl(t,a);Zt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||q0,l[f])}function mM(r,e,t){const s=this.cache,a=e.length,l=Xl(t,a);Zt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||W0,l[f])}function gM(r){switch(r){case 5126:return Z_;case 35664:return J_;case 35665:return $_;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return rM;case 35667:case 35671:return sM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return cM;case 36295:return uM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}class xM{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=K_(t.type)}}class vM{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gM(t.type)}}class yM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const d=a[l];d.setValue(e,t[d.id],s)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function Um(r,e){r.seq.push(e),r.map[e.id]=e}function SM(r,e,t){const s=r.name,a=s.length;for(ad.lastIndex=0;;){const l=ad.exec(s),f=ad.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){Um(t,m===void 0?new xM(d,r,e):new vM(d,r,e));break}else{let g=t.map[d];g===void 0&&(g=new yM(d),Um(t,g)),t=g}}}class Ol{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);SM(l,f,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,f=t.length;l!==f;++l){const d=t[l],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in t&&s.push(f)}return s}}function Om(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const _M=37297;let MM=0;function bM(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=a;f<l;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${t[f]}`)}return s.join(`
`)}const Fm=new ut;function wM(r){_t._getMatrix(Fm,_t.workingColorSpace,r);const e=`mat3( ${Fm.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(r)){case Vl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function zm(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+bM(r.getShaderSource(e),f)}else return a}function EM(r,e){const t=wM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function TM(r,e){let t;switch(e){case j1:t="Linear";break;case H1:t="Reinhard";break;case G1:t="Cineon";break;case V1:t="ACESFilmic";break;case X1:t="AgX";break;case q1:t="Neutral";break;case W1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const El=new de;function AM(){_t.getLuminanceCoefficients(El);const r=El.x.toFixed(4),e=El.y.toFixed(4),t=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function RM(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function NM(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),f=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[f]={type:l.type,location:r.getAttribLocation(e,f),locationSize:d}}return t}function Ho(r){return r!==""}function Bm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(r){return r.replace(PM,LM)}const DM=new Map;function LM(r,e){let t=ft[e];if(t===void 0){const s=DM.get(e);if(s!==void 0)t=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return tf(t)}const kM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(r){return r.replace(kM,IM)}function IM(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Gm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===S1?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function OM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function zM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case x0:e="ENVMAP_BLENDING_MULTIPLY";break;case z1:e="ENVMAP_BLENDING_MIX";break;case B1:e="ENVMAP_BLENDING_ADD";break}return e}function BM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function jM(r,e,t,s){const a=r.getContext(),l=t.defines;let f=t.vertexShader,d=t.fragmentShader;const p=UM(t),m=OM(t),v=FM(t),g=zM(t),y=BM(t),M=CM(t),b=RM(l),w=a.createProgram();let _,S,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ho).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ho).join(`
`),S.length>0&&(S+=`
`)):(_=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),S=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?ft.tonemapping_pars_fragment:"",t.toneMapping!==Mr?TM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,EM("linearToOutputTexel",t.outputColorSpace),AM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ho).join(`
`)),f=tf(f),f=Bm(f,t),f=jm(f,t),d=tf(d),d=Bm(d,t),d=jm(d,t),f=Hm(f),d=Hm(d),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=P+_+f,T=P+S+d,B=Om(a,a.VERTEX_SHADER,D),O=Om(a,a.FRAGMENT_SHADER,T);a.attachShader(w,B),a.attachShader(w,O),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function L(j){if(r.debug.checkShaderErrors){const se=a.getProgramInfoLog(w).trim(),J=a.getShaderInfoLog(B).trim(),fe=a.getShaderInfoLog(O).trim();let me=!0,ue=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(me=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,B,O);else{const pe=zm(a,B,"vertex"),H=zm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+se+`
`+pe+`
`+H)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(J===""||fe==="")&&(ue=!1);ue&&(j.diagnostics={runnable:me,programLog:se,vertexShader:{log:J,prefix:_},fragmentShader:{log:fe,prefix:S}})}a.deleteShader(B),a.deleteShader(O),U=new Ol(a,w),R=NM(a,w)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(w,_M)),C},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=O,this}let HM=0;class GM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new VM(e),t.set(e,s)),s}}class VM{constructor(e){this.id=HM++,this.code=e,this.usedTimes=0}}function WM(r,e,t,s,a,l,f){const d=new k0,p=new GM,m=new Set,v=[],g=a.logarithmicDepthBuffer,y=a.vertexTextures;let M=a.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return m.add(R),R===0?"uv":`uv${R}`}function _(R,C,j,se,J){const fe=se.fog,me=J.geometry,ue=R.isMeshStandardMaterial?se.environment:null,pe=(R.isMeshStandardMaterial?t:e).get(R.envMap||ue),H=pe&&pe.mapping===Gl?pe.image.height:null,te=b[R.type];R.precision!==null&&(M=a.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const oe=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,z=oe!==void 0?oe.length:0;let re=0;me.morphAttributes.position!==void 0&&(re=1),me.morphAttributes.normal!==void 0&&(re=2),me.morphAttributes.color!==void 0&&(re=3);let Le,ne,ge,we;if(te){const yt=Si[te];Le=yt.vertexShader,ne=yt.fragmentShader}else Le=R.vertexShader,ne=R.fragmentShader,p.update(R),ge=p.getVertexShaderID(R),we=p.getFragmentShaderID(R);const Se=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),Oe=J.isInstancedMesh===!0,Ke=J.isBatchedMesh===!0,At=!!R.map,pt=!!R.matcap,Nt=!!pe,Q=!!R.aoMap,rn=!!R.lightMap,ht=!!R.bumpMap,dt=!!R.normalMap,Ye=!!R.displacementMap,Mt=!!R.emissiveMap,Qe=!!R.metalnessMap,I=!!R.roughnessMap,A=R.anisotropy>0,q=R.clearcoat>0,k=R.dispersion>0,Z=R.iridescence>0,$=R.sheen>0,Te=R.transmission>0,Me=A&&!!R.anisotropyMap,Ne=q&&!!R.clearcoatMap,at=q&&!!R.clearcoatNormalMap,_e=q&&!!R.clearcoatRoughnessMap,Fe=Z&&!!R.iridescenceMap,$e=Z&&!!R.iridescenceThicknessMap,et=$&&!!R.sheenColorMap,Be=$&&!!R.sheenRoughnessMap,mt=!!R.specularMap,st=!!R.specularColorMap,Ct=!!R.specularIntensityMap,W=Te&&!!R.transmissionMap,Pe=Te&&!!R.thicknessMap,he=!!R.gradientMap,xe=!!R.alphaMap,Ie=R.alphaTest>0,ke=!!R.alphaHash,ot=!!R.extensions;let kt=Mr;R.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(kt=r.toneMapping);const Xt={shaderID:te,shaderType:R.type,shaderName:R.name,vertexShader:Le,fragmentShader:ne,defines:R.defines,customVertexShaderID:ge,customFragmentShaderID:we,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Ke,batchingColor:Ke&&J._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&J.instanceColor!==null,instancingMorph:Oe&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Se===null?r.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Js,alphaToCoverage:!!R.alphaToCoverage,map:At,matcap:pt,envMap:Nt,envMapMode:Nt&&pe.mapping,envMapCubeUVHeight:H,aoMap:Q,lightMap:rn,bumpMap:ht,normalMap:dt,displacementMap:y&&Ye,emissiveMap:Mt,normalMapObjectSpace:dt&&R.normalMapType===J1,normalMapTangentSpace:dt&&R.normalMapType===Z1,metalnessMap:Qe,roughnessMap:I,anisotropy:A,anisotropyMap:Me,clearcoat:q,clearcoatMap:Ne,clearcoatNormalMap:at,clearcoatRoughnessMap:_e,dispersion:k,iridescence:Z,iridescenceMap:Fe,iridescenceThicknessMap:$e,sheen:$,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:mt,specularColorMap:st,specularIntensityMap:Ct,transmission:Te,transmissionMap:W,thicknessMap:Pe,gradientMap:he,opaque:R.transparent===!1&&R.blending===js&&R.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ie,alphaHash:ke,combine:R.combine,mapUv:At&&w(R.map.channel),aoMapUv:Q&&w(R.aoMap.channel),lightMapUv:rn&&w(R.lightMap.channel),bumpMapUv:ht&&w(R.bumpMap.channel),normalMapUv:dt&&w(R.normalMap.channel),displacementMapUv:Ye&&w(R.displacementMap.channel),emissiveMapUv:Mt&&w(R.emissiveMap.channel),metalnessMapUv:Qe&&w(R.metalnessMap.channel),roughnessMapUv:I&&w(R.roughnessMap.channel),anisotropyMapUv:Me&&w(R.anisotropyMap.channel),clearcoatMapUv:Ne&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:at&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:et&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(R.sheenRoughnessMap.channel),specularMapUv:mt&&w(R.specularMap.channel),specularColorMapUv:st&&w(R.specularColorMap.channel),specularIntensityMapUv:Ct&&w(R.specularIntensityMap.channel),transmissionMapUv:W&&w(R.transmissionMap.channel),thicknessMapUv:Pe&&w(R.thicknessMap.channel),alphaMapUv:xe&&w(R.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(dt||A),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!me.attributes.uv&&(At||xe),fog:!!fe,useFog:R.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Re,skinning:J.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:kt,decodeVideoTexture:At&&R.map.isVideoTexture===!0&&_t.getTransfer(R.map.colorSpace)===Pt,decodeVideoTextureEmissive:Mt&&R.emissiveMap.isVideoTexture===!0&&_t.getTransfer(R.emissiveMap.colorSpace)===Pt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===zi,flipSided:R.side===Dn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:ot&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&R.extensions.multiDraw===!0||Ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function S(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const j in R.defines)C.push(j),C.push(R.defines[j]);return R.isRawShaderMaterial===!1&&(P(C,R),D(C,R),C.push(r.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function P(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function D(R,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),R.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),R.push(d.mask)}function T(R){const C=b[R.type];let j;if(C){const se=Si[C];j=Ay.clone(se.uniforms)}else j=R.uniforms;return j}function B(R,C){let j;for(let se=0,J=v.length;se<J;se++){const fe=v[se];if(fe.cacheKey===C){j=fe,++j.usedTimes;break}}return j===void 0&&(j=new jM(r,C,R,l),v.push(j)),j}function O(R){if(--R.usedTimes===0){const C=v.indexOf(R);v[C]=v[v.length-1],v.pop(),R.destroy()}}function L(R){p.remove(R)}function U(){p.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:T,acquireProgram:B,releaseProgram:O,releaseShaderCache:L,programs:v,dispose:U}}function XM(){let r=new WeakMap;function e(f){return r.has(f)}function t(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function a(f,d,p){r.get(f)[d]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function qM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Vm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wm(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function f(g,y,M,b,w,_){let S=r[e];return S===void 0?(S={id:g.id,object:g,geometry:y,material:M,groupOrder:b,renderOrder:g.renderOrder,z:w,group:_},r[e]=S):(S.id=g.id,S.object=g,S.geometry=y,S.material=M,S.groupOrder=b,S.renderOrder=g.renderOrder,S.z=w,S.group=_),e++,S}function d(g,y,M,b,w,_){const S=f(g,y,M,b,w,_);M.transmission>0?s.push(S):M.transparent===!0?a.push(S):t.push(S)}function p(g,y,M,b,w,_){const S=f(g,y,M,b,w,_);M.transmission>0?s.unshift(S):M.transparent===!0?a.unshift(S):t.unshift(S)}function m(g,y){t.length>1&&t.sort(g||qM),s.length>1&&s.sort(y||Vm),a.length>1&&a.sort(y||Vm)}function v(){for(let g=e,y=r.length;g<y;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:d,unshift:p,finish:v,sort:m}}function YM(){let r=new WeakMap;function e(s,a){const l=r.get(s);let f;return l===void 0?(f=new Wm,r.set(s,[f])):a>=l.length?(f=new Wm,l.push(f)):f=l[a],f}function t(){r=new WeakMap}return{get:e,dispose:t}}function QM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new de,color:new Tt};break;case"SpotLight":t={position:new de,direction:new de,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new de,halfWidth:new de,halfHeight:new de};break}return r[e.id]=t,t}}}function KM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ZM=0;function JM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function $M(r){const e=new QM,t=KM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new de);const a=new de,l=new Gt,f=new Gt;function d(m){let v=0,g=0,y=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let M=0,b=0,w=0,_=0,S=0,P=0,D=0,T=0,B=0,O=0,L=0;m.sort(JM);for(let R=0,C=m.length;R<C;R++){const j=m[R],se=j.color,J=j.intensity,fe=j.distance,me=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)v+=se.r*J,g+=se.g*J,y+=se.b*J;else if(j.isLightProbe){for(let ue=0;ue<9;ue++)s.probe[ue].addScaledVector(j.sh.coefficients[ue],J);L++}else if(j.isDirectionalLight){const ue=e.get(j);if(ue.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const pe=j.shadow,H=t.get(j);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,s.directionalShadow[M]=H,s.directionalShadowMap[M]=me,s.directionalShadowMatrix[M]=j.shadow.matrix,P++}s.directional[M]=ue,M++}else if(j.isSpotLight){const ue=e.get(j);ue.position.setFromMatrixPosition(j.matrixWorld),ue.color.copy(se).multiplyScalar(J),ue.distance=fe,ue.coneCos=Math.cos(j.angle),ue.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ue.decay=j.decay,s.spot[w]=ue;const pe=j.shadow;if(j.map&&(s.spotLightMap[B]=j.map,B++,pe.updateMatrices(j),j.castShadow&&O++),s.spotLightMatrix[w]=pe.matrix,j.castShadow){const H=t.get(j);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,s.spotShadow[w]=H,s.spotShadowMap[w]=me,T++}w++}else if(j.isRectAreaLight){const ue=e.get(j);ue.color.copy(se).multiplyScalar(J),ue.halfWidth.set(j.width*.5,0,0),ue.halfHeight.set(0,j.height*.5,0),s.rectArea[_]=ue,_++}else if(j.isPointLight){const ue=e.get(j);if(ue.color.copy(j.color).multiplyScalar(j.intensity),ue.distance=j.distance,ue.decay=j.decay,j.castShadow){const pe=j.shadow,H=t.get(j);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,H.shadowCameraNear=pe.camera.near,H.shadowCameraFar=pe.camera.far,s.pointShadow[b]=H,s.pointShadowMap[b]=me,s.pointShadowMatrix[b]=j.shadow.matrix,D++}s.point[b]=ue,b++}else if(j.isHemisphereLight){const ue=e.get(j);ue.skyColor.copy(j.color).multiplyScalar(J),ue.groundColor.copy(j.groundColor).multiplyScalar(J),s.hemi[S]=ue,S++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=y;const U=s.hash;(U.directionalLength!==M||U.pointLength!==b||U.spotLength!==w||U.rectAreaLength!==_||U.hemiLength!==S||U.numDirectionalShadows!==P||U.numPointShadows!==D||U.numSpotShadows!==T||U.numSpotMaps!==B||U.numLightProbes!==L)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=_,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=T+B-O,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=L,U.directionalLength=M,U.pointLength=b,U.spotLength=w,U.rectAreaLength=_,U.hemiLength=S,U.numDirectionalShadows=P,U.numPointShadows=D,U.numSpotShadows=T,U.numSpotMaps=B,U.numLightProbes=L,s.version=ZM++)}function p(m,v){let g=0,y=0,M=0,b=0,w=0;const _=v.matrixWorldInverse;for(let S=0,P=m.length;S<P;S++){const D=m[S];if(D.isDirectionalLight){const T=s.directional[g];T.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(_),g++}else if(D.isSpotLight){const T=s.spot[M];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(_),M++}else if(D.isRectAreaLight){const T=s.rectArea[b];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(_),f.identity(),l.copy(D.matrixWorld),l.premultiply(_),f.extractRotation(l),T.halfWidth.set(D.width*.5,0,0),T.halfHeight.set(0,D.height*.5,0),T.halfWidth.applyMatrix4(f),T.halfHeight.applyMatrix4(f),b++}else if(D.isPointLight){const T=s.point[y];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(_),y++}else if(D.isHemisphereLight){const T=s.hemi[w];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(_),w++}}}return{setup:d,setupView:p,state:s}}function Xm(r){const e=new $M(r),t=[],s=[];function a(v){m.camera=v,t.length=0,s.length=0}function l(v){t.push(v)}function f(v){s.push(v)}function d(){e.setup(t)}function p(v){e.setupView(t,v)}const m={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:f}}function eb(r){let e=new WeakMap;function t(a,l=0){const f=e.get(a);let d;return f===void 0?(d=new Xm(r),e.set(a,[d])):l>=f.length?(d=new Xm(r),f.push(d)):d=f[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}class tb extends Zo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Q1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nb extends Zo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rb=`uniform sampler2D shadow_pass;
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
}`;function sb(r,e,t){let s=new j0;const a=new ct,l=new ct,f=new jt,d=new tb({depthPacking:K1}),p=new nb,m={},v=t.maxTextureSize,g={[br]:Dn,[Dn]:br,[zi]:zi},y=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:ib,fragmentShader:rb}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new Xi;b.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Jn(b,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g0;let S=this.type;this.render=function(O,L,U){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||O.length===0)return;const R=r.getRenderTarget(),C=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),se=r.state;se.setBlending(_r),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const J=S!==Fi&&this.type===Fi,fe=S===Fi&&this.type!==Fi;for(let me=0,ue=O.length;me<ue;me++){const pe=O[me],H=pe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const te=H.getFrameExtents();if(a.multiply(te),l.copy(H.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/te.x),a.x=l.x*te.x,H.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/te.y),a.y=l.y*te.y,H.mapSize.y=l.y)),H.map===null||J===!0||fe===!0){const z=this.type!==Fi?{minFilter:Bn,magFilter:Bn}:{};H.map!==null&&H.map.dispose(),H.map=new wr(a.x,a.y,z),H.map.texture.name=pe.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const oe=H.getViewportCount();for(let z=0;z<oe;z++){const re=H.getViewport(z);f.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),se.viewport(f),H.updateMatrices(pe,z),s=H.getFrustum(),T(L,U,H.camera,pe,this.type)}H.isPointLightShadow!==!0&&this.type===Fi&&P(H,U),H.needsUpdate=!1}S=this.type,_.needsUpdate=!1,r.setRenderTarget(R,C,j)};function P(O,L){const U=e.update(w);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new wr(a.x,a.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(L,null,U,y,w,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(L,null,U,M,w,null)}function D(O,L,U,R){let C=null;const j=U.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(j!==void 0)C=j;else if(C=U.isPointLight===!0?p:d,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const se=C.uuid,J=L.uuid;let fe=m[se];fe===void 0&&(fe={},m[se]=fe);let me=fe[J];me===void 0&&(me=C.clone(),fe[J]=me,L.addEventListener("dispose",B)),C=me}if(C.visible=L.visible,C.wireframe=L.wireframe,R===Fi?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:g[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,U.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const se=r.properties.get(C);se.light=U}return C}function T(O,L,U,R,C){if(O.visible===!1)return;if(O.layers.test(L.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===Fi)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,O.matrixWorld);const J=e.update(O),fe=O.material;if(Array.isArray(fe)){const me=J.groups;for(let ue=0,pe=me.length;ue<pe;ue++){const H=me[ue],te=fe[H.materialIndex];if(te&&te.visible){const oe=D(O,te,R,C);O.onBeforeShadow(r,O,L,U,J,oe,H),r.renderBufferDirect(U,null,J,oe,O,H),O.onAfterShadow(r,O,L,U,J,oe,H)}}}else if(fe.visible){const me=D(O,fe,R,C);O.onBeforeShadow(r,O,L,U,J,me,null),r.renderBufferDirect(U,null,J,me,O,null),O.onAfterShadow(r,O,L,U,J,me,null)}}const se=O.children;for(let J=0,fe=se.length;J<fe;J++)T(se[J],L,U,R,C)}function B(O){O.target.removeEventListener("dispose",B);for(const U in m){const R=m[U],C=O.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const ob={[xd]:vd,[yd]:Md,[Sd]:bd,[Vs]:_d,[vd]:xd,[Md]:yd,[bd]:Sd,[_d]:Vs};function ab(r,e){function t(){let W=!1;const Pe=new jt;let he=null;const xe=new jt(0,0,0,0);return{setMask:function(Ie){he!==Ie&&!W&&(r.colorMask(Ie,Ie,Ie,Ie),he=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,ke,ot,kt,Xt){Xt===!0&&(Ie*=kt,ke*=kt,ot*=kt),Pe.set(Ie,ke,ot,kt),xe.equals(Pe)===!1&&(r.clearColor(Ie,ke,ot,kt),xe.copy(Pe))},reset:function(){W=!1,he=null,xe.set(-1,0,0,0)}}}function s(){let W=!1,Pe=!1,he=null,xe=null,Ie=null;return{setReversed:function(ke){if(Pe!==ke){const ot=e.get("EXT_clip_control");Pe?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const kt=Ie;Ie=null,this.setClear(kt)}Pe=ke},getReversed:function(){return Pe},setTest:function(ke){ke?Se(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(ke){he!==ke&&!W&&(r.depthMask(ke),he=ke)},setFunc:function(ke){if(Pe&&(ke=ob[ke]),xe!==ke){switch(ke){case xd:r.depthFunc(r.NEVER);break;case vd:r.depthFunc(r.ALWAYS);break;case yd:r.depthFunc(r.LESS);break;case Vs:r.depthFunc(r.LEQUAL);break;case Sd:r.depthFunc(r.EQUAL);break;case _d:r.depthFunc(r.GEQUAL);break;case Md:r.depthFunc(r.GREATER);break;case bd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xe=ke}},setLocked:function(ke){W=ke},setClear:function(ke){Ie!==ke&&(Pe&&(ke=1-ke),r.clearDepth(ke),Ie=ke)},reset:function(){W=!1,he=null,xe=null,Ie=null,Pe=!1}}}function a(){let W=!1,Pe=null,he=null,xe=null,Ie=null,ke=null,ot=null,kt=null,Xt=null;return{setTest:function(yt){W||(yt?Se(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(yt){Pe!==yt&&!W&&(r.stencilMask(yt),Pe=yt)},setFunc:function(yt,_n,mn){(he!==yt||xe!==_n||Ie!==mn)&&(r.stencilFunc(yt,_n,mn),he=yt,xe=_n,Ie=mn)},setOp:function(yt,_n,mn){(ke!==yt||ot!==_n||kt!==mn)&&(r.stencilOp(yt,_n,mn),ke=yt,ot=_n,kt=mn)},setLocked:function(yt){W=yt},setClear:function(yt){Xt!==yt&&(r.clearStencil(yt),Xt=yt)},reset:function(){W=!1,Pe=null,he=null,xe=null,Ie=null,ke=null,ot=null,kt=null,Xt=null}}}const l=new t,f=new s,d=new a,p=new WeakMap,m=new WeakMap;let v={},g={},y=new WeakMap,M=[],b=null,w=!1,_=null,S=null,P=null,D=null,T=null,B=null,O=null,L=new Tt(0,0,0),U=0,R=!1,C=null,j=null,se=null,J=null,fe=null;const me=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,pe=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(H)[1]),ue=pe>=1):H.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ue=pe>=2);let te=null,oe={};const z=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),Le=new jt().fromArray(z),ne=new jt().fromArray(re);function ge(W,Pe,he,xe){const Ie=new Uint8Array(4),ke=r.createTexture();r.bindTexture(W,ke),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<he;ot++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Pe+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return ke}const we={};we[r.TEXTURE_2D]=ge(r.TEXTURE_2D,r.TEXTURE_2D,1),we[r.TEXTURE_CUBE_MAP]=ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[r.TEXTURE_2D_ARRAY]=ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),we[r.TEXTURE_3D]=ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Se(r.DEPTH_TEST),f.setFunc(Vs),ht(!1),dt(Zp),Se(r.CULL_FACE),Q(_r);function Se(W){v[W]!==!0&&(r.enable(W),v[W]=!0)}function Re(W){v[W]!==!1&&(r.disable(W),v[W]=!1)}function Oe(W,Pe){return g[W]!==Pe?(r.bindFramebuffer(W,Pe),g[W]=Pe,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Pe),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ke(W,Pe){let he=M,xe=!1;if(W){he=y.get(Pe),he===void 0&&(he=[],y.set(Pe,he));const Ie=W.textures;if(he.length!==Ie.length||he[0]!==r.COLOR_ATTACHMENT0){for(let ke=0,ot=Ie.length;ke<ot;ke++)he[ke]=r.COLOR_ATTACHMENT0+ke;he.length=Ie.length,xe=!0}}else he[0]!==r.BACK&&(he[0]=r.BACK,xe=!0);xe&&r.drawBuffers(he)}function At(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const pt={[Yr]:r.FUNC_ADD,[M1]:r.FUNC_SUBTRACT,[b1]:r.FUNC_REVERSE_SUBTRACT};pt[w1]=r.MIN,pt[E1]=r.MAX;const Nt={[T1]:r.ZERO,[A1]:r.ONE,[C1]:r.SRC_COLOR,[md]:r.SRC_ALPHA,[k1]:r.SRC_ALPHA_SATURATE,[D1]:r.DST_COLOR,[N1]:r.DST_ALPHA,[R1]:r.ONE_MINUS_SRC_COLOR,[gd]:r.ONE_MINUS_SRC_ALPHA,[L1]:r.ONE_MINUS_DST_COLOR,[P1]:r.ONE_MINUS_DST_ALPHA,[I1]:r.CONSTANT_COLOR,[U1]:r.ONE_MINUS_CONSTANT_COLOR,[O1]:r.CONSTANT_ALPHA,[F1]:r.ONE_MINUS_CONSTANT_ALPHA};function Q(W,Pe,he,xe,Ie,ke,ot,kt,Xt,yt){if(W===_r){w===!0&&(Re(r.BLEND),w=!1);return}if(w===!1&&(Se(r.BLEND),w=!0),W!==_1){if(W!==_||yt!==R){if((S!==Yr||T!==Yr)&&(r.blendEquation(r.FUNC_ADD),S=Yr,T=Yr),yt)switch(W){case js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pd:r.blendFunc(r.ONE,r.ONE);break;case Jp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $p:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Jp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $p:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}P=null,D=null,B=null,O=null,L.set(0,0,0),U=0,_=W,R=yt}return}Ie=Ie||Pe,ke=ke||he,ot=ot||xe,(Pe!==S||Ie!==T)&&(r.blendEquationSeparate(pt[Pe],pt[Ie]),S=Pe,T=Ie),(he!==P||xe!==D||ke!==B||ot!==O)&&(r.blendFuncSeparate(Nt[he],Nt[xe],Nt[ke],Nt[ot]),P=he,D=xe,B=ke,O=ot),(kt.equals(L)===!1||Xt!==U)&&(r.blendColor(kt.r,kt.g,kt.b,Xt),L.copy(kt),U=Xt),_=W,R=!1}function rn(W,Pe){W.side===zi?Re(r.CULL_FACE):Se(r.CULL_FACE);let he=W.side===Dn;Pe&&(he=!he),ht(he),W.blending===js&&W.transparent===!1?Q(_r):Q(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),l.setMask(W.colorWrite);const xe=W.stencilWrite;d.setTest(xe),xe&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Mt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(W){C!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),C=W)}function dt(W){W!==v1?(Se(r.CULL_FACE),W!==j&&(W===Zp?r.cullFace(r.BACK):W===y1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),j=W}function Ye(W){W!==se&&(ue&&r.lineWidth(W),se=W)}function Mt(W,Pe,he){W?(Se(r.POLYGON_OFFSET_FILL),(J!==Pe||fe!==he)&&(r.polygonOffset(Pe,he),J=Pe,fe=he)):Re(r.POLYGON_OFFSET_FILL)}function Qe(W){W?Se(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function I(W){W===void 0&&(W=r.TEXTURE0+me-1),te!==W&&(r.activeTexture(W),te=W)}function A(W,Pe,he){he===void 0&&(te===null?he=r.TEXTURE0+me-1:he=te);let xe=oe[he];xe===void 0&&(xe={type:void 0,texture:void 0},oe[he]=xe),(xe.type!==W||xe.texture!==Pe)&&(te!==he&&(r.activeTexture(he),te=he),r.bindTexture(W,Pe||we[W]),xe.type=W,xe.texture=Pe)}function q(){const W=oe[te];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function k(){try{r.compressedTexImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(){try{r.texSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{r.texStorage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{r.texStorage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{r.texImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{r.texImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(W){Le.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Le.copy(W))}function Be(W){ne.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),ne.copy(W))}function mt(W,Pe){let he=m.get(Pe);he===void 0&&(he=new WeakMap,m.set(Pe,he));let xe=he.get(W);xe===void 0&&(xe=r.getUniformBlockIndex(Pe,W.name),he.set(W,xe))}function st(W,Pe){const xe=m.get(Pe).get(W);p.get(Pe)!==xe&&(r.uniformBlockBinding(Pe,xe,W.__bindingPointIndex),p.set(Pe,xe))}function Ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},te=null,oe={},g={},y=new WeakMap,M=[],b=null,w=!1,_=null,S=null,P=null,D=null,T=null,B=null,O=null,L=new Tt(0,0,0),U=0,R=!1,C=null,j=null,se=null,J=null,fe=null,Le.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),l.reset(),f.reset(),d.reset()}return{buffers:{color:l,depth:f,stencil:d},enable:Se,disable:Re,bindFramebuffer:Oe,drawBuffers:Ke,useProgram:At,setBlending:Q,setMaterial:rn,setFlipSided:ht,setCullFace:dt,setLineWidth:Ye,setPolygonOffset:Mt,setScissorTest:Qe,activeTexture:I,bindTexture:A,unbindTexture:q,compressedTexImage2D:k,compressedTexImage3D:Z,texImage2D:Fe,texImage3D:$e,updateUBOMapping:mt,uniformBlockBinding:st,texStorage2D:at,texStorage3D:_e,texSubImage2D:$,texSubImage3D:Te,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:et,viewport:Be,reset:Ct}}function qm(r,e,t,s){const a=lb(s);switch(t){case M0:return r*e;case w0:return r*e;case E0:return r*e*2;case T0:return r*e/a.components*a.byteLength;case df:return r*e/a.components*a.byteLength;case A0:return r*e*2/a.components*a.byteLength;case ff:return r*e*2/a.components*a.byteLength;case b0:return r*e*3/a.components*a.byteLength;case Zn:return r*e*4/a.components*a.byteLength;case hf:return r*e*4/a.components*a.byteLength;case Dl:case Ll:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kl:case Il:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Pd:return Math.max(r,16)*Math.max(e,8)/4;case Cd:case Nd:return Math.max(r,8)*Math.max(e,8)/2;case Dd:case Ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case jd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ul:case Qd:case Kd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case C0:case Zd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Jd:case $d:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lb(r){switch(r){case Gi:case y0:return{byteLength:1,components:1};case Wo:case S0:case Zs:return{byteLength:2,components:1};case cf:case uf:return{byteLength:2,components:4};case $r:case lf:case _i:return{byteLength:4,components:1};case _0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function cb(r,e,t,s,a,l,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ct,v=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,A){return M?new OffscreenCanvas(I,A):zl("canvas")}function w(I,A,q){let k=1;const Z=Qe(I);if((Z.width>q||Z.height>q)&&(k=q/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const $=Math.floor(k*Z.width),Te=Math.floor(k*Z.height);g===void 0&&(g=b($,Te));const Me=A?b($,Te):g;return Me.width=$,Me.height=Te,Me.getContext("2d").drawImage(I,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+Te+")."),Me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),I;return I}function _(I){return I.generateMipmaps}function S(I){r.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(I,A,q,k,Z=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=A;if(A===r.RED&&(q===r.FLOAT&&($=r.R32F),q===r.HALF_FLOAT&&($=r.R16F),q===r.UNSIGNED_BYTE&&($=r.R8)),A===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&($=r.R8UI),q===r.UNSIGNED_SHORT&&($=r.R16UI),q===r.UNSIGNED_INT&&($=r.R32UI),q===r.BYTE&&($=r.R8I),q===r.SHORT&&($=r.R16I),q===r.INT&&($=r.R32I)),A===r.RG&&(q===r.FLOAT&&($=r.RG32F),q===r.HALF_FLOAT&&($=r.RG16F),q===r.UNSIGNED_BYTE&&($=r.RG8)),A===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&($=r.RG8UI),q===r.UNSIGNED_SHORT&&($=r.RG16UI),q===r.UNSIGNED_INT&&($=r.RG32UI),q===r.BYTE&&($=r.RG8I),q===r.SHORT&&($=r.RG16I),q===r.INT&&($=r.RG32I)),A===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&($=r.RGB8UI),q===r.UNSIGNED_SHORT&&($=r.RGB16UI),q===r.UNSIGNED_INT&&($=r.RGB32UI),q===r.BYTE&&($=r.RGB8I),q===r.SHORT&&($=r.RGB16I),q===r.INT&&($=r.RGB32I)),A===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&($=r.RGBA8UI),q===r.UNSIGNED_SHORT&&($=r.RGBA16UI),q===r.UNSIGNED_INT&&($=r.RGBA32UI),q===r.BYTE&&($=r.RGBA8I),q===r.SHORT&&($=r.RGBA16I),q===r.INT&&($=r.RGBA32I)),A===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),A===r.RGBA){const Te=Z?Vl:_t.getTransfer(k);q===r.FLOAT&&($=r.RGBA32F),q===r.HALF_FLOAT&&($=r.RGBA16F),q===r.UNSIGNED_BYTE&&($=Te===Pt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function T(I,A){let q;return I?A===null||A===$r||A===qs?q=r.DEPTH24_STENCIL8:A===_i?q=r.DEPTH32F_STENCIL8:A===Wo&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$r||A===qs?q=r.DEPTH_COMPONENT24:A===_i?q=r.DEPTH_COMPONENT32F:A===Wo&&(q=r.DEPTH_COMPONENT16),q}function B(I,A){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==Bn&&I.minFilter!==Pn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function O(I){const A=I.target;A.removeEventListener("dispose",O),U(A),A.isVideoTexture&&v.delete(A)}function L(I){const A=I.target;A.removeEventListener("dispose",L),C(A)}function U(I){const A=s.get(I);if(A.__webglInit===void 0)return;const q=I.source,k=y.get(q);if(k){const Z=k[A.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(I),Object.keys(k).length===0&&y.delete(q)}s.remove(I)}function R(I){const A=s.get(I);r.deleteTexture(A.__webglTexture);const q=I.source,k=y.get(q);delete k[A.__cacheKey],f.memory.textures--}function C(I){const A=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(A.__webglFramebuffer[k]))for(let Z=0;Z<A.__webglFramebuffer[k].length;Z++)r.deleteFramebuffer(A.__webglFramebuffer[k][Z]);else r.deleteFramebuffer(A.__webglFramebuffer[k]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[k])}else{if(Array.isArray(A.__webglFramebuffer))for(let k=0;k<A.__webglFramebuffer.length;k++)r.deleteFramebuffer(A.__webglFramebuffer[k]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let k=0;k<A.__webglColorRenderbuffer.length;k++)A.__webglColorRenderbuffer[k]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[k]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const q=I.textures;for(let k=0,Z=q.length;k<Z;k++){const $=s.get(q[k]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),f.memory.textures--),s.remove(q[k])}s.remove(I)}let j=0;function se(){j=0}function J(){const I=j;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),j+=1,I}function fe(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function me(I,A){const q=s.get(I);if(I.isVideoTexture&&Ye(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){const k=I.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(q,I,A);return}}t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+A)}function ue(I,A){const q=s.get(I);if(I.version>0&&q.__version!==I.version){ne(q,I,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+A)}function pe(I,A){const q=s.get(I);if(I.version>0&&q.__version!==I.version){ne(q,I,A);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+A)}function H(I,A){const q=s.get(I);if(I.version>0&&q.__version!==I.version){ge(q,I,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+A)}const te={[Td]:r.REPEAT,[fi]:r.CLAMP_TO_EDGE,[Ad]:r.MIRRORED_REPEAT},oe={[Bn]:r.NEAREST,[Y1]:r.NEAREST_MIPMAP_NEAREST,[sl]:r.NEAREST_MIPMAP_LINEAR,[Pn]:r.LINEAR,[Lu]:r.LINEAR_MIPMAP_NEAREST,[Kr]:r.LINEAR_MIPMAP_LINEAR},z={[$1]:r.NEVER,[sy]:r.ALWAYS,[ey]:r.LESS,[R0]:r.LEQUAL,[ty]:r.EQUAL,[ry]:r.GEQUAL,[ny]:r.GREATER,[iy]:r.NOTEQUAL};function re(I,A){if(A.type===_i&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Pn||A.magFilter===Lu||A.magFilter===sl||A.magFilter===Kr||A.minFilter===Pn||A.minFilter===Lu||A.minFilter===sl||A.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,te[A.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,te[A.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,te[A.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,oe[A.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,oe[A.minFilter]),A.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,z[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Bn||A.minFilter!==sl&&A.minFilter!==Kr||A.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Le(I,A){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",O));const k=A.source;let Z=y.get(k);Z===void 0&&(Z={},y.set(k,Z));const $=fe(A);if($!==I.__cacheKey){Z[$]===void 0&&(Z[$]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,q=!0),Z[$].usedTimes++;const Te=Z[I.__cacheKey];Te!==void 0&&(Z[I.__cacheKey].usedTimes--,Te.usedTimes===0&&R(A)),I.__cacheKey=$,I.__webglTexture=Z[$].texture}return q}function ne(I,A,q){let k=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(k=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(k=r.TEXTURE_3D);const Z=Le(I,A),$=A.source;t.bindTexture(k,I.__webglTexture,r.TEXTURE0+q);const Te=s.get($);if($.version!==Te.__version||Z===!0){t.activeTexture(r.TEXTURE0+q);const Me=_t.getPrimaries(_t.workingColorSpace),Ne=A.colorSpace===Sr?null:_t.getPrimaries(A.colorSpace),at=A.colorSpace===Sr||Me===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let _e=w(A.image,!1,a.maxTextureSize);_e=Mt(A,_e);const Fe=l.convert(A.format,A.colorSpace),$e=l.convert(A.type);let et=D(A.internalFormat,Fe,$e,A.colorSpace,A.isVideoTexture);re(k,A);let Be;const mt=A.mipmaps,st=A.isVideoTexture!==!0,Ct=Te.__version===void 0||Z===!0,W=$.dataReady,Pe=B(A,_e);if(A.isDepthTexture)et=T(A.format===Ys,A.type),Ct&&(st?t.texStorage2D(r.TEXTURE_2D,1,et,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,et,_e.width,_e.height,0,Fe,$e,null));else if(A.isDataTexture)if(mt.length>0){st&&Ct&&t.texStorage2D(r.TEXTURE_2D,Pe,et,mt[0].width,mt[0].height);for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],st?W&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,Be.width,Be.height,Fe,$e,Be.data):t.texImage2D(r.TEXTURE_2D,he,et,Be.width,Be.height,0,Fe,$e,Be.data);A.generateMipmaps=!1}else st?(Ct&&t.texStorage2D(r.TEXTURE_2D,Pe,et,_e.width,_e.height),W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e.width,_e.height,Fe,$e,_e.data)):t.texImage2D(r.TEXTURE_2D,0,et,_e.width,_e.height,0,Fe,$e,_e.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){st&&Ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,et,mt[0].width,mt[0].height,_e.depth);for(let he=0,xe=mt.length;he<xe;he++)if(Be=mt[he],A.format!==Zn)if(Fe!==null)if(st){if(W)if(A.layerUpdates.size>0){const Ie=qm(Be.width,Be.height,A.format,A.type);for(const ke of A.layerUpdates){const ot=Be.data.subarray(ke*Ie/Be.data.BYTES_PER_ELEMENT,(ke+1)*Ie/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,ke,Be.width,Be.height,1,Fe,ot)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,_e.depth,Fe,Be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,et,Be.width,Be.height,_e.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,_e.depth,Fe,$e,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,he,et,Be.width,Be.height,_e.depth,0,Fe,$e,Be.data)}else{st&&Ct&&t.texStorage2D(r.TEXTURE_2D,Pe,et,mt[0].width,mt[0].height);for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],A.format!==Zn?Fe!==null?st?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,Be.width,Be.height,Fe,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,he,et,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,Be.width,Be.height,Fe,$e,Be.data):t.texImage2D(r.TEXTURE_2D,he,et,Be.width,Be.height,0,Fe,$e,Be.data)}else if(A.isDataArrayTexture)if(st){if(Ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,et,_e.width,_e.height,_e.depth),W)if(A.layerUpdates.size>0){const he=qm(_e.width,_e.height,A.format,A.type);for(const xe of A.layerUpdates){const Ie=_e.data.subarray(xe*he/_e.data.BYTES_PER_ELEMENT,(xe+1)*he/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,_e.width,_e.height,1,Fe,$e,Ie)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Fe,$e,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,_e.width,_e.height,_e.depth,0,Fe,$e,_e.data);else if(A.isData3DTexture)st?(Ct&&t.texStorage3D(r.TEXTURE_3D,Pe,et,_e.width,_e.height,_e.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Fe,$e,_e.data)):t.texImage3D(r.TEXTURE_3D,0,et,_e.width,_e.height,_e.depth,0,Fe,$e,_e.data);else if(A.isFramebufferTexture){if(Ct)if(st)t.texStorage2D(r.TEXTURE_2D,Pe,et,_e.width,_e.height);else{let he=_e.width,xe=_e.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,et,he,xe,0,Fe,$e,null),he>>=1,xe>>=1}}else if(mt.length>0){if(st&&Ct){const he=Qe(mt[0]);t.texStorage2D(r.TEXTURE_2D,Pe,et,he.width,he.height)}for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],st?W&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,Fe,$e,Be):t.texImage2D(r.TEXTURE_2D,he,et,Fe,$e,Be);A.generateMipmaps=!1}else if(st){if(Ct){const he=Qe(_e);t.texStorage2D(r.TEXTURE_2D,Pe,et,he.width,he.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,$e,_e)}else t.texImage2D(r.TEXTURE_2D,0,et,Fe,$e,_e);_(A)&&S(k),Te.__version=$.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ge(I,A,q){if(A.image.length!==6)return;const k=Le(I,A),Z=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+q);const $=s.get(Z);if(Z.version!==$.__version||k===!0){t.activeTexture(r.TEXTURE0+q);const Te=_t.getPrimaries(_t.workingColorSpace),Me=A.colorSpace===Sr?null:_t.getPrimaries(A.colorSpace),Ne=A.colorSpace===Sr||Te===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const at=A.isCompressedTexture||A.image[0].isCompressedTexture,_e=A.image[0]&&A.image[0].isDataTexture,Fe=[];for(let xe=0;xe<6;xe++)!at&&!_e?Fe[xe]=w(A.image[xe],!0,a.maxCubemapSize):Fe[xe]=_e?A.image[xe].image:A.image[xe],Fe[xe]=Mt(A,Fe[xe]);const $e=Fe[0],et=l.convert(A.format,A.colorSpace),Be=l.convert(A.type),mt=D(A.internalFormat,et,Be,A.colorSpace),st=A.isVideoTexture!==!0,Ct=$.__version===void 0||k===!0,W=Z.dataReady;let Pe=B(A,$e);re(r.TEXTURE_CUBE_MAP,A);let he;if(at){st&&Ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,mt,$e.width,$e.height);for(let xe=0;xe<6;xe++){he=Fe[xe].mipmaps;for(let Ie=0;Ie<he.length;Ie++){const ke=he[Ie];A.format!==Zn?et!==null?st?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,0,0,ke.width,ke.height,et,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,mt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,0,0,ke.width,ke.height,et,Be,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,mt,ke.width,ke.height,0,et,Be,ke.data)}}}else{if(he=A.mipmaps,st&&Ct){he.length>0&&Pe++;const xe=Qe(Fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,mt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(_e){st?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Fe[xe].width,Fe[xe].height,et,Be,Fe[xe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,Fe[xe].width,Fe[xe].height,0,et,Be,Fe[xe].data);for(let Ie=0;Ie<he.length;Ie++){const ot=he[Ie].image[xe].image;st?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,0,0,ot.width,ot.height,et,Be,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,mt,ot.width,ot.height,0,et,Be,ot.data)}}else{st?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,et,Be,Fe[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,et,Be,Fe[xe]);for(let Ie=0;Ie<he.length;Ie++){const ke=he[Ie];st?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,0,0,et,Be,ke.image[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,mt,et,Be,ke.image[xe])}}}_(A)&&S(r.TEXTURE_CUBE_MAP),$.__version=Z.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function we(I,A,q,k,Z,$){const Te=l.convert(q.format,q.colorSpace),Me=l.convert(q.type),Ne=D(q.internalFormat,Te,Me,q.colorSpace),at=s.get(A),_e=s.get(q);if(_e.__renderTarget=A,!at.__hasExternalTextures){const Fe=Math.max(1,A.width>>$),$e=Math.max(1,A.height>>$);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,Ne,Fe,$e,A.depth,0,Te,Me,null):t.texImage2D(Z,$,Ne,Fe,$e,0,Te,Me,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),dt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,k,Z,_e.__webglTexture,0,ht(A)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,k,Z,_e.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(I,A,q){if(r.bindRenderbuffer(r.RENDERBUFFER,I),A.depthBuffer){const k=A.depthTexture,Z=k&&k.isDepthTexture?k.type:null,$=T(A.stencilBuffer,Z),Te=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=ht(A);dt(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,$,A.width,A.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,$,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,$,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,I)}else{const k=A.textures;for(let Z=0;Z<k.length;Z++){const $=k[Z],Te=l.convert($.format,$.colorSpace),Me=l.convert($.type),Ne=D($.internalFormat,Te,Me,$.colorSpace),at=ht(A);q&&dt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,Ne,A.width,A.height):dt(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,Ne,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Re(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=s.get(A.depthTexture);k.__renderTarget=A,(!k.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),me(A.depthTexture,0);const Z=k.__webglTexture,$=ht(A);if(A.depthTexture.format===Hs)dt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(A.depthTexture.format===Ys)dt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Oe(I){const A=s.get(I),q=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const k=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),k){const Z=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),A.__depthDisposeCallback=Z}A.__boundDepthTexture=k}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Re(A.__webglFramebuffer,I)}else if(q){A.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[k]),A.__webglDepthbuffer[k]===void 0)A.__webglDepthbuffer[k]=r.createRenderbuffer(),Se(A.__webglDepthbuffer[k],I,!1);else{const Z=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=A.__webglDepthbuffer[k];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,$)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Se(A.__webglDepthbuffer,I,!1);else{const k=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,k,r.RENDERBUFFER,Z)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(I,A,q){const k=s.get(I);A!==void 0&&we(k.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Oe(I)}function At(I){const A=I.texture,q=s.get(I),k=s.get(A);I.addEventListener("dispose",L);const Z=I.textures,$=I.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||(k.__webglTexture===void 0&&(k.__webglTexture=r.createTexture()),k.__version=A.version,f.memory.textures++),$){q.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[Me]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)q.__webglFramebuffer[Me][Ne]=r.createFramebuffer()}else q.__webglFramebuffer[Me]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let Me=0;Me<A.mipmaps.length;Me++)q.__webglFramebuffer[Me]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Te)for(let Me=0,Ne=Z.length;Me<Ne;Me++){const at=s.get(Z[Me]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&dt(I)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Me=0;Me<Z.length;Me++){const Ne=Z[Me];q.__webglColorRenderbuffer[Me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Me]);const at=l.convert(Ne.format,Ne.colorSpace),_e=l.convert(Ne.type),Fe=D(Ne.internalFormat,at,_e,Ne.colorSpace,I.isXRRenderTarget===!0),$e=ht(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Fe,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,q.__webglColorRenderbuffer[Me])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture),re(r.TEXTURE_CUBE_MAP,A);for(let Me=0;Me<6;Me++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)we(q.__webglFramebuffer[Me][Ne],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne);else we(q.__webglFramebuffer[Me],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);_(A)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let Me=0,Ne=Z.length;Me<Ne;Me++){const at=Z[Me],_e=s.get(at);t.bindTexture(r.TEXTURE_2D,_e.__webglTexture),re(r.TEXTURE_2D,at),we(q.__webglFramebuffer,I,at,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,0),_(at)&&S(r.TEXTURE_2D)}t.unbindTexture()}else{let Me=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Me=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Me,k.__webglTexture),re(Me,A),A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)we(q.__webglFramebuffer[Ne],I,A,r.COLOR_ATTACHMENT0,Me,Ne);else we(q.__webglFramebuffer,I,A,r.COLOR_ATTACHMENT0,Me,0);_(A)&&S(Me),t.unbindTexture()}I.depthBuffer&&Oe(I)}function pt(I){const A=I.textures;for(let q=0,k=A.length;q<k;q++){const Z=A[q];if(_(Z)){const $=P(I),Te=s.get(Z).__webglTexture;t.bindTexture($,Te),S($),t.unbindTexture()}}}const Nt=[],Q=[];function rn(I){if(I.samples>0){if(dt(I)===!1){const A=I.textures,q=I.width,k=I.height;let Z=r.COLOR_BUFFER_BIT;const $=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=s.get(I),Me=A.length>1;if(Me)for(let Ne=0;Ne<A.length;Ne++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ne=0;Ne<A.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),Me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Ne]);const at=s.get(A[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,at,0)}r.blitFramebuffer(0,0,q,k,0,0,q,k,Z,r.NEAREST),p===!0&&(Nt.length=0,Q.length=0,Nt.push(r.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Nt.push($),Q.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Q)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Me)for(let Ne=0;Ne<A.length;Ne++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Ne]);const at=s.get(A[Ne]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,at,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const A=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function ht(I){return Math.min(a.maxSamples,I.samples)}function dt(I){const A=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ye(I){const A=f.render.frame;v.get(I)!==A&&(v.set(I,A),I.update())}function Mt(I,A){const q=I.colorSpace,k=I.format,Z=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Js&&q!==Sr&&(_t.getTransfer(q)===Pt?(k!==Zn||Z!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function Qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=se,this.setTexture2D=me,this.setTexture2DArray=ue,this.setTexture3D=pe,this.setTextureCube=H,this.rebindTextures=Ke,this.setupRenderTarget=At,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=dt}function ub(r,e){function t(s,a=Sr){let l;const f=_t.getTransfer(a);if(s===Gi)return r.UNSIGNED_BYTE;if(s===cf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===uf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===_0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===y0)return r.BYTE;if(s===S0)return r.SHORT;if(s===Wo)return r.UNSIGNED_SHORT;if(s===lf)return r.INT;if(s===$r)return r.UNSIGNED_INT;if(s===_i)return r.FLOAT;if(s===Zs)return r.HALF_FLOAT;if(s===M0)return r.ALPHA;if(s===b0)return r.RGB;if(s===Zn)return r.RGBA;if(s===w0)return r.LUMINANCE;if(s===E0)return r.LUMINANCE_ALPHA;if(s===Hs)return r.DEPTH_COMPONENT;if(s===Ys)return r.DEPTH_STENCIL;if(s===T0)return r.RED;if(s===df)return r.RED_INTEGER;if(s===A0)return r.RG;if(s===ff)return r.RG_INTEGER;if(s===hf)return r.RGBA_INTEGER;if(s===Dl||s===Ll||s===kl||s===Il)if(f===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Dl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ll)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Dl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ll)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Il)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cd||s===Rd||s===Nd||s===Pd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Cd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dd||s===Ld||s===kd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Dd||s===Ld)return f===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===kd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Id||s===Ud||s===Od||s===Fd||s===zd||s===Bd||s===jd||s===Hd||s===Gd||s===Vd||s===Wd||s===Xd||s===qd||s===Yd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Id)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ud)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Od)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yd)return f===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ul||s===Qd||s===Kd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Ul)return f===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Qd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===C0||s===Zd||s===Jd||s===$d)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Ul)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Zd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$d)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qs?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}class db extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fb={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,s),S=this._getHandJoint(m,w);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],y=v.position.distanceTo(g.position),M=.02,b=.005;m.inputState.pinching&&y>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(fb)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Tl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pb=`
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

}`;class mb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Sn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Wi({vertexShader:hb,fragmentShader:pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new Zr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gb extends $s{constructor(e,t){super();const s=this;let a=null,l=1,f=null,d="local-floor",p=1,m=null,v=null,g=null,y=null,M=null,b=null;const w=new mb,_=t.getContextAttributes();let S=null,P=null;const D=[],T=[],B=new ct;let O=null;const L=new ui;L.viewport=new jt;const U=new ui;U.viewport=new jt;const R=[L,U],C=new db;let j=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=D[ne];return ge===void 0&&(ge=new ld,D[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=D[ne];return ge===void 0&&(ge=new ld,D[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=D[ne];return ge===void 0&&(ge=new ld,D[ne]=ge),ge.getHandSpace()};function J(ne){const ge=T.indexOf(ne.inputSource);if(ge===-1)return;const we=D[ge];we!==void 0&&(we.update(ne.inputSource,ne.frame,m||f),we.dispatchEvent({type:ne.type,data:ne.inputSource}))}function fe(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",me);for(let ne=0;ne<D.length;ne++){const ge=T[ne];ge!==null&&(T[ne]=null,D[ne].disconnect(ge))}j=null,se=null,w.reset(),e.setRenderTarget(S),M=null,y=null,g=null,a=null,P=null,Le.stop(),s.isPresenting=!1,e.setPixelRatio(O),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(ne){m=ne},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g},this.getFrame=function(){return b},this.getSession=function(){return a},this.setSession=async function(ne){if(a=ne,a!==null){if(S=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",me),_.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(B),a.renderState.layers===void 0){const ge={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,ge),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new wr(M.framebufferWidth,M.framebufferHeight,{format:Zn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ge=null,we=null,Se=null;_.depth&&(Se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=_.stencil?Ys:Hs,we=_.stencil?qs:$r);const Re={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:l};g=new XRWebGLBinding(a,t),y=g.createProjectionLayer(Re),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new wr(y.textureWidth,y.textureHeight,{format:Zn,type:Gi,depthTexture:new G0(y.textureWidth,y.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Le.setContext(a),Le.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function me(ne){for(let ge=0;ge<ne.removed.length;ge++){const we=ne.removed[ge],Se=T.indexOf(we);Se>=0&&(T[Se]=null,D[Se].disconnect(we))}for(let ge=0;ge<ne.added.length;ge++){const we=ne.added[ge];let Se=T.indexOf(we);if(Se===-1){for(let Oe=0;Oe<D.length;Oe++)if(Oe>=T.length){T.push(we),Se=Oe;break}else if(T[Oe]===null){T[Oe]=we,Se=Oe;break}if(Se===-1)break}const Re=D[Se];Re&&Re.connect(we)}}const ue=new de,pe=new de;function H(ne,ge,we){ue.setFromMatrixPosition(ge.matrixWorld),pe.setFromMatrixPosition(we.matrixWorld);const Se=ue.distanceTo(pe),Re=ge.projectionMatrix.elements,Oe=we.projectionMatrix.elements,Ke=Re[14]/(Re[10]-1),At=Re[14]/(Re[10]+1),pt=(Re[9]+1)/Re[5],Nt=(Re[9]-1)/Re[5],Q=(Re[8]-1)/Re[0],rn=(Oe[8]+1)/Oe[0],ht=Ke*Q,dt=Ke*rn,Ye=Se/(-Q+rn),Mt=Ye*-Q;if(ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Mt),ne.translateZ(Ye),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Re[10]===-1)ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Qe=Ke+Ye,I=At+Ye,A=ht-Mt,q=dt+(Se-Mt),k=pt*At/I*Qe,Z=Nt*At/I*Qe;ne.projectionMatrix.makePerspective(A,q,k,Z,Qe,I),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function te(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(a===null)return;let ge=ne.near,we=ne.far;w.texture!==null&&(w.depthNear>0&&(ge=w.depthNear),w.depthFar>0&&(we=w.depthFar)),C.near=U.near=L.near=ge,C.far=U.far=L.far=we,(j!==C.near||se!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),j=C.near,se=C.far),L.layers.mask=ne.layers.mask|2,U.layers.mask=ne.layers.mask|4,C.layers.mask=L.layers.mask|U.layers.mask;const Se=ne.parent,Re=C.cameras;te(C,Se);for(let Oe=0;Oe<Re.length;Oe++)te(Re[Oe],Se);Re.length===2?H(C,L,U):C.projectionMatrix.copy(L.projectionMatrix),oe(ne,C,Se)};function oe(ne,ge,we){we===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(we.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ef*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(ne){p=ne,y!==null&&(y.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let z=null;function re(ne,ge){if(v=ge.getViewerPose(m||f),b=ge,v!==null){const we=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Se=!1;we.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let Oe=0;Oe<we.length;Oe++){const Ke=we[Oe];let At=null;if(M!==null)At=M.getViewport(Ke);else{const Nt=g.getViewSubImage(y,Ke);At=Nt.viewport,Oe===0&&(e.setRenderTargetTextures(P,Nt.colorTexture,y.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(P))}let pt=R[Oe];pt===void 0&&(pt=new ui,pt.layers.enable(Oe),pt.viewport=new jt,R[Oe]=pt),pt.matrix.fromArray(Ke.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ke.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(At.x,At.y,At.width,At.height),Oe===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(pt)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Oe=g.getDepthInformation(we[0]);Oe&&Oe.isValid&&Oe.texture&&w.init(e,Oe,a.renderState)}}for(let we=0;we<D.length;we++){const Se=T[we],Re=D[we];Se!==null&&Re!==void 0&&Re.update(Se,ge,m||f)}z&&z(ne,ge),ge.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ge}),b=null}const Le=new H0;Le.setAnimationLoop(re),this.setAnimationLoop=function(ne){z=ne},this.dispose=function(){}}}const Vr=new Vi,xb=new Gt;function vb(r,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function s(_,S){S.color.getRGB(_.fogColor.value,z0(r)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function a(_,S,P,D,T){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(_,S):S.isMeshToonMaterial?(l(_,S),g(_,S)):S.isMeshPhongMaterial?(l(_,S),v(_,S)):S.isMeshStandardMaterial?(l(_,S),y(_,S),S.isMeshPhysicalMaterial&&M(_,S,T)):S.isMeshMatcapMaterial?(l(_,S),b(_,S)):S.isMeshDepthMaterial?l(_,S):S.isMeshDistanceMaterial?(l(_,S),w(_,S)):S.isMeshNormalMaterial?l(_,S):S.isLineBasicMaterial?(f(_,S),S.isLineDashedMaterial&&d(_,S)):S.isPointsMaterial?p(_,S,P,D):S.isSpriteMaterial?m(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===Dn&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===Dn&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const P=e.get(S),D=P.envMap,T=P.envMapRotation;D&&(_.envMap.value=D,Vr.copy(T),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),_.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(Vr)),_.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function f(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function d(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function p(_,S,P,D){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*P,_.scale.value=D*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function m(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function v(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function g(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function y(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function M(_,S,P){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Dn&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function b(_,S){S.matcap&&(_.matcap.value=S.matcap)}function w(_,S){const P=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function yb(r,e,t,s){let a={},l={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,D){const T=D.program;s.uniformBlockBinding(P,T)}function m(P,D){let T=a[P.id];T===void 0&&(b(P),T=v(P),a[P.id]=T,P.addEventListener("dispose",_));const B=D.program;s.updateUBOMapping(P,B);const O=e.render.frame;l[P.id]!==O&&(y(P),l[P.id]=O)}function v(P){const D=g();P.__bindingPointIndex=D;const T=r.createBuffer(),B=P.__size,O=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,B,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,T),T}function g(){for(let P=0;P<d;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const D=a[P.id],T=P.uniforms,B=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let O=0,L=T.length;O<L;O++){const U=Array.isArray(T[O])?T[O]:[T[O]];for(let R=0,C=U.length;R<C;R++){const j=U[R];if(M(j,O,R,B)===!0){const se=j.__offset,J=Array.isArray(j.value)?j.value:[j.value];let fe=0;for(let me=0;me<J.length;me++){const ue=J[me],pe=w(ue);typeof ue=="number"||typeof ue=="boolean"?(j.__data[0]=ue,r.bufferSubData(r.UNIFORM_BUFFER,se+fe,j.__data)):ue.isMatrix3?(j.__data[0]=ue.elements[0],j.__data[1]=ue.elements[1],j.__data[2]=ue.elements[2],j.__data[3]=0,j.__data[4]=ue.elements[3],j.__data[5]=ue.elements[4],j.__data[6]=ue.elements[5],j.__data[7]=0,j.__data[8]=ue.elements[6],j.__data[9]=ue.elements[7],j.__data[10]=ue.elements[8],j.__data[11]=0):(ue.toArray(j.__data,fe),fe+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,se,j.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(P,D,T,B){const O=P.value,L=D+"_"+T;if(B[L]===void 0)return typeof O=="number"||typeof O=="boolean"?B[L]=O:B[L]=O.clone(),!0;{const U=B[L];if(typeof O=="number"||typeof O=="boolean"){if(U!==O)return B[L]=O,!0}else if(U.equals(O)===!1)return U.copy(O),!0}return!1}function b(P){const D=P.uniforms;let T=0;const B=16;for(let L=0,U=D.length;L<U;L++){const R=Array.isArray(D[L])?D[L]:[D[L]];for(let C=0,j=R.length;C<j;C++){const se=R[C],J=Array.isArray(se.value)?se.value:[se.value];for(let fe=0,me=J.length;fe<me;fe++){const ue=J[fe],pe=w(ue),H=T%B,te=H%pe.boundary,oe=H+te;T+=te,oe!==0&&B-oe<pe.storage&&(T+=B-oe),se.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=T,T+=pe.storage}}}const O=T%B;return O>0&&(T+=B-O),P.__size=T,P.__cache={},this}function w(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),D}function _(P){const D=P.target;D.removeEventListener("dispose",_);const T=f.indexOf(D.__bindingPointIndex);f.splice(T,1),r.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function S(){for(const P in a)r.deleteBuffer(a[P]);f=[],a={},l={}}return{bind:p,update:m,dispose:S}}class Sb{constructor(e={}){const{canvas:t=ay(),context:s=null,depth:a=!0,stencil:l=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const b=new Uint32Array(4),w=new Int32Array(4);let _=null,S=null;const P=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Mr,this.toneMappingExposure=1;const T=this;let B=!1,O=0,L=0,U=null,R=-1,C=null;const j=new jt,se=new jt;let J=null;const fe=new Tt(0);let me=0,ue=t.width,pe=t.height,H=1,te=null,oe=null;const z=new jt(0,0,ue,pe),re=new jt(0,0,ue,pe);let Le=!1;const ne=new j0;let ge=!1,we=!1;const Se=new Gt,Re=new Gt,Oe=new de,Ke=new jt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Nt(){return U===null?H:1}let Q=s;function rn(N,Y){return t.getContext(N,Y)}try{const N={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${af}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ke,!1),Q===null){const Y="webgl2";if(Q=rn(Y,N),Q===null)throw rn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let ht,dt,Ye,Mt,Qe,I,A,q,k,Z,$,Te,Me,Ne,at,_e,Fe,$e,et,Be,mt,st,Ct,W;function Pe(){ht=new E_(Q),ht.init(),st=new ub(Q,ht),dt=new v_(Q,ht,e,st),Ye=new ab(Q,ht),dt.reverseDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),Mt=new C_(Q),Qe=new XM,I=new cb(Q,ht,Ye,Qe,dt,st,Mt),A=new S_(T),q=new w_(T),k=new ky(Q),Ct=new g_(Q,k),Z=new T_(Q,k,Mt,Ct),$=new N_(Q,Z,k,Mt),et=new R_(Q,dt,I),_e=new y_(Qe),Te=new WM(T,A,q,ht,dt,Ct,_e),Me=new vb(T,Qe),Ne=new YM,at=new eb(ht),$e=new m_(T,A,q,Ye,$,M,p),Fe=new sb(T,$,dt),W=new yb(Q,Mt,dt,Ye),Be=new x_(Q,ht,Mt),mt=new A_(Q,ht,Mt),Mt.programs=Te.programs,T.capabilities=dt,T.extensions=ht,T.properties=Qe,T.renderLists=Ne,T.shadowMap=Fe,T.state=Ye,T.info=Mt}Pe();const he=new gb(T,Q);this.xr=he,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const N=ht.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ht.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(N){N!==void 0&&(H=N,this.setSize(ue,pe,!1))},this.getSize=function(N){return N.set(ue,pe)},this.setSize=function(N,Y,le=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=N,pe=Y,t.width=Math.floor(N*H),t.height=Math.floor(Y*H),le===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(ue*H,pe*H).floor()},this.setDrawingBufferSize=function(N,Y,le){ue=N,pe=Y,H=le,t.width=Math.floor(N*le),t.height=Math.floor(Y*le),this.setViewport(0,0,N,Y)},this.getCurrentViewport=function(N){return N.copy(j)},this.getViewport=function(N){return N.copy(z)},this.setViewport=function(N,Y,le,ce){N.isVector4?z.set(N.x,N.y,N.z,N.w):z.set(N,Y,le,ce),Ye.viewport(j.copy(z).multiplyScalar(H).round())},this.getScissor=function(N){return N.copy(re)},this.setScissor=function(N,Y,le,ce){N.isVector4?re.set(N.x,N.y,N.z,N.w):re.set(N,Y,le,ce),Ye.scissor(se.copy(re).multiplyScalar(H).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(N){Ye.setScissorTest(Le=N)},this.setOpaqueSort=function(N){te=N},this.setTransparentSort=function(N){oe=N},this.getClearColor=function(N){return N.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(N=!0,Y=!0,le=!0){let ce=0;if(N){let K=!1;if(U!==null){const Ce=U.texture.format;K=Ce===hf||Ce===ff||Ce===df}if(K){const Ce=U.texture.type,Ee=Ce===Gi||Ce===$r||Ce===Wo||Ce===qs||Ce===cf||Ce===uf,Ve=$e.getClearColor(),He=$e.getClearAlpha(),tt=Ve.r,it=Ve.g,We=Ve.b;Ee?(b[0]=tt,b[1]=it,b[2]=We,b[3]=He,Q.clearBufferuiv(Q.COLOR,0,b)):(w[0]=tt,w[1]=it,w[2]=We,w[3]=He,Q.clearBufferiv(Q.COLOR,0,w))}else ce|=Q.COLOR_BUFFER_BIT}Y&&(ce|=Q.DEPTH_BUFFER_BIT),le&&(ce|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),Ne.dispose(),at.dispose(),Qe.dispose(),A.dispose(),q.dispose(),$.dispose(),Ct.dispose(),W.dispose(),Te.dispose(),he.dispose(),he.removeEventListener("sessionstart",ts),he.removeEventListener("sessionend",qi),Mi.stop()};function xe(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const N=Mt.autoReset,Y=Fe.enabled,le=Fe.autoUpdate,ce=Fe.needsUpdate,K=Fe.type;Pe(),Mt.autoReset=N,Fe.enabled=Y,Fe.autoUpdate=le,Fe.needsUpdate=ce,Fe.type=K}function ke(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ot(N){const Y=N.target;Y.removeEventListener("dispose",ot),kt(Y)}function kt(N){Xt(N),Qe.remove(N)}function Xt(N){const Y=Qe.get(N).programs;Y!==void 0&&(Y.forEach(function(le){Te.releaseProgram(le)}),N.isShaderMaterial&&Te.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,le,ce,K,Ce){Y===null&&(Y=At);const Ee=K.isMesh&&K.matrixWorld.determinant()<0,Ve=ta(N,Y,le,ce,K);Ye.setMaterial(ce,Ee);let He=le.index,tt=1;if(ce.wireframe===!0){if(He=Z.getWireframeAttribute(le),He===void 0)return;tt=2}const it=le.drawRange,We=le.attributes.position;let vt=it.start*tt,Et=(it.start+it.count)*tt;Ce!==null&&(vt=Math.max(vt,Ce.start*tt),Et=Math.min(Et,(Ce.start+Ce.count)*tt)),He!==null?(vt=Math.max(vt,0),Et=Math.min(Et,He.count)):We!=null&&(vt=Math.max(vt,0),Et=Math.min(Et,We.count));const xt=Et-vt;if(xt<0||xt===1/0)return;Ct.setup(K,ce,Ve,le,He);let an,lt=Be;if(He!==null&&(an=k.get(He),lt=mt,lt.setIndex(an)),K.isMesh)ce.wireframe===!0?(Ye.setLineWidth(ce.wireframeLinewidth*Nt()),lt.setMode(Q.LINES)):lt.setMode(Q.TRIANGLES);else if(K.isLine){let qe=ce.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Nt()),K.isLineSegments?lt.setMode(Q.LINES):K.isLineLoop?lt.setMode(Q.LINE_LOOP):lt.setMode(Q.LINE_STRIP)}else K.isPoints?lt.setMode(Q.POINTS):K.isSprite&&lt.setMode(Q.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)lt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))lt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const qe=K._multiDrawStarts,$n=K._multiDrawCounts,bt=K._multiDrawCount,ln=He?k.get(He).bytesPerElement:1,ei=Qe.get(ce).currentProgram.getUniforms();for(let qt=0;qt<bt;qt++)ei.setValue(Q,"_gl_DrawID",qt),lt.render(qe[qt]/ln,$n[qt])}else if(K.isInstancedMesh)lt.renderInstances(vt,xt,K.count);else if(le.isInstancedBufferGeometry){const qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,$n=Math.min(le.instanceCount,qe);lt.renderInstances(vt,xt,$n)}else lt.render(vt,xt)};function yt(N,Y,le){N.transparent===!0&&N.side===zi&&N.forceSinglePass===!1?(N.side=Dn,N.needsUpdate=!0,ns(N,Y,le),N.side=br,N.needsUpdate=!0,ns(N,Y,le),N.side=zi):ns(N,Y,le)}this.compile=function(N,Y,le=null){le===null&&(le=N),S=at.get(le),S.init(Y),D.push(S),le.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),N!==le&&N.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights();const ce=new Set;return N.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ce=K.material;if(Ce)if(Array.isArray(Ce))for(let Ee=0;Ee<Ce.length;Ee++){const Ve=Ce[Ee];yt(Ve,le,K),ce.add(Ve)}else yt(Ce,le,K),ce.add(Ce)}),D.pop(),S=null,ce},this.compileAsync=function(N,Y,le=null){const ce=this.compile(N,Y,le);return new Promise(K=>{function Ce(){if(ce.forEach(function(Ee){Qe.get(Ee).currentProgram.isReady()&&ce.delete(Ee)}),ce.size===0){K(N);return}setTimeout(Ce,10)}ht.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let _n=null;function mn(N){_n&&_n(N)}function ts(){Mi.stop()}function qi(){Mi.start()}const Mi=new H0;Mi.setAnimationLoop(mn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(N){_n=N,he.setAnimationLoop(N),N===null?Mi.stop():Mi.start()},he.addEventListener("sessionstart",ts),he.addEventListener("sessionend",qi),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(Y),Y=he.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,Y,U),S=at.get(N,D.length),S.init(Y),D.push(S),Re.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ne.setFromProjectionMatrix(Re),we=this.localClippingEnabled,ge=_e.init(this.clippingPlanes,we),_=Ne.get(N,P.length),_.init(),P.push(_),he.enabled===!0&&he.isPresenting===!0){const Ce=T.xr.getDepthSensingMesh();Ce!==null&&bi(Ce,Y,-1/0,T.sortObjects)}bi(N,Y,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(te,oe),pt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,pt&&$e.addToRenderList(_,N),this.info.render.frame++,ge===!0&&_e.beginShadows();const le=S.state.shadowsArray;Fe.render(le,N,Y),ge===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=_.opaque,K=_.transmissive;if(S.setupLights(),Y.isArrayCamera){const Ce=Y.cameras;if(K.length>0)for(let Ee=0,Ve=Ce.length;Ee<Ve;Ee++){const He=Ce[Ee];Tr(ce,K,N,He)}pt&&$e.render(N);for(let Ee=0,Ve=Ce.length;Ee<Ve;Ee++){const He=Ce[Ee];Er(_,N,He,He.viewport)}}else K.length>0&&Tr(ce,K,N,Y),pt&&$e.render(N),Er(_,N,Y);U!==null&&(I.updateMultisampleRenderTarget(U),I.updateRenderTargetMipmap(U)),N.isScene===!0&&N.onAfterRender(T,N,Y),Ct.resetDefaultState(),R=-1,C=null,D.pop(),D.length>0?(S=D[D.length-1],ge===!0&&_e.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,P.pop(),P.length>0?_=P[P.length-1]:_=null};function bi(N,Y,le,ce){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)le=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)S.pushLight(N),N.castShadow&&S.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ne.intersectsSprite(N)){ce&&Ke.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Re);const Ee=$.update(N),Ve=N.material;Ve.visible&&_.push(N,Ee,Ve,le,Ke.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||ne.intersectsObject(N))){const Ee=$.update(N),Ve=N.material;if(ce&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ke.copy(N.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ke.copy(Ee.boundingSphere.center)),Ke.applyMatrix4(N.matrixWorld).applyMatrix4(Re)),Array.isArray(Ve)){const He=Ee.groups;for(let tt=0,it=He.length;tt<it;tt++){const We=He[tt],vt=Ve[We.materialIndex];vt&&vt.visible&&_.push(N,Ee,vt,le,Ke.z,We)}}else Ve.visible&&_.push(N,Ee,Ve,le,Ke.z,null)}}const Ce=N.children;for(let Ee=0,Ve=Ce.length;Ee<Ve;Ee++)bi(Ce[Ee],Y,le,ce)}function Er(N,Y,le,ce){const K=N.opaque,Ce=N.transmissive,Ee=N.transparent;S.setupLightsView(le),ge===!0&&_e.setGlobalState(T.clippingPlanes,le),ce&&Ye.viewport(j.copy(ce)),K.length>0&&Yi(K,Y,le),Ce.length>0&&Yi(Ce,Y,le),Ee.length>0&&Yi(Ee,Y,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Tr(N,Y,le,ce){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[ce.id]===void 0&&(S.state.transmissionRenderTarget[ce.id]=new wr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Zs:Gi,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const Ce=S.state.transmissionRenderTarget[ce.id],Ee=ce.viewport||j;Ce.setSize(Ee.z,Ee.w);const Ve=T.getRenderTarget();T.setRenderTarget(Ce),T.getClearColor(fe),me=T.getClearAlpha(),me<1&&T.setClearColor(16777215,.5),T.clear(),pt&&$e.render(le);const He=T.toneMapping;T.toneMapping=Mr;const tt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),S.setupLightsView(ce),ge===!0&&_e.setGlobalState(T.clippingPlanes,ce),Yi(N,le,ce),I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce),ht.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,vt=Y.length;We<vt;We++){const Et=Y[We],xt=Et.object,an=Et.geometry,lt=Et.material,qe=Et.group;if(lt.side===zi&&xt.layers.test(ce.layers)){const $n=lt.side;lt.side=Dn,lt.needsUpdate=!0,$o(xt,le,ce,an,lt,qe),lt.side=$n,lt.needsUpdate=!0,it=!0}}it===!0&&(I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce))}T.setRenderTarget(Ve),T.setClearColor(fe,me),tt!==void 0&&(ce.viewport=tt),T.toneMapping=He}function Yi(N,Y,le){const ce=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Ce=N.length;K<Ce;K++){const Ee=N[K],Ve=Ee.object,He=Ee.geometry,tt=ce===null?Ee.material:ce,it=Ee.group;Ve.layers.test(le.layers)&&$o(Ve,Y,le,He,tt,it)}}function $o(N,Y,le,ce,K,Ce){N.onBeforeRender(T,Y,le,ce,K,Ce),N.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),K.onBeforeRender(T,Y,le,ce,N,Ce),K.transparent===!0&&K.side===zi&&K.forceSinglePass===!1?(K.side=Dn,K.needsUpdate=!0,T.renderBufferDirect(le,Y,ce,K,N,Ce),K.side=br,K.needsUpdate=!0,T.renderBufferDirect(le,Y,ce,K,N,Ce),K.side=zi):T.renderBufferDirect(le,Y,ce,K,N,Ce),N.onAfterRender(T,Y,le,ce,K,Ce)}function ns(N,Y,le){Y.isScene!==!0&&(Y=At);const ce=Qe.get(N),K=S.state.lights,Ce=S.state.shadowsArray,Ee=K.state.version,Ve=Te.getParameters(N,K.state,Ce,Y,le),He=Te.getProgramCacheKey(Ve);let tt=ce.programs;ce.environment=N.isMeshStandardMaterial?Y.environment:null,ce.fog=Y.fog,ce.envMap=(N.isMeshStandardMaterial?q:A).get(N.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,tt===void 0&&(N.addEventListener("dispose",ot),tt=new Map,ce.programs=tt);let it=tt.get(He);if(it!==void 0){if(ce.currentProgram===it&&ce.lightsStateVersion===Ee)return pi(N,Ve),it}else Ve.uniforms=Te.getUniforms(N),N.onBeforeCompile(Ve,T),it=Te.acquireProgram(Ve,He),tt.set(He,it),ce.uniforms=Ve.uniforms;const We=ce.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(We.clippingPlanes=_e.uniform),pi(N,Ve),ce.needsLights=ql(N),ce.lightsStateVersion=Ee,ce.needsLights&&(We.ambientLightColor.value=K.state.ambient,We.lightProbe.value=K.state.probe,We.directionalLights.value=K.state.directional,We.directionalLightShadows.value=K.state.directionalShadow,We.spotLights.value=K.state.spot,We.spotLightShadows.value=K.state.spotShadow,We.rectAreaLights.value=K.state.rectArea,We.ltc_1.value=K.state.rectAreaLTC1,We.ltc_2.value=K.state.rectAreaLTC2,We.pointLights.value=K.state.point,We.pointLightShadows.value=K.state.pointShadow,We.hemisphereLights.value=K.state.hemi,We.directionalShadowMap.value=K.state.directionalShadowMap,We.directionalShadowMatrix.value=K.state.directionalShadowMatrix,We.spotShadowMap.value=K.state.spotShadowMap,We.spotLightMatrix.value=K.state.spotLightMatrix,We.spotLightMap.value=K.state.spotLightMap,We.pointShadowMap.value=K.state.pointShadowMap,We.pointShadowMatrix.value=K.state.pointShadowMatrix),ce.currentProgram=it,ce.uniformsList=null,it}function ea(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=Ol.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function pi(N,Y){const le=Qe.get(N);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function ta(N,Y,le,ce,K){Y.isScene!==!0&&(Y=At),I.resetTextureUnits();const Ce=Y.fog,Ee=ce.isMeshStandardMaterial?Y.environment:null,Ve=U===null?T.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Js,He=(ce.isMeshStandardMaterial?q:A).get(ce.envMap||Ee),tt=ce.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,it=!!le.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),We=!!le.morphAttributes.position,vt=!!le.morphAttributes.normal,Et=!!le.morphAttributes.color;let xt=Mr;ce.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(xt=T.toneMapping);const an=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,lt=an!==void 0?an.length:0,qe=Qe.get(ce),$n=S.state.lights;if(ge===!0&&(we===!0||N!==C)){const gn=N===C&&ce.id===R;_e.setState(ce,N,gn)}let bt=!1;ce.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==$n.state.version||qe.outputColorSpace!==Ve||K.isBatchedMesh&&qe.batching===!1||!K.isBatchedMesh&&qe.batching===!0||K.isBatchedMesh&&qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&qe.instancing===!1||!K.isInstancedMesh&&qe.instancing===!0||K.isSkinnedMesh&&qe.skinning===!1||!K.isSkinnedMesh&&qe.skinning===!0||K.isInstancedMesh&&qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&qe.instancingMorph===!1&&K.morphTexture!==null||qe.envMap!==He||ce.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==_e.numPlanes||qe.numIntersection!==_e.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==it||qe.morphTargets!==We||qe.morphNormals!==vt||qe.morphColors!==Et||qe.toneMapping!==xt||qe.morphTargetsCount!==lt)&&(bt=!0):(bt=!0,qe.__version=ce.version);let ln=qe.currentProgram;bt===!0&&(ln=ns(ce,Y,K));let ei=!1,qt=!1,mi=!1;const Dt=ln.getUniforms(),jn=qe.uniforms;if(Ye.useProgram(ln.program)&&(ei=!0,qt=!0,mi=!0),ce.id!==R&&(R=ce.id,qt=!0),ei||C!==N){Ye.buffers.depth.getReversed()?(Se.copy(N.projectionMatrix),cy(Se),uy(Se),Dt.setValue(Q,"projectionMatrix",Se)):Dt.setValue(Q,"projectionMatrix",N.projectionMatrix),Dt.setValue(Q,"viewMatrix",N.matrixWorldInverse);const Hn=Dt.map.cameraPosition;Hn!==void 0&&Hn.setValue(Q,Oe.setFromMatrixPosition(N.matrixWorld)),dt.logarithmicDepthBuffer&&Dt.setValue(Q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Dt.setValue(Q,"isOrthographic",N.isOrthographicCamera===!0),C!==N&&(C=N,qt=!0,mi=!0)}if(K.isSkinnedMesh){Dt.setOptional(Q,K,"bindMatrix"),Dt.setOptional(Q,K,"bindMatrixInverse");const gn=K.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Dt.setValue(Q,"boneTexture",gn.boneTexture,I))}K.isBatchedMesh&&(Dt.setOptional(Q,K,"batchingTexture"),Dt.setValue(Q,"batchingTexture",K._matricesTexture,I),Dt.setOptional(Q,K,"batchingIdTexture"),Dt.setValue(Q,"batchingIdTexture",K._indirectTexture,I),Dt.setOptional(Q,K,"batchingColorTexture"),K._colorsTexture!==null&&Dt.setValue(Q,"batchingColorTexture",K._colorsTexture,I));const wi=le.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&et.update(K,le,ln),(qt||qe.receiveShadow!==K.receiveShadow)&&(qe.receiveShadow=K.receiveShadow,Dt.setValue(Q,"receiveShadow",K.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(jn.envMap.value=He,jn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Y.environment!==null&&(jn.envMapIntensity.value=Y.environmentIntensity),qt&&(Dt.setValue(Q,"toneMappingExposure",T.toneMappingExposure),qe.needsLights&&na(jn,mi),Ce&&ce.fog===!0&&Me.refreshFogUniforms(jn,Ce),Me.refreshMaterialUniforms(jn,ce,H,pe,S.state.transmissionRenderTarget[N.id]),Ol.upload(Q,ea(qe),jn,I)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Ol.upload(Q,ea(qe),jn,I),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Dt.setValue(Q,"center",K.center),Dt.setValue(Q,"modelViewMatrix",K.modelViewMatrix),Dt.setValue(Q,"normalMatrix",K.normalMatrix),Dt.setValue(Q,"modelMatrix",K.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const gn=ce.uniformsGroups;for(let Hn=0,Mn=gn.length;Hn<Mn;Hn++){const ia=gn[Hn];W.update(ia,ln),W.bind(ia,ln)}}return ln}function na(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function ql(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(N,Y,le){Qe.get(N.texture).__webglTexture=Y,Qe.get(N.depthTexture).__webglTexture=le;const ce=Qe.get(N);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=le===void 0,ce.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,Y){const le=Qe.get(N);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(N,Y=0,le=0){U=N,O=Y,L=le;let ce=!0,K=null,Ce=!1,Ee=!1;if(N){const He=Qe.get(N);if(He.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(Q.FRAMEBUFFER,null),ce=!1;else if(He.__webglFramebuffer===void 0)I.setupRenderTarget(N);else if(He.__hasExternalTextures)I.rebindTextures(N,Qe.get(N.texture).__webglTexture,Qe.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const We=N.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&Qe.has(We)&&(N.width!==We.image.width||N.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(N)}}const tt=N.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ee=!0);const it=Qe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?K=it[Y][le]:K=it[Y],Ce=!0):N.samples>0&&I.useMultisampledRTT(N)===!1?K=Qe.get(N).__webglMultisampledFramebuffer:Array.isArray(it)?K=it[le]:K=it,j.copy(N.viewport),se.copy(N.scissor),J=N.scissorTest}else j.copy(z).multiplyScalar(H).floor(),se.copy(re).multiplyScalar(H).floor(),J=Le;if(Ye.bindFramebuffer(Q.FRAMEBUFFER,K)&&ce&&Ye.drawBuffers(N,K),Ye.viewport(j),Ye.scissor(se),Ye.setScissorTest(J),Ce){const He=Qe.get(N.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,He.__webglTexture,le)}else if(Ee){const He=Qe.get(N.texture),tt=Y||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,He.__webglTexture,le||0,tt)}R=-1},this.readRenderTargetPixels=function(N,Y,le,ce,K,Ce,Ee){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Qe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ve=Ve[Ee]),Ve){Ye.bindFramebuffer(Q.FRAMEBUFFER,Ve);try{const He=N.texture,tt=He.format,it=He.type;if(!dt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-ce&&le>=0&&le<=N.height-K&&Q.readPixels(Y,le,ce,K,st.convert(tt),st.convert(it),Ce)}finally{const He=U!==null?Qe.get(U).__webglFramebuffer:null;Ye.bindFramebuffer(Q.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(N,Y,le,ce,K,Ce,Ee){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Qe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ve=Ve[Ee]),Ve){const He=N.texture,tt=He.format,it=He.type;if(!dt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=N.width-ce&&le>=0&&le<=N.height-K){Ye.bindFramebuffer(Q.FRAMEBUFFER,Ve);const We=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,We),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ce.byteLength,Q.STREAM_READ),Q.readPixels(Y,le,ce,K,st.convert(tt),st.convert(it),0);const vt=U!==null?Qe.get(U).__webglFramebuffer:null;Ye.bindFramebuffer(Q.FRAMEBUFFER,vt);const Et=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await ly(Q,Et,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,We),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ce),Q.deleteBuffer(We),Q.deleteSync(Et),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,Y=null,le=0){N.isTexture!==!0&&(jo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,N=arguments[1]);const ce=Math.pow(2,-le),K=Math.floor(N.image.width*ce),Ce=Math.floor(N.image.height*ce),Ee=Y!==null?Y.x:0,Ve=Y!==null?Y.y:0;I.setTexture2D(N,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,le,0,0,Ee,Ve,K,Ce),Ye.unbindTexture()},this.copyTextureToTexture=function(N,Y,le=null,ce=null,K=0){N.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,N=arguments[1],Y=arguments[2],K=arguments[3]||0,le=null);let Ce,Ee,Ve,He,tt,it,We,vt,Et;const xt=N.isCompressedTexture?N.mipmaps[K]:N.image;le!==null?(Ce=le.max.x-le.min.x,Ee=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,He=le.min.x,tt=le.min.y,it=le.isBox3?le.min.z:0):(Ce=xt.width,Ee=xt.height,Ve=xt.depth||1,He=0,tt=0,it=0),ce!==null?(We=ce.x,vt=ce.y,Et=ce.z):(We=0,vt=0,Et=0);const an=st.convert(Y.format),lt=st.convert(Y.type);let qe;Y.isData3DTexture?(I.setTexture3D(Y,0),qe=Q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(I.setTexture2DArray(Y,0),qe=Q.TEXTURE_2D_ARRAY):(I.setTexture2D(Y,0),qe=Q.TEXTURE_2D),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,Y.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,Y.unpackAlignment);const $n=Q.getParameter(Q.UNPACK_ROW_LENGTH),bt=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),ln=Q.getParameter(Q.UNPACK_SKIP_PIXELS),ei=Q.getParameter(Q.UNPACK_SKIP_ROWS),qt=Q.getParameter(Q.UNPACK_SKIP_IMAGES);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,xt.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,xt.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,He),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,tt),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,it);const mi=N.isDataArrayTexture||N.isData3DTexture,Dt=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){const jn=Qe.get(N),wi=Qe.get(Y),gn=Qe.get(jn.__renderTarget),Hn=Qe.get(wi.__renderTarget);Ye.bindFramebuffer(Q.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ye.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Mn=0;Mn<Ve;Mn++)mi&&Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Qe.get(N).__webglTexture,K,it+Mn),N.isDepthTexture?(Dt&&Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Qe.get(Y).__webglTexture,K,Et+Mn),Q.blitFramebuffer(He,tt,Ce,Ee,We,vt,Ce,Ee,Q.DEPTH_BUFFER_BIT,Q.NEAREST)):Dt?Q.copyTexSubImage3D(qe,K,We,vt,Et+Mn,He,tt,Ce,Ee):Q.copyTexSubImage2D(qe,K,We,vt,Et+Mn,He,tt,Ce,Ee);Ye.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Dt?N.isDataTexture||N.isData3DTexture?Q.texSubImage3D(qe,K,We,vt,Et,Ce,Ee,Ve,an,lt,xt.data):Y.isCompressedArrayTexture?Q.compressedTexSubImage3D(qe,K,We,vt,Et,Ce,Ee,Ve,an,xt.data):Q.texSubImage3D(qe,K,We,vt,Et,Ce,Ee,Ve,an,lt,xt):N.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,K,We,vt,Ce,Ee,an,lt,xt.data):N.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,K,We,vt,xt.width,xt.height,an,xt.data):Q.texSubImage2D(Q.TEXTURE_2D,K,We,vt,Ce,Ee,an,lt,xt);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,$n),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,bt),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,ln),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,ei),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,qt),K===0&&Y.generateMipmaps&&Q.generateMipmap(qe),Ye.unbindTexture()},this.copyTextureToTexture3D=function(N,Y,le=null,ce=null,K=0){return N.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ce=arguments[1]||null,N=arguments[2],Y=arguments[3],K=arguments[4]||0),jo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,Y,le,ce,K)},this.initRenderTarget=function(N){Qe.get(N).__webglFramebuffer===void 0&&I.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?I.setTextureCube(N,0):N.isData3DTexture?I.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?I.setTexture2DArray(N,0):I.setTexture2D(N,0),Ye.unbindTexture()},this.resetState=function(){O=0,L=0,U=null,Ye.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}class Ym extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _b extends Sn{constructor(e=null,t=1,s=1,a,l,f,d,p,m=Bn,v=Bn,g,y){super(null,f,d,p,m,v,a,l,g,y),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mb extends Zo{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jl=new de,Hl=new de,Qm=new Gt,zo=new L0,Al=new Wl,cd=new de,Km=new de;class bb extends Ln{constructor(e=new Xi,t=new Mb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)jl.fromBufferAttribute(t,a-1),Hl.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=jl.distanceTo(Hl);e.setAttribute("lineDistance",new Hi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Al.copy(s.boundingSphere),Al.applyMatrix4(a),Al.radius+=l,e.ray.intersectsSphere(Al)===!1)return;Qm.copy(a).invert(),zo.copy(e.ray).applyMatrix4(Qm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=s.index,y=s.attributes.position;if(v!==null){const M=Math.max(0,f.start),b=Math.min(v.count,f.start+f.count);for(let w=M,_=b-1;w<_;w+=m){const S=v.getX(w),P=v.getX(w+1),D=Cl(this,e,zo,p,S,P);D&&t.push(D)}if(this.isLineLoop){const w=v.getX(b-1),_=v.getX(M),S=Cl(this,e,zo,p,w,_);S&&t.push(S)}}else{const M=Math.max(0,f.start),b=Math.min(y.count,f.start+f.count);for(let w=M,_=b-1;w<_;w+=m){const S=Cl(this,e,zo,p,w,w+1);S&&t.push(S)}if(this.isLineLoop){const w=Cl(this,e,zo,p,b-1,M);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Cl(r,e,t,s,a,l){const f=r.geometry.attributes.position;if(jl.fromBufferAttribute(f,a),Hl.fromBufferAttribute(f,l),t.distanceSqToSegment(jl,Hl,cd,Km)>s)return;cd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(cd);if(!(p<e.near||p>e.far))return{distance:p,point:Km.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Zm=new de,Jm=new de;class wb extends bb{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)Zm.fromBufferAttribute(t,a),Jm.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Zm.distanceTo(Jm);e.setAttribute("lineDistance",new Hi(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rl extends Wi{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Eb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$m(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$m();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $m(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:af}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=af);function Y0({mouseForce:r=20,cursorSize:e=100,isViscous:t=!1,viscous:s=30,iterationsViscous:a=32,iterationsPoisson:l=32,dt:f=.014,BFECC:d=!0,resolution:p=.5,isBounce:m=!1,colors:v=["#5227FF","#FF9FFC","#B497CF"],style:g={},className:y="",autoDemo:M=!0,autoSpeed:b=.5,autoIntensity:w=2.2,takeoverDuration:_=.25,autoResumeDelay:S=1e3,autoRampDuration:P=.6}){const D=X.useRef(null),T=X.useRef(null),B=X.useRef(null),O=X.useRef(null),L=X.useRef(null),U=X.useRef(!0),R=X.useRef(null);return X.useEffect(()=>{if(!D.current)return;function C(q){let k;Array.isArray(q)&&q.length>0?q.length===1?k=[q[0],q[0]]:k=q:k=["#ffffff","#ffffff"];const Z=k.length,$=new Uint8Array(Z*4);for(let Me=0;Me<Z;Me++){const Ne=new Tt(k[Me]);$[Me*4+0]=Math.round(Ne.r*255),$[Me*4+1]=Math.round(Ne.g*255),$[Me*4+2]=Math.round(Ne.b*255),$[Me*4+3]=255}const Te=new _b($,Z,1,Zn);return Te.magFilter=Pn,Te.minFilter=Pn,Te.wrapS=fi,Te.wrapT=fi,Te.generateMipmaps=!1,Te.needsUpdate=!0,Te}const j=C(v),se=new jt(0,0,0,0);class J{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(k){this.container=k,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new Sb({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Tt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new Eb,this.clock.start()}resize(){if(!this.container)return;const k=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(k.width)),this.height=Math.max(1,Math.floor(k.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const fe=new J;class me{constructor(){this.mouseMoved=!1,this.coords=new ct,this.coords_old=new ct,this.diff=new ct,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ct,this.takeoverTo=new ct,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(k){this.container=k,this.docTarget=k.ownerDocument||null;const Z=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);Z&&(this.listenerTarget=Z,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(k,Z){if(!this.container)return!1;const $=this.container.getBoundingClientRect();return $.width===0||$.height===0?!1:k>=$.left&&k<=$.right&&Z>=$.top&&Z<=$.bottom}updateHoverState(k,Z){return this.isHoverInside=this.isPointInside(k,Z),this.isHoverInside}setCoords(k,Z){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const $=this.container.getBoundingClientRect();if($.width===0||$.height===0)return;const Te=(k-$.left)/$.width,Me=(Z-$.top)/$.height;this.coords.set(Te*2-1,-(Me*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(k,Z){this.coords.set(k,Z),this.mouseMoved=!0}onDocumentMouseMove(k){if(this.updateHoverState(k.clientX,k.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const Z=this.container.getBoundingClientRect();if(Z.width===0||Z.height===0)return;const $=(k.clientX-Z.left)/Z.width,Te=(k.clientY-Z.top)/Z.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set($*2-1,-(Te*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(k.clientX,k.clientY),this.hasUserControl=!0}}onDocumentTouchStart(k){if(k.touches.length!==1)return;const Z=k.touches[0];this.updateHoverState(Z.clientX,Z.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Z.clientX,Z.clientY),this.hasUserControl=!0)}onDocumentTouchMove(k){if(k.touches.length!==1)return;const Z=k.touches[0];this.updateHoverState(Z.clientX,Z.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Z.clientX,Z.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const k=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(k>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const Z=k*k*(3-2*k);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,Z)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const ue=new me;class pe{constructor(k,Z,$){this.mouse=k,this.manager=Z,this.enabled=$.enabled,this.speed=$.speed,this.resumeDelay=$.resumeDelay||3e3,this.rampDurationMs=($.rampDuration||0)*1e3,this.active=!1,this.current=new ct(0,0),this.target=new ct,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ct,this.pickNewTarget()}pickNewTarget(){const k=Math.random;this.target.set((k()*2-1)*(1-this.margin),(k()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const k=performance.now();if(k-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=k,this.activationTime=k),!this.active)return;this.mouse.isAutoActive=!0;let $=(k-this.lastTime)/1e3;this.lastTime=k,$>.2&&($=.016);const Te=this._tmpDir.subVectors(this.target,this.current),Me=Te.length();if(Me<.01){this.pickNewTarget();return}Te.normalize();let Ne=1;if(this.rampDurationMs>0){const Fe=Math.min(1,(k-this.activationTime)/this.rampDurationMs);Ne=Fe*Fe*(3-2*Fe)}const at=this.speed*$*Ne,_e=Math.min(at,Me);this.current.addScaledVector(Te,_e),this.mouse.setNormalized(this.current.x,this.current.y)}}const H=`
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
`,te=`
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
`,oe=`
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
`;class Re{constructor(k){var Z;this.props=k||{},this.uniforms=(Z=this.props.material)==null?void 0:Z.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Ym,this.camera=new Bl,this.uniforms&&(this.material=new Rl(this.props.material),this.geometry=new Zr(2,2),this.plane=new Jn(this.geometry,this.material),this.scene.add(this.plane))}update(){fe.renderer.setRenderTarget(this.props.output||null),fe.renderer.render(this.scene,this.camera),fe.renderer.setRenderTarget(null)}}class Oe extends Re{constructor(k){super({material:{vertexShader:H,fragmentShader:z,uniforms:{boundarySpace:{value:k.cellScale},px:{value:k.cellScale},fboSize:{value:k.fboSize},velocity:{value:k.src.texture},dt:{value:k.dt},isBFECC:{value:!0}}},output:k.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const k=new Xi,Z=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);k.setAttribute("position",new hi(Z,3));const $=new Rl({vertexShader:te,fragmentShader:z,uniforms:this.uniforms});this.line=new wb(k,$),this.scene.add(this.line)}update({dt:k,isBounce:Z,BFECC:$}){this.uniforms.dt.value=k,this.line.visible=Z,this.uniforms.isBFECC.value=$,super.update()}}class Ke extends Re{constructor(k){super({output:k.dst}),this.init(k)}init(k){super.init();const Z=new Zr(1,1),$=new Rl({vertexShader:oe,fragmentShader:ne,blending:pd,depthWrite:!1,uniforms:{px:{value:k.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(k.cursor_size,k.cursor_size)}}});this.mouse=new Jn(Z,$),this.scene.add(this.mouse)}update(k){const Z=ue.diff.x/2*k.mouse_force,$=ue.diff.y/2*k.mouse_force,Te=k.cursor_size*k.cellScale.x,Me=k.cursor_size*k.cellScale.y,Ne=Math.min(Math.max(ue.coords.x,-1+Te+k.cellScale.x*2),1-Te-k.cellScale.x*2),at=Math.min(Math.max(ue.coords.y,-1+Me+k.cellScale.y*2),1-Me-k.cellScale.y*2),_e=this.mouse.material.uniforms;_e.force.value.set(Z,$),_e.center.value.set(Ne,at),_e.scale.value.set(k.cursor_size,k.cursor_size),super.update()}}class At extends Re{constructor(k){super({material:{vertexShader:H,fragmentShader:Se,uniforms:{boundarySpace:{value:k.boundarySpace},velocity:{value:k.src.texture},velocity_new:{value:k.dst_.texture},v:{value:k.viscous},px:{value:k.cellScale},dt:{value:k.dt}}},output:k.dst,output0:k.dst_,output1:k.dst}),this.init()}update({viscous:k,iterations:Z,dt:$}){let Te,Me;this.uniforms.v.value=k;for(let Ne=0;Ne<Z;Ne++)Ne%2===0?(Te=this.props.output0,Me=this.props.output1):(Te=this.props.output1,Me=this.props.output0),this.uniforms.velocity_new.value=Te.texture,this.props.output=Me,this.uniforms.dt.value=$,super.update();return Me}}class pt extends Re{constructor(k){super({material:{vertexShader:H,fragmentShader:Le,uniforms:{boundarySpace:{value:k.boundarySpace},velocity:{value:k.src.texture},px:{value:k.cellScale},dt:{value:k.dt}}},output:k.dst}),this.init()}update({vel:k}){this.uniforms.velocity.value=k.texture,super.update()}}class Nt extends Re{constructor(k){super({material:{vertexShader:H,fragmentShader:ge,uniforms:{boundarySpace:{value:k.boundarySpace},pressure:{value:k.dst_.texture},divergence:{value:k.src.texture},px:{value:k.cellScale}}},output:k.dst,output0:k.dst_,output1:k.dst}),this.init()}update({iterations:k}){let Z,$;for(let Te=0;Te<k;Te++)Te%2===0?(Z=this.props.output0,$=this.props.output1):(Z=this.props.output1,$=this.props.output0),this.uniforms.pressure.value=Z.texture,this.props.output=$,super.update();return $}}class Q extends Re{constructor(k){super({material:{vertexShader:H,fragmentShader:we,uniforms:{boundarySpace:{value:k.boundarySpace},pressure:{value:k.src_p.texture},velocity:{value:k.src_v.texture},px:{value:k.cellScale},dt:{value:k.dt}}},output:k.dst}),this.init()}update({vel:k,pressure:Z}){this.uniforms.velocity.value=k.texture,this.uniforms.pressure.value=Z.texture,super.update()}}class rn{constructor(k){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...k},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ct,this.cellScale=new ct,this.boundarySpace=new ct,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Zs:_i}createAllFBO(){const Z={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Pn,magFilter:Pn,wrapS:fi,wrapT:fi};for(let $ in this.fbos)this.fbos[$]=new wr(this.fboSize.x,this.fboSize.y,Z)}createShaderPass(){this.advection=new Oe({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ke({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new At({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Nt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Q({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const k=Math.max(1,Math.round(this.options.resolution*fe.width)),Z=Math.max(1,Math.round(this.options.resolution*fe.height)),$=1/k,Te=1/Z;this.cellScale.set($,Te),this.fboSize.set(k,Z)}resize(){this.calcSize();for(let k in this.fbos)this.fbos[k].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let k=this.fbos.vel_1;this.options.isViscous&&(k=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:k});const Z=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:k,pressure:Z})}}class ht{constructor(){this.init()}init(){this.simulation=new rn,this.scene=new Ym,this.camera=new Bl,this.output=new Jn(new Zr(2,2),new Rl({vertexShader:H,fragmentShader:re,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:j},bgColor:{value:se}}})),this.scene.add(this.output)}addScene(k){this.scene.add(k)}resize(){this.simulation.resize()}render(){fe.renderer.setRenderTarget(null),fe.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class dt{constructor(k){this.props=k,fe.init(k.$wrapper),ue.init(k.$wrapper),ue.autoIntensity=k.autoIntensity,ue.takeoverDuration=k.takeoverDuration,this.lastUserInteraction=performance.now(),ue.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new pe(ue,this,{enabled:k.autoDemo,speed:k.autoSpeed,resumeDelay:k.autoResumeDelay,rampDuration:k.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():U.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(fe.renderer.domElement),this.output=new ht}resize(){fe.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),ue.update(),fe.update(),this.output.update()}loop(){this.running&&(this.render(),O.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,O.current&&(cancelAnimationFrame(O.current),O.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),ue.dispose(),fe.renderer){const k=fe.renderer.domElement;k&&k.parentNode&&k.parentNode.removeChild(k),fe.renderer.dispose(),fe.renderer.forceContextLoss()}}catch{}}}const Ye=D.current;Ye.style.overflow="hidden";const Mt=new dt({$wrapper:Ye,autoDemo:M,autoSpeed:b,autoIntensity:w,takeoverDuration:_,autoResumeDelay:S,autoRampDuration:P});T.current=Mt,(()=>{var Z;if(!T.current)return;const q=(Z=T.current.output)==null?void 0:Z.simulation;if(!q)return;const k=q.options.resolution;Object.assign(q.options,{mouse_force:r,cursor_size:e,isViscous:t,viscous:s,iterations_viscous:a,iterations_poisson:l,dt:f,BFECC:d,resolution:p,isBounce:m}),p!==k&&q.resize()})(),Mt.start();const I=new IntersectionObserver(q=>{const k=q[0],Z=k.isIntersecting&&k.intersectionRatio>0;U.current=Z,T.current&&(Z&&!document.hidden?T.current.start():T.current.pause())},{threshold:[0,.01,.1]});I.observe(Ye),L.current=I;const A=new ResizeObserver(()=>{T.current&&(R.current&&cancelAnimationFrame(R.current),R.current=requestAnimationFrame(()=>{T.current&&T.current.resize()}))});return A.observe(Ye),B.current=A,()=>{if(O.current&&cancelAnimationFrame(O.current),B.current)try{B.current.disconnect()}catch{}if(L.current)try{L.current.disconnect()}catch{}T.current&&T.current.dispose(),T.current=null}},[d,e,f,m,t,l,a,r,p,s,v,M,b,w,_,S,P]),X.useEffect(()=>{var J;const C=T.current;if(!C)return;const j=(J=C.output)==null?void 0:J.simulation;if(!j)return;const se=j.options.resolution;Object.assign(j.options,{mouse_force:r,cursor_size:e,isViscous:t,viscous:s,iterations_viscous:a,iterations_poisson:l,dt:f,BFECC:d,resolution:p,isBounce:m}),C.autoDriver&&(C.autoDriver.enabled=M,C.autoDriver.speed=b,C.autoDriver.resumeDelay=S,C.autoDriver.rampDurationMs=P*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=w,C.autoDriver.mouse.takeoverDuration=_)),p!==se&&j.resize()},[r,e,t,s,a,l,f,d,p,m,M,b,w,_,S,P]),u.jsx("div",{ref:D,className:`absolute inset-0 w-full h-full overflow-hidden pointer-events-none touch-none ${y||""}`,style:{zIndex:0,...g}})}function Tb(){const r=X.useRef(null),e=X.useRef({x:-999,y:-999});return X.useEffect(()=>{const t=r.current,s=t.getContext("2d");let a=0,l=0,f=0,d=[];const p=()=>{a=t.offsetWidth,l=t.offsetHeight,t.width=a*devicePixelRatio,t.height=l*devicePixelRatio,s.scale(devicePixelRatio,devicePixelRatio);const b=Math.floor(a*l/9e3);d=Array.from({length:Math.min(b,110)},()=>({x:Math.random()*a,y:Math.random()*l,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:Math.random()*1.6+.4,opacity:Math.random()*.6+.2}))},m=140,v=()=>{s.clearRect(0,0,a,l),d.forEach(b=>{b.x+=b.vx,b.y+=b.vy,(b.x<0||b.x>a)&&(b.vx*=-1),(b.y<0||b.y>l)&&(b.vy*=-1);const w=b.x-e.current.x,_=b.y-e.current.y,S=Math.sqrt(w*w+_*_);if(S<100){const D=(100-S)/100;b.x+=w*D*.025,b.y+=_*D*.025}const P=S<80;s.beginPath(),s.arc(b.x,b.y,P?b.r*2:b.r,0,Math.PI*2),s.fillStyle=P?`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${b.opacity*1.8})`:`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${b.opacity*.6})`,s.fill()});for(let b=0;b<d.length;b++)for(let w=b+1;w<d.length;w++){const _=d[b].x-d[w].x,S=d[b].y-d[w].y,P=Math.sqrt(_*_+S*S);if(P<m){const D=(1-P/m)*.25;s.beginPath(),s.moveTo(d[b].x,d[b].y),s.lineTo(d[w].x,d[w].y),s.strokeStyle=`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${D})`,s.lineWidth=.7,s.stroke()}}d.forEach(b=>{const w=b.x-e.current.x,_=b.y-e.current.y,S=Math.sqrt(w*w+_*_);if(S<130){const P=(1-S/130)*.5;s.beginPath(),s.moveTo(b.x,b.y),s.lineTo(e.current.x,e.current.y),s.strokeStyle=`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${P})`,s.lineWidth=.6,s.stroke()}}),f=requestAnimationFrame(v)};p(),v();const g=b=>{const w=t.getBoundingClientRect();e.current={x:b.clientX-w.left,y:b.clientY-w.top}},y=()=>{e.current={x:-999,y:-999}};window.addEventListener("mousemove",g),t.addEventListener("mouseleave",y);const M=new ResizeObserver(p);return M.observe(t),()=>{cancelAnimationFrame(f),window.removeEventListener("mousemove",g),t.removeEventListener("mouseleave",y),M.disconnect()}},[]),u.jsx("canvas",{ref:r,className:"absolute inset-0 w-full h-full pointer-events-none z-5"})}function Ab({words:r}){const[e,t]=X.useState(0),[s,a]=X.useState(""),[l,f]=X.useState(!1);return X.useEffect(()=>{const d=r[e%r.length];if(!l&&s===d){const v=setTimeout(()=>f(!0),2e3);return()=>clearTimeout(v)}if(l&&s===""){f(!1),t(v=>v+1);return}const m=setTimeout(()=>{a(l?d.slice(0,s.length-1):d.slice(0,s.length+1))},l?50:90);return()=>clearTimeout(m)},[s,l,e,r]),u.jsxs("span",{style:{color:"rgb(var(--c1))"},children:[s,u.jsx("span",{className:"animate-pulse",style:{color:"rgb(var(--c1))",marginLeft:2},children:"|"})]})}function Cb({target:r,suffix:e=""}){const[t,s]=X.useState(0),a=X.useRef(null);return X.useEffect(()=>{const l=new IntersectionObserver(([f])=>{if(f.isIntersecting){let d=0;const p=r/60,m=setInterval(()=>{d=Math.min(d+p,r),s(Math.floor(d)),d>=r&&clearInterval(m)},20);l.disconnect()}},{threshold:.5});return a.current&&l.observe(a.current),()=>l.disconnect()},[r]),u.jsxs("span",{ref:a,children:[t,e]})}function Rb(){const r=X.useRef(null),[e,t]=X.useState(0),[s,a]=X.useState(!1),[l,f]=X.useState(!1),[d,p]=X.useState({}),m=X.useRef({}),[v,g]=X.useState(!1),y=T=>{const B=T.replace("#",""),O=parseInt(B.substring(0,2),16),L=parseInt(B.substring(2,4),16),U=parseInt(B.substring(4,6),16);return`${O}, ${L}, ${U}`};X.useEffect(()=>{const B=()=>g(window.innerWidth<=640);return B(),window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[]);const M=[{img:"/assets/images/banner1.png",label:"Design Systems",accent:"#7c6ff7",accentBg:"rgba(124,111,247,0.12)",accentBorder:"rgba(124,111,247,0.28)",Icon:d0},{img:"/assets/images/banner2.png",label:"团队分享会-设计赋能",accent:"#FE952C",accentBg:"rgba(254, 149, 44, 0.12)",accentBorder:"rgba(254, 149, 44, 0.30)",Icon:Vv},{img:"/assets/images/banner3.png",label:"设计复盘",accent:"#456CFF",accentBg:"rgba(69, 108, 255, 0.12)",accentBorder:"rgba(69, 108, 255, 0.30)",Icon:bv},{img:"/assets/images/banner4.png",label:"设计扩展",accent:"#f472b6",accentBg:"rgba(244,114,182,0.12)",accentBorder:"rgba(244,114,182,0.28)",Icon:p0},{img:"/assets/images/banner5.png",label:"设计获奖",accent:"#FFEB12",accentBg:"rgba(255,235,18,0.12)",accentBorder:"rgba(255,235,18,0.28)",Icon:n1}],b=(T,B=!1)=>{if(T!==e){if(B){t(T),f(!1);return}l||(f(!0),setTimeout(()=>{t(T),f(!1)},350))}};X.useEffect(()=>{if(s)return;const T=setInterval(()=>{f(!0),setTimeout(()=>{t(B=>(B+1)%M.length),f(!1)},320)},3800);return()=>clearInterval(T)},[s,M.length]);const w=T=>{const B=r.current.getBoundingClientRect(),O=T.clientX-B.left,L=T.clientY-B.top,U=O/B.width-.5,R=L/B.height-.5;r.current.style.transform=`perspective(900px) rotateY(${U*12}deg) rotateX(${-R*10}deg) scale3d(1.02,1.02,1.02)`,r.current.style.setProperty("--mouse-x",`${O}px`),r.current.style.setProperty("--mouse-y",`${L}px`);const C=Math.sqrt(U*U+R*R),j=Math.min(1,Math.max(0,C*2));r.current.style.setProperty("--glow-opacity",`${.4+j*.6}`);const se=200+C*550;r.current.style.setProperty("--border-glow-radius",`${se}px`)},_=()=>{r.current.style.transform="perspective(900px) rotateY(0) rotateX(0) scale3d(1,1,1)",a(!1),r.current.style.setProperty("--mouse-x","-999px"),r.current.style.setProperty("--mouse-y","-999px"),r.current.style.setProperty("--glow-opacity","0"),r.current.style.setProperty("--border-glow-radius","260px")},S=M[e],P=S.Icon,D=v?"16/9":"16/10";return u.jsxs("div",{ref:r,onMouseMove:w,onMouseEnter:()=>a(!0),onMouseLeave:_,className:"relative rounded-2xl cursor-pointer w-full !min-w-0",style:{transition:"transform 0.15s ease-out, background 0.4s ease",transformStyle:"preserve-3d","--accent-rgb":y(S.accent),background:`

        linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02)) padding-box, 
        radial-gradient(circle var(--border-glow-radius, 260px) at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(var(--accent-rgb), 1) 0%, rgba(var(--accent-rgb), 0.4) 50%, transparent 100%) border-box
      `,border:"2px solid transparent",boxShadow:"0 30px 80px rgba(0,0,0,0.5)",maxWidth:"800px",margin:"0 auto",aspectRatio:D,isolation:"isolate"},children:[u.jsx("div",{className:"absolute pointer-events-none",style:{inset:"-20px",borderRadius:"36px",background:"radial-gradient(circle 60px at calc(var(--mouse-x, -999px) + 20px) calc(var(--mouse-y, -999px) + 20px), rgba(var(--accent-rgb), calc(var(--glow-opacity, 0) * 0.85)), transparent 100%)",zIndex:-1,mixBlendMode:"screen",filter:"blur(6px)"}}),u.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-[14px]",style:{transform:"translateZ(0)",willChange:"transform",WebkitMaskImage:"-webkit-radial-gradient(white, black)"},children:[M.map((T,B)=>u.jsxs("div",{className:"absolute inset-0 w-full h-full rounded-[14px] overflow-hidden",style:{opacity:B===e?l?0:1:0,transition:l?"opacity 0.3s ease":"none",transform:"translateZ(0)"},children:[u.jsx("img",{src:T.img,alt:T.label,className:"absolute inset-0 w-full h-full object-cover rounded-[14px]",style:{display:d[B]?"none":void 0},onLoad:()=>{const O=m.current[B];O&&(O.timer&&clearTimeout(O.timer),O.interval&&clearInterval(O.interval),delete m.current[B]),p(L=>{const U={...L};return delete U[B],U})},onError:()=>{if(d[B])return;p(L=>({...L,[B]:!0})),(()=>{const L=m.current[B]||{timer:null,interval:null,count:0},U=L.count;U<5?(L.count=U+1,L.timer=setTimeout(()=>{const R=document.querySelector(`[data-banner-idx="${B}"]`);R&&(R.src=T.img+"?_retry="+Date.now())},2e3*(U+1))):L.interval=setInterval(()=>{const R=document.querySelector(`[data-banner-idx="${B}"]`);R&&(R.src=T.img+"?_retry="+Date.now())},8e3),m.current[B]=L})()},"data-banner-idx":B}),d[B]&&u.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-8 rounded-[14px] cursor-pointer",style:{background:`linear-gradient(135deg, ${T.accent}18 0%, #05050a 100%)`,zIndex:1},onClick:()=>{const O=m.current[B];O&&(O.timer&&clearTimeout(O.timer),O.interval&&clearInterval(O.interval),delete m.current[B]),p(U=>{const R={...U};return delete R[B],R});const L=document.querySelector(`[data-banner-idx="${B}"]`);L&&(L.style.display="",L.src=T.img+"?_retry="+Date.now())},children:[u.jsx("p",{className:"text-sm text-center",style:{color:"rgba(255,255,255,0.5)"},children:"图片加载失败"}),u.jsx("p",{className:"text-xs text-center mt-2",style:{color:"rgba(255,255,255,0.35)"},children:"点击重试"})]})]},B)),u.jsx("div",{className:"absolute inset-0 z-10 cursor-pointer rounded-[14px]",onClick:T=>{const B=T.currentTarget.getBoundingClientRect(),L=T.clientX-B.left<B.width/2?(e-1+M.length)%M.length:(e+1)%M.length;b(L,!0)},style:{background:"linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(var(--accent-rgb),0.04) 100%)"}}),!v&&u.jsx("div",{className:"absolute top-0 left-0 right-0 z-20 flex items-center gap-2 px-4 py-3",style:{background:"rgba(0,0,0,0.28)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderBottom:"1px solid rgba(255,255,255,0.07)"},children:["#ff5f56","#ffbd2e","#27c93f"].map(T=>u.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:T,opacity:.85}},T))}),u.jsxs("div",{className:`absolute bottom-0 left-0 right-0 z-20 flex items-center ${v?"justify-center":"justify-between"} px-3.5 py-2.5`,style:{background:"rgba(0,0,0,0.28)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderTop:"1px solid rgba(255,255,255,0.07)"},children:[!v&&u.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg",style:{background:S.accentBg,border:`1px solid ${S.accentBorder}`,transition:"background 0.4s, border 0.4s"},children:[u.jsx(P,{size:12,style:{color:S.accent}}),u.jsx("span",{className:"text-xs",style:{color:S.accent,fontWeight:600},children:S.label})]}),u.jsx("div",{className:"flex items-center gap-2",children:M.map((T,B)=>u.jsx("button",{onClick:()=>b(B),className:"relative overflow-hidden",style:{width:B===e?26:6,height:6,borderRadius:9999,background:B===e?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.3)",border:"none",padding:0,transition:"width 0.3s ease, background 0.3s ease",cursor:"pointer",position:"relative"},children:B===e&&u.jsx("span",{className:"absolute inset-0 rounded-full",style:{background:S.accent,width:"0%",animation:"progressFlow 3.2s linear forwards",height:"100%",left:0,top:0}})},B))})]})]})]})}function Nb(){const[r,e]=X.useState(!1),t=()=>{const s=document.createElement("a");s.href="https://raw.githubusercontent.com/quweijia/file/main/1%E3%80%81UI%20%E4%B8%BB%E7%AE%A1-%E6%9B%B2%E7%BB%B4%E7%94%B2-15662796885.pdf",s.download="曲维甲-UI主管-简历.pdf",s.target="_blank",s.rel="noopener noreferrer",document.body.appendChild(s),s.click(),document.body.removeChild(s)};return u.jsxs("section",{id:"hero",className:"relative flex items-center overflow-visible md:overflow-hidden",style:{background:"radial-gradient(ellipse 100% 80% at 60% 10%, rgba(0,240,200,0.05) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(124,111,247,0.06) 0%, transparent 60%), #05050a",minHeight:"calc(100vh / var(--screen-scale))"},children:[u.jsx(Y0,{colors:["#00f0c8","#7c6ff7","#ff9ffc"],mouseForce:25,cursorSize:120,resolution:.5,autoDemo:!0,autoSpeed:.3,autoIntensity:1.5}),u.jsx(Tb,{}),u.jsx("div",{className:"absolute left-0 right-0 h-px pointer-events-none z-10 opacity-30",style:{top:"35%",background:"linear-gradient(90deg,transparent,rgba(0,240,200,0.4),transparent)",animation:"scanline 6s ease-in-out infinite"}}),u.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.025]",style:{backgroundImage:"linear-gradient(rgba(0,240,200,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,200,1) 1px,transparent 1px)",backgroundSize:"60px 60px"}}),u.jsxs("div",{className:"relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full",style:{paddingTop:"calc(5rem / var(--screen-scale))",paddingBottom:"calc(4rem / var(--screen-scale))"},children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-1 items-center",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full",style:{background:"rgba(0,240,200,0.06)",border:"1px solid rgba(0,240,200,0.18)"},children:[u.jsx("span",{className:"w-2 h-2 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 8px rgb(var(--c1))"}}),u.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgb(var(--c1))",letterSpacing:"0.16em",fontWeight:500},children:"LOOKING FOR GOOD JOB · 期待您的联系"})]}),u.jsxs("h1",{className:"mb-4",style:{fontSize:"clamp(3.2rem, 7vw, 5.5rem)",fontWeight:800,lineHeight:1.2,letterSpacing:"-0.03em",color:"#f0f4f8"},children:["Vic Qu",u.jsx("br",{}),u.jsx("span",{style:{background:"linear-gradient(135deg, rgb(var(--c1)) 0%, rgb(var(--c2)) 25%, rgb(var(--c3)) 50%, rgb(var(--c2)) 75%, rgb(var(--c1)) 100%)",backgroundSize:"200% 200%",backgroundRepeat:"no-repeat",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline",animation:"flowGradient 6s ease infinite"},children:"Full-Stack"}),u.jsx("br",{}),u.jsx("span",{style:{color:"rgba(255,255,255,0.15)",WebkitTextStroke:"1px rgba(255,255,255,0.2)"},children:"Designer"})]}),u.jsxs("p",{className:"mb-6",style:{fontSize:"1.0625rem",color:"rgba(255,255,255,0.5)",lineHeight:1.7,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"clip"},children:["ENFJ · 全栈设计师 · 专注"," ",u.jsx(Ab,{words:["UI/UX Design","Design Systems","AI Design Workflow","Information Visualization","Full-Stack Implementation","Collaboration Enablement"]}),u.jsx("br",{}),"AI 能力深度融入设计全链路"]}),u.jsx("div",{className:"flex gap-3 overflow-x-auto pb-2 mb-10 flex-nowrap",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:[{icon:u.jsx(d0,{size:11}),label:"原子组件规范落地"},{icon:u.jsx(Ev,{size:11}),label:"响应式设计"},{icon:u.jsx(u1,{size:11}),label:"AI 设计赋能 "}].map(s=>u.jsxs("span",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm flex-shrink-0",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.5)"},children:[u.jsx("span",{style:{color:"rgb(var(--c1))"},children:s.icon}),s.label]},s.label))}),u.jsxs("div",{className:"hidden md:flex flex-wrap items-center gap-4",children:[u.jsx("div",{className:"btn-wrapper",children:u.jsxs("button",{onClick:()=>{var s;return(s=document.getElementById("portfolio"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"btn",children:[u.jsx("svg",{className:"btn-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"})}),u.jsxs("div",{className:"txt-wrapper",children:[u.jsxs("div",{className:"txt-1 pl-[0px] pr-[12px] py-[0px]",style:{color:"rgba(var(--c1)",opacity:1,visibility:"visible",fontSize:"16px",lineHeight:"1.5",display:"block",position:"relative",zIndex:10},children:[u.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"查"}),u.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"看"}),u.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"作"}),u.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"品"})]}),u.jsxs("div",{className:"txt-2",children:[u.jsx("span",{className:"btn-letter",children:"查"}),u.jsx("span",{className:"btn-letter",children:"看"}),u.jsx("span",{className:"btn-letter",children:"作"}),u.jsx("span",{className:"btn-letter",children:"品"})]})]})]})}),u.jsxs("button",{onClick:()=>e(!0),className:"group flex items-center gap-2 px-6 py-2 rounded-3xl text-base transition-all duration-300 hover:scale-[1.02]",style:{border:"1px solid rgba(var(--c1),0.3)",color:"rgba(255,255,255,0.65)",background:"rgba(var(--c1),0.15)",boxShadow:"0 0 25px rgba(var(--c1),0.15), 0 5px 15px rgba(0,0,0,0.3)"},onMouseEnter:s=>{s.currentTarget.style.borderColor="rgba(var(--c1),0.5)",s.currentTarget.style.background="rgba(var(--c1),0.25)"},onMouseLeave:s=>{s.currentTarget.style.borderColor="rgba(var(--c1),0.3)",s.currentTarget.style.background="rgba(var(--c1),0.15)"},children:[u.jsx(hd,{size:14,className:"group-hover:animate-bounce group-hover:translate-y-0.5 transition-transform duration-300",style:{color:"rgb(var(--c1))"}}),u.jsx("span",{className:"transition-colors duration-300",style:{color:"rgb(var(--c1))"},children:"简历 PDF"})]})]})]}),u.jsxs("div",{className:"mt-[0px] md:mt-0",children:[u.jsx("div",{className:"absolute -z-10 w-96 h-96 rounded-full",style:{background:"radial-gradient(circle,rgba(0,240,200,0.08) 0%,transparent 70%)",filter:"blur(50px)",right:0,top:"50%",transform:"translateY(-50%)"}}),u.jsx(Rb,{})]})]}),u.jsx("div",{className:"flex mt-12 mb-0 overflow-x-auto scrollbar-hide gap-[24px] w-screen relative left-1/2 -translate-x-1/2 pl-0 pr-6 md:static md:w-full md:translate-x-0 md:mx-0 md:max-w-none md:flex-wrap md:justify-between md:gap-y-12 md:overflow-x-visible",children:[{v:10,s:"+",label:"年设计经验"},{v:60,s:"+",label:"上线产品"},{v:5,s:"+",label:"企业级设计系统"},{v:50,s:"+",label:"可视化大屏"},{v:12,s:"+",label:"图标库"},{v:32,s:"+",label:"团队赋能"}].map(s=>u.jsxs("div",{className:"shrink-0 w-[120px] text-center md:w-auto",children:[u.jsx("div",{style:{fontSize:"2rem",fontWeight:800,color:"#f0f4f8",lineHeight:1},children:u.jsx(Cb,{target:s.v,suffix:s.s})}),u.jsx("div",{className:"text-sm mt-1",style:{color:"rgba(255,255,255,0.6)",letterSpacing:"0.06em"},children:s.label})]},s.label))})]}),u.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-24 pointer-events-none",style:{background:"linear-gradient(transparent,#05050a)"}}),u.jsx(m0,{isOpen:r,onClose:()=>e(!1),onConfirm:t}),u.jsx("style",{children:`
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
      `})]})}const es=new IntersectionObserver(r=>{r.forEach(e=>{var t,s;e.isIntersecting&&((s=(t=e.target).__onVisible)==null||s.call(t),es.unobserve(e.target))})},{threshold:.1});function Pb(r=.08){const e=X.useRef(null),[t,s]=X.useState(!1);return X.useEffect(()=>{const a=e.current;if(a)return a.__onVisible=()=>s(!0),es.observe(a),()=>es.unobserve(a)},[]),{ref:e,vis:t}}function Db({pct:r,color:e,delay:t=0,light:s=!1}){const[a,l]=X.useState(0),f=X.useRef(null),[d,p]=X.useState(!1);return X.useEffect(()=>{const m=f.current;if(m)return m.__onVisible=()=>{setTimeout(()=>l(r),t),setTimeout(()=>p(!0),t+800)},es.observe(m),()=>es.unobserve(m)},[r,t]),u.jsxs("div",{ref:f,className:"relative h-[6px] rounded-full",style:{background:s?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.06)",willChange:"auto"},children:[u.jsx("div",{className:"absolute inset-y-0 left-0 rounded-full",style:{width:`${a}%`,transition:`width 0.8s cubic-bezier(0.4,0,0.2,1) ${t}ms`,background:`linear-gradient(90deg,${e}60,${e})`,boxShadow:d&&!s?`0 0 8px ${e}80, 0 0 4px ${e}`:"none",willChange:"width",transform:"translateZ(0)"}}),u.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none",style:{left:`${a}%`,width:12,height:12,borderRadius:"50%",background:e,boxShadow:d?`0 0 0 3px ${e}30, 0 0 14px 4px ${e}90, 0 0 28px 8px ${e}40`:"none",transition:`left 0.8s cubic-bezier(0.4,0,0.2,1) ${t}ms`,opacity:d?1:0,willChange:"left, opacity",transform:"translateZ(0)"}})]})}function Lb({num:r,cat:e,sub:t,pct:s,color:a,tools:l,idx:f}){const[d,p]=X.useState(!1),[m,v]=X.useState(0),g=X.useRef(null),y=X.useRef(0);return X.useEffect(()=>{const M=g.current;if(M)return M.__onVisible=()=>{const b=f*60,w=800;setTimeout(()=>{let _=0;const S=performance.now(),P=D=>{const T=D-S,B=Math.min(T/w,1),O=1-Math.pow(1-B,3);_=Math.round(s*O),v(_),B<1&&(y.current=requestAnimationFrame(P))};y.current=requestAnimationFrame(P)},b),setTimeout(()=>p(!0),b+w)},es.observe(M),()=>{es.unobserve(M),cancelAnimationFrame(y.current)}},[s,f]),u.jsx("div",{ref:g,className:"relative py-7 transition-all duration-300",style:{borderTop:"0px solid rgba(255,255,255,0.07)",willChange:"auto"},children:u.jsxs("div",{className:"relative flex flex-wrap items-start gap-0 lg:gap-0",children:[u.jsx("div",{className:"shrink-0 w-8 hidden md:block",style:{paddingTop:3},children:u.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:`${a}80`,letterSpacing:"0.12em",fontVariantNumeric:"tabular-nums"},children:r})}),u.jsxs("div",{className:"shrink-0",style:{width:180},children:[u.jsx("p",{style:{fontSize:"0.9375rem",fontWeight:700,color:"#f0f4f8",lineHeight:1.2},children:e}),u.jsx("p",{className:"mt-1",style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.3)",letterSpacing:"0.04em"},children:t})]}),u.jsxs("div",{className:"flex-1 flex flex-col gap-3 mt-2 min-w-[300px]",children:[u.jsxs("div",{className:"flex items-center gap-5",children:[u.jsx("div",{className:"flex-1",children:u.jsx(Db,{pct:s,color:a,delay:f*120})}),u.jsx("span",{style:{fontSize:"1.0625rem",fontWeight:800,color:d?a:"rgba(255,255,255,0.45)",transition:"color 0.6s ease-out",minWidth:38,textAlign:"right",fontVariantNumeric:"tabular-nums",willChange:"color"},children:m})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5",style:{opacity:d?1:.4,transition:"opacity 0.6s ease-out",willChange:"opacity"},children:l.map(M=>u.jsx("span",{className:"px-2.5 py-1 rounded text-xs",style:{background:d?`${a}10`:"rgba(255,255,255,0.04)",border:`1px solid ${d?`${a}22`:"rgba(255,255,255,0.06)"}`,color:d?a:"rgba(255,255,255,0.3)",transition:"all 0.1s ease-out"},children:M},M))})]})]})})}function kb(){const{ref:r,vis:e}=Pb(.04),{theme:t}=Ks(),s=[{num:"01",cat:"UI / UX Design",sub:u.jsxs(u.Fragment,{children:["交互设计",u.jsx("br",{}),"原子组件设计规范"]}),pct:96,color:t.cyan,tools:["Figma","Principle","PPT Design","Master Go","Sketch","Protopie","Hype 4","Framer"]},{num:"02",cat:"AI Design Workflow",sub:u.jsxs(u.Fragment,{children:["提示生成",u.jsx("br",{}),"自动化"]}),pct:90,color:t.purple,tools:["Open Claw","Figma MCP","Pencil","Vibma","Stitch","Stable Diffusion","Comfy-UI"]},{num:"03",cat:"Visual & Motion",sub:u.jsxs(u.Fragment,{children:["动效设计",u.jsx("br",{}),"Logo"]}),pct:86,color:t.pink,tools:["After Effects","Lotties","Rive","Spline","Blender"]},{num:"04",cat:"Front-End Prototyping",sub:u.jsxs(u.Fragment,{children:["产品元件库",u.jsx("br",{}),"原型 Demo",u.jsx("br",{}),"Swift UI"]}),pct:82,color:"#34d399",tools:["Axure","Amap GIS","Draw.io","Xcode","TRAE","Cursor"]},{num:"05",cat:"Presentation Event",sub:u.jsxs(u.Fragment,{children:["发布会 PPT",u.jsx("br",{}),"设计分享会",u.jsx("br",{}),"专利"]}),pct:80,color:"#fb923c",tools:["PowerPoint","Keynote","Launch Design","Power BI","Patent"]}];return u.jsxs("section",{id:"skills",ref:r,className:"relative overflow-hidden",style:{background:"var(--bg)",padding:"80px 0 0px"},children:[u.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(80px,16vw,200px)",fontWeight:900,lineHeight:1,color:"rgba(255,255,255,0.08)",letterSpacing:"0.05em"},children:"SKILLS"}),u.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 px-[40px] py-[0px]",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[32px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)",willChange:"opacity, transform"},children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[u.jsx("span",{className:"text-xm tracking-widest",style:{color:t.cyan,letterSpacing:"0.2em",fontWeight:600},children:"CAPABILITIES"}),u.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${t.cyan}33,transparent)`}})]}),u.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:"#f0f4f8",lineHeight:1.05,letterSpacing:"-0.04em"},children:"技能全景"})]}),u.jsx("div",{className:"lg:max-w-xs",children:u.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(255,255,255,0.32)",lineHeight:1.85},children:["10 年全栈设计积累",u.jsx("br",{}),"设计工具 × AI 能力 × 技术深度",u.jsx("br",{}),"三维协同，驱动端到端设计交付"]})})]}),u.jsxs("div",{className:"mb-20",children:[s.map((a,l)=>u.jsx("div",{className:a.cat==="Front-End Prototyping"||a.cat==="Presentation Event"?"hidden md:block":"",children:u.jsx(Lb,{...a,idx:l})},a.num)),u.jsx("div",{style:{borderTop:"0px solid rgba(255,255,255,0.07)"}})]})]})]})}function Q0({src:r,alt:e,className:t,style:s,maxRetries:a=5,retryDelay:l=2e3}){const[f,d]=X.useState(0),[p,m]=X.useState(!1),v=X.useRef(),g=X.useRef(),y=X.useRef(null),M=X.useRef(null),b=/\.gif($|\?)/.test(r),w=/\.mp4($|\?)/i.test(r),_=f>0?`${r}${r.includes("?")?"&":"?"}_retry=${f}`:r,S=!p&&f>=a,P=X.useCallback(()=>{v.current&&(clearTimeout(v.current),v.current=void 0),g.current&&(clearInterval(g.current),g.current=void 0)},[]);X.useEffect(()=>P,[P]),X.useEffect(()=>{if(b&&p&&y.current){const O=y.current,L=O.src;O.src="",requestAnimationFrame(()=>{O.src=L})}},[b,p]),X.useEffect(()=>{if(!w)return;const O=()=>{M.current&&M.current.play().catch(()=>{})},L=()=>{O()};return document.addEventListener("touchstart",L,{once:!0}),document.addEventListener("click",L,{once:!0}),setTimeout(O,300),()=>{document.removeEventListener("touchstart",L),document.removeEventListener("click",L)}},[w]),X.useEffect(()=>{if(!(p||f===0)){if(f<a){const O=l*(f+1);v.current=setTimeout(()=>{d(L=>L+1)},O);return}return g.current=setInterval(()=>{d(O=>O+1)},5e3),()=>{g.current&&(clearInterval(g.current),g.current=void 0)}}},[p,f,a,l]),X.useEffect(()=>{p&&P()},[p,P]);const D=()=>{d(O=>O+1)},T=()=>{m(!0)},B=()=>{P(),d(1)};return w?u.jsxs("div",{className:t,style:s,children:[u.jsx("video",{ref:M,src:_,className:"w-full h-full object-cover object-top",style:{display:S?"none":void 0},autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",onLoadedData:T,onError:D}),S&&u.jsx(e0,{onRetry:B})]}):u.jsxs("div",{className:t,style:s,children:[u.jsx("img",{ref:y,src:_,alt:e,className:"w-full h-full object-cover object-top",style:{display:S?"none":void 0,...b?{}:p?{}:{opacity:0,transition:"opacity 0.3s ease"}},onLoad:T,onError:D,loading:b?"eager":"lazy"}),S&&u.jsx(e0,{onRetry:B})]})}function e0({onRetry:r}){return u.jsx("div",{className:"absolute inset-0 flex items-center justify-center",style:{background:"rgba(255,255,255,0.04)",cursor:"pointer",zIndex:1},onClick:r,children:u.jsxs("div",{className:"text-center",children:[u.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"rgba(255,255,255,0.2)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("p",{className:"text-[10px] mt-1",style:{color:"rgba(255,255,255,0.25)"},children:"加载失败 · 点击重试"})]})})}function t0(r,e){if(r.startsWith("#")){const t=Math.round(e*255).toString(16).padStart(2,"0");return`${r}${t}`}return r.startsWith("rgb(")?r.replace(/^rgb\((.+)\)$/,(t,s)=>`rgba(${s},${e})`):r}function Ib({onItemClick:r}){const e=X.useRef(null),[t,s]=X.useState(0),a=X.useRef(0),l=X.useRef(!1),f=X.useRef(),d=396,p=X.useCallback(()=>{f.current&&clearInterval(f.current),f.current=setInterval(()=>{s(g=>{const y=(g+1)%zs.length;return a.current=y,l.current=!0,e.current&&e.current.scrollTo({left:y*d,behavior:"smooth"}),setTimeout(()=>{l.current=!1},500),y})},4e3)},[d]),m=X.useCallback(()=>{if(!l.current&&e.current){const{scrollLeft:g}=e.current,y=Math.round(g/d);y!==a.current&&y>=0&&y<zs.length&&(a.current=y,s(y),p())}},[d,p]);X.useEffect(()=>{const g=e.current;return g&&(g.addEventListener("scroll",m),m()),()=>{g&&g.removeEventListener("scroll",m)}},[m]);const v=X.useCallback(g=>{a.current=g,l.current=!0,e.current&&e.current.scrollTo({left:g*d,behavior:"smooth"}),setTimeout(()=>{l.current=!1},500)},[d]);return X.useEffect(()=>(p(),()=>{f.current&&clearInterval(f.current)}),[p]),u.jsxs("div",{className:"relative -mx-6 lg:-mx-10",children:[u.jsx("div",{ref:e,className:"flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 snap-x snap-mandatory",style:{scrollBehavior:"smooth"},children:zs.map((g,y)=>u.jsx("div",{className:"shrink-0 w-[90vw] max-w-[380px] snap-center",style:{opacity:y===t?1:.7,transition:"opacity 0.3s ease"},children:u.jsxs("div",{className:"relative rounded-2xl overflow-hidden cursor-pointer",style:{background:"white",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 4px 24px rgba(0,0,0,0.06)"},onClick:()=>r(g),children:[u.jsxs("div",{className:"relative overflow-hidden aspect-video",style:{background:g.bg},children:[u.jsx(Q0,{src:g.images[0],alt:g.name,className:"absolute inset-0 w-full h-full object-cover"}),u.jsx("div",{className:"hidden absolute top-3 left-3",children:u.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(255,255,255,0.85)",border:`1px solid ${g.color}22`,color:g.color,backdropFilter:"blur(8px)",fontWeight:600},children:g.idx})})]}),u.jsxs("div",{className:"p-4 py-6 md:py-4",children:[u.jsxs("div",{className:"flex items-start justify-between gap-2 mb-2",children:[u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"0.9375rem",fontWeight:800,color:"#0c0b18",lineHeight:1.3},children:g.name}),u.jsx("p",{className:"text-xs mt-0.5",style:{color:g.color,fontWeight:600,opacity:.8},children:g.role})]}),u.jsx("span",{className:"hidden shrink-0 w-7 h-7 rounded-lg flex items-center justify-center",style:{background:`${g.color}10`,border:`1px solid ${g.color}20`},children:u.jsx(rf,{size:12,style:{color:g.color}})})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5 mb-3",children:g.tags.map(M=>u.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:`${g.color}0e`,border:`1px solid ${g.color}20`,color:g.color,fontWeight:500},children:M},M))}),u.jsx("p",{className:"text-xs mb-3 line-clamp-3",style:{color:"rgba(12,11,24,0.5)",lineHeight:1.7},children:g.desc}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:g.metrics.slice(0,4).map(M=>u.jsxs("div",{className:"rounded-lg p-2.5",style:{background:`${g.color}08`,border:`1px solid ${g.color}12`},children:[u.jsxs("div",{className:"flex items-baseline gap-0.5",children:[u.jsx("span",{style:{fontSize:"1.125rem",fontWeight:900,color:"#0c0b18",lineHeight:1},children:M.value}),M.unit&&u.jsx("span",{style:{fontSize:"0.625rem",fontWeight:700,color:g.color},children:M.unit})]}),u.jsx("p",{className:"mt-1",style:{fontSize:"0.625rem",color:"rgba(12,11,24,0.35)",lineHeight:1.3},children:M.label})]},M.label))}),u.jsxs("div",{className:"mt-3 rounded-lg p-3",style:{background:`${g.color}08`,border:`1px solid ${g.color}14`},children:[u.jsxs("div",{className:"flex items-center gap-1.5",style:{color:g.color},children:[u.jsx(Xo,{size:10}),u.jsx("span",{className:"text-[10px] tracking-wider font-semibold",children:"AI APPLICATION"})]}),u.jsx("p",{className:"text-xs mt-1.5 line-clamp-2",style:{color:"rgba(12,11,24,0.45)",lineHeight:1.6},children:g.aiNote})]})]})]})},g.idx))}),u.jsx("div",{className:"flex justify-center gap-1.5 mt-4",children:zs.map((g,y)=>{const M=zs[t].color;return u.jsx("button",{onClick:()=>v(y),className:"relative overflow-hidden",style:{width:y===t?26:6,height:6,borderRadius:9999,background:y===t?t0(M,.12):t0(M,.2),border:"none",padding:0,transition:"width 0.3s ease, background 0.3s ease",cursor:"pointer",position:"relative"},children:y===t&&u.jsx("span",{className:"absolute inset-0 rounded-full",style:{background:M.startsWith("rgb(")?M.replace("rgb(","rgba(").replace(")",",1)"):M,width:"0%",animation:"progressFlow 3.2s linear forwards",height:"100%",left:0,top:0}})},y)})})]})}function K0(r=0){const e=X.useRef(null),[t,s]=X.useState(!1);return X.useEffect(()=>{const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(setTimeout(()=>s(!0),r),a.disconnect())},{threshold:.06});return e.current&&a.observe(e.current),()=>a.disconnect()},[r]),{ref:e,vis:t}}function Z0({steps:r,color:e}){return u.jsx("div",{className:"flex flex-wrap items-center gap-1",children:r.map((t,s)=>u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("span",{className:"px-2.5 py-1 rounded text-xs",style:{background:`${e}10`,border:`1px solid ${e}18`,color:e,fontWeight:500},children:t}),s<r.length-1&&u.jsx(dv,{size:10,style:{color:"rgba(0,0,0,0.2)"}})]},t))})}function J0({value:r,unit:e,label:t,color:s}){return u.jsxs("div",{className:"rounded-2xl p-4 flex flex-col gap-1",style:{background:"white",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 2px 12px rgba(0,0,0,0.05)"},children:[u.jsxs("div",{className:"flex items-baseline gap-0.5",children:[u.jsx("span",{style:{fontSize:"1.75rem",fontWeight:900,color:"#0c0b18",lineHeight:1},children:r}),e&&u.jsx("span",{style:{fontSize:"0.875rem",fontWeight:700,color:s},children:e})]}),u.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(12,11,24,0.38)",letterSpacing:"0.06em",lineHeight:1.4},children:t})]})}function $0({type:r,color:e}){return r==="city"?u.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsx("defs",{children:u.jsxs("radialGradient",{id:"cv1",cx:"60%",cy:"40%",r:"60%",children:[u.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),u.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),u.jsx("rect",{width:"320",height:"200",fill:"url(#cv1)"}),[30,70,110,150,190,230,270,310].map(t=>u.jsx("line",{x1:t,y1:"0",x2:t,y2:"200",stroke:e,strokeOpacity:"0.07",strokeWidth:"1"},t)),[25,55,85,115,145,175].map(t=>u.jsx("line",{x1:"0",y1:t,x2:"320",y2:t,stroke:e,strokeOpacity:"0.07",strokeWidth:"1"},t)),u.jsx("path",{d:"M20 170 C60 130 110 110 160 100 S240 70 300 40",fill:"none",stroke:e,strokeWidth:"2.5",strokeOpacity:"0.7",strokeDasharray:"7 4"}),[[20,170],[160,100],[300,40]].map(([t,s],a)=>u.jsxs("g",{children:[u.jsx("circle",{cx:t,cy:s,r:"14",fill:e,fillOpacity:"0.08",stroke:e,strokeOpacity:"0.35",strokeWidth:"1.5"}),u.jsx("circle",{cx:t,cy:s,r:"4",fill:e})]},a)),u.jsx("rect",{x:"190",y:"48",width:"44",height:"76",rx:"8",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5"}),[56,64,72,80,88,96,104].map(t=>u.jsx("rect",{x:"196",y:t,width:t===56?30:22,height:"4",rx:"2",fill:e,fillOpacity:"0.12"},t))]}):r==="chart"?u.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsx("defs",{children:u.jsxs("radialGradient",{id:"cv2",cx:"40%",cy:"30%",r:"60%",children:[u.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),u.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),u.jsx("rect",{width:"320",height:"200",fill:"url(#cv2)"}),[20,60,100,140,180,220,260,300].map(t=>u.jsx("line",{x1:t,y1:"0",x2:t,y2:"200",stroke:e,strokeOpacity:"0.06",strokeWidth:"1"},t)),[20,60,100,140,180].map(t=>u.jsx("line",{x1:"0",y1:t,x2:"320",y2:t,stroke:e,strokeOpacity:"0.06",strokeWidth:"1"},t)),u.jsxs("g",{children:[u.jsx("rect",{x:"30",y:"30",width:"80",height:"36",rx:"8",fill:e,fillOpacity:"0.25",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),u.jsx("rect",{x:"36",y:"42",width:"40",height:"3",rx:"1.5",fill:e,fillOpacity:"0.8"}),u.jsx("rect",{x:"30",y:"85",width:"70",height:"32",rx:"6",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),u.jsx("rect",{x:"36",y:"95",width:"35",height:"2.5",rx:"1.25",fill:e,fillOpacity:"0.6"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"135",y:"30",width:"100",height:"80",rx:"12",fill:"none",stroke:e,strokeOpacity:"0.35",strokeWidth:"1.5"}),u.jsx("rect",{x:"135",y:"30",width:"100",height:"28",rx:"12",fill:e,fillOpacity:"0.15"}),u.jsx("circle",{cx:"150",cy:"44",r:"4",fill:e,fillOpacity:"0.7"}),u.jsx("circle",{cx:"162",cy:"44",r:"4",fill:e,fillOpacity:"0.4"}),u.jsx("circle",{cx:"174",cy:"44",r:"4",fill:e,fillOpacity:"0.25"}),u.jsx("rect",{x:"142",y:"68",width:"50",height:"3",rx:"1.5",fill:e,fillOpacity:"0.5"}),u.jsx("rect",{x:"142",y:"78",width:"70",height:"3",rx:"1.5",fill:e,fillOpacity:"0.3"}),u.jsx("rect",{x:"142",y:"88",width:"60",height:"3",rx:"1.5",fill:e,fillOpacity:"0.3"})]}),u.jsxs("g",{children:[u.jsx("circle",{cx:"260",cy:"45",r:"8",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),u.jsx("circle",{cx:"260",cy:"75",r:"12",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),u.jsx("circle",{cx:"260",cy:"110",r:"16",fill:"none",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5"}),u.jsx("rect",{x:"245",y:"135",width:"30",height:"30",rx:"6",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),u.jsx("rect",{x:"250",y:"140",width:"20",height:"20",rx:"4",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),u.jsx("rect",{x:"255",y:"145",width:"10",height:"10",rx:"2",fill:e,fillOpacity:"0.4"})]}),u.jsx("path",{d:"M115 48 L135 48",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5",strokeDasharray:"4 3"}),u.jsx("path",{d:"M235 70 L245 70",fill:"none",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5",strokeDasharray:"4 3"}),u.jsx("path",{d:"M185 110 L245 110",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5",strokeDasharray:"4 3"}),[[55,170],[160,175],[270,165]].map(([t,s],a)=>u.jsxs("g",{children:[u.jsx("circle",{cx:t,cy:s,r:"10",fill:e,fillOpacity:"0.08",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5"}),u.jsx("circle",{cx:t,cy:s,r:"3",fill:e,fillOpacity:"0.7"})]},a))]}):u.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsx("defs",{children:u.jsxs("radialGradient",{id:"cv3",cx:"50%",cy:"50%",r:"60%",children:[u.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),u.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),u.jsx("rect",{width:"320",height:"200",fill:"url(#cv3)"}),u.jsx("rect",{x:"16",y:"16",width:"288",height:"28",rx:"6",fill:e,fillOpacity:"0.1",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("rect",{x:"30",y:"24",width:"80",height:"12",rx:"3",fill:e,fillOpacity:"0.5"}),u.jsx("rect",{x:"240",y:"24",width:"50",height:"12",rx:"3",fill:e,fillOpacity:"0.3"}),u.jsxs("g",{children:[u.jsxs("g",{children:[u.jsx("rect",{x:"16",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("rect",{x:"28",y:"95",width:"12",height:"12",rx:"2",fill:e,fillOpacity:"0.35"}),u.jsx("rect",{x:"44",y:"82",width:"12",height:"25",rx:"2",fill:e,fillOpacity:"0.45"}),u.jsx("rect",{x:"60",y:"68",width:"12",height:"39",rx:"2",fill:e,fillOpacity:"0.55"}),u.jsx("rect",{x:"76",y:"58",width:"12",height:"49",rx:"2",fill:e,fillOpacity:"0.65"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"115",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("circle",{cx:"160",cy:"82",r:"22",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5"}),u.jsx("circle",{cx:"160",cy:"82",r:"16",fill:"none",stroke:e,strokeOpacity:"0.35",strokeWidth:"2",strokeDasharray:"60 40"}),u.jsx("circle",{cx:"160",cy:"82",r:"5",fill:e,fillOpacity:"0.7"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"214",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("path",{d:"M228 100 L242 88 L256 92 L270 72 L284 76 L298 58",fill:"none",stroke:e,strokeOpacity:"0.6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),[[228,100],[242,88],[256,92],[270,72],[284,76],[298,58]].map(([t,s],a)=>u.jsx("circle",{cx:t,cy:s,r:"3",fill:e,fillOpacity:"0.75"},a))]}),u.jsxs("g",{children:[u.jsx("rect",{x:"16",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("rect",{x:"30",y:"135",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),u.jsx("rect",{x:"30",y:"135",width:"45",height:"6",rx:"3",fill:e,fillOpacity:"0.6"}),u.jsx("rect",{x:"30",y:"150",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),u.jsx("rect",{x:"30",y:"150",width:"52",height:"6",rx:"3",fill:e,fillOpacity:"0.5"}),u.jsx("rect",{x:"30",y:"165",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),u.jsx("rect",{x:"30",y:"165",width:"35",height:"6",rx:"3",fill:e,fillOpacity:"0.4"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"115",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("circle",{cx:"160",cy:"152",r:"18",fill:"none",stroke:e,strokeOpacity:"0.2",strokeWidth:"4"}),u.jsx("circle",{cx:"160",cy:"152",r:"18",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"4",strokeDasharray:"70 43"}),u.jsx("circle",{cx:"160",cy:"152",r:"8",fill:e,fillOpacity:"0.12"}),u.jsx("rect",{x:"150",y:"148",width:"20",height:"3",rx:"1.5",fill:e,fillOpacity:"0.6"})]}),u.jsxs("g",{children:[u.jsx("rect",{x:"214",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),u.jsx("rect",{x:"224",y:"132",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),u.jsx("rect",{x:"230",y:"135",width:"30",height:"4",rx:"2",fill:e,fillOpacity:"0.5"}),u.jsx("rect",{x:"224",y:"148",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),u.jsx("rect",{x:"230",y:"151",width:"40",height:"4",rx:"2",fill:e,fillOpacity:"0.45"}),u.jsx("rect",{x:"224",y:"164",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),u.jsx("rect",{x:"230",y:"167",width:"25",height:"4",rx:"2",fill:e,fillOpacity:"0.4"})]})]}),u.jsxs("g",{children:[u.jsx("circle",{cx:"20",cy:"20",r:"4",fill:e,fillOpacity:"0.4"}),u.jsx("circle",{cx:"300",cy:"20",r:"4",fill:e,fillOpacity:"0.4"}),u.jsx("circle",{cx:"20",cy:"180",r:"4",fill:e,fillOpacity:"0.4"}),u.jsx("circle",{cx:"300",cy:"180",r:"4",fill:e,fillOpacity:"0.4"})]})]})}const zs=[{idx:"01",color:"#015BC9",bg:"#BBDDFE",vizType:"city",name:"移动端&PC端-历城控股 OA",role:"Lead UI/UX Designer",tags:["iOS/Android","Web PC","企业管理"],desc:"历城控股集团 OA 办公系统移动端&PC 端全新升级改版，统一信息架构与视觉语言，面向集团 2000 + 内部员工的一站式办公管理平台，覆盖假勤、工资单、报销、审批等核心办公场景，优化流程后审批平均耗时减少 40%，移动端使用率提升至 85%。",images:["/assets/images/lckg1.png","/assets/images/lckg2.png","/assets/images/lckg3.png","/assets/images/lckg4.png","/assets/images/lckg5.png"],process:["需求调研","竞品分析","信息架构","交互设计","视觉规范","开发对接","迭代上线"],aiNote:"依托 Eva Design System 构建全链路色彩体系，自动生成色值梯度库，并通过 WCAG 对比度规范自动校验；批量产出移动端启动页与 PC 端登录页的动态视觉资产，同步输出浅色 / 深色双模式适配；通过 Midjourney + PS/Figma 协同产出 Banner 和运营海报；利用 AI 辅助生成 Logo 创意方向，实现高效的多端视觉与品牌资产落地。",metrics:[{value:"-40",unit:"%",label:"审批平均耗时"},{value:"85",unit:"%",label:"移动端使用率"},{value:"+50",unit:"%",label:"报销提交效率"},{value:"4.7",unit:"/5",label:"员工满意度评分"}]},{idx:"02",color:"#3366ff",bg:"#f0eeff",vizType:"chart",name:"UI设计规范-浪潮智慧建筑 原子组件库",role:"Design System Lead",tags:["B端","SaaS","变体设计"],desc:"基于原子设计理论（Atomic Design） 体系化搭建企业级 PC 端组件库，累计沉淀 200+ 业务组件，覆盖智慧园区、智慧工地、建筑节能三大核心产品线，形成统一、可扩展、可落地的设计规范与交互标准。组件库提供多状态、多主题、多尺寸的丰富变体配置，支持自动布局、响应式适配等原型化能力，产品经理复用率提升至 91%。",images:["/assets/images/sjgf1.png","/assets/images/sjgf2.png","/assets/images/sjgf3.png","/assets/images/sjgf4.png","/assets/images/sjgf5.png"],process:["组件梳理","原子拆分","变体设计","自动布局","文档输出","团队赋能","持续迭代"],aiNote:"GitHub Copilot 辅助梳理 Figma 组件类型；使用 Vibma + Cursor MCP 自动检查校验组件样式、命名、状态统一性，快速排查漏洞，后期维护成本大幅降低；AI 批量生成线性 / 面性图标，统一视觉风格，再微调落地，告别逐个绘制，图标库搭建提速 80%。",metrics:[{value:"200",unit:"+",label:"自动布局组件"},{value:"91",unit:"%",label:"产品复用率"},{value:"-65",unit:"%",label:"原型制作耗时"},{value:"2.5",unit:"×",label:"交付效率提升"}]},{idx:"03",color:"#11AF95",bg:"#97F9E5",vizType:"net",name:"数据可视化大屏-设计体系",role:"Data Visualization Designer",tags:["Irregular Design","HTML Demo"],desc:"基于 30+ 政企与金融级可视化大屏项目的实战沉淀，系统性梳理并提炼了非常规尺寸自适应适配、专用数字字体设计、高质感动效设计等领域的核心方法论与最佳实践。针对超宽屏、非标拼接屏、异形分辨率、多设备协同等复杂场景，形成完整的大屏设计解决方案，并输出标准化设计指南、组件规范与案例库，发表并授权相关专利 4 篇。",images:["/assets/images/dap1.png","/assets/images/dap2.png","/assets/images/dap3.png","/assets/images/dap4.png","/assets/images/dap5.png"],process:["项目复盘","规律提炼","要点总结","文档输出","团队分享","迭代优化"],aiNote:"用 AI 一键生成科技感 / 政务风 / 金融风大屏配色方案，自动生成深色模式渐变、霓虹光效色卡，同步校验大屏远距离可视性，省去反复调试色值的时间，风格探索效率提升 60%；AI 快速输出多版布局草案，解决大屏排版难、信息失衡问题，布局设计周期缩短 50%。",metrics:[{value:"30",unit:"+",label:"覆盖项目数量"},{value:"-35",unit:"%",label:"大屏交付周期"},{value:"95",unit:"%",label:"设计一致性"},{value:" 6",unit:"+",label:"团队分享会"}]}];function Ub({project:r,onClose:e}){return X.useEffect(()=>(r&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[r]),r?u.jsx(qo,{children:u.jsx("div",{className:"fixed inset-0 z-50 flex items-center sm:items-center justify-center px-6 sm:px-8 pt-0 sm:pt-12 pb-0 sm:pb-8",style:{background:"rgba(5,5,12,0.70)",backdropFilter:"blur(16px)"},onClick:e,children:u.jsxs("div",{className:"relative w-full sm:max-w-4xl max-h-[86vh] overflow-y-auto rounded-2xl",style:{background:"white",border:"1px solid rgba(0,0,0,0.08)",boxShadow:"0 20px 100px rgba(0,0,0,0.3)"},onClick:t=>t.stopPropagation(),children:[u.jsx("div",{className:"sticky top-4 z-20 flex justify-end pr-4 h-0 m-0 overflow-visible",children:u.jsx("button",{onClick:e,className:"w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",style:{background:"rgba(255,255,255,0.95)",border:"1px solid rgba(0,0,0,0.1)",color:"#0c0b18",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:u.jsx(Jr,{size:16})})}),u.jsxs("div",{className:"relative overflow-hidden -mt-16 hidden md:block",style:{height:"clamp(150px, 30vh, 600px)",background:r.bg},children:[u.jsx($0,{type:r.vizType,color:r.color}),u.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg,transparent 40%,rgba(255,255,255,0.9) 100%)"}})]}),u.jsxs("div",{className:"px-[24px] sm:px-[40px] pt-6 pb-[20px]",children:[u.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[u.jsx("span",{className:"hidden md:inline-block",style:{fontSize:"3.5rem",fontWeight:900,color:`${r.color}18`,lineHeight:1,letterSpacing:"-0.05em"},children:r.idx}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,color:"#0c0b18",lineHeight:1.2,marginBottom:"0.5rem"},children:r.name}),u.jsx("p",{style:{fontSize:"1rem",color:r.color,fontWeight:600},children:r.role})]})]}),u.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:r.tags.map(t=>u.jsx("span",{className:"text-sm px-3 py-1.5 rounded-lg",style:{background:`${r.color}12`,border:`1px solid ${r.color}25`,color:r.color,fontWeight:600},children:t},t))}),u.jsx("p",{className:"mb-8",style:{fontSize:"1rem",color:"rgba(12,11,24,0.6)",lineHeight:1.85},children:r.desc}),u.jsxs("div",{className:"mb-8 hidden sm:block",children:[u.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"设计流程"}),u.jsx(Z0,{steps:r.process,color:r.color})]}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"核心数据"}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:r.metrics.map(t=>u.jsx(J0,{value:t.value,unit:t.unit,label:t.label,color:r.color},t.label))})]}),u.jsxs("div",{className:"rounded-2xl p-6 mb-8  hidden sm:block",style:{background:`${r.color}12`,border:`1px solid ${r.color}25`},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",style:{color:r.color},children:[u.jsx(Xo,{size:16}),u.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:700},children:"AI 应用"})]}),u.jsx("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.6)",lineHeight:1.85},children:r.aiNote})]}),r.images&&r.images.length>0&&u.jsxs("div",{className:"mb-8",children:[u.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"项目展示"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:r.images.map((t,s)=>u.jsx("div",{className:"rounded-2xl overflow-hidden relative",style:{background:`linear-gradient(135deg, ${r.color}08, ${r.color}15)`,border:`1px solid ${r.color}20`,aspectRatio:"16/9",gridColumn:s===0?"1 / -1":"auto"},children:u.jsx("img",{src:t,alt:`${r.name} - 项目展示 ${s+1}`,className:"w-full h-full object-cover",style:{display:"block"},onLoad:a=>{const l=a.currentTarget,f=l.parentElement;if(l.style.display="block",f){const d=f.querySelector(".img-error-fallback");d&&d.remove()}},onError:a=>{const l=a.currentTarget,f=l.parentElement;if(f&&(l.style.display="none",!f.querySelector(".img-error-fallback"))){const d=document.createElement("div");d.className="img-error-fallback absolute inset-0 flex items-center justify-center",d.style.cssText=`background: linear-gradient(135deg, ${r.color}08, ${r.color}15); color: rgba(12,11,24,0.4); font-size: 0.875rem; text-align: center; padding: 1rem; cursor: pointer;`,d.textContent="图片加载失败 · 点击重试";let p=0,m=null,v=null;const g=()=>{m&&clearTimeout(m),v&&clearInterval(v),p<5?(p++,m=setTimeout(()=>{l.src=t+"?_retry="+Date.now()},2e3*p)):v=setInterval(()=>{l.src=t+"?_retry="+Date.now()},8e3)};d.onclick=()=>{p=0,m&&clearTimeout(m),v&&clearInterval(v),d.remove(),l.style.display="block",l.src=t+"?_retry="+Date.now()},f.appendChild(d),g()}}})},s))})]}),u.jsx("div",{className:"flex items-center justify-center gap-4",children:u.jsxs("a",{href:"https://github.com/quweijia/file/blob/main/lckgoa.html",target:"_blank",rel:"noopener noreferrer",className:"w-full group flex items-center justify-center gap-2 rounded-xl text-sm transition-colors px-[24px] py-[12px]",onMouseEnter:t=>{t.currentTarget.style.background=`${r.color}50`},onMouseLeave:t=>{t.currentTarget.style.background=`${r.color}30`},style:{background:`${r.color}30`,color:r.color,fontWeight:600,textDecoration:"none",cursor:"pointer"},children:["Figma 原稿",u.jsx(sf,{size:14,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})})]})]})})}):null}function Ob({p:r,rev:e,index:t,onOpenModal:s}){const{ref:a,vis:l}=K0(0),[f,d]=X.useState(!1);return u.jsx("div",{ref:a,className:"rounded-2xl overflow-hidden transition-all duration-700",style:{background:"white",boxShadow:f?"0 24px 80px rgba(0,0,0,0.13), 0 8px 24px rgba(0,0,0,0.07)":"0 4px 24px rgba(0,0,0,0.06)",opacity:l?1:0,transform:l?"translateY(0)":"translateY(32px)",border:"1px solid rgba(0,0,0,0.05)"},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:u.jsxs("div",{className:`grid 
          ${t===1?"lg:grid-cols-[3fr_7fr]":"lg:grid-cols-[7fr_3fr]"} 
          ${e?"lg:[grid-template-areas:'right_left']":""}
        `,children:[u.jsxs("div",{className:`${e?"lg:[grid-area:left]":""} px-[32px] pt-[32px] pb-[0px] sm:p-[32px]`,style:{borderRight:e?"none":"1px solid rgba(0,0,0,0.05)",borderLeft:e?"1px solid rgba(0,0,0,0.05)":"none"},children:[u.jsxs("div",{className:"flex items-start justify-between gap-4 mb-6",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"hidden md:inline",style:{fontSize:"3rem",fontWeight:900,color:`${r.color}20`,lineHeight:1,letterSpacing:"-0.05em"},children:r.idx}),u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:800,color:"#0c0b18",lineHeight:1.2},children:r.name}),u.jsx("p",{className:"mt-0.5",style:{fontSize:"0.8125rem",color:r.color,fontWeight:600},children:r.role})]})]}),u.jsx("button",{className:"shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200",style:{background:f?`${r.color}12`:"rgba(0,0,0,0.04)",border:`1px solid ${f?`${r.color}25`:"rgba(0,0,0,0.07)"}`},onClick:s,children:u.jsx(rf,{size:14,style:{color:f?r.color:"rgba(0,0,0,0.3)"}})})]}),u.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:r.tags.map(m=>u.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:`${r.color}0e`,border:`1px solid ${r.color}20`,color:r.color,fontWeight:500},children:m},m))}),u.jsx("p",{className:"mb-[8px] sm:mb-6",style:{fontSize:"0.875rem",color:"rgba(12,11,24,0.55)",lineHeight:1.85},children:r.desc}),u.jsxs("div",{className:"mb-5 hidden sm:block",children:[u.jsx("p",{className:"text-xs mb-2.5 tracking-wider",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.12em"},children:"DESIGN PROCESS"}),u.jsx(Z0,{steps:r.process,color:r.color})]}),u.jsxs("div",{className:"rounded-xl p-4 hidden sm:block",style:{background:`${r.color}12`,border:`1px solid ${r.color}16`},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:r.color},children:[u.jsx(Xo,{size:11}),u.jsx("span",{className:"text-xs tracking-wider",style:{letterSpacing:"0.1em",fontWeight:700},children:"AI APPLICATION"})]}),u.jsx("p",{style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.5)",lineHeight:1.8},children:r.aiNote})]})]}),u.jsxs("div",{className:`flex flex-col ${e?"lg:[grid-area:right]":""}`,children:[u.jsxs("div",{className:"relative overflow-hidden hidden lg:block",style:{height:220,background:r.bg},children:[u.jsx($0,{type:r.vizType,color:r.color}),u.jsx("div",{className:"absolute inset-0 pointer-events-none hidden lg:block",style:{background:"linear-gradient(180deg,transparent 60%,rgba(255,255,255,0.8) 100%)"}})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 flex-1 items-center justify-center place-content-center p-[24px]",children:[u.jsx("p",{className:"col-span-2 text-xs mb-1 tracking-wider text-center",style:{color:"rgba(12,11,24,0.25)",letterSpacing:"0.12em"},children:"KEY METRICS"}),r.metrics.map(m=>u.jsx(J0,{value:m.value,unit:m.unit,label:m.label,color:r.color},m.label))]})]})]})})}function Fb(){const{ref:r,vis:e}=K0(.03),{theme:t}=Ks(),[s,a]=X.useState(null);return u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"projects",ref:r,className:"relative overflow-visible md:overflow-hidden",style:{background:"#f3f0eb",padding:"80px 0 140px"},children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.025]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"180px"}}),u.jsx("div",{className:"absolute left-0 top-6 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,color:"rgba(12,11,24,0.03)",lineHeight:1,letterSpacing:"0.05em",whiteSpace:"nowrap"},children:"PROJECTS"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[60px] max-lg:mb-[32px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[u.jsx("span",{className:"text-xm tracking-widest",style:{color:t.cyan,letterSpacing:"0.2em",fontWeight:600},children:"CASE STUDIES"}),u.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${t.cyan}66,transparent)`}})]}),u.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:600,color:"#0c0b18",lineHeight:1.05,letterSpacing:"-0.04em"},children:"主导项目"})]}),u.jsx("div",{className:"lg:max-w-md",children:u.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.42)",lineHeight:1.85},children:["主导多个从0-1移动端、PC端、可视化大屏项目",u.jsx("br",{}),"每个项目均展示完整设计过程与可量化成果"]})})]}),u.jsx("div",{className:"hidden md:block space-y-4",children:zs.map((l,f)=>u.jsx(Ob,{p:l,rev:f%2===1,index:f,onOpenModal:()=>a(l)},l.idx))}),u.jsx("div",{className:"md:hidden",children:u.jsx(Ib,{onItemClick:a})})]})]}),u.jsx(Ub,{project:s,onClose:()=>a(null)})]})}function eg({children:r,className:e="",glowColor:t="rgba(139, 92, 246, 0.8)",borderRadius:s="1rem",borderWidth:a=1,intensity:l=1}){const f=X.useRef(null),d=X.useRef(null),p=X.useRef(0),m=X.useRef({x:-1e3,y:-1e3,active:!1});return X.useEffect(()=>{const v=f.current,g=d.current;if(!v||!g)return;const y=g.getContext("2d");if(!y)return;const M=()=>{g.width=v.offsetWidth,g.height=v.offsetHeight};M();const b=new ResizeObserver(M);b.observe(v);const w=P=>{const D=v.getBoundingClientRect();m.current={x:P.clientX-D.left,y:P.clientY-D.top,active:!0}},_=()=>{m.current.active=!1};v.addEventListener("mousemove",w),v.addEventListener("mouseleave",_);const S=()=>{const P=g.width,D=g.height;y.clearRect(0,0,P,D);const{x:T,y:B,active:O}=m.current,L=parseFloat(s)*16,U=Math.max(0,L);let R=a,C=l;if(O){const se=T,J=P-T,fe=B,me=D-B,ue=Math.min(se,J,fe,me),H=Math.max(0,1-ue/60);R=a*(.5+H*.5),C=l*(.5+H*1)}const j=()=>{y.beginPath(),y.moveTo(U,0),y.lineTo(P-U,0),y.arcTo(P,0,P,U,U),y.lineTo(P,D-U),y.arcTo(P,D,P-U,D,U),y.lineTo(U,D),y.arcTo(0,D,0,D-U,U),y.lineTo(0,U),y.arcTo(0,0,U,0,U),y.closePath()};if(O){const se=y.createRadialGradient(T,B,0,T,B,Math.max(P,D)*.5);se.addColorStop(0,t.replace(/[\d.]+\)$/,`${C})`)),se.addColorStop(.3,t.replace(/[\d.]+\)$/,`${C*.5})`)),se.addColorStop(1,t.replace(/[\d.]+\)$/,"0)")),y.lineWidth=R,y.strokeStyle=se,j(),y.stroke()}else y.lineWidth=a,y.strokeStyle=t.replace(/[\d.]+\)$/,"0.2)"),j(),y.stroke();p.current=requestAnimationFrame(S)};return p.current=requestAnimationFrame(S),()=>{cancelAnimationFrame(p.current),b.disconnect(),v.removeEventListener("mousemove",w),v.removeEventListener("mouseleave",_)}},[t,s,a,l]),u.jsxs("div",{ref:f,className:`relative ${e}`,style:{borderRadius:s},children:[u.jsx("div",{style:{borderRadius:s,overflow:"hidden",padding:a*.3+"px"},children:r}),u.jsx("canvas",{ref:d,className:"absolute inset-0 pointer-events-none",style:{borderRadius:s,zIndex:10}})]})}function zb(r){if(r.startsWith("#")&&r.length===7){const e=parseInt(r.slice(1,3),16),t=parseInt(r.slice(3,5),16),s=parseInt(r.slice(5,7),16);return`rgba(${e},${t},${s},1.0)`}return"rgba(139,92,246,1.0)"}function n0(r,e){if(r.startsWith("#")){const t=Math.round(e*255).toString(16).padStart(2,"0");return`${r}${t}`}return r.startsWith("rgb(")?r.replace(/^rgb\((.+)\)$/,(t,s)=>`rgba(${s},${e})`):r}function Bb({onItemClick:r}){const e=X.useRef(null),[t,s]=X.useState(0),a=X.useRef(0),l=X.useRef(!1),f=X.useRef(),d=396,p=X.useCallback(()=>{f.current&&clearInterval(f.current),f.current=setInterval(()=>{s(g=>{const y=(g+1)%Kt.length;return a.current=y,l.current=!0,e.current&&e.current.scrollTo({left:y*d,behavior:"smooth"}),setTimeout(()=>{l.current=!1},500),y})},4e3)},[d]),m=X.useCallback(()=>{if(!l.current&&e.current){const{scrollLeft:g}=e.current,y=Math.round(g/d);y!==a.current&&y>=0&&y<Kt.length&&(a.current=y,s(y),p())}},[d,p]);X.useEffect(()=>{const g=e.current;return g&&(g.addEventListener("scroll",m),m()),()=>{g&&g.removeEventListener("scroll",m)}},[m]);const v=X.useCallback(g=>{a.current=g,l.current=!0,e.current&&e.current.scrollTo({left:g*d,behavior:"smooth"}),setTimeout(()=>{l.current=!1},500)},[d]);return X.useEffect(()=>(p(),()=>{f.current&&clearInterval(f.current)}),[p]),u.jsxs("div",{className:"relative -mx-6 lg:-mx-10",children:[u.jsx("div",{ref:e,className:"flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 snap-x snap-mandatory",style:{scrollBehavior:"smooth"},children:Kt.map((g,y)=>u.jsx("div",{className:"shrink-0 w-[90vw] max-w-[380px] snap-center",style:{opacity:y===t?1:.7,transition:"opacity 0.3s ease"},children:u.jsx(eg,{glowColor:zb(g.color),borderRadius:"1rem",borderWidth:5,intensity:2,children:u.jsxs("div",{className:"relative rounded-2xl overflow-hidden cursor-pointer",style:{background:"#0e0e1a"},onClick:()=>r(g),children:[u.jsxs("div",{className:"relative aspect-video overflow-hidden rounded-t-2xl",children:[u.jsx(Q0,{src:g.coverImg,alt:g.title,className:"absolute inset-0 w-full h-full object-cover object-top"}),u.jsx("div",{className:"hidden md:block absolute top-3 left-3",children:u.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(16,16,26,0.8)",border:`1px solid ${g.color}22`,color:g.color,backdropFilter:"blur(8px)"},children:g.year})})]}),u.jsxs("div",{className:"p-5 py-7",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 mb-5",children:[u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:"#f0f4f8"},children:g.title}),u.jsx("p",{className:"text-xs mt-1.5",style:{color:g.color,opacity:.75},children:g.sub})]}),u.jsx("span",{className:"shrink-0 text-xs px-2 py-1 rounded-lg",style:{color:g.color,fontWeight:600,whiteSpace:"nowrap",background:`color-mix(in srgb, ${g.color} 12%, transparent)`,border:`1px solid color-mix(in srgb, ${g.color} 14%, transparent)`},children:g.metric})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5 mt-5",children:g.tags.slice(0,3).map(M=>u.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.3)"},children:M},M))}),u.jsxs("div",{className:"mt-5 rounded-lg p-3",style:{background:g.color.startsWith("rgb(")?g.color.replace("rgb(","rgba(").replace(/\)$/,",0.08)"):`${g.color}14`,border:g.color.startsWith("rgb(")?"1px solid rgba(var(--c1),0.09)":`1px solid ${g.color}16`},children:[u.jsxs("div",{className:"flex items-center gap-1.5",style:{color:g.color},children:[u.jsx(Xo,{size:14}),u.jsx("span",{className:"text-xs tracking-wider font-semibold",children:"亮点"})]}),u.jsx("p",{className:"text-xs mt-1.5 line-clamp-2",style:{color:"rgba(255,255,255,0.5)"},children:g.highlights[0]})]})]})]})})},g.id))}),u.jsx("div",{className:"flex justify-center gap-1.5 mt-4",children:Kt.map((g,y)=>{const M=Kt[t].color;return u.jsx("button",{onClick:()=>v(y),className:"relative overflow-hidden",style:{width:y===t?26:6,height:6,borderRadius:9999,background:y===t?n0(M,.15):n0(M,.2),border:"none",padding:0,transition:"width 0.3s ease, background 0.3s ease",cursor:"pointer",position:"relative"},children:y===t&&u.jsx("span",{className:"absolute inset-0 rounded-full",style:{background:M.startsWith("rgb(")?M.replace("rgb(","rgba(").replace(")",",1)"):M,width:"0%",animation:"progressFlow 3.2s linear forwards",height:"100%",left:0,top:0}})},y)})})]})}function jb(r){if(r.startsWith("#")&&r.length===7){const e=parseInt(r.slice(1,3),16),t=parseInt(r.slice(3,5),16),s=parseInt(r.slice(5,7),16);return`rgba(${e},${t},${s},1.0)`}return"rgba(139,92,246,1.0)"}function Hb(r=0){const e=X.useRef(null),[t,s]=X.useState(!1);return X.useEffect(()=>{if(t)return;const a=new IntersectionObserver(([l])=>{l.isIntersecting&&!t&&(setTimeout(()=>s(!0),r),a.disconnect())},{threshold:.04});return e.current&&a.observe(e.current),()=>a.disconnect()},[r,t]),{ref:e,vis:t}}function Gb({color:r}){return u.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"c1",cx:"65%",cy:"35%",r:"65%",children:[u.jsx("stop",{offset:"0%",stopColor:r,stopOpacity:"0.22"}),u.jsx("stop",{offset:"100%",stopColor:r,stopOpacity:"0"})]}),u.jsxs("filter",{id:"gf1",children:[u.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"b"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"b"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),u.jsx("rect",{width:"560",height:"320",fill:"url(#c1)"}),[40,100,160,220,280,340,400,460,520].map(e=>u.jsx("line",{x1:e,y1:"0",x2:e,y2:"320",stroke:r,strokeOpacity:"0.05",strokeWidth:"1"},e)),[40,85,130,175,220,270].map(e=>u.jsx("line",{x1:"0",y1:e,x2:"560",y2:e,stroke:r,strokeOpacity:"0.05",strokeWidth:"1"},e)),u.jsx("path",{d:"M30 280 C110 210 200 170 290 155 S400 120 520 70",fill:"none",stroke:r,strokeWidth:"2.5",strokeOpacity:"0.6",strokeDasharray:"9 6",filter:"url(#gf1)"}),u.jsx("path",{d:"M30 280 C120 250 220 235 320 225 S450 200 530 175",fill:"none",stroke:r,strokeWidth:"1.5",strokeOpacity:"0.2",strokeDasharray:"5 4"}),[[30,280],[290,155],[520,70]].map(([e,t],s)=>u.jsxs("g",{filter:"url(#gf1)",children:[u.jsx("circle",{cx:e,cy:t,r:"18",fill:r,fillOpacity:"0.08",stroke:r,strokeOpacity:"0.35",strokeWidth:"1.5"}),u.jsx("circle",{cx:e,cy:t,r:"5.5",fill:r,fillOpacity:"0.9"})]},s)),u.jsx("rect",{x:"350",y:"60",width:"55",height:"96",rx:"10",fill:"none",stroke:r,strokeOpacity:"0.22",strokeWidth:"1.5"}),u.jsx("rect",{x:"356",y:"68",width:"43",height:"70",rx:"4",fill:r,fillOpacity:"0.04"}),[73,81,89,97,105,113,121].map(e=>u.jsx("rect",{x:"360",y:e,width:e%16===1?34:24,height:"4",rx:"2",fill:r,fillOpacity:"0.1"},e)),u.jsx("circle",{cx:"80",cy:"60",r:"38",fill:"none",stroke:r,strokeOpacity:"0.06",strokeWidth:"20"}),u.jsx("circle",{cx:"490",cy:"260",r:"50",fill:"none",stroke:r,strokeOpacity:"0.05",strokeWidth:"28"})]})}function Nl({color:r}){const e=[.52,.78,.43,.91,.35,.68,.95,.52,.74,.6,.87,.41,.76,.55];return u.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"c2",cx:"50%",cy:"25%",r:"70%",children:[u.jsx("stop",{offset:"0%",stopColor:r,stopOpacity:"0.18"}),u.jsx("stop",{offset:"100%",stopColor:r,stopOpacity:"0"})]}),u.jsxs("linearGradient",{id:"bg2",x1:"0",y1:"0",x2:"0",y2:"1",children:[u.jsx("stop",{offset:"0%",stopColor:r,stopOpacity:"0.75"}),u.jsx("stop",{offset:"100%",stopColor:r,stopOpacity:"0.1"})]}),u.jsxs("filter",{id:"gf2",children:[u.jsx("feGaussianBlur",{stdDeviation:"2",result:"b"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"b"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),u.jsx("rect",{width:"560",height:"320",fill:"url(#c2)"}),e.map((t,s)=>{const a=t*200,l=26+s*38,f=285-a;return u.jsxs("g",{children:[u.jsx("rect",{x:l,y:f,width:"26",height:a,rx:"3",fill:"url(#bg2)"}),u.jsx("rect",{x:l,y:f,width:"26",height:"5",rx:"2.5",fill:r,filter:"url(#gf2)"})]},s)}),u.jsx("polyline",{points:e.map((t,s)=>`${39+s*38},${285-t*200}`).join(" "),fill:"none",stroke:r,strokeWidth:"2",strokeOpacity:"0.45"}),u.jsx("line",{x1:"22",y1:"285",x2:"545",y2:"285",stroke:r,strokeOpacity:"0.1",strokeWidth:"1"}),[80,160].map(t=>u.jsx("line",{x1:"22",y1:285-t,x2:"545",y2:285-t,stroke:r,strokeOpacity:"0.05",strokeWidth:"1"},t)),u.jsx("rect",{x:"420",y:"30",width:"120",height:"65",rx:"8",fill:r,fillOpacity:"0.06",stroke:r,strokeOpacity:"0.18",strokeWidth:"1"}),u.jsx("rect",{x:"430",y:"40",width:"60",height:"6",rx:"3",fill:r,fillOpacity:"0.2"}),u.jsx("rect",{x:"430",y:"52",width:"96",height:"14",rx:"3",fill:r,fillOpacity:"0.1"}),u.jsx("rect",{x:"430",y:"72",width:"48",height:"5",rx:"2.5",fill:r,fillOpacity:"0.08"})]})}function Vb({color:r}){const e=[[280,155],[180,85],[380,85],[140,210],[420,210],[215,42],[345,42]];return u.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"c3",cx:"50%",cy:"48%",r:"58%",children:[u.jsx("stop",{offset:"0%",stopColor:r,stopOpacity:"0.18"}),u.jsx("stop",{offset:"100%",stopColor:r,stopOpacity:"0"})]}),u.jsxs("filter",{id:"gf3",children:[u.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"b"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),u.jsx("rect",{width:"560",height:"320",fill:"url(#c3)"}),e.slice(1).map(([t,s],a)=>u.jsx("line",{x1:t,y1:s,x2:280,y2:155,stroke:r,strokeOpacity:"0.18",strokeWidth:"1.3",strokeDasharray:"5 4"},a)),u.jsx("line",{x1:180,y1:85,x2:140,y2:210,stroke:r,strokeOpacity:"0.1",strokeWidth:"1"}),u.jsx("line",{x1:380,y1:85,x2:420,y2:210,stroke:r,strokeOpacity:"0.1",strokeWidth:"1"}),u.jsx("line",{x1:215,y1:42,x2:180,y2:85,stroke:r,strokeOpacity:"0.1",strokeWidth:"1"}),u.jsx("line",{x1:345,y1:42,x2:380,y2:85,stroke:r,strokeOpacity:"0.1",strokeWidth:"1"}),[50,78,108].map(t=>u.jsx("circle",{cx:280,cy:155,r:t,fill:"none",stroke:r,strokeOpacity:.1/t*40,strokeWidth:"1"},t)),e.map(([t,s],a)=>u.jsxs("g",{filter:"url(#gf3)",children:[u.jsx("circle",{cx:t,cy:s,r:a===0?22:14,fill:r,fillOpacity:a===0?.12:.07,stroke:r,strokeOpacity:a===0?.45:.22,strokeWidth:"1.5"}),u.jsx("circle",{cx:t,cy:s,r:a===0?6:3.5,fill:r,fillOpacity:"0.9"})]},a)),u.jsx("rect",{x:"420",y:"24",width:"116",height:"40",rx:"7",fill:r,fillOpacity:"0.06",stroke:r,strokeOpacity:"0.2",strokeWidth:"1"}),u.jsx("rect",{x:"430",y:"32",width:"72",height:"6",rx:"3",fill:r,fillOpacity:"0.22"}),u.jsx("rect",{x:"430",y:"44",width:"48",height:"5",rx:"2.5",fill:r,fillOpacity:"0.12"})]})}function Wb({color:r}){return u.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[u.jsxs("defs",{children:[u.jsxs("radialGradient",{id:"c4",cx:"40%",cy:"50%",r:"65%",children:[u.jsx("stop",{offset:"0%",stopColor:r,stopOpacity:"0.18"}),u.jsx("stop",{offset:"100%",stopColor:r,stopOpacity:"0"})]}),u.jsxs("filter",{id:"gf4",children:[u.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),u.jsxs("feMerge",{children:[u.jsx("feMergeNode",{in:"b"}),u.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),u.jsx("rect",{width:"560",height:"320",fill:"url(#c4)"}),[[150,150,80],[300,120,55],[230,220,45],[410,200,62],[100,250,38],[460,100,35]].map(([e,t,s],a)=>u.jsx("circle",{cx:e,cy:t,r:s,fill:r,fillOpacity:.04+a*.01,stroke:r,strokeOpacity:.1+a*.02,strokeWidth:"1.5"},a)),u.jsx("path",{d:"M185 155 C145 105 115 82 165 50 C215 18 268 48 290 100 C312 152 270 182 228 182 C186 182 185 155 185 155Z",fill:r,fillOpacity:"0.08",stroke:r,strokeOpacity:"0.22",strokeWidth:"1.5",filter:"url(#gf4)"}),u.jsx("circle",{cx:430,cy:160,r:62,fill:"none",stroke:r,strokeOpacity:"0.08",strokeWidth:"22"}),u.jsx("circle",{cx:430,cy:160,r:62,fill:"none",stroke:r,strokeOpacity:"0.5",strokeWidth:"3",strokeDasharray:"272 120",strokeDashoffset:"0",filter:"url(#gf4)"}),u.jsx("circle",{cx:430,cy:160,r:7,fill:r,fillOpacity:"0.9",filter:"url(#gf4)"}),[[250,60],[310,60]].map(({0:e,1:t},s)=>u.jsxs("g",{children:[u.jsx("rect",{x:e,y:t,width:"50",height:"88",rx:"9",fill:"none",stroke:r,strokeOpacity:"0.22",strokeWidth:"1.5"}),u.jsx("rect",{x:e+4,y:t+8,width:"42",height:"64",rx:"3",fill:r,fillOpacity:"0.04"}),[14,22,30,38,46,54,62].map(a=>u.jsx("rect",{x:e+8,y:t+a,width:a===14?30:22,height:"4",rx:"2",fill:r,fillOpacity:"0.1"},a))]},s))]})}const Kt=[{id:1,color:"rgb(var(--c1))",Bg:Nl,coverImg:"/assets/images/ntgk1.mp4",year:"2026",title:"能碳管控可视化平台",sub:"Carbon Management",tags:["智慧园区","能碳管控","GIS定制","智慧工地"],role:"UX Designer · 高德 GIS 地图开发",metric:"政府验收评分 9.6",tools:["Figma","Amap Style","Geojson"],desc:"面向省政府机关打造的政务级实时能碳管控大屏，集成GIS地图，实时监控机关事务单位的能耗与碳排数据，支撑节能减排政策执行与预警决策、能耗监测、运维告警、工单管理等多维数据，实现区域能源全生命周期可视化管控与智能决策。",highlights:["原子化、原型化大屏设计，高保真 Demo 演示","支持2D/3D GIS地图切换","多终端自适应展示","管理决策效率提升60%"],screenshots:["/assets/images/ntgk2.png","/assets/images/ntgk3.mp4","/assets/images/ntgk4.png","/assets/images/ntgk5.png","/assets/images/ntgk6.png"],projectLink:"https://www.figma.com/proto/q7DqLbfB1uuKfsAVjnzhoF/%E8%8C%8C%E5%B9%B3%E3%80%81%E5%A4%A9%E6%A1%A5%E8%83%BD%E7%A2%B3%E7%AE%A1%E6%8E%A7%E5%B9%B3%E5%8F%B0%E5%8F%AF%E8%A7%86%E5%8C%96%E5%A4%A7%E5%B1%8F%E8%AE%BE%E8%AE%A1?node-id=192-15924&viewport=-406%2C252%2C0.03&t=1MvOD9WdotlUwLNd-1&scaling=contain&content-scaling=fixed&starting-point-node-id=192%3A15924&page-id=5%3A14"},{id:2,color:"#E877FF",Bg:Nl,coverImg:"/assets/images/chpgw1.mp4",year:"2025",title:"浪潮智慧建筑产品官网",sub:"Product Official Website",tags:["品牌官网","响应式","动效"],role:"Design System Lead",metric:"全案设计",tools:["Figma","Storybook","GitHub Copilot"],desc:"浪潮智慧建筑以 “数智融合、绿色低碳” 为核心，打造筑瓴智慧建筑全栈式解决方案体系，覆盖智能应用、数字底座、AI 中台、智能硬件四大维度，为建筑全生命周期提供从 “感知 - 分析 - 决策 - 执行” 的全流程智能化支撑，助力行业实现高效、绿色、高质量的数字化转型。",highlights:["企业品牌官网全链路设计","跨产品线组件复用","交互原型 Demo 设计","迭代交付效率提升2倍"],screenshots:["/assets/images/chpgw2.png","/assets/images/chpgw3.png","/assets/images/chpgw4.png","/assets/images/chpgw5.png","/assets/images/chpgw6.png"],projectLink:"https://www.figma.com/proto/UwjGPd7UgVQLSN8oE5rdeb/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%91?node-id=91-4991&viewport=-23%2C-1005%2C0.06&t=GIZyLL29GHlGTPVD-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"},{id:3,color:"#02BA53",Bg:Gb,coverImg:"/assets/images/sdhs1.mp4",year:"2023",title:"山东高速满易运 App",sub:"SDHS MY-TMS Driver App",tags:["物流运输","货运平台","MY-TMS"],role:"Lead UI/UX · Product Design",metric:"转化率提升 85%",tools:["Figma","Principle","Midjourney"],desc:"山东高速集团官方货运司机服务平台，提供在线接单、路线规划、高速通行、费用结算、车辆管理、消息通知等全流程功能，帮助货车司机高效完成运输任务，实现货运流程线上化、标准化、智能化。",highlights:["深色模式适配，满足长途夜间驾驶使用","搭建完整移动端组件库，提升迭代效率","轻量化信息层级，降低司机操作认知成本","极简交互流程设计，缩短高频操作路径"],screenshots:["/assets/images/sdhs2.png","/assets/images/sdhs3.png","/assets/images/sdhs4.png","/assets/images/sdhs5.png","/assets/images/sdhs6.png"],projectLink:"https://example.com/icty-app"},{id:4,color:"#FE952C",Bg:Wb,coverImg:"/assets/images/icity1.mp4",year:"2018",title:"爱城市网 App",sub:"iCity — Urban Service App",tags:["城市服务","政务服务","民生出行"],role:"UI/UX · Product Design · Motion",metric:"省级政务标杆产品",tools:["Sketch","Principle","After Effects"],desc:"省级综合性政务便民服务App，聚焦市民日常办事、民生查询、生活服务核心场景，整合政务办理、社保医保、交通出行、便民缴费、城市资讯、投诉建议等多元功能。统筹全局交互设计逻辑，简化政务操作流程，降低市民使用门槛，打造轻量化、高易用的移动端体验。",highlights:["高合规政务视觉体系，兼顾严谨性与美观度","与 UI 设计规范一致，搭建产品原件库","轻量化信息层级，优化民生办事操作路径","统一多业务线视觉体系，保障产品体验一致性"],screenshots:["/assets/images/icity2.png","/assets/images/icity3.png","/assets/images/icity4.png","/assets/images/icity5.png","/assets/images/icity6.png"],projectLink:"https://example.com/icty-web"},{id:5,color:"#34d399",Bg:Nl,coverImg:"/assets/images/PPT1.png",year:"2024",title:"PPT 设计与演示体系",sub:"Visual Communication",tags:["产品发布会","汇报模板","设计分享"],role:"视觉设计负责人 · 演示体系搭建",metric:"影视级幻灯片",tools:["PowerPoint","Keynote","ECharts"],desc:"面向政企汇报、产品发布、项目复盘的 PPT 设计体系，统一品牌视觉风格、信息层级与演示逻辑，提升内容传递效率与专业呈现质感。",highlights:["品牌视觉与版式规范高度统一","搭建 60+ 页标准化演示模板体系","数据图表可视化表达更清晰直观","整体汇报制作效率提升 70%"],screenshots:["/assets/images/PPT2.png","/assets/images/PPT3.png","/assets/images/PPT4.png","/assets/images/PPT5.png","/assets/images/PPT6.png"],projectLink:"https://example.com/energy-carbon"},{id:6,color:"#FE952C",Bg:Vb,coverImg:"/assets/images/ai1.mp4",year:"2026",title:"AI-设计赋能",sub:"AI-Driven Efficiency",tags:["提效体系","智能辅助","设计自动化"],role:"AI设计体系搭建 · 提效方案负责人",metric:"效率提升 65%",tools:["Antigravity","Cursor","GitHub Copilot"],desc:"基于AI能力构建设计提效工作流，覆盖组件生成、图表可视化、原型快速迭代、设计规范落地等场景，通过智能辅助大幅缩短交付周期，提升团队整体产出质量与效率。",highlights:["搭建AI辅助设计标准化流程体系","设计稿迭代周期缩短 50% 以上","组件与图表自动生成覆盖率提升","团队整体设计效率提升 65%"],screenshots:["/assets/images/ai2.mp4","/assets/images/ai3.mp4","/assets/images/ai4.png","/assets/images/ai5.mp4","/assets/images/ai6.png"],projectLink:"https://example.com/licheng-oa-mobile"},{id:7,color:"#7c6ff7",Bg:Nl,coverImg:"/assets/images/dx1.mp4",year:"2022",title:"交互动效设计",sub:"Motion Interactive",tags:["微动画","Lottie落地","GIS动画"],role:"Product Designer · UX Lead",metric:"信息可读性提升 40%",tools:["AE","Lottie","Principle","Hype 4"],desc:"搭建全产品线标准化动效设计体系，制定统一的动效规范与落地标准，覆盖微交互、页面转场、状态反馈、组件动画等核心场景，提升产品交互体验与视觉一致性。",highlights:["制定完整动效设计规范与组件库","统一全产品线动效语言与视觉节奏","动效交付与研发对接效率提升60%","产品操作反馈与体验质感显著优化"],screenshots:["/assets/images/dx2.mp4","/assets/images/dx3.mp4","/assets/images/dx4.mp4","/assets/images/dx5.mp4","/assets/images/dx6.mp4"],projectLink:"https://example.com/licheng-oa-desktop"}];function Xb({item:r,onClose:e}){if(X.useEffect(()=>(r&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[r]),!r)return null;const t=r.Bg;return u.jsx(qo,{children:u.jsx("div",{className:"fixed inset-0 z-50 flex items-center sm:items-center justify-center px-6 sm:px-8 pt-8 sm:pt-12 pb-8",style:{background:"rgba(0,0,0,0.88)",backdropFilter:"blur(16px)"},onClick:e,children:u.jsxs("div",{className:"relative w-full sm:max-w-4xl max-h-[86vh] overflow-y-auto rounded-2xl",style:{background:"#0c0c18",border:"1px solid rgba(255,255,255,0.07)",boxShadow:`0 0 100px ${r.color}14`},onClick:s=>s.stopPropagation(),children:[u.jsx("button",{onClick:e,className:"sticky top-4 float-right mr-5 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",style:{background:"rgba(0,0,0,0.65)",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.65)",backdropFilter:"blur(8px)"},onMouseEnter:s=>{s.currentTarget.style.background="rgba(0,0,0,0.85)",s.currentTarget.style.borderColor="rgba(255,255,255,0.2)",s.currentTarget.style.color="rgba(255,255,255,0.9)"},onMouseLeave:s=>{s.currentTarget.style.background="rgba(0,0,0,0.65)",s.currentTarget.style.borderColor="rgba(255,255,255,0.12)",s.currentTarget.style.color="rgba(255,255,255,0.65)"},children:u.jsx(Jr,{size:16})}),u.jsxs("div",{className:"relative h-52 overflow-hidden rounded-t-3xl sm:rounded-t-3xl hidden md:block",style:{marginTop:"-52px"},children:[u.jsx(t,{color:r.color}),u.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg,transparent 40%,#0c0c18 100%)"}}),u.jsx("div",{className:"absolute top-4 left-5",children:u.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(0,0,0,0.7)",border:`1px solid ${r.color}22`,color:r.color,backdropFilter:"blur(8px)"},children:r.year})})]}),u.jsxs("div",{className:"px-6 pt-6 pb-8",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 mb-1",children:[u.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800,color:"#f0f4f8"},children:r.title}),u.jsx("span",{style:{fontSize:"2rem",fontWeight:900,color:`${r.color}20`,lineHeight:1},children:r.num})]}),u.jsx("p",{className:"text-sm mb-1",style:{color:r.color},children:r.sub}),u.jsx("p",{className:"text-xs mb-5",style:{color:"rgba(255,255,255,0.25)"},children:r.role}),u.jsx("p",{className:"mb-5",style:{fontSize:"0.875rem",color:"rgba(255,255,255,0.48)",lineHeight:1.85},children:r.desc}),u.jsx("div",{className:"grid grid-cols-1 gap-4 mb-5",children:u.jsxs("div",{children:[u.jsx("p",{className:"text-xs mb-2 tracking-wider",style:{color:"rgba(255,255,255,0.2)",letterSpacing:"0.12em"},children:"TOOLS"}),u.jsx("div",{className:"flex flex-nowrap gap-1.5 overflow-x-auto scrollbar-hide",children:r.tools.map(s=>u.jsx("span",{className:"px-2 py-1 text-xs rounded",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.42)"},children:s},s))})]})}),u.jsxs("div",{className:"rounded-xl p-4",style:{background:`${r.color}07`,border:`1px solid ${r.color}16`},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",style:{color:r.color},children:[u.jsx(Xo,{size:12}),u.jsx("span",{className:"text-xs tracking-wider",style:{letterSpacing:"0.1em",fontWeight:600},children:"HIGHLIGHTS"})]}),r.highlights.map(s=>u.jsxs("div",{className:"flex items-start gap-2.5 mb-2",children:[u.jsx(Zx,{size:11,className:"mt-0.5 shrink-0",style:{color:r.color}}),u.jsx("span",{style:{fontSize:"0.8125rem",color:"rgba(255,255,255,0.48)",lineHeight:1.7},children:s})]},s))]}),r.screenshots&&r.screenshots.length>0&&u.jsxs("div",{className:"mt-6",children:[u.jsx("p",{className:"text-xs mb-3 tracking-wider",style:{color:"rgba(255,255,255,0.2)",letterSpacing:"0.12em"},children:"PROJECT SCREENSHOTS"}),u.jsx("div",{className:"grid grid-cols-1 gap-3",children:r.screenshots.map((s,a)=>{const l=/\.mp4($|\?)/i.test(s);return u.jsx("div",{className:"relative overflow-hidden rounded-lg",style:{background:"rgba(255,255,255,0.02)",border:`1px solid ${r.color}12`,maxWidth:"100%"},children:l?u.jsx("video",{src:s,className:"w-full h-auto",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onLoadedData:f=>{const d=f.currentTarget,p=d.parentElement;if(d.style.display="",p){const m=p.querySelector(".screenshot-error");m&&m.remove()}},onError:f=>{const d=f.currentTarget,p=d.parentElement;if(p&&(d.style.display="none",!p.querySelector(".screenshot-error"))){const m=document.createElement("div");m.className="screenshot-error absolute inset-0 flex items-center justify-center",m.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1; cursor: pointer;",m.textContent="视频加载失败 · 点击重试";let v=0,g=null,y=null;const M=()=>{g&&clearTimeout(g),y&&clearInterval(y),v<5?(v++,g=setTimeout(()=>{d.src=s+"?_retry="+Date.now()},2e3*v)):y=setInterval(()=>{d.src=s+"?_retry="+Date.now()},8e3)};m.onclick=()=>{v=0,g&&clearTimeout(g),y&&clearInterval(y),m.remove(),d.style.display="",d.src=s+"?_retry="+Date.now()},p.appendChild(m),M()}}}):u.jsx("img",{src:s,alt:`${r.title} 截图 ${a+1}`,className:"w-full h-auto",onLoad:f=>{const d=f.currentTarget,p=d.parentElement;if(d.style.display="",p){const m=p.querySelector(".screenshot-error");m&&m.remove()}},onError:f=>{const d=f.currentTarget,p=d.parentElement;if(p&&(d.style.display="none",!p.querySelector(".screenshot-error"))){const m=document.createElement("div");m.className="screenshot-error absolute inset-0 flex items-center justify-center",m.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1; cursor: pointer;",m.textContent="图片加载失败 · 点击重试";let v=0,g=null,y=null;const M=()=>{g&&clearTimeout(g),y&&clearInterval(y),v<5?(v++,g=setTimeout(()=>{d.src=s+"?_retry="+Date.now()},2e3*v)):y=setInterval(()=>{d.src=s+"?_retry="+Date.now()},8e3)};m.onclick=()=>{v=0,g&&clearTimeout(g),y&&clearInterval(y),m.remove(),d.style.display="",d.src=s+"?_retry="+Date.now()},p.appendChild(m),M()}}})},a)})})]}),r.projectLink&&u.jsx("div",{className:"mt-6",children:u.jsxs("a",{href:r.projectLink,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm transition-all duration-300",style:{background:`${r.color}`,color:"#05050a",fontWeight:700,boxShadow:`0 0 30px ${r.color}40`},onMouseEnter:s=>{s.currentTarget.style.boxShadow=`0 0 40px ${r.color}60`,s.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:s=>{s.currentTarget.style.boxShadow=`0 0 30px ${r.color}40`,s.currentTarget.style.transform="translateY(0)"},children:[u.jsx(rf,{size:16,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"}),"查看完整项目"]})})]})]})})})}function Wr({item:r,tall:e,imageHeight:t,onOpen:s}){const[a,l]=X.useState(!1),f=r.Bg,d=X.useRef({count:0,timer:null,interval:null});return X.useEffect(()=>()=>{d.current.timer&&clearTimeout(d.current.timer),d.current.interval&&clearInterval(d.current.interval)},[]),u.jsx(eg,{glowColor:jb(r.color),borderRadius:"1rem",borderWidth:5,intensity:2,children:u.jsxs("div",{className:"group relative rounded-2xl overflow-hidden cursor-pointer will-change-transform",style:{transform:"none",transition:"transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",boxShadow:a?`0 20px 60px rgba(0,0,0,0.5), 0 0 50px ${r.color}08`:"none",background:"#0e0e1a",outline:"none",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",isolation:"isolate",backgroundColor:"#0e0e1a"},onMouseEnter:()=>l(!0),onMouseLeave:()=>{l(!1)},onClick:s,children:[u.jsxs("div",{className:"relative overflow-hidden rounded-t-2xl",style:{height:t||(e?300:260),WebkitBorderTopLeftRadius:"14px",WebkitBorderTopRightRadius:"14px",borderTopLeftRadius:"14px",borderTopRightRadius:"14px",WebkitBorderBottomLeftRadius:"0",WebkitBorderBottomRightRadius:"0",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},children:[r.coverImg&&(/\.mp4($|\?)/i.test(r.coverImg)?u.jsx("video",{src:r.coverImg,className:"absolute inset-0 w-full h-full object-cover object-top",style:{opacity:.85,transform:a?"scale(1.06)":"scale(1)",transition:"transform 0.2s ease-out",willChange:"transform",borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onLoadedData:m=>{const v=m.currentTarget,g=v.parentElement;if(d.current.timer&&(clearTimeout(d.current.timer),d.current.timer=null),d.current.interval&&(clearInterval(d.current.interval),d.current.interval=null),d.current.count=0,v.style.display="",g){const y=g.querySelector(".img-error-fallback");y&&y.remove()}},onError:m=>{const v=m.currentTarget,g=v.parentElement;if(!g)return;if(v.style.display="none",!g.querySelector(".img-error-fallback")){const M=document.createElement("div");M.className="img-error-fallback absolute inset-0 flex items-center justify-center",M.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1; cursor: pointer;",M.textContent="视频加载失败 · 点击重试",M.onclick=()=>{d.current.timer&&clearTimeout(d.current.timer),d.current.interval&&clearInterval(d.current.interval),d.current.count=0,M.remove(),v.style.display="",v.src=r.coverImg+"?_retry="+Date.now()},g.insertBefore(M,g.firstChild)}(()=>{const M=d.current.count;M<5?(d.current.count=M+1,d.current.timer=setTimeout(()=>{v.src=r.coverImg+"?_retry="+Date.now()},2e3*(M+1))):d.current.interval=setInterval(()=>{v.src=r.coverImg+"?_retry="+Date.now()},8e3)})()}}):u.jsx("img",{src:r.coverImg,alt:r.title,className:"absolute inset-0 w-full h-full object-cover object-top cover-image",style:{opacity:.85,transform:a?"scale(1.06)":"scale(1)",transition:"transform 0.2s ease-out",willChange:"transform",WebkitBorderTopLeftRadius:"16px",WebkitBorderTopRightRadius:"16px",borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},onLoad:m=>{const v=m.currentTarget,g=v.parentElement;if(d.current.timer&&(clearTimeout(d.current.timer),d.current.timer=null),d.current.interval&&(clearInterval(d.current.interval),d.current.interval=null),d.current.count=0,v.style.display="",g){const y=g.querySelector(".img-error-fallback");y&&y.remove()}},onError:m=>{const v=m.currentTarget,g=v.parentElement;if(!g)return;if(v.style.display="none",!g.querySelector(".img-error-fallback")){const M=document.createElement("div");M.className="img-error-fallback absolute inset-0 flex items-center justify-center",M.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1; cursor: pointer;",M.textContent="图片加载失败 · 点击重试",M.onclick=()=>{d.current.timer&&clearTimeout(d.current.timer),d.current.interval&&clearInterval(d.current.interval),d.current.count=0,M.remove(),v.style.display="",v.src=r.coverImg+"?_retry="+Date.now()},g.insertBefore(M,g.firstChild)}(()=>{const M=d.current.count;M<5?(d.current.count=M+1,d.current.timer=setTimeout(()=>{v.src=r.coverImg+"?_retry="+Date.now()},2e3*(M+1))):d.current.interval=setInterval(()=>{v.src=r.coverImg+"?_retry="+Date.now()},8e3)})()}})),!r.coverImg&&u.jsx(f,{color:r.color}),u.jsx("div",{className:"absolute inset-0 pointer-events-none transition-opacity duration-300 md:block hidden",style:{background:"linear-gradient(180deg, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.8) 100%)",opacity:a?.01:.9,borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"}}),u.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(180deg,transparent 0%,rgba(16,16,26,0.01) 80%,rgba(16,16,26,0.01) 100%)",borderTopLeftRadius:"16px",borderTopRightRadius:"16px"}}),u.jsx("div",{className:"absolute top-4 left-4",children:u.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(16,16,26,0.8)",border:`1px solid ${r.color}22`,color:r.color,backdropFilter:"blur(8px)"},children:r.year})})]}),u.jsxs("div",{className:"px-5 py-10 md:py-5 md:px-5 bg-[#60606040] bg-[#60606042] m-[0px]",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 mb-6 md:mb-2",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-0 mb-1.5 md:mb-0.5",children:[u.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:`${r.color}50`,letterSpacing:"0.08em"},children:r.num}),u.jsx("h3",{style:{fontSize:"0.9375rem",fontWeight:700,color:"#f0f4f8"},children:r.title})]}),u.jsx("p",{className:"text-xs",style:{color:r.color,opacity:.75},children:r.sub})]}),u.jsx("span",{className:"shrink-0 text-xs px-2.5 py-1 rounded-lg",style:{color:r.color,fontWeight:600,whiteSpace:"nowrap",background:`color-mix(in srgb, ${r.color} 12%, transparent)`,border:`1px solid color-mix(in srgb, ${r.color} 14%, transparent)`},children:r.metric})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5 mt-6 md:mt-3",children:r.tags.map(p=>u.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.3)"},children:p},p))})]})]})})}function qb(){const[r,e]=X.useState(null),{ref:t,vis:s}=Hb(0),{theme:a}=Ks(),[l,f]=X.useState(!1);return X.useEffect(()=>{const d=()=>{f(window.innerWidth>=1024)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"portfolio",ref:t,className:"relative overflow-visible md:overflow-hidden",style:{background:"var(--bg)",padding:"80px 0 140px"},children:[u.jsx("div",{className:"absolute inset-x-0 top-0 h-px pointer-events-none",style:{background:`linear-gradient(90deg,transparent 10%,${a.purple}33 50%,transparent 90%)`}}),u.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,lineHeight:1,color:"rgba(255,255,255,0.05)",letterSpacing:"0.05em"},children:"WORKS"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 mb-20 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(30px)"},children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mb-5",children:[u.jsx("span",{className:"text-xm tracking-widest",style:{color:a.purple,letterSpacing:"0.2em",fontWeight:600},children:"SELECTED WORKS"}),u.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${a.purple}4d,transparent)`}})]}),u.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:"#f0f4f8",lineHeight:1.05,letterSpacing:"-0.04em"},children:"其他精选作品"})]}),u.jsx("div",{className:"lg:max-w-xs",children:u.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(255,255,255,0.28)",lineHeight:1.85},children:["点击卡片查看完整项目案例",u.jsx("br",{}),"包含设计流程与核心数据成果",u.jsx("br",{}),"以及AI驱动的全链路设计实践"]})})]}),u.jsx("div",{className:"hidden md:block",children:u.jsxs("div",{className:"grid lg:grid-cols-12 gap-4",children:[u.jsx("div",{className:"lg:col-span-7 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"60ms"},children:u.jsx(Wr,{item:Kt[0],tall:!0,onOpen:()=>e(Kt[0]),imageHeight:l?"320px":"200px"})}),u.jsx("div",{className:"lg:col-span-5 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"130ms"},children:u.jsx(Wr,{item:Kt[1],tall:!0,onOpen:()=>e(Kt[1]),imageHeight:l?"320px":"200px"})}),u.jsx("div",{className:"lg:col-span-6 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"200ms"},children:u.jsx(Wr,{item:Kt[2],onOpen:()=>e(Kt[2]),imageHeight:l?"330px":"200px"})}),u.jsx("div",{className:"lg:col-span-6 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"260ms"},children:u.jsx(Wr,{item:Kt[3],onOpen:()=>e(Kt[3]),imageHeight:l?"330px":"200px"})}),u.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"320ms"},children:u.jsx(Wr,{item:Kt[4],onOpen:()=>e(Kt[4]),imageHeight:l?"220px":"200px"})}),u.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"380ms"},children:u.jsx(Wr,{item:Kt[5],onOpen:()=>e(Kt[5]),imageHeight:l?"220px":"200px"})}),u.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"440ms"},children:u.jsx(Wr,{item:Kt[6],onOpen:()=>e(Kt[6]),imageHeight:l?"220px":"200px"})})]})}),u.jsx("div",{className:"md:hidden",children:u.jsx(Bb,{onItemClick:e})})]})]}),u.jsx(Xb,{item:r,onClose:()=>e(null)})]})}const Go="#0c0b18",Yb="#f0eef9";function Qb(r=0){const e=X.useRef(null),[t,s]=X.useState(!1);return X.useEffect(()=>{const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(setTimeout(()=>s(!0),r),a.disconnect())},{threshold:.04});return e.current&&a.observe(e.current),()=>a.disconnect()},[r]),{ref:e,vis:t}}const Kb=[{name:"精英校友奖",issuer:"集团招聘宣讲会",year:"2019",color:"#00b896",icon:"G"},{name:"十佳优秀员工",issuer:"山东爱城市网科技有限公司",year:"2020",color:"#7c6ff7",icon:"S"},{name:"集团 Logo 设计一等奖",issuer:"浪潮集团",year:"2020",color:"#f472b6",icon:"L"},{name:"创新人才奖",issuer:"浪潮集团",year:"2022",color:"#34d399",icon:"C"},{name:"山东省中级工程师职称",issuer:"山东省人社厅",year:"2024",color:"#fb923c",icon:"M"},{name:"已授权发明专利 4 项",issuer:"国家知识产权局",year:"2025",color:"#38bdf8",icon:"Z"}],Zb=["App Design","Mobile Design","Saas Design","OA Design","Visual Design","Large Screen","Design Systems","Component Library","AI Workflow","Prototyping","Logo Design","Brand Identity","Motion Design","Front-End","BI / Data Vis","HTML+CSS","Lotties","设计提效","政务服务","TMS System","能碳管控","智慧园区","智慧工地","产品发布会PPT"];function Jb({c:r,delay:e}){const[t,s]=X.useState(!1),a=X.useRef(null),[l,f]=X.useState(!1);return X.useEffect(()=>{const d=new IntersectionObserver(([p])=>{p.isIntersecting&&(setTimeout(()=>f(!0),e),d.disconnect())},{threshold:.1});return a.current&&d.observe(a.current),()=>d.disconnect()},[e]),u.jsxs("div",{ref:a,className:"flex items-center gap-3 p-4 rounded-2xl cursor-default select-none transition-all duration-250",style:{background:t?"white":"rgba(255,255,255,0.5)",border:t?`1px solid ${r.color}25`:"1px solid rgba(12,11,24,0.06)",transform:t?"translateY(-3px) scale(1.01)":l?"translateY(0) scale(1)":"translateY(12px) scale(0.97)",opacity:l?1:0,transition:`all 0.4s cubic-bezier(0.34,1.2,0.64,1) ${e}ms`,boxShadow:t?`0 8px 28px rgba(0,0,0,0.1), 0 0 20px ${r.color}10`:"none"},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[u.jsx("div",{className:"w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-sm transition-all duration-200",style:{background:t?`${r.color}18`:`${r.color}0e`,border:`1px solid ${r.color}20`,color:r.color,fontWeight:800,boxShadow:t?`0 0 12px ${r.color}20`:"none"},children:r.icon}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("p",{style:{fontSize:"0.8125rem",fontWeight:600,color:Go,lineHeight:1.3},children:r.name}),u.jsx("p",{className:"text-xs mt-0.5 truncate",style:{color:"rgba(12,11,24,0.38)"},children:r.issuer})]}),u.jsx("span",{className:"text-xs shrink-0",style:{color:r.color,fontWeight:700},children:r.year})]})}function $b(){const{ref:r,vis:e}=Qb(.03),{theme:t}=Ks();return u.jsxs("section",{id:"education",ref:r,className:"relative overflow-hidden",style:{background:Yb,padding:"80px 0 140px"},children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.02]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"160px"}}),u.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,color:"rgba(12,11,24,0.03)",lineHeight:1,letterSpacing:"0.05em"},children:"EDUCATION"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[60px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[u.jsx("span",{className:"text-xm tracking-widest",style:{color:t.purple,letterSpacing:"0.2em",fontWeight:600},children:"BACKGROUND"}),u.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${t.purple}66,transparent)`}})]}),u.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:Go,lineHeight:1.05,letterSpacing:"-0.04em"},children:"教育 & 认证"})]}),u.jsx("div",{className:"lg:max-w-xs",children:u.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.42)",lineHeight:1.85},children:["参加系统培训 UI/UX 设计",u.jsx("br",{}),"持续学习 AI 与新兴技术",u.jsx("br",{}),"多项专业认证"]})})]}),u.jsxs("div",{className:"grid lg:grid-cols-[1fr_1px_1fr] gap-0",children:[u.jsxs("div",{className:"pr-0 lg:pr-12",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[u.jsx(Yp,{size:13,style:{color:"#7c6ff7"}}),u.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"EDUCATION"})]}),u.jsxs("div",{className:"relative flex gap-5 mb-2 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)"},children:[u.jsxs("div",{className:"flex flex-col items-center shrink-0",style:{width:40},children:[u.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(124,111,247,0.1)",border:"2px solid #7c6ff7",boxShadow:"0 0 20px rgba(124,111,247,0.2)"},children:u.jsx(Yp,{size:15,style:{color:"#7c6ff7"}})}),u.jsx("div",{className:"w-px mt-2 flex-1",style:{background:"rgba(12,11,24,0.1)",minHeight:24}})]}),u.jsxs("div",{className:"pb-6",children:[u.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-2",children:[u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:Go},children:"中国石油大学（华东） · 储运与建筑学院"}),u.jsx("p",{className:"text-sm mt-0.5",style:{color:"#7c6ff7",fontWeight:600},children:"建筑环境与能源应用工程 · 本科学位"})]}),u.jsxs("div",{className:"text-right hidden sm:block",children:[u.jsx("span",{className:"text-xs",style:{color:"rgba(12,11,24,0.35)"},children:"2011 — 2015"}),u.jsx("p",{className:"text-xs mt-0.5",style:{color:"rgba(12,11,24,0.3)"},children:"GPA 4.3 / 5.0"})]})]}),u.jsx("p",{className:"mb-4",style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.48)",lineHeight:1.85},children:"自主深耕 UI/UX 设计与数据可视化领域，将工程逻辑与用户体验设计结合，主导多个 B 端可视化与移动端项目，形成 “工程思维 + 设计落地” 的独特优势。"}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:["专业前 10%","优秀学生干部","校级奖学金 ×3"].map(s=>u.jsxs("div",{className:"rounded-xl p-2.5 text-center",style:{background:"rgba(124,111,247,0.06)",border:"1px solid rgba(124,111,247,0.12)"},children:[u.jsx(Pu,{size:12,className:"mx-auto mb-1",style:{color:"#7c6ff7"}}),u.jsx("span",{style:{fontSize:"0.6875rem",color:"rgba(12,11,24,0.5)",lineHeight:1.4,display:"block"},children:s})]},s))})]})]}),u.jsxs("div",{className:"relative flex gap-5 mb-2 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"120ms"},children:[u.jsxs("div",{className:"flex flex-col items-center shrink-0",style:{width:40},children:[u.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(0,240,200,0.08)",border:"2px solid rgba(0,240,200,0.5)"},children:u.jsx(Pu,{size:14,style:{color:"#00b896"}})}),u.jsx("div",{className:"w-px mt-2 flex-1",style:{background:"rgba(12,11,24,0.1)",minHeight:24}})]}),u.jsxs("div",{className:"pb-6",children:[u.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-2",children:[u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:Go},children:"Google UX Design Certificate"}),u.jsx("p",{className:"text-sm mt-0.5",style:{color:"#11AF95",fontWeight:600},children:"专业认证 · Coursera"})]}),u.jsx("span",{className:"text-xs hidden sm:block",style:{color:"rgba(12,11,24,0.35)"},children:"2017"})]}),u.jsx("p",{className:"mb-4",style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.48)",lineHeight:1.85},children:"系统学习 UI/UX 设计全链路技能，覆盖 PS、AI、AE、C4D 视觉设计工具，Axure、Sketch 原型交互工具，以及 HTML+CSS 前端基础与用户研究方法论，完成从视觉到交互的完整设计能力构建。"}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:["全栈设计工具掌握","Google 官方认证","团队项目第一名"].map(s=>u.jsxs("div",{className:"rounded-xl p-2.5 text-center",style:{background:"rgba(0,240,200,0.08)",border:"1px solid rgba(0,240,200,0.2)"},children:[u.jsx(mv,{size:12,className:"mx-auto mb-1",style:{color:"#00b896"}}),u.jsx("span",{style:{fontSize:"0.6875rem",color:"rgba(12,11,24,0.5)",lineHeight:1.4,display:"block"},children:s})]},s))})]})]}),u.jsxs("div",{className:"relative flex gap-5 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"200ms"},children:[u.jsx("div",{className:"shrink-0 flex items-s't",style:{width:40},children:u.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(251,146,60,0.08)",border:"2px dashed rgba(251,146,60,0.3)"},children:u.jsx(h1,{size:14,style:{color:"#fb923c"}})})}),u.jsxs("div",{className:"flex-1 rounded-2xl p-4",style:{background:"rgba(251,146,60,0.05)",border:"1px solid rgba(251,146,60,0.14)"},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-pulse",style:{background:"#fb923c",boxShadow:"0 0 8px #fb923c"}}),u.jsx("span",{className:"text-xs",style:{color:"#fb923c",fontWeight:700},children:"进行中"})]}),u.jsx("p",{style:{fontSize:"0.875rem",fontWeight:600,color:Go},children:"Advanced AI for UX"}),u.jsx("p",{className:"text-xs mt-0.5",style:{color:"rgba(12,11,24,0.38)"},children:"Stanford Online · 持续学习中…"})]})]})]}),u.jsx("div",{className:"hidden lg:block my-4",style:{background:"linear-gradient(180deg,transparent,rgba(12,11,24,0.1) 20%,rgba(12,11,24,0.1) 80%,transparent)"}}),u.jsxs("div",{className:"pl-0 lg:pl-12 mt-12 lg:mt-0",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[u.jsx(Pu,{size:13,style:{color:"#f472b6"}}),u.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"CERTIFICATIONS"})]}),u.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 mb-12",children:Kb.map((s,a)=>u.jsx(Jb,{c:s,delay:65},s.name))}),u.jsxs("div",{className:"hidden md:block",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full",style:{background:"#f472b6"}}),u.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"EXPERTISE KEYWORDS"})]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:Zb.map((s,a)=>u.jsx("span",{className:"px-3 py-1.5 rounded-lg text-xs cursor-default select-none transition-all duration-300",style:{background:"rgba(255,255,255,0.6)",border:"1px solid rgba(12,11,24,0.08)",color:"rgba(12,11,24,0.5)",opacity:e?1:0,transform:e?"scale(1)":"scale(0.88)",transition:"opacity 0.4s, transform 0.4s, background 0s, border-color 0s, color 0s",transitionDelay:"0ms"},onMouseEnter:l=>{const f=["#00b896","#7c6ff7","#f472b6","#34d399","#fb923c","#38bdf8"],d=f[a%f.length];l.currentTarget.style.background=`${d}12`,l.currentTarget.style.borderColor=`${d}22`,l.currentTarget.style.color=d},onMouseLeave:l=>{l.currentTarget.style.background="rgba(255,255,255,0.6)",l.currentTarget.style.borderColor="rgba(12,11,24,0.08)",l.currentTarget.style.color="rgba(12,11,24,0.5)"},children:s},s))})]})]})]})]})]})}const ew="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function tw(r){const[e,t]=X.useState(!1),s=()=>{t(!0)},{src:a,alt:l,style:f,className:d,...p}=r;return e?u.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${d??""}`,style:f,children:u.jsx("div",{className:"flex items-center justify-center w-full h-full",children:u.jsx("img",{src:ew,alt:"Error loading image",...p,"data-original-url":a})})}):u.jsx("img",{src:a,alt:l,className:d,style:f,...p,onError:s})}const nw="/assets/cd928feb81fb8ff325ac41aaef07a759-BH8O_PaO.jpg",iw=({size:r=20,color:e="currentColor"})=>u.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"#07C160",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M10.0014 14.6757C10.0011 14.6551 10.001 14.6345 10.001 14.6138C10.001 12.1055 12.0175 9.99564 14.7539 9.38092C14.3904 7.07873 11.9602 5.19995 8.90098 5.19995C5.58037 5.19995 3.00098 7.41344 3.00098 9.9793C3.00098 10.9487 3.36131 11.88 4.04082 12.6781C4.0728 12.7157 4.12443 12.7717 4.19342 12.8427C4.78537 13.4517 5.13709 14.2457 5.19546 15.0805C5.90857 14.6683 6.74285 14.5123 7.55832 14.6392C7.72416 14.665 7.85986 14.6847 7.96345 14.6982C8.27111 14.7383 8.58419 14.7586 8.90098 14.7586C9.27825 14.7586 9.64595 14.7301 10.0014 14.6757ZM10.4581 16.627C9.95467 16.7133 9.43399 16.7586 8.90098 16.7586C8.49441 16.7586 8.09502 16.7323 7.70499 16.6815C7.58312 16.6656 7.4317 16.6436 7.25073 16.6154C6.87693 16.5572 6.49436 16.6321 6.1713 16.8268L4.26653 17.9745C4.12052 18.0646 3.94891 18.1057 3.77733 18.0916C3.33814 18.0554 3.01178 17.6744 3.04837 17.2405L3.19859 15.4596C3.23664 15.0086 3.07664 14.5632 2.75931 14.2367C2.66182 14.1364 2.5814 14.0491 2.51802 13.9747C1.56406 12.8542 1.00098 11.4732 1.00098 9.9793C1.00098 6.23517 4.53793 3.19995 8.90098 3.19995C12.9601 3.19995 16.3041 5.82699 16.7504 9.20788C20.1225 9.36136 22.801 11.723 22.801 14.6138C22.801 15.8068 22.3448 16.9097 21.572 17.8044C21.5206 17.8639 21.4555 17.9336 21.3765 18.0137C21.1194 18.2744 20.9898 18.6301 21.0206 18.9903L21.1423 20.4125C21.172 20.759 20.9076 21.0632 20.5518 21.0921C20.4128 21.1034 20.2738 21.0706 20.1555 20.9986L18.6124 20.0821C18.3506 19.9266 18.0407 19.8668 17.7379 19.9133C17.5913 19.9358 17.4686 19.9533 17.3699 19.966C17.0539 20.0066 16.7303 20.0277 16.401 20.0277C13.7074 20.0277 11.4025 18.6201 10.4581 16.627ZM17.4346 17.9364C18.0019 17.8494 18.5793 17.911 19.1105 18.1111C19.2492 17.5503 19.5373 17.0304 19.9524 16.6094C20.0027 16.5585 20.0388 16.5198 20.0584 16.4971C20.5467 15.9318 20.801 15.2839 20.801 14.6138C20.801 12.8095 18.8983 11.2 16.401 11.2C13.9037 11.2 12.001 12.8095 12.001 14.6138C12.001 16.4181 13.9037 18.0277 16.401 18.0277C16.6424 18.0277 16.8809 18.0124 17.115 17.9823C17.1957 17.972 17.3029 17.9566 17.4346 17.9364Z"})});function rw(r=0){const e=X.useRef(null),[t,s]=X.useState(!1);return X.useEffect(()=>{const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(setTimeout(()=>s(!0),r),a.disconnect())},{threshold:.04});return e.current&&a.observe(e.current),()=>a.disconnect()},[r]),{ref:e,vis:t}}function i0({children:r,onClick:e,primary:t,color:s}){const a=X.useRef(null),[l,f]=X.useState({x:0,y:0}),[d,p]=X.useState(!1);return u.jsx("button",{ref:a,className:"relative flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm overflow-hidden",style:{background:t?"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))":"transparent",border:t?"none":"1px solid rgba(var(--c1), 0.3)",color:t?"var(--bg)":"rgba(var(--c1)",fontWeight:t?700:500,transform:`translate(${l.x}px,${l.y}px)`,transition:d?"transform 0.2s ease-out,box-shadow 0.2s":"transform 0.5s cubic-bezier(0.23,1,0.32,1),box-shadow 0.2s",boxShadow:d&&t?"0 0 35px rgba(var(--c1), 0.4)":"none",cursor:"default"},onMouseMove:m=>{const v=a.current.getBoundingClientRect();f({x:(m.clientX-v.left-v.width/2)*.4,y:(m.clientY-v.top-v.height/2)*.4})},onMouseEnter:()=>p(!0),onMouseLeave:()=>{p(!1),f({x:0,y:0})},onClick:e,children:r})}const sw=[{icon:u.jsx(of,{size:15}),label:"Email",value:"quweijia@vip.qq.com",href:"mailto:quweijia@vip.qq.com",color:"rgb(var(--c1))"},{icon:u.jsx(Fv,{size:15}),label:"PhoneCall",value:"156-6279-6885",href:" ",color:"#f0f4f8"},{icon:u.jsx(iw,{size:15}),label:"WeChat",value:"vic-qu",href:" ",color:"#07C160"},{icon:u.jsx(r1,{size:15}),label:"X / Twitter",value:"@vicqu_design",href:"https://twitter.com/vicqu_design",color:"#7c6ff7",hideOnMobile:!0}],ow=[{label:"Response Rate",value:"97%",color:"rgb(var(--c1))"},{label:"Reply Time",value:"< 24h",color:"#7c6ff7"},{label:"Remote OK",value:"Yes",color:"#f472b6"},{label:"Availability",value:"On",color:"#34d399"}];function aw({s:r,onQRCodeClick:e,className:t=""}){const[s,a]=X.useState(!1),[l,f]=X.useState(!1),d=r.label==="Email",p=r.label==="PhoneCall",m=r.label==="WeChat",v=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),g=async y=>{if(d){y.preventDefault();const M="quweijia@vip.qq.com";try{await navigator.clipboard.writeText(M),f(!0),setTimeout(()=>f(!1),2e3)}catch{try{const w=document.createElement("textarea");w.value=M,w.style.position="fixed",w.style.left="-999999px",w.style.top="-999999px",document.body.appendChild(w),w.focus(),w.select();const _=document.execCommand("copy");document.body.removeChild(w),_&&(f(!0),setTimeout(()=>f(!1),2e3))}catch(w){console.error("Failed to copy email:",w)}}}else if(p)if(v)window.location.href="tel:15662796885";else{y.preventDefault();const M="15662796885";try{await navigator.clipboard.writeText(M),f(!0),setTimeout(()=>f(!1),2e3)}catch{try{const w=document.createElement("textarea");w.value=M,w.style.position="fixed",w.style.left="-999999px",w.style.top="-999999px",document.body.appendChild(w),w.focus(),w.select();const _=document.execCommand("copy");document.body.removeChild(w),_&&(f(!0),setTimeout(()=>f(!1),2e3))}catch(w){console.error("Failed to copy phone:",w)}}}else m&&(y.preventDefault(),e&&e(),v&&setTimeout(()=>{window.location.href="weixin://"},100))};return u.jsxs("a",{href:p&&v?"tel:15662796885":r.href,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-3 p-4 rounded-xl transition-all duration-200 ${t}`,style:{background:s?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.06)",border:s?`1px solid ${r.color}25`:"1px solid rgba(255,255,255,0.12)",transform:s?"translateX(6px)":"none",textDecoration:"none",cursor:d||p||m?"pointer":"default"},onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:g,children:[u.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200",style:{background:`${r.color}10`,border:`1px solid ${r.color}18`,color:r.color,boxShadow:s?`0 0 14px ${r.color}20`:"none"},children:r.icon}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("p",{style:{fontSize:"0.8125rem",fontWeight:600,color:"#f0f4f8"},children:r.label}),u.jsx("p",{className:"text-xs mt-1.5 truncate",style:{color:"rgba(255,255,255,0.5)"},children:r.value})]}),d||p&&!v||m?l?u.jsx(c0,{size:11,style:{color:r.color,opacity:1,transition:"opacity 0.2s",flexShrink:0}}):u.jsx(f0,{size:11,style:{color:"rgba(255,255,255,0.2)",opacity:s?1:0,transition:"opacity 0.2s",flexShrink:0}}):u.jsx(sf,{size:11,style:{color:"rgba(255,255,255,0.2)",opacity:s?1:0,transition:"opacity 0.2s",flexShrink:0}})]})}function lw(){const{ref:r,vis:e}=rw(.04),{theme:t}=Ks(),[s,a]=X.useState(""),[l,f]=X.useState(!1),[d,p]=X.useState(!1),[m,v]=X.useState(!1),[g,y]=X.useState(!1),[M,b]=X.useState(!1),w=()=>{const P=document.createElement("a");P.href="https://raw.githubusercontent.com/quweijia/file/main/1%E3%80%81UI%20%E4%B8%BB%E7%AE%A1-%E6%9B%B2%E7%BB%B4%E7%94%B2-15662796885.pdf",P.download="曲维甲-UI主管-简历.pdf",P.target="_blank",P.rel="noopener noreferrer",document.body.appendChild(P),P.click(),document.body.removeChild(P)},_=()=>{if(!s.trim())return;if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const D=encodeURIComponent(s);window.location.href=`sms:15662796885${/iPhone|iPad|iPod/i.test(navigator.userAgent)?"&":"?"}body=${D}`,setTimeout(()=>{a("")},500)}else b(!0)},S=async()=>{const P="quweijia@vip.qq.com";try{await navigator.clipboard.writeText(P),y(!0),setTimeout(()=>{y(!1)},2e3)}catch{try{const T=document.createElement("textarea");T.value=P,T.style.position="fixed",T.style.left="-999999px",T.style.top="-999999px",document.body.appendChild(T),T.focus(),T.select();const B=document.execCommand("copy");document.body.removeChild(T),B&&(y(!0),setTimeout(()=>{y(!1)},2e3))}catch(T){console.error("Failed to copy email:",T)}}};return u.jsxs("section",{id:"contact",ref:r,className:"relative overflow-hidden",style:{background:"var(--bg)",padding:"180px 0 20px"},children:[u.jsx("div",{className:"absolute inset-x-0 top-0 h-px pointer-events-none",style:{background:`linear-gradient(90deg,transparent 5%,${t.cyan}2e 50%,transparent 95%)`}}),u.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none",style:{background:`radial-gradient(ellipse,${t.cyan}4d 0%,transparent 70%)`,filter:"blur(30px)"}}),u.jsx("div",{className:"absolute inset-x-0 top-0 flex items-start justify-center overflow-hidden pointer-events-none select-none",style:{paddingTop:"360px"},children:u.jsx("span",{style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,letterSpacing:"0.05em",color:"rgba(255,255,255,0.018)",whiteSpace:"nowrap"},children:"Vic Qu"})}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[u.jsxs("div",{className:"text-center transition-all duration-700 mx-[0px] mt-6 mb-[80px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[u.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:t.cyan,letterSpacing:"0.22em",fontWeight:600},children:"GET IN TOUCH"}),u.jsxs("h2",{style:{fontSize:"clamp(2.8rem,7vw,5.5rem)",fontWeight:900,lineHeight:1.2,letterSpacing:"0em",color:"#f0f4f8"},children:["一起创造",u.jsx("br",{}),u.jsx("span",{style:{background:"linear-gradient(135deg, rgb(var(--c1)) 0%, rgb(var(--c2)) 25%, rgb(var(--c3)) 50%, rgb(var(--c2)) 75%, rgb(var(--c1)) 100%)",backgroundSize:"200% 200%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline-block",animation:"flowGradient 6s ease infinite"},children:"卓越的设计"})]}),u.jsxs("div",{style:{position:"relative",width:"100%",margin:"1.25rem 0"},children:[u.jsxs("svg",{viewBox:"0 0 400 20",className:"mx-auto",style:{width:"min(400px,80%)",opacity:.5,overflow:"visible"},children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"waveGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:t.cyan,stopOpacity:"0"}),u.jsx("stop",{offset:"30%",stopColor:t.cyan,stopOpacity:"1"}),u.jsx("stop",{offset:"70%",stopColor:t.cyan,stopOpacity:"1"}),u.jsx("stop",{offset:"100%",stopColor:t.cyan,stopOpacity:"0"})]})}),u.jsx("path",{d:"M0 10 C40 2 80 18 120 10 S200 2 240 10 S320 18 360 10 S390 4 400 10",fill:"none",stroke:"url(#waveGradient)",strokeWidth:"2",strokeDasharray:"80 400",style:{animation:"waveMove 3s linear infinite",willChange:"stroke-dashoffset",transform:"translateZ(0)"}})]}),u.jsx("style",{jsx:!0,global:!0,children:`
    @keyframes waveMove {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: -440; }
    }
  `})]}),u.jsxs("p",{className:"max-w-md mx-auto",style:{fontSize:"1rem",color:"rgba(255,255,255,0.35)",lineHeight:1.85},children:["岗位意向：UI/UX 设计主管职位",u.jsx("br",{}),"欢迎探讨设计项目合作或咨询机会"]}),u.jsxs("div",{className:"inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"},children:[u.jsx(h0,{size:11,style:{color:"rgba(255,255,255,0.3)"}}),u.jsx("span",{className:"text-xs",style:{color:"rgba(255,255,255,0.3)"},children:"济南 · 中国，接受全球远程机会"})]}),u.jsxs("div",{className:"hidden md:flex flex-wrap justify-center gap-4 mt-8",children:[u.jsxs("div",{className:"relative",children:[u.jsxs(i0,{primary:!0,onClick:()=>v(!m),children:[u.jsx(of,{size:14})," 发送邮件"]}),m&&u.jsxs("div",{className:"absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-xl",style:{bottom:"calc(100% + 12px)",background:"rgba(20, 20, 25, 0.95)",backdropFilter:"blur(12px)",border:"1px solid rgba(var(--c1), 0.3)",boxShadow:"0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(var(--c1), 0.15)",whiteSpace:"nowrap",zIndex:50,animation:"fadeInUp 0.3s ease-out"},children:[u.jsx("span",{className:"text-sm select-all",style:{color:"#f0f4f8",fontWeight:500,fontFamily:"monospace"},children:"quweijia@vip.qq.com"}),u.jsx("button",{onClick:S,className:"flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-200 hover:scale-110",style:{background:g?"rgba(var(--c1), 0.2)":"rgba(255,255,255,0.1)",border:g?"1px solid rgba(var(--c1), 0.4)":"1px solid rgba(255,255,255,0.15)",color:g?"rgb(var(--c1))":"rgba(255,255,255,0.6)"},children:g?u.jsx(c0,{size:13}):u.jsx(f0,{size:13})}),u.jsx("div",{className:"absolute left-1/2 -translate-x-1/2",style:{bottom:"-6px",width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid rgba(var(--c1), 0.3)"}}),u.jsx("div",{className:"absolute left-1/2 -translate-x-1/2",style:{bottom:"-5px",width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid rgba(20, 20, 25, 0.95)"}})]})]}),u.jsxs(i0,{onClick:()=>p(!0),children:[u.jsx(hd,{size:14})," 下载 PDF 简历"]})]})]}),u.jsx("div",{className:"hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(20px)",transitionDelay:"100ms"},children:ow.map((P,D)=>u.jsxs("div",{className:"rounded-2xl p-5 text-center group cursor-default select-none transition-all duration-200 hover:scale-[1.02]",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",transitionDelay:`${D*50}ms`},children:[u.jsx("div",{style:{fontSize:"1.625rem",fontWeight:900,color:P.color,lineHeight:1},children:P.value}),u.jsx("p",{className:"mt-1.5 text-xs",style:{color:"rgba(255,255,255,0.3)",letterSpacing:"0.06em"},children:P.label})]},P.label))}),u.jsxs("div",{className:"grid lg:grid-cols-3 gap-6 mb-20",children:[u.jsxs("div",{className:"transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"150ms"},children:[u.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"CONNECT"}),u.jsx("div",{className:"space-y-2.5",children:sw.map(P=>u.jsx(aw,{s:P,className:P.hideOnMobile?"hidden md:flex":"",onQRCodeClick:P.label==="WeChat"?()=>b(!0):void 0},P.label))})]}),u.jsxs("div",{className:"transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(20px)",transitionDelay:"220ms"},children:[u.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"RESUME"}),u.jsxs("div",{className:"relative overflow-hidden rounded-2xl p-6 h-[calc(100%-35px)]",style:{background:"linear-gradient(135deg,rgba(0,240,200,0.08) 0%,rgba(124,111,247,0.05) 100%)",border:"1px solid rgba(0,240,200,0.12)"},children:[u.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{opacity:.04},children:[[15,30,45,60,75,90].map(P=>u.jsx("line",{x1:"0",y1:P,x2:"100",y2:P,stroke:"rgb(var(--c1))",strokeWidth:"0.5"},P)),[15,30,45,60,75,90].map(P=>u.jsx("line",{x1:P,y1:"0",x2:P,y2:"100",stroke:"rgb(var(--c1))",strokeWidth:"0.5"},P))]}),u.jsx("div",{className:"absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none",style:{background:"radial-gradient(circle,rgba(0,240,200,0.1) 0%,transparent 70%)"}}),u.jsxs("div",{className:"relative z-10",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 6px rgb(var(--c1))"}}),u.jsx("span",{className:"text-xs",style:{color:"rgb(var(--c1))",fontWeight:600,letterSpacing:"0.1em"},children:"RESUME · 简历"})]}),u.jsx("h3",{className:"mt-3 mb-1",style:{fontSize:"1.125rem",fontWeight:800,color:"#f0f4f8"},children:"曲维甲 · Vic Qu"}),u.jsx("p",{className:"text-xs mb-5",style:{color:"rgb(var(--c1))",fontWeight:500},children:"ENFJ · Full-Stack UI/UX Designer"}),u.jsx("p",{className:"mb-5",style:{fontSize:"0.8125rem",color:"rgba(255,255,255,0.4)",lineHeight:1.8},children:"PDF简历：个人信息、求职意向、教育背景、工作经历、技能清单等。"}),u.jsx("div",{className:"flex gap-6 mb-6",children:[["10+","年经验"],["60+","项目"],["20+","AI工具"]].map(([P,D])=>u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"1.125rem",fontWeight:800,color:"#f0f4f8",lineHeight:1.5},children:P}),u.jsx("div",{className:"text-xs mt-0.5",style:{color:"rgba(255,255,255,0.28)"},children:D})]},D))}),u.jsxs("div",{className:"flex flex-wrap gap-3",children:[u.jsxs("button",{onClick:()=>p(!0),className:"flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.03]",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",color:"var(--bg)",fontWeight:700,boxShadow:"0 0 20px rgba(var(--c1), 0.2)"},children:[u.jsx(hd,{size:13,style:{color:"var(--bg)"}})," ","下载 PDF"]}),u.jsxs("button",{className:"flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.02]",style:{border:"1px solid rgba(var(--c1), 0.3)",color:"rgb(var(--c1))",background:"rgba(var(--c1), 0.08)"},children:[u.jsx(sf,{size:13,style:{color:"rgb(var(--c1))"}})," ","在线版"]})]})]})]})]}),u.jsxs("div",{className:"transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(20px)",transitionDelay:"290ms"},children:[u.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"QUICK MESSAGE"}),u.jsxs("div",{className:"rounded-2xl p-5 mb-6",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)"},children:[u.jsx("textarea",{value:s,onChange:P=>a(P.target.value),rows:4,placeholder:"你好 Vic！我对你的设计作品很感兴趣，希望能进一步交流...",className:"w-full resize-none outline-none text-base mb-3",style:{background:"transparent",color:"#f0f4f8",lineHeight:1.7}}),u.jsx("button",{onClick:_,disabled:!s.trim(),className:"w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm transition-all duration-200",style:{background:s.trim()?l?"rgba(var(--c1), 0.1)":"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))":"rgba(255, 255, 255, 0.05)",color:s.trim()?l?"rgb(var(--c1))":"var(--bg)":"rgba(255, 255, 255, 0.3)",fontWeight:700,border:s.trim()?l?"1px solid rgba(var(--c1), 0.3)":"none":"1px solid rgba(255, 255, 255, 0.1)",cursor:s.trim()?"pointer":"not-allowed",opacity:s.trim()?1:.5},children:l?u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"✓"})," 已发送！"]}):u.jsxs(u.Fragment,{children:[u.jsx(Qv,{size:13,style:{color:s.trim()?"var(--bg)":"rgba(255, 255, 255, 0.3)"}})," ","发送消息"]})})]}),u.jsxs("div",{className:"rounded-xl p-4 flex items-start gap-3",style:{background:"rgba(0,240,200,0.04)",border:"1px solid rgba(0,240,200,0.1)"},children:[u.jsx("div",{className:"shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center",style:{background:"rgba(0,240,200,0.08)"},children:u.jsx("span",{className:"w-2.5 h-2.5 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 10px rgb(var(--c1))"}})}),u.jsxs("div",{children:[u.jsx("p",{style:{fontSize:"0.875rem",fontWeight:600,color:"#f0f4f8"},children:"目前接受新机会"}),u.jsxs("p",{className:"text-xs mt-0.5",style:{color:"rgba(255,255,255,0.3)",lineHeight:1.6},children:["全职设计师 · 项目合作 · 设计咨询",u.jsx("br",{}),"回复率 97% · 通常 24 小时内响应"]})]})]})]})]}),u.jsxs("div",{className:"pt-7 flex flex-wrap items-center justify-between gap-4",style:{borderTop:"1px solid rgba(255,255,255,0.04)"},children:[u.jsx("div",{className:"flex items-center gap-3",children:u.jsxs("p",{className:"text-xs",style:{color:"rgba(255,255,255,0.2)"},children:["© 2026 · Vic Qu · Designed by Figma"," ",u.jsx("span",{style:{color:"rgb(var(--c1))"},children:"&"}),"TRAE CN"]})}),u.jsx("p",{className:"text-xs",style:{color:"rgba(255,255,255,0.2)"},children:"React · Tailwind · Motion · AI-Augmented · Github"})]})]}),u.jsx(m0,{isOpen:d,onClose:()=>p(!1),onConfirm:w}),M&&u.jsx(qo,{children:u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(12px)"},onClick:()=>b(!1),children:u.jsxs("div",{className:"relative max-w-md w-full",onClick:P=>P.stopPropagation(),children:[u.jsx("button",{onClick:()=>b(!1),className:"absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"rgba(255, 255, 255, 0.9)"},children:u.jsx(Jr,{size:20})}),u.jsx("div",{className:"rounded-2xl overflow-hidden",style:{background:"white",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)"},children:u.jsx(tw,{src:nw,alt:"WeChat QR Code - 长按识别二维码",className:"w-full h-auto",style:{display:"block"}})}),u.jsx("p",{className:"text-center mt-4",style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"0.875rem"},children:"长按图片保存或识别二维码"})]})})})]})}function cw({autoPlay:r=!1,defaultTrackIndex:e=2}){const[t,s]=X.useState(r),[a,l]=X.useState(!1),[f,d]=X.useState(60),[p,m]=X.useState(0),[v,g]=X.useState(0),[y,M]=X.useState(!1),[b,w]=X.useState(e),[_,S]=X.useState("bars"),[P,D]=X.useState(new Array(64).fill(0)),T=X.useRef(null),B=X.useRef(null),O=[{name:"Deep Space Drift",artist:"Vic Qu · Ambient",url:"/assets/audio/SoundHelix-Song-1.mp3"},{name:"Neon Dreams",artist:"Vic Qu · Electronic",url:"/assets/audio/SoundHelix-Song-2.mp3"},{name:"Urban Flow",artist:"Vic Qu · Chill",url:"/assets/audio/SoundHelix-Song-3.mp3"}],L=O[b];X.useEffect(()=>{T.current&&(T.current.volume=f/100,T.current.muted=a)},[f,a]),X.useEffect(()=>{const te=T.current;if(!te)return;const oe=()=>m(te.currentTime),z=()=>g(te.duration),re=()=>{b<O.length-1?w(b+1):s(!1)};return te.addEventListener("timeupdate",oe),te.addEventListener("loadedmetadata",z),te.addEventListener("ended",re),()=>{te.removeEventListener("timeupdate",oe),te.removeEventListener("loadedmetadata",z),te.removeEventListener("ended",re)}},[b,O.length]),X.useEffect(()=>{const te=T.current;te&&r&&(te.load(),te.play().catch(oe=>{console.log("Autoplay prevented: ",oe),oe.name==="NotAllowedError"&&s(!1)}))},[]),X.useEffect(()=>{const te=T.current;te&&(te.load(),t&&te.play().catch(console.log))},[b,t]),X.useEffect(()=>{if(t){const te=()=>{D(Array.from({length:64},()=>Math.random()*.8+.2)),B.current=requestAnimationFrame(te)};te()}else B.current&&cancelAnimationFrame(B.current),D(new Array(64).fill(.1));return()=>{B.current&&cancelAnimationFrame(B.current)}},[t]);const U=async()=>{const te=T.current;if(te)if(t)te.pause(),s(!1);else try{await te.play(),s(!0)}catch(oe){console.log("播放失败：",oe)}},R=()=>M(!y),C=()=>l(!a),j=te=>{d(Number(te.target.value))},se=te=>{if(!T.current||!v)return;const oe=(te.clientX-te.currentTarget.getBoundingClientRect().left)/te.currentTarget.offsetWidth;T.current.currentTime=oe*v},J=()=>{b>0&&w(b-1)},fe=()=>{b<O.length-1&&w(b+1)},me=te=>{if(isNaN(te))return"0:00";const oe=Math.floor(te/60),z=Math.floor(te%60).toString().padStart(2,"0");return`${oe}:${z}`},ue=()=>{const te=["bars","wave","circle","spectrum"];S(te[(te.indexOf(_)+1)%te.length])},pe=()=>{const oe=Math.floor(P.length/32);switch(_){case"bars":return u.jsx("div",{className:"flex items-end justify-center gap-1 h-24 px-2",children:Array.from({length:32}).map((z,re)=>{const Le=P[re*oe]||.1,ne=t?Math.max(4,Le*80):4;return u.jsx("div",{className:"flex-1 rounded-t-full transition-all",style:{height:`${ne}px`,background:"linear-gradient(to top, rgb(var(--c1)), rgb(var(--c2)))"}},re)})});case"wave":return u.jsx("svg",{className:"w-full h-24",viewBox:"0 0 320 50",children:u.jsx("path",{d:"M0 30 "+Array.from({length:32}).map((z,re)=>`L${re/32*320} ${48-(P[re*oe]||0)*40}`).join(" "),fill:"none",stroke:"rgb(var(--c1))",strokeWidth:"1"})});case"circle":return u.jsx("div",{className:"relative w-full h-24 flex items-center justify-center",children:Array.from({length:24}).map((z,re)=>{const Le=P[Math.floor(re/24*P.length)]||.2,ne=t?20+Le*25:20;return u.jsx("div",{className:"absolute w-0.5 rounded-full",style:{height:`${ne}px`,background:"rgb(var(--c2))",transform:`rotate(${re*15}deg) translateY(-${ne/2}px)`}},re)})});default:return u.jsx("div",{className:"h-24 flex items-center justify-center text-white",children:"🎵"})}},H=()=>{switch(_){case"bars":return u.jsx(av,{size:14});case"wave":return u.jsx(Qx,{size:14});case"circle":return u.jsx(Qp,{size:14});default:return u.jsx(Qp,{size:14})}};return u.jsxs(u.Fragment,{children:[u.jsx("audio",{ref:T,src:L.url,preload:"auto"}),u.jsxs("div",{className:"fixed z-50 transition-all duration-500",style:{bottom:"calc(1.5rem / var(--screen-scale))",right:"calc(1.5rem / var(--screen-scale))",transform:"scale(var(--screen-scale))",transformOrigin:"bottom right"},children:[!y&&u.jsx("button",{onClick:R,className:"w-14 h-14 rounded-full flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:u.jsx(qp,{size:24,className:`text-white ${t?"animate-spin":""}`})}),y&&u.jsxs("div",{className:"w-[360px] p-5 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:u.jsx(qp,{size:20,className:`text-white ${t?"animate-spin":""}`})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("div",{className:"text-white text-sm truncate",children:L.name}),u.jsx("div",{className:"text-white/60 text-xs truncate",children:L.artist})]}),u.jsx("button",{onClick:R,className:"w-8 h-8 rounded-full hover:bg-white/10",children:u.jsx(u0,{size:18,className:"text-white/60"})})]}),u.jsxs("div",{className:"relative rounded-lg bg-white/5 mb-3",children:[pe(),u.jsx("button",{onClick:ue,className:"absolute top-2 right-2 w-7 h-7 rounded-full bg-black/30 flex items-center justify-center text-white",children:H()})]}),u.jsxs("div",{className:"mb-2",children:[u.jsx("div",{className:"h-1.5 bg-white/10 rounded-full cursor-pointer",onClick:se,children:u.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[rgb(var(--c1))] to-[rgb(var(--c2))]",style:{width:`${p/v*100||0}%`}})}),u.jsxs("div",{className:"flex justify-between text-xs text-white/50 mt-1",children:[u.jsx("span",{children:me(p)}),u.jsx("span",{children:me(v)})]})]}),u.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[u.jsx("button",{onClick:J,disabled:b===0,className:"w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center",children:u.jsx(Zv,{size:18,className:"text-white"})}),u.jsx("button",{onClick:U,className:"w-14 h-14 rounded-full flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:t?u.jsx(Uv,{size:20,className:"text-white"}):u.jsx(Hv,{size:20,className:"text-white ml-0.5"})}),u.jsx("button",{onClick:fe,disabled:b===O.length-1,className:"w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center",children:u.jsx($v,{size:18,className:"text-white"})})]}),u.jsx("style",{children:`
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
`}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{onClick:C,className:"w-8 h-8 rounded-full hover:bg-white/10",children:a?u.jsx(l1,{size:16,className:"text-white"}):u.jsx(o1,{size:16,className:"text-white"})}),u.jsx("input",{type:"range",min:"0",max:"100",value:f,onChange:j,className:"flex-1 h-1.5 rounded-full volume-slider",style:{background:`linear-gradient(to right, rgb(var(--c1)) ${f}%, rgba(255,255,255,0.2) ${f}%)`}}),u.jsxs("span",{className:"text-xs text-white w-10 text-right",children:[f,"%"]})]})]})]})]})}const r0="/assets/sprite_9900x4800_70-pwo8PaYC.png",ud=9,uw=8,s0=70,dw=400,Pl=.96,fw=(r,e,t)=>{const s=r.scrollTop,a=e-s,l=performance.now(),f=d=>{const p=d-l,m=Math.min(p/t,1),v=m*(2-m);r.scrollTop=s+a*v,m<1&&requestAnimationFrame(f)};requestAnimationFrame(f)},Bo=1100,dd=600;function hw(){const r=X.useRef(null),e=X.useRef(null),t=X.useRef(null),s=X.useRef(null),a=X.useRef(null),l=X.useRef(!1),[f,d]=X.useState(!1),[p,m]=X.useState(!1),[v,g]=X.useState(!1),y=X.useRef(0),M=()=>{const _=e.current,S=t.current;if(!_||!S)return;const P=window.innerWidth,D=P/Bo,T=dd*D;S.style.height=`${T}px`,S.style.width=`${P}px`,_.style.width=`${Bo*ud*D}px`,_.style.height=`${dd*uw*D}px`},b=_=>{const S=e.current;if(!S)return;y.current=_;const P=window.innerWidth,D=P/Bo,T=_%ud,B=Math.floor(_/ud),O=P/2-(T*Bo+Bo/2)*D,L=-(B*dd*D);S.style.transform=`translate3d(${O}px, ${L}px, 0)`};X.useEffect(()=>{const _=()=>{g(window.innerWidth<768)};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]),X.useEffect(()=>{const _=()=>{f&&(M(),b(y.current))};return window.addEventListener("resize",_),f&&(M(),b(0)),p||(document.body.style.overflow="hidden"),()=>{window.removeEventListener("resize",_),document.body.style.overflow="auto"}},[p,f]),X.useEffect(()=>{const _=new Image;_.src=r0,_.onload=()=>{d(!0)}},[]);const w=()=>{const _=r.current;!_||p||l.current||(window.requestAnimationFrame(()=>{const S=_.scrollTop,P=_.scrollHeight-_.clientHeight,D=Math.min(1,Math.max(0,S/P));if(a.current){const T=Math.max(0,1-D/.25);a.current.style.opacity=T.toString()}if(D<=Pl){const T=D/Pl,B=Math.floor(T*(s0-1));b(B),t.current&&(t.current.style.transform="scale(1)",t.current.style.opacity="1")}else{b(s0-1);const T=(D-Pl)/(1-Pl);if(t.current){const B=1-T*.5;t.current.style.transformOrigin="top left",t.current.style.transform=`scale(${B})`,t.current.style.opacity=(1-T).toString()}T>=.99&&m(!0)}l.current=!1}),l.current=!0)};return p?null:u.jsxs("div",{ref:r,onScroll:w,className:"scroll-video-overlay",style:{position:"fixed",inset:0,zIndex:99999,overflowY:"auto",overflowX:"hidden",background:"#000",scrollbarWidth:"none"},children:[u.jsx("style",{children:`
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
      `}),u.jsx("div",{style:{height:`${dw}vh`,position:"relative"},children:u.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",width:"100%",overflow:"hidden",background:"#000"},children:[u.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",transform:v?"translateY(-60px)":"translateY(0)",zIndex:2},children:u.jsx("div",{ref:t,style:{position:"relative",overflow:"hidden",willChange:"transform, opacity",transform:v?"translateY(-60px)":"translateY(0)"},children:u.jsx("img",{ref:e,src:r0,alt:"intro-sprite",style:{position:"absolute",top:0,left:0,maxWidth:"none",display:"block",willChange:"transform",pointerEvents:"none",opacity:f?1:0}})})}),u.jsx("div",{ref:a,style:{position:"absolute",inset:0,transition:"opacity 0.2s ease",zIndex:3,pointerEvents:"none"},children:u.jsx(Y0,{colors:["#00f0c8","#7c6ff7","#ff9ffc"],autoDemo:!0,autoSpeed:.5,autoIntensity:2.2})}),!f&&u.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#000",zIndex:100},children:[u.jsx("div",{className:"loading-text",style:{color:"white",fontSize:"12px",fontWeight:300,textTransform:"uppercase"},children:"Loading"}),u.jsx("div",{style:{width:"70px",height:"1.5px",background:"rgba(255,255,255,0.15)",marginTop:"6px",position:"relative",overflow:"hidden"},children:u.jsx("div",{className:"animate-shimmer-run",style:{position:"absolute",inset:0,background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)"}})})]}),u.jsx("div",{ref:s,style:{position:"absolute",bottom:"8vh",width:"100%",display:"flex",justifyContent:"center",zIndex:10},children:u.jsxs("button",{onClick:_=>{_.preventDefault();const S=r.current;if(!S)return;const P=S.scrollHeight-S.clientHeight;fw(S,P,2800)},className:`
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
              `,children:[u.jsx("div",{className:"scroll-mouse",children:u.jsx("div",{className:"scroll-dot"})}),u.jsx("span",{className:"relative z-10",children:"SCROLL"}),u.jsx(u0,{size:18,className:"animate-bounce transition-colors duration-300 relative z-10"})]})})]})})]})}function pw(){X.useEffect(()=>{const r=()=>{const s=window.innerWidth,a=1920;let l=1;s>a&&(l=Math.min(s/a,2.5)),document.documentElement.style.setProperty("--screen-scale",l.toString())};r();let e;const t=()=>{clearTimeout(e),e=window.setTimeout(r,200)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),clearTimeout(e)}},[])}function mw(){return pw(),u.jsxs(Hx,{children:[u.jsx(hw,{}),u.jsx(x1,{}),u.jsx(cw,{autoPlay:!0,defaultTrackIndex:2}),u.jsx("div",{className:"hidden md:block",children:u.jsx(Gx,{})}),u.jsx("div",{className:"min-h-screen screen-scaled-root",style:{background:"var(--bg, #05050a)",color:"#f0f4f8",msOverflowStyle:"none",scrollbarWidth:"none"},children:u.jsxs("main",{children:[u.jsx(Nb,{}),u.jsx(kb,{}),u.jsx(Fb,{}),u.jsx(qb,{}),u.jsx($b,{}),u.jsx(lw,{})]})})]})}Bx.createRoot(document.getElementById("root")).render(u.jsx(mw,{}));
