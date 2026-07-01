(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=t(a);fetch(a.href,c)}})();var Au={exports:{}},Lo={},Cu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function Gx(){if(zp)return gt;zp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),b=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function _(O,ne,Pe){this.props=O,this.context=ne,this.refs=w,this.updater=Pe||S}_.prototype.isReactComponent={},_.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=_.prototype;function R(O,ne,Pe){this.props=O,this.context=ne,this.refs=w,this.updater=Pe||S}var D=R.prototype=new y;D.constructor=R,M(D,_.prototype),D.isPureReactComponent=!0;var T=Array.isArray,z=Object.prototype.hasOwnProperty,U={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function B(O,ne,Pe){var re,ge={},we=null,Se=null;if(ne!=null)for(re in ne.ref!==void 0&&(Se=ne.ref),ne.key!==void 0&&(we=""+ne.key),ne)z.call(ne,re)&&!k.hasOwnProperty(re)&&(ge[re]=ne[re]);var Re=arguments.length-2;if(Re===1)ge.children=Pe;else if(1<Re){for(var Fe=Array(Re),Ke=0;Ke<Re;Ke++)Fe[Ke]=arguments[Ke+2];ge.children=Fe}if(O&&O.defaultProps)for(re in Re=O.defaultProps,Re)ge[re]===void 0&&(ge[re]=Re[re]);return{$$typeof:i,type:O,key:we,ref:Se,props:ge,_owner:U.current}}function P(O,ne){return{$$typeof:i,type:O.type,key:ne,ref:O.ref,props:O.props,_owner:O._owner}}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function j(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Pe){return ne[Pe]})}var se=/\/+/g;function te(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?j(""+O.key):ne.toString(36)}function fe(O,ne,Pe,re,ge){var we=typeof O;(we==="undefined"||we==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(we){case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case i:case e:Se=!0}}if(Se)return Se=O,ge=ge(Se),O=re===""?"."+te(Se,0):re,T(ge)?(Pe="",O!=null&&(Pe=O.replace(se,"$&/")+"/"),fe(ge,ne,Pe,"",function(Ke){return Ke})):ge!=null&&(A(ge)&&(ge=P(ge,Pe+(!ge.key||Se&&Se.key===ge.key?"":(""+ge.key).replace(se,"$&/")+"/")+O)),ne.push(ge)),1;if(Se=0,re=re===""?".":re+":",T(O))for(var Re=0;Re<O.length;Re++){we=O[Re];var Fe=re+te(we,Re);Se+=fe(we,ne,Pe,Fe,ge)}else if(Fe=v(O),typeof Fe=="function")for(O=Fe.call(O),Re=0;!(we=O.next()).done;)we=we.value,Fe=re+te(we,Re++),Se+=fe(we,ne,Pe,Fe,ge);else if(we==="object")throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Se}function me(O,ne,Pe){if(O==null)return O;var re=[],ge=0;return fe(O,re,"","",function(we){return ne.call(Pe,we,ge++)}),re}function de(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(Pe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Pe)},function(Pe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Pe)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var pe={current:null},H={transition:null},J={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:H,ReactCurrentOwner:U};function oe(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:me,forEach:function(O,ne,Pe){me(O,function(){ne.apply(this,arguments)},Pe)},count:function(O){var ne=0;return me(O,function(){ne++}),ne},toArray:function(O){return me(O,function(ne){return ne})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},gt.Component=_,gt.Fragment=t,gt.Profiler=a,gt.PureComponent=R,gt.StrictMode=s,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,gt.act=oe,gt.cloneElement=function(O,ne,Pe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var re=M({},O.props),ge=O.key,we=O.ref,Se=O._owner;if(ne!=null){if(ne.ref!==void 0&&(we=ne.ref,Se=U.current),ne.key!==void 0&&(ge=""+ne.key),O.type&&O.type.defaultProps)var Re=O.type.defaultProps;for(Fe in ne)z.call(ne,Fe)&&!k.hasOwnProperty(Fe)&&(re[Fe]=ne[Fe]===void 0&&Re!==void 0?Re[Fe]:ne[Fe])}var Fe=arguments.length-2;if(Fe===1)re.children=Pe;else if(1<Fe){Re=Array(Fe);for(var Ke=0;Ke<Fe;Ke++)Re[Ke]=arguments[Ke+2];re.children=Re}return{$$typeof:i,type:O.type,key:ge,ref:we,props:re,_owner:Se}},gt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},gt.createElement=B,gt.createFactory=function(O){var ne=B.bind(null,O);return ne.type=O,ne},gt.createRef=function(){return{current:null}},gt.forwardRef=function(O){return{$$typeof:d,render:O}},gt.isValidElement=A,gt.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:de}},gt.memo=function(O,ne){return{$$typeof:m,type:O,compare:ne===void 0?null:ne}},gt.startTransition=function(O){var ne=H.transition;H.transition={};try{O()}finally{H.transition=ne}},gt.unstable_act=oe,gt.useCallback=function(O,ne){return pe.current.useCallback(O,ne)},gt.useContext=function(O){return pe.current.useContext(O)},gt.useDebugValue=function(){},gt.useDeferredValue=function(O){return pe.current.useDeferredValue(O)},gt.useEffect=function(O,ne){return pe.current.useEffect(O,ne)},gt.useId=function(){return pe.current.useId()},gt.useImperativeHandle=function(O,ne,Pe){return pe.current.useImperativeHandle(O,ne,Pe)},gt.useInsertionEffect=function(O,ne){return pe.current.useInsertionEffect(O,ne)},gt.useLayoutEffect=function(O,ne){return pe.current.useLayoutEffect(O,ne)},gt.useMemo=function(O,ne){return pe.current.useMemo(O,ne)},gt.useReducer=function(O,ne,Pe){return pe.current.useReducer(O,ne,Pe)},gt.useRef=function(O){return pe.current.useRef(O)},gt.useState=function(O){return pe.current.useState(O)},gt.useSyncExternalStore=function(O,ne,Pe){return pe.current.useSyncExternalStore(O,ne,Pe)},gt.useTransition=function(){return pe.current.useTransition()},gt.version="18.3.1",gt}var Bp;function sf(){return Bp||(Bp=1,Cu.exports=Gx()),Cu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Vx(){if(jp)return Lo;jp=1;var i=sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var x,b={},v=null,S=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)s.call(p,x)&&!c.hasOwnProperty(x)&&(b[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)b[x]===void 0&&(b[x]=p[x]);return{$$typeof:e,type:d,key:v,ref:S,props:b,_owner:a.current}}return Lo.Fragment=t,Lo.jsx=f,Lo.jsxs=f,Lo}var Hp;function Wx(){return Hp||(Hp=1,Au.exports=Vx()),Au.exports}var l=Wx(),sl={},Ru={exports:{}},Cn={},Nu={exports:{}},Pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Xx(){return Gp||(Gp=1,(function(i){function e(H,J){var oe=H.length;H.push(J);e:for(;0<oe;){var O=oe-1>>>1,ne=H[O];if(0<a(ne,J))H[O]=J,H[oe]=ne,oe=O;else break e}}function t(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var J=H[0],oe=H.pop();if(oe!==J){H[0]=oe;e:for(var O=0,ne=H.length,Pe=ne>>>1;O<Pe;){var re=2*(O+1)-1,ge=H[re],we=re+1,Se=H[we];if(0>a(ge,oe))we<ne&&0>a(Se,ge)?(H[O]=Se,H[we]=oe,O=we):(H[O]=ge,H[re]=oe,O=re);else if(we<ne&&0>a(Se,oe))H[O]=Se,H[we]=oe,O=we;else break e}}return J}function a(H,J){var oe=H.sortIndex-J.sortIndex;return oe!==0?oe:H.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();i.unstable_now=function(){return f.now()-d}}var p=[],m=[],x=1,b=null,v=3,S=!1,M=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(H){for(var J=t(m);J!==null;){if(J.callback===null)s(m);else if(J.startTime<=H)s(m),J.sortIndex=J.expirationTime,e(p,J);else break;J=t(m)}}function T(H){if(w=!1,D(H),!M)if(t(p)!==null)M=!0,de(z);else{var J=t(m);J!==null&&pe(T,J.startTime-H)}}function z(H,J){M=!1,w&&(w=!1,y(B),B=-1),S=!0;var oe=v;try{for(D(J),b=t(p);b!==null&&(!(b.expirationTime>J)||H&&!j());){var O=b.callback;if(typeof O=="function"){b.callback=null,v=b.priorityLevel;var ne=O(b.expirationTime<=J);J=i.unstable_now(),typeof ne=="function"?b.callback=ne:b===t(p)&&s(p),D(J)}else s(p);b=t(p)}if(b!==null)var Pe=!0;else{var re=t(m);re!==null&&pe(T,re.startTime-J),Pe=!1}return Pe}finally{b=null,v=oe,S=!1}}var U=!1,k=null,B=-1,P=5,A=-1;function j(){return!(i.unstable_now()-A<P)}function se(){if(k!==null){var H=i.unstable_now();A=H;var J=!0;try{J=k(!0,H)}finally{J?te():(U=!1,k=null)}}else U=!1}var te;if(typeof R=="function")te=function(){R(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,me=fe.port2;fe.port1.onmessage=se,te=function(){me.postMessage(null)}}else te=function(){_(se,0)};function de(H){k=H,U||(U=!0,te())}function pe(H,J){B=_(function(){H(i.unstable_now())},J)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(H){H.callback=null},i.unstable_continueExecution=function(){M||S||(M=!0,de(z))},i.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return t(p)},i.unstable_next=function(H){switch(v){case 1:case 2:case 3:var J=3;break;default:J=v}var oe=v;v=J;try{return H()}finally{v=oe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(H,J){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var oe=v;v=H;try{return J()}finally{v=oe}},i.unstable_scheduleCallback=function(H,J,oe){var O=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,H){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=oe+ne,H={id:x++,callback:J,priorityLevel:H,startTime:oe,expirationTime:ne,sortIndex:-1},oe>O?(H.sortIndex=oe,e(m,H),t(p)===null&&H===t(m)&&(w?(y(B),B=-1):w=!0,pe(T,oe-O))):(H.sortIndex=ne,e(p,H),M||S||(M=!0,de(z))),H},i.unstable_shouldYield=j,i.unstable_wrapCallback=function(H){var J=v;return function(){var oe=v;v=J;try{return H.apply(this,arguments)}finally{v=oe}}}})(Pu)),Pu}var Vp;function qx(){return Vp||(Vp=1,Nu.exports=Xx()),Nu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Yx(){if(Wp)return Cn;Wp=1;var i=sf(),e=qx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(n,r){f(n,r),f(n+"Capture",r)}function f(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},b={};function v(n){return p.call(b,n)?!0:p.call(x,n)?!1:m.test(n)?b[n]=!0:(x[n]=!0,!1)}function S(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,o,u){if(r===null||typeof r>"u"||S(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,o,u,h,g,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,R);_[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,R);_[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,R);_[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,r,o,u){var h=_.hasOwnProperty(r)?_[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,o,h,u)&&(o=null),u||h===null?v(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var T=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),U=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),j=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),H=Symbol.iterator;function J(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,O;function ne(n){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var Pe=!1;function re(n,r){if(!n||Pe)return"";Pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ae){var u=ae}Reflect.construct(n,[],r)}else{try{r.call()}catch(ae){u=ae}n.call(r.prototype)}else{try{throw Error()}catch(ae){u=ae}n()}}catch(ae){if(ae&&u&&typeof ae.stack=="string"){for(var h=ae.stack.split(`
`),g=u.stack.split(`
`),E=h.length-1,F=g.length-1;1<=E&&0<=F&&h[E]!==g[F];)F--;for(;1<=E&&0<=F;E--,F--)if(h[E]!==g[F]){if(E!==1||F!==1)do if(E--,F--,0>F||h[E]!==g[F]){var G=`
`+h[E].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=E&&0<=F);break}}}finally{Pe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ne(n):""}function ge(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=re(n.type,!1),n;case 11:return n=re(n.type.render,!1),n;case 1:return n=re(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case U:return"Portal";case P:return"Profiler";case B:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case se:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case me:return r=n.displayName||null,r!==null?r:we(n.type)||"Memo";case de:r=n._payload,n=n._init;try{return we(n(r))}catch{}}return null}function Se(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(r);case 8:return r===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ke(n){var r=Fe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,g.call(this,E)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function At(n){n._valueTracker||(n._valueTracker=Ke(n))}function pt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=Fe(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Q(n,r){var o=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function nn(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Re(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ht(n,r){r=r.checked,r!=null&&D(n,"checked",r,!1)}function dt(n,r){ht(n,r);var o=Re(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?bt(n,r.type,o):r.hasOwnProperty("defaultValue")&&bt(n,r.type,Re(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ye(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function bt(n,r,o){(r!=="number"||Nt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Qe=Array.isArray;function I(n,r,o,u){if(n=n.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=r.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Re(o),r=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function C(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function q(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(Qe(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Re(o)}}function L(n,r){var o=Re(r.value),u=Re(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Z(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function $(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Te(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?$(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,h)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function at(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(_e).forEach(function(n){Oe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),_e[r]=_e[n]})});function $e(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||_e.hasOwnProperty(n)&&_e[n]?(""+r).trim():r+"px"}function tt(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=$e(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var Be=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(n,r){if(r){if(Be[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function st(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,he=null,xe=null;function Ie(n){if(n=yo(n)){if(typeof De!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Sa(r),De(n.stateNode,n.type,r))}}function Le(n){he?xe?xe.push(n):xe=[n]:he=n}function ot(){if(he){var n=he,r=xe;if(xe=he=null,Ie(n),r)for(n=0;n<r.length;n++)Ie(r[n])}}function Lt(n,r){return n(r)}function Xt(){}var yt=!1;function _n(n,r,o){if(yt)return n(r,o);yt=!0;try{return Lt(n,r,o)}finally{yt=!1,(he!==null||xe!==null)&&(Xt(),ot())}}function pn(n,r){var o=n.stateNode;if(o===null)return null;var u=Sa(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var ts=!1;if(d)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){ts=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{ts=!1}function br(n,r,o,u,h,g,E,F,G){var ae=Array.prototype.slice.call(arguments,3);try{r.apply(o,ae)}catch(ye){this.onError(ye)}}var Mr=!1,Ti=null,Ai=!1,Yr=null,ea={onError:function(n){Mr=!0,Ti=n}};function ns(n,r,o,u,h,g,E,F,G){Mr=!1,Ti=null,br.apply(ea,arguments)}function ta(n,r,o,u,h,g,E,F,G){if(ns.apply(this,arguments),Mr){if(Mr){var ae=Ti;Mr=!1,Ti=null}else throw Error(t(198));Ai||(Ai=!0,Yr=ae)}}function pr(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function na(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function ra(n){if(pr(n)!==n)throw Error(t(188))}function Ql(n){var r=n.alternate;if(!r){if(r=pr(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return ra(h),n;if(g===u)return ra(h),r;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=g;else{for(var E=!1,F=h.child;F;){if(F===o){E=!0,o=h,u=g;break}if(F===u){E=!0,u=h,o=g;break}F=F.sibling}if(!E){for(F=g.child;F;){if(F===o){E=!0,o=g,u=h;break}if(F===u){E=!0,u=g,o=h;break}F=F.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function N(n){return n=Ql(n),n!==null?Y(n):null}function Y(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Y(n);if(r!==null)return r;n=n.sibling}return null}var le=e.unstable_scheduleCallback,ce=e.unstable_cancelCallback,K=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Ee=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,nt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,We=e.unstable_LowPriority,vt=e.unstable_IdlePriority,Et=null,xt=null;function on(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Mt,qe=Math.log,$n=Math.LN2;function Mt(n){return n>>>=0,n===0?32:31-(qe(n)/$n|0)|0}var an=64,er=4194304;function qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mr(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,E=o&268435455;if(E!==0){var F=E&~h;F!==0?u=qt(F):(g&=E,g!==0&&(u=qt(g)))}else E=o&~h,E!==0?u=qt(E):g!==0&&(u=qt(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-lt(r),h=1<<o,u|=n[o],r&=~h;return u}function Dt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jn(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var E=31-lt(g),F=1<<E,G=h[E];G===-1?((F&o)===0||(F&u)!==0)&&(h[E]=Dt(F,r)):G<=r&&(n.expiredLanes|=F),g&=~F}}function wr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function mn(){var n=an;return an<<=1,(an&4194240)===0&&(an=64),n}function Hn(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function bn(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-lt(r),n[r]=o}function ia(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-lt(o),g=1<<h;r[h]=0,u[h]=-1,n[h]=-1,o&=~g}}function Kl(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-lt(o),h=1<<u;h&r|n[u]&r&&(n[u]|=r),o&=~h}}var Rt=0;function xf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var vf,Zl,yf,Sf,_f,Jl=!1,sa=[],Qr=null,Kr=null,Zr=null,no=new Map,ro=new Map,Jr=[],dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bf(n,r){switch(n){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":no.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(r.pointerId)}}function io(n,r,o,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},r!==null&&(r=yo(r),r!==null&&Zl(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function fg(n,r,o,u,h){switch(r){case"focusin":return Qr=io(Qr,n,r,o,u,h),!0;case"dragenter":return Kr=io(Kr,n,r,o,u,h),!0;case"mouseover":return Zr=io(Zr,n,r,o,u,h),!0;case"pointerover":var g=h.pointerId;return no.set(g,io(no.get(g)||null,n,r,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,ro.set(g,io(ro.get(g)||null,n,r,o,u,h)),!0}return!1}function Mf(n){var r=Ci(n.target);if(r!==null){var o=pr(r);if(o!==null){if(r=o.tag,r===13){if(r=na(o),r!==null){n.blockedOn=r,_f(n.priority,function(){yf(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function oa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=ec(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ct=u,o.target.dispatchEvent(u),Ct=null}else return r=yo(o),r!==null&&Zl(r),n.blockedOn=o,!1;r.shift()}return!0}function wf(n,r,o){oa(n)&&o.delete(r)}function hg(){Jl=!1,Qr!==null&&oa(Qr)&&(Qr=null),Kr!==null&&oa(Kr)&&(Kr=null),Zr!==null&&oa(Zr)&&(Zr=null),no.forEach(wf),ro.forEach(wf)}function so(n,r){n.blockedOn===r&&(n.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hg)))}function oo(n){function r(h){return so(h,n)}if(0<sa.length){so(sa[0],n);for(var o=1;o<sa.length;o++){var u=sa[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Qr!==null&&so(Qr,n),Kr!==null&&so(Kr,n),Zr!==null&&so(Zr,n),no.forEach(r),ro.forEach(r),o=0;o<Jr.length;o++)u=Jr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Jr.length&&(o=Jr[0],o.blockedOn===null);)Mf(o),o.blockedOn===null&&Jr.shift()}var rs=T.ReactCurrentBatchConfig,aa=!0;function pg(n,r,o,u){var h=Rt,g=rs.transition;rs.transition=null;try{Rt=1,$l(n,r,o,u)}finally{Rt=h,rs.transition=g}}function mg(n,r,o,u){var h=Rt,g=rs.transition;rs.transition=null;try{Rt=4,$l(n,r,o,u)}finally{Rt=h,rs.transition=g}}function $l(n,r,o,u){if(aa){var h=ec(n,r,o,u);if(h===null)xc(n,r,u,la,o),bf(n,u);else if(fg(h,n,r,o,u))u.stopPropagation();else if(bf(n,u),r&4&&-1<dg.indexOf(n)){for(;h!==null;){var g=yo(h);if(g!==null&&vf(g),g=ec(n,r,o,u),g===null&&xc(n,r,u,la,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else xc(n,r,u,null,o)}}var la=null;function ec(n,r,o,u){if(la=null,n=X(u),n=Ci(n),n!==null)if(r=pr(n),r===null)n=null;else if(o=r.tag,o===13){if(n=na(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return la=n,null}function Ef(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case He:return 1;case nt:return 4;case it:case We:return 16;case vt:return 536870912;default:return 16}default:return 16}}var $r=null,tc=null,ca=null;function Tf(){if(ca)return ca;var n,r=tc,o=r.length,u,h="value"in $r?$r.value:$r.textContent,g=h.length;for(n=0;n<o&&r[n]===h[n];n++);var E=o-n;for(u=1;u<=E&&r[o-u]===h[g-u];u++);return ca=h.slice(n,1<u?1-u:void 0)}function ua(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function da(){return!0}function Af(){return!1}function Ln(n){function r(o,u,h,g,E){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(o=n[F],this[F]=o?o(g):g[F]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?da:Af,this.isPropagationStopped=Af,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),r}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=Ln(is),ao=oe({},is,{view:0,detail:0}),gg=Ln(ao),rc,ic,lo,fa=oe({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==lo&&(lo&&n.type==="mousemove"?(rc=n.screenX-lo.screenX,ic=n.screenY-lo.screenY):ic=rc=0,lo=n),rc)},movementY:function(n){return"movementY"in n?n.movementY:ic}}),Cf=Ln(fa),xg=oe({},fa,{dataTransfer:0}),vg=Ln(xg),yg=oe({},ao,{relatedTarget:0}),sc=Ln(yg),Sg=oe({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),_g=Ln(Sg),bg=oe({},is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Mg=Ln(bg),wg=oe({},is,{data:0}),Rf=Ln(wg),Eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cg(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Ag[n])?!!r[n]:!1}function oc(){return Cg}var Rg=oe({},ao,{key:function(n){if(n.key){var r=Eg[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ua(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Tg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(n){return n.type==="keypress"?ua(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ua(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ng=Ln(Rg),Pg=oe({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=Ln(Pg),Dg=oe({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),kg=Ln(Dg),Lg=oe({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=Ln(Lg),Ug=oe({},fa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Fg=Ln(Ug),Og=[9,13,27,32],ac=d&&"CompositionEvent"in window,co=null;d&&"documentMode"in document&&(co=document.documentMode);var zg=d&&"TextEvent"in window&&!co,Pf=d&&(!ac||co&&8<co&&11>=co),Df=" ",kf=!1;function Lf(n,r){switch(n){case"keyup":return Og.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ss=!1;function Bg(n,r){switch(n){case"compositionend":return If(r);case"keypress":return r.which!==32?null:(kf=!0,Df);case"textInput":return n=r.data,n===Df&&kf?null:n;default:return null}}function jg(n,r){if(ss)return n==="compositionend"||!ac&&Lf(n,r)?(n=Tf(),ca=tc=$r=null,ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Pf&&r.locale!=="ko"?null:r.data;default:return null}}var Hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Hg[n.type]:r==="textarea"}function Ff(n,r,o,u){Le(u),r=xa(r,"onChange"),0<r.length&&(o=new nc("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var uo=null,fo=null;function Gg(n){th(n,0)}function ha(n){var r=us(n);if(pt(r))return n}function Vg(n,r){if(n==="change")return r}var Of=!1;if(d){var lc;if(d){var cc="oninput"in document;if(!cc){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),cc=typeof zf.oninput=="function"}lc=cc}else lc=!1;Of=lc&&(!document.documentMode||9<document.documentMode)}function Bf(){uo&&(uo.detachEvent("onpropertychange",jf),fo=uo=null)}function jf(n){if(n.propertyName==="value"&&ha(fo)){var r=[];Ff(r,fo,n,X(n)),_n(Gg,r)}}function Wg(n,r,o){n==="focusin"?(Bf(),uo=r,fo=o,uo.attachEvent("onpropertychange",jf)):n==="focusout"&&Bf()}function Xg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ha(fo)}function qg(n,r){if(n==="click")return ha(r)}function Yg(n,r){if(n==="input"||n==="change")return ha(r)}function Qg(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var tr=typeof Object.is=="function"?Object.is:Qg;function ho(n,r){if(tr(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!p.call(r,h)||!tr(n[h],r[h]))return!1}return!0}function Hf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gf(n,r){var o=Hf(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Hf(o)}}function Vf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Vf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Wf(){for(var n=window,r=Nt();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Nt(n.document)}return r}function uc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Kg(n){var r=Wf(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Vf(o.ownerDocument.documentElement,o)){if(u!==null&&uc(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Gf(o,g);var E=Gf(o,u);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(r),n.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Zg=d&&"documentMode"in document&&11>=document.documentMode,os=null,dc=null,po=null,fc=!1;function Xf(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;fc||os==null||os!==Nt(u)||(u=os,"selectionStart"in u&&uc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),po&&ho(po,u)||(po=u,u=xa(dc,"onSelect"),0<u.length&&(r=new nc("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=os)))}function pa(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var as={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},hc={},qf={};d&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ma(n){if(hc[n])return hc[n];if(!as[n])return n;var r=as[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in qf)return hc[n]=r[o];return n}var Yf=ma("animationend"),Qf=ma("animationiteration"),Kf=ma("animationstart"),Zf=ma("transitionend"),Jf=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(n,r){Jf.set(n,r),c(r,[n])}for(var pc=0;pc<$f.length;pc++){var mc=$f[pc],Jg=mc.toLowerCase(),$g=mc[0].toUpperCase()+mc.slice(1);ei(Jg,"on"+$g)}ei(Yf,"onAnimationEnd"),ei(Qf,"onAnimationIteration"),ei(Kf,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(Zf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function eh(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,ta(u,r,void 0,n),n.currentTarget=null}function th(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var E=u.length-1;0<=E;E--){var F=u[E],G=F.instance,ae=F.currentTarget;if(F=F.listener,G!==g&&h.isPropagationStopped())break e;eh(h,F,ae),g=G}else for(E=0;E<u.length;E++){if(F=u[E],G=F.instance,ae=F.currentTarget,F=F.listener,G!==g&&h.isPropagationStopped())break e;eh(h,F,ae),g=G}}}if(Ai)throw n=Yr,Ai=!1,Yr=null,n}function It(n,r){var o=r[Mc];o===void 0&&(o=r[Mc]=new Set);var u=n+"__bubble";o.has(u)||(nh(r,n,2,!1),o.add(u))}function gc(n,r,o){var u=0;r&&(u|=4),nh(o,n,u,r)}var ga="_reactListening"+Math.random().toString(36).slice(2);function go(n){if(!n[ga]){n[ga]=!0,s.forEach(function(o){o!=="selectionchange"&&(ex.has(o)||gc(o,!1,n),gc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ga]||(r[ga]=!0,gc("selectionchange",!1,r))}}function nh(n,r,o,u){switch(Ef(r)){case 1:var h=pg;break;case 4:h=mg;break;default:h=$l}o=h.bind(null,r,o,n),h=void 0,!ts||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,o,{capture:!0,passive:h}):n.addEventListener(r,o,!0):h!==void 0?n.addEventListener(r,o,{passive:h}):n.addEventListener(r,o,!1)}function xc(n,r,o,u,h){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var F=u.stateNode.containerInfo;if(F===h||F.nodeType===8&&F.parentNode===h)break;if(E===4)for(E=u.return;E!==null;){var G=E.tag;if((G===3||G===4)&&(G=E.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;E=E.return}for(;F!==null;){if(E=Ci(F),E===null)return;if(G=E.tag,G===5||G===6){u=g=E;continue e}F=F.parentNode}}u=u.return}_n(function(){var ae=g,ye=X(o),Me=[];e:{var ve=Jf.get(n);if(ve!==void 0){var Ue=nc,je=n;switch(n){case"keypress":if(ua(o)===0)break e;case"keydown":case"keyup":Ue=Ng;break;case"focusin":je="focus",Ue=sc;break;case"focusout":je="blur",Ue=sc;break;case"beforeblur":case"afterblur":Ue=sc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=kg;break;case Yf:case Qf:case Kf:Ue=_g;break;case Zf:Ue=Ig;break;case"scroll":Ue=gg;break;case"wheel":Ue=Fg;break;case"copy":case"cut":case"paste":Ue=Mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Nf}var Ge=(r&4)!==0,Ht=!Ge&&n==="scroll",ee=Ge?ve!==null?ve+"Capture":null:ve;Ge=[];for(var W=ae,ie;W!==null;){ie=W;var Ae=ie.stateNode;if(ie.tag===5&&Ae!==null&&(ie=Ae,ee!==null&&(Ae=pn(W,ee),Ae!=null&&Ge.push(xo(W,Ae,ie)))),Ht)break;W=W.return}0<Ge.length&&(ve=new Ue(ve,je,null,o,ye),Me.push({event:ve,listeners:Ge}))}}if((r&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ve&&o!==Ct&&(je=o.relatedTarget||o.fromElement)&&(Ci(je)||je[Er]))break e;if((Ue||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(je=o.relatedTarget||o.toElement,Ue=ae,je=je?Ci(je):null,je!==null&&(Ht=pr(je),je!==Ht||je.tag!==5&&je.tag!==6)&&(je=null)):(Ue=null,je=ae),Ue!==je)){if(Ge=Cf,Ae="onMouseLeave",ee="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=Nf,Ae="onPointerLeave",ee="onPointerEnter",W="pointer"),Ht=Ue==null?ve:us(Ue),ie=je==null?ve:us(je),ve=new Ge(Ae,W+"leave",Ue,o,ye),ve.target=Ht,ve.relatedTarget=ie,Ae=null,Ci(ye)===ae&&(Ge=new Ge(ee,W+"enter",je,o,ye),Ge.target=ie,Ge.relatedTarget=Ht,Ae=Ge),Ht=Ae,Ue&&je)t:{for(Ge=Ue,ee=je,W=0,ie=Ge;ie;ie=ls(ie))W++;for(ie=0,Ae=ee;Ae;Ae=ls(Ae))ie++;for(;0<W-ie;)Ge=ls(Ge),W--;for(;0<ie-W;)ee=ls(ee),ie--;for(;W--;){if(Ge===ee||ee!==null&&Ge===ee.alternate)break t;Ge=ls(Ge),ee=ls(ee)}Ge=null}else Ge=null;Ue!==null&&rh(Me,ve,Ue,Ge,!1),je!==null&&Ht!==null&&rh(Me,Ht,je,Ge,!0)}}e:{if(ve=ae?us(ae):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var Xe=Vg;else if(Uf(ve))if(Of)Xe=Yg;else{Xe=Xg;var Ze=Wg}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Xe=qg);if(Xe&&(Xe=Xe(n,ae))){Ff(Me,Xe,o,ye);break e}Ze&&Ze(n,ve,ae),n==="focusout"&&(Ze=ve._wrapperState)&&Ze.controlled&&ve.type==="number"&&bt(ve,"number",ve.value)}switch(Ze=ae?us(ae):window,n){case"focusin":(Uf(Ze)||Ze.contentEditable==="true")&&(os=Ze,dc=ae,po=null);break;case"focusout":po=dc=os=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Xf(Me,o,ye);break;case"selectionchange":if(Zg)break;case"keydown":case"keyup":Xf(Me,o,ye)}var Je;if(ac)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ss?Lf(n,o)&&(rt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(Pf&&o.locale!=="ko"&&(ss||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ss&&(Je=Tf()):($r=ye,tc="value"in $r?$r.value:$r.textContent,ss=!0)),Ze=xa(ae,rt),0<Ze.length&&(rt=new Rf(rt,n,null,o,ye),Me.push({event:rt,listeners:Ze}),Je?rt.data=Je:(Je=If(o),Je!==null&&(rt.data=Je)))),(Je=zg?Bg(n,o):jg(n,o))&&(ae=xa(ae,"onBeforeInput"),0<ae.length&&(ye=new Rf("onBeforeInput","beforeinput",null,o,ye),Me.push({event:ye,listeners:ae}),ye.data=Je))}th(Me,r)})}function xo(n,r,o){return{instance:n,listener:r,currentTarget:o}}function xa(n,r){for(var o=r+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=pn(n,o),g!=null&&u.unshift(xo(n,g,h)),g=pn(n,r),g!=null&&u.push(xo(n,g,h))),n=n.return}return u}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function rh(n,r,o,u,h){for(var g=r._reactName,E=[];o!==null&&o!==u;){var F=o,G=F.alternate,ae=F.stateNode;if(G!==null&&G===u)break;F.tag===5&&ae!==null&&(F=ae,h?(G=pn(o,g),G!=null&&E.unshift(xo(o,G,F))):h||(G=pn(o,g),G!=null&&E.push(xo(o,G,F)))),o=o.return}E.length!==0&&n.push({event:r,listeners:E})}var tx=/\r\n?/g,nx=/\u0000|\uFFFD/g;function ih(n){return(typeof n=="string"?n:""+n).replace(tx,`
`).replace(nx,"")}function va(n,r,o){if(r=ih(r),ih(n)!==r&&o)throw Error(t(425))}function ya(){}var vc=null,yc=null;function Sc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,ix=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(n){return sh.resolve(null).then(n).catch(sx)}:_c;function sx(n){setTimeout(function(){throw n})}function bc(n,r){var o=r,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),oo(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);oo(r)}function ti(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function oh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var cs=Math.random().toString(36).slice(2),gr="__reactFiber$"+cs,vo="__reactProps$"+cs,Er="__reactContainer$"+cs,Mc="__reactEvents$"+cs,ox="__reactListeners$"+cs,ax="__reactHandles$"+cs;function Ci(n){var r=n[gr];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Er]||o[gr]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=oh(n);n!==null;){if(o=n[gr])return o;n=oh(n)}return r}n=o,o=n.parentNode}return null}function yo(n){return n=n[gr]||n[Er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Sa(n){return n[vo]||null}var wc=[],ds=-1;function ni(n){return{current:n}}function Ut(n){0>ds||(n.current=wc[ds],wc[ds]=null,ds--)}function kt(n,r){ds++,wc[ds]=n.current,n.current=r}var ri={},ln=ni(ri),Mn=ni(!1),Ri=ri;function fs(n,r){var o=n.type.contextTypes;if(!o)return ri;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=r[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function wn(n){return n=n.childContextTypes,n!=null}function _a(){Ut(Mn),Ut(ln)}function ah(n,r,o){if(ln.current!==ri)throw Error(t(168));kt(ln,r),kt(Mn,o)}function lh(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(t(108,Se(n)||"Unknown",h));return oe({},o,u)}function ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ri,Ri=ln.current,kt(ln,n),kt(Mn,Mn.current),!0}function ch(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=lh(n,r,Ri),u.__reactInternalMemoizedMergedChildContext=n,Ut(Mn),Ut(ln),kt(ln,n)):Ut(Mn),kt(Mn,o)}var Tr=null,Ma=!1,Ec=!1;function uh(n){Tr===null?Tr=[n]:Tr.push(n)}function lx(n){Ma=!0,uh(n)}function ii(){if(!Ec&&Tr!==null){Ec=!0;var n=0,r=Rt;try{var o=Tr;for(Rt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Tr=null,Ma=!1}catch(h){throw Tr!==null&&(Tr=Tr.slice(n+1)),le(He,ii),h}finally{Rt=r,Ec=!1}}return null}var hs=[],ps=0,wa=null,Ea=0,Gn=[],Vn=0,Ni=null,Ar=1,Cr="";function Pi(n,r){hs[ps++]=Ea,hs[ps++]=wa,wa=n,Ea=r}function dh(n,r,o){Gn[Vn++]=Ar,Gn[Vn++]=Cr,Gn[Vn++]=Ni,Ni=n;var u=Ar;n=Cr;var h=32-lt(u)-1;u&=~(1<<h),o+=1;var g=32-lt(r)+h;if(30<g){var E=h-h%5;g=(u&(1<<E)-1).toString(32),u>>=E,h-=E,Ar=1<<32-lt(r)+h|o<<h|u,Cr=g+n}else Ar=1<<g|o<<h|u,Cr=n}function Tc(n){n.return!==null&&(Pi(n,1),dh(n,1,0))}function Ac(n){for(;n===wa;)wa=hs[--ps],hs[ps]=null,Ea=hs[--ps],hs[ps]=null;for(;n===Ni;)Ni=Gn[--Vn],Gn[Vn]=null,Cr=Gn[--Vn],Gn[Vn]=null,Ar=Gn[--Vn],Gn[Vn]=null}var In=null,Un=null,Ft=!1,nr=null;function fh(n,r){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function hh(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,In=n,Un=ti(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,In=n,Un=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Ni!==null?{id:Ar,overflow:Cr}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,In=n,Un=null,!0):!1;default:return!1}}function Cc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Rc(n){if(Ft){var r=Un;if(r){var o=r;if(!hh(n,r)){if(Cc(n))throw Error(t(418));r=ti(o.nextSibling);var u=In;r&&hh(n,r)?fh(u,o):(n.flags=n.flags&-4097|2,Ft=!1,In=n)}}else{if(Cc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,In=n}}}function ph(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;In=n}function Ta(n){if(n!==In)return!1;if(!Ft)return ph(n),Ft=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Sc(n.type,n.memoizedProps)),r&&(r=Un)){if(Cc(n))throw mh(),Error(t(418));for(;r;)fh(n,r),r=ti(r.nextSibling)}if(ph(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){Un=ti(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}Un=null}}else Un=In?ti(n.stateNode.nextSibling):null;return!0}function mh(){for(var n=Un;n;)n=ti(n.nextSibling)}function ms(){Un=In=null,Ft=!1}function Nc(n){nr===null?nr=[n]:nr.push(n)}var cx=T.ReactCurrentBatchConfig;function So(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(E){var F=h.refs;E===null?delete F[g]:F[g]=E},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Aa(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function gh(n){var r=n._init;return r(n._payload)}function xh(n){function r(ee,W){if(n){var ie=ee.deletions;ie===null?(ee.deletions=[W],ee.flags|=16):ie.push(W)}}function o(ee,W){if(!n)return null;for(;W!==null;)r(ee,W),W=W.sibling;return null}function u(ee,W){for(ee=new Map;W!==null;)W.key!==null?ee.set(W.key,W):ee.set(W.index,W),W=W.sibling;return ee}function h(ee,W){return ee=fi(ee,W),ee.index=0,ee.sibling=null,ee}function g(ee,W,ie){return ee.index=ie,n?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<W?(ee.flags|=2,W):ie):(ee.flags|=2,W)):(ee.flags|=1048576,W)}function E(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function F(ee,W,ie,Ae){return W===null||W.tag!==6?(W=_u(ie,ee.mode,Ae),W.return=ee,W):(W=h(W,ie),W.return=ee,W)}function G(ee,W,ie,Ae){var Xe=ie.type;return Xe===k?ye(ee,W,ie.props.children,Ae,ie.key):W!==null&&(W.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===de&&gh(Xe)===W.type)?(Ae=h(W,ie.props),Ae.ref=So(ee,W,ie),Ae.return=ee,Ae):(Ae=Za(ie.type,ie.key,ie.props,null,ee.mode,Ae),Ae.ref=So(ee,W,ie),Ae.return=ee,Ae)}function ae(ee,W,ie,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=bu(ie,ee.mode,Ae),W.return=ee,W):(W=h(W,ie.children||[]),W.return=ee,W)}function ye(ee,W,ie,Ae,Xe){return W===null||W.tag!==7?(W=zi(ie,ee.mode,Ae,Xe),W.return=ee,W):(W=h(W,ie),W.return=ee,W)}function Me(ee,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number")return W=_u(""+W,ee.mode,ie),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case z:return ie=Za(W.type,W.key,W.props,null,ee.mode,ie),ie.ref=So(ee,null,W),ie.return=ee,ie;case U:return W=bu(W,ee.mode,ie),W.return=ee,W;case de:var Ae=W._init;return Me(ee,Ae(W._payload),ie)}if(Qe(W)||J(W))return W=zi(W,ee.mode,ie,null),W.return=ee,W;Aa(ee,W)}return null}function ve(ee,W,ie,Ae){var Xe=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Xe!==null?null:F(ee,W,""+ie,Ae);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case z:return ie.key===Xe?G(ee,W,ie,Ae):null;case U:return ie.key===Xe?ae(ee,W,ie,Ae):null;case de:return Xe=ie._init,ve(ee,W,Xe(ie._payload),Ae)}if(Qe(ie)||J(ie))return Xe!==null?null:ye(ee,W,ie,Ae,null);Aa(ee,ie)}return null}function Ue(ee,W,ie,Ae,Xe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ee=ee.get(ie)||null,F(W,ee,""+Ae,Xe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case z:return ee=ee.get(Ae.key===null?ie:Ae.key)||null,G(W,ee,Ae,Xe);case U:return ee=ee.get(Ae.key===null?ie:Ae.key)||null,ae(W,ee,Ae,Xe);case de:var Ze=Ae._init;return Ue(ee,W,ie,Ze(Ae._payload),Xe)}if(Qe(Ae)||J(Ae))return ee=ee.get(ie)||null,ye(W,ee,Ae,Xe,null);Aa(W,Ae)}return null}function je(ee,W,ie,Ae){for(var Xe=null,Ze=null,Je=W,rt=W=0,en=null;Je!==null&&rt<ie.length;rt++){Je.index>rt?(en=Je,Je=null):en=Je.sibling;var wt=ve(ee,Je,ie[rt],Ae);if(wt===null){Je===null&&(Je=en);break}n&&Je&&wt.alternate===null&&r(ee,Je),W=g(wt,W,rt),Ze===null?Xe=wt:Ze.sibling=wt,Ze=wt,Je=en}if(rt===ie.length)return o(ee,Je),Ft&&Pi(ee,rt),Xe;if(Je===null){for(;rt<ie.length;rt++)Je=Me(ee,ie[rt],Ae),Je!==null&&(W=g(Je,W,rt),Ze===null?Xe=Je:Ze.sibling=Je,Ze=Je);return Ft&&Pi(ee,rt),Xe}for(Je=u(ee,Je);rt<ie.length;rt++)en=Ue(Je,ee,rt,ie[rt],Ae),en!==null&&(n&&en.alternate!==null&&Je.delete(en.key===null?rt:en.key),W=g(en,W,rt),Ze===null?Xe=en:Ze.sibling=en,Ze=en);return n&&Je.forEach(function(hi){return r(ee,hi)}),Ft&&Pi(ee,rt),Xe}function Ge(ee,W,ie,Ae){var Xe=J(ie);if(typeof Xe!="function")throw Error(t(150));if(ie=Xe.call(ie),ie==null)throw Error(t(151));for(var Ze=Xe=null,Je=W,rt=W=0,en=null,wt=ie.next();Je!==null&&!wt.done;rt++,wt=ie.next()){Je.index>rt?(en=Je,Je=null):en=Je.sibling;var hi=ve(ee,Je,wt.value,Ae);if(hi===null){Je===null&&(Je=en);break}n&&Je&&hi.alternate===null&&r(ee,Je),W=g(hi,W,rt),Ze===null?Xe=hi:Ze.sibling=hi,Ze=hi,Je=en}if(wt.done)return o(ee,Je),Ft&&Pi(ee,rt),Xe;if(Je===null){for(;!wt.done;rt++,wt=ie.next())wt=Me(ee,wt.value,Ae),wt!==null&&(W=g(wt,W,rt),Ze===null?Xe=wt:Ze.sibling=wt,Ze=wt);return Ft&&Pi(ee,rt),Xe}for(Je=u(ee,Je);!wt.done;rt++,wt=ie.next())wt=Ue(Je,ee,rt,wt.value,Ae),wt!==null&&(n&&wt.alternate!==null&&Je.delete(wt.key===null?rt:wt.key),W=g(wt,W,rt),Ze===null?Xe=wt:Ze.sibling=wt,Ze=wt);return n&&Je.forEach(function(Hx){return r(ee,Hx)}),Ft&&Pi(ee,rt),Xe}function Ht(ee,W,ie,Ae){if(typeof ie=="object"&&ie!==null&&ie.type===k&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case z:e:{for(var Xe=ie.key,Ze=W;Ze!==null;){if(Ze.key===Xe){if(Xe=ie.type,Xe===k){if(Ze.tag===7){o(ee,Ze.sibling),W=h(Ze,ie.props.children),W.return=ee,ee=W;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===de&&gh(Xe)===Ze.type){o(ee,Ze.sibling),W=h(Ze,ie.props),W.ref=So(ee,Ze,ie),W.return=ee,ee=W;break e}o(ee,Ze);break}else r(ee,Ze);Ze=Ze.sibling}ie.type===k?(W=zi(ie.props.children,ee.mode,Ae,ie.key),W.return=ee,ee=W):(Ae=Za(ie.type,ie.key,ie.props,null,ee.mode,Ae),Ae.ref=So(ee,W,ie),Ae.return=ee,ee=Ae)}return E(ee);case U:e:{for(Ze=ie.key;W!==null;){if(W.key===Ze)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){o(ee,W.sibling),W=h(W,ie.children||[]),W.return=ee,ee=W;break e}else{o(ee,W);break}else r(ee,W);W=W.sibling}W=bu(ie,ee.mode,Ae),W.return=ee,ee=W}return E(ee);case de:return Ze=ie._init,Ht(ee,W,Ze(ie._payload),Ae)}if(Qe(ie))return je(ee,W,ie,Ae);if(J(ie))return Ge(ee,W,ie,Ae);Aa(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,W!==null&&W.tag===6?(o(ee,W.sibling),W=h(W,ie),W.return=ee,ee=W):(o(ee,W),W=_u(ie,ee.mode,Ae),W.return=ee,ee=W),E(ee)):o(ee,W)}return Ht}var gs=xh(!0),vh=xh(!1),Ca=ni(null),Ra=null,xs=null,Pc=null;function Dc(){Pc=xs=Ra=null}function kc(n){var r=Ca.current;Ut(Ca),n._currentValue=r}function Lc(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function vs(n,r){Ra=n,Pc=xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(En=!0),n.firstContext=null)}function Wn(n){var r=n._currentValue;if(Pc!==n)if(n={context:n,memoizedValue:r,next:null},xs===null){if(Ra===null)throw Error(t(308));xs=n,Ra.dependencies={lanes:0,firstContext:n}}else xs=xs.next=n;return r}var Di=null;function Ic(n){Di===null?Di=[n]:Di.push(n)}function yh(n,r,o,u){var h=r.interleaved;return h===null?(o.next=o,Ic(r)):(o.next=h.next,h.next=o),r.interleaved=o,Rr(n,u)}function Rr(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var si=!1;function Uc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Nr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function oi(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(St&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,Rr(n,o)}return h=u.interleaved,h===null?(r.next=r,Ic(u)):(r.next=h.next,h.next=r),u.interleaved=r,Rr(n,o)}function Na(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Kl(n,o)}}function _h(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?h=g=r:g=g.next=r}else h=g=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Pa(n,r,o,u){var h=n.updateQueue;si=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,F=h.shared.pending;if(F!==null){h.shared.pending=null;var G=F,ae=G.next;G.next=null,E===null?g=ae:E.next=ae,E=G;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==E&&(F===null?ye.firstBaseUpdate=ae:F.next=ae,ye.lastBaseUpdate=G))}if(g!==null){var Me=h.baseState;E=0,ye=ae=G=null,F=g;do{var ve=F.lane,Ue=F.eventTime;if((u&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Ue,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var je=n,Ge=F;switch(ve=r,Ue=o,Ge.tag){case 1:if(je=Ge.payload,typeof je=="function"){Me=je.call(Ue,Me,ve);break e}Me=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ge.payload,ve=typeof je=="function"?je.call(Ue,Me,ve):je,ve==null)break e;Me=oe({},Me,ve);break e;case 2:si=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,ve=h.effects,ve===null?h.effects=[F]:ve.push(F))}else Ue={eventTime:Ue,lane:ve,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(ae=ye=Ue,G=Me):ye=ye.next=Ue,E|=ve;if(F=F.next,F===null){if(F=h.shared.pending,F===null)break;ve=F,F=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(ye===null&&(G=Me),h.baseState=G,h.firstBaseUpdate=ae,h.lastBaseUpdate=ye,r=h.shared.interleaved,r!==null){h=r;do E|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);Ii|=E,n.lanes=E,n.memoizedState=Me}}function bh(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var _o={},xr=ni(_o),bo=ni(_o),Mo=ni(_o);function ki(n){if(n===_o)throw Error(t(174));return n}function Fc(n,r){switch(kt(Mo,r),kt(bo,n),kt(xr,_o),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Te(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Te(r,n)}Ut(xr),kt(xr,r)}function ys(){Ut(xr),Ut(bo),Ut(Mo)}function Mh(n){ki(Mo.current);var r=ki(xr.current),o=Te(r,n.type);r!==o&&(kt(bo,n),kt(xr,o))}function Oc(n){bo.current===n&&(Ut(xr),Ut(bo))}var Ot=ni(0);function Da(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zc=[];function Bc(){for(var n=0;n<zc.length;n++)zc[n]._workInProgressVersionPrimary=null;zc.length=0}var ka=T.ReactCurrentDispatcher,jc=T.ReactCurrentBatchConfig,Li=0,zt=null,Yt=null,Jt=null,La=!1,wo=!1,Eo=0,ux=0;function cn(){throw Error(t(321))}function Hc(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!tr(n[o],r[o]))return!1;return!0}function Gc(n,r,o,u,h,g){if(Li=g,zt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ka.current=n===null||n.memoizedState===null?px:mx,n=o(u,h),wo){g=0;do{if(wo=!1,Eo=0,25<=g)throw Error(t(301));g+=1,Jt=Yt=null,r.updateQueue=null,ka.current=gx,n=o(u,h)}while(wo)}if(ka.current=Fa,r=Yt!==null&&Yt.next!==null,Li=0,Jt=Yt=zt=null,La=!1,r)throw Error(t(300));return n}function Vc(){var n=Eo!==0;return Eo=0,n}function vr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?zt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Xn(){if(Yt===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=Yt.next;var r=Jt===null?zt.memoizedState:Jt.next;if(r!==null)Jt=r,Yt=n;else{if(n===null)throw Error(t(310));Yt=n,n={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?zt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function To(n,r){return typeof r=="function"?r(n):r}function Wc(n){var r=Xn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Yt,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var F=E=null,G=null,ae=g;do{var ye=ae.lane;if((Li&ye)===ye)G!==null&&(G=G.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),u=ae.hasEagerState?ae.eagerState:n(u,ae.action);else{var Me={lane:ye,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};G===null?(F=G=Me,E=u):G=G.next=Me,zt.lanes|=ye,Ii|=ye}ae=ae.next}while(ae!==null&&ae!==g);G===null?E=u:G.next=F,tr(u,r.memoizedState)||(En=!0),r.memoizedState=u,r.baseState=E,r.baseQueue=G,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do g=h.lane,zt.lanes|=g,Ii|=g,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Xc(n){var r=Xn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,g=r.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do g=n(g,E.action),E=E.next;while(E!==h);tr(g,r.memoizedState)||(En=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function wh(){}function Eh(n,r){var o=zt,u=Xn(),h=r(),g=!tr(u.memoizedState,h);if(g&&(u.memoizedState=h,En=!0),u=u.queue,qc(Ch.bind(null,o,u,n),[n]),u.getSnapshot!==r||g||Jt!==null&&Jt.memoizedState.tag&1){if(o.flags|=2048,Ao(9,Ah.bind(null,o,u,h,r),void 0,null),$t===null)throw Error(t(349));(Li&30)!==0||Th(o,r,h)}return h}function Th(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=zt.updateQueue,r===null?(r={lastEffect:null,stores:null},zt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Ah(n,r,o,u){r.value=o,r.getSnapshot=u,Rh(r)&&Nh(n)}function Ch(n,r,o){return o(function(){Rh(r)&&Nh(n)})}function Rh(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!tr(n,o)}catch{return!0}}function Nh(n){var r=Rr(n,1);r!==null&&or(r,n,1,-1)}function Ph(n){var r=vr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:n},r.queue=n,n=n.dispatch=hx.bind(null,zt,n),[r.memoizedState,n]}function Ao(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=zt.updateQueue,r===null?(r={lastEffect:null,stores:null},zt.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function Dh(){return Xn().memoizedState}function Ia(n,r,o,u){var h=vr();zt.flags|=n,h.memoizedState=Ao(1|r,o,void 0,u===void 0?null:u)}function Ua(n,r,o,u){var h=Xn();u=u===void 0?null:u;var g=void 0;if(Yt!==null){var E=Yt.memoizedState;if(g=E.destroy,u!==null&&Hc(u,E.deps)){h.memoizedState=Ao(r,o,g,u);return}}zt.flags|=n,h.memoizedState=Ao(1|r,o,g,u)}function kh(n,r){return Ia(8390656,8,n,r)}function qc(n,r){return Ua(2048,8,n,r)}function Lh(n,r){return Ua(4,2,n,r)}function Ih(n,r){return Ua(4,4,n,r)}function Uh(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Fh(n,r,o){return o=o!=null?o.concat([n]):null,Ua(4,4,Uh.bind(null,r,n),o)}function Yc(){}function Oh(n,r){var o=Xn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Hc(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function zh(n,r){var o=Xn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Hc(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function Bh(n,r,o){return(Li&21)===0?(n.baseState&&(n.baseState=!1,En=!0),n.memoizedState=o):(tr(o,r)||(o=mn(),zt.lanes|=o,Ii|=o,n.baseState=!0),r)}function dx(n,r){var o=Rt;Rt=o!==0&&4>o?o:4,n(!0);var u=jc.transition;jc.transition={};try{n(!1),r()}finally{Rt=o,jc.transition=u}}function jh(){return Xn().memoizedState}function fx(n,r,o){var u=ui(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Hh(n))Gh(r,o);else if(o=yh(n,r,o,u),o!==null){var h=xn();or(o,n,u,h),Vh(o,r,u)}}function hx(n,r,o){var u=ui(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Hh(n))Gh(r,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var E=r.lastRenderedState,F=g(E,o);if(h.hasEagerState=!0,h.eagerState=F,tr(F,E)){var G=r.interleaved;G===null?(h.next=h,Ic(r)):(h.next=G.next,G.next=h),r.interleaved=h;return}}catch{}finally{}o=yh(n,r,h,u),o!==null&&(h=xn(),or(o,n,u,h),Vh(o,r,u))}}function Hh(n){var r=n.alternate;return n===zt||r!==null&&r===zt}function Gh(n,r){wo=La=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Vh(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Kl(n,o)}}var Fa={readContext:Wn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},px={readContext:Wn,useCallback:function(n,r){return vr().memoizedState=[n,r===void 0?null:r],n},useContext:Wn,useEffect:kh,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,Ia(4194308,4,Uh.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Ia(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ia(4,2,n,r)},useMemo:function(n,r){var o=vr();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=vr();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=fx.bind(null,zt,n),[u.memoizedState,n]},useRef:function(n){var r=vr();return n={current:n},r.memoizedState=n},useState:Ph,useDebugValue:Yc,useDeferredValue:function(n){return vr().memoizedState=n},useTransition:function(){var n=Ph(!1),r=n[0];return n=dx.bind(null,n[1]),vr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=zt,h=vr();if(Ft){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),$t===null)throw Error(t(349));(Li&30)!==0||Th(u,r,o)}h.memoizedState=o;var g={value:o,getSnapshot:r};return h.queue=g,kh(Ch.bind(null,u,g,n),[n]),u.flags|=2048,Ao(9,Ah.bind(null,u,g,o,r),void 0,null),o},useId:function(){var n=vr(),r=$t.identifierPrefix;if(Ft){var o=Cr,u=Ar;o=(u&~(1<<32-lt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Eo++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=ux++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},mx={readContext:Wn,useCallback:Oh,useContext:Wn,useEffect:qc,useImperativeHandle:Fh,useInsertionEffect:Lh,useLayoutEffect:Ih,useMemo:zh,useReducer:Wc,useRef:Dh,useState:function(){return Wc(To)},useDebugValue:Yc,useDeferredValue:function(n){var r=Xn();return Bh(r,Yt.memoizedState,n)},useTransition:function(){var n=Wc(To)[0],r=Xn().memoizedState;return[n,r]},useMutableSource:wh,useSyncExternalStore:Eh,useId:jh,unstable_isNewReconciler:!1},gx={readContext:Wn,useCallback:Oh,useContext:Wn,useEffect:qc,useImperativeHandle:Fh,useInsertionEffect:Lh,useLayoutEffect:Ih,useMemo:zh,useReducer:Xc,useRef:Dh,useState:function(){return Xc(To)},useDebugValue:Yc,useDeferredValue:function(n){var r=Xn();return Yt===null?r.memoizedState=n:Bh(r,Yt.memoizedState,n)},useTransition:function(){var n=Xc(To)[0],r=Xn().memoizedState;return[n,r]},useMutableSource:wh,useSyncExternalStore:Eh,useId:jh,unstable_isNewReconciler:!1};function rr(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Qc(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:oe({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Oa={isMounted:function(n){return(n=n._reactInternals)?pr(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=xn(),h=ui(n),g=Nr(u,h);g.payload=r,o!=null&&(g.callback=o),r=oi(n,g,h),r!==null&&(or(r,n,h,u),Na(r,n,h))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=xn(),h=ui(n),g=Nr(u,h);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=oi(n,g,h),r!==null&&(or(r,n,h,u),Na(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=xn(),u=ui(n),h=Nr(o,u);h.tag=2,r!=null&&(h.callback=r),r=oi(n,h,u),r!==null&&(or(r,n,u,o),Na(r,n,u))}};function Wh(n,r,o,u,h,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,E):r.prototype&&r.prototype.isPureReactComponent?!ho(o,u)||!ho(h,g):!0}function Xh(n,r,o){var u=!1,h=ri,g=r.contextType;return typeof g=="object"&&g!==null?g=Wn(g):(h=wn(r)?Ri:ln.current,u=r.contextTypes,g=(u=u!=null)?fs(n,h):ri),r=new r(o,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Oa,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),r}function qh(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&Oa.enqueueReplaceState(r,r.state,null)}function Kc(n,r,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},Uc(n);var g=r.contextType;typeof g=="object"&&g!==null?h.context=Wn(g):(g=wn(r)?Ri:ln.current,h.context=fs(n,g)),h.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Qc(n,r,g,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&Oa.enqueueReplaceState(h,h.state,null),Pa(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,r){try{var o="",u=r;do o+=ge(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:h,digest:null}}function Zc(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Jc(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var xx=typeof WeakMap=="function"?WeakMap:Map;function Yh(n,r,o){o=Nr(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Wa||(Wa=!0,hu=u),Jc(n,r)},o}function Qh(n,r,o){o=Nr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){Jc(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Jc(n,r),typeof u!="function"&&(li===null?li=new Set([this]):li.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),o}function Kh(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new xx;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),n=Px.bind(null,n,r,o),r.then(n,n))}function Zh(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Jh(n,r,o,u,h){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Nr(-1,1),r.tag=2,oi(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var vx=T.ReactCurrentOwner,En=!1;function gn(n,r,o,u){r.child=n===null?vh(r,null,o,u):gs(r,n.child,o,u)}function $h(n,r,o,u,h){o=o.render;var g=r.ref;return vs(r,h),u=Gc(n,r,o,u,g,h),o=Vc(),n!==null&&!En?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Pr(n,r,h)):(Ft&&o&&Tc(r),r.flags|=1,gn(n,r,u,h),r.child)}function ep(n,r,o,u,h){if(n===null){var g=o.type;return typeof g=="function"&&!Su(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,tp(n,r,g,u,h)):(n=Za(o.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&h)===0){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:ho,o(E,u)&&n.ref===r.ref)return Pr(n,r,h)}return r.flags|=1,n=fi(g,u),n.ref=r.ref,n.return=r,r.child=n}function tp(n,r,o,u,h){if(n!==null){var g=n.memoizedProps;if(ho(g,u)&&n.ref===r.ref)if(En=!1,r.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(En=!0);else return r.lanes=n.lanes,Pr(n,r,h)}return $c(n,r,o,u,h)}function np(n,r,o){var u=r.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(bs,Fn),Fn|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,kt(bs,Fn),Fn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,kt(bs,Fn),Fn|=u}else g!==null?(u=g.baseLanes|o,r.memoizedState=null):u=o,kt(bs,Fn),Fn|=u;return gn(n,r,h,o),r.child}function rp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function $c(n,r,o,u,h){var g=wn(o)?Ri:ln.current;return g=fs(r,g),vs(r,h),o=Gc(n,r,o,u,g,h),u=Vc(),n!==null&&!En?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Pr(n,r,h)):(Ft&&u&&Tc(r),r.flags|=1,gn(n,r,o,h),r.child)}function ip(n,r,o,u,h){if(wn(o)){var g=!0;ba(r)}else g=!1;if(vs(r,h),r.stateNode===null)Ba(n,r),Xh(r,o,u),Kc(r,o,u,h),u=!0;else if(n===null){var E=r.stateNode,F=r.memoizedProps;E.props=F;var G=E.context,ae=o.contextType;typeof ae=="object"&&ae!==null?ae=Wn(ae):(ae=wn(o)?Ri:ln.current,ae=fs(r,ae));var ye=o.getDerivedStateFromProps,Me=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";Me||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==u||G!==ae)&&qh(r,E,u,ae),si=!1;var ve=r.memoizedState;E.state=ve,Pa(r,u,E,h),G=r.memoizedState,F!==u||ve!==G||Mn.current||si?(typeof ye=="function"&&(Qc(r,o,ye,u),G=r.memoizedState),(F=si||Wh(r,o,F,u,ve,G,ae))?(Me||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=G),E.props=u,E.state=G,E.context=ae,u=F):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{E=r.stateNode,Sh(n,r),F=r.memoizedProps,ae=r.type===r.elementType?F:rr(r.type,F),E.props=ae,Me=r.pendingProps,ve=E.context,G=o.contextType,typeof G=="object"&&G!==null?G=Wn(G):(G=wn(o)?Ri:ln.current,G=fs(r,G));var Ue=o.getDerivedStateFromProps;(ye=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==Me||ve!==G)&&qh(r,E,u,G),si=!1,ve=r.memoizedState,E.state=ve,Pa(r,u,E,h);var je=r.memoizedState;F!==Me||ve!==je||Mn.current||si?(typeof Ue=="function"&&(Qc(r,o,Ue,u),je=r.memoizedState),(ae=si||Wh(r,o,ae,u,ve,je,G)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,je,G),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,je,G)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=je),E.props=u,E.state=je,E.context=G,u=ae):(typeof E.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),u=!1)}return eu(n,r,o,u,g,h)}function eu(n,r,o,u,h,g){rp(n,r);var E=(r.flags&128)!==0;if(!u&&!E)return h&&ch(r,o,!1),Pr(n,r,g);u=r.stateNode,vx.current=r;var F=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&E?(r.child=gs(r,n.child,null,g),r.child=gs(r,null,F,g)):gn(n,r,F,g),r.memoizedState=u.state,h&&ch(r,o,!0),r.child}function sp(n){var r=n.stateNode;r.pendingContext?ah(n,r.pendingContext,r.pendingContext!==r.context):r.context&&ah(n,r.context,!1),Fc(n,r.containerInfo)}function op(n,r,o,u,h){return ms(),Nc(h),r.flags|=256,gn(n,r,o,u),r.child}var tu={dehydrated:null,treeContext:null,retryLane:0};function nu(n){return{baseLanes:n,cachePool:null,transitions:null}}function ap(n,r,o){var u=r.pendingProps,h=Ot.current,g=!1,E=(r.flags&128)!==0,F;if((F=E)||(F=n!==null&&n.memoizedState===null?!1:(h&2)!==0),F?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),kt(Ot,h&1),n===null)return Rc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(E=u.children,n=u.fallback,g?(u=r.mode,g=r.child,E={mode:"hidden",children:E},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Ja(E,u,0,null),n=zi(n,u,o,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=nu(o),r.memoizedState=tu,n):ru(r,E));if(h=n.memoizedState,h!==null&&(F=h.dehydrated,F!==null))return yx(n,r,E,u,F,h,o);if(g){g=u.fallback,E=r.mode,h=n.child,F=h.sibling;var G={mode:"hidden",children:u.children};return(E&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=G,r.deletions=null):(u=fi(h,G),u.subtreeFlags=h.subtreeFlags&14680064),F!==null?g=fi(F,g):(g=zi(g,E,o,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,E=n.child.memoizedState,E=E===null?nu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=n.childLanes&~o,r.memoizedState=tu,u}return g=n.child,n=g.sibling,u=fi(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function ru(n,r){return r=Ja({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function za(n,r,o,u){return u!==null&&Nc(u),gs(r,n.child,null,o),n=ru(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function yx(n,r,o,u,h,g,E){if(o)return r.flags&256?(r.flags&=-257,u=Zc(Error(t(422))),za(n,r,E,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=u.fallback,h=r.mode,u=Ja({mode:"visible",children:u.children},h,0,null),g=zi(g,h,E,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&gs(r,n.child,null,E),r.child.memoizedState=nu(E),r.memoizedState=tu,g);if((r.mode&1)===0)return za(n,r,E,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var F=u.dgst;return u=F,g=Error(t(419)),u=Zc(g,u,void 0),za(n,r,E,u)}if(F=(E&n.childLanes)!==0,En||F){if(u=$t,u!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Rr(n,h),or(u,n,h,-1))}return yu(),u=Zc(Error(t(421))),za(n,r,E,u)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=Dx.bind(null,n),h._reactRetry=r,null):(n=g.treeContext,Un=ti(h.nextSibling),In=r,Ft=!0,nr=null,n!==null&&(Gn[Vn++]=Ar,Gn[Vn++]=Cr,Gn[Vn++]=Ni,Ar=n.id,Cr=n.overflow,Ni=r),r=ru(r,u.children),r.flags|=4096,r)}function lp(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Lc(n.return,r,o)}function iu(n,r,o,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function cp(n,r,o){var u=r.pendingProps,h=u.revealOrder,g=u.tail;if(gn(n,r,u.children,o),u=Ot.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lp(n,o,r);else if(n.tag===19)lp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(kt(Ot,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)n=o.alternate,n!==null&&Da(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),iu(r,!1,h,o,g);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Da(n)===null){r.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}iu(r,!0,o,null,g);break;case"together":iu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ba(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Pr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Ii|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=fi(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=fi(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function Sx(n,r,o){switch(r.tag){case 3:sp(r),ms();break;case 5:Mh(r);break;case 1:wn(r.type)&&ba(r);break;case 4:Fc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;kt(Ca,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(kt(Ot,Ot.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?ap(n,r,o):(kt(Ot,Ot.current&1),n=Pr(n,r,o),n!==null?n.sibling:null);kt(Ot,Ot.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return cp(n,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),kt(Ot,Ot.current),u)break;return null;case 22:case 23:return r.lanes=0,np(n,r,o)}return Pr(n,r,o)}var up,su,dp,fp;up=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},su=function(){},dp=function(n,r,o,u){var h=n.memoizedProps;if(h!==u){n=r.stateNode,ki(xr.current);var g=null;switch(o){case"input":h=Q(n,h),u=Q(n,u),g=[];break;case"select":h=oe({},h,{value:void 0}),u=oe({},u,{value:void 0}),g=[];break;case"textarea":h=C(n,h),u=C(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ya)}mt(o,u);var E;o=null;for(ae in h)if(!u.hasOwnProperty(ae)&&h.hasOwnProperty(ae)&&h[ae]!=null)if(ae==="style"){var F=h[ae];for(E in F)F.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(a.hasOwnProperty(ae)?g||(g=[]):(g=g||[]).push(ae,null));for(ae in u){var G=u[ae];if(F=h!=null?h[ae]:void 0,u.hasOwnProperty(ae)&&G!==F&&(G!=null||F!=null))if(ae==="style")if(F){for(E in F)!F.hasOwnProperty(E)||G&&G.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in G)G.hasOwnProperty(E)&&F[E]!==G[E]&&(o||(o={}),o[E]=G[E])}else o||(g||(g=[]),g.push(ae,o)),o=G;else ae==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,F=F?F.__html:void 0,G!=null&&F!==G&&(g=g||[]).push(ae,G)):ae==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(ae,""+G):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(a.hasOwnProperty(ae)?(G!=null&&ae==="onScroll"&&It("scroll",n),g||F===G||(g=[])):(g=g||[]).push(ae,G))}o&&(g=g||[]).push("style",o);var ae=g;(r.updateQueue=ae)&&(r.flags|=4)}},fp=function(n,r,o,u){o!==u&&(r.flags|=4)};function Co(n,r){if(!Ft)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function un(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function _x(n,r,o){var u=r.pendingProps;switch(Ac(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(r),null;case 1:return wn(r.type)&&_a(),un(r),null;case 3:return u=r.stateNode,ys(),Ut(Mn),Ut(ln),Bc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ta(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,nr!==null&&(gu(nr),nr=null))),su(n,r),un(r),null;case 5:Oc(r);var h=ki(Mo.current);if(o=r.type,n!==null&&r.stateNode!=null)dp(n,r,o,u,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return un(r),null}if(n=ki(xr.current),Ta(r)){u=r.stateNode,o=r.type;var g=r.memoizedProps;switch(u[gr]=r,u[vo]=g,n=(r.mode&1)!==0,o){case"dialog":It("cancel",u),It("close",u);break;case"iframe":case"object":case"embed":It("load",u);break;case"video":case"audio":for(h=0;h<mo.length;h++)It(mo[h],u);break;case"source":It("error",u);break;case"img":case"image":case"link":It("error",u),It("load",u);break;case"details":It("toggle",u);break;case"input":nn(u,g),It("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},It("invalid",u);break;case"textarea":q(u,g),It("invalid",u)}mt(o,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var F=g[E];E==="children"?typeof F=="string"?u.textContent!==F&&(g.suppressHydrationWarning!==!0&&va(u.textContent,F,n),h=["children",F]):typeof F=="number"&&u.textContent!==""+F&&(g.suppressHydrationWarning!==!0&&va(u.textContent,F,n),h=["children",""+F]):a.hasOwnProperty(E)&&F!=null&&E==="onScroll"&&It("scroll",u)}switch(o){case"input":At(u),Ye(u,g,!0);break;case"textarea":At(u),Z(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=ya)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=$(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(o,{is:u.is}):(n=E.createElement(o),o==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,o),n[gr]=r,n[vo]=u,up(n,r,!1,!1),r.stateNode=n;e:{switch(E=st(o,u),o){case"dialog":It("cancel",n),It("close",n),h=u;break;case"iframe":case"object":case"embed":It("load",n),h=u;break;case"video":case"audio":for(h=0;h<mo.length;h++)It(mo[h],n);h=u;break;case"source":It("error",n),h=u;break;case"img":case"image":case"link":It("error",n),It("load",n),h=u;break;case"details":It("toggle",n),h=u;break;case"input":nn(n,u),h=Q(n,u),It("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=oe({},u,{value:void 0}),It("invalid",n);break;case"textarea":q(n,u),h=C(n,u),It("invalid",n);break;default:h=u}mt(o,h),F=h;for(g in F)if(F.hasOwnProperty(g)){var G=F[g];g==="style"?tt(n,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Ne(n,G)):g==="children"?typeof G=="string"?(o!=="textarea"||G!=="")&&at(n,G):typeof G=="number"&&at(n,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?G!=null&&g==="onScroll"&&It("scroll",n):G!=null&&D(n,g,G,E))}switch(o){case"input":At(n),Ye(n,u,!1);break;case"textarea":At(n),Z(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Re(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?I(n,!!u.multiple,g,!1):u.defaultValue!=null&&I(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=ya)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return un(r),null;case 6:if(n&&r.stateNode!=null)fp(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=ki(Mo.current),ki(xr.current),Ta(r)){if(u=r.stateNode,o=r.memoizedProps,u[gr]=r,(g=u.nodeValue!==o)&&(n=In,n!==null))switch(n.tag){case 3:va(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&va(u.nodeValue,o,(n.mode&1)!==0)}g&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[gr]=r,r.stateNode=u}return un(r),null;case 13:if(Ut(Ot),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&Un!==null&&(r.mode&1)!==0&&(r.flags&128)===0)mh(),ms(),r.flags|=98560,g=!1;else if(g=Ta(r),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[gr]=r}else ms(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;un(r),g=!1}else nr!==null&&(gu(nr),nr=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ot.current&1)!==0?Qt===0&&(Qt=3):yu())),r.updateQueue!==null&&(r.flags|=4),un(r),null);case 4:return ys(),su(n,r),n===null&&go(r.stateNode.containerInfo),un(r),null;case 10:return kc(r.type._context),un(r),null;case 17:return wn(r.type)&&_a(),un(r),null;case 19:if(Ut(Ot),g=r.memoizedState,g===null)return un(r),null;if(u=(r.flags&128)!==0,E=g.rendering,E===null)if(u)Co(g,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(E=Da(n),E!==null){for(r.flags|=128,Co(g,!1),u=E.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)g=o,n=u,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,n=E.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return kt(Ot,Ot.current&1|2),r.child}n=n.sibling}g.tail!==null&&Ee()>Ms&&(r.flags|=128,u=!0,Co(g,!1),r.lanes=4194304)}else{if(!u)if(n=Da(E),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Co(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Ft)return un(r),null}else 2*Ee()-g.renderingStartTime>Ms&&o!==1073741824&&(r.flags|=128,u=!0,Co(g,!1),r.lanes=4194304);g.isBackwards?(E.sibling=r.child,r.child=E):(o=g.last,o!==null?o.sibling=E:r.child=E,g.last=E)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Ee(),r.sibling=null,o=Ot.current,kt(Ot,u?o&1|2:o&1),r):(un(r),null);case 22:case 23:return vu(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Fn&1073741824)!==0&&(un(r),r.subtreeFlags&6&&(r.flags|=8192)):un(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function bx(n,r){switch(Ac(r),r.tag){case 1:return wn(r.type)&&_a(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ys(),Ut(Mn),Ut(ln),Bc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Oc(r),null;case 13:if(Ut(Ot),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ms()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ut(Ot),null;case 4:return ys(),null;case 10:return kc(r.type._context),null;case 22:case 23:return vu(),null;case 24:return null;default:return null}}var ja=!1,dn=!1,Mx=typeof WeakSet=="function"?WeakSet:Set,ze=null;function _s(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Bt(n,r,u)}else o.current=null}function ou(n,r,o){try{o()}catch(u){Bt(n,r,u)}}var hp=!1;function wx(n,r){if(vc=aa,n=Wf(),uc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,F=-1,G=-1,ae=0,ye=0,Me=n,ve=null;t:for(;;){for(var Ue;Me!==o||h!==0&&Me.nodeType!==3||(F=E+h),Me!==g||u!==0&&Me.nodeType!==3||(G=E+u),Me.nodeType===3&&(E+=Me.nodeValue.length),(Ue=Me.firstChild)!==null;)ve=Me,Me=Ue;for(;;){if(Me===n)break t;if(ve===o&&++ae===h&&(F=E),ve===g&&++ye===u&&(G=E),(Ue=Me.nextSibling)!==null)break;Me=ve,ve=Me.parentNode}Me=Ue}o=F===-1||G===-1?null:{start:F,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(yc={focusedElem:n,selectionRange:o},aa=!1,ze=r;ze!==null;)if(r=ze,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ze=n;else for(;ze!==null;){r=ze;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ge=je.memoizedProps,Ht=je.memoizedState,ee=r.stateNode,W=ee.getSnapshotBeforeUpdate(r.elementType===r.type?Ge:rr(r.type,Ge),Ht);ee.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ie=r.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Bt(r,r.return,Ae)}if(n=r.sibling,n!==null){n.return=r.return,ze=n;break}ze=r.return}return je=hp,hp=!1,je}function Ro(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&ou(r,o,g)}h=h.next}while(h!==u)}}function Ha(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function au(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function pp(n){var r=n.alternate;r!==null&&(n.alternate=null,pp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[gr],delete r[vo],delete r[Mc],delete r[ox],delete r[ax])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mp(n){return n.tag===5||n.tag===3||n.tag===4}function gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function lu(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ya));else if(u!==4&&(n=n.child,n!==null))for(lu(n,r,o),n=n.sibling;n!==null;)lu(n,r,o),n=n.sibling}function cu(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(cu(n,r,o),n=n.sibling;n!==null;)cu(n,r,o),n=n.sibling}var rn=null,ir=!1;function ai(n,r,o){for(o=o.child;o!==null;)xp(n,r,o),o=o.sibling}function xp(n,r,o){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Et,o)}catch{}switch(o.tag){case 5:dn||_s(o,r);case 6:var u=rn,h=ir;rn=null,ai(n,r,o),rn=u,ir=h,rn!==null&&(ir?(n=rn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):rn.removeChild(o.stateNode));break;case 18:rn!==null&&(ir?(n=rn,o=o.stateNode,n.nodeType===8?bc(n.parentNode,o):n.nodeType===1&&bc(n,o),oo(n)):bc(rn,o.stateNode));break;case 4:u=rn,h=ir,rn=o.stateNode.containerInfo,ir=!0,ai(n,r,o),rn=u,ir=h;break;case 0:case 11:case 14:case 15:if(!dn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&ou(o,r,E),h=h.next}while(h!==u)}ai(n,r,o);break;case 1:if(!dn&&(_s(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(F){Bt(o,r,F)}ai(n,r,o);break;case 21:ai(n,r,o);break;case 22:o.mode&1?(dn=(u=dn)||o.memoizedState!==null,ai(n,r,o),dn=u):ai(n,r,o);break;default:ai(n,r,o)}}function vp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Mx),r.forEach(function(u){var h=kx.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function sr(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=n,E=r,F=E;e:for(;F!==null;){switch(F.tag){case 5:rn=F.stateNode,ir=!1;break e;case 3:rn=F.stateNode.containerInfo,ir=!0;break e;case 4:rn=F.stateNode.containerInfo,ir=!0;break e}F=F.return}if(rn===null)throw Error(t(160));xp(g,E,h),rn=null,ir=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(ae){Bt(h,r,ae)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)yp(r,n),r=r.sibling}function yp(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(sr(r,n),yr(n),u&4){try{Ro(3,n,n.return),Ha(3,n)}catch(Ge){Bt(n,n.return,Ge)}try{Ro(5,n,n.return)}catch(Ge){Bt(n,n.return,Ge)}}break;case 1:sr(r,n),yr(n),u&512&&o!==null&&_s(o,o.return);break;case 5:if(sr(r,n),yr(n),u&512&&o!==null&&_s(o,o.return),n.flags&32){var h=n.stateNode;try{at(h,"")}catch(Ge){Bt(n,n.return,Ge)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,E=o!==null?o.memoizedProps:g,F=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{F==="input"&&g.type==="radio"&&g.name!=null&&ht(h,g),st(F,E);var ae=st(F,g);for(E=0;E<G.length;E+=2){var ye=G[E],Me=G[E+1];ye==="style"?tt(h,Me):ye==="dangerouslySetInnerHTML"?Ne(h,Me):ye==="children"?at(h,Me):D(h,ye,Me,ae)}switch(F){case"input":dt(h,g);break;case"textarea":L(h,g);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Ue=g.value;Ue!=null?I(h,!!g.multiple,Ue,!1):ve!==!!g.multiple&&(g.defaultValue!=null?I(h,!!g.multiple,g.defaultValue,!0):I(h,!!g.multiple,g.multiple?[]:"",!1))}h[vo]=g}catch(Ge){Bt(n,n.return,Ge)}}break;case 6:if(sr(r,n),yr(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Ge){Bt(n,n.return,Ge)}}break;case 3:if(sr(r,n),yr(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{oo(r.containerInfo)}catch(Ge){Bt(n,n.return,Ge)}break;case 4:sr(r,n),yr(n);break;case 13:sr(r,n),yr(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(fu=Ee())),u&4&&vp(n);break;case 22:if(ye=o!==null&&o.memoizedState!==null,n.mode&1?(dn=(ae=dn)||ye,sr(r,n),dn=ae):sr(r,n),yr(n),u&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!ye&&(n.mode&1)!==0)for(ze=n,ye=n.child;ye!==null;){for(Me=ze=ye;ze!==null;){switch(ve=ze,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ro(4,ve,ve.return);break;case 1:_s(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){u=ve,o=ve.return;try{r=u,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(Ge){Bt(u,o,Ge)}}break;case 5:_s(ve,ve.return);break;case 22:if(ve.memoizedState!==null){bp(Me);continue}}Ue!==null?(Ue.return=ve,ze=Ue):bp(Me)}ye=ye.sibling}e:for(ye=null,Me=n;;){if(Me.tag===5){if(ye===null){ye=Me;try{h=Me.stateNode,ae?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(F=Me.stateNode,G=Me.memoizedProps.style,E=G!=null&&G.hasOwnProperty("display")?G.display:null,F.style.display=$e("display",E))}catch(Ge){Bt(n,n.return,Ge)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=ae?"":Me.memoizedProps}catch(Ge){Bt(n,n.return,Ge)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:sr(r,n),yr(n),u&4&&vp(n);break;case 21:break;default:sr(r,n),yr(n)}}function yr(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(mp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(at(h,""),u.flags&=-33);var g=gp(n);cu(n,g,h);break;case 3:case 4:var E=u.stateNode.containerInfo,F=gp(n);lu(n,F,E);break;default:throw Error(t(161))}}catch(G){Bt(n,n.return,G)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Ex(n,r,o){ze=n,Sp(n)}function Sp(n,r,o){for(var u=(n.mode&1)!==0;ze!==null;){var h=ze,g=h.child;if(h.tag===22&&u){var E=h.memoizedState!==null||ja;if(!E){var F=h.alternate,G=F!==null&&F.memoizedState!==null||dn;F=ja;var ae=dn;if(ja=E,(dn=G)&&!ae)for(ze=h;ze!==null;)E=ze,G=E.child,E.tag===22&&E.memoizedState!==null?Mp(h):G!==null?(G.return=E,ze=G):Mp(h);for(;g!==null;)ze=g,Sp(g),g=g.sibling;ze=h,ja=F,dn=ae}_p(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,ze=g):_p(n)}}function _p(n){for(;ze!==null;){var r=ze;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:dn||Ha(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!dn)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:rr(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&bh(r,g,u);break;case 3:var E=r.updateQueue;if(E!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}bh(r,E,o)}break;case 5:var F=r.stateNode;if(o===null&&r.flags&4){o=F;var G=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&o.focus();break;case"img":G.src&&(o.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ae=r.alternate;if(ae!==null){var ye=ae.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&oo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}dn||r.flags&512&&au(r)}catch(ve){Bt(r,r.return,ve)}}if(r===n){ze=null;break}if(o=r.sibling,o!==null){o.return=r.return,ze=o;break}ze=r.return}}function bp(n){for(;ze!==null;){var r=ze;if(r===n){ze=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ze=o;break}ze=r.return}}function Mp(n){for(;ze!==null;){var r=ze;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Ha(4,r)}catch(G){Bt(r,o,G)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(G){Bt(r,h,G)}}var g=r.return;try{au(r)}catch(G){Bt(r,g,G)}break;case 5:var E=r.return;try{au(r)}catch(G){Bt(r,E,G)}}}catch(G){Bt(r,r.return,G)}if(r===n){ze=null;break}var F=r.sibling;if(F!==null){F.return=r.return,ze=F;break}ze=r.return}}var Tx=Math.ceil,Ga=T.ReactCurrentDispatcher,uu=T.ReactCurrentOwner,qn=T.ReactCurrentBatchConfig,St=0,$t=null,Vt=null,sn=0,Fn=0,bs=ni(0),Qt=0,No=null,Ii=0,Va=0,du=0,Po=null,Tn=null,fu=0,Ms=1/0,Dr=null,Wa=!1,hu=null,li=null,Xa=!1,ci=null,qa=0,Do=0,pu=null,Ya=-1,Qa=0;function xn(){return(St&6)!==0?Ee():Ya!==-1?Ya:Ya=Ee()}function ui(n){return(n.mode&1)===0?1:(St&2)!==0&&sn!==0?sn&-sn:cx.transition!==null?(Qa===0&&(Qa=mn()),Qa):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:Ef(n.type)),n)}function or(n,r,o,u){if(50<Do)throw Do=0,pu=null,Error(t(185));bn(n,o,u),((St&2)===0||n!==$t)&&(n===$t&&((St&2)===0&&(Va|=o),Qt===4&&di(n,sn)),An(n,u),o===1&&St===0&&(r.mode&1)===0&&(Ms=Ee()+500,Ma&&ii()))}function An(n,r){var o=n.callbackNode;jn(n,r);var u=mr(n,n===$t?sn:0);if(u===0)o!==null&&ce(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&ce(o),r===1)n.tag===0?lx(Ep.bind(null,n)):uh(Ep.bind(null,n)),ix(function(){(St&6)===0&&ii()}),o=null;else{switch(xf(u)){case 1:o=He;break;case 4:o=nt;break;case 16:o=it;break;case 536870912:o=vt;break;default:o=it}o=kp(o,wp.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function wp(n,r){if(Ya=-1,Qa=0,(St&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ws()&&n.callbackNode!==o)return null;var u=mr(n,n===$t?sn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Ka(n,u);else{r=u;var h=St;St|=2;var g=Ap();($t!==n||sn!==r)&&(Dr=null,Ms=Ee()+500,Fi(n,r));do try{Rx();break}catch(F){Tp(n,F)}while(!0);Dc(),Ga.current=g,St=h,Vt!==null?r=0:($t=null,sn=0,r=Qt)}if(r!==0){if(r===2&&(h=wr(n),h!==0&&(u=h,r=mu(n,h))),r===1)throw o=No,Fi(n,0),di(n,u),An(n,Ee()),o;if(r===6)di(n,u);else{if(h=n.current.alternate,(u&30)===0&&!Ax(h)&&(r=Ka(n,u),r===2&&(g=wr(n),g!==0&&(u=g,r=mu(n,g))),r===1))throw o=No,Fi(n,0),di(n,u),An(n,Ee()),o;switch(n.finishedWork=h,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Oi(n,Tn,Dr);break;case 3:if(di(n,u),(u&130023424)===u&&(r=fu+500-Ee(),10<r)){if(mr(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){xn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=_c(Oi.bind(null,n,Tn,Dr),r);break}Oi(n,Tn,Dr);break;case 4:if(di(n,u),(u&4194240)===u)break;for(r=n.eventTimes,h=-1;0<u;){var E=31-lt(u);g=1<<E,E=r[E],E>h&&(h=E),u&=~g}if(u=h,u=Ee()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Tx(u/1960))-u,10<u){n.timeoutHandle=_c(Oi.bind(null,n,Tn,Dr),u);break}Oi(n,Tn,Dr);break;case 5:Oi(n,Tn,Dr);break;default:throw Error(t(329))}}}return An(n,Ee()),n.callbackNode===o?wp.bind(null,n):null}function mu(n,r){var o=Po;return n.current.memoizedState.isDehydrated&&(Fi(n,r).flags|=256),n=Ka(n,r),n!==2&&(r=Tn,Tn=o,r!==null&&gu(r)),n}function gu(n){Tn===null?Tn=n:Tn.push.apply(Tn,n)}function Ax(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!tr(g(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function di(n,r){for(r&=~du,r&=~Va,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-lt(r),u=1<<o;n[o]=-1,r&=~u}}function Ep(n){if((St&6)!==0)throw Error(t(327));ws();var r=mr(n,0);if((r&1)===0)return An(n,Ee()),null;var o=Ka(n,r);if(n.tag!==0&&o===2){var u=wr(n);u!==0&&(r=u,o=mu(n,u))}if(o===1)throw o=No,Fi(n,0),di(n,r),An(n,Ee()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Oi(n,Tn,Dr),An(n,Ee()),null}function xu(n,r){var o=St;St|=1;try{return n(r)}finally{St=o,St===0&&(Ms=Ee()+500,Ma&&ii())}}function Ui(n){ci!==null&&ci.tag===0&&(St&6)===0&&ws();var r=St;St|=1;var o=qn.transition,u=Rt;try{if(qn.transition=null,Rt=1,n)return n()}finally{Rt=u,qn.transition=o,St=r,(St&6)===0&&ii()}}function vu(){Fn=bs.current,Ut(bs)}function Fi(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,rx(o)),Vt!==null)for(o=Vt.return;o!==null;){var u=o;switch(Ac(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&_a();break;case 3:ys(),Ut(Mn),Ut(ln),Bc();break;case 5:Oc(u);break;case 4:ys();break;case 13:Ut(Ot);break;case 19:Ut(Ot);break;case 10:kc(u.type._context);break;case 22:case 23:vu()}o=o.return}if($t=n,Vt=n=fi(n.current,null),sn=Fn=r,Qt=0,No=null,du=Va=Ii=0,Tn=Po=null,Di!==null){for(r=0;r<Di.length;r++)if(o=Di[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var E=g.next;g.next=h,u.next=E}o.pending=u}Di=null}return n}function Tp(n,r){do{var o=Vt;try{if(Dc(),ka.current=Fa,La){for(var u=zt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}La=!1}if(Li=0,Jt=Yt=zt=null,wo=!1,Eo=0,uu.current=null,o===null||o.return===null){Qt=1,No=r,Vt=null;break}e:{var g=n,E=o.return,F=o,G=r;if(r=sn,F.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ae=G,ye=F,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ue=Zh(E);if(Ue!==null){Ue.flags&=-257,Jh(Ue,E,F,g,r),Ue.mode&1&&Kh(g,ae,r),r=Ue,G=ae;var je=r.updateQueue;if(je===null){var Ge=new Set;Ge.add(G),r.updateQueue=Ge}else je.add(G);break e}else{if((r&1)===0){Kh(g,ae,r),yu();break e}G=Error(t(426))}}else if(Ft&&F.mode&1){var Ht=Zh(E);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Jh(Ht,E,F,g,r),Nc(Ss(G,F));break e}}g=G=Ss(G,F),Qt!==4&&(Qt=2),Po===null?Po=[g]:Po.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var ee=Yh(g,G,r);_h(g,ee);break e;case 1:F=G;var W=g.type,ie=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(li===null||!li.has(ie)))){g.flags|=65536,r&=-r,g.lanes|=r;var Ae=Qh(g,F,r);_h(g,Ae);break e}}g=g.return}while(g!==null)}Rp(o)}catch(Xe){r=Xe,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function Ap(){var n=Ga.current;return Ga.current=Fa,n===null?Fa:n}function yu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),$t===null||(Ii&268435455)===0&&(Va&268435455)===0||di($t,sn)}function Ka(n,r){var o=St;St|=2;var u=Ap();($t!==n||sn!==r)&&(Dr=null,Fi(n,r));do try{Cx();break}catch(h){Tp(n,h)}while(!0);if(Dc(),St=o,Ga.current=u,Vt!==null)throw Error(t(261));return $t=null,sn=0,Qt}function Cx(){for(;Vt!==null;)Cp(Vt)}function Rx(){for(;Vt!==null&&!K();)Cp(Vt)}function Cp(n){var r=Dp(n.alternate,n,Fn);n.memoizedProps=n.pendingProps,r===null?Rp(n):Vt=r,uu.current=null}function Rp(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=_x(o,r,Fn),o!==null){Vt=o;return}}else{if(o=bx(o,r),o!==null){o.flags&=32767,Vt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,Vt=null;return}}if(r=r.sibling,r!==null){Vt=r;return}Vt=r=n}while(r!==null);Qt===0&&(Qt=5)}function Oi(n,r,o){var u=Rt,h=qn.transition;try{qn.transition=null,Rt=1,Nx(n,r,o,u)}finally{qn.transition=h,Rt=u}return null}function Nx(n,r,o,u){do ws();while(ci!==null);if((St&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(ia(n,g),n===$t&&(Vt=$t=null,sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Xa||(Xa=!0,kp(it,function(){return ws(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=qn.transition,qn.transition=null;var E=Rt;Rt=1;var F=St;St|=4,uu.current=null,wx(n,o),yp(o,n),Kg(yc),aa=!!vc,yc=vc=null,n.current=o,Ex(o),Ce(),St=F,Rt=E,qn.transition=g}else n.current=o;if(Xa&&(Xa=!1,ci=n,qa=h),g=n.pendingLanes,g===0&&(li=null),on(o.stateNode),An(n,Ee()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Wa)throw Wa=!1,n=hu,hu=null,n;return(qa&1)!==0&&n.tag!==0&&ws(),g=n.pendingLanes,(g&1)!==0?n===pu?Do++:(Do=0,pu=n):Do=0,ii(),null}function ws(){if(ci!==null){var n=xf(qa),r=qn.transition,o=Rt;try{if(qn.transition=null,Rt=16>n?16:n,ci===null)var u=!1;else{if(n=ci,ci=null,qa=0,(St&6)!==0)throw Error(t(331));var h=St;for(St|=4,ze=n.current;ze!==null;){var g=ze,E=g.child;if((ze.flags&16)!==0){var F=g.deletions;if(F!==null){for(var G=0;G<F.length;G++){var ae=F[G];for(ze=ae;ze!==null;){var ye=ze;switch(ye.tag){case 0:case 11:case 15:Ro(8,ye,g)}var Me=ye.child;if(Me!==null)Me.return=ye,ze=Me;else for(;ze!==null;){ye=ze;var ve=ye.sibling,Ue=ye.return;if(pp(ye),ye===ae){ze=null;break}if(ve!==null){ve.return=Ue,ze=ve;break}ze=Ue}}}var je=g.alternate;if(je!==null){var Ge=je.child;if(Ge!==null){je.child=null;do{var Ht=Ge.sibling;Ge.sibling=null,Ge=Ht}while(Ge!==null)}}ze=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,ze=E;else e:for(;ze!==null;){if(g=ze,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ro(9,g,g.return)}var ee=g.sibling;if(ee!==null){ee.return=g.return,ze=ee;break e}ze=g.return}}var W=n.current;for(ze=W;ze!==null;){E=ze;var ie=E.child;if((E.subtreeFlags&2064)!==0&&ie!==null)ie.return=E,ze=ie;else e:for(E=W;ze!==null;){if(F=ze,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Ha(9,F)}}catch(Xe){Bt(F,F.return,Xe)}if(F===E){ze=null;break e}var Ae=F.sibling;if(Ae!==null){Ae.return=F.return,ze=Ae;break e}ze=F.return}}if(St=h,ii(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Et,n)}catch{}u=!0}return u}finally{Rt=o,qn.transition=r}}return!1}function Np(n,r,o){r=Ss(o,r),r=Yh(n,r,1),n=oi(n,r,1),r=xn(),n!==null&&(bn(n,1,r),An(n,r))}function Bt(n,r,o){if(n.tag===3)Np(n,n,o);else for(;r!==null;){if(r.tag===3){Np(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(li===null||!li.has(u))){n=Ss(o,n),n=Qh(r,n,1),r=oi(r,n,1),n=xn(),r!==null&&(bn(r,1,n),An(r,n));break}}r=r.return}}function Px(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=xn(),n.pingedLanes|=n.suspendedLanes&o,$t===n&&(sn&o)===o&&(Qt===4||Qt===3&&(sn&130023424)===sn&&500>Ee()-fu?Fi(n,0):du|=o),An(n,r)}function Pp(n,r){r===0&&((n.mode&1)===0?r=1:(r=er,er<<=1,(er&130023424)===0&&(er=4194304)));var o=xn();n=Rr(n,r),n!==null&&(bn(n,r,o),An(n,o))}function Dx(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Pp(n,o)}function kx(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Pp(n,o)}var Dp;Dp=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Mn.current)En=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return En=!1,Sx(n,r,o);En=(n.flags&131072)!==0}else En=!1,Ft&&(r.flags&1048576)!==0&&dh(r,Ea,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Ba(n,r),n=r.pendingProps;var h=fs(r,ln.current);vs(r,o),h=Gc(null,r,u,n,h,o);var g=Vc();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,wn(u)?(g=!0,ba(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Uc(r),h.updater=Oa,r.stateNode=h,h._reactInternals=r,Kc(r,u,n,o),r=eu(null,r,u,!0,g,o)):(r.tag=0,Ft&&g&&Tc(r),gn(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(Ba(n,r),n=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=Ix(u),n=rr(u,n),h){case 0:r=$c(null,r,u,n,o);break e;case 1:r=ip(null,r,u,n,o);break e;case 11:r=$h(null,r,u,n,o);break e;case 14:r=ep(null,r,u,rr(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:rr(u,h),$c(n,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:rr(u,h),ip(n,r,u,h,o);case 3:e:{if(sp(r),n===null)throw Error(t(387));u=r.pendingProps,g=r.memoizedState,h=g.element,Sh(n,r),Pa(r,u,null,o);var E=r.memoizedState;if(u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=Ss(Error(t(423)),r),r=op(n,r,u,o,h);break e}else if(u!==h){h=Ss(Error(t(424)),r),r=op(n,r,u,o,h);break e}else for(Un=ti(r.stateNode.containerInfo.firstChild),In=r,Ft=!0,nr=null,o=vh(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),u===h){r=Pr(n,r,o);break e}gn(n,r,u,o)}r=r.child}return r;case 5:return Mh(r),n===null&&Rc(r),u=r.type,h=r.pendingProps,g=n!==null?n.memoizedProps:null,E=h.children,Sc(u,h)?E=null:g!==null&&Sc(u,g)&&(r.flags|=32),rp(n,r),gn(n,r,E,o),r.child;case 6:return n===null&&Rc(r),null;case 13:return ap(n,r,o);case 4:return Fc(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=gs(r,null,u,o):gn(n,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:rr(u,h),$h(n,r,u,h,o);case 7:return gn(n,r,r.pendingProps,o),r.child;case 8:return gn(n,r,r.pendingProps.children,o),r.child;case 12:return gn(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,g=r.memoizedProps,E=h.value,kt(Ca,u._currentValue),u._currentValue=E,g!==null)if(tr(g.value,E)){if(g.children===h.children&&!Mn.current){r=Pr(n,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var F=g.dependencies;if(F!==null){E=g.child;for(var G=F.firstContext;G!==null;){if(G.context===u){if(g.tag===1){G=Nr(-1,o&-o),G.tag=2;var ae=g.updateQueue;if(ae!==null){ae=ae.shared;var ye=ae.pending;ye===null?G.next=G:(G.next=ye.next,ye.next=G),ae.pending=G}}g.lanes|=o,G=g.alternate,G!==null&&(G.lanes|=o),Lc(g.return,o,r),F.lanes|=o;break}G=G.next}}else if(g.tag===10)E=g.type===r.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=o,F=E.alternate,F!==null&&(F.lanes|=o),Lc(E,o,r),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===r){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}gn(n,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,vs(r,o),h=Wn(h),u=u(h),r.flags|=1,gn(n,r,u,o),r.child;case 14:return u=r.type,h=rr(u,r.pendingProps),h=rr(u.type,h),ep(n,r,u,h,o);case 15:return tp(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:rr(u,h),Ba(n,r),r.tag=1,wn(u)?(n=!0,ba(r)):n=!1,vs(r,o),Xh(r,u,h),Kc(r,u,h,o),eu(null,r,u,!0,n,o);case 19:return cp(n,r,o);case 22:return np(n,r,o)}throw Error(t(156,r.tag))};function kp(n,r){return le(n,r)}function Lx(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,r,o,u){return new Lx(n,r,o,u)}function Su(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ix(n){if(typeof n=="function")return Su(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===me)return 14}return 2}function fi(n,r){var o=n.alternate;return o===null?(o=Yn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Za(n,r,o,u,h,g){var E=2;if(u=n,typeof n=="function")Su(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case k:return zi(o.children,h,g,r);case B:E=8,h|=8;break;case P:return n=Yn(12,o,r,h|2),n.elementType=P,n.lanes=g,n;case te:return n=Yn(13,o,r,h),n.elementType=te,n.lanes=g,n;case fe:return n=Yn(19,o,r,h),n.elementType=fe,n.lanes=g,n;case pe:return Ja(o,h,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:E=10;break e;case j:E=9;break e;case se:E=11;break e;case me:E=14;break e;case de:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Yn(E,o,r,h),r.elementType=n,r.type=u,r.lanes=g,r}function zi(n,r,o,u){return n=Yn(7,n,u,r),n.lanes=o,n}function Ja(n,r,o,u){return n=Yn(22,n,u,r),n.elementType=pe,n.lanes=o,n.stateNode={isHidden:!1},n}function _u(n,r,o){return n=Yn(6,n,null,r),n.lanes=o,n}function bu(n,r,o){return r=Yn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Ux(n,r,o,u,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hn(0),this.expirationTimes=Hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Mu(n,r,o,u,h,g,E,F,G){return n=new Ux(n,r,o,F,G),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Yn(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(g),n}function Fx(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function Lp(n){if(!n)return ri;n=n._reactInternals;e:{if(pr(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(wn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(wn(o))return lh(n,o,r)}return r}function Ip(n,r,o,u,h,g,E,F,G){return n=Mu(o,u,!0,n,h,g,E,F,G),n.context=Lp(null),o=n.current,u=xn(),h=ui(o),g=Nr(u,h),g.callback=r??null,oi(o,g,h),n.current.lanes=h,bn(n,h,u),An(n,u),n}function $a(n,r,o,u){var h=r.current,g=xn(),E=ui(h);return o=Lp(o),r.context===null?r.context=o:r.pendingContext=o,r=Nr(g,E),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=oi(h,r,E),n!==null&&(or(n,h,E,g),Na(n,h,E)),E}function el(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Up(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function wu(n,r){Up(n,r),(n=n.alternate)&&Up(n,r)}function Ox(){return null}var Fp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Eu(n){this._internalRoot=n}tl.prototype.render=Eu.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));$a(n,r,null,null)},tl.prototype.unmount=Eu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ui(function(){$a(null,n,null,null)}),r[Er]=null}};function tl(n){this._internalRoot=n}tl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Sf();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Jr.length&&r!==0&&r<Jr[o].priority;o++);Jr.splice(o,0,n),o===0&&Mf(n)}};function Tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Op(){}function zx(n,r,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var ae=el(E);g.call(ae)}}var E=Ip(r,u,n,0,null,!1,!1,"",Op);return n._reactRootContainer=E,n[Er]=E.current,go(n.nodeType===8?n.parentNode:n),Ui(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var F=u;u=function(){var ae=el(G);F.call(ae)}}var G=Mu(n,0,!1,null,null,!1,!1,"",Op);return n._reactRootContainer=G,n[Er]=G.current,go(n.nodeType===8?n.parentNode:n),Ui(function(){$a(r,G,o,u)}),G}function rl(n,r,o,u,h){var g=o._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var F=h;h=function(){var G=el(E);F.call(G)}}$a(r,E,n,h)}else E=zx(o,r,n,h,u);return el(E)}vf=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=qt(r.pendingLanes);o!==0&&(Kl(r,o|1),An(r,Ee()),(St&6)===0&&(Ms=Ee()+500,ii()))}break;case 13:Ui(function(){var u=Rr(n,1);if(u!==null){var h=xn();or(u,n,1,h)}}),wu(n,1)}},Zl=function(n){if(n.tag===13){var r=Rr(n,134217728);if(r!==null){var o=xn();or(r,n,134217728,o)}wu(n,134217728)}},yf=function(n){if(n.tag===13){var r=ui(n),o=Rr(n,r);if(o!==null){var u=xn();or(o,n,r,u)}wu(n,r)}},Sf=function(){return Rt},_f=function(n,r){var o=Rt;try{return Rt=n,r()}finally{Rt=o}},De=function(n,r,o){switch(r){case"input":if(dt(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var h=Sa(u);if(!h)throw Error(t(90));pt(u),dt(u,h)}}}break;case"textarea":L(n,o);break;case"select":r=o.value,r!=null&&I(n,!!o.multiple,r,!1)}},Lt=xu,Xt=Ui;var Bx={usingClientEntryPoint:!1,Events:[yo,us,Sa,Le,ot,xu]},ko={findFiberByHostInstance:Ci,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jx={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=N(n),n===null?null:n.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||Ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Et=il.inject(jx),xt=il}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx,Cn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tu(r))throw Error(t(200));return Fx(n,r,null,o)},Cn.createRoot=function(n,r){if(!Tu(n))throw Error(t(299));var o=!1,u="",h=Fp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=Mu(n,1,!1,null,null,o,!1,u,h),n[Er]=r.current,go(n.nodeType===8?n.parentNode:n),new Eu(r)},Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=N(r),n=n===null?null:n.stateNode,n},Cn.flushSync=function(n){return Ui(n)},Cn.hydrate=function(n,r,o){if(!nl(r))throw Error(t(200));return rl(null,n,r,!0,o)},Cn.hydrateRoot=function(n,r,o){if(!Tu(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",E=Fp;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),r=Ip(r,null,n,1,o??null,h,!1,g,E),n[Er]=r.current,go(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new tl(r)},Cn.render=function(n,r,o){if(!nl(r))throw Error(t(200));return rl(null,n,r,!1,o)},Cn.unmountComponentAtNode=function(n){if(!nl(n))throw Error(t(40));return n._reactRootContainer?(Ui(function(){rl(null,null,n,!1,function(){n._reactRootContainer=null,n[Er]=null})}),!0):!1},Cn.unstable_batchedUpdates=xu,Cn.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!nl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return rl(n,r,o,!1,u)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var Xp;function f0(){if(Xp)return Ru.exports;Xp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ru.exports=Yx(),Ru.exports}var qp;function Qx(){if(qp)return sl;qp=1;var i=f0();return sl.createRoot=i.createRoot,sl.hydrateRoot=i.hydrateRoot,sl}var Kx=Qx(),V=sf();function Du(i){const e=i.replace("#",""),t=parseInt(e.substring(0,2),16),s=parseInt(e.substring(2,4),16),a=parseInt(e.substring(4,6),16);return`${t},${s},${a}`}const Wo={cyan:"#00f0c8",purple:"#7c6ff7",pink:"#f472b6",bg:"#05050a"},md=[{name:"深空霓虹",colors:Wo},{name:"赛博朋克",colors:{cyan:"#00d4ff",purple:"#ff6ec7",pink:"#ffd700",bg:"#0a0015"}},{name:"极光森林",colors:{cyan:"#39ff14",purple:"#00b4d8",pink:"#e040fb",bg:"#060d06"}},{name:"烈焰熔岩",colors:{cyan:"#ff6b35",purple:"#f72585",pink:"#ffbe0b",bg:"#0d0508"}},{name:"冰蓝幻境",colors:{cyan:"#7df9ff",purple:"#5b8def",pink:"#c4b5fd",bg:"#050810"}},{name:"樱花物语",colors:{cyan:"#ffb7c5",purple:"#c084fc",pink:"#fb7185",bg:"#0a0508"}}],h0=V.createContext({theme:Wo,setTheme:()=>{}});function Zs(){return V.useContext(h0)}function Zx(i){const e=document.documentElement;e.style.setProperty("--c1",Du(i.cyan)),e.style.setProperty("--c2",Du(i.purple)),e.style.setProperty("--c3",Du(i.pink)),e.style.setProperty("--bg",i.bg),e.style.setProperty("--c1-hex",i.cyan),e.style.setProperty("--c2-hex",i.purple),e.style.setProperty("--c3-hex",i.pink)}function Jx({children:i}){const[e,t]=V.useState(()=>{try{const a=localStorage.getItem("vic-theme");if(a)return JSON.parse(a)}catch{}if(typeof window<"u"&&window.innerWidth<768){const a=Math.floor(Math.random()*md.length);return md[a].colors}return Wo}),s=a=>{t(a),typeof window<"u"&&window.innerWidth>=768&&localStorage.setItem("vic-theme",JSON.stringify(a))};return V.useEffect(()=>{Zx(e),window.innerWidth<768&&localStorage.removeItem("vic-theme")},[e]),l.jsx(h0.Provider,{value:{theme:e,setTheme:s},children:i})}function $x(){const i=V.useRef(null),e=V.useRef(null),t=V.useRef(null),s=V.useRef({x:-200,y:-200}),a=V.useRef({x:-200,y:-200}),c=V.useRef([]),f=V.useRef(0),d=V.useRef(!1),p=10,m=25,x=8,b=400,v=1;return V.useEffect(()=>{const S=k=>{s.current={x:k.clientX,y:k.clientY}},M=()=>d.current=!0,w=()=>d.current=!1,_=t.current,y=_==null?void 0:_.getContext("2d"),R=()=>{_&&(_.width=window.innerWidth,_.height=window.innerHeight)};window.addEventListener("resize",R),R();const D=k=>{const P=getComputedStyle(document.documentElement).getPropertyValue("--c1").trim(),A=P?`rgb(${P})`:"#00f0c8",j=performance.now(),se=Array.from({length:x},(te,fe)=>({x:k.clientX,y:k.clientY,angle:2*Math.PI*fe/x,startTime:j,color:A}));c.current.push(...se)};window.addEventListener("click",D);const T=k=>k*(2-k),z=k=>{a.current.x=s.current.x,a.current.y=s.current.y,i.current&&(i.current.style.transform=`translate(${s.current.x-4}px, ${s.current.y-4}px)`,i.current.style.opacity=d.current?"1":"0"),e.current&&(e.current.style.transform=`translate(${a.current.x-20}px, ${a.current.y-20}px)`,e.current.style.opacity=d.current?"1":"0"),y&&_&&(y.clearRect(0,0,_.width,_.height),c.current=c.current.filter(B=>{const P=k-B.startTime;if(P>=b)return!1;const A=P/b,j=T(A),se=j*m*v,te=p*(1-j),fe=B.x+se*Math.cos(B.angle),me=B.y+se*Math.sin(B.angle),de=B.x+(se+te)*Math.cos(B.angle),pe=B.y+(se+te)*Math.sin(B.angle);return y.strokeStyle=B.color,y.lineWidth=2,y.lineCap="round",y.beginPath(),y.moveTo(fe,me),y.lineTo(de,pe),y.stroke(),!0})),f.current=requestAnimationFrame(z)};window.addEventListener("mousemove",S),f.current=requestAnimationFrame(z);const U=document.getElementById("hero");return U&&(U.addEventListener("mouseenter",M),U.addEventListener("mouseleave",w)),()=>{window.removeEventListener("mousemove",S),window.removeEventListener("click",D),window.removeEventListener("resize",R),cancelAnimationFrame(f.current),U&&(U.removeEventListener("mouseenter",M),U.removeEventListener("mouseleave",w))}},[]),l.jsxs(l.Fragment,{children:[l.jsx("canvas",{ref:t,className:"fixed top-0 left-0 pointer-events-none z-[9995]",style:{width:"100vw",height:"100vh"}}),l.jsx("div",{ref:i,className:"fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9997] transition-opacity duration-200",style:{background:"rgb(var(--c1))",boxShadow:"0 0 8px rgba(0,240,200,0.9), 0 0 20px rgba(0,240,200,0.4)",willChange:"transform",opacity:0}}),l.jsx("div",{ref:e,className:"fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9996] transition-opacity duration-200",style:{border:"1px solid rgba(var(--c1),0.35)",willChange:"transform",opacity:0}})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tv=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Yp=i=>{const e=tv(i);return e.charAt(0).toUpperCase()+e.slice(1)},p0=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=V.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:c,iconNode:f,...d},p)=>V.createElement("svg",{ref:p,...nv,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:p0("lucide",a),...d},[...f.map(([m,x])=>V.createElement(m,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=(i,e)=>{const t=V.forwardRef(({className:s,...a},c)=>V.createElement(rv,{ref:c,iconNode:e,className:p0(`lucide-${ev(Yp(i))}`,`lucide-${i}`,s),...a}));return t.displayName=Yp(i),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],sv=et("activity",iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],av=et("arrow-right",ov);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],of=et("arrow-up-right",lv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ku=et("award",cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],dv=et("book-open",uv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],af=et("briefcase",fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]],pv=et("cake",hv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],gv=et("chart-column",mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],m0=et("check",xv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],g0=et("chevron-down",vv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Sv=et("chevron-right",yv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],bv=et("circle-alert",_v);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],wv=et("circle-check",Mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],x0=et("code-xml",Ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],v0=et("component",Tv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],y0=et("copy",Av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],Qp=et("disc-3",Cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Kp=et("download",Rv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],lf=et("external-link",Nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],S0=et("folder-open",Pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],zl=et("graduation-cap",Dv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],_0=et("house",kv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Iv=et("layers",Lv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Fv=et("layout-dashboard",Uv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],zv=et("lock",Ov);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],qo=et("mail",Bv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],b0=et("map-pin",jv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m21 3-6.75 6.75",key:"pv0uzu"}],["circle",{cx:"10",cy:"14",r:"6",key:"1qwbdc"}]],Gv=et("mars",Hv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Wv=et("menu",Vv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],M0=et("palette",Xv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],Yv=et("panel-left",qv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]],Kv=et("panel-top",Qv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Jv=et("pause",Zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],e1=et("phone-call",$v);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],n1=et("phone",t1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],i1=et("play",r1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],o1=et("presentation",s1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Zp=et("radio",a1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],c1=et("rotate-ccw",l1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],w0=et("send",u1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]],f1=et("skip-back",d1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],p1=et("skip-forward",h1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Yo=et("sparkles",m1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],x1=et("trophy",g1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],y1=et("twitter",v1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],_1=et("user",S1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],M1=et("volume-2",b1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],E1=et("volume-x",w1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],A1=et("wand-sparkles",T1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_i=et("x",C1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],N1=et("zap",R1);function P1({isLight:i}){const[e,t]=V.useState(!1),s=V.useRef(null),{theme:a,setTheme:c}=Zs(),[f,d]=V.useState(a);V.useEffect(()=>{d(a)},[a]),V.useEffect(()=>{const k=B=>{s.current&&!s.current.contains(B.target)&&t(!1)};return e&&document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[e]);const p=(k,B)=>{const P={...f,[k]:B};d(P),c(P)},m=i?"rgba(255,255,255,0.95)":"linear-gradient(160deg, #0d0d1a 0%, #0a0a14 100%)",x=i?"1px solid rgba(0,0,0,0.1)":"1px solid rgba(var(--c1),0.2)",b=i?"0 20px 60px rgba(0,0,0,0.1), 0 0 40px rgba(0,0,0,0.05)":"0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(var(--c1),0.08)",v=i?"#1a1a2e":"rgba(255,255,255,0.8)",S=i?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.06)",M=i?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)",w=k=>i?k?"rgba(0,0,0,0.1)":"rgba(0,0,0,0.03)":k?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.03)",_=k=>i?k?"1px solid rgba(0,0,0,0.2)":"1px solid rgba(0,0,0,0.06)":k?"1px solid rgba(var(--c1),0.4)":"1px solid rgba(255,255,255,0.06)",y=k=>i?k?"#1a1a2e":"rgba(0,0,0,0.45)":k?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.45)",R=i?"linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)":"linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",D=i?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)",T=i?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)",z=i?"rgba(0,0,0,0.3)":"rgba(255,255,255,0.3)",U=i?"1.5px solid rgba(0,0,0,0.15)":"1.5px solid rgba(255,255,255,0.15)";return l.jsxs("div",{className:"relative",ref:s,children:[l.jsx("button",{onClick:()=>t(!e),className:"flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 hover:scale-110",style:i?{background:"transparent",color:"#1a1a2e",fontWeight:500,border:"0.5px solid rgba(0,0,0,0.22)",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",transition:"all 0.3s"}:{background:"linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",color:"rgba(255,255,255,0.95)",fontWeight:600,border:"0.5px solid rgba(var(--c1),0.4)",boxShadow:"0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",transition:"all 0.3s"},title:"切换主题色",children:l.jsx(M0,{size:16})}),e&&l.jsxs("div",{className:"absolute right-0 top-12 w-72 rounded-xl p-4 z-[100]",style:{background:m,border:x,boxShadow:b,backdropFilter:"blur(20px)"},children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:v,letterSpacing:"0.05em"},children:"🎨 主题配色"}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("button",{onClick:()=>{c(Wo),d(Wo)},className:"w-6 h-6 rounded-md flex items-center justify-center transition-colors",style:{background:S,color:M},title:"重置默认",children:l.jsx(c1,{size:12})}),l.jsx("button",{onClick:()=>t(!1),className:"w-6 h-6 rounded-md flex items-center justify-center transition-colors",style:{background:S,color:M},children:l.jsx(_i,{size:12})})]})]}),l.jsx("div",{className:"grid grid-cols-3 gap-2 mb-4",children:md.map(k=>{const B=k.colors.cyan===a.cyan&&k.colors.purple===a.purple&&k.colors.pink===a.pink;return l.jsxs("button",{onClick:()=>c(k.colors),className:"rounded-lg p-2 transition-all duration-200 hover:scale-105",style:{background:w(B),border:_(B)},children:[l.jsx("div",{className:"flex gap-1 justify-center mb-1.5",children:[k.colors.cyan,k.colors.purple,k.colors.pink].map((P,A)=>l.jsx("div",{className:"w-4 h-4 rounded-full",style:{background:P,boxShadow:`0 0 6px ${P}66`}},A))}),l.jsx("span",{style:{fontSize:"0.65rem",color:y(B),fontWeight:B?600:400},children:k.name})]},k.name)})}),l.jsx("div",{className:"h-px mb-3",style:{background:R}}),l.jsx("div",{style:{fontSize:"0.7rem",fontWeight:500,color:D,letterSpacing:"0.08em",marginBottom:"8px"},children:"自定义颜色"}),l.jsx("div",{className:"space-y-2",children:[{key:"cyan",label:"主色 (霓虹青)"},{key:"purple",label:"辅色 (紫罗兰)"},{key:"pink",label:"点缀 (粉玫)"},{key:"bg",label:"背景色"}].map(({key:k,label:B})=>l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsxs("label",{className:"relative w-7 h-7 rounded-lg overflow-hidden cursor-pointer flex-shrink-0",style:{border:U,boxShadow:`0 0 8px ${f[k]}44`},children:[l.jsx("input",{type:"color",value:f[k],onChange:P=>p(k,P.target.value),className:"absolute inset-0 opacity-0 cursor-pointer w-full h-full"}),l.jsx("div",{className:"w-full h-full",style:{background:f[k]}})]}),l.jsx("span",{style:{fontSize:"0.72rem",color:T,flex:1},children:B}),l.jsx("span",{style:{fontSize:"0.65rem",color:z,fontFamily:"monospace"},children:f[k].toUpperCase()})]},k))})]})]})}var D1=f0();function Vs({children:i}){const[e,t]=V.useState(!1);return V.useEffect(()=>(t(!0),()=>t(!1)),[]),e?D1.createPortal(i,document.body):null}const Jp="data:image/png;base64,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",$p=[{label:"Home",href:"hero",icon:_0},{label:"Skills",href:"skills",icon:x0},{label:"Projects",href:"projects",icon:af},{label:"Works",href:"portfolio",icon:S0},{label:"Education",href:"education",icon:zl,iconSize:26},{label:"Contact",href:"contact",icon:qo},{label:"About Me",href:"about",icon:_1}];function k1({navMode:i,onToggleNavMode:e,active:t,go:s,isLight:a}){const[c,f]=V.useState(!1),[d,p]=V.useState(!1),[m,x]=V.useState(null),[b,v]=V.useState(!1);V.useEffect(()=>{const A=()=>{f(window.scrollY>50)};return window.addEventListener("scroll",A,{passive:!0}),A(),()=>window.removeEventListener("scroll",A)},[]);const S=A=>{if(A==="about"){v(!0);return}s(A),p(!1)},M=a?"rgba(255,255,255,0.6)":c?"rgba(5,5,12,0.5)":"rgba(5,5,12,0.6)",w=a?"1px solid rgba(0,0,0,0.08)":`1px solid ${c?"rgba(var(--c1),0.07)":"rgba(var(--c1),0)"}`,_=a?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.04)",y=a?"1px solid rgba(0,0,0,0.10)":"1px solid rgba(255,255,255,0.18)",R=a?"inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 24px rgba(0,0,0,0.06)":"inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)",D=a?"rgba(0,0,0,0.45)":"rgba(255,255,255,0.5)",T=a?"rgba(0,0,0,0.75)":"rgba(255,255,255,0.9)",z=a?"#1a1a2e":"#f0f4f8",U=a?"linear-gradient(135deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.22) 100%)":"linear-gradient(135deg, rgba(var(--c1),0.45) 0%, rgba(var(--c1),0.18) 50%, rgba(var(--c1),0.28) 100%)",k=a?"1px solid rgba(0,0,0,0.22), 1px solid rgba(255,255,255,0.45) inset":"1px solid rgba(var(--c1),0.7), 1px solid rgba(255,255,255,0.18) inset",B=a?"0 0 24px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.15), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -2px 0 rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.12)":"0 0 50px rgba(var(--c1),0.45), 0 12px 48px rgba(0,0,0,0.35), inset 0 3px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.25), 0 0 0 1px rgba(var(--c1),0.25), 0 0 30px rgba(var(--c1),0.2)",P=a?"#1a1a2e":"rgb(var(--c1))";return l.jsxs(l.Fragment,{children:[l.jsxs("nav",{className:"fixed top-0 left-0 z-50 transition-all duration-500",style:{background:M,backdropFilter:"blur(24px) saturate(180%)",WebkitBackdropFilter:"blur(24px) saturate(180%)",borderBottom:w,boxShadow:a?"0 4px 24px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.5)":"0 4px 24px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)",transform:"scale(var(--screen-scale))",transformOrigin:"top left",width:"calc(100% / var(--screen-scale))"},children:[l.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between gap-4",children:[l.jsxs("button",{onClick:()=>v(!0),className:"flex items-center gap-3 flex-shrink-0",children:[l.jsx("div",{className:"relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0",style:{border:a?"1.5px solid rgba(0,0,0,0.12)":"1.5px solid rgba(var(--c1),0.45)",boxShadow:a?"0 1px 6px rgba(0,0,0,0.12)":"0 0 8px rgba(var(--c1),0.25)",transition:"border 0.4s, box-shadow 0.4s"},children:l.jsx("img",{src:Jp,alt:"Vic Qu",className:"w-full h-full object-cover object-center"})}),l.jsx("span",{className:"whitespace-nowrap",style:{fontWeight:700,fontSize:"1.2rem",color:z,letterSpacing:"0.08em",transition:"color 0.4s"},children:"曲维甲"})]}),i==="top"&&l.jsxs("div",{className:`hidden md:flex items-center gap-4 px-1.5 py-1.5 rounded-full transition-all duration-500 flex-shrink-0 ${a?"nav-light":"nav-dark"}`,style:{background:_,border:y,backdropFilter:"blur(12px)",boxShadow:R},children:[$p.map(A=>{const j=t===A.href,se=m===A.href;return l.jsxs("button",{onClick:()=>{S(A.href)},onMouseEnter:()=>x(A.href),onMouseLeave:()=>x(null),className:"relative px-3 py-1.5 text-base rounded-full overflow-hidden nav-glass-btn flex-shrink-0 whitespace-nowrap",style:{color:j?P:se?T:D,fontWeight:j?600:400,background:j?U:"transparent",border:j?k:"1px solid transparent",boxShadow:j?B:"none",letterSpacing:"0.01em",transition:"color 0.25s, background 0.3s, border 0.3s, box-shadow 0.3s"},children:[j&&!a&&l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"absolute top-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none",style:{width:"70%",height:"1.5px",background:"linear-gradient(90deg, transparent, rgba(var(--c1),0.85), transparent)",boxShadow:"0 0 12px rgba(var(--c1),0.5), 0 0 24px rgba(var(--c1),0.25)"}}),l.jsx("span",{className:"absolute top-1 left-1/2 -translate-x-1/2 rounded-full pointer-events-none",style:{width:"50%",height:"1px",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",opacity:.6}})]}),A.label]},A.label)}),l.jsx("style",{children:`
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
            `})]}),l.jsxs("div",{className:"hidden md:flex items-center gap-2 flex-shrink-0",children:[l.jsx("button",{onClick:e,className:"flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 hover:scale-110",style:a?{background:"transparent",color:"#1a1a2e",fontWeight:500,border:"0.5px solid rgba(0,0,0,0.22)",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",transition:"all 0.3s"}:{background:"linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",color:"rgba(255,255,255,0.95)",fontWeight:600,border:"0.5px solid rgba(var(--c1),0.4)",boxShadow:"0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",transition:"all 0.3s"},title:i==="top"?"切换侧边导航":"切换顶部导航",children:l.jsx(Yv,{size:16})}),l.jsx(P1,{isLight:a}),l.jsx("button",{className:"flex items-center gap-2 px-5 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-[1.1] whitespace-nowrap flex-shrink-0",onClick:()=>v(!0),style:a?{background:"transparent",color:"#1a1a2e",fontWeight:500,border:"0.5px solid rgba(0,0,0,0.22)",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",transition:"all 0.3s"}:{background:"linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",color:"rgba(255,255,255,0.95)",fontWeight:600,border:"0.5px solid rgba(var(--c1),0.4)",boxShadow:"0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",transition:"all 0.3s"},children:"About Me"})]}),l.jsx("button",{className:"md:hidden",style:{color:a?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.7)",transition:"color 0.4s"},onClick:()=>p(!d),children:d?l.jsx(_i,{size:26}):l.jsx(Wv,{size:26})})]}),d&&l.jsxs(Vs,{children:[l.jsxs("div",{className:"fixed inset-0 z-[100] flex flex-col",style:{background:a?"rgba(255,255,255,0.98)":"rgba(5,5,12,0.98)",backdropFilter:"blur(40px) saturate(180%)",WebkitBackdropFilter:"blur(40px) saturate(180%)"},onClick:()=>p(!1),children:[l.jsx("div",{className:"flex items-center justify-end px-6 h-[68px] flex-shrink-0",children:l.jsx("button",{onClick:A=>{A.stopPropagation(),p(!1)},className:"w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 active:scale-95",style:{background:a?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.08)",color:a?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)"},children:l.jsx(_i,{size:22})})}),l.jsx("div",{className:"flex-1 flex flex-col items-start justify-center px-10 gap-0 -mt-10",style:{animation:"menuSlideIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",opacity:0,transform:"translateY(-20px)"},children:$p.map((A,j)=>{const se=A.icon,te=t===A.href;return l.jsxs("button",{onClick:fe=>{fe.stopPropagation(),S(A.href)},className:"flex items-center gap-4 py-4 w-full transition-all duration-300",style:{fontSize:"clamp(1.5rem, 5vw, 2.2rem)",fontWeight:te?700:400,color:te?"rgb(var(--c1))":a?"rgba(0,0,0,0.8)":"rgba(255,255,255,0.85)",letterSpacing:"0.02em",animation:`menuItemFadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${.1+j*.06}s forwards`,opacity:0,transform:"translateY(12px)"},children:[l.jsx("span",{className:"inline-flex items-center justify-center flex-shrink-0",style:{width:"28px"},children:l.jsx(se,{size:A.iconSize||24})}),A.label]},A.label)})})]}),l.jsx("style",{children:`
              @keyframes menuSlideIn {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes menuItemFadeIn {
                from { opacity: 0; transform: translateY(12px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `})]})]}),b&&l.jsx(Vs,{children:l.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-4",style:{backdropFilter:"blur(16px)",background:"rgba(5,5,12,0.75)"},onClick:()=>v(!1),children:l.jsxs("div",{className:"relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl",style:{background:"linear-gradient(160deg, #0d0d1a 0%, #0a0a14 100%)",border:"1px solid rgba(var(--c1),0.18)",boxShadow:"0 0 60px rgba(var(--c1),0.12), 0 0 120px rgba(var(--c2),0.08), inset 0 1px 0 rgba(var(--c1),0.1)"},onClick:A=>A.stopPropagation(),children:[l.jsxs("div",{className:"sticky top-0 z-10 bg-[#0d0d1a] rounded-t-2xl px-6 sm:px-8 pt-4 sm:pt-8 pb-0",children:[l.jsx("div",{className:"absolute top-0 left-0 right-0 h-px rounded-t-2xl",style:{background:"linear-gradient(90deg, transparent, rgb(var(--c1)), rgb(var(--c2)), transparent)"}}),l.jsx("button",{onClick:()=>v(!1),className:"absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.5)"},children:l.jsx(_i,{size:15})}),l.jsxs("div",{className:"flex items-center gap-3 sm:gap-5 mb-4 sm:mb-8",children:[l.jsx("div",{className:"relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0",style:{border:"2px solid rgba(var(--c1),0.4)",boxShadow:"0 0 20px rgba(var(--c1),0.2)"},children:l.jsx("img",{src:Jp,alt:"Vic Qu",className:"w-full h-full object-cover"})}),l.jsxs("div",{children:[l.jsx("h2",{style:{fontSize:"1.0rem",fontWeight:700,color:"#f0f4f8",letterSpacing:"0.04em"},className:"sm:text-[1.6rem]",children:"曲维甲"}),l.jsx("p",{style:{color:"rgb(var(--c1))",fontSize:"0.8rem",fontWeight:500,letterSpacing:"0.08em"},className:"sm:text-[0.9rem]",children:"Vic Qu · ENFJ 全栈设计师"}),l.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 mt-1 sm:mt-1.5",children:[l.jsx(b0,{size:12,style:{color:"rgba(255,255,255,0.35)"}}),l.jsx("span",{style:{color:"rgba(255,255,255,0.35)",fontSize:"0.8rem"},children:"济南 · 中国"})]})]})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[{icon:l.jsx(Gv,{size:20}),label:"性别",value:"男"},{icon:l.jsx(pv,{size:20}),label:"生日",value:" 1992.7.9"},{icon:l.jsx(n1,{size:20}),label:"电话",value:"+86 156 6279 6885",mobileHref:"tel:15662796885"},{icon:l.jsx(qo,{size:20}),label:"邮箱",value:"quweijia@vip.qq.com",mobileHref:"mailto:quweijia@vip.qq.com"}].map(A=>{const j=typeof window<"u"&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),se=j&&A.mobileHref?"a":"div";return l.jsxs(se,{href:j&&A.mobileHref?A.mobileHref:void 0,className:"flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 rounded-xl block",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)",textDecoration:"none"},children:[l.jsx("span",{style:{color:"rgb(var(--c1))"},children:A.icon}),l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.3)",marginBottom:"1px"},children:A.label}),l.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.8)",fontWeight:500},children:A.value})]})]},A.label)})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto px-6 sm:px-8 pb-6 sm:pb-8",children:[l.jsx("style",{children:`
        div::-webkit-scrollbar {
          display: none;
        }
      `}),l.jsxs("div",{className:"mt-8",children:[l.jsxs("div",{className:"mb-6",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c1)),rgb(var(--c2)))"}}),l.jsx("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:"个人简介"})]}),l.jsx("p",{style:{fontSize:"0.9rem",lineHeight:"1.8",color:"rgba(255,255,255,0.6)"},children:"拥有 10 年以上 UI/UX 设计经验的全栈设计师，深度融合用户研究、交互设计与前端技术，擅长将复杂业务逻辑转化为清晰直觉的数字体验。ENFJ 人格驱动，热衷于跨职能协作与设计系统建设，坚持以业务价值为核心的设计观，通过可复用的设计体系和AI工具提效，打造体验、效率、商业三者平衡的产品设计团队。"})]}),l.jsxs("div",{className:"mb-6",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c2)),rgb(var(--c3)))"}}),l.jsxs("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:[l.jsx(dv,{size:12,className:"inline mr-1.5",style:{color:"rgb(var(--c2))"}}),"教育经历"]})]}),l.jsx("div",{className:"space-y-3",children:[{school:"中国石油大学（华东）",degree:"建筑环境与能源应用工程 · 本科",year:"2011 – 2015"},{school:"Google UX Design Certificate",degree:"用户体验设计专业认证",year:"2017"}].map(A=>l.jsxs("div",{className:"flex items-start justify-between px-4 py-3 rounded-xl",style:{background:"rgba(var(--c2),0.06)",border:"1px solid rgba(var(--c2),0.12)"},children:[l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:"0.88rem",fontWeight:600,color:"rgba(255,255,255,0.8)"},children:A.school}),l.jsx("p",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",marginTop:"2px"},children:A.degree})]}),l.jsx("span",{style:{fontSize:"0.75rem",color:"rgb(var(--c2))",fontWeight:500,whiteSpace:"nowrap",marginLeft:"12px"},children:A.year})]},A.school))})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("div",{className:"w-1 h-4 rounded-full",style:{background:"linear-gradient(180deg,rgb(var(--c3)),rgb(var(--c1)))"}}),l.jsxs("h3",{style:{fontSize:"0.85rem",fontWeight:600,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:[l.jsx(af,{size:12,className:"inline mr-1.5",style:{color:"rgb(var(--c3))"}}),"工作经历"]})]}),l.jsx("div",{className:"space-y-3",children:[{company:"浪潮智慧建筑科技有限公司",role:"UI 设计主管",year:"2024 – 至今",desc:"深耕智慧园区、智慧工地、建筑节能等核心业务领域的 UI 设计/管理工作。主导构建覆盖移动端与 PC 端的全链路原子组件设计规范体系，建立标准化评审机制把控团队设计输出质量；统筹展厅设计方案对接与落地，协助管理层完成商务级 PPT 视觉优化等。"},{company:"历城控股集团",role:"UI 设计主管",year:"2023 – 2024",desc:"聚焦数字政府建设、数智化产品开发、应用及运营等业务，设计不同风格的视觉界面，参与项目评审并提出有效的修改方案。"},{company:"山东高速集团",role:"UI 设计主管",year:"2023 – 2023",desc:"全面负责UI设计组工作推进，优化迭代公司自主研发的智能货运交易共享平台，参与产品需求讨论，保障产品设计方案有效落地。"},{company:"山东爱城市网科技有限公司",role:"高级 UI/UX 设计师",year:"2018 – 2023",desc:"负责爱城市网 App 核心应用设计、交互动效制作，优化产品和研发的工作流程，维护和更新产品设计规范元件库，牵头设计类专利撰写等。"}].map(A=>l.jsxs("div",{className:"px-4 py-3 rounded-xl",style:{background:"rgba(var(--c3),0.05)",border:"1px solid rgba(var(--c3),0.1)"},children:[l.jsxs("div",{className:"flex items-start justify-between mb-1",children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.88rem",fontWeight:600,color:"rgba(255,255,255,0.8)",lineHeight:1.5},children:A.company}),l.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)"},children:A.role})]}),l.jsx("span",{style:{fontSize:"0.75rem",color:"rgb(var(--c3))",fontWeight:500,whiteSpace:"nowrap",marginLeft:"12px"},children:A.year})]}),l.jsx("p",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.35)",lineHeight:"1.6"},children:A.desc})]},A.company))})]})]})]})]})})})]})}const L1=[{label:"Home",href:"hero",icon:_0},{label:"Skills",href:"skills",icon:x0},{label:"Projects",href:"projects",icon:af},{label:"Works",href:"portfolio",icon:S0},{label:"Education",href:"education",icon:zl,iconSize:18},{label:"Contact",href:"contact",icon:qo}],I1=44,U1=180,Lu=1600;function F1({active:i,onNavigate:e,isLight:t,onSwitchToTop:s}){const[a,c]=V.useState(!1),[f,d]=V.useState(null),p=V.useRef(null),m=V.useRef(),x=V.useCallback(()=>{m.current&&clearTimeout(m.current),window.innerWidth<Lu&&c(!0)},[]),b=V.useCallback(()=>{m.current&&clearTimeout(m.current),window.innerWidth<Lu&&(m.current=setTimeout(()=>{c(!1)},300))},[]);V.useEffect(()=>{const R=()=>{window.innerWidth>=Lu?c(!0):c(!1)};return R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[]);const v=a?U1:I1,S=t?"rgba(255,255,255,0.75)":"rgba(5,5,12,0.75)",M=t?"rgba(0,0,0,0.08)":"rgba(var(--c1),0.12)",w=t?"rgba(0,0,0,0.35)":"rgba(255,255,255,0.35)",_=t?"#1a1a2e":"rgb(var(--c1))",y=t?"rgba(0,0,0,0.75)":"rgba(255,255,255,0.85)";return l.jsxs("div",{ref:p,className:"fixed left-0 top-0 h-full z-[100] flex items-center",style:{pointerEvents:"none"},children:[a&&l.jsx("div",{className:"absolute left-0 top-[10%] h-[80%] w-px",style:{background:"linear-gradient(180deg, transparent, rgba(var(--c1),0.6) 20%, rgba(var(--c1),0.8) 50%, rgba(var(--c1),0.6) 80%, transparent)",boxShadow:"0 0 8px rgba(var(--c1),0.3), 0 0 18px rgba(var(--c1),0.1)"}}),l.jsxs("div",{className:"relative flex flex-col items-center justify-center py-4 transition-all duration-400 ease-out",style:{width:`${v}px`,marginLeft:"8px",gap:a?"8px":"4px",background:a?S:t?"rgba(255,255,255,0.55)":"rgba(5,5,12,0.55)",backdropFilter:a?"blur(20px) saturate(180%)":"blur(12px)",WebkitBackdropFilter:a?"blur(20px) saturate(180%)":"blur(12px)",border:a?`1px solid ${M}`:t?"1px solid rgba(0,0,0,0.1)":"1px solid rgba(255,255,255,0.12)",borderLeft:"none",borderRadius:a?"16px":"24px",boxShadow:a?t?"4px 0 24px rgba(0,0,0,0.06)":"4px 0 24px rgba(0,0,0,0.3), 0 0 40px rgba(var(--c1),0.06)":t?"0 2px 8px rgba(0,0,0,0.08)":"0 2px 8px rgba(0,0,0,0.25)",pointerEvents:"auto"},onMouseEnter:x,onMouseLeave:b,children:[l.jsx("div",{className:"w-full flex justify-center mb-2 overflow-hidden transition-all duration-400",style:{opacity:a?1:0,maxHeight:a?"32px":"0px"},children:l.jsxs("button",{onClick:s,className:"flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all duration-300 hover:scale-105",style:{color:w,background:t?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.04)",border:t?"1px solid rgba(0,0,0,0.08)":"1px solid rgba(255,255,255,0.1)"},title:"切换回顶部导航",children:[l.jsx(Kv,{size:12}),l.jsx("span",{className:"whitespace-nowrap",children:"顶部导航"})]})}),L1.map((R,D)=>{const T=i===R.href,z=f===D,U=R.icon;return l.jsxs("button",{onClick:()=>{e(R.href)},onMouseEnter:()=>d(D),onMouseLeave:()=>d(null),className:"relative flex items-center rounded-r-lg transition-all duration-300 overflow-hidden",style:{width:a?"calc(100% - 4px)":"28px",height:a?"38px":"28px",justifyContent:a?"flex-start":"center",paddingLeft:a?"12px":"0",color:T?_:z?y:w,fontWeight:T?600:400,background:T&&a?t?"linear-gradient(90deg, rgba(0,0,0,0.04) 0%, transparent 100%)":"linear-gradient(90deg, rgba(var(--c1),0.12) 0%, transparent 100%)":"transparent",borderLeft:T&&a?`2px solid ${_}`:"2px solid transparent",boxShadow:T&&a?t?"0 0 12px rgba(0,0,0,0.06)":"0 0 16px rgba(var(--c1),0.15)":"none"},children:[T&&a&&l.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 rounded-full",style:{width:"2px",height:"60%",background:t?"rgba(0,0,0,0.15)":"rgba(var(--c1),0.5)",boxShadow:t?"0 0 4px rgba(0,0,0,0.08)":"0 0 8px rgba(var(--c1),0.4)"}}),a&&z&&!T&&l.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(90deg, transparent, rgba(var(--c1),0.08), transparent)",animation:"side-sweep 0.8s ease forwards"}}),a&&l.jsxs(l.Fragment,{children:[l.jsx(U,{size:R.iconSize||16,style:{flexShrink:0,transition:"all 0.3s",filter:T?`drop-shadow(0 0 4px ${t?"rgba(0,0,0,0.2)":"rgba(var(--c1),0.4)"})`:"none"}}),l.jsx("span",{className:"overflow-hidden whitespace-nowrap transition-all duration-400",style:{marginLeft:"10px",opacity:1,maxWidth:"120px",fontSize:"0.78rem",letterSpacing:"0.02em"},children:R.label})]}),!a&&l.jsxs(l.Fragment,{children:[!T&&l.jsx("div",{className:"rounded-full transition-all duration-300",style:{width:"8px",height:"8px",background:z?"rgba(var(--c1),0.5)":w,boxShadow:z?"0 0 6px rgba(var(--c1),0.3)":"none"}}),T&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"absolute rounded-full",style:{width:"10px",height:"10px",background:"rgb(var(--c1))",boxShadow:"0 0 10px rgba(var(--c1),0.6)"}}),l.jsx("div",{className:"absolute rounded-full animate-ping",style:{width:"18px",height:"18px",border:"1px solid rgba(var(--c1),0.3)",animationDuration:"2s"}})]})]})]},R.href)})]}),l.jsx("style",{children:`
        @keyframes side-sweep {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `})]})}function E0({isOpen:i,onClose:e,onConfirm:t}){const[s,a]=V.useState(""),[c,f]=V.useState(""),d="123789";V.useEffect(()=>{i&&(a(""),f(""))},[i]),V.useEffect(()=>{const m=x=>{x.key==="Escape"&&i&&e()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[i,e]);const p=m=>{m.preventDefault(),s===d?(t(),e()):(f("密码错误，请重试"),a(""))};return i?l.jsx(Vs,{children:l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backdropFilter:"blur(8px)",background:"rgba(0, 0, 0, 0.6)"},onClick:e,children:l.jsxs("div",{className:"relative w-full max-w-md rounded-2xl p-8 shadow-2xl",style:{background:"var(--bg)",border:"1px solid rgba(var(--c1), 0.2)",boxShadow:"0 0 40px rgba(var(--c1), 0.15), 0 20px 60px rgba(0, 0, 0, 0.5)"},onClick:m=>m.stopPropagation(),children:[l.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 hover:rotate-90",style:{color:"rgba(255, 255, 255, 0.5)",background:"rgba(var(--c1), 0.1)"},onMouseEnter:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.2)",m.currentTarget.style.color="rgb(var(--c1))"},onMouseLeave:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.1)",m.currentTarget.style.color="rgba(255, 255, 255, 0.5)"},children:l.jsx(_i,{size:20})}),l.jsx("div",{className:"mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6",style:{background:"linear-gradient(135deg, rgba(var(--c1), 0.15), rgba(var(--c1), 0.05))",border:"1px solid rgba(var(--c1), 0.3)"},children:l.jsx(zv,{size:32,style:{color:"rgb(var(--c1))"}})}),l.jsx("h2",{className:"text-2xl font-bold text-center mb-2",style:{color:"rgba(255, 255, 255, 0.9)"},children:"请输入密码"}),l.jsx("p",{className:"text-center mb-6 text-sm",style:{color:"rgba(255, 255, 255, 0.5)"},children:"请联系 15662796885 获取"}),l.jsxs("form",{onSubmit:p,children:[l.jsxs("div",{className:"mb-6",children:[l.jsx("input",{type:"password",value:s,onChange:m=>{a(m.target.value),f("")},placeholder:"输入密码",className:"w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-200",style:{background:"rgba(var(--c1), 0.05)",border:c?"1px solid rgba(239, 68, 68, 0.5)":"1px solid rgba(var(--c1), 0.2)",color:"rgba(255, 255, 255, 0.9)",boxShadow:c?"0 0 0 3px rgba(239, 68, 68, 0.1)":"none"},onFocus:m=>{c||(m.currentTarget.style.borderColor="rgba(var(--c1), 0.4)",m.currentTarget.style.boxShadow="0 0 0 3px rgba(var(--c1), 0.1)")},onBlur:m=>{c||(m.currentTarget.style.borderColor="rgba(var(--c1), 0.2)",m.currentTarget.style.boxShadow="none")},autoFocus:!0}),c&&l.jsxs("div",{className:"mt-2 flex items-center gap-2 text-sm",style:{color:"rgb(239, 68, 68)"},children:[l.jsx(bv,{size:16}),l.jsx("span",{children:c})]})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{type:"button",onClick:e,className:"flex-1 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:scale-[1.02]",style:{background:"rgba(var(--c1), 0.1)",color:"rgba(255, 255, 255, 0.7)",border:"1px solid rgba(var(--c1), 0.2)"},onMouseEnter:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.15)",m.currentTarget.style.color="rgba(255, 255, 255, 0.9)"},onMouseLeave:m=>{m.currentTarget.style.background="rgba(var(--c1), 0.1)",m.currentTarget.style.color="rgba(255, 255, 255, 0.7)"},children:"取消"}),l.jsx("button",{type:"submit",className:"flex-1 px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 hover:scale-[1.02]",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",color:"var(--bg)",border:"none",boxShadow:"0 0 20px rgba(var(--c1), 0.3)"},onMouseEnter:m=>{m.currentTarget.style.boxShadow="0 0 30px rgba(var(--c1), 0.4)"},onMouseLeave:m=>{m.currentTarget.style.boxShadow="0 0 20px rgba(var(--c1), 0.3)"},children:"确认"})]})]})]})})}):null}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cf="170",O1=0,em=1,z1=2,T0=1,B1=2,Or=3,wi=0,Dn=1,zr=2,bi=0,js=1,gd=2,tm=3,nm=4,j1=5,Qi=100,H1=101,G1=102,V1=103,W1=104,X1=200,q1=201,Y1=202,Q1=203,xd=204,vd=205,K1=206,Z1=207,J1=208,$1=209,ey=210,ty=211,ny=212,ry=213,iy=214,yd=0,Sd=1,_d=2,Ws=3,bd=4,Md=5,wd=6,Ed=7,A0=0,sy=1,oy=2,Mi=0,ay=1,ly=2,cy=3,uy=4,dy=5,fy=6,hy=7,C0=300,Xs=301,qs=302,Td=303,Ad=304,Wl=306,Cd=1e3,fr=1001,Rd=1002,Bn=1003,py=1004,ol=1005,Pn=1006,Iu=1007,Zi=1008,Gr=1009,R0=1010,N0=1011,Xo=1012,uf=1013,$i=1014,_r=1015,Js=1016,df=1017,ff=1018,Ys=1020,P0=35902,D0=1021,k0=1022,Zn=1023,L0=1024,I0=1025,Hs=1026,Qs=1027,U0=1028,hf=1029,F0=1030,pf=1031,mf=1033,kl=33776,Ll=33777,Il=33778,Ul=33779,Nd=35840,Pd=35841,Dd=35842,kd=35843,Ld=36196,Id=37492,Ud=37496,Fd=37808,Od=37809,zd=37810,Bd=37811,jd=37812,Hd=37813,Gd=37814,Vd=37815,Wd=37816,Xd=37817,qd=37818,Yd=37819,Qd=37820,Kd=37821,Fl=36492,Zd=36494,Jd=36495,O0=36283,$d=36284,ef=36285,tf=36286,my=3200,gy=3201,xy=0,vy=1,Si="",Kn="srgb",$s="srgb-linear",Xl="linear",Pt="srgb",Es=7680,rm=519,yy=512,Sy=513,_y=514,z0=515,by=516,My=517,wy=518,Ey=519,im=35044,sm="300 es",Br=2e3,Bl=2001;class eo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(t);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let c=0,f=a.length;c<f;c++)a[c].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,nf=180/Math.PI;function Qo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]).toLowerCase()}function Nn(i,e,t){return Math.max(e,Math.min(t,i))}function Ty(i,e){return(i%e+e)%e}function Fu(i,e,t){return(1-t)*i+t*e}function Io(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*a+e.x,this.y=c*a+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,s,a,c,f,d,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,c,f,d,p,m)}set(e,t,s,a,c,f,d,p,m){const x=this.elements;return x[0]=e,x[1]=a,x[2]=d,x[3]=t,x[4]=c,x[5]=p,x[6]=s,x[7]=f,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],x=s[4],b=s[7],v=s[2],S=s[5],M=s[8],w=a[0],_=a[3],y=a[6],R=a[1],D=a[4],T=a[7],z=a[2],U=a[5],k=a[8];return c[0]=f*w+d*R+p*z,c[3]=f*_+d*D+p*U,c[6]=f*y+d*T+p*k,c[1]=m*w+x*R+b*z,c[4]=m*_+x*D+b*U,c[7]=m*y+x*T+b*k,c[2]=v*w+S*R+M*z,c[5]=v*_+S*D+M*U,c[8]=v*y+S*T+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return t*f*x-t*d*m-s*c*x+s*d*p+a*c*m-a*f*p}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],x=e[8],b=x*f-d*m,v=d*p-x*c,S=m*c-f*p,M=t*b+s*v+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=b*w,e[1]=(a*m-x*s)*w,e[2]=(d*s-a*f)*w,e[3]=v*w,e[4]=(x*t-a*p)*w,e[5]=(a*c-d*t)*w,e[6]=S*w,e[7]=(s*p-m*t)*w,e[8]=(f*t-s*c)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Ou.makeScale(e,t)),this}rotate(e){return this.premultiply(Ou.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ou=new ut;function B0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ay(){const i=jl("canvas");return i.style.display="block",i}const om={};function Ho(i){i in om||(om[i]=!0,console.warn(i))}function Cy(i,e,t){return new Promise(function(s,a){function c(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:s()}}setTimeout(c,t)})}function Ry(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ny(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _t={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(i.r=jr(i.r),i.g=jr(i.g),i.b=jr(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?Xl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const am=[.64,.33,.3,.6,.15,.06],lm=[.2126,.7152,.0722],cm=[.3127,.329],um=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_t.define({[$s]:{primaries:am,whitePoint:cm,transfer:Xl,toXYZ:um,fromXYZ:dm,luminanceCoefficients:lm,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:am,whitePoint:cm,transfer:Pt,toXYZ:um,fromXYZ:dm,luminanceCoefficients:lm,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Ts;class Py{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=jl("canvas")),Ts.width=e.width,Ts.height=e.height;const s=Ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jl("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),c=a.data;for(let f=0;f<c.length;f++)c[f]=jr(c[f]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(jr(t[s]/255)*255):t[s]=jr(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dy=0;class j0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?c.push(zu(a[f].image)):c.push(zu(a[f]))}else c=zu(a);s.url=c}return t||(e.images[this.uuid]=s),s}}function zu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Py.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ky=0;class Sn extends eo{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,s=fr,a=fr,c=Pn,f=Zi,d=Zn,p=Gr,m=Sn.DEFAULT_ANISOTROPY,x=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Qo(),this.name="",this.source=new j0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==C0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cd:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case Rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cd:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case Rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=C0;Sn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,s=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,c=this.w,f=e.elements;return this.x=f[0]*t+f[4]*s+f[8]*a+f[12]*c,this.y=f[1]*t+f[5]*s+f[9]*a+f[13]*c,this.z=f[2]*t+f[6]*s+f[10]*a+f[14]*c,this.w=f[3]*t+f[7]*s+f[11]*a+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,c;const p=e.elements,m=p[0],x=p[4],b=p[8],v=p[1],S=p[5],M=p[9],w=p[2],_=p[6],y=p[10];if(Math.abs(x-v)<.01&&Math.abs(b-w)<.01&&Math.abs(M-_)<.01){if(Math.abs(x+v)<.1&&Math.abs(b+w)<.1&&Math.abs(M+_)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(m+1)/2,T=(S+1)/2,z=(y+1)/2,U=(x+v)/4,k=(b+w)/4,B=(M+_)/4;return D>T&&D>z?D<.01?(s=0,a=.707106781,c=.707106781):(s=Math.sqrt(D),a=U/s,c=k/s):T>z?T<.01?(s=.707106781,a=0,c=.707106781):(a=Math.sqrt(T),s=U/a,c=B/a):z<.01?(s=.707106781,a=.707106781,c=0):(c=Math.sqrt(z),s=k/c,a=B/c),this.set(s,a,c,t),this}let R=Math.sqrt((_-M)*(_-M)+(b-w)*(b-w)+(v-x)*(v-x));return Math.abs(R)<.001&&(R=1),this.x=(_-M)/R,this.y=(b-w)/R,this.z=(v-x)/R,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ly extends eo{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Sn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new j0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Ly{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class H0 extends Sn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iy extends Sn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,c,f,d){let p=s[a+0],m=s[a+1],x=s[a+2],b=s[a+3];const v=c[f+0],S=c[f+1],M=c[f+2],w=c[f+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=b;return}if(d===1){e[t+0]=v,e[t+1]=S,e[t+2]=M,e[t+3]=w;return}if(b!==w||p!==v||m!==S||x!==M){let _=1-d;const y=p*v+m*S+x*M+b*w,R=y>=0?1:-1,D=1-y*y;if(D>Number.EPSILON){const z=Math.sqrt(D),U=Math.atan2(z,y*R);_=Math.sin(_*U)/z,d=Math.sin(d*U)/z}const T=d*R;if(p=p*_+v*T,m=m*_+S*T,x=x*_+M*T,b=b*_+w*T,_===1-d){const z=1/Math.sqrt(p*p+m*m+x*x+b*b);p*=z,m*=z,x*=z,b*=z}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=b}static multiplyQuaternionsFlat(e,t,s,a,c,f){const d=s[a],p=s[a+1],m=s[a+2],x=s[a+3],b=c[f],v=c[f+1],S=c[f+2],M=c[f+3];return e[t]=d*M+x*b+p*S-m*v,e[t+1]=p*M+x*v+m*b-d*S,e[t+2]=m*M+x*S+d*v-p*b,e[t+3]=x*M-d*b-p*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(s/2),x=d(a/2),b=d(c/2),v=p(s/2),S=p(a/2),M=p(c/2);switch(f){case"XYZ":this._x=v*x*b+m*S*M,this._y=m*S*b-v*x*M,this._z=m*x*M+v*S*b,this._w=m*x*b-v*S*M;break;case"YXZ":this._x=v*x*b+m*S*M,this._y=m*S*b-v*x*M,this._z=m*x*M-v*S*b,this._w=m*x*b+v*S*M;break;case"ZXY":this._x=v*x*b-m*S*M,this._y=m*S*b+v*x*M,this._z=m*x*M+v*S*b,this._w=m*x*b-v*S*M;break;case"ZYX":this._x=v*x*b-m*S*M,this._y=m*S*b+v*x*M,this._z=m*x*M-v*S*b,this._w=m*x*b+v*S*M;break;case"YZX":this._x=v*x*b+m*S*M,this._y=m*S*b+v*x*M,this._z=m*x*M-v*S*b,this._w=m*x*b-v*S*M;break;case"XZY":this._x=v*x*b-m*S*M,this._y=m*S*b-v*x*M,this._z=m*x*M+v*S*b,this._w=m*x*b+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],c=t[8],f=t[1],d=t[5],p=t[9],m=t[2],x=t[6],b=t[10],v=s+d+b;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(x-p)*S,this._y=(c-m)*S,this._z=(f-a)*S}else if(s>d&&s>b){const S=2*Math.sqrt(1+s-d-b);this._w=(x-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(c+m)/S}else if(d>b){const S=2*Math.sqrt(1+d-s-b);this._w=(c-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+b-s-d);this._w=(f-a)/S,this._x=(c+m)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,c=e._z,f=e._w,d=t._x,p=t._y,m=t._z,x=t._w;return this._x=s*x+f*d+a*m-c*p,this._y=a*x+f*p+c*d-s*m,this._z=c*x+f*m+s*p-a*d,this._w=f*x-s*d-a*p-c*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,c=this._z,f=this._w;let d=f*e._w+s*e._x+a*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=s,this._y=a,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*c+t*this._z,this.normalize(),this}const m=Math.sqrt(p),x=Math.atan2(m,d),b=Math.sin((1-t)*x)/m,v=Math.sin(t*x)/m;return this._w=f*b+this._w*v,this._x=s*b+this._x*v,this._y=a*b+this._y*v,this._z=c*b+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,t=0,s=0){ue.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,c=e.elements;return this.x=c[0]*t+c[3]*s+c[6]*a,this.y=c[1]*t+c[4]*s+c[7]*a,this.z=c[2]*t+c[5]*s+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,c=e.elements,f=1/(c[3]*t+c[7]*s+c[11]*a+c[15]);return this.x=(c[0]*t+c[4]*s+c[8]*a+c[12])*f,this.y=(c[1]*t+c[5]*s+c[9]*a+c[13])*f,this.z=(c[2]*t+c[6]*s+c[10]*a+c[14])*f,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*s),x=2*(d*t-c*a),b=2*(c*s-f*t);return this.x=t+p*m+f*b-d*x,this.y=s+p*x+d*m-c*b,this.z=a+p*b+c*x-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a,this.y=c[1]*t+c[5]*s+c[9]*a,this.z=c[2]*t+c[6]*s+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,c=e.z,f=t.x,d=t.y,p=t.z;return this.x=a*p-c*d,this.y=c*f-s*p,this.z=s*d-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Nn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bu=new ue,fm=new Ko;class Zo{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ar):ar.fromBufferAttribute(c,f),ar.applyMatrix4(e.matrixWorld),this.expandByPoint(ar);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),al.copy(s.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const a=e.children;for(let c=0,f=a.length;c<f;c++)this.expandByObject(a[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ar),ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),ll.subVectors(this.max,Uo),As.subVectors(e.a,Uo),Cs.subVectors(e.b,Uo),Rs.subVectors(e.c,Uo),pi.subVectors(Cs,As),mi.subVectors(Rs,Cs),Bi.subVectors(As,Rs);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Bi.z,Bi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Bi.z,0,-Bi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Bi.y,Bi.x,0];return!ju(t,As,Cs,Rs,ll)||(t=[1,0,0,0,1,0,0,0,1],!ju(t,As,Cs,Rs,ll))?!1:(cl.crossVectors(pi,mi),t=[cl.x,cl.y,cl.z],ju(t,As,Cs,Rs,ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kr=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],ar=new ue,al=new Zo,As=new ue,Cs=new ue,Rs=new ue,pi=new ue,mi=new ue,Bi=new ue,Uo=new ue,ll=new ue,cl=new ue,ji=new ue;function ju(i,e,t,s,a){for(let c=0,f=i.length-3;c<=f;c+=3){ji.fromArray(i,c);const d=a.x*Math.abs(ji.x)+a.y*Math.abs(ji.y)+a.z*Math.abs(ji.z),p=e.dot(ji),m=t.dot(ji),x=s.dot(ji);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const Uy=new Zo,Fo=new ue,Hu=new ue;class ql{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Uy.setFromPoints(e).getCenter(s);let a=0;for(let c=0,f=e.length;c<f;c++)a=Math.max(a,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const t=Fo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Fo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Hu)),this.expandByPoint(Fo.copy(e.center).sub(Hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Lr=new ue,Gu=new ue,ul=new ue,gi=new ue,Vu=new ue,dl=new ue,Wu=new ue;class G0{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Gu.copy(e).add(t).multiplyScalar(.5),ul.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Gu);const c=e.distanceTo(t)*.5,f=-this.direction.dot(ul),d=gi.dot(this.direction),p=-gi.dot(ul),m=gi.lengthSq(),x=Math.abs(1-f*f);let b,v,S,M;if(x>0)if(b=f*p-d,v=f*d-p,M=c*x,b>=0)if(v>=-M)if(v<=M){const w=1/x;b*=w,v*=w,S=b*(b+f*v+2*d)+v*(f*b+v+2*p)+m}else v=c,b=Math.max(0,-(f*v+d)),S=-b*b+v*(v+2*p)+m;else v=-c,b=Math.max(0,-(f*v+d)),S=-b*b+v*(v+2*p)+m;else v<=-M?(b=Math.max(0,-(-f*c+d)),v=b>0?-c:Math.min(Math.max(-c,-p),c),S=-b*b+v*(v+2*p)+m):v<=M?(b=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+m):(b=Math.max(0,-(f*c+d)),v=b>0?c:Math.min(Math.max(-c,-p),c),S=-b*b+v*(v+2*p)+m);else v=f>0?-c:c,b=Math.max(0,-(f*v+d)),S=-b*b+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,b),a&&a.copy(Gu).addScaledVector(ul,v),S}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);const s=Lr.dot(this.direction),a=Lr.dot(Lr)-s*s,c=e.radius*e.radius;if(a>c)return null;const f=Math.sqrt(c-a),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,c,f,d,p;const m=1/this.direction.x,x=1/this.direction.y,b=1/this.direction.z,v=this.origin;return m>=0?(s=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(s=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),x>=0?(c=(e.min.y-v.y)*x,f=(e.max.y-v.y)*x):(c=(e.max.y-v.y)*x,f=(e.min.y-v.y)*x),s>f||c>a||((c>s||isNaN(s))&&(s=c),(f<a||isNaN(a))&&(a=f),b>=0?(d=(e.min.z-v.z)*b,p=(e.max.z-v.z)*b):(d=(e.max.z-v.z)*b,p=(e.min.z-v.z)*b),s>p||d>a)||((d>s||s!==s)&&(s=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,s,a,c){Vu.subVectors(t,e),dl.subVectors(s,e),Wu.crossVectors(Vu,dl);let f=this.direction.dot(Wu),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;gi.subVectors(this.origin,e);const p=d*this.direction.dot(dl.crossVectors(gi,dl));if(p<0)return null;const m=d*this.direction.dot(Vu.cross(gi));if(m<0||p+m>f)return null;const x=-d*gi.dot(Wu);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,s,a,c,f,d,p,m,x,b,v,S,M,w,_){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,c,f,d,p,m,x,b,v,S,M,w,_)}set(e,t,s,a,c,f,d,p,m,x,b,v,S,M,w,_){const y=this.elements;return y[0]=e,y[4]=t,y[8]=s,y[12]=a,y[1]=c,y[5]=f,y[9]=d,y[13]=p,y[2]=m,y[6]=x,y[10]=b,y[14]=v,y[3]=S,y[7]=M,y[11]=w,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),c=1/Ns.setFromMatrixColumn(e,1).length(),f=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*c,t[5]=s[5]*c,t[6]=s[6]*c,t[7]=0,t[8]=s[8]*f,t[9]=s[9]*f,t[10]=s[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,c=e.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(a),m=Math.sin(a),x=Math.cos(c),b=Math.sin(c);if(e.order==="XYZ"){const v=f*x,S=f*b,M=d*x,w=d*b;t[0]=p*x,t[4]=-p*b,t[8]=m,t[1]=S+M*m,t[5]=v-w*m,t[9]=-d*p,t[2]=w-v*m,t[6]=M+S*m,t[10]=f*p}else if(e.order==="YXZ"){const v=p*x,S=p*b,M=m*x,w=m*b;t[0]=v+w*d,t[4]=M*d-S,t[8]=f*m,t[1]=f*b,t[5]=f*x,t[9]=-d,t[2]=S*d-M,t[6]=w+v*d,t[10]=f*p}else if(e.order==="ZXY"){const v=p*x,S=p*b,M=m*x,w=m*b;t[0]=v-w*d,t[4]=-f*b,t[8]=M+S*d,t[1]=S+M*d,t[5]=f*x,t[9]=w-v*d,t[2]=-f*m,t[6]=d,t[10]=f*p}else if(e.order==="ZYX"){const v=f*x,S=f*b,M=d*x,w=d*b;t[0]=p*x,t[4]=M*m-S,t[8]=v*m+w,t[1]=p*b,t[5]=w*m+v,t[9]=S*m-M,t[2]=-m,t[6]=d*p,t[10]=f*p}else if(e.order==="YZX"){const v=f*p,S=f*m,M=d*p,w=d*m;t[0]=p*x,t[4]=w-v*b,t[8]=M*b+S,t[1]=b,t[5]=f*x,t[9]=-d*x,t[2]=-m*x,t[6]=S*b+M,t[10]=v-w*b}else if(e.order==="XZY"){const v=f*p,S=f*m,M=d*p,w=d*m;t[0]=p*x,t[4]=-b,t[8]=m*x,t[1]=v*b+w,t[5]=f*x,t[9]=S*b-M,t[2]=M*b-S,t[6]=d*x,t[10]=w*b+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fy,e,Oy)}lookAt(e,t,s){const a=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),xi.crossVectors(s,On),xi.lengthSq()===0&&(Math.abs(s.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),xi.crossVectors(s,On)),xi.normalize(),fl.crossVectors(On,xi),a[0]=xi.x,a[4]=fl.x,a[8]=On.x,a[1]=xi.y,a[5]=fl.y,a[9]=On.y,a[2]=xi.z,a[6]=fl.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],x=s[1],b=s[5],v=s[9],S=s[13],M=s[2],w=s[6],_=s[10],y=s[14],R=s[3],D=s[7],T=s[11],z=s[15],U=a[0],k=a[4],B=a[8],P=a[12],A=a[1],j=a[5],se=a[9],te=a[13],fe=a[2],me=a[6],de=a[10],pe=a[14],H=a[3],J=a[7],oe=a[11],O=a[15];return c[0]=f*U+d*A+p*fe+m*H,c[4]=f*k+d*j+p*me+m*J,c[8]=f*B+d*se+p*de+m*oe,c[12]=f*P+d*te+p*pe+m*O,c[1]=x*U+b*A+v*fe+S*H,c[5]=x*k+b*j+v*me+S*J,c[9]=x*B+b*se+v*de+S*oe,c[13]=x*P+b*te+v*pe+S*O,c[2]=M*U+w*A+_*fe+y*H,c[6]=M*k+w*j+_*me+y*J,c[10]=M*B+w*se+_*de+y*oe,c[14]=M*P+w*te+_*pe+y*O,c[3]=R*U+D*A+T*fe+z*H,c[7]=R*k+D*j+T*me+z*J,c[11]=R*B+D*se+T*de+z*oe,c[15]=R*P+D*te+T*pe+z*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],x=e[2],b=e[6],v=e[10],S=e[14],M=e[3],w=e[7],_=e[11],y=e[15];return M*(+c*p*b-a*m*b-c*d*v+s*m*v+a*d*S-s*p*S)+w*(+t*p*S-t*m*v+c*f*v-a*f*S+a*m*x-c*p*x)+_*(+t*m*b-t*d*S-c*f*b+s*f*S+c*d*x-s*m*x)+y*(-a*d*x-t*p*b+t*d*v+a*f*b-s*f*v+s*p*x)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],x=e[8],b=e[9],v=e[10],S=e[11],M=e[12],w=e[13],_=e[14],y=e[15],R=b*_*m-w*v*m+w*p*S-d*_*S-b*p*y+d*v*y,D=M*v*m-x*_*m-M*p*S+f*_*S+x*p*y-f*v*y,T=x*w*m-M*b*m+M*d*S-f*w*S-x*d*y+f*b*y,z=M*b*p-x*w*p-M*d*v+f*w*v+x*d*_-f*b*_,U=t*R+s*D+a*T+c*z;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/U;return e[0]=R*k,e[1]=(w*v*c-b*_*c-w*a*S+s*_*S+b*a*y-s*v*y)*k,e[2]=(d*_*c-w*p*c+w*a*m-s*_*m-d*a*y+s*p*y)*k,e[3]=(b*p*c-d*v*c-b*a*m+s*v*m+d*a*S-s*p*S)*k,e[4]=D*k,e[5]=(x*_*c-M*v*c+M*a*S-t*_*S-x*a*y+t*v*y)*k,e[6]=(M*p*c-f*_*c-M*a*m+t*_*m+f*a*y-t*p*y)*k,e[7]=(f*v*c-x*p*c+x*a*m-t*v*m-f*a*S+t*p*S)*k,e[8]=T*k,e[9]=(M*b*c-x*w*c-M*s*S+t*w*S+x*s*y-t*b*y)*k,e[10]=(f*w*c-M*d*c+M*s*m-t*w*m-f*s*y+t*d*y)*k,e[11]=(x*d*c-f*b*c-x*s*m+t*b*m+f*s*S-t*d*S)*k,e[12]=z*k,e[13]=(x*w*a-M*b*a+M*s*v-t*w*v-x*s*_+t*b*_)*k,e[14]=(M*d*a-f*w*a-M*s*p+t*w*p+f*s*_-t*d*_)*k,e[15]=(f*b*a-x*d*a+x*s*p-t*b*p-f*s*v+t*d*v)*k,this}scale(e){const t=this.elements,s=e.x,a=e.y,c=e.z;return t[0]*=s,t[4]*=a,t[8]*=c,t[1]*=s,t[5]*=a,t[9]*=c,t[2]*=s,t[6]*=a,t[10]*=c,t[3]*=s,t[7]*=a,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),c=1-s,f=e.x,d=e.y,p=e.z,m=c*f,x=c*d;return this.set(m*f+s,m*d-a*p,m*p+a*d,0,m*d+a*p,x*d+s,x*p-a*f,0,m*p-a*d,x*p+a*f,c*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,c,f){return this.set(1,s,c,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,c=t._x,f=t._y,d=t._z,p=t._w,m=c+c,x=f+f,b=d+d,v=c*m,S=c*x,M=c*b,w=f*x,_=f*b,y=d*b,R=p*m,D=p*x,T=p*b,z=s.x,U=s.y,k=s.z;return a[0]=(1-(w+y))*z,a[1]=(S+T)*z,a[2]=(M-D)*z,a[3]=0,a[4]=(S-T)*U,a[5]=(1-(v+y))*U,a[6]=(_+R)*U,a[7]=0,a[8]=(M+D)*k,a[9]=(_-R)*k,a[10]=(1-(v+w))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let c=Ns.set(a[0],a[1],a[2]).length();const f=Ns.set(a[4],a[5],a[6]).length(),d=Ns.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],lr.copy(this);const m=1/c,x=1/f,b=1/d;return lr.elements[0]*=m,lr.elements[1]*=m,lr.elements[2]*=m,lr.elements[4]*=x,lr.elements[5]*=x,lr.elements[6]*=x,lr.elements[8]*=b,lr.elements[9]*=b,lr.elements[10]*=b,t.setFromRotationMatrix(lr),s.x=c,s.y=f,s.z=d,this}makePerspective(e,t,s,a,c,f,d=Br){const p=this.elements,m=2*c/(t-e),x=2*c/(s-a),b=(t+e)/(t-e),v=(s+a)/(s-a);let S,M;if(d===Br)S=-(f+c)/(f-c),M=-2*f*c/(f-c);else if(d===Bl)S=-f/(f-c),M=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=b,p[12]=0,p[1]=0,p[5]=x,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,a,c,f,d=Br){const p=this.elements,m=1/(t-e),x=1/(s-a),b=1/(f-c),v=(t+e)*m,S=(s+a)*x;let M,w;if(d===Br)M=(f+c)*b,w=-2*b;else if(d===Bl)M=c*b,w=-1*b;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*x,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=w,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ns=new ue,lr=new Gt,Fy=new ue(0,0,0),Oy=new ue(1,1,1),xi=new ue,fl=new ue,On=new ue,hm=new Gt,pm=new Ko;class Vr{constructor(e=0,t=0,s=0,a=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,c=a[0],f=a[4],d=a[8],p=a[1],m=a[5],x=a[9],b=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-b,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-b,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Nn(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-b,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class V0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zy=0;const mm=new ue,Ps=new Ko,Ir=new Gt,hl=new ue,Oo=new ue,By=new ue,jy=new Ko,gm=new ue(1,0,0),xm=new ue(0,1,0),vm=new ue(0,0,1),ym={type:"added"},Hy={type:"removed"},Ds={type:"childadded",child:null},Xu={type:"childremoved",child:null};class kn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new ue,t=new Vr,s=new Ko,a=new ue(1,1,1);function c(){s.setFromEuler(t,!1)}function f(){t.setFromQuaternion(s,void 0,!1)}t._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ut}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new V0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,t){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ir.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?hl.copy(e):hl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ir.lookAt(Oo,hl,this.up):Ir.lookAt(hl,Oo,this.up),this.quaternion.setFromRotationMatrix(Ir),a&&(Ir.extractRotation(a.matrixWorld),Ps.setFromRotationMatrix(Ir),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ym),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hy),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ym),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const f=this.children[s].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,By),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const b=p[m];c(e.shapes,b)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(c(e.animations,p))}}if(t){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),x=f(e.images),b=f(e.shapes),v=f(e.skeletons),S=f(e.animations),M=f(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),x.length>0&&(s.images=x),b.length>0&&(s.shapes=b),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=a,s;function f(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}kn.DEFAULT_UP=new ue(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cr=new ue,Ur=new ue,qu=new ue,Fr=new ue,ks=new ue,Ls=new ue,Sm=new ue,Yu=new ue,Qu=new ue,Ku=new ue,Zu=new jt,Ju=new jt,$u=new jt;class dr{constructor(e=new ue,t=new ue,s=new ue){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),cr.subVectors(e,t),a.cross(cr);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,t,s,a,c){cr.subVectors(a,t),Ur.subVectors(s,t),qu.subVectors(e,t);const f=cr.dot(cr),d=cr.dot(Ur),p=cr.dot(qu),m=Ur.dot(Ur),x=Ur.dot(qu),b=f*m-d*d;if(b===0)return c.set(0,0,0),null;const v=1/b,S=(m*p-d*x)*v,M=(f*x-d*p)*v;return c.set(1-S-M,M,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Fr)===null?!1:Fr.x>=0&&Fr.y>=0&&Fr.x+Fr.y<=1}static getInterpolation(e,t,s,a,c,f,d,p){return this.getBarycoord(e,t,s,a,Fr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Fr.x),p.addScaledVector(f,Fr.y),p.addScaledVector(d,Fr.z),p)}static getInterpolatedAttribute(e,t,s,a,c,f){return Zu.setScalar(0),Ju.setScalar(0),$u.setScalar(0),Zu.fromBufferAttribute(e,t),Ju.fromBufferAttribute(e,s),$u.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Zu,c.x),f.addScaledVector(Ju,c.y),f.addScaledVector($u,c.z),f}static isFrontFacing(e,t,s,a){return cr.subVectors(s,t),Ur.subVectors(e,t),cr.cross(Ur).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cr.subVectors(this.c,this.b),Ur.subVectors(this.a,this.b),cr.cross(Ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,c){return dr.getInterpolation(e,this.a,this.b,this.c,t,s,a,c)}containsPoint(e){return dr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,c=this.c;let f,d;ks.subVectors(a,s),Ls.subVectors(c,s),Yu.subVectors(e,s);const p=ks.dot(Yu),m=Ls.dot(Yu);if(p<=0&&m<=0)return t.copy(s);Qu.subVectors(e,a);const x=ks.dot(Qu),b=Ls.dot(Qu);if(x>=0&&b<=x)return t.copy(a);const v=p*b-x*m;if(v<=0&&p>=0&&x<=0)return f=p/(p-x),t.copy(s).addScaledVector(ks,f);Ku.subVectors(e,c);const S=ks.dot(Ku),M=Ls.dot(Ku);if(M>=0&&S<=M)return t.copy(c);const w=S*m-p*M;if(w<=0&&m>=0&&M<=0)return d=m/(m-M),t.copy(s).addScaledVector(Ls,d);const _=x*M-S*b;if(_<=0&&b-x>=0&&S-M>=0)return Sm.subVectors(c,a),d=(b-x)/(b-x+(S-M)),t.copy(a).addScaledVector(Sm,d);const y=1/(_+w+v);return f=w*y,d=v*y,t.copy(s).addScaledVector(ks,f).addScaledVector(Ls,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},pl={h:0,s:0,l:0};function ed(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Tt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=_t.workingColorSpace){return this.r=e,this.g=t,this.b=s,_t.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=_t.workingColorSpace){if(e=Ty(e,1),t=Nn(t,0,1),s=Nn(s,0,1),t===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+t):s+t-s*t,f=2*s-c;this.r=ed(f,c,e+1/3),this.g=ed(f,c,e),this.b=ed(f,c,e-1/3)}return _t.toWorkingColorSpace(this,a),this}setStyle(e,t=Kn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(c,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const s=W0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return _t.fromWorkingColorSpace(hn.copy(this),e),Math.round(Nn(hn.r*255,0,255))*65536+Math.round(Nn(hn.g*255,0,255))*256+Math.round(Nn(hn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(hn.copy(this),t);const s=hn.r,a=hn.g,c=hn.b,f=Math.max(s,a,c),d=Math.min(s,a,c);let p,m;const x=(d+f)/2;if(d===f)p=0,m=0;else{const b=f-d;switch(m=x<=.5?b/(f+d):b/(2-f-d),f){case s:p=(a-c)/b+(a<c?6:0);break;case a:p=(c-s)/b+2;break;case c:p=(s-a)/b+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Kn){_t.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,s=hn.g,a=hn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(pl);const s=Fu(vi.h,pl.h,t),a=Fu(vi.s,pl.s,t),c=Fu(vi.l,pl.l,t);return this.setHSL(s,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,c=e.elements;return this.r=c[0]*t+c[3]*s+c[6]*a,this.g=c[1]*t+c[4]*s+c[7]*a,this.b=c[2]*t+c[5]*s+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Tt;Tt.NAMES=W0;let Gy=0;class Jo extends eo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Qo(),this.name="",this.blending=js,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=vd,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(s.blending=this.blending),this.side!==wi&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==xd&&(s.blendSrc=this.blendSrc),this.blendDst!==vd&&(s.blendDst=this.blendDst),this.blendEquation!==Qi&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(t){const c=a(e.textures),f=a(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let c=0;c!==a;++c)s[c]=t[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class X0 extends Jo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=A0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new ue,ml=new ct;class hr{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=im,this.updateRanges=[],this.gpuType=_r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Io(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Rn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Io(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Io(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Io(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Io(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array),a=Rn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,c){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array),a=Rn(a,this.array),c=Rn(c,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==im&&(e.usage=this.usage),e}}class q0 extends hr{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Y0 extends hr{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Hr extends hr{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Vy=0;const Qn=new Gt,td=new kn,Is=new ue,zn=new Zo,zo=new Zo,tn=new ue;class Xr extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B0(e)?Y0:q0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ut().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,s){return Qn.makeTranslation(e,t,s),this.applyMatrix4(Qn),this}scale(e,t,s){return Qn.makeScale(e,t,s),this.applyMatrix4(Qn),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,c=e.length;a<c;a++){const f=e[a];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Hr(s,3))}else{for(let s=0,a=t.count;s<a;s++){const c=e[s];t.setXYZ(s,c.x,c.y,c.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];zn.setFromBufferAttribute(c),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const s=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let c=0,f=t.length;c<f;c++){const d=t[c];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(tn.addVectors(zn.min,zo.min),zn.expandByPoint(tn),tn.addVectors(zn.max,zo.max),zn.expandByPoint(tn)):(zn.expandByPoint(zo.min),zn.expandByPoint(zo.max))}zn.getCenter(s);let a=0;for(let c=0,f=e.count;c<f;c++)tn.fromBufferAttribute(e,c),a=Math.max(a,s.distanceToSquared(tn));if(t)for(let c=0,f=t.length;c<f;c++){const d=t[c],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)tn.fromBufferAttribute(d,m),p&&(Is.fromBufferAttribute(e,m),tn.add(Is)),a=Math.max(a,s.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,c=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hr(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<s.count;B++)d[B]=new ue,p[B]=new ue;const m=new ue,x=new ue,b=new ue,v=new ct,S=new ct,M=new ct,w=new ue,_=new ue;function y(B,P,A){m.fromBufferAttribute(s,B),x.fromBufferAttribute(s,P),b.fromBufferAttribute(s,A),v.fromBufferAttribute(c,B),S.fromBufferAttribute(c,P),M.fromBufferAttribute(c,A),x.sub(m),b.sub(m),S.sub(v),M.sub(v);const j=1/(S.x*M.y-M.x*S.y);isFinite(j)&&(w.copy(x).multiplyScalar(M.y).addScaledVector(b,-S.y).multiplyScalar(j),_.copy(b).multiplyScalar(S.x).addScaledVector(x,-M.x).multiplyScalar(j),d[B].add(w),d[P].add(w),d[A].add(w),p[B].add(_),p[P].add(_),p[A].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let B=0,P=R.length;B<P;++B){const A=R[B],j=A.start,se=A.count;for(let te=j,fe=j+se;te<fe;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const D=new ue,T=new ue,z=new ue,U=new ue;function k(B){z.fromBufferAttribute(a,B),U.copy(z);const P=d[B];D.copy(P),D.sub(z.multiplyScalar(z.dot(P))).normalize(),T.crossVectors(U,P);const j=T.dot(p[B])<0?-1:1;f.setXYZW(B,D.x,D.y,D.z,j)}for(let B=0,P=R.length;B<P;++B){const A=R[B],j=A.start,se=A.count;for(let te=j,fe=j+se;te<fe;te+=3)k(e.getX(te+0)),k(e.getX(te+1)),k(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new hr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const a=new ue,c=new ue,f=new ue,d=new ue,p=new ue,m=new ue,x=new ue,b=new ue;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),w=e.getX(v+1),_=e.getX(v+2);a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,w),f.fromBufferAttribute(t,_),x.subVectors(f,c),b.subVectors(a,c),x.cross(b),d.fromBufferAttribute(s,M),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,_),d.add(x),p.add(x),m.add(x),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(_,m.x,m.y,m.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),c.fromBufferAttribute(t,v+1),f.fromBufferAttribute(t,v+2),x.subVectors(f,c),b.subVectors(a,c),x.cross(b),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,b=d.normalized,v=new m.constructor(p.length*x);let S=0,M=0;for(let w=0,_=p.length;w<_;w++){d.isInterleavedBufferAttribute?S=p[w]*d.data.stride+d.offset:S=p[w]*x;for(let y=0;y<x;y++)v[M++]=m[S++]}return new hr(v,x,b)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xr,s=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,s);t.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let x=0,b=m.length;x<b;x++){const v=m[x],S=e(v,s);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let b=0,v=m.length;b<v;b++){const S=m[b];x.push(S.toJSON(e.data))}x.length>0&&(a[p]=x,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const m in a){const x=a[m];this.setAttribute(m,x.clone(t))}const c=e.morphAttributes;for(const m in c){const x=[],b=c[m];for(let v=0,S=b.length;v<S;v++)x.push(b[v].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,x=f.length;m<x;m++){const b=f[m];this.addGroup(b.start,b.count,b.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new Gt,Hi=new G0,gl=new ql,bm=new ue,xl=new ue,vl=new ue,yl=new ue,nd=new ue,Sl=new ue,Mm=new ue,_l=new ue;class Jn extends kn{constructor(e=new Xr,t=new X0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=a.length;c<f;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){Sl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const x=d[p],b=c[p];x!==0&&(nd.fromBufferAttribute(b,e),f?Sl.addScaledVector(nd,x):Sl.addScaledVector(nd.sub(t),x))}t.add(Sl)}return t}raycast(e,t){const s=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gl.copy(s.boundingSphere),gl.applyMatrix4(c),Hi.copy(e.ray).recast(e.near),!(gl.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(gl,bm)===null||Hi.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(_m.copy(c).invert(),Hi.copy(e.ray).applyMatrix4(_m),!(s.boundingBox!==null&&Hi.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,s){let a;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,x=c.attributes.uv1,b=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let M=0,w=v.length;M<w;M++){const _=v[M],y=f[_.materialIndex],R=Math.max(_.start,S.start),D=Math.min(d.count,Math.min(_.start+_.count,S.start+S.count));for(let T=R,z=D;T<z;T+=3){const U=d.getX(T),k=d.getX(T+1),B=d.getX(T+2);a=bl(this,y,e,s,m,x,b,U,k,B),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let _=M,y=w;_<y;_+=3){const R=d.getX(_),D=d.getX(_+1),T=d.getX(_+2);a=bl(this,f,e,s,m,x,b,R,D,T),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let M=0,w=v.length;M<w;M++){const _=v[M],y=f[_.materialIndex],R=Math.max(_.start,S.start),D=Math.min(p.count,Math.min(_.start+_.count,S.start+S.count));for(let T=R,z=D;T<z;T+=3){const U=T,k=T+1,B=T+2;a=bl(this,y,e,s,m,x,b,U,k,B),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let _=M,y=w;_<y;_+=3){const R=_,D=_+1,T=_+2;a=bl(this,f,e,s,m,x,b,R,D,T),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function Wy(i,e,t,s,a,c,f,d){let p;if(e.side===Dn?p=s.intersectTriangle(f,c,a,!0,d):p=s.intersectTriangle(a,c,f,e.side===wi,d),p===null)return null;_l.copy(d),_l.applyMatrix4(i.matrixWorld);const m=t.ray.origin.distanceTo(_l);return m<t.near||m>t.far?null:{distance:m,point:_l.clone(),object:i}}function bl(i,e,t,s,a,c,f,d,p,m){i.getVertexPosition(d,xl),i.getVertexPosition(p,vl),i.getVertexPosition(m,yl);const x=Wy(i,e,t,s,xl,vl,yl,Mm);if(x){const b=new ue;dr.getBarycoord(Mm,xl,vl,yl,b),a&&(x.uv=dr.getInterpolatedAttribute(a,d,p,m,b,new ct)),c&&(x.uv1=dr.getInterpolatedAttribute(c,d,p,m,b,new ct)),f&&(x.normal=dr.getInterpolatedAttribute(f,d,p,m,b,new ue),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new ue,materialIndex:0};dr.getNormal(xl,vl,yl,v.normal),x.face=v,x.barycoord=b}return x}class $o extends Xr{constructor(e=1,t=1,s=1,a=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:c,depthSegments:f};const d=this;a=Math.floor(a),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],x=[],b=[];let v=0,S=0;M("z","y","x",-1,-1,s,t,e,f,c,0),M("z","y","x",1,-1,s,t,-e,f,c,1),M("x","z","y",1,1,e,s,t,a,f,2),M("x","z","y",1,-1,e,s,-t,a,f,3),M("x","y","z",1,-1,e,t,s,a,c,4),M("x","y","z",-1,-1,e,t,-s,a,c,5),this.setIndex(p),this.setAttribute("position",new Hr(m,3)),this.setAttribute("normal",new Hr(x,3)),this.setAttribute("uv",new Hr(b,2));function M(w,_,y,R,D,T,z,U,k,B,P){const A=T/k,j=z/B,se=T/2,te=z/2,fe=U/2,me=k+1,de=B+1;let pe=0,H=0;const J=new ue;for(let oe=0;oe<de;oe++){const O=oe*j-te;for(let ne=0;ne<me;ne++){const Pe=ne*A-se;J[w]=Pe*R,J[_]=O*D,J[y]=fe,m.push(J.x,J.y,J.z),J[w]=0,J[_]=0,J[y]=U>0?1:-1,x.push(J.x,J.y,J.z),b.push(ne/k),b.push(1-oe/B),pe+=1}}for(let oe=0;oe<B;oe++)for(let O=0;O<k;O++){const ne=v+O+me*oe,Pe=v+O+me*(oe+1),re=v+(O+1)+me*(oe+1),ge=v+(O+1)+me*oe;p.push(ne,Pe,ge),p.push(Pe,re,ge),H+=6}d.addGroup(S,H,P),S+=H,v+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function yn(i){const e={};for(let t=0;t<i.length;t++){const s=Ks(i[t]);for(const a in s)e[a]=s[a]}return e}function Xy(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Q0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const qy={clone:Ks,merge:yn};var Yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends Jo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yy,this.fragmentShader=Qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Hl extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new ue,wm=new ct,Em=new ct;class ur extends Hl{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nf*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,wm,Em),t.subVectors(Em,wm)}setViewOffset(e,t,s,a,c,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uu*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,c=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*a/p,t-=f.offsetY*s/m,a*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Us=-90,Fs=1;class Ky extends kn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ur(Us,Fs,e,t);a.layers=this.layers,this.add(a);const c=new ur(Us,Fs,e,t);c.layers=this.layers,this.add(c);const f=new ur(Us,Fs,e,t);f.layers=this.layers,this.add(f);const d=new ur(Us,Fs,e,t);d.layers=this.layers,this.add(d);const p=new ur(Us,Fs,e,t);p.layers=this.layers,this.add(p);const m=new ur(Us,Fs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,c,f,d,p]=t;for(const m of t)this.remove(m);if(e===Br)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Bl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,x]=this.children,b=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,c),e.setRenderTarget(s,1,a),e.render(t,f),e.setRenderTarget(s,2,a),e.render(t,d),e.setRenderTarget(s,3,a),e.render(t,p),e.setRenderTarget(s,4,a),e.render(t,m),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,x),e.setRenderTarget(b,v,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class K0 extends Sn{constructor(e,t,s,a,c,f,d,p,m,x){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,s,a,c,f,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zy extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new K0(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new $o(5,5,5),c=new Wr({name:"CubemapFromEquirect",uniforms:Ks(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Dn,blending:bi});c.uniforms.tEquirect.value=t;const f=new Jn(a,c),d=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Pn),new Ky(1,10,this).update(e,f),t.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,s,a){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,s,a);e.setRenderTarget(c)}}const rd=new ue,Jy=new ue,$y=new ut;class qi{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=rd.subVectors(s,t).cross(Jy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(rd),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||$y.getNormalMatrix(e),a=this.coplanarPoint(rd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new ql,Ml=new ue;class Z0{constructor(e=new qi,t=new qi,s=new qi,a=new qi,c=new qi,f=new qi){this.planes=[e,t,s,a,c,f]}set(e,t,s,a,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(a),d[4].copy(c),d[5].copy(f),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Br){const s=this.planes,a=e.elements,c=a[0],f=a[1],d=a[2],p=a[3],m=a[4],x=a[5],b=a[6],v=a[7],S=a[8],M=a[9],w=a[10],_=a[11],y=a[12],R=a[13],D=a[14],T=a[15];if(s[0].setComponents(p-c,v-m,_-S,T-y).normalize(),s[1].setComponents(p+c,v+m,_+S,T+y).normalize(),s[2].setComponents(p+f,v+x,_+M,T+R).normalize(),s[3].setComponents(p-f,v-x,_-M,T-R).normalize(),s[4].setComponents(p-d,v-b,_-w,T-D).normalize(),t===Br)s[5].setComponents(p+d,v+b,_+w,T+D).normalize();else if(t===Bl)s[5].setComponents(d,b,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Ml.x=a.normal.x>0?e.max.x:e.min.x,Ml.y=a.normal.y>0?e.max.y:e.min.y,Ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function J0(){let i=null,e=!1,t=null,s=null;function a(c,f){t(c,f),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){i=c}}}function e2(i){const e=new WeakMap;function t(d,p){const m=d.array,x=d.usage,b=m.byteLength,v=i.createBuffer();i.bindBuffer(p,v),i.bufferData(p,m,x),d.onUploadCallback();let S;if(m instanceof Float32Array)S=i.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=i.SHORT;else if(m instanceof Uint32Array)S=i.UNSIGNED_INT;else if(m instanceof Int32Array)S=i.INT;else if(m instanceof Int8Array)S=i.BYTE;else if(m instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:b}}function s(d,p,m){const x=p.array,b=p.updateRanges;if(i.bindBuffer(m,d),b.length===0)i.bufferSubData(m,0,x);else{b.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<b.length;S++){const M=b[v],w=b[S];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++v,b[v]=w)}b.length=v+1;for(let S=0,M=b.length;S<M;S++){const w=b[S];i.bufferSubData(m,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(i.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:a,remove:c,update:f}}class Ji extends Xr{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const c=e/2,f=t/2,d=Math.floor(s),p=Math.floor(a),m=d+1,x=p+1,b=e/d,v=t/p,S=[],M=[],w=[],_=[];for(let y=0;y<x;y++){const R=y*v-f;for(let D=0;D<m;D++){const T=D*b-c;M.push(T,-R,0),w.push(0,0,1),_.push(D/d),_.push(1-y/p)}}for(let y=0;y<p;y++)for(let R=0;R<d;R++){const D=R+m*y,T=R+m*(y+1),z=R+1+m*(y+1),U=R+1+m*y;S.push(D,T,U),S.push(T,z,U)}this.setIndex(S),this.setAttribute("position",new Hr(M,3)),this.setAttribute("normal",new Hr(w,3)),this.setAttribute("uv",new Hr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.widthSegments,e.heightSegments)}}var t2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n2=`#ifdef USE_ALPHAHASH
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
#endif`,r2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a2=`#ifdef USE_AOMAP
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
#endif`,l2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c2=`#ifdef USE_BATCHING
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
#endif`,u2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p2=`#ifdef USE_IRIDESCENCE
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
#endif`,m2=`#ifdef USE_BUMPMAP
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
#endif`,g2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,w2=`#define PI 3.141592653589793
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
} // validated`,E2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T2=`vec3 transformedNormal = objectNormal;
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
#endif`,A2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P2="gl_FragColor = linearToOutputTexel( gl_FragColor );",D2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k2=`#ifdef USE_ENVMAP
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
#endif`,L2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I2=`#ifdef USE_ENVMAP
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
#endif`,U2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F2=`#ifdef USE_ENVMAP
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
#endif`,O2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H2=`#ifdef USE_GRADIENTMAP
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
}`,G2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X2=`uniform bool receiveShadow;
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
#endif`,q2=`#ifdef USE_ENVMAP
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
#endif`,Y2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J2=`PhysicalMaterial material;
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
#endif`,$2=`struct PhysicalMaterial {
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
}`,eS=`
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
#endif`,tS=`#if defined( RE_IndirectDiffuse )
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uS=`#if defined( USE_POINTS_UV )
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
#endif`,dS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`#ifdef USE_MORPHTARGETS
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
#endif`,xS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MS=`#ifdef USE_NORMALMAP
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
#endif`,wS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ES=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,US=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zS=`float getShadowMask() {
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
}`,BS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jS=`#ifdef USE_SKINNING
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
#endif`,HS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,VS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,QS=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t_=`uniform sampler2D t2D;
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`#include <common>
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
}`,a_=`#if DEPTH_PACKING == 3200
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
}`,l_=`#define DISTANCE
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
}`,c_=`#define DISTANCE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`uniform float scale;
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
}`,h_=`uniform vec3 diffuse;
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
}`,p_=`#include <common>
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#define LAMBERT
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
}`,x_=`#define LAMBERT
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
}`,v_=`#define MATCAP
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
}`,y_=`#define MATCAP
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
}`,S_=`#define NORMAL
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
}`,__=`#define NORMAL
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
}`,b_=`#define PHONG
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
}`,M_=`#define PHONG
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
}`,w_=`#define STANDARD
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
}`,E_=`#define STANDARD
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
}`,T_=`#define TOON
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
}`,A_=`#define TOON
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
}`,C_=`uniform float size;
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
}`,R_=`uniform vec3 diffuse;
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
}`,N_=`#include <common>
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
}`,P_=`uniform vec3 color;
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
}`,D_=`uniform float rotation;
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
}`,k_=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:t2,alphahash_pars_fragment:n2,alphamap_fragment:r2,alphamap_pars_fragment:i2,alphatest_fragment:s2,alphatest_pars_fragment:o2,aomap_fragment:a2,aomap_pars_fragment:l2,batching_pars_vertex:c2,batching_vertex:u2,begin_vertex:d2,beginnormal_vertex:f2,bsdfs:h2,iridescence_fragment:p2,bumpmap_pars_fragment:m2,clipping_planes_fragment:g2,clipping_planes_pars_fragment:x2,clipping_planes_pars_vertex:v2,clipping_planes_vertex:y2,color_fragment:S2,color_pars_fragment:_2,color_pars_vertex:b2,color_vertex:M2,common:w2,cube_uv_reflection_fragment:E2,defaultnormal_vertex:T2,displacementmap_pars_vertex:A2,displacementmap_vertex:C2,emissivemap_fragment:R2,emissivemap_pars_fragment:N2,colorspace_fragment:P2,colorspace_pars_fragment:D2,envmap_fragment:k2,envmap_common_pars_fragment:L2,envmap_pars_fragment:I2,envmap_pars_vertex:U2,envmap_physical_pars_fragment:q2,envmap_vertex:F2,fog_vertex:O2,fog_pars_vertex:z2,fog_fragment:B2,fog_pars_fragment:j2,gradientmap_pars_fragment:H2,lightmap_pars_fragment:G2,lights_lambert_fragment:V2,lights_lambert_pars_fragment:W2,lights_pars_begin:X2,lights_toon_fragment:Y2,lights_toon_pars_fragment:Q2,lights_phong_fragment:K2,lights_phong_pars_fragment:Z2,lights_physical_fragment:J2,lights_physical_pars_fragment:$2,lights_fragment_begin:eS,lights_fragment_maps:tS,lights_fragment_end:nS,logdepthbuf_fragment:rS,logdepthbuf_pars_fragment:iS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:oS,map_fragment:aS,map_pars_fragment:lS,map_particle_fragment:cS,map_particle_pars_fragment:uS,metalnessmap_fragment:dS,metalnessmap_pars_fragment:fS,morphinstance_vertex:hS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:gS,morphtarget_vertex:xS,normal_fragment_begin:vS,normal_fragment_maps:yS,normal_pars_fragment:SS,normal_pars_vertex:_S,normal_vertex:bS,normalmap_pars_fragment:MS,clearcoat_normal_fragment_begin:wS,clearcoat_normal_fragment_maps:ES,clearcoat_pars_fragment:TS,iridescence_pars_fragment:AS,opaque_fragment:CS,packing:RS,premultiplied_alpha_fragment:NS,project_vertex:PS,dithering_fragment:DS,dithering_pars_fragment:kS,roughnessmap_fragment:LS,roughnessmap_pars_fragment:IS,shadowmap_pars_fragment:US,shadowmap_pars_vertex:FS,shadowmap_vertex:OS,shadowmask_pars_fragment:zS,skinbase_vertex:BS,skinning_pars_vertex:jS,skinning_vertex:HS,skinnormal_vertex:GS,specularmap_fragment:VS,specularmap_pars_fragment:WS,tonemapping_fragment:XS,tonemapping_pars_fragment:qS,transmission_fragment:YS,transmission_pars_fragment:QS,uv_pars_fragment:KS,uv_pars_vertex:ZS,uv_vertex:JS,worldpos_vertex:$S,background_vert:e_,background_frag:t_,backgroundCube_vert:n_,backgroundCube_frag:r_,cube_vert:i_,cube_frag:s_,depth_vert:o_,depth_frag:a_,distanceRGBA_vert:l_,distanceRGBA_frag:c_,equirect_vert:u_,equirect_frag:d_,linedashed_vert:f_,linedashed_frag:h_,meshbasic_vert:p_,meshbasic_frag:m_,meshlambert_vert:g_,meshlambert_frag:x_,meshmatcap_vert:v_,meshmatcap_frag:y_,meshnormal_vert:S_,meshnormal_frag:__,meshphong_vert:b_,meshphong_frag:M_,meshphysical_vert:w_,meshphysical_frag:E_,meshtoon_vert:T_,meshtoon_frag:A_,points_vert:C_,points_frag:R_,shadow_vert:N_,shadow_frag:P_,sprite_vert:D_,sprite_frag:k_},ke={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Sr={basic:{uniforms:yn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:yn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:yn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:yn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:yn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:yn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:yn([ke.points,ke.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:yn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:yn([ke.common,ke.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:yn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:yn([ke.sprite,ke.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:yn([ke.common,ke.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:yn([ke.lights,ke.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Sr.physical={uniforms:yn([Sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const wl={r:0,b:0,g:0},Vi=new Vr,L_=new Gt;function I_(i,e,t,s,a,c,f){const d=new Tt(0);let p=c===!0?0:1,m,x,b=null,v=0,S=null;function M(R){let D=R.isScene===!0?R.background:null;return D&&D.isTexture&&(D=(R.backgroundBlurriness>0?t:e).get(D)),D}function w(R){let D=!1;const T=M(R);T===null?y(d,p):T&&T.isColor&&(y(T,1),D=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(i.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(R,D){const T=M(D);T&&(T.isCubeTexture||T.mapping===Wl)?(x===void 0&&(x=new Jn(new $o(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:Ks(Sr.backgroundCube.uniforms),vertexShader:Sr.backgroundCube.vertexShader,fragmentShader:Sr.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(z,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(x)),Vi.copy(D.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),x.material.uniforms.envMap.value=T,x.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(L_.makeRotationFromEuler(Vi)),x.material.toneMapped=_t.getTransfer(T.colorSpace)!==Pt,(b!==T||v!==T.version||S!==i.toneMapping)&&(x.material.needsUpdate=!0,b=T,v=T.version,S=i.toneMapping),x.layers.enableAll(),R.unshift(x,x.geometry,x.material,0,0,null)):T&&T.isTexture&&(m===void 0&&(m=new Jn(new Ji(2,2),new Wr({name:"BackgroundMaterial",uniforms:Ks(Sr.background.uniforms),vertexShader:Sr.background.vertexShader,fragmentShader:Sr.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=T,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=_t.getTransfer(T.colorSpace)!==Pt,T.matrixAutoUpdate===!0&&T.updateMatrix(),m.material.uniforms.uvTransform.value.copy(T.matrix),(b!==T||v!==T.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,b=T,v=T.version,S=i.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function y(R,D){R.getRGB(wl,Q0(i)),s.buffers.color.setClear(wl.r,wl.g,wl.b,D,f)}return{getClearColor:function(){return d},setClearColor:function(R,D=1){d.set(R),p=D,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,y(d,p)},render:w,addToRenderList:_}}function U_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=v(null);let c=a,f=!1;function d(A,j,se,te,fe){let me=!1;const de=b(te,se,j);c!==de&&(c=de,m(c.object)),me=S(A,te,se,fe),me&&M(A,te,se,fe),fe!==null&&e.update(fe,i.ELEMENT_ARRAY_BUFFER),(me||f)&&(f=!1,T(A,j,se,te),fe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return i.createVertexArray()}function m(A){return i.bindVertexArray(A)}function x(A){return i.deleteVertexArray(A)}function b(A,j,se){const te=se.wireframe===!0;let fe=s[A.id];fe===void 0&&(fe={},s[A.id]=fe);let me=fe[j.id];me===void 0&&(me={},fe[j.id]=me);let de=me[te];return de===void 0&&(de=v(p()),me[te]=de),de}function v(A){const j=[],se=[],te=[];for(let fe=0;fe<t;fe++)j[fe]=0,se[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:se,attributeDivisors:te,object:A,attributes:{},index:null}}function S(A,j,se,te){const fe=c.attributes,me=j.attributes;let de=0;const pe=se.getAttributes();for(const H in pe)if(pe[H].location>=0){const oe=fe[H];let O=me[H];if(O===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),oe===void 0||oe.attribute!==O||O&&oe.data!==O.data)return!0;de++}return c.attributesNum!==de||c.index!==te}function M(A,j,se,te){const fe={},me=j.attributes;let de=0;const pe=se.getAttributes();for(const H in pe)if(pe[H].location>=0){let oe=me[H];oe===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor));const O={};O.attribute=oe,oe&&oe.data&&(O.data=oe.data),fe[H]=O,de++}c.attributes=fe,c.attributesNum=de,c.index=te}function w(){const A=c.newAttributes;for(let j=0,se=A.length;j<se;j++)A[j]=0}function _(A){y(A,0)}function y(A,j){const se=c.newAttributes,te=c.enabledAttributes,fe=c.attributeDivisors;se[A]=1,te[A]===0&&(i.enableVertexAttribArray(A),te[A]=1),fe[A]!==j&&(i.vertexAttribDivisor(A,j),fe[A]=j)}function R(){const A=c.newAttributes,j=c.enabledAttributes;for(let se=0,te=j.length;se<te;se++)j[se]!==A[se]&&(i.disableVertexAttribArray(se),j[se]=0)}function D(A,j,se,te,fe,me,de){de===!0?i.vertexAttribIPointer(A,j,se,fe,me):i.vertexAttribPointer(A,j,se,te,fe,me)}function T(A,j,se,te){w();const fe=te.attributes,me=se.getAttributes(),de=j.defaultAttributeValues;for(const pe in me){const H=me[pe];if(H.location>=0){let J=fe[pe];if(J===void 0&&(pe==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),pe==="instanceColor"&&A.instanceColor&&(J=A.instanceColor)),J!==void 0){const oe=J.normalized,O=J.itemSize,ne=e.get(J);if(ne===void 0)continue;const Pe=ne.buffer,re=ne.type,ge=ne.bytesPerElement,we=re===i.INT||re===i.UNSIGNED_INT||J.gpuType===uf;if(J.isInterleavedBufferAttribute){const Se=J.data,Re=Se.stride,Fe=J.offset;if(Se.isInstancedInterleavedBuffer){for(let Ke=0;Ke<H.locationSize;Ke++)y(H.location+Ke,Se.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ke=0;Ke<H.locationSize;Ke++)_(H.location+Ke);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Ke=0;Ke<H.locationSize;Ke++)D(H.location+Ke,O/H.locationSize,re,oe,Re*ge,(Fe+O/H.locationSize*Ke)*ge,we)}else{if(J.isInstancedBufferAttribute){for(let Se=0;Se<H.locationSize;Se++)y(H.location+Se,J.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<H.locationSize;Se++)_(H.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Se=0;Se<H.locationSize;Se++)D(H.location+Se,O/H.locationSize,re,oe,O*ge,O/H.locationSize*Se*ge,we)}}else if(de!==void 0){const oe=de[pe];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(H.location,oe);break;case 3:i.vertexAttrib3fv(H.location,oe);break;case 4:i.vertexAttrib4fv(H.location,oe);break;default:i.vertexAttrib1fv(H.location,oe)}}}}R()}function z(){B();for(const A in s){const j=s[A];for(const se in j){const te=j[se];for(const fe in te)x(te[fe].object),delete te[fe];delete j[se]}delete s[A]}}function U(A){if(s[A.id]===void 0)return;const j=s[A.id];for(const se in j){const te=j[se];for(const fe in te)x(te[fe].object),delete te[fe];delete j[se]}delete s[A.id]}function k(A){for(const j in s){const se=s[j];if(se[A.id]===void 0)continue;const te=se[A.id];for(const fe in te)x(te[fe].object),delete te[fe];delete se[A.id]}}function B(){P(),f=!0,c!==a&&(c=a,m(c.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:B,resetDefaultState:P,dispose:z,releaseStatesOfGeometry:U,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:_,disableUnusedAttributes:R}}function F_(i,e,t){let s;function a(m){s=m}function c(m,x){i.drawArrays(s,m,x),t.update(x,s,1)}function f(m,x,b){b!==0&&(i.drawArraysInstanced(s,m,x,b),t.update(x,s,b))}function d(m,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,x,0,b);let S=0;for(let M=0;M<b;M++)S+=x[M];t.update(S,s,1)}function p(m,x,b,v){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<m.length;M++)f(m[M],x[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,x,0,v,0,b);let M=0;for(let w=0;w<b;w++)M+=x[w]*v[w];t.update(M,s,1)}}this.setMode=a,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function O_(i,e,t,s){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(k){return!(k!==Zn&&s.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const B=k===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Gr&&s.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==_r&&!B)}function p(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const b=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=M>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:b,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:R,maxVaryings:D,maxFragmentUniforms:T,vertexTextures:z,maxSamples:U}}function z_(i){const e=this;let t=null,s=0,a=!1,c=!1;const f=new qi,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(b,v){const S=b.length!==0||v||s!==0||a;return a=v,s=b.length,S},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(b,v){t=x(b,v,0)},this.setState=function(b,v,S){const M=b.clippingPlanes,w=b.clipIntersection,_=b.clipShadows,y=i.get(b);if(!a||M===null||M.length===0||c&&!_)c?x(null):m();else{const R=c?0:s,D=R*4;let T=y.clippingState||null;p.value=T,T=x(M,v,D,S);for(let z=0;z!==D;++z)T[z]=t[z];y.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(b,v,S,M){const w=b!==null?b.length:0;let _=null;if(w!==0){if(_=p.value,M!==!0||_===null){const y=S+w*4,R=v.matrixWorldInverse;d.getNormalMatrix(R),(_===null||_.length<y)&&(_=new Float32Array(y));for(let D=0,T=S;D!==w;++D,T+=4)f.copy(b[D]).applyMatrix4(R,d),f.normal.toArray(_,T),_[T+3]=f.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function B_(i){let e=new WeakMap;function t(f,d){return d===Td?f.mapping=Xs:d===Ad&&(f.mapping=qs),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Td||d===Ad)if(e.has(f)){const p=e.get(f).texture;return t(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Zy(p.height);return m.fromEquirectangularTexture(i,f),e.set(f,m),f.addEventListener("dispose",a),t(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}class j_ extends Hl{constructor(e=-1,t=1,s=1,a=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=s-e,f=s+e,d=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bs=4,Tm=[.125,.215,.35,.446,.526,.582],Ki=20,id=new j_,Am=new Tt;let sd=null,od=0,ad=0,ld=!1;const Yi=(1+Math.sqrt(5))/2,Os=1/Yi,Cm=[new ue(-Yi,Os,0),new ue(Yi,Os,0),new ue(-Os,0,Yi),new ue(Os,0,Yi),new ue(0,Yi,-Os),new ue(0,Yi,Os),new ue(-1,1,-1),new ue(1,1,-1),new ue(-1,1,1),new ue(1,1,1)];class Rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,a,c),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,od,ad),this._renderer.xr.enabled=ld,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Js,format:Zn,colorSpace:$s,depthBuffer:!1},a=Nm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nm(e,t,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H_(c)),this._blurMaterial=G_(c,e,t)}return a}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,id)}_sceneToCubeUV(e,t,s,a){const d=new ur(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,b=x.autoClear,v=x.toneMapping;x.getClearColor(Am),x.toneMapping=Mi,x.autoClear=!1;const S=new X0({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),M=new Jn(new $o,S);let w=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,w=!0):(S.color.copy(Am),w=!0);for(let y=0;y<6;y++){const R=y%3;R===0?(d.up.set(0,p[y],0),d.lookAt(m[y],0,0)):R===1?(d.up.set(0,0,p[y]),d.lookAt(0,m[y],0)):(d.up.set(0,p[y],0),d.lookAt(0,0,m[y]));const D=this._cubeSize;El(a,R*D,y>2?D:0,D,D),x.setRenderTarget(a),w&&x.render(M,d),x.render(e,d)}M.geometry.dispose(),M.material.dispose(),x.toneMapping=v,x.autoClear=b,e.background=_}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Xs||e.mapping===qs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pm());const c=a?this._cubemapMaterial:this._equirectMaterial,f=new Jn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;El(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(f,id)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Cm[(a-c-1)%Cm.length];this._blur(e,c-1,c,f,d)}t.autoClear=s}_blur(e,t,s,a,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,s,a,"latitudinal",c),this._halfBlur(f,e,s,s,a,"longitudinal",c)}_halfBlur(e,t,s,a,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,b=new Jn(this._lodPlanes[a],m),v=m.uniforms,S=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ki-1),w=c/M,_=isFinite(c)?1+Math.floor(x*w):Ki;_>Ki&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ki}`);const y=[];let R=0;for(let k=0;k<Ki;++k){const B=k/w,P=Math.exp(-B*B/2);y.push(P),k===0?R+=P:k<_&&(R+=2*P)}for(let k=0;k<y.length;k++)y[k]=y[k]/R;v.envMap.value=e.texture,v.samples.value=_,v.weights.value=y,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:D}=this;v.dTheta.value=M,v.mipInt.value=D-s;const T=this._sizeLods[a],z=3*T*(a>D-Bs?a-D+Bs:0),U=4*(this._cubeSize-T);El(t,z,U,3*T,2*T),p.setRenderTarget(t),p.render(b,id)}}function H_(i){const e=[],t=[],s=[];let a=i;const c=i-Bs+1+Tm.length;for(let f=0;f<c;f++){const d=Math.pow(2,a);t.push(d);let p=1/d;f>i-Bs?p=Tm[f-i+Bs-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),x=-m,b=1+m,v=[x,x,b,x,b,b,x,x,b,b,x,b],S=6,M=6,w=3,_=2,y=1,R=new Float32Array(w*M*S),D=new Float32Array(_*M*S),T=new Float32Array(y*M*S);for(let U=0;U<S;U++){const k=U%3*2/3-1,B=U>2?0:-1,P=[k,B,0,k+2/3,B,0,k+2/3,B+1,0,k,B,0,k+2/3,B+1,0,k,B+1,0];R.set(P,w*M*U),D.set(v,_*M*U);const A=[U,U,U,U,U,U];T.set(A,y*M*U)}const z=new Xr;z.setAttribute("position",new hr(R,w)),z.setAttribute("uv",new hr(D,_)),z.setAttribute("faceIndex",new hr(T,y)),e.push(z),a>Bs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Nm(i,e,t){const s=new Ei(i,e,t);return s.texture.mapping=Wl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function El(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function G_(i,e,t){const s=new Float32Array(Ki),a=new ue(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:gf(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Pm(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Dm(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function gf(){return`

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
	`}function V_(i){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Td||p===Ad,x=p===Xs||p===qs;if(m||x){let b=e.get(d);const v=b!==void 0?b.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return t===null&&(t=new Rm(i)),b=m?t.fromEquirectangular(d,b):t.fromCubemap(d,b),b.texture.pmremVersion=d.pmremVersion,e.set(d,b),b.texture;if(b!==void 0)return b.texture;{const S=d.image;return m&&S&&S.height>0||x&&S&&a(S)?(t===null&&(t=new Rm(i)),b=m?t.fromEquirectangular(d):t.fromCubemap(d),b.texture.pmremVersion=d.pmremVersion,e.set(d,b),d.addEventListener("dispose",c),b.texture):null}}}return d}function a(d){let p=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:f}}function W_(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Ho("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function X_(i,e,t,s){const a={},c=new WeakMap;function f(b){const v=b.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const w=v.morphAttributes[M];for(let _=0,y=w.length;_<y;_++)e.remove(w[_])}v.removeEventListener("dispose",f),delete a[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function d(b,v){return a[v.id]===!0||(v.addEventListener("dispose",f),a[v.id]=!0,t.memory.geometries++),v}function p(b){const v=b.attributes;for(const M in v)e.update(v[M],i.ARRAY_BUFFER);const S=b.morphAttributes;for(const M in S){const w=S[M];for(let _=0,y=w.length;_<y;_++)e.update(w[_],i.ARRAY_BUFFER)}}function m(b){const v=[],S=b.index,M=b.attributes.position;let w=0;if(S!==null){const R=S.array;w=S.version;for(let D=0,T=R.length;D<T;D+=3){const z=R[D+0],U=R[D+1],k=R[D+2];v.push(z,U,U,k,k,z)}}else if(M!==void 0){const R=M.array;w=M.version;for(let D=0,T=R.length/3-1;D<T;D+=3){const z=D+0,U=D+1,k=D+2;v.push(z,U,U,k,k,z)}}else return;const _=new(B0(v)?Y0:q0)(v,1);_.version=w;const y=c.get(b);y&&e.remove(y),c.set(b,_)}function x(b){const v=c.get(b);if(v){const S=b.index;S!==null&&v.version<S.version&&m(b)}else m(b);return c.get(b)}return{get:d,update:p,getWireframeAttribute:x}}function q_(i,e,t){let s;function a(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function p(v,S){i.drawElements(s,S,c,v*f),t.update(S,s,1)}function m(v,S,M){M!==0&&(i.drawElementsInstanced(s,S,c,v*f,M),t.update(S,s,M))}function x(v,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,v,0,M);let _=0;for(let y=0;y<M;y++)_+=S[y];t.update(_,s,1)}function b(v,S,M,w){if(M===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<v.length;y++)m(v[y]/f,S[y],w[y]);else{_.multiDrawElementsInstancedWEBGL(s,S,0,c,v,0,w,0,M);let y=0;for(let R=0;R<M;R++)y+=S[R]*w[R];t.update(y,s,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=b}function Y_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(t.calls++,f){case i.TRIANGLES:t.triangles+=d*(c/3);break;case i.LINES:t.lines+=d*(c/2);break;case i.LINE_STRIP:t.lines+=d*(c-1);break;case i.LINE_LOOP:t.lines+=d*c;break;case i.POINTS:t.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function Q_(i,e,t){const s=new WeakMap,a=new jt;function c(f,d,p){const m=f.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,b=x!==void 0?x.length:0;let v=s.get(d);if(v===void 0||v.count!==b){let A=function(){B.dispose(),s.delete(d),d.removeEventListener("dispose",A)};var S=A;v!==void 0&&v.texture.dispose();const M=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let T=0;M===!0&&(T=1),w===!0&&(T=2),_===!0&&(T=3);let z=d.attributes.position.count*T,U=1;z>e.maxTextureSize&&(U=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const k=new Float32Array(z*U*4*b),B=new H0(k,z,U,b);B.type=_r,B.needsUpdate=!0;const P=T*4;for(let j=0;j<b;j++){const se=y[j],te=R[j],fe=D[j],me=z*U*4*j;for(let de=0;de<se.count;de++){const pe=de*P;M===!0&&(a.fromBufferAttribute(se,de),k[me+pe+0]=a.x,k[me+pe+1]=a.y,k[me+pe+2]=a.z,k[me+pe+3]=0),w===!0&&(a.fromBufferAttribute(te,de),k[me+pe+4]=a.x,k[me+pe+5]=a.y,k[me+pe+6]=a.z,k[me+pe+7]=0),_===!0&&(a.fromBufferAttribute(fe,de),k[me+pe+8]=a.x,k[me+pe+9]=a.y,k[me+pe+10]=a.z,k[me+pe+11]=fe.itemSize===4?a.w:1)}}v={count:b,texture:B,size:new ct(z,U)},s.set(d,v),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",f.morphTexture,t);else{let M=0;for(let _=0;_<m.length;_++)M+=m[_];const w=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(i,"morphTargetBaseInfluence",w),p.getUniforms().setValue(i,"morphTargetInfluences",m)}p.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:c}}function K_(i,e,t,s){let a=new WeakMap;function c(p){const m=s.render.frame,x=p.geometry,b=e.get(p,x);if(a.get(b)!==m&&(e.update(b),a.set(b,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return b}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:f}}class $0 extends Sn{constructor(e,t,s,a,c,f,d,p,m,x=Hs){if(x!==Hs&&x!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&x===Hs&&(s=$i),s===void 0&&x===Qs&&(s=Ys),super(null,a,c,f,d,p,x,s,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:Bn,this.minFilter=p!==void 0?p:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const eg=new Sn,km=new $0(1,1),tg=new H0,ng=new Iy,rg=new K0,Lm=[],Im=[],Um=new Float32Array(16),Fm=new Float32Array(9),Om=new Float32Array(4);function to(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let c=Lm[a];if(c===void 0&&(c=new Float32Array(a),Lm[a]=c),e!==0){s.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=t,i[f].toArray(c,d)}return c}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Yl(i,e){let t=Im[e];t===void 0&&(t=new Int32Array(e),Im[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function Z_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function $_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function eb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function tb(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Om.set(s),i.uniformMatrix2fv(this.addr,!1,Om),Zt(t,s)}}function nb(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Fm.set(s),i.uniformMatrix3fv(this.addr,!1,Fm),Zt(t,s)}}function rb(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Um.set(s),i.uniformMatrix4fv(this.addr,!1,Um),Zt(t,s)}}function ib(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function ob(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function lb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function ub(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function db(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function fb(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);let c;this.type===i.SAMPLER_2D_SHADOW?(km.compareFunction=z0,c=km):c=eg,t.setTexture2D(e||c,a)}function hb(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||ng,a)}function pb(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||rg,a)}function mb(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||tg,a)}function gb(i){switch(i){case 5126:return Z_;case 35664:return J_;case 35665:return $_;case 35666:return eb;case 35674:return tb;case 35675:return nb;case 35676:return rb;case 5124:case 35670:return ib;case 35667:case 35671:return sb;case 35668:case 35672:return ob;case 35669:case 35673:return ab;case 5125:return lb;case 36294:return cb;case 36295:return ub;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function xb(i,e){i.uniform1fv(this.addr,e)}function vb(i,e){const t=to(e,this.size,2);i.uniform2fv(this.addr,t)}function yb(i,e){const t=to(e,this.size,3);i.uniform3fv(this.addr,t)}function Sb(i,e){const t=to(e,this.size,4);i.uniform4fv(this.addr,t)}function _b(i,e){const t=to(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bb(i,e){const t=to(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mb(i,e){const t=to(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wb(i,e){i.uniform1iv(this.addr,e)}function Eb(i,e){i.uniform2iv(this.addr,e)}function Tb(i,e){i.uniform3iv(this.addr,e)}function Ab(i,e){i.uniform4iv(this.addr,e)}function Cb(i,e){i.uniform1uiv(this.addr,e)}function Rb(i,e){i.uniform2uiv(this.addr,e)}function Nb(i,e){i.uniform3uiv(this.addr,e)}function Pb(i,e){i.uniform4uiv(this.addr,e)}function Db(i,e,t){const s=this.cache,a=e.length,c=Yl(t,a);Kt(s,c)||(i.uniform1iv(this.addr,c),Zt(s,c));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||eg,c[f])}function kb(i,e,t){const s=this.cache,a=e.length,c=Yl(t,a);Kt(s,c)||(i.uniform1iv(this.addr,c),Zt(s,c));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||ng,c[f])}function Lb(i,e,t){const s=this.cache,a=e.length,c=Yl(t,a);Kt(s,c)||(i.uniform1iv(this.addr,c),Zt(s,c));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||rg,c[f])}function Ib(i,e,t){const s=this.cache,a=e.length,c=Yl(t,a);Kt(s,c)||(i.uniform1iv(this.addr,c),Zt(s,c));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||tg,c[f])}function Ub(i){switch(i){case 5126:return xb;case 35664:return vb;case 35665:return yb;case 35666:return Sb;case 35674:return _b;case 35675:return bb;case 35676:return Mb;case 5124:case 35670:return wb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return Ab;case 5125:return Cb;case 36294:return Rb;case 36295:return Nb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Ib}}class Fb{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=gb(t.type)}}class Ob{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ub(t.type)}}class zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let c=0,f=a.length;c!==f;++c){const d=a[c];d.setValue(e,t[d.id],s)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function zm(i,e){i.seq.push(e),i.map[e.id]=e}function Bb(i,e,t){const s=i.name,a=s.length;for(cd.lastIndex=0;;){const c=cd.exec(s),f=cd.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){zm(t,m===void 0?new Fb(d,i,e):new Ob(d,i,e));break}else{let b=t.map[d];b===void 0&&(b=new zb(d),zm(t,b)),t=b}}}class Ol{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const c=e.getActiveUniform(t,a),f=e.getUniformLocation(t,c.name);Bb(c,f,this)}}setValue(e,t,s,a){const c=this.map[t];c!==void 0&&c.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let c=0,f=t.length;c!==f;++c){const d=t[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,c=e.length;a!==c;++a){const f=e[a];f.id in t&&s.push(f)}return s}}function Bm(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const jb=37297;let Hb=0;function Gb(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let f=a;f<c;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${t[f]}`)}return s.join(`
`)}const jm=new ut;function Vb(i){_t._getMatrix(jm,_t.workingColorSpace,i);const e=`mat3( ${jm.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case Xl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hm(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(s&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+Gb(i.getShaderSource(e),f)}else return a}function Wb(i,e){const t=Vb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xb(i,e){let t;switch(e){case ay:t="Linear";break;case ly:t="Reinhard";break;case cy:t="Cineon";break;case uy:t="ACESFilmic";break;case fy:t="AgX";break;case hy:t="Neutral";break;case dy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tl=new ue;function qb(){_t.getLuminanceCoefficients(Tl);const i=Tl.x.toFixed(4),e=Tl.y.toFixed(4),t=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function Qb(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Kb(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const c=i.getActiveAttrib(e,a),f=c.name;let d=1;c.type===i.FLOAT_MAT2&&(d=2),c.type===i.FLOAT_MAT3&&(d=3),c.type===i.FLOAT_MAT4&&(d=4),t[f]={type:c.type,location:i.getAttribLocation(e,f),locationSize:d}}return t}function Go(i){return i!==""}function Gm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rf(i){return i.replace(Zb,$b)}const Jb=new Map;function $b(i,e){let t=ft[e];if(t===void 0){const s=Jb.get(e);if(s!==void 0)t=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return rf(t)}const eM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(i){return i.replace(eM,tM)}function tM(i,e,t,s){let a="";for(let c=parseInt(e);c<parseInt(t);c++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Xm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function nM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===T0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===B1?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Or&&(e="SHADOWMAP_TYPE_VSM"),e}function rM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function sM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case A0:e="ENVMAP_BLENDING_MULTIPLY";break;case sy:e="ENVMAP_BLENDING_MIX";break;case oy:e="ENVMAP_BLENDING_ADD";break}return e}function oM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function aM(i,e,t,s){const a=i.getContext(),c=t.defines;let f=t.vertexShader,d=t.fragmentShader;const p=nM(t),m=rM(t),x=iM(t),b=sM(t),v=oM(t),S=Yb(t),M=Qb(c),w=a.createProgram();let _,y,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Go).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Go).join(`
`),y.length>0&&(y+=`
`)):(_=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),y=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+b:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?ft.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Xb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Wb("linearToOutputTexel",t.outputColorSpace),qb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Go).join(`
`)),f=rf(f),f=Gm(f,t),f=Vm(f,t),d=rf(d),d=Gm(d,t),d=Vm(d,t),f=Wm(f),d=Wm(d),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",t.glslVersion===sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=R+_+f,T=R+y+d,z=Bm(a,a.VERTEX_SHADER,D),U=Bm(a,a.FRAGMENT_SHADER,T);a.attachShader(w,z),a.attachShader(w,U),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function k(j){if(i.debug.checkShaderErrors){const se=a.getProgramInfoLog(w).trim(),te=a.getShaderInfoLog(z).trim(),fe=a.getShaderInfoLog(U).trim();let me=!0,de=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,w,z,U);else{const pe=Hm(a,z,"vertex"),H=Hm(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+se+`
`+pe+`
`+H)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(te===""||fe==="")&&(de=!1);de&&(j.diagnostics={runnable:me,programLog:se,vertexShader:{log:te,prefix:_},fragmentShader:{log:fe,prefix:y}})}a.deleteShader(z),a.deleteShader(U),B=new Ol(a,w),P=Kb(a,w)}let B;this.getUniforms=function(){return B===void 0&&k(this),B};let P;this.getAttributes=function(){return P===void 0&&k(this),P};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(w,jb)),A},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=U,this}let lM=0;class cM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new uM(e),t.set(e,s)),s}}class uM{constructor(e){this.id=lM++,this.code=e,this.usedTimes=0}}function dM(i,e,t,s,a,c,f){const d=new V0,p=new cM,m=new Set,x=[],b=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return m.add(P),P===0?"uv":`uv${P}`}function _(P,A,j,se,te){const fe=se.fog,me=te.geometry,de=P.isMeshStandardMaterial?se.environment:null,pe=(P.isMeshStandardMaterial?t:e).get(P.envMap||de),H=pe&&pe.mapping===Wl?pe.image.height:null,J=M[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const oe=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,O=oe!==void 0?oe.length:0;let ne=0;me.morphAttributes.position!==void 0&&(ne=1),me.morphAttributes.normal!==void 0&&(ne=2),me.morphAttributes.color!==void 0&&(ne=3);let Pe,re,ge,we;if(J){const yt=Sr[J];Pe=yt.vertexShader,re=yt.fragmentShader}else Pe=P.vertexShader,re=P.fragmentShader,p.update(P),ge=p.getVertexShaderID(P),we=p.getFragmentShaderID(P);const Se=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Fe=te.isInstancedMesh===!0,Ke=te.isBatchedMesh===!0,At=!!P.map,pt=!!P.matcap,Nt=!!pe,Q=!!P.aoMap,nn=!!P.lightMap,ht=!!P.bumpMap,dt=!!P.normalMap,Ye=!!P.displacementMap,bt=!!P.emissiveMap,Qe=!!P.metalnessMap,I=!!P.roughnessMap,C=P.anisotropy>0,q=P.clearcoat>0,L=P.dispersion>0,Z=P.iridescence>0,$=P.sheen>0,Te=P.transmission>0,be=C&&!!P.anisotropyMap,Ne=q&&!!P.clearcoatMap,at=q&&!!P.clearcoatNormalMap,_e=q&&!!P.clearcoatRoughnessMap,Oe=Z&&!!P.iridescenceMap,$e=Z&&!!P.iridescenceThicknessMap,tt=$&&!!P.sheenColorMap,Be=$&&!!P.sheenRoughnessMap,mt=!!P.specularMap,st=!!P.specularColorMap,Ct=!!P.specularIntensityMap,X=Te&&!!P.transmissionMap,De=Te&&!!P.thicknessMap,he=!!P.gradientMap,xe=!!P.alphaMap,Ie=P.alphaTest>0,Le=!!P.alphaHash,ot=!!P.extensions;let Lt=Mi;P.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const Xt={shaderID:J,shaderType:P.type,shaderName:P.name,vertexShader:Pe,fragmentShader:re,defines:P.defines,customVertexShaderID:ge,customFragmentShaderID:we,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&te._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&te.instanceColor!==null,instancingMorph:Fe&&te.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:$s,alphaToCoverage:!!P.alphaToCoverage,map:At,matcap:pt,envMap:Nt,envMapMode:Nt&&pe.mapping,envMapCubeUVHeight:H,aoMap:Q,lightMap:nn,bumpMap:ht,normalMap:dt,displacementMap:v&&Ye,emissiveMap:bt,normalMapObjectSpace:dt&&P.normalMapType===vy,normalMapTangentSpace:dt&&P.normalMapType===xy,metalnessMap:Qe,roughnessMap:I,anisotropy:C,anisotropyMap:be,clearcoat:q,clearcoatMap:Ne,clearcoatNormalMap:at,clearcoatRoughnessMap:_e,dispersion:L,iridescence:Z,iridescenceMap:Oe,iridescenceThicknessMap:$e,sheen:$,sheenColorMap:tt,sheenRoughnessMap:Be,specularMap:mt,specularColorMap:st,specularIntensityMap:Ct,transmission:Te,transmissionMap:X,thicknessMap:De,gradientMap:he,opaque:P.transparent===!1&&P.blending===js&&P.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ie,alphaHash:Le,combine:P.combine,mapUv:At&&w(P.map.channel),aoMapUv:Q&&w(P.aoMap.channel),lightMapUv:nn&&w(P.lightMap.channel),bumpMapUv:ht&&w(P.bumpMap.channel),normalMapUv:dt&&w(P.normalMap.channel),displacementMapUv:Ye&&w(P.displacementMap.channel),emissiveMapUv:bt&&w(P.emissiveMap.channel),metalnessMapUv:Qe&&w(P.metalnessMap.channel),roughnessMapUv:I&&w(P.roughnessMap.channel),anisotropyMapUv:be&&w(P.anisotropyMap.channel),clearcoatMapUv:Ne&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:at&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(P.sheenRoughnessMap.channel),specularMapUv:mt&&w(P.specularMap.channel),specularColorMapUv:st&&w(P.specularColorMap.channel),specularIntensityMapUv:Ct&&w(P.specularIntensityMap.channel),transmissionMapUv:X&&w(P.transmissionMap.channel),thicknessMapUv:De&&w(P.thicknessMap.channel),alphaMapUv:xe&&w(P.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(dt||C),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!me.attributes.uv&&(At||xe),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:b,reverseDepthBuffer:Re,skinning:te.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:At&&P.map.isVideoTexture===!0&&_t.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:bt&&P.emissiveMap.isVideoTexture===!0&&_t.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===zr,flipSided:P.side===Dn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||Ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function y(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const j in P.defines)A.push(j),A.push(P.defines[j]);return P.isRawShaderMaterial===!1&&(R(A,P),D(A,P),A.push(i.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function R(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function D(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),P.push(d.mask)}function T(P){const A=M[P.type];let j;if(A){const se=Sr[A];j=qy.clone(se.uniforms)}else j=P.uniforms;return j}function z(P,A){let j;for(let se=0,te=x.length;se<te;se++){const fe=x[se];if(fe.cacheKey===A){j=fe,++j.usedTimes;break}}return j===void 0&&(j=new aM(i,A,P,c),x.push(j)),j}function U(P){if(--P.usedTimes===0){const A=x.indexOf(P);x[A]=x[x.length-1],x.pop(),P.destroy()}}function k(P){p.remove(P)}function B(){p.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:T,acquireProgram:z,releaseProgram:U,releaseShaderCache:k,programs:x,dispose:B}}function fM(){let i=new WeakMap;function e(f){return i.has(f)}function t(f){let d=i.get(f);return d===void 0&&(d={},i.set(f,d)),d}function s(f){i.delete(f)}function a(f,d,p){i.get(f)[d]=p}function c(){i=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:c}}function hM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ym(){const i=[];let e=0;const t=[],s=[],a=[];function c(){e=0,t.length=0,s.length=0,a.length=0}function f(b,v,S,M,w,_){let y=i[e];return y===void 0?(y={id:b.id,object:b,geometry:v,material:S,groupOrder:M,renderOrder:b.renderOrder,z:w,group:_},i[e]=y):(y.id=b.id,y.object=b,y.geometry=v,y.material=S,y.groupOrder=M,y.renderOrder=b.renderOrder,y.z=w,y.group=_),e++,y}function d(b,v,S,M,w,_){const y=f(b,v,S,M,w,_);S.transmission>0?s.push(y):S.transparent===!0?a.push(y):t.push(y)}function p(b,v,S,M,w,_){const y=f(b,v,S,M,w,_);S.transmission>0?s.unshift(y):S.transparent===!0?a.unshift(y):t.unshift(y)}function m(b,v){t.length>1&&t.sort(b||hM),s.length>1&&s.sort(v||qm),a.length>1&&a.sort(v||qm)}function x(){for(let b=e,v=i.length;b<v;b++){const S=i[b];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:c,push:d,unshift:p,finish:x,sort:m}}function pM(){let i=new WeakMap;function e(s,a){const c=i.get(s);let f;return c===void 0?(f=new Ym,i.set(s,[f])):a>=c.length?(f=new Ym,c.push(f)):f=c[a],f}function t(){i=new WeakMap}return{get:e,dispose:t}}function mM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ue,color:new Tt};break;case"SpotLight":t={position:new ue,direction:new ue,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return i[e.id]=t,t}}}function gM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xM=0;function vM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yM(i){const e=new mM,t=gM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ue);const a=new ue,c=new Gt,f=new Gt;function d(m){let x=0,b=0,v=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,M=0,w=0,_=0,y=0,R=0,D=0,T=0,z=0,U=0,k=0;m.sort(vM);for(let P=0,A=m.length;P<A;P++){const j=m[P],se=j.color,te=j.intensity,fe=j.distance,me=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)x+=se.r*te,b+=se.g*te,v+=se.b*te;else if(j.isLightProbe){for(let de=0;de<9;de++)s.probe[de].addScaledVector(j.sh.coefficients[de],te);k++}else if(j.isDirectionalLight){const de=e.get(j);if(de.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const pe=j.shadow,H=t.get(j);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,s.directionalShadow[S]=H,s.directionalShadowMap[S]=me,s.directionalShadowMatrix[S]=j.shadow.matrix,R++}s.directional[S]=de,S++}else if(j.isSpotLight){const de=e.get(j);de.position.setFromMatrixPosition(j.matrixWorld),de.color.copy(se).multiplyScalar(te),de.distance=fe,de.coneCos=Math.cos(j.angle),de.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),de.decay=j.decay,s.spot[w]=de;const pe=j.shadow;if(j.map&&(s.spotLightMap[z]=j.map,z++,pe.updateMatrices(j),j.castShadow&&U++),s.spotLightMatrix[w]=pe.matrix,j.castShadow){const H=t.get(j);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,s.spotShadow[w]=H,s.spotShadowMap[w]=me,T++}w++}else if(j.isRectAreaLight){const de=e.get(j);de.color.copy(se).multiplyScalar(te),de.halfWidth.set(j.width*.5,0,0),de.halfHeight.set(0,j.height*.5,0),s.rectArea[_]=de,_++}else if(j.isPointLight){const de=e.get(j);if(de.color.copy(j.color).multiplyScalar(j.intensity),de.distance=j.distance,de.decay=j.decay,j.castShadow){const pe=j.shadow,H=t.get(j);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,H.shadowCameraNear=pe.camera.near,H.shadowCameraFar=pe.camera.far,s.pointShadow[M]=H,s.pointShadowMap[M]=me,s.pointShadowMatrix[M]=j.shadow.matrix,D++}s.point[M]=de,M++}else if(j.isHemisphereLight){const de=e.get(j);de.skyColor.copy(j.color).multiplyScalar(te),de.groundColor.copy(j.groundColor).multiplyScalar(te),s.hemi[y]=de,y++}}_>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ke.LTC_FLOAT_1,s.rectAreaLTC2=ke.LTC_FLOAT_2):(s.rectAreaLTC1=ke.LTC_HALF_1,s.rectAreaLTC2=ke.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=b,s.ambient[2]=v;const B=s.hash;(B.directionalLength!==S||B.pointLength!==M||B.spotLength!==w||B.rectAreaLength!==_||B.hemiLength!==y||B.numDirectionalShadows!==R||B.numPointShadows!==D||B.numSpotShadows!==T||B.numSpotMaps!==z||B.numLightProbes!==k)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=_,s.point.length=M,s.hemi.length=y,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=T+z-U,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=k,B.directionalLength=S,B.pointLength=M,B.spotLength=w,B.rectAreaLength=_,B.hemiLength=y,B.numDirectionalShadows=R,B.numPointShadows=D,B.numSpotShadows=T,B.numSpotMaps=z,B.numLightProbes=k,s.version=xM++)}function p(m,x){let b=0,v=0,S=0,M=0,w=0;const _=x.matrixWorldInverse;for(let y=0,R=m.length;y<R;y++){const D=m[y];if(D.isDirectionalLight){const T=s.directional[b];T.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(_),b++}else if(D.isSpotLight){const T=s.spot[S];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(_),S++}else if(D.isRectAreaLight){const T=s.rectArea[M];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(_),f.identity(),c.copy(D.matrixWorld),c.premultiply(_),f.extractRotation(c),T.halfWidth.set(D.width*.5,0,0),T.halfHeight.set(0,D.height*.5,0),T.halfWidth.applyMatrix4(f),T.halfHeight.applyMatrix4(f),M++}else if(D.isPointLight){const T=s.point[v];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(_),v++}else if(D.isHemisphereLight){const T=s.hemi[w];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(_),w++}}}return{setup:d,setupView:p,state:s}}function Qm(i){const e=new yM(i),t=[],s=[];function a(x){m.camera=x,t.length=0,s.length=0}function c(x){t.push(x)}function f(x){s.push(x)}function d(){e.setup(t)}function p(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function SM(i){let e=new WeakMap;function t(a,c=0){const f=e.get(a);let d;return f===void 0?(d=new Qm(i),e.set(a,[d])):c>=f.length?(d=new Qm(i),f.push(d)):d=f[c],d}function s(){e=new WeakMap}return{get:t,dispose:s}}class _M extends Jo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=my,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bM extends Jo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const MM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wM=`uniform sampler2D shadow_pass;
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
}`;function EM(i,e,t){let s=new Z0;const a=new ct,c=new ct,f=new jt,d=new _M({depthPacking:gy}),p=new bM,m={},x=t.maxTextureSize,b={[wi]:Dn,[Dn]:wi,[zr]:zr},v=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:MM,fragmentShader:wM}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new Xr;M.setAttribute("position",new hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Jn(M,v),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T0;let y=this.type;this.render=function(U,k,B){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||U.length===0)return;const P=i.getRenderTarget(),A=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),se=i.state;se.setBlending(bi),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const te=y!==Or&&this.type===Or,fe=y===Or&&this.type!==Or;for(let me=0,de=U.length;me<de;me++){const pe=U[me],H=pe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const J=H.getFrameExtents();if(a.multiply(J),c.copy(H.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(c.x=Math.floor(x/J.x),a.x=c.x*J.x,H.mapSize.x=c.x),a.y>x&&(c.y=Math.floor(x/J.y),a.y=c.y*J.y,H.mapSize.y=c.y)),H.map===null||te===!0||fe===!0){const O=this.type!==Or?{minFilter:Bn,magFilter:Bn}:{};H.map!==null&&H.map.dispose(),H.map=new Ei(a.x,a.y,O),H.map.texture.name=pe.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const oe=H.getViewportCount();for(let O=0;O<oe;O++){const ne=H.getViewport(O);f.set(c.x*ne.x,c.y*ne.y,c.x*ne.z,c.y*ne.w),se.viewport(f),H.updateMatrices(pe,O),s=H.getFrustum(),T(k,B,H.camera,pe,this.type)}H.isPointLightShadow!==!0&&this.type===Or&&R(H,B),H.needsUpdate=!1}y=this.type,_.needsUpdate=!1,i.setRenderTarget(P,A,j)};function R(U,k){const B=e.update(w);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ei(a.x,a.y)),v.uniforms.shadow_pass.value=U.map.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(k,null,B,v,w,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(k,null,B,S,w,null)}function D(U,k,B,P){let A=null;const j=B.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(j!==void 0)A=j;else if(A=B.isPointLight===!0?p:d,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const se=A.uuid,te=k.uuid;let fe=m[se];fe===void 0&&(fe={},m[se]=fe);let me=fe[te];me===void 0&&(me=A.clone(),fe[te]=me,k.addEventListener("dispose",z)),A=me}if(A.visible=k.visible,A.wireframe=k.wireframe,P===Or?A.side=k.shadowSide!==null?k.shadowSide:k.side:A.side=k.shadowSide!==null?k.shadowSide:b[k.side],A.alphaMap=k.alphaMap,A.alphaTest=k.alphaTest,A.map=k.map,A.clipShadows=k.clipShadows,A.clippingPlanes=k.clippingPlanes,A.clipIntersection=k.clipIntersection,A.displacementMap=k.displacementMap,A.displacementScale=k.displacementScale,A.displacementBias=k.displacementBias,A.wireframeLinewidth=k.wireframeLinewidth,A.linewidth=k.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const se=i.properties.get(A);se.light=B}return A}function T(U,k,B,P,A){if(U.visible===!1)return;if(U.layers.test(k.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&A===Or)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,U.matrixWorld);const te=e.update(U),fe=U.material;if(Array.isArray(fe)){const me=te.groups;for(let de=0,pe=me.length;de<pe;de++){const H=me[de],J=fe[H.materialIndex];if(J&&J.visible){const oe=D(U,J,P,A);U.onBeforeShadow(i,U,k,B,te,oe,H),i.renderBufferDirect(B,null,te,oe,U,H),U.onAfterShadow(i,U,k,B,te,oe,H)}}}else if(fe.visible){const me=D(U,fe,P,A);U.onBeforeShadow(i,U,k,B,te,me,null),i.renderBufferDirect(B,null,te,me,U,null),U.onAfterShadow(i,U,k,B,te,me,null)}}const se=U.children;for(let te=0,fe=se.length;te<fe;te++)T(se[te],k,B,P,A)}function z(U){U.target.removeEventListener("dispose",z);for(const B in m){const P=m[B],A=U.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const TM={[yd]:Sd,[_d]:wd,[bd]:Ed,[Ws]:Md,[Sd]:yd,[wd]:_d,[Ed]:bd,[Md]:Ws};function AM(i,e){function t(){let X=!1;const De=new jt;let he=null;const xe=new jt(0,0,0,0);return{setMask:function(Ie){he!==Ie&&!X&&(i.colorMask(Ie,Ie,Ie,Ie),he=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,Le,ot,Lt,Xt){Xt===!0&&(Ie*=Lt,Le*=Lt,ot*=Lt),De.set(Ie,Le,ot,Lt),xe.equals(De)===!1&&(i.clearColor(Ie,Le,ot,Lt),xe.copy(De))},reset:function(){X=!1,he=null,xe.set(-1,0,0,0)}}}function s(){let X=!1,De=!1,he=null,xe=null,Ie=null;return{setReversed:function(Le){if(De!==Le){const ot=e.get("EXT_clip_control");De?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Lt=Ie;Ie=null,this.setClear(Lt)}De=Le},getReversed:function(){return De},setTest:function(Le){Le?Se(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Le){he!==Le&&!X&&(i.depthMask(Le),he=Le)},setFunc:function(Le){if(De&&(Le=TM[Le]),xe!==Le){switch(Le){case yd:i.depthFunc(i.NEVER);break;case Sd:i.depthFunc(i.ALWAYS);break;case _d:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case bd:i.depthFunc(i.EQUAL);break;case Md:i.depthFunc(i.GEQUAL);break;case wd:i.depthFunc(i.GREATER);break;case Ed:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Le}},setLocked:function(Le){X=Le},setClear:function(Le){Ie!==Le&&(De&&(Le=1-Le),i.clearDepth(Le),Ie=Le)},reset:function(){X=!1,he=null,xe=null,Ie=null,De=!1}}}function a(){let X=!1,De=null,he=null,xe=null,Ie=null,Le=null,ot=null,Lt=null,Xt=null;return{setTest:function(yt){X||(yt?Se(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(yt){De!==yt&&!X&&(i.stencilMask(yt),De=yt)},setFunc:function(yt,_n,pn){(he!==yt||xe!==_n||Ie!==pn)&&(i.stencilFunc(yt,_n,pn),he=yt,xe=_n,Ie=pn)},setOp:function(yt,_n,pn){(Le!==yt||ot!==_n||Lt!==pn)&&(i.stencilOp(yt,_n,pn),Le=yt,ot=_n,Lt=pn)},setLocked:function(yt){X=yt},setClear:function(yt){Xt!==yt&&(i.clearStencil(yt),Xt=yt)},reset:function(){X=!1,De=null,he=null,xe=null,Ie=null,Le=null,ot=null,Lt=null,Xt=null}}}const c=new t,f=new s,d=new a,p=new WeakMap,m=new WeakMap;let x={},b={},v=new WeakMap,S=[],M=null,w=!1,_=null,y=null,R=null,D=null,T=null,z=null,U=null,k=new Tt(0,0,0),B=0,P=!1,A=null,j=null,se=null,te=null,fe=null;const me=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,pe=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(H)[1]),de=pe>=1):H.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),de=pe>=2);let J=null,oe={};const O=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),Pe=new jt().fromArray(O),re=new jt().fromArray(ne);function ge(X,De,he,xe){const Ie=new Uint8Array(4),Le=i.createTexture();i.bindTexture(X,Le),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<he;ot++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(De+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return Le}const we={};we[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Se(i.DEPTH_TEST),f.setFunc(Ws),ht(!1),dt(em),Se(i.CULL_FACE),Q(bi);function Se(X){x[X]!==!0&&(i.enable(X),x[X]=!0)}function Re(X){x[X]!==!1&&(i.disable(X),x[X]=!1)}function Fe(X,De){return b[X]!==De?(i.bindFramebuffer(X,De),b[X]=De,X===i.DRAW_FRAMEBUFFER&&(b[i.FRAMEBUFFER]=De),X===i.FRAMEBUFFER&&(b[i.DRAW_FRAMEBUFFER]=De),!0):!1}function Ke(X,De){let he=S,xe=!1;if(X){he=v.get(De),he===void 0&&(he=[],v.set(De,he));const Ie=X.textures;if(he.length!==Ie.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,ot=Ie.length;Le<ot;Le++)he[Le]=i.COLOR_ATTACHMENT0+Le;he.length=Ie.length,xe=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,xe=!0);xe&&i.drawBuffers(he)}function At(X){return M!==X?(i.useProgram(X),M=X,!0):!1}const pt={[Qi]:i.FUNC_ADD,[H1]:i.FUNC_SUBTRACT,[G1]:i.FUNC_REVERSE_SUBTRACT};pt[V1]=i.MIN,pt[W1]=i.MAX;const Nt={[X1]:i.ZERO,[q1]:i.ONE,[Y1]:i.SRC_COLOR,[xd]:i.SRC_ALPHA,[ey]:i.SRC_ALPHA_SATURATE,[J1]:i.DST_COLOR,[K1]:i.DST_ALPHA,[Q1]:i.ONE_MINUS_SRC_COLOR,[vd]:i.ONE_MINUS_SRC_ALPHA,[$1]:i.ONE_MINUS_DST_COLOR,[Z1]:i.ONE_MINUS_DST_ALPHA,[ty]:i.CONSTANT_COLOR,[ny]:i.ONE_MINUS_CONSTANT_COLOR,[ry]:i.CONSTANT_ALPHA,[iy]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(X,De,he,xe,Ie,Le,ot,Lt,Xt,yt){if(X===bi){w===!0&&(Re(i.BLEND),w=!1);return}if(w===!1&&(Se(i.BLEND),w=!0),X!==j1){if(X!==_||yt!==P){if((y!==Qi||T!==Qi)&&(i.blendEquation(i.FUNC_ADD),y=Qi,T=Qi),yt)switch(X){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gd:i.blendFunc(i.ONE,i.ONE);break;case tm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}R=null,D=null,z=null,U=null,k.set(0,0,0),B=0,_=X,P=yt}return}Ie=Ie||De,Le=Le||he,ot=ot||xe,(De!==y||Ie!==T)&&(i.blendEquationSeparate(pt[De],pt[Ie]),y=De,T=Ie),(he!==R||xe!==D||Le!==z||ot!==U)&&(i.blendFuncSeparate(Nt[he],Nt[xe],Nt[Le],Nt[ot]),R=he,D=xe,z=Le,U=ot),(Lt.equals(k)===!1||Xt!==B)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Xt),k.copy(Lt),B=Xt),_=X,P=!1}function nn(X,De){X.side===zr?Re(i.CULL_FACE):Se(i.CULL_FACE);let he=X.side===Dn;De&&(he=!he),ht(he),X.blending===js&&X.transparent===!1?Q(bi):Q(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const xe=X.stencilWrite;d.setTest(xe),xe&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),bt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(X){A!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),A=X)}function dt(X){X!==O1?(Se(i.CULL_FACE),X!==j&&(X===em?i.cullFace(i.BACK):X===z1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),j=X}function Ye(X){X!==se&&(de&&i.lineWidth(X),se=X)}function bt(X,De,he){X?(Se(i.POLYGON_OFFSET_FILL),(te!==De||fe!==he)&&(i.polygonOffset(De,he),te=De,fe=he)):Re(i.POLYGON_OFFSET_FILL)}function Qe(X){X?Se(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function I(X){X===void 0&&(X=i.TEXTURE0+me-1),J!==X&&(i.activeTexture(X),J=X)}function C(X,De,he){he===void 0&&(J===null?he=i.TEXTURE0+me-1:he=J);let xe=oe[he];xe===void 0&&(xe={type:void 0,texture:void 0},oe[he]=xe),(xe.type!==X||xe.texture!==De)&&(J!==he&&(i.activeTexture(he),J=he),i.bindTexture(X,De||we[X]),xe.type=X,xe.texture=De)}function q(){const X=oe[J];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function L(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function at(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(X){Pe.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Pe.copy(X))}function Be(X){re.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),re.copy(X))}function mt(X,De){let he=m.get(De);he===void 0&&(he=new WeakMap,m.set(De,he));let xe=he.get(X);xe===void 0&&(xe=i.getUniformBlockIndex(De,X.name),he.set(X,xe))}function st(X,De){const xe=m.get(De).get(X);p.get(De)!==xe&&(i.uniformBlockBinding(De,xe,X.__bindingPointIndex),p.set(De,xe))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),f.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),x={},J=null,oe={},b={},v=new WeakMap,S=[],M=null,w=!1,_=null,y=null,R=null,D=null,T=null,z=null,U=null,k=new Tt(0,0,0),B=0,P=!1,A=null,j=null,se=null,te=null,fe=null,Pe.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Se,disable:Re,bindFramebuffer:Fe,drawBuffers:Ke,useProgram:At,setBlending:Q,setMaterial:nn,setFlipSided:ht,setCullFace:dt,setLineWidth:Ye,setPolygonOffset:bt,setScissorTest:Qe,activeTexture:I,bindTexture:C,unbindTexture:q,compressedTexImage2D:L,compressedTexImage3D:Z,texImage2D:Oe,texImage3D:$e,updateUBOMapping:mt,uniformBlockBinding:st,texStorage2D:at,texStorage3D:_e,texSubImage2D:$,texSubImage3D:Te,compressedTexSubImage2D:be,compressedTexSubImage3D:Ne,scissor:tt,viewport:Be,reset:Ct}}function Km(i,e,t,s){const a=CM(s);switch(t){case D0:return i*e;case L0:return i*e;case I0:return i*e*2;case U0:return i*e/a.components*a.byteLength;case hf:return i*e/a.components*a.byteLength;case F0:return i*e*2/a.components*a.byteLength;case pf:return i*e*2/a.components*a.byteLength;case k0:return i*e*3/a.components*a.byteLength;case Zn:return i*e*4/a.components*a.byteLength;case mf:return i*e*4/a.components*a.byteLength;case kl:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Il:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pd:case kd:return Math.max(i,16)*Math.max(e,8)/4;case Nd:case Dd:return Math.max(i,8)*Math.max(e,8)/2;case Ld:case Id:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ud:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jd:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fl:case Zd:case Jd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case O0:case $d:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ef:case tf:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function CM(i){switch(i){case Gr:case R0:return{byteLength:1,components:1};case Xo:case N0:case Js:return{byteLength:2,components:1};case df:case ff:return{byteLength:2,components:4};case $i:case uf:case _r:return{byteLength:4,components:1};case P0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function RM(i,e,t,s,a,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ct,x=new WeakMap;let b;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,C){return S?new OffscreenCanvas(I,C):jl("canvas")}function w(I,C,q){let L=1;const Z=Qe(I);if((Z.width>q||Z.height>q)&&(L=q/Math.max(Z.width,Z.height)),L<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const $=Math.floor(L*Z.width),Te=Math.floor(L*Z.height);b===void 0&&(b=M($,Te));const be=C?M($,Te):b;return be.width=$,be.height=Te,be.getContext("2d").drawImage(I,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+Te+")."),be}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),I;return I}function _(I){return I.generateMipmaps}function y(I){i.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(I,C,q,L,Z=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=C;if(C===i.RED&&(q===i.FLOAT&&($=i.R32F),q===i.HALF_FLOAT&&($=i.R16F),q===i.UNSIGNED_BYTE&&($=i.R8)),C===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.R8UI),q===i.UNSIGNED_SHORT&&($=i.R16UI),q===i.UNSIGNED_INT&&($=i.R32UI),q===i.BYTE&&($=i.R8I),q===i.SHORT&&($=i.R16I),q===i.INT&&($=i.R32I)),C===i.RG&&(q===i.FLOAT&&($=i.RG32F),q===i.HALF_FLOAT&&($=i.RG16F),q===i.UNSIGNED_BYTE&&($=i.RG8)),C===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RG8UI),q===i.UNSIGNED_SHORT&&($=i.RG16UI),q===i.UNSIGNED_INT&&($=i.RG32UI),q===i.BYTE&&($=i.RG8I),q===i.SHORT&&($=i.RG16I),q===i.INT&&($=i.RG32I)),C===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RGB8UI),q===i.UNSIGNED_SHORT&&($=i.RGB16UI),q===i.UNSIGNED_INT&&($=i.RGB32UI),q===i.BYTE&&($=i.RGB8I),q===i.SHORT&&($=i.RGB16I),q===i.INT&&($=i.RGB32I)),C===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RGBA8UI),q===i.UNSIGNED_SHORT&&($=i.RGBA16UI),q===i.UNSIGNED_INT&&($=i.RGBA32UI),q===i.BYTE&&($=i.RGBA8I),q===i.SHORT&&($=i.RGBA16I),q===i.INT&&($=i.RGBA32I)),C===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),C===i.RGBA){const Te=Z?Xl:_t.getTransfer(L);q===i.FLOAT&&($=i.RGBA32F),q===i.HALF_FLOAT&&($=i.RGBA16F),q===i.UNSIGNED_BYTE&&($=Te===Pt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function T(I,C){let q;return I?C===null||C===$i||C===Ys?q=i.DEPTH24_STENCIL8:C===_r?q=i.DEPTH32F_STENCIL8:C===Xo&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===$i||C===Ys?q=i.DEPTH_COMPONENT24:C===_r?q=i.DEPTH_COMPONENT32F:C===Xo&&(q=i.DEPTH_COMPONENT16),q}function z(I,C){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==Bn&&I.minFilter!==Pn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function U(I){const C=I.target;C.removeEventListener("dispose",U),B(C),C.isVideoTexture&&x.delete(C)}function k(I){const C=I.target;C.removeEventListener("dispose",k),A(C)}function B(I){const C=s.get(I);if(C.__webglInit===void 0)return;const q=I.source,L=v.get(q);if(L){const Z=L[C.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(I),Object.keys(L).length===0&&v.delete(q)}s.remove(I)}function P(I){const C=s.get(I);i.deleteTexture(C.__webglTexture);const q=I.source,L=v.get(q);delete L[C.__cacheKey],f.memory.textures--}function A(I){const C=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(C.__webglFramebuffer[L]))for(let Z=0;Z<C.__webglFramebuffer[L].length;Z++)i.deleteFramebuffer(C.__webglFramebuffer[L][Z]);else i.deleteFramebuffer(C.__webglFramebuffer[L]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[L])}else{if(Array.isArray(C.__webglFramebuffer))for(let L=0;L<C.__webglFramebuffer.length;L++)i.deleteFramebuffer(C.__webglFramebuffer[L]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let L=0;L<C.__webglColorRenderbuffer.length;L++)C.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[L]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const q=I.textures;for(let L=0,Z=q.length;L<Z;L++){const $=s.get(q[L]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),f.memory.textures--),s.remove(q[L])}s.remove(I)}let j=0;function se(){j=0}function te(){const I=j;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),j+=1,I}function fe(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function me(I,C){const q=s.get(I);if(I.isVideoTexture&&Ye(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){const L=I.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(q,I,C);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+C)}function de(I,C){const q=s.get(I);if(I.version>0&&q.__version!==I.version){re(q,I,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+C)}function pe(I,C){const q=s.get(I);if(I.version>0&&q.__version!==I.version){re(q,I,C);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+C)}function H(I,C){const q=s.get(I);if(I.version>0&&q.__version!==I.version){ge(q,I,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+C)}const J={[Cd]:i.REPEAT,[fr]:i.CLAMP_TO_EDGE,[Rd]:i.MIRRORED_REPEAT},oe={[Bn]:i.NEAREST,[py]:i.NEAREST_MIPMAP_NEAREST,[ol]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Iu]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},O={[yy]:i.NEVER,[Ey]:i.ALWAYS,[Sy]:i.LESS,[z0]:i.LEQUAL,[_y]:i.EQUAL,[wy]:i.GEQUAL,[by]:i.GREATER,[My]:i.NOTEQUAL};function ne(I,C){if(C.type===_r&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Pn||C.magFilter===Iu||C.magFilter===ol||C.magFilter===Zi||C.minFilter===Pn||C.minFilter===Iu||C.minFilter===ol||C.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,J[C.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,J[C.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,J[C.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,oe[C.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,oe[C.minFilter]),C.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,O[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Bn||C.minFilter!==ol&&C.minFilter!==Zi||C.type===_r&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function Pe(I,C){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",U));const L=C.source;let Z=v.get(L);Z===void 0&&(Z={},v.set(L,Z));const $=fe(C);if($!==I.__cacheKey){Z[$]===void 0&&(Z[$]={texture:i.createTexture(),usedTimes:0},f.memory.textures++,q=!0),Z[$].usedTimes++;const Te=Z[I.__cacheKey];Te!==void 0&&(Z[I.__cacheKey].usedTimes--,Te.usedTimes===0&&P(C)),I.__cacheKey=$,I.__webglTexture=Z[$].texture}return q}function re(I,C,q){let L=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(L=i.TEXTURE_3D);const Z=Pe(I,C),$=C.source;t.bindTexture(L,I.__webglTexture,i.TEXTURE0+q);const Te=s.get($);if($.version!==Te.__version||Z===!0){t.activeTexture(i.TEXTURE0+q);const be=_t.getPrimaries(_t.workingColorSpace),Ne=C.colorSpace===Si?null:_t.getPrimaries(C.colorSpace),at=C.colorSpace===Si||be===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let _e=w(C.image,!1,a.maxTextureSize);_e=bt(C,_e);const Oe=c.convert(C.format,C.colorSpace),$e=c.convert(C.type);let tt=D(C.internalFormat,Oe,$e,C.colorSpace,C.isVideoTexture);ne(L,C);let Be;const mt=C.mipmaps,st=C.isVideoTexture!==!0,Ct=Te.__version===void 0||Z===!0,X=$.dataReady,De=z(C,_e);if(C.isDepthTexture)tt=T(C.format===Qs,C.type),Ct&&(st?t.texStorage2D(i.TEXTURE_2D,1,tt,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,tt,_e.width,_e.height,0,Oe,$e,null));else if(C.isDataTexture)if(mt.length>0){st&&Ct&&t.texStorage2D(i.TEXTURE_2D,De,tt,mt[0].width,mt[0].height);for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],st?X&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Be.width,Be.height,Oe,$e,Be.data):t.texImage2D(i.TEXTURE_2D,he,tt,Be.width,Be.height,0,Oe,$e,Be.data);C.generateMipmaps=!1}else st?(Ct&&t.texStorage2D(i.TEXTURE_2D,De,tt,_e.width,_e.height),X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Oe,$e,_e.data)):t.texImage2D(i.TEXTURE_2D,0,tt,_e.width,_e.height,0,Oe,$e,_e.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){st&&Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,tt,mt[0].width,mt[0].height,_e.depth);for(let he=0,xe=mt.length;he<xe;he++)if(Be=mt[he],C.format!==Zn)if(Oe!==null)if(st){if(X)if(C.layerUpdates.size>0){const Ie=Km(Be.width,Be.height,C.format,C.type);for(const Le of C.layerUpdates){const ot=Be.data.subarray(Le*Ie/Be.data.BYTES_PER_ELEMENT,(Le+1)*Ie/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Le,Be.width,Be.height,1,Oe,ot)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,_e.depth,Oe,Be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,tt,Be.width,Be.height,_e.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,_e.depth,Oe,$e,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,tt,Be.width,Be.height,_e.depth,0,Oe,$e,Be.data)}else{st&&Ct&&t.texStorage2D(i.TEXTURE_2D,De,tt,mt[0].width,mt[0].height);for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],C.format!==Zn?Oe!==null?st?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Be.width,Be.height,Oe,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,he,tt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?X&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Be.width,Be.height,Oe,$e,Be.data):t.texImage2D(i.TEXTURE_2D,he,tt,Be.width,Be.height,0,Oe,$e,Be.data)}else if(C.isDataArrayTexture)if(st){if(Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,tt,_e.width,_e.height,_e.depth),X)if(C.layerUpdates.size>0){const he=Km(_e.width,_e.height,C.format,C.type);for(const xe of C.layerUpdates){const Ie=_e.data.subarray(xe*he/_e.data.BYTES_PER_ELEMENT,(xe+1)*he/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,_e.width,_e.height,1,Oe,$e,Ie)}C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Oe,$e,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,_e.width,_e.height,_e.depth,0,Oe,$e,_e.data);else if(C.isData3DTexture)st?(Ct&&t.texStorage3D(i.TEXTURE_3D,De,tt,_e.width,_e.height,_e.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Oe,$e,_e.data)):t.texImage3D(i.TEXTURE_3D,0,tt,_e.width,_e.height,_e.depth,0,Oe,$e,_e.data);else if(C.isFramebufferTexture){if(Ct)if(st)t.texStorage2D(i.TEXTURE_2D,De,tt,_e.width,_e.height);else{let he=_e.width,xe=_e.height;for(let Ie=0;Ie<De;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,tt,he,xe,0,Oe,$e,null),he>>=1,xe>>=1}}else if(mt.length>0){if(st&&Ct){const he=Qe(mt[0]);t.texStorage2D(i.TEXTURE_2D,De,tt,he.width,he.height)}for(let he=0,xe=mt.length;he<xe;he++)Be=mt[he],st?X&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Oe,$e,Be):t.texImage2D(i.TEXTURE_2D,he,tt,Oe,$e,Be);C.generateMipmaps=!1}else if(st){if(Ct){const he=Qe(_e);t.texStorage2D(i.TEXTURE_2D,De,tt,he.width,he.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,$e,_e)}else t.texImage2D(i.TEXTURE_2D,0,tt,Oe,$e,_e);_(C)&&y(L),Te.__version=$.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function ge(I,C,q){if(C.image.length!==6)return;const L=Pe(I,C),Z=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+q);const $=s.get(Z);if(Z.version!==$.__version||L===!0){t.activeTexture(i.TEXTURE0+q);const Te=_t.getPrimaries(_t.workingColorSpace),be=C.colorSpace===Si?null:_t.getPrimaries(C.colorSpace),Ne=C.colorSpace===Si||Te===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const at=C.isCompressedTexture||C.image[0].isCompressedTexture,_e=C.image[0]&&C.image[0].isDataTexture,Oe=[];for(let xe=0;xe<6;xe++)!at&&!_e?Oe[xe]=w(C.image[xe],!0,a.maxCubemapSize):Oe[xe]=_e?C.image[xe].image:C.image[xe],Oe[xe]=bt(C,Oe[xe]);const $e=Oe[0],tt=c.convert(C.format,C.colorSpace),Be=c.convert(C.type),mt=D(C.internalFormat,tt,Be,C.colorSpace),st=C.isVideoTexture!==!0,Ct=$.__version===void 0||L===!0,X=Z.dataReady;let De=z(C,$e);ne(i.TEXTURE_CUBE_MAP,C);let he;if(at){st&&Ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,mt,$e.width,$e.height);for(let xe=0;xe<6;xe++){he=Oe[xe].mipmaps;for(let Ie=0;Ie<he.length;Ie++){const Le=he[Ie];C.format!==Zn?tt!==null?st?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,0,0,Le.width,Le.height,tt,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,mt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,0,0,Le.width,Le.height,tt,Be,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,mt,Le.width,Le.height,0,tt,Be,Le.data)}}}else{if(he=C.mipmaps,st&&Ct){he.length>0&&De++;const xe=Qe(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,mt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(_e){st?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Oe[xe].width,Oe[xe].height,tt,Be,Oe[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,Oe[xe].width,Oe[xe].height,0,tt,Be,Oe[xe].data);for(let Ie=0;Ie<he.length;Ie++){const ot=he[Ie].image[xe].image;st?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,0,0,ot.width,ot.height,tt,Be,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,mt,ot.width,ot.height,0,tt,Be,ot.data)}}else{st?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,tt,Be,Oe[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,tt,Be,Oe[xe]);for(let Ie=0;Ie<he.length;Ie++){const Le=he[Ie];st?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,0,0,tt,Be,Le.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,mt,tt,Be,Le.image[xe])}}}_(C)&&y(i.TEXTURE_CUBE_MAP),$.__version=Z.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function we(I,C,q,L,Z,$){const Te=c.convert(q.format,q.colorSpace),be=c.convert(q.type),Ne=D(q.internalFormat,Te,be,q.colorSpace),at=s.get(C),_e=s.get(q);if(_e.__renderTarget=C,!at.__hasExternalTextures){const Oe=Math.max(1,C.width>>$),$e=Math.max(1,C.height>>$);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,Ne,Oe,$e,C.depth,0,Te,be,null):t.texImage2D(Z,$,Ne,Oe,$e,0,Te,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),dt(C)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,Z,_e.__webglTexture,0,ht(C)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,Z,_e.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(I,C,q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),C.depthBuffer){const L=C.depthTexture,Z=L&&L.isDepthTexture?L.type:null,$=T(C.stencilBuffer,Z),Te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=ht(C);dt(C)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,$,C.width,C.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,$,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,$,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,I)}else{const L=C.textures;for(let Z=0;Z<L.length;Z++){const $=L[Z],Te=c.convert($.format,$.colorSpace),be=c.convert($.type),Ne=D($.internalFormat,Te,be,$.colorSpace),at=ht(C);q&&dt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Ne,C.width,C.height):dt(C)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Ne,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=s.get(C.depthTexture);L.__renderTarget=C,(!L.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),me(C.depthTexture,0);const Z=L.__webglTexture,$=ht(C);if(C.depthTexture.format===Hs)dt(C)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(C.depthTexture.format===Qs)dt(C)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Fe(I){const C=s.get(I),q=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const L=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),L){const Z=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,L.removeEventListener("dispose",Z)};L.addEventListener("dispose",Z),C.__depthDisposeCallback=Z}C.__boundDepthTexture=L}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Re(C.__webglFramebuffer,I)}else if(q){C.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[L]),C.__webglDepthbuffer[L]===void 0)C.__webglDepthbuffer[L]=i.createRenderbuffer(),Se(C.__webglDepthbuffer[L],I,!1);else{const Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=C.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),Se(C.__webglDepthbuffer,I,!1);else{const L=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(I,C,q){const L=s.get(I);C!==void 0&&we(L.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Fe(I)}function At(I){const C=I.texture,q=s.get(I),L=s.get(C);I.addEventListener("dispose",k);const Z=I.textures,$=I.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=C.version,f.memory.textures++),$){q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer[be]=[];for(let Ne=0;Ne<C.mipmaps.length;Ne++)q.__webglFramebuffer[be][Ne]=i.createFramebuffer()}else q.__webglFramebuffer[be]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer=[];for(let be=0;be<C.mipmaps.length;be++)q.__webglFramebuffer[be]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Te)for(let be=0,Ne=Z.length;be<Ne;be++){const at=s.get(Z[be]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),f.memory.textures++)}if(I.samples>0&&dt(I)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let be=0;be<Z.length;be++){const Ne=Z[be];q.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[be]);const at=c.convert(Ne.format,Ne.colorSpace),_e=c.convert(Ne.type),Oe=D(Ne.internalFormat,at,_e,Ne.colorSpace,I.isXRRenderTarget===!0),$e=ht(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Oe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,q.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),ne(i.TEXTURE_CUBE_MAP,C);for(let be=0;be<6;be++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ne=0;Ne<C.mipmaps.length;Ne++)we(q.__webglFramebuffer[be][Ne],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne);else we(q.__webglFramebuffer[be],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);_(C)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let be=0,Ne=Z.length;be<Ne;be++){const at=Z[be],_e=s.get(at);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),ne(i.TEXTURE_2D,at),we(q.__webglFramebuffer,I,at,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),_(at)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,L.__webglTexture),ne(be,C),C.mipmaps&&C.mipmaps.length>0)for(let Ne=0;Ne<C.mipmaps.length;Ne++)we(q.__webglFramebuffer[Ne],I,C,i.COLOR_ATTACHMENT0,be,Ne);else we(q.__webglFramebuffer,I,C,i.COLOR_ATTACHMENT0,be,0);_(C)&&y(be),t.unbindTexture()}I.depthBuffer&&Fe(I)}function pt(I){const C=I.textures;for(let q=0,L=C.length;q<L;q++){const Z=C[q];if(_(Z)){const $=R(I),Te=s.get(Z).__webglTexture;t.bindTexture($,Te),y($),t.unbindTexture()}}}const Nt=[],Q=[];function nn(I){if(I.samples>0){if(dt(I)===!1){const C=I.textures,q=I.width,L=I.height;let Z=i.COLOR_BUFFER_BIT;const $=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=s.get(I),be=C.length>1;if(be)for(let Ne=0;Ne<C.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ne=0;Ne<C.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ne]);const at=s.get(C[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,q,L,0,0,q,L,Z,i.NEAREST),p===!0&&(Nt.length=0,Q.length=0,Nt.push(i.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Nt.push($),Q.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ne=0;Ne<C.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ne]);const at=s.get(C[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,at,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const C=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function ht(I){return Math.min(a.maxSamples,I.samples)}function dt(I){const C=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ye(I){const C=f.render.frame;x.get(I)!==C&&(x.set(I,C),I.update())}function bt(I,C){const q=I.colorSpace,L=I.format,Z=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==$s&&q!==Si&&(_t.getTransfer(q)===Pt?(L!==Zn||Z!==Gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),C}function Qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=se,this.setTexture2D=me,this.setTexture2DArray=de,this.setTexture3D=pe,this.setTextureCube=H,this.rebindTextures=Ke,this.setupRenderTarget=At,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=dt}function NM(i,e){function t(s,a=Si){let c;const f=_t.getTransfer(a);if(s===Gr)return i.UNSIGNED_BYTE;if(s===df)return i.UNSIGNED_SHORT_4_4_4_4;if(s===ff)return i.UNSIGNED_SHORT_5_5_5_1;if(s===P0)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===R0)return i.BYTE;if(s===N0)return i.SHORT;if(s===Xo)return i.UNSIGNED_SHORT;if(s===uf)return i.INT;if(s===$i)return i.UNSIGNED_INT;if(s===_r)return i.FLOAT;if(s===Js)return i.HALF_FLOAT;if(s===D0)return i.ALPHA;if(s===k0)return i.RGB;if(s===Zn)return i.RGBA;if(s===L0)return i.LUMINANCE;if(s===I0)return i.LUMINANCE_ALPHA;if(s===Hs)return i.DEPTH_COMPONENT;if(s===Qs)return i.DEPTH_STENCIL;if(s===U0)return i.RED;if(s===hf)return i.RED_INTEGER;if(s===F0)return i.RG;if(s===pf)return i.RG_INTEGER;if(s===mf)return i.RGBA_INTEGER;if(s===kl||s===Ll||s===Il||s===Ul)if(f===Pt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===kl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ll)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Il)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ul)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===kl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ll)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Il)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ul)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nd||s===Pd||s===Dd||s===kd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Nd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ld||s===Id||s===Ud)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ld||s===Id)return f===Pt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ud)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fd||s===Od||s===zd||s===Bd||s===jd||s===Hd||s===Gd||s===Vd||s===Wd||s===Xd||s===qd||s===Yd||s===Qd||s===Kd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Fd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Od)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kd)return f===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fl||s===Zd||s===Jd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Fl)return f===Pt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===O0||s===$d||s===ef||s===tf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Fl)return c.COMPRESSED_RED_RGTC1_EXT;if(s===$d)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ef)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ys?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}class PM extends ur{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Al extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DM={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,s),y=this._getHandJoint(m,w);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const x=m.joints["index-finger-tip"],b=m.joints["thumb-tip"],v=x.position.distanceTo(b.position),S=.02,M=.005;m.inputState.pinching&&v>S+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(DM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Al;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LM=`
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

}`;class IM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Sn,c=e.properties.get(a);c.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Wr({vertexShader:kM,fragmentShader:LM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new Ji(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UM extends eo{constructor(e,t){super();const s=this;let a=null,c=1,f=null,d="local-floor",p=1,m=null,x=null,b=null,v=null,S=null,M=null;const w=new IM,_=t.getContextAttributes();let y=null,R=null;const D=[],T=[],z=new ct;let U=null;const k=new ur;k.viewport=new jt;const B=new ur;B.viewport=new jt;const P=[k,B],A=new PM;let j=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ge=D[re];return ge===void 0&&(ge=new ud,D[re]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(re){let ge=D[re];return ge===void 0&&(ge=new ud,D[re]=ge),ge.getGripSpace()},this.getHand=function(re){let ge=D[re];return ge===void 0&&(ge=new ud,D[re]=ge),ge.getHandSpace()};function te(re){const ge=T.indexOf(re.inputSource);if(ge===-1)return;const we=D[ge];we!==void 0&&(we.update(re.inputSource,re.frame,m||f),we.dispatchEvent({type:re.type,data:re.inputSource}))}function fe(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",me);for(let re=0;re<D.length;re++){const ge=T[re];ge!==null&&(T[re]=null,D[re].disconnect(ge))}j=null,se=null,w.reset(),e.setRenderTarget(y),S=null,v=null,b=null,a=null,R=null,Pe.stop(),s.isPresenting=!1,e.setPixelRatio(U),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return b},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(re){if(a=re,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",me),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(z),a.renderState.layers===void 0){const ge={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,t,ge),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new Ei(S.framebufferWidth,S.framebufferHeight,{format:Zn,type:Gr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ge=null,we=null,Se=null;_.depth&&(Se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=_.stencil?Qs:Hs,we=_.stencil?Ys:$i);const Re={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:c};b=new XRWebGLBinding(a,t),v=b.createProjectionLayer(Re),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new Ei(v.textureWidth,v.textureHeight,{format:Zn,type:Gr,depthTexture:new $0(v.textureWidth,v.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Pe.setContext(a),Pe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function me(re){for(let ge=0;ge<re.removed.length;ge++){const we=re.removed[ge],Se=T.indexOf(we);Se>=0&&(T[Se]=null,D[Se].disconnect(we))}for(let ge=0;ge<re.added.length;ge++){const we=re.added[ge];let Se=T.indexOf(we);if(Se===-1){for(let Fe=0;Fe<D.length;Fe++)if(Fe>=T.length){T.push(we),Se=Fe;break}else if(T[Fe]===null){T[Fe]=we,Se=Fe;break}if(Se===-1)break}const Re=D[Se];Re&&Re.connect(we)}}const de=new ue,pe=new ue;function H(re,ge,we){de.setFromMatrixPosition(ge.matrixWorld),pe.setFromMatrixPosition(we.matrixWorld);const Se=de.distanceTo(pe),Re=ge.projectionMatrix.elements,Fe=we.projectionMatrix.elements,Ke=Re[14]/(Re[10]-1),At=Re[14]/(Re[10]+1),pt=(Re[9]+1)/Re[5],Nt=(Re[9]-1)/Re[5],Q=(Re[8]-1)/Re[0],nn=(Fe[8]+1)/Fe[0],ht=Ke*Q,dt=Ke*nn,Ye=Se/(-Q+nn),bt=Ye*-Q;if(ge.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(bt),re.translateZ(Ye),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Re[10]===-1)re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Qe=Ke+Ye,I=At+Ye,C=ht-bt,q=dt+(Se-bt),L=pt*At/I*Qe,Z=Nt*At/I*Qe;re.projectionMatrix.makePerspective(C,q,L,Z,Qe,I),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function J(re,ge){ge===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ge.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(a===null)return;let ge=re.near,we=re.far;w.texture!==null&&(w.depthNear>0&&(ge=w.depthNear),w.depthFar>0&&(we=w.depthFar)),A.near=B.near=k.near=ge,A.far=B.far=k.far=we,(j!==A.near||se!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,se=A.far),k.layers.mask=re.layers.mask|2,B.layers.mask=re.layers.mask|4,A.layers.mask=k.layers.mask|B.layers.mask;const Se=re.parent,Re=A.cameras;J(A,Se);for(let Fe=0;Fe<Re.length;Fe++)J(Re[Fe],Se);Re.length===2?H(A,k,B):A.projectionMatrix.copy(k.projectionMatrix),oe(re,A,Se)};function oe(re,ge,we){we===null?re.matrix.copy(ge.matrixWorld):(re.matrix.copy(we.matrixWorld),re.matrix.invert(),re.matrix.multiply(ge.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=nf*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(re){p=re,v!==null&&(v.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let O=null;function ne(re,ge){if(x=ge.getViewerPose(m||f),M=ge,x!==null){const we=x.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let Se=!1;we.length!==A.cameras.length&&(A.cameras.length=0,Se=!0);for(let Fe=0;Fe<we.length;Fe++){const Ke=we[Fe];let At=null;if(S!==null)At=S.getViewport(Ke);else{const Nt=b.getViewSubImage(v,Ke);At=Nt.viewport,Fe===0&&(e.setRenderTargetTextures(R,Nt.colorTexture,v.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(R))}let pt=P[Fe];pt===void 0&&(pt=new ur,pt.layers.enable(Fe),pt.viewport=new jt,P[Fe]=pt),pt.matrix.fromArray(Ke.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ke.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(At.x,At.y,At.width,At.height),Fe===0&&(A.matrix.copy(pt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Se===!0&&A.cameras.push(pt)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Fe=b.getDepthInformation(we[0]);Fe&&Fe.isValid&&Fe.texture&&w.init(e,Fe,a.renderState)}}for(let we=0;we<D.length;we++){const Se=T[we],Re=D[we];Se!==null&&Re!==void 0&&Re.update(Se,ge,m||f)}O&&O(re,ge),ge.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ge}),M=null}const Pe=new J0;Pe.setAnimationLoop(ne),this.setAnimationLoop=function(re){O=re},this.dispose=function(){}}}const Wi=new Vr,FM=new Gt;function OM(i,e){function t(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function s(_,y){y.color.getRGB(_.fogColor.value,Q0(i)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function a(_,y,R,D,T){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(_,y):y.isMeshToonMaterial?(c(_,y),b(_,y)):y.isMeshPhongMaterial?(c(_,y),x(_,y)):y.isMeshStandardMaterial?(c(_,y),v(_,y),y.isMeshPhysicalMaterial&&S(_,y,T)):y.isMeshMatcapMaterial?(c(_,y),M(_,y)):y.isMeshDepthMaterial?c(_,y):y.isMeshDistanceMaterial?(c(_,y),w(_,y)):y.isMeshNormalMaterial?c(_,y):y.isLineBasicMaterial?(f(_,y),y.isLineDashedMaterial&&d(_,y)):y.isPointsMaterial?p(_,y,R,D):y.isSpriteMaterial?m(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,t(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===Dn&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,t(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===Dn&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,t(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,t(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const R=e.get(y),D=R.envMap,T=R.envMapRotation;D&&(_.envMap.value=D,Wi.copy(T),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),_.envMapRotation.value.setFromMatrix4(FM.makeRotationFromEuler(Wi)),_.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,_.aoMapTransform))}function f(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform))}function d(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function p(_,y,R,D){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*R,_.scale.value=D*.5,y.map&&(_.map.value=y.map,t(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function m(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function x(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function b(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function v(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function S(_,y,R){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Dn&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,y){y.matcap&&(_.matcap.value=y.matcap)}function w(_,y){const R=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function zM(i,e,t,s){let a={},c={},f=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,D){const T=D.program;s.uniformBlockBinding(R,T)}function m(R,D){let T=a[R.id];T===void 0&&(M(R),T=x(R),a[R.id]=T,R.addEventListener("dispose",_));const z=D.program;s.updateUBOMapping(R,z);const U=e.render.frame;c[R.id]!==U&&(v(R),c[R.id]=U)}function x(R){const D=b();R.__bindingPointIndex=D;const T=i.createBuffer(),z=R.__size,U=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,z,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,T),T}function b(){for(let R=0;R<d;R++)if(f.indexOf(R)===-1)return f.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const D=a[R.id],T=R.uniforms,z=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let U=0,k=T.length;U<k;U++){const B=Array.isArray(T[U])?T[U]:[T[U]];for(let P=0,A=B.length;P<A;P++){const j=B[P];if(S(j,U,P,z)===!0){const se=j.__offset,te=Array.isArray(j.value)?j.value:[j.value];let fe=0;for(let me=0;me<te.length;me++){const de=te[me],pe=w(de);typeof de=="number"||typeof de=="boolean"?(j.__data[0]=de,i.bufferSubData(i.UNIFORM_BUFFER,se+fe,j.__data)):de.isMatrix3?(j.__data[0]=de.elements[0],j.__data[1]=de.elements[1],j.__data[2]=de.elements[2],j.__data[3]=0,j.__data[4]=de.elements[3],j.__data[5]=de.elements[4],j.__data[6]=de.elements[5],j.__data[7]=0,j.__data[8]=de.elements[6],j.__data[9]=de.elements[7],j.__data[10]=de.elements[8],j.__data[11]=0):(de.toArray(j.__data,fe),fe+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,se,j.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(R,D,T,z){const U=R.value,k=D+"_"+T;if(z[k]===void 0)return typeof U=="number"||typeof U=="boolean"?z[k]=U:z[k]=U.clone(),!0;{const B=z[k];if(typeof U=="number"||typeof U=="boolean"){if(B!==U)return z[k]=U,!0}else if(B.equals(U)===!1)return B.copy(U),!0}return!1}function M(R){const D=R.uniforms;let T=0;const z=16;for(let k=0,B=D.length;k<B;k++){const P=Array.isArray(D[k])?D[k]:[D[k]];for(let A=0,j=P.length;A<j;A++){const se=P[A],te=Array.isArray(se.value)?se.value:[se.value];for(let fe=0,me=te.length;fe<me;fe++){const de=te[fe],pe=w(de),H=T%z,J=H%pe.boundary,oe=H+J;T+=J,oe!==0&&z-oe<pe.storage&&(T+=z-oe),se.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=T,T+=pe.storage}}}const U=T%z;return U>0&&(T+=z-U),R.__size=T,R.__cache={},this}function w(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),D}function _(R){const D=R.target;D.removeEventListener("dispose",_);const T=f.indexOf(D.__bindingPointIndex);f.splice(T,1),i.deleteBuffer(a[D.id]),delete a[D.id],delete c[D.id]}function y(){for(const R in a)i.deleteBuffer(a[R]);f=[],a={},c={}}return{bind:p,update:m,dispose:y}}class BM{constructor(e={}){const{canvas:t=Ay(),context:s=null,depth:a=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:b=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=f;const M=new Uint32Array(4),w=new Int32Array(4);let _=null,y=null;const R=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Mi,this.toneMappingExposure=1;const T=this;let z=!1,U=0,k=0,B=null,P=-1,A=null;const j=new jt,se=new jt;let te=null;const fe=new Tt(0);let me=0,de=t.width,pe=t.height,H=1,J=null,oe=null;const O=new jt(0,0,de,pe),ne=new jt(0,0,de,pe);let Pe=!1;const re=new Z0;let ge=!1,we=!1;const Se=new Gt,Re=new Gt,Fe=new ue,Ke=new jt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Nt(){return B===null?H:1}let Q=s;function nn(N,Y){return t.getContext(N,Y)}try{const N={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:b};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cf}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Le,!1),Q===null){const Y="webgl2";if(Q=nn(Y,N),Q===null)throw nn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let ht,dt,Ye,bt,Qe,I,C,q,L,Z,$,Te,be,Ne,at,_e,Oe,$e,tt,Be,mt,st,Ct,X;function De(){ht=new W_(Q),ht.init(),st=new NM(Q,ht),dt=new O_(Q,ht,e,st),Ye=new AM(Q,ht),dt.reverseDepthBuffer&&v&&Ye.buffers.depth.setReversed(!0),bt=new Y_(Q),Qe=new fM,I=new RM(Q,ht,Ye,Qe,dt,st,bt),C=new B_(T),q=new V_(T),L=new e2(Q),Ct=new U_(Q,L),Z=new X_(Q,L,bt,Ct),$=new K_(Q,Z,L,bt),tt=new Q_(Q,dt,I),_e=new z_(Qe),Te=new dM(T,C,q,ht,dt,Ct,_e),be=new OM(T,Qe),Ne=new pM,at=new SM(ht),$e=new I_(T,C,q,Ye,$,S,p),Oe=new EM(T,$,dt),X=new zM(Q,bt,dt,Ye),Be=new F_(Q,ht,bt),mt=new q_(Q,ht,bt),bt.programs=Te.programs,T.capabilities=dt,T.extensions=ht,T.properties=Qe,T.renderLists=Ne,T.shadowMap=Oe,T.state=Ye,T.info=bt}De();const he=new UM(T,Q);this.xr=he,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const N=ht.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ht.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(N){N!==void 0&&(H=N,this.setSize(de,pe,!1))},this.getSize=function(N){return N.set(de,pe)},this.setSize=function(N,Y,le=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=N,pe=Y,t.width=Math.floor(N*H),t.height=Math.floor(Y*H),le===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(de*H,pe*H).floor()},this.setDrawingBufferSize=function(N,Y,le){de=N,pe=Y,H=le,t.width=Math.floor(N*le),t.height=Math.floor(Y*le),this.setViewport(0,0,N,Y)},this.getCurrentViewport=function(N){return N.copy(j)},this.getViewport=function(N){return N.copy(O)},this.setViewport=function(N,Y,le,ce){N.isVector4?O.set(N.x,N.y,N.z,N.w):O.set(N,Y,le,ce),Ye.viewport(j.copy(O).multiplyScalar(H).round())},this.getScissor=function(N){return N.copy(ne)},this.setScissor=function(N,Y,le,ce){N.isVector4?ne.set(N.x,N.y,N.z,N.w):ne.set(N,Y,le,ce),Ye.scissor(se.copy(ne).multiplyScalar(H).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(N){Ye.setScissorTest(Pe=N)},this.setOpaqueSort=function(N){J=N},this.setTransparentSort=function(N){oe=N},this.getClearColor=function(N){return N.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(N=!0,Y=!0,le=!0){let ce=0;if(N){let K=!1;if(B!==null){const Ce=B.texture.format;K=Ce===mf||Ce===pf||Ce===hf}if(K){const Ce=B.texture.type,Ee=Ce===Gr||Ce===$i||Ce===Xo||Ce===Ys||Ce===df||Ce===ff,Ve=$e.getClearColor(),He=$e.getClearAlpha(),nt=Ve.r,it=Ve.g,We=Ve.b;Ee?(M[0]=nt,M[1]=it,M[2]=We,M[3]=He,Q.clearBufferuiv(Q.COLOR,0,M)):(w[0]=nt,w[1]=it,w[2]=We,w[3]=He,Q.clearBufferiv(Q.COLOR,0,w))}else ce|=Q.COLOR_BUFFER_BIT}Y&&(ce|=Q.DEPTH_BUFFER_BIT),le&&(ce|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ne.dispose(),at.dispose(),Qe.dispose(),C.dispose(),q.dispose(),$.dispose(),Ct.dispose(),X.dispose(),Te.dispose(),he.dispose(),he.removeEventListener("sessionstart",ts),he.removeEventListener("sessionend",qr),br.stop()};function xe(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const N=bt.autoReset,Y=Oe.enabled,le=Oe.autoUpdate,ce=Oe.needsUpdate,K=Oe.type;De(),bt.autoReset=N,Oe.enabled=Y,Oe.autoUpdate=le,Oe.needsUpdate=ce,Oe.type=K}function Le(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ot(N){const Y=N.target;Y.removeEventListener("dispose",ot),Lt(Y)}function Lt(N){Xt(N),Qe.remove(N)}function Xt(N){const Y=Qe.get(N).programs;Y!==void 0&&(Y.forEach(function(le){Te.releaseProgram(le)}),N.isShaderMaterial&&Te.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,le,ce,K,Ce){Y===null&&(Y=At);const Ee=K.isMesh&&K.matrixWorld.determinant()<0,Ve=na(N,Y,le,ce,K);Ye.setMaterial(ce,Ee);let He=le.index,nt=1;if(ce.wireframe===!0){if(He=Z.getWireframeAttribute(le),He===void 0)return;nt=2}const it=le.drawRange,We=le.attributes.position;let vt=it.start*nt,Et=(it.start+it.count)*nt;Ce!==null&&(vt=Math.max(vt,Ce.start*nt),Et=Math.min(Et,(Ce.start+Ce.count)*nt)),He!==null?(vt=Math.max(vt,0),Et=Math.min(Et,He.count)):We!=null&&(vt=Math.max(vt,0),Et=Math.min(Et,We.count));const xt=Et-vt;if(xt<0||xt===1/0)return;Ct.setup(K,ce,Ve,le,He);let on,lt=Be;if(He!==null&&(on=L.get(He),lt=mt,lt.setIndex(on)),K.isMesh)ce.wireframe===!0?(Ye.setLineWidth(ce.wireframeLinewidth*Nt()),lt.setMode(Q.LINES)):lt.setMode(Q.TRIANGLES);else if(K.isLine){let qe=ce.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Nt()),K.isLineSegments?lt.setMode(Q.LINES):K.isLineLoop?lt.setMode(Q.LINE_LOOP):lt.setMode(Q.LINE_STRIP)}else K.isPoints?lt.setMode(Q.POINTS):K.isSprite&&lt.setMode(Q.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)lt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))lt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const qe=K._multiDrawStarts,$n=K._multiDrawCounts,Mt=K._multiDrawCount,an=He?L.get(He).bytesPerElement:1,er=Qe.get(ce).currentProgram.getUniforms();for(let qt=0;qt<Mt;qt++)er.setValue(Q,"_gl_DrawID",qt),lt.render(qe[qt]/an,$n[qt])}else if(K.isInstancedMesh)lt.renderInstances(vt,xt,K.count);else if(le.isInstancedBufferGeometry){const qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,$n=Math.min(le.instanceCount,qe);lt.renderInstances(vt,xt,$n)}else lt.render(vt,xt)};function yt(N,Y,le){N.transparent===!0&&N.side===zr&&N.forceSinglePass===!1?(N.side=Dn,N.needsUpdate=!0,ns(N,Y,le),N.side=wi,N.needsUpdate=!0,ns(N,Y,le),N.side=zr):ns(N,Y,le)}this.compile=function(N,Y,le=null){le===null&&(le=N),y=at.get(le),y.init(Y),D.push(y),le.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),N!==le&&N.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const ce=new Set;return N.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ce=K.material;if(Ce)if(Array.isArray(Ce))for(let Ee=0;Ee<Ce.length;Ee++){const Ve=Ce[Ee];yt(Ve,le,K),ce.add(Ve)}else yt(Ce,le,K),ce.add(Ce)}),D.pop(),y=null,ce},this.compileAsync=function(N,Y,le=null){const ce=this.compile(N,Y,le);return new Promise(K=>{function Ce(){if(ce.forEach(function(Ee){Qe.get(Ee).currentProgram.isReady()&&ce.delete(Ee)}),ce.size===0){K(N);return}setTimeout(Ce,10)}ht.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let _n=null;function pn(N){_n&&_n(N)}function ts(){br.stop()}function qr(){br.start()}const br=new J0;br.setAnimationLoop(pn),typeof self<"u"&&br.setContext(self),this.setAnimationLoop=function(N){_n=N,he.setAnimationLoop(N),N===null?br.stop():br.start()},he.addEventListener("sessionstart",ts),he.addEventListener("sessionend",qr),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(Y),Y=he.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,Y,B),y=at.get(N,D.length),y.init(Y),D.push(y),Re.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),re.setFromProjectionMatrix(Re),we=this.localClippingEnabled,ge=_e.init(this.clippingPlanes,we),_=Ne.get(N,R.length),_.init(),R.push(_),he.enabled===!0&&he.isPresenting===!0){const Ce=T.xr.getDepthSensingMesh();Ce!==null&&Mr(Ce,Y,-1/0,T.sortObjects)}Mr(N,Y,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(J,oe),pt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,pt&&$e.addToRenderList(_,N),this.info.render.frame++,ge===!0&&_e.beginShadows();const le=y.state.shadowsArray;Oe.render(le,N,Y),ge===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=_.opaque,K=_.transmissive;if(y.setupLights(),Y.isArrayCamera){const Ce=Y.cameras;if(K.length>0)for(let Ee=0,Ve=Ce.length;Ee<Ve;Ee++){const He=Ce[Ee];Ai(ce,K,N,He)}pt&&$e.render(N);for(let Ee=0,Ve=Ce.length;Ee<Ve;Ee++){const He=Ce[Ee];Ti(_,N,He,He.viewport)}}else K.length>0&&Ai(ce,K,N,Y),pt&&$e.render(N),Ti(_,N,Y);B!==null&&(I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B)),N.isScene===!0&&N.onAfterRender(T,N,Y),Ct.resetDefaultState(),P=-1,A=null,D.pop(),D.length>0?(y=D[D.length-1],ge===!0&&_e.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function Mr(N,Y,le,ce){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)le=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)y.pushLight(N),N.castShadow&&y.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||re.intersectsSprite(N)){ce&&Ke.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Re);const Ee=$.update(N),Ve=N.material;Ve.visible&&_.push(N,Ee,Ve,le,Ke.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||re.intersectsObject(N))){const Ee=$.update(N),Ve=N.material;if(ce&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ke.copy(N.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ke.copy(Ee.boundingSphere.center)),Ke.applyMatrix4(N.matrixWorld).applyMatrix4(Re)),Array.isArray(Ve)){const He=Ee.groups;for(let nt=0,it=He.length;nt<it;nt++){const We=He[nt],vt=Ve[We.materialIndex];vt&&vt.visible&&_.push(N,Ee,vt,le,Ke.z,We)}}else Ve.visible&&_.push(N,Ee,Ve,le,Ke.z,null)}}const Ce=N.children;for(let Ee=0,Ve=Ce.length;Ee<Ve;Ee++)Mr(Ce[Ee],Y,le,ce)}function Ti(N,Y,le,ce){const K=N.opaque,Ce=N.transmissive,Ee=N.transparent;y.setupLightsView(le),ge===!0&&_e.setGlobalState(T.clippingPlanes,le),ce&&Ye.viewport(j.copy(ce)),K.length>0&&Yr(K,Y,le),Ce.length>0&&Yr(Ce,Y,le),Ee.length>0&&Yr(Ee,Y,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Ai(N,Y,le,ce){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ce.id]===void 0&&(y.state.transmissionRenderTarget[ce.id]=new Ei(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Js:Gr,minFilter:Zi,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const Ce=y.state.transmissionRenderTarget[ce.id],Ee=ce.viewport||j;Ce.setSize(Ee.z,Ee.w);const Ve=T.getRenderTarget();T.setRenderTarget(Ce),T.getClearColor(fe),me=T.getClearAlpha(),me<1&&T.setClearColor(16777215,.5),T.clear(),pt&&$e.render(le);const He=T.toneMapping;T.toneMapping=Mi;const nt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),y.setupLightsView(ce),ge===!0&&_e.setGlobalState(T.clippingPlanes,ce),Yr(N,le,ce),I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce),ht.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,vt=Y.length;We<vt;We++){const Et=Y[We],xt=Et.object,on=Et.geometry,lt=Et.material,qe=Et.group;if(lt.side===zr&&xt.layers.test(ce.layers)){const $n=lt.side;lt.side=Dn,lt.needsUpdate=!0,ea(xt,le,ce,on,lt,qe),lt.side=$n,lt.needsUpdate=!0,it=!0}}it===!0&&(I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce))}T.setRenderTarget(Ve),T.setClearColor(fe,me),nt!==void 0&&(ce.viewport=nt),T.toneMapping=He}function Yr(N,Y,le){const ce=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Ce=N.length;K<Ce;K++){const Ee=N[K],Ve=Ee.object,He=Ee.geometry,nt=ce===null?Ee.material:ce,it=Ee.group;Ve.layers.test(le.layers)&&ea(Ve,Y,le,He,nt,it)}}function ea(N,Y,le,ce,K,Ce){N.onBeforeRender(T,Y,le,ce,K,Ce),N.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),K.onBeforeRender(T,Y,le,ce,N,Ce),K.transparent===!0&&K.side===zr&&K.forceSinglePass===!1?(K.side=Dn,K.needsUpdate=!0,T.renderBufferDirect(le,Y,ce,K,N,Ce),K.side=wi,K.needsUpdate=!0,T.renderBufferDirect(le,Y,ce,K,N,Ce),K.side=zr):T.renderBufferDirect(le,Y,ce,K,N,Ce),N.onAfterRender(T,Y,le,ce,K,Ce)}function ns(N,Y,le){Y.isScene!==!0&&(Y=At);const ce=Qe.get(N),K=y.state.lights,Ce=y.state.shadowsArray,Ee=K.state.version,Ve=Te.getParameters(N,K.state,Ce,Y,le),He=Te.getProgramCacheKey(Ve);let nt=ce.programs;ce.environment=N.isMeshStandardMaterial?Y.environment:null,ce.fog=Y.fog,ce.envMap=(N.isMeshStandardMaterial?q:C).get(N.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,nt===void 0&&(N.addEventListener("dispose",ot),nt=new Map,ce.programs=nt);let it=nt.get(He);if(it!==void 0){if(ce.currentProgram===it&&ce.lightsStateVersion===Ee)return pr(N,Ve),it}else Ve.uniforms=Te.getUniforms(N),N.onBeforeCompile(Ve,T),it=Te.acquireProgram(Ve,He),nt.set(He,it),ce.uniforms=Ve.uniforms;const We=ce.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(We.clippingPlanes=_e.uniform),pr(N,Ve),ce.needsLights=Ql(N),ce.lightsStateVersion=Ee,ce.needsLights&&(We.ambientLightColor.value=K.state.ambient,We.lightProbe.value=K.state.probe,We.directionalLights.value=K.state.directional,We.directionalLightShadows.value=K.state.directionalShadow,We.spotLights.value=K.state.spot,We.spotLightShadows.value=K.state.spotShadow,We.rectAreaLights.value=K.state.rectArea,We.ltc_1.value=K.state.rectAreaLTC1,We.ltc_2.value=K.state.rectAreaLTC2,We.pointLights.value=K.state.point,We.pointLightShadows.value=K.state.pointShadow,We.hemisphereLights.value=K.state.hemi,We.directionalShadowMap.value=K.state.directionalShadowMap,We.directionalShadowMatrix.value=K.state.directionalShadowMatrix,We.spotShadowMap.value=K.state.spotShadowMap,We.spotLightMatrix.value=K.state.spotLightMatrix,We.spotLightMap.value=K.state.spotLightMap,We.pointShadowMap.value=K.state.pointShadowMap,We.pointShadowMatrix.value=K.state.pointShadowMatrix),ce.currentProgram=it,ce.uniformsList=null,it}function ta(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=Ol.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function pr(N,Y){const le=Qe.get(N);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function na(N,Y,le,ce,K){Y.isScene!==!0&&(Y=At),I.resetTextureUnits();const Ce=Y.fog,Ee=ce.isMeshStandardMaterial?Y.environment:null,Ve=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:$s,He=(ce.isMeshStandardMaterial?q:C).get(ce.envMap||Ee),nt=ce.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,it=!!le.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),We=!!le.morphAttributes.position,vt=!!le.morphAttributes.normal,Et=!!le.morphAttributes.color;let xt=Mi;ce.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(xt=T.toneMapping);const on=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,lt=on!==void 0?on.length:0,qe=Qe.get(ce),$n=y.state.lights;if(ge===!0&&(we===!0||N!==A)){const mn=N===A&&ce.id===P;_e.setState(ce,N,mn)}let Mt=!1;ce.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==$n.state.version||qe.outputColorSpace!==Ve||K.isBatchedMesh&&qe.batching===!1||!K.isBatchedMesh&&qe.batching===!0||K.isBatchedMesh&&qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&qe.instancing===!1||!K.isInstancedMesh&&qe.instancing===!0||K.isSkinnedMesh&&qe.skinning===!1||!K.isSkinnedMesh&&qe.skinning===!0||K.isInstancedMesh&&qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&qe.instancingMorph===!1&&K.morphTexture!==null||qe.envMap!==He||ce.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==_e.numPlanes||qe.numIntersection!==_e.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==it||qe.morphTargets!==We||qe.morphNormals!==vt||qe.morphColors!==Et||qe.toneMapping!==xt||qe.morphTargetsCount!==lt)&&(Mt=!0):(Mt=!0,qe.__version=ce.version);let an=qe.currentProgram;Mt===!0&&(an=ns(ce,Y,K));let er=!1,qt=!1,mr=!1;const Dt=an.getUniforms(),jn=qe.uniforms;if(Ye.useProgram(an.program)&&(er=!0,qt=!0,mr=!0),ce.id!==P&&(P=ce.id,qt=!0),er||A!==N){Ye.buffers.depth.getReversed()?(Se.copy(N.projectionMatrix),Ry(Se),Ny(Se),Dt.setValue(Q,"projectionMatrix",Se)):Dt.setValue(Q,"projectionMatrix",N.projectionMatrix),Dt.setValue(Q,"viewMatrix",N.matrixWorldInverse);const Hn=Dt.map.cameraPosition;Hn!==void 0&&Hn.setValue(Q,Fe.setFromMatrixPosition(N.matrixWorld)),dt.logarithmicDepthBuffer&&Dt.setValue(Q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Dt.setValue(Q,"isOrthographic",N.isOrthographicCamera===!0),A!==N&&(A=N,qt=!0,mr=!0)}if(K.isSkinnedMesh){Dt.setOptional(Q,K,"bindMatrix"),Dt.setOptional(Q,K,"bindMatrixInverse");const mn=K.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Dt.setValue(Q,"boneTexture",mn.boneTexture,I))}K.isBatchedMesh&&(Dt.setOptional(Q,K,"batchingTexture"),Dt.setValue(Q,"batchingTexture",K._matricesTexture,I),Dt.setOptional(Q,K,"batchingIdTexture"),Dt.setValue(Q,"batchingIdTexture",K._indirectTexture,I),Dt.setOptional(Q,K,"batchingColorTexture"),K._colorsTexture!==null&&Dt.setValue(Q,"batchingColorTexture",K._colorsTexture,I));const wr=le.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&tt.update(K,le,an),(qt||qe.receiveShadow!==K.receiveShadow)&&(qe.receiveShadow=K.receiveShadow,Dt.setValue(Q,"receiveShadow",K.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(jn.envMap.value=He,jn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Y.environment!==null&&(jn.envMapIntensity.value=Y.environmentIntensity),qt&&(Dt.setValue(Q,"toneMappingExposure",T.toneMappingExposure),qe.needsLights&&ra(jn,mr),Ce&&ce.fog===!0&&be.refreshFogUniforms(jn,Ce),be.refreshMaterialUniforms(jn,ce,H,pe,y.state.transmissionRenderTarget[N.id]),Ol.upload(Q,ta(qe),jn,I)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Ol.upload(Q,ta(qe),jn,I),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Dt.setValue(Q,"center",K.center),Dt.setValue(Q,"modelViewMatrix",K.modelViewMatrix),Dt.setValue(Q,"normalMatrix",K.normalMatrix),Dt.setValue(Q,"modelMatrix",K.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const mn=ce.uniformsGroups;for(let Hn=0,bn=mn.length;Hn<bn;Hn++){const ia=mn[Hn];X.update(ia,an),X.bind(ia,an)}}return an}function ra(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function Ql(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(N,Y,le){Qe.get(N.texture).__webglTexture=Y,Qe.get(N.depthTexture).__webglTexture=le;const ce=Qe.get(N);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=le===void 0,ce.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,Y){const le=Qe.get(N);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(N,Y=0,le=0){B=N,U=Y,k=le;let ce=!0,K=null,Ce=!1,Ee=!1;if(N){const He=Qe.get(N);if(He.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(Q.FRAMEBUFFER,null),ce=!1;else if(He.__webglFramebuffer===void 0)I.setupRenderTarget(N);else if(He.__hasExternalTextures)I.rebindTextures(N,Qe.get(N.texture).__webglTexture,Qe.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const We=N.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&Qe.has(We)&&(N.width!==We.image.width||N.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(N)}}const nt=N.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ee=!0);const it=Qe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?K=it[Y][le]:K=it[Y],Ce=!0):N.samples>0&&I.useMultisampledRTT(N)===!1?K=Qe.get(N).__webglMultisampledFramebuffer:Array.isArray(it)?K=it[le]:K=it,j.copy(N.viewport),se.copy(N.scissor),te=N.scissorTest}else j.copy(O).multiplyScalar(H).floor(),se.copy(ne).multiplyScalar(H).floor(),te=Pe;if(Ye.bindFramebuffer(Q.FRAMEBUFFER,K)&&ce&&Ye.drawBuffers(N,K),Ye.viewport(j),Ye.scissor(se),Ye.setScissorTest(te),Ce){const He=Qe.get(N.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,He.__webglTexture,le)}else if(Ee){const He=Qe.get(N.texture),nt=Y||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,He.__webglTexture,le||0,nt)}P=-1},this.readRenderTargetPixels=function(N,Y,le,ce,K,Ce,Ee){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Qe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ve=Ve[Ee]),Ve){Ye.bindFramebuffer(Q.FRAMEBUFFER,Ve);try{const He=N.texture,nt=He.format,it=He.type;if(!dt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-ce&&le>=0&&le<=N.height-K&&Q.readPixels(Y,le,ce,K,st.convert(nt),st.convert(it),Ce)}finally{const He=B!==null?Qe.get(B).__webglFramebuffer:null;Ye.bindFramebuffer(Q.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(N,Y,le,ce,K,Ce,Ee){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Qe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ve=Ve[Ee]),Ve){const He=N.texture,nt=He.format,it=He.type;if(!dt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=N.width-ce&&le>=0&&le<=N.height-K){Ye.bindFramebuffer(Q.FRAMEBUFFER,Ve);const We=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,We),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ce.byteLength,Q.STREAM_READ),Q.readPixels(Y,le,ce,K,st.convert(nt),st.convert(it),0);const vt=B!==null?Qe.get(B).__webglFramebuffer:null;Ye.bindFramebuffer(Q.FRAMEBUFFER,vt);const Et=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await Cy(Q,Et,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,We),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ce),Q.deleteBuffer(We),Q.deleteSync(Et),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,Y=null,le=0){N.isTexture!==!0&&(Ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,N=arguments[1]);const ce=Math.pow(2,-le),K=Math.floor(N.image.width*ce),Ce=Math.floor(N.image.height*ce),Ee=Y!==null?Y.x:0,Ve=Y!==null?Y.y:0;I.setTexture2D(N,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,le,0,0,Ee,Ve,K,Ce),Ye.unbindTexture()},this.copyTextureToTexture=function(N,Y,le=null,ce=null,K=0){N.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,N=arguments[1],Y=arguments[2],K=arguments[3]||0,le=null);let Ce,Ee,Ve,He,nt,it,We,vt,Et;const xt=N.isCompressedTexture?N.mipmaps[K]:N.image;le!==null?(Ce=le.max.x-le.min.x,Ee=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,He=le.min.x,nt=le.min.y,it=le.isBox3?le.min.z:0):(Ce=xt.width,Ee=xt.height,Ve=xt.depth||1,He=0,nt=0,it=0),ce!==null?(We=ce.x,vt=ce.y,Et=ce.z):(We=0,vt=0,Et=0);const on=st.convert(Y.format),lt=st.convert(Y.type);let qe;Y.isData3DTexture?(I.setTexture3D(Y,0),qe=Q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(I.setTexture2DArray(Y,0),qe=Q.TEXTURE_2D_ARRAY):(I.setTexture2D(Y,0),qe=Q.TEXTURE_2D),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,Y.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,Y.unpackAlignment);const $n=Q.getParameter(Q.UNPACK_ROW_LENGTH),Mt=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),an=Q.getParameter(Q.UNPACK_SKIP_PIXELS),er=Q.getParameter(Q.UNPACK_SKIP_ROWS),qt=Q.getParameter(Q.UNPACK_SKIP_IMAGES);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,xt.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,xt.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,He),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,nt),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,it);const mr=N.isDataArrayTexture||N.isData3DTexture,Dt=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){const jn=Qe.get(N),wr=Qe.get(Y),mn=Qe.get(jn.__renderTarget),Hn=Qe.get(wr.__renderTarget);Ye.bindFramebuffer(Q.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ye.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let bn=0;bn<Ve;bn++)mr&&Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Qe.get(N).__webglTexture,K,it+bn),N.isDepthTexture?(Dt&&Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Qe.get(Y).__webglTexture,K,Et+bn),Q.blitFramebuffer(He,nt,Ce,Ee,We,vt,Ce,Ee,Q.DEPTH_BUFFER_BIT,Q.NEAREST)):Dt?Q.copyTexSubImage3D(qe,K,We,vt,Et+bn,He,nt,Ce,Ee):Q.copyTexSubImage2D(qe,K,We,vt,Et+bn,He,nt,Ce,Ee);Ye.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Dt?N.isDataTexture||N.isData3DTexture?Q.texSubImage3D(qe,K,We,vt,Et,Ce,Ee,Ve,on,lt,xt.data):Y.isCompressedArrayTexture?Q.compressedTexSubImage3D(qe,K,We,vt,Et,Ce,Ee,Ve,on,xt.data):Q.texSubImage3D(qe,K,We,vt,Et,Ce,Ee,Ve,on,lt,xt):N.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,K,We,vt,Ce,Ee,on,lt,xt.data):N.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,K,We,vt,xt.width,xt.height,on,xt.data):Q.texSubImage2D(Q.TEXTURE_2D,K,We,vt,Ce,Ee,on,lt,xt);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,$n),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Mt),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,an),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,er),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,qt),K===0&&Y.generateMipmaps&&Q.generateMipmap(qe),Ye.unbindTexture()},this.copyTextureToTexture3D=function(N,Y,le=null,ce=null,K=0){return N.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ce=arguments[1]||null,N=arguments[2],Y=arguments[3],K=arguments[4]||0),Ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,Y,le,ce,K)},this.initRenderTarget=function(N){Qe.get(N).__webglFramebuffer===void 0&&I.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?I.setTextureCube(N,0):N.isData3DTexture?I.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?I.setTexture2DArray(N,0):I.setTexture2D(N,0),Ye.unbindTexture()},this.resetState=function(){U=0,k=0,B=null,Ye.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}class Zm extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jM extends Sn{constructor(e=null,t=1,s=1,a,c,f,d,p,m=Bn,x=Bn,b,v){super(null,f,d,p,m,x,a,c,b,v),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class HM extends Jo{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gl=new ue,Vl=new ue,Jm=new Gt,Bo=new G0,Cl=new ql,dd=new ue,$m=new ue;class GM extends kn{constructor(e=new Xr,t=new HM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,c=t.count;a<c;a++)Gl.fromBufferAttribute(t,a-1),Vl.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=Gl.distanceTo(Vl);e.setAttribute("lineDistance",new Hr(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cl.copy(s.boundingSphere),Cl.applyMatrix4(a),Cl.radius+=c,e.ray.intersectsSphere(Cl)===!1)return;Jm.copy(a).invert(),Bo.copy(e.ray).applyMatrix4(Jm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,x=s.index,v=s.attributes.position;if(x!==null){const S=Math.max(0,f.start),M=Math.min(x.count,f.start+f.count);for(let w=S,_=M-1;w<_;w+=m){const y=x.getX(w),R=x.getX(w+1),D=Rl(this,e,Bo,p,y,R);D&&t.push(D)}if(this.isLineLoop){const w=x.getX(M-1),_=x.getX(S),y=Rl(this,e,Bo,p,w,_);y&&t.push(y)}}else{const S=Math.max(0,f.start),M=Math.min(v.count,f.start+f.count);for(let w=S,_=M-1;w<_;w+=m){const y=Rl(this,e,Bo,p,w,w+1);y&&t.push(y)}if(this.isLineLoop){const w=Rl(this,e,Bo,p,M-1,S);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=a.length;c<f;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Rl(i,e,t,s,a,c){const f=i.geometry.attributes.position;if(Gl.fromBufferAttribute(f,a),Vl.fromBufferAttribute(f,c),t.distanceSqToSegment(Gl,Vl,dd,$m)>s)return;dd.applyMatrix4(i.matrixWorld);const p=e.ray.origin.distanceTo(dd);if(!(p<e.near||p>e.far))return{distance:p,point:$m.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const e0=new ue,t0=new ue;class VM extends GM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,c=t.count;a<c;a+=2)e0.fromBufferAttribute(t,a),t0.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+e0.distanceTo(t0);e.setAttribute("lineDistance",new Hr(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nl extends Wr{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class WM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=n0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=n0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function n0(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cf);function ig({mouseForce:i=20,cursorSize:e=100,isViscous:t=!1,viscous:s=30,iterationsViscous:a=32,iterationsPoisson:c=32,dt:f=.014,BFECC:d=!0,resolution:p=.5,isBounce:m=!1,colors:x=["#5227FF","#FF9FFC","#B497CF"],style:b={},className:v="",autoDemo:S=!0,autoSpeed:M=.5,autoIntensity:w=2.2,takeoverDuration:_=.25,autoResumeDelay:y=1e3,autoRampDuration:R=.6}){const D=V.useRef(null),T=V.useRef(null),z=V.useRef(null),U=V.useRef(null),k=V.useRef(null),B=V.useRef(!0),P=V.useRef(null);return V.useEffect(()=>{if(!D.current)return;function A(q){let L;Array.isArray(q)&&q.length>0?q.length===1?L=[q[0],q[0]]:L=q:L=["#ffffff","#ffffff"];const Z=L.length,$=new Uint8Array(Z*4);for(let be=0;be<Z;be++){const Ne=new Tt(L[be]);$[be*4+0]=Math.round(Ne.r*255),$[be*4+1]=Math.round(Ne.g*255),$[be*4+2]=Math.round(Ne.b*255),$[be*4+3]=255}const Te=new jM($,Z,1,Zn);return Te.magFilter=Pn,Te.minFilter=Pn,Te.wrapS=fr,Te.wrapT=fr,Te.generateMipmaps=!1,Te.needsUpdate=!0,Te}const j=A(x),se=new jt(0,0,0,0);class te{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(L){this.container=L,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new BM({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Tt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new WM,this.clock.start()}resize(){if(!this.container)return;const L=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(L.width)),this.height=Math.max(1,Math.floor(L.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const fe=new te;class me{constructor(){this.mouseMoved=!1,this.coords=new ct,this.coords_old=new ct,this.diff=new ct,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ct,this.takeoverTo=new ct,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(L){this.container=L,this.docTarget=L.ownerDocument||null;const Z=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);Z&&(this.listenerTarget=Z,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(L,Z){if(!this.container)return!1;const $=this.container.getBoundingClientRect();return $.width===0||$.height===0?!1:L>=$.left&&L<=$.right&&Z>=$.top&&Z<=$.bottom}updateHoverState(L,Z){return this.isHoverInside=this.isPointInside(L,Z),this.isHoverInside}setCoords(L,Z){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const $=this.container.getBoundingClientRect();if($.width===0||$.height===0)return;const Te=(L-$.left)/$.width,be=(Z-$.top)/$.height;this.coords.set(Te*2-1,-(be*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(L,Z){this.coords.set(L,Z),this.mouseMoved=!0}onDocumentMouseMove(L){if(this.updateHoverState(L.clientX,L.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const Z=this.container.getBoundingClientRect();if(Z.width===0||Z.height===0)return;const $=(L.clientX-Z.left)/Z.width,Te=(L.clientY-Z.top)/Z.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set($*2-1,-(Te*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(L.clientX,L.clientY),this.hasUserControl=!0}}onDocumentTouchStart(L){if(L.touches.length!==1)return;const Z=L.touches[0];this.updateHoverState(Z.clientX,Z.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Z.clientX,Z.clientY),this.hasUserControl=!0)}onDocumentTouchMove(L){if(L.touches.length!==1)return;const Z=L.touches[0];this.updateHoverState(Z.clientX,Z.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Z.clientX,Z.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const L=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(L>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const Z=L*L*(3-2*L);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,Z)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const de=new me;class pe{constructor(L,Z,$){this.mouse=L,this.manager=Z,this.enabled=$.enabled,this.speed=$.speed,this.resumeDelay=$.resumeDelay||3e3,this.rampDurationMs=($.rampDuration||0)*1e3,this.active=!1,this.current=new ct(0,0),this.target=new ct,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ct,this.pickNewTarget()}pickNewTarget(){const L=Math.random;this.target.set((L()*2-1)*(1-this.margin),(L()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const L=performance.now();if(L-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=L,this.activationTime=L),!this.active)return;this.mouse.isAutoActive=!0;let $=(L-this.lastTime)/1e3;this.lastTime=L,$>.2&&($=.016);const Te=this._tmpDir.subVectors(this.target,this.current),be=Te.length();if(be<.01){this.pickNewTarget();return}Te.normalize();let Ne=1;if(this.rampDurationMs>0){const Oe=Math.min(1,(L-this.activationTime)/this.rampDurationMs);Ne=Oe*Oe*(3-2*Oe)}const at=this.speed*$*Ne,_e=Math.min(at,be);this.current.addScaledVector(Te,_e),this.mouse.setNormalized(this.current.x,this.current.y)}}const H=`
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
`,J=`
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
`,ne=`
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
`,re=`
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
`;class Re{constructor(L){var Z;this.props=L||{},this.uniforms=(Z=this.props.material)==null?void 0:Z.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Zm,this.camera=new Hl,this.uniforms&&(this.material=new Nl(this.props.material),this.geometry=new Ji(2,2),this.plane=new Jn(this.geometry,this.material),this.scene.add(this.plane))}update(){fe.renderer.setRenderTarget(this.props.output||null),fe.renderer.render(this.scene,this.camera),fe.renderer.setRenderTarget(null)}}class Fe extends Re{constructor(L){super({material:{vertexShader:H,fragmentShader:O,uniforms:{boundarySpace:{value:L.cellScale},px:{value:L.cellScale},fboSize:{value:L.fboSize},velocity:{value:L.src.texture},dt:{value:L.dt},isBFECC:{value:!0}}},output:L.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const L=new Xr,Z=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);L.setAttribute("position",new hr(Z,3));const $=new Nl({vertexShader:J,fragmentShader:O,uniforms:this.uniforms});this.line=new VM(L,$),this.scene.add(this.line)}update({dt:L,isBounce:Z,BFECC:$}){this.uniforms.dt.value=L,this.line.visible=Z,this.uniforms.isBFECC.value=$,super.update()}}class Ke extends Re{constructor(L){super({output:L.dst}),this.init(L)}init(L){super.init();const Z=new Ji(1,1),$=new Nl({vertexShader:oe,fragmentShader:re,blending:gd,depthWrite:!1,uniforms:{px:{value:L.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(L.cursor_size,L.cursor_size)}}});this.mouse=new Jn(Z,$),this.scene.add(this.mouse)}update(L){const Z=de.diff.x/2*L.mouse_force,$=de.diff.y/2*L.mouse_force,Te=L.cursor_size*L.cellScale.x,be=L.cursor_size*L.cellScale.y,Ne=Math.min(Math.max(de.coords.x,-1+Te+L.cellScale.x*2),1-Te-L.cellScale.x*2),at=Math.min(Math.max(de.coords.y,-1+be+L.cellScale.y*2),1-be-L.cellScale.y*2),_e=this.mouse.material.uniforms;_e.force.value.set(Z,$),_e.center.value.set(Ne,at),_e.scale.value.set(L.cursor_size,L.cursor_size),super.update()}}class At extends Re{constructor(L){super({material:{vertexShader:H,fragmentShader:Se,uniforms:{boundarySpace:{value:L.boundarySpace},velocity:{value:L.src.texture},velocity_new:{value:L.dst_.texture},v:{value:L.viscous},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst,output0:L.dst_,output1:L.dst}),this.init()}update({viscous:L,iterations:Z,dt:$}){let Te,be;this.uniforms.v.value=L;for(let Ne=0;Ne<Z;Ne++)Ne%2===0?(Te=this.props.output0,be=this.props.output1):(Te=this.props.output1,be=this.props.output0),this.uniforms.velocity_new.value=Te.texture,this.props.output=be,this.uniforms.dt.value=$,super.update();return be}}class pt extends Re{constructor(L){super({material:{vertexShader:H,fragmentShader:Pe,uniforms:{boundarySpace:{value:L.boundarySpace},velocity:{value:L.src.texture},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst}),this.init()}update({vel:L}){this.uniforms.velocity.value=L.texture,super.update()}}class Nt extends Re{constructor(L){super({material:{vertexShader:H,fragmentShader:ge,uniforms:{boundarySpace:{value:L.boundarySpace},pressure:{value:L.dst_.texture},divergence:{value:L.src.texture},px:{value:L.cellScale}}},output:L.dst,output0:L.dst_,output1:L.dst}),this.init()}update({iterations:L}){let Z,$;for(let Te=0;Te<L;Te++)Te%2===0?(Z=this.props.output0,$=this.props.output1):(Z=this.props.output1,$=this.props.output0),this.uniforms.pressure.value=Z.texture,this.props.output=$,super.update();return $}}class Q extends Re{constructor(L){super({material:{vertexShader:H,fragmentShader:we,uniforms:{boundarySpace:{value:L.boundarySpace},pressure:{value:L.src_p.texture},velocity:{value:L.src_v.texture},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst}),this.init()}update({vel:L,pressure:Z}){this.uniforms.velocity.value=L.texture,this.uniforms.pressure.value=Z.texture,super.update()}}class nn{constructor(L){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...L},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ct,this.cellScale=new ct,this.boundarySpace=new ct,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Js:_r}createAllFBO(){const Z={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Pn,magFilter:Pn,wrapS:fr,wrapT:fr};for(let $ in this.fbos)this.fbos[$]=new Ei(this.fboSize.x,this.fboSize.y,Z)}createShaderPass(){this.advection=new Fe({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ke({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new At({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Nt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Q({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const L=Math.max(1,Math.round(this.options.resolution*fe.width)),Z=Math.max(1,Math.round(this.options.resolution*fe.height)),$=1/L,Te=1/Z;this.cellScale.set($,Te),this.fboSize.set(L,Z)}resize(){this.calcSize();for(let L in this.fbos)this.fbos[L].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let L=this.fbos.vel_1;this.options.isViscous&&(L=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:L});const Z=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:L,pressure:Z})}}class ht{constructor(){this.init()}init(){this.simulation=new nn,this.scene=new Zm,this.camera=new Hl,this.output=new Jn(new Ji(2,2),new Nl({vertexShader:H,fragmentShader:ne,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:j},bgColor:{value:se}}})),this.scene.add(this.output)}addScene(L){this.scene.add(L)}resize(){this.simulation.resize()}render(){fe.renderer.setRenderTarget(null),fe.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class dt{constructor(L){this.props=L,fe.init(L.$wrapper),de.init(L.$wrapper),de.autoIntensity=L.autoIntensity,de.takeoverDuration=L.takeoverDuration,this.lastUserInteraction=performance.now(),de.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new pe(de,this,{enabled:L.autoDemo,speed:L.autoSpeed,resumeDelay:L.autoResumeDelay,rampDuration:L.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():B.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(fe.renderer.domElement),this.output=new ht}resize(){fe.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),de.update(),fe.update(),this.output.update()}loop(){this.running&&(this.render(),U.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,U.current&&(cancelAnimationFrame(U.current),U.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),de.dispose(),fe.renderer){const L=fe.renderer.domElement;L&&L.parentNode&&L.parentNode.removeChild(L),fe.renderer.dispose(),fe.renderer.forceContextLoss()}}catch{}}}const Ye=D.current;Ye.style.overflow="hidden";const bt=new dt({$wrapper:Ye,autoDemo:S,autoSpeed:M,autoIntensity:w,takeoverDuration:_,autoResumeDelay:y,autoRampDuration:R});T.current=bt,(()=>{var Z;if(!T.current)return;const q=(Z=T.current.output)==null?void 0:Z.simulation;if(!q)return;const L=q.options.resolution;Object.assign(q.options,{mouse_force:i,cursor_size:e,isViscous:t,viscous:s,iterations_viscous:a,iterations_poisson:c,dt:f,BFECC:d,resolution:p,isBounce:m}),p!==L&&q.resize()})(),bt.start();const I=new IntersectionObserver(q=>{const L=q[0],Z=L.isIntersecting&&L.intersectionRatio>0;B.current=Z,T.current&&(Z&&!document.hidden?T.current.start():T.current.pause())},{threshold:[0,.01,.1]});I.observe(Ye),k.current=I;const C=new ResizeObserver(()=>{T.current&&(P.current&&cancelAnimationFrame(P.current),P.current=requestAnimationFrame(()=>{T.current&&T.current.resize()}))});return C.observe(Ye),z.current=C,()=>{if(U.current&&cancelAnimationFrame(U.current),z.current)try{z.current.disconnect()}catch{}if(k.current)try{k.current.disconnect()}catch{}T.current&&T.current.dispose(),T.current=null}},[d,e,f,m,t,c,a,i,p,s,S,M,w,_,y,R]),V.useEffect(()=>{var te;const A=T.current;if(!A)return;const j=(te=A.output)==null?void 0:te.simulation;if(!j)return;const se=j.options.resolution;Object.assign(j.options,{mouse_force:i,cursor_size:e,isViscous:t,viscous:s,iterations_viscous:a,iterations_poisson:c,dt:f,BFECC:d,resolution:p,isBounce:m}),A.autoDriver&&(A.autoDriver.enabled=S,A.autoDriver.speed=M,A.autoDriver.resumeDelay=y,A.autoDriver.rampDurationMs=R*1e3,A.autoDriver.mouse&&(A.autoDriver.mouse.autoIntensity=w,A.autoDriver.mouse.takeoverDuration=_)),p!==se&&j.resize()},[i,e,t,s,a,c,f,d,p,m,S,M,w,_,y,R]),l.jsx("div",{ref:D,className:`absolute inset-0 w-full h-full overflow-hidden pointer-events-none touch-none ${v||""}`,style:{zIndex:0,...b}})}function XM(){const i=V.useRef(null),e=V.useRef({x:-999,y:-999});return V.useEffect(()=>{const t=i.current,s=t.getContext("2d");let a=0,c=0,f=0,d=[];const p=()=>{a=t.offsetWidth,c=t.offsetHeight,t.width=a*devicePixelRatio,t.height=c*devicePixelRatio,s.scale(devicePixelRatio,devicePixelRatio);const M=Math.floor(a*c/8e3);d=Array.from({length:Math.min(M,150)},()=>({x:Math.random()*a,y:Math.random()*c,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:Math.random()*1.6+.4,opacity:Math.random()*.6+.2}))},m=140,x=()=>{s.clearRect(0,0,a,c),d.forEach(M=>{M.x+=M.vx,M.y+=M.vy,(M.x<0||M.x>a)&&(M.vx*=-1),(M.y<0||M.y>c)&&(M.vy*=-1);const w=M.x-e.current.x,_=M.y-e.current.y,y=Math.sqrt(w*w+_*_);if(y<100){const D=(100-y)/100;M.x+=w*D*.025,M.y+=_*D*.025}const R=y<80;s.beginPath(),s.arc(M.x,M.y,R?M.r*2:M.r,0,Math.PI*2),s.fillStyle=R?`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${M.opacity*1.8})`:`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${M.opacity*.6})`,s.fill()});for(let M=0;M<d.length;M++)for(let w=M+1;w<d.length;w++){const _=d[M].x-d[w].x,y=d[M].y-d[w].y,R=Math.sqrt(_*_+y*y);if(R<m){const D=(1-R/m)*.25;s.beginPath(),s.moveTo(d[M].x,d[M].y),s.lineTo(d[w].x,d[w].y),s.strokeStyle=`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${D})`,s.lineWidth=.7,s.stroke()}}d.forEach(M=>{const w=M.x-e.current.x,_=M.y-e.current.y,y=Math.sqrt(w*w+_*_);if(y<130){const R=(1-y/130)*.5;s.beginPath(),s.moveTo(M.x,M.y),s.lineTo(e.current.x,e.current.y),s.strokeStyle=`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim()||"0,240,200"},${R})`,s.lineWidth=.6,s.stroke()}}),f=requestAnimationFrame(x)};p(),x();const b=M=>{const w=t.getBoundingClientRect();e.current={x:M.clientX-w.left,y:M.clientY-w.top}},v=()=>{e.current={x:-999,y:-999}};window.addEventListener("mousemove",b),t.addEventListener("mouseleave",v);const S=new ResizeObserver(p);return S.observe(t),()=>{cancelAnimationFrame(f),window.removeEventListener("mousemove",b),t.removeEventListener("mouseleave",v),S.disconnect()}},[]),l.jsx("canvas",{ref:i,className:"absolute inset-0 w-full h-full pointer-events-none z-5"})}function qM({words:i}){const[e,t]=V.useState(0),[s,a]=V.useState(""),[c,f]=V.useState(!1);return V.useEffect(()=>{const d=i[e%i.length];if(!c&&s===d){const x=setTimeout(()=>f(!0),2e3);return()=>clearTimeout(x)}if(c&&s===""){f(!1),t(x=>x+1);return}const m=setTimeout(()=>{a(c?d.slice(0,s.length-1):d.slice(0,s.length+1))},c?50:90);return()=>clearTimeout(m)},[s,c,e,i]),l.jsxs("span",{style:{color:"rgb(var(--c1))"},children:[s,l.jsx("span",{className:"animate-pulse",style:{color:"rgb(var(--c1))",marginLeft:2},children:"|"})]})}function YM({target:i,suffix:e=""}){const[t,s]=V.useState(0),a=V.useRef(null);return V.useEffect(()=>{const c=new IntersectionObserver(([f])=>{if(f.isIntersecting){let d=0;const p=i/60,m=setInterval(()=>{d=Math.min(d+p,i),s(Math.floor(d)),d>=i&&clearInterval(m)},20);c.disconnect()}},{threshold:.5});return a.current&&c.observe(a.current),()=>c.disconnect()},[i]),l.jsxs("span",{ref:a,children:[t,e]})}function QM(){const i=V.useRef(null),[e,t]=V.useState(0),[s,a]=V.useState(!1),[c,f]=V.useState(!1),[d,p]=V.useState({}),m=V.useRef({}),[x,b]=V.useState(!1),v=T=>{const z=T.replace("#",""),U=parseInt(z.substring(0,2),16),k=parseInt(z.substring(2,4),16),B=parseInt(z.substring(4,6),16);return`${U}, ${k}, ${B}`};V.useEffect(()=>{const z=()=>b(window.innerWidth<=640);return z(),window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[]);const S=[{img:"/assets/images/banner1.png",label:"Design Systems",accent:"#7c6ff7",accentBg:"rgba(124,111,247,0.12)",accentBorder:"rgba(124,111,247,0.28)",Icon:v0},{img:"/assets/images/banner2.png",label:"团队分享会-设计赋能",accent:"#FE952C",accentBg:"rgba(254, 149, 44, 0.12)",accentBorder:"rgba(254, 149, 44, 0.30)",Icon:o1},{img:"/assets/images/banner3.png",label:"设计复盘",accent:"#456CFF",accentBg:"rgba(69, 108, 255, 0.12)",accentBorder:"rgba(69, 108, 255, 0.30)",Icon:Iv},{img:"/assets/images/banner4.png",label:"设计扩展",accent:"#f472b6",accentBg:"rgba(244,114,182,0.12)",accentBorder:"rgba(244,114,182,0.28)",Icon:M0},{img:"/assets/images/banner5.png",label:"设计获奖",accent:"#FFEB12",accentBg:"rgba(255,235,18,0.12)",accentBorder:"rgba(255,235,18,0.28)",Icon:x1}],M=(T,z=!1)=>{if(T!==e){if(z){t(T),f(!1);return}c||(f(!0),setTimeout(()=>{t(T),f(!1)},350))}};V.useEffect(()=>{if(s)return;const T=setInterval(()=>{f(!0),setTimeout(()=>{t(z=>(z+1)%S.length),f(!1)},320)},3800);return()=>clearInterval(T)},[s,S.length]);const w=T=>{const z=i.current.getBoundingClientRect(),U=T.clientX-z.left,k=T.clientY-z.top,B=U/z.width-.5,P=k/z.height-.5;i.current.style.transform=`perspective(900px) rotateY(${B*12}deg) rotateX(${-P*10}deg) scale3d(1.02,1.02,1.02)`,i.current.style.setProperty("--mouse-x",`${U}px`),i.current.style.setProperty("--mouse-y",`${k}px`);const A=Math.sqrt(B*B+P*P),j=Math.min(1,Math.max(0,A*2));i.current.style.setProperty("--glow-opacity",`${.4+j*.6}`);const se=200+A*550;i.current.style.setProperty("--border-glow-radius",`${se}px`)},_=()=>{i.current.style.transform="perspective(900px) rotateY(0) rotateX(0) scale3d(1,1,1)",a(!1),i.current.style.setProperty("--mouse-x","-999px"),i.current.style.setProperty("--mouse-y","-999px"),i.current.style.setProperty("--glow-opacity","0"),i.current.style.setProperty("--border-glow-radius","260px")},y=S[e],R=y.Icon,D=x?"16/9":"16/10";return l.jsxs("div",{ref:i,onMouseMove:w,onMouseEnter:()=>a(!0),onMouseLeave:_,className:"relative rounded-2xl cursor-pointer w-full !min-w-0",style:{transition:"transform 0.15s ease-out, background 0.4s ease",transformStyle:"preserve-3d","--accent-rgb":v(y.accent),background:`

        linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02)) padding-box, 
        radial-gradient(circle var(--border-glow-radius, 260px) at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(var(--accent-rgb), 1) 0%, rgba(var(--accent-rgb), 0.4) 50%, transparent 100%) border-box
      `,border:"2px solid transparent",boxShadow:"0 30px 80px rgba(0,0,0,0.5)",maxWidth:"800px",margin:"0 auto",aspectRatio:D,isolation:"isolate"},children:[l.jsx("div",{className:"absolute pointer-events-none",style:{inset:"-20px",borderRadius:"36px",background:"radial-gradient(circle 60px at calc(var(--mouse-x, -999px) + 20px) calc(var(--mouse-y, -999px) + 20px), rgba(var(--accent-rgb), calc(var(--glow-opacity, 0) * 0.85)), transparent 100%)",zIndex:-1,mixBlendMode:"screen",filter:"blur(6px)"}}),l.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-[14px]",style:{transform:"translateZ(0)",willChange:"transform",WebkitMaskImage:"-webkit-radial-gradient(white, black)"},children:[S.map((T,z)=>l.jsxs("div",{className:"absolute inset-0 w-full h-full rounded-[14px] overflow-hidden",style:{opacity:z===e?c?0:1:0,transition:c?"opacity 0.3s ease":"none",transform:"translateZ(0)"},children:[l.jsx("div",{className:"absolute inset-0 skeleton-shimmer rounded-[14px]",style:{zIndex:0}}),l.jsx("img",{src:T.img,alt:T.label,className:"absolute inset-0 w-full h-full object-cover rounded-[14px]",style:{display:d[z]?"none":void 0},onLoad:()=>{const U=m.current[z];U&&(U.timer&&clearTimeout(U.timer),U.interval&&clearInterval(U.interval),delete m.current[z]),p(k=>{const B={...k};return delete B[z],B})},onError:()=>{if(d[z])return;p(k=>({...k,[z]:!0})),(()=>{const k=m.current[z]||{timer:null,interval:null,count:0},B=k.count;B<5?(k.count=B+1,k.timer=setTimeout(()=>{const P=document.querySelector(`[data-banner-idx="${z}"]`);P&&(P.src=T.img+"?_retry="+Date.now())},2e3*(B+1))):k.interval=setInterval(()=>{const P=document.querySelector(`[data-banner-idx="${z}"]`);P&&(P.src=T.img+"?_retry="+Date.now())},8e3),m.current[z]=k})()},"data-banner-idx":z}),d[z]&&l.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-8 rounded-[14px] cursor-pointer",style:{background:`linear-gradient(135deg, ${T.accent}18 0%, #05050a 100%)`,zIndex:1},onClick:()=>{const U=m.current[z];U&&(U.timer&&clearTimeout(U.timer),U.interval&&clearInterval(U.interval),delete m.current[z]),p(B=>{const P={...B};return delete P[z],P});const k=document.querySelector(`[data-banner-idx="${z}"]`);k&&(k.style.display="",k.src=T.img+"?_retry="+Date.now())},children:[l.jsx("p",{className:"text-sm text-center",style:{color:"rgba(255,255,255,0.5)"},children:"图片加载失败"}),l.jsx("p",{className:"text-xs text-center mt-2",style:{color:"rgba(255,255,255,0.35)"},children:"点击重试"})]})]},z)),l.jsx("div",{className:"absolute inset-0 z-10 cursor-pointer rounded-[14px]",onClick:T=>{const z=T.currentTarget.getBoundingClientRect(),k=T.clientX-z.left<z.width/2?(e-1+S.length)%S.length:(e+1)%S.length;M(k,!0)},style:{background:"linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(var(--accent-rgb),0.04) 100%)"}}),!x&&l.jsx("div",{className:"absolute top-0 left-0 right-0 z-20 flex items-center gap-2 px-4 py-3",style:{background:"rgba(0,0,0,0.28)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderBottom:"1px solid rgba(255,255,255,0.07)"},children:["#ff5f56","#ffbd2e","#27c93f"].map(T=>l.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:T,opacity:.85}},T))}),l.jsxs("div",{className:`absolute bottom-0 left-0 right-0 z-20 flex items-center ${x?"justify-center":"justify-between"} px-3.5 py-2.5`,style:{background:"rgba(0,0,0,0.28)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderTop:"1px solid rgba(255,255,255,0.07)"},children:[!x&&l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg",style:{background:y.accentBg,border:`1px solid ${y.accentBorder}`,transition:"background 0.4s, border 0.4s"},children:[l.jsx(R,{size:12,style:{color:y.accent}}),l.jsx("span",{className:"text-xs",style:{color:y.accent,fontWeight:600},children:y.label})]}),l.jsx("div",{className:"flex items-center gap-2",children:S.map((T,z)=>l.jsx("button",{onClick:()=>M(z),className:"relative overflow-hidden",style:{width:z===e?26:6,height:6,borderRadius:9999,background:z===e?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.3)",border:"none",padding:0,transition:"width 0.3s ease, background 0.3s ease",cursor:"pointer",position:"relative"},children:z===e&&l.jsx("span",{className:"absolute inset-0 rounded-full",style:{background:y.accent,width:"0%",animation:"progressFlow 3.2s linear forwards",height:"100%",left:0,top:0}})},z))})]})]})]})}function KM(){const i=V.useMemo(()=>["#00f0c8","#7c6ff7","#ff9ffc"],[]),[e,t]=V.useState(!1),s=()=>{const a=document.createElement("a");a.href="https://raw.githubusercontent.com/quweijia/file/main/1%E3%80%81UI%20%E4%B8%BB%E7%AE%A1-%E6%9B%B2%E7%BB%B4%E7%94%B2-15662796885.pdf",a.download="曲维甲-UI主管-简历.pdf",a.target="_blank",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),document.body.removeChild(a)};return l.jsxs("section",{id:"hero",className:"relative flex items-center overflow-visible md:overflow-hidden",style:{background:"radial-gradient(ellipse 100% 80% at 60% 10%, rgba(0,240,200,0.05) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(124,111,247,0.06) 0%, transparent 60%), #05050a",minHeight:"calc(100vh / var(--screen-scale))"},children:[l.jsx(ig,{colors:i,mouseForce:25,cursorSize:120,resolution:.5,autoDemo:!0,autoSpeed:.3,autoIntensity:1.5}),l.jsx(XM,{}),l.jsx("div",{className:"absolute left-0 right-0 h-px pointer-events-none z-10 opacity-30",style:{top:"35%",background:"linear-gradient(90deg,transparent,rgba(0,240,200,0.4),transparent)",animation:"scanline 6s ease-in-out infinite"}}),l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.025]",style:{backgroundImage:"linear-gradient(rgba(0,240,200,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,200,1) 1px,transparent 1px)",backgroundSize:"60px 60px"}}),l.jsxs("div",{className:"relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full",style:{paddingTop:"calc(5rem / var(--screen-scale))",paddingBottom:"calc(4rem / var(--screen-scale))"},children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-1 items-center",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full",style:{background:"rgba(0,240,200,0.06)",border:"1px solid rgba(0,240,200,0.18)"},children:[l.jsx("span",{className:"w-2 h-2 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 8px rgb(var(--c1))"}}),l.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgb(var(--c1))",letterSpacing:"0.16em",fontWeight:500},children:"LOOKING FOR GOOD JOB · 期待您的联系"})]}),l.jsxs("h1",{className:"mb-4",style:{fontSize:"clamp(3.2rem, 7vw, 5.5rem)",fontWeight:800,lineHeight:1.2,letterSpacing:"-0.03em",color:"#f0f4f8"},children:["Vic Qu",l.jsx("br",{}),l.jsx("span",{style:{background:"linear-gradient(135deg, rgb(var(--c1)) 0%, rgb(var(--c2)) 25%, rgb(var(--c3)) 50%, rgb(var(--c2)) 75%, rgb(var(--c1)) 100%)",backgroundSize:"200% 200%",backgroundRepeat:"no-repeat",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline",animation:"flowGradient 6s ease infinite"},children:"Full-Stack"}),l.jsx("br",{}),l.jsx("span",{style:{color:"rgba(255,255,255,0.15)",WebkitTextStroke:"1px rgba(255,255,255,0.2)"},children:"Designer"})]}),l.jsxs("p",{className:"mb-6",style:{fontSize:"1rem",color:"rgba(255,255,255,0.5)",lineHeight:1.7,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"clip"},children:["ENFJ · 全栈设计师 · 专注"," ",l.jsx(qM,{words:["UI/UX Design","Design Systems","AI Design Workflow","Information Visualization","Full-Stack Implementation","Collaboration Enablement"]}),l.jsx("br",{}),"擅长从0到1搭建企业级设计系统，AI驱动设计提效",l.jsx("br",{}),"带领团队落地规模化政企产品"]}),l.jsx("div",{className:"flex gap-3 overflow-x-auto pb-2 mb-10 flex-nowrap",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:[{icon:l.jsx(v0,{size:11}),label:"原子组件规范落地"},{icon:l.jsx(Fv,{size:11}),label:"响应式设计"},{icon:l.jsx(A1,{size:11}),label:"AI 设计赋能 "}].map(a=>l.jsxs("span",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm flex-shrink-0",style:{background:"rgba(255,255,255,0.08",border:"1px solid rgba(255,255,255,0.16)",color:"rgba(255,255,255,0.5)"},children:[l.jsx("span",{style:{color:"rgb(var(--c1))"},children:a.icon}),a.label]},a.label))}),l.jsxs("div",{className:"hidden md:flex flex-wrap items-center gap-4",children:[l.jsx("div",{className:"btn-wrapper",children:l.jsxs("button",{onClick:()=>{var a;return(a=document.getElementById("portfolio"))==null?void 0:a.scrollIntoView({behavior:"smooth"})},className:"btn",children:[l.jsx("svg",{className:"btn-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"})}),l.jsxs("div",{className:"txt-wrapper",children:[l.jsxs("div",{className:"txt-1 pl-[0px] pr-[12px] py-[0px]",style:{color:"rgba(var(--c1)",opacity:1,visibility:"visible",fontSize:"16px",lineHeight:"1.5",display:"block",position:"relative",zIndex:10},children:[l.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"查"}),l.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"看"}),l.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"作"}),l.jsx("span",{className:"btn-letter",style:{color:"rgba(var(--c1)",opacity:1,fontSize:"16px",display:"inline-block"},children:"品"})]}),l.jsxs("div",{className:"txt-2",children:[l.jsx("span",{className:"btn-letter",children:"查"}),l.jsx("span",{className:"btn-letter",children:"看"}),l.jsx("span",{className:"btn-letter",children:"作"}),l.jsx("span",{className:"btn-letter",children:"品"})]})]})]})}),l.jsxs("button",{onClick:()=>{var a;return(a=document.getElementById("contact"))==null?void 0:a.scrollIntoView({behavior:"smooth"})},className:"group flex items-center gap-2 px-6 py-2 rounded-3xl text-base transition-all duration-300 hover:scale-[1.02]",style:{border:"1px solid rgba(var(--c1),0.3)",color:"rgba(255,255,255,0.65)",background:"rgba(var(--c1),0.15)",boxShadow:"0 0 25px rgba(var(--c1),0.15), 0 5px 15px rgba(0,0,0,0.3)"},onMouseEnter:a=>{a.currentTarget.style.borderColor="rgba(var(--c1),0.5)",a.currentTarget.style.background="rgba(var(--c1),0.25)"},onMouseLeave:a=>{a.currentTarget.style.borderColor="rgba(var(--c1),0.3)",a.currentTarget.style.background="rgba(var(--c1),0.15)"},children:[l.jsx(w0,{size:14,className:"group-hover:animate-bounce group-hover:translate-y-0.5 transition-transform duration-300",style:{color:"rgb(var(--c1))"}}),l.jsx("span",{className:"transition-colors duration-300",style:{color:"rgb(var(--c1))"},children:"获取简历"})]})]})]}),l.jsxs("div",{className:"relative mt-[0px] md:mt-0",children:[l.jsx("div",{className:"absolute -z-10 w-96 h-96 rounded-full",style:{background:"radial-gradient(circle,rgba(0,240,200,0.08) 0%,transparent 70%)",filter:"blur(50px)",right:0,top:"50%",transform:"translateY(-50%)"}}),l.jsx("div",{className:"min-h-[320px] md:min-h-[400px] flex items-center justify-center",children:l.jsx(QM,{})})]})]}),l.jsx("div",{className:"flex mt-12 mb-0 overflow-x-auto scrollbar-hide gap-[24px] w-screen relative left-1/2 -translate-x-1/2 pl-0 pr-6 md:static md:w-full md:translate-x-0 md:mx-0 md:max-w-none md:flex-wrap md:justify-between md:gap-y-12 md:overflow-x-visible",children:[{v:10,s:"+",label:"年设计经验"},{v:50,s:"+",label:"可视化大屏"},{v:5,s:"+",label:"企业级设计系统"},{v:32,s:"+",label:"团队赋能"},{v:4,s:"+",label:"已授权专利"},{v:60,s:"+",label:"上线产品"}].map(a=>l.jsxs("div",{className:"shrink-0 w-[120px] text-center md:w-auto",children:[l.jsx("div",{style:{fontSize:"2rem",fontWeight:800,color:"#f0f4f8",lineHeight:1},children:l.jsx(YM,{target:a.v,suffix:a.s})}),l.jsx("div",{className:"text-sm mt-1",style:{color:"rgba(255,255,255,0.6)",letterSpacing:"0.06em"},children:a.label})]},a.label))})]}),l.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-24 pointer-events-none",style:{background:"linear-gradient(transparent,#05050a)"}}),l.jsx(E0,{isOpen:e,onClose:()=>t(!1),onConfirm:s}),l.jsx("style",{children:`
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
      `})]})}const es=new IntersectionObserver(i=>{i.forEach(e=>{var t,s;e.isIntersecting&&((s=(t=e.target).__onVisible)==null||s.call(t),es.unobserve(e.target))})},{threshold:.1});function ZM(i=.08){const e=V.useRef(null),[t,s]=V.useState(!1);return V.useEffect(()=>{const a=e.current;if(a)return a.__onVisible=()=>s(!0),es.observe(a),()=>es.unobserve(a)},[]),{ref:e,vis:t}}function JM({pct:i,color:e,delay:t=0,light:s=!1}){const[a,c]=V.useState(0),f=V.useRef(null),[d,p]=V.useState(!1);return V.useEffect(()=>{const m=f.current;if(m)return m.__onVisible=()=>{setTimeout(()=>c(i),t),setTimeout(()=>p(!0),t+800)},es.observe(m),()=>es.unobserve(m)},[i,t]),l.jsxs("div",{ref:f,className:"relative h-[6px] rounded-full",style:{background:s?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.06)",willChange:"auto"},children:[l.jsx("div",{className:"absolute inset-y-0 left-0 rounded-full",style:{width:`${a}%`,transition:`width 0.8s cubic-bezier(0.4,0,0.2,1) ${t}ms`,background:`linear-gradient(90deg,${e}60,${e})`,boxShadow:d&&!s?`0 0 8px ${e}80, 0 0 4px ${e}`:"none",willChange:"width",transform:"translateZ(0)"}}),l.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none",style:{left:`${a}%`,width:12,height:12,borderRadius:"50%",background:e,boxShadow:d?`0 0 0 3px ${e}30, 0 0 14px 4px ${e}90, 0 0 28px 8px ${e}40`:"none",transition:`left 0.8s cubic-bezier(0.4,0,0.2,1) ${t}ms`,opacity:d?1:0,willChange:"left, opacity",transform:"translateZ(0)"}})]})}function $M({num:i,cat:e,sub:t,pct:s,color:a,tools:c,idx:f}){const[d,p]=V.useState(!1),[m,x]=V.useState(0),b=V.useRef(null),v=V.useRef(0);return V.useEffect(()=>{const S=b.current;if(S)return S.__onVisible=()=>{const M=f*60,w=800;setTimeout(()=>{let _=0;const y=performance.now(),R=D=>{const T=D-y,z=Math.min(T/w,1),U=1-Math.pow(1-z,3);_=Math.round(s*U),x(_),z<1&&(v.current=requestAnimationFrame(R))};v.current=requestAnimationFrame(R)},M),setTimeout(()=>p(!0),M+w)},es.observe(S),()=>{es.unobserve(S),cancelAnimationFrame(v.current)}},[s,f]),l.jsx("div",{ref:b,className:"relative py-7 transition-all duration-300",style:{borderTop:"0px solid rgba(255,255,255,0.07)",willChange:"auto"},children:l.jsxs("div",{className:"relative flex flex-wrap items-start gap-0 lg:gap-0",children:[l.jsx("div",{className:"shrink-0 w-8 hidden md:block",style:{paddingTop:3},children:l.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:`${a}80`,letterSpacing:"0.12em",fontVariantNumeric:"tabular-nums"},children:i})}),l.jsxs("div",{className:"shrink-0",style:{width:180},children:[l.jsx("p",{style:{fontSize:"0.9375rem",fontWeight:700,color:"#f0f4f8",lineHeight:1.2},children:e}),l.jsx("p",{className:"mt-1",style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.4)",letterSpacing:"0.04em"},children:t})]}),l.jsxs("div",{className:"flex-1 flex flex-col gap-3 mt-2 min-w-[300px]",children:[l.jsxs("div",{className:"flex items-center gap-5",children:[l.jsx("div",{className:"flex-1",children:l.jsx(JM,{pct:s,color:a,delay:f*120})}),l.jsx("span",{style:{fontSize:"1.0625rem",fontWeight:800,color:d?a:"rgba(255,255,255,0.45)",transition:"color 0.6s ease-out",minWidth:38,textAlign:"right",fontVariantNumeric:"tabular-nums",willChange:"color"},children:m})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5",style:{opacity:d?1:.4,transition:"opacity 0.6s ease-out",willChange:"opacity"},children:c.map(S=>l.jsx("span",{className:"px-2.5 py-1 rounded text-xs",style:{background:d?`${a}10`:"rgba(255,255,255,0.04)",border:`1px solid ${d?`${a}22`:"rgba(255,255,255,0.06)"}`,color:d?a:"rgba(255,255,255,0.3)",transition:"all 0.1s ease-out"},children:S},S))})]})]})})}function ew(){const{ref:i,vis:e}=ZM(.04),{theme:t}=Zs(),s=[{num:"01",cat:"UI / UX Design",sub:l.jsxs(l.Fragment,{children:["项目全周期管控",l.jsx("br",{}),"团队资源调度",l.jsx("br",{}),"跨部门协同"]}),pct:96,color:t.cyan,tools:["Figma","Principle","PPT Design","Master Go","Sketch","Protopie","Hype 4","Framer"]},{num:"02",cat:"AI Design Workflow",sub:l.jsxs(l.Fragment,{children:["提示生成",l.jsx("br",{}),"自动化",l.jsx("br",{}),"知识沉淀赋能"]}),pct:90,color:t.purple,tools:["Open Claw","Figma MCP","Pencil","Vibma","Stitch","Stable Diffusion","Comfy-UI"]},{num:"03",cat:"Visual & Motion",sub:l.jsxs(l.Fragment,{children:["可视化动效输出",l.jsx("br",{}),"Logo"]}),pct:86,color:t.pink,tools:["After Effects","Lotties","Rive","Spline","Blender"]},{num:"04",cat:"Front-End Prototyping",sub:l.jsxs(l.Fragment,{children:["产品元件库",l.jsx("br",{}),"原型 Demo",l.jsx("br",{}),"GIS可视化适配"]}),pct:82,color:"#34d399",tools:["Axure","Amap GIS","Draw.io","Swift UI","TRAE","Cursor"]},{num:"05",cat:"Presentation Event",sub:l.jsxs(l.Fragment,{children:["发布会 PPT 设计",l.jsx("br",{}),"团队知识体系搭建",l.jsx("br",{}),"设计专利输出"]}),pct:80,color:"#fb923c",tools:["PowerPoint","Keynote","Launch Design","Power BI","Patent"]}];return l.jsxs("section",{id:"skills",ref:i,className:"relative overflow-hidden",style:{background:"var(--bg)",padding:"80px 0 0px"},children:[l.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(80px,16vw,200px)",fontWeight:900,lineHeight:1,color:"rgba(255,255,255,0.08)",letterSpacing:"0.05em"},children:"SKILLS"}),l.jsxs("div",{className:"max-w-7xl mx-auto relative z-10 px-[40px] py-[0px]",children:[l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[32px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)",willChange:"opacity, transform"},children:[l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[l.jsx("span",{className:"text-xm tracking-widest",style:{color:t.cyan,letterSpacing:"0.2em",fontWeight:600},children:"CAPABILITIES"}),l.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${t.cyan}33,transparent)`}})]}),l.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:"#f0f4f8",lineHeight:1.05,letterSpacing:"-0.04em"},children:"技能全景"})]}),l.jsx("div",{className:"lg:max-w-xs",children:l.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(255,255,255,0.32)",lineHeight:1.85},children:["10 年全栈设计积累",l.jsx("br",{}),"能力方向 + 核心产出 + 工具支撑",l.jsx("br",{}),"三维协同，驱动端到端设计交付"]})})]}),l.jsxs("div",{className:"mb-20",children:[s.map((a,c)=>l.jsx("div",{className:a.cat==="Front-End Prototyping"||a.cat==="Presentation Event"?"hidden md:block":"",children:l.jsx($M,{...a,idx:c})},a.num)),l.jsx("div",{style:{borderTop:"0px solid rgba(255,255,255,0.07)"}})]})]})]})}function sg({src:i,alt:e,className:t,style:s,maxRetries:a=5,retryDelay:c=2e3}){const[f,d]=V.useState(0),[p,m]=V.useState(!1),x=V.useRef(),b=V.useRef(),v=V.useRef(null),S=V.useRef(null),M=/\.gif($|\?)/.test(i),w=/\.mp4($|\?)/i.test(i),_=f>0?`${i}${i.includes("?")?"&":"?"}_retry=${f}`:i,y=!p&&f>=a,R=V.useCallback(()=>{x.current&&(clearTimeout(x.current),x.current=void 0),b.current&&(clearInterval(b.current),b.current=void 0)},[]);V.useEffect(()=>R,[R]),V.useEffect(()=>{if(M&&p&&v.current){const U=v.current,k=U.src;U.src="",requestAnimationFrame(()=>{U.src=k})}},[M,p]),V.useEffect(()=>{if(!w)return;const U=()=>{S.current&&S.current.play().catch(()=>{})},k=()=>{U()};return document.addEventListener("touchstart",k,{once:!0}),document.addEventListener("click",k,{once:!0}),setTimeout(U,300),()=>{document.removeEventListener("touchstart",k),document.removeEventListener("click",k)}},[w]),V.useEffect(()=>{if(!(p||f===0)){if(f<a){const U=c*(f+1);x.current=setTimeout(()=>{d(k=>k+1)},U);return}return b.current=setInterval(()=>{d(U=>U+1)},5e3),()=>{b.current&&(clearInterval(b.current),b.current=void 0)}}},[p,f,a,c]),V.useEffect(()=>{p&&R()},[p,R]);const D=()=>{d(U=>U+1)},T=()=>{m(!0)},z=()=>{R(),d(1)};return w?l.jsxs("div",{className:t,style:s,children:[!p&&!y&&l.jsx("div",{className:"absolute inset-0 skeleton-shimmer"}),l.jsx("video",{ref:S,src:_,className:"w-full h-full object-cover object-top",style:{display:y?"none":void 0},autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",onLoadedData:T,onError:D}),y&&l.jsx(r0,{onRetry:z})]}):l.jsxs("div",{className:t,style:s,children:[!p&&!y&&l.jsx("div",{className:"absolute inset-0 skeleton-shimmer"}),l.jsx("img",{ref:v,src:_,alt:e,className:"w-full h-full object-cover object-top",style:{display:y?"none":void 0,...M?{}:p?{}:{opacity:0,transition:"opacity 0.3s ease"}},onLoad:T,onError:D,loading:M?"eager":"lazy"}),y&&l.jsx(r0,{onRetry:z})]})}function r0({onRetry:i}){return l.jsx("div",{className:"absolute inset-0 flex items-center justify-center",style:{background:"rgba(255,255,255,0.04)",cursor:"pointer",zIndex:1},onClick:i,children:l.jsxs("div",{className:"text-center",children:[l.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"rgba(255,255,255,0.2)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l.jsx("polyline",{points:"21 15 16 10 5 21"})]}),l.jsx("p",{className:"text-[10px] mt-1",style:{color:"rgba(255,255,255,0.25)"},children:"加载失败 · 点击重试"})]})})}function i0(i,e){if(i.startsWith("#")){const t=Math.round(e*255).toString(16).padStart(2,"0");return`${i}${t}`}return i.startsWith("rgb(")?i.replace(/^rgb\((.+)\)$/,(t,s)=>`rgba(${s},${e})`):i}function tw({onItemClick:i,paused:e}){const t=V.useRef(null),[s,a]=V.useState(0),c=V.useRef(0),f=V.useRef(!1),d=V.useRef(),p=396,m=V.useCallback(()=>{d.current&&clearInterval(d.current),!e&&(d.current=setInterval(()=>{a(v=>{const S=(v+1)%zs.length;return c.current=S,f.current=!0,t.current&&t.current.scrollTo({left:S*p,behavior:"smooth"}),setTimeout(()=>{f.current=!1},500),S})},4e3))},[p,e]),x=V.useCallback(()=>{if(!f.current&&t.current){const{scrollLeft:v}=t.current,S=Math.round(v/p);S!==c.current&&S>=0&&S<zs.length&&(c.current=S,a(S),m())}},[p,m]);V.useEffect(()=>{const v=t.current;return v&&(v.addEventListener("scroll",x),x()),()=>{v&&v.removeEventListener("scroll",x)}},[x]);const b=V.useCallback(v=>{c.current=v,f.current=!0,t.current&&t.current.scrollTo({left:v*p,behavior:"smooth"}),setTimeout(()=>{f.current=!1},500)},[p]);return V.useEffect(()=>(m(),()=>{d.current&&clearInterval(d.current)}),[m]),V.useEffect(()=>{e||m()},[e,m]),l.jsxs("div",{className:"relative -mx-6 lg:-mx-10",children:[l.jsx("div",{ref:t,className:"flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 snap-x snap-mandatory",style:{scrollBehavior:"smooth"},children:zs.map((v,S)=>l.jsx("div",{className:"shrink-0 w-[90vw] max-w-[380px] snap-center",children:l.jsxs("div",{className:"relative rounded-2xl overflow-hidden cursor-pointer",style:{background:"white",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 4px 24px rgba(0,0,0,0.06)"},onClick:()=>i(v),children:[l.jsxs("div",{className:"relative overflow-hidden aspect-video",style:{background:v.bg},children:[l.jsx(sg,{src:v.images[0],alt:v.name,className:"absolute inset-0 w-full h-full object-cover"}),l.jsx("div",{className:"hidden absolute top-3 left-3",children:l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(255,255,255,0.85)",border:`1px solid ${v.color}22`,color:v.color,backdropFilter:"blur(8px)",fontWeight:600},children:v.idx})})]}),l.jsxs("div",{className:"p-4 py-6 md:py-4",children:[l.jsxs("div",{className:"flex items-start justify-between gap-2 mb-2",children:[l.jsxs("div",{children:[l.jsx("h3",{style:{fontSize:"0.9375rem",fontWeight:800,color:"#0c0b18",lineHeight:1.3},children:v.name}),l.jsx("p",{className:"text-xs mt-0.5",style:{color:v.color,fontWeight:600,opacity:.8},children:v.role})]}),l.jsx("span",{className:"hidden shrink-0 w-7 h-7 rounded-lg flex items-center justify-center",style:{background:`${v.color}10`,border:`1px solid ${v.color}20`},children:l.jsx(of,{size:12,style:{color:v.color}})})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5 mb-3",children:v.tags.map(M=>l.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:`${v.color}0e`,border:`1px solid ${v.color}20`,color:v.color,fontWeight:500},children:M},M))}),l.jsx("p",{className:"text-xs mb-3 line-clamp-3",style:{color:"rgba(12,11,24,0.5)",lineHeight:1.7},children:v.desc}),l.jsx("div",{className:"grid grid-cols-2 gap-2",children:v.metrics.slice(0,4).map(M=>l.jsxs("div",{className:"rounded-lg p-2.5",style:{background:`${v.color}08`,border:`1px solid ${v.color}12`},children:[l.jsxs("div",{className:"flex items-baseline gap-0.5",children:[l.jsx("span",{style:{fontSize:"1.125rem",fontWeight:900,color:"#0c0b18",lineHeight:1},children:M.value}),M.unit&&l.jsx("span",{style:{fontSize:"0.625rem",fontWeight:700,color:v.color},children:M.unit})]}),l.jsx("p",{className:"mt-1",style:{fontSize:"0.625rem",color:"rgba(12,11,24,0.35)",lineHeight:1.3},children:M.label})]},M.label))}),l.jsxs("div",{className:"mt-3 rounded-lg p-3",style:{background:`${v.color}08`,border:`1px solid ${v.color}14`},children:[l.jsxs("div",{className:"flex items-center gap-1.5",style:{color:v.color},children:[l.jsx(Yo,{size:10}),l.jsx("span",{className:"text-[10px] tracking-wider font-semibold",children:"AI APPLICATION"})]}),l.jsx("p",{className:"text-xs mt-1.5 line-clamp-2",style:{color:"rgba(12,11,24,0.45)",lineHeight:1.6},children:v.aiNote})]})]})]})},v.idx))}),l.jsx("div",{className:"flex justify-center gap-1.5 mt-4",children:zs.map((v,S)=>{const M=zs[s].color;return l.jsx("button",{onClick:()=>b(S),className:"relative overflow-hidden",style:{width:S===s?26:6,height:6,borderRadius:9999,background:S===s?i0(M,.12):i0(M,.2),border:"none",padding:0,transition:"width 0.3s ease, background 0.3s ease",cursor:"pointer",position:"relative"},children:S===s&&l.jsx("span",{className:"absolute inset-0 rounded-full",style:{background:M.startsWith("rgb(")?M.replace("rgb(","rgba(").replace(")",",1)"):M,width:"0%",animation:"progressFlow 3.2s linear forwards",height:"100%",left:0,top:0}})},S)})})]})}function og(i=0){const e=V.useRef(null),[t,s]=V.useState(!1);return V.useEffect(()=>{const a=new IntersectionObserver(([c])=>{c.isIntersecting&&(setTimeout(()=>s(!0),i),a.disconnect())},{threshold:.06});return e.current&&a.observe(e.current),()=>a.disconnect()},[i]),{ref:e,vis:t}}function ag({steps:i,color:e}){return l.jsx("div",{className:"flex flex-wrap items-center gap-1",children:i.map((t,s)=>l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("span",{className:"px-2.5 py-1 rounded text-xs",style:{background:`${e}10`,border:`1px solid ${e}18`,color:e,fontWeight:500},children:t}),s<i.length-1&&l.jsx(Sv,{size:10,style:{color:"rgba(0,0,0,0.2)"}})]},t))})}function lg({value:i,unit:e,label:t,color:s}){return l.jsxs("div",{className:"rounded-2xl p-4 flex flex-col gap-1",style:{background:"white",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 2px 12px rgba(0,0,0,0.05)"},children:[l.jsxs("div",{className:"flex items-baseline gap-0.5",children:[l.jsx("span",{style:{fontSize:"1.75rem",fontWeight:900,color:"#0c0b18",lineHeight:1},children:i}),e&&l.jsx("span",{style:{fontSize:"0.875rem",fontWeight:700,color:s},children:e})]}),l.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(12,11,24,0.38)",letterSpacing:"0.06em",lineHeight:1.4},children:t})]})}function cg({type:i,color:e}){return i==="city"?l.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsx("defs",{children:l.jsxs("radialGradient",{id:"cv1",cx:"60%",cy:"40%",r:"60%",children:[l.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),l.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),l.jsx("rect",{width:"320",height:"200",fill:"url(#cv1)"}),[30,70,110,150,190,230,270,310].map(t=>l.jsx("line",{x1:t,y1:"0",x2:t,y2:"200",stroke:e,strokeOpacity:"0.07",strokeWidth:"1"},t)),[25,55,85,115,145,175].map(t=>l.jsx("line",{x1:"0",y1:t,x2:"320",y2:t,stroke:e,strokeOpacity:"0.07",strokeWidth:"1"},t)),l.jsx("path",{d:"M20 170 C60 130 110 110 160 100 S240 70 300 40",fill:"none",stroke:e,strokeWidth:"2.5",strokeOpacity:"0.7",strokeDasharray:"7 4"}),[[20,170],[160,100],[300,40]].map(([t,s],a)=>l.jsxs("g",{children:[l.jsx("circle",{cx:t,cy:s,r:"14",fill:e,fillOpacity:"0.08",stroke:e,strokeOpacity:"0.35",strokeWidth:"1.5"}),l.jsx("circle",{cx:t,cy:s,r:"4",fill:e})]},a)),l.jsx("rect",{x:"190",y:"48",width:"44",height:"76",rx:"8",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5"}),[56,64,72,80,88,96,104].map(t=>l.jsx("rect",{x:"196",y:t,width:t===56?30:22,height:"4",rx:"2",fill:e,fillOpacity:"0.12"},t))]}):i==="chart"?l.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsx("defs",{children:l.jsxs("radialGradient",{id:"cv2",cx:"40%",cy:"30%",r:"60%",children:[l.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),l.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),l.jsx("rect",{width:"320",height:"200",fill:"url(#cv2)"}),[20,60,100,140,180,220,260,300].map(t=>l.jsx("line",{x1:t,y1:"0",x2:t,y2:"200",stroke:e,strokeOpacity:"0.06",strokeWidth:"1"},t)),[20,60,100,140,180].map(t=>l.jsx("line",{x1:"0",y1:t,x2:"320",y2:t,stroke:e,strokeOpacity:"0.06",strokeWidth:"1"},t)),l.jsxs("g",{children:[l.jsx("rect",{x:"30",y:"30",width:"80",height:"36",rx:"8",fill:e,fillOpacity:"0.25",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),l.jsx("rect",{x:"36",y:"42",width:"40",height:"3",rx:"1.5",fill:e,fillOpacity:"0.8"}),l.jsx("rect",{x:"30",y:"85",width:"70",height:"32",rx:"6",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),l.jsx("rect",{x:"36",y:"95",width:"35",height:"2.5",rx:"1.25",fill:e,fillOpacity:"0.6"})]}),l.jsxs("g",{children:[l.jsx("rect",{x:"135",y:"30",width:"100",height:"80",rx:"12",fill:"none",stroke:e,strokeOpacity:"0.35",strokeWidth:"1.5"}),l.jsx("rect",{x:"135",y:"30",width:"100",height:"28",rx:"12",fill:e,fillOpacity:"0.15"}),l.jsx("circle",{cx:"150",cy:"44",r:"4",fill:e,fillOpacity:"0.7"}),l.jsx("circle",{cx:"162",cy:"44",r:"4",fill:e,fillOpacity:"0.4"}),l.jsx("circle",{cx:"174",cy:"44",r:"4",fill:e,fillOpacity:"0.25"}),l.jsx("rect",{x:"142",y:"68",width:"50",height:"3",rx:"1.5",fill:e,fillOpacity:"0.5"}),l.jsx("rect",{x:"142",y:"78",width:"70",height:"3",rx:"1.5",fill:e,fillOpacity:"0.3"}),l.jsx("rect",{x:"142",y:"88",width:"60",height:"3",rx:"1.5",fill:e,fillOpacity:"0.3"})]}),l.jsxs("g",{children:[l.jsx("circle",{cx:"260",cy:"45",r:"8",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),l.jsx("circle",{cx:"260",cy:"75",r:"12",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),l.jsx("circle",{cx:"260",cy:"110",r:"16",fill:"none",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5"}),l.jsx("rect",{x:"245",y:"135",width:"30",height:"30",rx:"6",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"1.5"}),l.jsx("rect",{x:"250",y:"140",width:"20",height:"20",rx:"4",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5"}),l.jsx("rect",{x:"255",y:"145",width:"10",height:"10",rx:"2",fill:e,fillOpacity:"0.4"})]}),l.jsx("path",{d:"M115 48 L135 48",fill:"none",stroke:e,strokeOpacity:"0.4",strokeWidth:"1.5",strokeDasharray:"4 3"}),l.jsx("path",{d:"M235 70 L245 70",fill:"none",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5",strokeDasharray:"4 3"}),l.jsx("path",{d:"M185 110 L245 110",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5",strokeDasharray:"4 3"}),[[55,170],[160,175],[270,165]].map(([t,s],a)=>l.jsxs("g",{children:[l.jsx("circle",{cx:t,cy:s,r:"10",fill:e,fillOpacity:"0.08",stroke:e,strokeOpacity:"0.3",strokeWidth:"1.5"}),l.jsx("circle",{cx:t,cy:s,r:"3",fill:e,fillOpacity:"0.7"})]},a))]}):l.jsxs("svg",{viewBox:"0 0 320 200",className:"w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsx("defs",{children:l.jsxs("radialGradient",{id:"cv3",cx:"50%",cy:"50%",r:"60%",children:[l.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.12"}),l.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})}),l.jsx("rect",{width:"320",height:"200",fill:"url(#cv3)"}),l.jsx("rect",{x:"16",y:"16",width:"288",height:"28",rx:"6",fill:e,fillOpacity:"0.1",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("rect",{x:"30",y:"24",width:"80",height:"12",rx:"3",fill:e,fillOpacity:"0.5"}),l.jsx("rect",{x:"240",y:"24",width:"50",height:"12",rx:"3",fill:e,fillOpacity:"0.3"}),l.jsxs("g",{children:[l.jsxs("g",{children:[l.jsx("rect",{x:"16",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("rect",{x:"28",y:"95",width:"12",height:"12",rx:"2",fill:e,fillOpacity:"0.35"}),l.jsx("rect",{x:"44",y:"82",width:"12",height:"25",rx:"2",fill:e,fillOpacity:"0.45"}),l.jsx("rect",{x:"60",y:"68",width:"12",height:"39",rx:"2",fill:e,fillOpacity:"0.55"}),l.jsx("rect",{x:"76",y:"58",width:"12",height:"49",rx:"2",fill:e,fillOpacity:"0.65"})]}),l.jsxs("g",{children:[l.jsx("rect",{x:"115",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("circle",{cx:"160",cy:"82",r:"22",fill:"none",stroke:e,strokeOpacity:"0.25",strokeWidth:"1.5"}),l.jsx("circle",{cx:"160",cy:"82",r:"16",fill:"none",stroke:e,strokeOpacity:"0.35",strokeWidth:"2",strokeDasharray:"60 40"}),l.jsx("circle",{cx:"160",cy:"82",r:"5",fill:e,fillOpacity:"0.7"})]}),l.jsxs("g",{children:[l.jsx("rect",{x:"214",y:"52",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("path",{d:"M228 100 L242 88 L256 92 L270 72 L284 76 L298 58",fill:"none",stroke:e,strokeOpacity:"0.6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),[[228,100],[242,88],[256,92],[270,72],[284,76],[298,58]].map(([t,s],a)=>l.jsx("circle",{cx:t,cy:s,r:"3",fill:e,fillOpacity:"0.75"},a))]}),l.jsxs("g",{children:[l.jsx("rect",{x:"16",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("rect",{x:"30",y:"135",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),l.jsx("rect",{x:"30",y:"135",width:"45",height:"6",rx:"3",fill:e,fillOpacity:"0.6"}),l.jsx("rect",{x:"30",y:"150",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),l.jsx("rect",{x:"30",y:"150",width:"52",height:"6",rx:"3",fill:e,fillOpacity:"0.5"}),l.jsx("rect",{x:"30",y:"165",width:"62",height:"6",rx:"3",fill:e,fillOpacity:"0.15"}),l.jsx("rect",{x:"30",y:"165",width:"35",height:"6",rx:"3",fill:e,fillOpacity:"0.4"})]}),l.jsxs("g",{children:[l.jsx("rect",{x:"115",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("circle",{cx:"160",cy:"152",r:"18",fill:"none",stroke:e,strokeOpacity:"0.2",strokeWidth:"4"}),l.jsx("circle",{cx:"160",cy:"152",r:"18",fill:"none",stroke:e,strokeOpacity:"0.5",strokeWidth:"4",strokeDasharray:"70 43"}),l.jsx("circle",{cx:"160",cy:"152",r:"8",fill:e,fillOpacity:"0.12"}),l.jsx("rect",{x:"150",y:"148",width:"20",height:"3",rx:"1.5",fill:e,fillOpacity:"0.6"})]}),l.jsxs("g",{children:[l.jsx("rect",{x:"214",y:"122",width:"90",height:"60",rx:"6",fill:e,fillOpacity:"0.06",stroke:e,strokeOpacity:"0.25",strokeWidth:"1"}),l.jsx("rect",{x:"224",y:"132",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),l.jsx("rect",{x:"230",y:"135",width:"30",height:"4",rx:"2",fill:e,fillOpacity:"0.5"}),l.jsx("rect",{x:"224",y:"148",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),l.jsx("rect",{x:"230",y:"151",width:"40",height:"4",rx:"2",fill:e,fillOpacity:"0.45"}),l.jsx("rect",{x:"224",y:"164",width:"70",height:"10",rx:"3",fill:e,fillOpacity:"0.12",stroke:e,strokeOpacity:"0.2",strokeWidth:"1"}),l.jsx("rect",{x:"230",y:"167",width:"25",height:"4",rx:"2",fill:e,fillOpacity:"0.4"})]})]}),l.jsxs("g",{children:[l.jsx("circle",{cx:"20",cy:"20",r:"4",fill:e,fillOpacity:"0.4"}),l.jsx("circle",{cx:"300",cy:"20",r:"4",fill:e,fillOpacity:"0.4"}),l.jsx("circle",{cx:"20",cy:"180",r:"4",fill:e,fillOpacity:"0.4"}),l.jsx("circle",{cx:"300",cy:"180",r:"4",fill:e,fillOpacity:"0.4"})]})]})}const zs=[{idx:"01",color:"#3366ff",bg:"#f0eeff",vizType:"chart",name:"浪潮智慧建筑原子组件库",role:"Design System Lead / 项目负责人",tags:["B端","SaaS","变体设计"],desc:"从0-1主导企业级设计系统建设，基于原子设计理论（Atomic Design） 体系化搭建企业级 PC 端组件库，累计沉淀 200+ 业务组件，覆盖智慧园区、智慧工地、建筑节能三大核心产品线，形成统一、可扩展、可落地的设计规范与交互标准。组件库提供多状态、多主题、多尺寸的丰富变体配置，支持自动布局、响应式适配等原型化能力，产品经理复用率提升至 91%。",images:["/assets/images/sjgf1.png","/assets/images/sjgf2.png","/assets/images/sjgf3.png","/assets/images/sjgf4.png","/assets/images/sjgf5.png"],process:["组件梳理","原子拆分","变体设计","自动布局","文档输出","团队赋能","持续迭代"],aiNote:"GitHub Copilot 辅助梳理 Figma 组件类型；使用 Vibma + Cursor MCP 自动检查校验组件样式、命名、状态统一性，快速排查漏洞，后期维护成本大幅降低；AI 批量生成线性 / 面性图标，统一视觉风格，再微调落地，告别逐个绘制，图标库搭建提速 80%。",metrics:[{value:"200",unit:"+",label:"自动布局组件"},{value:"91",unit:"%",label:"产品复用率"},{value:"-65",unit:"%",label:"原型制作耗时"},{value:"2.5",unit:"×",label:"交付效率提升"}]},{idx:"02",color:"#015BC9",bg:"#BBDDFE",vizType:"city",name:"历城控股 OA 系统",role:"Design System Lead / 项目负责人",tags:["iOS/Android","Web PC","企业管理"],desc:"统筹历城控股集团OA全端升级改版，管理端到端设计交付，统一信息架构与视觉语言，面向集团 2000 + 内部员工的一站式办公管理平台，覆盖假勤、工资单、报销、审批等核心办公场景，优化流程后审批平均耗时减少 40%，移动端使用率提升至 85%。",images:["/assets/images/lckg1.png","/assets/images/lckg2.png","/assets/images/lckg3.png","/assets/images/lckg4.png","/assets/images/lckg5.png"],process:["需求调研","竞品分析","信息架构","交互设计","视觉规范","开发对接","迭代上线"],aiNote:"依托 Eva Design System 构建全链路色彩体系，自动生成色值梯度库，并通过 WCAG 对比度规范自动校验；批量产出移动端启动页与 PC 端登录页的动态视觉资产，同步输出浅色 / 深色双模式适配；通过 Midjourney + PS/Figma 协同产出 Banner 和运营海报；利用 AI 辅助生成 Logo 创意方向，实现高效的多端视觉与品牌资产落地。",metrics:[{value:"-40",unit:"%",label:"审批平均耗时"},{value:"85",unit:"%",label:"移动端使用率"},{value:"+50",unit:"%",label:"报销提交效率"},{value:"4.7",unit:"/5",label:"员工满意度评分"}]},{idx:"03",color:"#11AF95",bg:"#97F9E5",vizType:"net",name:"数据可视化大屏设计体系",role:"Data Visualization Designer",tags:["Irregular Design","HTML Demo"],desc:"主导30+ 政企大屏项目设计，提炼并沉淀方法论，擅长非常规尺寸自适应适配、专用数字字体设计、高质感动效设计等领域的核心方法论与最佳实践。针对超宽屏、非标拼接屏、异形分辨率、多设备协同等复杂场景，形成完整的大屏设计解决方案，并输出标准化设计指南、组件规范与案例库，发表并授权相关专利 4 篇。",images:["/assets/images/dap1.png","/assets/images/dap2.png","/assets/images/dap3.png","/assets/images/dap4.png","/assets/images/dap5.png"],process:["项目复盘","规律提炼","要点总结","文档输出","团队分享","迭代优化"],aiNote:"用 AI 一键生成科技感 / 政务风 / 金融风大屏配色方案，自动生成深色模式渐变、霓虹光效色卡，同步校验大屏远距离可视性，省去反复调试色值的时间，风格探索效率提升 60%；AI 快速输出多版布局草案，解决大屏排版难、信息失衡问题，布局设计周期缩短 50%。",metrics:[{value:"30",unit:"+",label:"覆盖项目数量"},{value:"-35",unit:"%",label:"大屏交付周期"},{value:"95",unit:"%",label:"设计一致性"},{value:" 6",unit:"+",label:"团队分享会"}]}];function nw({project:i,onClose:e}){return V.useEffect(()=>(i&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[i]),i?l.jsx(Vs,{children:l.jsx("div",{className:"fixed inset-0 z-50 flex items-center sm:items-center justify-center px-6 sm:px-8 pt-0 sm:pt-12 pb-0 sm:pb-8",style:{background:"rgba(5,5,12,0.70)",backdropFilter:"blur(16px)"},onClick:e,children:l.jsxs("div",{className:"relative w-full sm:max-w-4xl max-h-[86vh] overflow-y-auto rounded-2xl",style:{background:"white",border:"1px solid rgba(0,0,0,0.08)",boxShadow:"0 20px 100px rgba(0,0,0,0.3)"},onClick:t=>t.stopPropagation(),children:[l.jsx("div",{className:"sticky top-4 z-20 flex justify-end pr-4 h-0 m-0 overflow-visible",children:l.jsx("button",{onClick:e,className:"w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",style:{background:"rgba(255,255,255,0.95)",border:"1px solid rgba(0,0,0,0.1)",color:"#0c0b18",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:l.jsx(_i,{size:16})})}),l.jsxs("div",{className:"relative overflow-hidden -mt-16 hidden md:block",style:{height:"clamp(150px, 30vh, 600px)",background:i.bg},children:[l.jsx(cg,{type:i.vizType,color:i.color}),l.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg,transparent 40%,rgba(255,255,255,0.9) 100%)"}})]}),l.jsxs("div",{className:"px-[24px] sm:px-[40px] pt-6 pb-[20px]",children:[l.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[l.jsx("span",{className:"hidden md:inline-block",style:{fontSize:"3.5rem",fontWeight:900,color:`${i.color}18`,lineHeight:1,letterSpacing:"-0.05em"},children:i.idx}),l.jsxs("div",{className:"flex-1",children:[l.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,color:"#0c0b18",lineHeight:1.2,marginBottom:"0.5rem"},children:i.name}),l.jsx("p",{style:{fontSize:"1rem",color:i.color,fontWeight:600},children:i.role})]})]}),l.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:i.tags.map(t=>l.jsx("span",{className:"text-sm px-3 py-1.5 rounded-lg",style:{background:`${i.color}12`,border:`1px solid ${i.color}25`,color:i.color,fontWeight:600},children:t},t))}),l.jsx("p",{className:"mb-8",style:{fontSize:"1rem",color:"rgba(12,11,24,0.6)",lineHeight:1.85},children:i.desc}),l.jsxs("div",{className:"mb-8 hidden sm:block",children:[l.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"设计流程"}),l.jsx(ag,{steps:i.process,color:i.color})]}),l.jsxs("div",{className:"mb-8",children:[l.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"核心数据"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:i.metrics.map(t=>l.jsx(lg,{value:t.value,unit:t.unit,label:t.label,color:i.color},t.label))})]}),l.jsxs("div",{className:"rounded-2xl p-6 mb-8  hidden sm:block",style:{background:`${i.color}12`,border:`1px solid ${i.color}25`},children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",style:{color:i.color},children:[l.jsx(Yo,{size:16}),l.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:700},children:"AI 应用"})]}),l.jsx("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.6)",lineHeight:1.85},children:i.aiNote})]}),i.images&&i.images.length>0&&l.jsxs("div",{className:"mb-8",children:[l.jsx("h3",{className:"mb-4",style:{fontSize:"1.125rem",fontWeight:700,color:"#0c0b18"},children:"项目展示"}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:i.images.map((t,s)=>l.jsxs("div",{className:"rounded-2xl overflow-hidden relative",style:{background:`linear-gradient(135deg, ${i.color}08, ${i.color}15)`,border:`1px solid ${i.color}20`,aspectRatio:"16/9",gridColumn:s===0?"1 / -1":"auto"},children:[l.jsx("div",{className:"absolute inset-0 skeleton-shimmer rounded-2xl",style:{zIndex:0}}),l.jsx("img",{src:t,alt:`${i.name} - 项目展示 ${s+1}`,className:"w-full h-full object-cover",style:{display:"block"},onLoad:a=>{const c=a.currentTarget,f=c.parentElement;if(c.style.display="block",f){const d=f.querySelector(".img-error-fallback");d&&d.remove();const p=f.querySelector(".skeleton-shimmer");p&&p.remove()}},onError:a=>{const c=a.currentTarget,f=c.parentElement;if(f&&(c.style.display="none",!f.querySelector(".img-error-fallback"))){const d=document.createElement("div");d.className="img-error-fallback absolute inset-0 flex items-center justify-center",d.style.cssText=`background: linear-gradient(135deg, ${i.color}08, ${i.color}15); color: rgba(12,11,24,0.4); font-size: 0.875rem; text-align: center; padding: 1rem; cursor: pointer;`,d.textContent="图片加载失败 · 点击重试";let p=0,m=null,x=null;const b=()=>{m&&clearTimeout(m),x&&clearInterval(x),p<5?(p++,m=setTimeout(()=>{c.src=t+"?_retry="+Date.now()},2e3*p)):x=setInterval(()=>{c.src=t+"?_retry="+Date.now()},8e3)};d.onclick=()=>{p=0,m&&clearTimeout(m),x&&clearInterval(x),d.remove(),c.style.display="block",c.src=t+"?_retry="+Date.now()},f.appendChild(d),b()}}})]},s))})]}),l.jsx("div",{className:"flex items-center justify-center gap-4",children:l.jsxs("a",{href:"https://github.com/quweijia/file/blob/main/lckgoa.html",target:"_blank",rel:"noopener noreferrer",className:"w-full group flex items-center justify-center gap-2 rounded-xl text-sm transition-colors px-[24px] py-[12px]",onMouseEnter:t=>{t.currentTarget.style.background=`${i.color}50`},onMouseLeave:t=>{t.currentTarget.style.background=`${i.color}30`},style:{background:`${i.color}30`,color:i.color,fontWeight:600,textDecoration:"none",cursor:"pointer"},children:["Figma 原稿",l.jsx(lf,{size:14,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})})]})]})})}):null}function rw({p:i,rev:e,index:t,onOpenModal:s}){const{ref:a,vis:c}=og(0),[f,d]=V.useState(!1);return l.jsx("div",{ref:a,className:"rounded-2xl overflow-hidden transition-all duration-700",style:{background:"white",boxShadow:f?"0 24px 80px rgba(0,0,0,0.13), 0 8px 24px rgba(0,0,0,0.07)":"0 4px 24px rgba(0,0,0,0.06)",opacity:c?1:0,transform:c?"translateY(0)":"translateY(32px)",border:"1px solid rgba(0,0,0,0.05)"},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:l.jsxs("div",{className:`grid 
          ${t===1?"lg:grid-cols-[3fr_7fr]":"lg:grid-cols-[7fr_3fr]"} 
          ${e?"lg:[grid-template-areas:'right_left']":""}
        `,children:[l.jsxs("div",{className:`${e?"lg:[grid-area:left]":""} px-[32px] pt-[32px] pb-[0px] sm:p-[32px]`,style:{borderRight:e?"none":"1px solid rgba(0,0,0,0.05)",borderLeft:e?"1px solid rgba(0,0,0,0.05)":"none"},children:[l.jsxs("div",{className:"flex items-start justify-between gap-4 mb-6",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"hidden md:inline",style:{fontSize:"3rem",fontWeight:900,color:`${i.color}20`,lineHeight:1,letterSpacing:"-0.05em"},children:i.idx}),l.jsxs("div",{children:[l.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:800,color:"#0c0b18",lineHeight:1.2},children:i.name}),l.jsx("p",{className:"mt-0.5",style:{fontSize:"0.8125rem",color:i.color,fontWeight:600},children:i.role})]})]}),l.jsx("button",{className:"shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200",style:{background:f?`${i.color}12`:"rgba(0,0,0,0.04)",border:`1px solid ${f?`${i.color}25`:"rgba(0,0,0,0.07)"}`},onClick:s,children:l.jsx(of,{size:14,style:{color:f?i.color:"rgba(0,0,0,0.3)"}})})]}),l.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:i.tags.map(m=>l.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:`${i.color}0e`,border:`1px solid ${i.color}20`,color:i.color,fontWeight:500},children:m},m))}),l.jsx("p",{className:"mb-[8px] sm:mb-6",style:{fontSize:"0.875rem",color:"rgba(12,11,24,0.55)",lineHeight:1.85},children:i.desc}),l.jsxs("div",{className:"mb-5 hidden sm:block",children:[l.jsx("p",{className:"text-xs mb-2.5 tracking-wider",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.12em"},children:"DESIGN PROCESS"}),l.jsx(ag,{steps:i.process,color:i.color})]}),l.jsxs("div",{className:"rounded-xl p-4 hidden sm:block",style:{background:`${i.color}12`,border:`1px solid ${i.color}16`},children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:i.color},children:[l.jsx(Yo,{size:11}),l.jsx("span",{className:"text-xs tracking-wider",style:{letterSpacing:"0.1em",fontWeight:700},children:"AI APPLICATION"})]}),l.jsx("p",{style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.5)",lineHeight:1.8},children:i.aiNote})]})]}),l.jsxs("div",{className:`flex flex-col ${e?"lg:[grid-area:right]":""}`,children:[l.jsxs("div",{className:"relative overflow-hidden hidden lg:block",style:{height:220,background:i.bg},children:[l.jsx(cg,{type:i.vizType,color:i.color}),l.jsx("div",{className:"absolute inset-0 pointer-events-none hidden lg:block",style:{background:"linear-gradient(180deg,transparent 60%,rgba(255,255,255,0.8) 100%)"}})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3 flex-1 items-center justify-center place-content-center p-[24px]",children:[l.jsx("p",{className:"col-span-2 text-xs mb-1 tracking-wider text-center",style:{color:"rgba(12,11,24,0.25)",letterSpacing:"0.12em"},children:"KEY METRICS"}),i.metrics.map(m=>l.jsx(lg,{value:m.value,unit:m.unit,label:m.label,color:i.color},m.label))]})]})]})})}function iw(){const{ref:i,vis:e}=og(.03),{theme:t}=Zs(),[s,a]=V.useState(null);return l.jsxs(l.Fragment,{children:[l.jsxs("section",{id:"projects",ref:i,className:"relative overflow-visible md:overflow-hidden",style:{background:"#f3f0eb",padding:"80px 0 140px"},children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.025]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"180px"}}),l.jsx("div",{className:"absolute left-0 top-6 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,color:"rgba(12,11,24,0.03)",lineHeight:1,letterSpacing:"0.05em",whiteSpace:"nowrap"},children:"PROJECTS"}),l.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[60px] max-lg:mb-[32px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[l.jsx("span",{className:"text-xm tracking-widest",style:{color:t.cyan,letterSpacing:"0.2em",fontWeight:600},children:"CASE STUDIES"}),l.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${t.cyan}66,transparent)`}})]}),l.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:600,color:"#0c0b18",lineHeight:1.05,letterSpacing:"-0.04em"},children:"主导项目"})]}),l.jsx("div",{className:"lg:max-w-md",children:l.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.42)",lineHeight:1.85},children:["主导多个从0-1移动端、PC端、可视化大屏项目",l.jsx("br",{}),"每个项目均展示完整设计过程与可量化成果"]})})]}),l.jsx("div",{className:"hidden md:block space-y-4",children:zs.map((c,f)=>l.jsx(rw,{p:c,rev:f%2===1,index:f,onOpenModal:()=>a(c)},c.idx))}),l.jsx("div",{className:"md:hidden",children:l.jsx(tw,{onItemClick:a,paused:!!s})})]})]}),l.jsx(nw,{project:s,onClose:()=>a(null)})]})}function ug({children:i,className:e="",glowColor:t="rgba(139, 92, 246, 0.8)",borderRadius:s="1rem",borderWidth:a=1,intensity:c=1}){const f=V.useRef(null),d=V.useRef(null),p=V.useRef(0),m=V.useRef({x:-1e3,y:-1e3,active:!1});return V.useEffect(()=>{const x=f.current,b=d.current;if(!x||!b)return;const v=b.getContext("2d");if(!v)return;const S=()=>{b.width=x.offsetWidth,b.height=x.offsetHeight};S();const M=new ResizeObserver(S);M.observe(x);const w=R=>{const D=x.getBoundingClientRect();m.current={x:R.clientX-D.left,y:R.clientY-D.top,active:!0}},_=()=>{m.current.active=!1};x.addEventListener("mousemove",w),x.addEventListener("mouseleave",_);const y=()=>{const R=b.width,D=b.height;v.clearRect(0,0,R,D);const{x:T,y:z,active:U}=m.current,k=parseFloat(s)*16,B=Math.max(0,k);let P=a,A=c;if(U){const se=T,te=R-T,fe=z,me=D-z,de=Math.min(se,te,fe,me),H=Math.max(0,1-de/60);P=a*(.5+H*.5),A=c*(.5+H*1)}const j=()=>{v.beginPath(),v.moveTo(B,0),v.lineTo(R-B,0),v.arcTo(R,0,R,B,B),v.lineTo(R,D-B),v.arcTo(R,D,R-B,D,B),v.lineTo(B,D),v.arcTo(0,D,0,D-B,B),v.lineTo(0,B),v.arcTo(0,0,B,0,B),v.closePath()};if(U){const se=v.createRadialGradient(T,z,0,T,z,Math.max(R,D)*.5);se.addColorStop(0,t.replace(/[\d.]+\)$/,`${A})`)),se.addColorStop(.3,t.replace(/[\d.]+\)$/,`${A*.5})`)),se.addColorStop(1,t.replace(/[\d.]+\)$/,"0)")),v.lineWidth=P,v.strokeStyle=se,j(),v.stroke()}else v.lineWidth=a,v.strokeStyle=t.replace(/[\d.]+\)$/,"0.2)"),j(),v.stroke();p.current=requestAnimationFrame(y)};return p.current=requestAnimationFrame(y),()=>{cancelAnimationFrame(p.current),M.disconnect(),x.removeEventListener("mousemove",w),x.removeEventListener("mouseleave",_)}},[t,s,a,c]),l.jsxs("div",{ref:f,className:`relative ${e}`,style:{borderRadius:s},children:[l.jsx("div",{style:{borderRadius:s,overflow:"hidden",padding:a*.3+"px"},children:i}),l.jsx("canvas",{ref:d,className:"absolute inset-0 pointer-events-none",style:{borderRadius:s,zIndex:10}})]})}function sw(i){if(i.startsWith("#")&&i.length===7){const e=parseInt(i.slice(1,3),16),t=parseInt(i.slice(3,5),16),s=parseInt(i.slice(5,7),16);return`rgba(${e},${t},${s},1.0)`}return"rgba(139,92,246,1.0)"}function s0(i,e){if(i.startsWith("#")){const t=Math.round(e*255).toString(16).padStart(2,"0");return`${i}${t}`}return i.startsWith("rgb(")?i.replace(/^rgb\((.+)\)$/,(t,s)=>`rgba(${s},${e})`):i}function ow({onItemClick:i,items:e,paused:t}){const s=V.useRef(null),[a,c]=V.useState(0),f=V.useRef(0),d=V.useRef(!1),p=V.useRef(),m=396,x=V.useCallback(()=>{p.current&&clearInterval(p.current),!t&&(p.current=setInterval(()=>{c(S=>{const M=(S+1)%e.length;return f.current=M,d.current=!0,s.current&&s.current.scrollTo({left:M*m,behavior:"smooth"}),setTimeout(()=>{d.current=!1},500),M})},4e3))},[m,e,t]),b=V.useCallback(()=>{if(!d.current&&s.current){const{scrollLeft:S}=s.current,M=Math.round(S/m);M!==f.current&&M>=0&&M<e.length&&(f.current=M,c(M),x())}},[m,x,e]);V.useEffect(()=>{const S=s.current;return S&&(S.addEventListener("scroll",b),b()),()=>{S&&S.removeEventListener("scroll",b)}},[b]),V.useEffect(()=>{c(0),f.current=0,s.current&&s.current.scrollTo({left:0,behavior:"instant"})},[e]);const v=V.useCallback(S=>{f.current=S,d.current=!0,s.current&&s.current.scrollTo({left:S*m,behavior:"smooth"}),setTimeout(()=>{d.current=!1},500)},[m]);return V.useEffect(()=>(x(),()=>{p.current&&clearInterval(p.current)}),[x]),V.useEffect(()=>{t||x()},[t,x]),l.jsxs("div",{className:"relative -mx-6 lg:-mx-10",children:[l.jsx("div",{ref:s,className:"flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 snap-x snap-mandatory",style:{scrollBehavior:"smooth"},children:e.map((S,M)=>l.jsx("div",{className:"shrink-0 w-[90vw] max-w-[380px] snap-center",style:{opacity:M===a?1:.7,transition:"opacity 0.3s ease"},children:l.jsx(ug,{glowColor:sw(S.color),borderRadius:"1rem",borderWidth:5,intensity:2,children:l.jsxs("div",{className:"relative rounded-2xl overflow-hidden cursor-pointer",style:{background:"#0e0e1a"},onClick:()=>i(S),children:[l.jsxs("div",{className:"relative aspect-video overflow-hidden rounded-t-2xl",children:[l.jsx(sg,{src:S.coverImg,alt:S.title,className:"absolute inset-0 w-full h-full object-cover object-top"}),l.jsx("div",{className:"hidden md:block absolute top-3 left-3",children:l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(16,16,26,0.8)",border:`1px solid ${S.color}22`,color:S.color,backdropFilter:"blur(8px)"},children:S.year})})]}),l.jsxs("div",{className:"p-5 py-7",children:[l.jsxs("div",{className:"flex items-start justify-between gap-3 mb-5",children:[l.jsxs("div",{children:[l.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:"#f0f4f8"},children:S.title}),l.jsx("p",{className:"text-xs mt-1.5",style:{color:S.color,opacity:.75},children:S.sub})]}),l.jsx("span",{className:"shrink-0 text-xs px-2 py-1 rounded-lg",style:{color:S.color,fontWeight:600,whiteSpace:"nowrap",background:`color-mix(in srgb, ${S.color} 12%, transparent)`,border:`1px solid color-mix(in srgb, ${S.color} 14%, transparent)`},children:S.metric})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5 mt-5",children:S.tags.slice(0,3).map(w=>l.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.3)"},children:w},w))}),l.jsxs("div",{className:"mt-5 rounded-lg p-3",style:{background:S.color.startsWith("rgb(")?S.color.replace("rgb(","rgba(").replace(/\)$/,",0.08)"):`${S.color}14`,border:S.color.startsWith("rgb(")?"1px solid rgba(var(--c1),0.09)":`1px solid ${S.color}16`},children:[l.jsxs("div",{className:"flex items-center gap-1.5",style:{color:S.color},children:[l.jsx(Yo,{size:14}),l.jsx("span",{className:"text-xs tracking-wider font-semibold",children:"亮点"})]}),l.jsx("p",{className:"text-xs mt-1.5 line-clamp-2",style:{color:"rgba(255,255,255,0.5)"},children:S.highlights[0]})]})]})]})})},S.id))}),l.jsx("div",{className:"flex justify-center gap-1.5 mt-4",children:e.map((S,M)=>{const w=e[a].color;return l.jsx("button",{onClick:()=>v(M),className:"relative overflow-hidden",style:{width:M===a?26:6,height:6,borderRadius:9999,background:M===a?s0(w,.15):s0(w,.2),border:"none",padding:0,transition:"width 0.3s ease, background 0.3s ease",cursor:"pointer",position:"relative"},children:M===a&&l.jsx("span",{className:"absolute inset-0 rounded-full",style:{background:w.startsWith("rgb(")?w.replace("rgb(","rgba(").replace(")",",1)"):w,width:"0%",animation:"progressFlow 3.2s linear forwards",height:"100%",left:0,top:0}})},M)})})]})}function aw(i){if(i.startsWith("#")&&i.length===7){const e=parseInt(i.slice(1,3),16),t=parseInt(i.slice(3,5),16),s=parseInt(i.slice(5,7),16);return`rgba(${e},${t},${s},1.0)`}return"rgba(139,92,246,1.0)"}function lw(i=0){const e=V.useRef(null),[t,s]=V.useState(!1);return V.useEffect(()=>{if(t)return;const a=new IntersectionObserver(([c])=>{c.isIntersecting&&!t&&(setTimeout(()=>s(!0),i),a.disconnect())},{threshold:.04});return e.current&&a.observe(e.current),()=>a.disconnect()},[i,t]),{ref:e,vis:t}}function cw({color:i}){return l.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsxs("defs",{children:[l.jsxs("radialGradient",{id:"c1",cx:"65%",cy:"35%",r:"65%",children:[l.jsx("stop",{offset:"0%",stopColor:i,stopOpacity:"0.22"}),l.jsx("stop",{offset:"100%",stopColor:i,stopOpacity:"0"})]}),l.jsxs("filter",{id:"gf1",children:[l.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"b"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"b"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),l.jsx("rect",{width:"560",height:"320",fill:"url(#c1)"}),[40,100,160,220,280,340,400,460,520].map(e=>l.jsx("line",{x1:e,y1:"0",x2:e,y2:"320",stroke:i,strokeOpacity:"0.05",strokeWidth:"1"},e)),[40,85,130,175,220,270].map(e=>l.jsx("line",{x1:"0",y1:e,x2:"560",y2:e,stroke:i,strokeOpacity:"0.05",strokeWidth:"1"},e)),l.jsx("path",{d:"M30 280 C110 210 200 170 290 155 S400 120 520 70",fill:"none",stroke:i,strokeWidth:"2.5",strokeOpacity:"0.6",strokeDasharray:"9 6",filter:"url(#gf1)"}),l.jsx("path",{d:"M30 280 C120 250 220 235 320 225 S450 200 530 175",fill:"none",stroke:i,strokeWidth:"1.5",strokeOpacity:"0.2",strokeDasharray:"5 4"}),[[30,280],[290,155],[520,70]].map(([e,t],s)=>l.jsxs("g",{filter:"url(#gf1)",children:[l.jsx("circle",{cx:e,cy:t,r:"18",fill:i,fillOpacity:"0.08",stroke:i,strokeOpacity:"0.35",strokeWidth:"1.5"}),l.jsx("circle",{cx:e,cy:t,r:"5.5",fill:i,fillOpacity:"0.9"})]},s)),l.jsx("rect",{x:"350",y:"60",width:"55",height:"96",rx:"10",fill:"none",stroke:i,strokeOpacity:"0.22",strokeWidth:"1.5"}),l.jsx("rect",{x:"356",y:"68",width:"43",height:"70",rx:"4",fill:i,fillOpacity:"0.04"}),[73,81,89,97,105,113,121].map(e=>l.jsx("rect",{x:"360",y:e,width:e%16===1?34:24,height:"4",rx:"2",fill:i,fillOpacity:"0.1"},e)),l.jsx("circle",{cx:"80",cy:"60",r:"38",fill:"none",stroke:i,strokeOpacity:"0.06",strokeWidth:"20"}),l.jsx("circle",{cx:"490",cy:"260",r:"50",fill:"none",stroke:i,strokeOpacity:"0.05",strokeWidth:"28"})]})}function Pl({color:i}){const e=[.52,.78,.43,.91,.35,.68,.95,.52,.74,.6,.87,.41,.76,.55];return l.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsxs("defs",{children:[l.jsxs("radialGradient",{id:"c2",cx:"50%",cy:"25%",r:"70%",children:[l.jsx("stop",{offset:"0%",stopColor:i,stopOpacity:"0.18"}),l.jsx("stop",{offset:"100%",stopColor:i,stopOpacity:"0"})]}),l.jsxs("linearGradient",{id:"bg2",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:i,stopOpacity:"0.75"}),l.jsx("stop",{offset:"100%",stopColor:i,stopOpacity:"0.1"})]}),l.jsxs("filter",{id:"gf2",children:[l.jsx("feGaussianBlur",{stdDeviation:"2",result:"b"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"b"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),l.jsx("rect",{width:"560",height:"320",fill:"url(#c2)"}),e.map((t,s)=>{const a=t*200,c=26+s*38,f=285-a;return l.jsxs("g",{children:[l.jsx("rect",{x:c,y:f,width:"26",height:a,rx:"3",fill:"url(#bg2)"}),l.jsx("rect",{x:c,y:f,width:"26",height:"5",rx:"2.5",fill:i,filter:"url(#gf2)"})]},s)}),l.jsx("polyline",{points:e.map((t,s)=>`${39+s*38},${285-t*200}`).join(" "),fill:"none",stroke:i,strokeWidth:"2",strokeOpacity:"0.45"}),l.jsx("line",{x1:"22",y1:"285",x2:"545",y2:"285",stroke:i,strokeOpacity:"0.1",strokeWidth:"1"}),[80,160].map(t=>l.jsx("line",{x1:"22",y1:285-t,x2:"545",y2:285-t,stroke:i,strokeOpacity:"0.05",strokeWidth:"1"},t)),l.jsx("rect",{x:"420",y:"30",width:"120",height:"65",rx:"8",fill:i,fillOpacity:"0.06",stroke:i,strokeOpacity:"0.18",strokeWidth:"1"}),l.jsx("rect",{x:"430",y:"40",width:"60",height:"6",rx:"3",fill:i,fillOpacity:"0.2"}),l.jsx("rect",{x:"430",y:"52",width:"96",height:"14",rx:"3",fill:i,fillOpacity:"0.1"}),l.jsx("rect",{x:"430",y:"72",width:"48",height:"5",rx:"2.5",fill:i,fillOpacity:"0.08"})]})}function uw({color:i}){const e=[[280,155],[180,85],[380,85],[140,210],[420,210],[215,42],[345,42]];return l.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsxs("defs",{children:[l.jsxs("radialGradient",{id:"c3",cx:"50%",cy:"48%",r:"58%",children:[l.jsx("stop",{offset:"0%",stopColor:i,stopOpacity:"0.18"}),l.jsx("stop",{offset:"100%",stopColor:i,stopOpacity:"0"})]}),l.jsxs("filter",{id:"gf3",children:[l.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"b"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),l.jsx("rect",{width:"560",height:"320",fill:"url(#c3)"}),e.slice(1).map(([t,s],a)=>l.jsx("line",{x1:t,y1:s,x2:280,y2:155,stroke:i,strokeOpacity:"0.18",strokeWidth:"1.3",strokeDasharray:"5 4"},a)),l.jsx("line",{x1:180,y1:85,x2:140,y2:210,stroke:i,strokeOpacity:"0.1",strokeWidth:"1"}),l.jsx("line",{x1:380,y1:85,x2:420,y2:210,stroke:i,strokeOpacity:"0.1",strokeWidth:"1"}),l.jsx("line",{x1:215,y1:42,x2:180,y2:85,stroke:i,strokeOpacity:"0.1",strokeWidth:"1"}),l.jsx("line",{x1:345,y1:42,x2:380,y2:85,stroke:i,strokeOpacity:"0.1",strokeWidth:"1"}),[50,78,108].map(t=>l.jsx("circle",{cx:280,cy:155,r:t,fill:"none",stroke:i,strokeOpacity:.1/t*40,strokeWidth:"1"},t)),e.map(([t,s],a)=>l.jsxs("g",{filter:"url(#gf3)",children:[l.jsx("circle",{cx:t,cy:s,r:a===0?22:14,fill:i,fillOpacity:a===0?.12:.07,stroke:i,strokeOpacity:a===0?.45:.22,strokeWidth:"1.5"}),l.jsx("circle",{cx:t,cy:s,r:a===0?6:3.5,fill:i,fillOpacity:"0.9"})]},a)),l.jsx("rect",{x:"420",y:"24",width:"116",height:"40",rx:"7",fill:i,fillOpacity:"0.06",stroke:i,strokeOpacity:"0.2",strokeWidth:"1"}),l.jsx("rect",{x:"430",y:"32",width:"72",height:"6",rx:"3",fill:i,fillOpacity:"0.22"}),l.jsx("rect",{x:"430",y:"44",width:"48",height:"5",rx:"2.5",fill:i,fillOpacity:"0.12"})]})}function dw({color:i}){return l.jsxs("svg",{viewBox:"0 0 560 320",className:"absolute inset-0 w-full h-full",preserveAspectRatio:"xMidYMid slice",children:[l.jsxs("defs",{children:[l.jsxs("radialGradient",{id:"c4",cx:"40%",cy:"50%",r:"65%",children:[l.jsx("stop",{offset:"0%",stopColor:i,stopOpacity:"0.18"}),l.jsx("stop",{offset:"100%",stopColor:i,stopOpacity:"0"})]}),l.jsxs("filter",{id:"gf4",children:[l.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"b"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),l.jsx("rect",{width:"560",height:"320",fill:"url(#c4)"}),[[150,150,80],[300,120,55],[230,220,45],[410,200,62],[100,250,38],[460,100,35]].map(([e,t,s],a)=>l.jsx("circle",{cx:e,cy:t,r:s,fill:i,fillOpacity:.04+a*.01,stroke:i,strokeOpacity:.1+a*.02,strokeWidth:"1.5"},a)),l.jsx("path",{d:"M185 155 C145 105 115 82 165 50 C215 18 268 48 290 100 C312 152 270 182 228 182 C186 182 185 155 185 155Z",fill:i,fillOpacity:"0.08",stroke:i,strokeOpacity:"0.22",strokeWidth:"1.5",filter:"url(#gf4)"}),l.jsx("circle",{cx:430,cy:160,r:62,fill:"none",stroke:i,strokeOpacity:"0.08",strokeWidth:"22"}),l.jsx("circle",{cx:430,cy:160,r:62,fill:"none",stroke:i,strokeOpacity:"0.5",strokeWidth:"3",strokeDasharray:"272 120",strokeDashoffset:"0",filter:"url(#gf4)"}),l.jsx("circle",{cx:430,cy:160,r:7,fill:i,fillOpacity:"0.9",filter:"url(#gf4)"}),[[250,60],[310,60]].map(({0:e,1:t},s)=>l.jsxs("g",{children:[l.jsx("rect",{x:e,y:t,width:"50",height:"88",rx:"9",fill:"none",stroke:i,strokeOpacity:"0.22",strokeWidth:"1.5"}),l.jsx("rect",{x:e+4,y:t+8,width:"42",height:"64",rx:"3",fill:i,fillOpacity:"0.04"}),[14,22,30,38,46,54,62].map(a=>l.jsx("rect",{x:e+8,y:t+a,width:a===14?30:22,height:"4",rx:"2",fill:i,fillOpacity:"0.1"},a))]},s))]})}const vn=[{id:1,color:"rgb(var(--c1))",Bg:Pl,coverImg:"/assets/images/ntgk1.mp4",year:"2026",title:"能碳管控可视化平台",sub:"Carbon Management",tags:["智慧园区","能碳管控","GIS定制","智慧工地"],role:"UX Designer · 高德 GIS 地图开发",metric:"政府验收评分 9.6",tools:["Figma","Amap Style","Geojson"],desc:"面向省政府机关打造的政务级实时能碳管控大屏，集成GIS地图，实时监控机关事务单位的能耗与碳排数据，支撑节能减排政策执行与预警决策、能耗监测、运维告警、工单管理等多维数据，实现区域能源全生命周期可视化管控与智能决策。",highlights:["原子化、原型化大屏设计，高保真 Demo 演示","支持2D/3D GIS地图切换","多终端自适应展示","管理决策效率提升60%"],screenshots:["/assets/images/ntgk2.png","/assets/images/ntgk3.mp4","/assets/images/ntgk4.png","/assets/images/ntgk5.png","/assets/images/ntgk6.png"],projectLink:"https://www.figma.com/proto/q7DqLbfB1uuKfsAVjnzhoF/%E8%8C%8C%E5%B9%B3%E3%80%81%E5%A4%A9%E6%A1%A5%E8%83%BD%E7%A2%B3%E7%AE%A1%E6%8E%A7%E5%B9%B3%E5%8F%B0%E5%8F%AF%E8%A7%86%E5%8C%96%E5%A4%A7%E5%B1%8F%E8%AE%BE%E8%AE%A1?node-id=192-15924&viewport=-406%2C252%2C0.03&t=1MvOD9WdotlUwLNd-1&scaling=contain&content-scaling=fixed&starting-point-node-id=192%3A15924&page-id=5%3A14"},{id:2,color:"#E877FF",Bg:Pl,coverImg:"/assets/images/chpgw1.mp4",year:"2025",title:"浪潮智慧建筑产品官网",sub:"Product Official Website",tags:["品牌官网","响应式","动效"],role:"Design System Lead",metric:"全案设计",tools:["Figma","Storybook","GitHub Copilot"],desc:"浪潮智慧建筑以 “数智融合、绿色低碳” 为核心，打造筑瓴智慧建筑全栈式解决方案体系，覆盖智能应用、数字底座、AI 中台、智能硬件四大维度，为建筑全生命周期提供从 “感知 - 分析 - 决策 - 执行” 的全流程智能化支撑，助力行业实现高效、绿色、高质量的数字化转型。",highlights:["企业品牌官网全链路设计","跨产品线组件复用","交互原型 Demo 设计","迭代交付效率提升2倍"],screenshots:["/assets/images/chpgw2.png","/assets/images/chpgw3.png","/assets/images/chpgw4.png","/assets/images/chpgw5.png","/assets/images/chpgw6.png"],projectLink:"https://www.figma.com/proto/UwjGPd7UgVQLSN8oE5rdeb/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%91?node-id=91-4991&viewport=-23%2C-1005%2C0.06&t=GIZyLL29GHlGTPVD-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"},{id:3,color:"#02BA53",Bg:cw,coverImg:"/assets/images/sdhs1.mp4",year:"2023",title:"山东高速满易运 App",sub:"SDHS MY-TMS Driver App",tags:["物流运输","货运平台","MY-TMS"],role:"Lead UI/UX · Product Design",metric:"转化率提升 85%",tools:["Figma","Principle","Midjourney"],desc:"山东高速集团官方货运司机服务平台，提供在线接单、路线规划、高速通行、费用结算、车辆管理、消息通知等全流程功能，帮助货车司机高效完成运输任务，实现货运流程线上化、标准化、智能化。",highlights:["深色模式适配，满足长途夜间驾驶使用","搭建完整移动端组件库，提升迭代效率","轻量化信息层级，降低司机操作认知成本","极简交互流程设计，缩短高频操作路径"],screenshots:["/assets/images/sdhs2.png","/assets/images/sdhs3.png","/assets/images/sdhs4.png","/assets/images/sdhs5.png","/assets/images/sdhs6.png"],projectLink:"https://example.com/icty-app"},{id:4,color:"#FE952C",Bg:dw,coverImg:"/assets/images/icity1.mp4",year:"2018",title:"爱城市网 App",sub:"iCity — Urban Service App",tags:["城市服务","政务服务","民生出行"],role:"UI/UX · Product Design · Motion",metric:"省级政务标杆产品",tools:["Sketch","Principle","After Effects"],desc:"省级综合性政务便民服务App，聚焦市民日常办事、民生查询、生活服务核心场景，整合政务办理、社保医保、交通出行、便民缴费、城市资讯、投诉建议等多元功能。统筹全局交互设计逻辑，简化政务操作流程，降低市民使用门槛，打造轻量化、高易用的移动端体验。",highlights:["高合规政务视觉体系，兼顾严谨性与美观度","与 UI 设计规范一致，搭建产品原件库","轻量化信息层级，优化民生办事操作路径","统一多业务线视觉体系，保障产品体验一致性"],screenshots:["/assets/images/icity2.png","/assets/images/icity3.png","/assets/images/icity4.png","/assets/images/icity5.png","/assets/images/icity6.png"],projectLink:"https://example.com/icty-web"},{id:5,color:"#34d399",Bg:Pl,coverImg:"/assets/images/PPT1.png",year:"2024",title:"PPT 设计与演示体系",sub:"Visual Communication",tags:["产品发布会","汇报模板","设计分享"],role:"视觉设计负责人 · 演示体系搭建",metric:"影视级幻灯片",tools:["PowerPoint","Keynote","ECharts"],desc:"面向政企汇报、产品发布、项目复盘的 PPT 设计体系，统一品牌视觉风格、信息层级与演示逻辑，提升内容传递效率与专业呈现质感。",highlights:["品牌视觉与版式规范高度统一","搭建 60+ 页标准化演示模板体系","数据图表可视化表达更清晰直观","整体汇报制作效率提升 70%"],screenshots:["/assets/images/PPT2.png","/assets/images/PPT3.png","/assets/images/PPT4.png","/assets/images/PPT5.png","/assets/images/PPT6.png"],projectLink:"https://example.com/energy-carbon"},{id:6,color:"#FE952C",Bg:uw,coverImg:"/assets/images/ai1.mp4",year:"2026",title:"AI-设计赋能",sub:"AI-Driven Efficiency",tags:["提效体系","智能辅助","设计自动化"],role:"AI设计体系搭建 · 提效方案负责人",metric:"效率提升 65%",tools:["Antigravity","Cursor","GitHub Copilot"],desc:"基于AI能力构建设计提效工作流，覆盖组件生成、图表可视化、原型快速迭代、设计规范落地等场景，通过智能辅助大幅缩短交付周期，提升团队整体产出质量与效率。",highlights:["搭建AI辅助设计标准化流程体系","设计稿迭代周期缩短 50% 以上","组件与图表自动生成覆盖率提升","团队整体设计效率提升 65%"],screenshots:["/assets/images/ai2.mp4","/assets/images/ai3.mp4","/assets/images/ai4.png","/assets/images/ai5.mp4","/assets/images/ai6.png"],projectLink:"https://example.com/licheng-oa-mobile"},{id:7,color:"#7c6ff7",Bg:Pl,coverImg:"/assets/images/dx1.mp4",year:"2022",title:"交互动效设计",sub:"Motion Interactive",tags:["微动画","Lottie落地","GIS动画"],role:"Product Designer · UX Lead",metric:"信息可读性提升 40%",tools:["AE","Lottie","Principle","Hype 4"],desc:"搭建全产品线标准化动效设计体系，制定统一的动效规范与落地标准，覆盖微交互、页面转场、状态反馈、组件动画等核心场景，提升产品交互体验与视觉一致性。",highlights:["制定完整动效设计规范与组件库","统一全产品线动效语言与视觉节奏","动效交付与研发对接效率提升60%","产品操作反馈与体验质感显著优化"],screenshots:["/assets/images/dx2.mp4","/assets/images/dx3.mp4","/assets/images/dx4.mp4","/assets/images/dx5.mp4","/assets/images/dx6.mp4"],projectLink:"https://example.com/licheng-oa-desktop"}];function fw({item:i,onClose:e}){if(V.useEffect(()=>(i&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[i]),!i)return null;const t=i.Bg;return l.jsx(Vs,{children:l.jsx("div",{className:"fixed inset-0 z-50 flex items-center sm:items-center justify-center px-6 sm:px-8 pt-8 sm:pt-12 pb-8",style:{background:"rgba(0,0,0,0.88)",backdropFilter:"blur(16px)"},onClick:e,children:l.jsxs("div",{className:"relative w-full sm:max-w-4xl max-h-[86vh] overflow-y-auto rounded-2xl",style:{background:"#0c0c18",border:"1px solid rgba(255,255,255,0.07)",boxShadow:`0 0 100px ${i.color}14`},onClick:s=>s.stopPropagation(),children:[l.jsx("button",{onClick:e,className:"sticky top-4 float-right mr-5 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",style:{background:"rgba(0,0,0,0.65)",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.65)",backdropFilter:"blur(8px)"},onMouseEnter:s=>{s.currentTarget.style.background="rgba(0,0,0,0.85)",s.currentTarget.style.borderColor="rgba(255,255,255,0.2)",s.currentTarget.style.color="rgba(255,255,255,0.9)"},onMouseLeave:s=>{s.currentTarget.style.background="rgba(0,0,0,0.65)",s.currentTarget.style.borderColor="rgba(255,255,255,0.12)",s.currentTarget.style.color="rgba(255,255,255,0.65)"},children:l.jsx(_i,{size:16})}),l.jsxs("div",{className:"relative h-52 overflow-hidden rounded-t-3xl sm:rounded-t-3xl hidden md:block",style:{marginTop:"-52px"},children:[l.jsx(t,{color:i.color}),l.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg,transparent 40%,#0c0c18 100%)"}}),l.jsx("div",{className:"absolute top-4 left-5",children:l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(0,0,0,0.7)",border:`1px solid ${i.color}22`,color:i.color,backdropFilter:"blur(8px)"},children:i.year})})]}),l.jsxs("div",{className:"px-6 pt-6 pb-8",children:[l.jsxs("div",{className:"flex items-start justify-between gap-3 mb-1",children:[l.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800,color:"#f0f4f8"},children:i.title}),l.jsx("span",{style:{fontSize:"2rem",fontWeight:900,color:`${i.color}20`,lineHeight:1},children:i.num})]}),l.jsx("p",{className:"text-sm mb-1",style:{color:i.color},children:i.sub}),l.jsx("p",{className:"text-xs mb-5",style:{color:"rgba(255,255,255,0.25)"},children:i.role}),l.jsx("p",{className:"mb-5",style:{fontSize:"0.875rem",color:"rgba(255,255,255,0.48)",lineHeight:1.85},children:i.desc}),l.jsx("div",{className:"grid grid-cols-1 gap-4 mb-5",children:l.jsxs("div",{children:[l.jsx("p",{className:"text-xs mb-2 tracking-wider",style:{color:"rgba(255,255,255,0.2)",letterSpacing:"0.12em"},children:"TOOLS"}),l.jsx("div",{className:"flex flex-nowrap gap-1.5 overflow-x-auto scrollbar-hide",children:i.tools.map(s=>l.jsx("span",{className:"px-2 py-1 text-xs rounded",style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.42)"},children:s},s))})]})}),l.jsxs("div",{className:"rounded-xl p-4",style:{background:`${i.color}07`,border:`1px solid ${i.color}16`},children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",style:{color:i.color},children:[l.jsx(Yo,{size:12}),l.jsx("span",{className:"text-xs tracking-wider",style:{letterSpacing:"0.1em",fontWeight:600},children:"HIGHLIGHTS"})]}),i.highlights.map(s=>l.jsxs("div",{className:"flex items-start gap-2.5 mb-2",children:[l.jsx(av,{size:11,className:"mt-0.5 shrink-0",style:{color:i.color}}),l.jsx("span",{style:{fontSize:"0.8125rem",color:"rgba(255,255,255,0.48)",lineHeight:1.7},children:s})]},s))]}),i.screenshots&&i.screenshots.length>0&&l.jsxs("div",{className:"mt-6",children:[l.jsx("p",{className:"text-xs mb-3 tracking-wider",style:{color:"rgba(255,255,255,0.2)",letterSpacing:"0.12em"},children:"PROJECT SCREENSHOTS"}),l.jsx("div",{className:"grid grid-cols-1 gap-3",children:i.screenshots.map((s,a)=>{const c=/\.mp4($|\?)/i.test(s);return l.jsxs("div",{className:"relative overflow-hidden rounded-lg",style:{background:"rgba(255,255,255,0.02)",border:`1px solid ${i.color}12`,maxWidth:"100%"},children:[l.jsx("div",{className:"absolute inset-0 skeleton-shimmer",style:{zIndex:0}}),c?l.jsx("video",{src:s,className:"w-full h-auto",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onLoadedData:f=>{const d=f.currentTarget,p=d.parentElement;if(d.style.display="",p){const m=p.querySelector(".screenshot-error");m&&m.remove();const x=p.querySelector(".skeleton-shimmer");x&&x.remove()}},onError:f=>{const d=f.currentTarget,p=d.parentElement;if(p&&(d.style.display="none",!p.querySelector(".screenshot-error"))){const m=document.createElement("div");m.className="screenshot-error absolute inset-0 flex items-center justify-center",m.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1; cursor: pointer;",m.textContent="视频加载失败 · 点击重试";let x=0,b=null,v=null;const S=()=>{b&&clearTimeout(b),v&&clearInterval(v),x<5?(x++,b=setTimeout(()=>{d.src=s+"?_retry="+Date.now()},2e3*x)):v=setInterval(()=>{d.src=s+"?_retry="+Date.now()},8e3)};m.onclick=()=>{x=0,b&&clearTimeout(b),v&&clearInterval(v),m.remove(),d.style.display="",d.src=s+"?_retry="+Date.now()},p.appendChild(m),S()}}}):l.jsx("img",{src:s,alt:`${i.title} 截图 ${a+1}`,className:"w-full h-auto",onLoad:f=>{const d=f.currentTarget,p=d.parentElement;if(d.style.display="",p){const m=p.querySelector(".screenshot-error");m&&m.remove();const x=p.querySelector(".skeleton-shimmer");x&&x.remove()}},onError:f=>{const d=f.currentTarget,p=d.parentElement;if(p&&(d.style.display="none",!p.querySelector(".screenshot-error"))){const m=document.createElement("div");m.className="screenshot-error absolute inset-0 flex items-center justify-center",m.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1; cursor: pointer;",m.textContent="图片加载失败 · 点击重试";let x=0,b=null,v=null;const S=()=>{b&&clearTimeout(b),v&&clearInterval(v),x<5?(x++,b=setTimeout(()=>{d.src=s+"?_retry="+Date.now()},2e3*x)):v=setInterval(()=>{d.src=s+"?_retry="+Date.now()},8e3)};m.onclick=()=>{x=0,b&&clearTimeout(b),v&&clearInterval(v),m.remove(),d.style.display="",d.src=s+"?_retry="+Date.now()},p.appendChild(m),S()}}})]},a)})})]}),i.projectLink&&l.jsx("div",{className:"mt-6",children:l.jsxs("a",{href:i.projectLink,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm transition-all duration-300",style:{background:`${i.color}`,color:"#05050a",fontWeight:700,boxShadow:`0 0 30px ${i.color}40`},onMouseEnter:s=>{s.currentTarget.style.boxShadow=`0 0 40px ${i.color}60`,s.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:s=>{s.currentTarget.style.boxShadow=`0 0 30px ${i.color}40`,s.currentTarget.style.transform="translateY(0)"},children:[l.jsx(of,{size:16,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"}),"查看完整项目"]})})]})]})})})}function Xi({item:i,tall:e,imageHeight:t,onOpen:s}){const[a,c]=V.useState(!1),f=i.Bg,d=V.useRef({count:0,timer:null,interval:null});return V.useEffect(()=>()=>{d.current.timer&&clearTimeout(d.current.timer),d.current.interval&&clearInterval(d.current.interval)},[]),l.jsx(ug,{glowColor:aw(i.color),borderRadius:"1rem",borderWidth:5,intensity:2,children:l.jsxs("div",{className:"group relative rounded-2xl overflow-hidden cursor-pointer will-change-transform",style:{transform:"none",transition:"transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",boxShadow:a?`0 20px 60px rgba(0,0,0,0.5), 0 0 50px ${i.color}08`:"none",background:"#0e0e1a",outline:"none",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",isolation:"isolate",backgroundColor:"#0e0e1a"},onMouseEnter:()=>c(!0),onMouseLeave:()=>{c(!1)},onClick:s,children:[l.jsxs("div",{className:"relative overflow-hidden rounded-t-2xl",style:{height:t||(e?300:260),WebkitBorderTopLeftRadius:"14px",WebkitBorderTopRightRadius:"14px",borderTopLeftRadius:"14px",borderTopRightRadius:"14px",WebkitBorderBottomLeftRadius:"0",WebkitBorderBottomRightRadius:"0",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},children:[l.jsx("div",{className:"absolute inset-0 skeleton-shimmer rounded-t-2xl",style:{zIndex:0}}),i.coverImg&&(/\.mp4($|\?)/i.test(i.coverImg)?l.jsx("video",{src:i.coverImg,className:"absolute inset-0 w-full h-full object-cover object-top",style:{opacity:.85,transform:a?"scale(1.06)":"scale(1)",transition:"transform 0.2s ease-out",willChange:"transform",borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onLoadedData:m=>{const x=m.currentTarget,b=x.parentElement;if(d.current.timer&&(clearTimeout(d.current.timer),d.current.timer=null),d.current.interval&&(clearInterval(d.current.interval),d.current.interval=null),d.current.count=0,x.style.display="",b){const v=b.querySelector(".img-error-fallback");v&&v.remove();const S=b.querySelector(".skeleton-shimmer");S&&S.remove()}},onError:m=>{const x=m.currentTarget,b=x.parentElement;if(!b)return;if(x.style.display="none",!b.querySelector(".img-error-fallback")){const S=document.createElement("div");S.className="img-error-fallback absolute inset-0 flex items-center justify-center",S.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1; cursor: pointer;",S.textContent="视频加载失败 · 点击重试",S.onclick=()=>{d.current.timer&&clearTimeout(d.current.timer),d.current.interval&&clearInterval(d.current.interval),d.current.count=0,S.remove(),x.style.display="",x.src=i.coverImg+"?_retry="+Date.now()},b.insertBefore(S,b.firstChild)}(()=>{const S=d.current.count;S<5?(d.current.count=S+1,d.current.timer=setTimeout(()=>{x.src=i.coverImg+"?_retry="+Date.now()},2e3*(S+1))):d.current.interval=setInterval(()=>{x.src=i.coverImg+"?_retry="+Date.now()},8e3)})()}}):l.jsx("img",{src:i.coverImg,alt:i.title,className:"absolute inset-0 w-full h-full object-cover object-top cover-image",style:{opacity:.85,transform:a?"scale(1.06)":"scale(1)",transition:"transform 0.2s ease-out",willChange:"transform",WebkitBorderTopLeftRadius:"16px",WebkitBorderTopRightRadius:"16px",borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},onLoad:m=>{const x=m.currentTarget,b=x.parentElement;if(d.current.timer&&(clearTimeout(d.current.timer),d.current.timer=null),d.current.interval&&(clearInterval(d.current.interval),d.current.interval=null),d.current.count=0,x.style.display="",b){const v=b.querySelector(".img-error-fallback");v&&v.remove()}},onError:m=>{const x=m.currentTarget,b=x.parentElement;if(!b)return;if(x.style.display="none",!b.querySelector(".img-error-fallback")){const S=document.createElement("div");S.className="img-error-fallback absolute inset-0 flex items-center justify-center",S.style.cssText="background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1; cursor: pointer;",S.textContent="图片加载失败 · 点击重试",S.onclick=()=>{d.current.timer&&clearTimeout(d.current.timer),d.current.interval&&clearInterval(d.current.interval),d.current.count=0,S.remove(),x.style.display="",x.src=i.coverImg+"?_retry="+Date.now()},b.insertBefore(S,b.firstChild)}(()=>{const S=d.current.count;S<5?(d.current.count=S+1,d.current.timer=setTimeout(()=>{x.src=i.coverImg+"?_retry="+Date.now()},2e3*(S+1))):d.current.interval=setInterval(()=>{x.src=i.coverImg+"?_retry="+Date.now()},8e3)})()}})),!i.coverImg&&l.jsx(f,{color:i.color}),l.jsx("div",{className:"absolute inset-0 pointer-events-none transition-opacity duration-300 md:block hidden",style:{background:"linear-gradient(180deg, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.8) 100%)",opacity:a?.01:.9,borderTopLeftRadius:"16px",borderTopRightRadius:"16px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"}}),l.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(180deg,transparent 0%,rgba(16,16,26,0.01) 80%,rgba(16,16,26,0.01) 100%)",borderTopLeftRadius:"16px",borderTopRightRadius:"16px"}}),l.jsx("div",{className:"absolute top-4 left-4",children:l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-lg",style:{background:"rgba(16,16,26,0.8)",border:`1px solid ${i.color}22`,color:i.color,backdropFilter:"blur(8px)"},children:i.year})})]}),l.jsxs("div",{className:"px-5 py-10 md:py-5 md:px-5 bg-[#60606040] bg-[#60606042] m-[0px]",children:[l.jsxs("div",{className:"flex items-start justify-between gap-3 mb-6 md:mb-2",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-0 mb-1.5 md:mb-0.5",children:[l.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:`${i.color}50`,letterSpacing:"0.08em"},children:i.num}),l.jsx("h3",{style:{fontSize:"0.9375rem",fontWeight:700,color:"#f0f4f8"},children:i.title})]}),l.jsx("p",{className:"text-xs",style:{color:i.color,opacity:.75},children:i.sub})]}),l.jsx("span",{className:"shrink-0 text-xs px-2.5 py-1 rounded-lg",style:{color:i.color,fontWeight:600,whiteSpace:"nowrap",background:`color-mix(in srgb, ${i.color} 12%, transparent)`,border:`1px solid color-mix(in srgb, ${i.color} 14%, transparent)`},children:i.metric})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5 mt-6 md:mt-3",children:i.tags.map(p=>l.jsx("span",{className:"text-xs px-2 py-0.5 rounded",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.3)"},children:p},p))})]})]})})}function hw(){const[i,e]=V.useState(null),{ref:t,vis:s}=lw(0),{theme:a}=Zs(),[c,f]=V.useState(!1);return V.useEffect(()=>{const d=()=>{f(window.innerWidth>=1024)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),l.jsxs(l.Fragment,{children:[l.jsxs("section",{id:"portfolio",ref:t,className:"relative overflow-visible md:overflow-hidden",style:{background:"var(--bg)",padding:"80px 0 140px"},children:[l.jsx("div",{className:"absolute inset-x-0 top-0 h-px pointer-events-none",style:{background:`linear-gradient(90deg,transparent 10%,${a.purple}33 50%,transparent 90%)`}}),l.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,lineHeight:1,color:"rgba(255,255,255,0.05)",letterSpacing:"0.05em"},children:"WORKS"}),l.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 mb-20 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(30px)"},children:[l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-4 mb-5",children:[l.jsx("span",{className:"text-xm tracking-widest",style:{color:a.purple,letterSpacing:"0.2em",fontWeight:600},children:"SELECTED WORKS"}),l.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${a.purple}4d,transparent)`}})]}),l.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:"#f0f4f8",lineHeight:1.05,letterSpacing:"-0.04em"},children:"其他精选作品"})]}),l.jsx("div",{className:"lg:max-w-xs",children:l.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(255,255,255,0.28)",lineHeight:1.85},children:["点击卡片查看完整项目案例",l.jsx("br",{}),"包含设计流程与核心数据成果",l.jsx("br",{}),"以及AI驱动的全链路设计实践"]})})]}),l.jsx("div",{className:"hidden md:block",children:l.jsxs("div",{className:"grid lg:grid-cols-12 gap-4",children:[l.jsx("div",{className:"lg:col-span-7 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"60ms"},children:l.jsx(Xi,{item:vn[0],tall:!0,onOpen:()=>e(vn[0]),imageHeight:c?"320px":"200px"})}),l.jsx("div",{className:"lg:col-span-5 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"130ms"},children:l.jsx(Xi,{item:vn[1],tall:!0,onOpen:()=>e(vn[1]),imageHeight:c?"320px":"200px"})}),l.jsx("div",{className:"lg:col-span-6 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"200ms"},children:l.jsx(Xi,{item:vn[2],onOpen:()=>e(vn[2]),imageHeight:c?"330px":"200px"})}),l.jsx("div",{className:"lg:col-span-6 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"260ms"},children:l.jsx(Xi,{item:vn[3],onOpen:()=>e(vn[3]),imageHeight:c?"330px":"200px"})}),l.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"320ms"},children:l.jsx(Xi,{item:vn[4],onOpen:()=>e(vn[4]),imageHeight:c?"220px":"200px"})}),l.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"380ms"},children:l.jsx(Xi,{item:vn[5],onOpen:()=>e(vn[5]),imageHeight:c?"220px":"200px"})}),l.jsx("div",{className:"lg:col-span-4 transition-all duration-700",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(28px)",transitionDelay:"440ms"},children:l.jsx(Xi,{item:vn[6],onOpen:()=>e(vn[6]),imageHeight:c?"220px":"200px"})})]})}),l.jsx("div",{className:"md:hidden",children:l.jsx(ow,{onItemClick:e,items:vn,paused:!!i})})]})]}),l.jsx(fw,{item:i,onClose:()=>e(null)})]})}const Vo="#0c0b18",pw="#f0eef9";function mw(i=0){const e=V.useRef(null),[t,s]=V.useState(!1);return V.useEffect(()=>{const a=new IntersectionObserver(([c])=>{c.isIntersecting&&(setTimeout(()=>s(!0),i),a.disconnect())},{threshold:.04});return e.current&&a.observe(e.current),()=>a.disconnect()},[i]),{ref:e,vis:t}}const fd=[{name:"精英校友奖",issuer:"集团招聘宣讲会",year:"2019",color:"#00b896",icon:"G"},{name:"十佳优秀员工",issuer:"山东爱城市网科技有限公司",year:"2020",color:"#7c6ff7",icon:"S"},{name:"集团 Logo 设计一等奖",issuer:"浪潮集团",year:"2020",color:"#f472b6",icon:"L"},{name:"创新人才奖",issuer:"浪潮集团",year:"2022",color:"#34d399",icon:"C"},{name:"山东省中级工程师职称",issuer:"山东省人社厅",year:"2024",color:"#fb923c",icon:"M"},{name:"已授权发明专利 4 项",issuer:"国家知识产权局",year:"2025",color:"#38bdf8",icon:"Z"}],gw=["App Design","Mobile Design","Saas Design","OA Design","Visual Design","Large Screen","Design Systems","Component Library","AI Workflow","Prototyping","Logo Design","Brand Identity","Motion Design","Front-End","BI / Data Vis","HTML+CSS","Lotties","设计提效","政务服务","TMS System","能碳管控","智慧园区","智慧工地","产品发布会PPT"];function o0({c:i,delay:e}){const[t,s]=V.useState(!1),a=V.useRef(null),[c,f]=V.useState(!1);return V.useEffect(()=>{const d=new IntersectionObserver(([p])=>{p.isIntersecting&&(setTimeout(()=>f(!0),e),d.disconnect())},{threshold:.1});return a.current&&d.observe(a.current),()=>d.disconnect()},[e]),l.jsxs("div",{ref:a,className:"flex items-center gap-3 p-4 rounded-2xl cursor-default select-none transition-all duration-250",style:{background:t?"white":"rgba(255,255,255,0.5)",border:t?`1px solid ${i.color}25`:"1px solid rgba(12,11,24,0.06)",transform:t?"translateY(-3px) scale(1.01)":c?"translateY(0) scale(1)":"translateY(12px) scale(0.97)",opacity:c?1:0,transition:`all 0.4s cubic-bezier(0.34,1.2,0.64,1) ${e}ms`,boxShadow:t?`0 8px 28px rgba(0,0,0,0.1), 0 0 20px ${i.color}10`:"none"},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[l.jsx("div",{className:"w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-sm transition-all duration-200",style:{background:t?`${i.color}18`:`${i.color}0e`,border:`1px solid ${i.color}20`,color:i.color,fontWeight:800,boxShadow:t?`0 0 12px ${i.color}20`:"none"},children:i.icon}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{style:{fontSize:"0.8125rem",fontWeight:600,color:Vo,lineHeight:1.3},children:i.name}),l.jsx("p",{className:"text-xs mt-0.5 truncate",style:{color:"rgba(12,11,24,0.38)"},children:i.issuer})]}),l.jsx("span",{className:"text-xs shrink-0",style:{color:i.color,fontWeight:700},children:i.year})]})}function xw(){const{ref:i,vis:e}=mw(.03),{theme:t}=Zs();return l.jsxs("section",{id:"education",ref:i,className:"relative overflow-hidden",style:{background:pw,padding:"80px 0 140px"},children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.02]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"160px"}}),l.jsx("div",{className:"absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden lg:block",style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,color:"rgba(12,11,24,0.03)",lineHeight:1,letterSpacing:"0.05em"},children:"EDUCATION"}),l.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[60px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]",children:[l.jsx("span",{className:"text-xm tracking-widest",style:{color:t.purple,letterSpacing:"0.2em",fontWeight:600},children:"BACKGROUND"}),l.jsx("div",{className:"flex-1 h-px",style:{background:`linear-gradient(90deg,${t.purple}66,transparent)`}})]}),l.jsx("h2",{style:{fontSize:"clamp(2.0rem,5vw,3.0rem)",fontWeight:900,color:Vo,lineHeight:1.05,letterSpacing:"-0.04em"},children:"教育 & 认证"})]}),l.jsx("div",{className:"lg:max-w-xs",children:l.jsxs("p",{style:{fontSize:"0.9375rem",color:"rgba(12,11,24,0.42)",lineHeight:1.85},children:["主导搭建 Quick UI 企业级设计体系",l.jsx("br",{}),"累计开展团队内部分享30+场",l.jsx("br",{}),"多项专业认证，持续学习 AI 与新兴技术"]})})]}),l.jsxs("div",{className:"grid lg:grid-cols-[1fr_1px_1fr] gap-0",children:[l.jsxs("div",{className:"pr-0 lg:pr-12",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[l.jsx(zl,{size:14,style:{color:t.purple}}),l.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"EDUCATION"})]}),l.jsxs("div",{className:"relative flex gap-5 mb-2 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)"},children:[l.jsxs("div",{className:"flex flex-col items-center shrink-0",style:{width:40},children:[l.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(124,111,247,0.1)",border:"2px solid rgb(var(--c2))",boxShadow:"0 0 20px rgba(var(--c2),0.2)"},children:l.jsx(zl,{size:16,style:{color:t.purple}})}),l.jsx("div",{className:"w-px mt-2 flex-1",style:{background:"rgba(12,11,24,0.1)",minHeight:24}})]}),l.jsxs("div",{className:"pb-6",children:[l.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-2",children:[l.jsxs("div",{children:[l.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:Vo},children:"中国石油大学（华东） · 储运与建筑学院"}),l.jsx("p",{className:"text-sm mt-0.5",style:{color:t.purple,fontWeight:600},children:"建筑环境与能源应用工程 · 本科学位"})]}),l.jsxs("div",{className:"text-right hidden sm:block",children:[l.jsx("span",{className:"text-xs",style:{color:"rgba(12,11,24,0.35)"},children:"2011 — 2015"}),l.jsx("p",{className:"text-xs mt-0.5",style:{color:"rgba(12,11,24,0.3)"},children:"GPA 4.3 / 5.0"})]})]}),l.jsx("p",{className:"mb-4",style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.48)",lineHeight:1.85},children:"自主深耕 UI/UX 设计与数据可视化领域，深度理解建筑、能碳、园区业务逻辑，设计方案落地性强，能高效对接业务与技术团队，形成 “工程思维 + 设计落地” 的独特优势"}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:["专业前 10%","优秀学生干部","校级奖学金 ×3"].map(s=>l.jsxs("div",{className:"rounded-xl p-2.5 text-center",style:{background:"rgba(124,111,247,0.06)",border:"1px solid rgba(124,111,247,0.12)"},children:[l.jsx(ku,{size:12,className:"mx-auto mb-1",style:{color:t.purple}}),l.jsx("span",{style:{fontSize:"0.6875rem",color:"rgba(12,11,24,0.5)",lineHeight:1.4,display:"block"},children:s})]},s))})]})]}),l.jsxs("div",{className:"relative flex gap-5 mb-2 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"120ms"},children:[l.jsxs("div",{className:"flex flex-col items-center shrink-0",style:{width:40},children:[l.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(0,240,200,0.08)",border:"2px solid rgba(0,240,200,0.5)"},children:l.jsx(ku,{size:14,style:{color:"#00b896"}})}),l.jsx("div",{className:"w-px mt-2 flex-1",style:{background:"rgba(12,11,24,0.1)",minHeight:24}})]}),l.jsxs("div",{className:"pb-6",children:[l.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-2",children:[l.jsxs("div",{children:[l.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:Vo},children:"Google UX Design Certificate"}),l.jsx("p",{className:"text-sm mt-0.5",style:{color:"#11AF95",fontWeight:600},children:"专业认证 · Coursera"})]}),l.jsx("span",{className:"text-xs hidden sm:block",style:{color:"rgba(12,11,24,0.35)"},children:"2017"})]}),l.jsx("p",{className:"mb-4",style:{fontSize:"0.8125rem",color:"rgba(12,11,24,0.48)",lineHeight:1.85},children:"系统学习 UI/UX 设计全链路技能，覆盖 PS、AI、AE、C4D 视觉设计工具，Axure、Sketch 原型交互工具，以及 HTML+CSS 前端基础与用户研究方法论，完成从视觉到交互的完整设计能力构建"}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:["全栈设计工具掌握","Google 官方认证","团队项目第一名"].map(s=>l.jsxs("div",{className:"rounded-xl p-2.5 text-center",style:{background:"rgba(0,240,200,0.08)",border:"1px solid rgba(0,240,200,0.2)"},children:[l.jsx(wv,{size:12,className:"mx-auto mb-1",style:{color:"#00b896"}}),l.jsx("span",{style:{fontSize:"0.6875rem",color:"rgba(12,11,24,0.5)",lineHeight:1.4,display:"block"},children:s})]},s))})]})]}),l.jsxs("div",{className:"relative flex gap-5 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"200ms"},children:[l.jsx("div",{className:"shrink-0 flex items-s't",style:{width:40},children:l.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center z-10",style:{background:"rgba(251,146,60,0.08)",border:"2px dashed rgba(251,146,60,0.3)"},children:l.jsx(N1,{size:14,style:{color:"#fb923c"}})})}),l.jsxs("div",{className:"flex-1 rounded-2xl p-4",style:{background:"rgba(251,146,60,0.05)",border:"1px solid rgba(251,146,60,0.14)"},children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-pulse",style:{background:"#fb923c",boxShadow:"0 0 8px #fb923c"}}),l.jsx("span",{className:"text-xs",style:{color:"#fb923c",fontWeight:700},children:"进行中"})]}),l.jsx("p",{style:{fontSize:"0.875rem",fontWeight:600,color:Vo},children:"Advanced AI for UX"}),l.jsx("p",{className:"text-xs mt-0.5",style:{color:"rgba(12,11,24,0.38)"},children:"Stanford Online · 持续学习中…"})]})]})]}),l.jsx("div",{className:"hidden lg:block my-4",style:{background:"linear-gradient(180deg,transparent,rgba(12,11,24,0.1) 20%,rgba(12,11,24,0.1) 80%,transparent)"}}),l.jsxs("div",{className:"pl-0 lg:pl-12 mt-12 lg:mt-0",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[l.jsx(ku,{size:13,style:{color:"#f472b6"}}),l.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"CERTIFICATIONS"})]}),l.jsxs("div",{className:"grid sm:grid-cols-2 gap-2.5 mb-12",children:[l.jsx("div",{className:"hidden md:block",children:l.jsx(o0,{c:fd[0],delay:65},fd[0].name)}),fd.slice(1).map((s,a)=>l.jsx(o0,{c:s,delay:65},s.name))]}),l.jsxs("div",{className:"hidden md:block",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full",style:{background:"#f472b6"}}),l.jsx("span",{className:"text-xs tracking-widest",style:{color:"rgba(12,11,24,0.3)",letterSpacing:"0.16em"},children:"EXPERTISE KEYWORDS"})]}),l.jsx("div",{className:"flex flex-wrap gap-2",children:gw.map((s,a)=>l.jsx("span",{className:"px-3 py-1.5 rounded-lg text-xs cursor-default select-none transition-all duration-300",style:{background:"rgba(255,255,255,0.6)",border:"1px solid rgba(12,11,24,0.08)",color:"rgba(12,11,24,0.5)",opacity:e?1:0,transform:e?"scale(1)":"scale(0.88)",transition:"opacity 0.4s, transform 0.4s, background 0s, border-color 0s, color 0s",transitionDelay:"0ms"},onMouseEnter:c=>{const f=["#00b896","#7c6ff7","#f472b6","#34d399","#fb923c","#38bdf8"],d=f[a%f.length];c.currentTarget.style.background=`${d}12`,c.currentTarget.style.borderColor=`${d}22`,c.currentTarget.style.color=d},onMouseLeave:c=>{c.currentTarget.style.background="rgba(255,255,255,0.6)",c.currentTarget.style.borderColor="rgba(12,11,24,0.08)",c.currentTarget.style.color="rgba(12,11,24,0.5)"},children:s},s))})]})]})]})]})]})}const vw="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function yw(i){const[e,t]=V.useState(!1),s=()=>{t(!0)},{src:a,alt:c,style:f,className:d,...p}=i;return e?l.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${d??""}`,style:f,children:l.jsx("div",{className:"flex items-center justify-center w-full h-full",children:l.jsx("img",{src:vw,alt:"Error loading image",...p,"data-original-url":a})})}):l.jsx("img",{src:a,alt:c,className:d,style:f,...p,onError:s})}const Sw="/assets/cd928feb81fb8ff325ac41aaef07a759-BH8O_PaO.jpg",_w=({size:i=20,color:e="currentColor"})=>l.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"#07C160",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M10.0014 14.6757C10.0011 14.6551 10.001 14.6345 10.001 14.6138C10.001 12.1055 12.0175 9.99564 14.7539 9.38092C14.3904 7.07873 11.9602 5.19995 8.90098 5.19995C5.58037 5.19995 3.00098 7.41344 3.00098 9.9793C3.00098 10.9487 3.36131 11.88 4.04082 12.6781C4.0728 12.7157 4.12443 12.7717 4.19342 12.8427C4.78537 13.4517 5.13709 14.2457 5.19546 15.0805C5.90857 14.6683 6.74285 14.5123 7.55832 14.6392C7.72416 14.665 7.85986 14.6847 7.96345 14.6982C8.27111 14.7383 8.58419 14.7586 8.90098 14.7586C9.27825 14.7586 9.64595 14.7301 10.0014 14.6757ZM10.4581 16.627C9.95467 16.7133 9.43399 16.7586 8.90098 16.7586C8.49441 16.7586 8.09502 16.7323 7.70499 16.6815C7.58312 16.6656 7.4317 16.6436 7.25073 16.6154C6.87693 16.5572 6.49436 16.6321 6.1713 16.8268L4.26653 17.9745C4.12052 18.0646 3.94891 18.1057 3.77733 18.0916C3.33814 18.0554 3.01178 17.6744 3.04837 17.2405L3.19859 15.4596C3.23664 15.0086 3.07664 14.5632 2.75931 14.2367C2.66182 14.1364 2.5814 14.0491 2.51802 13.9747C1.56406 12.8542 1.00098 11.4732 1.00098 9.9793C1.00098 6.23517 4.53793 3.19995 8.90098 3.19995C12.9601 3.19995 16.3041 5.82699 16.7504 9.20788C20.1225 9.36136 22.801 11.723 22.801 14.6138C22.801 15.8068 22.3448 16.9097 21.572 17.8044C21.5206 17.8639 21.4555 17.9336 21.3765 18.0137C21.1194 18.2744 20.9898 18.6301 21.0206 18.9903L21.1423 20.4125C21.172 20.759 20.9076 21.0632 20.5518 21.0921C20.4128 21.1034 20.2738 21.0706 20.1555 20.9986L18.6124 20.0821C18.3506 19.9266 18.0407 19.8668 17.7379 19.9133C17.5913 19.9358 17.4686 19.9533 17.3699 19.966C17.0539 20.0066 16.7303 20.0277 16.401 20.0277C13.7074 20.0277 11.4025 18.6201 10.4581 16.627ZM17.4346 17.9364C18.0019 17.8494 18.5793 17.911 19.1105 18.1111C19.2492 17.5503 19.5373 17.0304 19.9524 16.6094C20.0027 16.5585 20.0388 16.5198 20.0584 16.4971C20.5467 15.9318 20.801 15.2839 20.801 14.6138C20.801 12.8095 18.8983 11.2 16.401 11.2C13.9037 11.2 12.001 12.8095 12.001 14.6138C12.001 16.4181 13.9037 18.0277 16.401 18.0277C16.6424 18.0277 16.8809 18.0124 17.115 17.9823C17.1957 17.972 17.3029 17.9566 17.4346 17.9364Z"})});function bw(i=0){const e=V.useRef(null),[t,s]=V.useState(!1);return V.useEffect(()=>{const a=new IntersectionObserver(([c])=>{c.isIntersecting&&(setTimeout(()=>s(!0),i),a.disconnect())},{threshold:.04});return e.current&&a.observe(e.current),()=>a.disconnect()},[i]),{ref:e,vis:t}}function a0({children:i,onClick:e,primary:t,color:s}){const a=V.useRef(null),[c,f]=V.useState({x:0,y:0}),[d,p]=V.useState(!1);return l.jsx("button",{ref:a,className:"relative flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm overflow-hidden",style:{background:t?"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))":"transparent",border:t?"none":"1px solid rgba(var(--c1), 0.3)",color:t?"var(--bg)":"rgba(var(--c1), 0.3)",fontWeight:t?700:500,transform:`translate(${c.x}px,${c.y}px)`,transition:d?"transform 0.2s ease-out,box-shadow 0.2s":"transform 0.5s cubic-bezier(0.23,1,0.32,1),box-shadow 0.2s",boxShadow:d&&t?"0 0 35px rgba(var(--c1), 0.4)":"none",cursor:"default"},onMouseMove:m=>{const x=a.current.getBoundingClientRect();f({x:(m.clientX-x.left-x.width/2)*.4,y:(m.clientY-x.top-x.height/2)*.4})},onMouseEnter:()=>p(!0),onMouseLeave:()=>{p(!1),f({x:0,y:0})},onClick:e,children:i})}const Mw=[{icon:l.jsx(qo,{size:15}),label:"Email",value:"quweijia@vip.qq.com",href:"mailto:quweijia@vip.qq.com",color:"rgb(var(--c1))"},{icon:l.jsx(e1,{size:15}),label:"PhoneCall",value:"156-6279-6885",href:" ",color:"#f0f4f8"},{icon:l.jsx(_w,{size:15}),label:"WeChat",value:"vic-qu",href:" ",color:"#07C160"},{icon:l.jsx(y1,{size:15}),label:"X / Twitter",value:"@vicqu_design",href:"https://twitter.com/vicqu_design",color:"#7c6ff7",hideOnMobile:!0}],ww=[{label:"Response Rate",value:"97%",color:"rgb(var(--c1))"},{label:"Reply Time",value:"< 24h",color:"#7c6ff7"},{label:"Remote OK",value:"Yes",color:"#f472b6"},{label:"Availability",value:"On",color:"#34d399"}];function Ew({s:i,onQRCodeClick:e,className:t=""}){const[s,a]=V.useState(!1),[c,f]=V.useState(!1),d=i.label==="Email",p=i.label==="PhoneCall",m=i.label==="WeChat",x=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),b=async v=>{if(d){v.preventDefault();const S="quweijia@vip.qq.com";try{await navigator.clipboard.writeText(S),f(!0),setTimeout(()=>f(!1),2e3)}catch{try{const w=document.createElement("textarea");w.value=S,w.style.position="fixed",w.style.left="-999999px",w.style.top="-999999px",document.body.appendChild(w),w.focus(),w.select();const _=document.execCommand("copy");document.body.removeChild(w),_&&(f(!0),setTimeout(()=>f(!1),2e3))}catch(w){console.error("Failed to copy email:",w)}}}else if(p)if(x)window.location.href="tel:15662796885";else{v.preventDefault();const S="15662796885";try{await navigator.clipboard.writeText(S),f(!0),setTimeout(()=>f(!1),2e3)}catch{try{const w=document.createElement("textarea");w.value=S,w.style.position="fixed",w.style.left="-999999px",w.style.top="-999999px",document.body.appendChild(w),w.focus(),w.select();const _=document.execCommand("copy");document.body.removeChild(w),_&&(f(!0),setTimeout(()=>f(!1),2e3))}catch(w){console.error("Failed to copy phone:",w)}}}else m&&(v.preventDefault(),e&&e(),x&&setTimeout(()=>{window.location.href="weixin://"},100))};return l.jsxs("a",{href:p&&x?"tel:15662796885":i.href,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-3 p-4 rounded-xl transition-all duration-200 ${t}`,style:{background:s?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.06)",border:s?`1px solid ${i.color}25`:"1px solid rgba(255,255,255,0.12)",transform:s?"translateX(6px)":"none",textDecoration:"none",cursor:d||p||m?"pointer":"default"},onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:b,children:[l.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200",style:{background:`${i.color}10`,border:`1px solid ${i.color}18`,color:i.color,boxShadow:s?`0 0 14px ${i.color}20`:"none"},children:i.icon}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{style:{fontSize:"0.8125rem",fontWeight:600,color:"#f0f4f8"},children:i.label}),l.jsx("p",{className:"text-xs mt-1.5 truncate",style:{color:"rgba(255,255,255,0.5)"},children:i.value})]}),d||p&&!x||m?c?l.jsx(m0,{size:11,style:{color:i.color,opacity:1,transition:"opacity 0.2s",flexShrink:0}}):l.jsx(y0,{size:11,style:{color:"rgba(255,255,255,0.2)",opacity:s?1:0,transition:"opacity 0.2s",flexShrink:0}}):l.jsx(lf,{size:11,style:{color:"rgba(255,255,255,0.2)",opacity:s?1:0,transition:"opacity 0.2s",flexShrink:0}})]})}function Tw(){const{ref:i,vis:e}=bw(.04),{theme:t}=Zs(),[s,a]=V.useState(""),[c,f]=V.useState(!1),[d,p]=V.useState(!1),[m,x]=V.useState(!1),[b,v]=V.useState(!1),[S,M]=V.useState(!1),w=()=>{const R=document.createElement("a");R.href="https://raw.githubusercontent.com/quweijia/file/main/1%E3%80%81UI%20%E4%B8%BB%E7%AE%A1-%E6%9B%B2%E7%BB%B4%E7%94%B2-15662796885.pdf",R.download="曲维甲-UI主管-简历.pdf",R.target="_blank",R.rel="noopener noreferrer",document.body.appendChild(R),R.click(),document.body.removeChild(R)},_=()=>{if(!s.trim())return;if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const D=encodeURIComponent(s);window.location.href=`sms:15662796885${/iPhone|iPad|iPod/i.test(navigator.userAgent)?"&":"?"}body=${D}`,setTimeout(()=>{a("")},500)}else M(!0)},y=async()=>{const R="quweijia@vip.qq.com";try{await navigator.clipboard.writeText(R),v(!0),setTimeout(()=>{v(!1)},2e3)}catch{try{const T=document.createElement("textarea");T.value=R,T.style.position="fixed",T.style.left="-999999px",T.style.top="-999999px",document.body.appendChild(T),T.focus(),T.select();const z=document.execCommand("copy");document.body.removeChild(T),z&&(v(!0),setTimeout(()=>{v(!1)},2e3))}catch(T){console.error("Failed to copy email:",T)}}};return l.jsxs("section",{id:"contact",ref:i,className:"relative overflow-hidden",style:{background:"var(--bg)",padding:"180px 0 20px"},children:[l.jsx("div",{className:"absolute inset-x-0 top-0 h-px pointer-events-none",style:{background:`linear-gradient(90deg,transparent 5%,${t.cyan}2e 50%,transparent 95%)`}}),l.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none",style:{background:`radial-gradient(ellipse,${t.cyan}4d 0%,transparent 70%)`,filter:"blur(30px)"}}),l.jsx("div",{className:"absolute inset-x-0 top-0 flex items-start justify-center overflow-hidden pointer-events-none select-none",style:{paddingTop:"360px"},children:l.jsx("span",{style:{fontSize:"clamp(50px,16vw,200px)",fontWeight:900,letterSpacing:"0.05em",color:"rgba(255,255,255,0.018)",whiteSpace:"nowrap"},children:"Vic Qu"})}),l.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-10 relative z-10",children:[l.jsxs("div",{className:"text-center transition-all duration-700 mx-[0px] mt-6 mb-[80px]",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)"},children:[l.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:t.cyan,letterSpacing:"0.22em",fontWeight:600},children:"GET IN TOUCH"}),l.jsxs("h2",{style:{fontSize:"clamp(2.8rem,7vw,5.5rem)",fontWeight:900,lineHeight:1.2,letterSpacing:"0em",color:"#f0f4f8"},children:["一起创造",l.jsx("br",{}),l.jsx("span",{style:{background:"linear-gradient(135deg, rgb(var(--c1)) 0%, rgb(var(--c2)) 25%, rgb(var(--c3)) 50%, rgb(var(--c2)) 75%, rgb(var(--c1)) 100%)",backgroundSize:"200% 200%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline-block",animation:"flowGradient 6s ease infinite"},children:"卓越的设计"})]}),l.jsxs("div",{style:{position:"relative",width:"100%",margin:"1.25rem 0"},children:[l.jsxs("svg",{viewBox:"0 0 400 20",className:"mx-auto",style:{width:"min(400px,80%)",opacity:.5,overflow:"visible"},children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:"waveGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:t.cyan,stopOpacity:"0"}),l.jsx("stop",{offset:"30%",stopColor:t.cyan,stopOpacity:"1"}),l.jsx("stop",{offset:"70%",stopColor:t.cyan,stopOpacity:"1"}),l.jsx("stop",{offset:"100%",stopColor:t.cyan,stopOpacity:"0"})]})}),l.jsx("path",{d:"M0 10 C40 2 80 18 120 10 S200 2 240 10 S320 18 360 10 S390 4 400 10",fill:"none",stroke:"url(#waveGradient)",strokeWidth:"2",strokeDasharray:"80 400",style:{animation:"waveMove 3s linear infinite",willChange:"stroke-dashoffset",transform:"translateZ(0)"}})]}),l.jsx("style",{children:`
    @keyframes waveMove {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: -440; }
    }
  `})]}),l.jsxs("p",{className:"max-w-2xl mx-auto",style:{fontSize:"1rem",color:"rgba(255,255,255,0.35)",lineHeight:1.85},children:[l.jsx("span",{className:"font-bold text-[rgba(var(--c1),0.8)]",children:"岗位意向：UI/UX 设计主管职位"}),l.jsx("br",{}),"带领设计团队搭建体系化设计系统，通过设计管理驱动业务价值增长",l.jsx("span",{className:"inline md:hidden",children:"，"}),l.jsx("br",{className:"hidden md:inline"}),"承接从0到1的企业级设计规范与团队建设工作"]}),l.jsxs("div",{className:"inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"},children:[l.jsx(b0,{size:11,style:{color:"rgba(255,255,255,0.3)"}}),l.jsx("span",{className:"text-xs",style:{color:"rgba(255,255,255,0.3)"},children:"济南 · 中国，接受全球远程机会"})]}),l.jsxs("div",{className:"hidden md:flex flex-wrap justify-center gap-4 mt-8",children:[l.jsxs("div",{className:"relative",children:[l.jsxs(a0,{primary:!0,onClick:()=>x(!m),children:[l.jsx(qo,{size:14})," 发送邮件"]}),m&&l.jsxs("div",{className:"absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-xl",style:{bottom:"calc(100% + 12px)",background:"rgba(20, 20, 25, 0.95)",backdropFilter:"blur(12px)",border:"1px solid rgba(var(--c1), 0.3)",boxShadow:"0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(var(--c1), 0.15)",whiteSpace:"nowrap",zIndex:50,animation:"fadeInUp 0.3s ease-out"},children:[l.jsx("span",{className:"text-sm select-all",style:{color:"#f0f4f8",fontWeight:500,fontFamily:"monospace"},children:"quweijia@vip.qq.com"}),l.jsx("button",{onClick:y,className:"flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-200 hover:scale-110",style:{background:b?"rgba(var(--c1), 0.2)":"rgba(255,255,255,0.1)",border:b?"1px solid rgba(var(--c1), 0.4)":"1px solid rgba(255,255,255,0.15)",color:b?"rgb(var(--c1))":"rgba(255,255,255,0.6)"},children:b?l.jsx(m0,{size:13}):l.jsx(y0,{size:13})}),l.jsx("div",{className:"absolute left-1/2 -translate-x-1/2",style:{bottom:"-6px",width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid rgba(var(--c1), 0.3)"}}),l.jsx("div",{className:"absolute left-1/2 -translate-x-1/2",style:{bottom:"-5px",width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid rgba(20, 20, 25, 0.95)"}})]})]}),l.jsxs(a0,{onClick:()=>p(!0),children:[l.jsx(Kp,{size:14})," 下载 PDF 简历"]})]})]}),l.jsx("div",{className:"hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14 transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(20px)",transitionDelay:"100ms"},children:ww.map((R,D)=>l.jsxs("div",{className:"rounded-2xl p-5 text-center group cursor-default select-none transition-all duration-200 hover:scale-[1.02]",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",transitionDelay:`${D*50}ms`},children:[l.jsx("div",{style:{fontSize:"1.625rem",fontWeight:900,color:R.color,lineHeight:1},children:R.value}),l.jsx("p",{className:"mt-1.5 text-xs",style:{color:"rgba(255,255,255,0.3)",letterSpacing:"0.06em"},children:R.label})]},R.label))}),l.jsxs("div",{className:"grid lg:grid-cols-3 gap-6 mb-20",children:[l.jsxs("div",{className:"transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transitionDelay:"150ms"},children:[l.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"CONNECT"}),l.jsx("div",{className:"space-y-2.5",children:Mw.map(R=>l.jsx(Ew,{s:R,className:R.hideOnMobile?"hidden md:flex":"",onQRCodeClick:R.label==="WeChat"?()=>M(!0):void 0},R.label))})]}),l.jsxs("div",{className:"transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(20px)",transitionDelay:"220ms"},children:[l.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"RESUME"}),l.jsxs("div",{className:"relative overflow-hidden rounded-2xl p-6 h-[calc(100%-35px)]",style:{background:"linear-gradient(135deg,rgba(0,240,200,0.08) 0%,rgba(124,111,247,0.05) 100%)",border:"1px solid rgba(0,240,200,0.12)"},children:[l.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{opacity:.04},children:[[15,30,45,60,75,90].map(R=>l.jsx("line",{x1:"0",y1:R,x2:"100",y2:R,stroke:"rgb(var(--c1))",strokeWidth:"0.5"},R)),[15,30,45,60,75,90].map(R=>l.jsx("line",{x1:R,y1:"0",x2:R,y2:"100",stroke:"rgb(var(--c1))",strokeWidth:"0.5"},R))]}),l.jsx("div",{className:"absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none",style:{background:"radial-gradient(circle,rgba(0,240,200,0.1) 0%,transparent 70%)"}}),l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 6px rgb(var(--c1))"}}),l.jsx("span",{className:"text-xs",style:{color:"rgb(var(--c1))",fontWeight:600,letterSpacing:"0.1em"},children:"RESUME · 简历"})]}),l.jsx("h3",{className:"mt-3 mb-1",style:{fontSize:"1.125rem",fontWeight:800,color:"#f0f4f8"},children:"曲维甲 · Vic Qu"}),l.jsx("p",{className:"text-xs mb-5",style:{color:"rgb(var(--c1))",fontWeight:500},children:"ENFJ · Full-Stack UI/UX Designer"}),l.jsx("p",{className:"mb-5",style:{fontSize:"0.8125rem",color:"rgba(255,255,255,0.4)",lineHeight:1.8},children:"PDF简历：个人信息、求职意向、教育背景、工作经历、技能清单"}),l.jsx("div",{className:"flex gap-6 mb-6",children:[["10+","年经验"],["60+","项目"],["20+","AI工具"]].map(([R,D])=>l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"1.125rem",fontWeight:800,color:"#f0f4f8",lineHeight:1.5},children:R}),l.jsx("div",{className:"text-xs mt-0.5",style:{color:"rgba(255,255,255,0.28)"},children:D})]},D))}),l.jsxs("div",{className:"flex flex-wrap gap-3",children:[l.jsxs("button",{onClick:()=>p(!0),className:"flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.03]",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",color:"var(--bg)",fontWeight:700,boxShadow:"0 0 20px rgba(var(--c1), 0.2)"},children:[l.jsx(Kp,{size:13,style:{color:"var(--bg)"}})," ","下载 PDF"]}),l.jsxs("button",{className:"flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.02]",style:{border:"1px solid rgba(var(--c1), 0.3)",color:"rgb(var(--c1))",background:"rgba(var(--c1), 0.08)"},children:[l.jsx(lf,{size:13,style:{color:"rgb(var(--c1))"}})," ","在线版"]})]})]})]})]}),l.jsxs("div",{className:"transition-all duration-700",style:{opacity:e?1:0,transform:e?"translateX(0)":"translateX(20px)",transitionDelay:"290ms"},children:[l.jsx("p",{className:"text-xs mb-5 tracking-widest",style:{color:"rgba(255,255,255,0.5)",letterSpacing:"0.16em"},children:"QUICK MESSAGE"}),l.jsxs("div",{className:"rounded-2xl p-5 mb-6",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)"},children:[l.jsx("textarea",{value:s,onChange:R=>a(R.target.value),rows:4,placeholder:"你好 Vic！我对你的设计作品很感兴趣，希望能进一步交流...",className:"w-full resize-none outline-none text-base mb-3",style:{background:"transparent",color:"#f0f4f8",lineHeight:1.7}}),l.jsx("button",{onClick:_,disabled:!s.trim(),className:"w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm transition-all duration-200",style:{background:s.trim()?c?"rgba(var(--c1), 0.1)":"linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))":"rgba(255, 255, 255, 0.05)",color:s.trim()?c?"rgb(var(--c1))":"var(--bg)":"rgba(255, 255, 255, 0.3)",fontWeight:700,border:s.trim()?c?"1px solid rgba(var(--c1), 0.3)":"none":"1px solid rgba(255, 255, 255, 0.1)",cursor:s.trim()?"pointer":"not-allowed",opacity:s.trim()?1:.5},children:c?l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"✓"})," 已发送！"]}):l.jsxs(l.Fragment,{children:[l.jsx(w0,{size:13,style:{color:s.trim()?"var(--bg)":"rgba(255, 255, 255, 0.3)"}})," ","发送消息"]})})]}),l.jsxs("div",{className:"rounded-xl p-4 flex items-start gap-3",style:{background:"rgba(0,240,200,0.04)",border:"1px solid rgba(0,240,200,0.1)"},children:[l.jsx("div",{className:"shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center",style:{background:"rgba(0,240,200,0.08)"},children:l.jsx("span",{className:"w-2.5 h-2.5 rounded-full animate-pulse",style:{background:"rgb(var(--c1))",boxShadow:"0 0 10px rgb(var(--c1))"}})}),l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:"0.875rem",fontWeight:600,color:"#f0f4f8"},children:"目前接受新机会"}),l.jsxs("p",{className:"text-xs mt-0.5",style:{color:"rgba(255,255,255,0.3)",lineHeight:1.6},children:["全职设计师 · 项目合作 · 设计咨询",l.jsx("br",{}),"回复率 97% · 通常 24 小时内响应"]})]})]})]})]}),l.jsxs("div",{className:"pt-7 flex flex-wrap items-center justify-between gap-4",style:{borderTop:"1px solid rgba(255,255,255,0.04)"},children:[l.jsx("div",{className:"flex items-center gap-3",children:l.jsxs("p",{className:"text-xs",style:{color:"rgba(255,255,255,0.2)"},children:["© 2026 · Vic Qu · Designed by Figma"," ",l.jsx("span",{style:{color:"rgb(var(--c1))"},children:"& "}),"TRAE CN"]})}),l.jsx("p",{className:"text-xs",style:{color:"rgba(255,255,255,0.2)"},children:"React · Tailwind · Motion · AI-Augmented · Github"})]})]}),l.jsx(E0,{isOpen:d,onClose:()=>p(!1),onConfirm:w}),S&&l.jsx(Vs,{children:l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(12px)"},onClick:()=>M(!1),children:l.jsxs("div",{className:"relative max-w-md w-full",onClick:R=>R.stopPropagation(),children:[l.jsx("button",{onClick:()=>M(!1),className:"absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"rgba(255, 255, 255, 0.9)"},children:l.jsx(_i,{size:20})}),l.jsx("div",{className:"rounded-2xl overflow-hidden",style:{background:"white",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)"},children:l.jsx(yw,{src:Sw,alt:"WeChat QR Code - 长按识别二维码",className:"w-full h-auto",style:{display:"block"}})}),l.jsx("p",{className:"text-center mt-4",style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"0.875rem"},children:"长按图片保存或识别二维码"})]})})})]})}function Aw({autoPlay:i=!1,defaultTrackIndex:e=2}){const[t,s]=V.useState(i),[a,c]=V.useState(!1),[f,d]=V.useState(60),[p,m]=V.useState(0),[x,b]=V.useState(0),[v,S]=V.useState(!1),[M,w]=V.useState(e),[_,y]=V.useState("bars"),[R,D]=V.useState(new Array(64).fill(.3)),T=V.useRef(null),z=V.useRef(null),U=[{name:"Deep Space Drift",artist:"Vic Qu · Ambient",url:"/assets/audio/SoundHelix-Song-1.mp3"},{name:"Neon Dreams",artist:"Vic Qu · Electronic",url:"/assets/audio/SoundHelix-Song-2.mp3"},{name:"Urban Flow",artist:"Vic Qu · Chill",url:"/assets/audio/SoundHelix-Song-3.mp3"}],k=U[M];V.useEffect(()=>{T.current&&(T.current.volume=f/100,T.current.muted=a)},[f,a]),V.useEffect(()=>{const J=T.current;if(!J)return;const oe=()=>m(J.currentTime),O=()=>b(J.duration),ne=()=>{M<U.length-1?w(M+1):w(0)};return J.addEventListener("timeupdate",oe),J.addEventListener("loadedmetadata",O),J.addEventListener("ended",ne),()=>{J.removeEventListener("timeupdate",oe),J.removeEventListener("loadedmetadata",O),J.removeEventListener("ended",ne)}},[M,U.length]),V.useEffect(()=>{const J=T.current;J&&i&&(J.load(),J.play().catch(oe=>{console.log("Autoplay prevented: ",oe),oe.name==="NotAllowedError"&&s(!1)}))},[]),V.useEffect(()=>{const J=T.current;J&&(J.load(),t&&J.play().catch(console.log))},[M,t]),V.useEffect(()=>{if(!t){D(new Array(64).fill(.1));return}const J=(O,ne,Pe)=>O+(ne-O)*Pe,oe=()=>{D(O=>O.map(ne=>{const Pe=Math.random()*.75+.15;return J(ne,Pe,.25)})),z.current=requestAnimationFrame(oe)};return z.current=requestAnimationFrame(oe),()=>{z.current&&cancelAnimationFrame(z.current)}},[t]);const B=async()=>{const J=T.current;if(J)if(t)J.pause(),s(!1);else try{await J.play(),s(!0)}catch(oe){console.log("播放失败：",oe)}},P=()=>S(!v),A=()=>c(!a),j=J=>{d(Number(J.target.value))},se=J=>{if(!T.current||!x)return;const oe=(J.clientX-J.currentTarget.getBoundingClientRect().left)/J.currentTarget.offsetWidth;T.current.currentTime=oe*x},te=()=>{w(J=>(J-1+U.length)%U.length)},fe=()=>{w(J=>(J+1)%U.length)},me=J=>{if(isNaN(J))return"0:00";const oe=Math.floor(J/60),O=Math.floor(J%60).toString().padStart(2,"0");return`${oe}:${O}`},de=()=>{const J=["bars","wave","circle","spectrum"];y(J[(J.indexOf(_)+1)%J.length])},pe=()=>{const oe=Math.floor(R.length/32);switch(_){case"bars":return l.jsx("div",{className:"flex items-end justify-center gap-1 h-24 px-2",children:Array.from({length:32}).map((O,ne)=>{const Pe=R[ne*oe]||.1,re=Math.max(4,Pe*80);return l.jsx("div",{className:"flex-1 rounded-t-full transition-all",style:{height:`${re}px`,background:"linear-gradient(to top, rgb(var(--c1)), rgb(var(--c2)))"}},ne)})});case"wave":return l.jsx("svg",{className:"w-full h-24",viewBox:"0 0 320 50",children:l.jsx("path",{d:"M0 30 "+Array.from({length:32}).map((O,ne)=>`L${ne/32*320} ${48-(R[ne*oe]||0)*40}`).join(" "),fill:"none",stroke:"rgb(var(--c1))",strokeWidth:"1"})});case"circle":return l.jsx("div",{className:"relative w-full h-24 flex items-center justify-center",children:Array.from({length:24}).map((O,ne)=>{const Pe=R[Math.floor(ne/24*R.length)]||.2,re=t?20+Pe*25:20;return l.jsx("div",{className:"absolute w-0.5 rounded-full",style:{height:`${re}px`,background:"rgb(var(--c2))",transform:`rotate(${ne*15}deg) translateY(-${re/2}px)`}},ne)})});default:return l.jsx("div",{className:"h-24 flex items-center justify-center text-white",children:"🎵"})}},H=()=>{switch(_){case"bars":return l.jsx(gv,{size:14});case"wave":return l.jsx(sv,{size:14});case"circle":return l.jsx(Zp,{size:14});default:return l.jsx(Zp,{size:14})}};return l.jsxs(l.Fragment,{children:[l.jsx("audio",{ref:T,src:k.url,preload:"auto"}),l.jsxs("div",{className:"fixed z-50 transition-all duration-500",style:{bottom:"calc(1.5rem / var(--screen-scale))",right:"calc(1.5rem / var(--screen-scale))",transform:"scale(var(--screen-scale))",transformOrigin:"bottom right"},children:[!v&&l.jsx("button",{onClick:P,className:"w-14 h-14 rounded-full flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:l.jsx(Qp,{size:24,className:`text-white ${t?"animate-spin":""}`})}),v&&l.jsxs("div",{className:"w-[360px] p-5 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/10",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:l.jsx(Qp,{size:20,className:`text-white ${t?"animate-spin":""}`})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"text-white text-sm truncate",children:k.name}),l.jsx("div",{className:"text-white/60 text-xs truncate",children:k.artist})]}),l.jsx("button",{onClick:P,className:"w-8 h-8 rounded-full hover:bg-white/10",children:l.jsx(g0,{size:18,className:"text-white/60"})})]}),l.jsxs("div",{className:"relative rounded-lg bg-white/5 mb-3",children:[pe(),l.jsx("button",{onClick:de,className:"absolute top-2 right-2 w-7 h-7 rounded-full bg-black/30 flex items-center justify-center text-white",children:H()})]}),l.jsxs("div",{className:"mb-2",children:[l.jsx("div",{className:"h-1.5 bg-white/10 rounded-full cursor-pointer",onClick:se,children:l.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[rgb(var(--c1))] to-[rgb(var(--c2))]",style:{width:`${p/x*100||0}%`}})}),l.jsxs("div",{className:"flex justify-between text-xs text-white/50 mt-1",children:[l.jsx("span",{children:me(p)}),l.jsx("span",{children:me(x)})]})]}),l.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[l.jsx("button",{onClick:te,className:"w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center",children:l.jsx(f1,{size:18,className:"text-white"})}),l.jsx("button",{onClick:B,className:"w-14 h-14 rounded-full flex items-center justify-center",style:{background:"linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))"},children:t?l.jsx(Jv,{size:20,className:"text-white"}):l.jsx(i1,{size:20,className:"text-white ml-0.5"})}),l.jsx("button",{onClick:fe,className:"w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center",children:l.jsx(p1,{size:18,className:"text-white"})})]}),l.jsx("style",{children:`
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
`}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("button",{onClick:A,className:"w-8 h-8 rounded-full hover:bg-white/10",children:a?l.jsx(E1,{size:16,className:"text-white"}):l.jsx(M1,{size:16,className:"text-white"})}),l.jsx("input",{type:"range",min:"0",max:"100",value:f,onChange:j,className:"flex-1 h-1.5 rounded-full volume-slider",style:{background:`linear-gradient(to right, rgb(var(--c1)) ${f}%, rgba(255,255,255,0.2) ${f}%)`}}),l.jsxs("span",{className:"text-xs text-white w-10 text-right",children:[f,"%"]})]})]})]})]})}const l0="/assets/sprite_9900x4800_70-pwo8PaYC.png",hd=9,Cw=8,c0=70,Rw=400,Dl=.96,Nw=(i,e,t)=>{const s=i.scrollTop,a=e-s,c=performance.now(),f=d=>{const p=d-c,m=Math.min(p/t,1),x=m*(2-m);i.scrollTop=s+a*x,m<1&&requestAnimationFrame(f)};requestAnimationFrame(f)},jo=1100,pd=600;function Pw(){const i=V.useRef(null),e=V.useRef(null),t=V.useRef(null),s=V.useRef(null),a=V.useRef(null),c=V.useRef(!1),[f,d]=V.useState(!1),[p,m]=V.useState(!1),[x,b]=V.useState(!1),v=V.useRef(0),S=()=>{const _=e.current,y=t.current;if(!_||!y)return;const R=window.innerWidth,D=R/jo,T=pd*D;y.style.height=`${T}px`,y.style.width=`${R}px`,_.style.width=`${jo*hd*D}px`,_.style.height=`${pd*Cw*D}px`},M=_=>{const y=e.current;if(!y)return;v.current=_;const R=window.innerWidth,D=R/jo,T=_%hd,z=Math.floor(_/hd),U=R/2-(T*jo+jo/2)*D,k=-(z*pd*D);y.style.transform=`translate3d(${U}px, ${k}px, 0)`};V.useEffect(()=>{const _=()=>{b(window.innerWidth<768)};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]),V.useEffect(()=>{const _=()=>{f&&(S(),M(v.current))};return window.addEventListener("resize",_),f&&(S(),M(0)),p||(document.body.style.overflow="hidden"),()=>{window.removeEventListener("resize",_),document.body.style.overflow="auto"}},[p,f]),V.useEffect(()=>{const _=new Image;_.src=l0,_.onload=()=>{d(!0)}},[]);const w=()=>{const _=i.current;!_||p||c.current||(window.requestAnimationFrame(()=>{const y=_.scrollTop,R=_.scrollHeight-_.clientHeight,D=Math.min(1,Math.max(0,y/R));if(a.current){const T=Math.max(0,1-D/.25);a.current.style.opacity=T.toString()}if(D<=Dl){const T=D/Dl,z=Math.floor(T*(c0-1));M(z),t.current&&(t.current.style.transform="scale(1)",t.current.style.opacity="1")}else{M(c0-1);const T=(D-Dl)/(1-Dl);if(t.current){const z=1-T*.5;t.current.style.transformOrigin="top left",t.current.style.transform=`scale(${z})`,t.current.style.opacity=(1-T).toString()}T>=.99&&m(!0)}c.current=!1}),c.current=!0)};return p?null:l.jsxs("div",{ref:i,onScroll:w,className:"scroll-video-overlay",style:{position:"fixed",inset:0,zIndex:99999,overflowY:"auto",overflowX:"hidden",background:"#000",scrollbarWidth:"none"},children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{style:{height:`${Rw}vh`,position:"relative"},children:l.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",width:"100%",overflow:"hidden",background:"#000"},children:[l.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",transform:x?"translateY(-60px)":"translateY(0)",zIndex:2},children:l.jsx("div",{ref:t,style:{position:"relative",overflow:"hidden",willChange:"transform, opacity",transform:x?"translateY(-60px)":"translateY(0)"},children:l.jsx("img",{ref:e,src:l0,alt:"intro-sprite",style:{position:"absolute",top:0,left:0,maxWidth:"none",display:"block",willChange:"transform",pointerEvents:"none",opacity:f?1:0}})})}),l.jsx("div",{ref:a,style:{position:"absolute",inset:0,transition:"opacity 0.2s ease",zIndex:3,pointerEvents:"none"},children:l.jsx(ig,{colors:["#00f0c8","#7c6ff7","#ff9ffc"],autoDemo:!0,autoSpeed:.5,autoIntensity:2.2})}),!f&&l.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#000",zIndex:100},children:[l.jsx("div",{className:"loading-text",style:{color:"white",fontSize:"12px",fontWeight:300,textTransform:"uppercase"},children:"Loading"}),l.jsx("div",{style:{width:"70px",height:"1.5px",background:"rgba(255,255,255,0.15)",marginTop:"6px",position:"relative",overflow:"hidden"},children:l.jsx("div",{className:"animate-shimmer-run",style:{position:"absolute",inset:0,background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)"}})})]}),l.jsx("div",{ref:s,style:{position:"absolute",bottom:"8vh",width:"100%",display:"flex",justifyContent:"center",zIndex:10},children:l.jsxs("button",{onClick:_=>{_.preventDefault();const y=i.current;if(!y)return;const R=y.scrollHeight-y.clientHeight;Nw(y,R,2800)},className:`
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
              `,children:[l.jsx("div",{className:"scroll-mouse",children:l.jsx("div",{className:"scroll-dot"})}),l.jsx("span",{className:"relative z-10",children:"SCROLL"}),l.jsx(g0,{size:18,className:"animate-bounce transition-colors duration-300 relative z-10"})]})})]})})]})}function Dw(){V.useEffect(()=>{const i=()=>{const s=window.innerWidth,a=1920;let c=1;s>a&&(c=Math.min(s/a,2.5)),document.documentElement.style.setProperty("--screen-scale",c.toString())};i();let e;const t=()=>{clearTimeout(e),e=window.setTimeout(i,200)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),clearTimeout(e)}},[])}const u0=new Set(["projects","education"]),d0=[{label:"Home",href:"hero"},{label:"Skills",href:"skills"},{label:"Projects",href:"projects"},{label:"Works",href:"portfolio"},{label:"Education",href:"education"},{label:"Contact",href:"contact"}];function kw(){Dw();const[i,e]=V.useState("top"),[t,s]=V.useState("hero"),[a,c]=V.useState("hero"),f=V.useRef("hero"),d=V.useRef("hero"),p=V.useRef(0),m=V.useRef(0);V.useEffect(()=>{const S=new IntersectionObserver(M=>{let w="",_=1/0;M.forEach(y=>{y.isIntersecting&&y.boundingClientRect.top<_&&(_=y.boundingClientRect.top,w=y.target.id)}),w&&w!==f.current&&(f.current=w,cancelAnimationFrame(p.current),p.current=requestAnimationFrame(()=>s(w)))},{root:null,rootMargin:"-68px 0px -80% 0px",threshold:[0]});return d0.forEach(M=>{const w=document.getElementById(M.href);w&&S.observe(w)}),()=>S.disconnect()},[]),V.useEffect(()=>{const S=new IntersectionObserver(M=>{const w=window.innerHeight/2;let _="",y=1/0;M.forEach(R=>{if(R.isIntersecting){const D=Math.abs(R.boundingClientRect.top-w);D<y&&(y=D,_=R.target.id)}}),_&&_!==d.current&&(d.current=_,cancelAnimationFrame(m.current),m.current=requestAnimationFrame(()=>c(_)))},{root:null,rootMargin:"-45% 0px -45% 0px",threshold:[0]});return d0.forEach(M=>{const w=document.getElementById(M.href);w&&S.observe(w)}),()=>S.disconnect()},[]);const x=V.useCallback(S=>{var M;(M=document.getElementById(S))==null||M.scrollIntoView({behavior:"smooth"})},[]),b=u0.has(t),v=u0.has(a);return l.jsxs(Jx,{children:[l.jsx(Pw,{}),i==="top"&&l.jsx(k1,{navMode:i,onToggleNavMode:()=>e(S=>S==="top"?"side":"top"),active:t,go:x,isLight:b}),i==="side"&&l.jsx(F1,{active:a,onNavigate:x,isLight:v,onSwitchToTop:()=>e("top")}),l.jsx(Aw,{autoPlay:!0,defaultTrackIndex:2}),l.jsx("div",{className:"hidden md:block",children:l.jsx($x,{})}),l.jsx("div",{className:"min-h-screen screen-scaled-root",style:{background:"var(--bg, #05050a)",color:"#f0f4f8",msOverflowStyle:"none",scrollbarWidth:"none"},children:l.jsxs("main",{children:[l.jsx(KM,{}),l.jsx(ew,{}),l.jsx(iw,{}),l.jsx(hw,{}),l.jsx(xw,{}),l.jsx(Tw,{})]})})]})}Kx.createRoot(document.getElementById("root")).render(l.jsx(kw,{}));
