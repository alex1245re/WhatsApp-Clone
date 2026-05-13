(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const z={},Wt=[],We=()=>{},Yo=()=>!1,ks=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ps=t=>t.startsWith("onUpdate:"),ue=Object.assign,Kr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ul=Object.prototype.hasOwnProperty,j=(t,e)=>ul.call(t,e),D=Array.isArray,qt=t=>Fn(t)==="[object Map]",Xo=t=>Fn(t)==="[object Set]",Li=t=>Fn(t)==="[object Date]",U=t=>typeof t=="function",te=t=>typeof t=="string",ze=t=>typeof t=="symbol",W=t=>t!==null&&typeof t=="object",Qo=t=>(W(t)||U(t))&&U(t.then)&&U(t.catch),Zo=Object.prototype.toString,Fn=t=>Zo.call(t),fl=t=>Fn(t).slice(8,-1),ea=t=>Fn(t)==="[object Object]",zr=t=>te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wn=qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ns=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},hl=/-\w/g,Pe=Ns(t=>t.replace(hl,e=>e.slice(1).toUpperCase())),dl=/\B([A-Z])/g,$t=Ns(t=>t.replace(dl,"-$1").toLowerCase()),ta=Ns(t=>t.charAt(0).toUpperCase()+t.slice(1)),Js=Ns(t=>t?`on${ta(t)}`:""),je=(t,e)=>!Object.is(t,e),is=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},na=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Gr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mi;const xs=()=>Mi||(Mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jr(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=te(s)?_l(s):Jr(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(te(t)||W(t))return t}const pl=/;(?![^(]*\))/g,gl=/:([^]+)/,ml=/\/\*[^]*?\*\//g;function _l(t){const e={};return t.replace(ml,"").split(pl).forEach(n=>{if(n){const s=n.split(gl);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function vt(t){let e="";if(te(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=vt(t[n]);s&&(e+=s+" ")}else if(W(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vl=qr(yl);function sa(t){return!!t||t===""}function bl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=kn(t[s],e[s]);return n}function kn(t,e){if(t===e)return!0;let n=Li(t),s=Li(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ze(t),s=ze(e),n||s)return t===e;if(n=D(t),s=D(e),n||s)return n&&s?bl(t,e):!1;if(n=W(t),s=W(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!kn(t[o],e[o]))return!1}}return String(t)===String(e)}const ra=t=>!!(t&&t.__v_isRef===!0),pe=t=>te(t)?t:t==null?"":D(t)||W(t)&&(t.toString===Zo||!U(t.toString))?ra(t)?pe(t.value):JSON.stringify(t,ia,2):String(t),ia=(t,e)=>ra(e)?ia(t,e.value):qt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Ys(s,i)+" =>"]=r,n),{})}:Xo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ys(n))}:ze(e)?Ys(e):W(e)&&!D(e)&&!ea(e)?String(e):e,Ys=(t,e="")=>{var n;return ze(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ie;class wl{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ie&&(ie.active?(this.parent=ie,this.index=(ie.scopes||(ie.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ie;try{return ie=this,e()}finally{ie=n}}}on(){++this._on===1&&(this.prevScope=ie,ie=this)}off(){if(this._on>0&&--this._on===0){if(ie===this)ie=this.prevScope;else{let e=ie;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function El(){return ie}let Y;const Xs=new WeakSet;class oa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ie&&(ie.active?ie.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xs.has(this)&&(Xs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ca(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ui(this),la(this);const e=Y,n=Ne;Y=this,Ne=!0;try{return this.fn()}finally{ua(this),Y=e,Ne=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qr(e);this.deps=this.depsTail=void 0,Ui(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mr(this)&&this.run()}get dirty(){return mr(this)}}let aa=0,En,In;function ca(t,e=!1){if(t.flags|=8,e){t.next=In,In=t;return}t.next=En,En=t}function Yr(){aa++}function Xr(){if(--aa>0)return;if(In){let e=In;for(In=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;En;){let e=En;for(En=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function la(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ua(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Qr(s),Il(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function mr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Pn)||(t.globalVersion=Pn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!mr(t))))return;t.flags|=2;const e=t.dep,n=Y,s=Ne;Y=t,Ne=!0;try{la(t);const r=t.fn(t._value);(e.version===0||je(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Y=n,Ne=s,ua(t),t.flags&=-3}}function Qr(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Qr(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Il(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ne=!0;const ha=[];function at(){ha.push(Ne),Ne=!1}function ct(){const t=ha.pop();Ne=t===void 0?!0:t}function Ui(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Y;Y=void 0;try{e()}finally{Y=n}}}let Pn=0;class Tl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Y||!Ne||Y===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Y)n=this.activeLink=new Tl(Y,this),Y.deps?(n.prevDep=Y.depsTail,Y.depsTail.nextDep=n,Y.depsTail=n):Y.deps=Y.depsTail=n,da(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Y.depsTail,n.nextDep=void 0,Y.depsTail.nextDep=n,Y.depsTail=n,Y.deps===n&&(Y.deps=s)}return n}trigger(e){this.version++,Pn++,this.notify(e)}notify(e){Yr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xr()}}}function da(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)da(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const _r=new WeakMap,Mt=Symbol(""),yr=Symbol(""),Nn=Symbol("");function ce(t,e,n){if(Ne&&Y){let s=_r.get(t);s||_r.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Zr),r.map=s,r.key=n),r.track()}}function et(t,e,n,s,r,i){const o=_r.get(t);if(!o){Pn++;return}const a=c=>{c&&c.trigger()};if(Yr(),e==="clear")o.forEach(a);else{const c=D(t),l=c&&zr(n);if(c&&n==="length"){const f=Number(s);o.forEach((d,p)=>{(p==="length"||p===Nn||!ze(p)&&p>=f)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Nn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Mt)),qt(t)&&a(o.get(yr)));break;case"delete":c||(a(o.get(Mt)),qt(t)&&a(o.get(yr)));break;case"set":qt(t)&&a(o.get(Mt));break}}Xr()}function Ht(t){const e=V(t);return e===t?e:(ce(e,"iterate",Nn),Ce(t)?e:e.map(De))}function Ds(t){return ce(t=V(t),"iterate",Nn),t}function He(t,e){return lt(t)?Zt(Ut(t)?De(e):e):De(e)}const Sl={__proto__:null,[Symbol.iterator](){return Qs(this,Symbol.iterator,t=>He(this,t))},concat(...t){return Ht(this).concat(...t.map(e=>D(e)?Ht(e):e))},entries(){return Qs(this,"entries",t=>(t[1]=He(this,t[1]),t))},every(t,e){return Xe(this,"every",t,e,void 0,arguments)},filter(t,e){return Xe(this,"filter",t,e,n=>n.map(s=>He(this,s)),arguments)},find(t,e){return Xe(this,"find",t,e,n=>He(this,n),arguments)},findIndex(t,e){return Xe(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xe(this,"findLast",t,e,n=>He(this,n),arguments)},findLastIndex(t,e){return Xe(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xe(this,"forEach",t,e,void 0,arguments)},includes(...t){return Zs(this,"includes",t)},indexOf(...t){return Zs(this,"indexOf",t)},join(t){return Ht(this).join(t)},lastIndexOf(...t){return Zs(this,"lastIndexOf",t)},map(t,e){return Xe(this,"map",t,e,void 0,arguments)},pop(){return fn(this,"pop")},push(...t){return fn(this,"push",t)},reduce(t,...e){return Bi(this,"reduce",t,e)},reduceRight(t,...e){return Bi(this,"reduceRight",t,e)},shift(){return fn(this,"shift")},some(t,e){return Xe(this,"some",t,e,void 0,arguments)},splice(...t){return fn(this,"splice",t)},toReversed(){return Ht(this).toReversed()},toSorted(t){return Ht(this).toSorted(t)},toSpliced(...t){return Ht(this).toSpliced(...t)},unshift(...t){return fn(this,"unshift",t)},values(){return Qs(this,"values",t=>He(this,t))}};function Qs(t,e,n){const s=Ds(t),r=s[e]();return s!==t&&!Ce(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Cl=Array.prototype;function Xe(t,e,n,s,r,i){const o=Ds(t),a=o!==t&&!Ce(t),c=o[e];if(c!==Cl[e]){const d=c.apply(t,i);return a?De(d):d}let l=n;o!==t&&(a?l=function(d,p){return n.call(this,He(t,d),p,t)}:n.length>2&&(l=function(d,p){return n.call(this,d,p,t)}));const f=c.call(o,l,s);return a&&r?r(f):f}function Bi(t,e,n,s){const r=Ds(t),i=r!==t&&!Ce(t);let o=n,a=!1;r!==t&&(i?(a=s.length===0,o=function(l,f,d){return a&&(a=!1,l=He(t,l)),n.call(this,l,He(t,f),d,t)}):n.length>3&&(o=function(l,f,d){return n.call(this,l,f,d,t)}));const c=r[e](o,...s);return a?He(t,c):c}function Zs(t,e,n){const s=V(t);ce(s,"iterate",Nn);const r=s[e](...n);return(r===-1||r===!1)&&si(n[0])?(n[0]=V(n[0]),s[e](...n)):r}function fn(t,e,n=[]){at(),Yr();const s=V(t)[e].apply(t,n);return Xr(),ct(),s}const Al=qr("__proto__,__v_isRef,__isVue"),pa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ze));function Rl(t){ze(t)||(t=String(t));const e=V(this);return ce(e,"has",t),e.hasOwnProperty(t)}class ga{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Bl:va:i?ya:_a).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=D(e);if(!r){let c;if(o&&(c=Sl[n]))return c;if(n==="hasOwnProperty")return Rl}const a=Reflect.get(e,n,le(e)?e:s);if((ze(n)?pa.has(n):Al(n))||(r||ce(e,"get",n),i))return a;if(le(a)){const c=o&&zr(n)?a:a.value;return r&&W(c)?br(c):c}return W(a)?r?br(a):ti(a):a}}class ma extends ga{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=D(e)&&zr(n);if(!this._isShallow){const l=lt(i);if(!Ce(s)&&!lt(s)&&(i=V(i),s=V(s)),!o&&le(i)&&!le(s))return l||(i.value=s),!0}const a=o?Number(n)<e.length:j(e,n),c=Reflect.set(e,n,s,le(e)?e:r);return e===V(r)&&(a?je(s,i)&&et(e,"set",n,s):et(e,"add",n,s)),c}deleteProperty(e,n){const s=j(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&et(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!ze(n)||!pa.has(n))&&ce(e,"has",n),s}ownKeys(e){return ce(e,"iterate",D(e)?"length":Mt),Reflect.ownKeys(e)}}class Ol extends ga{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kl=new ma,Pl=new Ol,Nl=new ma(!0);const vr=t=>t,Zn=t=>Reflect.getPrototypeOf(t);function xl(t,e,n){return function(...s){const r=this.__v_raw,i=V(r),o=qt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),f=n?vr:e?Zt:De;return!e&&ce(i,"iterate",c?yr:Mt),ue(Object.create(l),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[f(d[0]),f(d[1])]:f(d),done:p}}})}}function es(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Dl(t,e){const n={get(r){const i=this.__v_raw,o=V(i),a=V(r);t||(je(r,a)&&ce(o,"get",r),ce(o,"get",a));const{has:c}=Zn(o),l=e?vr:t?Zt:De;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&ce(V(r),"iterate",Mt),r.size},has(r){const i=this.__v_raw,o=V(i),a=V(r);return t||(je(r,a)&&ce(o,"has",r),ce(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=V(a),l=e?vr:t?Zt:De;return!t&&ce(c,"iterate",Mt),a.forEach((f,d)=>r.call(i,l(f),l(d),o))}};return ue(n,t?{add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear")}:{add(r){const i=V(this),o=Zn(i),a=V(r),c=!e&&!Ce(r)&&!lt(r)?a:r;return o.has.call(i,c)||je(r,c)&&o.has.call(i,r)||je(a,c)&&o.has.call(i,a)||(i.add(c),et(i,"add",c,c)),this},set(r,i){!e&&!Ce(i)&&!lt(i)&&(i=V(i));const o=V(this),{has:a,get:c}=Zn(o);let l=a.call(o,r);l||(r=V(r),l=a.call(o,r));const f=c.call(o,r);return o.set(r,i),l?je(i,f)&&et(o,"set",r,i):et(o,"add",r,i),this},delete(r){const i=V(this),{has:o,get:a}=Zn(i);let c=o.call(i,r);c||(r=V(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&et(i,"delete",r,void 0),l},clear(){const r=V(this),i=r.size!==0,o=r.clear();return i&&et(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=xl(r,t,e)}),n}function ei(t,e){const n=Dl(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(j(n,r)&&r in s?n:s,r,i)}const Ll={get:ei(!1,!1)},Ml={get:ei(!1,!0)},Ul={get:ei(!0,!1)};const _a=new WeakMap,ya=new WeakMap,va=new WeakMap,Bl=new WeakMap;function Fl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $l(t){return t.__v_skip||!Object.isExtensible(t)?0:Fl(fl(t))}function ti(t){return lt(t)?t:ni(t,!1,kl,Ll,_a)}function Hl(t){return ni(t,!1,Nl,Ml,ya)}function br(t){return ni(t,!0,Pl,Ul,va)}function ni(t,e,n,s,r){if(!W(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=$l(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function Ut(t){return lt(t)?Ut(t.__v_raw):!!(t&&t.__v_isReactive)}function lt(t){return!!(t&&t.__v_isReadonly)}function Ce(t){return!!(t&&t.__v_isShallow)}function si(t){return t?!!t.__v_raw:!1}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function Vl(t){return!j(t,"__v_skip")&&Object.isExtensible(t)&&na(t,"__v_skip",!0),t}const De=t=>W(t)?ti(t):t,Zt=t=>W(t)?br(t):t;function le(t){return t?t.__v_isRef===!0:!1}function oe(t){return jl(t,!1)}function jl(t,e){return le(t)?t:new Wl(t,e)}class Wl{constructor(e,n){this.dep=new Zr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:V(e),this._value=n?e:De(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ce(e)||lt(e);e=s?e:V(e),je(e,n)&&(this._rawValue=e,this._value=s?e:De(e),this.dep.trigger())}}function ba(t){return le(t)?t.value:t}const ql={get:(t,e,n)=>e==="__v_raw"?t:ba(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return le(r)&&!le(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function wa(t){return Ut(t)?t:new Proxy(t,ql)}class Kl{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Zr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Y!==this)return ca(this,!0),!0}get value(){const e=this.dep.track();return fa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function zl(t,e,n=!1){let s,r;return U(t)?s=t:(s=t.get,r=t.set),new Kl(s,r,n)}const ts={},ms=new WeakMap;let Pt;function Gl(t,e=!1,n=Pt){if(n){let s=ms.get(n);s||ms.set(n,s=[]),s.push(t)}}function Jl(t,e,n=z){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=S=>r?S:Ce(S)||r===!1||r===0?tt(S,1):tt(S);let f,d,p,b,A=!1,C=!1;if(le(t)?(d=()=>t.value,A=Ce(t)):Ut(t)?(d=()=>l(t),A=!0):D(t)?(C=!0,A=t.some(S=>Ut(S)||Ce(S)),d=()=>t.map(S=>{if(le(S))return S.value;if(Ut(S))return l(S);if(U(S))return c?c(S,2):S()})):U(t)?e?d=c?()=>c(t,2):t:d=()=>{if(p){at();try{p()}finally{ct()}}const S=Pt;Pt=f;try{return c?c(t,3,[b]):t(b)}finally{Pt=S}}:d=We,e&&r){const S=d,O=r===!0?1/0:r;d=()=>tt(S(),O)}const B=El(),P=()=>{f.stop(),B&&B.active&&Kr(B.effects,f)};if(i&&e){const S=e;e=(...O)=>{S(...O),P()}}let L=C?new Array(t.length).fill(ts):ts;const F=S=>{if(!(!(f.flags&1)||!f.dirty&&!S))if(e){const O=f.run();if(r||A||(C?O.some((fe,ae)=>je(fe,L[ae])):je(O,L))){p&&p();const fe=Pt;Pt=f;try{const ae=[O,L===ts?void 0:C&&L[0]===ts?[]:L,b];L=O,c?c(e,3,ae):e(...ae)}finally{Pt=fe}}}else f.run()};return a&&a(F),f=new oa(d),f.scheduler=o?()=>o(F,!1):F,b=S=>Gl(S,!1,f),p=f.onStop=()=>{const S=ms.get(f);if(S){if(c)c(S,4);else for(const O of S)O();ms.delete(f)}},e?s?F(!0):L=f.run():o?o(F.bind(null,!0),!0):f.run(),P.pause=f.pause.bind(f),P.resume=f.resume.bind(f),P.stop=P,P}function tt(t,e=1/0,n){if(e<=0||!W(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,le(t))tt(t.value,e,n);else if(D(t))for(let s=0;s<t.length;s++)tt(t[s],e,n);else if(Xo(t)||qt(t))t.forEach(s=>{tt(s,e,n)});else if(ea(t)){for(const s in t)tt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&tt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $n(t,e,n,s){try{return s?t(...s):t()}catch(r){Ls(r,e,n)}}function Ge(t,e,n,s){if(U(t)){const r=$n(t,e,n,s);return r&&Qo(r)&&r.catch(i=>{Ls(i,e,n)}),r}if(D(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Ge(t[i],e,n,s));return r}}function Ls(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||z;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,c,l)===!1)return}a=a.parent}if(i){at(),$n(i,null,10,[t,c,l]),ct();return}}Yl(t,n,r,s,o)}function Yl(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const ge=[];let $e=-1;const Kt=[];let gt=null,Vt=0;const Ea=Promise.resolve();let _s=null;function Ia(t){const e=_s||Ea;return t?e.then(this?t.bind(this):t):e}function Xl(t){let e=$e+1,n=ge.length;for(;e<n;){const s=e+n>>>1,r=ge[s],i=xn(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function ri(t){if(!(t.flags&1)){const e=xn(t),n=ge[ge.length-1];!n||!(t.flags&2)&&e>=xn(n)?ge.push(t):ge.splice(Xl(e),0,t),t.flags|=1,Ta()}}function Ta(){_s||(_s=Ea.then(Ca))}function Ql(t){D(t)?Kt.push(...t):gt&&t.id===-1?gt.splice(Vt+1,0,t):t.flags&1||(Kt.push(t),t.flags|=1),Ta()}function Fi(t,e,n=$e+1){for(;n<ge.length;n++){const s=ge[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;ge.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Sa(t){if(Kt.length){const e=[...new Set(Kt)].sort((n,s)=>xn(n)-xn(s));if(Kt.length=0,gt){gt.push(...e);return}for(gt=e,Vt=0;Vt<gt.length;Vt++){const n=gt[Vt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gt=null,Vt=0}}const xn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ca(t){try{for($e=0;$e<ge.length;$e++){const e=ge[$e];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$n(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$e<ge.length;$e++){const e=ge[$e];e&&(e.flags&=-2)}$e=-1,ge.length=0,Sa(),_s=null,(ge.length||Kt.length)&&Ca()}}let Se=null,Aa=null;function ys(t){const e=Se;return Se=t,Aa=t&&t.type.__scopeId||null,e}function Zl(t,e=Se,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Yi(-1);const i=ys(e);let o;try{o=t(...r)}finally{ys(i),s._d&&Yi(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function jt(t,e){if(Se===null)return t;const n=$s(Se),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=z]=e[r];i&&(U(i)&&(i={mounted:i,updated:i}),i.deep&&tt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Ot(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(at(),Ge(c,n,8,[t.el,a,t,e]),ct())}}function eu(t,e){if(_e){let n=_e.provides;const s=_e.parent&&_e.parent.provides;s===n&&(n=_e.provides=Object.create(s)),n[t]=e}}function os(t,e,n=!1){const s=Qu();if(s||zt){let r=zt?zt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e}}const tu=Symbol.for("v-scx"),nu=()=>os(tu);function er(t,e,n){return Ra(t,e,n)}function Ra(t,e,n=z){const{immediate:s,deep:r,flush:i,once:o}=n,a=ue({},n),c=e&&s||!e&&i!=="post";let l;if(Ln){if(i==="sync"){const b=nu();l=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=We,b.resume=We,b.pause=We,b}}const f=_e;a.call=(b,A,C)=>Ge(b,f,A,C);let d=!1;i==="post"?a.scheduler=b=>{ve(b,f&&f.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(b,A)=>{A?b():ri(b)}),a.augmentJob=b=>{e&&(b.flags|=4),d&&(b.flags|=2,f&&(b.id=f.uid,b.i=f))};const p=Jl(t,e,a);return Ln&&(l?l.push(p):c&&p()),p}function su(t,e,n){const s=this.proxy,r=te(t)?t.includes(".")?Oa(s,t):()=>s[t]:t.bind(s,s);let i;U(e)?i=e:(i=e.handler,n=e);const o=Hn(this),a=Ra(r,i.bind(s),n);return o(),a}function Oa(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const ru=Symbol("_vte"),iu=t=>t.__isTeleport,ou=Symbol("_leaveCb");function ii(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ii(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ka(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function $i(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const vs=new WeakMap;function Tn(t,e,n,s,r=!1){if(D(t)){t.forEach((C,B)=>Tn(C,e&&(D(e)?e[B]:e),n,s,r));return}if(Sn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Tn(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?$s(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===z?a.refs={}:a.refs,d=a.setupState,p=V(d),b=d===z?Yo:C=>$i(f,C)?!1:j(p,C),A=(C,B)=>!(B&&$i(f,B));if(l!=null&&l!==c){if(Hi(e),te(l))f[l]=null,b(l)&&(d[l]=null);else if(le(l)){const C=e;A(l,C.k)&&(l.value=null),C.k&&(f[C.k]=null)}}if(U(c))$n(c,a,12,[o,f]);else{const C=te(c),B=le(c);if(C||B){const P=()=>{if(t.f){const L=C?b(c)?d[c]:f[c]:A()||!t.k?c.value:f[t.k];if(r)D(L)&&Kr(L,i);else if(D(L))L.includes(i)||L.push(i);else if(C)f[c]=[i],b(c)&&(d[c]=f[c]);else{const F=[i];A(c,t.k)&&(c.value=F),t.k&&(f[t.k]=F)}}else C?(f[c]=o,b(c)&&(d[c]=o)):B&&(A(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const L=()=>{P(),vs.delete(t)};L.id=-1,vs.set(t,L),ve(L,n)}else Hi(t),P()}}}function Hi(t){const e=vs.get(t);e&&(e.flags|=8,vs.delete(t))}xs().requestIdleCallback;xs().cancelIdleCallback;const Sn=t=>!!t.type.__asyncLoader,Pa=t=>t.type.__isKeepAlive;function au(t,e){Na(t,"a",e)}function cu(t,e){Na(t,"da",e)}function Na(t,e,n=_e){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ms(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Pa(r.parent.vnode)&&lu(s,e,n,r),r=r.parent}}function lu(t,e,n,s){const r=Ms(e,t,s,!0);Us(()=>{Kr(s[e],r)},n)}function Ms(t,e,n=_e,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{at();const a=Hn(n),c=Ge(e,n,t,o);return a(),ct(),c});return s?r.unshift(i):r.push(i),i}}const ht=t=>(e,n=_e)=>{(!Ln||t==="sp")&&Ms(t,(...s)=>e(...s),n)},uu=ht("bm"),oi=ht("m"),fu=ht("bu"),hu=ht("u"),du=ht("bum"),Us=ht("um"),pu=ht("sp"),gu=ht("rtg"),mu=ht("rtc");function _u(t,e=_e){Ms("ec",t,e)}const yu=Symbol.for("v-ndc");function wr(t,e,n,s){let r;const i=n,o=D(t);if(o||te(t)){const a=o&&Ut(t);let c=!1,l=!1;a&&(c=!Ce(t),l=lt(t),t=Ds(t)),r=new Array(t.length);for(let f=0,d=t.length;f<d;f++)r[f]=e(c?l?Zt(De(t[f])):De(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(W(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const f=a[c];r[c]=e(t[f],f,c,i)}}else r=[];return r}const Er=t=>t?Za(t)?$s(t):Er(t.parent):null,Cn=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Er(t.parent),$root:t=>Er(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Da(t),$forceUpdate:t=>t.f||(t.f=()=>{ri(t.update)}),$nextTick:t=>t.n||(t.n=Ia.bind(t.proxy)),$watch:t=>su.bind(t)}),tr=(t,e)=>t!==z&&!t.__isScriptSetup&&j(t,e),vu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(tr(s,e))return o[e]=1,s[e];if(r!==z&&j(r,e))return o[e]=2,r[e];if(j(i,e))return o[e]=3,i[e];if(n!==z&&j(n,e))return o[e]=4,n[e];Ir&&(o[e]=0)}}const l=Cn[e];let f,d;if(l)return e==="$attrs"&&ce(t.attrs,"get",""),l(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==z&&j(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,j(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return tr(r,e)?(r[e]=n,!0):s!==z&&j(s,e)?(s[e]=n,!0):j(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},a){let c;return!!(n[a]||t!==z&&a[0]!=="$"&&j(t,a)||tr(e,a)||j(i,a)||j(s,a)||j(Cn,a)||j(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:j(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vi(t){return D(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ir=!0;function bu(t){const e=Da(t),n=t.proxy,s=t.ctx;Ir=!1,e.beforeCreate&&ji(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:d,mounted:p,beforeUpdate:b,updated:A,activated:C,deactivated:B,beforeDestroy:P,beforeUnmount:L,destroyed:F,unmounted:S,render:O,renderTracked:fe,renderTriggered:ae,errorCaptured:be,serverPrefetch:Q,expose:Re,inheritAttrs:an,components:Jn,directives:Yn,filters:zs}=e;if(l&&wu(l,s,null),o)for(const Z in o){const G=o[Z];U(G)&&(s[Z]=G.bind(n))}if(r){const Z=r.call(n,n);W(Z)&&(t.data=ti(Z))}if(Ir=!0,i)for(const Z in i){const G=i[Z],At=U(G)?G.bind(n,n):U(G.get)?G.get.bind(n,n):We,Xn=!U(G)&&U(G.set)?G.set.bind(n):We,Rt=rf({get:At,set:Xn});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:Le=>Rt.value=Le})}if(a)for(const Z in a)xa(a[Z],s,n,Z);if(c){const Z=U(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(G=>{eu(G,Z[G])})}f&&ji(f,t,"c");function he(Z,G){D(G)?G.forEach(At=>Z(At.bind(n))):G&&Z(G.bind(n))}if(he(uu,d),he(oi,p),he(fu,b),he(hu,A),he(au,C),he(cu,B),he(_u,be),he(mu,fe),he(gu,ae),he(du,L),he(Us,S),he(pu,Q),D(Re))if(Re.length){const Z=t.exposed||(t.exposed={});Re.forEach(G=>{Object.defineProperty(Z,G,{get:()=>n[G],set:At=>n[G]=At,enumerable:!0})})}else t.exposed||(t.exposed={});O&&t.render===We&&(t.render=O),an!=null&&(t.inheritAttrs=an),Jn&&(t.components=Jn),Yn&&(t.directives=Yn),Q&&ka(t)}function wu(t,e,n=We){D(t)&&(t=Tr(t));for(const s in t){const r=t[s];let i;W(r)?"default"in r?i=os(r.from||s,r.default,!0):i=os(r.from||s):i=os(r),le(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function ji(t,e,n){Ge(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xa(t,e,n,s){let r=s.includes(".")?Oa(n,s):()=>n[s];if(te(t)){const i=e[t];U(i)&&er(r,i)}else if(U(t))er(r,t.bind(n));else if(W(t))if(D(t))t.forEach(i=>xa(i,e,n,s));else{const i=U(t.handler)?t.handler.bind(n):e[t.handler];U(i)&&er(r,i,t)}}function Da(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>bs(c,l,o,!0)),bs(c,e,o)),W(e)&&i.set(e,c),c}function bs(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&bs(t,i,n,!0),r&&r.forEach(o=>bs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Eu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Eu={data:Wi,props:qi,emits:qi,methods:pn,computed:pn,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:pn,directives:pn,watch:Tu,provide:Wi,inject:Iu};function Wi(t,e){return e?t?function(){return ue(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Iu(t,e){return pn(Tr(t),Tr(e))}function Tr(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function pn(t,e){return t?ue(Object.create(null),t,e):e}function qi(t,e){return t?D(t)&&D(e)?[...new Set([...t,...e])]:ue(Object.create(null),Vi(t),Vi(e??{})):e}function Tu(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const s in e)n[s]=de(t[s],e[s]);return n}function La(){return{app:null,config:{isNativeTag:Yo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Su=0;function Cu(t,e){return function(s,r=null){U(s)||(s=ue({},s)),r!=null&&!W(r)&&(r=null);const i=La(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Su++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:of,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(l,...d)):U(f)&&(o.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,p){if(!c){const b=l._ceVNode||it(s,r);return b.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(b,f,p),c=!0,l._container=f,f.__vue_app__=l,$s(b.component)}},onUnmount(f){a.push(f)},unmount(){c&&(Ge(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l},runWithContext(f){const d=zt;zt=l;try{return f()}finally{zt=d}}};return l}}let zt=null;const Au=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Pe(e)}Modifiers`]||t[`${$t(e)}Modifiers`];function Ru(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||z;let r=n;const i=e.startsWith("update:"),o=i&&Au(s,e.slice(7));o&&(o.trim&&(r=n.map(f=>te(f)?f.trim():f)),o.number&&(r=n.map(Gr)));let a,c=s[a=Js(e)]||s[a=Js(Pe(e))];!c&&i&&(c=s[a=Js($t(e))]),c&&Ge(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ge(l,t,6,r)}}const Ou=new WeakMap;function Ma(t,e,n=!1){const s=n?Ou:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!U(t)){const c=l=>{const f=Ma(l,e,!0);f&&(a=!0,ue(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(W(t)&&s.set(t,null),null):(D(i)?i.forEach(c=>o[c]=null):ue(o,i),W(t)&&s.set(t,o),o)}function Bs(t,e){return!t||!ks(e)?!1:(e=e.slice(2).replace(/Once$/,""),j(t,e[0].toLowerCase()+e.slice(1))||j(t,$t(e))||j(t,e))}function Ki(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:f,props:d,data:p,setupState:b,ctx:A,inheritAttrs:C}=t,B=ys(t);let P,L;try{if(n.shapeFlag&4){const S=r||s,O=S;P=Ve(l.call(O,S,f,d,b,p,A)),L=a}else{const S=e;P=Ve(S.length>1?S(d,{attrs:a,slots:o,emit:c}):S(d,null)),L=e.props?a:ku(a)}}catch(S){An.length=0,Ls(S,t,1),P=it(It)}let F=P;if(L&&C!==!1){const S=Object.keys(L),{shapeFlag:O}=F;S.length&&O&7&&(i&&S.some(Ps)&&(L=Pu(L,i)),F=en(F,L,!1,!0))}return n.dirs&&(F=en(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&ii(F,n.transition),P=F,ys(B),P}const ku=t=>{let e;for(const n in t)(n==="class"||n==="style"||ks(n))&&((e||(e={}))[n]=t[n]);return e},Pu=(t,e)=>{const n={};for(const s in t)(!Ps(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Nu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?zi(s,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(Ua(o,s,p)&&!Bs(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?zi(s,o,l):!0:!!o;return!1}function zi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(Ua(e,t,i)&&!Bs(n,i))return!0}return!1}function Ua(t,e,n){const s=t[n],r=e[n];return n==="style"&&W(s)&&W(r)?!kn(s,r):s!==r}function xu({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const Ba={},Fa=()=>Object.create(Ba),$a=t=>Object.getPrototypeOf(t)===Ba;function Du(t,e,n,s=!1){const r={},i=Fa();t.propsDefaults=Object.create(null),Ha(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Hl(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Lu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=V(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(Bs(t.emitsOptions,p))continue;const b=e[p];if(c)if(j(i,p))b!==i[p]&&(i[p]=b,l=!0);else{const A=Pe(p);r[A]=Sr(c,a,A,b,t,!1)}else b!==i[p]&&(i[p]=b,l=!0)}}}else{Ha(t,e,r,i)&&(l=!0);let f;for(const d in a)(!e||!j(e,d)&&((f=$t(d))===d||!j(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(r[d]=Sr(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!j(e,d))&&(delete i[d],l=!0)}l&&et(t.attrs,"set","")}function Ha(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(wn(c))continue;const l=e[c];let f;r&&j(r,f=Pe(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Bs(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=V(n),l=a||z;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Sr(r,c,d,l[d],t,!j(l,d))}}return o}function Sr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=j(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&U(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const f=Hn(r);s=l[n]=c.call(null,e),f()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===$t(n))&&(s=!0))}return s}const Mu=new WeakMap;function Va(t,e,n=!1){const s=n?Mu:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!U(t)){const f=d=>{c=!0;const[p,b]=Va(d,e,!0);ue(o,p),b&&a.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return W(t)&&s.set(t,Wt),Wt;if(D(i))for(let f=0;f<i.length;f++){const d=Pe(i[f]);Gi(d)&&(o[d]=z)}else if(i)for(const f in i){const d=Pe(f);if(Gi(d)){const p=i[f],b=o[d]=D(p)||U(p)?{type:p}:ue({},p),A=b.type;let C=!1,B=!0;if(D(A))for(let P=0;P<A.length;++P){const L=A[P],F=U(L)&&L.name;if(F==="Boolean"){C=!0;break}else F==="String"&&(B=!1)}else C=U(A)&&A.name==="Boolean";b[0]=C,b[1]=B,(C||j(b,"default"))&&a.push(d)}}const l=[o,a];return W(t)&&s.set(t,l),l}function Gi(t){return t[0]!=="$"&&!wn(t)}const ai=t=>t==="_"||t==="_ctx"||t==="$stable",ci=t=>D(t)?t.map(Ve):[Ve(t)],Uu=(t,e,n)=>{if(e._n)return e;const s=Zl((...r)=>ci(e(...r)),n);return s._c=!1,s},ja=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ai(r))continue;const i=t[r];if(U(i))e[r]=Uu(r,i,s);else if(i!=null){const o=ci(i);e[r]=()=>o}}},Wa=(t,e)=>{const n=ci(e);t.slots.default=()=>n},qa=(t,e,n)=>{for(const s in e)(n||!ai(s))&&(t[s]=e[s])},Bu=(t,e,n)=>{const s=t.slots=Fa();if(t.vnode.shapeFlag&32){const r=e._;r?(qa(s,e,n),n&&na(s,"_",r,!0)):ja(e,s)}else e&&Wa(t,e)},Fu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=z;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:qa(r,e,n):(i=!e.$stable,ja(e,r)),o=e}else e&&(Wa(t,e),o={default:1});if(i)for(const a in r)!ai(a)&&o[a]==null&&delete r[a]},ve=Wu;function $u(t){return Hu(t)}function Hu(t,e){const n=xs();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:d,nextSibling:p,setScopeId:b=We,insertStaticContent:A}=t,C=(u,h,g,v=null,m=null,_=null,I=void 0,E=null,w=!!h.dynamicChildren)=>{if(u===h)return;u&&!hn(u,h)&&(v=Qn(u),Le(u,m,_,!0),u=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:y,ref:k,shapeFlag:T}=h;switch(y){case Fs:B(u,h,g,v);break;case It:P(u,h,g,v);break;case sr:u==null&&L(h,g,v,I);break;case me:Jn(u,h,g,v,m,_,I,E,w);break;default:T&1?O(u,h,g,v,m,_,I,E,w):T&6?Yn(u,h,g,v,m,_,I,E,w):(T&64||T&128)&&y.process(u,h,g,v,m,_,I,E,w,ln)}k!=null&&m?Tn(k,u&&u.ref,_,h||u,!h):k==null&&u&&u.ref!=null&&Tn(u.ref,null,_,u,!0)},B=(u,h,g,v)=>{if(u==null)s(h.el=a(h.children),g,v);else{const m=h.el=u.el;h.children!==u.children&&l(m,h.children)}},P=(u,h,g,v)=>{u==null?s(h.el=c(h.children||""),g,v):h.el=u.el},L=(u,h,g,v)=>{[u.el,u.anchor]=A(u.children,h,g,v,u.el,u.anchor)},F=({el:u,anchor:h},g,v)=>{let m;for(;u&&u!==h;)m=p(u),s(u,g,v),u=m;s(h,g,v)},S=({el:u,anchor:h})=>{let g;for(;u&&u!==h;)g=p(u),r(u),u=g;r(h)},O=(u,h,g,v,m,_,I,E,w)=>{if(h.type==="svg"?I="svg":h.type==="math"&&(I="mathml"),u==null)fe(h,g,v,m,_,I,E,w);else{const y=u.el&&u.el._isVueCE?u.el:null;try{y&&y._beginPatch(),Q(u,h,m,_,I,E,w)}finally{y&&y._endPatch()}}},fe=(u,h,g,v,m,_,I,E)=>{let w,y;const{props:k,shapeFlag:T,transition:R,dirs:x}=u;if(w=u.el=o(u.type,_,k&&k.is,k),T&8?f(w,u.children):T&16&&be(u.children,w,null,v,m,nr(u,_),I,E),x&&Ot(u,null,v,"created"),ae(w,u,u.scopeId,I,v),k){for(const q in k)q!=="value"&&!wn(q)&&i(w,q,null,k[q],_,v);"value"in k&&i(w,"value",null,k.value,_),(y=k.onVnodeBeforeMount)&&Fe(y,v,u)}x&&Ot(u,null,v,"beforeMount");const H=Vu(m,R);H&&R.beforeEnter(w),s(w,h,g),((y=k&&k.onVnodeMounted)||H||x)&&ve(()=>{try{y&&Fe(y,v,u),H&&R.enter(w),x&&Ot(u,null,v,"mounted")}finally{}},m)},ae=(u,h,g,v,m)=>{if(g&&b(u,g),v)for(let _=0;_<v.length;_++)b(u,v[_]);if(m){let _=m.subTree;if(h===_||Ja(_.type)&&(_.ssContent===h||_.ssFallback===h)){const I=m.vnode;ae(u,I,I.scopeId,I.slotScopeIds,m.parent)}}},be=(u,h,g,v,m,_,I,E,w=0)=>{for(let y=w;y<u.length;y++){const k=u[y]=E?Ze(u[y]):Ve(u[y]);C(null,k,h,g,v,m,_,I,E)}},Q=(u,h,g,v,m,_,I)=>{const E=h.el=u.el;let{patchFlag:w,dynamicChildren:y,dirs:k}=h;w|=u.patchFlag&16;const T=u.props||z,R=h.props||z;let x;if(g&&kt(g,!1),(x=R.onVnodeBeforeUpdate)&&Fe(x,g,h,u),k&&Ot(h,u,g,"beforeUpdate"),g&&kt(g,!0),(T.innerHTML&&R.innerHTML==null||T.textContent&&R.textContent==null)&&f(E,""),y?Re(u.dynamicChildren,y,E,g,v,nr(h,m),_):I||G(u,h,E,null,g,v,nr(h,m),_,!1),w>0){if(w&16)an(E,T,R,g,m);else if(w&2&&T.class!==R.class&&i(E,"class",null,R.class,m),w&4&&i(E,"style",T.style,R.style,m),w&8){const H=h.dynamicProps;for(let q=0;q<H.length;q++){const J=H[q],ne=T[J],re=R[J];(re!==ne||J==="value")&&i(E,J,ne,re,m,g)}}w&1&&u.children!==h.children&&f(E,h.children)}else!I&&y==null&&an(E,T,R,g,m);((x=R.onVnodeUpdated)||k)&&ve(()=>{x&&Fe(x,g,h,u),k&&Ot(h,u,g,"updated")},v)},Re=(u,h,g,v,m,_,I)=>{for(let E=0;E<h.length;E++){const w=u[E],y=h[E],k=w.el&&(w.type===me||!hn(w,y)||w.shapeFlag&198)?d(w.el):g;C(w,y,k,null,v,m,_,I,!0)}},an=(u,h,g,v,m)=>{if(h!==g){if(h!==z)for(const _ in h)!wn(_)&&!(_ in g)&&i(u,_,h[_],null,m,v);for(const _ in g){if(wn(_))continue;const I=g[_],E=h[_];I!==E&&_!=="value"&&i(u,_,E,I,m,v)}"value"in g&&i(u,"value",h.value,g.value,m)}},Jn=(u,h,g,v,m,_,I,E,w)=>{const y=h.el=u?u.el:a(""),k=h.anchor=u?u.anchor:a("");let{patchFlag:T,dynamicChildren:R,slotScopeIds:x}=h;x&&(E=E?E.concat(x):x),u==null?(s(y,g,v),s(k,g,v),be(h.children||[],g,k,m,_,I,E,w)):T>0&&T&64&&R&&u.dynamicChildren&&u.dynamicChildren.length===R.length?(Re(u.dynamicChildren,R,g,m,_,I,E),(h.key!=null||m&&h===m.subTree)&&Ka(u,h,!0)):G(u,h,g,k,m,_,I,E,w)},Yn=(u,h,g,v,m,_,I,E,w)=>{h.slotScopeIds=E,u==null?h.shapeFlag&512?m.ctx.activate(h,g,v,I,w):zs(h,g,v,m,_,I,w):Oi(u,h,w)},zs=(u,h,g,v,m,_,I)=>{const E=u.component=Xu(u,v,m);if(Pa(u)&&(E.ctx.renderer=ln),Zu(E,!1,I),E.asyncDep){if(m&&m.registerDep(E,he,I),!u.el){const w=E.subTree=it(It);P(null,w,h,g),u.placeholder=w.el}}else he(E,u,h,g,m,_,I)},Oi=(u,h,g)=>{const v=h.component=u.component;if(Nu(u,h,g))if(v.asyncDep&&!v.asyncResolved){Z(v,h,g);return}else v.next=h,v.update();else h.el=u.el,v.vnode=h},he=(u,h,g,v,m,_,I)=>{const E=()=>{if(u.isMounted){let{next:T,bu:R,u:x,parent:H,vnode:q}=u;{const Ue=za(u);if(Ue){T&&(T.el=q.el,Z(u,T,I)),Ue.asyncDep.then(()=>{ve(()=>{u.isUnmounted||y()},m)});return}}let J=T,ne;kt(u,!1),T?(T.el=q.el,Z(u,T,I)):T=q,R&&is(R),(ne=T.props&&T.props.onVnodeBeforeUpdate)&&Fe(ne,H,T,q),kt(u,!0);const re=Ki(u),Me=u.subTree;u.subTree=re,C(Me,re,d(Me.el),Qn(Me),u,m,_),T.el=re.el,J===null&&xu(u,re.el),x&&ve(x,m),(ne=T.props&&T.props.onVnodeUpdated)&&ve(()=>Fe(ne,H,T,q),m)}else{let T;const{el:R,props:x}=h,{bm:H,m:q,parent:J,root:ne,type:re}=u,Me=Sn(h);kt(u,!1),H&&is(H),!Me&&(T=x&&x.onVnodeBeforeMount)&&Fe(T,J,h),kt(u,!0);{ne.ce&&ne.ce._hasShadowRoot()&&ne.ce._injectChildStyle(re,u.parent?u.parent.type:void 0);const Ue=u.subTree=Ki(u);C(null,Ue,g,v,u,m,_),h.el=Ue.el}if(q&&ve(q,m),!Me&&(T=x&&x.onVnodeMounted)){const Ue=h;ve(()=>Fe(T,J,Ue),m)}(h.shapeFlag&256||J&&Sn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&ve(u.a,m),u.isMounted=!0,h=g=v=null}};u.scope.on();const w=u.effect=new oa(E);u.scope.off();const y=u.update=w.run.bind(w),k=u.job=w.runIfDirty.bind(w);k.i=u,k.id=u.uid,w.scheduler=()=>ri(k),kt(u,!0),y()},Z=(u,h,g)=>{h.component=u;const v=u.vnode.props;u.vnode=h,u.next=null,Lu(u,h.props,v,g),Fu(u,h.children,g),at(),Fi(u),ct()},G=(u,h,g,v,m,_,I,E,w=!1)=>{const y=u&&u.children,k=u?u.shapeFlag:0,T=h.children,{patchFlag:R,shapeFlag:x}=h;if(R>0){if(R&128){Xn(y,T,g,v,m,_,I,E,w);return}else if(R&256){At(y,T,g,v,m,_,I,E,w);return}}x&8?(k&16&&cn(y,m,_),T!==y&&f(g,T)):k&16?x&16?Xn(y,T,g,v,m,_,I,E,w):cn(y,m,_,!0):(k&8&&f(g,""),x&16&&be(T,g,v,m,_,I,E,w))},At=(u,h,g,v,m,_,I,E,w)=>{u=u||Wt,h=h||Wt;const y=u.length,k=h.length,T=Math.min(y,k);let R;for(R=0;R<T;R++){const x=h[R]=w?Ze(h[R]):Ve(h[R]);C(u[R],x,g,null,m,_,I,E,w)}y>k?cn(u,m,_,!0,!1,T):be(h,g,v,m,_,I,E,w,T)},Xn=(u,h,g,v,m,_,I,E,w)=>{let y=0;const k=h.length;let T=u.length-1,R=k-1;for(;y<=T&&y<=R;){const x=u[y],H=h[y]=w?Ze(h[y]):Ve(h[y]);if(hn(x,H))C(x,H,g,null,m,_,I,E,w);else break;y++}for(;y<=T&&y<=R;){const x=u[T],H=h[R]=w?Ze(h[R]):Ve(h[R]);if(hn(x,H))C(x,H,g,null,m,_,I,E,w);else break;T--,R--}if(y>T){if(y<=R){const x=R+1,H=x<k?h[x].el:v;for(;y<=R;)C(null,h[y]=w?Ze(h[y]):Ve(h[y]),g,H,m,_,I,E,w),y++}}else if(y>R)for(;y<=T;)Le(u[y],m,_,!0),y++;else{const x=y,H=y,q=new Map;for(y=H;y<=R;y++){const we=h[y]=w?Ze(h[y]):Ve(h[y]);we.key!=null&&q.set(we.key,y)}let J,ne=0;const re=R-H+1;let Me=!1,Ue=0;const un=new Array(re);for(y=0;y<re;y++)un[y]=0;for(y=x;y<=T;y++){const we=u[y];if(ne>=re){Le(we,m,_,!0);continue}let Be;if(we.key!=null)Be=q.get(we.key);else for(J=H;J<=R;J++)if(un[J-H]===0&&hn(we,h[J])){Be=J;break}Be===void 0?Le(we,m,_,!0):(un[Be-H]=y+1,Be>=Ue?Ue=Be:Me=!0,C(we,h[Be],g,null,m,_,I,E,w),ne++)}const Ni=Me?ju(un):Wt;for(J=Ni.length-1,y=re-1;y>=0;y--){const we=H+y,Be=h[we],xi=h[we+1],Di=we+1<k?xi.el||Ga(xi):v;un[y]===0?C(null,Be,g,Di,m,_,I,E,w):Me&&(J<0||y!==Ni[J]?Rt(Be,g,Di,2):J--)}}},Rt=(u,h,g,v,m=null)=>{const{el:_,type:I,transition:E,children:w,shapeFlag:y}=u;if(y&6){Rt(u.component.subTree,h,g,v);return}if(y&128){u.suspense.move(h,g,v);return}if(y&64){I.move(u,h,g,ln);return}if(I===me){s(_,h,g);for(let T=0;T<w.length;T++)Rt(w[T],h,g,v);s(u.anchor,h,g);return}if(I===sr){F(u,h,g);return}if(v!==2&&y&1&&E)if(v===0)E.beforeEnter(_),s(_,h,g),ve(()=>E.enter(_),m);else{const{leave:T,delayLeave:R,afterLeave:x}=E,H=()=>{u.ctx.isUnmounted?r(_):s(_,h,g)},q=()=>{_._isLeaving&&_[ou](!0),T(_,()=>{H(),x&&x()})};R?R(_,H,q):q()}else s(_,h,g)},Le=(u,h,g,v=!1,m=!1)=>{const{type:_,props:I,ref:E,children:w,dynamicChildren:y,shapeFlag:k,patchFlag:T,dirs:R,cacheIndex:x,memo:H}=u;if(T===-2&&(m=!1),E!=null&&(at(),Tn(E,null,g,u,!0),ct()),x!=null&&(h.renderCache[x]=void 0),k&256){h.ctx.deactivate(u);return}const q=k&1&&R,J=!Sn(u);let ne;if(J&&(ne=I&&I.onVnodeBeforeUnmount)&&Fe(ne,h,u),k&6)ll(u.component,g,v);else{if(k&128){u.suspense.unmount(g,v);return}q&&Ot(u,null,h,"beforeUnmount"),k&64?u.type.remove(u,h,g,ln,v):y&&!y.hasOnce&&(_!==me||T>0&&T&64)?cn(y,h,g,!1,!0):(_===me&&T&384||!m&&k&16)&&cn(w,h,g),v&&ki(u)}const re=H!=null&&x==null;(J&&(ne=I&&I.onVnodeUnmounted)||q||re)&&ve(()=>{ne&&Fe(ne,h,u),q&&Ot(u,null,h,"unmounted"),re&&(u.el=null)},g)},ki=u=>{const{type:h,el:g,anchor:v,transition:m}=u;if(h===me){cl(g,v);return}if(h===sr){S(u);return}const _=()=>{r(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:I,delayLeave:E}=m,w=()=>I(g,_);E?E(u.el,_,w):w()}else _()},cl=(u,h)=>{let g;for(;u!==h;)g=p(u),r(u),u=g;r(h)},ll=(u,h,g)=>{const{bum:v,scope:m,job:_,subTree:I,um:E,m:w,a:y}=u;Ji(w),Ji(y),v&&is(v),m.stop(),_&&(_.flags|=8,Le(I,u,h,g)),E&&ve(E,h),ve(()=>{u.isUnmounted=!0},h)},cn=(u,h,g,v=!1,m=!1,_=0)=>{for(let I=_;I<u.length;I++)Le(u[I],h,g,v,m)},Qn=u=>{if(u.shapeFlag&6)return Qn(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const h=p(u.anchor||u.el),g=h&&h[ru];return g?p(g):h};let Gs=!1;const Pi=(u,h,g)=>{let v;u==null?h._vnode&&(Le(h._vnode,null,null,!0),v=h._vnode.component):C(h._vnode||null,u,h,null,null,null,g),h._vnode=u,Gs||(Gs=!0,Fi(v),Sa(),Gs=!1)},ln={p:C,um:Le,m:Rt,r:ki,mt:zs,mc:be,pc:G,pbc:Re,n:Qn,o:t};return{render:Pi,hydrate:void 0,createApp:Cu(Pi)}}function nr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Vu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ka(t,e,n=!1){const s=t.children,r=e.children;if(D(s)&&D(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ze(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ka(o,a)),a.type===Fs&&(a.patchFlag===-1&&(a=r[i]=Ze(a)),a.el=o.el),a.type===It&&!a.el&&(a.el=o.el)}}function ju(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function za(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:za(e)}function Ji(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Ga(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Ga(e.subTree):null}const Ja=t=>t.__isSuspense;function Wu(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):Ql(t)}const me=Symbol.for("v-fgt"),Fs=Symbol.for("v-txt"),It=Symbol.for("v-cmt"),sr=Symbol.for("v-stc"),An=[];let Ee=null;function X(t=!1){An.push(Ee=t?null:[])}function qu(){An.pop(),Ee=An[An.length-1]||null}let Dn=1;function Yi(t,e=!1){Dn+=t,t<0&&Ee&&e&&(Ee.hasOnce=!0)}function Ya(t){return t.dynamicChildren=Dn>0?Ee||Wt:null,qu(),Dn>0&&Ee&&Ee.push(t),t}function ee(t,e,n,s,r,i){return Ya(M(t,e,n,s,r,i,!0))}function Cr(t,e,n,s,r){return Ya(it(t,e,n,s,r,!0))}function Xa(t){return t?t.__v_isVNode===!0:!1}function hn(t,e){return t.type===e.type&&t.key===e.key}const Qa=({key:t})=>t??null,as=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?te(t)||le(t)||U(t)?{i:Se,r:t,k:e,f:!!n}:t:null);function M(t,e=null,n=null,s=0,r=null,i=t===me?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qa(e),ref:e&&as(e),scopeId:Aa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Se};return a?(ui(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=te(n)?8:16),Dn>0&&!o&&Ee&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ee.push(c),c}const it=Ku;function Ku(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===yu)&&(t=It),Xa(t)){const a=en(t,e,!0);return n&&ui(a,n),Dn>0&&!i&&Ee&&(a.shapeFlag&6?Ee[Ee.indexOf(t)]=a:Ee.push(a)),a.patchFlag=-2,a}if(sf(t)&&(t=t.__vccOpts),e){e=zu(e);let{class:a,style:c}=e;a&&!te(a)&&(e.class=vt(a)),W(c)&&(si(c)&&!D(c)&&(c=ue({},c)),e.style=Jr(c))}const o=te(t)?1:Ja(t)?128:iu(t)?64:W(t)?4:U(t)?2:0;return M(t,e,n,s,r,o,i,!0)}function zu(t){return t?si(t)||$a(t)?ue({},t):t:null}function en(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Gu(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Qa(l),ref:e&&e.ref?n&&i?D(i)?i.concat(as(e)):[i,as(e)]:as(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==me?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&en(t.ssContent),ssFallback:t.ssFallback&&en(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&ii(f,c.clone(f)),f}function li(t=" ",e=0){return it(Fs,null,t,e)}function Xi(t="",e=!1){return e?(X(),Cr(It,null,t)):it(It,null,t)}function Ve(t){return t==null||typeof t=="boolean"?it(It):D(t)?it(me,null,t.slice()):Xa(t)?Ze(t):it(Fs,null,String(t))}function Ze(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:en(t)}function ui(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ui(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!$a(e)?e._ctx=Se:r===3&&Se&&(Se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:Se},n=32):(e=String(e),s&64?(n=16,e=[li(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=vt([e.class,s.class]));else if(r==="style")e.style=Jr([e.style,s.style]);else if(ks(r)){const i=e[r],o=s[r];o&&i!==o&&!(D(i)&&i.includes(o))?e[r]=i?[].concat(i,o):o:o==null&&i==null&&!Ps(r)&&(e[r]=o)}else r!==""&&(e[r]=s[r])}return e}function Fe(t,e,n,s=null){Ge(t,e,7,[n,s])}const Ju=La();let Yu=0;function Xu(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Ju,i={uid:Yu++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Va(s,r),emitsOptions:Ma(s,r),emit:null,emitted:null,propsDefaults:z,inheritAttrs:s.inheritAttrs,ctx:z,data:z,props:z,attrs:z,slots:z,refs:z,setupState:z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ru.bind(null,i),t.ce&&t.ce(i),i}let _e=null;const Qu=()=>_e||Se;let ws,Ar;{const t=xs(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ws=e("__VUE_INSTANCE_SETTERS__",n=>_e=n),Ar=e("__VUE_SSR_SETTERS__",n=>Ln=n)}const Hn=t=>{const e=_e;return ws(t),t.scope.on(),()=>{t.scope.off(),ws(e)}},Qi=()=>{_e&&_e.scope.off(),ws(null)};function Za(t){return t.vnode.shapeFlag&4}let Ln=!1;function Zu(t,e=!1,n=!1){e&&Ar(e);const{props:s,children:r}=t.vnode,i=Za(t);Du(t,s,i,e),Bu(t,r,n||e);const o=i?ef(t,e):void 0;return e&&Ar(!1),o}function ef(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,vu);const{setup:s}=n;if(s){at();const r=t.setupContext=s.length>1?nf(t):null,i=Hn(t),o=$n(s,t,0,[t.props,r]),a=Qo(o);if(ct(),i(),(a||t.sp)&&!Sn(t)&&ka(t),a){if(o.then(Qi,Qi),e)return o.then(c=>{Zi(t,c)}).catch(c=>{Ls(c,t,0)});t.asyncDep=o}else Zi(t,o)}else ec(t)}function Zi(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:W(e)&&(t.setupState=wa(e)),ec(t)}function ec(t,e,n){const s=t.type;t.render||(t.render=s.render||We);{const r=Hn(t);at();try{bu(t)}finally{ct(),r()}}}const tf={get(t,e){return ce(t,"get",""),t[e]}};function nf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tf),slots:t.slots,emit:t.emit,expose:e}}function $s(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(wa(Vl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cn)return Cn[n](t)},has(e,n){return n in e||n in Cn}})):t.proxy}function sf(t){return U(t)&&"__vccOpts"in t}const rf=(t,e)=>zl(t,e,Ln),of="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rr;const eo=typeof window<"u"&&window.trustedTypes;if(eo)try{Rr=eo.createPolicy("vue",{createHTML:t=>t})}catch{}const tc=Rr?t=>Rr.createHTML(t):t=>t,af="http://www.w3.org/2000/svg",cf="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,to=Qe&&Qe.createElement("template"),lf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Qe.createElementNS(af,t):e==="mathml"?Qe.createElementNS(cf,t):n?Qe.createElement(t,{is:n}):Qe.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Qe.createTextNode(t),createComment:t=>Qe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{to.innerHTML=tc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=to.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},uf=Symbol("_vtc");function ff(t,e,n){const s=t[uf];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const no=Symbol("_vod"),hf=Symbol("_vsh"),df=Symbol(""),pf=/(?:^|;)\s*display\s*:/;function gf(t,e,n){const s=t.style,r=te(n);let i=!1;if(n&&!r){if(e)if(te(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&gn(s,a,"")}else for(const o in e)n[o]==null&&gn(s,o,"");for(const o in n){o==="display"&&(i=!0);const a=n[o];a!=null?_f(t,o,!te(e)&&e?e[o]:void 0,a)||gn(s,o,a):gn(s,o,"")}}else if(r){if(e!==n){const o=s[df];o&&(n+=";"+o),s.cssText=n,i=pf.test(n)}}else e&&t.removeAttribute("style");no in t&&(t[no]=i?s.display:"",t[hf]&&(s.display="none"))}const so=/\s*!important$/;function gn(t,e,n){if(D(n))n.forEach(s=>gn(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=mf(t,e);so.test(n)?t.setProperty($t(s),n.replace(so,""),"important"):t[s]=n}}const ro=["Webkit","Moz","ms"],rr={};function mf(t,e){const n=rr[e];if(n)return n;let s=Pe(e);if(s!=="filter"&&s in t)return rr[e]=s;s=ta(s);for(let r=0;r<ro.length;r++){const i=ro[r]+s;if(i in t)return rr[e]=i}return e}function _f(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&te(s)&&n===s}const io="http://www.w3.org/1999/xlink";function oo(t,e,n,s,r,i=vl(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(io,e.slice(6,e.length)):t.setAttributeNS(io,e,n):n==null||i&&!sa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ze(n)?String(n):n)}function ao(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=sa(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function xt(t,e,n,s){t.addEventListener(e,n,s)}function yf(t,e,n,s){t.removeEventListener(e,n,s)}const co=Symbol("_vei");function vf(t,e,n,s,r=null){const i=t[co]||(t[co]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=bf(e);if(s){const l=i[e]=If(s,r);xt(t,a,l,c)}else o&&(yf(t,a,o,c),i[e]=void 0)}}const lo=/(?:Once|Passive|Capture)$/;function bf(t){let e;if(lo.test(t)){e={};let s;for(;s=t.match(lo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$t(t.slice(2)),e]}let ir=0;const wf=Promise.resolve(),Ef=()=>ir||(wf.then(()=>ir=0),ir=Date.now());function If(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ge(Tf(s,n.value),e,5,[s])};return n.value=t,n.attached=Ef(),n}function Tf(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const uo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sf=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?ff(t,s,o):e==="style"?gf(t,n,s):ks(e)?Ps(e)||vf(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cf(t,e,s,o))?(ao(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&oo(t,e,s,o,i,e!=="value")):t._isVueCE&&(Af(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!te(s)))?ao(t,Pe(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),oo(t,e,s,o))};function Cf(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&uo(e)&&U(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return uo(e)&&te(n)?!1:e in t}function Af(t,e){const n=t._def.props;if(!n)return!1;const s=Pe(e);return Array.isArray(n)?n.some(r=>Pe(r)===s):Object.keys(n).some(r=>Pe(r)===s)}const Es=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>is(e,n):e};function Rf(t){t.target.composing=!0}function fo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gt=Symbol("_assign");function ho(t,e,n){return e&&(t=t.trim()),n&&(t=Gr(t)),t}const mn={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Gt]=Es(r);const i=s||r.props&&r.props.type==="number";xt(t,e?"change":"input",o=>{o.target.composing||t[Gt](ho(t.value,n,i))}),(n||i)&&xt(t,"change",()=>{t.value=ho(t.value,n,i)}),e||(xt(t,"compositionstart",Rf),xt(t,"compositionend",fo),xt(t,"change",fo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Gt]=Es(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Gr(t.value):t.value,c=e??"";if(a===c)return;const l=t.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c)}},Of={created(t,{value:e},n){t.checked=kn(e,n.props.value),t[Gt]=Es(n),xt(t,"change",()=>{t[Gt](kf(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[Gt]=Es(s),e!==n&&(t.checked=kn(e,s.props.value))}};function kf(t){return"_value"in t?t._value:t.value}const Pf=["ctrl","shift","alt","meta"],Nf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pf.some(n=>t[`${n}Key`]&&!e.includes(n))},Or=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const a=Nf[e[o]];if(a&&a(r,e))return}return t(r,...i)}))},xf=ue({patchProp:Sf},lf);let po;function Df(){return po||(po=$u(xf))}const Lf=((...t)=>{const e=Df().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Uf(s);if(!r)return;const i=e._component;!U(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Mf(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Mf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Uf(t){return te(t)?document.querySelector(t):t}const Bf=()=>{};var go={};/**
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
 */const nc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ff=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,f=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,b=l&63;c||(b=64,o||(p=64)),s.push(n[f],n[d],n[p],n[b])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ff(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw new $f;const p=i<<2|a>>4;if(s.push(p),l!==64){const b=a<<4&240|l>>2;if(s.push(b),d!==64){const A=l<<6&192|d;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $f extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hf=function(t){const e=nc(t);return sc.encodeByteArray(e,!0)},rc=function(t){return Hf(t).replace(/\./g,"")},ic=function(t){try{return sc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jf=()=>Vf().__FIREBASE_DEFAULTS__,Wf=()=>{if(typeof process>"u"||typeof go>"u")return;const t=go.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ic(t[1]);return e&&JSON.parse(e)},fi=()=>{try{return Bf()||jf()||Wf()||qf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kf=t=>{var e,n;return(n=(e=fi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oc=()=>{var t;return(t=fi())===null||t===void 0?void 0:t.config},ac=t=>{var e;return(e=fi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gf(t){return(await fetch(t,{credentials:"include"})).ok}const Rn={};function Jf(){const t={prod:[],emulator:[]};for(const e of Object.keys(Rn))Rn[e]?t.emulator.push(e):t.prod.push(e);return t}function Yf(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let mo=!1;function Xf(t,e){if(typeof window>"u"||typeof document>"u"||!Hs(window.location.host)||Rn[t]===e||Rn[t]||mo)return;Rn[t]=e;function n(p){return`__firebase__banner__${p}`}const s="__firebase__banner",i=Jf().prod.length>0;function o(){const p=document.getElementById(s);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,b){p.setAttribute("width","24"),p.setAttribute("id",b),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function l(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{mo=!0,o()},p}function f(p,b){p.setAttribute("id",b),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=Yf(s),b=n("text"),A=document.getElementById(b)||document.createElement("span"),C=n("learnmore"),B=document.getElementById(C)||document.createElement("a"),P=n("preprendIcon"),L=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const F=p.element;a(F),f(B,C);const S=l();c(L,P),F.append(L,A,B,S),document.body.appendChild(F)}i?(A.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function Zf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function th(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nh(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sh(){try{return typeof indexedDB=="object"}catch{return!1}}function rh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ih="FirebaseError";class Tt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ih,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vn.prototype.create)}}class Vn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?oh(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Tt(r,a,s)}}function oh(t,e){return t.replace(ah,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ah=/\{\$([^}]+)}/g;function ch(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(_o(i)&&_o(o)){if(!tn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function _o(t){return t!==null&&typeof t=="object"}/**
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
 */function jn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _n(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function yn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lh(t,e){const n=new uh(t,e);return n.subscribe.bind(n)}class uh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");fh(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=or),r.error===void 0&&(r.error=or),r.complete===void 0&&(r.complete=or);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function or(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nt="[DEFAULT]";/**
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
 */class hh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ph(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dh(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dh(t){return t===Nt?void 0:t}function ph(t){return t.instantiationMode==="EAGER"}/**
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
 */class gh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const mh={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},_h=K.INFO,yh={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},vh=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=yh[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cc{constructor(e){this.name=e,this._logLevel=_h,this._logHandler=vh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const bh=(t,e)=>e.some(n=>t instanceof n);let yo,vo;function wh(){return yo||(yo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Eh(){return vo||(vo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lc=new WeakMap,kr=new WeakMap,uc=new WeakMap,ar=new WeakMap,hi=new WeakMap;function Ih(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lc.set(n,t)}).catch(()=>{}),hi.set(e,t),e}function Th(t){if(kr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kr.set(t,e)}let Pr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sh(t){Pr=t(Pr)}function Ch(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(cr(this),e,...n);return uc.set(s,e.sort?e.sort():[e]),bt(s)}:Eh().includes(t)?function(...e){return t.apply(cr(this),e),bt(lc.get(this))}:function(...e){return bt(t.apply(cr(this),e))}}function Ah(t){return typeof t=="function"?Ch(t):(t instanceof IDBTransaction&&Th(t),bh(t,wh())?new Proxy(t,Pr):t)}function bt(t){if(t instanceof IDBRequest)return Ih(t);if(ar.has(t))return ar.get(t);const e=Ah(t);return e!==t&&(ar.set(t,e),hi.set(e,t)),e}const cr=t=>hi.get(t);function Rh(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=bt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(bt(o.result),c.oldVersion,c.newVersion,bt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Oh=["get","getKey","getAll","getAllKeys","count"],kh=["put","add","delete","clear"],lr=new Map;function bo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lr.get(e))return lr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=kh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Oh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return lr.set(e,i),i}Sh(t=>({...t,get:(e,n,s)=>bo(e,n)||t.get(e,n,s),has:(e,n)=>!!bo(e,n)||t.has(e,n)}));/**
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
 */class Ph{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Nh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nr="@firebase/app",wo="0.13.2";/**
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
 */const ut=new cc("@firebase/app"),xh="@firebase/app-compat",Dh="@firebase/analytics-compat",Lh="@firebase/analytics",Mh="@firebase/app-check-compat",Uh="@firebase/app-check",Bh="@firebase/auth",Fh="@firebase/auth-compat",$h="@firebase/database",Hh="@firebase/data-connect",Vh="@firebase/database-compat",jh="@firebase/functions",Wh="@firebase/functions-compat",qh="@firebase/installations",Kh="@firebase/installations-compat",zh="@firebase/messaging",Gh="@firebase/messaging-compat",Jh="@firebase/performance",Yh="@firebase/performance-compat",Xh="@firebase/remote-config",Qh="@firebase/remote-config-compat",Zh="@firebase/storage",ed="@firebase/storage-compat",td="@firebase/firestore",nd="@firebase/ai",sd="@firebase/firestore-compat",rd="firebase",id="11.10.0";/**
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
 */const xr="[DEFAULT]",od={[Nr]:"fire-core",[xh]:"fire-core-compat",[Lh]:"fire-analytics",[Dh]:"fire-analytics-compat",[Uh]:"fire-app-check",[Mh]:"fire-app-check-compat",[Bh]:"fire-auth",[Fh]:"fire-auth-compat",[$h]:"fire-rtdb",[Hh]:"fire-data-connect",[Vh]:"fire-rtdb-compat",[jh]:"fire-fn",[Wh]:"fire-fn-compat",[qh]:"fire-iid",[Kh]:"fire-iid-compat",[zh]:"fire-fcm",[Gh]:"fire-fcm-compat",[Jh]:"fire-perf",[Yh]:"fire-perf-compat",[Xh]:"fire-rc",[Qh]:"fire-rc-compat",[Zh]:"fire-gcs",[ed]:"fire-gcs-compat",[td]:"fire-fst",[sd]:"fire-fst-compat",[nd]:"fire-vertex","fire-js":"fire-js",[rd]:"fire-js-all"};/**
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
 */const Is=new Map,ad=new Map,Dr=new Map;function Eo(t,e){try{t.container.addComponent(e)}catch(n){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mn(t){const e=t.name;if(Dr.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;Dr.set(e,t);for(const n of Is.values())Eo(n,t);for(const n of ad.values())Eo(n,t);return!0}function fc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Te(t){return t==null?!1:t.settings!==void 0}/**
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
 */const cd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new Vn("app","Firebase",cd);/**
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
 */class ld{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const Wn=id;function hc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:xr,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw wt.create("bad-app-name",{appName:String(r)});if(n||(n=oc()),!n)throw wt.create("no-options");const i=Is.get(r);if(i){if(tn(n,i.options)&&tn(s,i.config))return i;throw wt.create("duplicate-app",{appName:r})}const o=new gh(r);for(const c of Dr.values())o.addComponent(c);const a=new ld(n,s,o);return Is.set(r,a),a}function ud(t=xr){const e=Is.get(t);if(!e&&t===xr&&oc())return hc();if(!e)throw wt.create("no-app",{appName:t});return e}function Jt(t,e,n){var s;let r=(s=od[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(a.join(" "));return}Mn(new nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const fd="firebase-heartbeat-database",hd=1,Un="firebase-heartbeat-store";let ur=null;function dc(){return ur||(ur=Rh(fd,hd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Un)}catch(n){console.warn(n)}}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),ur}async function dd(t){try{const n=(await dc()).transaction(Un),s=await n.objectStore(Un).get(pc(t));return await n.done,s}catch(e){if(e instanceof Tt)ut.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ut.warn(n.message)}}}async function Io(t,e){try{const s=(await dc()).transaction(Un,"readwrite");await s.objectStore(Un).put(e,pc(t)),await s.done}catch(n){if(n instanceof Tt)ut.warn(n.message);else{const s=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ut.warn(s.message)}}}function pc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pd=1024,gd=30;class md{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yd(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=To();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>gd){const o=vd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ut.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=To(),{heartbeatsToSend:s,unsentEntries:r}=_d(this._heartbeatsCache.heartbeats),i=rc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ut.warn(n),""}}}function To(){return new Date().toISOString().substring(0,10)}function _d(t,e=pd){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),So(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),So(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sh()?rh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function So(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}function vd(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function bd(t){Mn(new nn("platform-logger",e=>new Ph(e),"PRIVATE")),Mn(new nn("heartbeat",e=>new md(e),"PRIVATE")),Jt(Nr,wo,t),Jt(Nr,wo,"esm2017"),Jt("fire-js","")}bd("");function di(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function gc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wd=gc,mc=new Vn("auth","Firebase",gc());/**
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
 */const Ts=new cc("@firebase/auth");function Ed(t,...e){Ts.logLevel<=K.WARN&&Ts.warn(`Auth (${Wn}): ${t}`,...e)}function cs(t,...e){Ts.logLevel<=K.ERROR&&Ts.error(`Auth (${Wn}): ${t}`,...e)}/**
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
 */function Ae(t,...e){throw gi(t,...e)}function xe(t,...e){return gi(t,...e)}function pi(t,e,n){const s=Object.assign(Object.assign({},wd()),{[e]:n});return new Vn("auth","Firebase",s).create(e,{appName:t.name})}function ot(t){return pi(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Id(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ae(t,"argument-error"),pi(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return mc.create(t,...e)}function N(t,e,...n){if(!t)throw gi(e,...n)}function st(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cs(e),new Error(e)}function ft(t,e){t||st(e)}/**
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
 */function Lr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Td(){return Co()==="http:"||Co()==="https:"}function Co(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Sd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Td()||eh()||"connection"in navigator)?navigator.onLine:!0}function Cd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ft(n>e,"Short delay should be less than long delay!"),this.isMobile=Qf()||th()}get(){return Sd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mi(t,e){ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _c{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ad={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Rd=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Od=new qn(3e4,6e4);function St(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dt(t,e,n,s,r={}){return yc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=jn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return Zf()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&Hs(t.emulatorConfig.host)&&(l.credentials="include"),_c.fetch()(await vc(t,t.config.apiHost,n,a),l)})}async function yc(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ad),e);try{const r=new Pd(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ns(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ns(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ns(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ns(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw pi(t,f,l);Ae(t,f)}}catch(r){if(r instanceof Tt)throw r;Ae(t,"network-request-failed",{message:String(r)})}}async function Kn(t,e,n,s,r={}){const i=await dt(t,e,n,s,r);return"mfaPendingCredential"in i&&Ae(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function vc(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?mi(t.config,r):`${t.config.apiScheme}://${r}`;return Rd.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function kd(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pd{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(xe(this.auth,"network-request-failed")),Od.get())})}}function ns(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=xe(t,e,s);return r.customData._tokenResponse=n,r}function Ao(t){return t!==void 0&&t.enterprise!==void 0}class Nd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kd(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xd(t,e){return dt(t,"GET","/v2/recaptchaConfig",St(t,e))}/**
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
 */async function Dd(t,e){return dt(t,"POST","/v1/accounts:delete",e)}async function Ss(t,e){return dt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ld(t,e=!1){const n=Ye(t),s=await n.getIdToken(e),r=_i(s);N(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:On(fr(r.auth_time)),issuedAtTime:On(fr(r.iat)),expirationTime:On(fr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fr(t){return Number(t)*1e3}function _i(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const r=ic(n);return r?JSON.parse(r):(cs("Failed to decode base64 JWT payload"),null)}catch(r){return cs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ro(t){const e=_i(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function sn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Tt&&Md(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Md({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ud{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await sn(t,Ss(n,{idToken:s}));N(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bc(i.providerUserInfo):[],a=Fd(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Mr(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function Bd(t){const e=Ye(t);await Cs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fd(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function bc(t){return t.map(e=>{var{providerId:n}=e,s=di(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function $d(t,e){const n=await yc(t,{},async()=>{const s=jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await vc(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return t.emulatorConfig&&Hs(t.emulatorConfig.host)&&(c.credentials="include"),_c.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Hd(t,e){return dt(t,"POST","/v2/accounts:revokeToken",St(t,e))}/**
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
 */class Yt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ro(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){N(e.length!==0,"internal-error");const n=Ro(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await $d(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Yt;return s&&(N(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(N(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(N(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yt,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function pt(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ke{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=di(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ud(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await sn(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ld(this,e)}reload(){return Bd(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ke(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Cs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Te(this.auth.app))return Promise.reject(ot(this.auth));const e=await this.getIdToken();return await sn(this,Dd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,f;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,B=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:S,isAnonymous:O,providerData:fe,stsTokenManager:ae}=n;N(F&&ae,e,"internal-error");const be=Yt.fromJSON(this.name,ae);N(typeof F=="string",e,"internal-error"),pt(d,e.name),pt(p,e.name),N(typeof S=="boolean",e,"internal-error"),N(typeof O=="boolean",e,"internal-error"),pt(b,e.name),pt(A,e.name),pt(C,e.name),pt(B,e.name),pt(P,e.name),pt(L,e.name);const Q=new ke({uid:F,auth:e,email:p,emailVerified:S,displayName:d,isAnonymous:O,photoURL:A,phoneNumber:b,tenantId:C,stsTokenManager:be,createdAt:P,lastLoginAt:L});return fe&&Array.isArray(fe)&&(Q.providerData=fe.map(Re=>Object.assign({},Re))),B&&(Q._redirectEventId=B),Q}static async _fromIdTokenResponse(e,n,s=!1){const r=new Yt;r.updateFromServerResponse(n);const i=new ke({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Cs(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];N(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?bc(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Yt;a.updateFromIdToken(s);const c=new ke({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Mr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Oo=new Map;function rt(t){ft(t instanceof Function,"Expected a class definition");let e=Oo.get(t);return e?(ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Oo.set(t,e),e)}/**
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
 */class wc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wc.type="NONE";const ko=wc;/**
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
 */function ls(t,e,n){return`firebase:${t}:${e}:${n}`}class Xt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ls(this.userKey,r.apiKey,i),this.fullPersistenceKey=ls("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ss(this.auth,{idToken:e}).catch(()=>{});return n?ke._fromGetAccountInfoResponse(this.auth,n,e):null}return ke._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Xt(rt(ko),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||rt(ko);const o=ls(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){let d;if(typeof f=="string"){const p=await Ss(e,{idToken:f}).catch(()=>{});if(!p)break;d=await ke._fromGetAccountInfoResponse(e,p,f)}else d=ke._fromJSON(e,f);l!==i&&(a=d),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Xt(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Xt(i,e,s))}}/**
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
 */function Po(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ec(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ac(e))return"Blackberry";if(Rc(e))return"Webos";if(Ic(e))return"Safari";if((e.includes("chrome/")||Tc(e))&&!e.includes("edge/"))return"Chrome";if(Cc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ec(t=ye()){return/firefox\//i.test(t)}function Ic(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tc(t=ye()){return/crios\//i.test(t)}function Sc(t=ye()){return/iemobile/i.test(t)}function Cc(t=ye()){return/android/i.test(t)}function Ac(t=ye()){return/blackberry/i.test(t)}function Rc(t=ye()){return/webos/i.test(t)}function yi(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vd(t=ye()){var e;return yi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jd(){return nh()&&document.documentMode===10}function Oc(t=ye()){return yi(t)||Cc(t)||Rc(t)||Ac(t)||/windows phone/i.test(t)||Sc(t)}/**
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
 */function kc(t,e=[]){let n;switch(t){case"Browser":n=Po(ye());break;case"Worker":n=`${Po(ye())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wn}/${s}`}/**
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
 */class Wd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function qd(t,e={}){return dt(t,"GET","/v2/passwordPolicy",St(t,e))}/**
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
 */const Kd=6;class zd{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Kd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Gd{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new No(this),this.idTokenSubscription=new No(this),this.beforeStateQueue=new Wd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Xt.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ss(this,{idToken:e}),s=await ke._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Te(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Te(this.app))return Promise.reject(ot(this));const n=e?Ye(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Te(this.app)?Promise.reject(ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Te(this.app)?Promise.reject(ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qd(this),n=new zd(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Hd(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Xt.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(Te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ed(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ct(t){return Ye(t)}class No{constructor(e){this.auth=e,this.observer=null,this.addObserver=lh(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jd(t){Vs=t}function Pc(t){return Vs.loadJS(t)}function Yd(){return Vs.recaptchaEnterpriseScript}function Xd(){return Vs.gapiScript}function Qd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Zd{constructor(){this.enterprise=new ep}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ep{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const tp="recaptcha-enterprise",Nc="NO_RECAPTCHA";class np{constructor(e){this.type=tp,this.auth=Ct(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{xd(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Nd(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Ao(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Nc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Zd().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Ao(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Yd();c.length!==0&&(c+=a),Pc(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function xo(t,e,n,s=!1,r=!1){const i=new np(t);let o;if(r)o=Nc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ur(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await xo(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await xo(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function sp(t,e){const n=fc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(tn(i,e??{}))return r;Ae(r,"already-initialized")}return n.initialize({options:e})}function rp(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ip(t,e,n){const s=Ct(t);N(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=xc(e),{host:o,port:a}=op(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){N(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),N(tn(l,s.config.emulator)&&tn(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,Hs(o)?(Gf(`${i}//${o}${c}`),Xf("Auth",!0)):ap()}function xc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function op(t){const e=xc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Do(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Do(o)}}}function Do(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ap(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,n){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}async function cp(t,e){return dt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lp(t,e){return Kn(t,"POST","/v1/accounts:signInWithPassword",St(t,e))}/**
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
 */async function up(t,e){return Kn(t,"POST","/v1/accounts:signInWithEmailLink",St(t,e))}async function fp(t,e){return Kn(t,"POST","/v1/accounts:signInWithEmailLink",St(t,e))}/**
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
 */class Bn extends vi{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Bn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Bn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ur(e,n,"signInWithPassword",lp);case"emailLink":return up(e,{email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ur(e,s,"signUpPassword",cp);case"emailLink":return fp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qt(t,e){return Kn(t,"POST","/v1/accounts:signInWithIdp",St(t,e))}/**
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
 */const hp="http://localhost";class Bt extends vi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ae("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=di(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Bt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Qt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qt(e,n)}buildRequest(){const e={requestUri:hp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jn(n)}return e}}/**
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
 */function dp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pp(t){const e=_n(yn(t)).link,n=e?_n(yn(e)).deep_link_id:null,s=_n(yn(t)).deep_link_id;return(s?_n(yn(s)).link:null)||s||n||e||t}class bi{constructor(e){var n,s,r,i,o,a;const c=_n(yn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(s=c.oobCode)!==null&&s!==void 0?s:null,d=dp((r=c.mode)!==null&&r!==void 0?r:null);N(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=pp(e);try{return new bi(n)}catch{return null}}}/**
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
 */class rn{constructor(){this.providerId=rn.PROVIDER_ID}static credential(e,n){return Bn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=bi.parseLink(n);return N(s,"argument-error"),Bn._fromEmailAndCode(e,s.code,s.tenantId)}}rn.PROVIDER_ID="password";rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zn extends wi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mt extends zn{constructor(){super("facebook.com")}static credential(e){return Bt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
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
 */class nt extends zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return nt.credential(n,s)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
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
 */class _t extends zn{constructor(){super("github.com")}static credential(e){return Bt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
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
 */class yt extends zn{constructor(){super("twitter.com")}static credential(e,n){return Bt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return yt.credential(n,s)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
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
 */async function gp(t,e){return Kn(t,"POST","/v1/accounts:signUp",St(t,e))}/**
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
 */class Ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ke._fromIdTokenResponse(e,s,r),o=Lo(s);return new Ft({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Lo(s);return new Ft({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Lo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class As extends Tt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,As.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new As(e,n,s,r)}}function Dc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?As._fromErrorAndOperation(t,i,e,s):i})}async function mp(t,e,n=!1){const s=await sn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ft._forOperation(t,"link",s)}/**
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
 */async function _p(t,e,n=!1){const{auth:s}=t;if(Te(s.app))return Promise.reject(ot(s));const r="reauthenticate";try{const i=await sn(t,Dc(s,r,e,t),n);N(i.idToken,s,"internal-error");const o=_i(i.idToken);N(o,s,"internal-error");const{sub:a}=o;return N(t.uid===a,s,"user-mismatch"),Ft._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ae(s,"user-mismatch"),i}}/**
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
 */async function Lc(t,e,n=!1){if(Te(t.app))return Promise.reject(ot(t));const s="signIn",r=await Dc(t,s,e),i=await Ft._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function yp(t,e){return Lc(Ct(t),e)}/**
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
 */async function Mc(t){const e=Ct(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vp(t,e,n){if(Te(t.app))return Promise.reject(ot(t));const s=Ct(t),o=await Ur(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Mc(t),c}),a=await Ft._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function bp(t,e,n){return Te(t.app)?Promise.reject(ot(t)):yp(Ye(t),rn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Mc(t),s})}/**
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
 */async function wp(t,e){return dt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ep(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ye(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await sn(s,wp(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Ip(t,e,n,s){return Ye(t).onIdTokenChanged(e,n,s)}function Tp(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function Sp(t,e,n,s){return Ye(t).onAuthStateChanged(e,n,s)}function Uc(t){return Ye(t).signOut()}const Rs="__sak";/**
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
 */class Bc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rs,"1"),this.storage.removeItem(Rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Cp=1e3,Ap=10;class Fc extends Bc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);jd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ap):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Cp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fc.type="LOCAL";const Rp=Fc;/**
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
 */class $c extends Bc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$c.type="SESSION";const Hc=$c;/**
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
 */function Op(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new js(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Op(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}js.receivers=[];/**
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
 */function Ei(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ei("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qe(){return window}function Pp(t){qe().location.href=t}/**
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
 */function Vc(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function Np(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dp(){return Vc()?self:null}/**
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
 */const jc="firebaseLocalStorageDb",Lp=1,Os="firebaseLocalStorage",Wc="fbase_key";class Gn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ws(t,e){return t.transaction([Os],e?"readwrite":"readonly").objectStore(Os)}function Mp(){const t=indexedDB.deleteDatabase(jc);return new Gn(t).toPromise()}function Br(){const t=indexedDB.open(jc,Lp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Os,{keyPath:Wc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Os)?e(s):(s.close(),await Mp(),e(await Br()))})})}async function Mo(t,e,n){const s=Ws(t,!0).put({[Wc]:e,value:n});return new Gn(s).toPromise()}async function Up(t,e){const n=Ws(t,!1).get(e),s=await new Gn(n).toPromise();return s===void 0?null:s.value}function Uo(t,e){const n=Ws(t,!0).delete(e);return new Gn(n).toPromise()}const Bp=800,Fp=3;class qc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Br(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Fp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=js._getInstance(Dp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Np(),!this.activeServiceWorker)return;this.sender=new kp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Br();return await Mo(e,Rs,"1"),await Uo(e,Rs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Up(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ws(r,!1).getAll();return new Gn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qc.type="LOCAL";const $p=qc;new qn(3e4,6e4);/**
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
 */function Kc(t,e){return e?rt(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ii extends vi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hp(t){return Lc(t.auth,new Ii(t),t.bypassAuthState)}function Vp(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),_p(n,new Ii(t),t.bypassAuthState)}async function jp(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),mp(n,new Ii(t),t.bypassAuthState)}/**
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
 */class zc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hp;case"linkViaPopup":case"linkViaRedirect":return jp;case"reauthViaPopup":case"reauthViaRedirect":return Vp;default:Ae(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Wp=new qn(2e3,1e4);async function qp(t,e,n){if(Te(t.app))return Promise.reject(xe(t,"operation-not-supported-in-this-environment"));const s=Ct(t);Id(t,e,wi);const r=Kc(s,n);return new Lt(s,"signInViaPopup",e,r).executeNotNull()}class Lt extends zc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Ei();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wp.get())};e()}}Lt.currentPopupAction=null;/**
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
 */const Kp="pendingRedirect",us=new Map;class zp extends zc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=us.get(this.auth._key());if(!e){try{const s=await Gp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}us.set(this.auth._key(),e)}return this.bypassAuthState||us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gp(t,e){const n=Xp(e),s=Yp(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Jp(t,e){us.set(t._key(),e)}function Yp(t){return rt(t._redirectPersistence)}function Xp(t){return ls(Kp,t.config.apiKey,t.name)}async function Qp(t,e,n=!1){if(Te(t.app))return Promise.reject(ot(t));const s=Ct(t),r=Kc(s,e),o=await new zp(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Zp=600*1e3;class eg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Gc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(xe(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bo(e))}saveEventToCache(e){this.cachedEventUids.add(Bo(e)),this.lastProcessedEventTime=Date.now()}}function Bo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gc(t);default:return!1}}/**
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
 */async function ng(t,e={}){return dt(t,"GET","/v1/projects",e)}/**
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
 */const sg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rg=/^https?/;async function ig(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ng(t);for(const n of e)try{if(og(n))return}catch{}Ae(t,"unauthorized-domain")}function og(t){const e=Lr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!rg.test(n))return!1;if(sg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const ag=new qn(3e4,6e4);function Fo(){const t=qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cg(t){return new Promise((e,n)=>{var s,r,i;function o(){Fo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fo(),n(xe(t,"network-request-failed"))},timeout:ag.get()})}if(!((r=(s=qe().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=qe().gapi)===null||i===void 0)&&i.load)o();else{const a=Qd("iframefcb");return qe()[a]=()=>{gapi.load?o():n(xe(t,"network-request-failed"))},Pc(`${Xd()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw fs=null,e})}let fs=null;function lg(t){return fs=fs||cg(t),fs}/**
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
 */const ug=new qn(5e3,15e3),fg="__/auth/iframe",hg="emulator/auth/iframe",dg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gg(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mi(e,hg):`https://${t.config.authDomain}/${fg}`,s={apiKey:e.apiKey,appName:t.name,v:Wn},r=pg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${jn(s).slice(1)}`}async function mg(t){const e=await lg(t),n=qe().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:gg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=xe(t,"network-request-failed"),a=qe().setTimeout(()=>{i(o)},ug.get());function c(){qe().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const _g={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yg=500,vg=600,bg="_blank",wg="http://localhost";class $o{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Eg(t,e,n,s=yg,r=vg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},_g),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ye().toLowerCase();n&&(a=Tc(l)?bg:n),Ec(l)&&(e=e||wg,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[b,A])=>`${p}${b}=${A},`,"");if(Vd(l)&&a!=="_self")return Ig(e||"",a),new $o(null);const d=window.open(e||"",a,f);N(d,t,"popup-blocked");try{d.focus()}catch{}return new $o(d)}function Ig(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Tg="__/auth/handler",Sg="emulator/auth/handler",Cg=encodeURIComponent("fac");async function Ho(t,e,n,s,r,i){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Wn,eventId:r};if(e instanceof wi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ch(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof zn){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),l=c?`#${Cg}=${encodeURIComponent(c)}`:"";return`${Ag(t)}?${jn(a).slice(1)}${l}`}function Ag({config:t}){return t.emulator?mi(t,Sg):`https://${t.authDomain}/${Tg}`}/**
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
 */const hr="webStorageSupport";class Rg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hc,this._completeRedirectFn=Qp,this._overrideRedirectResult=Jp}async _openPopup(e,n,s,r){var i;ft((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ho(e,n,s,Lr(),r);return Eg(e,o,Ei())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Ho(e,n,s,Lr(),r);return Pp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ft(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await mg(e),s=new eg(e);return n.register("authEvent",r=>(N(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hr,{type:hr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[hr];o!==void 0&&n(!!o),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ig(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Oc()||Ic()||yi()}}const Og=Rg;var Vo="@firebase/auth",jo="1.10.8";/**
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
 */class kg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Pg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ng(t){Mn(new nn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kc(t)},l=new Gd(s,r,i,c);return rp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Mn(new nn("auth-internal",e=>{const n=Ct(e.getProvider("auth").getImmediate());return(s=>new kg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Vo,jo,Pg(t)),Jt(Vo,jo,"esm2017")}/**
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
 */const xg=300,Dg=ac("authIdTokenMaxAge")||xg;let Wo=null;const Lg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Dg)return;const r=n==null?void 0:n.token;Wo!==r&&(Wo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Mg(t=ud()){const e=fc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sp(t,{popupRedirectResolver:Og,persistence:[$p,Rp,Hc]}),s=ac("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Lg(i.toString());Tp(n,o,()=>o(n.currentUser)),Ip(n,a=>o(a))}}const r=Kf("auth");return r&&ip(n,`http://${r}`),n}function Ug(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Jd({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=xe("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Ug().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ng("Browser");var Bg="firebase",Fg="11.10.0";/**
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
 */Jt(Bg,Fg,"app");const $g={apiKey:"AIzaSyBoshUYnXUquyfJZf9QYSBt9tzcPYmAXoY",authDomain:"whatsapp-clone-91fcb.firebaseapp.com",projectId:"whatsapp-clone-91fcb",storageBucket:"whatsapp-clone-91fcb.firebasestorage.app",messagingSenderId:"290539573480",appId:"1:290539573480:web:eea8271909b0b9dc42795d"},Hg=hc($g),Dt=Mg(Hg),Vg=new nt,Je=Object.create(null);Je.open="0";Je.close="1";Je.ping="2";Je.pong="3";Je.message="4";Je.upgrade="5";Je.noop="6";const hs=Object.create(null);Object.keys(Je).forEach(t=>{hs[Je[t]]=t});const Fr={type:"error",data:"parser error"},Jc=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Yc=typeof ArrayBuffer=="function",Xc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Ti=({type:t,data:e},n,s)=>Jc&&e instanceof Blob?n?s(e):qo(e,s):Yc&&(e instanceof ArrayBuffer||Xc(e))?n?s(e):qo(new Blob([e]),s):s(Je[t]+(e||"")),qo=(t,e)=>{const n=new FileReader;return n.onload=function(){const s=n.result.split(",")[1];e("b"+(s||""))},n.readAsDataURL(t)};function Ko(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let dr;function jg(t,e){if(Jc&&t.data instanceof Blob)return t.data.arrayBuffer().then(Ko).then(e);if(Yc&&(t.data instanceof ArrayBuffer||Xc(t.data)))return e(Ko(t.data));Ti(t,!1,n=>{dr||(dr=new TextEncoder),e(dr.encode(n))})}const zo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",vn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<zo.length;t++)vn[zo.charCodeAt(t)]=t;const Wg=t=>{let e=t.length*.75,n=t.length,s,r=0,i,o,a,c;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const l=new ArrayBuffer(e),f=new Uint8Array(l);for(s=0;s<n;s+=4)i=vn[t.charCodeAt(s)],o=vn[t.charCodeAt(s+1)],a=vn[t.charCodeAt(s+2)],c=vn[t.charCodeAt(s+3)],f[r++]=i<<2|o>>4,f[r++]=(o&15)<<4|a>>2,f[r++]=(a&3)<<6|c&63;return l},qg=typeof ArrayBuffer=="function",Si=(t,e)=>{if(typeof t!="string")return{type:"message",data:Qc(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Kg(t.substring(1),e)}:hs[n]?t.length>1?{type:hs[n],data:t.substring(1)}:{type:hs[n]}:Fr},Kg=(t,e)=>{if(qg){const n=Wg(t);return Qc(n,e)}else return{base64:!0,data:t}},Qc=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Zc="",zg=(t,e)=>{const n=t.length,s=new Array(n);let r=0;t.forEach((i,o)=>{Ti(i,!1,a=>{s[o]=a,++r===n&&e(s.join(Zc))})})},Gg=(t,e)=>{const n=t.split(Zc),s=[];for(let r=0;r<n.length;r++){const i=Si(n[r],e);if(s.push(i),i.type==="error")break}return s};function Jg(){return new TransformStream({transform(t,e){jg(t,n=>{const s=n.length;let r;if(s<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,s);else if(s<65536){r=new Uint8Array(3);const i=new DataView(r.buffer);i.setUint8(0,126),i.setUint16(1,s)}else{r=new Uint8Array(9);const i=new DataView(r.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(s))}t.data&&typeof t.data!="string"&&(r[0]|=128),e.enqueue(r),e.enqueue(n)})}})}let pr;function ss(t){return t.reduce((e,n)=>e+n.length,0)}function rs(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let s=0;for(let r=0;r<e;r++)n[r]=t[0][s++],s===t[0].length&&(t.shift(),s=0);return t.length&&s<t[0].length&&(t[0]=t[0].slice(s)),n}function Yg(t,e){pr||(pr=new TextDecoder);const n=[];let s=0,r=-1,i=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(s===0){if(ss(n)<1)break;const c=rs(n,1);i=(c[0]&128)===128,r=c[0]&127,r<126?s=3:r===126?s=1:s=2}else if(s===1){if(ss(n)<2)break;const c=rs(n,2);r=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),s=3}else if(s===2){if(ss(n)<8)break;const c=rs(n,8),l=new DataView(c.buffer,c.byteOffset,c.length),f=l.getUint32(0);if(f>Math.pow(2,21)-1){a.enqueue(Fr);break}r=f*Math.pow(2,32)+l.getUint32(4),s=3}else{if(ss(n)<r)break;const c=rs(n,r);a.enqueue(Si(i?c:pr.decode(c),e)),s=0}if(r===0||r>t){a.enqueue(Fr);break}}}})}const el=4;function se(t){if(t)return Xg(t)}function Xg(t){for(var e in se.prototype)t[e]=se.prototype[e];return t}se.prototype.on=se.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};se.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};se.prototype.off=se.prototype.removeListener=se.prototype.removeAllListeners=se.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var s,r=0;r<n.length;r++)if(s=n[r],s===e||s.fn===e){n.splice(r,1);break}return n.length===0&&delete this._callbacks["$"+t],this};se.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(n){n=n.slice(0);for(var s=0,r=n.length;s<r;++s)n[s].apply(this,e)}return this};se.prototype.emitReserved=se.prototype.emit;se.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};se.prototype.hasListeners=function(t){return!!this.listeners(t).length};const qs=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0),Ie=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Qg="arraybuffer";function tl(t,...e){return e.reduce((n,s)=>(t.hasOwnProperty(s)&&(n[s]=t[s]),n),{})}const Zg=Ie.setTimeout,em=Ie.clearTimeout;function Ks(t,e){e.useNativeTimers?(t.setTimeoutFn=Zg.bind(Ie),t.clearTimeoutFn=em.bind(Ie)):(t.setTimeoutFn=Ie.setTimeout.bind(Ie),t.clearTimeoutFn=Ie.clearTimeout.bind(Ie))}const tm=1.33;function nm(t){return typeof t=="string"?sm(t):Math.ceil((t.byteLength||t.size)*tm)}function sm(t){let e=0,n=0;for(let s=0,r=t.length;s<r;s++)e=t.charCodeAt(s),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(s++,n+=4);return n}function nl(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function rm(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function im(t){let e={},n=t.split("&");for(let s=0,r=n.length;s<r;s++){let i=n[s].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}class om extends Error{constructor(e,n,s){super(e),this.description=n,this.context=s,this.type="TransportError"}}class Ci extends se{constructor(e){super(),this.writable=!1,Ks(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,s){return super.emitReserved("error",new om(e,n,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Si(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=rm(e);return n.length?"?"+n:""}}class am extends Ci{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let s=0;this._polling&&(s++,this.once("pollComplete",function(){--s||n()})),this.writable||(s++,this.once("drain",function(){--s||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};Gg(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,zg(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=nl()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let sl=!1;try{sl=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const cm=sl;function lm(){}class um extends am{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let s=location.port;s||(s=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}}doWrite(e,n){const s=this.request({method:"POST",data:e});s.on("success",n),s.on("error",(r,i)=>{this.onError("xhr post error",r,i)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,s)=>{this.onError("xhr poll error",n,s)}),this.pollXhr=e}}class Ke extends se{constructor(e,n,s){super(),this.createRequest=e,Ks(this,s),this._opts=s,this._method=s.method||"GET",this._uri=n,this._data=s.data!==void 0?s.data:null,this._create()}_create(){var e;const n=tl(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const s=this._xhr=this.createRequest(n);try{s.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let r in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(r)&&s.setRequestHeader(r,this._opts.extraHeaders[r])}}catch{}if(this._method==="POST")try{s.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{s.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(s),"withCredentials"in s&&(s.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(s.timeout=this._opts.requestTimeout),s.onreadystatechange=()=>{var r;s.readyState===3&&((r=this._opts.cookieJar)===null||r===void 0||r.parseCookies(s.getResponseHeader("set-cookie"))),s.readyState===4&&(s.status===200||s.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof s.status=="number"?s.status:0)},0))},s.send(this._data)}catch(r){this.setTimeoutFn(()=>{this._onError(r)},0);return}typeof document<"u"&&(this._index=Ke.requestsCount++,Ke.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=lm,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Ke.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Ke.requestsCount=0;Ke.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Go);else if(typeof addEventListener=="function"){const t="onpagehide"in Ie?"pagehide":"unload";addEventListener(t,Go,!1)}}function Go(){for(let t in Ke.requests)Ke.requests.hasOwnProperty(t)&&Ke.requests[t].abort()}const fm=(function(){const t=rl({xdomain:!1});return t&&t.responseType!==null})();class hm extends um{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=fm&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Ke(rl,this.uri(),e)}}function rl(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||cm))return new XMLHttpRequest}catch{}if(!e)try{return new Ie[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const il=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class dm extends Ci{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,s=il?{}:tl(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,s)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const s=e[n],r=n===e.length-1;Ti(s,this.supportsBinary,i=>{try{this.doWrite(s,i)}catch{}r&&qs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=nl()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const gr=Ie.WebSocket||Ie.MozWebSocket;class pm extends dm{createSocket(e,n,s){return il?new gr(e,n,s):n?new gr(e,n):new gr(e)}doWrite(e,n){this.ws.send(n)}}class gm extends Ci{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Yg(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=e.readable.pipeThrough(n).getReader(),r=Jg();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const i=()=>{s.read().then(({done:a,value:c})=>{a||(this.onPacket(c),i())}).catch(a=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const s=e[n],r=n===e.length-1;this._writer.write(s).then(()=>{r&&qs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const mm={websocket:pm,webtransport:gm,polling:hm},_m=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ym=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function $r(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),s=t.indexOf("]");n!=-1&&s!=-1&&(t=t.substring(0,n)+t.substring(n,s).replace(/:/g,";")+t.substring(s,t.length));let r=_m.exec(t||""),i={},o=14;for(;o--;)i[ym[o]]=r[o]||"";return n!=-1&&s!=-1&&(i.source=e,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=vm(i,i.path),i.queryKey=bm(i,i.query),i}function vm(t,e){const n=/\/{2,9}/g,s=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&s.splice(0,1),e.slice(-1)=="/"&&s.splice(s.length-1,1),s}function bm(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,r,i){r&&(n[r]=i)}),n}const Hr=typeof addEventListener=="function"&&typeof removeEventListener=="function",ds=[];Hr&&addEventListener("offline",()=>{ds.forEach(t=>t())},!1);class Et extends se{constructor(e,n){if(super(),this.binaryType=Qg,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const s=$r(e);n.hostname=s.host,n.secure=s.protocol==="https"||s.protocol==="wss",n.port=s.port,s.query&&(n.query=s.query)}else n.host&&(n.hostname=$r(n.host).host);Ks(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(s=>{const r=s.prototype.name;this.transports.push(r),this._transportsByName[r]=s}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=im(this.opts.query)),Hr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ds.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=el,n.transport=e,this.id&&(n.sid=this.id);const s=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](s)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Et.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",Et.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let s=0;s<this.writeBuffer.length;s++){const r=this.writeBuffer[s].data;if(r&&(n+=nm(r)),s>0&&n>this._maxPayload)return this.writeBuffer.slice(0,s);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,qs(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,s){return this._sendPacket("message",e,n,s),this}send(e,n,s){return this._sendPacket("message",e,n,s),this}_sendPacket(e,n,s,r){if(typeof n=="function"&&(r=n,n=void 0),typeof s=="function"&&(r=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const i={type:e,data:n,options:s};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},s=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():e()}):this.upgrading?s():e()),this}_onError(e){if(Et.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Hr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const s=ds.indexOf(this._offlineEventListener);s!==-1&&ds.splice(s,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}Et.protocol=el;class wm extends Et{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),s=!1;Et.priorWebsocketSuccess=!1;const r=()=>{s||(n.send([{type:"ping",data:"probe"}]),n.once("packet",d=>{if(!s)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Et.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(f(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=n.name,this.emitReserved("upgradeError",p)}}))};function i(){s||(s=!0,f(),n.close(),n=null)}const o=d=>{const p=new Error("probe error: "+d);p.transport=n.name,i(),this.emitReserved("upgradeError",p)};function a(){o("transport closed")}function c(){o("socket closed")}function l(d){n&&d.name!==n.name&&i()}const f=()=>{n.removeListener("open",r),n.removeListener("error",o),n.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};n.once("open",r),n.once("error",o),n.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{s||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let s=0;s<e.length;s++)~this.transports.indexOf(e[s])&&n.push(e[s]);return n}}let Em=class extends wm{constructor(e,n={}){const s=typeof e=="object"?e:n;(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(r=>mm[r]).filter(r=>!!r)),super(e,s)}};function Im(t,e="",n){let s=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),s=$r(t)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const i=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+i+":"+s.port+e,s.href=s.protocol+"://"+i+(n&&n.port===s.port?"":":"+s.port),s}const Tm=typeof ArrayBuffer=="function",Sm=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,ol=Object.prototype.toString,Cm=typeof Blob=="function"||typeof Blob<"u"&&ol.call(Blob)==="[object BlobConstructor]",Am=typeof File=="function"||typeof File<"u"&&ol.call(File)==="[object FileConstructor]";function Ai(t){return Tm&&(t instanceof ArrayBuffer||Sm(t))||Cm&&t instanceof Blob||Am&&t instanceof File}function ps(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,s=t.length;n<s;n++)if(ps(t[n]))return!0;return!1}if(Ai(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return ps(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&ps(t[n]))return!0;return!1}function Rm(t){const e=[],n=t.data,s=t;return s.data=Vr(n,e),s.attachments=e.length,{packet:s,buffers:e}}function Vr(t,e){if(!t)return t;if(Ai(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let s=0;s<t.length;s++)n[s]=Vr(t[s],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=Vr(t[s],e));return n}return t}function Om(t,e){return t.data=jr(t.data,e),delete t.attachments,t}function jr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=jr(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=jr(t[n],e));return t}const km=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var $;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})($||($={}));class Pm{constructor(e){this.replacer=e}encode(e){return(e.type===$.EVENT||e.type===$.ACK)&&ps(e)?this.encodeAsBinary({type:e.type===$.EVENT?$.BINARY_EVENT:$.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===$.BINARY_EVENT||e.type===$.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Rm(e),s=this.encodeAsString(n.packet),r=n.buffers;return r.unshift(s),r}}class Ri extends se{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const s=n.type===$.BINARY_EVENT;s||n.type===$.BINARY_ACK?(n.type=s?$.EVENT:$.ACK,this.reconstructor=new Nm(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Ai(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const s={type:Number(e.charAt(0))};if($[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===$.BINARY_EVENT||s.type===$.BINARY_ACK){const i=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(i,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!xm(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");s.attachments=a}if(e.charAt(n+1)==="/"){const i=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););s.nsp=e.substring(i,n)}else s.nsp="/";const r=e.charAt(n+1);if(r!==""&&Number(r)==r){const i=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}s.id=Number(e.substring(i,n+1))}if(e.charAt(++n)){const i=this.tryParse(e.substr(n));if(Ri.isPayloadValid(s.type,i))s.data=i;else throw new Error("invalid payload")}return s}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case $.CONNECT:return Jo(n);case $.DISCONNECT:return n===void 0;case $.CONNECT_ERROR:return typeof n=="string"||Jo(n);case $.EVENT:case $.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&km.indexOf(n[0])===-1);case $.ACK:case $.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Nm{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=Om(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const xm=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Jo(t){return Object.prototype.toString.call(t)==="[object Object]"}const Dm=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Ri,Encoder:Pm,get PacketType(){return $}},Symbol.toStringTag,{value:"Module"}));function Oe(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const Lm=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class al extends se{constructor(e,n,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Oe(e,"open",this.onopen.bind(this)),Oe(e,"packet",this.onpacket.bind(this)),Oe(e,"error",this.onerror.bind(this)),Oe(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var s,r,i;if(Lm.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:$.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const f=this.ids++,d=n.pop();this._registerAckCallback(f,d),o.id=f}const a=(r=(s=this.io.engine)===null||s===void 0?void 0:s.transport)===null||r===void 0?void 0:r.writable,c=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var s;const r=(s=this.flags.timeout)!==null&&s!==void 0?s:this._opts.ackTimeout;if(r===void 0){this.acks[e]=n;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},r),o=(...a)=>{this.io.clearTimeoutFn(i),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((s,r)=>{const i=(o,a)=>o?r(o):s(a);i.withError=!0,n.push(i),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((r,...i)=>(this._queue[0],r!==null?s.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(r)):(this._queue.shift(),n&&n(null,...i)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:$.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(s=>String(s.id)===e)){const s=this.acks[e];delete this.acks[e],s.withError&&s.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case $.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case $.EVENT:case $.BINARY_EVENT:this.onevent(e);break;case $.ACK:case $.BINARY_ACK:this.onack(e);break;case $.DISCONNECT:this.ondisconnect();break;case $.CONNECT_ERROR:this.destroy();const s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const s of n)s.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let s=!1;return function(...r){s||(s=!0,n.packet({type:$.ACK,id:e,data:r}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:$.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let s=0;s<n.length;s++)if(e===n[s])return n.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let s=0;s<n.length;s++)if(e===n[s])return n.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const s of n)s.apply(this,e.data)}}}function on(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}on.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};on.prototype.reset=function(){this.attempts=0};on.prototype.setMin=function(t){this.ms=t};on.prototype.setMax=function(t){this.max=t};on.prototype.setJitter=function(t){this.jitter=t};class Wr extends se{constructor(e,n){var s;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Ks(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((s=n.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new on({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const r=n.parser||Dm;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Em(this.uri,this.opts);const n=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const r=Oe(n,"open",function(){s.onopen(),e&&e()}),i=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Oe(n,"error",i);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{r(),i(new Error("timeout")),n.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(r),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Oe(e,"ping",this.onping.bind(this)),Oe(e,"data",this.ondata.bind(this)),Oe(e,"error",this.onerror.bind(this)),Oe(e,"close",this.onclose.bind(this)),Oe(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){qs(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let s=this.nsps[e];return s?this._autoConnect&&!s.active&&s.connect():(s=new al(this,e,n),this.nsps[e]=s),s}_destroy(e){const n=Object.keys(this.nsps);for(const s of n)if(this.nsps[s].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let s=0;s<n.length;s++)this.engine.write(n[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var s;this.cleanup(),(s=this.engine)===null||s===void 0||s.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},n);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const dn={};function gs(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=Im(t,e.path||"/socket.io"),s=n.source,r=n.id,i=n.path,o=dn[r]&&i in dn[r].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let c;return a?c=new Wr(s,e):(dn[r]||(dn[r]=new Wr(s,e)),c=dn[r]),n.query&&!e.query&&(e.query=n.queryKey),c.socket(n.path,e)}Object.assign(gs,{Manager:Wr,Socket:al,io:gs,connect:gs});let bn="https://whatsapp-clone-production-65fc.up.railway.app";bn&&!bn.startsWith("http")&&(bn="https://"+bn);const Mm=gs(bn,{autoConnect:!0,transports:["websocket","polling"]}),Um={id:"login-container"},Bm={key:0,id:"login-form"},Fm={class:"auth-tabs"},$m=["disabled"],Hm={key:0},Vm={key:1},jm={class:"email-mode-toggle"},Wm=["disabled"],qm={key:0},Km={key:1},zm={key:2,class:"error-msg"},Gm={class:"user-preview"},Jm=["src","alt"],Ym={key:1,class:"avatar-placeholder"},Xm={class:"avatars"},Qm=["value"],Zm={__name:"LoginView",emits:["login"],setup(t,{emit:e}){const n=e,s=oe("auth"),r=oe(null),i=oe(""),o=oe("👨‍💻"),a=["👨‍💻","👩‍💻","🤖","👻","🦊"],c=oe("google"),l=oe("login"),f=oe(""),d=oe(""),p=oe(""),b=oe(!1),A=oe("");async function C(){b.value=!0,A.value="";try{const{user:S}=await qp(Dt,Vg);r.value=S,s.value="profile"}catch(S){S.code!=="auth/popup-closed-by-user"&&(A.value="Error al iniciar sesión. Inténtalo de nuevo.")}finally{b.value=!1}}async function B(){b.value=!0,A.value="";try{if(l.value==="register"){const{user:S}=await vp(Dt,f.value,d.value);await Ep(S,{displayName:p.value.trim()}),await S.reload(),r.value=Dt.currentUser}else{const{user:S}=await bp(Dt,f.value,d.value);r.value=S}s.value="profile"}catch(S){A.value=P(S.code)}finally{b.value=!1}}function P(S){return{"auth/email-already-in-use":"Este correo ya está registrado.","auth/invalid-email":"Correo electrónico no válido.","auth/weak-password":"La contraseña debe tener al menos 6 caracteres.","auth/user-not-found":"No existe una cuenta con este correo.","auth/wrong-password":"Contraseña incorrecta.","auth/invalid-credential":"Correo o contraseña incorrectos.","auth/operation-not-allowed":"El acceso con email no está habilitado en Firebase.","auth/too-many-requests":"Demasiados intentos. Espera un momento."}[S]||`Error (${S}). Inténtalo de nuevo.`}async function L(){await Uc(Dt),r.value=null,s.value="auth",f.value="",d.value="",p.value="",A.value=""}function F(){n("login",{name:r.value.displayName||r.value.email,status:i.value.trim(),avatar:o.value,uid:r.value.uid})}return(S,O)=>{var fe,ae,be;return X(),ee("div",Um,[s.value==="auth"?(X(),ee("div",Bm,[O[9]||(O[9]=M("h2",null,"WhatsApp Clone",-1)),O[10]||(O[10]=M("p",{class:"login-subtitle"},"Inicia sesión para continuar",-1)),M("div",Fm,[M("button",{type:"button",class:vt(["tab-btn",{active:c.value==="google"}]),onClick:O[0]||(O[0]=Q=>{c.value="google",A.value=""})},"Google",2),M("button",{type:"button",class:vt(["tab-btn",{active:c.value==="email"}]),onClick:O[1]||(O[1]=Q=>{c.value="email",A.value=""})},"Email",2)]),c.value==="google"?(X(),ee("button",{key:0,onClick:C,disabled:b.value,class:"google-btn"},[b.value?(X(),ee("span",Hm,"Cargando...")):(X(),ee("span",Vm,"Iniciar sesión con Google"))],8,$m)):(X(),ee(me,{key:1},[M("div",jm,[M("button",{type:"button",class:vt({active:l.value==="login"}),onClick:O[2]||(O[2]=Q=>{l.value="login",A.value=""})},"Iniciar sesión",2),M("button",{type:"button",class:vt({active:l.value==="register"}),onClick:O[3]||(O[3]=Q=>{l.value="register",A.value=""})},"Crear cuenta",2)]),M("form",{onSubmit:Or(B,["prevent"])},[l.value==="register"?jt((X(),ee("input",{key:0,"onUpdate:modelValue":O[4]||(O[4]=Q=>p.value=Q),type:"text",placeholder:"Tu nombre",autocomplete:"name",required:""},null,512)),[[mn,p.value]]):Xi("",!0),jt(M("input",{"onUpdate:modelValue":O[5]||(O[5]=Q=>f.value=Q),type:"email",placeholder:"Correo electrónico",autocomplete:"email",required:""},null,512),[[mn,f.value]]),jt(M("input",{"onUpdate:modelValue":O[6]||(O[6]=Q=>d.value=Q),type:"password",placeholder:"Contraseña (mín. 6 caracteres)",autocomplete:"current-password",required:"",minlength:"6"},null,512),[[mn,d.value]]),M("button",{type:"submit",disabled:b.value,class:"submit-btn"},[b.value?(X(),ee("span",qm,"Cargando...")):(X(),ee("span",Km,pe(l.value==="register"?"Crear cuenta":"Entrar"),1))],8,Wm)],32)],64)),A.value?(X(),ee("p",zm,pe(A.value),1)):Xi("",!0)])):(X(),ee("form",{key:1,id:"login-form",onSubmit:Or(F,["prevent"])},[M("div",Gm,[(fe=r.value)!=null&&fe.photoURL?(X(),ee("img",{key:0,src:r.value.photoURL,alt:r.value.displayName,class:"google-avatar"},null,8,Jm)):(X(),ee("div",Ym,pe(o.value),1)),M("strong",null,pe(((ae=r.value)==null?void 0:ae.displayName)||((be=r.value)==null?void 0:be.email)),1),M("button",{type:"button",class:"change-account-btn",onClick:L},"↩ Cambiar")]),jt(M("input",{"onUpdate:modelValue":O[7]||(O[7]=Q=>i.value=Q),type:"text",placeholder:"Tu estado (ej: Disponible)",required:""},null,512),[[mn,i.value]]),O[11]||(O[11]=M("p",null,"Elige tu avatar:",-1)),M("div",Xm,[(X(),ee(me,null,wr(a,Q=>M("label",{key:Q},[jt(M("input",{type:"radio",name:"avatar",value:Q,"onUpdate:modelValue":O[8]||(O[8]=Re=>o.value=Re)},null,8,Qm),[[Of,o.value]]),li(" "+pe(Q),1)])),64))]),O[12]||(O[12]=M("button",{type:"submit",class:"submit-btn"},"Entrar al Chat",-1))],32))])}}},e_={id:"app-container"},t_={id:"sidebar"},n_={id:"listausuarios"},s_={class:"user-list-avatar"},r_={class:"user-list-info"},i_={id:"chat-container"},o_={id:"messages"},a_={class:"avatar"},c_={class:"msg-content"},l_={class:"msg-header"},u_={class:"msg-text"},f_={id:"escribiendo"},h_={__name:"ChatView",props:["socket","currentUser"],emits:["logout"],setup(t,{emit:e}){const n=t,s=e;async function r(){await Uc(Dt),s("logout")}const i=oe([]),o=oe([]),a=oe(""),c=oe(""),l=new Set;let f=null;function d(){l.size===0?c.value="":l.size===1?c.value=`${Array.from(l)[0]} está escribiendo...`:c.value="Varios usuarios están escribiendo..."}function p(){Ia(()=>{window.scrollTo(0,document.body.scrollHeight)})}function b(){n.socket.emit("escribiendo",!0),clearTimeout(f),f=setTimeout(()=>{n.socket.emit("escribiendo",!1)},1500)}function A(){a.value&&n.currentUser&&(n.socket.emit("chat message",a.value),n.socket.emit("escribiendo",!1),a.value="")}return oi(()=>{n.socket.emit("join",n.currentUser),n.socket.on("connect",()=>{n.socket.emit("join",n.currentUser)}),n.socket.on("cargar mensajes",C=>{i.value=C,p()}),n.socket.on("actualizar usuarios",C=>{o.value=C}),n.socket.on("usuario escribiendo",C=>{C.estado?l.add(C.user.name):l.delete(C.user.name),d()}),n.socket.on("chat message",C=>{i.value.push(C),p()})}),Us(()=>{clearTimeout(f),n.socket.emit("escribiendo",!1),n.socket.off("connect"),n.socket.off("cargar mensajes"),n.socket.off("actualizar usuarios"),n.socket.off("usuario escribiendo"),n.socket.off("chat message")}),(C,B)=>(X(),ee("div",e_,[M("div",t_,[M("div",{class:"sidebar-header"},[B[1]||(B[1]=M("h3",null,"Usuarios Conectados",-1)),M("button",{onClick:r,class:"signout-btn"},"Salir ↩")]),M("ul",n_,[(X(!0),ee(me,null,wr(o.value,P=>(X(),ee("li",{key:P.id},[M("span",s_,pe(P.avatar),1),M("div",r_,[M("strong",null,pe(P.name),1),M("span",null,pe(P.status),1)])]))),128))])]),M("div",i_,[M("ul",o_,[(X(!0),ee(me,null,wr(i.value,(P,L)=>(X(),ee("li",{key:L,class:vt({"system-msg":P.system,"my-message":!P.system&&t.currentUser&&P.user.name===t.currentUser.name})},[P.system?(X(),ee(me,{key:0},[li(pe(P.text),1)],64)):(X(),ee(me,{key:1},[M("div",a_,pe(P.user.avatar),1),M("div",c_,[M("div",l_,[M("strong",null,pe(P.user.name),1),M("span",null,pe(P.user.status),1)]),M("div",u_,pe(P.text),1)])],64))],2))),128))]),M("div",f_,pe(c.value),1),M("form",{id:"form",onSubmit:Or(A,["prevent"])},[jt(M("input",{id:"input","onUpdate:modelValue":B[0]||(B[0]=P=>a.value=P),placeholder:"Escribe un mensaje...",onInput:b},null,544),[[mn,a.value]]),B[2]||(B[2]=M("button",{type:"submit"},"Enviar",-1))],32)])]))}},d_={key:0,class:"app-loading"},p_={__name:"App",setup(t){const e=oe(null),n=oe(!0);let s=null;oi(()=>{s=Sp(Dt,o=>{if(o){const a=localStorage.getItem(`wac_profile_${o.uid}`);if(a)try{e.value=JSON.parse(a)}catch{e.value=null}else e.value=null}else e.value=null;n.value=!1})}),Us(()=>{s&&s()});function r(o){e.value=o,localStorage.setItem(`wac_profile_${o.uid}`,JSON.stringify(o))}function i(){var o;(o=e.value)!=null&&o.uid&&localStorage.removeItem(`wac_profile_${e.value.uid}`),e.value=null}return(o,a)=>n.value?(X(),ee("div",d_,"Cargando...")):e.value?(X(),Cr(h_,{key:2,socket:ba(Mm),"current-user":e.value,onLogout:i},null,8,["socket","current-user"])):(X(),Cr(Zm,{key:1,onLogin:r}))}};Lf(p_).mount("#app");
