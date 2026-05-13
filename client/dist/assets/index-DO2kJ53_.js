(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const K={},Ut=[],$e=()=>{},Uo=()=>!1,vs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),bs=t=>t.startsWith("onUpdate:"),oe=Object.assign,Lr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jc=Object.prototype.hasOwnProperty,V=(t,e)=>Jc.call(t,e),N=Array.isArray,Bt=t=>Rn(t)==="[object Map]",Bo=t=>Rn(t)==="[object Set]",Si=t=>Rn(t)==="[object Date]",L=t=>typeof t=="function",Q=t=>typeof t=="string",We=t=>typeof t=="symbol",j=t=>t!==null&&typeof t=="object",Fo=t=>(j(t)||L(t))&&L(t.then)&&L(t.catch),Ho=Object.prototype.toString,Rn=t=>Ho.call(t),Yc=t=>Rn(t).slice(8,-1),$o=t=>Rn(t)==="[object Object]",Mr=t=>Q(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hn=Dr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ws=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Xc=/-\w/g,Se=ws(t=>t.replace(Xc,e=>e.slice(1).toUpperCase())),Qc=/\B([A-Z])/g,Dt=ws(t=>t.replace(Qc,"-$1").toLowerCase()),Vo=ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bs=ws(t=>t?`on${Vo(t)}`:""),Be=(t,e)=>!Object.is(t,e),Gn=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},jo=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ur=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ci;const Es=()=>Ci||(Ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Br(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Q(s)?nl(s):Br(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Q(t)||j(t))return t}const Zc=/;(?![^(]*\))/g,el=/:([^]+)/,tl=/\/\*[^]*?\*\//g;function nl(t){const e={};return t.replace(tl,"").split(Zc).forEach(n=>{if(n){const s=n.split(el);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Is(t){let e="";if(Q(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const s=Is(t[n]);s&&(e+=s+" ")}else if(j(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rl=Dr(sl);function Wo(t){return!!t||t===""}function il(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=bn(t[s],e[s]);return n}function bn(t,e){if(t===e)return!0;let n=Si(t),s=Si(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=We(t),s=We(e),n||s)return t===e;if(n=N(t),s=N(e),n||s)return n&&s?il(t,e):!1;if(n=j(t),s=j(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!bn(t[o],e[o]))return!1}}return String(t)===String(e)}const qo=t=>!!(t&&t.__v_isRef===!0),_e=t=>Q(t)?t:t==null?"":N(t)||j(t)&&(t.toString===Ho||!L(t.toString))?qo(t)?_e(t.value):JSON.stringify(t,Ko,2):String(t),Ko=(t,e)=>qo(e)?Ko(t,e.value):Bt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Fs(s,i)+" =>"]=r,n),{})}:Bo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Fs(n))}:We(e)?Fs(e):j(e)&&!N(e)&&!$o(e)?String(e):e,Fs=(t,e="")=>{var n;return We(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ne;class ol{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ne&&(ne.active?(this.parent=ne,this.index=(ne.scopes||(ne.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ne;try{return ne=this,e()}finally{ne=n}}}on(){++this._on===1&&(this.prevScope=ne,ne=this)}off(){if(this._on>0&&--this._on===0){if(ne===this)ne=this.prevScope;else{let e=ne;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function al(){return ne}let J;const Hs=new WeakSet;class zo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ne&&(ne.active?ne.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hs.has(this)&&(Hs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ai(this),Yo(this);const e=J,n=Ce;J=this,Ce=!0;try{return this.fn()}finally{Xo(this),J=e,Ce=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$r(e);this.deps=this.depsTail=void 0,Ai(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ir(this)&&this.run()}get dirty(){return ir(this)}}let Go=0,fn,dn;function Jo(t,e=!1){if(t.flags|=8,e){t.next=dn,dn=t;return}t.next=fn,fn=t}function Fr(){Go++}function Hr(){if(--Go>0)return;if(dn){let e=dn;for(dn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;fn;){let e=fn;for(fn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Yo(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xo(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),$r(s),cl(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function ir(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qo(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Qo(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===wn)||(t.globalVersion=wn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ir(t))))return;t.flags|=2;const e=t.dep,n=J,s=Ce;J=t,Ce=!0;try{Yo(t);const r=t.fn(t._value);(e.version===0||Be(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{J=n,Ce=s,Xo(t),t.flags&=-3}}function $r(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)$r(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function cl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ce=!0;const Zo=[];function rt(){Zo.push(Ce),Ce=!1}function it(){const t=Zo.pop();Ce=t===void 0?!0:t}function Ai(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=J;J=void 0;try{e()}finally{J=n}}}let wn=0;class ll{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!J||!Ce||J===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==J)n=this.activeLink=new ll(J,this),J.deps?(n.prevDep=J.depsTail,J.depsTail.nextDep=n,J.depsTail=n):J.deps=J.depsTail=n,ea(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=J.depsTail,n.nextDep=void 0,J.depsTail.nextDep=n,J.depsTail=n,J.deps===n&&(J.deps=s)}return n}trigger(e){this.version++,wn++,this.notify(e)}notify(e){Fr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Hr()}}}function ea(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ea(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const or=new WeakMap,kt=Symbol(""),ar=Symbol(""),En=Symbol("");function re(t,e,n){if(Ce&&J){let s=or.get(t);s||or.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Vr),r.map=s,r.key=n),r.track()}}function Qe(t,e,n,s,r,i){const o=or.get(t);if(!o){wn++;return}const a=c=>{c&&c.trigger()};if(Fr(),e==="clear")o.forEach(a);else{const c=N(t),h=c&&Mr(n);if(c&&n==="length"){const u=Number(s);o.forEach((d,p)=>{(p==="length"||p===En||!We(p)&&p>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),h&&a(o.get(En)),e){case"add":c?h&&a(o.get("length")):(a(o.get(kt)),Bt(t)&&a(o.get(ar)));break;case"delete":c||(a(o.get(kt)),Bt(t)&&a(o.get(ar)));break;case"set":Bt(t)&&a(o.get(kt));break}}Hr()}function Lt(t){const e=$(t);return e===t?e:(re(e,"iterate",En),Ee(t)?e:e.map(Oe))}function Ts(t){return re(t=$(t),"iterate",En),t}function Me(t,e){return ot(t)?Kt(Pt(t)?Oe(e):e):Oe(e)}const ul={__proto__:null,[Symbol.iterator](){return $s(this,Symbol.iterator,t=>Me(this,t))},concat(...t){return Lt(this).concat(...t.map(e=>N(e)?Lt(e):e))},entries(){return $s(this,"entries",t=>(t[1]=Me(this,t[1]),t))},every(t,e){return Je(this,"every",t,e,void 0,arguments)},filter(t,e){return Je(this,"filter",t,e,n=>n.map(s=>Me(this,s)),arguments)},find(t,e){return Je(this,"find",t,e,n=>Me(this,n),arguments)},findIndex(t,e){return Je(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Je(this,"findLast",t,e,n=>Me(this,n),arguments)},findLastIndex(t,e){return Je(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Je(this,"forEach",t,e,void 0,arguments)},includes(...t){return Vs(this,"includes",t)},indexOf(...t){return Vs(this,"indexOf",t)},join(t){return Lt(this).join(t)},lastIndexOf(...t){return Vs(this,"lastIndexOf",t)},map(t,e){return Je(this,"map",t,e,void 0,arguments)},pop(){return sn(this,"pop")},push(...t){return sn(this,"push",t)},reduce(t,...e){return Oi(this,"reduce",t,e)},reduceRight(t,...e){return Oi(this,"reduceRight",t,e)},shift(){return sn(this,"shift")},some(t,e){return Je(this,"some",t,e,void 0,arguments)},splice(...t){return sn(this,"splice",t)},toReversed(){return Lt(this).toReversed()},toSorted(t){return Lt(this).toSorted(t)},toSpliced(...t){return Lt(this).toSpliced(...t)},unshift(...t){return sn(this,"unshift",t)},values(){return $s(this,"values",t=>Me(this,t))}};function $s(t,e,n){const s=Ts(t),r=s[e]();return s!==t&&!Ee(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const hl=Array.prototype;function Je(t,e,n,s,r,i){const o=Ts(t),a=o!==t&&!Ee(t),c=o[e];if(c!==hl[e]){const d=c.apply(t,i);return a?Oe(d):d}let h=n;o!==t&&(a?h=function(d,p){return n.call(this,Me(t,d),p,t)}:n.length>2&&(h=function(d,p){return n.call(this,d,p,t)}));const u=c.call(o,h,s);return a&&r?r(u):u}function Oi(t,e,n,s){const r=Ts(t),i=r!==t&&!Ee(t);let o=n,a=!1;r!==t&&(i?(a=s.length===0,o=function(h,u,d){return a&&(a=!1,h=Me(t,h)),n.call(this,h,Me(t,u),d,t)}):n.length>3&&(o=function(h,u,d){return n.call(this,h,u,d,t)}));const c=r[e](o,...s);return a?Me(t,c):c}function Vs(t,e,n){const s=$(t);re(s,"iterate",En);const r=s[e](...n);return(r===-1||r===!1)&&Kr(n[0])?(n[0]=$(n[0]),s[e](...n)):r}function sn(t,e,n=[]){rt(),Fr();const s=$(t)[e].apply(t,n);return Hr(),it(),s}const fl=Dr("__proto__,__v_isRef,__isVue"),ta=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(We));function dl(t){We(t)||(t=String(t));const e=$(this);return re(e,"has",t),e.hasOwnProperty(t)}class na{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Il:oa:i?ia:ra).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=N(e);if(!r){let c;if(o&&(c=ul[n]))return c;if(n==="hasOwnProperty")return dl}const a=Reflect.get(e,n,ie(e)?e:s);if((We(n)?ta.has(n):fl(n))||(r||re(e,"get",n),i))return a;if(ie(a)){const c=o&&Mr(n)?a:a.value;return r&&j(c)?lr(c):c}return j(a)?r?lr(a):Wr(a):a}}class sa extends na{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=N(e)&&Mr(n);if(!this._isShallow){const h=ot(i);if(!Ee(s)&&!ot(s)&&(i=$(i),s=$(s)),!o&&ie(i)&&!ie(s))return h||(i.value=s),!0}const a=o?Number(n)<e.length:V(e,n),c=Reflect.set(e,n,s,ie(e)?e:r);return e===$(r)&&(a?Be(s,i)&&Qe(e,"set",n,s):Qe(e,"add",n,s)),c}deleteProperty(e,n){const s=V(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Qe(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!We(n)||!ta.has(n))&&re(e,"has",n),s}ownKeys(e){return re(e,"iterate",N(e)?"length":kt),Reflect.ownKeys(e)}}class pl extends na{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gl=new sa,ml=new pl,_l=new sa(!0);const cr=t=>t,Vn=t=>Reflect.getPrototypeOf(t);function yl(t,e,n){return function(...s){const r=this.__v_raw,i=$(r),o=Bt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=r[t](...s),u=n?cr:e?Kt:Oe;return!e&&re(i,"iterate",c?ar:kt),oe(Object.create(h),{next(){const{value:d,done:p}=h.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}}})}}function jn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function vl(t,e){const n={get(r){const i=this.__v_raw,o=$(i),a=$(r);t||(Be(r,a)&&re(o,"get",r),re(o,"get",a));const{has:c}=Vn(o),h=e?cr:t?Kt:Oe;if(c.call(o,r))return h(i.get(r));if(c.call(o,a))return h(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&re($(r),"iterate",kt),r.size},has(r){const i=this.__v_raw,o=$(i),a=$(r);return t||(Be(r,a)&&re(o,"has",r),re(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=$(a),h=e?cr:t?Kt:Oe;return!t&&re(c,"iterate",kt),a.forEach((u,d)=>r.call(i,h(u),h(d),o))}};return oe(n,t?{add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear")}:{add(r){const i=$(this),o=Vn(i),a=$(r),c=!e&&!Ee(r)&&!ot(r)?a:r;return o.has.call(i,c)||Be(r,c)&&o.has.call(i,r)||Be(a,c)&&o.has.call(i,a)||(i.add(c),Qe(i,"add",c,c)),this},set(r,i){!e&&!Ee(i)&&!ot(i)&&(i=$(i));const o=$(this),{has:a,get:c}=Vn(o);let h=a.call(o,r);h||(r=$(r),h=a.call(o,r));const u=c.call(o,r);return o.set(r,i),h?Be(i,u)&&Qe(o,"set",r,i):Qe(o,"add",r,i),this},delete(r){const i=$(this),{has:o,get:a}=Vn(i);let c=o.call(i,r);c||(r=$(r),c=o.call(i,r)),a&&a.call(i,r);const h=i.delete(r);return c&&Qe(i,"delete",r,void 0),h},clear(){const r=$(this),i=r.size!==0,o=r.clear();return i&&Qe(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=yl(r,t,e)}),n}function jr(t,e){const n=vl(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(V(n,r)&&r in s?n:s,r,i)}const bl={get:jr(!1,!1)},wl={get:jr(!1,!0)},El={get:jr(!0,!1)};const ra=new WeakMap,ia=new WeakMap,oa=new WeakMap,Il=new WeakMap;function Tl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sl(t){return t.__v_skip||!Object.isExtensible(t)?0:Tl(Yc(t))}function Wr(t){return ot(t)?t:qr(t,!1,gl,bl,ra)}function Cl(t){return qr(t,!1,_l,wl,ia)}function lr(t){return qr(t,!0,ml,El,oa)}function qr(t,e,n,s,r){if(!j(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Sl(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function Pt(t){return ot(t)?Pt(t.__v_raw):!!(t&&t.__v_isReactive)}function ot(t){return!!(t&&t.__v_isReadonly)}function Ee(t){return!!(t&&t.__v_isShallow)}function Kr(t){return t?!!t.__v_raw:!1}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function Al(t){return!V(t,"__v_skip")&&Object.isExtensible(t)&&jo(t,"__v_skip",!0),t}const Oe=t=>j(t)?Wr(t):t,Kt=t=>j(t)?lr(t):t;function ie(t){return t?t.__v_isRef===!0:!1}function Fe(t){return Ol(t,!1)}function Ol(t,e){return ie(t)?t:new Rl(t,e)}class Rl{constructor(e,n){this.dep=new Vr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:$(e),this._value=n?e:Oe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ee(e)||ot(e);e=s?e:$(e),Be(e,n)&&(this._rawValue=e,this._value=s?e:Oe(e),this.dep.trigger())}}function aa(t){return ie(t)?t.value:t}const kl={get:(t,e,n)=>e==="__v_raw"?t:aa(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ie(r)&&!ie(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ca(t){return Pt(t)?t:new Proxy(t,kl)}class Pl{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Vr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&J!==this)return Jo(this,!0),!0}get value(){const e=this.dep.track();return Qo(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Nl(t,e,n=!1){let s,r;return L(t)?s=t:(s=t.get,r=t.set),new Pl(s,r,n)}const Wn={},is=new WeakMap;let Ct;function xl(t,e=!1,n=Ct){if(n){let s=is.get(n);s||is.set(n,s=[]),s.push(t)}}function Dl(t,e,n=K){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,h=A=>r?A:Ee(A)||r===!1||r===0?Ze(A,1):Ze(A);let u,d,p,w,x=!1,S=!1;if(ie(t)?(d=()=>t.value,x=Ee(t)):Pt(t)?(d=()=>h(t),x=!0):N(t)?(S=!0,x=t.some(A=>Pt(A)||Ee(A)),d=()=>t.map(A=>{if(ie(A))return A.value;if(Pt(A))return h(A);if(L(A))return c?c(A,2):A()})):L(t)?e?d=c?()=>c(t,2):t:d=()=>{if(p){rt();try{p()}finally{it()}}const A=Ct;Ct=u;try{return c?c(t,3,[w]):t(w)}finally{Ct=A}}:d=$e,e&&r){const A=d,X=r===!0?1/0:r;d=()=>Ze(A(),X)}const B=al(),R=()=>{u.stop(),B&&B.active&&Lr(B.effects,u)};if(i&&e){const A=e;e=(...X)=>{A(...X),R()}}let D=S?new Array(t.length).fill(Wn):Wn;const F=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const X=u.run();if(r||x||(S?X.some((ve,ge)=>Be(ve,D[ge])):Be(X,D))){p&&p();const ve=Ct;Ct=u;try{const ge=[X,D===Wn?void 0:S&&D[0]===Wn?[]:D,w];D=X,c?c(e,3,ge):e(...ge)}finally{Ct=ve}}}else u.run()};return a&&a(F),u=new zo(d),u.scheduler=o?()=>o(F,!1):F,w=A=>xl(A,!1,u),p=u.onStop=()=>{const A=is.get(u);if(A){if(c)c(A,4);else for(const X of A)X();is.delete(u)}},e?s?F(!0):D=u.run():o?o(F.bind(null,!0),!0):u.run(),R.pause=u.pause.bind(u),R.resume=u.resume.bind(u),R.stop=R,R}function Ze(t,e=1/0,n){if(e<=0||!j(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ie(t))Ze(t.value,e,n);else if(N(t))for(let s=0;s<t.length;s++)Ze(t[s],e,n);else if(Bo(t)||Bt(t))t.forEach(s=>{Ze(s,e,n)});else if($o(t)){for(const s in t)Ze(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Ze(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kn(t,e,n,s){try{return s?t(...s):t()}catch(r){Ss(r,e,n)}}function qe(t,e,n,s){if(L(t)){const r=kn(t,e,n,s);return r&&Fo(r)&&r.catch(i=>{Ss(i,e,n)}),r}if(N(t)){const r=[];for(let i=0;i<t.length;i++)r.push(qe(t[i],e,n,s));return r}}function Ss(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||K;if(e){let a=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,h)===!1)return}a=a.parent}if(i){rt(),kn(i,null,10,[t,c,h]),it();return}}Ll(t,n,r,s,o)}function Ll(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const le=[];let Le=-1;const Ft=[];let ft=null,Mt=0;const la=Promise.resolve();let os=null;function ua(t){const e=os||la;return t?e.then(this?t.bind(this):t):e}function Ml(t){let e=Le+1,n=le.length;for(;e<n;){const s=e+n>>>1,r=le[s],i=In(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function zr(t){if(!(t.flags&1)){const e=In(t),n=le[le.length-1];!n||!(t.flags&2)&&e>=In(n)?le.push(t):le.splice(Ml(e),0,t),t.flags|=1,ha()}}function ha(){os||(os=la.then(da))}function Ul(t){N(t)?Ft.push(...t):ft&&t.id===-1?ft.splice(Mt+1,0,t):t.flags&1||(Ft.push(t),t.flags|=1),ha()}function Ri(t,e,n=Le+1){for(;n<le.length;n++){const s=le[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function fa(t){if(Ft.length){const e=[...new Set(Ft)].sort((n,s)=>In(n)-In(s));if(Ft.length=0,ft){ft.push(...e);return}for(ft=e,Mt=0;Mt<ft.length;Mt++){const n=ft[Mt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ft=null,Mt=0}}const In=t=>t.id==null?t.flags&2?-1:1/0:t.id;function da(t){try{for(Le=0;Le<le.length;Le++){const e=le[Le];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),kn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Le<le.length;Le++){const e=le[Le];e&&(e.flags&=-2)}Le=-1,le.length=0,fa(),os=null,(le.length||Ft.length)&&da()}}let we=null,pa=null;function as(t){const e=we;return we=t,pa=t&&t.type.__scopeId||null,e}function Bl(t,e=we,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Hi(-1);const i=as(e);let o;try{o=t(...r)}finally{as(i),s._d&&Hi(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ur(t,e){if(we===null)return t;const n=Rs(we),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=K]=e[r];i&&(L(i)&&(i={mounted:i,updated:i}),i.deep&&Ze(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Tt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(rt(),qe(c,n,8,[t.el,a,t,e]),it())}}function Fl(t,e){if(ue){let n=ue.provides;const s=ue.parent&&ue.parent.provides;s===n&&(n=ue.provides=Object.create(s)),n[t]=e}}function Jn(t,e,n=!1){const s=Bu();if(s||Ht){let r=Ht?Ht._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&L(e)?e.call(s&&s.proxy):e}}const Hl=Symbol.for("v-scx"),$l=()=>Jn(Hl);function js(t,e,n){return ga(t,e,n)}function ga(t,e,n=K){const{immediate:s,deep:r,flush:i,once:o}=n,a=oe({},n),c=e&&s||!e&&i!=="post";let h;if(Sn){if(i==="sync"){const w=$l();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=$e,w.resume=$e,w.pause=$e,w}}const u=ue;a.call=(w,x,S)=>qe(w,u,x,S);let d=!1;i==="post"?a.scheduler=w=>{fe(w,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(w,x)=>{x?w():zr(w)}),a.augmentJob=w=>{e&&(w.flags|=4),d&&(w.flags|=2,u&&(w.id=u.uid,w.i=u))};const p=Dl(t,e,a);return Sn&&(h?h.push(p):c&&p()),p}function Vl(t,e,n){const s=this.proxy,r=Q(t)?t.includes(".")?ma(s,t):()=>s[t]:t.bind(s,s);let i;L(e)?i=e:(i=e.handler,n=e);const o=Pn(this),a=ga(r,i.bind(s),n);return o(),a}function ma(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const jl=Symbol("_vte"),Wl=t=>t.__isTeleport,ql=Symbol("_leaveCb");function Gr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _a(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ki(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const cs=new WeakMap;function pn(t,e,n,s,r=!1){if(N(t)){t.forEach((S,B)=>pn(S,e&&(N(e)?e[B]:e),n,s,r));return}if(gn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&pn(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Rs(s.component):s.el,o=r?null:i,{i:a,r:c}=t,h=e&&e.r,u=a.refs===K?a.refs={}:a.refs,d=a.setupState,p=$(d),w=d===K?Uo:S=>ki(u,S)?!1:V(p,S),x=(S,B)=>!(B&&ki(u,B));if(h!=null&&h!==c){if(Pi(e),Q(h))u[h]=null,w(h)&&(d[h]=null);else if(ie(h)){const S=e;x(h,S.k)&&(h.value=null),S.k&&(u[S.k]=null)}}if(L(c))kn(c,a,12,[o,u]);else{const S=Q(c),B=ie(c);if(S||B){const R=()=>{if(t.f){const D=S?w(c)?d[c]:u[c]:x()||!t.k?c.value:u[t.k];if(r)N(D)&&Lr(D,i);else if(N(D))D.includes(i)||D.push(i);else if(S)u[c]=[i],w(c)&&(d[c]=u[c]);else{const F=[i];x(c,t.k)&&(c.value=F),t.k&&(u[t.k]=F)}}else S?(u[c]=o,w(c)&&(d[c]=o)):B&&(x(c,t.k)&&(c.value=o),t.k&&(u[t.k]=o))};if(o){const D=()=>{R(),cs.delete(t)};D.id=-1,cs.set(t,D),fe(D,n)}else Pi(t),R()}}}function Pi(t){const e=cs.get(t);e&&(e.flags|=8,cs.delete(t))}Es().requestIdleCallback;Es().cancelIdleCallback;const gn=t=>!!t.type.__asyncLoader,ya=t=>t.type.__isKeepAlive;function Kl(t,e){va(t,"a",e)}function zl(t,e){va(t,"da",e)}function va(t,e,n=ue){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Cs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ya(r.parent.vnode)&&Gl(s,e,n,r),r=r.parent}}function Gl(t,e,n,s){const r=Cs(e,t,s,!0);Yr(()=>{Lr(s[e],r)},n)}function Cs(t,e,n=ue,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{rt();const a=Pn(n),c=qe(e,n,t,o);return a(),it(),c});return s?r.unshift(i):r.push(i),i}}const lt=t=>(e,n=ue)=>{(!Sn||t==="sp")&&Cs(t,(...s)=>e(...s),n)},Jl=lt("bm"),Jr=lt("m"),Yl=lt("bu"),Xl=lt("u"),Ql=lt("bum"),Yr=lt("um"),Zl=lt("sp"),eu=lt("rtg"),tu=lt("rtc");function nu(t,e=ue){Cs("ec",t,e)}const su=Symbol.for("v-ndc");function hr(t,e,n,s){let r;const i=n,o=N(t);if(o||Q(t)){const a=o&&Pt(t);let c=!1,h=!1;a&&(c=!Ee(t),h=ot(t),t=Ts(t)),r=new Array(t.length);for(let u=0,d=t.length;u<d;u++)r[u]=e(c?h?Kt(Oe(t[u])):Oe(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(j(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,h=a.length;c<h;c++){const u=a[c];r[c]=e(t[u],u,c,i)}}else r=[];return r}const fr=t=>t?Ha(t)?Rs(t):fr(t.parent):null,mn=oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fr(t.parent),$root:t=>fr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wa(t),$forceUpdate:t=>t.f||(t.f=()=>{zr(t.update)}),$nextTick:t=>t.n||(t.n=ua.bind(t.proxy)),$watch:t=>Vl.bind(t)}),Ws=(t,e)=>t!==K&&!t.__isScriptSetup&&V(t,e),ru={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ws(s,e))return o[e]=1,s[e];if(r!==K&&V(r,e))return o[e]=2,r[e];if(V(i,e))return o[e]=3,i[e];if(n!==K&&V(n,e))return o[e]=4,n[e];dr&&(o[e]=0)}}const h=mn[e];let u,d;if(h)return e==="$attrs"&&re(t.attrs,"get",""),h(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==K&&V(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,V(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ws(r,e)?(r[e]=n,!0):s!==K&&V(s,e)?(s[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},a){let c;return!!(n[a]||t!==K&&a[0]!=="$"&&V(t,a)||Ws(e,a)||V(i,a)||V(s,a)||V(mn,a)||V(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ni(t){return N(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dr=!0;function iu(t){const e=wa(t),n=t.proxy,s=t.ctx;dr=!1,e.beforeCreate&&xi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:h,created:u,beforeMount:d,mounted:p,beforeUpdate:w,updated:x,activated:S,deactivated:B,beforeDestroy:R,beforeUnmount:D,destroyed:F,unmounted:A,render:X,renderTracked:ve,renderTriggered:ge,errorCaptured:Re,serverPrefetch:ut,expose:Ge,inheritAttrs:Zt,components:Bn,directives:Fn,filters:Ms}=e;if(h&&ou(h,s,null),o)for(const Y in o){const z=o[Y];L(z)&&(s[Y]=z.bind(n))}if(r){const Y=r.call(n,n);j(Y)&&(t.data=Wr(Y))}if(dr=!0,i)for(const Y in i){const z=i[Y],Et=L(z)?z.bind(n,n):L(z.get)?z.get.bind(n,n):$e,Hn=!L(z)&&L(z.set)?z.set.bind(n):$e,It=Wu({get:Et,set:Hn});Object.defineProperty(s,Y,{enumerable:!0,configurable:!0,get:()=>It.value,set:ke=>It.value=ke})}if(a)for(const Y in a)ba(a[Y],s,n,Y);if(c){const Y=L(c)?c.call(n):c;Reflect.ownKeys(Y).forEach(z=>{Fl(z,Y[z])})}u&&xi(u,t,"c");function ae(Y,z){N(z)?z.forEach(Et=>Y(Et.bind(n))):z&&Y(z.bind(n))}if(ae(Jl,d),ae(Jr,p),ae(Yl,w),ae(Xl,x),ae(Kl,S),ae(zl,B),ae(nu,Re),ae(tu,ve),ae(eu,ge),ae(Ql,D),ae(Yr,A),ae(Zl,ut),N(Ge))if(Ge.length){const Y=t.exposed||(t.exposed={});Ge.forEach(z=>{Object.defineProperty(Y,z,{get:()=>n[z],set:Et=>n[z]=Et,enumerable:!0})})}else t.exposed||(t.exposed={});X&&t.render===$e&&(t.render=X),Zt!=null&&(t.inheritAttrs=Zt),Bn&&(t.components=Bn),Fn&&(t.directives=Fn),ut&&_a(t)}function ou(t,e,n=$e){N(t)&&(t=pr(t));for(const s in t){const r=t[s];let i;j(r)?"default"in r?i=Jn(r.from||s,r.default,!0):i=Jn(r.from||s):i=Jn(r),ie(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function xi(t,e,n){qe(N(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ba(t,e,n,s){let r=s.includes(".")?ma(n,s):()=>n[s];if(Q(t)){const i=e[t];L(i)&&js(r,i)}else if(L(t))js(r,t.bind(n));else if(j(t))if(N(t))t.forEach(i=>ba(i,e,n,s));else{const i=L(t.handler)?t.handler.bind(n):e[t.handler];L(i)&&js(r,i,t)}}function wa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(h=>ls(c,h,o,!0)),ls(c,e,o)),j(e)&&i.set(e,c),c}function ls(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ls(t,i,n,!0),r&&r.forEach(o=>ls(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=au[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const au={data:Di,props:Li,emits:Li,methods:an,computed:an,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:an,directives:an,watch:lu,provide:Di,inject:cu};function Di(t,e){return e?t?function(){return oe(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function cu(t,e){return an(pr(t),pr(e))}function pr(t){if(N(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ce(t,e){return t?[...new Set([].concat(t,e))]:e}function an(t,e){return t?oe(Object.create(null),t,e):e}function Li(t,e){return t?N(t)&&N(e)?[...new Set([...t,...e])]:oe(Object.create(null),Ni(t),Ni(e??{})):e}function lu(t,e){if(!t)return e;if(!e)return t;const n=oe(Object.create(null),t);for(const s in e)n[s]=ce(t[s],e[s]);return n}function Ea(){return{app:null,config:{isNativeTag:Uo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uu=0;function hu(t,e){return function(s,r=null){L(s)||(s=oe({},s)),r!=null&&!j(r)&&(r=null);const i=Ea(),o=new WeakSet,a=[];let c=!1;const h=i.app={_uid:uu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:qu,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(h,...d)):L(u)&&(o.add(u),u(h,...d))),h},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),h},component(u,d){return d?(i.components[u]=d,h):i.components[u]},directive(u,d){return d?(i.directives[u]=d,h):i.directives[u]},mount(u,d,p){if(!c){const w=h._ceVNode||st(s,r);return w.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(w,u,p),c=!0,h._container=u,u.__vue_app__=h,Rs(w.component)}},onUnmount(u){a.push(u)},unmount(){c&&(qe(a,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(u,d){return i.provides[u]=d,h},runWithContext(u){const d=Ht;Ht=h;try{return u()}finally{Ht=d}}};return h}}let Ht=null;const fu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Se(e)}Modifiers`]||t[`${Dt(e)}Modifiers`];function du(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||K;let r=n;const i=e.startsWith("update:"),o=i&&fu(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>Q(u)?u.trim():u)),o.number&&(r=n.map(Ur)));let a,c=s[a=Bs(e)]||s[a=Bs(Se(e))];!c&&i&&(c=s[a=Bs(Dt(e))]),c&&qe(c,t,6,r);const h=s[a+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qe(h,t,6,r)}}const pu=new WeakMap;function Ia(t,e,n=!1){const s=n?pu:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!L(t)){const c=h=>{const u=Ia(h,e,!0);u&&(a=!0,oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(j(t)&&s.set(t,null),null):(N(i)?i.forEach(c=>o[c]=null):oe(o,i),j(t)&&s.set(t,o),o)}function As(t,e){return!t||!vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,Dt(e))||V(t,e))}function Mi(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:h,renderCache:u,props:d,data:p,setupState:w,ctx:x,inheritAttrs:S}=t,B=as(t);let R,D;try{if(n.shapeFlag&4){const A=r||s,X=A;R=Ue(h.call(X,A,u,d,w,p,x)),D=a}else{const A=e;R=Ue(A.length>1?A(d,{attrs:a,slots:o,emit:c}):A(d,null)),D=e.props?a:gu(a)}}catch(A){_n.length=0,Ss(A,t,1),R=st(vt)}let F=R;if(D&&S!==!1){const A=Object.keys(D),{shapeFlag:X}=F;A.length&&X&7&&(i&&A.some(bs)&&(D=mu(D,i)),F=zt(F,D,!1,!0))}return n.dirs&&(F=zt(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&Gr(F,n.transition),R=F,as(B),R}const gu=t=>{let e;for(const n in t)(n==="class"||n==="style"||vs(n))&&((e||(e={}))[n]=t[n]);return e},mu=(t,e)=>{const n={};for(const s in t)(!bs(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function _u(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ui(s,o,h):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(Ta(o,s,p)&&!As(h,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ui(s,o,h):!0:!!o;return!1}function Ui(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(Ta(e,t,i)&&!As(n,i))return!0}return!1}function Ta(t,e,n){const s=t[n],r=e[n];return n==="style"&&j(s)&&j(r)?!bn(s,r):s!==r}function yu({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const Sa={},Ca=()=>Object.create(Sa),Aa=t=>Object.getPrototypeOf(t)===Sa;function vu(t,e,n,s=!1){const r={},i=Ca();t.propsDefaults=Object.create(null),Oa(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Cl(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function bu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=$(r),[c]=t.propsOptions;let h=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(As(t.emitsOptions,p))continue;const w=e[p];if(c)if(V(i,p))w!==i[p]&&(i[p]=w,h=!0);else{const x=Se(p);r[x]=gr(c,a,x,w,t,!1)}else w!==i[p]&&(i[p]=w,h=!0)}}}else{Oa(t,e,r,i)&&(h=!0);let u;for(const d in a)(!e||!V(e,d)&&((u=Dt(d))===d||!V(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=gr(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!V(e,d))&&(delete i[d],h=!0)}h&&Qe(t.attrs,"set","")}function Oa(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(hn(c))continue;const h=e[c];let u;r&&V(r,u=Se(c))?!i||!i.includes(u)?n[u]=h:(a||(a={}))[u]=h:As(t.emitsOptions,c)||(!(c in s)||h!==s[c])&&(s[c]=h,o=!0)}if(i){const c=$(n),h=a||K;for(let u=0;u<i.length;u++){const d=i[u];n[d]=gr(r,c,d,h[d],t,!V(h,d))}}return o}function gr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=V(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&L(c)){const{propsDefaults:h}=r;if(n in h)s=h[n];else{const u=Pn(r);s=h[n]=c.call(null,e),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Dt(n))&&(s=!0))}return s}const wu=new WeakMap;function Ra(t,e,n=!1){const s=n?wu:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!L(t)){const u=d=>{c=!0;const[p,w]=Ra(d,e,!0);oe(o,p),w&&a.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return j(t)&&s.set(t,Ut),Ut;if(N(i))for(let u=0;u<i.length;u++){const d=Se(i[u]);Bi(d)&&(o[d]=K)}else if(i)for(const u in i){const d=Se(u);if(Bi(d)){const p=i[u],w=o[d]=N(p)||L(p)?{type:p}:oe({},p),x=w.type;let S=!1,B=!0;if(N(x))for(let R=0;R<x.length;++R){const D=x[R],F=L(D)&&D.name;if(F==="Boolean"){S=!0;break}else F==="String"&&(B=!1)}else S=L(x)&&x.name==="Boolean";w[0]=S,w[1]=B,(S||V(w,"default"))&&a.push(d)}}const h=[o,a];return j(t)&&s.set(t,h),h}function Bi(t){return t[0]!=="$"&&!hn(t)}const Xr=t=>t==="_"||t==="_ctx"||t==="$stable",Qr=t=>N(t)?t.map(Ue):[Ue(t)],Eu=(t,e,n)=>{if(e._n)return e;const s=Bl((...r)=>Qr(e(...r)),n);return s._c=!1,s},ka=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Xr(r))continue;const i=t[r];if(L(i))e[r]=Eu(r,i,s);else if(i!=null){const o=Qr(i);e[r]=()=>o}}},Pa=(t,e)=>{const n=Qr(e);t.slots.default=()=>n},Na=(t,e,n)=>{for(const s in e)(n||!Xr(s))&&(t[s]=e[s])},Iu=(t,e,n)=>{const s=t.slots=Ca();if(t.vnode.shapeFlag&32){const r=e._;r?(Na(s,e,n),n&&jo(s,"_",r,!0)):ka(e,s)}else e&&Pa(t,e)},Tu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=K;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Na(r,e,n):(i=!e.$stable,ka(e,r)),o=e}else e&&(Pa(t,e),o={default:1});if(i)for(const a in r)!Xr(a)&&o[a]==null&&delete r[a]},fe=Ru;function Su(t){return Cu(t)}function Cu(t,e){const n=Es();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:h,setElementText:u,parentNode:d,nextSibling:p,setScopeId:w=$e,insertStaticContent:x}=t,S=(l,f,g,v=null,m=null,_=null,I=void 0,E=null,b=!!f.dynamicChildren)=>{if(l===f)return;l&&!rn(l,f)&&(v=$n(l),ke(l,m,_,!0),l=null),f.patchFlag===-2&&(b=!1,f.dynamicChildren=null);const{type:y,ref:O,shapeFlag:T}=f;switch(y){case Os:B(l,f,g,v);break;case vt:R(l,f,g,v);break;case Ks:l==null&&D(f,g,v,I);break;case pe:Bn(l,f,g,v,m,_,I,E,b);break;default:T&1?X(l,f,g,v,m,_,I,E,b):T&6?Fn(l,f,g,v,m,_,I,E,b):(T&64||T&128)&&y.process(l,f,g,v,m,_,I,E,b,tn)}O!=null&&m?pn(O,l&&l.ref,_,f||l,!f):O==null&&l&&l.ref!=null&&pn(l.ref,null,_,l,!0)},B=(l,f,g,v)=>{if(l==null)s(f.el=a(f.children),g,v);else{const m=f.el=l.el;f.children!==l.children&&h(m,f.children)}},R=(l,f,g,v)=>{l==null?s(f.el=c(f.children||""),g,v):f.el=l.el},D=(l,f,g,v)=>{[l.el,l.anchor]=x(l.children,f,g,v,l.el,l.anchor)},F=({el:l,anchor:f},g,v)=>{let m;for(;l&&l!==f;)m=p(l),s(l,g,v),l=m;s(f,g,v)},A=({el:l,anchor:f})=>{let g;for(;l&&l!==f;)g=p(l),r(l),l=g;r(f)},X=(l,f,g,v,m,_,I,E,b)=>{if(f.type==="svg"?I="svg":f.type==="math"&&(I="mathml"),l==null)ve(f,g,v,m,_,I,E,b);else{const y=l.el&&l.el._isVueCE?l.el:null;try{y&&y._beginPatch(),ut(l,f,m,_,I,E,b)}finally{y&&y._endPatch()}}},ve=(l,f,g,v,m,_,I,E)=>{let b,y;const{props:O,shapeFlag:T,transition:C,dirs:P}=l;if(b=l.el=o(l.type,_,O&&O.is,O),T&8?u(b,l.children):T&16&&Re(l.children,b,null,v,m,qs(l,_),I,E),P&&Tt(l,null,v,"created"),ge(b,l,l.scopeId,I,v),O){for(const W in O)W!=="value"&&!hn(W)&&i(b,W,null,O[W],_,v);"value"in O&&i(b,"value",null,O.value,_),(y=O.onVnodeBeforeMount)&&De(y,v,l)}P&&Tt(l,null,v,"beforeMount");const H=Au(m,C);H&&C.beforeEnter(b),s(b,f,g),((y=O&&O.onVnodeMounted)||H||P)&&fe(()=>{try{y&&De(y,v,l),H&&C.enter(b),P&&Tt(l,null,v,"mounted")}finally{}},m)},ge=(l,f,g,v,m)=>{if(g&&w(l,g),v)for(let _=0;_<v.length;_++)w(l,v[_]);if(m){let _=m.subTree;if(f===_||Ma(_.type)&&(_.ssContent===f||_.ssFallback===f)){const I=m.vnode;ge(l,I,I.scopeId,I.slotScopeIds,m.parent)}}},Re=(l,f,g,v,m,_,I,E,b=0)=>{for(let y=b;y<l.length;y++){const O=l[y]=E?Xe(l[y]):Ue(l[y]);S(null,O,f,g,v,m,_,I,E)}},ut=(l,f,g,v,m,_,I)=>{const E=f.el=l.el;let{patchFlag:b,dynamicChildren:y,dirs:O}=f;b|=l.patchFlag&16;const T=l.props||K,C=f.props||K;let P;if(g&&St(g,!1),(P=C.onVnodeBeforeUpdate)&&De(P,g,f,l),O&&Tt(f,l,g,"beforeUpdate"),g&&St(g,!0),(T.innerHTML&&C.innerHTML==null||T.textContent&&C.textContent==null)&&u(E,""),y?Ge(l.dynamicChildren,y,E,g,v,qs(f,m),_):I||z(l,f,E,null,g,v,qs(f,m),_,!1),b>0){if(b&16)Zt(E,T,C,g,m);else if(b&2&&T.class!==C.class&&i(E,"class",null,C.class,m),b&4&&i(E,"style",T.style,C.style,m),b&8){const H=f.dynamicProps;for(let W=0;W<H.length;W++){const G=H[W],Z=T[G],te=C[G];(te!==Z||G==="value")&&i(E,G,Z,te,m,g)}}b&1&&l.children!==f.children&&u(E,f.children)}else!I&&y==null&&Zt(E,T,C,g,m);((P=C.onVnodeUpdated)||O)&&fe(()=>{P&&De(P,g,f,l),O&&Tt(f,l,g,"updated")},v)},Ge=(l,f,g,v,m,_,I)=>{for(let E=0;E<f.length;E++){const b=l[E],y=f[E],O=b.el&&(b.type===pe||!rn(b,y)||b.shapeFlag&198)?d(b.el):g;S(b,y,O,null,v,m,_,I,!0)}},Zt=(l,f,g,v,m)=>{if(f!==g){if(f!==K)for(const _ in f)!hn(_)&&!(_ in g)&&i(l,_,f[_],null,m,v);for(const _ in g){if(hn(_))continue;const I=g[_],E=f[_];I!==E&&_!=="value"&&i(l,_,E,I,m,v)}"value"in g&&i(l,"value",f.value,g.value,m)}},Bn=(l,f,g,v,m,_,I,E,b)=>{const y=f.el=l?l.el:a(""),O=f.anchor=l?l.anchor:a("");let{patchFlag:T,dynamicChildren:C,slotScopeIds:P}=f;P&&(E=E?E.concat(P):P),l==null?(s(y,g,v),s(O,g,v),Re(f.children||[],g,O,m,_,I,E,b)):T>0&&T&64&&C&&l.dynamicChildren&&l.dynamicChildren.length===C.length?(Ge(l.dynamicChildren,C,g,m,_,I,E),(f.key!=null||m&&f===m.subTree)&&xa(l,f,!0)):z(l,f,g,O,m,_,I,E,b)},Fn=(l,f,g,v,m,_,I,E,b)=>{f.slotScopeIds=E,l==null?f.shapeFlag&512?m.ctx.activate(f,g,v,I,b):Ms(f,g,v,m,_,I,b):vi(l,f,b)},Ms=(l,f,g,v,m,_,I)=>{const E=l.component=Uu(l,v,m);if(ya(l)&&(E.ctx.renderer=tn),Fu(E,!1,I),E.asyncDep){if(m&&m.registerDep(E,ae,I),!l.el){const b=E.subTree=st(vt);R(null,b,f,g),l.placeholder=b.el}}else ae(E,l,f,g,m,_,I)},vi=(l,f,g)=>{const v=f.component=l.component;if(_u(l,f,g))if(v.asyncDep&&!v.asyncResolved){Y(v,f,g);return}else v.next=f,v.update();else f.el=l.el,v.vnode=f},ae=(l,f,g,v,m,_,I)=>{const E=()=>{if(l.isMounted){let{next:T,bu:C,u:P,parent:H,vnode:W}=l;{const Ne=Da(l);if(Ne){T&&(T.el=W.el,Y(l,T,I)),Ne.asyncDep.then(()=>{fe(()=>{l.isUnmounted||y()},m)});return}}let G=T,Z;St(l,!1),T?(T.el=W.el,Y(l,T,I)):T=W,C&&Gn(C),(Z=T.props&&T.props.onVnodeBeforeUpdate)&&De(Z,H,T,W),St(l,!0);const te=Mi(l),Pe=l.subTree;l.subTree=te,S(Pe,te,d(Pe.el),$n(Pe),l,m,_),T.el=te.el,G===null&&yu(l,te.el),P&&fe(P,m),(Z=T.props&&T.props.onVnodeUpdated)&&fe(()=>De(Z,H,T,W),m)}else{let T;const{el:C,props:P}=f,{bm:H,m:W,parent:G,root:Z,type:te}=l,Pe=gn(f);St(l,!1),H&&Gn(H),!Pe&&(T=P&&P.onVnodeBeforeMount)&&De(T,G,f),St(l,!0);{Z.ce&&Z.ce._hasShadowRoot()&&Z.ce._injectChildStyle(te,l.parent?l.parent.type:void 0);const Ne=l.subTree=Mi(l);S(null,Ne,g,v,l,m,_),f.el=Ne.el}if(W&&fe(W,m),!Pe&&(T=P&&P.onVnodeMounted)){const Ne=f;fe(()=>De(T,G,Ne),m)}(f.shapeFlag&256||G&&gn(G.vnode)&&G.vnode.shapeFlag&256)&&l.a&&fe(l.a,m),l.isMounted=!0,f=g=v=null}};l.scope.on();const b=l.effect=new zo(E);l.scope.off();const y=l.update=b.run.bind(b),O=l.job=b.runIfDirty.bind(b);O.i=l,O.id=l.uid,b.scheduler=()=>zr(O),St(l,!0),y()},Y=(l,f,g)=>{f.component=l;const v=l.vnode.props;l.vnode=f,l.next=null,bu(l,f.props,v,g),Tu(l,f.children,g),rt(),Ri(l),it()},z=(l,f,g,v,m,_,I,E,b=!1)=>{const y=l&&l.children,O=l?l.shapeFlag:0,T=f.children,{patchFlag:C,shapeFlag:P}=f;if(C>0){if(C&128){Hn(y,T,g,v,m,_,I,E,b);return}else if(C&256){Et(y,T,g,v,m,_,I,E,b);return}}P&8?(O&16&&en(y,m,_),T!==y&&u(g,T)):O&16?P&16?Hn(y,T,g,v,m,_,I,E,b):en(y,m,_,!0):(O&8&&u(g,""),P&16&&Re(T,g,v,m,_,I,E,b))},Et=(l,f,g,v,m,_,I,E,b)=>{l=l||Ut,f=f||Ut;const y=l.length,O=f.length,T=Math.min(y,O);let C;for(C=0;C<T;C++){const P=f[C]=b?Xe(f[C]):Ue(f[C]);S(l[C],P,g,null,m,_,I,E,b)}y>O?en(l,m,_,!0,!1,T):Re(f,g,v,m,_,I,E,b,T)},Hn=(l,f,g,v,m,_,I,E,b)=>{let y=0;const O=f.length;let T=l.length-1,C=O-1;for(;y<=T&&y<=C;){const P=l[y],H=f[y]=b?Xe(f[y]):Ue(f[y]);if(rn(P,H))S(P,H,g,null,m,_,I,E,b);else break;y++}for(;y<=T&&y<=C;){const P=l[T],H=f[C]=b?Xe(f[C]):Ue(f[C]);if(rn(P,H))S(P,H,g,null,m,_,I,E,b);else break;T--,C--}if(y>T){if(y<=C){const P=C+1,H=P<O?f[P].el:v;for(;y<=C;)S(null,f[y]=b?Xe(f[y]):Ue(f[y]),g,H,m,_,I,E,b),y++}}else if(y>C)for(;y<=T;)ke(l[y],m,_,!0),y++;else{const P=y,H=y,W=new Map;for(y=H;y<=C;y++){const me=f[y]=b?Xe(f[y]):Ue(f[y]);me.key!=null&&W.set(me.key,y)}let G,Z=0;const te=C-H+1;let Pe=!1,Ne=0;const nn=new Array(te);for(y=0;y<te;y++)nn[y]=0;for(y=P;y<=T;y++){const me=l[y];if(Z>=te){ke(me,m,_,!0);continue}let xe;if(me.key!=null)xe=W.get(me.key);else for(G=H;G<=C;G++)if(nn[G-H]===0&&rn(me,f[G])){xe=G;break}xe===void 0?ke(me,m,_,!0):(nn[xe-H]=y+1,xe>=Ne?Ne=xe:Pe=!0,S(me,f[xe],g,null,m,_,I,E,b),Z++)}const Ei=Pe?Ou(nn):Ut;for(G=Ei.length-1,y=te-1;y>=0;y--){const me=H+y,xe=f[me],Ii=f[me+1],Ti=me+1<O?Ii.el||La(Ii):v;nn[y]===0?S(null,xe,g,Ti,m,_,I,E,b):Pe&&(G<0||y!==Ei[G]?It(xe,g,Ti,2):G--)}}},It=(l,f,g,v,m=null)=>{const{el:_,type:I,transition:E,children:b,shapeFlag:y}=l;if(y&6){It(l.component.subTree,f,g,v);return}if(y&128){l.suspense.move(f,g,v);return}if(y&64){I.move(l,f,g,tn);return}if(I===pe){s(_,f,g);for(let T=0;T<b.length;T++)It(b[T],f,g,v);s(l.anchor,f,g);return}if(I===Ks){F(l,f,g);return}if(v!==2&&y&1&&E)if(v===0)E.beforeEnter(_),s(_,f,g),fe(()=>E.enter(_),m);else{const{leave:T,delayLeave:C,afterLeave:P}=E,H=()=>{l.ctx.isUnmounted?r(_):s(_,f,g)},W=()=>{_._isLeaving&&_[ql](!0),T(_,()=>{H(),P&&P()})};C?C(_,H,W):W()}else s(_,f,g)},ke=(l,f,g,v=!1,m=!1)=>{const{type:_,props:I,ref:E,children:b,dynamicChildren:y,shapeFlag:O,patchFlag:T,dirs:C,cacheIndex:P,memo:H}=l;if(T===-2&&(m=!1),E!=null&&(rt(),pn(E,null,g,l,!0),it()),P!=null&&(f.renderCache[P]=void 0),O&256){f.ctx.deactivate(l);return}const W=O&1&&C,G=!gn(l);let Z;if(G&&(Z=I&&I.onVnodeBeforeUnmount)&&De(Z,f,l),O&6)Gc(l.component,g,v);else{if(O&128){l.suspense.unmount(g,v);return}W&&Tt(l,null,f,"beforeUnmount"),O&64?l.type.remove(l,f,g,tn,v):y&&!y.hasOnce&&(_!==pe||T>0&&T&64)?en(y,f,g,!1,!0):(_===pe&&T&384||!m&&O&16)&&en(b,f,g),v&&bi(l)}const te=H!=null&&P==null;(G&&(Z=I&&I.onVnodeUnmounted)||W||te)&&fe(()=>{Z&&De(Z,f,l),W&&Tt(l,null,f,"unmounted"),te&&(l.el=null)},g)},bi=l=>{const{type:f,el:g,anchor:v,transition:m}=l;if(f===pe){zc(g,v);return}if(f===Ks){A(l);return}const _=()=>{r(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(l.shapeFlag&1&&m&&!m.persisted){const{leave:I,delayLeave:E}=m,b=()=>I(g,_);E?E(l.el,_,b):b()}else _()},zc=(l,f)=>{let g;for(;l!==f;)g=p(l),r(l),l=g;r(f)},Gc=(l,f,g)=>{const{bum:v,scope:m,job:_,subTree:I,um:E,m:b,a:y}=l;Fi(b),Fi(y),v&&Gn(v),m.stop(),_&&(_.flags|=8,ke(I,l,f,g)),E&&fe(E,f),fe(()=>{l.isUnmounted=!0},f)},en=(l,f,g,v=!1,m=!1,_=0)=>{for(let I=_;I<l.length;I++)ke(l[I],f,g,v,m)},$n=l=>{if(l.shapeFlag&6)return $n(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const f=p(l.anchor||l.el),g=f&&f[jl];return g?p(g):f};let Us=!1;const wi=(l,f,g)=>{let v;l==null?f._vnode&&(ke(f._vnode,null,null,!0),v=f._vnode.component):S(f._vnode||null,l,f,null,null,null,g),f._vnode=l,Us||(Us=!0,Ri(v),fa(),Us=!1)},tn={p:S,um:ke,m:It,r:bi,mt:Ms,mc:Re,pc:z,pbc:Ge,n:$n,o:t};return{render:wi,hydrate:void 0,createApp:hu(wi)}}function qs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function St({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Au(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xa(t,e,n=!1){const s=t.children,r=e.children;if(N(s)&&N(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Xe(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&xa(o,a)),a.type===Os&&(a.patchFlag===-1&&(a=r[i]=Xe(a)),a.el=o.el),a.type===vt&&!a.el&&(a.el=o.el)}}function Ou(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const h=t[s];if(h!==0){if(r=n[n.length-1],t[r]<h){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<h?i=a+1:o=a;h<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Da(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Da(e)}function Fi(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function La(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?La(e.subTree):null}const Ma=t=>t.__isSuspense;function Ru(t,e){e&&e.pendingBranch?N(t)?e.effects.push(...t):e.effects.push(t):Ul(t)}const pe=Symbol.for("v-fgt"),Os=Symbol.for("v-txt"),vt=Symbol.for("v-cmt"),Ks=Symbol.for("v-stc"),_n=[];let ye=null;function se(t=!1){_n.push(ye=t?null:[])}function ku(){_n.pop(),ye=_n[_n.length-1]||null}let Tn=1;function Hi(t,e=!1){Tn+=t,t<0&&ye&&e&&(ye.hasOnce=!0)}function Ua(t){return t.dynamicChildren=Tn>0?ye||Ut:null,ku(),Tn>0&&ye&&ye.push(t),t}function de(t,e,n,s,r,i){return Ua(M(t,e,n,s,r,i,!0))}function mr(t,e,n,s,r){return Ua(st(t,e,n,s,r,!0))}function Ba(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const Fa=({key:t})=>t??null,Yn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Q(t)||ie(t)||L(t)?{i:we,r:t,k:e,f:!!n}:t:null);function M(t,e=null,n=null,s=0,r=null,i=t===pe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fa(e),ref:e&&Yn(e),scopeId:pa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:we};return a?(ei(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Q(n)?8:16),Tn>0&&!o&&ye&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ye.push(c),c}const st=Pu;function Pu(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===su)&&(t=vt),Ba(t)){const a=zt(t,e,!0);return n&&ei(a,n),Tn>0&&!i&&ye&&(a.shapeFlag&6?ye[ye.indexOf(t)]=a:ye.push(a)),a.patchFlag=-2,a}if(ju(t)&&(t=t.__vccOpts),e){e=Nu(e);let{class:a,style:c}=e;a&&!Q(a)&&(e.class=Is(a)),j(c)&&(Kr(c)&&!N(c)&&(c=oe({},c)),e.style=Br(c))}const o=Q(t)?1:Ma(t)?128:Wl(t)?64:j(t)?4:L(t)?2:0;return M(t,e,n,s,r,o,i,!0)}function Nu(t){return t?Kr(t)||Aa(t)?oe({},t):t:null}function zt(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,h=e?Du(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Fa(h),ref:e&&e.ref?n&&i?N(i)?i.concat(Yn(e)):[i,Yn(e)]:Yn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zt(t.ssContent),ssFallback:t.ssFallback&&zt(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Gr(u,c.clone(u)),u}function Zr(t=" ",e=0){return st(Os,null,t,e)}function xu(t="",e=!1){return e?(se(),mr(vt,null,t)):st(vt,null,t)}function Ue(t){return t==null||typeof t=="boolean"?st(vt):N(t)?st(pe,null,t.slice()):Ba(t)?Xe(t):st(Os,null,String(t))}function Xe(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zt(t)}function ei(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(N(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ei(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Aa(e)?e._ctx=we:r===3&&we&&(we.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:we},n=32):(e=String(e),s&64?(n=16,e=[Zr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Du(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Is([e.class,s.class]));else if(r==="style")e.style=Br([e.style,s.style]);else if(vs(r)){const i=e[r],o=s[r];o&&i!==o&&!(N(i)&&i.includes(o))?e[r]=i?[].concat(i,o):o:o==null&&i==null&&!bs(r)&&(e[r]=o)}else r!==""&&(e[r]=s[r])}return e}function De(t,e,n,s=null){qe(t,e,7,[n,s])}const Lu=Ea();let Mu=0;function Uu(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Lu,i={uid:Mu++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ol(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ra(s,r),emitsOptions:Ia(s,r),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=du.bind(null,i),t.ce&&t.ce(i),i}let ue=null;const Bu=()=>ue||we;let us,_r;{const t=Es(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};us=e("__VUE_INSTANCE_SETTERS__",n=>ue=n),_r=e("__VUE_SSR_SETTERS__",n=>Sn=n)}const Pn=t=>{const e=ue;return us(t),t.scope.on(),()=>{t.scope.off(),us(e)}},$i=()=>{ue&&ue.scope.off(),us(null)};function Ha(t){return t.vnode.shapeFlag&4}let Sn=!1;function Fu(t,e=!1,n=!1){e&&_r(e);const{props:s,children:r}=t.vnode,i=Ha(t);vu(t,s,i,e),Iu(t,r,n||e);const o=i?Hu(t,e):void 0;return e&&_r(!1),o}function Hu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ru);const{setup:s}=n;if(s){rt();const r=t.setupContext=s.length>1?Vu(t):null,i=Pn(t),o=kn(s,t,0,[t.props,r]),a=Fo(o);if(it(),i(),(a||t.sp)&&!gn(t)&&_a(t),a){if(o.then($i,$i),e)return o.then(c=>{Vi(t,c)}).catch(c=>{Ss(c,t,0)});t.asyncDep=o}else Vi(t,o)}else $a(t)}function Vi(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:j(e)&&(t.setupState=ca(e)),$a(t)}function $a(t,e,n){const s=t.type;t.render||(t.render=s.render||$e);{const r=Pn(t);rt();try{iu(t)}finally{it(),r()}}}const $u={get(t,e){return re(t,"get",""),t[e]}};function Vu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$u),slots:t.slots,emit:t.emit,expose:e}}function Rs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ca(Al(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mn)return mn[n](t)},has(e,n){return n in e||n in mn}})):t.proxy}function ju(t){return L(t)&&"__vccOpts"in t}const Wu=(t,e)=>Nl(t,e,Sn),qu="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yr;const ji=typeof window<"u"&&window.trustedTypes;if(ji)try{yr=ji.createPolicy("vue",{createHTML:t=>t})}catch{}const Va=yr?t=>yr.createHTML(t):t=>t,Ku="http://www.w3.org/2000/svg",zu="http://www.w3.org/1998/Math/MathML",Ye=typeof document<"u"?document:null,Wi=Ye&&Ye.createElement("template"),Gu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Ye.createElementNS(Ku,t):e==="mathml"?Ye.createElementNS(zu,t):n?Ye.createElement(t,{is:n}):Ye.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ye.createTextNode(t),createComment:t=>Ye.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ye.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Wi.innerHTML=Va(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Wi.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ju=Symbol("_vtc");function Yu(t,e,n){const s=t[Ju];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qi=Symbol("_vod"),Xu=Symbol("_vsh"),Qu=Symbol(""),Zu=/(?:^|;)\s*display\s*:/;function eh(t,e,n){const s=t.style,r=Q(n);let i=!1;if(n&&!r){if(e)if(Q(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&cn(s,a,"")}else for(const o in e)n[o]==null&&cn(s,o,"");for(const o in n){o==="display"&&(i=!0);const a=n[o];a!=null?nh(t,o,!Q(e)&&e?e[o]:void 0,a)||cn(s,o,a):cn(s,o,"")}}else if(r){if(e!==n){const o=s[Qu];o&&(n+=";"+o),s.cssText=n,i=Zu.test(n)}}else e&&t.removeAttribute("style");qi in t&&(t[qi]=i?s.display:"",t[Xu]&&(s.display="none"))}const Ki=/\s*!important$/;function cn(t,e,n){if(N(n))n.forEach(s=>cn(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=th(t,e);Ki.test(n)?t.setProperty(Dt(s),n.replace(Ki,""),"important"):t[s]=n}}const zi=["Webkit","Moz","ms"],zs={};function th(t,e){const n=zs[e];if(n)return n;let s=Se(e);if(s!=="filter"&&s in t)return zs[e]=s;s=Vo(s);for(let r=0;r<zi.length;r++){const i=zi[r]+s;if(i in t)return zs[e]=i}return e}function nh(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Q(s)&&n===s}const Gi="http://www.w3.org/1999/xlink";function Ji(t,e,n,s,r,i=rl(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gi,e.slice(6,e.length)):t.setAttributeNS(Gi,e,n):n==null||i&&!Wo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":We(n)?String(n):n)}function Yi(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Va(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Wo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Ot(t,e,n,s){t.addEventListener(e,n,s)}function sh(t,e,n,s){t.removeEventListener(e,n,s)}const Xi=Symbol("_vei");function rh(t,e,n,s,r=null){const i=t[Xi]||(t[Xi]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=ih(e);if(s){const h=i[e]=ch(s,r);Ot(t,a,h,c)}else o&&(sh(t,a,o,c),i[e]=void 0)}}const Qi=/(?:Once|Passive|Capture)$/;function ih(t){let e;if(Qi.test(t)){e={};let s;for(;s=t.match(Qi);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dt(t.slice(2)),e]}let Gs=0;const oh=Promise.resolve(),ah=()=>Gs||(oh.then(()=>Gs=0),Gs=Date.now());function ch(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;qe(lh(s,n.value),e,5,[s])};return n.value=t,n.attached=ah(),n}function lh(t,e){if(N(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Zi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uh=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Yu(t,s,o):e==="style"?eh(t,n,s):vs(e)?bs(e)||rh(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hh(t,e,s,o))?(Yi(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ji(t,e,s,o,i,e!=="value")):t._isVueCE&&(fh(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Q(s)))?Yi(t,Se(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ji(t,e,s,o))};function hh(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zi(e)&&L(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Zi(e)&&Q(n)?!1:e in t}function fh(t,e){const n=t._def.props;if(!n)return!1;const s=Se(e);return Array.isArray(n)?n.some(r=>Se(r)===s):Object.keys(n).some(r=>Se(r)===s)}const hs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return N(e)?n=>Gn(e,n):e};function dh(t){t.target.composing=!0}function eo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $t=Symbol("_assign");function to(t,e,n){return e&&(t=t.trim()),n&&(t=Ur(t)),t}const ja={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[$t]=hs(r);const i=s||r.props&&r.props.type==="number";Ot(t,e?"change":"input",o=>{o.target.composing||t[$t](to(t.value,n,i))}),(n||i)&&Ot(t,"change",()=>{t.value=to(t.value,n,i)}),e||(Ot(t,"compositionstart",dh),Ot(t,"compositionend",eo),Ot(t,"change",eo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[$t]=hs(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ur(t.value):t.value,c=e??"";if(a===c)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c)}},ph={created(t,{value:e},n){t.checked=bn(e,n.props.value),t[$t]=hs(n),Ot(t,"change",()=>{t[$t](gh(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[$t]=hs(s),e!==n&&(t.checked=bn(e,s.props.value))}};function gh(t){return"_value"in t?t._value:t.value}const mh=["ctrl","shift","alt","meta"],_h={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>mh.some(n=>t[`${n}Key`]&&!e.includes(n))},Wa=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const a=_h[e[o]];if(a&&a(r,e))return}return t(r,...i)}))},yh=oe({patchProp:uh},Gu);let no;function vh(){return no||(no=Su(yh))}const bh=((...t)=>{const e=vh().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Eh(s);if(!r)return;const i=e._component;!L(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,wh(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function wh(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Eh(t){return Q(t)?document.querySelector(t):t}const Ke=Object.create(null);Ke.open="0";Ke.close="1";Ke.ping="2";Ke.pong="3";Ke.message="4";Ke.upgrade="5";Ke.noop="6";const Xn=Object.create(null);Object.keys(Ke).forEach(t=>{Xn[Ke[t]]=t});const vr={type:"error",data:"parser error"},qa=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ka=typeof ArrayBuffer=="function",za=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,ti=({type:t,data:e},n,s)=>qa&&e instanceof Blob?n?s(e):so(e,s):Ka&&(e instanceof ArrayBuffer||za(e))?n?s(e):so(new Blob([e]),s):s(Ke[t]+(e||"")),so=(t,e)=>{const n=new FileReader;return n.onload=function(){const s=n.result.split(",")[1];e("b"+(s||""))},n.readAsDataURL(t)};function ro(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Js;function Ih(t,e){if(qa&&t.data instanceof Blob)return t.data.arrayBuffer().then(ro).then(e);if(Ka&&(t.data instanceof ArrayBuffer||za(t.data)))return e(ro(t.data));ti(t,!1,n=>{Js||(Js=new TextEncoder),e(Js.encode(n))})}const io="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ln=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<io.length;t++)ln[io.charCodeAt(t)]=t;const Th=t=>{let e=t.length*.75,n=t.length,s,r=0,i,o,a,c;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const h=new ArrayBuffer(e),u=new Uint8Array(h);for(s=0;s<n;s+=4)i=ln[t.charCodeAt(s)],o=ln[t.charCodeAt(s+1)],a=ln[t.charCodeAt(s+2)],c=ln[t.charCodeAt(s+3)],u[r++]=i<<2|o>>4,u[r++]=(o&15)<<4|a>>2,u[r++]=(a&3)<<6|c&63;return h},Sh=typeof ArrayBuffer=="function",ni=(t,e)=>{if(typeof t!="string")return{type:"message",data:Ga(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Ch(t.substring(1),e)}:Xn[n]?t.length>1?{type:Xn[n],data:t.substring(1)}:{type:Xn[n]}:vr},Ch=(t,e)=>{if(Sh){const n=Th(t);return Ga(n,e)}else return{base64:!0,data:t}},Ga=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Ja="",Ah=(t,e)=>{const n=t.length,s=new Array(n);let r=0;t.forEach((i,o)=>{ti(i,!1,a=>{s[o]=a,++r===n&&e(s.join(Ja))})})},Oh=(t,e)=>{const n=t.split(Ja),s=[];for(let r=0;r<n.length;r++){const i=ni(n[r],e);if(s.push(i),i.type==="error")break}return s};function Rh(){return new TransformStream({transform(t,e){Ih(t,n=>{const s=n.length;let r;if(s<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,s);else if(s<65536){r=new Uint8Array(3);const i=new DataView(r.buffer);i.setUint8(0,126),i.setUint16(1,s)}else{r=new Uint8Array(9);const i=new DataView(r.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(s))}t.data&&typeof t.data!="string"&&(r[0]|=128),e.enqueue(r),e.enqueue(n)})}})}let Ys;function qn(t){return t.reduce((e,n)=>e+n.length,0)}function Kn(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let s=0;for(let r=0;r<e;r++)n[r]=t[0][s++],s===t[0].length&&(t.shift(),s=0);return t.length&&s<t[0].length&&(t[0]=t[0].slice(s)),n}function kh(t,e){Ys||(Ys=new TextDecoder);const n=[];let s=0,r=-1,i=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(s===0){if(qn(n)<1)break;const c=Kn(n,1);i=(c[0]&128)===128,r=c[0]&127,r<126?s=3:r===126?s=1:s=2}else if(s===1){if(qn(n)<2)break;const c=Kn(n,2);r=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),s=3}else if(s===2){if(qn(n)<8)break;const c=Kn(n,8),h=new DataView(c.buffer,c.byteOffset,c.length),u=h.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(vr);break}r=u*Math.pow(2,32)+h.getUint32(4),s=3}else{if(qn(n)<r)break;const c=Kn(n,r);a.enqueue(ni(i?c:Ys.decode(c),e)),s=0}if(r===0||r>t){a.enqueue(vr);break}}}})}const Ya=4;function ee(t){if(t)return Ph(t)}function Ph(t){for(var e in ee.prototype)t[e]=ee.prototype[e];return t}ee.prototype.on=ee.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};ee.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};ee.prototype.off=ee.prototype.removeListener=ee.prototype.removeAllListeners=ee.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var s,r=0;r<n.length;r++)if(s=n[r],s===e||s.fn===e){n.splice(r,1);break}return n.length===0&&delete this._callbacks["$"+t],this};ee.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(n){n=n.slice(0);for(var s=0,r=n.length;s<r;++s)n[s].apply(this,e)}return this};ee.prototype.emitReserved=ee.prototype.emit;ee.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};ee.prototype.hasListeners=function(t){return!!this.listeners(t).length};const ks=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0),be=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Nh="arraybuffer";function Xa(t,...e){return e.reduce((n,s)=>(t.hasOwnProperty(s)&&(n[s]=t[s]),n),{})}const xh=be.setTimeout,Dh=be.clearTimeout;function Ps(t,e){e.useNativeTimers?(t.setTimeoutFn=xh.bind(be),t.clearTimeoutFn=Dh.bind(be)):(t.setTimeoutFn=be.setTimeout.bind(be),t.clearTimeoutFn=be.clearTimeout.bind(be))}const Lh=1.33;function Mh(t){return typeof t=="string"?Uh(t):Math.ceil((t.byteLength||t.size)*Lh)}function Uh(t){let e=0,n=0;for(let s=0,r=t.length;s<r;s++)e=t.charCodeAt(s),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(s++,n+=4);return n}function Qa(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Bh(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function Fh(t){let e={},n=t.split("&");for(let s=0,r=n.length;s<r;s++){let i=n[s].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}class Hh extends Error{constructor(e,n,s){super(e),this.description=n,this.context=s,this.type="TransportError"}}class si extends ee{constructor(e){super(),this.writable=!1,Ps(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,s){return super.emitReserved("error",new Hh(e,n,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=ni(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=Bh(e);return n.length?"?"+n:""}}class $h extends si{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let s=0;this._polling&&(s++,this.once("pollComplete",function(){--s||n()})),this.writable||(s++,this.once("drain",function(){--s||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};Oh(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ah(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=Qa()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let Za=!1;try{Za=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Vh=Za;function jh(){}class Wh extends $h{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let s=location.port;s||(s=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}}doWrite(e,n){const s=this.request({method:"POST",data:e});s.on("success",n),s.on("error",(r,i)=>{this.onError("xhr post error",r,i)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,s)=>{this.onError("xhr poll error",n,s)}),this.pollXhr=e}}class Ve extends ee{constructor(e,n,s){super(),this.createRequest=e,Ps(this,s),this._opts=s,this._method=s.method||"GET",this._uri=n,this._data=s.data!==void 0?s.data:null,this._create()}_create(){var e;const n=Xa(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const s=this._xhr=this.createRequest(n);try{s.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let r in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(r)&&s.setRequestHeader(r,this._opts.extraHeaders[r])}}catch{}if(this._method==="POST")try{s.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{s.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(s),"withCredentials"in s&&(s.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(s.timeout=this._opts.requestTimeout),s.onreadystatechange=()=>{var r;s.readyState===3&&((r=this._opts.cookieJar)===null||r===void 0||r.parseCookies(s.getResponseHeader("set-cookie"))),s.readyState===4&&(s.status===200||s.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof s.status=="number"?s.status:0)},0))},s.send(this._data)}catch(r){this.setTimeoutFn(()=>{this._onError(r)},0);return}typeof document<"u"&&(this._index=Ve.requestsCount++,Ve.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=jh,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Ve.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Ve.requestsCount=0;Ve.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",oo);else if(typeof addEventListener=="function"){const t="onpagehide"in be?"pagehide":"unload";addEventListener(t,oo,!1)}}function oo(){for(let t in Ve.requests)Ve.requests.hasOwnProperty(t)&&Ve.requests[t].abort()}const qh=(function(){const t=ec({xdomain:!1});return t&&t.responseType!==null})();class Kh extends Wh{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=qh&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Ve(ec,this.uri(),e)}}function ec(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Vh))return new XMLHttpRequest}catch{}if(!e)try{return new be[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const tc=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class zh extends si{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,s=tc?{}:Xa(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,s)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const s=e[n],r=n===e.length-1;ti(s,this.supportsBinary,i=>{try{this.doWrite(s,i)}catch{}r&&ks(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=Qa()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const Xs=be.WebSocket||be.MozWebSocket;class Gh extends zh{createSocket(e,n,s){return tc?new Xs(e,n,s):n?new Xs(e,n):new Xs(e)}doWrite(e,n){this.ws.send(n)}}class Jh extends si{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=kh(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=e.readable.pipeThrough(n).getReader(),r=Rh();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const i=()=>{s.read().then(({done:a,value:c})=>{a||(this.onPacket(c),i())}).catch(a=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const s=e[n],r=n===e.length-1;this._writer.write(s).then(()=>{r&&ks(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Yh={websocket:Gh,webtransport:Jh,polling:Kh},Xh=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Qh=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function br(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),s=t.indexOf("]");n!=-1&&s!=-1&&(t=t.substring(0,n)+t.substring(n,s).replace(/:/g,";")+t.substring(s,t.length));let r=Xh.exec(t||""),i={},o=14;for(;o--;)i[Qh[o]]=r[o]||"";return n!=-1&&s!=-1&&(i.source=e,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=Zh(i,i.path),i.queryKey=ef(i,i.query),i}function Zh(t,e){const n=/\/{2,9}/g,s=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&s.splice(0,1),e.slice(-1)=="/"&&s.splice(s.length-1,1),s}function ef(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,r,i){r&&(n[r]=i)}),n}const wr=typeof addEventListener=="function"&&typeof removeEventListener=="function",Qn=[];wr&&addEventListener("offline",()=>{Qn.forEach(t=>t())},!1);class mt extends ee{constructor(e,n){if(super(),this.binaryType=Nh,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const s=br(e);n.hostname=s.host,n.secure=s.protocol==="https"||s.protocol==="wss",n.port=s.port,s.query&&(n.query=s.query)}else n.host&&(n.hostname=br(n.host).host);Ps(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(s=>{const r=s.prototype.name;this.transports.push(r),this._transportsByName[r]=s}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Fh(this.opts.query)),wr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Qn.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=Ya,n.transport=e,this.id&&(n.sid=this.id);const s=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](s)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&mt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",mt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let s=0;s<this.writeBuffer.length;s++){const r=this.writeBuffer[s].data;if(r&&(n+=Mh(r)),s>0&&n>this._maxPayload)return this.writeBuffer.slice(0,s);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,ks(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,s){return this._sendPacket("message",e,n,s),this}send(e,n,s){return this._sendPacket("message",e,n,s),this}_sendPacket(e,n,s,r){if(typeof n=="function"&&(r=n,n=void 0),typeof s=="function"&&(r=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const i={type:e,data:n,options:s};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},s=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():e()}):this.upgrading?s():e()),this}_onError(e){if(mt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),wr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const s=Qn.indexOf(this._offlineEventListener);s!==-1&&Qn.splice(s,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}mt.protocol=Ya;class tf extends mt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),s=!1;mt.priorWebsocketSuccess=!1;const r=()=>{s||(n.send([{type:"ping",data:"probe"}]),n.once("packet",d=>{if(!s)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;mt.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(u(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=n.name,this.emitReserved("upgradeError",p)}}))};function i(){s||(s=!0,u(),n.close(),n=null)}const o=d=>{const p=new Error("probe error: "+d);p.transport=n.name,i(),this.emitReserved("upgradeError",p)};function a(){o("transport closed")}function c(){o("socket closed")}function h(d){n&&d.name!==n.name&&i()}const u=()=>{n.removeListener("open",r),n.removeListener("error",o),n.removeListener("close",a),this.off("close",c),this.off("upgrading",h)};n.once("open",r),n.once("error",o),n.once("close",a),this.once("close",c),this.once("upgrading",h),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{s||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let s=0;s<e.length;s++)~this.transports.indexOf(e[s])&&n.push(e[s]);return n}}let nf=class extends tf{constructor(e,n={}){const s=typeof e=="object"?e:n;(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(r=>Yh[r]).filter(r=>!!r)),super(e,s)}};function sf(t,e="",n){let s=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),s=br(t)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const i=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+i+":"+s.port+e,s.href=s.protocol+"://"+i+(n&&n.port===s.port?"":":"+s.port),s}const rf=typeof ArrayBuffer=="function",of=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,nc=Object.prototype.toString,af=typeof Blob=="function"||typeof Blob<"u"&&nc.call(Blob)==="[object BlobConstructor]",cf=typeof File=="function"||typeof File<"u"&&nc.call(File)==="[object FileConstructor]";function ri(t){return rf&&(t instanceof ArrayBuffer||of(t))||af&&t instanceof Blob||cf&&t instanceof File}function Zn(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,s=t.length;n<s;n++)if(Zn(t[n]))return!0;return!1}if(ri(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Zn(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&Zn(t[n]))return!0;return!1}function lf(t){const e=[],n=t.data,s=t;return s.data=Er(n,e),s.attachments=e.length,{packet:s,buffers:e}}function Er(t,e){if(!t)return t;if(ri(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let s=0;s<t.length;s++)n[s]=Er(t[s],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=Er(t[s],e));return n}return t}function uf(t,e){return t.data=Ir(t.data,e),delete t.attachments,t}function Ir(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Ir(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Ir(t[n],e));return t}const hf=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var U;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(U||(U={}));class ff{constructor(e){this.replacer=e}encode(e){return(e.type===U.EVENT||e.type===U.ACK)&&Zn(e)?this.encodeAsBinary({type:e.type===U.EVENT?U.BINARY_EVENT:U.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===U.BINARY_EVENT||e.type===U.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=lf(e),s=this.encodeAsString(n.packet),r=n.buffers;return r.unshift(s),r}}class ii extends ee{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const s=n.type===U.BINARY_EVENT;s||n.type===U.BINARY_ACK?(n.type=s?U.EVENT:U.ACK,this.reconstructor=new df(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(ri(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const s={type:Number(e.charAt(0))};if(U[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===U.BINARY_EVENT||s.type===U.BINARY_ACK){const i=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(i,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!pf(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");s.attachments=a}if(e.charAt(n+1)==="/"){const i=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););s.nsp=e.substring(i,n)}else s.nsp="/";const r=e.charAt(n+1);if(r!==""&&Number(r)==r){const i=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}s.id=Number(e.substring(i,n+1))}if(e.charAt(++n)){const i=this.tryParse(e.substr(n));if(ii.isPayloadValid(s.type,i))s.data=i;else throw new Error("invalid payload")}return s}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case U.CONNECT:return ao(n);case U.DISCONNECT:return n===void 0;case U.CONNECT_ERROR:return typeof n=="string"||ao(n);case U.EVENT:case U.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&hf.indexOf(n[0])===-1);case U.ACK:case U.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class df{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=uf(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const pf=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function ao(t){return Object.prototype.toString.call(t)==="[object Object]"}const gf=Object.freeze(Object.defineProperty({__proto__:null,Decoder:ii,Encoder:ff,get PacketType(){return U}},Symbol.toStringTag,{value:"Module"}));function Ie(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const mf=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class sc extends ee{constructor(e,n,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Ie(e,"open",this.onopen.bind(this)),Ie(e,"packet",this.onpacket.bind(this)),Ie(e,"error",this.onerror.bind(this)),Ie(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var s,r,i;if(mf.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:U.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const u=this.ids++,d=n.pop();this._registerAckCallback(u,d),o.id=u}const a=(r=(s=this.io.engine)===null||s===void 0?void 0:s.transport)===null||r===void 0?void 0:r.writable,c=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var s;const r=(s=this.flags.timeout)!==null&&s!==void 0?s:this._opts.ackTimeout;if(r===void 0){this.acks[e]=n;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},r),o=(...a)=>{this.io.clearTimeoutFn(i),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((s,r)=>{const i=(o,a)=>o?r(o):s(a);i.withError=!0,n.push(i),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((r,...i)=>(this._queue[0],r!==null?s.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(r)):(this._queue.shift(),n&&n(null,...i)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:U.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(s=>String(s.id)===e)){const s=this.acks[e];delete this.acks[e],s.withError&&s.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case U.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case U.EVENT:case U.BINARY_EVENT:this.onevent(e);break;case U.ACK:case U.BINARY_ACK:this.onack(e);break;case U.DISCONNECT:this.ondisconnect();break;case U.CONNECT_ERROR:this.destroy();const s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const s of n)s.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let s=!1;return function(...r){s||(s=!0,n.packet({type:U.ACK,id:e,data:r}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:U.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let s=0;s<n.length;s++)if(e===n[s])return n.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let s=0;s<n.length;s++)if(e===n[s])return n.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const s of n)s.apply(this,e.data)}}}function Xt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Xt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};Xt.prototype.reset=function(){this.attempts=0};Xt.prototype.setMin=function(t){this.ms=t};Xt.prototype.setMax=function(t){this.max=t};Xt.prototype.setJitter=function(t){this.jitter=t};class Tr extends ee{constructor(e,n){var s;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Ps(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((s=n.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new Xt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const r=n.parser||gf;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new nf(this.uri,this.opts);const n=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const r=Ie(n,"open",function(){s.onopen(),e&&e()}),i=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Ie(n,"error",i);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{r(),i(new Error("timeout")),n.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(r),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Ie(e,"ping",this.onping.bind(this)),Ie(e,"data",this.ondata.bind(this)),Ie(e,"error",this.onerror.bind(this)),Ie(e,"close",this.onclose.bind(this)),Ie(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){ks(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let s=this.nsps[e];return s?this._autoConnect&&!s.active&&s.connect():(s=new sc(this,e,n),this.nsps[e]=s),s}_destroy(e){const n=Object.keys(this.nsps);for(const s of n)if(this.nsps[s].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let s=0;s<n.length;s++)this.engine.write(n[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var s;this.cleanup(),(s=this.engine)===null||s===void 0||s.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},n);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const on={};function es(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=sf(t,e.path||"/socket.io"),s=n.source,r=n.id,i=n.path,o=on[r]&&i in on[r].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let c;return a?c=new Tr(s,e):(on[r]||(on[r]=new Tr(s,e)),c=on[r]),n.query&&!e.query&&(e.query=n.queryKey),c.socket(n.path,e)}Object.assign(es,{Manager:Tr,Socket:sc,io:es,connect:es});let un="https://whatsapp-clone-production-65fc.up.railway.app";un&&!un.startsWith("http")&&(un="https://"+un);const _f=es(un,{autoConnect:!0,transports:["websocket","polling"]}),yf=()=>{};var co={};/**
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
 */const rc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},vf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,h=c?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|h>>6,w=h&63;c||(w=64,o||(p=64)),s.push(n[u],n[d],n[p],n[w])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||h==null||d==null)throw new bf;const p=i<<2|a>>4;if(s.push(p),h!==64){const w=a<<4&240|h>>2;if(s.push(w),d!==64){const x=h<<6&192|d;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wf=function(t){const e=rc(t);return ic.encodeByteArray(e,!0)},oc=function(t){return wf(t).replace(/\./g,"")},ac=function(t){try{return ic.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ef(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const If=()=>Ef().__FIREBASE_DEFAULTS__,Tf=()=>{if(typeof process>"u"||typeof co>"u")return;const t=co.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ac(t[1]);return e&&JSON.parse(e)},oi=()=>{try{return yf()||If()||Tf()||Sf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cf=t=>{var e,n;return(n=(e=oi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cc=()=>{var t;return(t=oi())===null||t===void 0?void 0:t.config},lc=t=>{var e;return(e=oi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Af{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ns(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Of(t){return(await fetch(t,{credentials:"include"})).ok}const yn={};function Rf(){const t={prod:[],emulator:[]};for(const e of Object.keys(yn))yn[e]?t.emulator.push(e):t.prod.push(e);return t}function kf(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let lo=!1;function Pf(t,e){if(typeof window>"u"||typeof document>"u"||!Ns(window.location.host)||yn[t]===e||yn[t]||lo)return;yn[t]=e;function n(p){return`__firebase__banner__${p}`}const s="__firebase__banner",i=Rf().prod.length>0;function o(){const p=document.getElementById(s);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,w){p.setAttribute("width","24"),p.setAttribute("id",w),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function h(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{lo=!0,o()},p}function u(p,w){p.setAttribute("id",w),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=kf(s),w=n("text"),x=document.getElementById(w)||document.createElement("span"),S=n("learnmore"),B=document.getElementById(S)||document.createElement("a"),R=n("preprendIcon"),D=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const F=p.element;a(F),u(B,S);const A=h();c(D,R),F.append(D,x,B,A),document.body.appendChild(F)}i?(x.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function xf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Df(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mf(){const t=he();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Uf(){try{return typeof indexedDB=="object"}catch{return!1}}function Bf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ff="FirebaseError";class bt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ff,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nn.prototype.create)}}class Nn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Hf(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new bt(r,a,s)}}function Hf(t,e){return t.replace($f,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const $f=/\{\$([^}]+)}/g;function Vf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gt(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(uo(i)&&uo(o)){if(!Gt(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function uo(t){return t!==null&&typeof t=="object"}/**
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
 */function xn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function jf(t,e){const n=new Wf(t,e);return n.subscribe.bind(n)}class Wf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");qf(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Qs),r.error===void 0&&(r.error=Qs),r.complete===void 0&&(r.complete=Qs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qs(){}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class Kf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Af;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gf(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zf(t){return t===At?void 0:t}function Gf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Jf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const Yf={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Xf=q.INFO,Qf={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Zf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Qf[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uc{constructor(e){this.name=e,this._logLevel=Xf,this._logHandler=Zf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const ed=(t,e)=>e.some(n=>t instanceof n);let ho,fo;function td(){return ho||(ho=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nd(){return fo||(fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hc=new WeakMap,Sr=new WeakMap,fc=new WeakMap,Zs=new WeakMap,ai=new WeakMap;function sd(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_t(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hc.set(n,t)}).catch(()=>{}),ai.set(e,t),e}function rd(t){if(Sr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sr.set(t,e)}let Cr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function id(t){Cr=t(Cr)}function od(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(er(this),e,...n);return fc.set(s,e.sort?e.sort():[e]),_t(s)}:nd().includes(t)?function(...e){return t.apply(er(this),e),_t(hc.get(this))}:function(...e){return _t(t.apply(er(this),e))}}function ad(t){return typeof t=="function"?od(t):(t instanceof IDBTransaction&&rd(t),ed(t,td())?new Proxy(t,Cr):t)}function _t(t){if(t instanceof IDBRequest)return sd(t);if(Zs.has(t))return Zs.get(t);const e=ad(t);return e!==t&&(Zs.set(t,e),ai.set(e,t)),e}const er=t=>ai.get(t);function cd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_t(o);return s&&o.addEventListener("upgradeneeded",c=>{s(_t(o.result),c.oldVersion,c.newVersion,_t(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const ld=["get","getKey","getAll","getAllKeys","count"],ud=["put","add","delete","clear"],tr=new Map;function po(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tr.get(e))return tr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ud.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ld.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),r&&c.done]))[0]};return tr.set(e,i),i}id(t=>({...t,get:(e,n,s)=>po(e,n)||t.get(e,n,s),has:(e,n)=>!!po(e,n)||t.has(e,n)}));/**
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
 */class hd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function fd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ar="@firebase/app",go="0.13.2";/**
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
 */const at=new uc("@firebase/app"),dd="@firebase/app-compat",pd="@firebase/analytics-compat",gd="@firebase/analytics",md="@firebase/app-check-compat",_d="@firebase/app-check",yd="@firebase/auth",vd="@firebase/auth-compat",bd="@firebase/database",wd="@firebase/data-connect",Ed="@firebase/database-compat",Id="@firebase/functions",Td="@firebase/functions-compat",Sd="@firebase/installations",Cd="@firebase/installations-compat",Ad="@firebase/messaging",Od="@firebase/messaging-compat",Rd="@firebase/performance",kd="@firebase/performance-compat",Pd="@firebase/remote-config",Nd="@firebase/remote-config-compat",xd="@firebase/storage",Dd="@firebase/storage-compat",Ld="@firebase/firestore",Md="@firebase/ai",Ud="@firebase/firestore-compat",Bd="firebase",Fd="11.10.0";/**
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
 */const Or="[DEFAULT]",Hd={[Ar]:"fire-core",[dd]:"fire-core-compat",[gd]:"fire-analytics",[pd]:"fire-analytics-compat",[_d]:"fire-app-check",[md]:"fire-app-check-compat",[yd]:"fire-auth",[vd]:"fire-auth-compat",[bd]:"fire-rtdb",[wd]:"fire-data-connect",[Ed]:"fire-rtdb-compat",[Id]:"fire-fn",[Td]:"fire-fn-compat",[Sd]:"fire-iid",[Cd]:"fire-iid-compat",[Ad]:"fire-fcm",[Od]:"fire-fcm-compat",[Rd]:"fire-perf",[kd]:"fire-perf-compat",[Pd]:"fire-rc",[Nd]:"fire-rc-compat",[xd]:"fire-gcs",[Dd]:"fire-gcs-compat",[Ld]:"fire-fst",[Ud]:"fire-fst-compat",[Md]:"fire-vertex","fire-js":"fire-js",[Bd]:"fire-js-all"};/**
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
 */const fs=new Map,$d=new Map,Rr=new Map;function mo(t,e){try{t.container.addComponent(e)}catch(n){at.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cn(t){const e=t.name;if(Rr.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;Rr.set(e,t);for(const n of fs.values())mo(n,t);for(const n of $d.values())mo(n,t);return!0}function dc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function He(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Vd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new Nn("app","Firebase",Vd);/**
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
 */class jd{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
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
 */const Dn=Fd;function pc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Or,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw yt.create("bad-app-name",{appName:String(r)});if(n||(n=cc()),!n)throw yt.create("no-options");const i=fs.get(r);if(i){if(Gt(n,i.options)&&Gt(s,i.config))return i;throw yt.create("duplicate-app",{appName:r})}const o=new Jf(r);for(const c of Rr.values())o.addComponent(c);const a=new jd(n,s,o);return fs.set(r,a),a}function Wd(t=Or){const e=fs.get(t);if(!e&&t===Or&&cc())return pc();if(!e)throw yt.create("no-app",{appName:t});return e}function Vt(t,e,n){var s;let r=(s=Hd[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(a.join(" "));return}Cn(new Jt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const qd="firebase-heartbeat-database",Kd=1,An="firebase-heartbeat-store";let nr=null;function gc(){return nr||(nr=cd(qd,Kd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(An)}catch(n){console.warn(n)}}}}).catch(t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})})),nr}async function zd(t){try{const n=(await gc()).transaction(An),s=await n.objectStore(An).get(mc(t));return await n.done,s}catch(e){if(e instanceof bt)at.warn(e.message);else{const n=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(n.message)}}}async function _o(t,e){try{const s=(await gc()).transaction(An,"readwrite");await s.objectStore(An).put(e,mc(t)),await s.done}catch(n){if(n instanceof bt)at.warn(n.message);else{const s=yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});at.warn(s.message)}}}function mc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Gd=1024,Jd=30;class Yd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qd(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Jd){const o=Zd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){at.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yo(),{heartbeatsToSend:s,unsentEntries:r}=Xd(this._heartbeatsCache.heartbeats),i=oc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return at.warn(n),""}}}function yo(){return new Date().toISOString().substring(0,10)}function Xd(t,e=Gd){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),vo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Qd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uf()?Bf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _o(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _o(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vo(t){return oc(JSON.stringify({version:2,heartbeats:t})).length}function Zd(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function ep(t){Cn(new Jt("platform-logger",e=>new hd(e),"PRIVATE")),Cn(new Jt("heartbeat",e=>new Yd(e),"PRIVATE")),Vt(Ar,go,t),Vt(Ar,go,"esm2017"),Vt("fire-js","")}ep("");function ci(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function _c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tp=_c,yc=new Nn("auth","Firebase",_c());/**
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
 */const ds=new uc("@firebase/auth");function np(t,...e){ds.logLevel<=q.WARN&&ds.warn(`Auth (${Dn}): ${t}`,...e)}function ts(t,...e){ds.logLevel<=q.ERROR&&ds.error(`Auth (${Dn}): ${t}`,...e)}/**
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
 */function ze(t,...e){throw ui(t,...e)}function Ae(t,...e){return ui(t,...e)}function li(t,e,n){const s=Object.assign(Object.assign({},tp()),{[e]:n});return new Nn("auth","Firebase",s).create(e,{appName:t.name})}function Nt(t){return li(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sp(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ze(t,"argument-error"),li(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ui(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return yc.create(t,...e)}function k(t,e,...n){if(!t)throw ui(e,...n)}function tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ts(e),new Error(e)}function ct(t,e){t||tt(e)}/**
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
 */function kr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rp(){return bo()==="http:"||bo()==="https:"}function bo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ip(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rp()||Df()||"connection"in navigator)?navigator.onLine:!0}function op(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ln{constructor(e,n){this.shortDelay=e,this.longDelay=n,ct(n>e,"Short delay should be less than long delay!"),this.isMobile=Nf()||Lf()}get(){return ip()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hi(t,e){ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ap={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lp=new Ln(3e4,6e4);function fi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qt(t,e,n,s,r={}){return bc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=xn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return xf()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ns(t.emulatorConfig.host)&&(h.credentials="include"),vc.fetch()(await wc(t,t.config.apiHost,n,a),h)})}async function bc(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ap),e);try{const r=new hp(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,h]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw zn(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw li(t,u,h);ze(t,u)}}catch(r){if(r instanceof bt)throw r;ze(t,"network-request-failed",{message:String(r)})}}async function up(t,e,n,s,r={}){const i=await Qt(t,e,n,s,r);return"mfaPendingCredential"in i&&ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function wc(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?hi(t.config,r):`${t.config.apiScheme}://${r}`;return cp.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class hp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ae(this.auth,"network-request-failed")),lp.get())})}}function zn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ae(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function fp(t,e){return Qt(t,"POST","/v1/accounts:delete",e)}async function ps(t,e){return Qt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dp(t,e=!1){const n=wt(t),s=await n.getIdToken(e),r=di(s);k(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:vn(sr(r.auth_time)),issuedAtTime:vn(sr(r.iat)),expirationTime:vn(sr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sr(t){return Number(t)*1e3}function di(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ts("JWT malformed, contained fewer than 3 sections"),null;try{const r=ac(n);return r?JSON.parse(r):(ts("Failed to decode base64 JWT payload"),null)}catch(r){return ts("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function wo(t){const e=di(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function On(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof bt&&pp(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function pp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vn(this.lastLoginAt),this.creationTime=vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await On(t,ps(n,{idToken:s}));k(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ec(i.providerUserInfo):[],a=_p(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?h:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Pr(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function mp(t){const e=wt(t);await gs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _p(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Ec(t){return t.map(e=>{var{providerId:n}=e,s=ci(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function yp(t,e){const n=await bc(t,{},async()=>{const s=xn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await wc(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return t.emulatorConfig&&Ns(t.emulatorConfig.host)&&(c.credentials="include"),vc.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vp(t,e){return Qt(t,"POST","/v2/accounts:revokeToken",fi(t,e))}/**
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
 */class jt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){k(e.length!==0,"internal-error");const n=wo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await yp(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new jt;return s&&(k(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(k(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(k(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jt,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
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
 */function ht(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Te{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=ci(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await On(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dp(this,e)}reload(){return mp(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Te(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await gs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(He(this.auth.app))return Promise.reject(Nt(this.auth));const e=await this.getIdToken();return await On(this,fp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,h,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,B=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(h=n.createdAt)!==null&&h!==void 0?h:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:A,isAnonymous:X,providerData:ve,stsTokenManager:ge}=n;k(F&&ge,e,"internal-error");const Re=jt.fromJSON(this.name,ge);k(typeof F=="string",e,"internal-error"),ht(d,e.name),ht(p,e.name),k(typeof A=="boolean",e,"internal-error"),k(typeof X=="boolean",e,"internal-error"),ht(w,e.name),ht(x,e.name),ht(S,e.name),ht(B,e.name),ht(R,e.name),ht(D,e.name);const ut=new Te({uid:F,auth:e,email:p,emailVerified:A,displayName:d,isAnonymous:X,photoURL:x,phoneNumber:w,tenantId:S,stsTokenManager:Re,createdAt:R,lastLoginAt:D});return ve&&Array.isArray(ve)&&(ut.providerData=ve.map(Ge=>Object.assign({},Ge))),B&&(ut._redirectEventId=B),ut}static async _fromIdTokenResponse(e,n,s=!1){const r=new jt;r.updateFromServerResponse(n);const i=new Te({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await gs(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];k(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Ec(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new jt;a.updateFromIdToken(s);const c=new Te({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Pr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Eo=new Map;function nt(t){ct(t instanceof Function,"Expected a class definition");let e=Eo.get(t);return e?(ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Eo.set(t,e),e)}/**
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
 */class Ic{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ic.type="NONE";const Io=Ic;/**
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
 */function ns(t,e,n){return`firebase:${t}:${e}:${n}`}class Wt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ns(this.userKey,r.apiKey,i),this.fullPersistenceKey=ns("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ps(this.auth,{idToken:e}).catch(()=>{});return n?Te._fromGetAccountInfoResponse(this.auth,n,e):null}return Te._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Wt(nt(Io),e,s);const r=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||nt(Io);const o=ns(s,e.config.apiKey,e.name);let a=null;for(const h of n)try{const u=await h._get(o);if(u){let d;if(typeof u=="string"){const p=await ps(e,{idToken:u}).catch(()=>{});if(!p)break;d=await Te._fromGetAccountInfoResponse(e,p,u)}else d=Te._fromJSON(e,u);h!==i&&(a=d),i=h;break}}catch{}const c=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Wt(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Wt(i,e,s))}}/**
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
 */function To(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ac(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rc(e))return"Blackberry";if(kc(e))return"Webos";if(Sc(e))return"Safari";if((e.includes("chrome/")||Cc(e))&&!e.includes("edge/"))return"Chrome";if(Oc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Tc(t=he()){return/firefox\//i.test(t)}function Sc(t=he()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cc(t=he()){return/crios\//i.test(t)}function Ac(t=he()){return/iemobile/i.test(t)}function Oc(t=he()){return/android/i.test(t)}function Rc(t=he()){return/blackberry/i.test(t)}function kc(t=he()){return/webos/i.test(t)}function pi(t=he()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bp(t=he()){var e;return pi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wp(){return Mf()&&document.documentMode===10}function Pc(t=he()){return pi(t)||Oc(t)||kc(t)||Rc(t)||/windows phone/i.test(t)||Ac(t)}/**
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
 */function Nc(t,e=[]){let n;switch(t){case"Browser":n=To(he());break;case"Worker":n=`${To(he())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dn}/${s}`}/**
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
 */class Ep{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Ip(t,e={}){return Qt(t,"GET","/v2/passwordPolicy",fi(t,e))}/**
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
 */const Tp=6;class Sp{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Tp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Cp{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new So(this),this.idTokenSubscription=new So(this),this.beforeStateQueue=new Ep(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Wt.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ps(this,{idToken:e}),s=await Te._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(He(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=op()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(He(this.app))return Promise.reject(Nt(this));const n=e?wt(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return He(this.app)?Promise.reject(Nt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return He(this.app)?Promise.reject(Nt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ip(this),n=new Sp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Nn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await vp(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nt(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await Wt.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(He(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&np(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xs(t){return wt(t)}class So{constructor(e){this.auth=e,this.observer=null,this.addObserver=jf(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ap(t){gi=t}function Op(t){return gi.loadJS(t)}function Rp(){return gi.gapiScript}function kp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Pp(t,e){const n=dc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Gt(i,e??{}))return r;ze(r,"already-initialized")}return n.initialize({options:e})}function Np(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function xp(t,e,n){const s=xs(t);k(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=xc(e),{host:o,port:a}=Dp(e),c=a===null?"":`:${a}`,h={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){k(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),k(Gt(h,s.config.emulator)&&Gt(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,Ns(o)?(Of(`${i}//${o}${c}`),Pf("Auth",!0)):Lp()}function xc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Dp(t){const e=xc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Co(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Co(o)}}}function Co(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Lp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Dc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,n){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}/**
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
 */async function qt(t,e){return up(t,"POST","/v1/accounts:signInWithIdp",fi(t,e))}/**
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
 */const Mp="http://localhost";class xt extends Dc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=ci(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new xt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,qt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qt(e,n)}buildRequest(){const e={requestUri:Mp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xn(n)}return e}}/**
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
 */class mi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mn extends mi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dt extends Mn{constructor(){super("facebook.com")}static credential(e){return xt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";dt.PROVIDER_ID="facebook.com";/**
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
 */class et extends Mn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return et.credential(n,s)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
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
 */class pt extends Mn{constructor(){super("github.com")}static credential(e){return xt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com";pt.PROVIDER_ID="github.com";/**
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
 */class gt extends Mn{constructor(){super("twitter.com")}static credential(e,n){return xt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return gt.credential(n,s)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
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
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Te._fromIdTokenResponse(e,s,r),o=Ao(s);return new Yt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ao(s);return new Yt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ao(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ms extends bt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ms.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ms(e,n,s,r)}}function Lc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ms._fromErrorAndOperation(t,i,e,s):i})}async function Up(t,e,n=!1){const s=await On(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yt._forOperation(t,"link",s)}/**
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
 */async function Bp(t,e,n=!1){const{auth:s}=t;if(He(s.app))return Promise.reject(Nt(s));const r="reauthenticate";try{const i=await On(t,Lc(s,r,e,t),n);k(i.idToken,s,"internal-error");const o=di(i.idToken);k(o,s,"internal-error");const{sub:a}=o;return k(t.uid===a,s,"user-mismatch"),Yt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ze(s,"user-mismatch"),i}}/**
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
 */async function Fp(t,e,n=!1){if(He(t.app))return Promise.reject(Nt(t));const s="signIn",r=await Lc(t,s,e),i=await Yt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Hp(t,e,n,s){return wt(t).onIdTokenChanged(e,n,s)}function $p(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function Vp(t,e,n,s){return wt(t).onAuthStateChanged(e,n,s)}function jp(t){return wt(t).signOut()}const _s="__sak";/**
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
 */class Mc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_s,"1"),this.storage.removeItem(_s),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Wp=1e3,qp=10;class Uc extends Mc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);wp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,qp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Wp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uc.type="LOCAL";const Kp=Uc;/**
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
 */class Bc extends Mc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bc.type="SESSION";const Fc=Bc;/**
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
 */function zp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ds(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async h=>h(n.origin,i)),c=await zp(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ds.receivers=[];/**
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
 */function _i(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Gp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const h=_i("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function je(){return window}function Jp(t){je().location.href=t}/**
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
 */function Hc(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function Yp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Qp(){return Hc()?self:null}/**
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
 */const $c="firebaseLocalStorageDb",Zp=1,ys="firebaseLocalStorage",Vc="fbase_key";class Un{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ls(t,e){return t.transaction([ys],e?"readwrite":"readonly").objectStore(ys)}function eg(){const t=indexedDB.deleteDatabase($c);return new Un(t).toPromise()}function Nr(){const t=indexedDB.open($c,Zp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ys,{keyPath:Vc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ys)?e(s):(s.close(),await eg(),e(await Nr()))})})}async function Oo(t,e,n){const s=Ls(t,!0).put({[Vc]:e,value:n});return new Un(s).toPromise()}async function tg(t,e){const n=Ls(t,!1).get(e),s=await new Un(n).toPromise();return s===void 0?null:s.value}function Ro(t,e){const n=Ls(t,!0).delete(e);return new Un(n).toPromise()}const ng=800,sg=3;class jc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>sg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ds._getInstance(Qp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Yp(),!this.activeServiceWorker)return;this.sender=new Gp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nr();return await Oo(e,_s,"1"),await Ro(e,_s),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Oo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>tg(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ro(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ls(r,!1).getAll();return new Un(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ng)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jc.type="LOCAL";const rg=jc;new Ln(3e4,6e4);/**
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
 */function Wc(t,e){return e?nt(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yi extends Dc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ig(t){return Fp(t.auth,new yi(t),t.bypassAuthState)}function og(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),Bp(n,new yi(t),t.bypassAuthState)}async function ag(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),Up(n,new yi(t),t.bypassAuthState)}/**
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
 */class qc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ig;case"linkViaPopup":case"linkViaRedirect":return ag;case"reauthViaPopup":case"reauthViaRedirect":return og;default:ze(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cg=new Ln(2e3,1e4);async function lg(t,e,n){if(He(t.app))return Promise.reject(Ae(t,"operation-not-supported-in-this-environment"));const s=xs(t);sp(t,e,mi);const r=Wc(s,n);return new Rt(s,"signInViaPopup",e,r).executeNotNull()}class Rt extends qc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Rt.currentPopupAction&&Rt.currentPopupAction.cancel(),Rt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=_i();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cg.get())};e()}}Rt.currentPopupAction=null;/**
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
 */const ug="pendingRedirect",ss=new Map;class hg extends qc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ss.get(this.auth._key());if(!e){try{const s=await fg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ss.set(this.auth._key(),e)}return this.bypassAuthState||ss.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fg(t,e){const n=gg(e),s=pg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function dg(t,e){ss.set(t._key(),e)}function pg(t){return nt(t._redirectPersistence)}function gg(t){return ns(ug,t.config.apiKey,t.name)}async function mg(t,e,n=!1){if(He(t.app))return Promise.reject(Nt(t));const s=xs(t),r=Wc(s,e),o=await new hg(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const _g=600*1e3;class yg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Kc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ae(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_g&&this.cachedEventUids.clear(),this.cachedEventUids.has(ko(e))}saveEventToCache(e){this.cachedEventUids.add(ko(e)),this.lastProcessedEventTime=Date.now()}}function ko(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Kc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kc(t);default:return!1}}/**
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
 */async function bg(t,e={}){return Qt(t,"GET","/v1/projects",e)}/**
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
 */const wg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Eg=/^https?/;async function Ig(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bg(t);for(const n of e)try{if(Tg(n))return}catch{}ze(t,"unauthorized-domain")}function Tg(t){const e=kr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Eg.test(n))return!1;if(wg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Sg=new Ln(3e4,6e4);function Po(){const t=je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Cg(t){return new Promise((e,n)=>{var s,r,i;function o(){Po(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Po(),n(Ae(t,"network-request-failed"))},timeout:Sg.get()})}if(!((r=(s=je().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=je().gapi)===null||i===void 0)&&i.load)o();else{const a=kp("iframefcb");return je()[a]=()=>{gapi.load?o():n(Ae(t,"network-request-failed"))},Op(`${Rp()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw rs=null,e})}let rs=null;function Ag(t){return rs=rs||Cg(t),rs}/**
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
 */const Og=new Ln(5e3,15e3),Rg="__/auth/iframe",kg="emulator/auth/iframe",Pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ng=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xg(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hi(e,kg):`https://${t.config.authDomain}/${Rg}`,s={apiKey:e.apiKey,appName:t.name,v:Dn},r=Ng.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${xn(s).slice(1)}`}async function Dg(t){const e=await Ag(t),n=je().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:xg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ae(t,"network-request-failed"),a=je().setTimeout(()=>{i(o)},Og.get());function c(){je().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Lg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mg=500,Ug=600,Bg="_blank",Fg="http://localhost";class No{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hg(t,e,n,s=Mg,r=Ug){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Lg),{width:s.toString(),height:r.toString(),top:i,left:o}),h=he().toLowerCase();n&&(a=Cc(h)?Bg:n),Tc(h)&&(e=e||Fg,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[w,x])=>`${p}${w}=${x},`,"");if(bp(h)&&a!=="_self")return $g(e||"",a),new No(null);const d=window.open(e||"",a,u);k(d,t,"popup-blocked");try{d.focus()}catch{}return new No(d)}function $g(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Vg="__/auth/handler",jg="emulator/auth/handler",Wg=encodeURIComponent("fac");async function xo(t,e,n,s,r,i){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Dn,eventId:r};if(e instanceof mi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Mn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),h=c?`#${Wg}=${encodeURIComponent(c)}`:"";return`${qg(t)}?${xn(a).slice(1)}${h}`}function qg({config:t}){return t.emulator?hi(t,jg):`https://${t.authDomain}/${Vg}`}/**
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
 */const rr="webStorageSupport";class Kg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fc,this._completeRedirectFn=mg,this._overrideRedirectResult=dg}async _openPopup(e,n,s,r){var i;ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await xo(e,n,s,kr(),r);return Hg(e,o,_i())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await xo(e,n,s,kr(),r);return Jp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ct(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Dg(e),s=new yg(e);return n.register("authEvent",r=>(k(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rr,{type:rr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[rr];o!==void 0&&n(!!o),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ig(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pc()||Sc()||pi()}}const zg=Kg;var Do="@firebase/auth",Lo="1.10.8";/**
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
 */class Gg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Jg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yg(t){Cn(new Jt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;k(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nc(t)},h=new Cp(s,r,i,c);return Np(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Cn(new Jt("auth-internal",e=>{const n=xs(e.getProvider("auth").getImmediate());return(s=>new Gg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(Do,Lo,Jg(t)),Vt(Do,Lo,"esm2017")}/**
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
 */const Xg=300,Qg=lc("authIdTokenMaxAge")||Xg;let Mo=null;const Zg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Qg)return;const r=n==null?void 0:n.token;Mo!==r&&(Mo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function em(t=Wd()){const e=dc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Pp(t,{popupRedirectResolver:zg,persistence:[rg,Kp,Fc]}),s=lc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Zg(i.toString());$p(n,o,()=>o(n.currentUser)),Hp(n,a=>o(a))}}const r=Cf("auth");return r&&xp(n,`http://${r}`),n}function tm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ap({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ae("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",tm().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yg("Browser");var nm="firebase",sm="11.10.0";/**
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
 */Vt(nm,sm,"app");const rm={apiKey:"AIzaSyBoshUYnXUquyfJZf9QYSBt9tzcPYmAXoY",authDomain:"whatsapp-clone-91fcb.firebaseapp.com",projectId:"whatsapp-clone-91fcb",storageBucket:"whatsapp-clone-91fcb.firebasestorage.app",messagingSenderId:"290539573480",appId:"1:290539573480:web:eea8271909b0b9dc42795d"},im=pc(rm),xr=em(im),om=new et,am={id:"login-container"},cm={key:0,id:"login-form"},lm=["disabled"],um={key:0},hm={key:1},fm={key:0,class:"error-msg"},dm={class:"user-preview"},pm=["src","alt"],gm={class:"avatars"},mm=["value"],_m={__name:"LoginView",emits:["login"],setup(t,{emit:e}){const n=e,s=Fe(null),r=Fe(""),i=Fe("👨‍💻"),o=["👨‍💻","👩‍💻","🤖","👻","🦊"],a=Fe(!1),c=Fe("");Jr(()=>{Vp(xr,d=>{s.value=d})});async function h(){a.value=!0,c.value="";try{const d=await lg(xr,om);s.value=d.user}catch{c.value="Error al iniciar sesión. Inténtalo de nuevo."}finally{a.value=!1}}function u(){n("login",{name:s.value.displayName,status:r.value,avatar:i.value,uid:s.value.uid})}return(d,p)=>(se(),de("div",am,[s.value?(se(),de("form",{key:1,id:"login-form",onSubmit:Wa(u,["prevent"])},[M("div",dm,[M("img",{src:s.value.photoURL,alt:s.value.displayName,class:"google-avatar"},null,8,pm),M("strong",null,_e(s.value.displayName),1)]),ur(M("input",{"onUpdate:modelValue":p[0]||(p[0]=w=>r.value=w),type:"text",placeholder:"Tu estado (ej: Disponible)",required:""},null,512),[[ja,r.value]]),p[4]||(p[4]=M("p",null,"Elige tu avatar:",-1)),M("div",gm,[(se(),de(pe,null,hr(o,w=>M("label",{key:w},[ur(M("input",{type:"radio",name:"avatar",value:w,"onUpdate:modelValue":p[1]||(p[1]=x=>i.value=x)},null,8,mm),[[ph,i.value]]),Zr(" "+_e(w),1)])),64))]),p[5]||(p[5]=M("button",{type:"submit"},"Entrar al Chat",-1))],32)):(se(),de("div",cm,[p[2]||(p[2]=M("h2",null,"WhatsApp Clone",-1)),p[3]||(p[3]=M("p",{class:"login-subtitle"},"Inicia sesión para continuar",-1)),M("button",{onClick:h,disabled:a.value,class:"google-btn"},[a.value?(se(),de("span",um,"Cargando...")):(se(),de("span",hm,"Iniciar sesión con Google"))],8,lm),c.value?(se(),de("p",fm,_e(c.value),1)):xu("",!0)]))]))}},ym={id:"app-container"},vm={id:"sidebar"},bm={id:"listausuarios"},wm={class:"user-list-avatar"},Em={class:"user-list-info"},Im={id:"chat-container"},Tm={id:"messages"},Sm={class:"avatar"},Cm={class:"msg-content"},Am={class:"msg-header"},Om={class:"msg-text"},Rm={id:"escribiendo"},km={__name:"ChatView",props:["socket","currentUser"],emits:["logout"],setup(t,{emit:e}){const n=t,s=e;async function r(){await jp(xr),s("logout")}const i=Fe([]),o=Fe([]),a=Fe(""),c=Fe(""),h=new Set;let u=null;function d(){h.size===0?c.value="":h.size===1?c.value=`${Array.from(h)[0]} está escribiendo...`:c.value="Varios usuarios están escribiendo..."}function p(){ua(()=>{window.scrollTo(0,document.body.scrollHeight)})}function w(){n.socket.emit("escribiendo",!0),clearTimeout(u),u=setTimeout(()=>{n.socket.emit("escribiendo",!1)},1500)}function x(){a.value&&n.currentUser&&(n.socket.emit("chat message",a.value),n.socket.emit("escribiendo",!1),a.value="")}return Jr(()=>{n.socket.emit("join",n.currentUser),n.socket.on("cargar mensajes",S=>{i.value=S,p()}),n.socket.on("actualizar usuarios",S=>{o.value=S}),n.socket.on("usuario escribiendo",S=>{S.estado?h.add(S.user.name):h.delete(S.user.name),d()}),n.socket.on("chat message",S=>{i.value.push(S),p()})}),Yr(()=>{n.socket.off("cargar mensajes"),n.socket.off("actualizar usuarios"),n.socket.off("usuario escribiendo"),n.socket.off("chat message")}),(S,B)=>(se(),de("div",ym,[M("div",vm,[M("div",{class:"sidebar-header"},[B[1]||(B[1]=M("h3",null,"Usuarios Conectados",-1)),M("button",{onClick:r,class:"signout-btn"},"Salir ↩")]),M("ul",bm,[(se(!0),de(pe,null,hr(o.value,R=>(se(),de("li",{key:R.id},[M("span",wm,_e(R.avatar),1),M("div",Em,[M("strong",null,_e(R.name),1),M("span",null,_e(R.status),1)])]))),128))])]),M("div",Im,[M("ul",Tm,[(se(!0),de(pe,null,hr(i.value,(R,D)=>(se(),de("li",{key:D,class:Is({"system-msg":R.system,"my-message":!R.system&&t.currentUser&&R.user.name===t.currentUser.name})},[R.system?(se(),de(pe,{key:0},[Zr(_e(R.text),1)],64)):(se(),de(pe,{key:1},[M("div",Sm,_e(R.user.avatar),1),M("div",Cm,[M("div",Am,[M("strong",null,_e(R.user.name),1),M("span",null,_e(R.user.status),1)]),M("div",Om,_e(R.text),1)])],64))],2))),128))]),M("div",Rm,_e(c.value),1),M("form",{id:"form",onSubmit:Wa(x,["prevent"])},[ur(M("input",{id:"input","onUpdate:modelValue":B[0]||(B[0]=R=>a.value=R),placeholder:"Escribe un mensaje...",onInput:w},null,544),[[ja,a.value]]),B[2]||(B[2]=M("button",{type:"submit"},"Enviar",-1))],32)])]))}},Pm={__name:"App",setup(t){const e=Fe(null);function n(r){e.value=r}function s(){e.value=null}return(r,i)=>e.value?(se(),mr(km,{key:1,socket:aa(_f),"current-user":e.value,onLogout:s},null,8,["socket","current-user"])):(se(),mr(_m,{key:0,onLogin:n}))}};bh(Pm).mount("#app");
