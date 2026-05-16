(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Q={},Jt=[],ze=()=>{},Yo=()=>!1,xs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ds=t=>t.startsWith("onUpdate:"),pe=Object.assign,Jr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hl=Object.prototype.hasOwnProperty,K=(t,e)=>hl.call(t,e),M=Array.isArray,Yt=t=>Wn(t)==="[object Map]",Xo=t=>Wn(t)==="[object Set]",Li=t=>Wn(t)==="[object Date]",U=t=>typeof t=="function",re=t=>typeof t=="string",Ye=t=>typeof t=="symbol",G=t=>t!==null&&typeof t=="object",Qo=t=>(G(t)||U(t))&&U(t.then)&&U(t.catch),Zo=Object.prototype.toString,Wn=t=>Zo.call(t),dl=t=>Wn(t).slice(8,-1),ea=t=>Wn(t)==="[object Object]",Yr=t=>re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Tn=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ls=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},pl=/-\w/g,De=Ls(t=>t.replace(pl,e=>e.slice(1).toUpperCase())),gl=/\B([A-Z])/g,qt=Ls(t=>t.replace(gl,"-$1").toLowerCase()),ta=Ls(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xs=Ls(t=>t?`on${ta(t)}`:""),Ke=(t,e)=>!Object.is(t,e),cs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},na=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mi;const Ms=()=>Mi||(Mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=re(s)?vl(s):Qr(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(re(t)||G(t))return t}const ml=/;(?![^(]*\))/g,_l=/:([^]+)/,yl=/\/\*[^]*?\*\//g;function vl(t){const e={};return t.replace(yl,"").split(ml).forEach(n=>{if(n){const s=n.split(_l);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function st(t){let e="";if(re(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const s=st(t[n]);s&&(e+=s+" ")}else if(G(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wl=Gr(bl);function sa(t){return!!t||t===""}function El(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Dn(t[s],e[s]);return n}function Dn(t,e){if(t===e)return!0;let n=Li(t),s=Li(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ye(t),s=Ye(e),n||s)return t===e;if(n=M(t),s=M(e),n||s)return n&&s?El(t,e):!1;if(n=G(t),s=G(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Dn(t[o],e[o]))return!1}}return String(t)===String(e)}const ra=t=>!!(t&&t.__v_isRef===!0),_e=t=>re(t)?t:t==null?"":M(t)||G(t)&&(t.toString===Zo||!U(t.toString))?ra(t)?_e(t.value):JSON.stringify(t,ia,2):String(t),ia=(t,e)=>ra(e)?ia(t,e.value):Yt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Qs(s,i)+" =>"]=r,n),{})}:Xo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qs(n))}:Ye(e)?Qs(e):G(e)&&!M(e)&&!ea(e)?String(e):e,Qs=(t,e="")=>{var n;return Ye(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class Il{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ue&&(ue.active?(this.parent=ue,this.index=(ue.scopes||(ue.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ue;try{return ue=this,e()}finally{ue=n}}}on(){++this._on===1&&(this.prevScope=ue,ue=this)}off(){if(this._on>0&&--this._on===0){if(ue===this)ue=this.prevScope;else{let e=ue;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Tl(){return ue}let ee;const Zs=new WeakSet;class oa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&(ue.active?ue.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zs.has(this)&&(Zs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ca(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ui(this),la(this);const e=ee,n=Le;ee=this,Le=!0;try{return this.fn()}finally{ua(this),ee=e,Le=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ti(e);this.deps=this.depsTail=void 0,Ui(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vr(this)&&this.run()}get dirty(){return vr(this)}}let aa=0,Sn,Cn;function ca(t,e=!1){if(t.flags|=8,e){t.next=Cn,Cn=t;return}t.next=Sn,Sn=t}function Zr(){aa++}function ei(){if(--aa>0)return;if(Cn){let e=Cn;for(Cn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Sn;){let e=Sn;for(Sn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function la(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ua(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),ti(s),Sl(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function vr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ln)||(t.globalVersion=Ln,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!vr(t))))return;t.flags|=2;const e=t.dep,n=ee,s=Le;ee=t,Le=!0;try{la(t);const r=t.fn(t._value);(e.version===0||Ke(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ee=n,Le=s,ua(t),t.flags&=-3}}function ti(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ti(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Sl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Le=!0;const ha=[];function ht(){ha.push(Le),Le=!1}function dt(){const t=ha.pop();Le=t===void 0?!0:t}function Ui(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ee;ee=void 0;try{e()}finally{ee=n}}}let Ln=0;class Cl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ni{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ee||!Le||ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ee)n=this.activeLink=new Cl(ee,this),ee.deps?(n.prevDep=ee.depsTail,ee.depsTail.nextDep=n,ee.depsTail=n):ee.deps=ee.depsTail=n,da(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ee.depsTail,n.nextDep=void 0,ee.depsTail.nextDep=n,ee.depsTail=n,ee.deps===n&&(ee.deps=s)}return n}trigger(e){this.version++,Ln++,this.notify(e)}notify(e){Zr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ei()}}}function da(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)da(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const br=new WeakMap,Ht=Symbol(""),wr=Symbol(""),Mn=Symbol("");function he(t,e,n){if(Le&&ee){let s=br.get(t);s||br.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new ni),r.map=s,r.key=n),r.track()}}function rt(t,e,n,s,r,i){const o=br.get(t);if(!o){Ln++;return}const a=c=>{c&&c.trigger()};if(Zr(),e==="clear")o.forEach(a);else{const c=M(t),l=c&&Yr(n);if(c&&n==="length"){const u=Number(s);o.forEach((d,p)=>{(p==="length"||p===Mn||!Ye(p)&&p>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Mn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Ht)),Yt(t)&&a(o.get(wr)));break;case"delete":c||(a(o.get(Ht)),Yt(t)&&a(o.get(wr)));break;case"set":Yt(t)&&a(o.get(Ht));break}}ei()}function Kt(t){const e=q(t);return e===t?e:(he(e,"iterate",Mn),Oe(t)?e:e.map(Ue))}function Us(t){return he(t=q(t),"iterate",Mn),t}function je(t,e){return pt(t)?rn(Vt(t)?Ue(e):e):Ue(e)}const Al={__proto__:null,[Symbol.iterator](){return er(this,Symbol.iterator,t=>je(this,t))},concat(...t){return Kt(this).concat(...t.map(e=>M(e)?Kt(e):e))},entries(){return er(this,"entries",t=>(t[1]=je(this,t[1]),t))},every(t,e){return et(this,"every",t,e,void 0,arguments)},filter(t,e){return et(this,"filter",t,e,n=>n.map(s=>je(this,s)),arguments)},find(t,e){return et(this,"find",t,e,n=>je(this,n),arguments)},findIndex(t,e){return et(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return et(this,"findLast",t,e,n=>je(this,n),arguments)},findLastIndex(t,e){return et(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return et(this,"forEach",t,e,void 0,arguments)},includes(...t){return tr(this,"includes",t)},indexOf(...t){return tr(this,"indexOf",t)},join(t){return Kt(this).join(t)},lastIndexOf(...t){return tr(this,"lastIndexOf",t)},map(t,e){return et(this,"map",t,e,void 0,arguments)},pop(){return gn(this,"pop")},push(...t){return gn(this,"push",t)},reduce(t,...e){return Bi(this,"reduce",t,e)},reduceRight(t,...e){return Bi(this,"reduceRight",t,e)},shift(){return gn(this,"shift")},some(t,e){return et(this,"some",t,e,void 0,arguments)},splice(...t){return gn(this,"splice",t)},toReversed(){return Kt(this).toReversed()},toSorted(t){return Kt(this).toSorted(t)},toSpliced(...t){return Kt(this).toSpliced(...t)},unshift(...t){return gn(this,"unshift",t)},values(){return er(this,"values",t=>je(this,t))}};function er(t,e,n){const s=Us(t),r=s[e]();return s!==t&&!Oe(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Rl=Array.prototype;function et(t,e,n,s,r,i){const o=Us(t),a=o!==t&&!Oe(t),c=o[e];if(c!==Rl[e]){const d=c.apply(t,i);return a?Ue(d):d}let l=n;o!==t&&(a?l=function(d,p){return n.call(this,je(t,d),p,t)}:n.length>2&&(l=function(d,p){return n.call(this,d,p,t)}));const u=c.call(o,l,s);return a&&r?r(u):u}function Bi(t,e,n,s){const r=Us(t),i=r!==t&&!Oe(t);let o=n,a=!1;r!==t&&(i?(a=s.length===0,o=function(l,u,d){return a&&(a=!1,l=je(t,l)),n.call(this,l,je(t,u),d,t)}):n.length>3&&(o=function(l,u,d){return n.call(this,l,u,d,t)}));const c=r[e](o,...s);return a?je(t,c):c}function tr(t,e,n){const s=q(t);he(s,"iterate",Mn);const r=s[e](...n);return(r===-1||r===!1)&&oi(n[0])?(n[0]=q(n[0]),s[e](...n)):r}function gn(t,e,n=[]){ht(),Zr();const s=q(t)[e].apply(t,n);return ei(),dt(),s}const kl=Gr("__proto__,__v_isRef,__isVue"),pa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ye));function Ol(t){Ye(t)||(t=String(t));const e=q(this);return he(e,"has",t),e.hasOwnProperty(t)}class ga{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?$l:va:i?ya:_a).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=M(e);if(!r){let c;if(o&&(c=Al[n]))return c;if(n==="hasOwnProperty")return Ol}const a=Reflect.get(e,n,de(e)?e:s);if((Ye(n)?pa.has(n):kl(n))||(r||he(e,"get",n),i))return a;if(de(a)){const c=o&&Yr(n)?a:a.value;return r&&G(c)?Ir(c):c}return G(a)?r?Ir(a):ri(a):a}}class ma extends ga{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=M(e)&&Yr(n);if(!this._isShallow){const l=pt(i);if(!Oe(s)&&!pt(s)&&(i=q(i),s=q(s)),!o&&de(i)&&!de(s))return l||(i.value=s),!0}const a=o?Number(n)<e.length:K(e,n),c=Reflect.set(e,n,s,de(e)?e:r);return e===q(r)&&(a?Ke(s,i)&&rt(e,"set",n,s):rt(e,"add",n,s)),c}deleteProperty(e,n){const s=K(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&rt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ye(n)||!pa.has(n))&&he(e,"has",n),s}ownKeys(e){return he(e,"iterate",M(e)?"length":Ht),Reflect.ownKeys(e)}}class Pl extends ga{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Nl=new ma,xl=new Pl,Dl=new ma(!0);const Er=t=>t,ts=t=>Reflect.getPrototypeOf(t);function Ll(t,e,n){return function(...s){const r=this.__v_raw,i=q(r),o=Yt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Er:e?rn:Ue;return!e&&he(i,"iterate",c?wr:Ht),pe(Object.create(l),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}}})}}function ns(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ml(t,e){const n={get(r){const i=this.__v_raw,o=q(i),a=q(r);t||(Ke(r,a)&&he(o,"get",r),he(o,"get",a));const{has:c}=ts(o),l=e?Er:t?rn:Ue;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&he(q(r),"iterate",Ht),r.size},has(r){const i=this.__v_raw,o=q(i),a=q(r);return t||(Ke(r,a)&&he(o,"has",r),he(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=q(a),l=e?Er:t?rn:Ue;return!t&&he(c,"iterate",Ht),a.forEach((u,d)=>r.call(i,l(u),l(d),o))}};return pe(n,t?{add:ns("add"),set:ns("set"),delete:ns("delete"),clear:ns("clear")}:{add(r){const i=q(this),o=ts(i),a=q(r),c=!e&&!Oe(r)&&!pt(r)?a:r;return o.has.call(i,c)||Ke(r,c)&&o.has.call(i,r)||Ke(a,c)&&o.has.call(i,a)||(i.add(c),rt(i,"add",c,c)),this},set(r,i){!e&&!Oe(i)&&!pt(i)&&(i=q(i));const o=q(this),{has:a,get:c}=ts(o);let l=a.call(o,r);l||(r=q(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,i),l?Ke(i,u)&&rt(o,"set",r,i):rt(o,"add",r,i),this},delete(r){const i=q(this),{has:o,get:a}=ts(i);let c=o.call(i,r);c||(r=q(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&rt(i,"delete",r,void 0),l},clear(){const r=q(this),i=r.size!==0,o=r.clear();return i&&rt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ll(r,t,e)}),n}function si(t,e){const n=Ml(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(K(n,r)&&r in s?n:s,r,i)}const Ul={get:si(!1,!1)},Bl={get:si(!1,!0)},Fl={get:si(!0,!1)};const _a=new WeakMap,ya=new WeakMap,va=new WeakMap,$l=new WeakMap;function Hl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vl(t){return t.__v_skip||!Object.isExtensible(t)?0:Hl(dl(t))}function ri(t){return pt(t)?t:ii(t,!1,Nl,Ul,_a)}function Wl(t){return ii(t,!1,Dl,Bl,ya)}function Ir(t){return ii(t,!0,xl,Fl,va)}function ii(t,e,n,s,r){if(!G(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Vl(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function Vt(t){return pt(t)?Vt(t.__v_raw):!!(t&&t.__v_isReactive)}function pt(t){return!!(t&&t.__v_isReadonly)}function Oe(t){return!!(t&&t.__v_isShallow)}function oi(t){return t?!!t.__v_raw:!1}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function jl(t){return!K(t,"__v_skip")&&Object.isExtensible(t)&&na(t,"__v_skip",!0),t}const Ue=t=>G(t)?ri(t):t,rn=t=>G(t)?Ir(t):t;function de(t){return t?t.__v_isRef===!0:!1}function ae(t){return ql(t,!1)}function ql(t,e){return de(t)?t:new Kl(t,e)}class Kl{constructor(e,n){this.dep=new ni,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:q(e),this._value=n?e:Ue(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Oe(e)||pt(e);e=s?e:q(e),Ke(e,n)&&(this._rawValue=e,this._value=s?e:Ue(e),this.dep.trigger())}}function ba(t){return de(t)?t.value:t}const zl={get:(t,e,n)=>e==="__v_raw"?t:ba(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return de(r)&&!de(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function wa(t){return Vt(t)?t:new Proxy(t,zl)}class Gl{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ni(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ln-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ee!==this)return ca(this,!0),!0}get value(){const e=this.dep.track();return fa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jl(t,e,n=!1){let s,r;return U(t)?s=t:(s=t.get,r=t.set),new Gl(s,r,n)}const ss={},vs=new WeakMap;let Ut;function Yl(t,e=!1,n=Ut){if(n){let s=vs.get(n);s||vs.set(n,s=[]),s.push(t)}}function Xl(t,e,n=Q){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>r?O:Oe(O)||r===!1||r===0?it(O,1):it(O);let u,d,p,w,D=!1,S=!1;if(de(t)?(d=()=>t.value,D=Oe(t)):Vt(t)?(d=()=>l(t),D=!0):M(t)?(S=!0,D=t.some(O=>Vt(O)||Oe(O)),d=()=>t.map(O=>{if(de(O))return O.value;if(Vt(O))return l(O);if(U(O))return c?c(O,2):O()})):U(t)?e?d=c?()=>c(t,2):t:d=()=>{if(p){ht();try{p()}finally{dt()}}const O=Ut;Ut=u;try{return c?c(t,3,[w]):t(w)}finally{Ut=O}}:d=ze,e&&r){const O=d,ne=r===!0?1/0:r;d=()=>it(O(),ne)}const A=Tl(),B=()=>{u.stop(),A&&A.active&&Jr(A.effects,u)};if(i&&e){const O=e;e=(...ne)=>{O(...ne),B()}}let C=S?new Array(t.length).fill(ss):ss;const $=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const ne=u.run();if(r||D||(S?ne.some((we,ge)=>Ke(we,C[ge])):Ke(ne,C))){p&&p();const we=Ut;Ut=u;try{const ge=[ne,C===ss?void 0:S&&C[0]===ss?[]:C,w];C=ne,c?c(e,3,ge):e(...ge)}finally{Ut=we}}}else u.run()};return a&&a($),u=new oa(d),u.scheduler=o?()=>o($,!1):$,w=O=>Yl(O,!1,u),p=u.onStop=()=>{const O=vs.get(u);if(O){if(c)c(O,4);else for(const ne of O)ne();vs.delete(u)}},e?s?$(!0):C=u.run():o?o($.bind(null,!0),!0):u.run(),B.pause=u.pause.bind(u),B.resume=u.resume.bind(u),B.stop=B,B}function it(t,e=1/0,n){if(e<=0||!G(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,de(t))it(t.value,e,n);else if(M(t))for(let s=0;s<t.length;s++)it(t[s],e,n);else if(Xo(t)||Yt(t))t.forEach(s=>{it(s,e,n)});else if(ea(t)){for(const s in t)it(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&it(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jn(t,e,n,s){try{return s?t(...s):t()}catch(r){Bs(r,e,n)}}function Xe(t,e,n,s){if(U(t)){const r=jn(t,e,n,s);return r&&Qo(r)&&r.catch(i=>{Bs(i,e,n)}),r}if(M(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Xe(t[i],e,n,s));return r}}function Bs(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Q;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(i){ht(),jn(i,null,10,[t,c,l]),dt();return}}Ql(t,n,r,s,o)}function Ql(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const ye=[];let We=-1;const Xt=[];let bt=null,zt=0;const Ea=Promise.resolve();let bs=null;function Ia(t){const e=bs||Ea;return t?e.then(this?t.bind(this):t):e}function Zl(t){let e=We+1,n=ye.length;for(;e<n;){const s=e+n>>>1,r=ye[s],i=Un(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function ai(t){if(!(t.flags&1)){const e=Un(t),n=ye[ye.length-1];!n||!(t.flags&2)&&e>=Un(n)?ye.push(t):ye.splice(Zl(e),0,t),t.flags|=1,Ta()}}function Ta(){bs||(bs=Ea.then(Ca))}function eu(t){M(t)?Xt.push(...t):bt&&t.id===-1?bt.splice(zt+1,0,t):t.flags&1||(Xt.push(t),t.flags|=1),Ta()}function Fi(t,e,n=We+1){for(;n<ye.length;n++){const s=ye[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;ye.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Sa(t){if(Xt.length){const e=[...new Set(Xt)].sort((n,s)=>Un(n)-Un(s));if(Xt.length=0,bt){bt.push(...e);return}for(bt=e,zt=0;zt<bt.length;zt++){const n=bt[zt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bt=null,zt=0}}const Un=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ca(t){try{for(We=0;We<ye.length;We++){const e=ye[We];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;We<ye.length;We++){const e=ye[We];e&&(e.flags&=-2)}We=-1,ye.length=0,Sa(),bs=null,(ye.length||Xt.length)&&Ca()}}let ke=null,Aa=null;function ws(t){const e=ke;return ke=t,Aa=t&&t.type.__scopeId||null,e}function tu(t,e=ke,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Yi(-1);const i=ws(e);let o;try{o=t(...r)}finally{ws(i),s._d&&Yi(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Gt(t,e){if(ke===null)return t;const n=Ws(ke),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Q]=e[r];i&&(U(i)&&(i={mounted:i,updated:i}),i.deep&&it(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Lt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ht(),Xe(c,n,8,[t.el,a,t,e]),dt())}}function nu(t,e){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[t]=e}}function ls(t,e,n=!1){const s=ef();if(s||Qt){let r=Qt?Qt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e}}const su=Symbol.for("v-scx"),ru=()=>ls(su);function nr(t,e,n){return Ra(t,e,n)}function Ra(t,e,n=Q){const{immediate:s,deep:r,flush:i,once:o}=n,a=pe({},n),c=e&&s||!e&&i!=="post";let l;if(Fn){if(i==="sync"){const w=ru();l=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=ze,w.resume=ze,w.pause=ze,w}}const u=ve;a.call=(w,D,S)=>Xe(w,u,D,S);let d=!1;i==="post"?a.scheduler=w=>{Ee(w,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(w,D)=>{D?w():ai(w)}),a.augmentJob=w=>{e&&(w.flags|=4),d&&(w.flags|=2,u&&(w.id=u.uid,w.i=u))};const p=Xl(t,e,a);return Fn&&(l?l.push(p):c&&p()),p}function iu(t,e,n){const s=this.proxy,r=re(t)?t.includes(".")?ka(s,t):()=>s[t]:t.bind(s,s);let i;U(e)?i=e:(i=e.handler,n=e);const o=qn(this),a=Ra(r,i.bind(s),n);return o(),a}function ka(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const ou=Symbol("_vte"),au=t=>t.__isTeleport,cu=Symbol("_leaveCb");function ci(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ci(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Oa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function $i(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Es=new WeakMap;function An(t,e,n,s,r=!1){if(M(t)){t.forEach((S,A)=>An(S,e&&(M(e)?e[A]:e),n,s,r));return}if(Rn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&An(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Ws(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Q?a.refs={}:a.refs,d=a.setupState,p=q(d),w=d===Q?Yo:S=>$i(u,S)?!1:K(p,S),D=(S,A)=>!(A&&$i(u,A));if(l!=null&&l!==c){if(Hi(e),re(l))u[l]=null,w(l)&&(d[l]=null);else if(de(l)){const S=e;D(l,S.k)&&(l.value=null),S.k&&(u[S.k]=null)}}if(U(c))jn(c,a,12,[o,u]);else{const S=re(c),A=de(c);if(S||A){const B=()=>{if(t.f){const C=S?w(c)?d[c]:u[c]:D()||!t.k?c.value:u[t.k];if(r)M(C)&&Jr(C,i);else if(M(C))C.includes(i)||C.push(i);else if(S)u[c]=[i],w(c)&&(d[c]=u[c]);else{const $=[i];D(c,t.k)&&(c.value=$),t.k&&(u[t.k]=$)}}else S?(u[c]=o,w(c)&&(d[c]=o)):A&&(D(c,t.k)&&(c.value=o),t.k&&(u[t.k]=o))};if(o){const C=()=>{B(),Es.delete(t)};C.id=-1,Es.set(t,C),Ee(C,n)}else Hi(t),B()}}}function Hi(t){const e=Es.get(t);e&&(e.flags|=8,Es.delete(t))}Ms().requestIdleCallback;Ms().cancelIdleCallback;const Rn=t=>!!t.type.__asyncLoader,Pa=t=>t.type.__isKeepAlive;function lu(t,e){Na(t,"a",e)}function uu(t,e){Na(t,"da",e)}function Na(t,e,n=ve){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Fs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Pa(r.parent.vnode)&&fu(s,e,n,r),r=r.parent}}function fu(t,e,n,s){const r=Fs(e,t,s,!0);$s(()=>{Jr(s[e],r)},n)}function Fs(t,e,n=ve,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ht();const a=qn(n),c=Xe(e,n,t,o);return a(),dt(),c});return s?r.unshift(i):r.push(i),i}}const _t=t=>(e,n=ve)=>{(!Fn||t==="sp")&&Fs(t,(...s)=>e(...s),n)},hu=_t("bm"),xa=_t("m"),du=_t("bu"),pu=_t("u"),gu=_t("bum"),$s=_t("um"),mu=_t("sp"),_u=_t("rtg"),yu=_t("rtc");function vu(t,e=ve){Fs("ec",t,e)}const bu=Symbol.for("v-ndc");function Tr(t,e,n,s){let r;const i=n,o=M(t);if(o||re(t)){const a=o&&Vt(t);let c=!1,l=!1;a&&(c=!Oe(t),l=pt(t),t=Us(t)),r=new Array(t.length);for(let u=0,d=t.length;u<d;u++)r[u]=e(c?l?rn(Ue(t[u])):Ue(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(G(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=e(t[u],u,c,i)}}else r=[];return r}const Sr=t=>t?ec(t)?Ws(t):Sr(t.parent):null,kn=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sr(t.parent),$root:t=>Sr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>La(t),$forceUpdate:t=>t.f||(t.f=()=>{ai(t.update)}),$nextTick:t=>t.n||(t.n=Ia.bind(t.proxy)),$watch:t=>iu.bind(t)}),sr=(t,e)=>t!==Q&&!t.__isScriptSetup&&K(t,e),wu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(sr(s,e))return o[e]=1,s[e];if(r!==Q&&K(r,e))return o[e]=2,r[e];if(K(i,e))return o[e]=3,i[e];if(n!==Q&&K(n,e))return o[e]=4,n[e];Cr&&(o[e]=0)}}const l=kn[e];let u,d;if(l)return e==="$attrs"&&he(t.attrs,"get",""),l(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Q&&K(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,K(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return sr(r,e)?(r[e]=n,!0):s!==Q&&K(s,e)?(s[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},a){let c;return!!(n[a]||t!==Q&&a[0]!=="$"&&K(t,a)||sr(e,a)||K(i,a)||K(s,a)||K(kn,a)||K(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vi(t){return M(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cr=!0;function Eu(t){const e=La(t),n=t.proxy,s=t.ctx;Cr=!1,e.beforeCreate&&Wi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:w,updated:D,activated:S,deactivated:A,beforeDestroy:B,beforeUnmount:C,destroyed:$,unmounted:O,render:ne,renderTracked:we,renderTriggered:ge,errorCaptured:Se,serverPrefetch:F,expose:R,inheritAttrs:se,components:Ce,directives:J,filters:Pt}=e;if(l&&Iu(l,s,null),o)for(const te in o){const z=o[te];U(z)&&(s[te]=z.bind(n))}if(r){const te=r.call(n,n);G(te)&&(t.data=ri(te))}if(Cr=!0,i)for(const te in i){const z=i[te],xt=U(z)?z.bind(n,n):U(z.get)?z.get.bind(n,n):ze,Zn=!U(z)&&U(z.set)?z.set.bind(n):ze,Dt=nc({get:xt,set:Zn});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Be=>Dt.value=Be})}if(a)for(const te in a)Da(a[te],s,n,te);if(c){const te=U(c)?c.call(n):c;Reflect.ownKeys(te).forEach(z=>{nu(z,te[z])})}u&&Wi(u,t,"c");function ce(te,z){M(z)?z.forEach(xt=>te(xt.bind(n))):z&&te(z.bind(n))}if(ce(hu,d),ce(xa,p),ce(du,w),ce(pu,D),ce(lu,S),ce(uu,A),ce(vu,Se),ce(yu,we),ce(_u,ge),ce(gu,C),ce($s,O),ce(mu,F),M(R))if(R.length){const te=t.exposed||(t.exposed={});R.forEach(z=>{Object.defineProperty(te,z,{get:()=>n[z],set:xt=>n[z]=xt,enumerable:!0})})}else t.exposed||(t.exposed={});ne&&t.render===ze&&(t.render=ne),se!=null&&(t.inheritAttrs=se),Ce&&(t.components=Ce),J&&(t.directives=J),F&&Oa(t)}function Iu(t,e,n=ze){M(t)&&(t=Ar(t));for(const s in t){const r=t[s];let i;G(r)?"default"in r?i=ls(r.from||s,r.default,!0):i=ls(r.from||s):i=ls(r),de(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Wi(t,e,n){Xe(M(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Da(t,e,n,s){let r=s.includes(".")?ka(n,s):()=>n[s];if(re(t)){const i=e[t];U(i)&&nr(r,i)}else if(U(t))nr(r,t.bind(n));else if(G(t))if(M(t))t.forEach(i=>Da(i,e,n,s));else{const i=U(t.handler)?t.handler.bind(n):e[t.handler];U(i)&&nr(r,i,t)}}function La(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Is(c,l,o,!0)),Is(c,e,o)),G(e)&&i.set(e,c),c}function Is(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Is(t,i,n,!0),r&&r.forEach(o=>Is(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Tu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tu={data:ji,props:qi,emits:qi,methods:yn,computed:yn,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:yn,directives:yn,watch:Cu,provide:ji,inject:Su};function ji(t,e){return e?t?function(){return pe(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Su(t,e){return yn(Ar(t),Ar(e))}function Ar(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function yn(t,e){return t?pe(Object.create(null),t,e):e}function qi(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:pe(Object.create(null),Vi(t),Vi(e??{})):e}function Cu(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const s in e)n[s]=me(t[s],e[s]);return n}function Ma(){return{app:null,config:{isNativeTag:Yo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Au=0;function Ru(t,e){return function(s,r=null){U(s)||(s=pe({},s)),r!=null&&!G(r)&&(r=null);const i=Ma(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Au++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:af,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&U(u.install)?(o.add(u),u.install(l,...d)):U(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!c){const w=l._ceVNode||ut(s,r);return w.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(w,u,p),c=!0,l._container=u,u.__vue_app__=l,Ws(w.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Xe(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=Qt;Qt=l;try{return u()}finally{Qt=d}}};return l}}let Qt=null;const ku=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${De(e)}Modifiers`]||t[`${qt(e)}Modifiers`];function Ou(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Q;let r=n;const i=e.startsWith("update:"),o=i&&ku(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>re(u)?u.trim():u)),o.number&&(r=n.map(Xr)));let a,c=s[a=Xs(e)]||s[a=Xs(De(e))];!c&&i&&(c=s[a=Xs(qt(e))]),c&&Xe(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xe(l,t,6,r)}}const Pu=new WeakMap;function Ua(t,e,n=!1){const s=n?Pu:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!U(t)){const c=l=>{const u=Ua(l,e,!0);u&&(a=!0,pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(G(t)&&s.set(t,null),null):(M(i)?i.forEach(c=>o[c]=null):pe(o,i),G(t)&&s.set(t,o),o)}function Hs(t,e){return!t||!xs(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,qt(e))||K(t,e))}function Ki(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:p,setupState:w,ctx:D,inheritAttrs:S}=t,A=ws(t);let B,C;try{if(n.shapeFlag&4){const O=r||s,ne=O;B=qe(l.call(ne,O,u,d,w,p,D)),C=a}else{const O=e;B=qe(O.length>1?O(d,{attrs:a,slots:o,emit:c}):O(d,null)),C=e.props?a:Nu(a)}}catch(O){On.length=0,Bs(O,t,1),B=ut(At)}let $=B;if(C&&S!==!1){const O=Object.keys(C),{shapeFlag:ne}=$;O.length&&ne&7&&(i&&O.some(Ds)&&(C=xu(C,i)),$=on($,C,!1,!0))}return n.dirs&&($=on($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&ci($,n.transition),B=$,ws(A),B}const Nu=t=>{let e;for(const n in t)(n==="class"||n==="style"||xs(n))&&((e||(e={}))[n]=t[n]);return e},xu=(t,e)=>{const n={};for(const s in t)(!Ds(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Du(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?zi(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(Ba(o,s,p)&&!Hs(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?zi(s,o,l):!0:!!o;return!1}function zi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(Ba(e,t,i)&&!Hs(n,i))return!0}return!1}function Ba(t,e,n){const s=t[n],r=e[n];return n==="style"&&G(s)&&G(r)?!Dn(s,r):s!==r}function Lu({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const Fa={},$a=()=>Object.create(Fa),Ha=t=>Object.getPrototypeOf(t)===Fa;function Mu(t,e,n,s=!1){const r={},i=$a();t.propsDefaults=Object.create(null),Va(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Wl(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Uu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=q(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Hs(t.emitsOptions,p))continue;const w=e[p];if(c)if(K(i,p))w!==i[p]&&(i[p]=w,l=!0);else{const D=De(p);r[D]=Rr(c,a,D,w,t,!1)}else w!==i[p]&&(i[p]=w,l=!0)}}}else{Va(t,e,r,i)&&(l=!0);let u;for(const d in a)(!e||!K(e,d)&&((u=qt(d))===d||!K(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Rr(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!K(e,d))&&(delete i[d],l=!0)}l&&rt(t.attrs,"set","")}function Va(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Tn(c))continue;const l=e[c];let u;r&&K(r,u=De(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Hs(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=q(n),l=a||Q;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Rr(r,c,d,l[d],t,!K(l,d))}}return o}function Rr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&U(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=qn(r);s=l[n]=c.call(null,e),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===qt(n))&&(s=!0))}return s}const Bu=new WeakMap;function Wa(t,e,n=!1){const s=n?Bu:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!U(t)){const u=d=>{c=!0;const[p,w]=Wa(d,e,!0);pe(o,p),w&&a.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return G(t)&&s.set(t,Jt),Jt;if(M(i))for(let u=0;u<i.length;u++){const d=De(i[u]);Gi(d)&&(o[d]=Q)}else if(i)for(const u in i){const d=De(u);if(Gi(d)){const p=i[u],w=o[d]=M(p)||U(p)?{type:p}:pe({},p),D=w.type;let S=!1,A=!0;if(M(D))for(let B=0;B<D.length;++B){const C=D[B],$=U(C)&&C.name;if($==="Boolean"){S=!0;break}else $==="String"&&(A=!1)}else S=U(D)&&D.name==="Boolean";w[0]=S,w[1]=A,(S||K(w,"default"))&&a.push(d)}}const l=[o,a];return G(t)&&s.set(t,l),l}function Gi(t){return t[0]!=="$"&&!Tn(t)}const li=t=>t==="_"||t==="_ctx"||t==="$stable",ui=t=>M(t)?t.map(qe):[qe(t)],Fu=(t,e,n)=>{if(e._n)return e;const s=tu((...r)=>ui(e(...r)),n);return s._c=!1,s},ja=(t,e,n)=>{const s=t._ctx;for(const r in t){if(li(r))continue;const i=t[r];if(U(i))e[r]=Fu(r,i,s);else if(i!=null){const o=ui(i);e[r]=()=>o}}},qa=(t,e)=>{const n=ui(e);t.slots.default=()=>n},Ka=(t,e,n)=>{for(const s in e)(n||!li(s))&&(t[s]=e[s])},$u=(t,e,n)=>{const s=t.slots=$a();if(t.vnode.shapeFlag&32){const r=e._;r?(Ka(s,e,n),n&&na(s,"_",r,!0)):ja(e,s)}else e&&qa(t,e)},Hu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Q;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Ka(r,e,n):(i=!e.$stable,ja(e,r)),o=e}else e&&(qa(t,e),o={default:1});if(i)for(const a in r)!li(a)&&o[a]==null&&delete r[a]},Ee=Ku;function Vu(t){return Wu(t)}function Wu(t,e){const n=Ms();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:w=ze,insertStaticContent:D}=t,S=(f,h,g,v=null,m=null,_=null,I=void 0,E=null,b=!!h.dynamicChildren)=>{if(f===h)return;f&&!mn(f,h)&&(v=es(f),Be(f,m,_,!0),f=null),h.patchFlag===-2&&(b=!1,h.dynamicChildren=null);const{type:y,ref:P,shapeFlag:T}=h;switch(y){case Vs:A(f,h,g,v);break;case At:B(f,h,g,v);break;case ir:f==null&&C(h,g,v,I);break;case fe:Ce(f,h,g,v,m,_,I,E,b);break;default:T&1?ne(f,h,g,v,m,_,I,E,b):T&6?J(f,h,g,v,m,_,I,E,b):(T&64||T&128)&&y.process(f,h,g,v,m,_,I,E,b,dn)}P!=null&&m?An(P,f&&f.ref,_,h||f,!h):P==null&&f&&f.ref!=null&&An(f.ref,null,_,f,!0)},A=(f,h,g,v)=>{if(f==null)s(h.el=a(h.children),g,v);else{const m=h.el=f.el;h.children!==f.children&&l(m,h.children)}},B=(f,h,g,v)=>{f==null?s(h.el=c(h.children||""),g,v):h.el=f.el},C=(f,h,g,v)=>{[f.el,f.anchor]=D(f.children,h,g,v,f.el,f.anchor)},$=({el:f,anchor:h},g,v)=>{let m;for(;f&&f!==h;)m=p(f),s(f,g,v),f=m;s(h,g,v)},O=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),r(f),f=g;r(h)},ne=(f,h,g,v,m,_,I,E,b)=>{if(h.type==="svg"?I="svg":h.type==="math"&&(I="mathml"),f==null)we(h,g,v,m,_,I,E,b);else{const y=f.el&&f.el._isVueCE?f.el:null;try{y&&y._beginPatch(),F(f,h,m,_,I,E,b)}finally{y&&y._endPatch()}}},we=(f,h,g,v,m,_,I,E)=>{let b,y;const{props:P,shapeFlag:T,transition:k,dirs:L}=f;if(b=f.el=o(f.type,_,P&&P.is,P),T&8?u(b,f.children):T&16&&Se(f.children,b,null,v,m,rr(f,_),I,E),L&&Lt(f,null,v,"created"),ge(b,f,f.scopeId,I,v),P){for(const Y in P)Y!=="value"&&!Tn(Y)&&i(b,Y,null,P[Y],_,v);"value"in P&&i(b,"value",null,P.value,_),(y=P.onVnodeBeforeMount)&&Ve(y,v,f)}L&&Lt(f,null,v,"beforeMount");const W=ju(m,k);W&&k.beforeEnter(b),s(b,h,g),((y=P&&P.onVnodeMounted)||W||L)&&Ee(()=>{try{y&&Ve(y,v,f),W&&k.enter(b),L&&Lt(f,null,v,"mounted")}finally{}},m)},ge=(f,h,g,v,m)=>{if(g&&w(f,g),v)for(let _=0;_<v.length;_++)w(f,v[_]);if(m){let _=m.subTree;if(h===_||Ya(_.type)&&(_.ssContent===h||_.ssFallback===h)){const I=m.vnode;ge(f,I,I.scopeId,I.slotScopeIds,m.parent)}}},Se=(f,h,g,v,m,_,I,E,b=0)=>{for(let y=b;y<f.length;y++){const P=f[y]=E?nt(f[y]):qe(f[y]);S(null,P,h,g,v,m,_,I,E)}},F=(f,h,g,v,m,_,I)=>{const E=h.el=f.el;let{patchFlag:b,dynamicChildren:y,dirs:P}=h;b|=f.patchFlag&16;const T=f.props||Q,k=h.props||Q;let L;if(g&&Mt(g,!1),(L=k.onVnodeBeforeUpdate)&&Ve(L,g,h,f),P&&Lt(h,f,g,"beforeUpdate"),g&&Mt(g,!0),(T.innerHTML&&k.innerHTML==null||T.textContent&&k.textContent==null)&&u(E,""),y?R(f.dynamicChildren,y,E,g,v,rr(h,m),_):I||z(f,h,E,null,g,v,rr(h,m),_,!1),b>0){if(b&16)se(E,T,k,g,m);else if(b&2&&T.class!==k.class&&i(E,"class",null,k.class,m),b&4&&i(E,"style",T.style,k.style,m),b&8){const W=h.dynamicProps;for(let Y=0;Y<W.length;Y++){const Z=W[Y],ie=T[Z],le=k[Z];(le!==ie||Z==="value")&&i(E,Z,ie,le,m,g)}}b&1&&f.children!==h.children&&u(E,h.children)}else!I&&y==null&&se(E,T,k,g,m);((L=k.onVnodeUpdated)||P)&&Ee(()=>{L&&Ve(L,g,h,f),P&&Lt(h,f,g,"updated")},v)},R=(f,h,g,v,m,_,I)=>{for(let E=0;E<h.length;E++){const b=f[E],y=h[E],P=b.el&&(b.type===fe||!mn(b,y)||b.shapeFlag&198)?d(b.el):g;S(b,y,P,null,v,m,_,I,!0)}},se=(f,h,g,v,m)=>{if(h!==g){if(h!==Q)for(const _ in h)!Tn(_)&&!(_ in g)&&i(f,_,h[_],null,m,v);for(const _ in g){if(Tn(_))continue;const I=g[_],E=h[_];I!==E&&_!=="value"&&i(f,_,E,I,m,v)}"value"in g&&i(f,"value",h.value,g.value,m)}},Ce=(f,h,g,v,m,_,I,E,b)=>{const y=h.el=f?f.el:a(""),P=h.anchor=f?f.anchor:a("");let{patchFlag:T,dynamicChildren:k,slotScopeIds:L}=h;L&&(E=E?E.concat(L):L),f==null?(s(y,g,v),s(P,g,v),Se(h.children||[],g,P,m,_,I,E,b)):T>0&&T&64&&k&&f.dynamicChildren&&f.dynamicChildren.length===k.length?(R(f.dynamicChildren,k,g,m,_,I,E),(h.key!=null||m&&h===m.subTree)&&za(f,h,!0)):z(f,h,g,P,m,_,I,E,b)},J=(f,h,g,v,m,_,I,E,b)=>{h.slotScopeIds=E,f==null?h.shapeFlag&512?m.ctx.activate(h,g,v,I,b):Pt(h,g,v,m,_,I,b):Nt(f,h,b)},Pt=(f,h,g,v,m,_,I)=>{const E=f.component=Zu(f,v,m);if(Pa(f)&&(E.ctx.renderer=dn),tf(E,!1,I),E.asyncDep){if(m&&m.registerDep(E,ce,I),!f.el){const b=E.subTree=ut(At);B(null,b,h,g),f.placeholder=b.el}}else ce(E,f,h,g,m,_,I)},Nt=(f,h,g)=>{const v=h.component=f.component;if(Du(f,h,g))if(v.asyncDep&&!v.asyncResolved){te(v,h,g);return}else v.next=h,v.update();else h.el=f.el,v.vnode=h},ce=(f,h,g,v,m,_,I)=>{const E=()=>{if(f.isMounted){let{next:T,bu:k,u:L,parent:W,vnode:Y}=f;{const $e=Ga(f);if($e){T&&(T.el=Y.el,te(f,T,I)),$e.asyncDep.then(()=>{Ee(()=>{f.isUnmounted||y()},m)});return}}let Z=T,ie;Mt(f,!1),T?(T.el=Y.el,te(f,T,I)):T=Y,k&&cs(k),(ie=T.props&&T.props.onVnodeBeforeUpdate)&&Ve(ie,W,T,Y),Mt(f,!0);const le=Ki(f),Fe=f.subTree;f.subTree=le,S(Fe,le,d(Fe.el),es(Fe),f,m,_),T.el=le.el,Z===null&&Lu(f,le.el),L&&Ee(L,m),(ie=T.props&&T.props.onVnodeUpdated)&&Ee(()=>Ve(ie,W,T,Y),m)}else{let T;const{el:k,props:L}=h,{bm:W,m:Y,parent:Z,root:ie,type:le}=f,Fe=Rn(h);Mt(f,!1),W&&cs(W),!Fe&&(T=L&&L.onVnodeBeforeMount)&&Ve(T,Z,h),Mt(f,!0);{ie.ce&&ie.ce._hasShadowRoot()&&ie.ce._injectChildStyle(le,f.parent?f.parent.type:void 0);const $e=f.subTree=Ki(f);S(null,$e,g,v,f,m,_),h.el=$e.el}if(Y&&Ee(Y,m),!Fe&&(T=L&&L.onVnodeMounted)){const $e=h;Ee(()=>Ve(T,Z,$e),m)}(h.shapeFlag&256||Z&&Rn(Z.vnode)&&Z.vnode.shapeFlag&256)&&f.a&&Ee(f.a,m),f.isMounted=!0,h=g=v=null}};f.scope.on();const b=f.effect=new oa(E);f.scope.off();const y=f.update=b.run.bind(b),P=f.job=b.runIfDirty.bind(b);P.i=f,P.id=f.uid,b.scheduler=()=>ai(P),Mt(f,!0),y()},te=(f,h,g)=>{h.component=f;const v=f.vnode.props;f.vnode=h,f.next=null,Uu(f,h.props,v,g),Hu(f,h.children,g),ht(),Fi(f),dt()},z=(f,h,g,v,m,_,I,E,b=!1)=>{const y=f&&f.children,P=f?f.shapeFlag:0,T=h.children,{patchFlag:k,shapeFlag:L}=h;if(k>0){if(k&128){Zn(y,T,g,v,m,_,I,E,b);return}else if(k&256){xt(y,T,g,v,m,_,I,E,b);return}}L&8?(P&16&&hn(y,m,_),T!==y&&u(g,T)):P&16?L&16?Zn(y,T,g,v,m,_,I,E,b):hn(y,m,_,!0):(P&8&&u(g,""),L&16&&Se(T,g,v,m,_,I,E,b))},xt=(f,h,g,v,m,_,I,E,b)=>{f=f||Jt,h=h||Jt;const y=f.length,P=h.length,T=Math.min(y,P);let k;for(k=0;k<T;k++){const L=h[k]=b?nt(h[k]):qe(h[k]);S(f[k],L,g,null,m,_,I,E,b)}y>P?hn(f,m,_,!0,!1,T):Se(h,g,v,m,_,I,E,b,T)},Zn=(f,h,g,v,m,_,I,E,b)=>{let y=0;const P=h.length;let T=f.length-1,k=P-1;for(;y<=T&&y<=k;){const L=f[y],W=h[y]=b?nt(h[y]):qe(h[y]);if(mn(L,W))S(L,W,g,null,m,_,I,E,b);else break;y++}for(;y<=T&&y<=k;){const L=f[T],W=h[k]=b?nt(h[k]):qe(h[k]);if(mn(L,W))S(L,W,g,null,m,_,I,E,b);else break;T--,k--}if(y>T){if(y<=k){const L=k+1,W=L<P?h[L].el:v;for(;y<=k;)S(null,h[y]=b?nt(h[y]):qe(h[y]),g,W,m,_,I,E,b),y++}}else if(y>k)for(;y<=T;)Be(f[y],m,_,!0),y++;else{const L=y,W=y,Y=new Map;for(y=W;y<=k;y++){const Ie=h[y]=b?nt(h[y]):qe(h[y]);Ie.key!=null&&Y.set(Ie.key,y)}let Z,ie=0;const le=k-W+1;let Fe=!1,$e=0;const pn=new Array(le);for(y=0;y<le;y++)pn[y]=0;for(y=L;y<=T;y++){const Ie=f[y];if(ie>=le){Be(Ie,m,_,!0);continue}let He;if(Ie.key!=null)He=Y.get(Ie.key);else for(Z=W;Z<=k;Z++)if(pn[Z-W]===0&&mn(Ie,h[Z])){He=Z;break}He===void 0?Be(Ie,m,_,!0):(pn[He-W]=y+1,He>=$e?$e=He:Fe=!0,S(Ie,h[He],g,null,m,_,I,E,b),ie++)}const Ni=Fe?qu(pn):Jt;for(Z=Ni.length-1,y=le-1;y>=0;y--){const Ie=W+y,He=h[Ie],xi=h[Ie+1],Di=Ie+1<P?xi.el||Ja(xi):v;pn[y]===0?S(null,He,g,Di,m,_,I,E,b):Fe&&(Z<0||y!==Ni[Z]?Dt(He,g,Di,2):Z--)}}},Dt=(f,h,g,v,m=null)=>{const{el:_,type:I,transition:E,children:b,shapeFlag:y}=f;if(y&6){Dt(f.component.subTree,h,g,v);return}if(y&128){f.suspense.move(h,g,v);return}if(y&64){I.move(f,h,g,dn);return}if(I===fe){s(_,h,g);for(let T=0;T<b.length;T++)Dt(b[T],h,g,v);s(f.anchor,h,g);return}if(I===ir){$(f,h,g);return}if(v!==2&&y&1&&E)if(v===0)E.beforeEnter(_),s(_,h,g),Ee(()=>E.enter(_),m);else{const{leave:T,delayLeave:k,afterLeave:L}=E,W=()=>{f.ctx.isUnmounted?r(_):s(_,h,g)},Y=()=>{_._isLeaving&&_[cu](!0),T(_,()=>{W(),L&&L()})};k?k(_,W,Y):Y()}else s(_,h,g)},Be=(f,h,g,v=!1,m=!1)=>{const{type:_,props:I,ref:E,children:b,dynamicChildren:y,shapeFlag:P,patchFlag:T,dirs:k,cacheIndex:L,memo:W}=f;if(T===-2&&(m=!1),E!=null&&(ht(),An(E,null,g,f,!0),dt()),L!=null&&(h.renderCache[L]=void 0),P&256){h.ctx.deactivate(f);return}const Y=P&1&&k,Z=!Rn(f);let ie;if(Z&&(ie=I&&I.onVnodeBeforeUnmount)&&Ve(ie,h,f),P&6)fl(f.component,g,v);else{if(P&128){f.suspense.unmount(g,v);return}Y&&Lt(f,null,h,"beforeUnmount"),P&64?f.type.remove(f,h,g,dn,v):y&&!y.hasOnce&&(_!==fe||T>0&&T&64)?hn(y,h,g,!1,!0):(_===fe&&T&384||!m&&P&16)&&hn(b,h,g),v&&Oi(f)}const le=W!=null&&L==null;(Z&&(ie=I&&I.onVnodeUnmounted)||Y||le)&&Ee(()=>{ie&&Ve(ie,h,f),Y&&Lt(f,null,h,"unmounted"),le&&(f.el=null)},g)},Oi=f=>{const{type:h,el:g,anchor:v,transition:m}=f;if(h===fe){ul(g,v);return}if(h===ir){O(f);return}const _=()=>{r(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:I,delayLeave:E}=m,b=()=>I(g,_);E?E(f.el,_,b):b()}else _()},ul=(f,h)=>{let g;for(;f!==h;)g=p(f),r(f),f=g;r(h)},fl=(f,h,g)=>{const{bum:v,scope:m,job:_,subTree:I,um:E,m:b,a:y}=f;Ji(b),Ji(y),v&&cs(v),m.stop(),_&&(_.flags|=8,Be(I,f,h,g)),E&&Ee(E,h),Ee(()=>{f.isUnmounted=!0},h)},hn=(f,h,g,v=!1,m=!1,_=0)=>{for(let I=_;I<f.length;I++)Be(f[I],h,g,v,m)},es=f=>{if(f.shapeFlag&6)return es(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),g=h&&h[ou];return g?p(g):h};let Ys=!1;const Pi=(f,h,g)=>{let v;f==null?h._vnode&&(Be(h._vnode,null,null,!0),v=h._vnode.component):S(h._vnode||null,f,h,null,null,null,g),h._vnode=f,Ys||(Ys=!0,Fi(v),Sa(),Ys=!1)},dn={p:S,um:Be,m:Dt,r:Oi,mt:Pt,mc:Se,pc:z,pbc:R,n:es,o:t};return{render:Pi,hydrate:void 0,createApp:Ru(Pi)}}function rr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ju(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function za(t,e,n=!1){const s=t.children,r=e.children;if(M(s)&&M(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=nt(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&za(o,a)),a.type===Vs&&(a.patchFlag===-1&&(a=r[i]=nt(a)),a.el=o.el),a.type===At&&!a.el&&(a.el=o.el)}}function qu(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ga(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ga(e)}function Ji(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Ja(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Ja(e.subTree):null}const Ya=t=>t.__isSuspense;function Ku(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):eu(t)}const fe=Symbol.for("v-fgt"),Vs=Symbol.for("v-txt"),At=Symbol.for("v-cmt"),ir=Symbol.for("v-stc"),On=[];let Te=null;function V(t=!1){On.push(Te=t?null:[])}function zu(){On.pop(),Te=On[On.length-1]||null}let Bn=1;function Yi(t,e=!1){Bn+=t,t<0&&Te&&e&&(Te.hasOnce=!0)}function Xa(t){return t.dynamicChildren=Bn>0?Te||Jt:null,zu(),Bn>0&&Te&&Te.push(t),t}function j(t,e,n,s,r,i){return Xa(N(t,e,n,s,r,i,!0))}function kr(t,e,n,s,r){return Xa(ut(t,e,n,s,r,!0))}function Qa(t){return t?t.__v_isVNode===!0:!1}function mn(t,e){return t.type===e.type&&t.key===e.key}const Za=({key:t})=>t??null,us=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?re(t)||de(t)||U(t)?{i:ke,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,s=0,r=null,i=t===fe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Za(e),ref:e&&us(e),scopeId:Aa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ke};return a?(fi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=re(n)?8:16),Bn>0&&!o&&Te&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Te.push(c),c}const ut=Gu;function Gu(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===bu)&&(t=At),Qa(t)){const a=on(t,e,!0);return n&&fi(a,n),Bn>0&&!i&&Te&&(a.shapeFlag&6?Te[Te.indexOf(t)]=a:Te.push(a)),a.patchFlag=-2,a}if(of(t)&&(t=t.__vccOpts),e){e=Ju(e);let{class:a,style:c}=e;a&&!re(a)&&(e.class=st(a)),G(c)&&(oi(c)&&!M(c)&&(c=pe({},c)),e.style=Qr(c))}const o=re(t)?1:Ya(t)?128:au(t)?64:G(t)?4:U(t)?2:0;return N(t,e,n,s,r,o,i,!0)}function Ju(t){return t?oi(t)||Ha(t)?pe({},t):t:null}function on(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Yu(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Za(l),ref:e&&e.ref?n&&i?M(i)?i.concat(us(e)):[i,us(e)]:us(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==fe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&on(t.ssContent),ssFallback:t.ssFallback&&on(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&ci(u,c.clone(u)),u}function Pn(t=" ",e=0){return ut(Vs,null,t,e)}function rs(t="",e=!1){return e?(V(),kr(At,null,t)):ut(At,null,t)}function qe(t){return t==null||typeof t=="boolean"?ut(At):M(t)?ut(fe,null,t.slice()):Qa(t)?nt(t):ut(Vs,null,String(t))}function nt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:on(t)}function fi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),fi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Ha(e)?e._ctx=ke:r===3&&ke&&(ke.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:ke},n=32):(e=String(e),s&64?(n=16,e=[Pn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=st([e.class,s.class]));else if(r==="style")e.style=Qr([e.style,s.style]);else if(xs(r)){const i=e[r],o=s[r];o&&i!==o&&!(M(i)&&i.includes(o))?e[r]=i?[].concat(i,o):o:o==null&&i==null&&!Ds(r)&&(e[r]=o)}else r!==""&&(e[r]=s[r])}return e}function Ve(t,e,n,s=null){Xe(t,e,7,[n,s])}const Xu=Ma();let Qu=0;function Zu(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Xu,i={uid:Qu++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Il(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wa(s,r),emitsOptions:Ua(s,r),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:s.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ou.bind(null,i),t.ce&&t.ce(i),i}let ve=null;const ef=()=>ve||ke;let Ts,Or;{const t=Ms(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Ts=e("__VUE_INSTANCE_SETTERS__",n=>ve=n),Or=e("__VUE_SSR_SETTERS__",n=>Fn=n)}const qn=t=>{const e=ve;return Ts(t),t.scope.on(),()=>{t.scope.off(),Ts(e)}},Xi=()=>{ve&&ve.scope.off(),Ts(null)};function ec(t){return t.vnode.shapeFlag&4}let Fn=!1;function tf(t,e=!1,n=!1){e&&Or(e);const{props:s,children:r}=t.vnode,i=ec(t);Mu(t,s,i,e),$u(t,r,n||e);const o=i?nf(t,e):void 0;return e&&Or(!1),o}function nf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,wu);const{setup:s}=n;if(s){ht();const r=t.setupContext=s.length>1?rf(t):null,i=qn(t),o=jn(s,t,0,[t.props,r]),a=Qo(o);if(dt(),i(),(a||t.sp)&&!Rn(t)&&Oa(t),a){if(o.then(Xi,Xi),e)return o.then(c=>{Qi(t,c)}).catch(c=>{Bs(c,t,0)});t.asyncDep=o}else Qi(t,o)}else tc(t)}function Qi(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:G(e)&&(t.setupState=wa(e)),tc(t)}function tc(t,e,n){const s=t.type;t.render||(t.render=s.render||ze);{const r=qn(t);ht();try{Eu(t)}finally{dt(),r()}}}const sf={get(t,e){return he(t,"get",""),t[e]}};function rf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sf),slots:t.slots,emit:t.emit,expose:e}}function Ws(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(wa(jl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in kn)return kn[n](t)},has(e,n){return n in e||n in kn}})):t.proxy}function of(t){return U(t)&&"__vccOpts"in t}const nc=(t,e)=>Jl(t,e,Fn),af="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pr;const Zi=typeof window<"u"&&window.trustedTypes;if(Zi)try{Pr=Zi.createPolicy("vue",{createHTML:t=>t})}catch{}const sc=Pr?t=>Pr.createHTML(t):t=>t,cf="http://www.w3.org/2000/svg",lf="http://www.w3.org/1998/Math/MathML",tt=typeof document<"u"?document:null,eo=tt&&tt.createElement("template"),uf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?tt.createElementNS(cf,t):e==="mathml"?tt.createElementNS(lf,t):n?tt.createElement(t,{is:n}):tt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>tt.createTextNode(t),createComment:t=>tt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{eo.innerHTML=sc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=eo.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ff=Symbol("_vtc");function hf(t,e,n){const s=t[ff];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const to=Symbol("_vod"),df=Symbol("_vsh"),pf=Symbol(""),gf=/(?:^|;)\s*display\s*:/;function mf(t,e,n){const s=t.style,r=re(n);let i=!1;if(n&&!r){if(e)if(re(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&vn(s,a,"")}else for(const o in e)n[o]==null&&vn(s,o,"");for(const o in n){o==="display"&&(i=!0);const a=n[o];a!=null?yf(t,o,!re(e)&&e?e[o]:void 0,a)||vn(s,o,a):vn(s,o,"")}}else if(r){if(e!==n){const o=s[pf];o&&(n+=";"+o),s.cssText=n,i=gf.test(n)}}else e&&t.removeAttribute("style");to in t&&(t[to]=i?s.display:"",t[df]&&(s.display="none"))}const no=/\s*!important$/;function vn(t,e,n){if(M(n))n.forEach(s=>vn(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_f(t,e);no.test(n)?t.setProperty(qt(s),n.replace(no,""),"important"):t[s]=n}}const so=["Webkit","Moz","ms"],or={};function _f(t,e){const n=or[e];if(n)return n;let s=De(e);if(s!=="filter"&&s in t)return or[e]=s;s=ta(s);for(let r=0;r<so.length;r++){const i=so[r]+s;if(i in t)return or[e]=i}return e}function yf(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&re(s)&&n===s}const ro="http://www.w3.org/1999/xlink";function io(t,e,n,s,r,i=wl(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ro,e.slice(6,e.length)):t.setAttributeNS(ro,e,n):n==null||i&&!sa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ye(n)?String(n):n)}function oo(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?sc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=sa(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Ft(t,e,n,s){t.addEventListener(e,n,s)}function vf(t,e,n,s){t.removeEventListener(e,n,s)}const ao=Symbol("_vei");function bf(t,e,n,s,r=null){const i=t[ao]||(t[ao]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=wf(e);if(s){const l=i[e]=Tf(s,r);Ft(t,a,l,c)}else o&&(vf(t,a,o,c),i[e]=void 0)}}const co=/(?:Once|Passive|Capture)$/;function wf(t){let e;if(co.test(t)){e={};let s;for(;s=t.match(co);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qt(t.slice(2)),e]}let ar=0;const Ef=Promise.resolve(),If=()=>ar||(Ef.then(()=>ar=0),ar=Date.now());function Tf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xe(Sf(s,n.value),e,5,[s])};return n.value=t,n.attached=If(),n}function Sf(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const lo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Cf=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?hf(t,s,o):e==="style"?mf(t,n,s):xs(e)?Ds(e)||bf(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Af(t,e,s,o))?(oo(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&io(t,e,s,o,i,e!=="value")):t._isVueCE&&(Rf(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!re(s)))?oo(t,De(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),io(t,e,s,o))};function Af(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&lo(e)&&U(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return lo(e)&&re(n)?!1:e in t}function Rf(t,e){const n=t._def.props;if(!n)return!1;const s=De(e);return Array.isArray(n)?n.some(r=>De(r)===s):Object.keys(n).some(r=>De(r)===s)}const Ss=t=>{const e=t.props["onUpdate:modelValue"]||!1;return M(e)?n=>cs(e,n):e};function kf(t){t.target.composing=!0}function uo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zt=Symbol("_assign");function fo(t,e,n){return e&&(t=t.trim()),n&&(t=Xr(t)),t}const bn={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Zt]=Ss(r);const i=s||r.props&&r.props.type==="number";Ft(t,e?"change":"input",o=>{o.target.composing||t[Zt](fo(t.value,n,i))}),(n||i)&&Ft(t,"change",()=>{t.value=fo(t.value,n,i)}),e||(Ft(t,"compositionstart",kf),Ft(t,"compositionend",uo),Ft(t,"change",uo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Zt]=Ss(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Xr(t.value):t.value,c=e??"";if(a===c)return;const l=t.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c)}},Of={created(t,{value:e},n){t.checked=Dn(e,n.props.value),t[Zt]=Ss(n),Ft(t,"change",()=>{t[Zt](Pf(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[Zt]=Ss(s),e!==n&&(t.checked=Dn(e,s.props.value))}};function Pf(t){return"_value"in t?t._value:t.value}const Nf=["ctrl","shift","alt","meta"],xf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nf.some(n=>t[`${n}Key`]&&!e.includes(n))},Nr=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const a=xf[e[o]];if(a&&a(r,e))return}return t(r,...i)}))},Df=pe({patchProp:Cf},uf);let ho;function Lf(){return ho||(ho=Vu(Df))}const Mf=((...t)=>{const e=Lf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Bf(s);if(!r)return;const i=e._component;!U(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Uf(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Uf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Bf(t){return re(t)?document.querySelector(t):t}const Ff=()=>{};var po={};/**
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
 */const rc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},$f=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,w=l&63;c||(w=64,o||(p=64)),s.push(n[u],n[d],n[p],n[w])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$f(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw new Hf;const p=i<<2|a>>4;if(s.push(p),l!==64){const w=a<<4&240|l>>2;if(s.push(w),d!==64){const D=l<<6&192|d;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vf=function(t){const e=rc(t);return ic.encodeByteArray(e,!0)},oc=function(t){return Vf(t).replace(/\./g,"")},ac=function(t){try{return ic.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jf=()=>Wf().__FIREBASE_DEFAULTS__,qf=()=>{if(typeof process>"u"||typeof po>"u")return;const t=po.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ac(t[1]);return e&&JSON.parse(e)},hi=()=>{try{return Ff()||jf()||qf()||Kf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zf=t=>{var e,n;return(n=(e=hi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cc=()=>{var t;return(t=hi())===null||t===void 0?void 0:t.config},lc=t=>{var e;return(e=hi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Gf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function js(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jf(t){return(await fetch(t,{credentials:"include"})).ok}const Nn={};function Yf(){const t={prod:[],emulator:[]};for(const e of Object.keys(Nn))Nn[e]?t.emulator.push(e):t.prod.push(e);return t}function Xf(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let go=!1;function Qf(t,e){if(typeof window>"u"||typeof document>"u"||!js(window.location.host)||Nn[t]===e||Nn[t]||go)return;Nn[t]=e;function n(p){return`__firebase__banner__${p}`}const s="__firebase__banner",i=Yf().prod.length>0;function o(){const p=document.getElementById(s);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,w){p.setAttribute("width","24"),p.setAttribute("id",w),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function l(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{go=!0,o()},p}function u(p,w){p.setAttribute("id",w),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=Xf(s),w=n("text"),D=document.getElementById(w)||document.createElement("span"),S=n("learnmore"),A=document.getElementById(S)||document.createElement("a"),B=n("preprendIcon"),C=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const $=p.element;a($),u(A,S);const O=l();c(C,B),$.append(C,D,A,O),document.body.appendChild($)}i?(D.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(C.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function eh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function th(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sh(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rh(){try{return typeof indexedDB=="object"}catch{return!1}}function ih(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const oh="FirebaseError";class Rt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=oh,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kn.prototype.create)}}class Kn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?ah(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Rt(r,a,s)}}function ah(t,e){return t.replace(ch,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ch=/\{\$([^}]+)}/g;function lh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function an(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(mo(i)&&mo(o)){if(!an(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function mo(t){return t!==null&&typeof t=="object"}/**
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
 */function zn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function En(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uh(t,e){const n=new fh(t,e);return n.subscribe.bind(n)}class fh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hh(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=cr),r.error===void 0&&(r.error=cr),r.complete===void 0&&(r.complete=cr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cr(){}/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bt="[DEFAULT]";/**
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
 */class dh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Gf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gh(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ph(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ph(t){return t===Bt?void 0:t}function gh(t){return t.instantiationMode==="EAGER"}/**
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
 */class mh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const _h={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},yh=X.INFO,vh={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},bh=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=vh[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uc{constructor(e){this.name=e,this._logLevel=yh,this._logHandler=bh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_h[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const wh=(t,e)=>e.some(n=>t instanceof n);let _o,yo;function Eh(){return _o||(_o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ih(){return yo||(yo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fc=new WeakMap,xr=new WeakMap,hc=new WeakMap,lr=new WeakMap,di=new WeakMap;function Th(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fc.set(n,t)}).catch(()=>{}),di.set(e,t),e}function Sh(t){if(xr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xr.set(t,e)}let Dr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ch(t){Dr=t(Dr)}function Ah(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ur(this),e,...n);return hc.set(s,e.sort?e.sort():[e]),Tt(s)}:Ih().includes(t)?function(...e){return t.apply(ur(this),e),Tt(fc.get(this))}:function(...e){return Tt(t.apply(ur(this),e))}}function Rh(t){return typeof t=="function"?Ah(t):(t instanceof IDBTransaction&&Sh(t),wh(t,Eh())?new Proxy(t,Dr):t)}function Tt(t){if(t instanceof IDBRequest)return Th(t);if(lr.has(t))return lr.get(t);const e=Rh(t);return e!==t&&(lr.set(t,e),di.set(e,t)),e}const ur=t=>di.get(t);function kh(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Tt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Oh=["get","getKey","getAll","getAllKeys","count"],Ph=["put","add","delete","clear"],fr=new Map;function vo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fr.get(e))return fr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Ph.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Oh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return fr.set(e,i),i}Ch(t=>({...t,get:(e,n,s)=>vo(e,n)||t.get(e,n,s),has:(e,n)=>!!vo(e,n)||t.has(e,n)}));/**
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
 */class Nh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lr="@firebase/app",bo="0.13.2";/**
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
 */const gt=new uc("@firebase/app"),Dh="@firebase/app-compat",Lh="@firebase/analytics-compat",Mh="@firebase/analytics",Uh="@firebase/app-check-compat",Bh="@firebase/app-check",Fh="@firebase/auth",$h="@firebase/auth-compat",Hh="@firebase/database",Vh="@firebase/data-connect",Wh="@firebase/database-compat",jh="@firebase/functions",qh="@firebase/functions-compat",Kh="@firebase/installations",zh="@firebase/installations-compat",Gh="@firebase/messaging",Jh="@firebase/messaging-compat",Yh="@firebase/performance",Xh="@firebase/performance-compat",Qh="@firebase/remote-config",Zh="@firebase/remote-config-compat",ed="@firebase/storage",td="@firebase/storage-compat",nd="@firebase/firestore",sd="@firebase/ai",rd="@firebase/firestore-compat",id="firebase",od="11.10.0";/**
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
 */const Mr="[DEFAULT]",ad={[Lr]:"fire-core",[Dh]:"fire-core-compat",[Mh]:"fire-analytics",[Lh]:"fire-analytics-compat",[Bh]:"fire-app-check",[Uh]:"fire-app-check-compat",[Fh]:"fire-auth",[$h]:"fire-auth-compat",[Hh]:"fire-rtdb",[Vh]:"fire-data-connect",[Wh]:"fire-rtdb-compat",[jh]:"fire-fn",[qh]:"fire-fn-compat",[Kh]:"fire-iid",[zh]:"fire-iid-compat",[Gh]:"fire-fcm",[Jh]:"fire-fcm-compat",[Yh]:"fire-perf",[Xh]:"fire-perf-compat",[Qh]:"fire-rc",[Zh]:"fire-rc-compat",[ed]:"fire-gcs",[td]:"fire-gcs-compat",[nd]:"fire-fst",[rd]:"fire-fst-compat",[sd]:"fire-vertex","fire-js":"fire-js",[id]:"fire-js-all"};/**
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
 */const Cs=new Map,cd=new Map,Ur=new Map;function wo(t,e){try{t.container.addComponent(e)}catch(n){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(Ur.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;Ur.set(e,t);for(const n of Cs.values())wo(n,t);for(const n of cd.values())wo(n,t);return!0}function dc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Re(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ld={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},St=new Kn("app","Firebase",ld);/**
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
 */class ud{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const Gn=od;function pc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mr,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw St.create("bad-app-name",{appName:String(r)});if(n||(n=cc()),!n)throw St.create("no-options");const i=Cs.get(r);if(i){if(an(n,i.options)&&an(s,i.config))return i;throw St.create("duplicate-app",{appName:r})}const o=new mh(r);for(const c of Ur.values())o.addComponent(c);const a=new ud(n,s,o);return Cs.set(r,a),a}function fd(t=Mr){const e=Cs.get(t);if(!e&&t===Mr&&cc())return pc();if(!e)throw St.create("no-app",{appName:t});return e}function en(t,e,n){var s;let r=(s=ad[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(a.join(" "));return}$n(new cn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const hd="firebase-heartbeat-database",dd=1,Hn="firebase-heartbeat-store";let hr=null;function gc(){return hr||(hr=kh(hd,dd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hn)}catch(n){console.warn(n)}}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),hr}async function pd(t){try{const n=(await gc()).transaction(Hn),s=await n.objectStore(Hn).get(mc(t));return await n.done,s}catch(e){if(e instanceof Rt)gt.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(n.message)}}}async function Eo(t,e){try{const s=(await gc()).transaction(Hn,"readwrite");await s.objectStore(Hn).put(e,mc(t)),await s.done}catch(n){if(n instanceof Rt)gt.warn(n.message);else{const s=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gt.warn(s.message)}}}function mc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gd=1024,md=30;class _d{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vd(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Io();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>md){const o=bd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Io(),{heartbeatsToSend:s,unsentEntries:r}=yd(this._heartbeatsCache.heartbeats),i=oc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return gt.warn(n),""}}}function Io(){return new Date().toISOString().substring(0,10)}function yd(t,e=gd){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),To(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),To(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rh()?ih().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function To(t){return oc(JSON.stringify({version:2,heartbeats:t})).length}function bd(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function wd(t){$n(new cn("platform-logger",e=>new Nh(e),"PRIVATE")),$n(new cn("heartbeat",e=>new _d(e),"PRIVATE")),en(Lr,bo,t),en(Lr,bo,"esm2017"),en("fire-js","")}wd("");function pi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function _c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ed=_c,yc=new Kn("auth","Firebase",_c());/**
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
 */const As=new uc("@firebase/auth");function Id(t,...e){As.logLevel<=X.WARN&&As.warn(`Auth (${Gn}): ${t}`,...e)}function fs(t,...e){As.logLevel<=X.ERROR&&As.error(`Auth (${Gn}): ${t}`,...e)}/**
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
 */function Pe(t,...e){throw mi(t,...e)}function Me(t,...e){return mi(t,...e)}function gi(t,e,n){const s=Object.assign(Object.assign({},Ed()),{[e]:n});return new Kn("auth","Firebase",s).create(e,{appName:t.name})}function ft(t){return gi(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Td(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Pe(t,"argument-error"),gi(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return yc.create(t,...e)}function x(t,e,...n){if(!t)throw mi(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fs(e),new Error(e)}function mt(t,e){t||ct(e)}/**
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
 */function Br(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sd(){return So()==="http:"||So()==="https:"}function So(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Cd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sd()||th()||"connection"in navigator)?navigator.onLine:!0}function Ad(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=Zf()||nh()}get(){return Cd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _i(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kd=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Od=new Jn(3e4,6e4);function kt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yt(t,e,n,s,r={}){return bc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=zn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return eh()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&js(t.emulatorConfig.host)&&(l.credentials="include"),vc.fetch()(await wc(t,t.config.apiHost,n,a),l)})}async function bc(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Rd),e);try{const r=new Nd(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw is(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw is(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw is(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw is(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gi(t,u,l);Pe(t,u)}}catch(r){if(r instanceof Rt)throw r;Pe(t,"network-request-failed",{message:String(r)})}}async function Yn(t,e,n,s,r={}){const i=await yt(t,e,n,s,r);return"mfaPendingCredential"in i&&Pe(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function wc(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?_i(t.config,r):`${t.config.apiScheme}://${r}`;return kd.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Pd(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nd{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Me(this.auth,"network-request-failed")),Od.get())})}}function is(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Me(t,e,s);return r.customData._tokenResponse=n,r}function Co(t){return t!==void 0&&t.enterprise!==void 0}class xd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Pd(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Dd(t,e){return yt(t,"GET","/v2/recaptchaConfig",kt(t,e))}/**
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
 */async function Ld(t,e){return yt(t,"POST","/v1/accounts:delete",e)}async function Rs(t,e){return yt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Md(t,e=!1){const n=Ze(t),s=await n.getIdToken(e),r=yi(s);x(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:xn(dr(r.auth_time)),issuedAtTime:xn(dr(r.iat)),expirationTime:xn(dr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dr(t){return Number(t)*1e3}function yi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return fs("JWT malformed, contained fewer than 3 sections"),null;try{const r=ac(n);return r?JSON.parse(r):(fs("Failed to decode base64 JWT payload"),null)}catch(r){return fs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ao(t){const e=yi(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ln(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Rt&&Ud(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ud({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Bd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xn(this.lastLoginAt),this.creationTime=xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ks(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ln(t,Rs(n,{idToken:s}));x(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ec(i.providerUserInfo):[],a=$d(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fr(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Fd(t){const e=Ze(t);await ks(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $d(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Ec(t){return t.map(e=>{var{providerId:n}=e,s=pi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Hd(t,e){const n=await bc(t,{},async()=>{const s=zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await wc(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return t.emulatorConfig&&js(t.emulatorConfig.host)&&(c.credentials="include"),vc.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Vd(t,e){return yt(t,"POST","/v2/accounts:revokeToken",kt(t,e))}/**
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
 */class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ao(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=Ao(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Hd(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new tn;return s&&(x(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(x(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function vt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xe{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=pi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ln(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Md(this,e)}reload(){return Fd(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ks(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Re(this.auth.app))return Promise.reject(ft(this.auth));const e=await this.getIdToken();return await ln(this,Ld(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,D=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(l=n.createdAt)!==null&&l!==void 0?l:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:$,emailVerified:O,isAnonymous:ne,providerData:we,stsTokenManager:ge}=n;x($&&ge,e,"internal-error");const Se=tn.fromJSON(this.name,ge);x(typeof $=="string",e,"internal-error"),vt(d,e.name),vt(p,e.name),x(typeof O=="boolean",e,"internal-error"),x(typeof ne=="boolean",e,"internal-error"),vt(w,e.name),vt(D,e.name),vt(S,e.name),vt(A,e.name),vt(B,e.name),vt(C,e.name);const F=new xe({uid:$,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:ne,photoURL:D,phoneNumber:w,tenantId:S,stsTokenManager:Se,createdAt:B,lastLoginAt:C});return we&&Array.isArray(we)&&(F.providerData=we.map(R=>Object.assign({},R))),A&&(F._redirectEventId=A),F}static async _fromIdTokenResponse(e,n,s=!1){const r=new tn;r.updateFromServerResponse(n);const i=new xe({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ks(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];x(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Ec(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new tn;a.updateFromIdToken(s);const c=new xe({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Fr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Ro=new Map;function lt(t){mt(t instanceof Function,"Expected a class definition");let e=Ro.get(t);return e?(mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ro.set(t,e),e)}/**
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
 */class Ic{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ic.type="NONE";const ko=Ic;/**
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
 */function hs(t,e,n){return`firebase:${t}:${e}:${n}`}class nn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=hs(this.userKey,r.apiKey,i),this.fullPersistenceKey=hs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Rs(this.auth,{idToken:e}).catch(()=>{});return n?xe._fromGetAccountInfoResponse(this.auth,n,e):null}return xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new nn(lt(ko),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||lt(ko);const o=hs(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let d;if(typeof u=="string"){const p=await Rs(e,{idToken:u}).catch(()=>{});if(!p)break;d=await xe._fromGetAccountInfoResponse(e,p,u)}else d=xe._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new nn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new nn(i,e,s))}}/**
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
 */function Oo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ac(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kc(e))return"Blackberry";if(Oc(e))return"Webos";if(Sc(e))return"Safari";if((e.includes("chrome/")||Cc(e))&&!e.includes("edge/"))return"Chrome";if(Rc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Tc(t=be()){return/firefox\//i.test(t)}function Sc(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cc(t=be()){return/crios\//i.test(t)}function Ac(t=be()){return/iemobile/i.test(t)}function Rc(t=be()){return/android/i.test(t)}function kc(t=be()){return/blackberry/i.test(t)}function Oc(t=be()){return/webos/i.test(t)}function vi(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Wd(t=be()){var e;return vi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jd(){return sh()&&document.documentMode===10}function Pc(t=be()){return vi(t)||Rc(t)||Oc(t)||kc(t)||/windows phone/i.test(t)||Ac(t)}/**
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
 */function Nc(t,e=[]){let n;switch(t){case"Browser":n=Oo(be());break;case"Worker":n=`${Oo(be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${s}`}/**
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
 */class qd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Kd(t,e={}){return yt(t,"GET","/v2/passwordPolicy",kt(t,e))}/**
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
 */const zd=6;class Gd{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Jd{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Po(this),this.idTokenSubscription=new Po(this),this.beforeStateQueue=new qd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Rs(this,{idToken:e}),s=await xe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Re(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ks(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ad()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Re(this.app))return Promise.reject(ft(this));const n=e?Ze(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Re(this.app)?Promise.reject(ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Re(this.app)?Promise.reject(ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kd(this),n=new Gd(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Kn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Vd(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(Re(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Id(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ot(t){return Ze(t)}class Po{constructor(e){this.auth=e,this.observer=null,this.addObserver=uh(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let qs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yd(t){qs=t}function xc(t){return qs.loadJS(t)}function Xd(){return qs.recaptchaEnterpriseScript}function Qd(){return qs.gapiScript}function Zd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ep{constructor(){this.enterprise=new tp}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class tp{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const np="recaptcha-enterprise",Dc="NO_RECAPTCHA";class sp{constructor(e){this.type=np,this.auth=Ot(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Dd(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new xd(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Co(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Dc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ep().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Co(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Xd();c.length!==0&&(c+=a),xc(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function No(t,e,n,s=!1,r=!1){const i=new sp(t);let o;if(r)o=Dc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $r(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await No(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await No(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function rp(t,e){const n=dc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(an(i,e??{}))return r;Pe(r,"already-initialized")}return n.initialize({options:e})}function ip(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function op(t,e,n){const s=Ot(t);x(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Lc(e),{host:o,port:a}=ap(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){x(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),x(an(l,s.config.emulator)&&an(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,js(o)?(Jf(`${i}//${o}${c}`),Qf("Auth",!0)):cp()}function Lc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ap(t){const e=Lc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:xo(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:xo(o)}}}function xo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function lp(t,e){return yt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function up(t,e){return Yn(t,"POST","/v1/accounts:signInWithPassword",kt(t,e))}/**
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
 */async function fp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",kt(t,e))}async function hp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",kt(t,e))}/**
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
 */class Vn extends bi{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Vn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Vn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $r(e,n,"signInWithPassword",up);case"emailLink":return fp(e,{email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $r(e,s,"signUpPassword",lp);case"emailLink":return hp(e,{idToken:n,email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function sn(t,e){return Yn(t,"POST","/v1/accounts:signInWithIdp",kt(t,e))}/**
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
 */const dp="http://localhost";class Wt extends bi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=pi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Wt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,sn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sn(e,n)}buildRequest(){const e={requestUri:dp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zn(n)}return e}}/**
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
 */function pp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gp(t){const e=wn(En(t)).link,n=e?wn(En(e)).deep_link_id:null,s=wn(En(t)).deep_link_id;return(s?wn(En(s)).link:null)||s||n||e||t}class wi{constructor(e){var n,s,r,i,o,a;const c=wn(En(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,d=pp((r=c.mode)!==null&&r!==void 0?r:null);x(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gp(e);try{return new wi(n)}catch{return null}}}/**
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
 */class un{constructor(){this.providerId=un.PROVIDER_ID}static credential(e,n){return Vn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=wi.parseLink(n);return x(s,"argument-error"),Vn._fromEmailAndCode(e,s.code,s.tenantId)}}un.PROVIDER_ID="password";un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ei{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xn extends Ei{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ot extends Xn{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
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
 */class at extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return at.credential(n,s)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
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
 */class Et extends Xn{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
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
 */class It extends Xn{constructor(){super("twitter.com")}static credential(e,n){return Wt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return It.credential(n,s)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
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
 */async function mp(t,e){return Yn(t,"POST","/v1/accounts:signUp",kt(t,e))}/**
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
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await xe._fromIdTokenResponse(e,s,r),o=Do(s);return new jt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Do(s);return new jt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Do(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Os extends Rt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Os(e,n,s,r)}}function Mc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(t,i,e,s):i})}async function _p(t,e,n=!1){const s=await ln(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jt._forOperation(t,"link",s)}/**
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
 */async function yp(t,e,n=!1){const{auth:s}=t;if(Re(s.app))return Promise.reject(ft(s));const r="reauthenticate";try{const i=await ln(t,Mc(s,r,e,t),n);x(i.idToken,s,"internal-error");const o=yi(i.idToken);x(o,s,"internal-error");const{sub:a}=o;return x(t.uid===a,s,"user-mismatch"),jt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pe(s,"user-mismatch"),i}}/**
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
 */async function Uc(t,e,n=!1){if(Re(t.app))return Promise.reject(ft(t));const s="signIn",r=await Mc(t,s,e),i=await jt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function vp(t,e){return Uc(Ot(t),e)}/**
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
 */async function Bc(t){const e=Ot(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bp(t,e,n){if(Re(t.app))return Promise.reject(ft(t));const s=Ot(t),o=await $r(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Bc(t),c}),a=await jt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function wp(t,e,n){return Re(t.app)?Promise.reject(ft(t)):vp(Ze(t),un.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Bc(t),s})}/**
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
 */async function Ep(t,e){return yt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ip(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ze(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ln(s,Ep(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Tp(t,e,n,s){return Ze(t).onIdTokenChanged(e,n,s)}function Sp(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function Cp(t,e,n,s){return Ze(t).onAuthStateChanged(e,n,s)}function Fc(t){return Ze(t).signOut()}const Ps="__sak";/**
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
 */class $c{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ps,"1"),this.storage.removeItem(Ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ap=1e3,Rp=10;class Hc extends $c{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);jd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Rp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Ap)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hc.type="LOCAL";const kp=Hc;/**
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
 */class Vc extends $c{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vc.type="SESSION";const Wc=Vc;/**
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
 */class Ks{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ks(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Op(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ks.receivers=[];/**
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
 */function Ii(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Pp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ii("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function Np(t){Ge().location.href=t}/**
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
 */function jc(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function xp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lp(){return jc()?self:null}/**
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
 */const qc="firebaseLocalStorageDb",Mp=1,Ns="firebaseLocalStorage",Kc="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zs(t,e){return t.transaction([Ns],e?"readwrite":"readonly").objectStore(Ns)}function Up(){const t=indexedDB.deleteDatabase(qc);return new Qn(t).toPromise()}function Hr(){const t=indexedDB.open(qc,Mp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ns,{keyPath:Kc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ns)?e(s):(s.close(),await Up(),e(await Hr()))})})}async function Lo(t,e,n){const s=zs(t,!0).put({[Kc]:e,value:n});return new Qn(s).toPromise()}async function Bp(t,e){const n=zs(t,!1).get(e),s=await new Qn(n).toPromise();return s===void 0?null:s.value}function Mo(t,e){const n=zs(t,!0).delete(e);return new Qn(n).toPromise()}const Fp=800,$p=3;class zc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>$p)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ks._getInstance(Lp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xp(),!this.activeServiceWorker)return;this.sender=new Pp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hr();return await Lo(e,Ps,"1"),await Mo(e,Ps),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Bp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=zs(r,!1).getAll();return new Qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zc.type="LOCAL";const Hp=zc;new Jn(3e4,6e4);/**
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
 */function Gc(t,e){return e?lt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ti extends bi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vp(t){return Uc(t.auth,new Ti(t),t.bypassAuthState)}function Wp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),yp(n,new Ti(t),t.bypassAuthState)}async function jp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),_p(n,new Ti(t),t.bypassAuthState)}/**
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
 */class Jc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vp;case"linkViaPopup":case"linkViaRedirect":return jp;case"reauthViaPopup":case"reauthViaRedirect":return Wp;default:Pe(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qp=new Jn(2e3,1e4);async function Uo(t,e,n){if(Re(t.app))return Promise.reject(Me(t,"operation-not-supported-in-this-environment"));const s=Ot(t);Td(t,e,Ei);const r=Gc(s,n);return new $t(s,"signInViaPopup",e,r).executeNotNull()}class $t extends Jc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,$t.currentPopupAction&&$t.currentPopupAction.cancel(),$t.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=Ii();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$t.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qp.get())};e()}}$t.currentPopupAction=null;/**
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
 */const Kp="pendingRedirect",ds=new Map;class zp extends Jc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ds.get(this.auth._key());if(!e){try{const s=await Gp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ds.set(this.auth._key(),e)}return this.bypassAuthState||ds.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gp(t,e){const n=Xp(e),s=Yp(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Jp(t,e){ds.set(t._key(),e)}function Yp(t){return lt(t._redirectPersistence)}function Xp(t){return hs(Kp,t.config.apiKey,t.name)}async function Qp(t,e,n=!1){if(Re(t.app))return Promise.reject(ft(t));const s=Ot(t),r=Gc(s,e),o=await new zp(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Zp=600*1e3;class eg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Yc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Me(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bo(e))}saveEventToCache(e){this.cachedEventUids.add(Bo(e)),this.lastProcessedEventTime=Date.now()}}function Bo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yc(t);default:return!1}}/**
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
 */async function ng(t,e={}){return yt(t,"GET","/v1/projects",e)}/**
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
 */const sg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rg=/^https?/;async function ig(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ng(t);for(const n of e)try{if(og(n))return}catch{}Pe(t,"unauthorized-domain")}function og(t){const e=Br(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!rg.test(n))return!1;if(sg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const ag=new Jn(3e4,6e4);function Fo(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cg(t){return new Promise((e,n)=>{var s,r,i;function o(){Fo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fo(),n(Me(t,"network-request-failed"))},timeout:ag.get()})}if(!((r=(s=Ge().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const a=Zd("iframefcb");return Ge()[a]=()=>{gapi.load?o():n(Me(t,"network-request-failed"))},xc(`${Qd()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ps=null,e})}let ps=null;function lg(t){return ps=ps||cg(t),ps}/**
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
 */const ug=new Jn(5e3,15e3),fg="__/auth/iframe",hg="emulator/auth/iframe",dg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gg(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_i(e,hg):`https://${t.config.authDomain}/${fg}`,s={apiKey:e.apiKey,appName:t.name,v:Gn},r=pg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${zn(s).slice(1)}`}async function mg(t){const e=await lg(t),n=Ge().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:gg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Me(t,"network-request-failed"),a=Ge().setTimeout(()=>{i(o)},ug.get());function c(){Ge().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const _g={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yg=500,vg=600,bg="_blank",wg="http://localhost";class $o{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Eg(t,e,n,s=yg,r=vg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},_g),{width:s.toString(),height:r.toString(),top:i,left:o}),l=be().toLowerCase();n&&(a=Cc(l)?bg:n),Tc(l)&&(e=e||wg,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[w,D])=>`${p}${w}=${D},`,"");if(Wd(l)&&a!=="_self")return Ig(e||"",a),new $o(null);const d=window.open(e||"",a,u);x(d,t,"popup-blocked");try{d.focus()}catch{}return new $o(d)}function Ig(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Tg="__/auth/handler",Sg="emulator/auth/handler",Cg=encodeURIComponent("fac");async function Ho(t,e,n,s,r,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Gn,eventId:r};if(e instanceof Ei){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Xn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Cg}=${encodeURIComponent(c)}`:"";return`${Ag(t)}?${zn(a).slice(1)}${l}`}function Ag({config:t}){return t.emulator?_i(t,Sg):`https://${t.authDomain}/${Tg}`}/**
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
 */const pr="webStorageSupport";class Rg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wc,this._completeRedirectFn=Qp,this._overrideRedirectResult=Jp}async _openPopup(e,n,s,r){var i;mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ho(e,n,s,Br(),r);return Eg(e,o,Ii())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Ho(e,n,s,Br(),r);return Np(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(mt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await mg(e),s=new eg(e);return n.register("authEvent",r=>(x(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pr,{type:pr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[pr];o!==void 0&&n(!!o),Pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ig(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pc()||Sc()||vi()}}const kg=Rg;var Vo="@firebase/auth",Wo="1.10.8";/**
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
 */class Og{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Pg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ng(t){$n(new cn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nc(t)},l=new Jd(s,r,i,c);return ip(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),$n(new cn("auth-internal",e=>{const n=Ot(e.getProvider("auth").getImmediate());return(s=>new Og(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Vo,Wo,Pg(t)),en(Vo,Wo,"esm2017")}/**
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
 */const xg=300,Dg=lc("authIdTokenMaxAge")||xg;let jo=null;const Lg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Dg)return;const r=n==null?void 0:n.token;jo!==r&&(jo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Mg(t=fd()){const e=dc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rp(t,{popupRedirectResolver:kg,persistence:[Hp,kp,Wc]}),s=lc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Lg(i.toString());Sp(n,o,()=>o(n.currentUser)),Tp(n,a=>o(a))}}const r=zf("auth");return r&&op(n,`http://${r}`),n}function Ug(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Yd({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Me("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Ug().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ng("Browser");var Bg="firebase",Fg="11.10.0";/**
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
 */en(Bg,Fg,"app");const $g={apiKey:"AIzaSyBoshUYnXUquyfJZf9QYSBt9tzcPYmAXoY",authDomain:"whatsapp-clone-91fcb.firebaseapp.com",projectId:"whatsapp-clone-91fcb",storageBucket:"whatsapp-clone-91fcb.firebasestorage.app",messagingSenderId:"290539573480",appId:"1:290539573480:web:eea8271909b0b9dc42795d"},Hg=pc($g),wt=Mg(Hg),Vg=new at,Wg=new ot,Qe=Object.create(null);Qe.open="0";Qe.close="1";Qe.ping="2";Qe.pong="3";Qe.message="4";Qe.upgrade="5";Qe.noop="6";const gs=Object.create(null);Object.keys(Qe).forEach(t=>{gs[Qe[t]]=t});const Vr={type:"error",data:"parser error"},Xc=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Qc=typeof ArrayBuffer=="function",Zc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Si=({type:t,data:e},n,s)=>Xc&&e instanceof Blob?n?s(e):qo(e,s):Qc&&(e instanceof ArrayBuffer||Zc(e))?n?s(e):qo(new Blob([e]),s):s(Qe[t]+(e||"")),qo=(t,e)=>{const n=new FileReader;return n.onload=function(){const s=n.result.split(",")[1];e("b"+(s||""))},n.readAsDataURL(t)};function Ko(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let gr;function jg(t,e){if(Xc&&t.data instanceof Blob)return t.data.arrayBuffer().then(Ko).then(e);if(Qc&&(t.data instanceof ArrayBuffer||Zc(t.data)))return e(Ko(t.data));Si(t,!1,n=>{gr||(gr=new TextEncoder),e(gr.encode(n))})}const zo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",In=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<zo.length;t++)In[zo.charCodeAt(t)]=t;const qg=t=>{let e=t.length*.75,n=t.length,s,r=0,i,o,a,c;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const l=new ArrayBuffer(e),u=new Uint8Array(l);for(s=0;s<n;s+=4)i=In[t.charCodeAt(s)],o=In[t.charCodeAt(s+1)],a=In[t.charCodeAt(s+2)],c=In[t.charCodeAt(s+3)],u[r++]=i<<2|o>>4,u[r++]=(o&15)<<4|a>>2,u[r++]=(a&3)<<6|c&63;return l},Kg=typeof ArrayBuffer=="function",Ci=(t,e)=>{if(typeof t!="string")return{type:"message",data:el(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:zg(t.substring(1),e)}:gs[n]?t.length>1?{type:gs[n],data:t.substring(1)}:{type:gs[n]}:Vr},zg=(t,e)=>{if(Kg){const n=qg(t);return el(n,e)}else return{base64:!0,data:t}},el=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},tl="",Gg=(t,e)=>{const n=t.length,s=new Array(n);let r=0;t.forEach((i,o)=>{Si(i,!1,a=>{s[o]=a,++r===n&&e(s.join(tl))})})},Jg=(t,e)=>{const n=t.split(tl),s=[];for(let r=0;r<n.length;r++){const i=Ci(n[r],e);if(s.push(i),i.type==="error")break}return s};function Yg(){return new TransformStream({transform(t,e){jg(t,n=>{const s=n.length;let r;if(s<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,s);else if(s<65536){r=new Uint8Array(3);const i=new DataView(r.buffer);i.setUint8(0,126),i.setUint16(1,s)}else{r=new Uint8Array(9);const i=new DataView(r.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(s))}t.data&&typeof t.data!="string"&&(r[0]|=128),e.enqueue(r),e.enqueue(n)})}})}let mr;function os(t){return t.reduce((e,n)=>e+n.length,0)}function as(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let s=0;for(let r=0;r<e;r++)n[r]=t[0][s++],s===t[0].length&&(t.shift(),s=0);return t.length&&s<t[0].length&&(t[0]=t[0].slice(s)),n}function Xg(t,e){mr||(mr=new TextDecoder);const n=[];let s=0,r=-1,i=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(s===0){if(os(n)<1)break;const c=as(n,1);i=(c[0]&128)===128,r=c[0]&127,r<126?s=3:r===126?s=1:s=2}else if(s===1){if(os(n)<2)break;const c=as(n,2);r=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),s=3}else if(s===2){if(os(n)<8)break;const c=as(n,8),l=new DataView(c.buffer,c.byteOffset,c.length),u=l.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(Vr);break}r=u*Math.pow(2,32)+l.getUint32(4),s=3}else{if(os(n)<r)break;const c=as(n,r);a.enqueue(Ci(i?c:mr.decode(c),e)),s=0}if(r===0||r>t){a.enqueue(Vr);break}}}})}const nl=4;function oe(t){if(t)return Qg(t)}function Qg(t){for(var e in oe.prototype)t[e]=oe.prototype[e];return t}oe.prototype.on=oe.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};oe.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};oe.prototype.off=oe.prototype.removeListener=oe.prototype.removeAllListeners=oe.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var s,r=0;r<n.length;r++)if(s=n[r],s===e||s.fn===e){n.splice(r,1);break}return n.length===0&&delete this._callbacks["$"+t],this};oe.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(n){n=n.slice(0);for(var s=0,r=n.length;s<r;++s)n[s].apply(this,e)}return this};oe.prototype.emitReserved=oe.prototype.emit;oe.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};oe.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Gs=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0),Ae=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Zg="arraybuffer";function sl(t,...e){return e.reduce((n,s)=>(t.hasOwnProperty(s)&&(n[s]=t[s]),n),{})}const em=Ae.setTimeout,tm=Ae.clearTimeout;function Js(t,e){e.useNativeTimers?(t.setTimeoutFn=em.bind(Ae),t.clearTimeoutFn=tm.bind(Ae)):(t.setTimeoutFn=Ae.setTimeout.bind(Ae),t.clearTimeoutFn=Ae.clearTimeout.bind(Ae))}const nm=1.33;function sm(t){return typeof t=="string"?rm(t):Math.ceil((t.byteLength||t.size)*nm)}function rm(t){let e=0,n=0;for(let s=0,r=t.length;s<r;s++)e=t.charCodeAt(s),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(s++,n+=4);return n}function rl(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function im(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function om(t){let e={},n=t.split("&");for(let s=0,r=n.length;s<r;s++){let i=n[s].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}class am extends Error{constructor(e,n,s){super(e),this.description=n,this.context=s,this.type="TransportError"}}class Ai extends oe{constructor(e){super(),this.writable=!1,Js(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,s){return super.emitReserved("error",new am(e,n,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Ci(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=im(e);return n.length?"?"+n:""}}class cm extends Ai{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let s=0;this._polling&&(s++,this.once("pollComplete",function(){--s||n()})),this.writable||(s++,this.once("drain",function(){--s||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};Jg(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Gg(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=rl()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let il=!1;try{il=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const lm=il;function um(){}class fm extends cm{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let s=location.port;s||(s=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}}doWrite(e,n){const s=this.request({method:"POST",data:e});s.on("success",n),s.on("error",(r,i)=>{this.onError("xhr post error",r,i)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,s)=>{this.onError("xhr poll error",n,s)}),this.pollXhr=e}}class Je extends oe{constructor(e,n,s){super(),this.createRequest=e,Js(this,s),this._opts=s,this._method=s.method||"GET",this._uri=n,this._data=s.data!==void 0?s.data:null,this._create()}_create(){var e;const n=sl(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const s=this._xhr=this.createRequest(n);try{s.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let r in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(r)&&s.setRequestHeader(r,this._opts.extraHeaders[r])}}catch{}if(this._method==="POST")try{s.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{s.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(s),"withCredentials"in s&&(s.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(s.timeout=this._opts.requestTimeout),s.onreadystatechange=()=>{var r;s.readyState===3&&((r=this._opts.cookieJar)===null||r===void 0||r.parseCookies(s.getResponseHeader("set-cookie"))),s.readyState===4&&(s.status===200||s.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof s.status=="number"?s.status:0)},0))},s.send(this._data)}catch(r){this.setTimeoutFn(()=>{this._onError(r)},0);return}typeof document<"u"&&(this._index=Je.requestsCount++,Je.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=um,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Je.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Je.requestsCount=0;Je.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Go);else if(typeof addEventListener=="function"){const t="onpagehide"in Ae?"pagehide":"unload";addEventListener(t,Go,!1)}}function Go(){for(let t in Je.requests)Je.requests.hasOwnProperty(t)&&Je.requests[t].abort()}const hm=(function(){const t=ol({xdomain:!1});return t&&t.responseType!==null})();class dm extends fm{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=hm&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Je(ol,this.uri(),e)}}function ol(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||lm))return new XMLHttpRequest}catch{}if(!e)try{return new Ae[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const al=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class pm extends Ai{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,s=al?{}:sl(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,s)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const s=e[n],r=n===e.length-1;Si(s,this.supportsBinary,i=>{try{this.doWrite(s,i)}catch{}r&&Gs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=rl()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const _r=Ae.WebSocket||Ae.MozWebSocket;class gm extends pm{createSocket(e,n,s){return al?new _r(e,n,s):n?new _r(e,n):new _r(e)}doWrite(e,n){this.ws.send(n)}}class mm extends Ai{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Xg(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=e.readable.pipeThrough(n).getReader(),r=Yg();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const i=()=>{s.read().then(({done:a,value:c})=>{a||(this.onPacket(c),i())}).catch(a=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const s=e[n],r=n===e.length-1;this._writer.write(s).then(()=>{r&&Gs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const _m={websocket:gm,webtransport:mm,polling:dm},ym=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,vm=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Wr(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),s=t.indexOf("]");n!=-1&&s!=-1&&(t=t.substring(0,n)+t.substring(n,s).replace(/:/g,";")+t.substring(s,t.length));let r=ym.exec(t||""),i={},o=14;for(;o--;)i[vm[o]]=r[o]||"";return n!=-1&&s!=-1&&(i.source=e,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=bm(i,i.path),i.queryKey=wm(i,i.query),i}function bm(t,e){const n=/\/{2,9}/g,s=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&s.splice(0,1),e.slice(-1)=="/"&&s.splice(s.length-1,1),s}function wm(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,r,i){r&&(n[r]=i)}),n}const jr=typeof addEventListener=="function"&&typeof removeEventListener=="function",ms=[];jr&&addEventListener("offline",()=>{ms.forEach(t=>t())},!1);class Ct extends oe{constructor(e,n){if(super(),this.binaryType=Zg,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const s=Wr(e);n.hostname=s.host,n.secure=s.protocol==="https"||s.protocol==="wss",n.port=s.port,s.query&&(n.query=s.query)}else n.host&&(n.hostname=Wr(n.host).host);Js(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(s=>{const r=s.prototype.name;this.transports.push(r),this._transportsByName[r]=s}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=om(this.opts.query)),jr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ms.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=nl,n.transport=e,this.id&&(n.sid=this.id);const s=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](s)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Ct.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",Ct.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let s=0;s<this.writeBuffer.length;s++){const r=this.writeBuffer[s].data;if(r&&(n+=sm(r)),s>0&&n>this._maxPayload)return this.writeBuffer.slice(0,s);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Gs(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,s){return this._sendPacket("message",e,n,s),this}send(e,n,s){return this._sendPacket("message",e,n,s),this}_sendPacket(e,n,s,r){if(typeof n=="function"&&(r=n,n=void 0),typeof s=="function"&&(r=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const i={type:e,data:n,options:s};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},s=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():e()}):this.upgrading?s():e()),this}_onError(e){if(Ct.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),jr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const s=ms.indexOf(this._offlineEventListener);s!==-1&&ms.splice(s,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}Ct.protocol=nl;class Em extends Ct{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),s=!1;Ct.priorWebsocketSuccess=!1;const r=()=>{s||(n.send([{type:"ping",data:"probe"}]),n.once("packet",d=>{if(!s)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Ct.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(u(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=n.name,this.emitReserved("upgradeError",p)}}))};function i(){s||(s=!0,u(),n.close(),n=null)}const o=d=>{const p=new Error("probe error: "+d);p.transport=n.name,i(),this.emitReserved("upgradeError",p)};function a(){o("transport closed")}function c(){o("socket closed")}function l(d){n&&d.name!==n.name&&i()}const u=()=>{n.removeListener("open",r),n.removeListener("error",o),n.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};n.once("open",r),n.once("error",o),n.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{s||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let s=0;s<e.length;s++)~this.transports.indexOf(e[s])&&n.push(e[s]);return n}}let Im=class extends Em{constructor(e,n={}){const s=typeof e=="object"?e:n;(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(r=>_m[r]).filter(r=>!!r)),super(e,s)}};function Tm(t,e="",n){let s=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),s=Wr(t)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const i=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+i+":"+s.port+e,s.href=s.protocol+"://"+i+(n&&n.port===s.port?"":":"+s.port),s}const Sm=typeof ArrayBuffer=="function",Cm=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,cl=Object.prototype.toString,Am=typeof Blob=="function"||typeof Blob<"u"&&cl.call(Blob)==="[object BlobConstructor]",Rm=typeof File=="function"||typeof File<"u"&&cl.call(File)==="[object FileConstructor]";function Ri(t){return Sm&&(t instanceof ArrayBuffer||Cm(t))||Am&&t instanceof Blob||Rm&&t instanceof File}function _s(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,s=t.length;n<s;n++)if(_s(t[n]))return!0;return!1}if(Ri(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return _s(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&_s(t[n]))return!0;return!1}function km(t){const e=[],n=t.data,s=t;return s.data=qr(n,e),s.attachments=e.length,{packet:s,buffers:e}}function qr(t,e){if(!t)return t;if(Ri(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let s=0;s<t.length;s++)n[s]=qr(t[s],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=qr(t[s],e));return n}return t}function Om(t,e){return t.data=Kr(t.data,e),delete t.attachments,t}function Kr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Kr(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Kr(t[n],e));return t}const Pm=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var H;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(H||(H={}));class Nm{constructor(e){this.replacer=e}encode(e){return(e.type===H.EVENT||e.type===H.ACK)&&_s(e)?this.encodeAsBinary({type:e.type===H.EVENT?H.BINARY_EVENT:H.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===H.BINARY_EVENT||e.type===H.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=km(e),s=this.encodeAsString(n.packet),r=n.buffers;return r.unshift(s),r}}class ki extends oe{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const s=n.type===H.BINARY_EVENT;s||n.type===H.BINARY_ACK?(n.type=s?H.EVENT:H.ACK,this.reconstructor=new xm(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Ri(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const s={type:Number(e.charAt(0))};if(H[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===H.BINARY_EVENT||s.type===H.BINARY_ACK){const i=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(i,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!Dm(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");s.attachments=a}if(e.charAt(n+1)==="/"){const i=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););s.nsp=e.substring(i,n)}else s.nsp="/";const r=e.charAt(n+1);if(r!==""&&Number(r)==r){const i=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}s.id=Number(e.substring(i,n+1))}if(e.charAt(++n)){const i=this.tryParse(e.substr(n));if(ki.isPayloadValid(s.type,i))s.data=i;else throw new Error("invalid payload")}return s}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case H.CONNECT:return Jo(n);case H.DISCONNECT:return n===void 0;case H.CONNECT_ERROR:return typeof n=="string"||Jo(n);case H.EVENT:case H.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&Pm.indexOf(n[0])===-1);case H.ACK:case H.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class xm{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=Om(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Dm=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Jo(t){return Object.prototype.toString.call(t)==="[object Object]"}const Lm=Object.freeze(Object.defineProperty({__proto__:null,Decoder:ki,Encoder:Nm,get PacketType(){return H}},Symbol.toStringTag,{value:"Module"}));function Ne(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const Mm=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ll extends oe{constructor(e,n,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Ne(e,"open",this.onopen.bind(this)),Ne(e,"packet",this.onpacket.bind(this)),Ne(e,"error",this.onerror.bind(this)),Ne(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var s,r,i;if(Mm.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:H.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const u=this.ids++,d=n.pop();this._registerAckCallback(u,d),o.id=u}const a=(r=(s=this.io.engine)===null||s===void 0?void 0:s.transport)===null||r===void 0?void 0:r.writable,c=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var s;const r=(s=this.flags.timeout)!==null&&s!==void 0?s:this._opts.ackTimeout;if(r===void 0){this.acks[e]=n;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},r),o=(...a)=>{this.io.clearTimeoutFn(i),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((s,r)=>{const i=(o,a)=>o?r(o):s(a);i.withError=!0,n.push(i),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((r,...i)=>(this._queue[0],r!==null?s.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(r)):(this._queue.shift(),n&&n(null,...i)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:H.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(s=>String(s.id)===e)){const s=this.acks[e];delete this.acks[e],s.withError&&s.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case H.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case H.EVENT:case H.BINARY_EVENT:this.onevent(e);break;case H.ACK:case H.BINARY_ACK:this.onack(e);break;case H.DISCONNECT:this.ondisconnect();break;case H.CONNECT_ERROR:this.destroy();const s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const s of n)s.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let s=!1;return function(...r){s||(s=!0,n.packet({type:H.ACK,id:e,data:r}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:H.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let s=0;s<n.length;s++)if(e===n[s])return n.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let s=0;s<n.length;s++)if(e===n[s])return n.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const s of n)s.apply(this,e.data)}}}function fn(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}fn.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};fn.prototype.reset=function(){this.attempts=0};fn.prototype.setMin=function(t){this.ms=t};fn.prototype.setMax=function(t){this.max=t};fn.prototype.setJitter=function(t){this.jitter=t};class zr extends oe{constructor(e,n){var s;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Js(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((s=n.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new fn({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const r=n.parser||Lm;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Im(this.uri,this.opts);const n=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const r=Ne(n,"open",function(){s.onopen(),e&&e()}),i=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Ne(n,"error",i);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{r(),i(new Error("timeout")),n.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(r),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Ne(e,"ping",this.onping.bind(this)),Ne(e,"data",this.ondata.bind(this)),Ne(e,"error",this.onerror.bind(this)),Ne(e,"close",this.onclose.bind(this)),Ne(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){Gs(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let s=this.nsps[e];return s?this._autoConnect&&!s.active&&s.connect():(s=new ll(this,e,n),this.nsps[e]=s),s}_destroy(e){const n=Object.keys(this.nsps);for(const s of n)if(this.nsps[s].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let s=0;s<n.length;s++)this.engine.write(n[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var s;this.cleanup(),(s=this.engine)===null||s===void 0||s.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},n);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const _n={};function ys(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=Tm(t,e.path||"/socket.io"),s=n.source,r=n.id,i=n.path,o=_n[r]&&i in _n[r].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let c;return a?c=new zr(s,e):(_n[r]||(_n[r]=new zr(s,e)),c=_n[r]),n.query&&!e.query&&(e.query=n.queryKey),c.socket(n.path,e)}Object.assign(ys,{Manager:zr,Socket:ll,io:ys,connect:ys});const yr="https://whatsapp-clone-production-65fc.up.railway.app",Um=ys(yr.startsWith("http")?yr:`https://${yr}`,{transports:["websocket","polling"]}),Bm={id:"login-container"},Fm={key:0,id:"login-form"},$m={class:"auth-tabs"},Hm=["disabled"],Vm={key:0},Wm={key:1},jm=["disabled"],qm={key:0},Km={key:1},zm={class:"email-mode-toggle"},Gm=["disabled"],Jm={key:0},Ym={key:1},Xm={key:3,class:"error-msg"},Qm={class:"user-preview"},Zm=["src"],e_={key:1,class:"avatar-placeholder"},t_={class:"avatar-section"},n_={class:"avatar-actions"},s_={key:0},r_={class:"avatars"},i_=["value"],o_={__name:"LoginView",emits:["login"],setup(t,{emit:e}){const n=e,s=ae("auth"),r=ae(null),i=ae(""),o=ae("👨‍💻"),a=["👨‍💻","👩‍💻","🤖","👻","🦊"],c=ae(null),l=nc(()=>{var F,R;return((F=o.value)==null?void 0:F.startsWith("data:"))||((R=o.value)==null?void 0:R.startsWith("http"))}),u=ae("google"),d=ae("login"),p=ae(""),w=ae(""),D=ae(""),S=ae(!1),A=ae("");async function B(){S.value=!0,A.value="";try{const{user:F}=await Uo(wt,Wg);r.value=F;const R=localStorage.getItem(`user_${F.uid}`);if(R){const se=JSON.parse(R);i.value=se.status||"",o.value=se.avatar||F.photoURL||"👨‍💻"}else o.value=F.photoURL||"👨‍💻";s.value="profile"}catch(F){F.code!=="auth/popup-closed-by-user"&&(A.value="Error al iniciar sesión con Facebook. Inténtalo de nuevo.")}finally{S.value=!1}}async function C(){S.value=!0,A.value="";try{const{user:F}=await Uo(wt,Vg);r.value=F;const R=localStorage.getItem(`user_${F.uid}`);if(R){const se=JSON.parse(R);i.value=se.status||"",o.value=se.avatar||F.photoURL||"👨‍💻"}else o.value=F.photoURL||"👨‍💻";s.value="profile"}catch(F){F.code!=="auth/popup-closed-by-user"&&(A.value="Error al iniciar sesión. Inténtalo de nuevo.")}finally{S.value=!1}}async function $(){S.value=!0,A.value="";try{if(d.value==="register"){const{user:R}=await bp(wt,p.value,w.value);await Ip(R,{displayName:D.value.trim()}),await R.reload(),r.value=wt.currentUser}else{const{user:R}=await wp(wt,p.value,w.value);r.value=R}o.value=r.value.photoURL||"👨‍💻";const F=localStorage.getItem(`user_${r.value.uid}`);if(F){const R=JSON.parse(F);i.value=R.status||"",o.value=R.avatar||r.value.photoURL||"👨‍💻"}s.value="profile"}catch(F){A.value=O(F.code)}finally{S.value=!1}}function O(F){return{"auth/email-already-in-use":"Este correo ya está registrado.","auth/invalid-email":"Correo electrónico no válido.","auth/weak-password":"La contraseña debe tener al menos 6 caracteres.","auth/user-not-found":"No existe una cuenta con este correo.","auth/wrong-password":"Contraseña incorrecta.","auth/invalid-credential":"Correo o contraseña incorrectos.","auth/operation-not-allowed":"El acceso con email no está habilitado en Firebase.","auth/too-many-requests":"Demasiados intentos. Espera un momento."}[F]||`Error (${F}). Inténtalo de nuevo.`}async function ne(){await Fc(wt),r.value=null,s.value="auth",p.value="",w.value="",D.value="",o.value="👨‍💻",A.value=""}function we(){c.value&&c.value.click()}async function ge(F){const R=F.target.files?F.target.files[0]:void 0;if(R){const se=new Image;se.src=URL.createObjectURL(R),await new Promise(z=>{se.onload=z});const Ce=80,J=document.createElement("canvas");J.width=Ce,J.height=Ce;const Pt=J.getContext("2d"),Nt=Math.min(se.width,se.height),ce=(se.width-Nt)/2,te=(se.height-Nt)/2;Pt.drawImage(se,ce,te,Nt,Nt,0,0,Ce,Ce),URL.revokeObjectURL(se.src),o.value=J.toDataURL("image/jpeg",.75),F.target.value=""}}function Se(){n("login",{name:r.value.displayName||r.value.email,status:i.value.trim(),avatar:o.value,uid:r.value.uid})}return(F,R)=>{var se,Ce;return V(),j("div",Bm,[s.value==="auth"?(V(),j("div",Fm,[R[11]||(R[11]=N("h2",null,"WhatsApp Clone",-1)),R[12]||(R[12]=N("p",{class:"login-subtitle"},"Inicia sesión para continuar",-1)),N("div",$m,[N("button",{type:"button",class:st(["tab-btn",{active:u.value==="google"}]),onClick:R[0]||(R[0]=J=>{u.value="google",A.value=""})},"Google",2),N("button",{type:"button",class:st(["tab-btn",{active:u.value==="facebook"}]),onClick:R[1]||(R[1]=J=>{u.value="facebook",A.value=""})},"Facebook",2),N("button",{type:"button",class:st(["tab-btn",{active:u.value==="email"}]),onClick:R[2]||(R[2]=J=>{u.value="email",A.value=""})},"Email",2)]),u.value==="google"?(V(),j("button",{key:0,onClick:C,disabled:S.value,class:"google-btn"},[S.value?(V(),j("span",Vm,"Cargando...")):(V(),j("span",Wm,"Iniciar sesión con Google"))],8,Hm)):u.value==="facebook"?(V(),j("button",{key:1,onClick:B,disabled:S.value,class:"facebook-btn"},[S.value?(V(),j("span",qm,"Cargando...")):(V(),j("span",Km,"Iniciar sesión con Facebook"))],8,jm)):(V(),j(fe,{key:2},[N("div",zm,[N("button",{type:"button",class:st({active:d.value==="login"}),onClick:R[3]||(R[3]=J=>{d.value="login",A.value=""})},"Iniciar sesión",2),N("button",{type:"button",class:st({active:d.value==="register"}),onClick:R[4]||(R[4]=J=>{d.value="register",A.value=""})},"Crear cuenta",2)]),N("form",{onSubmit:Nr($,["prevent"])},[d.value==="register"?Gt((V(),j("input",{key:0,"onUpdate:modelValue":R[5]||(R[5]=J=>D.value=J),type:"text",placeholder:"Tu nombre",autocomplete:"name",required:""},null,512)),[[bn,D.value]]):rs("",!0),Gt(N("input",{"onUpdate:modelValue":R[6]||(R[6]=J=>p.value=J),type:"email",placeholder:"Correo electrónico",autocomplete:"email",required:""},null,512),[[bn,p.value]]),Gt(N("input",{"onUpdate:modelValue":R[7]||(R[7]=J=>w.value=J),type:"password",placeholder:"Contraseña (mín. 6 caracteres)",autocomplete:"current-password",required:"",minlength:"6"},null,512),[[bn,w.value]]),N("button",{type:"submit",disabled:S.value,class:"submit-btn"},[S.value?(V(),j("span",Jm,"Cargando...")):(V(),j("span",Ym,_e(d.value==="register"?"Crear cuenta":"Entrar"),1))],8,Gm)],32)],64)),A.value?(V(),j("p",Xm,_e(A.value),1)):rs("",!0)])):(V(),j("form",{key:1,id:"login-form",onSubmit:Nr(Se,["prevent"])},[N("div",Qm,[l.value?(V(),j("img",{key:0,src:o.value,class:"google-avatar",alt:"avatar"},null,8,Zm)):(V(),j("div",e_,_e(o.value),1)),N("strong",null,_e(((se=r.value)==null?void 0:se.displayName)||((Ce=r.value)==null?void 0:Ce.email)),1),N("button",{type:"button",class:"change-account-btn",onClick:ne},"↩ Cambiar")]),Gt(N("input",{"onUpdate:modelValue":R[8]||(R[8]=J=>i.value=J),type:"text",placeholder:"Tu estado (ej: Disponible)",required:""},null,512),[[bn,i.value]]),N("div",t_,[N("div",n_,[N("input",{type:"file",ref_key:"inputArchivo",ref:c,accept:"image/*",onChange:ge,style:{display:"none"}},null,544),N("button",{type:"button",class:"avatar-upload-btn",onClick:we},"📷 Subir foto"),l.value?(V(),j("button",{key:0,type:"button",class:"avatar-clear-btn",onClick:R[9]||(R[9]=J=>o.value="👨‍💻")},"✕ Quitar")):rs("",!0)]),l.value?rs("",!0):(V(),j("div",s_,[R[13]||(R[13]=N("p",null,"O elige un emoji:",-1)),N("div",r_,[(V(),j(fe,null,Tr(a,J=>N("label",{key:J},[Gt(N("input",{type:"radio",name:"avatar",value:J,"onUpdate:modelValue":R[10]||(R[10]=Pt=>o.value=Pt)},null,8,i_),[[Of,o.value]]),Pn(" "+_e(J),1)])),64))])]))]),R[14]||(R[14]=N("button",{type:"submit",class:"submit-btn"},"Entrar al Chat",-1))],32))])}}},a_={id:"app-container"},c_={id:"sidebar"},l_={id:"listausuarios"},u_={class:"user-list-avatar"},f_=["src"],h_={class:"user-list-info"},d_={id:"chat-container"},p_={id:"messages"},g_={class:"avatar"},m_=["src"],__={class:"msg-content"},y_={class:"msg-header"},v_={class:"msg-text"},b_={id:"escribiendo"},w_={__name:"ChatView",props:["socket","currentUser"],emits:["logout"],setup(t,{emit:e}){const n=t,s=e;async function r(){n.socket.emit("leave"),await Fc(wt),s("logout")}const i=ae([]),o=ae([]),a=ae(""),c=ae(""),l=new Set;let u=null;function d(){l.size===0?c.value="":l.size===1?c.value=`${Array.from(l)[0]} está escribiendo...`:c.value="Varios usuarios están escribiendo..."}function p(){Ia(()=>{window.scrollTo(0,document.body.scrollHeight)})}function w(){n.socket.emit("escribiendo",!0),clearTimeout(u),u=setTimeout(()=>{n.socket.emit("escribiendo",!1)},1500)}function D(){a.value&&n.currentUser&&(n.socket.emit("chat message",a.value),n.socket.emit("escribiendo",!1),a.value="")}function S(A){return(A==null?void 0:A.startsWith("data:"))||(A==null?void 0:A.startsWith("http"))}return xa(()=>{n.socket.emit("join",n.currentUser),n.socket.on("connect",()=>{n.socket.emit("join",n.currentUser)}),n.socket.on("cargar mensajes",A=>{i.value=A,p()}),n.socket.on("actualizar usuarios",A=>{o.value=A}),n.socket.on("usuario escribiendo",A=>{A.estado?l.add(A.user.name):l.delete(A.user.name),d()}),n.socket.on("chat message",A=>{i.value.push(A),p()})}),$s(()=>{clearTimeout(u),n.socket.emit("escribiendo",!1);for(const A of["connect","cargar mensajes","actualizar usuarios","usuario escribiendo","chat message"])n.socket.off(A)}),(A,B)=>(V(),j("div",a_,[N("div",c_,[N("div",{class:"sidebar-header"},[B[1]||(B[1]=N("h3",null,"Usuarios Conectados",-1)),N("button",{onClick:r,class:"signout-btn"},"Salir ↩")]),N("ul",l_,[(V(!0),j(fe,null,Tr(o.value,C=>(V(),j("li",{key:C.id},[N("span",u_,[S(C.avatar)?(V(),j("img",{key:0,src:C.avatar,class:"sidebar-avatar-img",alt:""},null,8,f_)):(V(),j(fe,{key:1},[Pn(_e(C.avatar),1)],64))]),N("div",h_,[N("strong",null,_e(C.name),1),N("span",null,_e(C.status),1)])]))),128))])]),N("div",d_,[N("ul",p_,[(V(!0),j(fe,null,Tr(i.value,(C,$)=>(V(),j("li",{key:$,class:st({"system-msg":C.system,"my-message":!C.system&&t.currentUser&&C.user.name===t.currentUser.name})},[C.system?(V(),j(fe,{key:0},[Pn(_e(C.text),1)],64)):(V(),j(fe,{key:1},[N("div",g_,[S(C.user.avatar)?(V(),j("img",{key:0,src:C.user.avatar,class:"avatar-img",alt:""},null,8,m_)):(V(),j(fe,{key:1},[Pn(_e(C.user.avatar),1)],64))]),N("div",__,[N("div",y_,[N("strong",null,_e(C.user.name),1),N("span",null,_e(C.user.status),1)]),N("div",v_,_e(C.text),1)])],64))],2))),128))]),N("div",b_,_e(c.value),1),N("form",{id:"form",onSubmit:Nr(D,["prevent"])},[Gt(N("input",{id:"input","onUpdate:modelValue":B[0]||(B[0]=C=>a.value=C),placeholder:"Escribe un mensaje...",onInput:w},null,544),[[bn,a.value]]),B[2]||(B[2]=N("button",{type:"submit"},"Enviar",-1))],32)])]))}},E_={key:0,class:"app-loading"},I_={__name:"App",setup(t){const e=ae(null),n=ae(!0),s=Cp(wt,o=>{if(n.value){if(o){const a=localStorage.getItem(`user_${o.uid}`);if(a)try{e.value=JSON.parse(a)}catch{e.value=null}else e.value=null}else e.value=null;n.value=!1}});$s(s);function r(o){e.value=o,localStorage.setItem(`user_${o.uid}`,JSON.stringify(o))}function i(){var o;(o=e.value)!=null&&o.uid&&localStorage.removeItem(`user_${e.value.uid}`),e.value=null}return(o,a)=>n.value?(V(),j("div",E_,"Cargando...")):e.value?(V(),kr(w_,{key:2,socket:ba(Um),"current-user":e.value,onLogout:i},null,8,["socket","current-user"])):(V(),kr(o_,{key:1,onLogin:r}))}};Mf(I_).mount("#app");
